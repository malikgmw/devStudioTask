(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/task_service */ "./resources/js/services/task_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  data: function data() {
    return {
      task: {
        title: '',
        description: ''
      },
      editTaskData: {},
      completeTaskData: {},
      inCompleteTaskData: {},
      tasks: [],
      action: '',
      errors: {}
    };
  },
  mounted: function mounted() {
    this.$store.state.isLoading = true;
    this.loadTasks();
  },
  methods: {
    addTask: function () {
      var _addTask = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.errors = {};
                formData = new FormData();

                for (key in this.task) {
                  formData.append(key, this.task[key]);
                }

                this.errors = {};
                _context.next = 7;
                return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["addTask"](formData);

              case 7:
                this.flashMessage.info({
                  message: 'Task added successfuly!',
                  time: 5000
                });
                this.hideAddNewTaskModal();
                _context.next = 23;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 16 : _context.t1 === 500 ? 19 : 21;
                break;

              case 16:
                this.action = 'addTask';
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 23);

              case 19:
                this.flashMessage.error({
                  message: _context.t0.response.data.message,
                  time: 5000
                });
                return _context.abrupt("break", 23);

              case 21:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try again!',
                  time: 5000
                });
                return _context.abrupt("break", 23);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function addTask() {
        return _addTask.apply(this, arguments);
      }

      return addTask;
    }(),
    loadTasks: function () {
      var _loadTasks = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["loadTasks"]();

              case 3:
                response = _context2.sent;
                this.tasks = response.data;
                this.$store.state.isLoading = false;
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: "Some error occurred,Please refresh!",
                  time: 5000
                });
                this.$store.state.isLoading = false;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadTasks() {
        return _loadTasks.apply(this, arguments);
      }

      return loadTasks;
    }(),
    editTask: function editTask(task) {
      this.showEditTaskModal();
      this.editTaskData = task;
    },
    updateTask: function () {
      var _updateTask = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.$store.state.isLoading = true;
                this.editTaskData._method = "PUT";
                _context3.next = 5;
                return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["updateTask"](this.editTaskData.id, this.editTaskData);

              case 5:
                response = _context3.sent;
                this.$store.state.isLoading = false;
                this.hideEditTaskModal();
                this.flashMessage.success({
                  message: "Task successfully updated.",
                  time: 3000
                });
                this.loadTasks();
                this.$store.state.isLoading = false;
                _context3.next = 25;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                this.$store.state.isLoading = false;
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 19 : 22;
                break;

              case 19:
                this.action = 'updateTask';
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 24);

              case 22:
                this.flashMessage.error({
                  message: "Some error occurred. please try again.",
                  time: 3000
                });
                return _context3.abrupt("break", 24);

              case 24:
                this.flashMessage.error({
                  message: "Some error occurred. Please try agian.",
                  time: 3000
                });

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 13]]);
      }));

      function updateTask() {
        return _updateTask.apply(this, arguments);
      }

      return updateTask;
    }(),
    completeTaskPop: function completeTaskPop(task) {
      this.completeTaskData = task;
      this.showCompleteTaskModal();
    },
    completeTask: function () {
      var _completeTask = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.$store.state.isLoading = true;
                _context4.next = 4;
                return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["completeTask"](this.completeTaskData);

              case 4:
                response = _context4.sent;
                this.$store.state.isLoading = false;
                this.hideCompleteTaskModal();
                this.flashMessage.success({
                  message: "Task Completed Successfully.",
                  time: 3000
                });
                _context4.next = 21;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                this.$store.state.isLoading = false;
                _context4.t1 = _context4.t0.response.status;
                _context4.next = _context4.t1 === 422 ? 16 : 18;
                break;

              case 16:
                this.errors = _context4.t0.response.data.errors;
                return _context4.abrupt("break", 20);

              case 18:
                this.flashMessage.error({
                  message: "Some error occurred. please try again.",
                  time: 3000
                });
                return _context4.abrupt("break", 20);

              case 20:
                this.flashMessage.error({
                  message: "Some error occurred. Please try agian.",
                  time: 3000
                });

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10]]);
      }));

      function completeTask() {
        return _completeTask.apply(this, arguments);
      }

      return completeTask;
    }(),
    inCompleteTaskPop: function inCompleteTaskPop(task) {
      this.inCompleteTaskData = task;
      this.showInCompleteTaskModal();
    },
    inCompleteTask: function () {
      var _inCompleteTask = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.$store.state.isLoading = true;
                _context5.next = 4;
                return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["inCompleteTask"](this.inCompleteTaskData);

              case 4:
                response = _context5.sent;
                this.$store.state.isLoading = false;
                this.hideInCompleteTaskModal();
                this.flashMessage.success({
                  message: "Task InCompleted Successfully.",
                  time: 3000
                });
                _context5.next = 21;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);
                this.$store.state.isLoading = false;
                _context5.t1 = _context5.t0.response.status;
                _context5.next = _context5.t1 === 422 ? 16 : 18;
                break;

              case 16:
                this.errors = _context5.t0.response.data.errors;
                return _context5.abrupt("break", 20);

              case 18:
                this.flashMessage.error({
                  message: "Some error occurred. please try again.",
                  time: 3000
                });
                return _context5.abrupt("break", 20);

              case 20:
                this.flashMessage.error({
                  message: "Some error occurred. Please try agian.",
                  time: 3000
                });

              case 21:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));

      function inCompleteTask() {
        return _inCompleteTask.apply(this, arguments);
      }

      return inCompleteTask;
    }(),
    deleteTask: function () {
      var _deleteTask = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(task) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (window.confirm("Are you sure you want to delete selected task")) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                _context6.prev = 2;
                _context6.next = 5;
                return _services_task_service__WEBPACK_IMPORTED_MODULE_1__["deleteTask"](task.id);

              case 5:
                this.tasks = this.tasks.filter(function (tas) {
                  return tas.id != task.id;
                });
                this.flashMessage.success({
                  message: 'Task deleted successfully!',
                  time: 5000
                });
                _context6.next = 12;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](2);
                this.flashMessage.error({
                  message: _context6.t0.response.data.message,
                  time: 5000
                });

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 9]]);
      }));

      function deleteTask(_x) {
        return _deleteTask.apply(this, arguments);
      }

      return deleteTask;
    }(),
    showAddNewTaskModal: function showAddNewTaskModal() {
      this.$refs.addTaskModal.show();
    },
    hideAddNewTaskModal: function hideAddNewTaskModal() {
      this.$refs.addTaskModal.hide();
    },
    showEditTaskModal: function showEditTaskModal() {
      this.$refs.editTaskModal.show();
    },
    hideEditTaskModal: function hideEditTaskModal() {
      this.$refs.editTaskModal.hide();
    },
    showCompleteTaskModal: function showCompleteTaskModal() {
      this.$refs.completeTaskModal.show();
    },
    hideCompleteTaskModal: function hideCompleteTaskModal() {
      this.$refs.completeTaskModal.hide();
    },
    showInCompleteTaskModal: function showInCompleteTaskModal() {
      this.$refs.inCompleteTaskModal.show();
    },
    hideInCompleteTaskModal: function hideInCompleteTaskModal() {
      this.$refs.inCompleteTaskModal.hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=template&id=2d17c5ca&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=template&id=2d17c5ca& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card shadow mb-4" }, [
        _c("div", { staticClass: "card-header py-3 d-flex" }, [
          _c("h6", { staticClass: "m-0 font-weight-bold text-primary-theme" }, [
            _vm._v("Latest Tasks")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "ml-auto" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-info btn-sm",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.showAddNewTaskModal()
                  }
                }
              },
              [
                _c("span", { staticClass: "fa fa-info-plus" }),
                _vm._v("+ Add New Task")
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-bordered",
                attrs: { id: "dataTable", width: "100%", cellspacing: "0" }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.tasks, function(task, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(task.title))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(task.description))]),
                      _vm._v(" "),
                      task.status == 1
                        ? _c("td", {}, [_vm._v("Completed")])
                        : _vm._e(),
                      _vm._v(" "),
                      task.status == 0
                        ? _c("td", [_vm._v("InComplete")])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-info btn-sm",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.editTask(task)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-danger btn-sm",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.deleteTask(task)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fa fa-trash" })]
                        ),
                        _vm._v(" "),
                        task.status == 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-success btn-sm",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.completeTaskPop(task)
                                  }
                                }
                              },
                              [_vm._v("Complete")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        task.status == 1
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-warning btn-sm",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.inCompleteTaskPop(task)
                                  }
                                }
                              },
                              [_vm._v("InComplete")]
                            )
                          : _vm._e()
                      ])
                    ])
                  }),
                  0
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "addTaskModal",
          staticClass: "tab-pane fade",
          attrs: { title: "Add Task", "hide-footer": "" }
        },
        [
          _c(
            "form",
            {
              staticClass: "pb-5",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addTask($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-control-label",
                    attrs: { for: "addTitle" }
                  },
                  [_vm._v("Title")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.task.title,
                      expression: "task.title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "addTitle",
                    type: "text",
                    placeholder: "Enter Task"
                  },
                  domProps: { value: _vm.task.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.task, "title", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.action === "addTask" && _vm.errors.title
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.title[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-control-label",
                    attrs: { for: "addDescription" }
                  },
                  [_vm._v("Description")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.task.description,
                      expression: "task.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "addDescription",
                    type: "text",
                    rows: "3",
                    cols: "50",
                    placeholder: "Enter Description"
                  },
                  domProps: { value: _vm.task.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.task, "description", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.action === "addTask" && _vm.errors.description
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.description[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-block mt-4",
                  attrs: { type: "submit" }
                },
                [_vm._v("Add Task")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editTaskModal",
          staticClass: "tab-pane fade",
          attrs: { title: "Update Task", "hide-footer": "" }
        },
        [
          _c(
            "form",
            {
              staticClass: "pb-5",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateTask($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-control-label",
                    attrs: { for: "addTitle" }
                  },
                  [_vm._v("Title")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editTaskData.title,
                      expression: "editTaskData.title"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "addTitle",
                    type: "text",
                    placeholder: "Enter Task"
                  },
                  domProps: { value: _vm.editTaskData.title },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.editTaskData, "title", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.action === "updateTask" && _vm.errors.title
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.title[0]))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-control-label",
                    attrs: { for: "addDescription" }
                  },
                  [_vm._v("Description")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editTaskData.description,
                      expression: "editTaskData.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "addDescription",
                    type: "text",
                    rows: "3",
                    cols: "50",
                    placeholder: "Enter Description"
                  },
                  domProps: { value: _vm.editTaskData.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.editTaskData,
                        "description",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.action === "updateTask" && _vm.errors.description
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.description[0]))
                    ])
                  : _vm._e()
              ]),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-block mt-4",
                  attrs: { type: "submit" }
                },
                [_vm._v("Update Task")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "completeTaskModal",
          staticClass: "tab-pane fade",
          attrs: { title: "Complete Task", "hide-footer": "" }
        },
        [
          _c(
            "form",
            {
              staticClass: "pb-5",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.completeTask($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _vm._v(
                      "\n                  Are you sure you want to complete " +
                        _vm._s(_vm.completeTaskData.title) +
                        " ?\n              "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-sm mt-4",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("InComplete Task")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "inCompleteTaskModal",
          staticClass: "tab-pane fade",
          attrs: { title: "InComplete Task", "hide-footer": "" }
        },
        [
          _c(
            "form",
            {
              staticClass: "pb-5",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.inCompleteTask($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _vm._v(
                      "\n                  Are you sure you want to inComplete " +
                        _vm._s(_vm.inCompleteTaskData.title) +
                        " ?\n              "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-sm mt-4",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("InComplete Task")]
                )
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
      },
      [_c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [_vm._v("Tasks")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/task_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/task_service.js ***!
  \***********************************************/
/*! exports provided: addTask, loadTasks, updateTask, deleteTask, completeTask, inCompleteTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTask", function() { return addTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTasks", function() { return loadTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTask", function() { return updateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTask", function() { return deleteTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeTask", function() { return completeTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inCompleteTask", function() { return inCompleteTask; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function addTask(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/admin/tasks', data);
}
function loadTasks(type) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/admin/tasks');
}
function updateTask(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/admin/tasks/".concat(id), data);
}
function deleteTask(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/admin/tasks/".concat(id));
}
function completeTask(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/admin/complete-task", data);
}
function inCompleteTask(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/admin/inComplete-task", data);
}

/***/ }),

/***/ "./resources/js/views/dashboard/admin/Dashboard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/dashboard/admin/Dashboard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_2d17c5ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=2d17c5ca& */ "./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=template&id=2d17c5ca&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_2d17c5ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_2d17c5ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/admin/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=template&id=2d17c5ca&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=template&id=2d17c5ca& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2d17c5ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=2d17c5ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/admin/Dashboard.vue?vue&type=template&id=2d17c5ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2d17c5ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_2d17c5ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);