webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "03pt":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("oY1a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("739c02e4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04a0d67a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loader.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04a0d67a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1eKf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("I6jU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("472d4d88", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84d3f796\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vml.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84d3f796\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vml.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "333T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "transition-group",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _c("loader", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loaded,
                expression: "!loaded"
              }
            ],
            key: "loader"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loaded,
                  expression: "loaded"
                }
              ],
              key: "content"
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("h1", { staticClass: "col" }, [_vm._v("LookUp")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-4 text-right",
                    staticStyle: { "margin-top": "15px" }
                  },
                  [
                    _vm._v("\n\t        Data as of: \n\t        "),
                    _c(
                      "span",
                      {
                        staticStyle: { "font-weight": "bold", color: "#4d8bf9" }
                      },
                      [_vm._v(" " + _vm._s(_vm.asDate) + " ")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("h3", { attrs: { clas: "" } }, [
                _vm._v("Historical Search for Active Duty AF Personnel")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "row no-top" }, [
                _c("div", { staticClass: "col-6" }, [
                  _c("div", { staticClass: "row no-top" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("h4", [_vm._v(" Name: ")]),
                      _vm._v(" "),
                      _c("span", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name,
                              expression: "name"
                            }
                          ],
                          staticClass: "col-6 form-control",
                          attrs: { type: "text", placeholder: "Name Search" },
                          domProps: { value: _vm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.name = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "col-5 btn btn-sm btn-info dropdown-toggle",
                            attrs: {
                              type: "button",
                              id: "nameOption",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [_vm._v(" " + _vm._s(_vm.nameCurrent) + " ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown-menu dropdown-primary" },
                          _vm._l(_vm.nameOptions, function(col, index) {
                            return _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.nameCurrent = col
                                  }
                                }
                              },
                              [_vm._v(" " + _vm._s(col) + " ")]
                            )
                          })
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row no-top" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("h4", [_vm._v(" SSN: ")]),
                      _c("p", { staticClass: "no-marg" }, [
                        _vm._v("No dashes")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ssn,
                              expression: "ssn"
                            }
                          ],
                          staticClass: "col-6 form-control",
                          attrs: { type: "text", placeholder: "SSN Search" },
                          domProps: { value: _vm.ssn },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.ssn = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "col-5 btn btn-sm btn-secondary dropdown-toggle",
                            attrs: {
                              type: "button",
                              id: "ssnOption",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [_vm._v(" " + _vm._s(_vm.ssnCurrent) + " ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown-menu dropdown-primary" },
                          _vm._l(_vm.ssnOptions, function(col, index) {
                            return _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.ssnCurrent = col
                                  }
                                }
                              },
                              [_vm._v(" " + _vm._s(col) + " ")]
                            )
                          })
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("h4", [_vm._v("DOB Range:")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "div",
                        { staticClass: "block" },
                        [
                          _c("el-date-picker", {
                            attrs: {
                              format: "MM-dd-yyyy",
                              "value-format": "MM-dd-yyyy",
                              editable: ""
                            },
                            model: {
                              value: _vm.startDate,
                              callback: function($$v) {
                                _vm.startDate = $$v
                              },
                              expression: "startDate"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "div",
                        { staticClass: "block" },
                        [
                          _c("el-date-picker", {
                            attrs: {
                              format: "MM-dd-yyyy",
                              "value-format": "MM-dd-yyyy",
                              editable: ""
                            },
                            model: {
                              value: _vm.endDate,
                              callback: function($$v) {
                                _vm.endDate = $$v
                              },
                              expression: "endDate"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-lg btn-success",
                        attrs: { id: "searchBtn" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.submitSearch($event)
                          }
                        }
                      },
                      [_vm._v(" Submit Search ")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tableShow,
                      expression: "tableShow"
                    }
                  ],
                  staticClass: "row"
                },
                [
                  _c(
                    "el-table",
                    {
                      staticStyle: { width: "100%" },
                      attrs: {
                        data: _vm.test,
                        stripe: "",
                        "max-height": "500",
                        "default-sort": { prop: "NAME", order: "ascending" },
                        fit: ""
                      }
                    },
                    [
                      _c("el-table-column", {
                        attrs: { type: "expand" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(props) {
                              return [
                                _c("h4", [_vm._v("Expanded Files: ")]),
                                _vm._v(" "),
                                _c("p", [_vm._v(_vm._s(props.row.EXPANDED))])
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "TYPE",
                          label: "TYPE",
                          sortable: "",
                          "min-width": "80"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "NAME",
                          label: "NAME",
                          sortable: "",
                          "min-width": "180"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "SSN",
                          label: "SSN",
                          sortable: "",
                          "min-width": "100"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "GRADE",
                          label: "GRADE",
                          sortable: "",
                          "min-width": "100"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "DOB",
                          label: "DOB",
                          sortable: "",
                          "min-width": "100"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "FILES",
                          label: "FILES",
                          sortable: "",
                          "min-width": "480"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { label: "Delete", "min-width": "90" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
                                  "el-button",
                                  {
                                    attrs: { size: "mini", type: "danger" },
                                    on: {
                                      click: function($event) {
                                        _vm.handleDelete(
                                          scope.$index,
                                          scope.row
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Delete")]
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tableShow,
                      expression: "tableShow"
                    }
                  ],
                  staticClass: "row"
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      on: { click: _vm.downloadTable }
                    },
                    [_vm._v("DOWNLOAD Current Table")]
                  )
                ]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-02e1eeca", esExports)
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5WZ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "transition-group",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _c("loader", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loaded,
                expression: "!loaded"
              }
            ],
            key: "loader"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loaded,
                  expression: "loaded"
                }
              ],
              key: "content"
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("h1", { staticClass: "col" }, [_vm._v("SURF CIP")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-4 text-right",
                    staticStyle: { "margin-top": "15px" }
                  },
                  [
                    _vm._v("\n      Data as of: \n      "),
                    _c(
                      "span",
                      {
                        staticStyle: { "font-weight": "bold", color: "#4d8bf9" }
                      },
                      [_vm._v(" " + _vm._s(_vm.asDate) + " ")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col inline-form-group",
                    attrs: { id: "radioSelect" }
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.force,
                              expression: "force"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "force",
                            type: "radio",
                            value: "officer"
                          },
                          domProps: { checked: _vm._q(_vm.force, "officer") },
                          on: {
                            change: function($event) {
                              _vm.force = "officer"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Officer")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.force,
                              expression: "force"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "force",
                            type: "radio",
                            value: "enlisted"
                          },
                          domProps: { checked: _vm._q(_vm.force, "enlisted") },
                          on: {
                            change: function($event) {
                              _vm.force = "enlisted"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Enlisted")]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("This page is used to generate SURFs.")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h2", [_vm._v("Step 1: Upload SSN list ")]),
              _vm._v(" "),
              _c("div", { staticClass: "container-responsive" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      {
                        attrs: { id: "drop" },
                        on: {
                          drop: _vm.handleDrop,
                          dragover: _vm.handleDragover,
                          dragenter: _vm.handleDragover
                        }
                      },
                      [_vm._v("Drop File Here")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step2,
                        expression: "step2"
                      }
                    ],
                    staticClass: "container"
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-3 no-left" }, [
                        _c("h2", [_vm._v("Step 2:Preprocess")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("div", { staticClass: "dropdown" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-sm btn-primary dropdown-toggle",
                              attrs: {
                                type: "button",
                                id: "dropdownMenu1",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              }
                            },
                            [_vm._v(" " + _vm._s(_vm.dropDownText) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown-menu dropdown-primary" },
                            _vm._l(_vm.columns, function(col, index) {
                              return _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.selectCol(index)
                                    }
                                  }
                                },
                                [_vm._v(" " + _vm._s(col) + " ")]
                              )
                            })
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
                        _vm.selectedCol >= 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-amber",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.processSSN($event)
                                  }
                                }
                              },
                              [_vm._v(" Process SSNs ")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        _vm._l(_vm.workbook.SheetNames, function(sheet, index) {
                          return _c(
                            "button",
                            {
                              class: [
                                "btn",
                                "btn-sm",
                                index == _vm.currentSheetIndex
                                  ? "btn-success"
                                  : "btn-info"
                              ],
                              on: {
                                click: function($event) {
                                  _vm.changeSheet(index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                " \n              " +
                                  _vm._s(sheet) +
                                  " \n            "
                              )
                            ]
                          )
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showGrid,
                            expression: "showGrid"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("v-data-table", {
                          staticClass: "elevation-1",
                          attrs: {
                            headers: _vm.headersV1,
                            items: _vm.myGridTop10,
                            "hide-actions": ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "items",
                              fn: function(props) {
                                return _c(
                                  "tr",
                                  {},
                                  _vm._l(_vm.headersV1, function(col) {
                                    return _c("td", [
                                      _vm._v(_vm._s(props.item[col.text]))
                                    ])
                                  })
                                )
                              }
                            }
                          ])
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-4",
                            staticStyle: {
                              "margin-left": "0",
                              "padding-left": "0"
                            }
                          },
                          [_c("h2", [_vm._v("Step 3:Confirm SSNs")])]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.board,
                                expression: "board"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", placeholder: "Board Name" },
                            domProps: { value: _vm.board },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.board = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-info",
                              on: {
                                click: function($event) {
                                  _vm.dialog = true
                                }
                              }
                            },
                            [_vm._v("Add SSN")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-sm btn-danger " },
                            [_vm._v(" Bad: " + _vm._s(_vm.numBad) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              class: ["btn", "btn-sm", "btn-amber"],
                              attrs: {
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Validate with our records"
                              },
                              on: { click: _vm.validate }
                            },
                            [_vm._v(" Validate List ")]
                          ),
                          _vm._v(" "),
                          _vm.numValidated > 0
                            ? _c(
                                "button",
                                {
                                  class: ["btn", "btn-sm", "btn-success"],
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title:
                                      "Make sure the currect type of SURF is requested"
                                  },
                                  on: { click: _vm.runSurf }
                                },
                                [
                                  _vm._v(
                                    " Run (" +
                                      _vm._s(_vm.numValidated) +
                                      ") " +
                                      _vm._s(_vm.force) +
                                      " " +
                                      _vm._s(_vm.typeString) +
                                      " "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "h6",
                          {
                            staticStyle: {
                              "margin-top": "12px",
                              "margin-left": "20px"
                            }
                          },
                          [
                            _vm._v(
                              "Showing rows " +
                                _vm._s(
                                  (_vm.currentPageGrid2 - 1) *
                                    _vm.pageSizeGrid2 +
                                    1
                                ) +
                                " - " +
                                _vm._s(_vm.currentPageGrid2 * _vm.pageSizeGrid2)
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-info",
                            on: { click: _vm.prevPage }
                          },
                          [_vm._v("← Previous Page")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-info",
                            on: { click: _vm.nextPage }
                          },
                          [_vm._v("Next Page →")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-6" },
                          [
                            _c(
                              "v-app",
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: {
                                      "data-app": "true",
                                      "max-width": "500px"
                                    },
                                    model: {
                                      value: _vm.dialog,
                                      callback: function($$v) {
                                        _vm.dialog = $$v
                                      },
                                      expression: "dialog"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-card-title", [
                                          _c(
                                            "span",
                                            { staticClass: "headline" },
                                            [_vm._v(_vm._s(_vm.formTitle))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-container",
                                              { attrs: { "grid-list-md": "" } },
                                              [
                                                _c(
                                                  "v-layout",
                                                  { attrs: { wrap: "" } },
                                                  [
                                                    _c(
                                                      "v-flex",
                                                      {
                                                        attrs: {
                                                          xs12: "",
                                                          sm6: "",
                                                          md4: ""
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: "SSN"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .SSN,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "SSN",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.SSN"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-actions",
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.close($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Cancel")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.save($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Save")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-data-table", {
                                  staticClass: "elevation-1",
                                  attrs: {
                                    headers: _vm.headersV,
                                    items: _vm.slicedGrid2,
                                    "hide-actions": "",
                                    "min-height": "1vh"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "items",
                                      fn: function(props) {
                                        return _c("tr", {}, [
                                          _c(
                                            "td",
                                            {
                                              staticClass: "my-2 text-xs-right",
                                              on: { click: function($event) {} }
                                            },
                                            [_vm._v(_vm._s(props.item.SSN))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass: "my-2 text-xs-right",
                                              on: { click: function($event) {} }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(props.item.SSN_FORMAT)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass: "my-2 text-xs-right",
                                              on: { click: function($event) {} }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(props.item.VALIDATED)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "justify-center layout px-0",
                                              on: { click: function($event) {} }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-0",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.editItem(props.item)
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "teal" }
                                                    },
                                                    [_vm._v("edit")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-0",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.deleteItem(props.item)
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "pink" }
                                                    },
                                                    [_vm._v("delete")]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      }
                                    }
                                  ])
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-success",
                                  on: { click: _vm.downloadTable }
                                },
                                [_vm._v("DOWNLOAD Current Table")]
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-6" }, [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showButton,
                                  expression: "showButton"
                                }
                              ],
                              ref: "surfButton",
                              staticClass: "btn btn-sm btn-info ",
                              attrs: {
                                href: _vm.href,
                                download:
                                  _vm.boardLink + " " + _vm.typeString + ".zip"
                              }
                            },
                            [_vm._v(" TEST ")]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21133923", esExports)
  }
}

/***/ }),

/***/ "6Tc7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue__ = __webpack_require__("xbG2");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a76e93e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DatePicker_vue__ = __webpack_require__("7cto");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("pbL7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a76e93e8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DatePicker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a76e93e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DatePicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/DatePicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a76e93e8", Component.options)
  } else {
    hotAPI.reload("data-v-a76e93e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "6mfV":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("VrXl");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("49f9a3ff", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fb2b07a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ADP.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fb2b07a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ADP.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "7aYl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-a76e93e8], *[data-v-a76e93e8]::before, *[data-v-a76e93e8]::after {\n    -webkit-box-sizing: inherit;\n            box-sizing: inherit;\n}\ndiv[data-v-a76e93e8], h2[data-v-a76e93e8], h3[data-v-a76e93e8], h4[data-v-a76e93e8], table[data-v-a76e93e8], tbody[data-v-a76e93e8], thead[data-v-a76e93e8], tr[data-v-a76e93e8], td[data-v-a76e93e8], button[data-v-a76e93e8] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\nbutton[data-v-a76e93e8] {\n  border-radius: 2px;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  padding: 0 16px;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.flex[data-v-a76e93e8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flex-center[data-v-a76e93e8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.date-picker-container[data-v-a76e93e8], .date-picker-background[data-v-a76e93e8] {\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.date-picker-container[data-v-a76e93e8] {\n  line-height: 1.5;\n  z-index: 9998;\n}\n.date-picker-background[data-v-a76e93e8] {\n  background-color: rgba(0, 0, 0, 0.1);\n  z-index: 9999;\n}\n.calendar-faint[data-v-a76e93e8] {\n  opacity: 0.75;\n}\n.calendar-container[data-v-a76e93e8] {\n  top: -100px;\n  background-color: black;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 12px 52px rgba(0, 0, 0, 0.25);\n          box-shadow: 0 12px 52px rgba(0, 0, 0, 0.25);\n  cursor: initial;\n  margin: 0 20%;\n  position: relative;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  width: 350px;\n  z-index: 10001;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.calendar[data-v-a76e93e8] {\n  height: 500px;\n  position: relative;\n}\n.hidden-footer .calendar[data-v-a76e93e8] {\n  height: 100px;\n}\n.calendar-header[data-v-a76e93e8] {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 16px 28px;\n}\n.calendar-header h2[data-v-a76e93e8], .calendar-header h3[data-v-a76e93e8] {\n  cursor: default;\n}\n.calendar-header h2.calendar-faint[data-v-a76e93e8], .calendar-header h3.calendar-faint[data-v-a76e93e8] {\n  cursor: pointer;\n}\n.calendar-header h2[data-v-a76e93e8] {\n  font-size: 28px;\n  line-height: 30px;\n  margin-top: 3px;\n}\n.calendar-header h3[data-v-a76e93e8] {\n  font-size: 1.125rem;\n  font-weight: 300;\n}\n.calendar-body[data-v-a76e93e8] {\n  background-color: #9e9e9e;\n  padding: 16px;\n}\n.calendar-date[data-v-a76e93e8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.calendar-date .calendar-arrows.left[data-v-a76e93e8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.calendar-current-date[data-v-a76e93e8] {\n  cursor: default;\n  text-align: center;\n}\n.calendar-date .calendar-arrows.right[data-v-a76e93e8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.calendar-date > div[data-v-a76e93e8] {\n  width: 33.333%;\n}\n.calendar-date h4[data-v-a76e93e8] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.calendar-arrows[data-v-a76e93e8] {\n  cursor: pointer;\n  padding: 0 8px;\n}\n.calendar-body table[data-v-a76e93e8] {\n  border-spacing: 2px;\n  border-collapse: separate;\n  cursor: default;\n  font-size: 12px;\n  margin-top: 8px;\n  table-layout: fixed;\n  text-align: center;\n  width: 100%;\n}\n.calendar-body table thead[data-v-a76e93e8] {\n  color: #757575;\n}\n.calendar-body table thead td[data-v-a76e93e8], .calendar-body table thead td[data-v-a76e93e8] {\n  cursor: default!important;\n}\n.calendar-body tr[data-v-a76e93e8] {\n  height: 43px;\n  vertical-align: middle;\n}\n.calendar-body td[data-v-a76e93e8] {\n  border-radius: 50%;\n  cursor: pointer;\n  vertical-align: middle;\n  -webkit-transition: background-color .15s;\n  transition: background-color .15s;\n  width: 43px;\n}\n.calendar-body td[data-v-a76e93e8]:focus {\n  outline: none;\n}\n.calendar-body tbody td[data-v-a76e93e8]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.calendar-body td[data-v-a76e93e8]:empty {\n  background-color: transparent!important;\n  cursor: default;\n}\n.calendar-body td.current-day[data-v-a76e93e8] {\n  font-weight: bold;\n}\n.calendar-body td.disabled[data-v-a76e93e8] {\n  color: #c5c5c5;\n  cursor: default;\n  pointer-events: none;\n}\n.calendar-body td.selected[data-v-a76e93e8] {\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n}\n.calendar-year-select[data-v-a76e93e8] {\n  -webkit-box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.075);\n  height: 353px;\n  overflow-y: scroll;\n  text-align: center;\n}\n.hidden-footer .calendar-year-select[data-v-a76e93e8] {\n  height: 378px;\n}\n.calendar-year-select div[data-v-a76e93e8] {\n  cursor: pointer;\n  padding: 8px 0;\n  -webkit-transition: background-color .15s;\n  transition: background-color .15s;\n}\n.calendar-year-select div[data-v-a76e93e8]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.calendar-year-select .selected[data-v-a76e93e8] {\n  font-size: 24px;\n}\n.calendar-footer[data-v-a76e93e8] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n}\n.calendar-footer button[data-v-a76e93e8] {\n  background-color: transparent;\n  border: 1px solid transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.calendar-fade-enter-active[data-v-a76e93e8], .calendar-fade-leave-active[data-v-a76e93e8] {\n  -webkit-transition: opacity .15s;\n  transition: opacity .15s;\n}\n.calendar-fade-enter[data-v-a76e93e8], .calendar-fade-leave-to[data-v-a76e93e8] {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "7cto":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "date-picker-container flex-center",
      class: { "hidden-footer": _vm.footer }
    },
    [
      _c("div", {
        staticClass: "date-picker-background flex-center",
        on: {
          click: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
            return _vm.onClose($event)
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "calendar-container" }, [
        _c("div", { staticClass: "calendar" }, [
          _c(
            "div",
            {
              staticClass: "calendar-header flex-center",
              style: { "background-color": _vm.color }
            },
            [
              _c("div", [
                _c(
                  "h3",
                  {
                    class: { "calendar-faint": _vm.selecting === "date" },
                    on: {
                      click: function($event) {
                        _vm.setSelecting("year")
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.selectedYear) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "h2",
                  {
                    class: { "calendar-faint": _vm.selecting === "year" },
                    on: {
                      click: function($event) {
                        _vm.setSelecting("date")
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.abbrivatedDay) +
                        ", " +
                        _vm._s(_vm.selectedMonthWord) +
                        " " +
                        _vm._s(_vm.selectedDay) +
                        "\n          "
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _vm.selecting === "date"
            ? _c("div", { staticClass: "calendar-body grey lighten-5" }, [
                _c("div", { staticClass: "calendar-date" }, [
                  _c("div", [
                    _vm.showLeftArrow
                      ? _c(
                          "div",
                          {
                            staticClass: "calendar-arrows flex left",
                            on: {
                              click: function($event) {
                                _vm.setByMonth(_vm.currentMonth - 1)
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    fill: "#212121",
                                    d:
                                      "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "calendar-current-date flex-center" },
                    [
                      _c("h4", [
                        _vm._v(
                          _vm._s(_vm.currentMonthWord) +
                            " " +
                            _vm._s(_vm.currentYear)
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _vm.showRightArrow
                      ? _c(
                          "div",
                          {
                            staticClass: "calendar-arrows flex right",
                            on: {
                              click: function($event) {
                                _vm.setByMonth(_vm.currentMonth + 1)
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    fill: "#212121",
                                    d:
                                      "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("table", [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.calendar, function(days, index) {
                      return _c(
                        "tr",
                        { key: index },
                        _vm._l(days, function(day) {
                          return _c(
                            "td",
                            {
                              key: "day-" + day.day,
                              class: {
                                "current-day": day.currentDay,
                                disabled: day.disabled,
                                selected: day.selected
                              },
                              style: {
                                color:
                                  day.currentDay && !day.selected
                                    ? _vm.color
                                    : "",
                                "background-color": day.selected
                                  ? _vm.color
                                  : ""
                              },
                              attrs: { tabindex: "0" },
                              on: {
                                keydown: [
                                  function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.onInput($event)
                                  },
                                  function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "space",
                                        32,
                                        $event.key,
                                        " "
                                      )
                                    ) {
                                      return null
                                    }
                                    $event.stopPropagation()
                                    $event.preventDefault()
                                    return _vm.onInput($event)
                                  },
                                  function($event) {
                                    if (
                                      !("button" in $event) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "esc",
                                        27,
                                        $event.key,
                                        "Escape"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.onClose($event)
                                  }
                                ],
                                click: function($event) {
                                  _vm.setByDay(day)
                                }
                              }
                            },
                            [_vm._v(_vm._s(day.day))]
                          )
                        })
                      )
                    })
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.selecting === "year"
            ? _c(
                "div",
                { staticClass: "calendar-year-select" },
                _vm._l(_vm.years, function(year) {
                  return _c(
                    "div",
                    {
                      key: year.year,
                      class: { selected: year.selected },
                      style: { color: year.selected ? _vm.color : "" },
                      attrs: { id: year.year + "-calendar-year" },
                      on: {
                        click: function($event) {
                          _vm.setByYear(year.year)
                        }
                      }
                    },
                    [_vm._v("\n          " + _vm._s(year.year) + "\n        ")]
                  )
                })
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.footer
            ? _c("div", { staticClass: "calendar-footer" }, [
                _c(
                  "button",
                  {
                    style: { color: _vm.color },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        $event.preventDefault()
                        return _vm.onClose($event)
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    style: { color: _vm.color },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        $event.preventDefault()
                        return _vm.onInput($event)
                      }
                    }
                  },
                  [_vm._v("Ok")]
                )
              ])
            : _vm._e()
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("S")]),
        _vm._v(" "),
        _c("td", [_vm._v("M")]),
        _vm._v(" "),
        _c("td", [_vm._v("T")]),
        _vm._v(" "),
        _c("td", [_vm._v("W")]),
        _vm._v(" "),
        _c("td", [_vm._v("T")]),
        _vm._v(" "),
        _c("td", [_vm._v("F")]),
        _vm._v(" "),
        _c("td", [_vm._v("S")])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a76e93e8", esExports)
  }
}

/***/ }),

/***/ "7zck":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9GrG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(d3, FileSaver) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DatePicker__ = __webpack_require__("6Tc7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Loader__ = __webpack_require__("wd27");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__("wtEF");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			asDate: 'Undetermined',
			loaded: true,
			name: '',
			ssn: '',
			dob: null,
			nameCurrent: 'Contains',
			nameOptions: ['Contains', 'Starts With'],
			ssnCurrent: 'Contains',
			ssnOptions: ['Contains', 'Starts With'],
			dobStart: '',
			dobEnd: null,
			date: null,
			startDate: null,
			endDate: null,
			dateBool: true,
			datetime: null,
			menu: false,
			modal: false,
			menu2: false,
			show: false,
			tableShow: false,
			test: []
		};
	},

	components: {
		DatePicker: __WEBPACK_IMPORTED_MODULE_0__DatePicker__["a" /* default */],
		loader: __WEBPACK_IMPORTED_MODULE_2__Loader__["default"]
	},
	mounted: function mounted() {
		this.asDate = __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* store */].state.lookup;
		console.log(this.datetime);
	},

	watch: {
		startDate: function startDate(val) {
			if (this.dateBool) {
				this.endDate = val;
				this.dateBool = false;
			}
		}
	},
	methods: {
		downloadTable: function downloadTable() {
			var blob = new Blob([d3.csv.format(this.test)], { type: "text/csv;charset=utf-8" });
			FileSaver.saveAs(blob, 'Lookup.csv');
		},
		submitSearch: function submitSearch() {
			var _this = this;

			this.loaded = false;
			var querystring = __webpack_require__("1nuA");
			var dt = null;
			if (!this.startDate) this.startDate = this.endDate;
			if (!this.endDate) this.endDate = this.startDate;
			dt = this.startDate + ' ' + this.endDate;
			var formData = {
				'_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
				'nPage': "lookup",
				'name': this.name.toUpperCase(),
				'nameType': this.nameCurrent,
				'ssn': this.ssn,
				'ssnType': this.ssnCurrent,
				'dob': dt
			};
			__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.headers.get['Accepts'] = 'application/json';
			__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(axios_url_surf, querystring.stringify(formData)).then(function (response) {
				console.log(response);
				if (response.data.success) {
					_this.test = response.data.data;
					_this.tableShow = true;
					_this.loaded = true;
				} else {
					alert(response.data.error);
				}
			}).catch(function (error) {
				console.log(error.response);
				this.loaded = true;
			});
		},
		handleEdit: function handleEdit(index, row) {
			console.log(index, row);
		},
		handleDelete: function handleDelete(index, row) {
			this.test.splice(index, 1);
			console.log(index, row);
		}
	}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("Za4h"), __webpack_require__("lDdF")))

/***/ }),

/***/ "9bqw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vml_vue__ = __webpack_require__("ZmmJ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_84d3f796_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vml_vue__ = __webpack_require__("S5/p");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("1eKf")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-84d3f796"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vml_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_84d3f796_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vml_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/vml.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84d3f796", Component.options)
  } else {
    hotAPI.reload("data-v-84d3f796", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Drc2":
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "GbnY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(FileSaver, d3) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("uXZL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loader__ = __webpack_require__("wd27");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__("wtEF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip__ = __webpack_require__("WgY6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jszip__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      asDate: 'Undetermined',
      sentWarning: false,
      loaded: true,
      showGrid: false,
      step3: false,
      step2: false,
      showButton: false,
      board: '',
      workbook: {
        Sheets: [''],
        SheetNames: ['']
      },
      force: 'officer',
      type: 'cip',
      sheet_json: [],
      headers: [],
      selectedCol: -1,
      currentSheetIndex: 0,
      myGrid: {
        data: ['']
      },
      myGrid2: {
        data: ['']
      },
      pageSizeGrid2: 10,
      currentPageGrid2: 1,
      currentSort: 'SSN_FORMAT',
      showBad: false,
      dialog: false,
      editedIndex: -1,
      editedItem: {
        SSN: ''
      },
      defaultItem: {
        SSN: ''
      },
      headersV: [],
      href: '',
      ssnList: [],
      numGood: 0,
      numBad: 0,
      numValidated: 0,
      totalParts: 0,
      currentParts: 0,
      state: {
        headers: [''],
        tickets: [''],
        myGrid: []
      },
      zip: {},
      folder: {}
    };
  },
  mounted: function mounted() {
    this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adoff;
    this.zip = new __WEBPACK_IMPORTED_MODULE_5_jszip___default.a();
    this.folder = this.zip.folder('folder');
    // this.myGrid = canvasDatagrid();
    // document.getElementById('myGrid').appendChild(this.myGrid)
    // this.myGrid2 = canvasDatagrid();
    // document.getElementById('myGrid2').appendChild(this.myGrid2)
  },

  components: {
    loader: __WEBPACK_IMPORTED_MODULE_3__Loader__["default"]
  },
  computed: {
    slicedGrid2: function slicedGrid2() {
      var _this = this;

      return this.myGrid2.data.filter(function (row, index) {
        var start = (_this.currentPageGrid2 - 1) * _this.pageSizeGrid2;
        var end = _this.currentPageGrid2 * _this.pageSizeGrid2;
        if (index >= start && index < end) return true;
      });
    },
    boardLink: function boardLink() {
      var forceString = 'Enlisted';
      if (this.force == 'officer') forceString = 'Officer';

      if (this.board) return this.board + ' ' + forceString;else return 'SURF ' + forceString;
    },
    myGridTop10: function myGridTop10() {
      var limit = this.myGrid.data.length;
      if (limit > 10) limit = 10;
      return this.myGrid.data.slice(0, limit);
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },

    typeString: function typeString() {
      var test = this.type;
      if (test == 'masked') return 'Masked';else if (test == 'unmasked') return 'Unmasked';else if (test == 'with') return 'With Professional Specialty';else if (test == 'without') return 'Without Professional Specialty';
    },
    currentSheetName: function currentSheetName() {
      return this.workbook.SheetNames[this.currentSheetIndex];
    },
    worksheet: function worksheet() {
      return this.workbook.Sheets[this.currentSheetName];
    },
    columns: function columns() {
      return this.headers[this.currentSheetIndex];
      //return this.sheet_json[this.currentSheetIndex][0];
    },
    headersV1: function headersV1() {
      var col = this.headers[this.currentSheetIndex];
      var toReturn = [];
      if (col) {
        col.forEach(function (d) {
          toReturn.push({
            'text': d,
            'value': d
          });
        });
      }
      return toReturn;
    },
    dropDownText: function dropDownText() {
      if (this.selectedCol == -1) return 'Select SSN Column';else return this.columns[this.selectedCol];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    selectedCol: function selectedCol(val) {
      this.showGrid = true;
    },

    currentSheetIndex: function currentSheetIndex(val) {
      this.showGrid = true;
      this.myGrid.data = this.sheet_json[this.currentSheetIndex];
      // this.headersV1 = [];
      // this.columns.forEach((d)=>{
      //   this.headersV1.push({
      //     'text': d,
      //     'value': d,
      //   })
      // })
      this.selectedCol = -1;
    },
    force: function force(val) {
      if (val == 'officer') {
        this.type = 'masked';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adoff;
      } else {
        this.type = 'with';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adenl;
      }
      this.numValidated = 0;
    }
  },
  methods: {
    nextPage: function nextPage() {
      if (this.currentPageGrid2 * this.pageSizeGrid2 < this.myGrid2.data.length) this.currentPageGrid2++;
    },
    prevPage: function prevPage() {
      if (this.currentPageGrid2 > 1) this.currentPageGrid2--;
    },
    downlaodZip: function downlaodZip() {
      var _this2 = this;

      this.loaded = false;
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });

      var querystring = __webpack_require__("1nuA");
      var formData = {
        '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
        'nPage': "runSurf",
        'force': this.force,
        'type': this.type,
        'board': this.board,
        'list': list.join(',')
      };

      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, {
        data: querystring.stringify(formData),
        headers: {
          'Content-Type': 'application/zip',
          'Accept': 'application/zip'
        },
        responseType: 'arraybuffer'
      }).then(function (response) {
        var reader = new window.FileReader();
        console.log(response);

        _this2.loaded = true;
      }).catch(function (error) {
        console.log(error.response);
        this.loaded = true;
      });

      // axios.post(axios_url_surf, querystring.stringify(formData)).then(response => {
      //     this.onReturn(response.data)
      // }).catch(function (error) {
      //     console.log(error.response);
      //     this.loaded=true;
      // });
    },
    sortByCol: function sortByCol(arr) {
      var _this3 = this;

      return arr.sort(function (a, b) {
        var modifier = 1;
        //if(this.currentSortDir === 'desc') modifier = -1;
        if (a[_this3.currentSort] < b[_this3.currentSort]) return -1 * modifier;
        if (a[_this3.currentSort] > b[_this3.currentSort]) return 1 * modifier;
        return 0;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.myGrid2.data.indexOf(item);
      this.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var index = this.myGrid2.data.indexOf(item);
      this.myGrid2.data.splice(index, 1);
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
      //this.numGood = 0
      setTimeout(function () {
        _this4.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      if (this.editedIndex > -1) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.myGrid2.data[this.editedIndex], this.editedItem);
      } else {
        this.myGrid2.data.push(this.editedItem);
        var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
        this.myGrid2.data = parsed;
        this.step3 = true;
        //this.numGood = 0
      }
      this.close();
    },
    onReturn: function onReturn(returned) {
      this.currentSort = 'VALIDATED';
      var statusFormat = {
        '1': 'GOOD',
        '7': 'ERROR: NOT FOUND ON FILE',
        '8': 'ERROR: DUPLICATE',
        '9': 'ERROR'
      };
      if (returned.data) {
        this.currentParts += 1;
        var ret = returned.data;
        ret.forEach(function (record) {
          record.STATUS = statusFormat[record.STATUS];
        });
        var parsed = this.parse(ret, 'SSN', 2);
        if (this.currentParts <= 1) {
          this.myGrid2.data = parsed;
          this.numValidated = this.numGood;
        } else {
          this.myGrid2.data = this.sortByCol(this.myGrid2.data.concat(parsed));
          this.numValidated += this.numGood;
        }
        this.step3 = true;
      }
      console.log(this.currentParts + ' VS ' + this.totalParts);
      if (this.currentParts >= this.totalParts) this.loaded = true;
      console.log('SHOW graph: ' + !this.loaded);
      console.log('test----');
    },
    validate: function validate() {
      var _this5 = this;

      this.loaded = false;
      this.currentSort = 'SSN_FORMAT';
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log('len: ' + list.length);
      if (list.length <= 500) {
        console.log('SINGLE RUN');
        this.totalParts = 0;
        this.currentParts = 0;
        var querystring = __webpack_require__("1nuA");
        var _formData = {
          '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
          'nPage': "validate",
          'force': this.force,
          'type': this.type,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, querystring.stringify(_formData)).then(function (response) {
          _this5.onReturn(response.data);
        }).catch(function (error) {
          console.log(error.response);
        });
      } else {
        console.log('MULTI RUN');
        var nums = Math.floor(list.length / 500);
        var remaining = list.length % 500;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        console.log('nums: ' + nums);
        this.totalParts = nums;
        this.currentParts = 0;
        var splitList = [];
        for (var i = 1; i <= nums; i++) {
          if (i != nums) {
            splitList = list.slice(500 * (i - 1), 500 * i);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + 500 * i);
          } else {
            splitList = list.slice(500 * (i - 1), 500 * (i - 1) + remaining);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + (500 * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
            'nPage': "validate",
            'force': this.force,
            'type': this.type,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, querystring.stringify(formData)).then(function (response) {
            _this5.onReturn(response.data);
          }).catch(function (error) {
            console.log(error.response);
          });
        }
      }
    },
    runSurf: function runSurf() {
      var _this6 = this;

      this.loaded = false;
      var partLen = 200;
      this.sentWarning = true;
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log('len: ' + list.length);
      if (list.length <= partLen) {
        console.log('SINGLE PART');
        var querystring = __webpack_require__("1nuA");
        var _formData2 = {
          '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
          'nPage': "runSurf2",
          'force': this.force,
          'type': this.type,
          'board': this.board,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(axios_url_surf + '?' + querystring.stringify(_formData2), {
          responseType: 'arraybuffer',
          headers: {
            'Accept': 'application/zip'
          }
        }).then(function (response) {
          console.log('MADE IT HERE - Single Pull');
          console.log(response);
          console.log(response.data);

          function str2bytes(str) {
            var bytes = new Uint8Array(str.length);
            for (var i = 0; i < str.length; i++) {
              bytes[i] = str.charCodeAt(i);
            }
            return bytes;
          }

          var blob = new Blob([response.data], {
            type: 'application/zip'
          });

          console.log(blob);
          FileSaver.saveAs(blob, _this6.boardLink + ' ' + _this6.typeString + '.zip');
          _this6.loaded = true;
        });
      } else {
        console.log('MULTI PART');
        var nums = Math.floor(list.length / partLen);
        var remaining = list.length % partLen;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        this.totalParts = nums;
        this.currentParts = 0;
        console.log('nums: ' + nums);
        var splitList = [];
        for (var i = 1; i <= nums; i++) {

          if (i != nums) {
            splitList = list.slice(partLen * (i - 1), partLen * i);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + partLen * i);
          } else {
            splitList = list.slice(partLen * (i - 1), partLen * (i - 1) + remaining);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + (partLen * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
            'nPage': "runSurf",
            'force': this.force,
            'type': this.type,
            'board': this.board,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(axios_url_surf + '?' + querystring.stringify(formData), {
            responseType: 'arraybuffer',
            headers: {
              'Accept': 'application/zip'
            }
          }).then(function (response) {
            _this6.currentParts += 1;
            console.log('MADE IT HERE - ' + _this6.currentParts + ' of ' + _this6.totalParts);
            console.log(response);
            console.log(response.data);

            var blob = new Blob([response.data], {
              type: 'application/zip'
            });

            console.log(blob);
            FileSaver.saveAs(blob, _this6.boardLink + ' ' + _this6.typeString + ' ' + _this6.currentParts + ' of ' + _this6.totalParts + ' .zip');

            if (_this6.currentParts >= _this6.totalParts) _this6.loaded = true;
            // this.zip.loadAsync(blob)
            // .then(function (zippedFile) {
            //     console.log(zippedFile)
            //     zippedFile.forEach(function (relativePath, fileEntry) {
            //       console.log(relativePath)
            //       console.log(fileEntry)
            //       this.folder.file(relativePath, fileEntry)
            //     });
            // })
            // .then(function(){
            //   console.log(this.folder)
            //   if (this.currentParts >= this.totalParts){
            //     console.log('Last step, EXPORT')
            //     this.folder.generateAsync({type:"blob"})
            //     .then(function (content) {
            //         console.log('MADE BLOB, filesaver SAVE')
            //         console.log(' WHAt : ' +  content)
            //         // see FileSaver.js
            //         FileSaver.saveAs(content, this.boardLink + ' ' + this.typeString + '.zip');
            //     });
            //   }
            // })

            // this.zip.loadAsync(response.data).then(function (zip) {
            //   Object.keys(zip.files).forEach(function (filename) {
            //     this.folder.loadAsync(zip.files[filename], 
            //     zip.files[filename].async('string').then(function (fileData) {
            //       console.log(fileData) // These are your file contents      
            //     })
            //   })
            // })
            //FileSaver.saveAs(blob, this.boardLink + ' ' + this.typeString + '.zip');
          });
        }
      }
    },
    parse: function parse(data, select, option) {
      var _this7 = this;

      this.ssnList = [];
      var checkSSN = 'GOOD';
      var numGood = 0;
      var numBad = 0;

      var clean = '';
      var isNum = false;
      data.forEach(function (row) {
        if (row[select]) {
          clean = row[select].replace(/\W/g, '');
          isNum = /^\d+$/.test(clean);

          if (clean.length > 9) isNum = false;

          var rep = 9 - clean.length;
          if (rep > 0) clean = '0'.repeat(rep) + clean;

          if (!isNum) clean = row[select];

          var status = '';
          if (option == 2) {
            status = row['STATUS'];
            if (status == 'GOOD') numGood += 1;else numBad += 1;
          } else if (option == 1) {
            if (!isNum) numBad += 1;
          }

          if (option == 1) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum
            });
          } else if (option == 2) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum,
              'VALIDATED': status
            });
          }
        }
      });
      this.numGood = numGood;
      this.numBad = numBad;

      return this.sortByCol(this.ssnList);
    },
    processSSN: function processSSN() {
      var select = this.columns[this.selectedCol];
      if (select == 'UNKNOWN 1') select = '__EMPTY';else if (select.startsWith('UNKNOWN ')) {
        var numb = select.substr(8);
        select = '__EMPTY_' + numb;
      }
      var parsed = this.parse(this.sheet_json[this.currentSheetIndex], select, 1);
      //console.log(this.sheet_json[this.currentSheetIndex])
      this.myGrid2.data = parsed;
      this.step3 = true;
      this.showGrid = false;
    },
    selectCol: function selectCol(val) {
      this.selectedCol = val;
    },
    changeSheet: function changeSheet(num) {
      this.currentSheetIndex = num;
      //this.myGrid.data = XLSX.utils.sheet_to_json(this.worksheet)
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function removeImage(e) {
      this.image = '';
    },
    get_header_row: function get_header_row(sheet) {
      var headers = [],
          range = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.decode_range(sheet['!ref']);
      var C,
          R = range.s.r; /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell = sheet[__WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.encode_cell({ c: C, r: R })]; /* find the cell in the first row */
        //var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
        var hdr = '';
        if (C == 1) hdr = '__EMPTY';else hdr = '__EMPTY_' + C;
        if (cell && cell.t) hdr = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.format_cell(cell);
        headers.push(hdr);
      }
      //console.log(headers)
      return headers;
    },
    fixdata: function fixdata(data) {
      var o = "",
          l = 0,
          w = 10240;
      for (; l < data.byteLength / w; ++l) {
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
      }o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    },
    workbook_to_json: function workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function (sheetName) {
        var roa = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      return result;
    },
    downloadTable: function downloadTable() {
      var blob = new Blob([d3.csv.format(this.myGrid2.data)], { type: "text/csv;charset=utf-8" });
      FileSaver.saveAs(blob, this.boardLink + ' ' + this.typeString + '.csv');
    },

    /** PARSING and DRAGDROP **/
    handleDrop: function handleDrop(e) {
      var _this8 = this;

      this.currentSort = 'SSN_FORMAT';
      e.stopPropagation();
      e.preventDefault();
      console.log("DROPPED");
      var files = e.dataTransfer.files,
          i,
          f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader(),
            name = f.name;
        reader.onload = function (e) {
          var results,
              data = e.target.result,
              fixedData = _this8.fixdata(data);
          _this8.workbook = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.read(btoa(fixedData), { type: 'base64' });
          _this8.sheet_json = [];
          _this8.headers = [];
          //this.selectedCol = 1;
          for (var d in _this8.workbook.Sheets) {
            var sheet = _this8.workbook.Sheets[d];
            var page = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_json(sheet);

            _this8.sheet_json.push(page);
            _this8.headers.push(_this8.get_header_row(sheet));
          }
          // this.myGrid = canvasDatagrid();
          var div = document.getElementById('myGrid');
          _this8.myGrid.data = _this8.sheet_json[_this8.currentSheetIndex];

          // while(div.firstChild){
          //     div.removeChild(div.firstChild);
          // }
          // document.getElementById('myGrid').appendChild(this.myGrid)
        };
        reader.readAsArrayBuffer(f);
      }
      this.headersV = [{
        text: 'SSN',
        align: 'left',
        value: 'SSN'
      }, { text: 'SSN_FORMAT', value: 'SSN_FORMAT' },, { text: 'VALIDATED', value: 'VALIDATED' }];
      this.showGrid = true;
      this.step2 = true;
    },
    handleDragover: function handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index);
      var toDelete = index;
      if (this.currentPageGrid2 > 1) toDelete = index + (this.currentPageGrid2 - 1) * this.pageSizeGrid2;
      console.log(toDelete);
      if (index !== undefined && index >= 0) {
        this.myGrid2.data.splice(toDelete, 1);
      }
    }
  },
  beforeUpdate: function beforeUpdate() {
    console.log("beforeupdate");
    console.log(this.headersV1);
    console.log(this.columns);
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("lDdF"), __webpack_require__("Za4h")))

/***/ }),

/***/ "HhOn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AD_Grab_vue__ = __webpack_require__("d2X4");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b0dd9b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AD_Grab_vue__ = __webpack_require__("mPRR");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("Qjkc")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b0dd9b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AD_Grab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b0dd9b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AD_Grab_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/AD_Grab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b0dd9b0", Component.options)
  } else {
    hotAPI.reload("data-v-1b0dd9b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "I6jU":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.el-table__footer-wrapper[data-v-84d3f796], .el-table__header-wrapper[data-v-84d3f796]{\n\twidth: 500;\n\tcolor:red;\n}\ninput[type=\"text\"].form-control[data-v-84d3f796]{\n\tdisplay: inline-block;\n    color:black;\n    padding:5px;\n    border-radius: 5px;\n    position: relative;\n    //transform: translateY(-10%);\n    margin-bottom: 0px;\n    //margin-top: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #ffffff;\n    -webkit-box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n            box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n}\nh4[data-v-84d3f796]{\n\tfont-weight: bold;\n\tmargin-bottom: 0;\n}\n#searchBtn[data-v-84d3f796]{\n\theight: 100px;\n\tmargin-top: 70px;\n\tmargin-left: 70px;\n}\n.dropdown-toggle[data-v-84d3f796]{\n\tdisplay: inline-block;\n\t//margin-bottom: 0;\n\t//padding-bottom: 0;\n}\n.no-top[data-v-84d3f796]{\n\tmargin-top: 0;\n\tmargin-bottom: 18px;\n}\n.fade-enter-active[data-v-84d3f796] {\n        -webkit-transition: all 0.5s;\n        transition: all 0.5s;\n}\n.fade-leave-active[data-v-84d3f796] {\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s;\n}\n.fade-enter[data-v-84d3f796], .fade-leave-to[data-v-84d3f796] {\n        opacity: 0;\n}\n.fade-enter-to[data-v-84d3f796], .fade-leave[data-v-84d3f796] {\n        opacity: 1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "Iglj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LookUp_vue__ = __webpack_require__("9GrG");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02e1eeca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LookUp_vue__ = __webpack_require__("333T");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("w5nP")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-02e1eeca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LookUp_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02e1eeca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LookUp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/LookUp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02e1eeca", Component.options)
  } else {
    hotAPI.reload("data-v-02e1eeca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Jpt8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cgIg");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("a4271b80", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41458b80\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41458b80\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "M1vQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(FileSaver, d3, _) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("uXZL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loader__ = __webpack_require__("wd27");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__("wtEF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip__ = __webpack_require__("WgY6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jszip__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      asDate: 'Undetermined',
      sentWarning: false,
      loaded: true,
      showGrid: false,
      step3: false,
      step2: false,
      showButton: false,
      board: '',
      workbook: {
        Sheets: [''],
        SheetNames: ['']
      },
      force: 'officer',
      type: 'masked',
      sheet_json: [],
      headers: [],
      selectedCol: -1,
      currentSheetIndex: 0,
      myGrid: {
        data: ['']
      },
      myGrid2: {
        data: ['']
      },
      pageSizeGrid2: 10,
      currentPageGrid2: 1,
      currentSort: 'SSN_FORMAT',
      showBad: false,
      dialog: false,
      editedIndex: -1,
      editedItem: {
        SSN: ''
      },
      defaultItem: {
        SSN: ''
      },
      headersV: [],
      href: '',
      ssnList: [],
      numGood: 0,
      numBad: 0,
      numValidated: 0,
      totalParts: 0,
      currentParts: 0,
      state: {
        headers: [''],
        tickets: [''],
        myGrid: []
      },
      zip: {},
      folder: {}
    };
  },
  mounted: function mounted() {
    this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adoff;
    this.zip = new __WEBPACK_IMPORTED_MODULE_5_jszip___default.a();
    this.folder = this.zip.folder('folder');
    // this.myGrid = canvasDatagrid();
    // document.getElementById('myGrid').appendChild(this.myGrid)
    // this.myGrid2 = canvasDatagrid();
    // document.getElementById('myGrid2').appendChild(this.myGrid2)
  },

  components: {
    loader: __WEBPACK_IMPORTED_MODULE_3__Loader__["default"]
  },
  computed: {
    slicedGrid2: function slicedGrid2() {
      var _this = this;

      return this.myGrid2.data.filter(function (row, index) {
        var start = (_this.currentPageGrid2 - 1) * _this.pageSizeGrid2;
        var end = _this.currentPageGrid2 * _this.pageSizeGrid2;
        if (index >= start && index < end) return true;
      });
    },
    boardLink: function boardLink() {
      var forceString = 'Enlisted';
      if (this.force == 'officer') forceString = 'Officer';

      if (this.board) return this.board + ' ' + forceString;else return 'SURF ' + forceString;
    },
    myGridTop10: function myGridTop10() {
      var limit = this.myGrid.data.length;
      if (limit > 10) limit = 10;
      return this.myGrid.data.slice(0, limit);
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },

    typeString: function typeString() {
      var test = this.type;
      if (test == 'masked') return 'Masked';else if (test == 'unmasked') return 'Unmasked';else if (test == 'with') return 'With Professional Specialty';else if (test == 'without') return 'Without Professional Specialty';
    },
    currentSheetName: function currentSheetName() {
      return this.workbook.SheetNames[this.currentSheetIndex];
    },
    worksheet: function worksheet() {
      return this.workbook.Sheets[this.currentSheetName];
    },
    columns: function columns() {
      return this.headers[this.currentSheetIndex];
      //return this.sheet_json[this.currentSheetIndex][0];
    },
    headersV1: function headersV1() {
      var col = this.headers[this.currentSheetIndex];
      var toReturn = [];
      if (col) {
        col.forEach(function (d) {
          toReturn.push({
            'text': d,
            'value': d
          });
        });
      }
      return toReturn;
    },
    dropDownText: function dropDownText() {
      if (this.selectedCol == -1) return 'Select SSN Column';else return this.columns[this.selectedCol];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    selectedCol: function selectedCol(val) {
      this.showGrid = true;
    },

    currentSheetIndex: function currentSheetIndex(val) {
      this.showGrid = true;
      this.myGrid.data = this.sheet_json[this.currentSheetIndex];
      //this.selectedCol = -1 
    },
    force: function force(val) {
      if (val == 'officer') {
        this.type = 'masked';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adoff;
      } else {
        this.type = 'with';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adenl;
      }
      this.numValidated = 0;
    }
  },
  methods: {
    nextPage: function nextPage() {
      if (this.currentPageGrid2 * this.pageSizeGrid2 < this.myGrid2.data.length) this.currentPageGrid2++;
    },
    prevPage: function prevPage() {
      if (this.currentPageGrid2 > 1) this.currentPageGrid2--;
    },
    downlaodZip: function downlaodZip() {
      var _this2 = this;

      this.loaded = false;
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });

      var querystring = __webpack_require__("1nuA");
      var formData = {
        '_PROGRAM': "/WebApps/SURF/surf",
        'nPage': "runSurf",
        'force': this.force,
        'type': this.type,
        'board': this.board,
        'list': list.join(',')
      };

      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, {
        data: querystring.stringify(formData),
        headers: {
          'Content-Type': 'application/zip',
          'Accept': 'application/zip'
        },
        responseType: 'arraybuffer'
      }).then(function (response) {
        var reader = new window.FileReader();
        console.log(response);

        _this2.loaded = true;
      }).catch(function (error) {
        console.log(error.response);
        this.loaded = true;
      });

      // axios.post(axios_url_surf, querystring.stringify(formData)).then(response => {
      //     this.onReturn(response.data)
      // }).catch(function (error) {
      //     console.log(error.response);
      //     this.loaded=true;
      // });
    },
    sortByCol: function sortByCol(arr) {
      var _this3 = this;

      return arr.sort(function (a, b) {
        var modifier = 1;
        //if(this.currentSortDir === 'desc') modifier = -1;
        if (a[_this3.currentSort] < b[_this3.currentSort]) return -1 * modifier;
        if (a[_this3.currentSort] > b[_this3.currentSort]) return 1 * modifier;
        return 0;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.myGrid2.data.indexOf(item);
      this.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var index = this.myGrid2.data.indexOf(item);
      this.myGrid2.data.splice(index, 1);
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
      //this.numGood = 0
      setTimeout(function () {
        _this4.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      if (this.editedIndex > -1) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.myGrid2.data[this.editedIndex], this.editedItem);
      } else {
        this.myGrid2.data.push(this.editedItem);
        var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
        this.myGrid2.data = parsed;
        this.step3 = true;
        //this.numGood = 0
      }
      this.close();
    },
    onReturn: function onReturn(returned) {
      this.currentSort = 'VALIDATED';
      var statusFormat = {
        '1': 'GOOD',
        '7': 'ERROR: NOT FOUND ON FILE',
        '8': 'ERROR: DUPLICATE',
        '9': 'ERROR'
      };
      if (returned.data) {
        this.currentParts += 1;
        var ret = returned.data;
        ret.forEach(function (record) {
          record.STATUS = statusFormat[record.STATUS];
        });
        var parsed = this.parse(ret, 'SSN', 2);
        if (this.currentParts <= 1) {
          this.myGrid2.data = parsed;
          this.numValidated = this.numGood;
        } else {
          this.myGrid2.data = this.sortByCol(this.myGrid2.data.concat(parsed));
          this.numValidated += this.numGood;
        }
        this.step3 = true;
      }
      console.log(this.currentParts + ' VS ' + this.totalParts);
      if (this.currentParts >= this.totalParts) this.loaded = true;
      console.log('SHOW graph: ' + !this.loaded);
      console.log('test----');
    },
    validate: function validate() {
      var _this5 = this;

      this.loaded = false;
      this.currentSort = 'SSN_FORMAT';
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log('len: ' + list.length);
      if (list.length <= 500) {
        console.log('SINGLE RUN');
        this.totalParts = 0;
        this.currentParts = 0;
        var querystring = __webpack_require__("1nuA");
        var _formData = {
          '_PROGRAM': "/WebApps/SURF/surf",
          'nPage': "validate",
          'force': this.force,
          'type': this.type,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, querystring.stringify(_formData)).then(function (response) {
          _this5.onReturn(response.data);
        }).catch(function (error) {
          console.log(error.response);
        });
      } else {
        console.log('MULTI RUN');
        var nums = Math.floor(list.length / 500);
        var remaining = list.length % 500;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        console.log('nums: ' + nums);
        this.totalParts = nums;
        this.currentParts = 0;
        var splitList = [];
        for (var i = 1; i <= nums; i++) {
          if (i != nums) {
            splitList = list.slice(500 * (i - 1), 500 * i);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + 500 * i);
          } else {
            splitList = list.slice(500 * (i - 1), 500 * (i - 1) + remaining);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + (500 * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/WebApps/SURF/surf",
            'nPage': "validate",
            'force': this.force,
            'type': this.type,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, querystring.stringify(formData)).then(function (response) {
            _this5.onReturn(response.data);
          }).catch(function (error) {
            console.log(error.response);
          });
        }
      }
    },
    runSurf: function runSurf() {
      var _this6 = this;

      this.loaded = false;
      var partLen = 200;
      this.sentWarning = true;
      var list = [];
      console.log(this.myGrid2.data.length);
      var getList = this.parse(this.myGrid2.data, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log('len: ' + list.length);
      if (list.length <= partLen) {
        console.log('SINGLE PART');
        var querystring = __webpack_require__("1nuA");
        var _formData2 = {
          '_PROGRAM': "/WebApps/SURF/surf",
          'nPage': "runSurf2",
          'force': this.force,
          'type': this.type,
          'board': this.board,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(axios_url_surf + '?' + querystring.stringify(_formData2), {
          responseType: 'arraybuffer',
          headers: {
            'Accept': 'application/zip'
          }
        }).then(function (response) {
          console.log('MADE IT HERE - Single Pull');
          console.log(response);
          console.log(response.data);

          function str2bytes(str) {
            var bytes = new Uint8Array(str.length);
            for (var i = 0; i < str.length; i++) {
              bytes[i] = str.charCodeAt(i);
            }
            return bytes;
          }

          var blob = new Blob([response.data], {
            type: 'application/zip'
          });

          console.log(blob);
          FileSaver.saveAs(blob, _this6.boardLink + ' ' + _this6.typeString + '.zip');
          _this6.loaded = true;
        });
      } else {
        console.log('MULTI PART');
        var nums = Math.floor(list.length / partLen);
        var remaining = list.length % partLen;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        this.totalParts = nums;
        this.currentParts = 0;
        console.log('nums: ' + nums);
        var splitList = [];
        for (var i = 1; i <= nums; i++) {

          if (i != nums) {
            splitList = list.slice(partLen * (i - 1), partLen * i);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + partLen * i);
          } else {
            splitList = list.slice(partLen * (i - 1), partLen * (i - 1) + remaining);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + (partLen * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/WebApps/SURF/surf",
            'nPage': "runSurf",
            'force': this.force,
            'type': this.type,
            'board': this.board,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(axios_url_surf + '?' + querystring.stringify(formData), {
            responseType: 'arraybuffer',
            headers: {
              'Accept': 'application/zip'
            }
          }).then(function (response) {
            _this6.currentParts += 1;
            console.log('MADE IT HERE - ' + _this6.currentParts + ' of ' + _this6.totalParts);
            console.log(response);
            console.log(response.data);

            var blob = new Blob([response.data], {
              type: 'application/zip'
            });

            console.log(blob);
            FileSaver.saveAs(blob, _this6.boardLink + ' ' + _this6.typeString + ' ' + _this6.currentParts + ' of ' + _this6.totalParts + ' .zip');

            if (_this6.currentParts >= _this6.totalParts) _this6.loaded = true;
          });
        }
      }
    },
    parse: function parse(data, select, option) {
      var _this7 = this;

      this.ssnList = [];
      var checkSSN = 'GOOD';
      var numGood = 0;
      var numBad = 0;

      var clean = '';
      var isNum = false;
      data.forEach(function (row) {
        if (row[select]) {
          clean = row[select].replace(/\W/g, '');
          isNum = /^\d+$/.test(clean);

          if (clean.length > 9) isNum = false;

          var rep = 9 - clean.length;
          if (rep > 0) clean = '0'.repeat(rep) + clean;

          if (!isNum) clean = row[select];

          var status = '';
          if (option == 2) {
            status = row['STATUS'];
            if (status == 'GOOD') numGood += 1;else numBad += 1;
          } else if (option == 1) {
            if (!isNum) numBad += 1;
          }

          if (option == 1) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum
            });
          } else if (option == 2) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum,
              'VALIDATED': status
            });
          }
        }
      });
      this.numGood = numGood;
      this.numBad = numBad;

      return this.sortByCol(this.ssnList);
    },
    processSSN: function processSSN() {
      var select = this.columns[this.selectedCol];
      if (select == 'UNKNOWN 1') select = '__EMPTY';else if (select.startsWith('UNKNOWN ')) {
        var numb = select.substr(8);
        select = '__EMPTY_' + numb;
      }
      var parsed = this.parse(this.sheet_json[this.currentSheetIndex], select, 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
      this.showGrid = false;
    },
    selectCol: function selectCol(val) {
      this.selectedCol = val;
    },
    changeSheet: function changeSheet(num) {
      //var num = Object.keys(this.workbook.Sheets).indexOf(this.workbook.SheetNames[num])
      console.log("num: " + num);
      this.currentSheetIndex = num;
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function removeImage(e) {
      this.image = '';
    },
    get_header_row: function get_header_row(sheet) {
      var headers = [],
          range = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.decode_range(sheet['!ref']);
      var C,
          R = range.s.r; /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell = sheet[__WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.encode_cell({ c: C, r: R })]; /* find the cell in the first row */
        //var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
        var hdr = '';
        if (C == 1) hdr = '__EMPTY';else hdr = '__EMPTY_' + C;
        if (cell && cell.t) hdr = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.format_cell(cell);
        headers.push(hdr);
      }
      //console.log(headers)
      return headers;
    },
    fixdata: function fixdata(data) {
      var originData = "",
          l = 0,
          w = 10240;
      for (; l < data.byteLength / w; ++l) {
        originData += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        originData += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return originData;
      }
    },
    workbook_to_json: function workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function (sheetName) {
        var roa = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);

        if (roa.length ^ "") {
          result[sheetName] = roa;
        }
      });
      return result;
    },
    downloadTable: function downloadTable() {
      var blob = new Blob([d3.csv.format(this.myGrid2.data)], { type: "text/csv;charset=utf-8" });
      FileSaver.saveAs(blob, this.boardLink + ' ' + this.typeString + '.csv');
    },

    /** PARSING and DRAGDROP **/
    handleDrop: function handleDrop(e) {
      var _this8 = this;

      this.currentSort = 'SSN_FORMAT';
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files,
          i,
          f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader(),
            name = f.name;
        console.log("FILE: " + name + " DROPPED"); //filename of the spreadsheet

        reader.onload = function (e) {
          //var results, 
          var data = e.target.result;
          var fixedData = _this8.fixdata(data);
          // cant use readFile, since it is only used in SERVER environments
          // use XLSX.read to read array buffer and convert to base64   
          _this8.workbook = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.read(btoa(fixedData), { type: 'base64' });
          _this8.sheet_json = [].sort();
          _this8.headers = [];

          _this8.workbook.SheetNames.sort();
          var tabOrder = _.values(_this8.workbook.SheetNames); //name of all tabs
          //console.log("tabOrder: "+tabOrder); //name of sorted tabs

          _.keys(_this8.workbook.Sheets).sort();
          var sheSorted = _.keys(_this8.workbook.Sheets).sort();
          //console.log("sheSorted: "+sheSorted);

          for (var d in sheSorted) {
            //for (var d in this.workbook.Sheets) {
            //console.log("d: "+d);
            //console.log("tabOrder: "+tabOrder[d]); //name of tab - not sorted  b/c of source workbook.Sheets

            var sheet = _this8.workbook.Sheets[tabOrder[d]];
            //var sheet = Object.values(this.workbook.Sheets).indexOf(Object.values(this.workbook.SheetNames));           
            //console.log("this.workbook.Sheets second time: "+Object.values(sheet).values);//Excel cell range A1:B4

            var page = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_json(sheet); //returns the array for each page
            //console.log("Page: "+Object.keys(page));

            _this8.sheet_json.push(page);
            _this8.headers.push(_this8.get_header_row(sheet));
          }
          var div = document.getElementById('myGrid');
          _this8.myGrid.data = _this8.sheet_json[_this8.currentSheetIndex];
        };
        reader.readAsArrayBuffer(f);
      }
      this.headersV = [{
        text: 'SSN',
        align: 'left',
        value: 'SSN'
      }, { text: 'SSN_FORMAT', value: 'SSN_FORMAT' },, { text: 'VALIDATED', value: 'VALIDATED' }];
      this.showGrid = true;
      this.step2 = true;
    },
    handleDragover: function handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index);
      var toDelete = index;
      if (this.currentPageGrid2 > 1) toDelete = index + (this.currentPageGrid2 - 1) * this.pageSizeGrid2;
      console.log(toDelete);
      if (index !== undefined && index >= 0) {
        this.myGrid2.data.splice(toDelete, 1);
      }
    }
  },
  beforeUpdate: function beforeUpdate() {
    console.log("beforeupdate");
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("lDdF"), __webpack_require__("Za4h"), __webpack_require__("M4fF")))

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("Ty93");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("vax7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba5bd90_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ba5bd90", Component.options)
  } else {
    hotAPI.reload("data-v-7ba5bd90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "My6e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "navbar navbar-expand-lg navbar-dark primary-color-dark fixed-top"
    },
    [
      _c("img", {
        attrs: { src: __webpack_require__("jBjs"), height: "30px" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "navbar-brand white-text" },
        [
          _c("router-link", { staticClass: "white-text", attrs: { to: "/" } }, [
            _vm._v("STARS-RAW")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse navbar-collapse",
          attrs: { id: "navbarNavDropdown" }
        },
        [
          _c(
            "ul",
            { staticClass: "navbar-nav mr-auto" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-item",
                  attrs: {
                    to: "/",
                    tag: "li",
                    "active-class": "active",
                    exact: ""
                  }
                },
                [_c("a", { staticClass: "nav-link" }, [_vm._v("SURF")])]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-item",
                  attrs: {
                    to: "/Surf_CIP",
                    tag: "li",
                    "active-class": "active",
                    exact: ""
                  }
                },
                [_c("a", { staticClass: "nav-link" }, [_vm._v("SURF_CIP")])]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-item",
                  attrs: {
                    to: "/LookUp",
                    tag: "li",
                    "active-class": "active",
                    exact: ""
                  }
                },
                [_c("a", { staticClass: "nav-link" }, [_vm._v("LookUp")])]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-item",
                  attrs: {
                    to: "/AD_Grab",
                    tag: "li",
                    "active-class": "active",
                    exact: ""
                  }
                },
                [_c("a", { staticClass: "nav-link" }, [_vm._v("AD_Grab")])]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-item",
                  attrs: {
                    to: "/Vml",
                    tag: "li",
                    "active-class": "active",
                    exact: ""
                  }
                },
                [_c("a", { staticClass: "nav-link" }, [_vm._v("Vml")])]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nav-item",
                  attrs: {
                    to: "/ADP",
                    tag: "li",
                    "active-class": "active",
                    exact: ""
                  }
                },
                [_c("a", { staticClass: "nav-link" }, [_vm._v("ADP")])]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler hoverable",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarNavDropdown",
          "aria-controls": "navbarNavDropdown",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-41458b80", esExports)
  }
}

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise__ = __webpack_require__("hKoQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill__ = __webpack_require__("j1ja");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify__ = __webpack_require__("3EgV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui__ = __webpack_require__("zL8q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_v2_table__ = __webpack_require__("6+zr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_v2_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_v2_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_locale_lang_en__ = __webpack_require__("wUZ8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_locale_lang_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_locale_lang_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bootstrap__ = __webpack_require__("K3J8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__("qb6w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_mdbootstrap_css_mdb_min_css__ = __webpack_require__("k1UT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_mdbootstrap_css_mdb_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__node_modules_mdbootstrap_css_mdb_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_element_ui_lib_theme_chalk_index_css__ = __webpack_require__("tvR6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vuetify_dist_vuetify_min_css__ = __webpack_require__("7zck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fortawesome_fontawesome__ = __webpack_require__("QxPg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fortawesome_fontawesome_free_solid_faSpinner__ = __webpack_require__("mZf6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fortawesome_fontawesome_free_solid_faSpinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__fortawesome_fontawesome_free_solid_faSpinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__fortawesome_fontawesome_free_solid_faQuestionCircle__ = __webpack_require__("sLGz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__fortawesome_fontawesome_free_solid_faQuestionCircle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__fortawesome_fontawesome_free_solid_faQuestionCircle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__fortawesome_fontawesome_free_solid_faInfoCircle__ = __webpack_require__("0vJk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__fortawesome_fontawesome_free_solid_faInfoCircle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__fortawesome_fontawesome_free_solid_faInfoCircle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__store_store__ = __webpack_require__("wtEF");
//Import polyfill so IE can use Promise & Axios
Object(__WEBPACK_IMPORTED_MODULE_0_es6_promise__["polyfill"])();
var ES6Promise = __webpack_require__("hKoQ");
ES6Promise.polyfill();

//startsWith IE polyfill 
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    return this.substr(position || 0, searchString.length) === searchString;
  };
}


// Production steps of ECMA-262, Edition 6, 22.1.2.1
// if (!Array.from) {
Array.from = function (object) {
  'use strict';
  //console.log("HAHAHAHAH")

  return [].slice.call(object);
};
Object(__WEBPACK_IMPORTED_MODULE_0_es6_promise__["polyfill"])();
//}

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_element_ui___default.a, { locale: __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_locale_lang_en___default.a });
__WEBPACK_IMPORTED_MODULE_2_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_v2_table___default.a);

// var JSZip = require("jszip");






//UNCOMMENT baseURL to run in PRODUCTION
// axios.defaults.baseURL = 'https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do'
__WEBPACK_IMPORTED_MODULE_9_axios___default.a.defaults.headers.get['Accepts'] = 'application/json';




// require('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons')
// import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons';
// import '../node_modules/vuetify/dist/vuetify.min.css'








__WEBPACK_IMPORTED_MODULE_15__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_16__fortawesome_fontawesome_free_solid_faSpinner___default.a, __WEBPACK_IMPORTED_MODULE_17__fortawesome_fontawesome_free_solid_faQuestionCircle___default.a, __WEBPACK_IMPORTED_MODULE_18__fortawesome_fontawesome_free_solid_faInfoCircle___default.a);



__WEBPACK_IMPORTED_MODULE_8__router__["a" /* default */].beforeEach(function (to, from, next) {
  //PROD:
  //if (store.state.sanity == "SANE"){
  if (__WEBPACK_IMPORTED_MODULE_19__store_store__["a" /* store */].state.sanity != check_portal) {
    var querystring = __webpack_require__("1nuA");
    var formData = {
      _PROGRAM: "/REN - Dashboard Home V1/makeHTML",
      nPage: "sanity"
    };
    var myData = __WEBPACK_IMPORTED_MODULE_9_axios___default.a.post(axios_url_surf, querystring.stringify(formData)).then(function (response) {
      var mySanity = response.data.sanity;
      if (mySanity != 'INSANE') {
        window.location.href = 'https://starsraw.afpc.randolph.af.mil';
      } else {
        __WEBPACK_IMPORTED_MODULE_19__store_store__["a" /* store */].state.sanity = 'INSANE';
        __WEBPACK_IMPORTED_MODULE_19__store_store__["a" /* store */].state.adoff = response.data.adoff;
        __WEBPACK_IMPORTED_MODULE_19__store_store__["a" /* store */].state.adenl = response.data.adenl;
        __WEBPACK_IMPORTED_MODULE_19__store_store__["a" /* store */].state.lookup = response.data.lookup;
        __WEBPACK_IMPORTED_MODULE_19__store_store__["a" /* store */].state.AD = response.data.AD;
        next();
        //alert('AUTHENTICATED')
      }
    }).catch(function (error) {
      console.log(error);
      window.location.href = 'https://starsraw.afpc.randolph.af.mil';
    });
  } else {
    next();
  }
  //}
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_2_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_8__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_19__store_store__["a" /* store */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_7__App__["a" /* default */] }
});

/***/ }),

/***/ "OhHN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SurfFla_vue__ = __webpack_require__("M1vQ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_85cc0036_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SurfFla_vue__ = __webpack_require__("mvxS");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("eXTf")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-85cc0036"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SurfFla_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_85cc0036_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SurfFla_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/SurfFla.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85cc0036", Component.options)
  } else {
    hotAPI.reload("data-v-85cc0036", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Qjkc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("hfK9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("14e025e4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b0dd9b0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AD_Grab.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b0dd9b0\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AD_Grab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "Ruci":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(FileSaver, d3, _) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("uXZL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loader__ = __webpack_require__("wd27");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__("wtEF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip__ = __webpack_require__("WgY6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jszip__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      asDate: 'Undetermined',
      sentWarning: false,
      loaded: true,
      showGrid: false,
      step3: false,
      step2: false,
      showButton: false,
      board: '',
      workbook: {
        Sheets: [''],
        SheetNames: ['']
      },
      force: 'officer',
      type: 'masked',
      sheet_json: [],
      headers: [],
      selectedCol: -1,
      currentSheetIndex: 0,
      myGrid: {
        data: ['']
      },
      myGrid2: {
        data: ['']
      },
      pageSizeGrid2: 10,
      currentPageGrid2: 1,
      currentSort: 'SSN_FORMAT',
      showBad: false,
      dialog: false,
      editedIndex: -1,
      editedItem: {
        SSN: ''
      },
      defaultItem: {
        SSN: ''
      },
      headersV: [],
      href: '',
      ssnList: [],
      numGood: 0,
      numBad: 0,
      numValidated: 0,
      totalParts: 0,
      currentParts: 0,
      state: {
        headers: [''],
        tickets: [''],
        myGrid: []
      },
      zip: {},
      folder: {}
    };
  },
  mounted: function mounted() {
    this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adoff;
    this.zip = new __WEBPACK_IMPORTED_MODULE_5_jszip___default.a();
    this.folder = this.zip.folder('folder');
    // this.myGrid = canvasDatagrid();
    // document.getElementById('myGrid').appendChild(this.myGrid)
    // this.myGrid2 = canvasDatagrid();
    // document.getElementById('myGrid2').appendChild(this.myGrid2)
  },

  components: {
    loader: __WEBPACK_IMPORTED_MODULE_3__Loader__["default"]
  },
  computed: {
    slicedGrid2: function slicedGrid2() {
      var _this = this;

      return this.myGrid2.data.filter(function (row, index) {
        var start = (_this.currentPageGrid2 - 1) * _this.pageSizeGrid2;
        var end = _this.currentPageGrid2 * _this.pageSizeGrid2;
        if (index >= start && index < end) return true;
      });
    },
    boardLink: function boardLink() {
      var forceString = 'Enlisted';
      if (this.force == 'officer') forceString = 'Officer';

      if (this.board) return this.board + ' ' + forceString;else return 'SURF ' + forceString;
    },
    myGridTop10: function myGridTop10() {
      var limit = this.myGrid.data.length;
      if (limit > 10) limit = 10;
      return this.myGrid.data.slice(0, limit);
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },

    typeString: function typeString() {
      var test = this.type;
      if (test == 'masked') return 'Masked';else if (test == 'unmasked') return 'Unmasked';else if (test == 'with') return 'With Professional Specialty';else if (test == 'without') return 'Without Professional Specialty';
    },
    currentSheetName: function currentSheetName() {
      return this.workbook.SheetNames[this.currentSheetIndex];
    },
    worksheet: function worksheet() {
      return this.workbook.Sheets[this.currentSheetName];
    },
    columns: function columns() {
      return this.headers[this.currentSheetIndex];
      //return this.sheet_json[this.currentSheetIndex][0];
    },
    headersV1: function headersV1() {
      var col = this.headers[this.currentSheetIndex];
      var toReturn = [];
      if (col) {
        col.forEach(function (d) {
          toReturn.push({
            'text': d,
            'value': d
          });
        });
      }
      return toReturn;
    },
    dropDownText: function dropDownText() {
      if (this.selectedCol == -1) return 'Select SSN Column';else return this.columns[this.selectedCol];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    selectedCol: function selectedCol(val) {
      this.showGrid = true;
    },

    currentSheetIndex: function currentSheetIndex(val) {
      this.showGrid = true;
      this.myGrid.data = this.sheet_json[this.currentSheetIndex];
      //this.selectedCol = -1 
    },
    force: function force(val) {
      if (val == 'officer') {
        this.type = 'masked';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adoff;
      } else {
        this.type = 'with';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adenl;
      }
      this.numValidated = 0;
    }
  },
  methods: {
    nextPage: function nextPage() {
      if (this.currentPageGrid2 * this.pageSizeGrid2 < this.myGrid2.data.length) this.currentPageGrid2++;
    },
    prevPage: function prevPage() {
      if (this.currentPageGrid2 > 1) this.currentPageGrid2--;
    },
    downlaodZip: function downlaodZip() {
      var _this2 = this;

      this.loaded = false;
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });

      var querystring = __webpack_require__("1nuA");
      var formData = {
        '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
        'nPage': "runSurf",
        'force': this.force,
        'type': this.type,
        'board': this.board,
        'list': list.join(',')
      };

      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, {
        data: querystring.stringify(formData),
        headers: {
          'Content-Type': 'application/zip',
          'Accept': 'application/zip'
        },
        responseType: 'arraybuffer'
      }).then(function (response) {
        var reader = new window.FileReader();
        console.log(response);

        _this2.loaded = true;
      }).catch(function (error) {
        console.log(error.response);
        this.loaded = true;
      });

      // axios.post(axios_url_surf, querystring.stringify(formData)).then(response => {
      //     this.onReturn(response.data)
      // }).catch(function (error) {
      //     console.log(error.response);
      //     this.loaded=true;
      // });
    },
    sortByCol: function sortByCol(arr) {
      var _this3 = this;

      return arr.sort(function (a, b) {
        var modifier = 1;
        //if(this.currentSortDir === 'desc') modifier = -1;
        if (a[_this3.currentSort] < b[_this3.currentSort]) return -1 * modifier;
        if (a[_this3.currentSort] > b[_this3.currentSort]) return 1 * modifier;
        return 0;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.myGrid2.data.indexOf(item);
      this.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var index = this.myGrid2.data.indexOf(item);
      this.myGrid2.data.splice(index, 1);
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
      //this.numGood = 0
      setTimeout(function () {
        _this4.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      if (this.editedIndex > -1) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.myGrid2.data[this.editedIndex], this.editedItem);
      } else {
        this.myGrid2.data.push(this.editedItem);
        var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
        this.myGrid2.data = parsed;
        this.step3 = true;
        //this.numGood = 0
      }
      this.close();
    },
    onReturn: function onReturn(returned) {
      this.currentSort = 'VALIDATED';
      var statusFormat = {
        '1': 'GOOD',
        '7': 'ERROR: NOT FOUND ON FILE',
        '8': 'ERROR: DUPLICATE',
        '9': 'ERROR'
      };
      if (returned.data) {
        this.currentParts += 1;
        var ret = returned.data;
        ret.forEach(function (record) {
          record.STATUS = statusFormat[record.STATUS];
        });
        var parsed = this.parse(ret, 'SSN', 2);
        if (this.currentParts <= 1) {
          this.myGrid2.data = parsed;
          this.numValidated = this.numGood;
        } else {
          this.myGrid2.data = this.sortByCol(this.myGrid2.data.concat(parsed));
          this.numValidated += this.numGood;
        }
        this.step3 = true;
      }
      console.log(this.currentParts + ' VS ' + this.totalParts);
      if (this.currentParts >= this.totalParts) this.loaded = true;
      console.log('SHOW graph: ' + !this.loaded);
      console.log('test----');
    },
    validate: function validate() {
      var _this5 = this;

      this.loaded = false;
      this.currentSort = 'SSN_FORMAT';
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log('len: ' + list.length);
      if (list.length <= 500) {
        console.log('SINGLE RUN');
        this.totalParts = 0;
        this.currentParts = 0;
        var querystring = __webpack_require__("1nuA");
        var _formData = {
          '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
          'nPage': "validate",
          'force': this.force,
          'type': this.type,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, querystring.stringify(_formData)).then(function (response) {
          _this5.onReturn(response.data);
        }).catch(function (error) {
          console.log(error.response);
        });
      } else {
        console.log('MULTI RUN');
        var nums = Math.floor(list.length / 500);
        var remaining = list.length % 500;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        console.log('nums: ' + nums);
        this.totalParts = nums;
        this.currentParts = 0;
        var splitList = [];
        for (var i = 1; i <= nums; i++) {
          if (i != nums) {
            splitList = list.slice(500 * (i - 1), 500 * i);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + 500 * i);
          } else {
            splitList = list.slice(500 * (i - 1), 500 * (i - 1) + remaining);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + (500 * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
            'nPage': "validate",
            'force': this.force,
            'type': this.type,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, querystring.stringify(formData)).then(function (response) {
            _this5.onReturn(response.data);
          }).catch(function (error) {
            console.log(error.response);
          });
        }
      }
    },
    runSurf: function runSurf() {
      var _this6 = this;

      this.loaded = false;
      var partLen = 200;
      this.sentWarning = true;
      var list = [];
      console.log(this.myGrid2.data.length);
      var getList = this.parse(this.myGrid2.data, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log('len: ' + list.length);
      if (list.length <= partLen) {
        console.log('SINGLE PART');
        var querystring = __webpack_require__("1nuA");
        var _formData2 = {
          '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
          'nPage': "runSurf2",
          'force': this.force,
          'type': this.type,
          'board': this.board,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(axios_url_surf + '?' + querystring.stringify(_formData2), {
          responseType: 'arraybuffer',
          headers: {
            'Accept': 'application/zip'
          }
        }).then(function (response) {
          console.log('MADE IT HERE - Single Pull');
          console.log(response);
          console.log(response.data);

          function str2bytes(str) {
            var bytes = new Uint8Array(str.length);
            for (var i = 0; i < str.length; i++) {
              bytes[i] = str.charCodeAt(i);
            }
            return bytes;
          }

          var blob = new Blob([response.data], {
            type: 'application/zip'
          });

          console.log(blob);
          FileSaver.saveAs(blob, _this6.boardLink + ' ' + _this6.typeString + '.zip');
          _this6.loaded = true;
        });
      } else {
        console.log('MULTI PART');
        var nums = Math.floor(list.length / partLen);
        var remaining = list.length % partLen;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        this.totalParts = nums;
        this.currentParts = 0;
        console.log('nums: ' + nums);
        var splitList = [];
        for (var i = 1; i <= nums; i++) {

          if (i != nums) {
            splitList = list.slice(partLen * (i - 1), partLen * i);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + partLen * i);
          } else {
            splitList = list.slice(partLen * (i - 1), partLen * (i - 1) + remaining);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + (partLen * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
            'nPage': "runSurf",
            'force': this.force,
            'type': this.type,
            'board': this.board,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(axios_url_surf + '?' + querystring.stringify(formData), {
            responseType: 'arraybuffer',
            headers: {
              'Accept': 'application/zip'
            }
          }).then(function (response) {
            _this6.currentParts += 1;
            console.log('MADE IT HERE - ' + _this6.currentParts + ' of ' + _this6.totalParts);
            console.log(response);
            console.log(response.data);

            var blob = new Blob([response.data], {
              type: 'application/zip'
            });

            console.log(blob);
            FileSaver.saveAs(blob, _this6.boardLink + ' ' + _this6.typeString + ' ' + _this6.currentParts + ' of ' + _this6.totalParts + ' .zip');

            if (_this6.currentParts >= _this6.totalParts) _this6.loaded = true;
          });
        }
      }
    },
    parse: function parse(data, select, option) {
      var _this7 = this;

      this.ssnList = [];
      var checkSSN = 'GOOD';
      var numGood = 0;
      var numBad = 0;

      var clean = '';
      var isNum = false;
      data.forEach(function (row) {
        if (row[select]) {
          clean = row[select].replace(/\W/g, '');
          isNum = /^\d+$/.test(clean);

          if (clean.length > 9) isNum = false;

          var rep = 9 - clean.length;
          if (rep > 0) clean = '0'.repeat(rep) + clean;

          if (!isNum) clean = row[select];

          var status = '';
          if (option == 2) {
            status = row['STATUS'];
            if (status == 'GOOD') numGood += 1;else numBad += 1;
          } else if (option == 1) {
            if (!isNum) numBad += 1;
          }

          if (option == 1) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum
            });
          } else if (option == 2) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum,
              'VALIDATED': status
            });
          }
        }
      });
      this.numGood = numGood;
      this.numBad = numBad;

      return this.sortByCol(this.ssnList);
    },
    processSSN: function processSSN() {
      var select = this.columns[this.selectedCol];
      if (select == 'UNKNOWN 1') select = '__EMPTY';else if (select.startsWith('UNKNOWN ')) {
        var numb = select.substr(8);
        select = '__EMPTY_' + numb;
      }
      var parsed = this.parse(this.sheet_json[this.currentSheetIndex], select, 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
      this.showGrid = false;
    },
    selectCol: function selectCol(val) {
      this.selectedCol = val;
    },
    changeSheet: function changeSheet(num) {
      //var num = Object.keys(this.workbook.Sheets).indexOf(this.workbook.SheetNames[num])
      console.log("num: " + num);
      this.currentSheetIndex = num;
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function removeImage(e) {
      this.image = '';
    },
    get_header_row: function get_header_row(sheet) {
      var headers = [],
          range = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.decode_range(sheet['!ref']);
      var C,
          R = range.s.r; /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell = sheet[__WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.encode_cell({ c: C, r: R })]; /* find the cell in the first row */
        //var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
        var hdr = '';
        if (C == 1) hdr = '__EMPTY';else hdr = '__EMPTY_' + C;
        if (cell && cell.t) hdr = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.format_cell(cell);
        headers.push(hdr);
      }
      //console.log(headers)
      return headers;
    },
    fixdata: function fixdata(data) {
      var originData = "",
          l = 0,
          w = 10240;
      for (; l < data.byteLength / w; ++l) {
        originData += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        originData += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return originData;
      }
    },
    workbook_to_json: function workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function (sheetName) {
        var roa = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);

        if (roa.length ^ "") {
          result[sheetName] = roa;
        }
      });
      return result;
    },
    downloadTable: function downloadTable() {
      var blob = new Blob([d3.csv.format(this.myGrid2.data)], { type: "text/csv;charset=utf-8" });
      FileSaver.saveAs(blob, this.boardLink + ' ' + this.typeString + '.csv');
    },

    /** PARSING and DRAGDROP **/
    handleDrop: function handleDrop(e) {
      var _this8 = this;

      this.currentSort = 'SSN_FORMAT';
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files,
          i,
          f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader(),
            name = f.name;
        console.log("FILE: " + name + " DROPPED"); //filename of the spreadsheet

        reader.onload = function (e) {
          //var results, 
          var data = e.target.result;
          var fixedData = _this8.fixdata(data);
          // cant use readFile, since it is only used in SERVER environments
          // use XLSX.read to read array buffer and convert to base64   
          _this8.workbook = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.read(btoa(fixedData), { type: 'base64' });
          _this8.sheet_json = [].sort();
          _this8.headers = [];

          _this8.workbook.SheetNames.sort();
          var tabOrder = _.values(_this8.workbook.SheetNames); //name of all tabs
          //console.log("tabOrder: "+tabOrder); //name of sorted tabs

          _.keys(_this8.workbook.Sheets).sort();
          var sheSorted = _.keys(_this8.workbook.Sheets).sort();
          //console.log("sheSorted: "+sheSorted);

          for (var d in sheSorted) {
            //for (var d in this.workbook.Sheets) {
            //console.log("d: "+d);
            //console.log("tabOrder: "+tabOrder[d]); //name of tab - not sorted  b/c of source workbook.Sheets

            var sheet = _this8.workbook.Sheets[tabOrder[d]];
            //var sheet = Object.values(this.workbook.Sheets).indexOf(Object.values(this.workbook.SheetNames));           
            //console.log("this.workbook.Sheets second time: "+Object.values(sheet).values);//Excel cell range A1:B4

            var page = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_json(sheet); //returns the array for each page
            //console.log("Page: "+Object.keys(page));

            _this8.sheet_json.push(page);
            _this8.headers.push(_this8.get_header_row(sheet));
          }
          var div = document.getElementById('myGrid');
          _this8.myGrid.data = _this8.sheet_json[_this8.currentSheetIndex];
        };
        reader.readAsArrayBuffer(f);
      }
      this.headersV = [{
        text: 'SSN',
        align: 'left',
        value: 'SSN'
      }, { text: 'SSN_FORMAT', value: 'SSN_FORMAT' },, { text: 'VALIDATED', value: 'VALIDATED' }];
      this.showGrid = true;
      this.step2 = true;
    },
    handleDragover: function handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index);
      var toDelete = index;
      if (this.currentPageGrid2 > 1) toDelete = index + (this.currentPageGrid2 - 1) * this.pageSizeGrid2;
      console.log(toDelete);
      if (index !== undefined && index >= 0) {
        this.myGrid2.data.splice(toDelete, 1);
      }
    }
  },
  beforeUpdate: function beforeUpdate() {
    console.log("beforeupdate");
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("lDdF"), __webpack_require__("Za4h"), __webpack_require__("M4fF")))

/***/ }),

/***/ "S5/p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "transition-group",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _c("loader", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loaded,
                expression: "!loaded"
              }
            ],
            key: "loader"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loaded,
                  expression: "loaded"
                }
              ],
              key: "content"
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("h1", { staticClass: "col" }, [_vm._v("VML test ADMIN")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-4 text-right",
                    staticStyle: { "margin-top": "15px" }
                  },
                  [
                    _vm._v("\n\t        Data as of: \n\t        "),
                    _c(
                      "span",
                      {
                        staticStyle: { "font-weight": "bold", color: "#4d8bf9" }
                      },
                      [_vm._v(" " + _vm._s(_vm.asDate) + " ")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("h3", { attrs: { clas: "" } }, [
                _vm._v("Testing out the VML input/output data features")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "row no-top" }, [
                _c("div", { staticClass: "col-6" }, [
                  _c("div", { staticClass: "row no-top" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("h4", [_vm._v(" Name: ")]),
                      _vm._v(" "),
                      _c("span", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name,
                              expression: "name"
                            }
                          ],
                          staticClass: "col-6 form-control",
                          attrs: { type: "text", placeholder: "Name Search" },
                          domProps: { value: _vm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.name = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "col-5 btn btn-sm btn-info dropdown-toggle",
                            attrs: {
                              type: "button",
                              id: "nameOption",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [_vm._v(" " + _vm._s(_vm.nameCurrent) + " ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown-menu dropdown-primary" },
                          _vm._l(_vm.nameOptions, function(col, index) {
                            return _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.nameCurrent = col
                                  }
                                }
                              },
                              [_vm._v(" " + _vm._s(col) + " ")]
                            )
                          })
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row no-top" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("h4", [_vm._v(" SSN: ")]),
                      _c("p", { staticClass: "no-marg" }, [
                        _vm._v("No dashes")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.ssn,
                              expression: "ssn"
                            }
                          ],
                          staticClass: "col-6 form-control",
                          attrs: { type: "text", placeholder: "SSN Search" },
                          domProps: { value: _vm.ssn },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.ssn = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "col-5 btn btn-sm btn-secondary dropdown-toggle",
                            attrs: {
                              type: "button",
                              id: "ssnOption",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [_vm._v(" " + _vm._s(_vm.ssnCurrent) + " ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "dropdown-menu dropdown-primary" },
                          _vm._l(_vm.ssnOptions, function(col, index) {
                            return _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.ssnCurrent = col
                                  }
                                }
                              },
                              [_vm._v(" " + _vm._s(col) + " ")]
                            )
                          })
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("h4", [_vm._v("DOB Range:")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "div",
                        { staticClass: "block" },
                        [
                          _c("el-date-picker", {
                            attrs: {
                              format: "MM-dd-yyyy",
                              "value-format": "MM-dd-yyyy",
                              editable: ""
                            },
                            model: {
                              value: _vm.startDate,
                              callback: function($$v) {
                                _vm.startDate = $$v
                              },
                              expression: "startDate"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "div",
                        { staticClass: "block" },
                        [
                          _c("el-date-picker", {
                            attrs: {
                              format: "MM-dd-yyyy",
                              "value-format": "MM-dd-yyyy",
                              editable: ""
                            },
                            model: {
                              value: _vm.endDate,
                              callback: function($$v) {
                                _vm.endDate = $$v
                              },
                              expression: "endDate"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-lg btn-success",
                        attrs: { id: "searchBtn" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.submitSearch($event)
                          }
                        }
                      },
                      [_vm._v(" Submit Search ")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tableShow,
                      expression: "tableShow"
                    }
                  ]
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("button", { staticClass: "btn btn-lg btn-success" }, [
                        _vm._v(" Save ")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _c(
                        "el-table",
                        {
                          staticStyle: { width: "100%" },
                          attrs: {
                            data: _vm.test,
                            stripe: "",
                            "max-height": "500",
                            "default-sort": {
                              prop: "NAME",
                              order: "ascending"
                            },
                            fit: ""
                          }
                        },
                        [
                          _c("el-table-column", {
                            attrs: { type: "expand" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c("h4", [_vm._v("Expanded Files: ")]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(_vm._s(props.row.EXPANDED))
                                    ])
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "TYPE",
                              label: "TYPE",
                              sortable: "",
                              "min-width": "80"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "NAME",
                              label: "NAME",
                              sortable: "",
                              "min-width": "180"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "SSN",
                              label: "SSN",
                              sortable: "",
                              "min-width": "100"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "GRADE",
                              label: "GRADE",
                              sortable: "",
                              "min-width": "100"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "DOB",
                              label: "DOB",
                              sortable: "",
                              "min-width": "100"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: {
                              prop: "NOTES",
                              label: "NOTES",
                              sortable: "",
                              "min-width": "480"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    _c("el-input", {
                                      attrs: { "controls-position": "right" },
                                      on: {
                                        blur: function($event) {
                                          _vm.changeNote(
                                            "NOTES",
                                            scope.row.SSN,
                                            scope.row.NOTES
                                          )
                                        }
                                      },
                                      model: {
                                        value: scope.row.NOTES,
                                        callback: function($$v) {
                                          _vm.$set(scope.row, "NOTES", $$v)
                                        },
                                        expression: "scope.row.NOTES"
                                      }
                                    })
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("el-table-column", {
                            attrs: { label: "Delete", "min-width": "90" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(scope) {
                                  return [
                                    _c(
                                      "el-button",
                                      {
                                        attrs: { size: "mini", type: "danger" },
                                        on: {
                                          click: function($event) {
                                            _vm.handleDelete(
                                              scope.$index,
                                              scope.row
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Delete")]
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tableShow,
                      expression: "tableShow"
                    }
                  ],
                  staticClass: "row"
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      on: { click: _vm.downloadTable }
                    },
                    [_vm._v("DOWNLOAD Current Table")]
                  )
                ]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-84d3f796", esExports)
  }
}

/***/ }),

/***/ "SAVc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ft/J");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("4c4be655", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21133923\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Surf-CIP.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21133923\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Surf-CIP.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "TVmP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__ = __webpack_require__("UthT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40ab164b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__ = __webpack_require__("ioVE");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("WYuh")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40ab164b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40ab164b", Component.options)
  } else {
    hotAPI.reload("data-v-40ab164b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Tbc1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "loader" })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04a0d67a", esExports)
  }
}

/***/ }),

/***/ "Ty93":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showSite,
          expression: "showSite"
        }
      ],
      staticClass: "container-fluid grey lighten-5"
    },
    [
      _c("app-navbar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pt-5 mt-3", staticStyle: { "min-height": "800px" } },
        [_c("router-view")],
        1
      ),
      _vm._v(" "),
      _c("app-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ba5bd90", esExports)
  }
}

/***/ }),

/***/ "UthT":
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "VrXl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#drop[data-v-fb2b07a6]{\nborder: 2px dashed #bbb;\n    border-radius: 5px;\n    padding: 25px;\n    text-align: center;\n    font: 20pt bold,\"Vollkorn\";\n    color: #bbb;\n}\n.no-left[data-v-fb2b07a6]{\n  margin-left:0;\n  padding-left:0\n}\n.custom-control.custom-radio[data-v-fb2b07a6]{\n    padding-left:20px;\n    padding-right:10px;\n    margin-right: 0;\n    cursor:pointer;\n}\ninput[type=\"text\"].form-control[data-v-fb2b07a6]{\n    color:black;\n    padding:5px;\n    border-radius: 5px;\n    position: relative;\n    //transform: translateY(-10%);\n    margin-bottom: 0px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #ffffff;\n    -webkit-box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n            box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n}\n.fade-enter-active[data-v-fb2b07a6] {\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n.fade-leave-active[data-v-fb2b07a6] {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n}\n.fade-enter[data-v-fb2b07a6], .fade-leave-to[data-v-fb2b07a6] {\n    opacity: 0;\n}\n.fade-enter-to[data-v-fb2b07a6], .fade-leave[data-v-fb2b07a6] {\n    opacity: 1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "WYuh":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("oGhs");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7764f9fe", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40ab164b\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40ab164b\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Footer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Surf__ = __webpack_require__("d5XC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Surf_CIP__ = __webpack_require__("ZWAs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_AD_Grab__ = __webpack_require__("HhOn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_SurfFla__ = __webpack_require__("OhHN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_LookUp__ = __webpack_require__("Iglj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_vml__ = __webpack_require__("9bqw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ADP__ = __webpack_require__("Yium");










__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Surf',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Surf__["a" /* default */]
  }, {
    path: '/Surf_CIP',
    name: 'Surf_CIP',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Surf_CIP__["a" /* default */]
  }, {
    path: '/AD_Grab',
    name: 'AD_Grab',
    component: __WEBPACK_IMPORTED_MODULE_4__components_AD_Grab__["a" /* default */]
  }, {
    path: '/SurfFla',
    name: 'Surf_Fla',
    component: __WEBPACK_IMPORTED_MODULE_5__components_SurfFla__["a" /* default */]
  }, {
    path: '/LookUp',
    name: 'LookUp',
    component: __WEBPACK_IMPORTED_MODULE_6__components_LookUp__["a" /* default */]
  }, {
    path: '/vml',
    name: 'vml',
    component: __WEBPACK_IMPORTED_MODULE_7__components_vml__["a" /* default */]
  }, {
    path: '/ADP',
    name: 'ADP',
    component: __WEBPACK_IMPORTED_MODULE_8__components_ADP__["a" /* default */]
  }, { path: '*', redirect: '/' }],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
}));

/***/ }),

/***/ "Yium":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ADP_vue__ = __webpack_require__("wx/X");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fb2b07a6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ADP_vue__ = __webpack_require__("ZY+0");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("6mfV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fb2b07a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ADP_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fb2b07a6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ADP_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/ADP.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb2b07a6", Component.options)
  } else {
    hotAPI.reload("data-v-fb2b07a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ZWAs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Surf_CIP_vue__ = __webpack_require__("GbnY");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21133923_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Surf_CIP_vue__ = __webpack_require__("5WZ1");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("SAVc")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21133923"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Surf_CIP_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21133923_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Surf_CIP_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Surf-CIP.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21133923", Component.options)
  } else {
    hotAPI.reload("data-v-21133923", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ZY+0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "transition-group",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _c("loader", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loaded,
                expression: "!loaded"
              }
            ],
            key: "loader"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loaded,
                  expression: "loaded"
                }
              ],
              key: "content"
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("h1", { staticClass: "col" }, [_vm._v("ADP")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-4 text-right",
                    staticStyle: { "margin-top": "15px" }
                  },
                  [
                    _vm._v("\n      Data as of: \n      "),
                    _c(
                      "span",
                      {
                        staticStyle: { "font-weight": "bold", color: "#4d8bf9" }
                      },
                      [_vm._v(" " + _vm._s(_vm.asDate) + " ")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "This page takes a list of ADPs to build complete ADP Reports from data within TODP_SURF."
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h2", [_vm._v("Step 1: Upload ADP list ")]),
              _vm._v(" "),
              _c("div", { staticClass: "container-responsive" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      {
                        attrs: { id: "drop" },
                        on: {
                          drop: _vm.handleDrop,
                          dragover: _vm.handleDragover,
                          dragenter: _vm.handleDragover
                        }
                      },
                      [_vm._v("Drop File Here")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step2,
                        expression: "step2"
                      }
                    ],
                    staticClass: "container"
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-3 no-left" }, [
                        _c("h2", [_vm._v("Step 2:Preprocess")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("div", { staticClass: "dropdown" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-sm btn-primary dropdown-toggle",
                              attrs: {
                                type: "button",
                                id: "dropdownMenu1",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              }
                            },
                            [_vm._v(" " + _vm._s(_vm.dropDownText) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown-menu dropdown-primary" },
                            _vm._l(_vm.columns, function(col, index) {
                              return _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.selectCol(index)
                                    }
                                  }
                                },
                                [_vm._v(" " + _vm._s(col) + " ")]
                              )
                            })
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
                        _vm.selectedCol >= 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-amber",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.processSSN($event)
                                  }
                                }
                              },
                              [_vm._v(" Process SSNs ")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        _vm._l(_vm.workbook.SheetNames, function(sheet, index) {
                          return _c(
                            "button",
                            {
                              class: [
                                "btn",
                                "btn-sm",
                                index == _vm.currentSheetIndex
                                  ? "btn-success"
                                  : "btn-info"
                              ],
                              on: {
                                click: function($event) {
                                  _vm.changeSheet(index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                " \n              " +
                                  _vm._s(sheet) +
                                  " \n            "
                              )
                            ]
                          )
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showGrid,
                            expression: "showGrid"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("v-data-table", {
                          staticClass: "elevation-1",
                          attrs: {
                            headers: _vm.headersV1,
                            items: _vm.myGridTop10,
                            "hide-actions": ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "items",
                              fn: function(props) {
                                return _c(
                                  "tr",
                                  {},
                                  _vm._l(_vm.headersV1, function(col) {
                                    return _c("td", [
                                      _vm._v(_vm._s(props.item[col.text]))
                                    ])
                                  })
                                )
                              }
                            }
                          ])
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-4",
                            staticStyle: {
                              "margin-left": "0",
                              "padding-left": "0"
                            }
                          },
                          [_c("h2", [_vm._v("Step 3:Confirm SSNs")])]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-5" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.dins,
                                expression: "dins"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder:
                                "DINS Requested (Columns separated by spaces)"
                            },
                            domProps: { value: _vm.dins },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.dins = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.validatedDins > "",
                            expression: "validatedDins > ''"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("h4", { staticStyle: { color: "green" } }, [
                          _vm._v(
                            " Validated Dins: " +
                              _vm._s(_vm.validatedDins) +
                              " "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.badDins > "",
                            expression: "badDins > ''"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("h4", { staticStyle: { color: "red" } }, [
                          _vm._v(" BAD Dins: " + _vm._s(_vm.badDins) + " ")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-info",
                              on: {
                                click: function($event) {
                                  _vm.dialog = true
                                }
                              }
                            },
                            [_vm._v("Add SSN")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-sm btn-danger " },
                            [_vm._v(" Bad: " + _vm._s(_vm.numBad) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              class: ["btn", "btn-sm", "btn-amber"],
                              attrs: {
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Validate with our records"
                              },
                              on: { click: _vm.validate }
                            },
                            [_vm._v(" Validate List ")]
                          ),
                          _vm._v(" "),
                          _vm.numValidated > 0
                            ? _c(
                                "button",
                                {
                                  class: ["btn", "btn-sm", "btn-success"],
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title:
                                      "Make sure the currect type of SURF is requested"
                                  },
                                  on: { click: _vm.runSurf }
                                },
                                [
                                  _vm._v(
                                    " Merge (" +
                                      _vm._s(_vm.numValidated) +
                                      ") with AD " +
                                      _vm._s(_vm.force) +
                                      " File "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-7" }, [
                          _c(
                            "h6",
                            {
                              staticStyle: {
                                "margin-top": "12px",
                                "margin-left": "20px"
                              }
                            },
                            [
                              _vm._v(
                                "Showing rows " +
                                  _vm._s(
                                    (_vm.currentPageGrid2 - 1) *
                                      _vm.pageSizeGrid2 +
                                      1
                                  ) +
                                  " - " +
                                  _vm._s(
                                    _vm.currentPageGrid2 * _vm.pageSizeGrid2
                                  ) +
                                  " \n              "
                              ),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-info",
                                  on: { click: _vm.prevPage }
                                },
                                [_vm._v("← Previous Page")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-info",
                                  on: { click: _vm.nextPage }
                                },
                                [_vm._v("Next Page →")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-5" }, [
                          _c(
                            "h6",
                            {
                              staticStyle: {
                                "margin-top": "12px",
                                "margin-left": "20px"
                              }
                            },
                            [
                              _vm._v("   \n            "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-success",
                                  on: { click: _vm.downloadTable }
                                },
                                [_vm._v("DOWNLOAD Current Table")]
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-12" },
                          [
                            _c(
                              "v-app",
                              { attrs: { "min-height": "1vh" } },
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: {
                                      "data-app": "true",
                                      "max-width": "500px"
                                    },
                                    model: {
                                      value: _vm.dialog,
                                      callback: function($$v) {
                                        _vm.dialog = $$v
                                      },
                                      expression: "dialog"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-card-title", [
                                          _c(
                                            "span",
                                            { staticClass: "headline" },
                                            [_vm._v(_vm._s(_vm.formTitle))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-container",
                                              { attrs: { "grid-list-md": "" } },
                                              [
                                                _c(
                                                  "v-layout",
                                                  { attrs: { wrap: "" } },
                                                  [
                                                    _c(
                                                      "v-flex",
                                                      {
                                                        attrs: {
                                                          xs12: "",
                                                          sm6: "",
                                                          md4: ""
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: "SSN"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .SSN,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "SSN",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.SSN"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-actions",
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.close($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Cancel")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.save($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Save")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-data-table", {
                                  staticClass: "elevation-1",
                                  attrs: {
                                    headers: _vm.headersV,
                                    items: _vm.slicedGrid2,
                                    "hide-actions": "",
                                    "min-height": "1vh"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "items",
                                      fn: function(props) {
                                        return _c(
                                          "tr",
                                          {},
                                          [
                                            _vm._l(_vm.columnDins, function(
                                              col
                                            ) {
                                              return _c(
                                                "td",
                                                {
                                                  staticClass:
                                                    "my-2 text-xs-left"
                                                },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(props.item[col]) +
                                                      " "
                                                  )
                                                ]
                                              )
                                            }),
                                            _vm._v(" "),
                                            !_vm.step4
                                              ? _c(
                                                  "td",
                                                  {
                                                    staticClass:
                                                      "justify-center layout px-0",
                                                    on: {
                                                      click: function($event) {}
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        staticClass: "mx-0",
                                                        attrs: { icon: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.editItem(
                                                              props.item
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "teal"
                                                            }
                                                          },
                                                          [_vm._v("edit")]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        staticClass: "mx-0",
                                                        attrs: { icon: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.deleteItem(
                                                              props.item
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "pink"
                                                            }
                                                          },
                                                          [_vm._v("delete")]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ],
                                          2
                                        )
                                      }
                                    }
                                  ])
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-6" }, [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showButton,
                                  expression: "showButton"
                                }
                              ],
                              ref: "surfButton",
                              staticClass: "btn btn-sm btn-info ",
                              attrs: {
                                href: _vm.href,
                                download: _vm.boardLink + ".zip"
                              }
                            },
                            [_vm._v(" TEST ")]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fb2b07a6", esExports)
  }
}

/***/ }),

/***/ "ZmmJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(d3, FileSaver) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DatePicker__ = __webpack_require__("6Tc7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Loader__ = __webpack_require__("wd27");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__("wtEF");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			asDate: 'Undetermined',
			loaded: true,
			name: '',
			ssn: '',
			dob: null,
			nameCurrent: 'Contains',
			nameOptions: ['Contains', 'Starts With'],
			ssnCurrent: 'Contains',
			ssnOptions: ['Contains', 'Starts With'],
			dobStart: '',
			dobEnd: null,
			date: null,
			startDate: null,
			endDate: null,
			dateBool: true,
			datetime: null,
			menu: false,
			modal: false,
			menu2: false,
			show: false,
			tableShow: false,
			test: []
		};
	},

	components: {
		DatePicker: __WEBPACK_IMPORTED_MODULE_0__DatePicker__["a" /* default */],
		loader: __WEBPACK_IMPORTED_MODULE_2__Loader__["default"]
	},
	mounted: function mounted() {
		this.asDate = __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* store */].state.lookup;
		console.log(this.datetime);
	},

	watch: {
		startDate: function startDate(val) {
			if (this.dateBool) {
				this.endDate = val;
				this.dateBool = false;
			}
		}
	},
	methods: {
		changeNote: function changeNote(col, id, newValue) {
			console.log(col + ' -- ' + id + ' -- ' + newValue);
			var querystring = __webpack_require__("1nuA");
			var formData = {
				'_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
				'nPage': "vml_insert",
				'insertId': id,
				'col': col,
				'newValue': newValue
			};
			__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(axios_url_surf, querystring.stringify(formData)).then(function (response) {
				console.log(response);
			}).catch(function (error) {
				console.log(error.response);
			});
		},
		downloadTable: function downloadTable() {
			var blob = new Blob([d3.csv.format(this.test)], { type: "text/csv;charset=utf-8" });
			FileSaver.saveAs(blob, 'Vml.csv');
		},
		submitSearch: function submitSearch() {
			var _this = this;

			this.loaded = false;
			var querystring = __webpack_require__("1nuA");
			var dt = null;
			if (!this.startDate) this.startDate = this.endDate;
			if (!this.endDate) this.endDate = this.startDate;
			dt = this.startDate + ' ' + this.endDate;
			var formData = {
				'_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
				'nPage': "vml",
				'name': this.name,
				'nameType': this.nameCurrent,
				'ssn': this.ssn,
				'ssnType': this.ssnCurrent,
				'dob': dt
			};
			__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.headers.get['Accepts'] = 'application/json';
			__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(axios_url_vml, querystring.stringify(formData)).then(function (response) {
				console.log(response);
				if (response.data.success) {
					_this.test = response.data.data;
					_this.tableShow = true;
					_this.loaded = true;
				} else {
					alert(response.data.error);
				}
			}).catch(function (error) {
				console.log(error.response);
				this.loaded = true;
			});
		},
		handleEdit: function handleEdit(index, row) {
			console.log(index, row);
		},
		handleDelete: function handleDelete(index, row) {
			this.test.splice(index, 1);
			console.log(index, row);
		}
	}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("Za4h"), __webpack_require__("lDdF")))

/***/ }),

/***/ "cgIg":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.elevate-3[data-v-41458b80] {\n    -webkit-box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23);\n            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23);\n}\nbutton[data-v-41458b80]:hover {\n    background-color: #4285F4;\n}\nbutton[data-v-41458b80]:active {\n    background-color: #0d47a1;\n}\n", ""]);

// exports


/***/ }),

/***/ "d2X4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(d3, FileSaver) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("uXZL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loader__ = __webpack_require__("wd27");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__("wtEF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip__ = __webpack_require__("WgY6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jszip__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      dins: '',
      validatedDins: '',
      columnDins: ['SSN', 'SSN_FORMAT', 'VALIDATED'],
      badDins: '',
      asDate: 'Undetermined',
      sentWarning: false,
      loaded: true,
      showGrid: false,
      step3: false,
      step2: false,
      step4: false,
      showButton: false,
      board: '',
      workbook: {
        Sheets: [''],
        SheetNames: ['']
      },
      force: 'officer',
      type: 'ad_grab',
      sheet_json: [],
      headers: [],
      selectedCol: -1,
      currentSheetIndex: 0,
      myGrid: {
        data: ['']
      },
      myGrid2: {
        data: ['']
      },
      pageSizeGrid2: 10,
      currentPageGrid2: 1,
      currentSort: 'SSN_FORMAT',
      showBad: false,
      dialog: false,
      editedIndex: -1,
      editedItem: {
        SSN: ''
      },
      defaultItem: {
        SSN: ''
      },
      headersV: [],
      href: '',
      ssnList: [],
      numGood: 0,
      numBad: 0,
      numValidated: 0,
      totalParts: 0,
      currentParts: 0,
      state: {
        headers: [''],
        tickets: [''],
        myGrid: []
      },
      zip: {},
      folder: {}
    };
  },
  mounted: function mounted() {
    this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.AD;
    this.zip = new __WEBPACK_IMPORTED_MODULE_5_jszip___default.a();
    this.folder = this.zip.folder('folder');
    // this.myGrid = canvasDatagrid();
    // document.getElementById('myGrid').appendChild(this.myGrid)
    // this.myGrid2 = canvasDatagrid();
    // document.getElementById('myGrid2').appendChild(this.myGrid2)
  },

  components: {
    loader: __WEBPACK_IMPORTED_MODULE_3__Loader__["default"]
  },
  computed: {
    slicedGrid2: function slicedGrid2() {
      var _this = this;

      return this.myGrid2.data.filter(function (row, index) {
        var start = (_this.currentPageGrid2 - 1) * _this.pageSizeGrid2;
        var end = _this.currentPageGrid2 * _this.pageSizeGrid2;
        if (index >= start && index < end) return true;
      });
    },
    boardLink: function boardLink() {
      var forceString = 'Enlisted';
      if (this.force == 'officer') forceString = 'Officer';

      return 'AD ' + forceString;
    },
    myGridTop10: function myGridTop10() {
      var limit = this.myGrid.data.length;
      if (limit > 10) limit = 10;
      return this.myGrid.data.slice(0, limit);
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },

    typeString: function typeString() {
      return 'AD ' + this.force;
    },
    currentSheetName: function currentSheetName() {
      return this.workbook.SheetNames[this.currentSheetIndex];
    },
    worksheet: function worksheet() {
      return this.workbook.Sheets[this.currentSheetName];
    },
    columns: function columns() {
      return this.headers[this.currentSheetIndex];
      //return this.sheet_json[this.currentSheetIndex][0];
    },
    headersV1: function headersV1() {
      var col = this.headers[this.currentSheetIndex];
      var toReturn = [];
      if (col) {
        col.forEach(function (d) {
          toReturn.push({
            'text': d,
            'value': d,
            'align': 'left'
          });
        });
      }
      return toReturn;
    },
    dropDownText: function dropDownText() {
      if (this.selectedCol == -1) return 'Select SSN Column';else return this.columns[this.selectedCol];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    selectedCol: function selectedCol(val) {
      this.showGrid = true;
    },

    currentSheetIndex: function currentSheetIndex(val) {
      this.showGrid = true;
      this.myGrid.data = this.sheet_json[this.currentSheetIndex];
      // this.headersV1 = [];
      // this.columns.forEach((d)=>{
      //   this.headersV1.push({
      //     'text': d,
      //     'value': d,
      //   })
      // })
      this.selectedCol = -1;
    },
    force: function force(val) {
      if (val == 'officer') {
        this.type = 'masked';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adoff;
      } else {
        this.type = 'with';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adenl;
      }
      this.numValidated = 0;
    }
  },
  methods: {
    nextPage: function nextPage() {
      if (this.currentPageGrid2 * this.pageSizeGrid2 < this.myGrid2.data.length) this.currentPageGrid2++;
    },
    prevPage: function prevPage() {
      if (this.currentPageGrid2 > 1) this.currentPageGrid2--;
    },
    downlaodZip: function downlaodZip() {
      var _this2 = this;

      this.loaded = false;
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });

      var querystring = __webpack_require__("1nuA");
      var formData = {
        '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
        'nPage': "runSurf",
        'force': this.force,
        'type': this.type,
        'board': this.board,
        'list': list.join(',')
      };

      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, {
        data: querystring.stringify(formData),
        headers: {
          'Content-Type': 'application/zip',
          'Accept': 'application/zip'
        },
        responseType: 'arraybuffer'
      }).then(function (response) {
        var reader = new window.FileReader();
        console.log(response);

        _this2.loaded = true;
      }).catch(function (error) {
        console.log(error.response);
        this.loaded = true;
      });

      // axios.post(axios_url_surf, querystring.stringify(formData)).then(response => {
      //     this.onReturn(response.data)
      // }).catch(function (error) {
      //     console.log(error.response);
      //     this.loaded=true;
      // });
    },
    sortByCol: function sortByCol(arr) {
      var _this3 = this;

      return arr.sort(function (a, b) {
        var modifier = 1;
        //if(this.currentSortDir === 'desc') modifier = -1;
        if (a[_this3.currentSort] < b[_this3.currentSort]) return -1 * modifier;
        if (a[_this3.currentSort] > b[_this3.currentSort]) return 1 * modifier;
        return 0;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.myGrid2.data.indexOf(item);
      this.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var index = this.myGrid2.data.indexOf(item);
      this.myGrid2.data.splice(index, 1);
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
      //this.numGood = 0
      setTimeout(function () {
        _this4.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      if (this.editedIndex > -1) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.myGrid2.data[this.editedIndex], this.editedItem);
      } else {
        this.myGrid2.data.push(this.editedItem);
        var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
        this.myGrid2.data = parsed;
        this.step3 = true;
        //this.numGood = 0
      }
      this.close();
    },
    onReturnFinal: function onReturnFinal(returned) {
      this.currentSort = 'SSN';
      console.log(returned);
      if (returned.data) {
        this.currentParts += 1;
        console.log(this.currentParts + ' VS ' + this.totalParts);
        var ret = returned.data;
        this.columnDins = returned.dins.split(' ');
        this.getHeaders();
        console.log(ret);
        if (this.currentParts <= 1) {
          console.log('SINGGGGGLEE');
          this.myGrid2.data = ret;
        } else {
          console.log('MULtttiiii');
          this.myGrid2.data = this.myGrid2.data.concat(ret);
        }
        this.step3 = true;
      }
      console.log(this.myGrid2.data);
      console.log(this.currentParts + ' VS ' + this.totalParts);
      if (this.currentParts >= this.totalParts) this.loaded = true;
      console.log('SHOW graph: ' + !this.loaded);
      console.log('test----');
    },
    onReturn: function onReturn(returned) {
      this.currentSort = 'VALIDATED';
      var statusFormat = {
        '1': 'GOOD',
        '7': 'ERROR: NOT FOUND ON FILE',
        '8': 'ERROR: DUPLICATE',
        '9': 'ERROR'
      };
      console.log(returned);
      if (returned.data) {
        this.currentParts += 1;
        var ret = returned.data;
        ret.forEach(function (record) {
          record.STATUS = statusFormat[record.STATUS];
        });
        var parsed = this.parse(ret, 'SSN', 2);
        if (this.currentParts <= 1) {
          this.myGrid2.data = parsed;
          this.numValidated = this.numGood;
          this.validatedDins = returned.goodDins;
          this.badDins = returned.badDins;
        } else {
          this.validatedDins = returned.goodDins;
          this.badDins = this.badDins + returned.badDins;
          this.myGrid2.data = this.sortByCol(this.myGrid2.data.concat(parsed));
          this.numValidated += this.numGood;
        }
        this.step3 = true;
      }
      console.log(this.currentParts + ' VS ' + this.totalParts);
      if (this.currentParts >= this.totalParts) this.loaded = true;
      console.log('SHOW graph: ' + !this.loaded);
      console.log('test----');
    },
    validate: function validate() {
      var _this5 = this;

      this.loaded = false;
      this.validatedDins = '';
      this.currentSort = 'SSN_FORMAT';
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log('len: ' + list.length);
      if (list.length <= 500) {
        console.log('SINGLE RUN');
        this.totalParts = 0;
        this.currentParts = 0;
        var querystring = __webpack_require__("1nuA");
        var _formData = {
          '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
          'nPage': "validateAD",
          'dins': this.dins,
          'force': this.force,
          'type': this.type,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_ad_grab_validate, querystring.stringify(_formData)).then(function (response) {
          _this5.onReturn(response.data);
        }).catch(function (error) {
          console.log(error.response);
        });
      } else {
        console.log('MULTI RUN');
        var nums = Math.floor(list.length / 500);
        var remaining = list.length % 500;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        console.log('nums: ' + nums);
        this.totalParts = nums;
        this.currentParts = 0;
        var splitList = [];
        for (var i = 1; i <= nums; i++) {
          if (i != nums) {
            splitList = list.slice(500 * (i - 1), 500 * i);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + 500 * i);
          } else {
            splitList = list.slice(500 * (i - 1), 500 * (i - 1) + remaining);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + (500 * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
            'nPage': "validateAD",
            'dins': this.dins,
            'force': this.force,
            'type': this.type,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_ad_grab_validate, querystring.stringify(formData)).then(function (response) {
            _this5.onReturn(response.data);
          }).catch(function (error) {
            console.log(error.response);
          });
        }
      }
    },
    runSurf: function runSurf() {
      var _this6 = this;

      this.step4 = true;
      this.loaded = false;
      var partLen = 500;
      this.sentWarning = true;
      var list = [];
      var getList = this.parse(this.myGrid2.data, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log(this.myGrid2.data);
      console.log(this.ssnList);
      console.log(getList);
      console.log(list);
      console.log('len: ' + list.length);
      if (list.length <= partLen) {
        this.totalParts = 0;
        this.currentParts = 0;
        console.log('SINGLE PART');
        var querystring = __webpack_require__("1nuA");
        var _formData2 = {
          '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
          'nPage': "runAD",
          'dins': this.validatedDins,
          'force': this.force,
          'type': this.type,
          'board': this.board,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_ad_grab_final, querystring.stringify(_formData2)).then(function (response) {
          _this6.onReturnFinal(response.data);
        }).catch(function (error) {
          console.log(error.response);
        });
      } else {
        console.log('MULTI PART');
        var nums = Math.floor(list.length / partLen);
        var remaining = list.length % partLen;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        this.totalParts = nums;
        this.currentParts = 0;
        console.log('nums: ' + nums);
        var splitList = [];
        for (var i = 1; i <= nums; i++) {

          if (i != nums) {
            splitList = list.slice(partLen * (i - 1), partLen * i);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + partLen * i);
          } else {
            splitList = list.slice(partLen * (i - 1), partLen * (i - 1) + remaining);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + (partLen * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
            'nPage': "runAD",
            'dins': this.validatedDins,
            'force': this.force,
            'type': this.type,
            'board': this.board,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_ad_grab_final, querystring.stringify(formData)).then(function (response) {
            _this6.onReturnFinal(response.data);
          }).catch(function (error) {
            console.log(error.response);
          });
        }
      }
    },
    parse: function parse(data, select, option) {
      var _this7 = this;

      this.ssnList = [];
      var checkSSN = 'GOOD';
      var numGood = 0;
      var numBad = 0;

      var clean = '';
      var isNum = false;
      data.forEach(function (row) {
        if (row[select]) {
          clean = row[select].replace(/\W/g, '');
          isNum = /^\d+$/.test(clean);

          if (clean.length > 9) isNum = false;

          var rep = 9 - clean.length;
          if (rep > 0) clean = '0'.repeat(rep) + clean;

          if (!isNum) clean = row[select];

          var status = '';
          if (option == 2) {
            status = row['STATUS'];
            if (status == 'GOOD') numGood += 1;else numBad += 1;
          } else if (option == 1) {
            if (!isNum) numBad += 1;
          }

          if (option == 1) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum
            });
          } else if (option == 2) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum,
              'VALIDATED': status
            });
          } else if (option == 3) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum,
              'VALIDATED': status
            });
          }
        }
      });
      this.numGood = numGood;
      this.numBad = numBad;

      return this.sortByCol(this.ssnList);
    },
    processSSN: function processSSN() {
      var select = this.columns[this.selectedCol];
      if (select == 'UNKNOWN 1') select = '__EMPTY';else if (select.startsWith('UNKNOWN ')) {
        var numb = select.substr(8);
        select = '__EMPTY_' + numb;
      }
      var parsed = this.parse(this.sheet_json[this.currentSheetIndex], select, 1);
      //console.log(this.sheet_json[this.currentSheetIndex])
      this.myGrid2.data = parsed;
      this.step3 = true;
      this.showGrid = false;
    },
    selectCol: function selectCol(val) {
      this.selectedCol = val;
    },
    changeSheet: function changeSheet(num) {
      this.currentSheetIndex = num;
      //this.myGrid.data = XLSX.utils.sheet_to_json(this.worksheet)
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function removeImage(e) {
      this.image = '';
    },
    get_header_row: function get_header_row(sheet) {
      var headers = [],
          range = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.decode_range(sheet['!ref']);
      var C,
          R = range.s.r; /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell = sheet[__WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.encode_cell({ c: C, r: R })]; /* find the cell in the first row */
        //var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
        var hdr = '';
        if (C == 1) hdr = '__EMPTY';else hdr = '__EMPTY_' + C;
        if (cell && cell.t) hdr = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.format_cell(cell);
        headers.push(hdr);
      }
      //console.log(headers)
      return headers;
    },
    fixdata: function fixdata(data) {
      var o = "",
          l = 0,
          w = 10240;
      for (; l < data.byteLength / w; ++l) {
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
      }o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    },
    workbook_to_json: function workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function (sheetName) {
        var roa = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      return result;
    },
    downloadTable: function downloadTable() {
      var blob = new Blob([d3.csv.format(this.myGrid2.data)], { type: "text/csv;charset=utf-8" });
      FileSaver.saveAs(blob, this.boardLink + '.csv');
    },

    /** PARSING and DRAGDROP **/
    handleDrop: function handleDrop(e) {
      var _this8 = this;

      this.currentSort = 'SSN_FORMAT';
      e.stopPropagation();
      e.preventDefault();
      console.log("DROPPED");
      var files = e.dataTransfer.files,
          i,
          f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader(),
            name = f.name;
        reader.onload = function (e) {
          var results,
              data = e.target.result,
              fixedData = _this8.fixdata(data);
          _this8.workbook = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.read(btoa(fixedData), { type: 'base64' });
          _this8.sheet_json = [];
          _this8.headers = [];
          //this.selectedCol = 1;
          for (var d in _this8.workbook.Sheets) {
            var sheet = _this8.workbook.Sheets[d];
            var page = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_json(sheet);

            _this8.sheet_json.push(page);
            _this8.headers.push(_this8.get_header_row(sheet));
          }
          // this.myGrid = canvasDatagrid();
          var div = document.getElementById('myGrid');
          _this8.myGrid.data = _this8.sheet_json[_this8.currentSheetIndex];

          // while(div.firstChild){
          //     div.removeChild(div.firstChild);
          // }
          // document.getElementById('myGrid').appendChild(this.myGrid)
        };
        reader.readAsArrayBuffer(f);
      }
      this.getHeaders();
      this.showGrid = true;
      this.step2 = true;
    },
    getHeaders: function getHeaders() {
      var obj = [];
      this.columnDins.forEach(function (d) {
        obj.push({
          'text': d,
          'value': d
        });
      });
      this.headersV = obj;
    },
    handleDragover: function handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index);
      var toDelete = index;
      if (this.currentPageGrid2 > 1) toDelete = index + (this.currentPageGrid2 - 1) * this.pageSizeGrid2;
      console.log(toDelete);
      if (index !== undefined && index >= 0) {
        this.myGrid2.data.splice(toDelete, 1);
      }
    }
  },
  beforeUpdate: function beforeUpdate() {
    console.log("beforeupdate");
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("Za4h"), __webpack_require__("lDdF")))

/***/ }),

/***/ "d5XC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Surf_vue__ = __webpack_require__("Ruci");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75c4bd46_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Surf_vue__ = __webpack_require__("npAC");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("noIa")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75c4bd46"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Surf_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75c4bd46_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Surf_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Surf.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75c4bd46", Component.options)
  } else {
    hotAPI.reload("data-v-75c4bd46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "e/nH":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#drop[data-v-85cc0036]{\nborder: 2px dashed #bbb;\n    border-radius: 5px;\n    padding: 25px;\n    text-align: center;\n    font: 20pt bold,\"Vollkorn\";\n    color: #bbb;\n}\n.no-left[data-v-85cc0036]{\n  margin-left:0;\n  padding-left:0\n}\n.custom-control.custom-radio[data-v-85cc0036]{\n    padding-left:20px;\n    padding-right:10px;\n    margin-right: 0;\n    cursor:pointer;\n}\ninput[type=\"text\"].form-control[data-v-85cc0036]{\n    color:black;\n    padding:5px;\n    border-radius: 5px;\n    position: relative;\n    //transform: translateY(-10%);\n    margin-bottom: 0px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #ffffff;\n    -webkit-box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n            box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n}\n.fade-enter-active[data-v-85cc0036] {\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n.fade-leave-active[data-v-85cc0036] {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n}\n.fade-enter[data-v-85cc0036], .fade-leave-to[data-v-85cc0036] {\n    opacity: 0;\n}\n.fade-enter-to[data-v-85cc0036], .fade-leave[data-v-85cc0036] {\n    opacity: 1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "eXTf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e/nH");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7a16cbdf", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-85cc0036\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SurfFla.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-85cc0036\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SurfFla.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "ft/J":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#drop[data-v-21133923]{\nborder: 2px dashed #bbb;\n    border-radius: 5px;\n    padding: 25px;\n    text-align: center;\n    font: 20pt bold,\"Vollkorn\";\n    color: #bbb;\n}\n.no-left[data-v-21133923]{\n  margin-left:0;\n  padding-left:0\n}\n.custom-control.custom-radio[data-v-21133923]{\n    padding-left:20px;\n    padding-right:10px;\n    margin-right: 0;\n    cursor:pointer;\n}\ninput[type=\"text\"].form-control[data-v-21133923]{\n    color:black;\n    padding:5px;\n    border-radius: 5px;\n    position: relative;\n    //transform: translateY(-10%);\n    margin-bottom: 0px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #ffffff;\n    -webkit-box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n            box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n}\n.fade-enter-active[data-v-21133923] {\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n.fade-leave-active[data-v-21133923] {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n}\n.fade-enter[data-v-21133923], .fade-leave-to[data-v-21133923] {\n    opacity: 0;\n}\n.fade-enter-to[data-v-21133923], .fade-leave[data-v-21133923] {\n    opacity: 1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "hfK9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#drop[data-v-1b0dd9b0]{\nborder: 2px dashed #bbb;\n    border-radius: 5px;\n    padding: 25px;\n    text-align: center;\n    font: 20pt bold,\"Vollkorn\";\n    color: #bbb;\n}\n.no-left[data-v-1b0dd9b0]{\n  margin-left:0;\n  padding-left:0\n}\n.custom-control.custom-radio[data-v-1b0dd9b0]{\n    padding-left:20px;\n    padding-right:10px;\n    margin-right: 0;\n    cursor:pointer;\n}\ninput[type=\"text\"].form-control[data-v-1b0dd9b0]{\n    color:black;\n    padding:5px;\n    border-radius: 5px;\n    position: relative;\n    //transform: translateY(-10%);\n    margin-bottom: 0px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #ffffff;\n    -webkit-box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n            box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n}\n.fade-enter-active[data-v-1b0dd9b0] {\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n.fade-leave-active[data-v-1b0dd9b0] {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n}\n.fade-enter[data-v-1b0dd9b0], .fade-leave-to[data-v-1b0dd9b0] {\n    opacity: 0;\n}\n.fade-enter-to[data-v-1b0dd9b0], .fade-leave[data-v-1b0dd9b0] {\n    opacity: 1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "ioVE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "footer",
    { staticClass: "page-footer primary-color-dark center-on-small-only" },
    [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("h5", { staticClass: "title mb-2 mt-3 font-bold" }, [
              _vm._v("Links")
            ]),
            _vm._v(" "),
            _c(
              "ul",
              [
                _c(
                  "router-link",
                  { staticClass: "footer-link", attrs: { to: "/", tag: "li" } },
                  [_c("a", { staticClass: "nav-link" }, [_vm._v("SURF")])]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "footer-link",
                    attrs: { to: "/LookUp", tag: "li" }
                  },
                  [_c("a", { staticClass: "nav-link" }, [_vm._v("LookUp")])]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "footer-link",
                    attrs: { to: "/ADP", tag: "li" }
                  },
                  [_c("a", { staticClass: "nav-link" }, [_vm._v("ADP")])]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2)
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("p", { staticClass: "no-marg" }, [
        _vm._v("For more information, questions or concerns please contact:")
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "title mb-2 mt-3 font-bold" }, [
        _vm._v("AFPC DSYD")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "no-marg" }, [
        _vm._v("Email: "),
        _c(
          "a",
          {
            staticClass: "font-bold",
            attrs: {
              href:
                "mailto:DSYD.WorkFlow@us.af.mil?Subject=PERS_STAT Assistance"
            }
          },
          [_vm._v("DSYD.WorkFlow@us.af.mil")]
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "no-marg" }, [_vm._v("DSN: 312-665-3540")]),
      _vm._v(" "),
      _c("p", { staticClass: "no-marg" }, [_vm._v("COM: 210-565-3540")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("h5", { staticClass: "title mb-2 mt-3 font-bold" }, [
        _vm._v(" Additional Links")
      ]),
      _vm._v(" "),
      _c("ul")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer-copyright" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _vm._v(
          "\n                        © 2017-2018 Copyright: United States Air Force\n                    "
        )
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-40ab164b", esExports)
  }
}

/***/ }),

/***/ "jBjs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/afpc_log.e969ea7.png";

/***/ }),

/***/ "jNBe":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#drop[data-v-75c4bd46]{\nborder: 2px dashed #bbb;\n    border-radius: 5px;\n    padding: 25px;\n    text-align: center;\n    font: 20pt bold,\"Vollkorn\";\n    color: #bbb;\n}\n.no-left[data-v-75c4bd46]{\n  margin-left:0;\n  padding-left:0\n}\n.custom-control.custom-radio[data-v-75c4bd46]{\n    padding-left:20px;\n    padding-right:10px;\n    margin-right: 0;\n    cursor:pointer;\n}\ninput[type=\"text\"].form-control[data-v-75c4bd46]{\n    color:black;\n    padding:5px;\n    border-radius: 5px;\n    position: relative;\n    //transform: translateY(-10%);\n    margin-bottom: 0px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #ffffff;\n    -webkit-box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n            box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n}\n.fade-enter-active[data-v-75c4bd46] {\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n.fade-leave-active[data-v-75c4bd46] {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n}\n.fade-enter[data-v-75c4bd46], .fade-leave-to[data-v-75c4bd46] {\n    opacity: 0;\n}\n.fade-enter-to[data-v-75c4bd46], .fade-leave[data-v-75c4bd46] {\n    opacity: 1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "k1UT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lfLh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__ = __webpack_require__("Drc2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41458b80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__ = __webpack_require__("My6e");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("Jpt8")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-41458b80"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41458b80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41458b80", Component.options)
  } else {
    hotAPI.reload("data-v-41458b80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "mPRR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "transition-group",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _c("loader", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loaded,
                expression: "!loaded"
              }
            ],
            key: "loader"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loaded,
                  expression: "loaded"
                }
              ],
              key: "content"
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("h1", { staticClass: "col" }, [_vm._v("AD GRAB")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-4 text-right",
                    staticStyle: { "margin-top": "15px" }
                  },
                  [
                    _vm._v("\n      Data as of: \n      "),
                    _c(
                      "span",
                      {
                        staticStyle: { "font-weight": "bold", color: "#4d8bf9" }
                      },
                      [_vm._v(" " + _vm._s(_vm.asDate) + " ")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col inline-form-group",
                    attrs: { id: "radioSelect" }
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.force,
                              expression: "force"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "force",
                            type: "radio",
                            value: "officer"
                          },
                          domProps: { checked: _vm._q(_vm.force, "officer") },
                          on: {
                            change: function($event) {
                              _vm.force = "officer"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Officer")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.force,
                              expression: "force"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "force",
                            type: "radio",
                            value: "enlisted"
                          },
                          domProps: { checked: _vm._q(_vm.force, "enlisted") },
                          on: {
                            change: function($event) {
                              _vm.force = "enlisted"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Enlisted")]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "This page is used to append Columns from AD-Officer and AD-Enlisted datasets."
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h2", [_vm._v("Step 1: Upload SSN list ")]),
              _vm._v(" "),
              _c("div", { staticClass: "container-responsive" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      {
                        attrs: { id: "drop" },
                        on: {
                          drop: _vm.handleDrop,
                          dragover: _vm.handleDragover,
                          dragenter: _vm.handleDragover
                        }
                      },
                      [_vm._v("Drop File Here")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step2,
                        expression: "step2"
                      }
                    ],
                    staticClass: "container"
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-3 no-left" }, [
                        _c("h2", [_vm._v("Step 2:Preprocess")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("div", { staticClass: "dropdown" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-sm btn-primary dropdown-toggle",
                              attrs: {
                                type: "button",
                                id: "dropdownMenu1",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              }
                            },
                            [_vm._v(" " + _vm._s(_vm.dropDownText) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown-menu dropdown-primary" },
                            _vm._l(_vm.columns, function(col, index) {
                              return _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.selectCol(index)
                                    }
                                  }
                                },
                                [_vm._v(" " + _vm._s(col) + " ")]
                              )
                            })
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
                        _vm.selectedCol >= 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-amber",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.processSSN($event)
                                  }
                                }
                              },
                              [_vm._v(" Process SSNs ")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        _vm._l(_vm.workbook.SheetNames, function(sheet, index) {
                          return _c(
                            "button",
                            {
                              class: [
                                "btn",
                                "btn-sm",
                                index == _vm.currentSheetIndex
                                  ? "btn-success"
                                  : "btn-info"
                              ],
                              on: {
                                click: function($event) {
                                  _vm.changeSheet(index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                " \n              " +
                                  _vm._s(sheet) +
                                  " \n            "
                              )
                            ]
                          )
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showGrid,
                            expression: "showGrid"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("v-data-table", {
                          staticClass: "elevation-1",
                          attrs: {
                            headers: _vm.headersV1,
                            items: _vm.myGridTop10,
                            "hide-actions": ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "items",
                              fn: function(props) {
                                return _c(
                                  "tr",
                                  {},
                                  _vm._l(_vm.headersV1, function(col) {
                                    return _c("td", [
                                      _vm._v(_vm._s(props.item[col.text]))
                                    ])
                                  })
                                )
                              }
                            }
                          ])
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-4",
                            staticStyle: {
                              "margin-left": "0",
                              "padding-left": "0"
                            }
                          },
                          [_c("h2", [_vm._v("Step 3:Confirm SSNs")])]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-5" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.dins,
                                expression: "dins"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder:
                                "DINS Requested (Columns separated by spaces)"
                            },
                            domProps: { value: _vm.dins },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.dins = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.validatedDins > "",
                            expression: "validatedDins > ''"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("h4", { staticStyle: { color: "green" } }, [
                          _vm._v(
                            " Validated Dins: " +
                              _vm._s(_vm.validatedDins) +
                              " "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.badDins > "",
                            expression: "badDins > ''"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("h4", { staticStyle: { color: "red" } }, [
                          _vm._v(" BAD Dins: " + _vm._s(_vm.badDins) + " ")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-info",
                              on: {
                                click: function($event) {
                                  _vm.dialog = true
                                }
                              }
                            },
                            [_vm._v("Add SSN")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-sm btn-danger " },
                            [_vm._v(" Bad: " + _vm._s(_vm.numBad) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              class: ["btn", "btn-sm", "btn-amber"],
                              attrs: {
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Validate with our records"
                              },
                              on: { click: _vm.validate }
                            },
                            [_vm._v(" Validate List ")]
                          ),
                          _vm._v(" "),
                          _vm.numValidated > 0
                            ? _c(
                                "button",
                                {
                                  class: ["btn", "btn-sm", "btn-success"],
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title:
                                      "Make sure the currect type of SURF is requested"
                                  },
                                  on: { click: _vm.runSurf }
                                },
                                [
                                  _vm._v(
                                    " Merge (" +
                                      _vm._s(_vm.numValidated) +
                                      ") with AD " +
                                      _vm._s(_vm.force) +
                                      " File "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-7" }, [
                          _c(
                            "h6",
                            {
                              staticStyle: {
                                "margin-top": "12px",
                                "margin-left": "20px"
                              }
                            },
                            [
                              _vm._v(
                                "Showing rows " +
                                  _vm._s(
                                    (_vm.currentPageGrid2 - 1) *
                                      _vm.pageSizeGrid2 +
                                      1
                                  ) +
                                  " - " +
                                  _vm._s(
                                    _vm.currentPageGrid2 * _vm.pageSizeGrid2
                                  ) +
                                  " \n              "
                              ),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-info",
                                  on: { click: _vm.prevPage }
                                },
                                [_vm._v("← Previous Page")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-info",
                                  on: { click: _vm.nextPage }
                                },
                                [_vm._v("Next Page →")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-5" }, [
                          _c(
                            "h6",
                            {
                              staticStyle: {
                                "margin-top": "12px",
                                "margin-left": "20px"
                              }
                            },
                            [
                              _vm._v("   \n            "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-success",
                                  on: { click: _vm.downloadTable }
                                },
                                [_vm._v("DOWNLOAD Current Table")]
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-12" },
                          [
                            _c(
                              "v-app",
                              { attrs: { "min-height": "1vh" } },
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: {
                                      "data-app": "true",
                                      "max-width": "500px"
                                    },
                                    model: {
                                      value: _vm.dialog,
                                      callback: function($$v) {
                                        _vm.dialog = $$v
                                      },
                                      expression: "dialog"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-card-title", [
                                          _c(
                                            "span",
                                            { staticClass: "headline" },
                                            [_vm._v(_vm._s(_vm.formTitle))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-container",
                                              { attrs: { "grid-list-md": "" } },
                                              [
                                                _c(
                                                  "v-layout",
                                                  { attrs: { wrap: "" } },
                                                  [
                                                    _c(
                                                      "v-flex",
                                                      {
                                                        attrs: {
                                                          xs12: "",
                                                          sm6: "",
                                                          md4: ""
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: "SSN"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .SSN,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "SSN",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.SSN"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-actions",
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.close($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Cancel")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.save($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Save")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-data-table", {
                                  staticClass: "elevation-1",
                                  attrs: {
                                    headers: _vm.headersV,
                                    items: _vm.slicedGrid2,
                                    "hide-actions": "",
                                    "min-height": "1vh"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "items",
                                      fn: function(props) {
                                        return _c(
                                          "tr",
                                          {},
                                          [
                                            _vm._l(_vm.columnDins, function(
                                              col
                                            ) {
                                              return _c(
                                                "td",
                                                {
                                                  staticClass:
                                                    "my-2 text-xs-left"
                                                },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(props.item[col]) +
                                                      " "
                                                  )
                                                ]
                                              )
                                            }),
                                            _vm._v(" "),
                                            !_vm.step4
                                              ? _c(
                                                  "td",
                                                  {
                                                    staticClass:
                                                      "justify-center layout px-0",
                                                    on: {
                                                      click: function($event) {}
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        staticClass: "mx-0",
                                                        attrs: { icon: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.editItem(
                                                              props.item
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "teal"
                                                            }
                                                          },
                                                          [_vm._v("edit")]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        staticClass: "mx-0",
                                                        attrs: { icon: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.deleteItem(
                                                              props.item
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "pink"
                                                            }
                                                          },
                                                          [_vm._v("delete")]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ],
                                          2
                                        )
                                      }
                                    }
                                  ])
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-6" }, [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showButton,
                                  expression: "showButton"
                                }
                              ],
                              ref: "surfButton",
                              staticClass: "btn btn-sm btn-info ",
                              attrs: {
                                href: _vm.href,
                                download: _vm.boardLink + ".zip"
                              }
                            },
                            [_vm._v(" TEST ")]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b0dd9b0", esExports)
  }
}

/***/ }),

/***/ "mvxS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "transition-group",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _c("loader", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loaded,
                expression: "!loaded"
              }
            ],
            key: "loader"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loaded,
                  expression: "loaded"
                }
              ],
              key: "content"
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("h1", { staticClass: "col" }, [_vm._v("SURF FLA")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-4 text-right",
                    staticStyle: { "margin-top": "15px" }
                  },
                  [
                    _vm._v("\n      Data as of: \n      "),
                    _c(
                      "span",
                      {
                        staticStyle: { "font-weight": "bold", color: "#4d8bf9" }
                      },
                      [_vm._v(" " + _vm._s(_vm.asDate) + " ")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col inline-form-group",
                    attrs: { id: "radioSelect" }
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.force,
                              expression: "force"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "force",
                            type: "radio",
                            value: "officer"
                          },
                          domProps: { checked: _vm._q(_vm.force, "officer") },
                          on: {
                            change: function($event) {
                              _vm.force = "officer"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Officer")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.force,
                              expression: "force"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "force",
                            type: "radio",
                            value: "enlisted"
                          },
                          domProps: { checked: _vm._q(_vm.force, "enlisted") },
                          on: {
                            change: function($event) {
                              _vm.force = "enlisted"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Enlisted")]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col inline-form-group",
                    attrs: { id: "radioSelect" }
                  },
                  [
                    _c(
                      "label",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.force == "officer",
                            expression: "force=='officer'"
                          }
                        ],
                        staticClass: "custom-control custom-radio"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.type,
                              expression: "type"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "type",
                            type: "radio",
                            value: "masked"
                          },
                          domProps: { checked: _vm._q(_vm.type, "masked") },
                          on: {
                            change: function($event) {
                              _vm.type = "masked"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Masked ")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.force == "officer",
                            expression: "force=='officer'"
                          }
                        ],
                        staticClass: "custom-control custom-radio"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.type,
                              expression: "type"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "type",
                            type: "radio",
                            value: "unmasked"
                          },
                          domProps: { checked: _vm._q(_vm.type, "unmasked") },
                          on: {
                            change: function($event) {
                              _vm.type = "unmasked"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Unmasked")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.force == "enlisted",
                            expression: "force=='enlisted'"
                          }
                        ],
                        staticClass: "custom-control custom-radio"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.type,
                              expression: "type"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { name: "type", type: "radio", value: "with" },
                          domProps: { checked: _vm._q(_vm.type, "with") },
                          on: {
                            change: function($event) {
                              _vm.type = "with"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("With Professional Specialty")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.force == "enlisted",
                            expression: "force=='enlisted'"
                          }
                        ],
                        staticClass: "custom-control custom-radio"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.type,
                              expression: "type"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "type",
                            type: "radio",
                            value: "without"
                          },
                          domProps: { checked: _vm._q(_vm.type, "without") },
                          on: {
                            change: function($event) {
                              _vm.type = "without"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Without Professional Specialty")]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("This page is used to generate SURFs.")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h2", [_vm._v("Step 1: Upload SSN list ")]),
              _vm._v(" "),
              _c("div", { staticClass: "container-responsive" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      {
                        attrs: { id: "drop" },
                        on: {
                          drop: _vm.handleDrop,
                          dragover: _vm.handleDragover,
                          dragenter: _vm.handleDragover
                        }
                      },
                      [_vm._v("Drop File Here")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step2,
                        expression: "step2"
                      }
                    ],
                    staticClass: "container"
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-3 no-left" }, [
                        _c("h2", [_vm._v("Step 2:Preprocess")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("div", { staticClass: "dropdown" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-sm btn-primary dropdown-toggle",
                              attrs: {
                                type: "button",
                                id: "dropdownMenu1",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              }
                            },
                            [_vm._v(" " + _vm._s(_vm.dropDownText) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown-menu dropdown-primary" },
                            _vm._l(_vm.columns, function(col, index) {
                              return _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.selectCol(index)
                                    }
                                  }
                                },
                                [_vm._v(" " + _vm._s(col) + " ")]
                              )
                            })
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
                        _vm.selectedCol >= 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-amber",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.processSSN($event)
                                  }
                                }
                              },
                              [_vm._v(" Process SSNs ")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        _vm._l(_vm.workbook.SheetNames, function(sheet, index) {
                          return _c(
                            "button",
                            {
                              class: [
                                "btn",
                                "btn-sm",
                                index == _vm.currentSheetIndex
                                  ? "btn-success"
                                  : "btn-info"
                              ],
                              on: {
                                click: function($event) {
                                  _vm.changeSheet(index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                " \n              " +
                                  _vm._s(sheet) +
                                  " \n            "
                              )
                            ]
                          )
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showGrid,
                            expression: "showGrid"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("v-data-table", {
                          staticClass: "elevation-1",
                          attrs: {
                            headers: _vm.headersV1,
                            items: _vm.myGridTop10,
                            "hide-actions": ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "items",
                              fn: function(props) {
                                return _c(
                                  "tr",
                                  {},
                                  _vm._l(_vm.headersV1, function(col) {
                                    return _c("td", [
                                      _vm._v(_vm._s(props.item[col.text]))
                                    ])
                                  })
                                )
                              }
                            }
                          ])
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-4",
                            staticStyle: {
                              "margin-left": "0",
                              "padding-left": "0"
                            }
                          },
                          [_c("h2", [_vm._v("Step 3:Confirm SSNs")])]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.board,
                                expression: "board"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", placeholder: "Board Name" },
                            domProps: { value: _vm.board },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.board = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-info",
                              on: {
                                click: function($event) {
                                  _vm.dialog = true
                                }
                              }
                            },
                            [_vm._v("Add SSN")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-sm btn-danger " },
                            [_vm._v(" Bad: " + _vm._s(_vm.numBad) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              class: ["btn", "btn-sm", "btn-amber"],
                              attrs: {
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Validate with our records"
                              },
                              on: { click: _vm.validate }
                            },
                            [_vm._v(" Validate List ")]
                          ),
                          _vm._v(" "),
                          _vm.numValidated > 0
                            ? _c(
                                "button",
                                {
                                  class: ["btn", "btn-sm", "btn-success"],
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title:
                                      "Make sure the currect type of SURF is requested"
                                  },
                                  on: { click: _vm.runSurf }
                                },
                                [
                                  _vm._v(
                                    " Run (" +
                                      _vm._s(_vm.numValidated) +
                                      ") " +
                                      _vm._s(_vm.force) +
                                      " " +
                                      _vm._s(_vm.typeString) +
                                      " "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "h6",
                          {
                            staticStyle: {
                              "margin-top": "12px",
                              "margin-left": "20px"
                            }
                          },
                          [
                            _vm._v(
                              "Showing rows " +
                                _vm._s(
                                  (_vm.currentPageGrid2 - 1) *
                                    _vm.pageSizeGrid2 +
                                    1
                                ) +
                                " - " +
                                _vm._s(_vm.currentPageGrid2 * _vm.pageSizeGrid2)
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-info",
                            on: { click: _vm.prevPage }
                          },
                          [_vm._v("← Previous Page")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-info",
                            on: { click: _vm.nextPage }
                          },
                          [_vm._v("Next Page →")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-6" },
                          [
                            _c(
                              "v-app",
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: {
                                      "data-app": "true",
                                      "max-width": "500px"
                                    },
                                    model: {
                                      value: _vm.dialog,
                                      callback: function($$v) {
                                        _vm.dialog = $$v
                                      },
                                      expression: "dialog"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-card-title", [
                                          _c(
                                            "span",
                                            { staticClass: "headline" },
                                            [_vm._v(_vm._s(_vm.formTitle))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-container",
                                              { attrs: { "grid-list-md": "" } },
                                              [
                                                _c(
                                                  "v-layout",
                                                  { attrs: { wrap: "" } },
                                                  [
                                                    _c(
                                                      "v-flex",
                                                      {
                                                        attrs: {
                                                          xs12: "",
                                                          sm6: "",
                                                          md4: ""
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: "SSN"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .SSN,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "SSN",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.SSN"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-actions",
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.close($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Cancel")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.save($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Save")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-data-table", {
                                  staticClass: "elevation-1",
                                  attrs: {
                                    headers: _vm.headersV,
                                    items: _vm.slicedGrid2,
                                    "hide-actions": "",
                                    "min-height": "1vh"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "items",
                                      fn: function(props) {
                                        return _c("tr", {}, [
                                          _c(
                                            "td",
                                            {
                                              staticClass: "my-2 text-xs-right",
                                              on: { click: function($event) {} }
                                            },
                                            [_vm._v(_vm._s(props.item.SSN))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass: "my-2 text-xs-right",
                                              on: { click: function($event) {} }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(props.item.SSN_FORMAT)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass: "my-2 text-xs-right",
                                              on: { click: function($event) {} }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(props.item.VALIDATED)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "justify-center layout px-0",
                                              on: { click: function($event) {} }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-0",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.editItem(props.item)
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "teal" }
                                                    },
                                                    [_vm._v("edit")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-0",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.deleteItem(props.item)
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "pink" }
                                                    },
                                                    [_vm._v("delete")]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      }
                                    }
                                  ])
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-success",
                                  on: { click: _vm.downloadTable }
                                },
                                [_vm._v("DOWNLOAD Current Table")]
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-6" }, [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showButton,
                                  expression: "showButton"
                                }
                              ],
                              ref: "surfButton",
                              staticClass: "btn btn-sm btn-info ",
                              attrs: {
                                href: _vm.href,
                                download:
                                  _vm.boardLink + " " + _vm.typeString + ".zip"
                              }
                            },
                            [_vm._v(" TEST ")]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-85cc0036", esExports)
  }
}

/***/ }),

/***/ "noIa":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("jNBe");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("858f58b2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75c4bd46\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Surf.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75c4bd46\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Surf.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "npAC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "transition-group",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _c("loader", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loaded,
                expression: "!loaded"
              }
            ],
            key: "loader"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loaded,
                  expression: "loaded"
                }
              ],
              key: "content"
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("h1", { staticClass: "col" }, [_vm._v("SURF")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-4 text-right",
                    staticStyle: { "margin-top": "15px" }
                  },
                  [
                    _vm._v("\n      Data as of: \n      "),
                    _c(
                      "span",
                      {
                        staticStyle: { "font-weight": "bold", color: "#4d8bf9" }
                      },
                      [_vm._v(" " + _vm._s(_vm.asDate) + " ")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col inline-form-group",
                    attrs: { id: "radioSelect" }
                  },
                  [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.force,
                              expression: "force"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "force",
                            type: "radio",
                            value: "officer"
                          },
                          domProps: { checked: _vm._q(_vm.force, "officer") },
                          on: {
                            change: function($event) {
                              _vm.force = "officer"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Officer")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "custom-control custom-radio" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.force,
                              expression: "force"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "force",
                            type: "radio",
                            value: "enlisted"
                          },
                          domProps: { checked: _vm._q(_vm.force, "enlisted") },
                          on: {
                            change: function($event) {
                              _vm.force = "enlisted"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Enlisted")]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col inline-form-group",
                    attrs: { id: "radioSelect" }
                  },
                  [
                    _c(
                      "label",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.force == "officer",
                            expression: "force=='officer'"
                          }
                        ],
                        staticClass: "custom-control custom-radio"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.type,
                              expression: "type"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "type",
                            type: "radio",
                            value: "masked"
                          },
                          domProps: { checked: _vm._q(_vm.type, "masked") },
                          on: {
                            change: function($event) {
                              _vm.type = "masked"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Masked ")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.force == "officer",
                            expression: "force=='officer'"
                          }
                        ],
                        staticClass: "custom-control custom-radio"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.type,
                              expression: "type"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "type",
                            type: "radio",
                            value: "unmasked"
                          },
                          domProps: { checked: _vm._q(_vm.type, "unmasked") },
                          on: {
                            change: function($event) {
                              _vm.type = "unmasked"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Unmasked")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.force == "enlisted",
                            expression: "force=='enlisted'"
                          }
                        ],
                        staticClass: "custom-control custom-radio"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.type,
                              expression: "type"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { name: "type", type: "radio", value: "with" },
                          domProps: { checked: _vm._q(_vm.type, "with") },
                          on: {
                            change: function($event) {
                              _vm.type = "with"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("With Professional Specialty")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.force == "enlisted",
                            expression: "force=='enlisted'"
                          }
                        ],
                        staticClass: "custom-control custom-radio"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.type,
                              expression: "type"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            name: "type",
                            type: "radio",
                            value: "without"
                          },
                          domProps: { checked: _vm._q(_vm.type, "without") },
                          on: {
                            change: function($event) {
                              _vm.type = "without"
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-indicator" }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "custom-control-description" },
                          [_vm._v("Without Professional Specialty")]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("This page is used to generate SURFs.")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h2", [_vm._v("Step 1: Upload SSN list ")]),
              _vm._v(" "),
              _c("div", { staticClass: "container-responsive" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      {
                        attrs: { id: "drop" },
                        on: {
                          drop: _vm.handleDrop,
                          dragover: _vm.handleDragover,
                          dragenter: _vm.handleDragover
                        }
                      },
                      [_vm._v("Drop File Here")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.step2,
                        expression: "step2"
                      }
                    ],
                    staticClass: "container"
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-3 no-left" }, [
                        _c("h2", [_vm._v("Step 2:Preprocess")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("div", { staticClass: "dropdown" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-sm btn-primary dropdown-toggle",
                              attrs: {
                                type: "button",
                                id: "dropdownMenu1",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              }
                            },
                            [_vm._v(" " + _vm._s(_vm.dropDownText) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown-menu dropdown-primary" },
                            _vm._l(_vm.columns, function(col, index) {
                              return _c(
                                "a",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.selectCol(index)
                                    }
                                  }
                                },
                                [_vm._v(" " + _vm._s(col) + " ")]
                              )
                            })
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-2" }, [
                        _vm.selectedCol >= 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-amber",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.processSSN($event)
                                  }
                                }
                              },
                              [_vm._v(" Process SSNs ")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        _vm._l(_vm.workbook.SheetNames, function(sheet, index) {
                          return _c(
                            "button",
                            {
                              class: [
                                "btn",
                                "btn-sm",
                                index == _vm.currentSheetIndex
                                  ? "btn-success"
                                  : "btn-info"
                              ],
                              on: {
                                click: function($event) {
                                  _vm.changeSheet(index)
                                }
                              }
                            },
                            [
                              _vm._v(
                                " \n              " +
                                  _vm._s(sheet) +
                                  " \n            "
                              )
                            ]
                          )
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showGrid,
                            expression: "showGrid"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("v-data-table", {
                          staticClass: "elevation-1",
                          attrs: {
                            headers: _vm.headersV1,
                            items: _vm.myGridTop10,
                            "hide-actions": ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "items",
                              fn: function(props) {
                                return _c(
                                  "tr",
                                  {},
                                  _vm._l(_vm.headersV1, function(col) {
                                    return _c("td", [
                                      _vm._v(_vm._s(props.item[col.text]))
                                    ])
                                  })
                                )
                              }
                            }
                          ])
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-4",
                            staticStyle: {
                              "margin-left": "0",
                              "padding-left": "0"
                            }
                          },
                          [_c("h2", [_vm._v("Step 3:Confirm SSNs")])]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.board,
                                expression: "board"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", placeholder: "Board Name" },
                            domProps: { value: _vm.board },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.board = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-info",
                              on: {
                                click: function($event) {
                                  _vm.dialog = true
                                }
                              }
                            },
                            [_vm._v("Add SSN")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            { staticClass: "btn btn-sm btn-danger " },
                            [_vm._v(" Bad: " + _vm._s(_vm.numBad) + " ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              class: ["btn", "btn-sm", "btn-amber"],
                              attrs: {
                                "data-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Validate with our records"
                              },
                              on: { click: _vm.validate }
                            },
                            [_vm._v(" Validate List ")]
                          ),
                          _vm._v(" "),
                          _vm.numValidated > 0
                            ? _c(
                                "button",
                                {
                                  class: ["btn", "btn-sm", "btn-success"],
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title:
                                      "Make sure the currect type of SURF is requested"
                                  },
                                  on: { click: _vm.runSurf }
                                },
                                [
                                  _vm._v(
                                    " Run (" +
                                      _vm._s(_vm.numValidated) +
                                      ") " +
                                      _vm._s(_vm.force) +
                                      " " +
                                      _vm._s(_vm.typeString) +
                                      " "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "h6",
                          {
                            staticStyle: {
                              "margin-top": "12px",
                              "margin-left": "20px"
                            }
                          },
                          [
                            _vm._v(
                              "Showing rows " +
                                _vm._s(
                                  (_vm.currentPageGrid2 - 1) *
                                    _vm.pageSizeGrid2 +
                                    1
                                ) +
                                " - " +
                                _vm._s(_vm.currentPageGrid2 * _vm.pageSizeGrid2)
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-info",
                            on: { click: _vm.prevPage }
                          },
                          [_vm._v("← Previous Page")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-info",
                            on: { click: _vm.nextPage }
                          },
                          [_vm._v("Next Page →")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-6" },
                          [
                            _c(
                              "v-app",
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: {
                                      "data-app": "true",
                                      "max-width": "500px"
                                    },
                                    model: {
                                      value: _vm.dialog,
                                      callback: function($$v) {
                                        _vm.dialog = $$v
                                      },
                                      expression: "dialog"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-card-title", [
                                          _c(
                                            "span",
                                            { staticClass: "headline" },
                                            [_vm._v(_vm._s(_vm.formTitle))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-container",
                                              { attrs: { "grid-list-md": "" } },
                                              [
                                                _c(
                                                  "v-layout",
                                                  { attrs: { wrap: "" } },
                                                  [
                                                    _c(
                                                      "v-flex",
                                                      {
                                                        attrs: {
                                                          xs12: "",
                                                          sm6: "",
                                                          md4: ""
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: "SSN"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .SSN,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "SSN",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.SSN"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-actions",
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.close($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Cancel")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  flat: ""
                                                },
                                                nativeOn: {
                                                  click: function($event) {
                                                    return _vm.save($event)
                                                  }
                                                }
                                              },
                                              [_vm._v("Save")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-data-table", {
                                  staticClass: "elevation-1",
                                  attrs: {
                                    headers: _vm.headersV,
                                    items: _vm.slicedGrid2,
                                    "hide-actions": "",
                                    "min-height": "1vh"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "items",
                                      fn: function(props) {
                                        return _c("tr", {}, [
                                          _c(
                                            "td",
                                            {
                                              staticClass: "my-2 text-xs-right",
                                              on: { click: function($event) {} }
                                            },
                                            [_vm._v(_vm._s(props.item.SSN))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass: "my-2 text-xs-right",
                                              on: { click: function($event) {} }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(props.item.SSN_FORMAT)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass: "my-2 text-xs-right",
                                              on: { click: function($event) {} }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(props.item.VALIDATED)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "justify-center layout px-0",
                                              on: { click: function($event) {} }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-0",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.editItem(props.item)
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "teal" }
                                                    },
                                                    [_vm._v("edit")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-0",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.deleteItem(props.item)
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "pink" }
                                                    },
                                                    [_vm._v("delete")]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      }
                                    }
                                  ])
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-success",
                                  on: { click: _vm.downloadTable }
                                },
                                [_vm._v("DOWNLOAD Current Table")]
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.step3,
                            expression: "step3"
                          }
                        ],
                        staticClass: "row"
                      },
                      [
                        _c("div", { staticClass: "col-6" }, [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showButton,
                                  expression: "showButton"
                                }
                              ],
                              ref: "surfButton",
                              staticClass: "btn btn-sm btn-info ",
                              attrs: {
                                href: _vm.href,
                                download:
                                  _vm.boardLink + " " + _vm.typeString + ".zip"
                              }
                            },
                            [_vm._v(" TEST ")]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75c4bd46", esExports)
  }
}

/***/ }),

/***/ "oGhs":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\na, a:active, a:focus, button, button:active, button:focus {\n    outline: none;\n}\n.footer-link {\n    height: 30px;\n}\n.no-marg{\n  margin: 0 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "oY1a":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.loader[data-v-04a0d67a] {\n    border: 16px solid #d3d3d3;\n    border-top: 16px solid #3498db;\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    position: absolute;\n    margin: auto;\n    top: 50%;\n    left: 45%;\n    -webkit-animation: spin-data-v-04a0d67a 2s linear infinite;\n            animation: spin-data-v-04a0d67a 2s linear infinite;\n}\n@-webkit-keyframes spin-data-v-04a0d67a{\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-04a0d67a{\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n    \n", ""]);

// exports


/***/ }),

/***/ "pbL7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7aYl");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("dbe18cbc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a76e93e8\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatePicker.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a76e93e8\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatePicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "qb6w":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uExR":
/***/ (function(module, exports) {

//
//
//
//

/***/ }),

/***/ "vPPd":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.el-table__footer-wrapper[data-v-02e1eeca], .el-table__header-wrapper[data-v-02e1eeca]{\n\twidth: 500;\n\tcolor:red;\n}\ninput[type=\"text\"].form-control[data-v-02e1eeca]{\n\tdisplay: inline-block;\n    color:black;\n    padding:5px;\n    border-radius: 5px;\n    position: relative;\n    //transform: translateY(-10%);\n    margin-bottom: 0px;\n    //margin-top: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #ffffff;\n    -webkit-box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n            box-shadow:0px 3px 3px rgba(0,0,0,0.12), 0 3px 3px rgba(0,0,0,0.24);\n}\nh4[data-v-02e1eeca]{\n\tfont-weight: bold;\n\tmargin-bottom: 0;\n}\n#searchBtn[data-v-02e1eeca]{\n\theight: 100px;\n\tmargin-top: 70px;\n\tmargin-left: 70px;\n}\n.dropdown-toggle[data-v-02e1eeca]{\n\tdisplay: inline-block;\n\t//margin-bottom: 0;\n\t//padding-bottom: 0;\n}\n.no-top[data-v-02e1eeca]{\n\tmargin-top: 0;\n\tmargin-bottom: 18px;\n}\n.fade-enter-active[data-v-02e1eeca] {\n        -webkit-transition: all 0.5s;\n        transition: all 0.5s;\n}\n.fade-leave-active[data-v-02e1eeca] {\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s;\n}\n.fade-enter[data-v-02e1eeca], .fade-leave-to[data-v-02e1eeca] {\n        opacity: 0;\n}\n.fade-enter-to[data-v-02e1eeca], .fade-leave[data-v-02e1eeca] {\n        opacity: 1;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "vax7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("wULM");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("8774a1f2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ba5bd90\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ba5bd90\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "w5nP":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vPPd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("2020b4ea", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02e1eeca\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LookUp.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-02e1eeca\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LookUp.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "wULM":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\ndiv[id*=\"-barchart\"] .x.axis text{\n    text-anchor: end !important;\n    -webkit-transform: translate(-10,0)rotate(-45deg);\n            transform: translate(-10,0)rotate(-45deg);\n    cursor: pointer;\n    cursor: hand;\n    pointer-events: auto;\n}\ndiv[id*=\"-rowchart\"] g.row text{\n    fill: black;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "wd27":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Loader_vue__ = __webpack_require__("uExR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Loader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Loader_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04a0d67a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Loader_vue__ = __webpack_require__("Tbc1");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("03pt")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04a0d67a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Loader_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04a0d67a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Loader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Loader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04a0d67a", Component.options)
  } else {
    hotAPI.reload("data-v-04a0d67a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "wtEF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
	state: {
		asDate: 'Undetermined',
		resetAfsc: false,
		startAfsc: false,
		sanity: 'SANE',
		adoff: 'Undetermined',
		adenl: 'Undetermined',
		AD: 'Undetermined',
		lookup: 'Undetermined'
	}
});

/***/ }),

/***/ "wx/X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(d3, FileSaver) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("uXZL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loader__ = __webpack_require__("wd27");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__("wtEF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip__ = __webpack_require__("WgY6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jszip__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      dins: '',
      validatedDins: '',
      columnDins: ['SSN', 'SSN_FORMAT', 'VALIDATED'],
      badDins: '',
      asDate: 'Undetermined',
      sentWarning: false,
      loaded: true,
      showGrid: false,
      step3: false,
      step2: false,
      step4: false,
      showButton: false,
      board: '',
      workbook: {
        Sheets: [''],
        SheetNames: ['']
      },
      force: 'officer',
      type: 'ad_grab',
      sheet_json: [],
      headers: [],
      selectedCol: -1,
      currentSheetIndex: 0,
      myGrid: {
        data: ['']
      },
      myGrid2: {
        data: ['']
      },
      pageSizeGrid2: 10,
      currentPageGrid2: 1,
      currentSort: 'SSN_FORMAT',
      showBad: false,
      dialog: false,
      editedIndex: -1,
      editedItem: {
        SSN: ''
      },
      defaultItem: {
        SSN: ''
      },
      headersV: [],
      href: '',
      ssnList: [],
      numGood: 0,
      numBad: 0,
      numValidated: 0,
      totalParts: 0,
      currentParts: 0,
      state: {
        headers: [''],
        tickets: [''],
        myGrid: []
      },
      zip: {},
      folder: {}
    };
  },
  mounted: function mounted() {
    this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.AD;
    this.zip = new __WEBPACK_IMPORTED_MODULE_5_jszip___default.a();
    this.folder = this.zip.folder('folder');
    // this.myGrid = canvasDatagrid();
    // document.getElementById('myGrid').appendChild(this.myGrid)
    // this.myGrid2 = canvasDatagrid();
    // document.getElementById('myGrid2').appendChild(this.myGrid2)
  },

  components: {
    loader: __WEBPACK_IMPORTED_MODULE_3__Loader__["default"]
  },
  computed: {
    slicedGrid2: function slicedGrid2() {
      var _this = this;

      return this.myGrid2.data.filter(function (row, index) {
        var start = (_this.currentPageGrid2 - 1) * _this.pageSizeGrid2;
        var end = _this.currentPageGrid2 * _this.pageSizeGrid2;
        if (index >= start && index < end) return true;
      });
    },
    boardLink: function boardLink() {
      var forceString = 'Enlisted';
      if (this.force == 'officer') forceString = 'Officer';

      return 'AD ' + forceString;
    },
    myGridTop10: function myGridTop10() {
      var limit = this.myGrid.data.length;
      if (limit > 10) limit = 10;
      return this.myGrid.data.slice(0, limit);
    },
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },

    typeString: function typeString() {
      return 'AD ' + this.force;
    },
    currentSheetName: function currentSheetName() {
      return this.workbook.SheetNames[this.currentSheetIndex];
    },
    worksheet: function worksheet() {
      return this.workbook.Sheets[this.currentSheetName];
    },
    columns: function columns() {
      return this.headers[this.currentSheetIndex];
      //return this.sheet_json[this.currentSheetIndex][0];
    },
    headersV1: function headersV1() {
      var col = this.headers[this.currentSheetIndex];
      var toReturn = [];
      if (col) {
        col.forEach(function (d) {
          toReturn.push({
            'text': d,
            'value': d,
            'align': 'left'
          });
        });
      }
      return toReturn;
    },
    dropDownText: function dropDownText() {
      if (this.selectedCol == -1) return 'Select SSN Column';else return this.columns[this.selectedCol];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    selectedCol: function selectedCol(val) {
      this.showGrid = true;
    },

    currentSheetIndex: function currentSheetIndex(val) {
      this.showGrid = true;
      this.myGrid.data = this.sheet_json[this.currentSheetIndex];
      // this.headersV1 = [];
      // this.columns.forEach((d)=>{
      //   this.headersV1.push({
      //     'text': d,
      //     'value': d,
      //   })
      // })
      this.selectedCol = -1;
    },
    force: function force(val) {
      if (val == 'officer') {
        this.type = 'masked';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adoff;
      } else {
        this.type = 'with';
        this.asDate = __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* store */].state.adenl;
      }
      this.numValidated = 0;
    }
  },
  methods: {
    nextPage: function nextPage() {
      if (this.currentPageGrid2 * this.pageSizeGrid2 < this.myGrid2.data.length) this.currentPageGrid2++;
    },
    prevPage: function prevPage() {
      if (this.currentPageGrid2 > 1) this.currentPageGrid2--;
    },
    downlaodZip: function downlaodZip() {
      var _this2 = this;

      this.loaded = false;
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });

      var querystring = __webpack_require__("1nuA");
      var formData = {
        '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
        'nPage': "runSurf",
        'force': this.force,
        'type': this.type,
        'board': this.board,
        'list': list.join(',')
      };

      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_url_surf, {
        data: querystring.stringify(formData),
        headers: {
          'Content-Type': 'application/zip',
          'Accept': 'application/zip'
        },
        responseType: 'arraybuffer'
      }).then(function (response) {
        var reader = new window.FileReader();
        console.log(response);

        _this2.loaded = true;
      }).catch(function (error) {
        console.log(error.response);
        this.loaded = true;
      });

      // axios.post(axios_url_surf, querystring.stringify(formData)).then(response => {
      //     this.onReturn(response.data)
      // }).catch(function (error) {
      //     console.log(error.response);
      //     this.loaded=true;
      // });
    },
    sortByCol: function sortByCol(arr) {
      var _this3 = this;

      return arr.sort(function (a, b) {
        var modifier = 1;
        //if(this.currentSortDir === 'desc') modifier = -1;
        if (a[_this3.currentSort] < b[_this3.currentSort]) return -1 * modifier;
        if (a[_this3.currentSort] > b[_this3.currentSort]) return 1 * modifier;
        return 0;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.myGrid2.data.indexOf(item);
      this.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var index = this.myGrid2.data.indexOf(item);
      this.myGrid2.data.splice(index, 1);
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
      this.myGrid2.data = parsed;
      this.step3 = true;
      //this.numGood = 0
      setTimeout(function () {
        _this4.editedItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      if (this.editedIndex > -1) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.myGrid2.data[this.editedIndex], this.editedItem);
      } else {
        this.myGrid2.data.push(this.editedItem);
        var parsed = this.parse(this.myGrid2.data, 'SSN', 1);
        this.myGrid2.data = parsed;
        this.step3 = true;
        //this.numGood = 0
      }
      this.close();
    },
    onReturnFinal: function onReturnFinal(returned) {
      this.currentSort = 'SSN';
      console.log(returned);
      if (returned.data) {
        this.currentParts += 1;
        console.log(this.currentParts + ' VS ' + this.totalParts);
        var ret = returned.data;
        this.columnDins = returned.dins.split(' ');
        this.getHeaders();
        console.log(ret);
        if (this.currentParts <= 1) {
          console.log('SINGGGGGLEE');
          this.myGrid2.data = ret;
        } else {
          console.log('MULtttiiii');
          this.myGrid2.data = this.myGrid2.data.concat(ret);
        }
        this.step3 = true;
      }
      console.log(this.myGrid2.data);
      console.log(this.currentParts + ' VS ' + this.totalParts);
      if (this.currentParts >= this.totalParts) this.loaded = true;
      console.log('SHOW graph: ' + !this.loaded);
      console.log('test----');
    },
    onReturn: function onReturn(returned) {
      this.currentSort = 'VALIDATED';
      var statusFormat = {
        '1': 'GOOD',
        '7': 'ERROR: NOT FOUND ON FILE',
        '8': 'ERROR: DUPLICATE',
        '9': 'ERROR'
      };
      console.log(returned);
      if (returned.data) {
        this.currentParts += 1;
        var ret = returned.data;
        ret.forEach(function (record) {
          record.STATUS = statusFormat[record.STATUS];
        });
        var parsed = this.parse(ret, 'SSN', 2);
        if (this.currentParts <= 1) {
          this.myGrid2.data = parsed;
          this.numValidated = this.numGood;
          this.validatedDins = returned.goodDins;
          this.badDins = returned.badDins;
        } else {
          this.validatedDins = returned.goodDins;
          this.badDins = this.badDins + returned.badDins;
          this.myGrid2.data = this.sortByCol(this.myGrid2.data.concat(parsed));
          this.numValidated += this.numGood;
        }
        this.step3 = true;
      }
      console.log(this.currentParts + ' VS ' + this.totalParts);
      if (this.currentParts >= this.totalParts) this.loaded = true;
      console.log('SHOW graph: ' + !this.loaded);
      console.log('test----');
    },
    validate: function validate() {
      var _this5 = this;

      this.loaded = false;
      this.validatedDins = '';
      this.currentSort = 'SSN_FORMAT';
      var list = [];
      var getList = this.parse(this.ssnList, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log('len: ' + list.length);
      if (list.length <= 500) {
        console.log('SINGLE RUN');
        this.totalParts = 0;
        this.currentParts = 0;
        var querystring = __webpack_require__("1nuA");
        var _formData = {
          '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
          'nPage': "validateAD",
          'dins': this.dins,
          'force': this.force,
          'type': this.type,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_ad_grab_validate, querystring.stringify(_formData)).then(function (response) {
          _this5.onReturn(response.data);
        }).catch(function (error) {
          console.log(error.response);
        });
      } else {
        console.log('MULTI RUN');
        var nums = Math.floor(list.length / 500);
        var remaining = list.length % 500;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        console.log('nums: ' + nums);
        this.totalParts = nums;
        this.currentParts = 0;
        var splitList = [];
        for (var i = 1; i <= nums; i++) {
          if (i != nums) {
            splitList = list.slice(500 * (i - 1), 500 * i);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + 500 * i);
          } else {
            splitList = list.slice(500 * (i - 1), 500 * (i - 1) + remaining);
            console.log('start: ' + 500 * (i - 1));
            console.log('end: ' + (500 * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
            'nPage': "validateAD",
            'dins': this.dins,
            'force': this.force,
            'type': this.type,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_ad_grab_validate, querystring.stringify(formData)).then(function (response) {
            _this5.onReturn(response.data);
          }).catch(function (error) {
            console.log(error.response);
          });
        }
      }
    },
    runSurf: function runSurf() {
      var _this6 = this;

      this.step4 = true;
      this.loaded = false;
      var partLen = 500;
      this.sentWarning = true;
      var list = [];
      var getList = this.parse(this.myGrid2.data, 'SSN', 1);
      getList.forEach(function (d) {
        if (d.SSN_FORMAT) list.push(d.SSN);
      });
      console.log(this.myGrid2.data);
      console.log(this.ssnList);
      console.log(getList);
      console.log(list);
      console.log('len: ' + list.length);
      if (list.length <= partLen) {
        this.totalParts = 0;
        this.currentParts = 0;
        console.log('SINGLE PART');
        var querystring = __webpack_require__("1nuA");
        var _formData2 = {
          '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
          'nPage': "runAD",
          'dins': this.validatedDins,
          'force': this.force,
          'type': this.type,
          'board': this.board,
          'list': list.join(',')
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_ad_grab_final, querystring.stringify(_formData2)).then(function (response) {
          _this6.onReturnFinal(response.data);
        }).catch(function (error) {
          console.log(error.response);
        });
      } else {
        console.log('MULTI PART');
        var nums = Math.floor(list.length / partLen);
        var remaining = list.length % partLen;
        console.log('remaining: ' + remaining);
        if (remaining > 0) nums += 1;
        this.totalParts = nums;
        this.currentParts = 0;
        console.log('nums: ' + nums);
        var splitList = [];
        for (var i = 1; i <= nums; i++) {

          if (i != nums) {
            splitList = list.slice(partLen * (i - 1), partLen * i);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + partLen * i);
          } else {
            splitList = list.slice(partLen * (i - 1), partLen * (i - 1) + remaining);
            console.log('start: ' + partLen * (i - 1));
            console.log('end: ' + (partLen * (i - 1) + remaining));
          }
          console.log('splitList Length: ' + splitList.length);
          var querystring = __webpack_require__("1nuA");
          var formData = {
            '_PROGRAM': "/REN - Dashboard Home V1/makeHTML",
            'nPage': "runAD",
            'dins': this.validatedDins,
            'force': this.force,
            'type': this.type,
            'board': this.board,
            'list': splitList.join(','),
            'part': i,
            'max': nums
          };
          console.log(formData);
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(axios_ad_grab_final, querystring.stringify(formData)).then(function (response) {
            _this6.onReturnFinal(response.data);
          }).catch(function (error) {
            console.log(error.response);
          });
        }
      }
    },
    parse: function parse(data, select, option) {
      var _this7 = this;

      this.ssnList = [];
      var checkSSN = 'GOOD';
      var numGood = 0;
      var numBad = 0;

      var clean = '';
      var isNum = false;
      data.forEach(function (row) {
        if (row[select]) {
          clean = row[select].replace(/\W/g, '');
          isNum = /^\d+$/.test(clean);

          if (clean.length > 9) isNum = false;

          var rep = 9 - clean.length;
          if (rep > 0) clean = '0'.repeat(rep) + clean;

          if (!isNum) clean = row[select];

          var status = '';
          if (option == 2) {
            status = row['STATUS'];
            if (status == 'GOOD') numGood += 1;else numBad += 1;
          } else if (option == 1) {
            if (!isNum) numBad += 1;
          }

          if (option == 1) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum
            });
          } else if (option == 2) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum,
              'VALIDATED': status
            });
          } else if (option == 3) {
            _this7.ssnList.push({
              'SSN': clean,
              'SSN_FORMAT': isNum,
              'VALIDATED': status
            });
          }
        }
      });
      this.numGood = numGood;
      this.numBad = numBad;

      return this.sortByCol(this.ssnList);
    },
    processSSN: function processSSN() {
      var select = this.columns[this.selectedCol];
      if (select == 'UNKNOWN 1') select = '__EMPTY';else if (select.startsWith('UNKNOWN ')) {
        var numb = select.substr(8);
        select = '__EMPTY_' + numb;
      }
      var parsed = this.parse(this.sheet_json[this.currentSheetIndex], select, 1);
      //console.log(this.sheet_json[this.currentSheetIndex])
      this.myGrid2.data = parsed;
      this.step3 = true;
      this.showGrid = false;
    },
    selectCol: function selectCol(val) {
      this.selectedCol = val;
    },
    changeSheet: function changeSheet(num) {
      this.currentSheetIndex = num;
      //this.myGrid.data = XLSX.utils.sheet_to_json(this.worksheet)
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function removeImage(e) {
      this.image = '';
    },
    get_header_row: function get_header_row(sheet) {
      var headers = [],
          range = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.decode_range(sheet['!ref']);
      var C,
          R = range.s.r; /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        var cell = sheet[__WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.encode_cell({ c: C, r: R })]; /* find the cell in the first row */
        //var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
        var hdr = '';
        if (C == 1) hdr = '__EMPTY';else hdr = '__EMPTY_' + C;
        if (cell && cell.t) hdr = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.format_cell(cell);
        headers.push(hdr);
      }
      //console.log(headers)
      return headers;
    },
    fixdata: function fixdata(data) {
      var o = "",
          l = 0,
          w = 10240;
      for (; l < data.byteLength / w; ++l) {
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
      }o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    },
    workbook_to_json: function workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function (sheetName) {
        var roa = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      return result;
    },
    downloadTable: function downloadTable() {
      var blob = new Blob([d3.csv.format(this.myGrid2.data)], { type: "text/csv;charset=utf-8" });
      FileSaver.saveAs(blob, this.boardLink + '.csv');
    },

    /** PARSING and DRAGDROP **/
    handleDrop: function handleDrop(e) {
      var _this8 = this;

      this.currentSort = 'SSN_FORMAT';
      e.stopPropagation();
      e.preventDefault();
      console.log("DROPPED");
      var files = e.dataTransfer.files,
          i,
          f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader(),
            name = f.name;
        reader.onload = function (e) {
          var results,
              data = e.target.result,
              fixedData = _this8.fixdata(data);
          _this8.workbook = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.read(btoa(fixedData), { type: 'base64' });
          _this8.sheet_json = [];
          _this8.headers = [];
          //this.selectedCol = 1;
          for (var d in _this8.workbook.Sheets) {
            var sheet = _this8.workbook.Sheets[d];
            var page = __WEBPACK_IMPORTED_MODULE_1_xlsx___default.a.utils.sheet_to_json(sheet);

            _this8.sheet_json.push(page);
            _this8.headers.push(_this8.get_header_row(sheet));
          }
          // this.myGrid = canvasDatagrid();
          var div = document.getElementById('myGrid');
          _this8.myGrid.data = _this8.sheet_json[_this8.currentSheetIndex];

          // while(div.firstChild){
          //     div.removeChild(div.firstChild);
          // }
          // document.getElementById('myGrid').appendChild(this.myGrid)
        };
        reader.readAsArrayBuffer(f);
      }
      this.getHeaders();
      this.showGrid = true;
      this.step2 = true;
    },
    getHeaders: function getHeaders() {
      var obj = [];
      this.columnDins.forEach(function (d) {
        obj.push({
          'text': d,
          'value': d
        });
      });
      this.headersV = obj;
    },
    handleDragover: function handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index);
      var toDelete = index;
      if (this.currentPageGrid2 > 1) toDelete = index + (this.currentPageGrid2 - 1) * this.pageSizeGrid2;
      console.log(toDelete);
      if (index !== undefined && index >= 0) {
        this.myGrid2.data.splice(toDelete, 1);
      }
    }
  },
  beforeUpdate: function beforeUpdate() {
    console.log("beforeupdate");
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("Za4h"), __webpack_require__("lDdF")))

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar__ = __webpack_require__("lfLh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer__ = __webpack_require__("TVmP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__("wtEF");
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'app-navbar': __WEBPACK_IMPORTED_MODULE_0__components_Navbar__["default"],
        'app-footer': __WEBPACK_IMPORTED_MODULE_1__components_Footer__["default"]
    },
    computed: {
        showSite: function showSite() {
            if (__WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* store */].state.sanity == check_portal) return true;else return false;
        }
    }
});

/***/ }),

/***/ "xbG2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Helpers for no dependencies™
 */
var dayMap = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat'
};
var monthMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
  // Thanks, Lodash.
  /**
   * https://lodash.com/docs/4.17.4#slice
   */
};var slice = function slice(array, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  start = start == null ? 0 : start;
  end = end === undefined ? length : end;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var index = -1;
  var result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
};
/**
 * https://lodash.com/docs/4.17.4#chunk
 */
var chunk = function chunk(array, size) {
  size = Math.max(size, 0);
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0;
  var resIndex = 0;
  var result = new Array(Math.ceil(length / size));
  while (index < length) {
    result[resIndex++] = slice(array, index, index += size);
  }
  return result;
};
/**
 * Actual component stuff
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    color: {
      type: String,
      required: false,
      default: '#009688'
    },
    format: {
      type: Function,
      required: false
    },
    min: {
      type: String,
      required: false
    },
    max: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    footer: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    /**
     * Returns if there was any initial date settings.
     *
     * @return {Boolean}
     */
    initialDate: function initialDate() {
      return !!(this.value || this.min);
    },

    /**
     * The date property, converted to a date.
     *
     * @return {Date}
     */
    specifiedDate: function specifiedDate() {
      return new Date(this.value);
    },

    /**
     * Returns a formatted date e.g. 2016-4-19. This is emiited on the input event.
     *
     * @return {String}
     */
    calculatedDate: function calculatedDate() {
      var day = this.selectedDay >= 10 ? this.selectedDay : '0' + this.selectedDay;
      var month = this.selectedMonth + 1 >= 10 ? this.selectedMonth + 1 : '0' + (this.selectedMonth + 1);
      return this.selectedYear + '-' + month + '-' + day;
    },

    /**
     * Returns an abbreviation of a day e.g. Sun, Mon, etc.
     *
     * @return {String}
     */
    abbrivatedDay: function abbrivatedDay() {
      return dayMap[this.selectedDayOfWeek];
    },

    /**
     * Returns the currently viewed month as a word.
     *
     * @return {String}
     */
    currentMonthWord: function currentMonthWord() {
      return monthMap[this.currentMonth];
    },

    /**
     * Returns the selected month as a word.
     *
     * @return {String}
     */
    selectedMonthWord: function selectedMonthWord() {
      return monthMap[this.selectedMonth];
    },

    /**
     * The minimum date the calendar will allow you to select.
     *
     * @return {Date}
     */
    minDate: function minDate() {
      if (this.min) {
        var minDateSplit = this.min.split('-');
        return new Date(minDateSplit[0], minDateSplit[1], minDateSplit[2]);
      }
      return;
    },

    /**
     * The maximum date the calendar will allow you to select.
     *
     * @return {Date}
     */
    maxDate: function maxDate() {
      if (this.max) {
        var maxDateSplit = this.max.split('-');
        return new Date(maxDateSplit[0], maxDateSplit[1], maxDateSplit[2]);
      }
      return;
    },

    /**
     * Determines if the left arrow for the current date should be shown.
     *
     * @return {Boolean}
     */
    showLeftArrow: function showLeftArrow() {
      // Show the left arrow when there is either no mininum date, or when the
      // minimum year and minimum month are the same as the current year and
      // current month.
      if (!this.min) return true;
      if (this.minDate.getFullYear() === this.currentYear && this.minDate.getMonth() - 1 === this.currentMonth) {
        return false;
      }
      return true;
    },

    /**
     * Determines if the right arrow for the current date should be shown.
     *
     * @return {Boolean}
     */
    showRightArrow: function showRightArrow() {
      // Show the right arrow when there is either no maximum date, or when
      // the maximum year and maximum month are the same as the current
      // year and current month.
      if (!this.max) return true;
      if (this.maxDate.getFullYear() === this.currentYear && this.maxDate.getMonth() - 1 === this.currentMonth) {
        return false;
      }
      return true;
    },

    /**
     * Computes a formatted array of days for a given month and year.
     *
     * @return {Array}
     */
    calendar: function calendar() {
      var _this = this;

      // The calendar's output is a function of all of the days in a given
      // month, chunked into an array of arrays, each containing 5 or 6
      // and 7 elements respectively.
      var days = [];
      // Padding for the first row, e.g. if the month's first day starts on
      // Friday, the first array will be ['', '', '', '', '', '1', '2']
      var startOfMonthDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      for (var i = 0, len = startOfMonthDay; i < len; i++) {
        days.push('');
      }
      // Create an array containing all days in the current month
      var daysInMonth = 32 - new Date(this.currentYear, this.currentMonth, 32).getDate();
      for (var _i = 0, _len = daysInMonth; _i < daysInMonth; _i++) {
        days.push(_i + 1);
      }
      // Map the days from numbers to objects that have current day,
      // selected, and disabled properties for the view.
      var today = new Date();
      var dayObjects = days.map(function (day) {
        var currentDay = day === today.getDate() && _this.currentMonth === today.getMonth() && _this.currentYear === today.getFullYear();
        var selected = _this.selectedDay === day && _this.currentMonth === _this.selectedMonth && _this.currentYear === _this.selectedYear;
        var disabled = _this.dayDisabled(day);
        return { day: day, currentDay: currentDay, selected: selected, disabled: disabled };
      });
      // Chunk all of the days into an array of arrays, by seven.
      return chunk(dayObjects, 7);
    },

    /**
     * Computes a list of years.
     *
     * @return {Array}
     */
    years: function years() {
      var _this2 = this;

      // Set the first year of the array.
      var firstYear = void 0;
      if (this.min) {
        firstYear = this.minDate.getFullYear();
      } else if (this.value) {
        firstYear = this.specifiedDate.getFullYear();
      } else {
        firstYear = new Date().getFullYear();
      }
      // Create a range of years to loop through which is either the maximum
      // date minus the first year, or simply 100.
      var through = this.max ? this.maxDate.getFullYear() + 1 - firstYear : 101;
      var years = [];
      for (var i = firstYear, len = firstYear + through; i < len; i++) {
        years.push(i);
      }
      return years.map(function (year) {
        return { year: year, selected: year === _this2.selectedYear };
      });
    }
  },
  created: function created() {
    this.hideBodyOverflow(true);
    this.setDate();
    this.setEscapeEvent();
  },

  data: function data() {
    return {
      selecting: 'date',
      currentMonth: '',
      currentYear: '',
      selectedDayOfWeek: '',
      selectedDay: '',
      selectedMonth: '',
      selectedYear: ''
    };
  },
  methods: {
    /**
     * Changes the display to the calendar or years depending on the value.
     */
    setSelecting: function setSelecting(value) {
      var _this3 = this;

      this.selecting = value;
      // If the user is selecting a year, we want to go to the selected year
      // minus two (as does the material design date picker).
      if (value === 'year') {
        this.$nextTick(function () {
          var container = document.querySelector('.calendar-year-select');
          var el = document.getElementById(_this3.selectedYear + '-calendar-year');
          container.scrollTop = el.offsetTop - 100 - 76;
        });
      }
    },

    /**
     * Set the date by the given day.
     *
     * @param {Object}
     */
    setByDay: function setByDay(day) {
      if (day.disabled) return;
      this.selectedYear = this.currentYear;
      this.selectedDay = day.day;
      this.selectedMonth = this.currentMonth;
      this.selectedDayOfWeek = new Date(this.selectedYear, this.selectedMonth, day.day).getDay();
      this.onInput();
    },

    /**
     * Set the date by the given month.
     *
     * @param {[String, Number]}
     */
    setByMonth: function setByMonth(month) {
      if (month === 12) {
        this.currentYear = this.currentYear + 1;
        this.currentMonth = 0;
        return;
      }
      if (month === -1) {
        this.currentYear = this.currentYear - 1;
        this.currentMonth = 11;
        return;
      }
      this.currentMonth = month;
    },

    /**
     * Set the date by the given year.
     *
     * @param {[String, Number]}
     */
    setByYear: function setByYear(year) {
      this.selectedYear = year;
      this.currentYear = year;
      this.selecting = 'date';
    },

    /**
     * Set the initial date for the calendar.
     */
    setDate: function setDate() {
      // If a date property has been passed to the component, that will be
      // used instead of the current day.
      var date = void 0;
      if (this.min && this.min && !this.value) {
        date = new Date(this.min);
      } else if (this.value && this.value) {
        date = new Date(this.value);
      } else {
        date = new Date();
      }
      if (this.initialDate) {
        this.selectedDay = date.getDate() + 1;
      } else {
        this.selectedDay = date.getDate();
      }
      this.selectedDayOfWeek = date.getDay();
      this.selectedMonth = date.getMonth();
      this.currentMonth = date.getMonth();
      this.selectedYear = date.getFullYear();
      this.currentYear = date.getFullYear();
    },
    dayDisabled: function dayDisabled(day) {
      // A day is disabled when the minimum month and minimum year are equal
      // to the current month and year and the day is less than the min date's day
      if (this.min && this.minDate.getMonth() - 1 === this.currentMonth && this.minDate.getFullYear() === this.currentYear && day < this.minDate.getDate()) {
        return true;
      }
      //  Or when the maximum month and maximum year are equal to the current
      //  month and year and the day is greater than the max date's day
      if (this.max && this.maxDate.getMonth() - 1 === this.currentMonth && this.maxDate.getFullYear() === this.currentYear && day > this.maxDate.getDate()) {
        return true;
      }
      return false;
    },

    // Misc methods that have nothing to do with calendar stuff.
    /**
     * Hides the overflow of the body when the date picker is active.
     *
     * @param  {Boolean}
     */
    hideBodyOverflow: function hideBodyOverflow(show) {
      var bodyEl = document.querySelector('body');
      if (show === true) {
        bodyEl.style.overflow = 'hidden';
        return;
      }
      bodyEl.style.overflow = '';
    },

    /**
     * Close the date picker if the escape key is pressed.
     */
    setEscapeEvent: function setEscapeEvent() {
      var _this4 = this;

      document.addEventListener('keydown', function (event) {
        if (event.keyCode == 27 || event.key == 'Escape') {
          _this4.onClose();
        }
      });
    },

    /**
     * When the "Ok" button is pressed, or enter is pressed, emit the input
     * event and close the date picker.
     */
    onInput: function onInput() {
      var date = this.format ? this.format(this.calculatedDate) : this.calculatedDate;
      this.$emit('input', date);
      this.onClose();
    },

    /**
     * Emit a close event so the developer can close the date picker as they
     * see fit.
     */
    onClose: function onClose() {
      this.hideBodyOverflow(false);
      this.$emit('close');
    }
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.b7556c626ff7dd1ca1e5.js.map