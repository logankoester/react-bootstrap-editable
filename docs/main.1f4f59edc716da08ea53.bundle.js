(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{239:function(module,exports,__webpack_require__){__webpack_require__(240),__webpack_require__(319),module.exports=__webpack_require__(320)},320:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(66);__webpack_require__(419),__webpack_require__(424);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(533),__webpack_require__(614)},module)}.call(this,__webpack_require__(117)(module))},419:function(module,exports,__webpack_require__){var content=__webpack_require__(420);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(422)(content,options);content.locals&&(module.exports=content.locals)},420:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(421)(!1)).push([module.i,".container{\n    height: 100vh;\n}\ntd:first-child{\n    width: 25%;\n}\n",""])},533:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),_src_Editable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(54);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Introduction",module).add("Inline Editables",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row h-100"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"table table-bordered my-auto"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,"Text Field"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a,{type:"textfield",mode:"inline",value:"446980"})))))))}).add("Popup Editables",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row h-100"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"table table-bordered my-auto"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,"Text Field"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_2__.a,{type:"textfield",mode:"popup",value:"446980"})))))))})}.call(this,__webpack_require__(117)(module))},54:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(19),__webpack_require__(16),__webpack_require__(7),__webpack_require__(90),__webpack_require__(91);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),lib=__webpack_require__(38);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var TextField_TextField=function(_React$Component){function TextField(props){return function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TextField),_possibleConstructorReturn(this,_getPrototypeOf(TextField).call(this,props))}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(TextField,react_default.a.Component),Constructor=TextField,(protoProps=[{key:"render",value:function(){var _this=this;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(lib.Form,{inline:!0},react_default.a.createElement(lib.FormGroup,null,react_default.a.createElement(lib.Input,{invalid:!!this.props.validationText,value:this.props.value,onChange:function(e){return _this.props.setNewValue(e.target.value)},type:"text",bsSize:"sm"})),this.props.controls),react_default.a.createElement(lib.FormText,{className:"mt-0"},this.props.validationText))}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),TextField;var Constructor,protoProps,staticProps}();function Editable_typeof(obj){return(Editable_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function Editable_defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function Editable_possibleConstructorReturn(self,call){return!call||"object"!==Editable_typeof(call)&&"function"!=typeof call?function(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function Editable_getPrototypeOf(o){return(Editable_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function Editable_setPrototypeOf(o,p){return(Editable_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}TextField_TextField.__docgenInfo={description:"",methods:[],displayName:"TextField"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField.js"]={name:"TextField",docgenInfo:TextField_TextField.__docgenInfo,path:"src/components/TextField.js"}),__webpack_require__.d(__webpack_exports__,"a",function(){return Editable_Editable});var Editable_Editable=function(_React$Component){function Editable(props){var _this;return function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Editable),(_this=Editable_possibleConstructorReturn(this,Editable_getPrototypeOf(Editable).call(this,props))).state={value:_this.props.value,newValue:_this.props.value,isEditing:!1,validationText:null,isLoading:!1},_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&Editable_setPrototypeOf(subClass,superClass)}(Editable,react_default.a.Component),Constructor=Editable,(protoProps=[{key:"getEditingComponent",value:function(){var _this2=this,controls=react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(lib.Button,{className:"mx-1",color:"success",size:"sm",onClick:function(){return _this2.onSubmit()}},react_default.a.createElement("i",{className:"fa fa-check fa-fw"})),react_default.a.createElement(lib.Button,{color:"danger",size:"sm",onClick:function(){return _this2.onCancel()}},react_default.a.createElement("i",{className:"fa fa-times fa-fw"})));switch(this.state.isLoading&&(controls=react_default.a.createElement("p",null,"Loading...")),this.props.type){case"textfield":return react_default.a.createElement(TextField_TextField,{value:this.state.newValue,controls:controls,setNewValue:function(newValue){return _this2.setState({newValue:newValue})},onSubmit:function(newValue){return _this2.onSubmit(newValue)},onCancel:function(){return _this2.onCancel()},validationText:this.state.validationText});case"textarea":case"select":case"date":return null;default:return console.error('"Editable: "'.concat(this.props.type,'" is not a valid value for the type prop')),null}}},{key:"onCancel",value:function(){this.setState({validationText:null,newValue:this.state.value,isEditing:!1})}},{key:"onSubmit",value:function(){var validationText=this.props.validate?this.props.validate(this.state.newValue):null;this.props.onSubmit&&this.props.onSubmit(this.state.newValue),validationText?this.setState({validationText:validationText}):this.props.validate?this.onValidated(this.state.newValue):this.setState({value:this.state.newValue,isEditing:!1})}},{key:"onValidated",value:function(validValue){this.props.onValidated?this.props.onValidated(validValue):console.warn("Editable: Specified a validate function without onValidated, possible error"),this.ajax,this.setState({value:validValue,isEditing:!1,validationText:null})}},{key:"render",value:function(){var _this3=this,value=this.state.value?this.state.value:"No value";return this.state.isEditing?this.getEditingComponent():react_default.a.createElement(lib.Form,{inline:!0},!this.props.isValueClickable&&react_default.a.createElement("h6",{className:"my-0 mr-1"},value),react_default.a.createElement("a",{href:"javascript:;",onClick:function(){_this3.setState({isEditing:!0})}},this.props.isValueClickable?value:this.props.edit))}}])&&Editable_defineProperties(Constructor.prototype,protoProps),staticProps&&Editable_defineProperties(Constructor,staticProps),Editable;var Constructor,protoProps,staticProps}();Editable_Editable.defaultProps={type:null,mode:null,value:null,disabled:!1,isValueClickable:!1,edit:"Edit",validate:null,onSubmit:null,onValidated:null},Editable_Editable.propTypes={type:prop_types_default.a.oneOf(["textfield","textarea","select","date"]).isRequired,mode:prop_types_default.a.oneOf(["inline","popup"]).isRequired,value:prop_types_default.a.string,disabled:prop_types_default.a.bool,isValueClickable:prop_types_default.a.bool,edit:prop_types_default.a.string,validate:prop_types_default.a.func,onSubmit:prop_types_default.a.func,onValidated:prop_types_default.a.func},Editable_Editable.__docgenInfo={description:"",methods:[{name:"getEditingComponent",docblock:null,modifiers:[],params:[],returns:null},{name:"onCancel",docblock:null,modifiers:[],params:[],returns:null},{name:"onSubmit",docblock:null,modifiers:[],params:[],returns:null},{name:"onValidated",docblock:null,modifiers:[],params:[{name:"validValue",type:null}],returns:null}],displayName:"Editable",props:{type:{defaultValue:{value:"null",computed:!1},type:{name:"enum",value:[{value:'"textfield"',computed:!1},{value:'"textarea"',computed:!1},{value:'"select"',computed:!1},{value:'"date"',computed:!1}]},required:!1,description:""},mode:{defaultValue:{value:"null",computed:!1},type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"popup"',computed:!1}]},required:!1,description:""},value:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},isValueClickable:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},edit:{defaultValue:{value:'"Edit"',computed:!1},type:{name:"string"},required:!1,description:""},validate:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:""},onSubmit:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:""},onValidated:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Editable.js"]={name:"Editable",docgenInfo:Editable_Editable.__docgenInfo,path:"src/Editable.js"})},614:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(78);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(66),_src_Editable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(54);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Attributes",module).add("isValueClickable",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row h-100"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table",{className:"table table-bordered my-auto"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",null,"true"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_3__.a,{type:"textfield",mode:"inline",value:"446980",isValueClickable:!0,validate:function(value){return+value?null:"Number only allowed"},onValidated:function(newValue){return console.log("onValidated: "+newValue)}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",null,"false"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_3__.a,{type:"textfield",mode:"inline",value:"446980",isValueClickable:!1,validate:function(value){return+value?null:"Number only allowed"},onValidated:function(newValue){return console.log("onValidated: "+newValue)}})))))))}).add("disabled",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Editable__WEBPACK_IMPORTED_MODULE_3__.a,{type:"textfield",mode:"inline",value:"129484055",isValueClickable:!0,validate:function(value){return+value?null:"Number only allowed"},onValidated:function(newValue){return console.log("onValidated: "+newValue)}})})}.call(this,__webpack_require__(117)(module))}},[[239,1,2]]]);
//# sourceMappingURL=main.1f4f59edc716da08ea53.bundle.js.map