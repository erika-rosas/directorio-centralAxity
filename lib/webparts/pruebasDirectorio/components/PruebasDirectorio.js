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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import styles from "./PruebasDirectorio.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
var PruebasDirectorio = /** @class */ (function (_super) {
    __extends(PruebasDirectorio, _super);
    function PruebasDirectorio(props) {
        var _this = _super.call(this, props) || this;
        _this.listOrigin = [];
        _this.listView = [];
        _this.handleChange = function (event, name) {
            var _a;
            _this.setState(__assign(__assign({}, _this.state), (_a = {}, _a[name] = event.target.value, _a)));
        };
        _this.getSearch = function () {
            var newList = _this.listOrigin.filter(function (list) { return list.area === "area 3"; });
            // const newList = this.listOrigin.filter((list: any) => {
            //   return (
            //     list.Title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            //   );
            // });
            // console.log("newList", newList);
            _this.listView = _this.getPartitionList(__spreadArray([], newList, true));
            console.log("empece a buscar", _this.listView);
            _this.render();
        };
        _this.state = {
            search: "",
            area: "",
        };
        _this.listOrigin = __spreadArray([], _this.props.listItems, true);
        _this.listView = _this.getPartitionList(__spreadArray([], _this.props.listItems, true));
        return _this;
    }
    PruebasDirectorio.prototype.getPartitionList = function (list) {
        var partitionList = [];
        list.map(function (item, index) {
            if (index % 3 === 0) {
                var maxLenght = index + 3 < list.length ? index + 3 : list.length;
                console.log(maxLenght, index);
                console.log("max", list.length);
                var newList = list.slice(index, maxLenght);
                console.log(newList);
                partitionList.push(newList);
            }
        });
        return partitionList;
    };
    PruebasDirectorio.prototype.render = function () {
        var _this = this;
        // const listOrigin = [...this.props.listItems];
        // console.log(this.props.listItems);
        return (React.createElement("div", null,
            React.createElement("div", { className: "".concat(styles.content_filter, " row p-3") },
                React.createElement("div", { className: "col-lg-5" },
                    React.createElement("div", { className: "input-group" },
                        React.createElement("input", { type: "text", className: "form-control", placeholder: "Buscar", "aria-label": "Buscar", "aria-describedby": "Buscar", value: this.state.search, onChange: function (event) { return _this.handleChange(event, "search"); } }),
                        React.createElement("span", { className: "input-group-text", id: "basic-addon2", onClick: this.getSearch },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-search", viewBox: "0 0 16 16" },
                                React.createElement("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }))))),
                React.createElement("div", { className: "col-lg-4" },
                    React.createElement("select", { className: "form-select", "aria-label": "Default select example", value: this.state.area, onChange: function (event) { return _this.handleChange(event, "area"); } },
                        React.createElement("option", { selected: true }, "Selecciona una \u00E1rea"),
                        React.createElement("option", { value: "1" }, "One"),
                        React.createElement("option", { value: "2" }, "Two"),
                        React.createElement("option", { value: "3" }, "Three")))),
            React.createElement("div", { id: "carouselExample", className: "carousel slide" },
                React.createElement("div", { className: "carousel-inner" }, this.listView.map(function (list, index) { return (React.createElement("div", { className: "carousel-item ".concat(index === 0 ? "active" : ""), key: index },
                    React.createElement("div", { className: "row" }, list !== undefined
                        ? list.map(function (item) { return (React.createElement("div", { className: "col-md-4 mb-3", key: item.id },
                            React.createElement("div", { className: "border-5 shadow-sm p-2 ".concat(styles.card_user) },
                                React.createElement("div", { className: "".concat(styles.container_image) },
                                    React.createElement("img", { className: styles.image_user, alt: "100%x280", src: "https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d" })),
                                React.createElement("div", { className: "".concat(styles.font, " ").concat(styles.container_info, "  text-center") },
                                    React.createElement("div", { className: "".concat(styles.name, " ").concat(styles.word_breaker, " pb-1") },
                                        React.createElement("div", null,
                                            " ",
                                            item.Title,
                                            " ",
                                            item.lastName)),
                                    React.createElement("p", { className: styles.job }, item.job),
                                    React.createElement("p", { className: styles.area }, item.area),
                                    React.createElement("p", { className: styles.email }, item.email))))); })
                        : ""))); })),
                React.createElement("div", { className: "".concat(styles.button_carousel) },
                    React.createElement("button", { type: "button", "data-bs-target": "#carouselExample", "data-bs-slide": "prev", className: "btn" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-chevron-left", viewBox: "0 0 16 16" },
                            React.createElement("path", { "fill-rule": "evenodd", d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" }))),
                    React.createElement("button", { type: "button", "data-bs-target": "#carouselExample", "data-bs-slide": "next", className: "btn" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-chevron-right", viewBox: "0 0 16 16" },
                            React.createElement("path", { "fill-rule": "evenodd", d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" })))))));
    };
    return PruebasDirectorio;
}(React.Component));
export default PruebasDirectorio;
//# sourceMappingURL=PruebasDirectorio.js.map