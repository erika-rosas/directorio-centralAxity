import * as React from "react";
import { IPruebasDirectorioProps } from "./IPruebasDirectorioProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
interface IPruebasDirectorioState {
    search: string;
    listView: any[];
}
export default class PruebasDirectorio extends React.Component<IPruebasDirectorioProps, IPruebasDirectorioState, {}> {
    listOrigin: any;
    constructor(props: IPruebasDirectorioProps);
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
    getFilterSearch: () => void;
    getSetListState: (listNew: any[]) => void;
    getFilterReset: () => void;
    getPartitionList(list: any[]): any;
    render(): React.ReactElement<IPruebasDirectorioProps>;
}
export {};
//# sourceMappingURL=PruebasDirectorio.d.ts.map