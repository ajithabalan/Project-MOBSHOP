(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/views/account/tab/UserOrdersTab.jsx":
/*!*************************************************!*\
  !*** ./src/views/account/tab/UserOrdersTab.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show */ "./src/views/account/tab/show.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var UserOrdersTab = function UserOrdersTab() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      priceproduct = _useState4[0],
      setPrice = _useState4[1];

  var profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.profile;
  });

  var userOrders = function userOrders() {
    var orders = [];
    var userProducts = [];
    var price = [];
    firebase__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection('orders').where("email", "==", profile.email).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        orders.push({
          email: doc.data().email,
          name: doc.data().ProductName,
          price: doc.data().price
        });
      });
      console.log(orders);
      orders.forEach(function (products) {
        userProducts.push(products.name);
      });
      orders.forEach(function (products) {
        price.push(products.price);
      });
      setProduct(userProducts);
      setPrice(price);
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    userOrders();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-subtle text-italic"
  }, "Name: ", profile.fullname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-subtle text-italic"
  }, "Email: ", profile.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_show__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: product,
    price: priceproduct
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserOrdersTab);

/***/ }),

/***/ "./src/views/account/tab/show.jsx":
/*!****************************************!*\
  !*** ./src/views/account/tab/show.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ShowOrders = function ShowOrders(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-form-inputsadmin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-form-fieldproductname"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Product Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, props.name.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-form-fieldproductname"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: {
      color: "black",
      marginTop: "0px"
    }
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, props.price.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowOrders);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWNjb3VudC90YWIvVXNlck9yZGVyc1RhYi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FjY291bnQvdGFiL3Nob3cuanN4Il0sIm5hbWVzIjpbIlVzZXJPcmRlcnNUYWIiLCJ1c2VTdGF0ZSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwicHJpY2Vwcm9kdWN0Iiwic2V0UHJpY2UiLCJwcm9maWxlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJPcmRlcnMiLCJvcmRlcnMiLCJ1c2VyUHJvZHVjdHMiLCJwcmljZSIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiZW1haWwiLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiZGF0YSIsIm5hbWUiLCJQcm9kdWN0TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0cyIsImNhdGNoIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJmdWxsbmFtZSIsIlNob3dPcmRlcnMiLCJwcm9wcyIsIm1hcCIsIml0ZW0iLCJjb2xvciIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFFLFNBQWZBLGFBQWUsR0FBSTtBQUNyQixrQkFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBaUNGLHNEQUFRLENBQUMsRUFBRCxDQUF6QztBQUFBO0FBQUEsTUFBT0csWUFBUDtBQUFBLE1BQXFCQyxRQUFyQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0YsT0FBVjtBQUFBLEdBQU4sQ0FBM0I7O0FBRUosTUFBTUcsVUFBVSxH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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaG93T3JkZXJzIGZyb20gJy4vc2hvdyc7XHJcblxyXG5jb25zdCBVc2VyT3JkZXJzVGFiID0oKT0+e1xyXG4gICAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3ByaWNlcHJvZHVjdCwgc2V0UHJpY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnByb2ZpbGUpO1xyXG4gICAgXHJcbmNvbnN0IHVzZXJPcmRlcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJzID0gW107XHJcbiAgICAgICAgY29uc3QgdXNlclByb2R1Y3RzID0gW107XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBbXTtcclxuICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdvcmRlcnMnKS53aGVyZShcImVtYWlsXCIsXCI9PVwiICxwcm9maWxlLmVtYWlsKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHF1ZXJ5U25hcHNob3Qpe1xyXG4gICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oZG9jKXtcclxuICAgICAgICAgICAgICAgIG9yZGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZG9jLmRhdGEoKS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkb2MuZGF0YSgpLlByb2R1Y3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOmRvYy5kYXRhKCkucHJpY2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnMpXHJcbiAgICAgICAgICAgIG9yZGVycy5mb3JFYWNoKHByb2R1Y3RzPT57XHJcbiAgICAgICAgICAgICAgICB1c2VyUHJvZHVjdHMucHVzaChwcm9kdWN0cy5uYW1lKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3JkZXJzLmZvckVhY2gocHJvZHVjdHM9PntcclxuICAgICAgICAgICAgICAgIHByaWNlLnB1c2gocHJvZHVjdHMucHJpY2UpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0KHVzZXJQcm9kdWN0cyk7XHJcbiAgICAgICAgICAgIHNldFByaWNlKHByaWNlKTsgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIGRvY3VtZW50OlwiLCBlcnJvcilcclxuICAgICAgICB9KTsgXHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgdXNlck9yZGVycygpO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc3VidGxlIHRleHQtaXRhbGljXCI+TmFtZToge3Byb2ZpbGUuZnVsbG5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXN1YnRsZSB0ZXh0LWl0YWxpY1wiPkVtYWlsOiB7cHJvZmlsZS5lbWFpbH08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNob3dPcmRlcnMgbmFtZT17cHJvZHVjdH0gcHJpY2U9e3ByaWNlcHJvZHVjdH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJPcmRlcnNUYWIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2hvd09yZGVycyA9IChwcm9wcykgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWZvcm0taW5wdXRzYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWZvcm0tZmllbGRwcm9kdWN0bmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvZHVjdCBOYW1lPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntwcm9wcy5uYW1lLm1hcChpdGVtPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZm9ybS1maWVsZHByb2R1Y3RuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIG1hcmdpblRvcDpcIjBweFwifX0+UHJpY2U8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3Byb3BzLnByaWNlLm1hcChpdGVtPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaG93T3JkZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9