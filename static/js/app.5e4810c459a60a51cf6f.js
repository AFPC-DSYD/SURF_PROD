webpackJsonp([1],{0:function(t,e){},1:function(t,e){},2:function(t,e){},3:function(t,e){},"3jq2":function(t,e){},"7zck":function(t,e){},Drc2:function(t,e){},M93x:function(t,e,s){"use strict";function a(t){s("ib5y")}var i=s("xJD8"),n=s("zaOv"),o=s("VU/8"),r=a,c=o(i.a,n.a,!1,r,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("hKoQ"),i=(s.n(a),s("7+uW")),n=s("3EgV"),o=s.n(n),r=s("M93x"),c=s("YaEn"),l=s("mtWM"),d=s.n(l),u=s("K3J8"),v=(s.n(u),s("qb6w")),f=(s.n(v),s("k1UT")),h=(s.n(f),s("7zck")),p=(s.n(h),s("QxPg")),m=s("mZf6"),_=s.n(m),S=s("sLGz"),w=s.n(S),C=s("0vJk"),g=s.n(C),b=s("wtEF");Object(a.polyfill)(),s("hKoQ").polyfill(),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(e||0,t.length)===t}),i.a.use(o.a),d.a.defaults.headers.get.Accepts="application/json",p.a.library.add(_.a,w.a,g.a),c.a.beforeEach(function(t,e,a){if("INSANE"!=b.a.state.sanity){var i=s("1nuA"),n={_PROGRAM:"/REN - Dashboard Home V1/makeHTML",nPage:"sanity"};d.a.post("https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do",i.stringify(n)).then(function(t){"INSANE"!=t.data.sanity?window.location.href="https://starsraw.afpc.randolph.af.mil":(b.a.state.sanity="INSANE",a())}).catch(function(t){console.log(t),window.location.href="https://starsraw.afpc.randolph.af.mil"})}else a()}),new i.a({el:"#app",router:c.a,store:b.a,template:"<App/>",components:{App:r.a}})},Ruci:function(t,e,s){"use strict";var a=s("woOf"),i=s.n(a),n=s("uXZL"),o=s.n(n),r=s("mtWM"),c=s.n(r);e.a={data:function(){return{showGrid:!1,step3:!1,step2:!1,showButton:!1,board:"",workbook:{Sheets:[""],SheetNames:[""]},force:"officer",type:"masked",sheet_json:[],headers:[],selectedCol:-1,currentSheetIndex:0,myGrid:{data:[""]},myGrid2:{data:[""]},dialog:!1,editedIndex:-1,editedItem:{SSN:""},defaultItem:{SSN:""},headersV:[],href:"",ssnList:[],numGood:0,numBad:0,numValidated:0,state:{headers:[""],tickets:[""],myGrid:[]}}},mounted:function(){},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},typeString:function(){var t=this.type;return"masked"==t?"Masked":"unmasked"==t?"Unmasked":"with"==t?"With Proffesional Speciality":"without"==t?"Without Proffesional Speciality":void 0},currentSheetName:function(){return this.workbook.SheetNames[this.currentSheetIndex]},worksheet:function(){return this.workbook.Sheets[this.currentSheetName]},columns:function(){return this.headers[this.currentSheetIndex]},headersV1:function(){var t=this.headers[this.currentSheetIndex],e=[];return t&&t.forEach(function(t){e.push({text:t,value:t})}),e},dropDownText:function(){return-1==this.selectedCol?"Select SSN Column":this.columns[this.selectedCol]}},watch:{dialog:function(t){t||this.close()},selectedCol:function(t){this.showGrid=!0},currentSheetIndex:function(t){this.showGrid=!0,this.myGrid.data=this.sheet_json[this.currentSheetIndex],this.selectedCol=-1},force:function(t){this.type="officer"==t?"masked":"with",this.numValidated=0}},methods:{editItem:function(t){this.editedIndex=this.myGrid2.data.indexOf(t),this.editedItem=i()({},t),this.dialog=!0},deleteItem:function(t){var e=this.myGrid2.data.indexOf(t);this.myGrid2.data.splice(e,1);var s=this.parse(this.myGrid2.data,"SSN",1);this.myGrid2.data=s,this.step3=!0},close:function(){var t=this;this.dialog=!1;var e=this.parse(this.myGrid2.data,"SSN",1);this.myGrid2.data=e,this.step3=!0,setTimeout(function(){t.editedItem=i()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){if(this.editedIndex>-1)i()(this.myGrid2.data[this.editedIndex],this.editedItem);else{this.myGrid2.data.push(this.editedItem);var t=this.parse(this.myGrid2.data,"SSN",1);this.myGrid2.data=t,this.step3=!0}this.close()},onReturn:function(t){var e={1:"GOOD",7:"NOT FOUND ON FILE",8:"DUPLICATE",9:"ERROR"};if(t.data){var s=t.data;s.forEach(function(t){t.STATUS=e[t.STATUS]});var a=this.parse(s,"SSN",2);this.myGrid2.data=a,this.step3=!0,this.numValidated=this.numGood}},validate:function(){var t=this,e=[];this.parse(this.ssnList,"SSN",1).forEach(function(t){t.SSN_FORMAT&&e.push(t.SSN)});var a=s("1nuA"),i={_PROGRAM:"/REN - Dashboard Home V1/makeHTML",nPage:"validate",force:this.force,type:this.type,list:e.join(",")};c.a.post("https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do",a.stringify(i)).then(function(e){t.onReturn(e.data)}).catch(console.error)},runSurf:function(){var t=[];this.parse(this.ssnList,"SSN",1).forEach(function(e){e.SSN_FORMAT&&t.push(e.SSN)});var e=s("1nuA"),a={_PROGRAM:"/REN - Dashboard Home V1/makeHTML",nPage:"runSurf",force:this.force,type:this.type,board:this.board,list:t.join(",")};this.href="https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do?"+e.stringify(a);var i=this.$refs.surfButton;setTimeout(function(){i.click()},500)},parse:function(t,e,s){var a=this;this.ssnList=[];var i=0,n=0,o="",r=!1;return t.forEach(function(t){if(t[e]){o=t[e].replace(/\W/g,""),r=/^\d+$/.test(o),o.length>9&&(r=!1);var c=9-o.length;c>0&&(o="0".repeat(c)+o),r||(o=t[e]);var l="";2==s?(l=t.STATUS,"GOOD"==l?i+=1:n+=1):1==s&&(r||(n+=1)),1==s?a.ssnList.push({SSN:o,SSN_FORMAT:r}):2==s&&a.ssnList.push({SSN:o,SSN_FORMAT:r,VALIDATED:l})}}),this.numGood=i,this.numBad=n,this.ssnList},processSSN:function(){var t=this.columns[this.selectedCol];if("UNKNOWN 1"==t)t="__EMPTY";else if(t.startsWith("UNKNOWN ")){var e=t.substr(8);t="__EMPTY_"+e}var s=this.parse(this.sheet_json[this.currentSheetIndex],t,1);this.myGrid2.data=s,this.step3=!0,this.showGrid=!1},selectCol:function(t){this.selectedCol=t},changeSheet:function(t){this.currentSheetIndex=t},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){var e=(new Image,new FileReader),s=this;e.onload=function(t){s.image=t.target.result},e.readAsDataURL(t)},removeImage:function(t){this.image=""},get_header_row:function(t){var e,s=[],a=o.a.utils.decode_range(t["!ref"]),i=a.s.r;for(e=a.s.c;e<=a.e.c;++e){var n=t[o.a.utils.encode_cell({c:e,r:i})],r="";r=1==e?"__EMPTY":"__EMPTY_"+e,n&&n.t&&(r=o.a.utils.format_cell(n)),s.push(r)}return s},fixdata:function(t){for(var e="",s=0,a=10240;s<t.byteLength/a;++s)e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(s*a,s*a+a)));return e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(s*a)))},workbook_to_json:function(t){var e={};return t.SheetNames.forEach(function(s){var a=o.a.utils.sheet_to_row_object_array(t.Sheets[s]);a.length>0&&(e[s]=a)}),e},handleDrop:function(t){var e=this;t.stopPropagation(),t.preventDefault(),console.log("DROPPED");var s,a,i=t.dataTransfer.files;for(s=0,a=i[s];s!=i.length;++s){var n=new FileReader;a.name;n.onload=function(t){var s=t.target.result,a=e.fixdata(s);e.workbook=o.a.read(btoa(a),{type:"base64"}),e.sheet_json=[],e.headers=[];for(var i in e.workbook.Sheets){var n=e.workbook.Sheets[i],r=o.a.utils.sheet_to_json(n),c=r.length;c>10&&(c=10),e.sheet_json.push(r.slice(0,c)),e.headers.push(e.get_header_row(n))}document.getElementById("myGrid");e.myGrid.data=e.sheet_json[e.currentSheetIndex]},n.readAsArrayBuffer(a)}this.headersV=[{text:"SSN",align:"left",value:"SSN"},{text:"SSN_FORMAT",value:"SSN_FORMAT"},,{text:"VALIDATED",value:"VALIDATED"}],this.showGrid=!0,this.step2=!0},handleDragover:function(t){t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"}},beforeUpdate:function(){console.log("beforeupdate"),console.log(this.headersV1),console.log(this.columns)}}},TVmP:function(t,e,s){"use strict";function a(t){s("r9eB")}var i=s("UthT"),n=s.n(i),o=s("rp1i"),r=s("VU/8"),c=a,l=r(n.a,o.a,!1,c,null,null);e.default=l.exports},UthT:function(t,e){},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),i=s("/ocq"),n=s("d5XC");a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Surf",component:n.a},{path:"*",redirect:"/"}],scrollBehavior:function(t,e,s){return{x:0,y:0}}})},d5XC:function(t,e,s){"use strict";function a(t){s("3jq2")}var i=s("Ruci"),n=s("oRx4"),o=s("VU/8"),r=a,c=o(i.a,n.a,!1,r,"data-v-28eba1fd",null);e.a=c.exports},fE3B:function(t,e){},ib5y:function(t,e){},jBjs:function(t,e,s){t.exports=s.p+"static/img/afpc_log.e969ea7.png"},k1UT:function(t,e){},lfLh:function(t,e,s){"use strict";function a(t){s("fE3B")}var i=s("Drc2"),n=s.n(i),o=s("npJE"),r=s("VU/8"),c=a,l=r(n.a,o.a,!1,c,"data-v-72661c48",null);e.default=l.exports},npJE:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark primary-color-dark fixed-top"},[a("img",{attrs:{src:s("jBjs"),height:"30px"}}),t._v(" "),a("div",{staticClass:"navbar-brand white-text"},[a("router-link",{staticClass:"white-text",attrs:{to:"/"}},[t._v("STARS-RAW")])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[a("a",{staticClass:"nav-link"},[t._v("SURF")])])],1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler hoverable",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],n={render:a,staticRenderFns:i};e.a=n},oRx4:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("SURF")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col inline-form-group",attrs:{id:"radioSelect"}},[s("label",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.force,expression:"force"}],staticClass:"custom-control-input",attrs:{name:"force",type:"radio",value:"officer"},domProps:{checked:t._q(t.force,"officer")},on:{change:function(e){t.force="officer"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Officer")])]),t._v(" "),s("label",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.force,expression:"force"}],staticClass:"custom-control-input",attrs:{name:"force",type:"radio",value:"enlisted"},domProps:{checked:t._q(t.force,"enlisted")},on:{change:function(e){t.force="enlisted"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Enlisted")])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col inline-form-group",attrs:{id:"radioSelect"}},[s("label",{directives:[{name:"show",rawName:"v-show",value:"officer"==t.force,expression:"force=='officer'"}],staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"masked"},domProps:{checked:t._q(t.type,"masked")},on:{change:function(e){t.type="masked"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Masked ")])]),t._v(" "),s("label",{directives:[{name:"show",rawName:"v-show",value:"officer"==t.force,expression:"force=='officer'"}],staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"unmasked"},domProps:{checked:t._q(t.type,"unmasked")},on:{change:function(e){t.type="unmasked"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Unmasked")])]),t._v(" "),s("label",{directives:[{name:"show",rawName:"v-show",value:"enlisted"==t.force,expression:"force=='enlisted'"}],staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"with"},domProps:{checked:t._q(t.type,"with")},on:{change:function(e){t.type="with"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("With Proffesional Speciality")])]),t._v(" "),s("label",{directives:[{name:"show",rawName:"v-show",value:"enlisted"==t.force,expression:"force=='enlisted'"}],staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"without"},domProps:{checked:t._q(t.type,"without")},on:{change:function(e){t.type="without"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Without Proffesional Speciality")])])])]),t._v(" "),s("p",[t._v("This page is used to generate SURFs.")]),t._v(" "),s("br"),t._v(" "),s("h2",[t._v("Step 1: Upload SSN list ")]),t._v(" "),s("div",{staticClass:"container-responsive"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{attrs:{id:"drop"},on:{drop:t.handleDrop,dragover:t.handleDragover,dragenter:t.handleDragover}},[t._v("Drop File Here")])])]),t._v(" "),s("br"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.step2,expression:"step2"}],staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-3"},[s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-sm btn-primary dropdown-toggle",attrs:{type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.dropDownText)+" ")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-primary"},t._l(t.columns,function(e,a){return s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selectCol(a)}}},[t._v(" "+t._s(e)+" ")])}))])]),t._v(" "),s("div",{staticClass:"col-2"},[t.selectedCol>=0?s("button",{staticClass:"btn btn-sm btn-amber",on:{click:function(e){return e.preventDefault(),t.processSSN(e)}}},[t._v(" Process SSNs ")]):t._e()]),t._v(" "),s("div",{staticClass:"col"},t._l(t.workbook.SheetNames,function(e,a){return s("button",{class:["btn","btn-sm",a==t.currentSheetIndex?"btn-success":"btn-info"],on:{click:function(e){t.changeSheet(a)}}},[t._v(" \n\t\t    \t\t\t\t"+t._s(e)+" \n\t\t    \t\t\t")])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showGrid,expression:"showGrid"}],staticClass:"row"},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headersV1,items:t.myGrid.data,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return s("tr",{},t._l(t.headersV1,function(a){return s("td",[t._v(t._s(e.item[a.text]))])}))}}])})],1),t._v(" "),s("br"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[t._m(1),t._v(" "),s("div",{staticClass:"col-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.board,expression:"board"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Board Name"},domProps:{value:t.board},on:{input:function(e){e.target.composing||(t.board=e.target.value)}}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-sm btn-info",on:{click:function(e){t.dialog=!0}}},[t._v("Add SSN")]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-danger "},[t._v(" Bad: "+t._s(t.numBad)+" ")]),t._v(" "),s("button",{class:["btn","btn-sm","btn-amber"],attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Validate with our records"},on:{click:t.validate}},[t._v(" Validate List ")]),t._v(" "),t.numValidated>0?s("button",{class:["btn","btn-sm","btn-success"],attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Make sure the currect type of SURF is requested"},on:{click:t.runSurf}},[t._v(" Run ("+t._s(t.numValidated)+") "+t._s(t.force)+" "+t._s(t.typeString)+" ")]):t._e()])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[s("div",{staticClass:"col-6"},[s("v-app",[s("v-dialog",{attrs:{"data-app":"true","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[s("v-text-field",{attrs:{label:"SSN"},model:{value:t.editedItem.SSN,callback:function(e){t.$set(t.editedItem,"SSN",e)},expression:"editedItem.SSN"}})],1)],1)],1)],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancel")]),t._v(" "),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Save")])],1)],1)],1),t._v(" "),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headersV,items:t.myGrid2.data,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return s("tr",{},[s("td",{staticClass:"text-xs-right",on:{click:function(t){}}},[t._v(t._s(e.item.SSN))]),t._v(" "),s("td",{staticClass:"text-xs-right",on:{click:function(t){}}},[t._v(t._s(e.item.SSN_FORMAT))]),t._v(" "),s("td",{staticClass:"text-xs-right",on:{click:function(t){}}},[t._v(t._s(e.item.VALIDATED))]),t._v(" "),s("td",{staticClass:"justify-center layout px-0",on:{click:function(t){}}},[s("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(s){t.editItem(e.item)}}},[s("v-icon",{attrs:{color:"teal"}},[t._v("edit")])],1),t._v(" "),s("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(s){t.deleteItem(e.item)}}},[s("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)])}}])})],1)],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[s("div",{staticClass:"col-6"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],ref:"surfButton",staticClass:"btn btn-sm btn-info ",attrs:{href:t.href,download:t.board+" "+t.typeString+".zip"}},[t._v(" TEST ")])])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 no-left"},[s("h2",[t._v("Step 2:Preprocess")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4",staticStyle:{"margin-left":"0","padding-left":"0"}},[s("h2",[t._v("Step 3:Confirm SSNs")])])}],n={render:a,staticRenderFns:i};e.a=n},qb6w:function(t,e){},r9eB:function(t,e){},rp1i:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"page-footer primary-color-dark center-on-small-only"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-md-4"},[s("h5",{staticClass:"title mb-2 mt-3 font-bold"},[t._v("Links")]),t._v(" "),s("ul",[s("router-link",{staticClass:"footer-link",attrs:{to:"/",tag:"li"}},[s("a",{staticClass:"nav-link"},[t._v("SURF")])])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4"},[s("p",{staticClass:"no-marg"},[t._v("For more information, questions or concerns please contact:")]),t._v(" "),s("h5",{staticClass:"title mb-2 mt-3 font-bold"},[t._v("AFPC DSYD")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-2"},[s("p",{staticClass:"no-marg"},[t._v("Email: ")]),t._v(" "),s("p",{staticClass:"no-marg"},[t._v("DSN:  ")]),t._v(" "),s("p",{staticClass:"no-marg"},[t._v("COM:  ")])]),t._v(" "),s("div",{staticClass:"col"},[s("p",{staticClass:"no-marg"},[s("a",{staticClass:"font-bold",attrs:{href:"mailto:DSYD.WorkFlow@us.af.mil?Subject=PERS_STAT Assistance"}},[t._v("DSYD.WorkFlow@us.af.mil")])]),t._v(" "),s("p",{staticClass:"no-marg"},[t._v("312-665-3540")]),t._v(" "),s("p",{staticClass:"no-marg"},[t._v("210-565-3540")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4"},[s("h5",{staticClass:"title mb-2 mt-3 font-bold"},[t._v(" Additional Links")]),t._v(" "),s("ul")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-copyright"},[s("div",{staticClass:"container-fluid"},[t._v("\n                    © 2017-2018 Copyright: United States Air Force\n                ")])])}],n={render:a,staticRenderFns:i};e.a=n},wtEF:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var a=s("7+uW"),i=s("NYxO");a.a.use(i.a);var n=new i.a.Store({state:{asDate:"Undetermined",resetAfsc:!1,startAfsc:!1,sanity:"SANE"}})},xJD8:function(t,e,s){"use strict";var a=s("lfLh"),i=s("TVmP");e.a={components:{"app-navbar":a.default,"app-footer":i.default}}},zaOv:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid grey lighten-5"},[s("app-navbar"),t._v(" "),s("div",{staticClass:"pt-5 mt-3",staticStyle:{"min-height":"800px"}},[s("router-view")],1),t._v(" "),s("app-footer")],1)},i=[],n={render:a,staticRenderFns:i};e.a=n}},["NHnr"]);
//# sourceMappingURL=app.5e4810c459a60a51cf6f.js.map