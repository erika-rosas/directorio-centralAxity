var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import styles from "./PruebasDirectorio.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
var PruebasDirectorio = /** @class */ (function (_super) {
    __extends(PruebasDirectorio, _super);
    function PruebasDirectorio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PruebasDirectorio.prototype.render = function () {
        console.log(this.props.listItems);
        return (React.createElement("div", null,
            React.createElement("div", { id: "carouselExample", className: "carousel slide" },
                React.createElement("div", { className: "carousel-inner" }, this.props.listItems.map(function (list, index) { return (React.createElement("div", { className: "carousel-item ".concat(index === 0 ? "active" : ""), key: index },
                    React.createElement("div", { className: "row" }, list !== undefined
                        ? list.map(function (item) { return (React.createElement("div", { className: "col-md-4 mb-3", key: item.id },
                            React.createElement("div", { className: "card border-5 ".concat(styles.card_user) },
                                React.createElement("div", { className: "".concat(styles.container_image) },
                                    React.createElement("img", { className: styles.image_user, alt: "100%x280", src: "https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d" })),
                                React.createElement("div", { className: "card-body ".concat(styles.font, " text-center") },
                                    React.createElement("h4", { className: styles.name },
                                        item.Title,
                                        " ",
                                        item.lastName),
                                    React.createElement("p", { className: styles.job }, item.job),
                                    React.createElement("p", { className: styles.area }, item.area),
                                    React.createElement("p", { className: styles.email }, item.email))))); })
                        : ""))); })),
                React.createElement("button", { className: "carousel-control-prev", type: "button", "data-bs-target": "#carouselExample", "data-bs-slide": "prev" },
                    React.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
                    React.createElement("span", { className: "visually-hidden" }, "Previous")),
                React.createElement("button", { className: "carousel-control-next", type: "button", "data-bs-target": "#carouselExample", "data-bs-slide": "next" },
                    React.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
                    React.createElement("span", { className: "visually-hidden" }, "Next")))));
    };
    return PruebasDirectorio;
}(React.Component));
export default PruebasDirectorio;
//# sourceMappingURL=PruebasDirectorio.js.map