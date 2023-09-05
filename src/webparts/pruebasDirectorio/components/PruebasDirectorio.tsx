import * as React from "react";
import styles from "./PruebasDirectorio.module.scss";
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

export default class PruebasDirectorio extends React.Component<
  IPruebasDirectorioProps,
  IPruebasDirectorioState,
  {}
> {
  listOrigin: any = [];
  divisorColorRange: IConfigDivisor[] = [
    {
      min: 0,
      max: 576,
      divisor: 1,
    },
    {
      min: 576,
      max: 992,
      divisor: 2,
    },
    {
      min: 992,
      max: 1200,
      divisor: 3,
    },
  ];
  constructor(props: IPruebasDirectorioProps) {
    super(props);
    console.log("lista nueva con imagenes", ...this.props.listItems);
    const listValues = this.getPartitionList(
      [...this.props.listItems],
      window.innerWidth
    );
    this.state = {
      search: "",
      listView: listValues,
      width: window.innerWidth,
    };
    this.listOrigin = [...this.props.listItems];
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.getFilterSearch();
    this.setState({
      width: window.innerWidth,
    });
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
      listView: this.state.listView,
    });
  };

  getFilterSearch = () => {
    const newList = this.listOrigin.filter((list: any) => {
      return (
        list.Title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
      );
    });
    this.getSetListState(newList);
  };

  getSetListState = (listNew: any[]): void => {
    const listValues = this.getPartitionList([...listNew], this.state.width);
    this.setState({
      search: this.state.search,
      listView: listValues,
    });
  };
  getFilterReset = (): void => {
    const listValues = this.getPartitionList(
      [...this.props.listItems],
      this.state.width
    );
    this.setState({
      search: "",
      listView: listValues,
    });
  };
  successScreenSize(widthDisplay: number): boolean {
    return widthDisplay < 768;
  }

  generateDivisorCard = (display: number): number => {
    const options = this.divisorColorRange.filter(
      (option: IConfigDivisor) => display >= option.min && display <= option.max
    );
    return options.length > 0 ? options[0].divisor : 3;
  };

  getPartitionList(list: any[], widthDisplay: number): any {
    const partitionList: any = [];
    const divisor: number = this.generateDivisorCard(widthDisplay);
    list.map((item, index) => {
      if (index % divisor === 0) {
        const maxLenght =
          index + divisor < list.length ? index + divisor : list.length;

        const newList = list.slice(index, maxLenght);
        partitionList.push(newList);
      }
    });
    return partitionList;
  }

  public render(): React.ReactElement<IPruebasDirectorioProps> {
    const { listView } = this.state;
    return (
      <div>
        <div className={`${styles.content_filter} row p-3`}>
          <div className={`col-lg-8 d-flex pb-3`}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar"
                aria-label="Buscar"
                aria-describedby="Buscar"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyUp={this.getFilterSearch}
              />

              <span
                className="input-group-text"
                id="basic-addon2"
                onClick={this.getFilterSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
          </div>
          {this.state.search !== "" ? (
            <div
              className={`${styles.cursor_pointer} col-lg-3 d-flex pt-2 pe-auto`}
            >
              <span onClick={this.getFilterReset}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>{" "}
              <span className={`${styles.legendReset} fw-bold font`}>
                Limpiar filtro
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {listView.length !== 0 ? (
              listView.map((list: any, index: number) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="row">
                    {list !== undefined
                      ? list.map((item: any) => (
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                            key={item.id}
                          >
                            <div
                              className={`border-5 shadow-sm p-2 ${styles.card_user}`}
                            >
                              <div className={`${styles.container_image}`}>
                                <img
                                  className={styles.image_user}
                                  alt={item.Imagen}
                                  src={`${item.img}`}
                                />
                              </div>
                              <div
                                className={`${styles.font} ${styles.container_info}  text-center`}
                              >
                                <div
                                  className={`${styles.name} ${styles.word_breaker} pb-1`}
                                >
                                  <div> {item.Title}</div>
                                </div>
                                <div className={styles.email}>
                                  <a
                                    className={styles.link}
                                    href={`mailto:${item.Correo}`}
                                  >
                                    {item.Correo}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              ))
            ) : (
              <div className={`${styles.content_alert} `}>
                <div>No se encontraron resultados</div>
              </div>
            )}
          </div>
          <div className={`${styles.button_carousel}`}>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
              className="btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
              className="btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
