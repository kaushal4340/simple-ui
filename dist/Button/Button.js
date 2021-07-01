"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./Button.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Button = function Button(_ref) {
  var label = _ref.label,
      classnames = _ref.classnames,
      others = _ref.others;
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: (0, _classnames.default)("simple-button", classnames)
  }, others), label);
};

var _default = Button;
exports.default = _default;