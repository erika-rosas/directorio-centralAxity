import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";

import * as strings from "PruebasDirectorioWebPartStrings";
import PruebasDirectorio from "./components/PruebasDirectorio";
import { IPruebasDirectorioProps } from "./components/IPruebasDirectorioProps";

import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";

export interface IPruebasDirectorioWebPartProps {
  description: string;
}

export default class PruebasDirectorioWebPart extends BaseClientSideWebPart<IPruebasDirectorioWebPartProps> {
  private _listItems: any[] = [];
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = "";

  public render(): void {
    const element: React.ReactElement<IPruebasDirectorioProps> =
      React.createElement(PruebasDirectorio, {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        listItems: this._listItems,
      });

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._loadListItems().then((items) => {
      this._listItems = items;
    });
  }

  private async _loadListItems(): Promise<any> {
    const listTitle = "userList"; // Reemplaza con el nombre real de la lista
    const endpoint = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${listTitle}')/items`;

    const response: SPHttpClientResponse = await this.context.spHttpClient.get(
      endpoint,
      SPHttpClient.configurations.v1
    );
    const data = await response.json();
    return data.value;

    // const items: IUser[] = data.value.map((item: IUser) => ({
    //   id: item.id,
    //   Title: item.Title,
    //   job: item.job,
    //   email: item.email,
    //   // Agrega más propiedades según tus necesidades
    // }));
  }

  // private getPartitionList(list: any[]): any {
  //   const partitionList: any = [];
  //   list.map((item, index) => {
  //     if (index % 3 === 0) {
  //       const maxLenght = index + 3 < list.length ? index + 3 : list.length;
  //       console.log(maxLenght, index);
  //       console.log("max", list.length);
  //       const newList = list.slice(index, maxLenght);
  //       console.log(newList);
  //       partitionList.push(newList);
  //     }
  //   });
  //   return partitionList;
  // }

  // private _getEnvironmentMessage(): Promise<string> {
  //   if (!!this.context.sdks.microsoftTeams) {
  //     // running in Teams, office.com or Outlook
  //     return this.context.sdks.microsoftTeams.teamsJs.app.getContext().then((context) => {
  //       let environmentMessage: string = "";
  //       switch (context.app.host.name) {
  //         case "Office": // running in Office
  //           environmentMessage = this.context.isServedFromLocalhost
  //             ? strings.AppLocalEnvironmentOffice
  //             : strings.AppOfficeEnvironment;
  //           break;
  //         case "Outlook": // running in Outlook
  //           environmentMessage = this.context.isServedFromLocalhost
  //             ? strings.AppLocalEnvironmentOutlook
  //             : strings.AppOutlookEnvironment;
  //           break;
  //         case "Teams": // running in Teams
  //           environmentMessage = this.context.isServedFromLocalhost
  //             ? strings.AppLocalEnvironmentTeams
  //             : strings.AppTeamsTabEnvironment;
  //           break;
  //         default:
  //           throw new Error("Unknown host");
  //       }

  //       return environmentMessage;
  //     });
  //   }

  //   return Promise.resolve(
  //     this.context.isServedFromLocalhost
  //       ? strings.AppLocalEnvironmentSharePoint
  //       : strings.AppSharePointEnvironment
  //   );
  // }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const { semanticColors } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty(
        "--bodyText",
        semanticColors.bodyText || null
      );
      this.domElement.style.setProperty("--link", semanticColors.link || null);
      this.domElement.style.setProperty(
        "--linkHovered",
        semanticColors.linkHovered || null
      );
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
