!function(){if(!window.$fsx){var e=window.$fsx={};e.f={},e.m={},e.r=function(t){var r=e.m[t];if(r)return r.m.exports;var n=e.f[t];return n?((r=e.m[t]={}).exports={},r.m={exports:r.exports},n.call(r.exports,r.m,r.exports),r.m.exports):void 0}}}(),function($fsx){$fsx.f[903]=function(){var e=s($fsx.r(620)),t=s($fsx.r(572)),r=$fsx.r(579),n=$fsx.r(594);$fsx.r(651);var a=s($fsx.r(904)),u=s($fsx.r(915));function s(e){return e&&e.__esModule?e:{default:e}}$fsx.r(917),$fsx.r(918),t.default.render(e.default.createElement(r.Provider,{store:u.default},e.default.createElement(n.HashRouter,null,e.default.createElement(a.default,null))),document.getElementById("app"))},$fsx.f[904]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r,n=d($fsx.r(620)),a=$fsx.r(594),u=$fsx.r(575),s=$fsx.r(905),l=d(s);function d(e){return e&&e.__esModule?e:{default:e}}(r=$fsx.r(575).enterModule)&&r(e);var o,i,f=function(){return n.default.createElement("div",null,n.default.createElement("h1",null,"FuseBox Boilerplate"),n.default.createElement(l.default,null),n.default.createElement("div",{className:"page-content"},n.default.createElement(a.Switch,null,s.routes.map(function(e){return n.default.createElement(a.Route,{key:e.path,path:e.path,component:e.component})}),n.default.createElement(a.Redirect,{from:"/",exact:!0,to:s.routes.length&&s.routes[0].path}))))},c=(0,u.hot)(e)(f);t.default=c,o=$fsx.r(575).default,i=$fsx.r(575).leaveModule,o&&(o.register(f,"App","unknown"),o.register(c,"default","unknown"),i(e))},$fsx.f[905]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Nav=t.routes=void 0;var r,n,a=$fsx.r(620),u=(r=a)&&r.__esModule?r:{default:r},s=$fsx.r(652),l=$fsx.r(594),d=$fsx.r(906),o=$fsx.r(910);(n=$fsx.r(575).enterModule)&&n(e);var i,f,c=t.routes=[{path:"/list",name:"List",component:d.ConnectedList},{path:"/package",name:"Package",component:o.ConnectedPackage}],m=t.Nav=function(){return u.default.createElement(s.Menu,{pointing:!0,secondary:!0,className:"navigation"},c.map(function(e){return u.default.createElement(s.Menu.Item,{key:e.path,to:e.path,name:e.name,as:l.NavLink})}))},p=m;t.default=p,i=$fsx.r(575).default,f=$fsx.r(575).leaveModule,i&&(i.register(c,"routes","unknown"),i.register(m,"Nav","unknown"),i.register(p,"default","unknown"),f(e))},$fsx.f[906]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectedList=void 0;var r,n=f($fsx.r(620)),a=f($fsx.r(569)),u=$fsx.r(579),s=$fsx.r(619),l=$fsx.r(652),d=f($fsx.r(907)),o=f($fsx.r(908)),i=f($fsx.r(909));function f(e){return e&&e.__esModule?e:{default:e}}(r=$fsx.r(575).enterModule)&&r(e);var c=function(e){var t=e.items,r=void 0===t?[]:t,a=e.addItem,u=e.removeItem,s=e.toggleIsActive;return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.default,{addItem:a}),n.default.createElement(l.Divider,{horizontal:!0},r.length," Items"),n.default.createElement(l.Table,{compact:!0,celled:!0,definition:!0},n.default.createElement(l.Table.Header,null,n.default.createElement(l.Table.Row,null,n.default.createElement(l.Table.HeaderCell,null),n.default.createElement(l.Table.HeaderCell,null,"Id"),n.default.createElement(l.Table.HeaderCell,null,"Name"),n.default.createElement(l.Table.HeaderCell,null,"Created"),n.default.createElement(l.Table.HeaderCell,null,"Active"))),n.default.createElement(l.Table.Body,null,r.map(function(e){return n.default.createElement(d.default,{key:e.id,item:e,removeItem:function(){return u(e.id)},toggleIsActive:function(){return s(e.id)}})}))))};c.propTypes={items:a.default.array.isRequired,addItem:a.default.func.isRequired,removeItem:a.default.func.isRequired,toggleIsActive:a.default.func.isRequired};var m,p,g=function(e){return{items:i.default.getItems(e)}},v=t.ConnectedList=(0,u.connect)(g,i.default.actions)((0,s.fromImmutable)(c)),x=c;t.default=x,m=$fsx.r(575).default,p=$fsx.r(575).leaveModule,m&&(m.register(c,"List","unknown"),m.register(g,"mapStateToProps","unknown"),m.register(v,"ConnectedList","unknown"),m.register(x,"default","unknown"),p(e))},$fsx.f[907]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r,n=l($fsx.r(620)),a=l($fsx.r(569)),u=$fsx.r(652),s=l($fsx.r(201));function l(e){return e&&e.__esModule?e:{default:e}}(r=$fsx.r(575).enterModule)&&r(e);var d=function(e){var t=e.item,r=e.removeItem,a=e.toggleIsActive;return n.default.createElement(u.Table.Row,null,n.default.createElement(u.Table.Cell,{width:1},n.default.createElement(u.Button,{circular:!0,fluid:!0,icon:"trash",size:"mini",onClick:r,disabled:t.isActive})),n.default.createElement(u.Table.Cell,{width:1},t.id),n.default.createElement(u.Table.Cell,null,t.name),n.default.createElement(u.Table.Cell,null,"created ",(0,s.default)(new Date-t.date,{round:!0})," ago"),n.default.createElement(u.Table.Cell,{width:1},n.default.createElement(u.Checkbox,{toggle:!0,checked:t.isActive,onClick:a})))};d.propTypes={item:a.default.object.isRequired,removeItem:a.default.func.isRequired,toggleIsActive:a.default.func.isRequired};var o,i,f=d;t.default=f,o=$fsx.r(575).default,i=$fsx.r(575).leaveModule,o&&(o.register(d,"ListItem","unknown"),o.register(f,"default","unknown"),i(e))},$fsx.f[908]=function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=$fsx.r(63),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=$fsx.r(64),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=$fsx.r(65),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=$fsx.r(67),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=$fsx.r(71),_inherits3=_interopRequireDefault(_inherits2),_react=$fsx.r(620),_react2=_interopRequireDefault(_react),_propTypes=$fsx.r(569),_propTypes2=_interopRequireDefault(_propTypes),_semanticUiReact=$fsx.r(652),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}enterModule=$fsx.r(575).enterModule,enterModule&&enterModule(module);var AddItem=function(_React$Component){function AddItem(e){(0,_classCallCheck3.default)(this,AddItem);var t=(0,_possibleConstructorReturn3.default)(this,(AddItem.__proto__||(0,_getPrototypeOf2.default)(AddItem)).call(this,e));return t.state={value:"foo"},t.update=t.update.bind(t),t.addItem=t.addItem.bind(t),t}return(0,_inherits3.default)(AddItem,_React$Component),(0,_createClass3.default)(AddItem,[{key:"update",value:function(e){this.setState({value:e.target.value})}},{key:"addItem",value:function(){var e=this.state.value||"new item";this.props.addItem(e),this.setState({value:""})}},{key:"render",value:function(){return _react2.default.createElement(_semanticUiReact.Form,{onSubmit:this.addItem},_react2.default.createElement(_semanticUiReact.Input,{fluid:!0,placeholder:"New Item",action:{labelPosition:"right",icon:"plus",content:"Add Item"},actionPosition:"left",onChange:this.update,value:this.state.value}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),AddItem}(_react2.default.Component);AddItem.propTypes={addItem:_propTypes2.default.func.isRequired};var _default=AddItem,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=$fsx.r(575).default,leaveModule=$fsx.r(575).leaveModule,reactHotLoader&&(reactHotLoader.register(AddItem,"AddItem","unknown"),reactHotLoader.register(_default,"default","unknown"),leaveModule(module))},$fsx.f[909]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.actionReducers=t.initialState=t.selectors=t.namespace=void 0;var r,n=$fsx.r(202),a=$fsx.r(623),u=$fsx.r(649);(r=$fsx.r(575).enterModule)&&r(e);var s,l,d=t.namespace="list",o=function(e){return e.get("items")},i=function(e){return e.get("items").size},f=function(e,t){return e.slice(0,Math.floor(t/2))},c=(0,u.createSelector)([o],function(e){return e.sort(function(e,t){var r=t.get("name"),n=e.get("name");return r<n?-1:r>n?1:0}).reverse()}),m=(0,u.createSelector)([o,i],f),p=(0,u.createSelector)([c,i],f),g=t.selectors={getItems:o,getNumItems:i,getItemsSorted:c,getHalfItemsUnsorted:m,getHalfItemsSorted:p},v=new n.Record({id:void 0,name:"new item",date:new Date,isActive:!1}),x=t.initialState=(0,n.fromJS)({items:[{id:1,name:"foo",date:new Date,isActive:!0},{id:2,name:"bar",date:new Date,isActive:!0},{id:3,name:"baz",date:new Date,isActive:!0},{id:4,name:"cat",date:new Date,isActive:!1},{id:5,name:"miffles",date:new Date,isActive:!1},{id:6,name:"vlad",date:new Date,isActive:!0},{id:7,name:"baxter",date:new Date,isActive:!0}]}),_=t.actionReducers=[{addItem:function(){return{type:"list/ADD_ITEM",name:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"new item"}},reducer:function(e,t){var r=e.get("items").maxBy(function(e){return e.get("id")}).get("id")+1;return e.update("items",function(e){return e.push(new v({id:r,name:t.name,date:new Date}))})}},{toggleIsActive:function(e){return{type:"list/TOGGLE_ITEM_IS_ACTIVE",id:e}},reducer:function(e,t){return e.update("items",function(e){return e.map(function(e){return e.get("id")===t.id?e.update("isActive",function(e){return!e}):e})})}},{removeItem:function(e){return{type:"list/REMOVE_ITEM",id:e}},reducer:function(e,t){return e.update("items",function(e){return e.filter(function(e){return e.get("id")!==t.id})})}}],$=(0,a.automap)({namespace:d,actionReducers:_,initialState:x,selectors:g,foo:"bar"});t.default=$,s=$fsx.r(575).default,l=$fsx.r(575).leaveModule,s&&(s.register(d,"namespace","unknown"),s.register(o,"getItems","unknown"),s.register(i,"getNumItems","unknown"),s.register(f,"getHalfItems","unknown"),s.register(c,"getItemsSorted","unknown"),s.register(m,"getHalfItemsUnsorted","unknown"),s.register(p,"getHalfItemsSorted","unknown"),s.register(g,"selectors","unknown"),s.register(v,"Entry","unknown"),s.register(x,"initialState","unknown"),s.register(_,"actionReducers","unknown"),s.register($,"default","unknown"),l(e))},$fsx.f[910]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectedPackage=void 0;var r,n=f($fsx.r(620)),a=f($fsx.r(569)),u=$fsx.r(652),s=$fsx.r(579),l=$fsx.r(619),d=f($fsx.r(911)),o=f($fsx.r(913)),i=f($fsx.r(914));function f(e){return e&&e.__esModule?e:{default:e}}(r=$fsx.r(575).enterModule)&&r(e);var c=function(e){var t=e.pkg,r=e.deps,a=e.devDeps,s=e.timesLoaded,l=e.loadPackageInfo;return n.default.createElement("div",{className:"package-loader"},n.default.createElement(u.Button,{fluid:!0,disabled:t.isLoading,onClick:l,loading:t.isLoading},r.length?"Reload Package (loaded "+s+" times)":"Load Package"),r.length>0&&n.default.createElement(d.default,{deps:r,devDeps:a}),t.error&&n.default.createElement(o.default,{message:t.error}))};c.propTypes={pkg:a.default.object.isRequired,deps:a.default.array,devDeps:a.default.array,timesLoaded:a.default.number.isRequired,loadPackageInfo:a.default.func.isRequired},c.defaultProps={deps:[],devDeps:[]};var m,p,g=function(e){return{pkg:i.default.getPackage(e),deps:i.default.getDependenciesAsArray(e),devDeps:i.default.getDevDependenciesAsArray(e),timesLoaded:i.default.getTimesLoaded(e)}},v=t.ConnectedPackage=(0,s.connect)(g,{loadPackageInfo:i.default.actions.loadPackageInfo})((0,l.fromImmutable)(c)),x=c;t.default=x,m=$fsx.r(575).default,p=$fsx.r(575).leaveModule,m&&(m.register(c,"Package","unknown"),m.register(g,"mapStateToProps","unknown"),m.register(v,"ConnectedPackage","unknown"),m.register(x,"default","unknown"),p(e))},$fsx.f[911]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r,n=l($fsx.r(620)),a=l($fsx.r(569)),u=$fsx.r(652),s=l($fsx.r(912));function l(e){return e&&e.__esModule?e:{default:e}}(r=$fsx.r(575).enterModule)&&r(e);var d=function(e){var t=e.deps,r=e.devDeps;return n.default.createElement(u.Message,{positive:!0},n.default.createElement(u.Grid,{columns:2,divided:!0},n.default.createElement(u.Grid.Row,null,n.default.createElement(u.Grid.Column,null,n.default.createElement(s.default,{name:"Dependencies",libs:t})),n.default.createElement(u.Grid.Column,null,n.default.createElement(s.default,{name:"Dev. Dependencies",libs:r})))))};d.propTypes={deps:a.default.array,devDeps:a.default.array},d.defaultProps={deps:[],devDeps:[]};var o,i,f=d;t.default=f,o=$fsx.r(575).default,i=$fsx.r(575).leaveModule,o&&(o.register(d,"Dependencies","unknown"),o.register(f,"default","unknown"),i(e))},$fsx.f[912]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r,n=s($fsx.r(620)),a=s($fsx.r(569)),u=$fsx.r(652);function s(e){return e&&e.__esModule?e:{default:e}}(r=$fsx.r(575).enterModule)&&r(e);var l=function(e){var t=e.name,r=e.libs,a=void 0===r?[]:r;return n.default.createElement("div",null,n.default.createElement(u.Statistic,{horizontal:!0,color:"green",label:t,value:a.length}),n.default.createElement(u.List,null,a.map(function(e){return n.default.createElement(u.List.Item,{key:e.name},n.default.createElement("b",null,e.name),": ",e.version)})))};l.propTypes={name:a.default.string.isRequired,libs:a.default.array},l.defaultProps={libs:[]};var d,o,i=l;t.default=i,d=$fsx.r(575).default,o=$fsx.r(575).leaveModule,d&&(d.register(l,"PackageList","unknown"),d.register(i,"default","unknown"),o(e))},$fsx.f[913]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r,n=s($fsx.r(620)),a=s($fsx.r(569)),u=$fsx.r(652);function s(e){return e&&e.__esModule?e:{default:e}}(r=$fsx.r(575).enterModule)&&r(e);var l=function(e){var t=e.message,r=e.children;return n.default.createElement(u.Message,{negative:!0},n.default.createElement(u.Message.Header,null,"We‘ve encountered an error."),n.default.createElement("p",null,t||r))};l.propTypes={message:a.default.string,children:a.default.element},l.defaultProps={message:void 0,children:void 0};var d,o,i=l;t.default=i,d=$fsx.r(575).default,o=$fsx.r(575).leaveModule,d&&(d.register(l,"ErrorMessage","unknown"),d.register(i,"default","unknown"),o(e))},$fsx.f[914]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.actionReducers=t.initialState=t.namespace=void 0;var r,n=i($fsx.r(74)),a=i($fsx.r(75)),u=$fsx.r(202),s=$fsx.r(623),l=$fsx.r(649),d=i($fsx.r(38)),o=$fsx.r(630);function i(e){return e&&e.__esModule?e:{default:e}}(r=$fsx.r(575).enterModule)&&r(e);var f=n.default.mark(M),c=n.default.mark(y),m=t.namespace="api",p=function(e,t){return e.name<t.name?-1:e.name>t.name?1:0},g=function(e){return e&&(0,a.default)(e.toJS()).map(function(e){return{name:e[0],version:e[1]}}).sort(p)},v=function(e){return e.getIn(["package"])},x=function(e){return e.get("timesLoaded")},_=function(e){return e.getIn(["package","data","dependencies"])},$=function(e){return e.getIn(["package","data","devDependencies"])},k=(0,l.createSelector)([_],g),w=(0,l.createSelector)([$],g),E={getPackage:v,getTimesLoaded:x,getDependencies:_,getDevDependencies:$,getDependenciesAsArray:k,getDevDependenciesAsArray:w},I=(0,u.Record)({isLoading:!1,success:void 0,error:void 0,data:void 0}),h=t.initialState=(0,u.fromJS)({package:new I,timesLoaded:0});function M(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.call)(function(){return d.default.get("/package.json").then(function(e){return(0,u.fromJS)(e.data)})});case 3:return e=t.sent,t.next=6,(0,o.put)({type:"api/LOAD_PACKAGE_INFO_SUCCESS",data:e});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log("fetchPackageInfo",t.t0),t.next=13,(0,o.put)({type:"api/LOAD_PACKAGE_INFO_ERROR",error:t.t0.message});case 13:case"end":return t.stop()}},f,this,[[0,8]])}function y(){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.takeLatest)("api/LOAD_PACKAGE_INFO",M);case 2:case"end":return e.stop()}},c,this)}var A,R,D={watcherSaga:y,fetchPackageInfo:M},b=t.actionReducers=[{loadPackageInfo:function(){return{type:"api/LOAD_PACKAGE_INFO"}},reducer:function(e){return e.set("package",new I({isLoading:!0,data:e.getIn(["package","data"])}))}},{loadPackageInfoSuccess:function(e){return{type:"api/LOAD_PACKAGE_INFO_SUCCESS",data:e}},reducer:function(e,t){return e.set("package",new I({isLoading:!1,success:!0,data:t.data})).update("timesLoaded",function(e){return e+1})}},{loadPackageInfoError:function(e){return{type:"api/LOAD_PACKAGE_INFO_ERROR",error:e}},reducer:function(e,t){return e.set("package",new I({error:t.error,success:!1}))}}],C=(0,s.automap)({sagas:D,namespace:m,actionReducers:b,initialState:h,selectors:E});t.default=C,A=$fsx.r(575).default,R=$fsx.r(575).leaveModule,A&&(A.register(m,"namespace","unknown"),A.register(p,"byName","unknown"),A.register(g,"toDepsArray","unknown"),A.register(v,"getPackage","unknown"),A.register(x,"getTimesLoaded","unknown"),A.register(_,"getDependencies","unknown"),A.register($,"getDevDependencies","unknown"),A.register(k,"getDependenciesAsArray","unknown"),A.register(w,"getDevDependenciesAsArray","unknown"),A.register(E,"selectors","unknown"),A.register(I,"Resource","unknown"),A.register(h,"initialState","unknown"),A.register(M,"fetchPackageInfo","unknown"),A.register(y,"watcherSaga","unknown"),A.register(D,"sagas","unknown"),A.register(b,"actionReducers","unknown"),A.register(C,"default","unknown"),R(e))},$fsx.f[915]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r,n=$fsx.r(624),a=$fsx.r(646),u=f($fsx.r(641)),s=f($fsx.r(195)),l=$fsx.r(623),d=f($fsx.r(914)),o=f($fsx.r(909)),i=f($fsx.r(916));function f(e){return e&&e.__esModule?e:{default:e}}(r=$fsx.r(575).enterModule)&&r(e);var c=(0,l.merge)([d.default,o.default,i.default]),m=(0,s.default)(),p=(0,u.default)(),g=(0,n.combineReducers)(c),v=(0,a.createStore)(g,(0,a.compose)((0,a.applyMiddleware)(p),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));m.listen(function(e){var t=""+e.pathname+e.search+e.hash;v.dispatch(i.default.actions.change(t))});var x=""+location.pathname+location.search+location.hash;v.dispatch(i.default.actions.change(x)),p.run(d.default.sagas.watcherSaga);var _,$,k=v;t.default=k,_=$fsx.r(575).default,$=$fsx.r(575).leaveModule,_&&(_.register(c,"mergedReducers","unknown"),_.register(m,"history","unknown"),_.register(p,"sagaMiddleware","unknown"),_.register(g,"rootReducer","unknown"),_.register(v,"store","unknown"),_.register(x,"path","unknown"),_.register(k,"default","unknown"),$(e))},$fsx.f[916]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.actionReducers=t.initialState=t.namespace=void 0;var r,n=$fsx.r(623);(r=$fsx.r(575).enterModule)&&r(e);var a,u,s=t.namespace="route",l=t.initialState="/",d=t.actionReducers=[{change:function(e){return{type:"route/CHANGE",path:e}},reducer:function(e,t){return t.path}}],o=(0,n.automap)({namespace:s,actionReducers:d,initialState:l});t.default=o,a=$fsx.r(575).default,u=$fsx.r(575).leaveModule,a&&(a.register(s,"namespace","unknown"),a.register(l,"initialState","unknown"),a.register(d,"actionReducers","unknown"),a.register(o,"default","unknown"),u(e))},$fsx.r(903)}($fsx);