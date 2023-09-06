import * as React from "react";
import { IPruebasDirectorioProps, IitemDirectory } from "./IPruebasDirectorioProps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
interface IPruebasDirectorioState {
    search: string;
    listView: IitemDirectory[][];
    width: number;
}
interface IConfigDivisor {
    min: number;
    max: number;
    divisor: number;
}
export default class PruebasDirectorio extends React.Component<IPruebasDirectorioProps, IPruebasDirectorioState, {}> {
    listOrigin: IitemDirectory[];
    divisorColorRange: IConfigDivisor[];
    constructor(props: IPruebasDirectorioProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
    getFilterSearch: () => void;
    getSetListState: (listNew: IitemDirectory[]) => void;
    getFilterReset: () => void;
    successScreenSize(widthDisplay: number): boolean;
    generateDivisorCard: (display: number) => number;
    getPartitionList(list: IitemDirectory[], widthDisplay: number): IitemDirectory[][];
    render(): React.ReactElement<IPruebasDirectorioProps>;
}
export {};
//# sourceMappingURL=PruebasDirectorio.d.ts.map