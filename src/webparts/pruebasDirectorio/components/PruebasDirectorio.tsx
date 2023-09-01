import * as React from "react";
import styles from "./PruebasDirectorio.module.scss";
import { IPruebasDirectorioProps } from "./IPruebasDirectorioProps";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default class PruebasDirectorio extends React.Component<IPruebasDirectorioProps, {}> {
  public render(): React.ReactElement<IPruebasDirectorioProps> {
    console.log(this.props.listItems);
    return (
      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {this.props.listItems.map((list, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="row">
                  {list !== undefined
                    ? list.map((item: any) => (
                        <div className="col-md-4 mb-3" key={item.id}>
                          <div className={`card border-5 ${styles.card_user}`}>
                            <div className={`${styles.container_image}`}>
                              <img
                                className={styles.image_user}
                                alt="100%x280"
                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                              />
                            </div>
                            <div className={`card-body ${styles.font} text-center`}>
                              <h4 className={styles.name}>
                                {item.Title} {item.lastName}
                              </h4>

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
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
