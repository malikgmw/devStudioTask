(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Authentication.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Authentication.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        remember_me: false,
        verification_code: ''
      },
      loginPasswordHidden: true,
      registerPasswordHidden: true,
      registerConfirmPasswordHidden: true,
      action: '',
      errors: {}
    };
  },
  methods: {
    login: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.errors = {};
                this.$store.state.isLoading = true;
                _context.next = 5;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["login"](this.user);

              case 5:
                response = _context.sent;
                this.$router.push('/' + response.data.user.role);
                this.$store.state.isLoading = false;
                _context.next = 25;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 15 : _context.t1 === 401 ? 18 : 21;
                break;

              case 15:
                this.action = 'login';
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 24);

              case 18:
                this.errors = {};
                this.flashMessage.info({
                  message: _context.t0.response.data.message,
                  time: 5000
                });
                return _context.abrupt("break", 24);

              case 21:
                this.errors = {};
                this.flashMessage.error({
                  message: "Some error occurred please try again",
                  time: 5000
                });
                return _context.abrupt("break", 24);

              case 24:
                this.$store.state.isLoading = false;

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }(),
    register: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.errors = {};
                formData = new FormData();

                for (key in this.user) {
                  formData.append(key, this.user[key]);
                }

                this.errors = {};
                _context2.next = 7;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["register"](formData);

              case 7:
                this.flashMessage.info({
                  message: 'Registration successfuly, Please try to signin now',
                  time: 5000
                });
                this.hideUserRegisterModal();
                this.$router.push('/');
                this.$refs.loginBtn.click();
                _context2.next = 25;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 18 : _context2.t1 === 500 ? 21 : 23;
                break;

              case 18:
                this.action = 'register';
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 25);

              case 21:
                this.flashMessage.error({
                  message: _context2.t0.response.data.message,
                  time: 5000
                });
                return _context2.abrupt("break", 25);

              case 23:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context2.abrupt("break", 25);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13]]);
      }));

      function register() {
        return _register.apply(this, arguments);
      }

      return register;
    }(),
    resetPasswordRequest: function () {
      var _resetPasswordRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.$store.state.isLoading = true;
                this.errors = {};
                _context3.next = 5;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["resetPasswordRequest"](this.user);

              case 5:
                response = _context3.sent;
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.$store.state.isLoading = false;
                this.$refs.resetPassword.click();
                _context3.next = 22;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 17 : 19;
                break;

              case 17:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 21);

              case 19:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context3.abrupt("break", 21);

              case 21:
                this.$store.state.isLoading = false;

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 11]]);
      }));

      function resetPasswordRequest() {
        return _resetPasswordRequest.apply(this, arguments);
      }

      return resetPasswordRequest;
    }(),
    resetPassword: function () {
      var _resetPassword = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.$store.state.isLoading = true;
                this.errors = {};
                _context4.next = 5;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["resetPassword"](this.user);

              case 5:
                response = _context4.sent;
                console.log(response);
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.$store.state.isLoading = false;
                this.$refs.loginBtnAfterForgotPassword.click();
                _context4.next = 25;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 18 : _context4.t1 === 401 ? 20 : 22;
                break;

              case 18:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 24);

              case 20:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 24);

              case 22:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context4.abrupt("break", 24);

              case 24:
                this.$store.state.isLoading = false;

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 12]]);
      }));

      function resetPassword() {
        return _resetPassword.apply(this, arguments);
      }

      return resetPassword;
    }(),
    showUserRegisterModal: function showUserRegisterModal() {
      this.$refs.userRegisterModal.show();
    },
    hideUserRegisterModal: function hideUserRegisterModal() {
      this.$refs.userRegisterModal.hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Authentication.vue?vue&type=template&id=510d481c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Authentication.vue?vue&type=template&id=510d481c& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "authentication" }, [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "forgot", role: "dialog", "aria-hidden": "true" }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog auth-modal modal-dialog-centered",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body px-4 px-sm-5 pt-0" }, [
                _c(
                  "ul",
                  {
                    staticClass: "nav nav-tabs line-tabs mb-3",
                    attrs: { id: "sign", role: "tablist" }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "nav-item",
                        attrs: { role: "presentation" }
                      },
                      [
                        _c(
                          "a",
                          {
                            ref: "resetPassword",
                            staticClass: "nav-link",
                            attrs: {
                              id: "reset-password-tab",
                              "data-toggle": "tab",
                              href: "#resetPassword",
                              role: "tab",
                              "aria-controls": "register",
                              "aria-selected": "false"
                            }
                          },
                          [_vm._v("Forget Request")]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-content", attrs: { id: "signContent" } },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade show active",
                        attrs: {
                          id: "resetPasswordRequest",
                          role: "tabpanel",
                          "aria-labelledby": "reset-password-request-tab"
                        }
                      },
                      [
                        _c(
                          "form",
                          {
                            staticClass: "pb-5",
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.resetPasswordRequest($event)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "useremail" }
                                },
                                [_vm._v("Email")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.email,
                                    expression: "user.email"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "useremail",
                                  type: "text",
                                  placeholder: "Enter email"
                                },
                                domProps: { value: _vm.user.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.email
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.email[0]))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                ref: "btnSubmit",
                                staticClass: "btn btn-primary btn-block",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Reset Password")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group text-center mt-3" },
                              [
                                _c(
                                  "a",
                                  {
                                    ref: "loginBtnAfterForgotPassword",
                                    staticClass: "link",
                                    attrs: {
                                      href: "javascript: void(0);",
                                      "data-dismiss": "modal",
                                      "data-toggle": "modal",
                                      "data-target": "#sign_in"
                                    }
                                  },
                                  [_vm._v("Back to login")]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: {
                          id: "resetPassword",
                          role: "tabpanel",
                          "aria-labelledby": "reset-password-request-tab"
                        }
                      },
                      [
                        _c(
                          "form",
                          {
                            staticClass: "pb-5",
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.resetPassword($event)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "resetPassword" }
                                },
                                [_vm._v("Email")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.email,
                                    expression: "user.email"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "resetPassword",
                                  type: "text",
                                  placeholder: "Enter email"
                                },
                                domProps: { value: _vm.user.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.email
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.email[0]))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "username" }
                                },
                                [_vm._v("Verification Code")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.verification_code,
                                    expression: "user.verification_code"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "username",
                                  type: "text",
                                  placeholder: "Enter verification code"
                                },
                                domProps: { value: _vm.user.verification_code },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "verification_code",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.verification_code
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.verification_code[0])
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "password" }
                                },
                                [_vm._v("Password")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.password,
                                    expression: "user.password"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "password",
                                  type: "password",
                                  placeholder: "Enter password"
                                },
                                domProps: { value: _vm.user.password },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "password",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.password
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.password[0]))]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "form-control-label",
                                  attrs: { for: "confirmationpassword" }
                                },
                                [_vm._v("Password Confirmation")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.password_confirmation,
                                    expression: "user.password_confirmation"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "confirmationpassword",
                                  type: "password",
                                  placeholder: "Password Confirmation"
                                },
                                domProps: {
                                  value: _vm.user.password_confirmation
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "password_confirmation",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.password_confirmation
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.password_confirmation[0]
                                        )
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-block",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Reset Password")]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row d-flex justify-content-center mt-5" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "modal-header d-block px-4 px-sm-5 pt-5 bb-0" },
              [
                _c(
                  "a",
                  {
                    staticClass: "close d-sm-none",
                    attrs: {
                      href: "javascript:void(0);",
                      "data-dismiss": "modal"
                    }
                  },
                  [_vm._v("×")]
                ),
                _vm._v(" "),
                _c("h4", { staticClass: "font-weight-bold mb-2" }, [
                  _vm._v("Sign In")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    ref: "authModalCloseButton",
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body px-4 px-sm-5 pt-0" }, [
              _c(
                "div",
                { staticClass: "tab-content", attrs: { id: "signContent" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane fade show active",
                      attrs: {
                        id: "login",
                        role: "tabpanel",
                        "aria-labelledby": "login-tab"
                      }
                    },
                    [
                      _c(
                        "form",
                        {
                          staticClass: "pb-5",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.login($event)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "usernameLogin" }
                              },
                              [_vm._v("Email")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.email,
                                  expression: "user.email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "usernameLogin",
                                type: "text",
                                placeholder: "Enter email"
                              },
                              domProps: { value: _vm.user.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.action === "login" && _vm.errors.email
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(_vm._s(_vm.errors.email[0]))
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "passwordLogin" }
                              },
                              [_vm._v("Password")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-control-icon form-control-icon_right"
                              },
                              [
                                (_vm.loginPasswordHidden
                                  ? "password"
                                  : "text") === "checkbox"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.password,
                                          expression: "user.password"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "passwordLogin",
                                        placeholder: "Enter password",
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.user.password
                                        )
                                          ? _vm._i(_vm.user.password, null) > -1
                                          : _vm.user.password
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.user.password,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.user,
                                                  "password",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.user,
                                                  "password",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.user, "password", $$c)
                                          }
                                        }
                                      }
                                    })
                                  : (_vm.loginPasswordHidden
                                      ? "password"
                                      : "text") === "radio"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.password,
                                          expression: "user.password"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "passwordLogin",
                                        placeholder: "Enter password",
                                        type: "radio"
                                      },
                                      domProps: {
                                        checked: _vm._q(_vm.user.password, null)
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.$set(
                                            _vm.user,
                                            "password",
                                            null
                                          )
                                        }
                                      }
                                    })
                                  : _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.password,
                                          expression: "user.password"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "passwordLogin",
                                        placeholder: "Enter password",
                                        type: _vm.loginPasswordHidden
                                          ? "password"
                                          : "text"
                                      },
                                      domProps: { value: _vm.user.password },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.user,
                                            "password",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "form-control-icon_wrapper icon-eye",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        _vm.loginPasswordHidden = !_vm.loginPasswordHidden
                                      }
                                    }
                                  },
                                  [
                                    _c("span", [
                                      _vm.loginPasswordHidden
                                        ? _c("i", {
                                            staticClass: "eye-open icofont-eye"
                                          })
                                        : _c("i", {
                                            staticClass:
                                              "eye-close icofont-eye-blocked",
                                            attrs: {
                                              id:
                                                "registerPasswordVisibleCharacters"
                                            }
                                          })
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.action === "login" && _vm.errors.password
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [_vm._v(_vm._s(_vm.errors.password[0]))]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group d-flex align-items-center justify-content-between"
                            },
                            [
                              _c("div", { staticClass: "checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.user.remember_me,
                                      expression: "user.remember_me"
                                    }
                                  ],
                                  attrs: {
                                    id: "remember",
                                    type: "checkbox",
                                    value: "true"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.user.remember_me)
                                      ? _vm._i(_vm.user.remember_me, "true") >
                                        -1
                                      : _vm.user.remember_me
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.user.remember_me,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "true",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.user,
                                              "remember_me",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.user,
                                              "remember_me",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.user, "remember_me", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "remember" } }, [
                                  _vm._v("Remember me")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  ref: "",
                                  staticClass: "link",
                                  attrs: {
                                    href: "javascript: void(0);",
                                    "data-dismiss": "modal",
                                    "data-toggle": "modal",
                                    "data-target": "#forgot"
                                  }
                                },
                                [_vm._v("Forgot Password?")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-block",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Sign in")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "link float-right",
                          attrs: { href: "javascript: void(0);" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.showUserRegisterModal()
                            }
                          }
                        },
                        [_vm._v("Do you have an account? Sign Up")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      ref: "userRegisterModal",
                      staticClass: "tab-pane fade",
                      attrs: { "hide-footer": "" }
                    },
                    [
                      _c(
                        "form",
                        {
                          staticClass: "pb-5",
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.register($event)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "firstNameRegister" }
                              },
                              [_vm._v("First Name")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.first_name,
                                  expression: "user.first_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "firstNameRegister",
                                type: "text",
                                placeholder: "Enter your first name"
                              },
                              domProps: { value: _vm.user.first_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "first_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.action === "register" && _vm.errors.first_name
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(_vm._s(_vm.errors.first_name[0]))
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "lastNameRegister" }
                              },
                              [_vm._v("Last Name")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.last_name,
                                  expression: "user.last_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "lastNameRegister",
                                type: "text",
                                placeholder: "Last name"
                              },
                              domProps: { value: _vm.user.last_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "last_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.action === "register" && _vm.errors.last_name
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(_vm._s(_vm.errors.last_name[0]))
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "usernameRegister" }
                              },
                              [_vm._v("Email")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.email,
                                  expression: "user.email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "usernameRegister",
                                type: "text",
                                placeholder: "Enter email/phone"
                              },
                              domProps: { value: _vm.user.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.action === "register" && _vm.errors.email
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(_vm._s(_vm.errors.email[0]))
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "passwordRegister" }
                              },
                              [_vm._v("Password")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-control-icon form-control-icon_right"
                              },
                              [
                                (_vm.registerPasswordHidden
                                  ? "password"
                                  : "text") === "checkbox"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.password,
                                          expression: "user.password"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "passwordRegister",
                                        placeholder: "Enter password",
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.user.password
                                        )
                                          ? _vm._i(_vm.user.password, null) > -1
                                          : _vm.user.password
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.user.password,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.user,
                                                  "password",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.user,
                                                  "password",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.user, "password", $$c)
                                          }
                                        }
                                      }
                                    })
                                  : (_vm.registerPasswordHidden
                                      ? "password"
                                      : "text") === "radio"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.password,
                                          expression: "user.password"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "passwordRegister",
                                        placeholder: "Enter password",
                                        type: "radio"
                                      },
                                      domProps: {
                                        checked: _vm._q(_vm.user.password, null)
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.$set(
                                            _vm.user,
                                            "password",
                                            null
                                          )
                                        }
                                      }
                                    })
                                  : _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.password,
                                          expression: "user.password"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "passwordRegister",
                                        placeholder: "Enter password",
                                        type: _vm.registerPasswordHidden
                                          ? "password"
                                          : "text"
                                      },
                                      domProps: { value: _vm.user.password },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.user,
                                            "password",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "form-control-icon_wrapper icon-eye",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        _vm.registerPasswordHidden = !_vm.registerPasswordHidden
                                      }
                                    }
                                  },
                                  [
                                    _c("span", [
                                      _vm.registerPasswordHidden
                                        ? _c("i", {
                                            staticClass: "eye-open icofont-eye"
                                          })
                                        : _c("i", {
                                            staticClass:
                                              "eye-close icofont-eye-blocked",
                                            attrs: {
                                              id:
                                                "registerPasswordVisibleCharacters"
                                            }
                                          })
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.action === "register" && _vm.errors.password
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [_vm._v(_vm._s(_vm.errors.password[0]))]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "confirmPasswordRegister" }
                              },
                              [_vm._v("Confirm Password")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-control-icon form-control-icon_right"
                              },
                              [
                                (_vm.registerConfirmPasswordHidden
                                  ? "password"
                                  : "text") === "checkbox"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.password_confirmation,
                                          expression:
                                            "user.password_confirmation"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "confirmPasswordRegister",
                                        placeholder: "Re-type password",
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.user.password_confirmation
                                        )
                                          ? _vm._i(
                                              _vm.user.password_confirmation,
                                              null
                                            ) > -1
                                          : _vm.user.password_confirmation
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a =
                                              _vm.user.password_confirmation,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.user,
                                                  "password_confirmation",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.user,
                                                  "password_confirmation",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.user,
                                              "password_confirmation",
                                              $$c
                                            )
                                          }
                                        }
                                      }
                                    })
                                  : (_vm.registerConfirmPasswordHidden
                                      ? "password"
                                      : "text") === "radio"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.password_confirmation,
                                          expression:
                                            "user.password_confirmation"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "confirmPasswordRegister",
                                        placeholder: "Re-type password",
                                        type: "radio"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.user.password_confirmation,
                                          null
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          return _vm.$set(
                                            _vm.user,
                                            "password_confirmation",
                                            null
                                          )
                                        }
                                      }
                                    })
                                  : _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.password_confirmation,
                                          expression:
                                            "user.password_confirmation"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "confirmPasswordRegister",
                                        placeholder: "Re-type password",
                                        type: _vm.registerConfirmPasswordHidden
                                          ? "password"
                                          : "text"
                                      },
                                      domProps: {
                                        value: _vm.user.password_confirmation
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.user,
                                            "password_confirmation",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "form-control-icon_wrapper icon-eye",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        _vm.registerConfirmPasswordHidden = !_vm.registerConfirmPasswordHidden
                                      }
                                    }
                                  },
                                  [
                                    _c("span", [
                                      _vm.registerConfirmPasswordHidden
                                        ? _c("i", {
                                            staticClass: "eye-open icofont-eye"
                                          })
                                        : _c("i", {
                                            staticClass:
                                              "eye-close icofont-eye-blocked",
                                            attrs: {
                                              id:
                                                "registerPasswordVisibleCharacters"
                                            }
                                          })
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.action === "register" &&
                                _vm.errors.password_confirmation
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.password_confirmation[0]
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-block mt-4",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Register")]
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal-header d-block px-4 px-sm-5 pt-5 bb-0" },
      [
        _c(
          "a",
          {
            staticClass: "close d-sm-none",
            attrs: { href: "javascript:void(0);", "data-dismiss": "modal" }
          },
          [_vm._v("×")]
        ),
        _vm._v(" "),
        _c("h4", { staticClass: "font-weight-bold mb-2" }, [
          _vm._v(" Forgot password")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Enter your email address and we will send you instructions on how to reset your password."
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "nav-item", attrs: { role: "presentation" } },
      [
        _c(
          "a",
          {
            staticClass: "nav-link active",
            attrs: {
              id: "reset-password-request-tab",
              "data-toggle": "tab",
              href: "#resetPasswordRequest",
              role: "tab",
              "aria-controls": "login",
              "aria-selected": "true"
            }
          },
          [_vm._v("Request Reset Password")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/dashboard/Authentication.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/dashboard/Authentication.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Authentication_vue_vue_type_template_id_510d481c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authentication.vue?vue&type=template&id=510d481c& */ "./resources/js/views/dashboard/Authentication.vue?vue&type=template&id=510d481c&");
/* harmony import */ var _Authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authentication.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Authentication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Authentication_vue_vue_type_template_id_510d481c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Authentication_vue_vue_type_template_id_510d481c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Authentication.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Authentication.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/dashboard/Authentication.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Authentication.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Authentication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Authentication.vue?vue&type=template&id=510d481c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Authentication.vue?vue&type=template&id=510d481c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_template_id_510d481c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Authentication.vue?vue&type=template&id=510d481c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Authentication.vue?vue&type=template&id=510d481c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_template_id_510d481c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_template_id_510d481c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);