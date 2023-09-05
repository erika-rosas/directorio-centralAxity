import * as React from "react";
import { IPruebasDirectorioProps } from "./IPruebasDirectorioProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
interface IPruebasDirectorioState {
    search: string;
    listView: any[];
    width: number;
}
interface IConfigDivisor {
    min: number;
    max: number;
    divisor: number;
}
export default class PruebasDirectorio extends React.Component<IPruebasDirectorioProps, IPruebasDirectorioState, {}> {
    listOrigin: any;
    divisorColorRange: IConfigDivisor[];
    constructor(props: IPruebasDirectorioProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
    getFilterSearch: () => void;
    getSetListState: (listNew: any[]) => void;
    getFilterReset: () => void;
    successScreenSize(widthDisplay: number): boolean;
    generateDivisorCard: (display: number) => number;
    getPartitionList(list: any[], widthDisplay: number): any;
    render(): React.ReactElement<IPruebasDirectorioProps>;
}
export {};
//# sourceMappingURL=PruebasDirectorio.d.ts.map