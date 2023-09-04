import * as React from "react";
import { IPruebasDirectorioProps } from "./IPruebasDirectorioProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
interface IPruebasDirectorioState {
    search: string;
    area: string;
}
export default class PruebasDirectorio extends React.Component<IPruebasDirectorioProps, IPruebasDirectorioState, {}> {
    listOrigin: any;
    listView: any;
    constructor(props: IPruebasDirectorioProps);
    handleChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>, name: string) => void;
    getSearch: () => void;
    getPartitionList(list: any[]): any;
    render(): React.ReactElement<IPruebasDirectorioProps>;
}
export {};
//# sourceMappingURL=PruebasDirectorio.d.ts.map