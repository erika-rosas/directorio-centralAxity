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
    const listTitle = "DirectorioConsultoria"; // Reemplaza con el nombre real de la lista
    const dirImgs = "/SiteAssets/imgs/"; // Reemplaza con el nombre real de la lista
    const endpoint = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${listTitle}')/items`;
    const endpointImgs = `${this.context.pageContext.web.absoluteUrl}${dirImgs}`;
    https: const response: SPHttpClientResponse =
      await this.context.spHttpClient.get(
        endpoint,
        SPHttpClient.configurations.v1
      );
    const data = await response.json();
    const listNew = data.value.map((item: any) => ({
      ...item,
      img: `${endpointImgs}${item.Imagen}`,
    }));
    return listNew;
  }

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
