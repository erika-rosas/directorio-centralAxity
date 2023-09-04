import * as React from "react";
import styles from "./PruebasDirectorio.module.scss";
import { IPruebasDirectorioProps } from "./IPruebasDirectorioProps";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

interface IPruebasDirectorioState {
  search: string;
  area: string;
}
export default class PruebasDirectorio extends React.Component<
  IPruebasDirectorioProps,
  IPruebasDirectorioState,
  {}
> {
  listOrigin: any = [];
  listView: any = [];
  constructor(props: IPruebasDirectorioProps) {
    super(props);
    this.state = {
      search: "",
      area: "",
    };
    this.listOrigin = [...this.props.listItems];
    this.listView = this.getPartitionList([...this.props.listItems]);
  }

  handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };
  getSearch = () => {
    const newList = this.listOrigin.filter(
      (list: any) => list.area === "area 3"
    );
    // const newList = this.listOrigin.filter((list: any) => {
    //   return (
    //     list.Title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
    //   );
    // });
    // console.log("newList", newList);

    this.listView = this.getPartitionList([...newList]);
    console.log("empece a buscar", this.listView);
    this.render();
  };

  getPartitionList(list: any[]): any {
    const partitionList: any = [];
    list.map((item, index) => {
      if (index % 3 === 0) {
        const maxLenght = index + 3 < list.length ? index + 3 : list.length;
        console.log(maxLenght, index);
        console.log("max", list.length);
        const newList = list.slice(index, maxLenght);
        console.log(newList);
        partitionList.push(newList);
      }
    });
    return partitionList;
  }
  public render(): React.ReactElement<IPruebasDirectorioProps> {
    // const listOrigin = [...this.props.listItems];
    // console.log(this.props.listItems);
    return (
      <div>
        <div className={`${styles.content_filter} row p-3`}>
          <div className={`col-lg-5`}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar"
                aria-label="Buscar"
                aria-describedby="Buscar"
                value={this.state.search}
                onChange={(event) => this.handleChange(event, "search")}
              />
              <span
                className="input-group-text"
                id="basic-addon2"
                onClick={this.getSearch}
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
          <div className={`col-lg-4`}>
            <select
              className="form-select"
              aria-label="Default select example"
              value={this.state.area}
              onChange={(event) => this.handleChange(event, "area")}
            >
              <option selected>Selecciona una área</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {this.listView.map((list: any, index: number) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row">
                  {list !== undefined
                    ? list.map((item: any) => (
                        <div className="col-md-4 mb-3" key={item.id}>
                          <div
                            className={`border-5 shadow-sm p-2 ${styles.card_user}`}
                          >
                            <div className={`${styles.container_image}`}>
                              <img
                                className={styles.image_user}
                                alt="100%x280"
                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                              />
                            </div>
                            <div
                              className={`${styles.font} ${styles.container_info}  text-center`}
                            >
                              <div
                                className={`${styles.name} ${styles.word_breaker} pb-1`}
                              >
                                <div>
                                  {" "}
                                  {item.Title} {item.lastName}
                                </div>
                              </div>
                              <p className={styles.job}>{item.job}</p>
                              <p className={styles.area}>{item.area}</p>
                              <p className={styles.email}>{item.email}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            ))}
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
