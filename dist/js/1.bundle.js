(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/views/account/tab/UserAccountTab.jsx":
/*!**************************************************!*\
  !*** ./src/views/account/tab/UserAccountTab.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/routes */ "./src/constants/routes.js");
/* harmony import */ var components_ui_ImageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ui/ImageLoader */ "./src/components/ui/ImageLoader.jsx");







var UserProfile = function UserProfile(props) {
  var profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.profile;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-banner-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ui_ImageLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    alt: "Banner",
    className: "user-profile-banner-img",
    src: profile.banner
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-avatar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ui_ImageLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    alt: "Avatar",
    className: "",
    src: profile.avatar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button button-small user-profile-edit",
    onClick: function onClick() {
      return props.history.push(constants_routes__WEBPACK_IMPORTED_MODULE_4__["ACCOUNT_EDIT"]);
    }
  }, "Edit Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-profile-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "user-profile-name"
  }, profile.fullname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, profile.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), profile.address ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, profile.address) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Address not Set "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), profile.mobile.data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, profile.mobile.data.num ? profile.mobile.data.num : '+92') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Mobile not Set "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Date Joined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), profile.dateJoined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, Object(helpers_utils__WEBPACK_IMPORTED_MODULE_3__["displayDate"])(profile.dateJoined)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-subtle text-italic"
  }, "Not Available "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(UserProfile));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWNjb3VudC90YWIvVXNlckFjY291bnRUYWIuanN4Il0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwicHJvcHMiLCJwcm9maWxlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImJhbm5lciIsImF2YXRhciIsImhpc3RvcnkiLCJwdXNoIiwiQUNDT1VOVF9FRElUIiwiZnVsbG5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJtb2JpbGUiLCJkYXRhIiwibnVtIiwiZGF0ZUpvaW5lZCIsImRpc3BsYXlEYXRlIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLE1BQU1DLE9BQU8sR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixPQUFWO0FBQUEsR0FBTixDQUEzQjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksMkRBQUMsaUVBQUQ7QUFDSSxPQUFHLEVBQUMsUUFEUjtBQUVJLGFBQVMsRUFBQyx5QkFGZDtBQUdJLE9BQUcsRUFBRUEsT0FBTyxDQUFDRztBQUhqQixJQURKLENBREosZUFRSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLDJEQUFDLGlFQUFEO0FBQ0ksT0FBRyxFQUFDLFFBRFI7QUFFSSxhQUFTLEVBQUMsRUFGZDtBQUdJLE9BQUcsRUFBRUgsT0FBTyxDQUFDSTtBQUhqQixJQURKLENBUkosZUFlSTtBQUNJLGFBQVMsRUFBQyx1Q0FEZDtBQUVJLFdBQU8sRUFBRTtBQUFBLGFBQU1MLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxJQUFkLENBQW1CQyw2REFBbkIsQ0FBTjtBQUFBO0FBRmIsb0JBZkosQ0FESixlQXVCSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBbUNQLE9BQU8sQ0FBQ1EsUUFBM0MsQ0FESixlQUVJLGlGQUZKLGVBR0ksc0VBSEosZUFJSSx1RUFBS1IsT0FBTyxDQUFDUyxLQUFiLENBSkosZUFLSSxtRkFMSixlQU1JLHNFQU5KLEVBT0tULE9BQU8sQ0FBQ1UsT0FBUixnQkFDRyx1RUFBS1YsT0FBTyxDQUFDVSxPQUFiLENBREgsZ0JBR0c7QUFBSSxhQUFTLEVBQUM7QUFBZCx3QkFWUixlQVlJLGtGQVpKLGVBYUksc0VBYkosRUFjS1YsT0FBTyxDQUFDVyxNQUFSLENBQWVDLElBQWYsZ0JBQ0csdUVBQUtaLE9BQU8sQ0FBQ1csTUFBUixDQUFlQyxJQUFmLENBQW9CQyxHQUFwQixHQUEwQmIsT0FBTyxDQUFDVyxNQUFSLENBQWVDLElBQWYsQ0FBb0JDLEdBQTlDLEdBQW9ELEtBQXpELENBREgsZ0JBR0c7QUFBSSxhQUFTLEVBQUM7QUFBZCx1QkFqQlIsZUFvQkksdUZBcEJKLGVBcUJJLHNFQXJCSixFQXNCS2IsT0FBTyxDQUFDYyxVQUFSLGdCQUNHLHVFQUFLQyxpRUFBVyxDQUFDZixPQUFPLENBQUNjLFVBQVQsQ0FBaEIsQ0FESCxnQkFHRztBQUFJLGFBQVMsRUFBQztBQUFkLHNCQXpCUixDQXZCSixDQURKLENBREo7QUE0REgsQ0E5REQ7O0FBK0RlRSxrSUFBVSxDQUFDbEIsV0FBRCxDQUF6QixFIiwiZmlsZSI6ImpzLzEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZGlzcGxheURhdGUgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcclxuaW1wb3J0IHsgQUNDT1VOVF9FRElUIH0gZnJvbSAnY29uc3RhbnRzL3JvdXRlcyc7XHJcbmltcG9ydCBJbWFnZUxvYWRlciBmcm9tICdjb21wb25lbnRzL3VpL0ltYWdlTG9hZGVyJztcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBwcm9maWxlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucHJvZmlsZSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWJhbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWJhbm5lci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZUxvYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmFubmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1iYW5uZXItaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZmlsZS5iYW5uZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1hdmF0YXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9maWxlLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXNtYWxsIHVzZXItcHJvZmlsZS1lZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuaGlzdG9yeS5wdXNoKEFDQ09VTlRfRURJVCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFZGl0IEFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtbmFtZVwiPntwcm9maWxlLmZ1bGxuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW1haWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3Byb2ZpbGUuZW1haWx9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BZGRyZXNzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuYWRkcmVzcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntwcm9maWxlLmFkZHJlc3N9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICApOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN1YnRsZSB0ZXh0LWl0YWxpY1wiPkFkZHJlc3Mgbm90IFNldCA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TW9iaWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUubW9iaWxlLmRhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cHJvZmlsZS5tb2JpbGUuZGF0YS5udW0gPyBwcm9maWxlLm1vYmlsZS5kYXRhLm51bSA6ICcrOTInfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgKTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zdWJ0bGUgdGV4dC1pdGFsaWNcIj5Nb2JpbGUgbm90IFNldCA8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhdGUgSm9pbmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuZGF0ZUpvaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntkaXNwbGF5RGF0ZShwcm9maWxlLmRhdGVKb2luZWQpfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgKTooXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN1YnRsZSB0ZXh0LWl0YWxpY1wiPk5vdCBBdmFpbGFibGUgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVXNlclByb2ZpbGUpOyJdLCJzb3VyY2VSb290IjoiIn0=