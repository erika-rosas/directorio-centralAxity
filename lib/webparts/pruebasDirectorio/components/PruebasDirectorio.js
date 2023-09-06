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
        _this.divisorColorRange = [
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
        _this.handleResize = function () {
            _this.getFilterSearch();
            _this.setState({
                width: window.innerWidth,
            });
        };
        _this.handleChange = function (event, name) {
            var _a;
            _this.setState(__assign(__assign({}, _this.state), (_a = {}, _a[name] = event.target.value, _a.listView = _this.state.listView, _a)));
        };
        _this.getFilterSearch = function () {
            var newList = _this.listOrigin.filter(function (list) {
                return (list.Title.toLowerCase().indexOf(_this.state.search.toLowerCase()) > -1);
            });
            _this.getSetListState(newList);
        };
        _this.getSetListState = function (listNew) {
            var listValues = _this.getPartitionList(__spreadArray([], listNew, true), _this.state.width);
            _this.setState({
                search: _this.state.search,
                listView: listValues,
            });
        };
        _this.getFilterReset = function () {
            var listValues = _this.getPartitionList(__spreadArray([], _this.props.listItems, true), _this.state.width);
            _this.setState({
                search: "",
                listView: listValues,
            });
        };
        _this.generateDivisorCard = function (display) {
            var options = _this.divisorColorRange.filter(function (option) { return display >= option.min && display <= option.max; });
            return options.length > 0 ? options[0].divisor : 3;
        };
        var listValues = _this.getPartitionList(__spreadArray([], _this.props.listItems, true), window.innerWidth);
        _this.state = {
            search: "",
            listView: listValues,
            width: window.innerWidth,
        };
        _this.listOrigin = __spreadArray([], _this.props.listItems, true);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    PruebasDirectorio.prototype.componentDidMount = function () {
        window.addEventListener("resize", this.handleResize);
    };
    PruebasDirectorio.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.handleResize);
    };
    PruebasDirectorio.prototype.successScreenSize = function (widthDisplay) {
        return widthDisplay < 768;
    };
    PruebasDirectorio.prototype.getPartitionList = function (list, widthDisplay) {
        var partitionList = [];
        var divisor = this.generateDivisorCard(widthDisplay);
        list.map(function (item, index) {
            if (index % divisor === 0) {
                var maxLenght = index + divisor < list.length ? index + divisor : list.length;
                var newList = list.slice(index, maxLenght);
                partitionList.push(newList);
            }
        });
        return partitionList;
    };
    PruebasDirectorio.prototype.render = function () {
        var _this = this;
        var listView = this.state.listView;
        return (React.createElement("div", null,
            React.createElement("div", { className: "".concat(styles.content_filter, " row p-3") },
                React.createElement("div", { className: "col-lg-8 d-flex pb-3" },
                    React.createElement("div", { className: "input-group" },
                        React.createElement("input", { type: "text", className: "form-control", placeholder: "Buscar", "aria-label": "Buscar", "aria-describedby": "Buscar", value: this.state.search, onChange: function (e) { return _this.setState({ search: e.target.value }); }, onKeyUp: this.getFilterSearch }),
                        React.createElement("span", { className: "input-group-text", id: "basic-addon2", onClick: this.getFilterSearch },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-search", viewBox: "0 0 16 16" },
                                React.createElement("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }))))),
                this.state.search !== "" ? (React.createElement("div", { className: "".concat(styles.cursor_pointer, " col-lg-3 d-flex pt-2 pe-auto") },
                    React.createElement("span", { onClick: this.getFilterReset },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-x-circle", viewBox: "0 0 16 16" },
                            " ",
                            React.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                            " ",
                            React.createElement("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }))),
                    " ",
                    React.createElement("span", { className: "".concat(styles.legendReset, " fw-bold font") }, "Limpiar filtro"))) : ("")),
            React.createElement("div", { id: "carouselExample", className: "carousel slide" },
                React.createElement("div", { className: "carousel-inner" }, listView.length !== 0 ? (listView.map(function (list, index) { return (React.createElement("div", { className: "carousel-item ".concat(index === 0 ? "active" : ""), key: index },
                    React.createElement("div", { className: "row" }, list !== undefined
                        ? list.map(function (item) { return (React.createElement("div", { className: "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12", key: item.Title },
                            React.createElement("div", { className: "border-5 shadow-sm p-2 ".concat(styles.card_user) },
                                React.createElement("div", { className: "".concat(styles.container_image) },
                                    React.createElement("img", { className: styles.image_user, alt: item.Imagen, src: "".concat(item.img) })),
                                React.createElement("div", { className: "".concat(styles.font, " ").concat(styles.container_info, "  text-center") },
                                    React.createElement("div", { className: "".concat(styles.name, " ").concat(styles.word_breaker, " pb-1") },
                                        React.createElement("div", null,
                                            " ",
                                            item.Title)),
                                    React.createElement("div", { className: styles.email },
                                        React.createElement("a", { className: styles.link, href: "mailto:".concat(item.Correo) }, item.Correo)))))); })
                        : ""))); })) : (React.createElement("div", { className: "".concat(styles.content_alert, " ") },
                    React.createElement("div", null, "No se encontraron resultados")))),
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