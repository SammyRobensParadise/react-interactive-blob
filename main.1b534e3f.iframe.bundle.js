(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Blob.stories.tsx":"./src/stories/Blob.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/Blob.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"blob",(function(){return Blob_stories_blob}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),DEFAULT_CENTER=(__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),{x:.5,y:.5}),DEFAULT_INITIAL_ACCELERATION=2*Math.random()-1,DEFAULT_INITIAL_POINT_ACCELERATION=.1*Math.random()-1;__webpack_require__("./node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}var blob_renderer_BlobInstance=function(){function BlobInstance(initColor,numPoints,smooth,marks,initShowMousePosition,initSpeed,initFriction,initElasticity,initAcceleration,initRadial){_classCallCheck(this,BlobInstance),this.points=void 0,this.ctx=void 0,this._color=void 0,this._mousePos=void 0,this._canvas=void 0,this._points=void 0,this._radius=void 0,this._position=void 0,this._running=void 0,this._smoothing=void 0,this._markers=void 0,this._showMousePosition=void 0,this._speed=void 0,this._friction=void 0,this._elasticity=void 0,this._acceleration=void 0,this._radial=void 0,this.points=[],this._color=null!=initColor?initColor:"#2f4acf",this._mousePos=DEFAULT_CENTER,this._points=numPoints&&numPoints>2?numPoints:32,this._radius=128,this._position=DEFAULT_CENTER,this._running=!1,this._smoothing="boolean"!=typeof smooth||smooth,this._markers="boolean"==typeof marks&&marks,this._showMousePosition="boolean"==typeof initShowMousePosition&&initShowMousePosition,this._speed=null!=initSpeed?initSpeed:.5,this._friction=null!=initFriction?initFriction:.0095,this._elasticity=null!=initElasticity?initElasticity:.001,this._acceleration=null!=initAcceleration?initAcceleration:DEFAULT_INITIAL_POINT_ACCELERATION,this._radial=null!=initRadial?initRadial:.1}return _createClass(BlobInstance,[{key:"init",value:function init(){for(var i=0;i<this.numPoints;i++){var point=new Point(this.divisional*(i+1),this);point.acceleration=DEFAULT_INITIAL_ACCELERATION,this.push(point)}}},{key:"render",value:function render(){var canvas=this.canvas,ctx=this.ctx,pointsArray=this.points,points=this.numPoints,center=this.center;null!=ctx&&canvas&&ctx.clearRect(0,0,canvas.width,canvas.height),pointsArray[0].solveWith(pointsArray[points-1],pointsArray[1]);var p0=pointsArray[points-1].position,p1=pointsArray[0].position,_p2=p1;ctx&&(ctx.beginPath(),ctx.moveTo(center.x,center.y),ctx.moveTo((p0.x+p1.x)/2,(p0.y+p1.y)/2));for(var i=1;i<points;i++){pointsArray[i].solveWith(pointsArray[i-1],pointsArray[i+1]||pointsArray[0]);var p2=pointsArray[i].position,xc=(p1.x+p2.x)/2,yc=(p1.y+p2.y)/2;this.smoothing&&(null==ctx||ctx.quadraticCurveTo(p1.x,p1.y,xc,yc)),ctx&&(this.smoothing||null==ctx||ctx.lineTo(p2.x,p2.y),ctx.fillStyle=this.color,this.markers&&ctx.fillRect(p1.x-5,p1.y-5,10,10)),p1=p2}xc=(p1.x+_p2.x)/2,yc=(p1.y+_p2.y)/2;if(ctx&&(ctx.fillStyle=this.color,ctx.fill(),ctx.strokeStyle=this.color),this.showMousePosition){var angle=Math.atan2(this.mousePos.y,this.mousePos.x)+Math.PI;null==ctx||ctx.fillRect(center.x+Math.cos(angle)*this.radius,center.y+Math.sin(angle)*this.radius,10,10)}requestAnimationFrame(this.render.bind(this))}},{key:"push",value:function push(item){item instanceof Point&&this.points.push(item)}},{key:"color",get:function get(){return this._color},set:function set(value){this._color=value}},{key:"smoothing",get:function get(){return this._smoothing},set:function set(value){this._smoothing=value}},{key:"friction",get:function get(){return this._friction}},{key:"elasticity",get:function get(){return this._elasticity}},{key:"acceleration",get:function get(){return this._acceleration}},{key:"radial",get:function get(){return this._radial}},{key:"markers",get:function get(){return this._markers},set:function set(value){this._markers=value}},{key:"speed",get:function get(){return this._speed}},{key:"showMousePosition",get:function get(){return this._showMousePosition},set:function set(value){this._showMousePosition=value}},{key:"mousePos",get:function get(){return this._mousePos},set:function set(value){this._mousePos=value}},{key:"canvas",get:function get(){return this._canvas},set:function set(value){value instanceof HTMLElement&&"canvas"===value.tagName.toLowerCase()&&(this._canvas=value,this.ctx=this._canvas.getContext("2d"))}},{key:"numPoints",get:function get(){return this._points},set:function set(value){value>2&&(this._points=value)}},{key:"radius",get:function get(){return this._radius},set:function set(value){value>0&&(this._radius=value)}},{key:"position",get:function get(){return this._position},set:function set(value){"object"==typeof value&&value.x&&value.y&&(this._position=value)}},{key:"divisional",get:function get(){return 2*Math.PI/this.numPoints}},{key:"center",get:function get(){return this.canvas?{x:this.canvas.width*this.position.x,y:this.canvas.height*this.position.y}:DEFAULT_CENTER}},{key:"running",get:function get(){return!1!==this.running},set:function set(value){this._running=!0===value}}]),BlobInstance}(),Point=function(){function Point(azimuth,parent){_classCallCheck(this,Point),this.parent=void 0,this.azimuth=void 0,this._acceleration=void 0,this._components=void 0,this._speed=void 0,this._radialEffect=void 0,this._elasticity=void 0,this._friction=void 0,this.parent=parent,this.azimuth=Math.PI-azimuth,this._components={x:Math.cos(this.azimuth),y:Math.sin(this.azimuth)},this._acceleration=parent.acceleration,this._speed=parent.speed,this._radialEffect=parent.radial,this._elasticity=parent.elasticity,this._friction=parent.friction}return _createClass(Point,[{key:"solveWith",value:function solveWith(leftPoint,rightPoint){this.acceleration=(-.3*this.radialEffect+(leftPoint.radialEffect-this.radialEffect)+(rightPoint.radialEffect-this.radialEffect))*this.elasticity-this.speed*this.friction}},{key:"acceleration",get:function get(){return this._acceleration},set:function set(value){"number"==typeof value&&(this._acceleration=value,this.speed+=2*this._acceleration)}},{key:"speed",get:function get(){return this._speed},set:function set(value){"number"==typeof value&&(this._speed=value,this.radialEffect+=5*this._speed)}},{key:"radialEffect",get:function get(){return this._radialEffect},set:function set(value){"number"==typeof value&&(this._radialEffect=value)}},{key:"position",get:function get(){return{x:this.parent.center.x+this.components.x*(this.parent.radius+this.radialEffect),y:this.parent.center.y+this.components.y*(this.parent.radius+this.radialEffect)}}},{key:"components",get:function get(){return this._components}},{key:"elasticity",get:function get(){return this._elasticity},set:function set(value){"number"==typeof value&&(this._elasticity=value)}},{key:"friction",get:function get(){return this._friction},set:function set(value){"number"==typeof value&&(this._friction=value)}}]),Point}(),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var blob_component=Object(react.forwardRef)((function(props,forwardRef){var _props$color=props.color,color=void 0===_props$color?"#2f4acf":_props$color,_props$radius=props.radius,radius=void 0===_props$radius?128:_props$radius,_props$sensitivity=props.sensitivity,sensitivity=void 0===_props$sensitivity?.5:_props$sensitivity,_props$points=props.points,points=void 0===_props$points?32:_props$points,_props$speed=props.speed,speed=void 0===_props$speed?.5:_props$speed,_props$smoothing=props.smoothing,smoothing=void 0===_props$smoothing||_props$smoothing,_props$markers=props.markers,markers=void 0===_props$markers||_props$markers,_props$showMousePosit=props.showMousePosition,showMousePosition=void 0!==_props$showMousePosit&&_props$showMousePosit,_props$friction=props.friction,friction=void 0===_props$friction?.0095:_props$friction,_props$elasticity=props.elasticity,elasticity=void 0===_props$elasticity?.001:_props$elasticity,_props$acceleration=props.acceleration,acceleration=void 0===_props$acceleration?DEFAULT_INITIAL_POINT_ACCELERATION:_props$acceleration,_props$radial=props.radial,radial=void 0===_props$radial?.1:_props$radial,_props$height=props.height,height=void 0===_props$height?window.innerHeight:_props$height,_useState2=_slicedToArray(Object(react.useState)(null),2),blob=_useState2[0],setBlob=_useState2[1],localRef=Object(react.useRef)(null),staleMousePoint=_slicedToArray(Object(react.useState)({x:0,y:0}),1)[0],handleResize=Object(react.useCallback)((function(){localRef.current&&localRef.current.parentElement&&(localRef.current.width=localRef.current.parentElement.clientWidth,localRef.current.height=height,localRef,blob&&(blob.color=color))}),[blob,color,height]),resize=Object(react.useCallback)((function(){handleResize()}),[handleResize]);Object(react.useEffect)((function(){handleResize()}),[handleResize]);var mouseMove=Object(react.useCallback)((function(mouseMoveEvent){if(blob){var pos=blob.center,diff={x:mouseMoveEvent.clientX-pos.x,y:mouseMoveEvent.clientY-pos.y},dist=Math.sqrt(diff.x*diff.x+diff.y*diff.y),angle=null;if(blob.mousePos={x:pos.x-mouseMoveEvent.clientX,y:pos.y-mouseMoveEvent.clientY},dist<blob.radius){var vector={x:mouseMoveEvent.clientX+pos.x,y:mouseMoveEvent.clientY+pos.y};angle=Math.atan2(vector.y,vector.x)+Math.random()}else if(dist>blob.radius){var _vector={x:mouseMoveEvent.clientX-pos.x,y:mouseMoveEvent.clientY-pos.y};angle=Math.atan2(_vector.y,_vector.x)+Math.random()}if("number"==typeof angle){var nearestPoint=null,distanceFromPoint=1;if(blob.points.forEach((function(point){angle&&Math.abs(angle-point.azimuth)<distanceFromPoint&&(nearestPoint=point,distanceFromPoint=Math.abs(angle-point.azimuth))})),nearestPoint){var strength={x:staleMousePoint.x-mouseMoveEvent.clientX,y:staleMousePoint.y-mouseMoveEvent.clientY};strength=Math.sqrt(strength.x*strength.x+strength.y*strength.y)*sensitivity,nearestPoint.acceleration=strength/100}}staleMousePoint.x=mouseMoveEvent.clientX,staleMousePoint.y=mouseMoveEvent.clientY}}),[blob,staleMousePoint,sensitivity]);return Object(react.useEffect)((function(){setBlob(new blob_renderer_BlobInstance(color,points,smoothing,markers,showMousePosition,speed,friction,elasticity,acceleration,radial))}),[setBlob]),Object(react.useEffect)((function(){blob&&localRef.current&&(blob.canvas=localRef.current,blob.radius=radius,blob.color=color,localRef)}),[blob,color,radius]),Object(react.useEffect)((function(){null!=blob&&blob.canvas&&(null==blob||blob.init(),blob.render())}),[blob]),Object(react.useEffect)((function(){return window.addEventListener("resize",resize),function(){window.removeEventListener("resize",resize)}}),[resize]),Object(react.useEffect)((function(){return document.addEventListener("mousemove",mouseMove),function(){document.removeEventListener("mousemove",mouseMove)}}),[mouseMove]),Object(jsx_runtime.jsx)("canvas",{"touch-action":"none",ref:localRef,height:height})}));try{blobcomponent.displayName="blobcomponent",blobcomponent.__docgenInfo={description:"",displayName:"blobcomponent",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"number"}},sensitivity:{defaultValue:null,description:"",name:"sensitivity",required:!1,type:{name:"number"}},points:{defaultValue:null,description:"",name:"points",required:!1,type:{name:"number"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"number"}},smoothing:{defaultValue:null,description:"",name:"smoothing",required:!1,type:{name:"boolean"}},friction:{defaultValue:null,description:"",name:"friction",required:!1,type:{name:"number"}},elasticity:{defaultValue:null,description:"",name:"elasticity",required:!1,type:{name:"number"}},acceleration:{defaultValue:null,description:"",name:"acceleration",required:!1,type:{name:"number"}},radial:{defaultValue:null,description:"",name:"radial",required:!1,type:{name:"number"}},markers:{defaultValue:null,description:"",name:"markers",required:!1,type:{name:"boolean"}},showMousePosition:{defaultValue:null,description:"",name:"showMousePosition",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blob/blob.component.tsx#blobcomponent"]={docgenInfo:blobcomponent.__docgenInfo,name:"blobcomponent",path:"src/components/blob/blob.component.tsx#blobcomponent"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Blob",component:blob_component,parameters:{docs:{description:{component:"# React-Interactive Blob\n\nReact Interactive Blob is an interactive and customizable blob component for react applications. It is built in TypeScript. It can be used just like any other React `JSX` Component.\n\n- ✅ Dependency-Free\n- ✅ TypeScript Supported\n- ✅ Simple API\n- ✅ No Physics knowledge required\n\n---\n\n- [Getting Started](#getting-started)\n- [API](#API)\n- [Interactive Example](#interactive-example)\n\n## Getting Started\n\n### Install `react-interactive-blob`\n\n```bash\n\nnpm install react-interactive-blob\n\n```\n\n```bash\n\nyarn add react-interactive-blob\n\n```\n\n### Add to your project\n\n```tsx\nimport { Blob } from 'react-interactive-blob'\n\nfunction MyComponent() {\n  return <Blob height={500} radius={150} />\n}\n```\n\n## API\n\n| Name | Description | Type | Default Value |\n| --- | --- | --- | --- |\n| `color` | Color of the blob component. Right now only solid colors are supported | string | `\"#2f4acf\"` |\n| `radius` | The outer canvas pixel radius of the blob at still position | number | 128 |\n| `sensitivity` | Sensitivity of the blob component to mouse jitter | number | 0.5 |\n| `friction` | The coefficient of friction for blob movement. | number | 0.0095 |\n| `elasticity` | Elasticity coefficient of the blob point connections | number | 0.001 |\n| `acceleration` | The acceleration of each point making up the blob | number | `- 1 + Math . random () * 0.1` |\n| `radial` | The radial effect of each point making up the blob | number | 0.1 |\n| `points` | The number of points used to construct the shape. Note that there must be at least three points | number | 32 |\n| `speed` | The speed of continuous point motion | number | 0.5 |\n| `height` | The height of the container canvas element | number | `window.innerHeight ` |\n| `smoothing` | Whether a quadratic curve should be constructed between points | boolean | `true` |\n| `markers` | Whether to show square markers at each point vertex | boolean | `false` |\n| `showMousePosition` | Whether to show the position of the mouse relative to the blob | boolean | `false` |\n\n## Interactive Example\n\n[View Interactive Example]()\n"}}},argTypes:{color:{name:"color",control:"color",defaultValue:"#2f4acf",description:"Color of the blob component",type:"string"},radius:{name:"radius",control:{type:"range",min:1,max:window.innerWidth/4,step:10},defaultValue:128,description:"Radius of the blob component",type:"number"},sensitivity:{name:"sensitivity",control:{type:"range",min:.1,max:10,step:.1},defaultValue:.5,description:"Sensitivity of the blob component to mouse jitter",type:"number"},friction:{name:"friction",control:{type:"range",min:0,max:.9,step:1e-4},defaultValue:.0095,description:"Coefficient of friction",type:"number"},elasticity:{name:"elasticity",control:{type:"range",min:0,max:.002,step:1e-4},defaultValue:.001,description:"Elasticity of the blob",type:"number"},acceleration:{name:"acceleration",control:{type:"range",min:-10,max:10,step:.5},defaultValue:DEFAULT_INITIAL_POINT_ACCELERATION,description:"The acceleration of each point",type:"number"},radial:{name:"radial",control:{type:"range",min:-10,max:10,step:.5},defaultValue:.1,description:"The radial effect constant",type:"number"},points:{name:"points",control:{type:"range",min:3,max:300,step:1},defaultValue:32,description:"The number of points used to construct the blob",type:"number"},speed:{name:"speed",control:{type:"range",min:1,max:10,step:.25},defaultValue:.5,description:"Speed of continuious point motion",type:"number"},height:{name:"height",control:{type:"range",min:1,max:window.innerHeight,step:5},defaultValue:window.innerHeight-250,description:"Canvas Height",type:"number"},smoothing:{name:"smoothing",control:"boolean",defaultValue:!0,description:"Smoothing between points",type:"boolean"},markers:{name:"markers",control:"boolean",defaultValue:!1,description:"Show markers at each point",type:"boolean"},showMousePosition:{name:"showMousePosition",control:"boolean",defaultValue:!1,description:"Show the position of the mouse relative to the blob",type:"boolean"}}};var Blob_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(blob_component,Object.assign({},args))};Blob_stories_Template.displayName="Template";var Blob_stories_blob=Blob_stories_Template.bind({});Blob_stories_blob.parameters=Object.assign({storySource:{source:"(args: BlobInterface) => (\n  <Blob {...args} />\n)"}},Blob_stories_blob.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);