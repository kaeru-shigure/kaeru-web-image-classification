/*! For license information please see 809.aa50c46e.js.LICENSE.txt */
"use strict";(self.webpackChunkkaeru_web_image_classification=self.webpackChunkkaeru_web_image_classification||[]).push([["809"],{474:function(e,t,n){e.exports=n.p+"assets/3c4d1b9b0b91b039.module.wasm"},412:function(e,t,n){n.d(t,{_:function(){return i}});function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},912:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Bc:function(){return Iw},OB:function(){return ce},es:function(){return nt}});var yw=Object.create,yo=Object.defineProperty,xw=Object.getOwnPropertyDescriptor,ww=Object.getOwnPropertyNames,vw=Object.getPrototypeOf,Tw=Object.prototype.hasOwnProperty,$a=(e=>"u">typeof require?require:"u">typeof Proxy?new Proxy(e,{get:(e,t)=>("u">typeof require?require:e)[t]}):e)(function(e){if("u">typeof require)return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),C=(e,t)=>()=>(e&&(t=e(e=0)),t),tt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),un=(e,t)=>{for(var n in t)yo(e,n,{get:t[n],enumerable:!0})},Gl=(e,t,n,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of ww(t))Tw.call(e,o)||o===n||yo(e,o,{get:()=>t[o],enumerable:!(i=xw(t,o))||i.enumerable});return e},ln=(e,t,n)=>(n=null!=e?yw(vw(e)):{},Gl(!t&&e&&e.__esModule?n:yo(n,"default",{value:e,enumerable:!0}),e)),Pn=e=>Gl(yo({},"__esModule",{value:!0}),e),xo,Lr,vr,_w,wo,vo=C(()=>{xo=new Map,Lr=[],vr=(e,t,n)=>{if(t&&"function"==typeof t.init&&"function"==typeof t.createInferenceSessionHandler){let i=xo.get(e);if(void 0===i)xo.set(e,{backend:t,priority:n});else{if(i.priority>n)return;if(i.priority===n&&i.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=Lr.indexOf(e);-1!==t&&Lr.splice(t,1);for(let t=0;t<Lr.length;t++)if(xo.get(Lr[t]).priority<=n){Lr.splice(t,0,e);return}Lr.push(e)}return}throw TypeError("not a valid backend")},_w=async e=>{let t=xo.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},wo=async e=>{let t=e.executionProviders||[],n=t.map(e=>"string"==typeof e?e:e.name),i=0===n.length?Lr:n,o,a=[],s=new Set;for(let e of i){let t=await _w(e);"string"==typeof t?a.push({name:e,err:t}):(o||(o=t),o===t&&s.add(e))}if(!o)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(", ")}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let u=t.filter(e=>s.has("string"==typeof e?e:e.name));return[o,new Proxy(e,{get:(e,t)=>"executionProviders"===t?u:Reflect.get(e,t)})]}}),Ul=C(()=>{vo()}),Wl,Hl=C(()=>{Wl="1.20.1"}),ql,St,Aa=C(()=>{Hl(),ql="warning",Object.defineProperty(St={wasm:{},webgl:{},webgpu:{},versions:{common:Wl},set logLevel(r){if(void 0!==r){if("string"!=typeof r||-1===["verbose","info","warning","error","fatal"].indexOf(r))throw Error(`Unsupported logging level: ${r}`);ql=r}},get logLevel(){return ql}},"logLevel",{enumerable:!0})}),ce,jl=C(()=>{Aa(),ce=St}),Kl,Xl,Zl=C(()=>{Kl=(e,t)=>{let n="u">typeof document?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let i=n.getContext("2d");if(null!=i){let o,a;t?.tensorLayout!==void 0&&"NHWC"===t.tensorLayout?(o=e.dims[2],a=e.dims[3]):(o=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,d;void 0===u||void 0===u.mean?l=[255,255,255,255]:"number"==typeof u.mean?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],void 0!==u.mean[3]&&(l[3]=u.mean[3])),void 0===u||void 0===u.bias?d=[0,0,0,0]:"number"==typeof u.bias?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],void 0!==u.bias[3]&&(d[3]=u.bias[3]));let p=a*o,c=0,h=p,f=2*p,m=-1;"RGBA"===s?(c=0,h=p,f=2*p,m=3*p):"RGB"===s?(c=0,h=p,f=2*p):"RBG"===s&&(c=0,f=p,h=2*p);for(let t=0;t<a;t++)for(let n=0;n<o;n++){let o=(e.data[c++]-d[0])*l[0],a=(e.data[h++]-d[1])*l[1],s=(e.data[f++]-d[2])*l[2],u=-1===m?255:(e.data[m++]-d[3])*l[3];i.fillStyle="rgba("+o+","+a+","+s+","+u+")",i.fillRect(n,t,1,1)}if("toDataURL"in n)return n.toDataURL();throw Error("toDataURL is not supported")}throw Error("Can not access image data")},Xl=(e,t)=>{let n="u">typeof document?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(null!=n){let o,a,s;t?.tensorLayout!==void 0&&"NHWC"===t.tensorLayout?(o=e.dims[2],a=e.dims[1],s=e.dims[3]):(o=e.dims[3],a=e.dims[2],s=e.dims[1]);let u=void 0!==t&&void 0!==t.format?t.format:"RGB",l=t?.norm,d,p;void 0===l||void 0===l.mean?d=[255,255,255,255]:"number"==typeof l.mean?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],void 0!==l.mean[3]&&(d[3]=l.mean[3])),void 0===l||void 0===l.bias?p=[0,0,0,0]:"number"==typeof l.bias?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],void 0!==l.bias[3]&&(p[3]=l.bias[3]));let c=a*o;if(void 0!==t&&(void 0!==t.format&&4===s&&"RGBA"!==t.format||3===s&&"RGB"!==t.format&&"BGR"!==t.format))throw Error("Tensor format doesn't match input tensor dims");let h=4,f=0,m=1,g=2,y=3,b=0,_=c,v=2*c,x=-1;"RGBA"===u?(b=0,_=c,v=2*c,x=3*c):"RGB"===u?(b=0,_=c,v=2*c):"RBG"===u&&(b=0,v=c,_=2*c),i=n.createImageData(o,a);for(let t=0;t<a*o;f+=h,m+=h,g+=h,y+=h,t++)i.data[f]=(e.data[b++]-p[0])*d[0],i.data[m]=(e.data[_++]-p[1])*d[1],i.data[g]=(e.data[v++]-p[2])*d[2],i.data[y]=-1===x?255:(e.data[x++]-p[3])*d[3]}else throw Error("Can not access image data");return i}}),Pa,Yl,Jl,Ql,ec,tc,rc=C(()=>{To(),Pa=(e,t)=>{if(void 0===e)throw Error("Image buffer must be defined");if(void 0===t.height||void 0===t.width)throw Error("Image height and width must be defined");if("NHWC"===t.tensorLayout)throw Error("NHWC Tensor layout is not supported yet");let{height:n,width:i}=t,o=t.norm??{mean:255,bias:0},a,s;a="number"==typeof o.mean?[o.mean,o.mean,o.mean,o.mean]:[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],s="number"==typeof o.bias?[o.bias,o.bias,o.bias,o.bias]:[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let u=void 0!==t.format?t.format:"RGBA",l=void 0!==t.tensorFormat&&void 0!==t.tensorFormat?t.tensorFormat:"RGB",d=n*i,p=new Float32Array("RGBA"===l?4*d:3*d),c=4,h=0,f=1,m=2,g=3,y=0,b=d,_=2*d,v=-1;"RGB"===u&&(c=3,h=0,f=1,m=2,g=-1),"RGBA"===l?v=3*d:"RBG"===l?(y=0,_=d,b=2*d):"BGR"===l&&(_=0,b=d,y=2*d);for(let t=0;t<d;t++,h+=c,m+=c,f+=c,g+=c)p[y++]=(e[h]+s[0])/a[0],p[b++]=(e[f]+s[1])/a[1],p[_++]=(e[m]+s[2])/a[2],-1!==v&&-1!==g&&(p[v++]=(e[g]+s[3])/a[3]);return"RGBA"===l?new ft("float32",p,[1,4,n,i]):new ft("float32",p,[1,3,n,i])},Yl=async(e,t)=>{let n="u">typeof HTMLImageElement&&e instanceof HTMLImageElement,i="u">typeof ImageData&&e instanceof ImageData,o="u">typeof ImageBitmap&&e instanceof ImageBitmap,a="string"==typeof e,s,u=t??{},l=()=>{if("u">typeof document)return document.createElement("canvas");if("u">typeof OffscreenCanvas)return new OffscreenCanvas(1,1);throw Error("Canvas is not supported")},d=e=>"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext("2d"):null;if(n){let n=l();n.width=e.width,n.height=e.height;let i=d(n);if(null!=i){let n=e.height,o=e.width;if(void 0!==t&&void 0!==t.resizedHeight&&void 0!==t.resizedWidth&&(n=t.resizedHeight,o=t.resizedWidth),void 0!==t){if(u=t,void 0!==t.tensorFormat)throw Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=n,u.width=o}else u.tensorFormat="RGBA",u.height=n,u.width=o;i.drawImage(e,0,0),s=i.getImageData(0,0,o,n).data}else throw Error("Can not access image data")}else if(i){let n,i;if(void 0!==t&&void 0!==t.resizedWidth&&void 0!==t.resizedHeight?(n=t.resizedHeight,i=t.resizedWidth):(n=e.height,i=e.width),void 0!==t&&(u=t),u.format="RGBA",u.height=n,u.width=i,void 0!==t){let t=l();t.width=i,t.height=n;let o=d(t);if(null!=o)o.putImageData(e,0,0),s=o.getImageData(0,0,i,n).data;else throw Error("Can not access image data")}else s=e.data}else if(o){if(void 0===t)throw Error("Please provide image config with format for Imagebitmap");let n=l();n.width=e.width,n.height=e.height;let i=d(n);if(null!=i){let t=e.height,n=e.width;return i.drawImage(e,0,0,n,t),s=i.getImageData(0,0,n,t).data,u.height=t,u.width=n,Pa(s,u)}throw Error("Can not access image data")}else{if(a)return new Promise((t,n)=>{let i=l(),o=d(i);if(!e||!o)return n();let a=new Image;a.crossOrigin="Anonymous",a.src=e,a.onload=()=>{i.width=a.width,i.height=a.height,o.drawImage(a,0,0,i.width,i.height);let e=o.getImageData(0,0,i.width,i.height);u.height=i.height,u.width=i.width,t(Pa(e.data,u))}});throw Error("Input data provided is not supported - aborted tensor creation")}if(void 0!==s)return Pa(s,u);throw Error("Input data provided is not supported - aborted tensor creation")},Jl=(e,t)=>{let{width:n,height:i,download:o,dispose:a}=t;return new ft({location:"texture",type:"float32",texture:e,dims:[1,i,n,4],download:o,dispose:a})},Ql=(e,t)=>{let{dataType:n,dims:i,download:o,dispose:a}=t;return new ft({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:i,download:o,dispose:a})},ec=(e,t)=>{let{dataType:n,dims:i,download:o,dispose:a}=t;return new ft({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:i,download:o,dispose:a})},tc=(e,t,n)=>new ft({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Rr,On,nc,oc,ic=C(()=>{Rr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),On=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),nc=!1,oc=()=>{if(!nc){nc=!0;let e="u">typeof BigInt64Array&&BigInt64Array.from,t="u">typeof BigUint64Array&&BigUint64Array.from,n="u">typeof Float16Array&&Float16Array.from;e&&(Rr.set("int64",BigInt64Array),On.set(BigInt64Array,"int64")),t&&(Rr.set("uint64",BigUint64Array),On.set(BigUint64Array,"uint64")),n?(Rr.set("float16",Float16Array),On.set(Float16Array,"float16")):Rr.set("float16",Uint16Array)}}}),ac,sc,uc=C(()=>{To(),ac=e=>{let t=1;for(let n=0;n<e.length;n++){let i=e[n];if("number"!=typeof i||!Number.isSafeInteger(i))throw TypeError(`dims[${n}] must be an integer, got: ${i}`);if(i<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${i}`);t*=i}return t},sc=(e,t)=>{switch(e.location){case"cpu":return new ft(e.type,e.data,t);case"cpu-pinned":return new ft({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ft({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ft({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ft({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ft,To=C(()=>{Zl(),rc(),ic(),uc(),ft=class{constructor(e,t,n){let i,o;if(oc(),"object"==typeof e&&"location"in e)switch(this.dataLocation=e.location,i=e.type,o=e.dims,e.location){case"cpu-pinned":{let t=Rr.get(i);if(!t)throw TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case"texture":if("float32"!==i)throw TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case"gpu-buffer":if("float32"!==i&&"float16"!==i&&"int32"!==i&&"int64"!==i&&"uint32"!==i&&"uint8"!==i&&"bool"!==i&&"uint4"!==i&&"int4"!==i)throw TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case"ml-tensor":if("float32"!==i&&"float16"!==i&&"int32"!==i&&"int64"!==i&&"uint32"!==i&&"uint64"!==i&&"int8"!==i&&"uint8"!==i&&"bool"!==i)throw TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,s;if("string"==typeof e){if(i=e,s=n,"string"===e){if(!Array.isArray(t))throw TypeError("A string tensor's data must be a string array.");a=t}else{let n=Rr.get(e);if(void 0===n)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if("float16"===e&&n===Uint16Array||"uint4"===e||"int4"===e)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a="uint64"===e||"int64"===e?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray){if("uint8"===e)a=Uint8Array.from(t);else throw TypeError("A Uint8ClampedArray tensor's data must be type of uint8")}else throw TypeError(`A ${i} tensor's data must be type of ${n}`)}}else if(s=t,Array.isArray(e)){if(0===e.length)throw TypeError("Tensor type cannot be inferred from an empty array.");let t=typeof e[0];if("string"===t)i="string",a=e;else if("boolean"===t)i="bool",a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(e);else{let t=On.get(e.constructor);if(void 0===t)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=t,a=e}if(void 0===s)s=[a.length];else if(!Array.isArray(s))throw TypeError("A tensor's dims must be a number array");o=s,this.cpuData=a,this.dataLocation="cpu"}let a=ac(o);if(this.cpuData&&a!==this.cpuData.length&&!(("uint4"===i||"int4"===i)&&Math.ceil(a/2)===this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=o,this.size=a}static async fromImage(e,t){return Yl(e,t)}static fromTexture(e,t){return Jl(e,t)}static fromGpuBuffer(e,t){return Ql(e,t)}static fromMLTensor(e,t){return ec(e,t)}static fromPinnedBuffer(e,t,n){return tc(e,t,n)}toDataURL(e){return Kl(this,e)}toImageData(e){return Xl(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":if(!this.downloader)throw Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if("none"===this.dataLocation)throw Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error("Cannot reshape a tensor that owns GPU resource.");return sc(this,e)}}}),nt,_o=C(()=>{To(),nt=ft}),Io,lc,$t,wt,Oa=C(()=>{Aa(),Io=(e,t)=>{(typeof St.trace>"u"?St.wasm.trace:St.trace)&&console.timeStamp(`${e}::ORT::${t}`)},lc=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let o=0;o<n.length;o++){if(i&&!n[o].includes("TRACE_FUNC")){let i=`FUNC_${e}::${n[o].trim().split(" ")[1]}`;t&&(i+=`::${t}`),Io("CPU",i);return}n[o].includes("TRACE_FUNC")&&(i=!0)}},$t=e=>{(typeof St.trace>"u"?St.wasm.trace:St.trace)&&lc("BEGIN",e)},wt=e=>{(typeof St.trace>"u"?St.wasm.trace:St.trace)&&lc("END",e)}}),So,cc=C(()=>{vo(),_o(),Oa(),So=class e{constructor(e){this.handler=e}async run(e,t,n){$t();let i={},o={};if("object"!=typeof e||null===e||e instanceof nt||Array.isArray(e))throw TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if("object"==typeof t){if(null===t)throw TypeError("Unexpected argument[1]: cannot be null.");if(t instanceof nt)throw TypeError("'fetches' cannot be a Tensor");if(Array.isArray(t)){if(0===t.length)throw TypeError("'fetches' cannot be an empty array.");for(let e of(a=!1,t)){if("string"!=typeof e)throw TypeError("'fetches' must be a string array or an object.");if(-1===this.outputNames.indexOf(e))throw RangeError(`'fetches' contains invalid output name: ${e}.`);i[e]=null}if("object"==typeof n&&null!==n)o=n;else if("u">typeof n)throw TypeError("'options' must be an object.")}else{let e=!1,s=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(-1!==s.indexOf(n)){let o=t[n];(null===o||o instanceof nt)&&(e=!0,a=!1,i[n]=o)}if(e){if("object"==typeof n&&null!==n)o=n;else if("u">typeof n)throw TypeError("'options' must be an object.")}else o=t}}else if("u">typeof t)throw TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let t of this.inputNames)if(typeof e[t]>"u")throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)i[e]=null;let s=await this.handler.run(e,i,o),u={};for(let e in s)if(Object.hasOwnProperty.call(s,e)){let t=s[e];t instanceof nt?u[e]=t:u[e]=new nt(t.type,t.data,t.dims)}return wt(),u}async release(){return this.handler.dispose()}static async create(t,n,i,o){$t();let a,s={};if("string"==typeof t){if(a=t,"object"==typeof n&&null!==n)s=n;else if("u">typeof n)throw TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,"object"==typeof n&&null!==n)s=n;else if("u">typeof n)throw TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||"u">typeof SharedArrayBuffer&&t instanceof SharedArrayBuffer){let e=t,u=0,l=t.byteLength;if("object"==typeof n&&null!==n)s=n;else if("number"==typeof n){if(!Number.isSafeInteger(u=n))throw RangeError("'byteOffset' must be an integer.");if(u<0||u>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(l=t.byteLength-u,"number"==typeof i){if(!Number.isSafeInteger(l=i))throw RangeError("'byteLength' must be an integer.");if(l<=0||u+l>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-u}].`);if("object"==typeof o&&null!==o)s=o;else if("u">typeof o)throw TypeError("'options' must be an object.")}else if("u">typeof i)throw TypeError("'byteLength' must be a number.")}else if("u">typeof n)throw TypeError("'options' must be an object.");a=new Uint8Array(e,u,l)}else throw TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await wo(s),d=await u.createInferenceSessionHandler(a,l);return wt(),new e(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Iw,fc=C(()=>{cc(),Iw=So}),dc=C(()=>{}),pc=C(()=>{}),mc=C(()=>{}),hc=C(()=>{}),Sw,$o,gc=C(()=>{vo(),_o(),Sw="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",$o=class e{constructor(e,t,n){this.handler=e,this.hasOptimizerModel=t,this.hasEvalModel=n}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw Error("This training session has no evalModel loaded.")}static async create(t,n){let i=t.evalModel||"",o=t.optimizerModel||"",a=n||{},[s,u]=await wo(a);if(s.createTrainingSessionHandler)return new e(await s.createTrainingSessionHandler(t.checkpointState,t.trainModel,i,o,u),!!t.optimizerModel,!!t.evalModel);throw Error(Sw)}typeNarrowingForRunStep(e,t,n,i,o){let a={},s={};if("object"!=typeof n||null===n||n instanceof nt||Array.isArray(n))throw TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let u=!0;if("object"==typeof i){if(null===i)throw TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof nt)throw TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(0===i.length)throw TypeError("'fetches' cannot be an empty array.");for(let e of(u=!1,i)){if("string"!=typeof e)throw TypeError("'fetches' must be a string array or an object.");if(-1===t.indexOf(e))throw RangeError(`'fetches' contains invalid output name: ${e}.`);a[e]=null}if("object"==typeof o&&null!==o)s=o;else if("u">typeof o)throw TypeError("'options' must be an object.")}else{let e=!1,n=Object.getOwnPropertyNames(i);for(let o of t)if(-1!==n.indexOf(o)){let t=i[o];(null===t||t instanceof nt)&&(e=!0,u=!1,a[o]=t)}if(e){if("object"==typeof o&&null!==o)s=o;else if("u">typeof o)throw TypeError("'options' must be an object.")}else s=i}}else if("u">typeof i)throw TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let t of e)if(typeof n[t]>"u")throw Error(`input '${t}' is missing in 'feeds'.`);if(u)for(let e of t)a[e]=null;return[a,s]}convertHandlerReturnTypeToMapOfTensors(e){let t={};for(let n in e)if(Object.hasOwnProperty.call(e,n)){let i=e[n];i instanceof nt?t[n]=i:t[n]=new nt(i.type,i.data,i.dims)}return t}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(e,t,n){let[i,o]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,e,t,n),a=await this.handler.runTrainStep(e,i,o);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(e){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(e||{});else throw Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(e,t,n){if(this.hasEvalModel){let[i,o]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,e,t,n),a=await this.handler.runEvalStep(e,i,o);return this.convertHandlerReturnTypeToMapOfTensors(a)}throw Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(e=!0){return this.handler.getParametersSize(e)}async loadParametersBuffer(e,t=!0){let n=await this.getParametersSize(t);if(e.length!==4*n)throw Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(e,t)}async getContiguousParameters(e=!0){return this.handler.getContiguousParameters(e)}async release(){return this.handler.dispose()}}}),$w,bc=C(()=>{gc(),$w=$o}),Ea={};un(Ea,{InferenceSession:()=>Iw,TRACE:()=>Io,TRACE_FUNC_BEGIN:()=>$t,TRACE_FUNC_END:()=>wt,Tensor:()=>nt,TrainingSession:()=>$w,env:()=>ce,registerBackend:()=>vr});var mt=C(()=>{Ul(),jl(),fc(),_o(),dc(),pc(),Oa(),mc(),hc(),bc()});function Tr(e,t,n,i){if(void 0===t)return Pw(e);if(void 0===n)Ao(e,t,1);else if("number"==typeof n&&void 0===i)Ao(e,t,n);else if("string"==typeof n&&void 0===i)Ao(e,n,1,t);else if("string"==typeof n&&"number"==typeof i)Ao(e,n,i,t);else throw TypeError("input is valid")}function Pw(e){return{verbose:Tr.verbose.bind(null,e),info:Tr.info.bind(null,e),warning:Tr.warning.bind(null,e),error:Tr.error.bind(null,e),fatal:Tr.fatal.bind(null,e)}}function Ao(e,t,n,i){let o=En[i||""]||En[""];xc[e]<xc[o.minimalSeverity]||(o.logDateTime&&(t=`${new Date().toISOString()}|${t}`),o.logSourceLocation,Aw[o.provider].log(e,t,i))}var Ca,ka,xc,Aw,wc,En,Ne,Oo,Eo,Co,Po,kt=C(()=>{Ca=class{log(e,t,n){}},ka=class{log(e,t,n){console.log(`${this.color(e)} ${n?"\x1b[35m"+n+"\x1b[0m ":""}${t}`)}color(e){switch(e){case"verbose":return"\x1b[34;40mv\x1b[0m";case"info":return"\x1b[32mi\x1b[0m";case"warning":return"\x1b[30;43mw\x1b[0m";case"error":return"\x1b[31;40me\x1b[0m";case"fatal":return"\x1b[101mf\x1b[0m";default:throw Error(`unsupported severity: ${e}`)}}},xc={verbose:1e3,info:2e3,warning:4e3,error:5e3,fatal:6e3},Aw={none:new Ca,console:new ka},En={"":wc={provider:"console",minimalSeverity:"warning",logDateTime:!0,logSourceLocation:!1}},(e=>{function t(t,n){e("verbose",t,n)}function n(t,n){e("info",t,n)}function i(t,n){e("warning",t,n)}function o(t,n){e("error",t,n)}function a(t,n){e("fatal",t,n)}function s(e){En={},u("",e||{})}function u(e,t){if("*"===e)s(t);else{let n=En[e]||wc;En[e]={provider:t.provider||n.provider,minimalSeverity:t.minimalSeverity||n.minimalSeverity,logDateTime:void 0===t.logDateTime?n.logDateTime:t.logDateTime,logSourceLocation:void 0===t.logSourceLocation?n.logSourceLocation:t.logSourceLocation}}}function l(e){let t={};e.logLevel&&(t.minimalSeverity=e.logLevel),u("",t)}e.verbose=t,e.info=n,e.warning=i,e.error=o,e.fatal=a,e.reset=s,e.set=u,e.setWithEnv=l})(Tr||={}),Ne=Tr,Oo=class{constructor(e,t,n,i,o,a){this.category=e,this.name=t,this.startTime=n,this.endCallback=i,this.timer=o,this.ctx=a}async end(){return this.endCallback(this)}async checkTimer(){if(void 0===this.ctx||void 0===this.timer)throw Error("No webgl timer found");return this.ctx.endTimer(),this.ctx.waitForQueryAndGetTime(this.timer)}},Eo=class{constructor(e,t,n,i){this.category=e,this.name=t,this.startTime=n,this.endTime=i}},Co=class{constructor(e,t,n){this._started=!1,this._flushPointer=0,this._started=!1,this._maxNumberEvents=void 0===e?1e4:e,this._flushBatchSize=void 0===t?10:t,this._flushIntervalInMilliseconds=void 0===n?5e3:n}static create(e){return void 0===e?new this:new this(e.maxNumberEvents,e.flushBatchSize,e.flushIntervalInMilliseconds)}start(){this._started=!0,this._timingEvents=[],this._flushTime=Po(),this._flushPointer=0}stop(){for(this._started=!1;this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer])}event(e,t,n,i){let o=this._started?this.begin(e,t,i):void 0,a=!1,s=n();if(s&&"function"==typeof s.then)return a=!0,new Promise((e,t)=>{s.then(async t=>{o&&await o.end(),e(t)},async e=>{o&&await o.end(),t(e)})});if(!a&&o){let e=o.end();if(e&&"function"==typeof e.then)return new Promise((t,n)=>{e.then(()=>{t(s)},e=>{n(e)})})}return s}begin(e,t,n){if(!this._started)throw Error("profiler is not started yet");if(void 0!==n)return new Oo(e,t,0,async e=>this.end(e),n.beginTimer(),n);{let n=Po();return this.flush(n),new Oo(e,t,n,e=>this.endSync(e))}}async end(e){let t=await e.checkTimer();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Eo(e.category,e.name,e.startTime,t)),this.flush(t))}endSync(e){let t=Po();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Eo(e.category,e.name,e.startTime,t)),this.flush(t))}logOneEvent(e){Ne.verbose(`Profiler.${e.category}`,`${(e.endTime-e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`)}flush(e){if(this._timingEvents.length-this._flushPointer>=this._flushBatchSize||e-this._flushTime>=this._flushIntervalInMilliseconds){for(let e=this._flushPointer;this._flushPointer<e+this._flushBatchSize&&this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer]);this._flushTime=Po()}}get started(){return this._started}},Po="u">typeof performance&&performance.now?()=>performance.now():Date.now});function vc(e,t,n){for(let i of n){let n=i[0],o=i[1],a=i[2],s=i[3],u=i[4];if(e.opType===n){for(let e of t)if((e.domain===o||"ai.onnx"===e.domain&&""===o)&&Ow(e.version,a))return{opImpl:s,opInit:u}}}throw TypeError(`cannot resolve operator '${e.opType}' with opsets: ${t.map(e=>`${e.domain||"ai.onnx"} v${e.version}`).join(", ")}`)}function Ow(e,t){if(t.endsWith("+")){let n=Number.parseInt(t.substring(0,t.length-1),10);return!isNaN(n)&&n<=e}if(2!==t.split("-").length)return Number.parseInt(t,10)===e;{let n=t.split("-"),i=Number.parseInt(n[0],10),o=Number.parseInt(n[1],10);return!isNaN(i)&&!isNaN(o)&&i<=e&&e<=o}}var Tc=C(()=>{}),_c=tt(e=>{e.__esModule=!0;var t=function(){function e(t){if(!t)throw TypeError("Invalid argument; `value` has no value.");this.value=e.EMPTY,t&&e.isGuid(t)&&(this.value=t)}return e.isGuid=function(t){var n=t.toString();return t&&(t instanceof e||e.validator.test(n))},e.create=function(){return new e([e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join("-"))},e.createEmpty=function(){return new e("emptyguid")},e.parse=function(t){return new e(t)},e.raw=function(){return[e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join("-")},e.gen=function(e){for(var t="",n=0;n<e;n++)t+=((1+Math.random())*65536|0).toString(16).substring(1);return t},e.prototype.equals=function(t){return e.isGuid(t)&&this.value===t.toString()},e.prototype.isEmpty=function(){return this.value===e.EMPTY},e.prototype.toString=function(){return this.value},e.prototype.toJSON=function(){return{value:this.value}},e.validator=RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),e.EMPTY="00000000-0000-0000-0000-000000000000",e}();e.Guid=t});function Fe(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function ht(e){return(e&&e.__isLong__)===!0}function Ic(e){var t=Math.clz32(e&-e);return e?31-t:t}function zr(e,t){var n,i,o;return t?(e>>>=0,(o=0<=e&&e<256)&&(i=$c[e])?i:(n=Re(e,0,!0),o&&($c[e]=n),n)):(e|=0,(o=-128<=e&&e<128)&&(i=Sc[e])?i:(n=Re(e,e<0?-1:0,!1),o&&(Sc[e]=n),n))}function Bt(e,t){if(isNaN(e))return t?dr:Vt;if(t){if(e<0)return dr;if(e>=Ec)return Dc}else{if(e<=-Pc)return vt;if(e+1>=Pc)return kc}return e<0?Bt(-e,t).neg():Re(e%fn|0,e/fn|0,t)}function Re(e,t,n){return new Fe(e,t,n)}function La(e,t,n){if(0===e.length)throw Error("empty string");if("number"==typeof t?(n=t,t=!1):t=!!t,"NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return t?dr:Vt;if((n=n||10)<2||36<n)throw RangeError("radix");if((i=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===i)return La(e.substring(1),t,n).neg();for(var i,o=Bt(ko(n,8)),a=Vt,s=0;s<e.length;s+=8){var u=Math.min(8,e.length-s),l=parseInt(e.substring(s,s+u),n);if(u<8){var d=Bt(ko(n,u));a=a.mul(d).add(Bt(l))}else a=(a=a.mul(o)).add(Bt(l))}return a.unsigned=t,a}function Gt(e,t){return"number"==typeof e?Bt(e,t):"string"==typeof e?La(e,t):Re(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}var Dt,Sc,$c,ko,Ac,Cw,fn,Ec,Pc,Oc,Vt,dr,cn,Cc,Ba,kc,Dc,vt,W,pr,Ra=C(()=>{Dt=null;try{Dt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}Fe.prototype.__isLong__,Object.defineProperty(Fe.prototype,"__isLong__",{value:!0}),Fe.isLong=ht,Sc={},$c={},Fe.fromInt=zr,Fe.fromNumber=Bt,Fe.fromBits=Re,ko=Math.pow,Fe.fromString=La,Fe.fromValue=Gt,Cw=0x1000000,Pc=(Ec=(fn=(Ac=65536)*Ac)*fn)/2,Oc=zr(Cw),Vt=zr(0),Fe.ZERO=Vt,dr=zr(0,!0),Fe.UZERO=dr,cn=zr(1),Fe.ONE=cn,Cc=zr(1,!0),Fe.UONE=Cc,Ba=zr(-1),Fe.NEG_ONE=Ba,kc=Re(-1,0x7fffffff,!1),Fe.MAX_VALUE=kc,Dc=Re(-1,-1,!0),Fe.MAX_UNSIGNED_VALUE=Dc,vt=Re(0,-0x80000000,!1),Fe.MIN_VALUE=vt,(W=Fe.prototype).toInt=function(){return this.unsigned?this.low>>>0:this.low},W.toNumber=function(){return this.unsigned?(this.high>>>0)*fn+(this.low>>>0):this.high*fn+(this.low>>>0)},W.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(!this.eq(vt))return"-"+this.neg().toString(e);else{var t=Bt(e),n=this.div(t),i=n.mul(t).sub(this);return n.toString(e)+i.toInt().toString(e)}}for(var o=Bt(ko(e,6),this.unsigned),a=this,s="";;){var u=a.div(o),l=(a.sub(u.mul(o)).toInt()>>>0).toString(e);if((a=u).isZero())return l+s;for(;l.length<6;)l="0"+l;s=""+l+s}},W.getHighBits=function(){return this.high},W.getHighBitsUnsigned=function(){return this.high>>>0},W.getLowBits=function(){return this.low},W.getLowBitsUnsigned=function(){return this.low>>>0},W.getNumBitsAbs=function(){if(this.isNegative())return this.eq(vt)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&!(e&1<<t);t--);return 0!=this.high?t+33:t+1},W.isZero=function(){return 0===this.high&&0===this.low},W.eqz=W.isZero,W.isNegative=function(){return!this.unsigned&&this.high<0},W.isPositive=function(){return this.unsigned||this.high>=0},W.isOdd=function(){return(1&this.low)==1},W.isEven=function(){return(1&this.low)==0},W.equals=function(e){return ht(e)||(e=Gt(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low},W.eq=W.equals,W.notEquals=function(e){return!this.eq(e)},W.neq=W.notEquals,W.ne=W.notEquals,W.lessThan=function(e){return 0>this.comp(e)},W.lt=W.lessThan,W.lessThanOrEqual=function(e){return 0>=this.comp(e)},W.lte=W.lessThanOrEqual,W.le=W.lessThanOrEqual,W.greaterThan=function(e){return this.comp(e)>0},W.gt=W.greaterThan,W.greaterThanOrEqual=function(e){return this.comp(e)>=0},W.gte=W.greaterThanOrEqual,W.ge=W.greaterThanOrEqual,W.compare=function(e){if(ht(e)||(e=Gt(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},W.comp=W.compare,W.negate=function(){return!this.unsigned&&this.eq(vt)?vt:this.not().add(cn)},W.neg=W.negate,W.add=function(e){ht(e)||(e=Gt(e));var t,n=this.high>>>16,i=65535&this.high,o=this.low>>>16,a=65535&this.low,s=e.high>>>16,u=65535&e.high,l=e.low>>>16,d=65535&e.low,p=0,c=0,h=0;return t=0+(a+d),h+=t>>>16,t&=65535,h+=o+l,c+=h>>>16,h&=65535,c+=i+u,p+=c>>>16,c&=65535,p+=n+s,Re(h<<16|t,(p&=65535)<<16|c,this.unsigned)},W.subtract=function(e){return ht(e)||(e=Gt(e)),this.add(e.neg())},W.sub=W.subtract,W.multiply=function(e){if(this.isZero())return this;if(ht(e)||(e=Gt(e)),Dt)return Re(Dt.mul(this.low,this.high,e.low,e.high),Dt.get_high(),this.unsigned);if(e.isZero())return this.unsigned?dr:Vt;if(this.eq(vt))return e.isOdd()?vt:Vt;if(e.eq(vt))return this.isOdd()?vt:Vt;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Oc)&&e.lt(Oc))return Bt(this.toNumber()*e.toNumber(),this.unsigned);var t,n=this.high>>>16,i=65535&this.high,o=this.low>>>16,a=65535&this.low,s=e.high>>>16,u=65535&e.high,l=e.low>>>16,d=65535&e.low,p=0,c=0,h=0;return t=0+a*d,h+=t>>>16,t&=65535,h+=o*d,c+=h>>>16,h&=65535,h+=a*l,c+=h>>>16,h&=65535,c+=i*d,p+=c>>>16,c&=65535,c+=o*l,p+=c>>>16,c&=65535,c+=a*u,p+=c>>>16,c&=65535,p+=n*d+i*l+o*u+a*s,Re(h<<16|t,(p&=65535)<<16|c,this.unsigned)},W.mul=W.multiply,W.divide=function(e){if(ht(e)||(e=Gt(e)),e.isZero())throw Error("division by zero");if(Dt){var t,n,i;if(!this.unsigned&&-0x80000000===this.high&&-1===e.low&&-1===e.high)return this;return Re((this.unsigned?Dt.div_u:Dt.div_s)(this.low,this.high,e.low,e.high),Dt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?dr:Vt;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return dr;if(e.gt(this.shru(1)))return Cc;i=dr}else{if(this.eq(vt))return e.eq(cn)||e.eq(Ba)?vt:e.eq(vt)?cn:(t=this.shr(1).div(e).shl(1)).eq(Vt)?e.isNegative()?cn:Ba:(n=this.sub(e.mul(t)),i=t.add(n.div(e)));if(e.eq(vt))return this.unsigned?dr:Vt;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();i=Vt}for(n=this;n.gte(e);){t=Math.max(1,Math.floor(n.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(t)/Math.LN2),a=o<=48?1:ko(2,o-48),s=Bt(t),u=s.mul(e);u.isNegative()||u.gt(n);)t-=a,u=(s=Bt(t,this.unsigned)).mul(e);s.isZero()&&(s=cn),i=i.add(s),n=n.sub(u)}return i},W.div=W.divide,W.modulo=function(e){return(ht(e)||(e=Gt(e)),Dt)?Re((this.unsigned?Dt.rem_u:Dt.rem_s)(this.low,this.high,e.low,e.high),Dt.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},W.mod=W.modulo,W.rem=W.modulo,W.not=function(){return Re(~this.low,~this.high,this.unsigned)},W.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},W.clz=W.countLeadingZeros,W.countTrailingZeros=function(){return this.low?Ic(this.low):Ic(this.high)+32},W.ctz=W.countTrailingZeros,W.and=function(e){return ht(e)||(e=Gt(e)),Re(this.low&e.low,this.high&e.high,this.unsigned)},W.or=function(e){return ht(e)||(e=Gt(e)),Re(this.low|e.low,this.high|e.high,this.unsigned)},W.xor=function(e){return ht(e)||(e=Gt(e)),Re(this.low^e.low,this.high^e.high,this.unsigned)},W.shiftLeft=function(e){return ht(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?Re(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):Re(0,this.low<<e-32,this.unsigned)},W.shl=W.shiftLeft,W.shiftRight=function(e){return ht(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?Re(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):Re(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},W.shr=W.shiftRight,W.shiftRightUnsigned=function(e){return ht(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?Re(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):32===e?Re(this.high,0,this.unsigned):Re(this.high>>>e-32,0,this.unsigned)},W.shru=W.shiftRightUnsigned,W.shr_u=W.shiftRightUnsigned,W.rotateLeft=function(e){var t;return ht(e)&&(e=e.toInt()),0==(e&=63)?this:32===e?Re(this.high,this.low,this.unsigned):e<32?(t=32-e,Re(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned)):(e-=32,t=32-e,Re(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned))},W.rotl=W.rotateLeft,W.rotateRight=function(e){var t;return ht(e)&&(e=e.toInt()),0==(e&=63)?this:32===e?Re(this.high,this.low,this.unsigned):e<32?(t=32-e,Re(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned)):(e-=32,t=32-e,Re(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned))},W.rotr=W.rotateRight,W.toSigned=function(){return this.unsigned?Re(this.low,this.high,!1):this},W.toUnsigned=function(){return this.unsigned?this:Re(this.low,this.high,!0)},W.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},W.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},W.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},Fe.fromBytes=function(e,t,n){return n?Fe.fromBytesLE(e,t):Fe.fromBytesBE(e,t)},Fe.fromBytesLE=function(e,t){return new Fe(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},Fe.fromBytesBE=function(e,t){return new Fe(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)},pr=Fe}),D,Do=C(()=>{(D={}).Offset,D.Table,D.SIZEOF_SHORT=2,D.SIZEOF_INT=4,D.FILE_IDENTIFIER_LENGTH=4,D.SIZE_PREFIX_LENGTH=4,D.Encoding={UTF8_BYTES:1,UTF16_STRING:2},D.int32=new Int32Array(2),D.float32=new Float32Array(D.int32.buffer),D.float64=new Float64Array(D.int32.buffer),D.isLittleEndian=1===new Uint16Array(new Uint8Array([1,0]).buffer)[0],D.Long=function(e,t){this.low=0|e,this.high=0|t},D.Long.create=function(e,t){return 0==e&&0==t?D.Long.ZERO:new D.Long(e,t)},D.Long.prototype.toFloat64=function(){return(this.low>>>0)+0x100000000*this.high},D.Long.prototype.equals=function(e){return this.low==e.low&&this.high==e.high},D.Long.ZERO=new D.Long(0,0),D.Builder=function(e){if(e)var t=e;else var t=1024;this.bb=D.ByteBuffer.allocate(t),this.space=t,this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},D.Builder.prototype.clear=function(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},D.Builder.prototype.forceDefaults=function(e){this.force_defaults=e},D.Builder.prototype.dataBuffer=function(){return this.bb},D.Builder.prototype.asUint8Array=function(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())},D.Builder.prototype.prep=function(e,t){e>this.minalign&&(this.minalign=e);for(var n=~(this.bb.capacity()-this.space+t)+1&e-1;this.space<n+e+t;){var i=this.bb.capacity();this.bb=D.Builder.growByteBuffer(this.bb),this.space+=this.bb.capacity()-i}this.pad(n)},D.Builder.prototype.pad=function(e){for(var t=0;t<e;t++)this.bb.writeInt8(--this.space,0)},D.Builder.prototype.writeInt8=function(e){this.bb.writeInt8(this.space-=1,e)},D.Builder.prototype.writeInt16=function(e){this.bb.writeInt16(this.space-=2,e)},D.Builder.prototype.writeInt32=function(e){this.bb.writeInt32(this.space-=4,e)},D.Builder.prototype.writeInt64=function(e){this.bb.writeInt64(this.space-=8,e)},D.Builder.prototype.writeFloat32=function(e){this.bb.writeFloat32(this.space-=4,e)},D.Builder.prototype.writeFloat64=function(e){this.bb.writeFloat64(this.space-=8,e)},D.Builder.prototype.addInt8=function(e){this.prep(1,0),this.writeInt8(e)},D.Builder.prototype.addInt16=function(e){this.prep(2,0),this.writeInt16(e)},D.Builder.prototype.addInt32=function(e){this.prep(4,0),this.writeInt32(e)},D.Builder.prototype.addInt64=function(e){this.prep(8,0),this.writeInt64(e)},D.Builder.prototype.addFloat32=function(e){this.prep(4,0),this.writeFloat32(e)},D.Builder.prototype.addFloat64=function(e){this.prep(8,0),this.writeFloat64(e)},D.Builder.prototype.addFieldInt8=function(e,t,n){(this.force_defaults||t!=n)&&(this.addInt8(t),this.slot(e))},D.Builder.prototype.addFieldInt16=function(e,t,n){(this.force_defaults||t!=n)&&(this.addInt16(t),this.slot(e))},D.Builder.prototype.addFieldInt32=function(e,t,n){(this.force_defaults||t!=n)&&(this.addInt32(t),this.slot(e))},D.Builder.prototype.addFieldInt64=function(e,t,n){(this.force_defaults||!t.equals(n))&&(this.addInt64(t),this.slot(e))},D.Builder.prototype.addFieldFloat32=function(e,t,n){(this.force_defaults||t!=n)&&(this.addFloat32(t),this.slot(e))},D.Builder.prototype.addFieldFloat64=function(e,t,n){(this.force_defaults||t!=n)&&(this.addFloat64(t),this.slot(e))},D.Builder.prototype.addFieldOffset=function(e,t,n){(this.force_defaults||t!=n)&&(this.addOffset(t),this.slot(e))},D.Builder.prototype.addFieldStruct=function(e,t,n){t!=n&&(this.nested(t),this.slot(e))},D.Builder.prototype.nested=function(e){if(e!=this.offset())throw Error("FlatBuffers: struct must be serialized inline.")},D.Builder.prototype.notNested=function(){if(this.isNested)throw Error("FlatBuffers: object serialization must not be nested.")},D.Builder.prototype.slot=function(e){this.vtable[e]=this.offset()},D.Builder.prototype.offset=function(){return this.bb.capacity()-this.space},D.Builder.growByteBuffer=function(e){var t=e.capacity();if(0xc0000000&t)throw Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");var n=t<<1,i=D.ByteBuffer.allocate(n);return i.setPosition(n-t),i.bytes().set(e.bytes(),n-t),i},D.Builder.prototype.addOffset=function(e){this.prep(D.SIZEOF_INT,0),this.writeInt32(this.offset()-e+D.SIZEOF_INT)},D.Builder.prototype.startObject=function(e){this.notNested(),null==this.vtable&&(this.vtable=[]),this.vtable_in_use=e;for(var t=0;t<e;t++)this.vtable[t]=0;this.isNested=!0,this.object_start=this.offset()},D.Builder.prototype.endObject=function(){if(null==this.vtable||!this.isNested)throw Error("FlatBuffers: endObject called without startObject");this.addInt32(0);for(var e=this.offset(),t=this.vtable_in_use-1;t>=0&&0==this.vtable[t];t--);for(var n=t+1;t>=0;t--)this.addInt16(0!=this.vtable[t]?e-this.vtable[t]:0);var i=2;this.addInt16(e-this.object_start);var o=(n+i)*D.SIZEOF_SHORT;this.addInt16(o);var a=0,s=this.space;e:for(t=0;t<this.vtables.length;t++){var u=this.bb.capacity()-this.vtables[t];if(o==this.bb.readInt16(u)){for(var l=D.SIZEOF_SHORT;l<o;l+=D.SIZEOF_SHORT)if(this.bb.readInt16(s+l)!=this.bb.readInt16(u+l))continue e;a=this.vtables[t];break}}return a?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,a-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e},D.Builder.prototype.finish=function(e,t,n){var i=n?D.SIZE_PREFIX_LENGTH:0;if(t){var o=t;if(this.prep(this.minalign,D.SIZEOF_INT+D.FILE_IDENTIFIER_LENGTH+i),o.length!=D.FILE_IDENTIFIER_LENGTH)throw Error("FlatBuffers: file identifier must be length "+D.FILE_IDENTIFIER_LENGTH);for(var a=D.FILE_IDENTIFIER_LENGTH-1;a>=0;a--)this.writeInt8(o.charCodeAt(a))}this.prep(this.minalign,D.SIZEOF_INT+i),this.addOffset(e),i&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)},D.Builder.prototype.finishSizePrefixed=function(e,t){this.finish(e,t,!0)},D.Builder.prototype.requiredField=function(e,t){var n=this.bb.capacity()-e,i=n-this.bb.readInt32(n);if(!(0!=this.bb.readInt16(i+t)))throw Error("FlatBuffers: field "+t+" must be set")},D.Builder.prototype.startVector=function(e,t,n){this.notNested(),this.vector_num_elems=t,this.prep(D.SIZEOF_INT,e*t),this.prep(n,e*t)},D.Builder.prototype.endVector=function(){return this.writeInt32(this.vector_num_elems),this.offset()},D.Builder.prototype.createString=function(e){if(e instanceof Uint8Array)var t=e;else for(var t=[],n=0;n<e.length;){var i,o=e.charCodeAt(n++);(i=o<55296||o>=56320?o:(o<<10)+e.charCodeAt(n++)+-0x35fdc00)<128?t.push(i):(i<2048?t.push(i>>6&31|192):(i<65536?t.push(i>>12&15|224):t.push(i>>18&7|240,i>>12&63|128),t.push(i>>6&63|128)),t.push(63&i|128))}this.addInt8(0),this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length);for(var n=0,a=this.space,s=this.bb.bytes();n<t.length;n++)s[a++]=t[n];return this.endVector()},D.Builder.prototype.createLong=function(e,t){return D.Long.create(e,t)},D.ByteBuffer=function(e){this.bytes_=e,this.position_=0},D.ByteBuffer.allocate=function(e){return new D.ByteBuffer(new Uint8Array(e))},D.ByteBuffer.prototype.clear=function(){this.position_=0},D.ByteBuffer.prototype.bytes=function(){return this.bytes_},D.ByteBuffer.prototype.position=function(){return this.position_},D.ByteBuffer.prototype.setPosition=function(e){this.position_=e},D.ByteBuffer.prototype.capacity=function(){return this.bytes_.length},D.ByteBuffer.prototype.readInt8=function(e){return this.readUint8(e)<<24>>24},D.ByteBuffer.prototype.readUint8=function(e){return this.bytes_[e]},D.ByteBuffer.prototype.readInt16=function(e){return this.readUint16(e)<<16>>16},D.ByteBuffer.prototype.readUint16=function(e){return this.bytes_[e]|this.bytes_[e+1]<<8},D.ByteBuffer.prototype.readInt32=function(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24},D.ByteBuffer.prototype.readUint32=function(e){return this.readInt32(e)>>>0},D.ByteBuffer.prototype.readInt64=function(e){return new D.Long(this.readInt32(e),this.readInt32(e+4))},D.ByteBuffer.prototype.readUint64=function(e){return new D.Long(this.readUint32(e),this.readUint32(e+4))},D.ByteBuffer.prototype.readFloat32=function(e){return D.int32[0]=this.readInt32(e),D.float32[0]},D.ByteBuffer.prototype.readFloat64=function(e){return D.int32[D.isLittleEndian?0:1]=this.readInt32(e),D.int32[D.isLittleEndian?1:0]=this.readInt32(e+4),D.float64[0]},D.ByteBuffer.prototype.writeInt8=function(e,t){this.bytes_[e]=t},D.ByteBuffer.prototype.writeUint8=function(e,t){this.bytes_[e]=t},D.ByteBuffer.prototype.writeInt16=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8},D.ByteBuffer.prototype.writeUint16=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8},D.ByteBuffer.prototype.writeInt32=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24},D.ByteBuffer.prototype.writeUint32=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24},D.ByteBuffer.prototype.writeInt64=function(e,t){this.writeInt32(e,t.low),this.writeInt32(e+4,t.high)},D.ByteBuffer.prototype.writeUint64=function(e,t){this.writeUint32(e,t.low),this.writeUint32(e+4,t.high)},D.ByteBuffer.prototype.writeFloat32=function(e,t){D.float32[0]=t,this.writeInt32(e,D.int32[0])},D.ByteBuffer.prototype.writeFloat64=function(e,t){D.float64[0]=t,this.writeInt32(e,D.int32[D.isLittleEndian?0:1]),this.writeInt32(e+4,D.int32[D.isLittleEndian?1:0])},D.ByteBuffer.prototype.getBufferIdentifier=function(){if(this.bytes_.length<this.position_+D.SIZEOF_INT+D.FILE_IDENTIFIER_LENGTH)throw Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");for(var e="",t=0;t<D.FILE_IDENTIFIER_LENGTH;t++)e+=String.fromCharCode(this.readInt8(this.position_+D.SIZEOF_INT+t));return e},D.ByteBuffer.prototype.__offset=function(e,t){var n=e-this.readInt32(e);return t<this.readInt16(n)?this.readInt16(n+t):0},D.ByteBuffer.prototype.__union=function(e,t){return e.bb_pos=t+this.readInt32(t),e.bb=this,e},D.ByteBuffer.prototype.__string=function(e,t){e+=this.readInt32(e);var n=this.readInt32(e),i="",o=0;if(e+=D.SIZEOF_INT,t===D.Encoding.UTF8_BYTES)return this.bytes_.subarray(e,e+n);for(;o<n;){var a,s=this.readUint8(e+o++);if(s<192)a=s;else{var u=this.readUint8(e+o++);if(s<224)a=(31&s)<<6|63&u;else{var l=this.readUint8(e+o++);a=s<240?(15&s)<<12|(63&u)<<6|63&l:(7&s)<<18|(63&u)<<12|(63&l)<<6|63&this.readUint8(e+o++)}}a<65536?i+=String.fromCharCode(a):(a-=65536,i+=String.fromCharCode((a>>10)+55296,(1023&a)+56320))}return i},D.ByteBuffer.prototype.__indirect=function(e){return e+this.readInt32(e)},D.ByteBuffer.prototype.__vector=function(e){return e+this.readInt32(e)+D.SIZEOF_INT},D.ByteBuffer.prototype.__vector_len=function(e){return this.readInt32(e+this.readInt32(e))},D.ByteBuffer.prototype.__has_identifier=function(e){if(e.length!=D.FILE_IDENTIFIER_LENGTH)throw Error("FlatBuffers: file identifier must be length "+D.FILE_IDENTIFIER_LENGTH);for(var t=0;t<D.FILE_IDENTIFIER_LENGTH;t++)if(e.charCodeAt(t)!=this.readInt8(this.position_+D.SIZEOF_INT+t))return!1;return!0},D.ByteBuffer.prototype.createLong=function(e,t){return D.Long.create(e,t)}}),ee,Cn=C(()=>{Do(),(e=>{let t;(e=>{let t;(e=>{let t,n;(n=t=e.AttributeType||={})[n.UNDEFINED=0]="UNDEFINED",n[n.FLOAT=1]="FLOAT",n[n.INT=2]="INT",n[n.STRING=3]="STRING",n[n.TENSOR=4]="TENSOR",n[n.GRAPH=5]="GRAPH",n[n.FLOATS=6]="FLOATS",n[n.INTS=7]="INTS",n[n.STRINGS=8]="STRINGS",n[n.TENSORS=9]="TENSORS",n[n.GRAPHS=10]="GRAPHS",n[n.SPARSE_TENSOR=11]="SPARSE_TENSOR",n[n.SPARSE_TENSORS=12]="SPARSE_TENSORS"})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{let t,n;(n=t=e.DimensionValueType||={})[n.UNKNOWN=0]="UNKNOWN",n[n.VALUE=1]="VALUE",n[n.PARAM=2]="PARAM"})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{let t,n;(n=t=e.TensorDataType||={})[n.UNDEFINED=0]="UNDEFINED",n[n.FLOAT=1]="FLOAT",n[n.UINT8=2]="UINT8",n[n.INT8=3]="INT8",n[n.UINT16=4]="UINT16",n[n.INT16=5]="INT16",n[n.INT32=6]="INT32",n[n.INT64=7]="INT64",n[n.STRING=8]="STRING",n[n.BOOL=9]="BOOL",n[n.FLOAT16=10]="FLOAT16",n[n.DOUBLE=11]="DOUBLE",n[n.UINT32=12]="UINT32",n[n.UINT64=13]="UINT64",n[n.COMPLEX64=14]="COMPLEX64",n[n.COMPLEX128=15]="COMPLEX128",n[n.BFLOAT16=16]="BFLOAT16",n[n.FLOAT8E4M3FN=17]="FLOAT8E4M3FN",n[n.FLOAT8E4M3FNUZ=18]="FLOAT8E4M3FNUZ",n[n.FLOAT8E5M2=19]="FLOAT8E5M2",n[n.FLOAT8E5M2FNUZ=20]="FLOAT8E5M2FNUZ"})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{let t,n;(n=t=e.NodeType||={})[n.Primitive=0]="Primitive",n[n.Fused=1]="Fused"})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{let t,n;(n=t=e.TypeInfoValue||={})[n.NONE=0]="NONE",n[n.tensor_type=1]="tensor_type",n[n.sequence_type=2]="sequence_type",n[n.map_type=3]="map_type"})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsShape(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsShape(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}dim(t,n){let i=this.bb.__offset(this.bb_pos,4);return i?(n||new e.experimental.fbs.Dimension).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}dimLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startShape(e){e.startObject(1)}static addDim(e,t){e.addFieldOffset(0,t,0)}static createDimVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startDimVector(e,t){e.startVector(4,t,4)}static endShape(e){return e.endObject()}static createShape(e,t){return n.startShape(e),n.addDim(e,t),n.endShape(e)}}t.Shape=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDimension(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDimension(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}value(t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new e.experimental.fbs.DimensionValue).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}denotation(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}static startDimension(e){e.startObject(2)}static addValue(e,t){e.addFieldOffset(0,t,0)}static addDenotation(e,t){e.addFieldOffset(1,t,0)}static endDimension(e){return e.endObject()}static createDimension(e,t,i){return n.startDimension(e),n.addValue(e,t),n.addDenotation(e,i),n.endDimension(e)}}t.Dimension=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{class t{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDimensionValue(e,n){return(n||new t).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDimensionValue(e,n){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(n||new t).__init(e.readInt32(e.position())+e.position(),e)}dimType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt8(this.bb_pos+e):0}dimValue(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):this.bb.createLong(0,0)}dimParam(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,e):null}static startDimensionValue(e){e.startObject(3)}static addDimType(e,t){e.addFieldInt8(0,t,0)}static addDimValue(e,t){e.addFieldInt64(1,t,e.createLong(0,0))}static addDimParam(e,t){e.addFieldOffset(2,t,0)}static endDimensionValue(e){return e.endObject()}static createDimensionValue(e,n,i,o){return t.startDimensionValue(e),t.addDimType(e,n),t.addDimValue(e,i),t.addDimParam(e,o),t.endDimensionValue(e)}}e.DimensionValue=t})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTensorTypeAndShape(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTensorTypeAndShape(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}elemType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):0}shape(t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new e.experimental.fbs.Shape).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}static startTensorTypeAndShape(e){e.startObject(2)}static addElemType(e,t){e.addFieldInt32(0,t,0)}static addShape(e,t){e.addFieldOffset(1,t,0)}static endTensorTypeAndShape(e){return e.endObject()}static createTensorTypeAndShape(e,t,i){return n.startTensorTypeAndShape(e),n.addElemType(e,t),n.addShape(e,i),n.endTensorTypeAndShape(e)}}t.TensorTypeAndShape=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsMapType(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsMapType(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}keyType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):0}valueType(t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}static startMapType(e){e.startObject(2)}static addKeyType(e,t){e.addFieldInt32(0,t,0)}static addValueType(e,t){e.addFieldOffset(1,t,0)}static endMapType(e){return e.endObject()}static createMapType(e,t,i){return n.startMapType(e),n.addKeyType(e,t),n.addValueType(e,i),n.endMapType(e)}}t.MapType=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsSequenceType(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSequenceType(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}elemType(t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}static startSequenceType(e){e.startObject(1)}static addElemType(e,t){e.addFieldOffset(0,t,0)}static endSequenceType(e){return e.endObject()}static createSequenceType(e,t){return n.startSequenceType(e),n.addElemType(e,t),n.endSequenceType(e)}}t.SequenceType=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{class t{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}nodeIndex(){return this.bb.readUint32(this.bb_pos)}srcArgIndex(){return this.bb.readInt32(this.bb_pos+4)}dstArgIndex(){return this.bb.readInt32(this.bb_pos+8)}static createEdgeEnd(e,t,n,i){return e.prep(4,12),e.writeInt32(i),e.writeInt32(n),e.writeInt32(t),e.offset()}}e.EdgeEnd=t})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsNodeEdge(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNodeEdge(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}nodeIndex(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb_pos+e):0}inputEdges(t,n){let i=this.bb.__offset(this.bb_pos,6);return i?(n||new e.experimental.fbs.EdgeEnd).__init(this.bb.__vector(this.bb_pos+i)+12*t,this.bb):null}inputEdgesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}outputEdges(t,n){let i=this.bb.__offset(this.bb_pos,8);return i?(n||new e.experimental.fbs.EdgeEnd).__init(this.bb.__vector(this.bb_pos+i)+12*t,this.bb):null}outputEdgesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNodeEdge(e){e.startObject(3)}static addNodeIndex(e,t){e.addFieldInt32(0,t,0)}static addInputEdges(e,t){e.addFieldOffset(1,t,0)}static startInputEdgesVector(e,t){e.startVector(12,t,4)}static addOutputEdges(e,t){e.addFieldOffset(2,t,0)}static startOutputEdgesVector(e,t){e.startVector(12,t,4)}static endNodeEdge(e){return e.endObject()}static createNodeEdge(e,t,i,o){return n.startNodeEdge(e),n.addNodeIndex(e,t),n.addInputEdges(e,i),n.addOutputEdges(e,o),n.endNodeEdge(e)}}t.NodeEdge=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsNode(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNode(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}domain(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,e):null}sinceVersion(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):0}index(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readUint32(this.bb_pos+e):0}opType(e){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb_pos+t,e):null}type(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt32(this.bb_pos+e):0}executionProviderType(e){let t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__string(this.bb_pos+t,e):null}inputs(e,t){let n=this.bb.__offset(this.bb_pos,20);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+4*e,t):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,t){let n=this.bb.__offset(this.bb_pos,22);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+4*e,t):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}attributes(t,n){let i=this.bb.__offset(this.bb_pos,24);return i?(n||new e.experimental.fbs.Attribute).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}attributesLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCounts(e){let t=this.bb.__offset(this.bb_pos,26);return t?this.bb.readInt32(this.bb.__vector(this.bb_pos+t)+4*e):0}inputArgCountsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCountsArray(){let e=this.bb.__offset(this.bb_pos,26);return e?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}implicitInputs(e,t){let n=this.bb.__offset(this.bb_pos,28);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+4*e,t):null}implicitInputsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNode(e){e.startObject(13)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addDomain(e,t){e.addFieldOffset(2,t,0)}static addSinceVersion(e,t){e.addFieldInt32(3,t,0)}static addIndex(e,t){e.addFieldInt32(4,t,0)}static addOpType(e,t){e.addFieldOffset(5,t,0)}static addType(e,t){e.addFieldInt32(6,t,0)}static addExecutionProviderType(e,t){e.addFieldOffset(7,t,0)}static addInputs(e,t){e.addFieldOffset(8,t,0)}static createInputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startInputsVector(e,t){e.startVector(4,t,4)}static addOutputs(e,t){e.addFieldOffset(9,t,0)}static createOutputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOutputsVector(e,t){e.startVector(4,t,4)}static addAttributes(e,t){e.addFieldOffset(10,t,0)}static createAttributesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startAttributesVector(e,t){e.startVector(4,t,4)}static addInputArgCounts(e,t){e.addFieldOffset(11,t,0)}static createInputArgCountsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addInt32(t[n]);return e.endVector()}static startInputArgCountsVector(e,t){e.startVector(4,t,4)}static addImplicitInputs(e,t){e.addFieldOffset(12,t,0)}static createImplicitInputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startImplicitInputsVector(e,t){e.startVector(4,t,4)}static endNode(e){return e.endObject()}static createNode(e,t,i,o,a,s,u,l,d,p,c,h,f,m){return n.startNode(e),n.addName(e,t),n.addDocString(e,i),n.addDomain(e,o),n.addSinceVersion(e,a),n.addIndex(e,s),n.addOpType(e,u),n.addType(e,l),n.addExecutionProviderType(e,d),n.addInputs(e,p),n.addOutputs(e,c),n.addAttributes(e,h),n.addInputArgCounts(e,f),n.addImplicitInputs(e,m),n.endNode(e)}}t.Node=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsValueInfo(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsValueInfo(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}type(t){let n=this.bb.__offset(this.bb_pos,8);return n?(t||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}static startValueInfo(e){e.startObject(3)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addType(e,t){e.addFieldOffset(2,t,0)}static endValueInfo(e){return e.endObject()}static createValueInfo(e,t,i,o){return n.startValueInfo(e),n.addName(e,t),n.addDocString(e,i),n.addType(e,o),n.endValueInfo(e)}}t.ValueInfo=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{class t{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTypeInfo(e,n){return(n||new t).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTypeInfo(e,n){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(n||new t).__init(e.readInt32(e.position())+e.position(),e)}denotation(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}valueType(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint8(this.bb_pos+e):0}value(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__union(e,this.bb_pos+t):null}static startTypeInfo(e){e.startObject(3)}static addDenotation(e,t){e.addFieldOffset(0,t,0)}static addValueType(e,t){e.addFieldInt8(1,t,0)}static addValue(e,t){e.addFieldOffset(2,t,0)}static endTypeInfo(e){return e.endObject()}static createTypeInfo(e,n,i,o){return t.startTypeInfo(e),t.addDenotation(e,n),t.addValueType(e,i),t.addValue(e,o),t.endTypeInfo(e)}}e.TypeInfo=t})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{class t{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsOperatorSetId(e,n){return(n||new t).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsOperatorSetId(e,n){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(n||new t).__init(e.readInt32(e.position())+e.position(),e)}domain(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}version(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):this.bb.createLong(0,0)}static startOperatorSetId(e){e.startObject(2)}static addDomain(e,t){e.addFieldOffset(0,t,0)}static addVersion(e,t){e.addFieldInt64(1,t,e.createLong(0,0))}static endOperatorSetId(e){return e.endObject()}static createOperatorSetId(e,n,i){return t.startOperatorSetId(e),t.addDomain(e,n),t.addVersion(e,i),t.endOperatorSetId(e)}}e.OperatorSetId=t})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{class t{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTensor(e,n){return(n||new t).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTensor(e,n){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(n||new t).__init(e.readInt32(e.position())+e.position(),e)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}dims(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+8*e):this.bb.createLong(0,0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}dataType(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):0}rawData(e){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.readUint8(this.bb.__vector(this.bb_pos+t)+e):0}rawDataLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}rawDataArray(){let e=this.bb.__offset(this.bb_pos,12);return e?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}stringData(e,t){let n=this.bb.__offset(this.bb_pos,14);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+4*e,t):null}stringDataLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}static startTensor(e){e.startObject(6)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addDims(e,t){e.addFieldOffset(2,t,0)}static createDimsVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startDimsVector(e,t){e.startVector(8,t,8)}static addDataType(e,t){e.addFieldInt32(3,t,0)}static addRawData(e,t){e.addFieldOffset(4,t,0)}static createRawDataVector(e,t){e.startVector(1,t.length,1);for(let n=t.length-1;n>=0;n--)e.addInt8(t[n]);return e.endVector()}static startRawDataVector(e,t){e.startVector(1,t,1)}static addStringData(e,t){e.addFieldOffset(5,t,0)}static createStringDataVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startStringDataVector(e,t){e.startVector(4,t,4)}static endTensor(e){return e.endObject()}static createTensor(e,n,i,o,a,s,u){return t.startTensor(e),t.addName(e,n),t.addDocString(e,i),t.addDims(e,o),t.addDataType(e,a),t.addRawData(e,s),t.addStringData(e,u),t.endTensor(e)}}e.Tensor=t})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsSparseTensor(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSparseTensor(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}values(t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}indices(t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}dims(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+8*e):this.bb.createLong(0,0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startSparseTensor(e){e.startObject(3)}static addValues(e,t){e.addFieldOffset(0,t,0)}static addIndices(e,t){e.addFieldOffset(1,t,0)}static addDims(e,t){e.addFieldOffset(2,t,0)}static createDimsVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startDimsVector(e,t){e.startVector(8,t,8)}static endSparseTensor(e){return e.endObject()}static createSparseTensor(e,t,i,o){return n.startSparseTensor(e),n.addValues(e,t),n.addIndices(e,i),n.addDims(e,o),n.endSparseTensor(e)}}t.SparseTensor=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsAttribute(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsAttribute(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}type(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readInt32(this.bb_pos+e):0}f(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat32(this.bb_pos+e):0}i(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readInt64(this.bb_pos+e):this.bb.createLong(0,0)}s(e){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb_pos+t,e):null}t(t){let n=this.bb.__offset(this.bb_pos,16);return n?(t||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}g(t){let n=this.bb.__offset(this.bb_pos,18);return n?(t||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}floats(e){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.readFloat32(this.bb.__vector(this.bb_pos+t)+4*e):0}floatsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}floatsArray(){let e=this.bb.__offset(this.bb_pos,20);return e?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}ints(e){let t=this.bb.__offset(this.bb_pos,22);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+8*e):this.bb.createLong(0,0)}intsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}strings(e,t){let n=this.bb.__offset(this.bb_pos,24);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+4*e,t):null}stringsLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}tensors(t,n){let i=this.bb.__offset(this.bb_pos,26);return i?(n||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}tensorsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}graphs(t,n){let i=this.bb.__offset(this.bb_pos,28);return i?(n||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}graphsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startAttribute(e){e.startObject(13)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addType(e,t){e.addFieldInt32(2,t,0)}static addF(e,t){e.addFieldFloat32(3,t,0)}static addI(e,t){e.addFieldInt64(4,t,e.createLong(0,0))}static addS(e,t){e.addFieldOffset(5,t,0)}static addT(e,t){e.addFieldOffset(6,t,0)}static addG(e,t){e.addFieldOffset(7,t,0)}static addFloats(e,t){e.addFieldOffset(8,t,0)}static createFloatsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addFloat32(t[n]);return e.endVector()}static startFloatsVector(e,t){e.startVector(4,t,4)}static addInts(e,t){e.addFieldOffset(9,t,0)}static createIntsVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startIntsVector(e,t){e.startVector(8,t,8)}static addStrings(e,t){e.addFieldOffset(10,t,0)}static createStringsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startStringsVector(e,t){e.startVector(4,t,4)}static addTensors(e,t){e.addFieldOffset(11,t,0)}static createTensorsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startTensorsVector(e,t){e.startVector(4,t,4)}static addGraphs(e,t){e.addFieldOffset(12,t,0)}static createGraphsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startGraphsVector(e,t){e.startVector(4,t,4)}static endAttribute(e){return e.endObject()}static createAttribute(e,t,i,o,a,s,u,l,d,p,c,h,f,m){return n.startAttribute(e),n.addName(e,t),n.addDocString(e,i),n.addType(e,o),n.addF(e,a),n.addI(e,s),n.addS(e,u),n.addT(e,l),n.addG(e,d),n.addFloats(e,p),n.addInts(e,c),n.addStrings(e,h),n.addTensors(e,f),n.addGraphs(e,m),n.endAttribute(e)}}t.Attribute=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsGraph(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsGraph(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}initializers(t,n){let i=this.bb.__offset(this.bb_pos,4);return i?(n||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}initializersLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeArgs(t,n){let i=this.bb.__offset(this.bb_pos,6);return i?(n||new e.experimental.fbs.ValueInfo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}nodeArgsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}nodes(t,n){let i=this.bb.__offset(this.bb_pos,8);return i?(n||new e.experimental.fbs.Node).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}nodesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}maxNodeIndex(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readUint32(this.bb_pos+e):0}nodeEdges(t,n){let i=this.bb.__offset(this.bb_pos,12);return i?(n||new e.experimental.fbs.NodeEdge).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}nodeEdgesLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}inputs(e,t){let n=this.bb.__offset(this.bb_pos,14);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+4*e,t):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,t){let n=this.bb.__offset(this.bb_pos,16);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+4*e,t):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.__vector_len(this.bb_pos+e):0}sparseInitializers(t,n){let i=this.bb.__offset(this.bb_pos,18);return i?(n||new e.experimental.fbs.SparseTensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}sparseInitializersLength(){let e=this.bb.__offset(this.bb_pos,18);return e?this.bb.__vector_len(this.bb_pos+e):0}static startGraph(e){e.startObject(8)}static addInitializers(e,t){e.addFieldOffset(0,t,0)}static createInitializersVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startInitializersVector(e,t){e.startVector(4,t,4)}static addNodeArgs(e,t){e.addFieldOffset(1,t,0)}static createNodeArgsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startNodeArgsVector(e,t){e.startVector(4,t,4)}static addNodes(e,t){e.addFieldOffset(2,t,0)}static createNodesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startNodesVector(e,t){e.startVector(4,t,4)}static addMaxNodeIndex(e,t){e.addFieldInt32(3,t,0)}static addNodeEdges(e,t){e.addFieldOffset(4,t,0)}static createNodeEdgesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startNodeEdgesVector(e,t){e.startVector(4,t,4)}static addInputs(e,t){e.addFieldOffset(5,t,0)}static createInputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startInputsVector(e,t){e.startVector(4,t,4)}static addOutputs(e,t){e.addFieldOffset(6,t,0)}static createOutputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOutputsVector(e,t){e.startVector(4,t,4)}static addSparseInitializers(e,t){e.addFieldOffset(7,t,0)}static createSparseInitializersVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startSparseInitializersVector(e,t){e.startVector(4,t,4)}static endGraph(e){return e.endObject()}static createGraph(e,t,i,o,a,s,u,l,d){return n.startGraph(e),n.addInitializers(e,t),n.addNodeArgs(e,i),n.addNodes(e,o),n.addMaxNodeIndex(e,a),n.addNodeEdges(e,s),n.addInputs(e,u),n.addOutputs(e,l),n.addSparseInitializers(e,d),n.endGraph(e)}}t.Graph=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsModel(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsModel(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}irVersion(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt64(this.bb_pos+e):this.bb.createLong(0,0)}opsetImport(t,n){let i=this.bb.__offset(this.bb_pos,6);return i?(n||new e.experimental.fbs.OperatorSetId).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}opsetImportLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}producerName(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,e):null}producerVersion(e){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__string(this.bb_pos+t,e):null}domain(e){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__string(this.bb_pos+t,e):null}modelVersion(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readInt64(this.bb_pos+e):this.bb.createLong(0,0)}docString(e){let t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__string(this.bb_pos+t,e):null}graph(t){let n=this.bb.__offset(this.bb_pos,18);return n?(t||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}graphDocString(e){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.__string(this.bb_pos+t,e):null}static startModel(e){e.startObject(9)}static addIrVersion(e,t){e.addFieldInt64(0,t,e.createLong(0,0))}static addOpsetImport(e,t){e.addFieldOffset(1,t,0)}static createOpsetImportVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOpsetImportVector(e,t){e.startVector(4,t,4)}static addProducerName(e,t){e.addFieldOffset(2,t,0)}static addProducerVersion(e,t){e.addFieldOffset(3,t,0)}static addDomain(e,t){e.addFieldOffset(4,t,0)}static addModelVersion(e,t){e.addFieldInt64(5,t,e.createLong(0,0))}static addDocString(e,t){e.addFieldOffset(6,t,0)}static addGraph(e,t){e.addFieldOffset(7,t,0)}static addGraphDocString(e,t){e.addFieldOffset(8,t,0)}static endModel(e){return e.endObject()}static createModel(e,t,i,o,a,s,u,l,d,p){return n.startModel(e),n.addIrVersion(e,t),n.addOpsetImport(e,i),n.addProducerName(e,o),n.addProducerVersion(e,a),n.addDomain(e,s),n.addModelVersion(e,u),n.addDocString(e,l),n.addGraph(e,d),n.addGraphDocString(e,p),n.endModel(e)}}t.Model=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(e=>{let t;(e=>{class t{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsKernelCreateInfos(e,n){return(n||new t).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsKernelCreateInfos(e,n){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(n||new t).__init(e.readInt32(e.position())+e.position(),e)}nodeIndices(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readUint32(this.bb.__vector(this.bb_pos+t)+4*e):0}nodeIndicesLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeIndicesArray(){let e=this.bb.__offset(this.bb_pos,4);return e?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}kernelDefHashes(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint64(this.bb.__vector(this.bb_pos+t)+8*e):this.bb.createLong(0,0)}kernelDefHashesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startKernelCreateInfos(e){e.startObject(2)}static addNodeIndices(e,t){e.addFieldOffset(0,t,0)}static createNodeIndicesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addInt32(t[n]);return e.endVector()}static startNodeIndicesVector(e,t){e.startVector(4,t,4)}static addKernelDefHashes(e,t){e.addFieldOffset(1,t,0)}static createKernelDefHashesVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startKernelDefHashesVector(e,t){e.startVector(8,t,8)}static endKernelCreateInfos(e){return e.endObject()}static createKernelCreateInfos(e,n,i){return t.startKernelCreateInfos(e),t.addNodeIndices(e,n),t.addKernelDefHashes(e,i),t.endKernelCreateInfos(e)}}e.KernelCreateInfos=t})(t=e.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsSubGraphSessionState(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSubGraphSessionState(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}graphId(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}sessionState(t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new e.experimental.fbs.SessionState).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}static startSubGraphSessionState(e){e.startObject(2)}static addGraphId(e,t){e.addFieldOffset(0,t,0)}static addSessionState(e,t){e.addFieldOffset(1,t,0)}static endSubGraphSessionState(e){let t=e.endObject();return e.requiredField(t,4),t}static createSubGraphSessionState(e,t,i){return n.startSubGraphSessionState(e),n.addGraphId(e,t),n.addSessionState(e,i),n.endSubGraphSessionState(e)}}t.SubGraphSessionState=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsSessionState(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSessionState(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}kernels(t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new e.experimental.fbs.KernelCreateInfos).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}subGraphSessionStates(t,n){let i=this.bb.__offset(this.bb_pos,6);return i?(n||new e.experimental.fbs.SubGraphSessionState).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}subGraphSessionStatesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startSessionState(e){e.startObject(2)}static addKernels(e,t){e.addFieldOffset(0,t,0)}static addSubGraphSessionStates(e,t){e.addFieldOffset(1,t,0)}static createSubGraphSessionStatesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startSubGraphSessionStatesVector(e,t){e.startVector(4,t,4)}static endSessionState(e){return e.endObject()}static createSessionState(e,t,i){return n.startSessionState(e),n.addKernels(e,t),n.addSubGraphSessionStates(e,i),n.endSessionState(e)}}t.SessionState=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={}),(e=>{let t;(t=>{let n;(t=>{class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsInferenceSession(e,t){return(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsInferenceSession(e,t){return e.setPosition(e.position()+D.SIZE_PREFIX_LENGTH),(t||new n).__init(e.readInt32(e.position())+e.position(),e)}static bufferHasIdentifier(e){return e.__has_identifier("ORTM")}ortVersion(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}model(t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new e.experimental.fbs.Model).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}sessionState(t){let n=this.bb.__offset(this.bb_pos,8);return n?(t||new e.experimental.fbs.SessionState).__init(this.bb.__indirect(this.bb_pos+n),this.bb):null}static startInferenceSession(e){e.startObject(3)}static addOrtVersion(e,t){e.addFieldOffset(0,t,0)}static addModel(e,t){e.addFieldOffset(1,t,0)}static addSessionState(e,t){e.addFieldOffset(2,t,0)}static endInferenceSession(e){return e.endObject()}static finishInferenceSessionBuffer(e,t){e.finish(t,"ORTM")}static finishSizePrefixedInferenceSessionBuffer(e,t){e.finish(t,"ORTM",!0)}static createInferenceSession(e,t,i,o){return n.startInferenceSession(e),n.addOrtVersion(e,t),n.addModel(e,i),n.addSessionState(e,o),n.endInferenceSession(e)}}t.InferenceSession=n})(n=t.fbs||={})})(t=e.experimental||={})})(ee||={})}),Lc=tt((e,t)=>{function n(e,t){for(var n=Array(arguments.length-1),i=0,o=2,a=!0;o<arguments.length;)n[i++]=arguments[o++];return new Promise(function(o,s){n[i]=function(e){if(a){if(a=!1,e)s(e);else{for(var t=Array(arguments.length-1),n=0;n<t.length;)t[n++]=arguments[n];o.apply(null,t)}}};try{e.apply(t||null,n)}catch(e){a&&(a=!1,s(e))}})}t.exports=n}),Mc=tt(e=>{var t,n=e;n.length=function(e){var t=e.length;if(!t)return 0;for(var n=0;--t%4>1&&"="===e.charAt(t);)++n;return Math.ceil(3*e.length)/4-n};var i=Array(64),o=Array(123);for(t=0;t<64;)o[i[t]=t<26?t+65:t<52?t+71:t<62?t-4:t-59|43]=t++;n.encode=function(e,t,n){for(var o,a=null,s=[],u=0,l=0;t<n;){var d=e[t++];switch(l){case 0:s[u++]=i[d>>2],o=(3&d)<<4,l=1;break;case 1:s[u++]=i[o|d>>4],o=(15&d)<<2,l=2;break;case 2:s[u++]=i[o|d>>6],s[u++]=i[63&d],l=0}u>8191&&((a||(a=[])).push(String.fromCharCode.apply(String,s)),u=0)}return l&&(s[u++]=i[o],s[u++]=61,1===l&&(s[u++]=61)),a?(u&&a.push(String.fromCharCode.apply(String,s.slice(0,u))),a.join("")):String.fromCharCode.apply(String,s.slice(0,u))};var a="invalid encoding";n.decode=function(e,t,n){for(var i,s=n,u=0,l=0;l<e.length;){var d=e.charCodeAt(l++);if(61===d&&u>1)break;if(void 0===(d=o[d]))throw Error(a);switch(u){case 0:i=d,u=1;break;case 1:t[n++]=i<<2|(48&d)>>4,i=d,u=2;break;case 2:t[n++]=(15&i)<<4|(60&d)>>2,i=d,u=3;break;case 3:t[n++]=(3&i)<<6|d,u=0}}if(1===u)throw Error(a);return n-s},n.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}}),Vc=tt((e,t)=>{function n(){this._listeners={}}t.exports=n,n.prototype.on=function(e,t,n){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:t,ctx:n||this}),this},n.prototype.off=function(e,t){if(void 0===e)this._listeners={};else if(void 0===t)this._listeners[e]=[];else for(var n=this._listeners[e],i=0;i<n.length;)n[i].fn===t?n.splice(i,1):++i;return this},n.prototype.emit=function(e){var t=this._listeners[e];if(t){for(var n=[],i=1;i<arguments.length;)n.push(arguments[i++]);for(i=0;i<t.length;)t[i].fn.apply(t[i++].ctx,n)}return this}}),Kc=tt((e,t)=>{function n(e){return"u">typeof Float32Array?function(){var t=new Float32Array([-0]),n=new Uint8Array(t.buffer),i=128===n[3];function o(e,i,o){t[0]=e,i[o]=n[0],i[o+1]=n[1],i[o+2]=n[2],i[o+3]=n[3]}function a(e,i,o){t[0]=e,i[o]=n[3],i[o+1]=n[2],i[o+2]=n[1],i[o+3]=n[0]}function s(e,i){return n[0]=e[i],n[1]=e[i+1],n[2]=e[i+2],n[3]=e[i+3],t[0]}function u(e,i){return n[3]=e[i],n[2]=e[i+1],n[1]=e[i+2],n[0]=e[i+3],t[0]}e.writeFloatLE=i?o:a,e.writeFloatBE=i?a:o,e.readFloatLE=i?s:u,e.readFloatBE=i?u:s}():function(){function t(e,t,n,i){var o=t<0?1:0;if(o&&(t=-t),0===t)e(1/t>0?0:0x80000000,n,i);else if(isNaN(t))e(0x7fc00000,n,i);else if(t>34028234663852886e22)e((o<<31|0x7f800000)>>>0,n,i);else if(t<11754943508222875e-54)e((o<<31|Math.round(t/1401298464324817e-60))>>>0,n,i);else{var a=Math.floor(Math.log(t)/Math.LN2),s=8388607&Math.round(t*Math.pow(2,-a)*8388608);e((o<<31|a+127<<23|s)>>>0,n,i)}}function n(e,t,n){var i=e(t,n),o=(i>>31)*2+1,a=i>>>23&255,s=8388607&i;return 255===a?s?NaN:1/0*o:0===a?1401298464324817e-60*o*s:o*Math.pow(2,a-150)*(s+8388608)}e.writeFloatLE=t.bind(null,i),e.writeFloatBE=t.bind(null,o),e.readFloatLE=n.bind(null,a),e.readFloatBE=n.bind(null,s)}(),"u">typeof Float64Array?function(){var t=new Float64Array([-0]),n=new Uint8Array(t.buffer),i=128===n[7];function o(e,i,o){t[0]=e,i[o]=n[0],i[o+1]=n[1],i[o+2]=n[2],i[o+3]=n[3],i[o+4]=n[4],i[o+5]=n[5],i[o+6]=n[6],i[o+7]=n[7]}function a(e,i,o){t[0]=e,i[o]=n[7],i[o+1]=n[6],i[o+2]=n[5],i[o+3]=n[4],i[o+4]=n[3],i[o+5]=n[2],i[o+6]=n[1],i[o+7]=n[0]}function s(e,i){return n[0]=e[i],n[1]=e[i+1],n[2]=e[i+2],n[3]=e[i+3],n[4]=e[i+4],n[5]=e[i+5],n[6]=e[i+6],n[7]=e[i+7],t[0]}function u(e,i){return n[7]=e[i],n[6]=e[i+1],n[5]=e[i+2],n[4]=e[i+3],n[3]=e[i+4],n[2]=e[i+5],n[1]=e[i+6],n[0]=e[i+7],t[0]}e.writeDoubleLE=i?o:a,e.writeDoubleBE=i?a:o,e.readDoubleLE=i?s:u,e.readDoubleBE=i?u:s}():function(){function t(e,t,n,i,o,a){var s,u=i<0?1:0;if(u&&(i=-i),0===i)e(0,o,a+t),e(1/i>0?0:0x80000000,o,a+n);else if(isNaN(i))e(0,o,a+t),e(0x7ff80000,o,a+n);else if(i>17976931348623157e292)e(0,o,a+t),e((u<<31|0x7ff00000)>>>0,o,a+n);else if(i<22250738585072014e-324)e((s=i/5e-324)>>>0,o,a+t),e((u<<31|s/0x100000000)>>>0,o,a+n);else{var l=Math.floor(Math.log(i)/Math.LN2);1024===l&&(l=1023),e(0x10000000000000*(s=i*Math.pow(2,-l))>>>0,o,a+t),e((u<<31|l+1023<<20|1048576*s&1048575)>>>0,o,a+n)}}function n(e,t,n,i,o){var a=e(i,o+t),s=e(i,o+n),u=(s>>31)*2+1,l=s>>>20&2047,d=0x100000000*(1048575&s)+a;return 2047===l?d?NaN:1/0*u:0===l?5e-324*u*d:u*Math.pow(2,l-1075)*(d+0x10000000000000)}e.writeDoubleLE=t.bind(null,i,0,4),e.writeDoubleBE=t.bind(null,o,4,0),e.readDoubleLE=n.bind(null,a,0,4),e.readDoubleBE=n.bind(null,s,4,0)}(),e}function i(e,t,n){t[n]=255&e,t[n+1]=e>>>8&255,t[n+2]=e>>>16&255,t[n+3]=e>>>24}function o(e,t,n){t[n]=e>>>24,t[n+1]=e>>>16&255,t[n+2]=e>>>8&255,t[n+3]=255&e}function a(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0}function s(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}t.exports=n(n)}),Xc=tt((exports,module)=>{function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(r){}return null}module.exports=inquire}),Yc=tt(e=>{var t=e;t.length=function(e){for(var t=0,n=0,i=0;i<e.length;++i)(n=e.charCodeAt(i))<128?t+=1:n<2048?t+=2:(64512&n)==55296&&(64512&e.charCodeAt(i+1))==56320?(++i,t+=4):t+=3;return t},t.read=function(e,t,n){if(n-t<1)return"";for(var i,o=null,a=[],s=0;t<n;)(i=e[t++])<128?a[s++]=i:i>191&&i<224?a[s++]=(31&i)<<6|63&e[t++]:i>239&&i<365?(i=((7&i)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++])-65536,a[s++]=55296+(i>>10),a[s++]=56320+(1023&i)):a[s++]=(15&i)<<12|(63&e[t++])<<6|63&e[t++],s>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,a)),s=0);return o?(s&&o.push(String.fromCharCode.apply(String,a.slice(0,s))),o.join("")):String.fromCharCode.apply(String,a.slice(0,s))},t.write=function(e,t,n){for(var i,o,a=n,s=0;s<e.length;++s)(i=e.charCodeAt(s))<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&(64512&(o=e.charCodeAt(s+1)))==56320?(i=65536+((1023&i)<<10)+(1023&o),++s,t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128);return n-a}}),Qc=tt((e,t)=>{function n(e,t,n){var i=n||8192,o=i>>>1,a=null,s=i;return function(n){if(n<1||n>o)return e(n);s+n>i&&(a=e(i),s=0);var u=t.call(a,s,s+=n);return 7&s&&(s=(7|s)+1),u}}t.exports=n}),tf=tt((e,t)=>{t.exports=i;var n=Ir();function i(e,t){this.lo=e>>>0,this.hi=t>>>0}var o=i.zero=new i(0,0);o.toNumber=function(){return 0},o.zzEncode=o.zzDecode=function(){return this},o.length=function(){return 1};var a=i.zeroHash="\0\0\0\0\0\0\0\0";i.fromNumber=function(e){if(0===e)return o;var t=e<0;t&&(e=-e);var n=e>>>0,a=(e-n)/0x100000000>>>0;return t&&(a=~a>>>0,n=~n>>>0,++n>0xffffffff&&(n=0,++a>0xffffffff&&(a=0))),new i(n,a)},i.from=function(e){if("number"==typeof e)return i.fromNumber(e);if(n.isString(e)){if(!n.Long)return i.fromNumber(parseInt(e,10));else e=n.Long.fromString(e)}return e.low||e.high?new i(e.low>>>0,e.high>>>0):o},i.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var t=~this.lo+1>>>0,n=~this.hi>>>0;return t||(n=n+1>>>0),-(t+0x100000000*n)}return this.lo+0x100000000*this.hi},i.prototype.toLong=function(e){return n.Long?new n.Long(0|this.lo,0|this.hi,!!e):{low:0|this.lo,high:0|this.hi,unsigned:!!e}};var s=String.prototype.charCodeAt;i.fromHash=function(e){return e===a?o:new i((s.call(e,0)|s.call(e,1)<<8|s.call(e,2)<<16|s.call(e,3)<<24)>>>0,(s.call(e,4)|s.call(e,5)<<8|s.call(e,6)<<16|s.call(e,7)<<24)>>>0)},i.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},i.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this},i.prototype.zzDecode=function(){var e=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this},i.prototype.length=function(){var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return 0===n?0===t?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:n<128?9:10}}),Ir=tt(e=>{var t=e;function n(e,t,n){for(var i=Object.keys(t),o=0;o<i.length;++o)void 0!==e[i[o]]&&n||(e[i[o]]=t[i[o]]);return e}function i(e){function t(e,i){if(!(this instanceof t))return new t(e,i);Object.defineProperty(this,"message",{get:function(){return e}}),Error.captureStackTrace?Error.captureStackTrace(this,t):Object.defineProperty(this,"stack",{value:Error().stack||""}),i&&n(this,i)}return t.prototype=Object.create(Error.prototype,{constructor:{value:t,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return e},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),t}t.asPromise=Lc(),t.base64=Mc(),t.EventEmitter=Vc(),t.float=Kc(),t.inquire=Xc(),t.utf8=Yc(),t.pool=Qc(),t.LongBits=tf(),t.isNode=!!("u">typeof global&&global&&global.process&&global.process.versions&&global.process.versions.node),t.global=t.isNode&&global||"u">typeof window&&window||"u">typeof self&&self||e,t.emptyArray=Object.freeze?Object.freeze([]):[],t.emptyObject=Object.freeze?Object.freeze({}):{},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.isString=function(e){return"string"==typeof e||e instanceof String},t.isObject=function(e){return e&&"object"==typeof e},t.isset=t.isSet=function(e,t){var n=e[t];return!!(null!=n&&e.hasOwnProperty(t))&&("object"!=typeof n||(Array.isArray(n)?n.length:Object.keys(n).length)>0)},t.Buffer=function(){try{var e=t.inquire("buffer").Buffer;return e.prototype.utf8Write?e:null}catch{return null}}(),t._Buffer_from=null,t._Buffer_allocUnsafe=null,t.newBuffer=function(e){return"number"==typeof e?t.Buffer?t._Buffer_allocUnsafe(e):new t.Array(e):t.Buffer?t._Buffer_from(e):typeof Uint8Array>"u"?e:new Uint8Array(e)},t.Array="u">typeof Uint8Array?Uint8Array:Array,t.Long=t.global.dcodeIO&&t.global.dcodeIO.Long||t.global.Long||t.inquire("long"),t.key2Re=/^true|false|0|1$/,t.key32Re=/^-?(?:0|[1-9][0-9]*)$/,t.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,t.longToHash=function(e){return e?t.LongBits.from(e).toHash():t.LongBits.zeroHash},t.longFromHash=function(e,n){var i=t.LongBits.fromHash(e);return t.Long?t.Long.fromBits(i.lo,i.hi,n):i.toNumber(!!n)},t.merge=n,t.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)},t.newError=i,t.ProtocolError=i("ProtocolError"),t.oneOfGetter=function(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=1;return function(){for(var e=Object.keys(this),n=e.length-1;n>-1;--n)if(1===t[e[n]]&&void 0!==this[e[n]]&&null!==this[e[n]])return e[n]}},t.oneOfSetter=function(e){return function(t){for(var n=0;n<e.length;++n)e[n]!==t&&delete this[e[n]]}},t.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},t._configure=function(){var e=t.Buffer;if(!e){t._Buffer_from=t._Buffer_allocUnsafe=null;return}t._Buffer_from=e.from!==Uint8Array.from&&e.from||function(t,n){return new e(t,n)},t._Buffer_allocUnsafe=e.allocUnsafe||function(t){return new e(t)}}}),Ha=tt((e,t)=>{t.exports=p;var n,i=Ir(),o=i.LongBits,a=i.base64,s=i.utf8;function u(e,t,n){this.fn=e,this.len=t,this.next=void 0,this.val=n}function l(){}function d(e){this.head=e.head,this.tail=e.tail,this.len=e.len,this.next=e.states}function p(){this.len=0,this.head=new u(l,0,0),this.tail=this.head,this.states=null}var c=function(){return i.Buffer?function(){return(p.create=function(){return new n})()}:function(){return new p}};function h(e,t,n){t[n]=255&e}function f(e,t,n){for(;e>127;)t[n++]=127&e|128,e>>>=7;t[n]=e}function m(e,t){this.len=e,this.next=void 0,this.val=t}function g(e,t,n){for(;e.hi;)t[n++]=127&e.lo|128,e.lo=(e.lo>>>7|e.hi<<25)>>>0,e.hi>>>=7;for(;e.lo>127;)t[n++]=127&e.lo|128,e.lo=e.lo>>>7;t[n++]=e.lo}function y(e,t,n){t[n]=255&e,t[n+1]=e>>>8&255,t[n+2]=e>>>16&255,t[n+3]=e>>>24}p.create=c(),p.alloc=function(e){return new i.Array(e)},i.Array!==Array&&(p.alloc=i.pool(p.alloc,i.Array.prototype.subarray)),p.prototype._push=function(e,t,n){return this.tail=this.tail.next=new u(e,t,n),this.len+=t,this},m.prototype=Object.create(u.prototype),m.prototype.fn=f,p.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new m((e>>>=0)<128?1:e<16384?2:e<2097152?3:e<0x10000000?4:5,e)).len,this},p.prototype.int32=function(e){return e<0?this._push(g,10,o.fromNumber(e)):this.uint32(e)},p.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)},p.prototype.uint64=function(e){var t=o.from(e);return this._push(g,t.length(),t)},p.prototype.int64=p.prototype.uint64,p.prototype.sint64=function(e){var t=o.from(e).zzEncode();return this._push(g,t.length(),t)},p.prototype.bool=function(e){return this._push(h,1,e?1:0)},p.prototype.fixed32=function(e){return this._push(y,4,e>>>0)},p.prototype.sfixed32=p.prototype.fixed32,p.prototype.fixed64=function(e){var t=o.from(e);return this._push(y,4,t.lo)._push(y,4,t.hi)},p.prototype.sfixed64=p.prototype.fixed64,p.prototype.float=function(e){return this._push(i.float.writeFloatLE,4,e)},p.prototype.double=function(e){return this._push(i.float.writeDoubleLE,8,e)};var b=i.Array.prototype.set?function(e,t,n){t.set(e,n)}:function(e,t,n){for(var i=0;i<e.length;++i)t[n+i]=e[i]};p.prototype.bytes=function(e){var t=e.length>>>0;if(!t)return this._push(h,1,0);if(i.isString(e)){var n=p.alloc(t=a.length(e));a.decode(e,n,0),e=n}return this.uint32(t)._push(b,t,e)},p.prototype.string=function(e){var t=s.length(e);return t?this.uint32(t)._push(s.write,t,e):this._push(h,1,0)},p.prototype.fork=function(){return this.states=new d(this),this.head=this.tail=new u(l,0,0),this.len=0,this},p.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new u(l,0,0),this.len=0),this},p.prototype.ldelim=function(){var e=this.head,t=this.tail,n=this.len;return this.reset().uint32(n),n&&(this.tail.next=e.next,this.tail=t,this.len+=n),this},p.prototype.finish=function(){for(var e=this.head.next,t=this.constructor.alloc(this.len),n=0;e;)e.fn(e.val,t,n),n+=e.len,e=e.next;return t},p._configure=function(e){n=e,p.create=c(),n._configure()}}),ff=tt((e,t)=>{t.exports=o;var n=Ha();(o.prototype=Object.create(n.prototype)).constructor=o;var i=Ir();function o(){n.call(this)}function a(e,t,n){e.length<40?i.utf8.write(e,t,n):t.utf8Write?t.utf8Write(e,n):t.write(e,n)}o._configure=function(){o.alloc=i._Buffer_allocUnsafe,o.writeBytesBuffer=i.Buffer&&i.Buffer.prototype instanceof Uint8Array&&"set"===i.Buffer.prototype.set.name?function(e,t,n){t.set(e,n)}:function(e,t,n){if(e.copy)e.copy(t,n,0,e.length);else for(var i=0;i<e.length;)t[n++]=e[i++]}},o.prototype.bytes=function(e){i.isString(e)&&(e=i._Buffer_from(e,"base64"));var t=e.length>>>0;return this.uint32(t),t&&this._push(o.writeBytesBuffer,t,e),this},o.prototype.string=function(e){var t=i.Buffer.byteLength(e);return this.uint32(t),t&&this._push(a,t,e),this},o._configure()}),Ka=tt((e,t)=>{t.exports=u;var n,i=Ir(),o=i.LongBits,a=i.utf8;function s(e,t){return RangeError("index out of range: "+e.pos+" + "+(t||1)+" > "+e.len)}function u(e){this.buf=e,this.pos=0,this.len=e.length}var l="u">typeof Uint8Array?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new u(e);throw Error("illegal buffer")}:function(e){if(Array.isArray(e))return new u(e);throw Error("illegal buffer")},d=function(){return i.Buffer?function(e){return(u.create=function(e){return i.Buffer.isBuffer(e)?new n(e):l(e)})(e)}:l};function p(){var e=new o(0,0),t=0;if(this.len-this.pos>4){for(;t<4;++t)if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128)return e;if(e.lo=(e.lo|(127&this.buf[this.pos])<<28)>>>0,e.hi=(e.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return e;t=0}else{for(;t<3;++t){if(this.pos>=this.len)throw s(this);if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128)return e}return e.lo=(e.lo|(127&this.buf[this.pos++])<<7*t)>>>0,e}if(this.len-this.pos>4){for(;t<5;++t)if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128)return e}else for(;t<5;++t){if(this.pos>=this.len)throw s(this);if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128)return e}throw Error("invalid varint encoding")}function c(e,t){return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0}function h(){if(this.pos+8>this.len)throw s(this,8);return new o(c(this.buf,this.pos+=4),c(this.buf,this.pos+=4))}u.create=d(),u.prototype._slice=i.Array.prototype.subarray||i.Array.prototype.slice,u.prototype.uint32=function(){var e=0xffffffff;return function(){if(e=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128||(e=(e|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)||(e=(e|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)||(e=(e|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)||(e=(e|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128))return e;if((this.pos+=5)>this.len)throw this.pos=this.len,s(this,10);return e}}(),u.prototype.int32=function(){return 0|this.uint32()},u.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(1&e)|0},u.prototype.bool=function(){return 0!==this.uint32()},u.prototype.fixed32=function(){if(this.pos+4>this.len)throw s(this,4);return c(this.buf,this.pos+=4)},u.prototype.sfixed32=function(){if(this.pos+4>this.len)throw s(this,4);return 0|c(this.buf,this.pos+=4)},u.prototype.float=function(){if(this.pos+4>this.len)throw s(this,4);var e=i.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e},u.prototype.double=function(){if(this.pos+8>this.len)throw s(this,4);var e=i.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e},u.prototype.bytes=function(){var e=this.uint32(),t=this.pos,n=this.pos+e;if(n>this.len)throw s(this,e);if(this.pos+=e,Array.isArray(this.buf))return this.buf.slice(t,n);if(t===n){var o=i.Buffer;return o?o.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,t,n)},u.prototype.string=function(){var e=this.bytes();return a.read(e,0,e.length)},u.prototype.skip=function(e){if("number"==typeof e){if(this.pos+e>this.len)throw s(this,e);this.pos+=e}else do if(this.pos>=this.len)throw s(this);while(128&this.buf[this.pos++]);return this},u.prototype.skipType=function(e){switch(e){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(e=7&this.uint32());)this.skipType(e);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+e+" at offset "+this.pos)}return this},u._configure=function(e){n=e,u.create=d(),n._configure();var t=i.Long?"toLong":"toNumber";i.merge(u.prototype,{int64:function(){return p.call(this)[t](!1)},uint64:function(){return p.call(this)[t](!0)},sint64:function(){return p.call(this).zzDecode()[t](!1)},fixed64:function(){return h.call(this)[t](!0)},sfixed64:function(){return h.call(this)[t](!1)}})}}),wf=tt((e,t)=>{t.exports=o;var n=Ka();(o.prototype=Object.create(n.prototype)).constructor=o;var i=Ir();function o(e){n.call(this,e)}o._configure=function(){i.Buffer&&(o.prototype._slice=i.Buffer.prototype.slice)},o.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+e,this.len))},o._configure()}),Tf=tt((e,t)=>{t.exports=i;var n=Ir();function i(e,t,i){if("function"!=typeof e)throw TypeError("rpcImpl must be a function");n.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=!!t,this.responseDelimited=!!i}(i.prototype=Object.create(n.EventEmitter.prototype)).constructor=i,i.prototype.rpcCall=function e(t,i,o,a,s){if(!a)throw TypeError("request must be specified");var u=this;if(!s)return n.asPromise(e,u,t,i,o,a);if(!u.rpcImpl){setTimeout(function(){s(Error("already ended"))},0);return}try{return u.rpcImpl(t,i[u.requestDelimited?"encodeDelimited":"encode"](a).finish(),function(e,n){if(e)return u.emit("error",e,t),s(e);if(null===n){u.end(!0);return}if(!(n instanceof o))try{n=o[u.responseDelimited?"decodeDelimited":"decode"](n)}catch(e){return u.emit("error",e,t),s(e)}return u.emit("data",n,t),s(null,n)})}catch(e){u.emit("error",e,t),setTimeout(function(){s(e)},0);return}},i.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}}),If=tt(e=>{e.Service=Tf()}),$f=tt((e,t)=>{t.exports={}}),Of=tt(e=>{var t=e;function n(){t.util._configure(),t.Writer._configure(t.BufferWriter),t.Reader._configure(t.BufferReader)}t.build="minimal",t.Writer=Ha(),t.BufferWriter=ff(),t.Reader=Ka(),t.BufferReader=wf(),t.util=Ir(),t.rpc=If(),t.roots=$f(),t.configure=n,n()}),Cf=tt((e,t)=>{t.exports=Of()}),pn=tt((e,t)=>{var n=Cf(),i=n.Reader,o=n.Writer,a=n.util,s=n.roots.default||(n.roots.default={});s.onnx=function(){var e={};return e.Version=function(){var e={},t=Object.create(e);return t[e[0]="_START_VERSION"]=0,t[e[1]="IR_VERSION_2017_10_10"]=1,t[e[2]="IR_VERSION_2017_10_30"]=2,t[e[3]="IR_VERSION_2017_11_3"]=3,t[e[4]="IR_VERSION_2019_1_22"]=4,t[e[5]="IR_VERSION_2019_3_18"]=5,t[e[6]="IR_VERSION_2019_9_19"]=6,t[e[7]="IR_VERSION_2020_5_8"]=7,t[e[8]="IR_VERSION_2021_7_30"]=8,t[e[9]="IR_VERSION"]=9,t}(),e.AttributeProto=function(){function e(e){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],this.sparseTensors=[],this.typeProtos=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.name="",e.prototype.refAttrName="",e.prototype.docString="",e.prototype.type=0,e.prototype.f=0,e.prototype.i=a.Long?a.Long.fromBits(0,0,!1):0,e.prototype.s=a.newBuffer([]),e.prototype.t=null,e.prototype.g=null,e.prototype.sparseTensor=null,e.prototype.tp=null,e.prototype.floats=a.emptyArray,e.prototype.ints=a.emptyArray,e.prototype.strings=a.emptyArray,e.prototype.tensors=a.emptyArray,e.prototype.graphs=a.emptyArray,e.prototype.sparseTensors=a.emptyArray,e.prototype.typeProtos=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(10).string(e.name),null!=e.f&&Object.hasOwnProperty.call(e,"f")&&t.uint32(21).float(e.f),null!=e.i&&Object.hasOwnProperty.call(e,"i")&&t.uint32(24).int64(e.i),null!=e.s&&Object.hasOwnProperty.call(e,"s")&&t.uint32(34).bytes(e.s),null!=e.t&&Object.hasOwnProperty.call(e,"t")&&s.onnx.TensorProto.encode(e.t,t.uint32(42).fork()).ldelim(),null!=e.g&&Object.hasOwnProperty.call(e,"g")&&s.onnx.GraphProto.encode(e.g,t.uint32(50).fork()).ldelim(),null!=e.floats&&e.floats.length){t.uint32(58).fork();for(var n=0;n<e.floats.length;++n)t.float(e.floats[n]);t.ldelim()}if(null!=e.ints&&e.ints.length){t.uint32(66).fork();for(var n=0;n<e.ints.length;++n)t.int64(e.ints[n]);t.ldelim()}if(null!=e.strings&&e.strings.length)for(var n=0;n<e.strings.length;++n)t.uint32(74).bytes(e.strings[n]);if(null!=e.tensors&&e.tensors.length)for(var n=0;n<e.tensors.length;++n)s.onnx.TensorProto.encode(e.tensors[n],t.uint32(82).fork()).ldelim();if(null!=e.graphs&&e.graphs.length)for(var n=0;n<e.graphs.length;++n)s.onnx.GraphProto.encode(e.graphs[n],t.uint32(90).fork()).ldelim();if(null!=e.docString&&Object.hasOwnProperty.call(e,"docString")&&t.uint32(106).string(e.docString),null!=e.tp&&Object.hasOwnProperty.call(e,"tp")&&s.onnx.TypeProto.encode(e.tp,t.uint32(114).fork()).ldelim(),null!=e.typeProtos&&e.typeProtos.length)for(var n=0;n<e.typeProtos.length;++n)s.onnx.TypeProto.encode(e.typeProtos[n],t.uint32(122).fork()).ldelim();if(null!=e.type&&Object.hasOwnProperty.call(e,"type")&&t.uint32(160).int32(e.type),null!=e.refAttrName&&Object.hasOwnProperty.call(e,"refAttrName")&&t.uint32(170).string(e.refAttrName),null!=e.sparseTensor&&Object.hasOwnProperty.call(e,"sparseTensor")&&s.onnx.SparseTensorProto.encode(e.sparseTensor,t.uint32(178).fork()).ldelim(),null!=e.sparseTensors&&e.sparseTensors.length)for(var n=0;n<e.sparseTensors.length;++n)s.onnx.SparseTensorProto.encode(e.sparseTensors[n],t.uint32(186).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.AttributeProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.name=e.string();break;case 21:o.refAttrName=e.string();break;case 13:o.docString=e.string();break;case 20:o.type=e.int32();break;case 2:o.f=e.float();break;case 3:o.i=e.int64();break;case 4:o.s=e.bytes();break;case 5:o.t=s.onnx.TensorProto.decode(e,e.uint32());break;case 6:o.g=s.onnx.GraphProto.decode(e,e.uint32());break;case 22:o.sparseTensor=s.onnx.SparseTensorProto.decode(e,e.uint32());break;case 14:o.tp=s.onnx.TypeProto.decode(e,e.uint32());break;case 7:if(o.floats&&o.floats.length||(o.floats=[]),(7&a)==2)for(var u=e.uint32()+e.pos;e.pos<u;)o.floats.push(e.float());else o.floats.push(e.float());break;case 8:if(o.ints&&o.ints.length||(o.ints=[]),(7&a)==2)for(var u=e.uint32()+e.pos;e.pos<u;)o.ints.push(e.int64());else o.ints.push(e.int64());break;case 9:o.strings&&o.strings.length||(o.strings=[]),o.strings.push(e.bytes());break;case 10:o.tensors&&o.tensors.length||(o.tensors=[]),o.tensors.push(s.onnx.TensorProto.decode(e,e.uint32()));break;case 11:o.graphs&&o.graphs.length||(o.graphs=[]),o.graphs.push(s.onnx.GraphProto.decode(e,e.uint32()));break;case 23:o.sparseTensors&&o.sparseTensors.length||(o.sparseTensors=[]),o.sparseTensors.push(s.onnx.SparseTensorProto.decode(e,e.uint32()));break;case 15:o.typeProtos&&o.typeProtos.length||(o.typeProtos=[]),o.typeProtos.push(s.onnx.TypeProto.decode(e,e.uint32()));break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.name&&e.hasOwnProperty("name")&&!a.isString(e.name))return"name: string expected";if(null!=e.refAttrName&&e.hasOwnProperty("refAttrName")&&!a.isString(e.refAttrName))return"refAttrName: string expected";if(null!=e.docString&&e.hasOwnProperty("docString")&&!a.isString(e.docString))return"docString: string expected";if(null!=e.type&&e.hasOwnProperty("type"))switch(e.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 11:case 13:case 6:case 7:case 8:case 9:case 10:case 12:case 14:}if(null!=e.f&&e.hasOwnProperty("f")&&"number"!=typeof e.f)return"f: number expected";if(null!=e.i&&e.hasOwnProperty("i")&&!a.isInteger(e.i)&&!(e.i&&a.isInteger(e.i.low)&&a.isInteger(e.i.high)))return"i: integer|Long expected";if(null!=e.s&&e.hasOwnProperty("s")&&!(e.s&&"number"==typeof e.s.length||a.isString(e.s)))return"s: buffer expected";if(null!=e.t&&e.hasOwnProperty("t")){var t=s.onnx.TensorProto.verify(e.t);if(t)return"t."+t}if(null!=e.g&&e.hasOwnProperty("g")){var t=s.onnx.GraphProto.verify(e.g);if(t)return"g."+t}if(null!=e.sparseTensor&&e.hasOwnProperty("sparseTensor")){var t=s.onnx.SparseTensorProto.verify(e.sparseTensor);if(t)return"sparseTensor."+t}if(null!=e.tp&&e.hasOwnProperty("tp")){var t=s.onnx.TypeProto.verify(e.tp);if(t)return"tp."+t}if(null!=e.floats&&e.hasOwnProperty("floats")){if(!Array.isArray(e.floats))return"floats: array expected";for(var n=0;n<e.floats.length;++n)if("number"!=typeof e.floats[n])return"floats: number[] expected"}if(null!=e.ints&&e.hasOwnProperty("ints")){if(!Array.isArray(e.ints))return"ints: array expected";for(var n=0;n<e.ints.length;++n)if(!a.isInteger(e.ints[n])&&!(e.ints[n]&&a.isInteger(e.ints[n].low)&&a.isInteger(e.ints[n].high)))return"ints: integer|Long[] expected"}if(null!=e.strings&&e.hasOwnProperty("strings")){if(!Array.isArray(e.strings))return"strings: array expected";for(var n=0;n<e.strings.length;++n)if(!(e.strings[n]&&"number"==typeof e.strings[n].length||a.isString(e.strings[n])))return"strings: buffer[] expected"}if(null!=e.tensors&&e.hasOwnProperty("tensors")){if(!Array.isArray(e.tensors))return"tensors: array expected";for(var n=0;n<e.tensors.length;++n){var t=s.onnx.TensorProto.verify(e.tensors[n]);if(t)return"tensors."+t}}if(null!=e.graphs&&e.hasOwnProperty("graphs")){if(!Array.isArray(e.graphs))return"graphs: array expected";for(var n=0;n<e.graphs.length;++n){var t=s.onnx.GraphProto.verify(e.graphs[n]);if(t)return"graphs."+t}}if(null!=e.sparseTensors&&e.hasOwnProperty("sparseTensors")){if(!Array.isArray(e.sparseTensors))return"sparseTensors: array expected";for(var n=0;n<e.sparseTensors.length;++n){var t=s.onnx.SparseTensorProto.verify(e.sparseTensors[n]);if(t)return"sparseTensors."+t}}if(null!=e.typeProtos&&e.hasOwnProperty("typeProtos")){if(!Array.isArray(e.typeProtos))return"typeProtos: array expected";for(var n=0;n<e.typeProtos.length;++n){var t=s.onnx.TypeProto.verify(e.typeProtos[n]);if(t)return"typeProtos."+t}}return null},e.fromObject=function(e){if(e instanceof s.onnx.AttributeProto)return e;var t=new s.onnx.AttributeProto;switch(null!=e.name&&(t.name=String(e.name)),null!=e.refAttrName&&(t.refAttrName=String(e.refAttrName)),null!=e.docString&&(t.docString=String(e.docString)),e.type){default:"number"==typeof e.type&&(t.type=e.type);break;case"UNDEFINED":case 0:t.type=0;break;case"FLOAT":case 1:t.type=1;break;case"INT":case 2:t.type=2;break;case"STRING":case 3:t.type=3;break;case"TENSOR":case 4:t.type=4;break;case"GRAPH":case 5:t.type=5;break;case"SPARSE_TENSOR":case 11:t.type=11;break;case"TYPE_PROTO":case 13:t.type=13;break;case"FLOATS":case 6:t.type=6;break;case"INTS":case 7:t.type=7;break;case"STRINGS":case 8:t.type=8;break;case"TENSORS":case 9:t.type=9;break;case"GRAPHS":case 10:t.type=10;break;case"SPARSE_TENSORS":case 12:t.type=12;break;case"TYPE_PROTOS":case 14:t.type=14}if(null!=e.f&&(t.f=Number(e.f)),null!=e.i&&(a.Long?(t.i=a.Long.fromValue(e.i)).unsigned=!1:"string"==typeof e.i?t.i=parseInt(e.i,10):"number"==typeof e.i?t.i=e.i:"object"==typeof e.i&&(t.i=new a.LongBits(e.i.low>>>0,e.i.high>>>0).toNumber())),null!=e.s&&("string"==typeof e.s?a.base64.decode(e.s,t.s=a.newBuffer(a.base64.length(e.s)),0):e.s.length>=0&&(t.s=e.s)),null!=e.t){if("object"!=typeof e.t)throw TypeError(".onnx.AttributeProto.t: object expected");t.t=s.onnx.TensorProto.fromObject(e.t)}if(null!=e.g){if("object"!=typeof e.g)throw TypeError(".onnx.AttributeProto.g: object expected");t.g=s.onnx.GraphProto.fromObject(e.g)}if(null!=e.sparseTensor){if("object"!=typeof e.sparseTensor)throw TypeError(".onnx.AttributeProto.sparseTensor: object expected");t.sparseTensor=s.onnx.SparseTensorProto.fromObject(e.sparseTensor)}if(null!=e.tp){if("object"!=typeof e.tp)throw TypeError(".onnx.AttributeProto.tp: object expected");t.tp=s.onnx.TypeProto.fromObject(e.tp)}if(e.floats){if(!Array.isArray(e.floats))throw TypeError(".onnx.AttributeProto.floats: array expected");t.floats=[];for(var n=0;n<e.floats.length;++n)t.floats[n]=Number(e.floats[n])}if(e.ints){if(!Array.isArray(e.ints))throw TypeError(".onnx.AttributeProto.ints: array expected");t.ints=[];for(var n=0;n<e.ints.length;++n)a.Long?(t.ints[n]=a.Long.fromValue(e.ints[n])).unsigned=!1:"string"==typeof e.ints[n]?t.ints[n]=parseInt(e.ints[n],10):"number"==typeof e.ints[n]?t.ints[n]=e.ints[n]:"object"==typeof e.ints[n]&&(t.ints[n]=new a.LongBits(e.ints[n].low>>>0,e.ints[n].high>>>0).toNumber())}if(e.strings){if(!Array.isArray(e.strings))throw TypeError(".onnx.AttributeProto.strings: array expected");t.strings=[];for(var n=0;n<e.strings.length;++n)"string"==typeof e.strings[n]?a.base64.decode(e.strings[n],t.strings[n]=a.newBuffer(a.base64.length(e.strings[n])),0):e.strings[n].length>=0&&(t.strings[n]=e.strings[n])}if(e.tensors){if(!Array.isArray(e.tensors))throw TypeError(".onnx.AttributeProto.tensors: array expected");t.tensors=[];for(var n=0;n<e.tensors.length;++n){if("object"!=typeof e.tensors[n])throw TypeError(".onnx.AttributeProto.tensors: object expected");t.tensors[n]=s.onnx.TensorProto.fromObject(e.tensors[n])}}if(e.graphs){if(!Array.isArray(e.graphs))throw TypeError(".onnx.AttributeProto.graphs: array expected");t.graphs=[];for(var n=0;n<e.graphs.length;++n){if("object"!=typeof e.graphs[n])throw TypeError(".onnx.AttributeProto.graphs: object expected");t.graphs[n]=s.onnx.GraphProto.fromObject(e.graphs[n])}}if(e.sparseTensors){if(!Array.isArray(e.sparseTensors))throw TypeError(".onnx.AttributeProto.sparseTensors: array expected");t.sparseTensors=[];for(var n=0;n<e.sparseTensors.length;++n){if("object"!=typeof e.sparseTensors[n])throw TypeError(".onnx.AttributeProto.sparseTensors: object expected");t.sparseTensors[n]=s.onnx.SparseTensorProto.fromObject(e.sparseTensors[n])}}if(e.typeProtos){if(!Array.isArray(e.typeProtos))throw TypeError(".onnx.AttributeProto.typeProtos: array expected");t.typeProtos=[];for(var n=0;n<e.typeProtos.length;++n){if("object"!=typeof e.typeProtos[n])throw TypeError(".onnx.AttributeProto.typeProtos: object expected");t.typeProtos[n]=s.onnx.TypeProto.fromObject(e.typeProtos[n])}}return t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.floats=[],n.ints=[],n.strings=[],n.tensors=[],n.graphs=[],n.typeProtos=[],n.sparseTensors=[]),t.defaults){if(n.name="",n.f=0,a.Long){var i=new a.Long(0,0,!1);n.i=t.longs===String?i.toString():t.longs===Number?i.toNumber():i}else n.i=t.longs===String?"0":0;t.bytes===String?n.s="":(n.s=[],t.bytes!==Array&&(n.s=a.newBuffer(n.s))),n.t=null,n.g=null,n.docString="",n.tp=null,n.type=t.enums===String?"UNDEFINED":0,n.refAttrName="",n.sparseTensor=null}if(null!=e.name&&e.hasOwnProperty("name")&&(n.name=e.name),null!=e.f&&e.hasOwnProperty("f")&&(n.f=t.json&&!isFinite(e.f)?String(e.f):e.f),null!=e.i&&e.hasOwnProperty("i")&&("number"==typeof e.i?n.i=t.longs===String?String(e.i):e.i:n.i=t.longs===String?a.Long.prototype.toString.call(e.i):t.longs===Number?new a.LongBits(e.i.low>>>0,e.i.high>>>0).toNumber():e.i),null!=e.s&&e.hasOwnProperty("s")&&(n.s=t.bytes===String?a.base64.encode(e.s,0,e.s.length):t.bytes===Array?Array.prototype.slice.call(e.s):e.s),null!=e.t&&e.hasOwnProperty("t")&&(n.t=s.onnx.TensorProto.toObject(e.t,t)),null!=e.g&&e.hasOwnProperty("g")&&(n.g=s.onnx.GraphProto.toObject(e.g,t)),e.floats&&e.floats.length){n.floats=[];for(var o=0;o<e.floats.length;++o)n.floats[o]=t.json&&!isFinite(e.floats[o])?String(e.floats[o]):e.floats[o]}if(e.ints&&e.ints.length){n.ints=[];for(var o=0;o<e.ints.length;++o)"number"==typeof e.ints[o]?n.ints[o]=t.longs===String?String(e.ints[o]):e.ints[o]:n.ints[o]=t.longs===String?a.Long.prototype.toString.call(e.ints[o]):t.longs===Number?new a.LongBits(e.ints[o].low>>>0,e.ints[o].high>>>0).toNumber():e.ints[o]}if(e.strings&&e.strings.length){n.strings=[];for(var o=0;o<e.strings.length;++o)n.strings[o]=t.bytes===String?a.base64.encode(e.strings[o],0,e.strings[o].length):t.bytes===Array?Array.prototype.slice.call(e.strings[o]):e.strings[o]}if(e.tensors&&e.tensors.length){n.tensors=[];for(var o=0;o<e.tensors.length;++o)n.tensors[o]=s.onnx.TensorProto.toObject(e.tensors[o],t)}if(e.graphs&&e.graphs.length){n.graphs=[];for(var o=0;o<e.graphs.length;++o)n.graphs[o]=s.onnx.GraphProto.toObject(e.graphs[o],t)}if(null!=e.docString&&e.hasOwnProperty("docString")&&(n.docString=e.docString),null!=e.tp&&e.hasOwnProperty("tp")&&(n.tp=s.onnx.TypeProto.toObject(e.tp,t)),e.typeProtos&&e.typeProtos.length){n.typeProtos=[];for(var o=0;o<e.typeProtos.length;++o)n.typeProtos[o]=s.onnx.TypeProto.toObject(e.typeProtos[o],t)}if(null!=e.type&&e.hasOwnProperty("type")&&(n.type=t.enums===String?void 0===s.onnx.AttributeProto.AttributeType[e.type]?e.type:s.onnx.AttributeProto.AttributeType[e.type]:e.type),null!=e.refAttrName&&e.hasOwnProperty("refAttrName")&&(n.refAttrName=e.refAttrName),null!=e.sparseTensor&&e.hasOwnProperty("sparseTensor")&&(n.sparseTensor=s.onnx.SparseTensorProto.toObject(e.sparseTensor,t)),e.sparseTensors&&e.sparseTensors.length){n.sparseTensors=[];for(var o=0;o<e.sparseTensors.length;++o)n.sparseTensors[o]=s.onnx.SparseTensorProto.toObject(e.sparseTensors[o],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.AttributeProto"},e.AttributeType=function(){var e={},t=Object.create(e);return t[e[0]="UNDEFINED"]=0,t[e[1]="FLOAT"]=1,t[e[2]="INT"]=2,t[e[3]="STRING"]=3,t[e[4]="TENSOR"]=4,t[e[5]="GRAPH"]=5,t[e[11]="SPARSE_TENSOR"]=11,t[e[13]="TYPE_PROTO"]=13,t[e[6]="FLOATS"]=6,t[e[7]="INTS"]=7,t[e[8]="STRINGS"]=8,t[e[9]="TENSORS"]=9,t[e[10]="GRAPHS"]=10,t[e[12]="SPARSE_TENSORS"]=12,t[e[14]="TYPE_PROTOS"]=14,t}(),e}(),e.ValueInfoProto=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.name="",e.prototype.type=null,e.prototype.docString="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(10).string(e.name),null!=e.type&&Object.hasOwnProperty.call(e,"type")&&s.onnx.TypeProto.encode(e.type,t.uint32(18).fork()).ldelim(),null!=e.docString&&Object.hasOwnProperty.call(e,"docString")&&t.uint32(26).string(e.docString),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.ValueInfoProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.name=e.string();break;case 2:o.type=s.onnx.TypeProto.decode(e,e.uint32());break;case 3:o.docString=e.string();break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.name&&e.hasOwnProperty("name")&&!a.isString(e.name))return"name: string expected";if(null!=e.type&&e.hasOwnProperty("type")){var t=s.onnx.TypeProto.verify(e.type);if(t)return"type."+t}return null!=e.docString&&e.hasOwnProperty("docString")&&!a.isString(e.docString)?"docString: string expected":null},e.fromObject=function(e){if(e instanceof s.onnx.ValueInfoProto)return e;var t=new s.onnx.ValueInfoProto;if(null!=e.name&&(t.name=String(e.name)),null!=e.type){if("object"!=typeof e.type)throw TypeError(".onnx.ValueInfoProto.type: object expected");t.type=s.onnx.TypeProto.fromObject(e.type)}return null!=e.docString&&(t.docString=String(e.docString)),t},e.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.name="",n.type=null,n.docString=""),null!=e.name&&e.hasOwnProperty("name")&&(n.name=e.name),null!=e.type&&e.hasOwnProperty("type")&&(n.type=s.onnx.TypeProto.toObject(e.type,t)),null!=e.docString&&e.hasOwnProperty("docString")&&(n.docString=e.docString),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.ValueInfoProto"},e}(),e.NodeProto=function(){function e(e){if(this.input=[],this.output=[],this.attribute=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.input=a.emptyArray,e.prototype.output=a.emptyArray,e.prototype.name="",e.prototype.opType="",e.prototype.domain="",e.prototype.attribute=a.emptyArray,e.prototype.docString="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.input&&e.input.length)for(var n=0;n<e.input.length;++n)t.uint32(10).string(e.input[n]);if(null!=e.output&&e.output.length)for(var n=0;n<e.output.length;++n)t.uint32(18).string(e.output[n]);if(null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(26).string(e.name),null!=e.opType&&Object.hasOwnProperty.call(e,"opType")&&t.uint32(34).string(e.opType),null!=e.attribute&&e.attribute.length)for(var n=0;n<e.attribute.length;++n)s.onnx.AttributeProto.encode(e.attribute[n],t.uint32(42).fork()).ldelim();return null!=e.docString&&Object.hasOwnProperty.call(e,"docString")&&t.uint32(50).string(e.docString),null!=e.domain&&Object.hasOwnProperty.call(e,"domain")&&t.uint32(58).string(e.domain),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.NodeProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.input&&o.input.length||(o.input=[]),o.input.push(e.string());break;case 2:o.output&&o.output.length||(o.output=[]),o.output.push(e.string());break;case 3:o.name=e.string();break;case 4:o.opType=e.string();break;case 7:o.domain=e.string();break;case 5:o.attribute&&o.attribute.length||(o.attribute=[]),o.attribute.push(s.onnx.AttributeProto.decode(e,e.uint32()));break;case 6:o.docString=e.string();break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.input&&e.hasOwnProperty("input")){if(!Array.isArray(e.input))return"input: array expected";for(var t=0;t<e.input.length;++t)if(!a.isString(e.input[t]))return"input: string[] expected"}if(null!=e.output&&e.hasOwnProperty("output")){if(!Array.isArray(e.output))return"output: array expected";for(var t=0;t<e.output.length;++t)if(!a.isString(e.output[t]))return"output: string[] expected"}if(null!=e.name&&e.hasOwnProperty("name")&&!a.isString(e.name))return"name: string expected";if(null!=e.opType&&e.hasOwnProperty("opType")&&!a.isString(e.opType))return"opType: string expected";if(null!=e.domain&&e.hasOwnProperty("domain")&&!a.isString(e.domain))return"domain: string expected";if(null!=e.attribute&&e.hasOwnProperty("attribute")){if(!Array.isArray(e.attribute))return"attribute: array expected";for(var t=0;t<e.attribute.length;++t){var n=s.onnx.AttributeProto.verify(e.attribute[t]);if(n)return"attribute."+n}}return null!=e.docString&&e.hasOwnProperty("docString")&&!a.isString(e.docString)?"docString: string expected":null},e.fromObject=function(e){if(e instanceof s.onnx.NodeProto)return e;var t=new s.onnx.NodeProto;if(e.input){if(!Array.isArray(e.input))throw TypeError(".onnx.NodeProto.input: array expected");t.input=[];for(var n=0;n<e.input.length;++n)t.input[n]=String(e.input[n])}if(e.output){if(!Array.isArray(e.output))throw TypeError(".onnx.NodeProto.output: array expected");t.output=[];for(var n=0;n<e.output.length;++n)t.output[n]=String(e.output[n])}if(null!=e.name&&(t.name=String(e.name)),null!=e.opType&&(t.opType=String(e.opType)),null!=e.domain&&(t.domain=String(e.domain)),e.attribute){if(!Array.isArray(e.attribute))throw TypeError(".onnx.NodeProto.attribute: array expected");t.attribute=[];for(var n=0;n<e.attribute.length;++n){if("object"!=typeof e.attribute[n])throw TypeError(".onnx.NodeProto.attribute: object expected");t.attribute[n]=s.onnx.AttributeProto.fromObject(e.attribute[n])}}return null!=e.docString&&(t.docString=String(e.docString)),t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.input=[],n.output=[],n.attribute=[]),t.defaults&&(n.name="",n.opType="",n.docString="",n.domain=""),e.input&&e.input.length){n.input=[];for(var i=0;i<e.input.length;++i)n.input[i]=e.input[i]}if(e.output&&e.output.length){n.output=[];for(var i=0;i<e.output.length;++i)n.output[i]=e.output[i]}if(null!=e.name&&e.hasOwnProperty("name")&&(n.name=e.name),null!=e.opType&&e.hasOwnProperty("opType")&&(n.opType=e.opType),e.attribute&&e.attribute.length){n.attribute=[];for(var i=0;i<e.attribute.length;++i)n.attribute[i]=s.onnx.AttributeProto.toObject(e.attribute[i],t)}return null!=e.docString&&e.hasOwnProperty("docString")&&(n.docString=e.docString),null!=e.domain&&e.hasOwnProperty("domain")&&(n.domain=e.domain),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.NodeProto"},e}(),e.TrainingInfoProto=function(){function e(e){if(this.initializationBinding=[],this.updateBinding=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.initialization=null,e.prototype.algorithm=null,e.prototype.initializationBinding=a.emptyArray,e.prototype.updateBinding=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.initialization&&Object.hasOwnProperty.call(e,"initialization")&&s.onnx.GraphProto.encode(e.initialization,t.uint32(10).fork()).ldelim(),null!=e.algorithm&&Object.hasOwnProperty.call(e,"algorithm")&&s.onnx.GraphProto.encode(e.algorithm,t.uint32(18).fork()).ldelim(),null!=e.initializationBinding&&e.initializationBinding.length)for(var n=0;n<e.initializationBinding.length;++n)s.onnx.StringStringEntryProto.encode(e.initializationBinding[n],t.uint32(26).fork()).ldelim();if(null!=e.updateBinding&&e.updateBinding.length)for(var n=0;n<e.updateBinding.length;++n)s.onnx.StringStringEntryProto.encode(e.updateBinding[n],t.uint32(34).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TrainingInfoProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.initialization=s.onnx.GraphProto.decode(e,e.uint32());break;case 2:o.algorithm=s.onnx.GraphProto.decode(e,e.uint32());break;case 3:o.initializationBinding&&o.initializationBinding.length||(o.initializationBinding=[]),o.initializationBinding.push(s.onnx.StringStringEntryProto.decode(e,e.uint32()));break;case 4:o.updateBinding&&o.updateBinding.length||(o.updateBinding=[]),o.updateBinding.push(s.onnx.StringStringEntryProto.decode(e,e.uint32()));break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.initialization&&e.hasOwnProperty("initialization")){var t=s.onnx.GraphProto.verify(e.initialization);if(t)return"initialization."+t}if(null!=e.algorithm&&e.hasOwnProperty("algorithm")){var t=s.onnx.GraphProto.verify(e.algorithm);if(t)return"algorithm."+t}if(null!=e.initializationBinding&&e.hasOwnProperty("initializationBinding")){if(!Array.isArray(e.initializationBinding))return"initializationBinding: array expected";for(var n=0;n<e.initializationBinding.length;++n){var t=s.onnx.StringStringEntryProto.verify(e.initializationBinding[n]);if(t)return"initializationBinding."+t}}if(null!=e.updateBinding&&e.hasOwnProperty("updateBinding")){if(!Array.isArray(e.updateBinding))return"updateBinding: array expected";for(var n=0;n<e.updateBinding.length;++n){var t=s.onnx.StringStringEntryProto.verify(e.updateBinding[n]);if(t)return"updateBinding."+t}}return null},e.fromObject=function(e){if(e instanceof s.onnx.TrainingInfoProto)return e;var t=new s.onnx.TrainingInfoProto;if(null!=e.initialization){if("object"!=typeof e.initialization)throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");t.initialization=s.onnx.GraphProto.fromObject(e.initialization)}if(null!=e.algorithm){if("object"!=typeof e.algorithm)throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");t.algorithm=s.onnx.GraphProto.fromObject(e.algorithm)}if(e.initializationBinding){if(!Array.isArray(e.initializationBinding))throw TypeError(".onnx.TrainingInfoProto.initializationBinding: array expected");t.initializationBinding=[];for(var n=0;n<e.initializationBinding.length;++n){if("object"!=typeof e.initializationBinding[n])throw TypeError(".onnx.TrainingInfoProto.initializationBinding: object expected");t.initializationBinding[n]=s.onnx.StringStringEntryProto.fromObject(e.initializationBinding[n])}}if(e.updateBinding){if(!Array.isArray(e.updateBinding))throw TypeError(".onnx.TrainingInfoProto.updateBinding: array expected");t.updateBinding=[];for(var n=0;n<e.updateBinding.length;++n){if("object"!=typeof e.updateBinding[n])throw TypeError(".onnx.TrainingInfoProto.updateBinding: object expected");t.updateBinding[n]=s.onnx.StringStringEntryProto.fromObject(e.updateBinding[n])}}return t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.initializationBinding=[],n.updateBinding=[]),t.defaults&&(n.initialization=null,n.algorithm=null),null!=e.initialization&&e.hasOwnProperty("initialization")&&(n.initialization=s.onnx.GraphProto.toObject(e.initialization,t)),null!=e.algorithm&&e.hasOwnProperty("algorithm")&&(n.algorithm=s.onnx.GraphProto.toObject(e.algorithm,t)),e.initializationBinding&&e.initializationBinding.length){n.initializationBinding=[];for(var i=0;i<e.initializationBinding.length;++i)n.initializationBinding[i]=s.onnx.StringStringEntryProto.toObject(e.initializationBinding[i],t)}if(e.updateBinding&&e.updateBinding.length){n.updateBinding=[];for(var i=0;i<e.updateBinding.length;++i)n.updateBinding[i]=s.onnx.StringStringEntryProto.toObject(e.updateBinding[i],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TrainingInfoProto"},e}(),e.ModelProto=function(){function e(e){if(this.opsetImport=[],this.metadataProps=[],this.trainingInfo=[],this.functions=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.irVersion=a.Long?a.Long.fromBits(0,0,!1):0,e.prototype.opsetImport=a.emptyArray,e.prototype.producerName="",e.prototype.producerVersion="",e.prototype.domain="",e.prototype.modelVersion=a.Long?a.Long.fromBits(0,0,!1):0,e.prototype.docString="",e.prototype.graph=null,e.prototype.metadataProps=a.emptyArray,e.prototype.trainingInfo=a.emptyArray,e.prototype.functions=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.irVersion&&Object.hasOwnProperty.call(e,"irVersion")&&t.uint32(8).int64(e.irVersion),null!=e.producerName&&Object.hasOwnProperty.call(e,"producerName")&&t.uint32(18).string(e.producerName),null!=e.producerVersion&&Object.hasOwnProperty.call(e,"producerVersion")&&t.uint32(26).string(e.producerVersion),null!=e.domain&&Object.hasOwnProperty.call(e,"domain")&&t.uint32(34).string(e.domain),null!=e.modelVersion&&Object.hasOwnProperty.call(e,"modelVersion")&&t.uint32(40).int64(e.modelVersion),null!=e.docString&&Object.hasOwnProperty.call(e,"docString")&&t.uint32(50).string(e.docString),null!=e.graph&&Object.hasOwnProperty.call(e,"graph")&&s.onnx.GraphProto.encode(e.graph,t.uint32(58).fork()).ldelim(),null!=e.opsetImport&&e.opsetImport.length)for(var n=0;n<e.opsetImport.length;++n)s.onnx.OperatorSetIdProto.encode(e.opsetImport[n],t.uint32(66).fork()).ldelim();if(null!=e.metadataProps&&e.metadataProps.length)for(var n=0;n<e.metadataProps.length;++n)s.onnx.StringStringEntryProto.encode(e.metadataProps[n],t.uint32(114).fork()).ldelim();if(null!=e.trainingInfo&&e.trainingInfo.length)for(var n=0;n<e.trainingInfo.length;++n)s.onnx.TrainingInfoProto.encode(e.trainingInfo[n],t.uint32(162).fork()).ldelim();if(null!=e.functions&&e.functions.length)for(var n=0;n<e.functions.length;++n)s.onnx.FunctionProto.encode(e.functions[n],t.uint32(202).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.ModelProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.irVersion=e.int64();break;case 8:o.opsetImport&&o.opsetImport.length||(o.opsetImport=[]),o.opsetImport.push(s.onnx.OperatorSetIdProto.decode(e,e.uint32()));break;case 2:o.producerName=e.string();break;case 3:o.producerVersion=e.string();break;case 4:o.domain=e.string();break;case 5:o.modelVersion=e.int64();break;case 6:o.docString=e.string();break;case 7:o.graph=s.onnx.GraphProto.decode(e,e.uint32());break;case 14:o.metadataProps&&o.metadataProps.length||(o.metadataProps=[]),o.metadataProps.push(s.onnx.StringStringEntryProto.decode(e,e.uint32()));break;case 20:o.trainingInfo&&o.trainingInfo.length||(o.trainingInfo=[]),o.trainingInfo.push(s.onnx.TrainingInfoProto.decode(e,e.uint32()));break;case 25:o.functions&&o.functions.length||(o.functions=[]),o.functions.push(s.onnx.FunctionProto.decode(e,e.uint32()));break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.irVersion&&e.hasOwnProperty("irVersion")&&!a.isInteger(e.irVersion)&&!(e.irVersion&&a.isInteger(e.irVersion.low)&&a.isInteger(e.irVersion.high)))return"irVersion: integer|Long expected";if(null!=e.opsetImport&&e.hasOwnProperty("opsetImport")){if(!Array.isArray(e.opsetImport))return"opsetImport: array expected";for(var t=0;t<e.opsetImport.length;++t){var n=s.onnx.OperatorSetIdProto.verify(e.opsetImport[t]);if(n)return"opsetImport."+n}}if(null!=e.producerName&&e.hasOwnProperty("producerName")&&!a.isString(e.producerName))return"producerName: string expected";if(null!=e.producerVersion&&e.hasOwnProperty("producerVersion")&&!a.isString(e.producerVersion))return"producerVersion: string expected";if(null!=e.domain&&e.hasOwnProperty("domain")&&!a.isString(e.domain))return"domain: string expected";if(null!=e.modelVersion&&e.hasOwnProperty("modelVersion")&&!a.isInteger(e.modelVersion)&&!(e.modelVersion&&a.isInteger(e.modelVersion.low)&&a.isInteger(e.modelVersion.high)))return"modelVersion: integer|Long expected";if(null!=e.docString&&e.hasOwnProperty("docString")&&!a.isString(e.docString))return"docString: string expected";if(null!=e.graph&&e.hasOwnProperty("graph")){var n=s.onnx.GraphProto.verify(e.graph);if(n)return"graph."+n}if(null!=e.metadataProps&&e.hasOwnProperty("metadataProps")){if(!Array.isArray(e.metadataProps))return"metadataProps: array expected";for(var t=0;t<e.metadataProps.length;++t){var n=s.onnx.StringStringEntryProto.verify(e.metadataProps[t]);if(n)return"metadataProps."+n}}if(null!=e.trainingInfo&&e.hasOwnProperty("trainingInfo")){if(!Array.isArray(e.trainingInfo))return"trainingInfo: array expected";for(var t=0;t<e.trainingInfo.length;++t){var n=s.onnx.TrainingInfoProto.verify(e.trainingInfo[t]);if(n)return"trainingInfo."+n}}if(null!=e.functions&&e.hasOwnProperty("functions")){if(!Array.isArray(e.functions))return"functions: array expected";for(var t=0;t<e.functions.length;++t){var n=s.onnx.FunctionProto.verify(e.functions[t]);if(n)return"functions."+n}}return null},e.fromObject=function(e){if(e instanceof s.onnx.ModelProto)return e;var t=new s.onnx.ModelProto;if(null!=e.irVersion&&(a.Long?(t.irVersion=a.Long.fromValue(e.irVersion)).unsigned=!1:"string"==typeof e.irVersion?t.irVersion=parseInt(e.irVersion,10):"number"==typeof e.irVersion?t.irVersion=e.irVersion:"object"==typeof e.irVersion&&(t.irVersion=new a.LongBits(e.irVersion.low>>>0,e.irVersion.high>>>0).toNumber())),e.opsetImport){if(!Array.isArray(e.opsetImport))throw TypeError(".onnx.ModelProto.opsetImport: array expected");t.opsetImport=[];for(var n=0;n<e.opsetImport.length;++n){if("object"!=typeof e.opsetImport[n])throw TypeError(".onnx.ModelProto.opsetImport: object expected");t.opsetImport[n]=s.onnx.OperatorSetIdProto.fromObject(e.opsetImport[n])}}if(null!=e.producerName&&(t.producerName=String(e.producerName)),null!=e.producerVersion&&(t.producerVersion=String(e.producerVersion)),null!=e.domain&&(t.domain=String(e.domain)),null!=e.modelVersion&&(a.Long?(t.modelVersion=a.Long.fromValue(e.modelVersion)).unsigned=!1:"string"==typeof e.modelVersion?t.modelVersion=parseInt(e.modelVersion,10):"number"==typeof e.modelVersion?t.modelVersion=e.modelVersion:"object"==typeof e.modelVersion&&(t.modelVersion=new a.LongBits(e.modelVersion.low>>>0,e.modelVersion.high>>>0).toNumber())),null!=e.docString&&(t.docString=String(e.docString)),null!=e.graph){if("object"!=typeof e.graph)throw TypeError(".onnx.ModelProto.graph: object expected");t.graph=s.onnx.GraphProto.fromObject(e.graph)}if(e.metadataProps){if(!Array.isArray(e.metadataProps))throw TypeError(".onnx.ModelProto.metadataProps: array expected");t.metadataProps=[];for(var n=0;n<e.metadataProps.length;++n){if("object"!=typeof e.metadataProps[n])throw TypeError(".onnx.ModelProto.metadataProps: object expected");t.metadataProps[n]=s.onnx.StringStringEntryProto.fromObject(e.metadataProps[n])}}if(e.trainingInfo){if(!Array.isArray(e.trainingInfo))throw TypeError(".onnx.ModelProto.trainingInfo: array expected");t.trainingInfo=[];for(var n=0;n<e.trainingInfo.length;++n){if("object"!=typeof e.trainingInfo[n])throw TypeError(".onnx.ModelProto.trainingInfo: object expected");t.trainingInfo[n]=s.onnx.TrainingInfoProto.fromObject(e.trainingInfo[n])}}if(e.functions){if(!Array.isArray(e.functions))throw TypeError(".onnx.ModelProto.functions: array expected");t.functions=[];for(var n=0;n<e.functions.length;++n){if("object"!=typeof e.functions[n])throw TypeError(".onnx.ModelProto.functions: object expected");t.functions[n]=s.onnx.FunctionProto.fromObject(e.functions[n])}}return t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.opsetImport=[],n.metadataProps=[],n.trainingInfo=[],n.functions=[]),t.defaults){if(a.Long){var i=new a.Long(0,0,!1);n.irVersion=t.longs===String?i.toString():t.longs===Number?i.toNumber():i}else n.irVersion=t.longs===String?"0":0;if(n.producerName="",n.producerVersion="",n.domain="",a.Long){var i=new a.Long(0,0,!1);n.modelVersion=t.longs===String?i.toString():t.longs===Number?i.toNumber():i}else n.modelVersion=t.longs===String?"0":0;n.docString="",n.graph=null}if(null!=e.irVersion&&e.hasOwnProperty("irVersion")&&("number"==typeof e.irVersion?n.irVersion=t.longs===String?String(e.irVersion):e.irVersion:n.irVersion=t.longs===String?a.Long.prototype.toString.call(e.irVersion):t.longs===Number?new a.LongBits(e.irVersion.low>>>0,e.irVersion.high>>>0).toNumber():e.irVersion),null!=e.producerName&&e.hasOwnProperty("producerName")&&(n.producerName=e.producerName),null!=e.producerVersion&&e.hasOwnProperty("producerVersion")&&(n.producerVersion=e.producerVersion),null!=e.domain&&e.hasOwnProperty("domain")&&(n.domain=e.domain),null!=e.modelVersion&&e.hasOwnProperty("modelVersion")&&("number"==typeof e.modelVersion?n.modelVersion=t.longs===String?String(e.modelVersion):e.modelVersion:n.modelVersion=t.longs===String?a.Long.prototype.toString.call(e.modelVersion):t.longs===Number?new a.LongBits(e.modelVersion.low>>>0,e.modelVersion.high>>>0).toNumber():e.modelVersion),null!=e.docString&&e.hasOwnProperty("docString")&&(n.docString=e.docString),null!=e.graph&&e.hasOwnProperty("graph")&&(n.graph=s.onnx.GraphProto.toObject(e.graph,t)),e.opsetImport&&e.opsetImport.length){n.opsetImport=[];for(var o=0;o<e.opsetImport.length;++o)n.opsetImport[o]=s.onnx.OperatorSetIdProto.toObject(e.opsetImport[o],t)}if(e.metadataProps&&e.metadataProps.length){n.metadataProps=[];for(var o=0;o<e.metadataProps.length;++o)n.metadataProps[o]=s.onnx.StringStringEntryProto.toObject(e.metadataProps[o],t)}if(e.trainingInfo&&e.trainingInfo.length){n.trainingInfo=[];for(var o=0;o<e.trainingInfo.length;++o)n.trainingInfo[o]=s.onnx.TrainingInfoProto.toObject(e.trainingInfo[o],t)}if(e.functions&&e.functions.length){n.functions=[];for(var o=0;o<e.functions.length;++o)n.functions[o]=s.onnx.FunctionProto.toObject(e.functions[o],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.ModelProto"},e}(),e.StringStringEntryProto=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.key="",e.prototype.value="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.key&&Object.hasOwnProperty.call(e,"key")&&t.uint32(10).string(e.key),null!=e.value&&Object.hasOwnProperty.call(e,"value")&&t.uint32(18).string(e.value),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.StringStringEntryProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.key=e.string();break;case 2:o.value=e.string();break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.key&&e.hasOwnProperty("key")&&!a.isString(e.key)?"key: string expected":null!=e.value&&e.hasOwnProperty("value")&&!a.isString(e.value)?"value: string expected":null},e.fromObject=function(e){if(e instanceof s.onnx.StringStringEntryProto)return e;var t=new s.onnx.StringStringEntryProto;return null!=e.key&&(t.key=String(e.key)),null!=e.value&&(t.value=String(e.value)),t},e.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.key="",n.value=""),null!=e.key&&e.hasOwnProperty("key")&&(n.key=e.key),null!=e.value&&e.hasOwnProperty("value")&&(n.value=e.value),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.StringStringEntryProto"},e}(),e.TensorAnnotation=function(){function e(e){if(this.quantParameterTensorNames=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.tensorName="",e.prototype.quantParameterTensorNames=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.tensorName&&Object.hasOwnProperty.call(e,"tensorName")&&t.uint32(10).string(e.tensorName),null!=e.quantParameterTensorNames&&e.quantParameterTensorNames.length)for(var n=0;n<e.quantParameterTensorNames.length;++n)s.onnx.StringStringEntryProto.encode(e.quantParameterTensorNames[n],t.uint32(18).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TensorAnnotation;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.tensorName=e.string();break;case 2:o.quantParameterTensorNames&&o.quantParameterTensorNames.length||(o.quantParameterTensorNames=[]),o.quantParameterTensorNames.push(s.onnx.StringStringEntryProto.decode(e,e.uint32()));break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.tensorName&&e.hasOwnProperty("tensorName")&&!a.isString(e.tensorName))return"tensorName: string expected";if(null!=e.quantParameterTensorNames&&e.hasOwnProperty("quantParameterTensorNames")){if(!Array.isArray(e.quantParameterTensorNames))return"quantParameterTensorNames: array expected";for(var t=0;t<e.quantParameterTensorNames.length;++t){var n=s.onnx.StringStringEntryProto.verify(e.quantParameterTensorNames[t]);if(n)return"quantParameterTensorNames."+n}}return null},e.fromObject=function(e){if(e instanceof s.onnx.TensorAnnotation)return e;var t=new s.onnx.TensorAnnotation;if(null!=e.tensorName&&(t.tensorName=String(e.tensorName)),e.quantParameterTensorNames){if(!Array.isArray(e.quantParameterTensorNames))throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");t.quantParameterTensorNames=[];for(var n=0;n<e.quantParameterTensorNames.length;++n){if("object"!=typeof e.quantParameterTensorNames[n])throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");t.quantParameterTensorNames[n]=s.onnx.StringStringEntryProto.fromObject(e.quantParameterTensorNames[n])}}return t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.quantParameterTensorNames=[]),t.defaults&&(n.tensorName=""),null!=e.tensorName&&e.hasOwnProperty("tensorName")&&(n.tensorName=e.tensorName),e.quantParameterTensorNames&&e.quantParameterTensorNames.length){n.quantParameterTensorNames=[];for(var i=0;i<e.quantParameterTensorNames.length;++i)n.quantParameterTensorNames[i]=s.onnx.StringStringEntryProto.toObject(e.quantParameterTensorNames[i],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TensorAnnotation"},e}(),e.GraphProto=function(){function e(e){if(this.node=[],this.initializer=[],this.sparseInitializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.node=a.emptyArray,e.prototype.name="",e.prototype.initializer=a.emptyArray,e.prototype.sparseInitializer=a.emptyArray,e.prototype.docString="",e.prototype.input=a.emptyArray,e.prototype.output=a.emptyArray,e.prototype.valueInfo=a.emptyArray,e.prototype.quantizationAnnotation=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.node&&e.node.length)for(var n=0;n<e.node.length;++n)s.onnx.NodeProto.encode(e.node[n],t.uint32(10).fork()).ldelim();if(null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(18).string(e.name),null!=e.initializer&&e.initializer.length)for(var n=0;n<e.initializer.length;++n)s.onnx.TensorProto.encode(e.initializer[n],t.uint32(42).fork()).ldelim();if(null!=e.docString&&Object.hasOwnProperty.call(e,"docString")&&t.uint32(82).string(e.docString),null!=e.input&&e.input.length)for(var n=0;n<e.input.length;++n)s.onnx.ValueInfoProto.encode(e.input[n],t.uint32(90).fork()).ldelim();if(null!=e.output&&e.output.length)for(var n=0;n<e.output.length;++n)s.onnx.ValueInfoProto.encode(e.output[n],t.uint32(98).fork()).ldelim();if(null!=e.valueInfo&&e.valueInfo.length)for(var n=0;n<e.valueInfo.length;++n)s.onnx.ValueInfoProto.encode(e.valueInfo[n],t.uint32(106).fork()).ldelim();if(null!=e.quantizationAnnotation&&e.quantizationAnnotation.length)for(var n=0;n<e.quantizationAnnotation.length;++n)s.onnx.TensorAnnotation.encode(e.quantizationAnnotation[n],t.uint32(114).fork()).ldelim();if(null!=e.sparseInitializer&&e.sparseInitializer.length)for(var n=0;n<e.sparseInitializer.length;++n)s.onnx.SparseTensorProto.encode(e.sparseInitializer[n],t.uint32(122).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.GraphProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.node&&o.node.length||(o.node=[]),o.node.push(s.onnx.NodeProto.decode(e,e.uint32()));break;case 2:o.name=e.string();break;case 5:o.initializer&&o.initializer.length||(o.initializer=[]),o.initializer.push(s.onnx.TensorProto.decode(e,e.uint32()));break;case 15:o.sparseInitializer&&o.sparseInitializer.length||(o.sparseInitializer=[]),o.sparseInitializer.push(s.onnx.SparseTensorProto.decode(e,e.uint32()));break;case 10:o.docString=e.string();break;case 11:o.input&&o.input.length||(o.input=[]),o.input.push(s.onnx.ValueInfoProto.decode(e,e.uint32()));break;case 12:o.output&&o.output.length||(o.output=[]),o.output.push(s.onnx.ValueInfoProto.decode(e,e.uint32()));break;case 13:o.valueInfo&&o.valueInfo.length||(o.valueInfo=[]),o.valueInfo.push(s.onnx.ValueInfoProto.decode(e,e.uint32()));break;case 14:o.quantizationAnnotation&&o.quantizationAnnotation.length||(o.quantizationAnnotation=[]),o.quantizationAnnotation.push(s.onnx.TensorAnnotation.decode(e,e.uint32()));break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.node&&e.hasOwnProperty("node")){if(!Array.isArray(e.node))return"node: array expected";for(var t=0;t<e.node.length;++t){var n=s.onnx.NodeProto.verify(e.node[t]);if(n)return"node."+n}}if(null!=e.name&&e.hasOwnProperty("name")&&!a.isString(e.name))return"name: string expected";if(null!=e.initializer&&e.hasOwnProperty("initializer")){if(!Array.isArray(e.initializer))return"initializer: array expected";for(var t=0;t<e.initializer.length;++t){var n=s.onnx.TensorProto.verify(e.initializer[t]);if(n)return"initializer."+n}}if(null!=e.sparseInitializer&&e.hasOwnProperty("sparseInitializer")){if(!Array.isArray(e.sparseInitializer))return"sparseInitializer: array expected";for(var t=0;t<e.sparseInitializer.length;++t){var n=s.onnx.SparseTensorProto.verify(e.sparseInitializer[t]);if(n)return"sparseInitializer."+n}}if(null!=e.docString&&e.hasOwnProperty("docString")&&!a.isString(e.docString))return"docString: string expected";if(null!=e.input&&e.hasOwnProperty("input")){if(!Array.isArray(e.input))return"input: array expected";for(var t=0;t<e.input.length;++t){var n=s.onnx.ValueInfoProto.verify(e.input[t]);if(n)return"input."+n}}if(null!=e.output&&e.hasOwnProperty("output")){if(!Array.isArray(e.output))return"output: array expected";for(var t=0;t<e.output.length;++t){var n=s.onnx.ValueInfoProto.verify(e.output[t]);if(n)return"output."+n}}if(null!=e.valueInfo&&e.hasOwnProperty("valueInfo")){if(!Array.isArray(e.valueInfo))return"valueInfo: array expected";for(var t=0;t<e.valueInfo.length;++t){var n=s.onnx.ValueInfoProto.verify(e.valueInfo[t]);if(n)return"valueInfo."+n}}if(null!=e.quantizationAnnotation&&e.hasOwnProperty("quantizationAnnotation")){if(!Array.isArray(e.quantizationAnnotation))return"quantizationAnnotation: array expected";for(var t=0;t<e.quantizationAnnotation.length;++t){var n=s.onnx.TensorAnnotation.verify(e.quantizationAnnotation[t]);if(n)return"quantizationAnnotation."+n}}return null},e.fromObject=function(e){if(e instanceof s.onnx.GraphProto)return e;var t=new s.onnx.GraphProto;if(e.node){if(!Array.isArray(e.node))throw TypeError(".onnx.GraphProto.node: array expected");t.node=[];for(var n=0;n<e.node.length;++n){if("object"!=typeof e.node[n])throw TypeError(".onnx.GraphProto.node: object expected");t.node[n]=s.onnx.NodeProto.fromObject(e.node[n])}}if(null!=e.name&&(t.name=String(e.name)),e.initializer){if(!Array.isArray(e.initializer))throw TypeError(".onnx.GraphProto.initializer: array expected");t.initializer=[];for(var n=0;n<e.initializer.length;++n){if("object"!=typeof e.initializer[n])throw TypeError(".onnx.GraphProto.initializer: object expected");t.initializer[n]=s.onnx.TensorProto.fromObject(e.initializer[n])}}if(e.sparseInitializer){if(!Array.isArray(e.sparseInitializer))throw TypeError(".onnx.GraphProto.sparseInitializer: array expected");t.sparseInitializer=[];for(var n=0;n<e.sparseInitializer.length;++n){if("object"!=typeof e.sparseInitializer[n])throw TypeError(".onnx.GraphProto.sparseInitializer: object expected");t.sparseInitializer[n]=s.onnx.SparseTensorProto.fromObject(e.sparseInitializer[n])}}if(null!=e.docString&&(t.docString=String(e.docString)),e.input){if(!Array.isArray(e.input))throw TypeError(".onnx.GraphProto.input: array expected");t.input=[];for(var n=0;n<e.input.length;++n){if("object"!=typeof e.input[n])throw TypeError(".onnx.GraphProto.input: object expected");t.input[n]=s.onnx.ValueInfoProto.fromObject(e.input[n])}}if(e.output){if(!Array.isArray(e.output))throw TypeError(".onnx.GraphProto.output: array expected");t.output=[];for(var n=0;n<e.output.length;++n){if("object"!=typeof e.output[n])throw TypeError(".onnx.GraphProto.output: object expected");t.output[n]=s.onnx.ValueInfoProto.fromObject(e.output[n])}}if(e.valueInfo){if(!Array.isArray(e.valueInfo))throw TypeError(".onnx.GraphProto.valueInfo: array expected");t.valueInfo=[];for(var n=0;n<e.valueInfo.length;++n){if("object"!=typeof e.valueInfo[n])throw TypeError(".onnx.GraphProto.valueInfo: object expected");t.valueInfo[n]=s.onnx.ValueInfoProto.fromObject(e.valueInfo[n])}}if(e.quantizationAnnotation){if(!Array.isArray(e.quantizationAnnotation))throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");t.quantizationAnnotation=[];for(var n=0;n<e.quantizationAnnotation.length;++n){if("object"!=typeof e.quantizationAnnotation[n])throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");t.quantizationAnnotation[n]=s.onnx.TensorAnnotation.fromObject(e.quantizationAnnotation[n])}}return t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.node=[],n.initializer=[],n.input=[],n.output=[],n.valueInfo=[],n.quantizationAnnotation=[],n.sparseInitializer=[]),t.defaults&&(n.name="",n.docString=""),e.node&&e.node.length){n.node=[];for(var i=0;i<e.node.length;++i)n.node[i]=s.onnx.NodeProto.toObject(e.node[i],t)}if(null!=e.name&&e.hasOwnProperty("name")&&(n.name=e.name),e.initializer&&e.initializer.length){n.initializer=[];for(var i=0;i<e.initializer.length;++i)n.initializer[i]=s.onnx.TensorProto.toObject(e.initializer[i],t)}if(null!=e.docString&&e.hasOwnProperty("docString")&&(n.docString=e.docString),e.input&&e.input.length){n.input=[];for(var i=0;i<e.input.length;++i)n.input[i]=s.onnx.ValueInfoProto.toObject(e.input[i],t)}if(e.output&&e.output.length){n.output=[];for(var i=0;i<e.output.length;++i)n.output[i]=s.onnx.ValueInfoProto.toObject(e.output[i],t)}if(e.valueInfo&&e.valueInfo.length){n.valueInfo=[];for(var i=0;i<e.valueInfo.length;++i)n.valueInfo[i]=s.onnx.ValueInfoProto.toObject(e.valueInfo[i],t)}if(e.quantizationAnnotation&&e.quantizationAnnotation.length){n.quantizationAnnotation=[];for(var i=0;i<e.quantizationAnnotation.length;++i)n.quantizationAnnotation[i]=s.onnx.TensorAnnotation.toObject(e.quantizationAnnotation[i],t)}if(e.sparseInitializer&&e.sparseInitializer.length){n.sparseInitializer=[];for(var i=0;i<e.sparseInitializer.length;++i)n.sparseInitializer[i]=s.onnx.SparseTensorProto.toObject(e.sparseInitializer[i],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.GraphProto"},e}(),e.TensorProto=function(){function e(e){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.dims=a.emptyArray,e.prototype.dataType=0,e.prototype.segment=null,e.prototype.floatData=a.emptyArray,e.prototype.int32Data=a.emptyArray,e.prototype.stringData=a.emptyArray,e.prototype.int64Data=a.emptyArray,e.prototype.name="",e.prototype.docString="",e.prototype.rawData=a.newBuffer([]),e.prototype.externalData=a.emptyArray,e.prototype.dataLocation=0,e.prototype.doubleData=a.emptyArray,e.prototype.uint64Data=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.dims&&e.dims.length){t.uint32(10).fork();for(var n=0;n<e.dims.length;++n)t.int64(e.dims[n]);t.ldelim()}if(null!=e.dataType&&Object.hasOwnProperty.call(e,"dataType")&&t.uint32(16).int32(e.dataType),null!=e.segment&&Object.hasOwnProperty.call(e,"segment")&&s.onnx.TensorProto.Segment.encode(e.segment,t.uint32(26).fork()).ldelim(),null!=e.floatData&&e.floatData.length){t.uint32(34).fork();for(var n=0;n<e.floatData.length;++n)t.float(e.floatData[n]);t.ldelim()}if(null!=e.int32Data&&e.int32Data.length){t.uint32(42).fork();for(var n=0;n<e.int32Data.length;++n)t.int32(e.int32Data[n]);t.ldelim()}if(null!=e.stringData&&e.stringData.length)for(var n=0;n<e.stringData.length;++n)t.uint32(50).bytes(e.stringData[n]);if(null!=e.int64Data&&e.int64Data.length){t.uint32(58).fork();for(var n=0;n<e.int64Data.length;++n)t.int64(e.int64Data[n]);t.ldelim()}if(null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(66).string(e.name),null!=e.rawData&&Object.hasOwnProperty.call(e,"rawData")&&t.uint32(74).bytes(e.rawData),null!=e.doubleData&&e.doubleData.length){t.uint32(82).fork();for(var n=0;n<e.doubleData.length;++n)t.double(e.doubleData[n]);t.ldelim()}if(null!=e.uint64Data&&e.uint64Data.length){t.uint32(90).fork();for(var n=0;n<e.uint64Data.length;++n)t.uint64(e.uint64Data[n]);t.ldelim()}if(null!=e.docString&&Object.hasOwnProperty.call(e,"docString")&&t.uint32(98).string(e.docString),null!=e.externalData&&e.externalData.length)for(var n=0;n<e.externalData.length;++n)s.onnx.StringStringEntryProto.encode(e.externalData[n],t.uint32(106).fork()).ldelim();return null!=e.dataLocation&&Object.hasOwnProperty.call(e,"dataLocation")&&t.uint32(112).int32(e.dataLocation),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TensorProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:if(o.dims&&o.dims.length||(o.dims=[]),(7&a)==2)for(var u=e.uint32()+e.pos;e.pos<u;)o.dims.push(e.int64());else o.dims.push(e.int64());break;case 2:o.dataType=e.int32();break;case 3:o.segment=s.onnx.TensorProto.Segment.decode(e,e.uint32());break;case 4:if(o.floatData&&o.floatData.length||(o.floatData=[]),(7&a)==2)for(var u=e.uint32()+e.pos;e.pos<u;)o.floatData.push(e.float());else o.floatData.push(e.float());break;case 5:if(o.int32Data&&o.int32Data.length||(o.int32Data=[]),(7&a)==2)for(var u=e.uint32()+e.pos;e.pos<u;)o.int32Data.push(e.int32());else o.int32Data.push(e.int32());break;case 6:o.stringData&&o.stringData.length||(o.stringData=[]),o.stringData.push(e.bytes());break;case 7:if(o.int64Data&&o.int64Data.length||(o.int64Data=[]),(7&a)==2)for(var u=e.uint32()+e.pos;e.pos<u;)o.int64Data.push(e.int64());else o.int64Data.push(e.int64());break;case 8:o.name=e.string();break;case 12:o.docString=e.string();break;case 9:o.rawData=e.bytes();break;case 13:o.externalData&&o.externalData.length||(o.externalData=[]),o.externalData.push(s.onnx.StringStringEntryProto.decode(e,e.uint32()));break;case 14:o.dataLocation=e.int32();break;case 10:if(o.doubleData&&o.doubleData.length||(o.doubleData=[]),(7&a)==2)for(var u=e.uint32()+e.pos;e.pos<u;)o.doubleData.push(e.double());else o.doubleData.push(e.double());break;case 11:if(o.uint64Data&&o.uint64Data.length||(o.uint64Data=[]),(7&a)==2)for(var u=e.uint32()+e.pos;e.pos<u;)o.uint64Data.push(e.uint64());else o.uint64Data.push(e.uint64());break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.dims&&e.hasOwnProperty("dims")){if(!Array.isArray(e.dims))return"dims: array expected";for(var t=0;t<e.dims.length;++t)if(!a.isInteger(e.dims[t])&&!(e.dims[t]&&a.isInteger(e.dims[t].low)&&a.isInteger(e.dims[t].high)))return"dims: integer|Long[] expected"}if(null!=e.dataType&&e.hasOwnProperty("dataType")&&!a.isInteger(e.dataType))return"dataType: integer expected";if(null!=e.segment&&e.hasOwnProperty("segment")){var n=s.onnx.TensorProto.Segment.verify(e.segment);if(n)return"segment."+n}if(null!=e.floatData&&e.hasOwnProperty("floatData")){if(!Array.isArray(e.floatData))return"floatData: array expected";for(var t=0;t<e.floatData.length;++t)if("number"!=typeof e.floatData[t])return"floatData: number[] expected"}if(null!=e.int32Data&&e.hasOwnProperty("int32Data")){if(!Array.isArray(e.int32Data))return"int32Data: array expected";for(var t=0;t<e.int32Data.length;++t)if(!a.isInteger(e.int32Data[t]))return"int32Data: integer[] expected"}if(null!=e.stringData&&e.hasOwnProperty("stringData")){if(!Array.isArray(e.stringData))return"stringData: array expected";for(var t=0;t<e.stringData.length;++t)if(!(e.stringData[t]&&"number"==typeof e.stringData[t].length||a.isString(e.stringData[t])))return"stringData: buffer[] expected"}if(null!=e.int64Data&&e.hasOwnProperty("int64Data")){if(!Array.isArray(e.int64Data))return"int64Data: array expected";for(var t=0;t<e.int64Data.length;++t)if(!a.isInteger(e.int64Data[t])&&!(e.int64Data[t]&&a.isInteger(e.int64Data[t].low)&&a.isInteger(e.int64Data[t].high)))return"int64Data: integer|Long[] expected"}if(null!=e.name&&e.hasOwnProperty("name")&&!a.isString(e.name))return"name: string expected";if(null!=e.docString&&e.hasOwnProperty("docString")&&!a.isString(e.docString))return"docString: string expected";if(null!=e.rawData&&e.hasOwnProperty("rawData")&&!(e.rawData&&"number"==typeof e.rawData.length||a.isString(e.rawData)))return"rawData: buffer expected";if(null!=e.externalData&&e.hasOwnProperty("externalData")){if(!Array.isArray(e.externalData))return"externalData: array expected";for(var t=0;t<e.externalData.length;++t){var n=s.onnx.StringStringEntryProto.verify(e.externalData[t]);if(n)return"externalData."+n}}if(null!=e.dataLocation&&e.hasOwnProperty("dataLocation"))switch(e.dataLocation){default:return"dataLocation: enum value expected";case 0:case 1:}if(null!=e.doubleData&&e.hasOwnProperty("doubleData")){if(!Array.isArray(e.doubleData))return"doubleData: array expected";for(var t=0;t<e.doubleData.length;++t)if("number"!=typeof e.doubleData[t])return"doubleData: number[] expected"}if(null!=e.uint64Data&&e.hasOwnProperty("uint64Data")){if(!Array.isArray(e.uint64Data))return"uint64Data: array expected";for(var t=0;t<e.uint64Data.length;++t)if(!a.isInteger(e.uint64Data[t])&&!(e.uint64Data[t]&&a.isInteger(e.uint64Data[t].low)&&a.isInteger(e.uint64Data[t].high)))return"uint64Data: integer|Long[] expected"}return null},e.fromObject=function(e){if(e instanceof s.onnx.TensorProto)return e;var t=new s.onnx.TensorProto;if(e.dims){if(!Array.isArray(e.dims))throw TypeError(".onnx.TensorProto.dims: array expected");t.dims=[];for(var n=0;n<e.dims.length;++n)a.Long?(t.dims[n]=a.Long.fromValue(e.dims[n])).unsigned=!1:"string"==typeof e.dims[n]?t.dims[n]=parseInt(e.dims[n],10):"number"==typeof e.dims[n]?t.dims[n]=e.dims[n]:"object"==typeof e.dims[n]&&(t.dims[n]=new a.LongBits(e.dims[n].low>>>0,e.dims[n].high>>>0).toNumber())}if(null!=e.dataType&&(t.dataType=0|e.dataType),null!=e.segment){if("object"!=typeof e.segment)throw TypeError(".onnx.TensorProto.segment: object expected");t.segment=s.onnx.TensorProto.Segment.fromObject(e.segment)}if(e.floatData){if(!Array.isArray(e.floatData))throw TypeError(".onnx.TensorProto.floatData: array expected");t.floatData=[];for(var n=0;n<e.floatData.length;++n)t.floatData[n]=Number(e.floatData[n])}if(e.int32Data){if(!Array.isArray(e.int32Data))throw TypeError(".onnx.TensorProto.int32Data: array expected");t.int32Data=[];for(var n=0;n<e.int32Data.length;++n)t.int32Data[n]=0|e.int32Data[n]}if(e.stringData){if(!Array.isArray(e.stringData))throw TypeError(".onnx.TensorProto.stringData: array expected");t.stringData=[];for(var n=0;n<e.stringData.length;++n)"string"==typeof e.stringData[n]?a.base64.decode(e.stringData[n],t.stringData[n]=a.newBuffer(a.base64.length(e.stringData[n])),0):e.stringData[n].length>=0&&(t.stringData[n]=e.stringData[n])}if(e.int64Data){if(!Array.isArray(e.int64Data))throw TypeError(".onnx.TensorProto.int64Data: array expected");t.int64Data=[];for(var n=0;n<e.int64Data.length;++n)a.Long?(t.int64Data[n]=a.Long.fromValue(e.int64Data[n])).unsigned=!1:"string"==typeof e.int64Data[n]?t.int64Data[n]=parseInt(e.int64Data[n],10):"number"==typeof e.int64Data[n]?t.int64Data[n]=e.int64Data[n]:"object"==typeof e.int64Data[n]&&(t.int64Data[n]=new a.LongBits(e.int64Data[n].low>>>0,e.int64Data[n].high>>>0).toNumber())}if(null!=e.name&&(t.name=String(e.name)),null!=e.docString&&(t.docString=String(e.docString)),null!=e.rawData&&("string"==typeof e.rawData?a.base64.decode(e.rawData,t.rawData=a.newBuffer(a.base64.length(e.rawData)),0):e.rawData.length>=0&&(t.rawData=e.rawData)),e.externalData){if(!Array.isArray(e.externalData))throw TypeError(".onnx.TensorProto.externalData: array expected");t.externalData=[];for(var n=0;n<e.externalData.length;++n){if("object"!=typeof e.externalData[n])throw TypeError(".onnx.TensorProto.externalData: object expected");t.externalData[n]=s.onnx.StringStringEntryProto.fromObject(e.externalData[n])}}switch(e.dataLocation){default:"number"==typeof e.dataLocation&&(t.dataLocation=e.dataLocation);break;case"DEFAULT":case 0:t.dataLocation=0;break;case"EXTERNAL":case 1:t.dataLocation=1}if(e.doubleData){if(!Array.isArray(e.doubleData))throw TypeError(".onnx.TensorProto.doubleData: array expected");t.doubleData=[];for(var n=0;n<e.doubleData.length;++n)t.doubleData[n]=Number(e.doubleData[n])}if(e.uint64Data){if(!Array.isArray(e.uint64Data))throw TypeError(".onnx.TensorProto.uint64Data: array expected");t.uint64Data=[];for(var n=0;n<e.uint64Data.length;++n)a.Long?(t.uint64Data[n]=a.Long.fromValue(e.uint64Data[n])).unsigned=!0:"string"==typeof e.uint64Data[n]?t.uint64Data[n]=parseInt(e.uint64Data[n],10):"number"==typeof e.uint64Data[n]?t.uint64Data[n]=e.uint64Data[n]:"object"==typeof e.uint64Data[n]&&(t.uint64Data[n]=new a.LongBits(e.uint64Data[n].low>>>0,e.uint64Data[n].high>>>0).toNumber(!0))}return t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.dims=[],n.floatData=[],n.int32Data=[],n.stringData=[],n.int64Data=[],n.doubleData=[],n.uint64Data=[],n.externalData=[]),t.defaults&&(n.dataType=0,n.segment=null,n.name="",t.bytes===String?n.rawData="":(n.rawData=[],t.bytes!==Array&&(n.rawData=a.newBuffer(n.rawData))),n.docString="",n.dataLocation=t.enums===String?"DEFAULT":0),e.dims&&e.dims.length){n.dims=[];for(var i=0;i<e.dims.length;++i)"number"==typeof e.dims[i]?n.dims[i]=t.longs===String?String(e.dims[i]):e.dims[i]:n.dims[i]=t.longs===String?a.Long.prototype.toString.call(e.dims[i]):t.longs===Number?new a.LongBits(e.dims[i].low>>>0,e.dims[i].high>>>0).toNumber():e.dims[i]}if(null!=e.dataType&&e.hasOwnProperty("dataType")&&(n.dataType=e.dataType),null!=e.segment&&e.hasOwnProperty("segment")&&(n.segment=s.onnx.TensorProto.Segment.toObject(e.segment,t)),e.floatData&&e.floatData.length){n.floatData=[];for(var i=0;i<e.floatData.length;++i)n.floatData[i]=t.json&&!isFinite(e.floatData[i])?String(e.floatData[i]):e.floatData[i]}if(e.int32Data&&e.int32Data.length){n.int32Data=[];for(var i=0;i<e.int32Data.length;++i)n.int32Data[i]=e.int32Data[i]}if(e.stringData&&e.stringData.length){n.stringData=[];for(var i=0;i<e.stringData.length;++i)n.stringData[i]=t.bytes===String?a.base64.encode(e.stringData[i],0,e.stringData[i].length):t.bytes===Array?Array.prototype.slice.call(e.stringData[i]):e.stringData[i]}if(e.int64Data&&e.int64Data.length){n.int64Data=[];for(var i=0;i<e.int64Data.length;++i)"number"==typeof e.int64Data[i]?n.int64Data[i]=t.longs===String?String(e.int64Data[i]):e.int64Data[i]:n.int64Data[i]=t.longs===String?a.Long.prototype.toString.call(e.int64Data[i]):t.longs===Number?new a.LongBits(e.int64Data[i].low>>>0,e.int64Data[i].high>>>0).toNumber():e.int64Data[i]}if(null!=e.name&&e.hasOwnProperty("name")&&(n.name=e.name),null!=e.rawData&&e.hasOwnProperty("rawData")&&(n.rawData=t.bytes===String?a.base64.encode(e.rawData,0,e.rawData.length):t.bytes===Array?Array.prototype.slice.call(e.rawData):e.rawData),e.doubleData&&e.doubleData.length){n.doubleData=[];for(var i=0;i<e.doubleData.length;++i)n.doubleData[i]=t.json&&!isFinite(e.doubleData[i])?String(e.doubleData[i]):e.doubleData[i]}if(e.uint64Data&&e.uint64Data.length){n.uint64Data=[];for(var i=0;i<e.uint64Data.length;++i)"number"==typeof e.uint64Data[i]?n.uint64Data[i]=t.longs===String?String(e.uint64Data[i]):e.uint64Data[i]:n.uint64Data[i]=t.longs===String?a.Long.prototype.toString.call(e.uint64Data[i]):t.longs===Number?new a.LongBits(e.uint64Data[i].low>>>0,e.uint64Data[i].high>>>0).toNumber(!0):e.uint64Data[i]}if(null!=e.docString&&e.hasOwnProperty("docString")&&(n.docString=e.docString),e.externalData&&e.externalData.length){n.externalData=[];for(var i=0;i<e.externalData.length;++i)n.externalData[i]=s.onnx.StringStringEntryProto.toObject(e.externalData[i],t)}return null!=e.dataLocation&&e.hasOwnProperty("dataLocation")&&(n.dataLocation=t.enums===String?void 0===s.onnx.TensorProto.DataLocation[e.dataLocation]?e.dataLocation:s.onnx.TensorProto.DataLocation[e.dataLocation]:e.dataLocation),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TensorProto"},e.DataType=function(){var e={},t=Object.create(e);return t[e[0]="UNDEFINED"]=0,t[e[1]="FLOAT"]=1,t[e[2]="UINT8"]=2,t[e[3]="INT8"]=3,t[e[4]="UINT16"]=4,t[e[5]="INT16"]=5,t[e[6]="INT32"]=6,t[e[7]="INT64"]=7,t[e[8]="STRING"]=8,t[e[9]="BOOL"]=9,t[e[10]="FLOAT16"]=10,t[e[11]="DOUBLE"]=11,t[e[12]="UINT32"]=12,t[e[13]="UINT64"]=13,t[e[14]="COMPLEX64"]=14,t[e[15]="COMPLEX128"]=15,t[e[16]="BFLOAT16"]=16,t[e[17]="FLOAT8E4M3FN"]=17,t[e[18]="FLOAT8E4M3FNUZ"]=18,t[e[19]="FLOAT8E5M2"]=19,t[e[20]="FLOAT8E5M2FNUZ"]=20,t}(),e.Segment=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.begin=a.Long?a.Long.fromBits(0,0,!1):0,e.prototype.end=a.Long?a.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.begin&&Object.hasOwnProperty.call(e,"begin")&&t.uint32(8).int64(e.begin),null!=e.end&&Object.hasOwnProperty.call(e,"end")&&t.uint32(16).int64(e.end),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TensorProto.Segment;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.begin=e.int64();break;case 2:o.end=e.int64();break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.begin&&e.hasOwnProperty("begin")&&!a.isInteger(e.begin)&&!(e.begin&&a.isInteger(e.begin.low)&&a.isInteger(e.begin.high))?"begin: integer|Long expected":null!=e.end&&e.hasOwnProperty("end")&&!a.isInteger(e.end)&&!(e.end&&a.isInteger(e.end.low)&&a.isInteger(e.end.high))?"end: integer|Long expected":null},e.fromObject=function(e){if(e instanceof s.onnx.TensorProto.Segment)return e;var t=new s.onnx.TensorProto.Segment;return null!=e.begin&&(a.Long?(t.begin=a.Long.fromValue(e.begin)).unsigned=!1:"string"==typeof e.begin?t.begin=parseInt(e.begin,10):"number"==typeof e.begin?t.begin=e.begin:"object"==typeof e.begin&&(t.begin=new a.LongBits(e.begin.low>>>0,e.begin.high>>>0).toNumber())),null!=e.end&&(a.Long?(t.end=a.Long.fromValue(e.end)).unsigned=!1:"string"==typeof e.end?t.end=parseInt(e.end,10):"number"==typeof e.end?t.end=e.end:"object"==typeof e.end&&(t.end=new a.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber())),t},e.toObject=function(e,t){t||(t={});var n={};if(t.defaults){if(a.Long){var i=new a.Long(0,0,!1);n.begin=t.longs===String?i.toString():t.longs===Number?i.toNumber():i}else n.begin=t.longs===String?"0":0;if(a.Long){var i=new a.Long(0,0,!1);n.end=t.longs===String?i.toString():t.longs===Number?i.toNumber():i}else n.end=t.longs===String?"0":0}return null!=e.begin&&e.hasOwnProperty("begin")&&("number"==typeof e.begin?n.begin=t.longs===String?String(e.begin):e.begin:n.begin=t.longs===String?a.Long.prototype.toString.call(e.begin):t.longs===Number?new a.LongBits(e.begin.low>>>0,e.begin.high>>>0).toNumber():e.begin),null!=e.end&&e.hasOwnProperty("end")&&("number"==typeof e.end?n.end=t.longs===String?String(e.end):e.end:n.end=t.longs===String?a.Long.prototype.toString.call(e.end):t.longs===Number?new a.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber():e.end),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TensorProto.Segment"},e}(),e.DataLocation=function(){var e={},t=Object.create(e);return t[e[0]="DEFAULT"]=0,t[e[1]="EXTERNAL"]=1,t}(),e}(),e.SparseTensorProto=function(){function e(e){if(this.dims=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.values=null,e.prototype.indices=null,e.prototype.dims=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.values&&Object.hasOwnProperty.call(e,"values")&&s.onnx.TensorProto.encode(e.values,t.uint32(10).fork()).ldelim(),null!=e.indices&&Object.hasOwnProperty.call(e,"indices")&&s.onnx.TensorProto.encode(e.indices,t.uint32(18).fork()).ldelim(),null!=e.dims&&e.dims.length){t.uint32(26).fork();for(var n=0;n<e.dims.length;++n)t.int64(e.dims[n]);t.ldelim()}return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.SparseTensorProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.values=s.onnx.TensorProto.decode(e,e.uint32());break;case 2:o.indices=s.onnx.TensorProto.decode(e,e.uint32());break;case 3:if(o.dims&&o.dims.length||(o.dims=[]),(7&a)==2)for(var u=e.uint32()+e.pos;e.pos<u;)o.dims.push(e.int64());else o.dims.push(e.int64());break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.values&&e.hasOwnProperty("values")){var t=s.onnx.TensorProto.verify(e.values);if(t)return"values."+t}if(null!=e.indices&&e.hasOwnProperty("indices")){var t=s.onnx.TensorProto.verify(e.indices);if(t)return"indices."+t}if(null!=e.dims&&e.hasOwnProperty("dims")){if(!Array.isArray(e.dims))return"dims: array expected";for(var n=0;n<e.dims.length;++n)if(!a.isInteger(e.dims[n])&&!(e.dims[n]&&a.isInteger(e.dims[n].low)&&a.isInteger(e.dims[n].high)))return"dims: integer|Long[] expected"}return null},e.fromObject=function(e){if(e instanceof s.onnx.SparseTensorProto)return e;var t=new s.onnx.SparseTensorProto;if(null!=e.values){if("object"!=typeof e.values)throw TypeError(".onnx.SparseTensorProto.values: object expected");t.values=s.onnx.TensorProto.fromObject(e.values)}if(null!=e.indices){if("object"!=typeof e.indices)throw TypeError(".onnx.SparseTensorProto.indices: object expected");t.indices=s.onnx.TensorProto.fromObject(e.indices)}if(e.dims){if(!Array.isArray(e.dims))throw TypeError(".onnx.SparseTensorProto.dims: array expected");t.dims=[];for(var n=0;n<e.dims.length;++n)a.Long?(t.dims[n]=a.Long.fromValue(e.dims[n])).unsigned=!1:"string"==typeof e.dims[n]?t.dims[n]=parseInt(e.dims[n],10):"number"==typeof e.dims[n]?t.dims[n]=e.dims[n]:"object"==typeof e.dims[n]&&(t.dims[n]=new a.LongBits(e.dims[n].low>>>0,e.dims[n].high>>>0).toNumber())}return t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.dims=[]),t.defaults&&(n.values=null,n.indices=null),null!=e.values&&e.hasOwnProperty("values")&&(n.values=s.onnx.TensorProto.toObject(e.values,t)),null!=e.indices&&e.hasOwnProperty("indices")&&(n.indices=s.onnx.TensorProto.toObject(e.indices,t)),e.dims&&e.dims.length){n.dims=[];for(var i=0;i<e.dims.length;++i)"number"==typeof e.dims[i]?n.dims[i]=t.longs===String?String(e.dims[i]):e.dims[i]:n.dims[i]=t.longs===String?a.Long.prototype.toString.call(e.dims[i]):t.longs===Number?new a.LongBits(e.dims[i].low>>>0,e.dims[i].high>>>0).toNumber():e.dims[i]}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.SparseTensorProto"},e}(),e.TensorShapeProto=function(){function e(e){if(this.dim=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.dim=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.dim&&e.dim.length)for(var n=0;n<e.dim.length;++n)s.onnx.TensorShapeProto.Dimension.encode(e.dim[n],t.uint32(10).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TensorShapeProto;e.pos<n;){var a=e.uint32();if(a>>>3==1)o.dim&&o.dim.length||(o.dim=[]),o.dim.push(s.onnx.TensorShapeProto.Dimension.decode(e,e.uint32()));else e.skipType(7&a)}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.dim&&e.hasOwnProperty("dim")){if(!Array.isArray(e.dim))return"dim: array expected";for(var t=0;t<e.dim.length;++t){var n=s.onnx.TensorShapeProto.Dimension.verify(e.dim[t]);if(n)return"dim."+n}}return null},e.fromObject=function(e){if(e instanceof s.onnx.TensorShapeProto)return e;var t=new s.onnx.TensorShapeProto;if(e.dim){if(!Array.isArray(e.dim))throw TypeError(".onnx.TensorShapeProto.dim: array expected");t.dim=[];for(var n=0;n<e.dim.length;++n){if("object"!=typeof e.dim[n])throw TypeError(".onnx.TensorShapeProto.dim: object expected");t.dim[n]=s.onnx.TensorShapeProto.Dimension.fromObject(e.dim[n])}}return t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.dim=[]),e.dim&&e.dim.length){n.dim=[];for(var i=0;i<e.dim.length;++i)n.dim[i]=s.onnx.TensorShapeProto.Dimension.toObject(e.dim[i],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TensorShapeProto"},e.Dimension=function(){var e;function t(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return t.prototype.dimValue=null,t.prototype.dimParam=null,t.prototype.denotation="",Object.defineProperty(t.prototype,"value",{get:a.oneOfGetter(e=["dimValue","dimParam"]),set:a.oneOfSetter(e)}),t.create=function(e){return new t(e)},t.encode=function(e,t){return t||(t=o.create()),null!=e.dimValue&&Object.hasOwnProperty.call(e,"dimValue")&&t.uint32(8).int64(e.dimValue),null!=e.dimParam&&Object.hasOwnProperty.call(e,"dimParam")&&t.uint32(18).string(e.dimParam),null!=e.denotation&&Object.hasOwnProperty.call(e,"denotation")&&t.uint32(26).string(e.denotation),t},t.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},t.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TensorShapeProto.Dimension;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.dimValue=e.int64();break;case 2:o.dimParam=e.string();break;case 3:o.denotation=e.string();break;default:e.skipType(7&a)}}return o},t.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},t.verify=function(e){if("object"!=typeof e||null===e)return"object expected";var t={};if(null!=e.dimValue&&e.hasOwnProperty("dimValue")&&(t.value=1,!a.isInteger(e.dimValue)&&!(e.dimValue&&a.isInteger(e.dimValue.low)&&a.isInteger(e.dimValue.high))))return"dimValue: integer|Long expected";if(null!=e.dimParam&&e.hasOwnProperty("dimParam")){if(1===t.value)return"value: multiple values";if(t.value=1,!a.isString(e.dimParam))return"dimParam: string expected"}return null!=e.denotation&&e.hasOwnProperty("denotation")&&!a.isString(e.denotation)?"denotation: string expected":null},t.fromObject=function(e){if(e instanceof s.onnx.TensorShapeProto.Dimension)return e;var t=new s.onnx.TensorShapeProto.Dimension;return null!=e.dimValue&&(a.Long?(t.dimValue=a.Long.fromValue(e.dimValue)).unsigned=!1:"string"==typeof e.dimValue?t.dimValue=parseInt(e.dimValue,10):"number"==typeof e.dimValue?t.dimValue=e.dimValue:"object"==typeof e.dimValue&&(t.dimValue=new a.LongBits(e.dimValue.low>>>0,e.dimValue.high>>>0).toNumber())),null!=e.dimParam&&(t.dimParam=String(e.dimParam)),null!=e.denotation&&(t.denotation=String(e.denotation)),t},t.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.denotation=""),null!=e.dimValue&&e.hasOwnProperty("dimValue")&&("number"==typeof e.dimValue?n.dimValue=t.longs===String?String(e.dimValue):e.dimValue:n.dimValue=t.longs===String?a.Long.prototype.toString.call(e.dimValue):t.longs===Number?new a.LongBits(e.dimValue.low>>>0,e.dimValue.high>>>0).toNumber():e.dimValue,t.oneofs&&(n.value="dimValue")),null!=e.dimParam&&e.hasOwnProperty("dimParam")&&(n.dimParam=e.dimParam,t.oneofs&&(n.value="dimParam")),null!=e.denotation&&e.hasOwnProperty("denotation")&&(n.denotation=e.denotation),n},t.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},t.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TensorShapeProto.Dimension"},t}(),e}(),e.TypeProto=function(){var e;function t(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return t.prototype.tensorType=null,t.prototype.sequenceType=null,t.prototype.mapType=null,t.prototype.optionalType=null,t.prototype.sparseTensorType=null,t.prototype.denotation="",Object.defineProperty(t.prototype,"value",{get:a.oneOfGetter(e=["tensorType","sequenceType","mapType","optionalType","sparseTensorType"]),set:a.oneOfSetter(e)}),t.create=function(e){return new t(e)},t.encode=function(e,t){return t||(t=o.create()),null!=e.tensorType&&Object.hasOwnProperty.call(e,"tensorType")&&s.onnx.TypeProto.Tensor.encode(e.tensorType,t.uint32(10).fork()).ldelim(),null!=e.sequenceType&&Object.hasOwnProperty.call(e,"sequenceType")&&s.onnx.TypeProto.Sequence.encode(e.sequenceType,t.uint32(34).fork()).ldelim(),null!=e.mapType&&Object.hasOwnProperty.call(e,"mapType")&&s.onnx.TypeProto.Map.encode(e.mapType,t.uint32(42).fork()).ldelim(),null!=e.denotation&&Object.hasOwnProperty.call(e,"denotation")&&t.uint32(50).string(e.denotation),null!=e.sparseTensorType&&Object.hasOwnProperty.call(e,"sparseTensorType")&&s.onnx.TypeProto.SparseTensor.encode(e.sparseTensorType,t.uint32(66).fork()).ldelim(),null!=e.optionalType&&Object.hasOwnProperty.call(e,"optionalType")&&s.onnx.TypeProto.Optional.encode(e.optionalType,t.uint32(74).fork()).ldelim(),t},t.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},t.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TypeProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.tensorType=s.onnx.TypeProto.Tensor.decode(e,e.uint32());break;case 4:o.sequenceType=s.onnx.TypeProto.Sequence.decode(e,e.uint32());break;case 5:o.mapType=s.onnx.TypeProto.Map.decode(e,e.uint32());break;case 9:o.optionalType=s.onnx.TypeProto.Optional.decode(e,e.uint32());break;case 8:o.sparseTensorType=s.onnx.TypeProto.SparseTensor.decode(e,e.uint32());break;case 6:o.denotation=e.string();break;default:e.skipType(7&a)}}return o},t.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},t.verify=function(e){if("object"!=typeof e||null===e)return"object expected";var t={};if(null!=e.tensorType&&e.hasOwnProperty("tensorType")){t.value=1;var n=s.onnx.TypeProto.Tensor.verify(e.tensorType);if(n)return"tensorType."+n}if(null!=e.sequenceType&&e.hasOwnProperty("sequenceType")){if(1===t.value)return"value: multiple values";t.value=1;var n=s.onnx.TypeProto.Sequence.verify(e.sequenceType);if(n)return"sequenceType."+n}if(null!=e.mapType&&e.hasOwnProperty("mapType")){if(1===t.value)return"value: multiple values";t.value=1;var n=s.onnx.TypeProto.Map.verify(e.mapType);if(n)return"mapType."+n}if(null!=e.optionalType&&e.hasOwnProperty("optionalType")){if(1===t.value)return"value: multiple values";t.value=1;var n=s.onnx.TypeProto.Optional.verify(e.optionalType);if(n)return"optionalType."+n}if(null!=e.sparseTensorType&&e.hasOwnProperty("sparseTensorType")){if(1===t.value)return"value: multiple values";t.value=1;var n=s.onnx.TypeProto.SparseTensor.verify(e.sparseTensorType);if(n)return"sparseTensorType."+n}return null!=e.denotation&&e.hasOwnProperty("denotation")&&!a.isString(e.denotation)?"denotation: string expected":null},t.fromObject=function(e){if(e instanceof s.onnx.TypeProto)return e;var t=new s.onnx.TypeProto;if(null!=e.tensorType){if("object"!=typeof e.tensorType)throw TypeError(".onnx.TypeProto.tensorType: object expected");t.tensorType=s.onnx.TypeProto.Tensor.fromObject(e.tensorType)}if(null!=e.sequenceType){if("object"!=typeof e.sequenceType)throw TypeError(".onnx.TypeProto.sequenceType: object expected");t.sequenceType=s.onnx.TypeProto.Sequence.fromObject(e.sequenceType)}if(null!=e.mapType){if("object"!=typeof e.mapType)throw TypeError(".onnx.TypeProto.mapType: object expected");t.mapType=s.onnx.TypeProto.Map.fromObject(e.mapType)}if(null!=e.optionalType){if("object"!=typeof e.optionalType)throw TypeError(".onnx.TypeProto.optionalType: object expected");t.optionalType=s.onnx.TypeProto.Optional.fromObject(e.optionalType)}if(null!=e.sparseTensorType){if("object"!=typeof e.sparseTensorType)throw TypeError(".onnx.TypeProto.sparseTensorType: object expected");t.sparseTensorType=s.onnx.TypeProto.SparseTensor.fromObject(e.sparseTensorType)}return null!=e.denotation&&(t.denotation=String(e.denotation)),t},t.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.denotation=""),null!=e.tensorType&&e.hasOwnProperty("tensorType")&&(n.tensorType=s.onnx.TypeProto.Tensor.toObject(e.tensorType,t),t.oneofs&&(n.value="tensorType")),null!=e.sequenceType&&e.hasOwnProperty("sequenceType")&&(n.sequenceType=s.onnx.TypeProto.Sequence.toObject(e.sequenceType,t),t.oneofs&&(n.value="sequenceType")),null!=e.mapType&&e.hasOwnProperty("mapType")&&(n.mapType=s.onnx.TypeProto.Map.toObject(e.mapType,t),t.oneofs&&(n.value="mapType")),null!=e.denotation&&e.hasOwnProperty("denotation")&&(n.denotation=e.denotation),null!=e.sparseTensorType&&e.hasOwnProperty("sparseTensorType")&&(n.sparseTensorType=s.onnx.TypeProto.SparseTensor.toObject(e.sparseTensorType,t),t.oneofs&&(n.value="sparseTensorType")),null!=e.optionalType&&e.hasOwnProperty("optionalType")&&(n.optionalType=s.onnx.TypeProto.Optional.toObject(e.optionalType,t),t.oneofs&&(n.value="optionalType")),n},t.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},t.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TypeProto"},t.Tensor=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.elemType=0,e.prototype.shape=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.elemType&&Object.hasOwnProperty.call(e,"elemType")&&t.uint32(8).int32(e.elemType),null!=e.shape&&Object.hasOwnProperty.call(e,"shape")&&s.onnx.TensorShapeProto.encode(e.shape,t.uint32(18).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TypeProto.Tensor;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.elemType=e.int32();break;case 2:o.shape=s.onnx.TensorShapeProto.decode(e,e.uint32());break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.elemType&&e.hasOwnProperty("elemType")&&!a.isInteger(e.elemType))return"elemType: integer expected";if(null!=e.shape&&e.hasOwnProperty("shape")){var t=s.onnx.TensorShapeProto.verify(e.shape);if(t)return"shape."+t}return null},e.fromObject=function(e){if(e instanceof s.onnx.TypeProto.Tensor)return e;var t=new s.onnx.TypeProto.Tensor;if(null!=e.elemType&&(t.elemType=0|e.elemType),null!=e.shape){if("object"!=typeof e.shape)throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");t.shape=s.onnx.TensorShapeProto.fromObject(e.shape)}return t},e.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.elemType=0,n.shape=null),null!=e.elemType&&e.hasOwnProperty("elemType")&&(n.elemType=e.elemType),null!=e.shape&&e.hasOwnProperty("shape")&&(n.shape=s.onnx.TensorShapeProto.toObject(e.shape,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TypeProto.Tensor"},e}(),t.Sequence=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.elemType=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.elemType&&Object.hasOwnProperty.call(e,"elemType")&&s.onnx.TypeProto.encode(e.elemType,t.uint32(10).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TypeProto.Sequence;e.pos<n;){var a=e.uint32();if(a>>>3==1)o.elemType=s.onnx.TypeProto.decode(e,e.uint32());else e.skipType(7&a)}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.elemType&&e.hasOwnProperty("elemType")){var t=s.onnx.TypeProto.verify(e.elemType);if(t)return"elemType."+t}return null},e.fromObject=function(e){if(e instanceof s.onnx.TypeProto.Sequence)return e;var t=new s.onnx.TypeProto.Sequence;if(null!=e.elemType){if("object"!=typeof e.elemType)throw TypeError(".onnx.TypeProto.Sequence.elemType: object expected");t.elemType=s.onnx.TypeProto.fromObject(e.elemType)}return t},e.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.elemType=null),null!=e.elemType&&e.hasOwnProperty("elemType")&&(n.elemType=s.onnx.TypeProto.toObject(e.elemType,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TypeProto.Sequence"},e}(),t.Map=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.keyType=0,e.prototype.valueType=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.keyType&&Object.hasOwnProperty.call(e,"keyType")&&t.uint32(8).int32(e.keyType),null!=e.valueType&&Object.hasOwnProperty.call(e,"valueType")&&s.onnx.TypeProto.encode(e.valueType,t.uint32(18).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TypeProto.Map;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.keyType=e.int32();break;case 2:o.valueType=s.onnx.TypeProto.decode(e,e.uint32());break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.keyType&&e.hasOwnProperty("keyType")&&!a.isInteger(e.keyType))return"keyType: integer expected";if(null!=e.valueType&&e.hasOwnProperty("valueType")){var t=s.onnx.TypeProto.verify(e.valueType);if(t)return"valueType."+t}return null},e.fromObject=function(e){if(e instanceof s.onnx.TypeProto.Map)return e;var t=new s.onnx.TypeProto.Map;if(null!=e.keyType&&(t.keyType=0|e.keyType),null!=e.valueType){if("object"!=typeof e.valueType)throw TypeError(".onnx.TypeProto.Map.valueType: object expected");t.valueType=s.onnx.TypeProto.fromObject(e.valueType)}return t},e.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.keyType=0,n.valueType=null),null!=e.keyType&&e.hasOwnProperty("keyType")&&(n.keyType=e.keyType),null!=e.valueType&&e.hasOwnProperty("valueType")&&(n.valueType=s.onnx.TypeProto.toObject(e.valueType,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TypeProto.Map"},e}(),t.Optional=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.elemType=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.elemType&&Object.hasOwnProperty.call(e,"elemType")&&s.onnx.TypeProto.encode(e.elemType,t.uint32(10).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TypeProto.Optional;e.pos<n;){var a=e.uint32();if(a>>>3==1)o.elemType=s.onnx.TypeProto.decode(e,e.uint32());else e.skipType(7&a)}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.elemType&&e.hasOwnProperty("elemType")){var t=s.onnx.TypeProto.verify(e.elemType);if(t)return"elemType."+t}return null},e.fromObject=function(e){if(e instanceof s.onnx.TypeProto.Optional)return e;var t=new s.onnx.TypeProto.Optional;if(null!=e.elemType){if("object"!=typeof e.elemType)throw TypeError(".onnx.TypeProto.Optional.elemType: object expected");t.elemType=s.onnx.TypeProto.fromObject(e.elemType)}return t},e.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.elemType=null),null!=e.elemType&&e.hasOwnProperty("elemType")&&(n.elemType=s.onnx.TypeProto.toObject(e.elemType,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TypeProto.Optional"},e}(),t.SparseTensor=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.elemType=0,e.prototype.shape=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.elemType&&Object.hasOwnProperty.call(e,"elemType")&&t.uint32(8).int32(e.elemType),null!=e.shape&&Object.hasOwnProperty.call(e,"shape")&&s.onnx.TensorShapeProto.encode(e.shape,t.uint32(18).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.TypeProto.SparseTensor;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.elemType=e.int32();break;case 2:o.shape=s.onnx.TensorShapeProto.decode(e,e.uint32());break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.elemType&&e.hasOwnProperty("elemType")&&!a.isInteger(e.elemType))return"elemType: integer expected";if(null!=e.shape&&e.hasOwnProperty("shape")){var t=s.onnx.TensorShapeProto.verify(e.shape);if(t)return"shape."+t}return null},e.fromObject=function(e){if(e instanceof s.onnx.TypeProto.SparseTensor)return e;var t=new s.onnx.TypeProto.SparseTensor;if(null!=e.elemType&&(t.elemType=0|e.elemType),null!=e.shape){if("object"!=typeof e.shape)throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");t.shape=s.onnx.TensorShapeProto.fromObject(e.shape)}return t},e.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.elemType=0,n.shape=null),null!=e.elemType&&e.hasOwnProperty("elemType")&&(n.elemType=e.elemType),null!=e.shape&&e.hasOwnProperty("shape")&&(n.shape=s.onnx.TensorShapeProto.toObject(e.shape,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.TypeProto.SparseTensor"},e}(),t}(),e.OperatorSetIdProto=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.domain="",e.prototype.version=a.Long?a.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.domain&&Object.hasOwnProperty.call(e,"domain")&&t.uint32(10).string(e.domain),null!=e.version&&Object.hasOwnProperty.call(e,"version")&&t.uint32(16).int64(e.version),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.OperatorSetIdProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.domain=e.string();break;case 2:o.version=e.int64();break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.domain&&e.hasOwnProperty("domain")&&!a.isString(e.domain)?"domain: string expected":null!=e.version&&e.hasOwnProperty("version")&&!a.isInteger(e.version)&&!(e.version&&a.isInteger(e.version.low)&&a.isInteger(e.version.high))?"version: integer|Long expected":null},e.fromObject=function(e){if(e instanceof s.onnx.OperatorSetIdProto)return e;var t=new s.onnx.OperatorSetIdProto;return null!=e.domain&&(t.domain=String(e.domain)),null!=e.version&&(a.Long?(t.version=a.Long.fromValue(e.version)).unsigned=!1:"string"==typeof e.version?t.version=parseInt(e.version,10):"number"==typeof e.version?t.version=e.version:"object"==typeof e.version&&(t.version=new a.LongBits(e.version.low>>>0,e.version.high>>>0).toNumber())),t},e.toObject=function(e,t){t||(t={});var n={};if(t.defaults){if(n.domain="",a.Long){var i=new a.Long(0,0,!1);n.version=t.longs===String?i.toString():t.longs===Number?i.toNumber():i}else n.version=t.longs===String?"0":0}return null!=e.domain&&e.hasOwnProperty("domain")&&(n.domain=e.domain),null!=e.version&&e.hasOwnProperty("version")&&("number"==typeof e.version?n.version=t.longs===String?String(e.version):e.version:n.version=t.longs===String?a.Long.prototype.toString.call(e.version):t.longs===Number?new a.LongBits(e.version.low>>>0,e.version.high>>>0).toNumber():e.version),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.OperatorSetIdProto"},e}(),e.OperatorStatus=function(){var e={},t=Object.create(e);return t[e[0]="EXPERIMENTAL"]=0,t[e[1]="STABLE"]=1,t}(),e.FunctionProto=function(){function e(e){if(this.input=[],this.output=[],this.attribute=[],this.attributeProto=[],this.node=[],this.opsetImport=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.name="",e.prototype.input=a.emptyArray,e.prototype.output=a.emptyArray,e.prototype.attribute=a.emptyArray,e.prototype.attributeProto=a.emptyArray,e.prototype.node=a.emptyArray,e.prototype.docString="",e.prototype.opsetImport=a.emptyArray,e.prototype.domain="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=o.create()),null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(10).string(e.name),null!=e.input&&e.input.length)for(var n=0;n<e.input.length;++n)t.uint32(34).string(e.input[n]);if(null!=e.output&&e.output.length)for(var n=0;n<e.output.length;++n)t.uint32(42).string(e.output[n]);if(null!=e.attribute&&e.attribute.length)for(var n=0;n<e.attribute.length;++n)t.uint32(50).string(e.attribute[n]);if(null!=e.node&&e.node.length)for(var n=0;n<e.node.length;++n)s.onnx.NodeProto.encode(e.node[n],t.uint32(58).fork()).ldelim();if(null!=e.docString&&Object.hasOwnProperty.call(e,"docString")&&t.uint32(66).string(e.docString),null!=e.opsetImport&&e.opsetImport.length)for(var n=0;n<e.opsetImport.length;++n)s.onnx.OperatorSetIdProto.encode(e.opsetImport[n],t.uint32(74).fork()).ldelim();if(null!=e.domain&&Object.hasOwnProperty.call(e,"domain")&&t.uint32(82).string(e.domain),null!=e.attributeProto&&e.attributeProto.length)for(var n=0;n<e.attributeProto.length;++n)s.onnx.AttributeProto.encode(e.attributeProto[n],t.uint32(90).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof i||(e=i.create(e));for(var n=void 0===t?e.len:e.pos+t,o=new s.onnx.FunctionProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:o.name=e.string();break;case 4:o.input&&o.input.length||(o.input=[]),o.input.push(e.string());break;case 5:o.output&&o.output.length||(o.output=[]),o.output.push(e.string());break;case 6:o.attribute&&o.attribute.length||(o.attribute=[]),o.attribute.push(e.string());break;case 11:o.attributeProto&&o.attributeProto.length||(o.attributeProto=[]),o.attributeProto.push(s.onnx.AttributeProto.decode(e,e.uint32()));break;case 7:o.node&&o.node.length||(o.node=[]),o.node.push(s.onnx.NodeProto.decode(e,e.uint32()));break;case 8:o.docString=e.string();break;case 9:o.opsetImport&&o.opsetImport.length||(o.opsetImport=[]),o.opsetImport.push(s.onnx.OperatorSetIdProto.decode(e,e.uint32()));break;case 10:o.domain=e.string();break;default:e.skipType(7&a)}}return o},e.decodeDelimited=function(e){return e instanceof i||(e=new i(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.name&&e.hasOwnProperty("name")&&!a.isString(e.name))return"name: string expected";if(null!=e.input&&e.hasOwnProperty("input")){if(!Array.isArray(e.input))return"input: array expected";for(var t=0;t<e.input.length;++t)if(!a.isString(e.input[t]))return"input: string[] expected"}if(null!=e.output&&e.hasOwnProperty("output")){if(!Array.isArray(e.output))return"output: array expected";for(var t=0;t<e.output.length;++t)if(!a.isString(e.output[t]))return"output: string[] expected"}if(null!=e.attribute&&e.hasOwnProperty("attribute")){if(!Array.isArray(e.attribute))return"attribute: array expected";for(var t=0;t<e.attribute.length;++t)if(!a.isString(e.attribute[t]))return"attribute: string[] expected"}if(null!=e.attributeProto&&e.hasOwnProperty("attributeProto")){if(!Array.isArray(e.attributeProto))return"attributeProto: array expected";for(var t=0;t<e.attributeProto.length;++t){var n=s.onnx.AttributeProto.verify(e.attributeProto[t]);if(n)return"attributeProto."+n}}if(null!=e.node&&e.hasOwnProperty("node")){if(!Array.isArray(e.node))return"node: array expected";for(var t=0;t<e.node.length;++t){var n=s.onnx.NodeProto.verify(e.node[t]);if(n)return"node."+n}}if(null!=e.docString&&e.hasOwnProperty("docString")&&!a.isString(e.docString))return"docString: string expected";if(null!=e.opsetImport&&e.hasOwnProperty("opsetImport")){if(!Array.isArray(e.opsetImport))return"opsetImport: array expected";for(var t=0;t<e.opsetImport.length;++t){var n=s.onnx.OperatorSetIdProto.verify(e.opsetImport[t]);if(n)return"opsetImport."+n}}return null!=e.domain&&e.hasOwnProperty("domain")&&!a.isString(e.domain)?"domain: string expected":null},e.fromObject=function(e){if(e instanceof s.onnx.FunctionProto)return e;var t=new s.onnx.FunctionProto;if(null!=e.name&&(t.name=String(e.name)),e.input){if(!Array.isArray(e.input))throw TypeError(".onnx.FunctionProto.input: array expected");t.input=[];for(var n=0;n<e.input.length;++n)t.input[n]=String(e.input[n])}if(e.output){if(!Array.isArray(e.output))throw TypeError(".onnx.FunctionProto.output: array expected");t.output=[];for(var n=0;n<e.output.length;++n)t.output[n]=String(e.output[n])}if(e.attribute){if(!Array.isArray(e.attribute))throw TypeError(".onnx.FunctionProto.attribute: array expected");t.attribute=[];for(var n=0;n<e.attribute.length;++n)t.attribute[n]=String(e.attribute[n])}if(e.attributeProto){if(!Array.isArray(e.attributeProto))throw TypeError(".onnx.FunctionProto.attributeProto: array expected");t.attributeProto=[];for(var n=0;n<e.attributeProto.length;++n){if("object"!=typeof e.attributeProto[n])throw TypeError(".onnx.FunctionProto.attributeProto: object expected");t.attributeProto[n]=s.onnx.AttributeProto.fromObject(e.attributeProto[n])}}if(e.node){if(!Array.isArray(e.node))throw TypeError(".onnx.FunctionProto.node: array expected");t.node=[];for(var n=0;n<e.node.length;++n){if("object"!=typeof e.node[n])throw TypeError(".onnx.FunctionProto.node: object expected");t.node[n]=s.onnx.NodeProto.fromObject(e.node[n])}}if(null!=e.docString&&(t.docString=String(e.docString)),e.opsetImport){if(!Array.isArray(e.opsetImport))throw TypeError(".onnx.FunctionProto.opsetImport: array expected");t.opsetImport=[];for(var n=0;n<e.opsetImport.length;++n){if("object"!=typeof e.opsetImport[n])throw TypeError(".onnx.FunctionProto.opsetImport: object expected");t.opsetImport[n]=s.onnx.OperatorSetIdProto.fromObject(e.opsetImport[n])}}return null!=e.domain&&(t.domain=String(e.domain)),t},e.toObject=function(e,t){t||(t={});var n={};if((t.arrays||t.defaults)&&(n.input=[],n.output=[],n.attribute=[],n.node=[],n.opsetImport=[],n.attributeProto=[]),t.defaults&&(n.name="",n.docString="",n.domain=""),null!=e.name&&e.hasOwnProperty("name")&&(n.name=e.name),e.input&&e.input.length){n.input=[];for(var i=0;i<e.input.length;++i)n.input[i]=e.input[i]}if(e.output&&e.output.length){n.output=[];for(var i=0;i<e.output.length;++i)n.output[i]=e.output[i]}if(e.attribute&&e.attribute.length){n.attribute=[];for(var i=0;i<e.attribute.length;++i)n.attribute[i]=e.attribute[i]}if(e.node&&e.node.length){n.node=[];for(var i=0;i<e.node.length;++i)n.node[i]=s.onnx.NodeProto.toObject(e.node[i],t)}if(null!=e.docString&&e.hasOwnProperty("docString")&&(n.docString=e.docString),e.opsetImport&&e.opsetImport.length){n.opsetImport=[];for(var i=0;i<e.opsetImport.length;++i)n.opsetImport[i]=s.onnx.OperatorSetIdProto.toObject(e.opsetImport[i],t)}if(null!=e.domain&&e.hasOwnProperty("domain")&&(n.domain=e.domain),e.attributeProto&&e.attributeProto.length){n.attributeProto=[];for(var i=0;i<e.attributeProto.length;++i)n.attributeProto[i]=s.onnx.AttributeProto.toObject(e.attributeProto[i],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/onnx.FunctionProto"},e}(),e}(),t.exports=s});function mn(e,t){if(!e)throw Error("string"==typeof t?t:t())}function Rn(e){return new TextDecoder().decode(e)}var Ge,Fr,Za,gt,No,dt,_t,Q,Ln,Vr,Gr,Ur,ze=C(()=>{Do(),Ra(),Ge=ln(pn()),Wr(),Fr=class{static arraysEqual(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}},Za=class{static preprocessInputShapes(e,t){return[1===e.length?[1,e[0]]:e,1===t.length?[t[0],1]:t]}static postprocessOutputShape(e,t,n){1===t&&e.splice(e.length-2,1),1===n&&e.pop()}static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},gt=class e{static calcShape(e,t,n=!1){let i=e.length,o=t.length;if(0===i)return t;if(0===o)return e;let a=Math.max(e.length,t.length),s=Array(a);if(n){if(i<2||o<2)return;let n=Za.calcMatMulShape([e[i-2],e[i-1]],[t[o-2],t[o-1]]);if(void 0===n)return;[s[a-2],s[a-1]]=n}for(let u=n?3:1;u<=a;u++){let n=i-u<0?1:e[i-u],l=o-u<0?1:t[o-u];if(n!==l&&n>1&&l>1)return;s[a-u]=Math.max(n,l)}return s}static index(t,n){let i=Array(n.length);return e.fillIndex(t,n,i),i}static fillIndex(e,t,n){let i=e.length-t.length;for(let o=0;o<t.length;o++)n[o]=e[i+o]%t[o]}static calc(t,n,i,o,a){let s=e.calcShape(t.dims,n.dims);if(s){if(o&&!Q.areEqual(s,t.dims))return;let u=Q.size(s),l=o?t:new rt(s,a||t.type);if(0===s.length)l.set([],i(t.get([]),n.get([])));else{let o,a=Array(s.length),d=Array(t.dims.length),p=Array(n.dims.length),c=0,h=0,f=!1,m=!1;0===t.dims.length&&(c=t.get([]),f=!0),0===n.dims.length&&(h=n.get([]),m=!0);for(let g=0;g<u;g++){o=g;for(let e=s.length-1;e>=0;e--)a[e]=o%s[e],o=Math.floor(o/s[e]);f||(e.fillIndex(a,t.dims,d),c=t.get(d)),m||(e.fillIndex(a,n.dims,p),h=n.get(p)),l.set(a,i(c,h))}}return l}}static isValidBroadcast(e,t){let n=e.length,i=t.length;if(n>i)return!1;for(let o=1;o<=n;o++)if(1!==e[n-o]&&e[n-o]!==t[i-o])return!1;return!0}static getBroadcastDims(e,t){let n=e.length,i=[];for(let o=0;o<n;o++){let a=n-1-o,s=e[a]||1;(t[t.length-1-o]||1)>1&&1===s&&i.unshift(a)}return i}},No=class{static getShapeOfGemmResult(e,t,n,i,o){let a,s,u;if(2!==e.length||2!==n.length)throw Error("shape need to be of size 2");t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(u=n[0],l=1):(u=n[1],l=0),n[l]!==s)throw Error("dimension mismatch");if(a<=0||u<=0||s<=0)throw Error("invalid shape specified");if(o&&!gt.isValidBroadcast(o,[a,u]))throw Error("gemm: invalid bias shape for broadcast");return[a,u,s]}},dt=class e{static tensorDataTypeFromProto(e){switch(e){case Ge.onnx.TensorProto.DataType.INT8:return"int8";case Ge.onnx.TensorProto.DataType.UINT8:return"uint8";case Ge.onnx.TensorProto.DataType.BOOL:return"bool";case Ge.onnx.TensorProto.DataType.INT16:return"int16";case Ge.onnx.TensorProto.DataType.UINT16:return"uint16";case Ge.onnx.TensorProto.DataType.INT32:return"int32";case Ge.onnx.TensorProto.DataType.UINT32:return"uint32";case Ge.onnx.TensorProto.DataType.FLOAT:return"float32";case Ge.onnx.TensorProto.DataType.DOUBLE:return"float64";case Ge.onnx.TensorProto.DataType.STRING:return"string";case Ge.onnx.TensorProto.DataType.INT64:return"int32";case Ge.onnx.TensorProto.DataType.UINT64:return"uint32";default:throw Error(`unsupported data type: ${Ge.onnx.TensorProto.DataType[e]}`)}}static tensorDataTypeStringToEnum(e){switch(e){case"int8":return Ge.onnx.TensorProto.DataType.INT8;case"uint8":return Ge.onnx.TensorProto.DataType.UINT8;case"bool":return Ge.onnx.TensorProto.DataType.BOOL;case"int16":return Ge.onnx.TensorProto.DataType.INT16;case"uint16":return Ge.onnx.TensorProto.DataType.UINT16;case"int32":return Ge.onnx.TensorProto.DataType.INT32;case"uint32":return Ge.onnx.TensorProto.DataType.UINT32;case"float32":return Ge.onnx.TensorProto.DataType.FLOAT;case"float64":return Ge.onnx.TensorProto.DataType.DOUBLE;case"string":return Ge.onnx.TensorProto.DataType.STRING;case"int64":return Ge.onnx.TensorProto.DataType.INT64;case"uint64":return Ge.onnx.TensorProto.DataType.UINT64;default:throw Error(`unsupported data type: ${e}`)}}static tensorDimsFromProto(e){return e.map(e=>pr.isLong(e)?e.toNumber():e)}static tensorValueTypeFromProto(t){return{tensorType:e.tensorDataTypeFromProto(t.elemType),shape:{dims:e.tensorDimsFromProto(t.shape.dim.map(e=>e.dimValue))}}}static tensorDimsFromORTFormat(e){let t=[];for(let n=0;n<e.dimsLength();n++)t.push(_t.longToNumber(e.dims(n)));return t}static tensorAttributesFromORTFormat(e){let t=[];for(let n=0;n<e.attributesLength();n++)t.push(e.attributes(n));return t}},_t=class{static longToNumber(e,t){return pr.isLong(e)?e.toNumber():e instanceof D.Long?pr.fromValue({low:e.low,high:e.high,unsigned:t??!1}).toNumber():e}static isLong(e){return pr.isLong(e)||e instanceof D.Long}},Q=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let i=1;for(let o=t;o<n;o++){if(e[o]<=0)throw Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");i*=e[o]}return i}static computeStrides(e){let t=e.length;if(0===t)return[];if(1===t)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let i=t-3;i>=0;--i)n[i]=n[i+1]*e[i+1];return n}static transpose(e){return e.slice().reverse()}static indicesToOffset(e,t,n){void 0===n&&(n=e.length);let i=0;for(let o=0;o<n;++o)i+=t[o]*e[o];return i}static offsetToIndices(e,t){let n=t.length;if(0===n)return[];if(1===n)return[e*t[0]];let i=Array(t.length);for(let n=0;n<i.length-1;++n)i[n]=Math.floor(e/t[n]),e-=i[n]*t[n];return i[i.length-1]=e,i}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error("unsupported axis for this operation.");return e<0?e+t:e}static normalizeAxes(e,t){return e.map(e=>this.normalizeAxis(e,t))}static incrementIndex(e,t,n){if(0===t.length||0===e.length)throw Error("Index incrementing unsupported for scalar Tensor");if(void 0===n)n=t.length;else if(n<=0||n>t.length)throw Error("Incorrect axis to increment on");for(let i=n-1;i>=0&&(e[i]++,!(e[i]<t[i]));--i)e[i]=0}static calculateReshapedDims(t,n){if(0===n.length){if(0===t.length||1===e.size(t))return[];throw Error("cannot reshape to a scalar Tensor")}let i=n.length,o=Array(i),a=-1,s=1;for(let e=0;e<i;e++){if(n[e]<-1)throw Error("a dimension in shape hints cannot be less than -1");if(-1===n[e]){if(-1!==a)throw Error("at most one dimension in shape hints can be -1");a=e}else{if(0===n[e]){if(e>=t.length)throw Error("the dimension with value zero exceeds the dimension size of the input tensor");o[e]=t[e]}else o[e]=n[e];s*=o[e]}}let u=e.size(t);if(-1!==a){if(u%s!=0)throw Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${t}] Output shape: [${n}]`);o[a]=u/s}else if(s!==u)throw Error("reshapedDims and originalDims don't have matching sizes");return o}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,i)=>e+t[i]+t[i+n])}static areEqual(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}static validateDimsAndCalcSize(e){if(e.length>6)throw TypeError("Only rank 0 to 6 is supported for tensor shape.");let t=1;for(let n of e){if(!Number.isInteger(n))throw TypeError(`Invalid shape: ${n} is not an integer`);if(n<0||n>0x7fffffff)throw TypeError(`Invalid shape: length ${n} is not allowed`);t*=n}return t}static flattenShape(e,t){t<0&&(t+=e.length);let n=e.reduce((e,t)=>e*t,1),i=e.slice(t).reduce((e,t)=>e*t,1);return[n/i,i]}static squeezeShape(t,n){let i=[];n=e.normalizeAxes(n,t.length);for(let e=0;e<t.length;e++){let o=n.indexOf(e)>=0;if(o&&1!==t[e])throw Error("squeeze an axis of size different than 1");(0===n.length&&t[e]>1||n.length>0&&!o)&&i.push(t[e])}return i}static unsqueezeShape(t,n){let i=Array(t.length+n.length);i.fill(0);for(let t=0;t<n.length;t++){let o=e.normalizeAxis(n[t],i.length);if(o>=i.length)throw Error("'axes' has an out of range axis");if(0!==i[o])throw Error("'axes' has a duplicate axis");i[o]=1}let o=0;for(let e=0;e<i.length;e++)0===i[e]&&(i[e]=t[o++]);if(o!==t.length)throw Error("the unsqueezed dimension could not be established");return i}},Ln=class e{static splitShape(t,n,i,o){if(0===i.length){if(!o)throw Error("need to know number of outputs when the 'split' attribute is not specified");e.determineSplit(t[n],o,i)}let a=[],s=[0];for(let e=0;e<i.length;++e){0!==e&&s.push(s[e-1]+i[e-1]);let o=t.slice();o[n]=i[e],a.push(o)}return[a,s]}static determineSplit(e,t,n){if(e%t!=0)throw Error("cannot split tensor to equal sized parts");for(let i=0;i<t;++i)n.push(e/t)}},Vr=class e{static adjustPoolAttributes(e,t,n,i,o,a){if(!e&&n.length!==t.length-2)throw Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error("strides should be greater than or equal to 1")}else i.push(1);for(let e=0;e<n.length;e++)if(e<o.length){if(o[e]<0)throw Error("dilations should be greater than or equal to 1")}else o.push(1);for(let e=0;e<2*n.length;e++)if(e<a.length){if(a[e]<0)throw Error("pad should be greater than or equal to 1")}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error("kernel shapes need to be greater than 0");if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,i,o,a,s){if(s){if(a.length!==2*(t.length-2))throw Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw Error("length of strides should be the length of data dimensions");if(o.length!==t.length-2)throw Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)e.adjustPadAndReturnShape(t[u+2],n[u],i[u],o[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,i,o,a,s,u){if(n.length<=0)throw Error("input shape must be of size greater than 0");let l=[n[0],n[1]];return e.computeShapeHelper(t,n,l,i,o,a,s,u),l}static computeConvOutputShape(t,n,i,o,a,s,u){if(t.length<=0||n.length<=0)throw Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],n[0]];return e.computeShapeHelper(!1,t,l,i,o,a,s,u),l}static computeShapeHelper(t,n,i,o,a,s,u,l){if(t)for(let e=0;e<n.length-2;e++)i.push(1);else for(let t=0;t<n.length-2;t++)i.push(e.adjustPadAndReturnShape(n[t+2],o[t],a[t],s[t],u,t,t+n.length-2,l))}static adjustPadAndReturnShape(e,t,n,i,o,a,s,u){let l=n*(i-1)+1;if(!u||"NOTSET"===u)return Math.floor((e+o[a]+o[s]-l)/t+1);switch(u){case"VALID":return o[a]=0,o[s]=0,Math.floor((e-l)/t+1);case"SAME_LOWER":case"SAME_UPPER":if(1!==n)throw Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let n=((e+t-1)/t-1)*t+i-e;return o[a]=Math.floor("SAME_LOWER"===u?(n+1)/2:n/2),o[s]=n-o[a],Math.floor((e+n-i)/t+1)}default:throw Error("Unsupported AutoPad type")}}},Gr=-34028234663852886e22,Ur=34028234663852886e22});function Vw(e){switch(e){case"bool":case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;case"float64":return 8;default:throw Error(`cannot calculate sizeof() on type ${e}`)}}function Df(e){switch(e){case _e.onnx.TensorProto.DataType.UINT8:case _e.onnx.TensorProto.DataType.INT8:case _e.onnx.TensorProto.DataType.BOOL:return 1;case _e.onnx.TensorProto.DataType.UINT16:case _e.onnx.TensorProto.DataType.INT16:return 2;case _e.onnx.TensorProto.DataType.FLOAT:case _e.onnx.TensorProto.DataType.INT32:case _e.onnx.TensorProto.DataType.UINT32:return 4;case _e.onnx.TensorProto.DataType.INT64:case _e.onnx.TensorProto.DataType.DOUBLE:case _e.onnx.TensorProto.DataType.UINT64:return 8;default:throw Error(`cannot calculate sizeof() on type ${_e.onnx.TensorProto.DataType[e]}`)}}function Gw(e,t){return new(Rf(t))(e)}function Rf(e){switch(e){case"bool":case"uint8":return Uint8Array;case"int8":return Int8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"float32":return Float32Array;case"float64":return Float64Array;default:throw Error("unspecified error")}}function Ja(e,t){if(t===_e.onnx.TensorProto.DataType.INT64||t===Ya.TensorDataType.INT64){if(e.greaterThanOrEqual(0x80000000)||e.lessThan(-0x80000000))throw TypeError("int64 is not supported")}else if(t===_e.onnx.TensorProto.DataType.UINT32||t===Ya.TensorDataType.UINT32||t===_e.onnx.TensorProto.DataType.UINT64||t===Ya.TensorDataType.UINT64){if(e.greaterThanOrEqual(0x100000000)||e.lessThan(0))throw TypeError("uint64 is not supported")}else throw TypeError(`not a LONG type: ${_e.onnx.TensorProto.DataType[t]}`);return e.toNumber()}function Bf(e,t,n){switch(t){case _e.onnx.TensorProto.DataType.BOOL:case _e.onnx.TensorProto.DataType.UINT8:return e.getUint8(n);case _e.onnx.TensorProto.DataType.INT8:return e.getInt8(n);case _e.onnx.TensorProto.DataType.UINT16:return e.getUint16(n,!0);case _e.onnx.TensorProto.DataType.INT16:return e.getInt16(n,!0);case _e.onnx.TensorProto.DataType.FLOAT:return e.getFloat32(n,!0);case _e.onnx.TensorProto.DataType.INT32:return e.getInt32(n,!0);case _e.onnx.TensorProto.DataType.UINT32:return e.getUint32(n,!0);case _e.onnx.TensorProto.DataType.INT64:return Ja(pr.fromBits(e.getUint32(n,!0),e.getUint32(n+4,!0),!1),t);case _e.onnx.TensorProto.DataType.DOUBLE:return e.getFloat64(n,!0);case _e.onnx.TensorProto.DataType.UINT64:return Ja(pr.fromBits(e.getUint32(n,!0),e.getUint32(n+4,!0),!0),t);default:throw Error(`cannot read from DataView for type ${_e.onnx.TensorProto.DataType[t]}`)}}var Lf,_e,Ya,rt,Wr=C(()=>{Lf=ln(_c()),Ra(),Cn(),_e=ln(pn()),ze(),Ya=ee.experimental.fbs,rt=class e{constructor(e,t,n,i,o,a=Lf.Guid.create()){this.dims=e,this.type=t,this.dataProvider=n,this.asyncDataProvider=i,this.cache=o,this.dataId=a,this.size=Q.validateDimsAndCalcSize(e);let s=this.size,u=void 0===n&&void 0===i&&void 0===o;if(void 0!==o&&o.length!==s)throw RangeError("Input dims doesn't match data length.");if("string"===t){if(void 0!==o&&(!Array.isArray(o)||!o.every(e=>"string"==typeof e)))throw TypeError("cache should be a string array");u&&(this.cache=Array(s))}else{if(void 0!==o){let e=Rf(t);if(!(o instanceof e))throw TypeError(`cache should be type ${e.name}`)}if(u){let e=new ArrayBuffer(s*Vw(t));this.cache=Gw(e,t)}}}get data(){if(void 0===this.cache){let e=this.dataProvider(this.dataId);if(e.length!==this.size)throw Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");this.cache=e}return this.cache}get stringData(){if("string"!==this.type)throw TypeError("data type is not string");return this.data}get integerData(){switch(this.type){case"uint8":case"int8":case"uint16":case"int16":case"int32":case"uint32":case"bool":return this.data;default:throw TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)")}}get floatData(){switch(this.type){case"float32":case"float64":return this.data;default:throw TypeError("data type is not float (float32, float64)")}}get numberData(){if("string"!==this.type)return this.data;throw TypeError("type cannot be non-number (string)")}get(e){return this.data[Q.indicesToOffset(e,this.strides)]}set(e,t){this.data[Q.indicesToOffset(e,this.strides)]=t}async getData(){return void 0===this.cache&&(this.cache=await this.asyncDataProvider(this.dataId)),this.cache}get strides(){return this._strides||(this._strides=Q.computeStrides(this.dims)),this._strides}static fromProto(t){if(!t)throw Error("cannot construct Value from an empty tensor");let n=dt.tensorDataTypeFromProto(t.dataType),i=new e(dt.tensorDimsFromProto(t.dims),n);if("string"===n)t.stringData.forEach((e,t)=>{i.data[t]=Rn(e)});else if(t.rawData&&"number"==typeof t.rawData.byteLength&&t.rawData.byteLength>0){let e=i.data,n=new DataView(t.rawData.buffer,t.rawData.byteOffset,t.rawData.byteLength),o=Df(t.dataType),a=t.rawData.byteLength/o;if(t.rawData.byteLength%o!=0)throw Error("invalid buffer length");if(e.length!==a)throw Error("buffer length mismatch");for(let i=0;i<a;i++){let a=Bf(n,t.dataType,i*o);e[i]=a}}else{let e;switch(t.dataType){case _e.onnx.TensorProto.DataType.FLOAT:e=t.floatData;break;case _e.onnx.TensorProto.DataType.INT32:case _e.onnx.TensorProto.DataType.INT16:case _e.onnx.TensorProto.DataType.UINT16:case _e.onnx.TensorProto.DataType.INT8:case _e.onnx.TensorProto.DataType.UINT8:case _e.onnx.TensorProto.DataType.BOOL:e=t.int32Data;break;case _e.onnx.TensorProto.DataType.INT64:e=t.int64Data;break;case _e.onnx.TensorProto.DataType.DOUBLE:e=t.doubleData;break;case _e.onnx.TensorProto.DataType.UINT32:case _e.onnx.TensorProto.DataType.UINT64:e=t.uint64Data;break;default:throw Error("unspecific error")}if(null==e)throw Error("failed to populate data from a tensorproto value");let n=i.data;if(n.length!==e.length)throw Error("array length mismatch");for(let i=0;i<e.length;i++){let o=e[i];pr.isLong(o)?n[i]=Ja(o,t.dataType):n[i]=o}}return i}static fromData(t,n,i){return new e(n,i,void 0,void 0,t)}static fromOrtTensor(t){if(!t)throw Error("cannot construct Value from an empty tensor");let n=dt.tensorDimsFromORTFormat(t),i=dt.tensorDataTypeFromProto(t.dataType()),o=new e(n,i);if("string"===i)for(let e=0;e<t.stringDataLength();e++)o.data[e]=t.stringData(e);else if(t.rawDataArray()&&"number"==typeof t.rawDataLength()&&t.rawDataLength()>0){let e=o.data,n=new DataView(t.rawDataArray().buffer,t.rawDataArray().byteOffset,t.rawDataLength()),i=Df(t.dataType()),a=t.rawDataLength()/i;if(t.rawDataLength()%i!=0)throw Error("invalid buffer length");if(e.length!==a)throw Error("buffer length mismatch");for(let o=0;o<a;o++){let a=Bf(n,t.dataType(),o*i);e[o]=a}}return o}}});function ae(e){return 1===e?Uw:Ww}function zf(e){let t=ae(e);return`${t.version}
      precision highp float;
      ${t.attribute} vec3 position;
      ${t.attribute} vec2 textureCoord;

      ${t.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`}function Nf(e){let t=ae(e);return`${t.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${t.varyingFrag} vec2 TexCoords;
    ${t.outputDeclaration}
    const vec2 halfCR = vec2(0.5, 0.5);

    // Custom vector types to handle higher dimenalities.
    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    `}function Mf(e,t){let n=ae(e);return`
  void main() {
    int indices[${t}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${n.output} = result;
  }
  `}var Uw,Ww,qe=C(()=>{Uw={version:"",attribute:"attribute",varyingVertex:"varying",varyingFrag:"varying",texture2D:"texture2D",output:"gl_FragColor",outputDeclaration:""},Ww={version:"#version 300 es",attribute:"in",varyingVertex:"out",varyingFrag:"in",texture2D:"texture",output:"outputColor",outputDeclaration:"out vec4 outputColor;"}}),Oe=C(()=>{});async function Qa(e,t=e=>0,n){return new Promise((i,o)=>{let a=0,s=()=>{if(e()){i();return}let u=t(++a);if(null!=n&&a>=n){o();return}setTimeout(s,u)};s()})}function Mo(e){return mn("u">typeof e&&0!==e.length,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)}function Ff(e){return mn("u">typeof e&&0!==e.length,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)+"AtOutCoords"}function hn(e,t){let n=JSON.parse(JSON.stringify(e));return t}function gn(e,t){return t.map(t=>e[t]).join(", ")}function bt(e){if(e<=1)return"int";if(2===e)return"ivec2";if(3===e)return"ivec3";if(4===e)return"ivec4";if(5===e)return"ivec5";if(6===e)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function qt(e=6){return["x","y","z","w","u","v"].slice(0,e)}var er=C(()=>{ze()});function Hw(e,t){return qt(t).map(t=>`${e}.${t}`)}function bn(e,t){return 1===t?[e]:Hw(e,t)}function tr(){return`
    float getChannel(vec4 frag, int dim) {
      int modCoord = imod(dim, 2);
      return modCoord == 0 ? frag.r : frag.g;
    }

    float getChannel(vec4 frag, vec2 innerDims) {
      vec2 modCoord = mod(innerDims, 2.);
      return modCoord.x == 0. ?
        (modCoord.y == 0. ? frag.r : frag.g) :
        (modCoord.y == 0. ? frag.b : frag.a);
    }
  `}var Hr=C(()=>{er()});function jw(e,t,n){if(0===e)return"false";if(1===e)return`rc > ${t[0]}`;let i="";for(let o=e-2;o<e;o++)i+=`${n[o]} >= ${t[o-e+2]}`,o<e-1&&(i+="||");return i}function Kw(e,t){let n=e.length;if(0===n)return"getA(), 0, 0, 0";if(1===n)return`getA(rc),
            rc + 1 >= ${e[0]} ? 0. : getA(rc + 1),
            0, 0`;let i="r, c",o="r, cp1",a="rp1, c",s="rp1, cp1",u="";if(n>2)for(let e=0;e<n-2;++e)u+=`${t[e]},`;return`getA(${u}${i}),
          rEdge ? 0. : getA(${u}${a}),
          cEdge ? 0. : getA(${u}${o}),
          rEdge || cEdge ? 0. : getA(${u}${s})`}function Xw(e,t,n,i){return 0===e||1===e?"":`
    int r = ${t[e-2]};
    int c = ${t[e-1]};
    int rp1 = ${t[e-2]} + 1;
    int cp1 = ${t[e-1]} + 1;
    bool rEdge = rp1 >= ${i};
    bool cEdge = cp1 >= ${n};
    `}var Vf,qw,Gf,Uf=C(()=>{qe(),Oe(),er(),Hr(),Vf={name:"pack",inputNames:["A"],inputTypes:[1]},qw=(e,t)=>{let n=ae(e.session.backend.glContext.version),i=t.dims,o=i.length,a=t.dims.length,s=bt(a),u=bn("rc",a),l=Xw(a,u,i[i.length-2],i[i.length-1]),d;d=0===o?[1,1]:1===o?[i[0],1]:[i[a-1],i[a-2]];let p=jw(a,d,u),c=Kw(i,u),h=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${p}) {
            ${n.output} = vec4(0);
          } else {
            ${l}

            ${n.output} = vec4(${c});
          }
        }
      `;return{...Vf,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:2},shaderSource:h}},Gf=(e,t)=>({...Vf,get:()=>qw(e,t)})});function es(e){if(0===e.length)return[1,1,1];let t=1;for(let n=0;n<e.length-2;++n)t*=e[n];return[t,e.length>1?e[e.length-2]:1,e[e.length-1]]}function Hf(e,t){let n=!1;return 0===e.length||0===t.length||(e.length<2||t.length<2?e[e.length-1]===t[t.length-1]:e[e.length-1]===t[t.length-1]&&e[e.length-2]===t[t.length-2])}function Jw(e){let t=Q.computeStrides(e),n=["b","r","c"],i="index";return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t.map((e,o)=>{let a=`int ${n[o]} = ${i} / ${e}`,s=o===t.length-1?`int ${n[o+1]} = ${i} - ${n[o]} * ${e}`:`index -= ${n[o]} * ${e}`;return`${a}; ${s};`}).join("")}
      return ivec3(b, r, c);
    }
  `}function Qw(e){let t=Q.computeStrides(e);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${t[0]} + coords.z * ${t[1]} + coords.y;
  }
`}var Zw,Yw,Wf,qf=C(()=>{ze(),qe(),Oe(),Hr(),Zw=e=>({name:"Reshape (packed)",inputTypes:[2],inputNames:["A"],cacheHint:`${e}`}),Yw=(e,t,n,i)=>{let o=t.dims,a=i,s="";for(let e=0;e<4;e++){let t="";switch(e){case 0:t="outputCoords = rc;";break;case 1:t="outputCoords = ivec3(rc.x, rc.y+1, rc.z);";break;case 2:t="outputCoords = ivec3(rc.x, rc.y, rc.z+1);";break;case 3:t="outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";break;default:throw Error()}s+=`
        ${t}
        ${e>0?"if(outputCoords.y < rows && outputCoords.z < cols){":""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${e>0?"}":""}
      `}let u=ae(e.session.backend.glContext.version),l=`
      ${Jw(o)}
      ${Qw(a)}
      ${tr()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${a[2]};
        int cols = ${a[1]};

        ${s}
        ${u.output} = result;
      }
    `;return{...n,output:{dims:a,type:t.type,textureType:2},shaderSource:l,hasMain:!0}},Wf=(e,t,n)=>{let i=Zw(n);return{...i,get:()=>Yw(e,t,i,n)}}}),ts,jf=C(()=>{qe(),Oe(),ts=(e,t)=>{let n=t.shape,i=ae(e.session.backend.glContext.version),o=`
    const float FLOAT_MAX = 1.70141184e38;
    const float FLOAT_MIN = 1.17549435e-38;

    bool isNaN(float val) {
      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;
    }

    highp vec4 encodeAsUint8(highp float v) {
      if (isNaN(v)) {
        return vec4(255, 255, 255, 255);
      }

      highp float av = abs(v);

      if(av < FLOAT_MIN) {
        return vec4(0.0, 0.0, 0.0, 0.0);
      } else if(v > FLOAT_MAX) {
        return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
      } else if(v < -FLOAT_MAX) {
        return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
      }

      highp vec4 c = vec4(0,0,0,0);

      highp float e = floor(log2(av));
      highp float m = exp2(fract(log2(av))) - 1.0;

      c[2] = floor(128.0 * m);
      m -= c[2] / 128.0;
      c[1] = floor(32768.0 * m);
      m -= c[1] / 32768.0;
      c[0] = floor(8388608.0 * m);

      highp float ebias = e + 127.0;
      c[3] = floor(ebias / 2.0);
      ebias -= c[3] * 2.0;
      c[2] += floor(ebias) * 128.0;

      c[3] += 128.0 * step(0.0, -v);

      return c / 255.0;
    }

    void main() {
      float value = ${i.texture2D}(X,TexCoords).r;
      ${i.output} = encodeAsUint8(value);
    }`,a={name:"Uint8Encode",inputTypes:[0],inputNames:["X"],output:{dims:n,type:t.tensor.type,textureType:3},shaderSource:o,hasMain:!0};return e.executeProgram(a,[t.tensor])}});function tv(e,t){if(1===e)return"rc";let n="";for(let i=0;i<e;i++)n+=t[i],i<e-1&&(n+=",");return n}var Kf,ev,Xf,Zf=C(()=>{qe(),Oe(),er(),Hr(),Kf={name:"unpack",inputNames:["A"],inputTypes:[2]},ev=(e,t)=>{let n=t.dims.length,i=bn("rc",n),o=i.slice(-2),a=bt(n),s=tr(),u=0===t.dims.length?"":tv(n,i),l=n<=1?"rc":`vec2(${o.join(",")})`,d=ae(e.session.backend.glContext.version),p=`
    ${s}
    void main() {
      ${a} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${u});

       ${d.output} = vec4(getChannel(packedInput, ${l}), 0, 0, 0);
     }
   `;return{...Kf,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:p}},Xf=(e,t)=>({...Kf,get:()=>ev(e,t)})}),Fo,zn,Vo,Nn=C(()=>{kt(),Fo=class{constructor(e,t=1){if(1===t)this.internalFormat=e.R32F,this.format=e.RED,this.textureType=e.FLOAT,this.channelSize=t;else if(4===t)this.internalFormat=e.RGBA32F,this.format=e.RGBA,this.textureType=e.FLOAT,this.channelSize=t;else throw Error(`Invalid number of channels: ${t}`)}encode(e,t){let n,i;return e.constructor!==Float32Array&&(Ne.warning("Encoder","data was not of type Float32; creating new Float32Array"),i=new Float32Array(e)),t*this.channelSize>e.length?(Ne.warning("Encoder","Source data too small. Allocating larger array"),i=e,n=this.allocate(t*this.channelSize),i.forEach((e,t)=>n[t]=e)):n=i=e,n}allocate(e){return new Float32Array(4*e)}decode(e,t){return 1===this.channelSize?e.filter((e,t)=>t%4==0).subarray(0,t):e.subarray(0,t)}},zn=class{constructor(e,t=1,n){if(1!==t&&4!==t)throw Error(`Invalid number of channels: ${t}`);this.internalFormat=e.RGBA,this.format=e.RGBA,this.channelSize=t,this.textureType=n||e.FLOAT}encode(e,t){let n=e;return 1===this.channelSize&&(Ne.verbose("Encoder","Exploding into a larger array"),n=this.allocate(t),e.forEach((e,t)=>n[4*t]=e)),n}allocate(e){return new Float32Array(4*e)}decode(e,t){return 1===this.channelSize?e.filter((e,t)=>t%4==0).subarray(0,t):e.subarray(0,t)}},Vo=class{constructor(e,t=1){if(this.channelSize=4,1===t)this.internalFormat=e.ALPHA,this.format=e.ALPHA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else if(4===t)this.internalFormat=e.RGBA,this.format=e.RGBA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else throw Error(`Invalid number of channels: ${t}`)}encode(e,t){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}allocate(e){return new Uint8Array(e*this.channelSize)}decode(e,t){if(e instanceof Uint8Array)return e.subarray(0,t);throw Error(`Invalid array type: ${e.constructor}`)}}}),Mn,Yf,rs,Jf=C(()=>{ze(),Oe(),Mn=(e,t,n)=>{let i=0===n||1===n?1:4,o=2===n,a=1===n||2===n,s=4===n?t.length-1:void 0,u=4===n?t.map((e,n)=>n===t.length-1?4*e:e):void 0;return rs(e,t,i,u,{isPacked:o,reverseWH:a,breakAxis:s})},Yf=(e,t,n)=>{let i=Mn(e,t,n);return[i.width,i.height]},rs=(e,t,n=1,i,o)=>{let a=!!(o&&o.isPacked),[s,u]=e.computeTextureWH(a&&i||t,o),l=t.length,d=t.slice(0);if(0===l&&(d=[1]),1===n)i=t;else if(a){if(4!==n)throw Error("a packed texture must be 4-channel");i=t,l>0&&(d[l-1]=Math.ceil(d[l-1]/2)),l>1&&(d[l-2]=Math.ceil(d[l-2]/2))}else if(!i)throw Error("Unpacked shape is needed when using channels > 1");return{width:s,height:u,channels:n,isPacked:a,shape:d,strides:Q.computeStrides(d),unpackedShape:i,reversedWH:o&&o.reverseWH}}}),nv,Go,ed=C(()=>{kt(),Wr(),ze(),Uf(),qf(),jf(),Zf(),Nn(),Jf(),Oe(),nv=(e,t)=>{let n=t.map(e=>`${e.unpackedShape.join(",")};${e.width}x${e.height}`).join("_"),i=e.name;return e.cacheHint&&(i+="["+e.cacheHint+"]"),i+=":"+n},Go=class{constructor(e){this.session=e,this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(e,t){return Yf(this.session.layoutStrategy,e,t)}executeProgram(e,t){if(t.length<e.inputNames.length)throw Error(`Input size mustn't be less than ${e.inputNames.length}.`);if(e.inputNames.length!==e.inputTypes.length)throw Error("input names size does not match input types");let n=[];for(let i=0;i<e.inputNames.length;++i)n[i]=this.getOrCreateTextureData(t[i],e.inputTypes[i]);let i=nv(e,n),o=this.session.programManager.getArtifact(i),a=o?o.programInfo:"function"==typeof e.get?e.get():e,s=Mn(this.session.layoutStrategy,a.output.dims,a.output.textureType),u=this.createTextureData(s,a.output.type);return o||(o=this.session.programManager.build(a,n,u),this.session.programManager.setArtifact(i,o)),this.runProgram(o,n,u),u}run(e,t){return this.executeProgram(e,t).tensor}runProgram(e,t,n){for(let n=0;n<t.length;++n)if(!!t[n].isPacked!=(2===e.programInfo.inputTypes[n]))throw Error(`input[${n}] property packed inconsistent`);if(!!n.isPacked!=(2===e.programInfo.output.textureType))throw Error("output property packed inconsistent");this.session.programManager.run(e,t,n)}getOrCreateTextureData(e,t){let n=this.getTextureData(e.dataId,2===t);if(!n&&(n=this.getTextureData(e.dataId,2!==t)))return 2===t?this.pack(n):this.unpack(n);if(!n){let i=Mn(this.session.layoutStrategy,e.dims,t);if(4===t){let n=e.dims;if(4===n.length){let i=[n[0],Math.ceil(n[1]*n[2]*n[3]/4)],o=Mn(this.session.layoutStrategy,i,t),a=e.numberData;if(n[1]*n[2]*n[3]%4!=0){let t=n[0],i=n[1]*n[2]*n[3],o=4*Math.ceil(1*i/4);a=new Float32Array(t*o);for(let n=0;n<t;++n){let t=n*i,s=n*o+n%1*i;a.set(e.numberData.subarray(t,t+i),s)}}return this.createTextureData(o,e.type,a,e,1)}}if(2===t){let t=rs(this.session.layoutStrategy,e.dims,1,[],{reverseWH:!0}),i=this.createTextureData(t,e.type,e.numberData,e,1);n=this.pack(i)}else n=this.createTextureData(i,e.type,e.numberData,e,1)}return n}createTextureDataFromLayoutBindTensor(e,t,n,i){return this.createTextureData(e,t,n,i,1)}createTextureData(e,t,n,i,o){Ne.verbose("InferenceHandler",`Creating TextureData: layout:[${JSON.stringify(e)}]`);let a=this.session.textureManager.createTextureFromLayout(t,e,n,o);return this.createTextureDataFromTexture(e,t,a,i)}reshapeUnpacked(e,t){let n=this.getOrCreateTextureData(e,0),i={channels:n.channels,height:n.height,width:n.width,shape:0!==t.length?t:[1],strides:Q.computeStrides(t),unpackedShape:t};return this.createTextureDataFromTexture(i,e.type,n.texture).tensor}reshapePacked(e,t){let n=this.getOrCreateTextureData(e,2);if(Hf(e.dims,t)){let i={channels:n.channels,height:n.height,width:n.width,shape:0!==t.length?t:[1],strides:Q.computeStrides(t),unpackedShape:t,isPacked:!0};return this.createTextureDataFromTexture(i,e.type,n.texture).tensor}let i=es(e.dims),o=es(t),a=this.reshapePacked(e,i),s=this.run(Wf(this,a,o),[a]);return this.reshapePacked(s,t)}cast(e,t){let n=this.getOrCreateTextureData(e,0);return this.createTextureDataFromTexture(n,t,n.texture).tensor}createTextureDataFromTexture(e,t,n,i,o){let a={...e,tensor:i||new rt(e.unpackedShape,t,e=>this.readTexture(a),async e=>this.readTextureAsync(a),void 0,o),texture:n};return this.setTextureData(a.tensor.dataId,a,e.isPacked),a}getTextureData(e,t=!1){return this.session.isInitializer(e)?this.session.getTextureData(e,t):t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,n=!1){this.session.isInitializer(e)?this.session.setTextureData(e,t,n):(n?this.packedTextureDataCache:this.unpackedTextureDataCache).set(e,t)}isTextureLayoutCached(e,t=!1){return!!this.getTextureData(e.dataId,t)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.unpackedTextureDataCache=new Map}readTexture(e){return e.isPacked?this.readTexture(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(ts(this,e))}async readTextureAsync(e){return e.isPacked?this.readTextureAsync(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(ts(this,e))}pack(e){return this.executeProgram(Gf(this,e.tensor),[e.tensor])}unpack(e){return this.executeProgram(Xf(this,e.tensor),[e.tensor])}}}),ns,xe,lt=C(()=>{ns=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},xe=e=>new ns(e)}),td,rd,nd,ov,iv,od=C(()=>{lt(),qe(),Oe(),td={name:"BatchNormalization",inputNames:["A","Scale","B","Mean","Variance"],inputTypes:[0,0,0,0,0]},rd=(e,t,n)=>(iv(t),[e.run({...td,cacheHint:n.cacheKey,get:()=>ov(e,t,n)},t)]),nd=e=>{let t=e.attributes.getFloat("epsilon",1e-5),n=e.attributes.getFloat("momentum",.9),i=e.attributes.getInt("spatial",1);return xe({epsilon:t,momentum:n,spatial:i})},ov=(e,t,n)=>{let i=ae(e.session.backend.glContext.version),o=t[0].dims.length,[a,s]=e.calculateTextureWidthAndHeight(t[1].dims,0),u=`
  float process(int[${o}] indices) {
    vec2 position = offsetToCoords(indices[1], ${a}, ${s});
    float scale = getColorAsFloat(${i.texture2D}(Scale, position));
    float mean = getColorAsFloat(${i.texture2D}(Mean, position));
    float variance = getColorAsFloat(${i.texture2D}(Variance, position));
    float b = getColorAsFloat(${i.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${n.epsilon})) ) + b;
  }`;return{...td,output:{dims:t[0].dims,type:t[0].type,textureType:0},shaderSource:u}},iv=e=>{if(!e||5!==e.length)throw Error("BatchNormalization requires 5 inputs.");let t=e[0],n=e[1],i=e[2],o=e[3],a=e[4];if(t.dims.length<3||1!==n.dims.length||1!==i.dims.length||1!==o.dims.length||1!==a.dims.length||n.dims[0]!==t.dims[1]||i.dims[0]!==t.dims[1]||o.dims[0]!==t.dims[1]||a.dims[0]!==t.dims[1])throw Error("invalid input shape.");if("float32"!==t.type&&"float64"!==t.type||"float32"!==n.type&&"float64"!==n.type||"float32"!==i.type&&"float64"!==i.type||"float32"!==o.type&&"float64"!==o.type||"float32"!==a.type&&"float64"!==a.type)throw Error("invalid input tensor types.")}}),Uo,Rt,X,Fn,Wo,mr=C(()=>{Uo=class{constructor(e,t,n,i){this.glContext=e,this.programInfo=t,this.inputTextureLayouts=n,this.outputTextureLayout=i}},Rt=class{constructor(e){this.context=e}},X=class{constructor(e,t){this.routineBody=e,this.dependencies=t}},Fn=class{constructor(e,t,n){this.name=e,n?this.dependencies=n:this.dependencies=[],t&&(this.routineBody=t)}addDependency(e){e&&this.dependencies.push(e)}},Wo=class{static returnOrderedNodes(e){if(!e||0===e.length)return[];if(1===e.length)return e;let t=new Set,n=new Set,i=[];return this.createOrderedNodes(e,t,n,i),i}static createOrderedNodes(e,t,n,i){for(let o=0;o<e.length;++o)this.dfsTraverse(e[o],t,n,i)}static dfsTraverse(e,t,n,i){if(!e||n.has(e.name))return;if(t.has(e.name))throw Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");t.add(e.name);let o=e.dependencies;if(o&&o.length>0)for(let e=0;e<o.length;++e)this.dfsTraverse(o[e],t,n,i);i.push(e),n.add(e.name),t.delete(e.name)}}});function sv(){let e="add_";return{body:`
  float ${e}(float a, float b) {
    return a + b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:e,type:0}}function uv(){let e="div_";return{body:`
  float ${e}(float a, float b) {
    return a / b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:e,type:0}}function lv(){let e="mul_";return{body:`
  float ${e}(float a, float b) {
    return a * b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:e,type:0}}function cv(){let e="sub_";return{body:`
  float ${e}(float a, float b) {
    return a - b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:e,type:0}}function fv(){let e="equal_";return{body:`
  float ${e}(float a, float b) {
    return float(a == b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:e,type:0}}function dv(){let e="greater_";return{body:`
  float ${e}(float a, float b) {
    return float(a > b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:e,type:0}}function pv(){let e="less_";return{body:`
  float ${e}(float a, float b) {
    return float(a < b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,name:e,type:0}}function mv(){let e="and_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `,name:e,type:0}}function hv(){let e="or_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) || bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r || b2.r ,
                b1.g || b2.g,
                b1.b || b2.b,
                b1.a || b2.a );
  }
  `,name:e,type:0}}function gv(){let e="xor_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `,name:e,type:0}}function bv(){return xv("pow")}function yv(){let e="prelu_";return{body:`
  float ${e}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `,name:e,type:0}}function xv(e){let t=`${e}_`;return{body:`
  float ${t}(float a, float b) {
    return ${e}(a, b);
  }
  vec4 ${t}(vec4 v1, vec4 v2) {
    return ${e}(v1, v2);
  }
  `,name:t,type:0}}var zt,wv,id,ad,sd,ud,ld,cd,fd,dd,pd,md,hd,gd,bd=C(()=>{ze(),mr(),qe(),Oe(),zt=(e,t,n,i=t[0].type,o)=>{let a=e.session.pack?2:0;return{name:n.name,inputNames:["A","B"],inputTypes:[a,a],cacheHint:o,get:()=>wv(e,t,n,i)}},wv=(e,t,n,i=t[0].type)=>{let o=e.session.pack?2:0,a=!Q.areEqual(t[0].dims,t[1].dims),s=t[0].dims,u=e.session.pack;if(a){let a=gt.calcShape(t[0].dims,t[1].dims,!1);if(!a)throw Error("Can't perform binary op on the given tensors");let l=(s=a).length,d=0!==t[0].dims.length?t[0].dims.length:1,p=0!==t[1].dims.length?t[1].dims.length:1,c=0!==t[0].dims.length?"bcastIndices_A(indices, aindices);":"aindices[0] = 0;",h=0!==t[1].dims.length?"bcastIndices_B(indices, bindices);":"bindices[0] = 0;",f=ae(e.session.backend.glContext.version),m=u?`
      ${n.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${n.name}(a, b);
        ${f.output} = result;
      }`:`
      ${n.body}
      float process(int indices[${l}]) {
        int aindices[${d}];
        int bindices[${p}];
        ${c}
        ${h}
        return ${n.name}(_A(aindices), _B(bindices));
      }`;return{name:n.name,inputNames:["A","B"],inputTypes:[o,o],output:{dims:s,type:i,textureType:o},shaderSource:m,hasMain:u}}let l=ae(e.session.backend.glContext.version),d=`
    ${n.body}
    void main() {
      vec4 v1 = ${l.texture2D}(A, TexCoords);
      vec4 v2 = ${l.texture2D}(B, TexCoords);
      vec4 result = ${n.name}(v1, v2);
      ${l.output} = result;
    }
    `;return{name:n.name,inputNames:["A","B"],inputTypes:[o,o],output:{dims:t[0].dims,type:i,textureType:o},shaderSource:d,hasMain:!0}},id=(e,t)=>[e.run(zt(e,t,sv()),t)],ad=(e,t)=>[e.run(zt(e,t,mv(),"bool"),t)],sd=(e,t)=>[e.run(zt(e,t,uv()),t)],ud=(e,t)=>[e.run(zt(e,t,fv(),"bool"),t)],ld=(e,t)=>[e.run(zt(e,t,dv(),"bool"),t)],cd=(e,t)=>[e.run(zt(e,t,pv(),"bool"),t)],fd=(e,t)=>[e.run(zt(e,t,lv()),t)],dd=(e,t)=>[e.run(zt(e,t,hv(),"bool"),t)],pd=(e,t)=>[e.run(zt(e,t,bv()),t)],md=(e,t)=>[e.run(zt(e,t,yv()),t)],hd=(e,t)=>[e.run(zt(e,t,cv()),t)],gd=(e,t)=>[e.run(zt(e,t,gv(),"bool"),t)]}),yd,xd,Tv,wd=C(()=>{ze(),yd=(e,t,n)=>(Tv(t),[e.cast(t[0],n)]),xd=e=>dt.tensorDataTypeFromProto(e.attributes.getInt("to")),Tv=e=>{if(!e||1!==e.length)throw Error("Cast requires 1 input.");if("string"===e[0].type)throw Error("Invalid input type.")}}),_v,Iv,vd,Ho,Td=C(()=>{qe(),Oe(),er(),Hr(),_v=(e,t)=>({name:"Concat (packed)",inputNames:Array.from({length:e},(e,t)=>`X${t}`),inputTypes:Array(e).fill(2),cacheHint:t}),Iv=(e,t,n,i)=>{let o=n[0].dims.slice();if(i>=o.length||i<-1*o.length)throw Error("axis specified for concat doesn't match input dimensionality");i<0&&(i=o.length+i);let a=o.slice(0);for(let e=1;e<n.length;e++){let t=n[e].dims.slice();for(let e=0;e<o.length;e++)if(e===i)a[i]+=t[e];else if(o[e]!==t[e])throw Error("non concat dimensions must match")}let s=a.length,u=bn("coords",s),l=bt(s),d=tr(),p=n.map(e=>e.dims),c=qt(s),h=Array(p.length-1);h[0]=p[0][i];for(let e=1;e<h.length;e++)h[e]=h[e-1]+p[e][i];let f=c[i],m=c.slice(-2),g=c.join(),y=`if (${f} < ${h[0]}) {
        return getChannel(
            getX0(${g}), vec2(${m.join()}));
        }`;for(let e=1;e<h.length;e++){let t=h[e-1];y+=`
            if (${f} < ${h[e]}  && ${f} >= ${h[e-1]}) {
              return getChannel(
                getX${e}(${Ho(c,f,t)}),
                vec2(${Ho(m,f,t)}));
            }`}let b=h.length,_=h[h.length-1];y+=`
            return getChannel(
              getX${b}(${Ho(c,f,_)}),
              vec2(${Ho(m,f,_)}));`;let v=ae(e.session.backend.glContext.version),x=`
          ${d}
          float getValue(${c.map(e=>"int "+e)}) {
            ${y}
          }

          void main() {
            ${l} coords = getOutputCoords();
            int lastDim = coords.${c[s-1]};
            coords.${c[s-1]} = coords.${c[s-2]};
            coords.${c[s-2]} = lastDim;

            vec4 result = vec4(getValue(${u}), 0., 0., 0.);

            ${u[s-1]} = ${u[s-1]} + 1;
            if (${u[s-1]} < ${a[s-1]}) {
              result.g = getValue(${u});
            }

            ${u[s-2]} = ${u[s-2]} + 1;
            if (${u[s-2]} < ${a[s-2]}) {
              result.a = getValue(${u});
            }

            ${u[s-1]} = ${u[s-1]} - 1;
            if (${u[s-2]} < ${a[s-2]} &&
                ${u[s-1]} < ${a[s-1]}) {
              result.b = getValue(${u});
            }
            ${v.output} = result;
          }
        `;return{...t,output:{dims:a,type:n[0].type,textureType:2},shaderSource:x,hasMain:!0}},vd=(e,t,n)=>{let i=_v(t.length,n.cacheKey);return{...i,get:()=>Iv(e,i,t,n.axis)}},Ho=(e,t,n)=>{let i=e.indexOf(t);return e.map((e,t)=>t===i?`${e} - ${n}`:e).join()}}),_d,Sv,$v,Av,Id,Pv,Ov,Ev,Sd,Cv,$d=C(()=>{lt(),Oe(),Td(),_d=(e,t,n)=>(Cv(t),e.session.pack&&t[0].dims.length>1?[e.run(vd(e,t,n),t)]:[e.run(Av(e,t,n),t)]),Sv=(e,t)=>({name:"Concat",inputNames:Array.from({length:e},(e,t)=>`X${t}`),inputTypes:Array(e).fill(0),cacheHint:t}),$v=(e,t,n,i)=>{let o=n[0].dims.slice();if(i>=o.length||i<-1*o.length)throw Error("axis specified for concat doesn't match input dimensionality");i<0&&(i=o.length+i);let a=o.slice(0);for(let e=1;e<n.length;e++){let t=n[e].dims.slice();for(let e=0;e<o.length;e++)if(e===i)a[i]+=t[e];else if(o[e]!==t[e])throw Error("non concat dimensions must match")}let s=a.length,u=Array(n.length),l=0;for(let e=0;e<u.length;++e)l+=n[e].dims[i],u[e]=l;let d="";d=n.length<5?Id(u):Pv(u);let p=Ov(n.length,s),c=Ev(u),h=`
        ${p}
        ${c}
        ${d}
        float process(int indices[${s}]) {
          int textureIndex = getTextureWhereDataResides (indices[${i}]);

          if(textureIndex != 0) {
            indices[${i}] = indices[${i}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return{...t,output:{dims:a,type:n[0].type,textureType:0},shaderSource:h}},Av=(e,t,n)=>{let i=Sv(t.length,n.cacheKey);return{...i,get:()=>$v(e,i,t,n.axis)}},Id=e=>`int getTextureWhereDataResides(int index) {
      ${e.map((e,t)=>`if(index<${e}) {return ${t};}
`).join("")}
    }`,Pv=e=>Id(e),Ov=(e,t)=>{let n=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${t}]) {`];for(let t=0;t<e;++t)0===t?n.push(`	if (textureIndex == ${t}) { return _X${t}(indices); }`):t===e-1?n.push(`	else { return _X${t}(indices); }`):n.push(`	else if (textureIndex == ${t}) { return _X${t}(indices); }`);return n.push("	}"),n.join(`
`)},Ev=e=>{let t=["int getSizeInConcatAxisValueFromIndex(int index) {"];for(let n=0;n<e.length;++n)0===n?t.push(`	if (index == ${n}) { return ${e[n]}; }`):n===e.length-1?t.push(`	else { return ${e[n]}; }`):t.push(`	else if (index == ${n}) { return ${e[n]}; }`);return t.push("	}"),t.join(`
`)},Sd=e=>xe({axis:e.attributes.getInt("axis")}),Cv=e=>{if(!e||e.length<1)throw Error("too few inputs");let t=e[0].type,n=e[0].dims.length;if("string"===t)throw Error("string tensor is not supported yet");for(let i of e){if(i.type!==t)throw Error("input tensors should be one type");if(i.dims.length!==n)throw Error("input tensors should have the same shape")}}});function kv(){return Nt("abs")}function Dv(){return Nt("acos")}function Bv(){return Nt("asin")}function Lv(){return Nt("atan")}function Rv(){return Nt("ceil")}function zv(){return Nt("cos")}function Nv(e){let t="elu";return{body:`
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,name:t,type:0}}function Mv(){return Nt("exp")}function Fv(){return Nt("floor")}function os(e,t){let n="clip";return{body:`
  const float min = float(${e});
  const float max = float(${t});

  float ${n}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${n}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:n,type:0}}function Vv(){let e="indentity";return{body:`
  float ${e}_(float a) {
    return a;
  }
  vec4 ${e}_(vec4 v) {
    return v;
  }
  `,name:e,type:0}}function Gv(e){let t="leakyRelu";return{body:`
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,name:t,type:0}}function Uv(){return Nt("log")}function Wv(){let e="neg";return{body:`
  float ${e}_(float a) {
    return -a;
  }
  vec4 ${e}_(vec4 v) {
    return -v;
  }
  `,name:e,type:0}}function Hv(){let e="not";return{body:`
  float ${e}_(float a) {
    return float( ! bool(a) );
  }
  bool ${e}_(bool a) {
    return !a;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));
  }
  bvec4 ${e}_(bvec4 v) {
    return bvec4(!v.x, !v.y, !v.z, !v.w);
  }
  `,name:e,type:0}}function qv(){return Nt("sin")}function is(){let e="relu";return{body:`
  float ${e}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${e}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,name:e,type:0}}function as(){let e="sigmoid";return{body:`
  float ${e}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${e}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,name:e,type:0}}function jv(){return Nt("sqrt")}function Kv(){return Nt("tan")}function Xv(){let e="tanh";return{body:`
  float ${e}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${e}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `,name:e,type:0}}function Nt(e){return{body:`
  float ${e}_(float a) {
    return ${e}(a);
  }
  vec4 ${e}_(vec4 v) {
    return ${e}(v);
  }
  `,name:e,type:0}}var Zv,Qe,Ad,Pd,Od,Ed,ss,Cd,kd,Yv,Dd,Bd,Ld,Rd,zd,Nd,us,Md,Fd,Vd,Gd,Ud,Wd,Hd,qd,jd,Kd,Xd,ls=C(()=>{lt(),ze(),mr(),qe(),Oe(),Zv=(e,t,n,i)=>{let o=e.session.pack?2:0,a=ae(e.session.backend.glContext.version);return{...t,output:{dims:n.dims,type:n.type,textureType:o},shaderSource:`
     ${i.body}
     void main() {
       vec4 v = ${a.texture2D}(A, TexCoords);
       v = ${i.name}_(v);
       ${a.output} = v;
     }
     `,hasMain:!0}},Qe=(e,t,n,i)=>{let o=e.session.pack?2:0,a={name:n.name,inputTypes:[o],inputNames:["A"],cacheHint:i};return{...a,get:()=>Zv(e,a,t,n)}},Ad=(e,t)=>[e.run(Qe(e,t[0],kv()),t)],Pd=(e,t)=>[e.run(Qe(e,t[0],Dv()),t)],Od=(e,t)=>[e.run(Qe(e,t[0],Bv()),t)],Ed=(e,t)=>[e.run(Qe(e,t[0],Lv()),t)],ss=(e,t,n)=>[e.run(Qe(e,t[0],os(n.min,n.max),n.cacheKey),t)],Cd=e=>xe({min:e.attributes.getFloat("min",Gr),max:e.attributes.getFloat("max",Ur)}),kd=(e,t)=>{let n=Yv(e,t);return ss(e,[t[0]],n)},Yv=(e,t)=>{if(t.length>=3&&(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)))throw Error("dynamic clip attributes are not allowed");let n=t.length>=3?t[1].numberData[0]:Gr,i=t.length>=3?t[2].numberData[0]:Ur;return xe({min:n,max:i})},Dd=(e,t)=>[e.run(Qe(e,t[0],Rv()),t)],Bd=(e,t)=>[e.run(Qe(e,t[0],zv()),t)],Ld=(e,t,n)=>[e.run(Qe(e,t[0],Nv(n.alpha),n.cacheKey),t)],Rd=e=>xe({alpha:e.attributes.getFloat("alpha",1)}),zd=(e,t)=>[e.run(Qe(e,t[0],Mv()),t)],Nd=(e,t)=>[e.run(Qe(e,t[0],Fv()),t)],us=(e,t)=>[e.run(Qe(e,t[0],Vv()),t)],Md=(e,t,n)=>[e.run(Qe(e,t[0],Gv(n.alpha),n.cacheKey),t)],Fd=e=>xe({alpha:e.attributes.getFloat("alpha",.01)}),Vd=(e,t)=>[e.run(Qe(e,t[0],Uv()),t)],Gd=(e,t)=>[e.run(Qe(e,t[0],Wv()),t)],Ud=(e,t)=>[e.run(Qe(e,t[0],Hv()),t)],Wd=(e,t)=>[e.run(Qe(e,t[0],is()),t)],Hd=(e,t)=>[e.run(Qe(e,t[0],as()),t)],qd=(e,t)=>[e.run(Qe(e,t[0],qv()),t)],jd=(e,t)=>[e.run(Qe(e,t[0],jv()),t)],Kd=(e,t)=>[e.run(Qe(e,t[0],Kv()),t)],Xd=(e,t)=>[e.run(Qe(e,t[0],Xv()),t)]});function rr(e){let t;switch(e.activation){case"Relu":t=is();break;case"Sigmoid":t=as();break;case"Clip":t=os(e.clipMin,e.clipMax);break;default:return{activationFunction:"",applyActivation:""}}let n=t.name;return{activationFunction:t.body,applyActivation:`value = ${n}_(value);`}}var yn,qr=C(()=>{ze(),ls(),yn=e=>{let t=e.getString("activation","");if("Clip"===t){let[n,i]=e.getFloats("activation_params",[Gr,Ur]);return{activation:t,clipMax:i,clipMin:n,activationCacheKey:`${t}:${n},${i}`}}return{activation:t,activationCacheKey:t}}}),Qv,eT,Zd,Yd=C(()=>{kt(),qe(),Oe(),qo(),qr(),Qv=(e,t)=>({name:"GroupedConv",inputNames:e?["X","W","Bias"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),eT=(e,t,n,i)=>{let o=t.length>2?"value += getBias(output_channel);":"",a=t[0].dims.slice(),s=t[1].dims.slice(),u=s[0]/i.group;Ne.verbose("GroupedConv",`autpPad:${i.autoPad}, dilations:${i.dilations}, group:${i.group}, kernelShape:${i.kernelShape}, pads:${i.pads}, strides:${i.strides}`);let l=xn(a,s,i.dilations,i.pads,i.strides),d=ae(e.session.backend.glContext.version),{activationFunction:p,applyActivation:c}=rr(i),h=`
  const ivec2 strides = ivec2(${i.strides[0]}, ${i.strides[1]});
  const ivec2 pads = ivec2(${i.pads[0]}, ${i.pads[1]});
  ${p}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${u};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${s[1]}; wInChannel++) {
      int input_channel = group_id * ${s[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${s[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${i.dilations[0]};

        if (xHeight < 0 || xHeight >= ${a[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${s[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${i.dilations[1]};
          if (xWidth < 0 || xWidth >= ${a[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${o}
    ${c}
    ${d.output} = vec4(value, .0, .0, .0);
  }
`;return{...n,output:{dims:l,type:t[0].type,textureType:0},shaderSource:h,hasMain:!0}},Zd=(e,t,n)=>{let i=Qv(t.length>2,n.cacheKey);return{...i,get:()=>eT(e,t,i,n)}}}),tT,rT,Jd,Qd=C(()=>{qe(),Oe(),Hr(),tT=e=>({name:"Im2Col (packed)",inputNames:["A"],inputTypes:[2],cacheHint:e}),rT=(e,t,n,i,o,a)=>{let s=n.dims,u=i.dims,l=2,d=3,p=o.length,c=[u[1]*u[2]*u[3],o[2]*o[3]],h=u[2]*u[3],f=tr(),m=ae(e.session.backend.glContext.version),g="";for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)g+=`
            blockIndex = rc.x + ${t};
            pos = rc.y + ${e};

            if(blockIndex < ${c[1]} && pos < ${c[0]}) {
              offsetY = int(blockIndex / (${o[p-1]})) * ${a.strides[0]} -
                ${a.pads[0]};
              d0 = offsetY + ${a.dilations[0]} * (imod(pos, ${h}) / ${u[2]});

              if(d0 < ${s[l]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${o[p-1]}) * ${a.strides[1]} -
                  ${a.pads[1]};
                d1 = offsetX + ${a.dilations[1]} * imod(imod(pos, ${h}), ${u[2]});

                if(d1 < ${s[d]} && d1 >= 0) {

                  ch = int(float(pos)/ ${h}.);
                    innerDims = vec2(d0, d1);
                    result[${2*e+t}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;let y=`
      ${f}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${g}
          ${m.output} = result;
      }
            `;return{...t,output:{dims:c,type:n.type,textureType:2},shaderSource:y,hasMain:!0}},Jd=(e,t,n,i,o)=>{let a=tT(o.cacheKey);return{...a,get:()=>rT(e,a,t,n,i,o)}}});function oT(e,t,n){let i=t[0].dims,o=t[1].dims,a=gt.calcShape(i,o,!0);if(!a)throw Error("Can't use matmul on the given tensors");let s=bt(a.length),u=qt(),{activationFunction:l,applyActivation:d}=rr(n),p=t.length>2,c=p?"value += getBiasForMatmul();":"",h=p?`${fs(s,u,t[2].dims,a,!1)}`:"",f=a.length,m=i.length,g=o.length,y=i[i.length-1],b=`
    ${l}
    ${h}
    float process(int indices[${f}]) {
        int a[${m}];
        int b[${g}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${y}; ++k) {
            a[${m-1}] = k;
            b[${g-2}] = k;
            value += _A(a) * _B(b);
        }
        ${c}
        ${d}
        return value;
    }`;return{...e,output:{dims:a,type:t[0].type,textureType:0},shaderSource:b}}function cs(e,t){let n=nT(e.length>2,t.activationCacheKey);return{...n,get:()=>oT(n,e,t)}}function fs(e,t,n,i,o){let a="",s=n.length,u=i.length,l=u-s;a=u<2&&s>0?"coords":n.map((e,n)=>`coords.${t[n+l]}`).join(", ");let d=gt.getBroadcastDims(n,i).map(e=>`coords.${t[e+l]} = 0;`).join(`
`),p=1===Q.size(n),c="vec4(outputValue.xx, outputValue.yy)";return p&&(c="vec4(outputValue.x)"),o?`
vec4 getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${d}
  vec4 outputValue = getBias(${a});
  return ${c};
}`:`
float getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${d}
  return getBias(coords.x);
}`}var ep,tp,nT,iT,jo=C(()=>{ze(),Oe(),er(),qr(),ds(),ep=(e,t,n)=>(iT(t),e.session.pack?[e.run(Ko(e,t,n),t)]:[e.run(cs(t,n),t)]),tp=e=>yn(e.attributes),nT=(e,t)=>({name:"MatMul",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),iT=e=>{if(!e||2!==e.length)throw Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error("shared dimension does not match.");if("float32"!==e[0].type&&"float64"!==e[0].type||"float32"!==e[1].type&&"float64"!==e[1].type)throw Error("inputs should be float type");if(e[0].type!==e[1].type)throw Error("inputs types should match")}});function uT(e,t,n,i){let o=[],a=[],s=n[0].dims,u=n[1].dims,l=s.length,d=u.length,p=i.length,c=p-l,h=p-d;(o=s.map((e,n)=>`coords.${t[n+c]}`))[l-1]="i*2",o.join(", "),(a=u.map((e,n)=>`coords.${t[n+h]}`))[d-2]="i*2",a.join(", ");let f=gt.getBroadcastDims(s,i),m=gt.getBroadcastDims(u,i),g=f.map(e=>`coords.${t[e+c]} = 0;`).join(`
`),y=m.map(e=>`coords.${t[e+h]} = 0;`).join(`
`),b=`int lastDim = coords.${t[p-1]};
  coords.${t[p-1]} = coords.${t[p-2]};
  coords.${t[p-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${b}
  ${g}
  vec4 outputValue = getA(${o});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${b}
  ${y}
  vec4 outputValue = getB(${a});
  return outputValue;
}`}function lT(e,t){let n="";for(let i=0;i<t-2;i++)n+=`rc.${e[i]}, `;return n+`rc.${e[t-2]}, i*2`}function cT(e,t){let n="";for(let i=0;i<t-2;i++)n+=`rc.${e[i]}, `;return n+`i*2, rc.${e[t-1]}`}var aT,sT,Ko,ds=C(()=>{ze(),qe(),Oe(),er(),qr(),jo(),aT=(e,t)=>({name:"MatMul (packed)",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[2,2,2]:[2,2],cacheHint:t}),sT=(e,t,n,i)=>{let o=n.length>2,a=o?"value += getBiasForMatmul();":"",s=n[0].dims,u=n[1].dims,l=gt.calcShape(s,u,!0),d=!Q.areEqual(n[0].dims,n[1].dims);if(!l)throw Error("Can't use matmul on the given tensors");let p=Math.ceil(s[s.length-1]/2),c=s.length,h=u.length,f=ae(e.session.backend.glContext.version),m=bt(l.length),g=l.length,y=qt(),{activationFunction:b,applyActivation:_}=rr(i),v=o?`${fs(m,y,n[2].dims,l,!0)}`:"",x=d?`${uT(m,y,n,l)}`:"",w=d?"getAAtOutCoordsMatmul(i)":`getA(${lT(y,c)})`,$=d?"getBAtOutCoordsMatmul(i)":`getB(${cT(y,h)})`,T=d?"":`${m} rc =
          getOutputCoords(); int lastDim = rc.${y[g-1]}; rc.${y[g-1]} =
          rc.${y[g-2]}; rc.${y[g-2]} = lastDim;
      `,S=`
            ${x}
            ${v}
            ${b}
            void main() {
              ${T}

              vec4 value = vec4(0);
              for (int i = 0; i < ${p}; i++) {
                vec4 a = ${w};
                vec4 b = ${$};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${a}
              ${_}
              ${f.output} = value;
            }`;return{...t,output:{dims:l,type:n[0].type,textureType:2},shaderSource:S,hasMain:!0}},Ko=(e,t,n)=>{let i=aT(t.length>2,n.activationCacheKey);return{...i,get:()=>sT(e,i,t,n)}}}),rp,np=C(()=>{qo(),Qd(),ds(),rp=(e,t,n)=>{let i=t[0].dims,o=t[1].dims,a=xn(i,o,n.dilations,n.pads,n.strides),s=e.run(Jd(e,t[0],t[1],a,n),[t[0]]),u=e.reshapePacked(t[1],[o[0],o[1]*o[2]*o[3]]),l=3===t.length?[u,s,t[2]]:[u,s],d=e.run(Ko(e,l,n),l);return e.reshapePacked(d,a)}}),fT,dT,op,ps,ms=C(()=>{Oe(),fT=e=>({name:"Im2Col",inputNames:["X"],inputTypes:[0],cacheHint:e}),dT=(e,t,n,i,o,a)=>{let s=n.dims,u=i.dims,l=o.length,d=ps(s,u,o,4),p=`
        const int XC = ${s[1]};
        const int XH = ${s[2]};
        const int XW = ${s[3]};
        const int KH = ${a.kernelShape[0]};
        const int KW = ${a.kernelShape[1]};
        const int dilationH = ${a.dilations[0]};
        const int dilationW = ${a.dilations[1]};
        const int strideH = ${a.strides[0]};
        const int strideW = ${a.strides[1]};
        const int padH = ${a.pads[0]};
        const int padW = ${a.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${l}]) {
          int b  = indices[0]; // batch size
          int oh = indices[1] * strideH - padH; //output height
          int ow = indices[2] * strideW - padW; //output width
          int p = indices[3] * outputChannels; //patch
          vec4 value = vec4(0.0);
          for(int i=0; i < outputChannels; ++i) {
            if(p < XCKHKW) {
              int patchC = p / KHKW;
              int patchH = (p - patchC*KHKW) / KW;
              int patchW = (p - patchC*KHKW) - patchH * KW;
              int xh2 = oh + patchH * dilationH;
              int xw2 = ow + patchW * dilationW;
              int x[${s.length}];
              x[0] = b;
              x[1] = patchC;
              x[2] = xh2;
              x[3] = xw2;
              if(xh2 >= 0 &&
                  xh2 < XH &&
                  xw2 >= 0 &&
                  xw2 < XW) {
                value[i] = _X(x);
              }
            }
            ++p;
          }
          return value;
        }
        `;return{...t,output:{dims:d,type:n.type,textureType:4},shaderSource:p}},op=(e,t,n,i,o)=>{let a=fT(o.cacheKey);return{...a,get:()=>dT(e,a,t,n,i,o)}},ps=(e,t,n,i=4)=>[n[0],n[2],n[3],Math.ceil(e[1]*t[2]*t[3]/i)]}),pT,mT,ip,ap=C(()=>{ze(),qe(),Oe(),qr(),ms(),pT=(e,t)=>({name:"ConvDotProduct",inputNames:e?["Im2Col","K","B"]:["Im2Col","K"],inputTypes:e?[0,4,0]:[0,4],cacheKey:t.activationCacheKey}),mT=(e,t,n,i,o)=>{let a=n[0].dims,s=n[1].dims,u=[s[0],Math.ceil(a[1]*s[2]*s[3]/4)],l=ps(a,s,i),[d,p]=e.calculateTextureWidthAndHeight(u,4),c=Q.computeStrides(l),[h,f]=e.calculateTextureWidthAndHeight(l,4),m=i.length,g=n.length<3?"0.0":"_B(b)",y=Math.ceil(a[1]*s[2]*s[3]/4),{activationFunction:b,applyActivation:_}=rr(o),v=ae(e.session.backend.glContext.version),x=`
${b}
float process(int indices[${m}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${c[0]} + im2col[1] * ${c[1]} + im2col[2] * ${c[2]};
  int kernelOffset = indices[1] * ${u[1]};
  float value = ${g};
  for (int i = 0; i < ${y}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${h}, ${f});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${d}, ${p});
    value += dot(${v.texture2D}(Im2Col, im2colCoords), ${v.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${_}
  return value;
}`;return{...t,output:{dims:i,type:n[0].type,textureType:0},shaderSource:x}},ip=(e,t,n,i)=>{let o=pT(t.length>2,i);return{...o,get:()=>mT(e,o,t,n,i)}}}),xn,hs,hT,gT,bT,yT,gs,xT,qo=C(()=>{lt(),ze(),Yd(),np(),ap(),qr(),ms(),jo(),xn=(e,t,n,i,o)=>{let a=e[0],s=e.slice(2),u=s.length,l=t[0],d=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1));return[a,l].concat(...s.map((e,t)=>e+i[t]+i[t+u]).map((e,t)=>Math.floor((e-d[t]+o[t])/o[t])))},hs=(e,t,n)=>(xT(t,n),hT(e,t,n)),hT=(e,t,n)=>{let i=yT(n,t),o=e.session.pack,a=1===i.kernelShape[0]&&1===i.kernelShape[1];return i.group>1?[e.run(Zd(e,t,i),t)]:a&&o?[gT(e,t,i)]:o&&4===t[0].dims.length&&1===t[0].dims[0]&&!a?[rp(e,t,i)]:[bT(e,t,i)]},gT=(e,t,n)=>{let i=t[0].dims,o=t[1].dims,a=xn(i,o,n.dilations,n.pads,n.strides),s=e.reshapeUnpacked(t[0],[i[1],i[2]*i[3]]),u=e.reshapeUnpacked(t[1],[o[0],o[1]]),l=t.length>2?[u,s,t[2]]:[u,s],d=e.run(cs(l,n),l);return e.reshapeUnpacked(d,a)},bT=(e,t,n)=>{let i=t[0].dims,o=t[1].dims,a=xn(i,o,n.dilations,n.pads,n.strides),s=e.run(op(e,t[0],t[1],a,n),[t[0]]),u=3===t.length?[s,t[1],t[2]]:[s,t[1]];return e.run(ip(e,t,a,n),u)},yT=(e,t)=>{let n=e.kernelShape.slice();if(0===e.kernelShape.length)for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e]);let i=e.pads.slice();Vr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,i,e.autoPad);let o=Object.assign({},e);return Object.assign(o,{kernelShape:n,pads:i,cacheKey:e.cacheKey}),o},gs=e=>{let t=e.attributes,n=yn(t),i=t.getString("auto_pad","NOTSET"),o=t.getInts("dilations",[1,1]),a=t.getInt("group",1),s=t.getInts("kernel_shape",[]),u=t.getInts("pads",[0,0,0,0]),l=t.getInts("strides",[1,1]);return xe({autoPad:i,dilations:o,group:a,kernelShape:s,pads:u,strides:l,...n})},xT=(e,t)=>{if(!e||2!==e.length&&3!==e.length)throw Error("Conv requires 2 or 3 inputs");if(4!==e[0].dims.length||4!==e[1].dims.length)throw Error("currently only support 2-dimensional conv");if(e[0].dims[1]!==e[1].dims[1]*t.group)throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(3===e.length&&(1!==e[2].dims.length||e[1].dims[0]!==e[2].dims[0]))throw Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==2*n)throw Error(`pads should be ${2*n}D`);if(0!==t.kernelShape.length&&t.kernelShape.length!==e[1].dims.length-2)throw Error("invalid kernel shape");if("float32"!==e[0].type||"float32"!==e[1].type)throw Error("Conv input(X,W) should be float tensor");if(3===e.length&&"float32"!==e[2].type)throw Error("Conv input(bias) should be float tensor")}}),wT,vT,TT,sp,_T,IT,ST,$T,AT,PT,up,OT,lp=C(()=>{lt(),qe(),Oe(),qr(),wT=(e,t,n,i,o,a)=>(e-1)*t+n+(i-1)*o+1-a,vT=(e,t,n,i,o)=>{let a=Math.floor(e/2);"SAME_UPPER"===t?(n[i]=a,n[o]=e-a):"SAME_LOWER"===t&&(n[i]=e-a,n[o]=a)},TT=(e,t,n,i,o,a,s,u)=>{let l=e.length-2,d=0===u.length;for(let p=0;p<l;++p){let c=d?e[p+2]*a[p]:u[p];vT(wT(e[p+2],a[p],o[p],t[p],n[p],c),i,o,p,p+l),d&&u.push(a[p]*(e[p+2]-1)+s[p]+(t[p]-1)*n[p]+1-o[p]-o[p+l])}},sp=(e,t,n)=>(OT(t,n),_T(e,t,n)),_T=(e,t,n)=>{let i=PT(n,t);return[AT(e,t,i)]},IT=(e,t)=>({name:"ConvTranspose",inputNames:e?["X","W","B"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),ST=(e,t,n,i)=>{let o=t.length>2?"getB(output_channel)":"0.0",a=t[0].dims,s=t[1].dims,u=s[1],l=s[0]/i.group,d=[t[0].dims[0],t[1].dims[1]*i.group,...i.outputShape],p=ae(e.session.backend.glContext.version),{activationFunction:c,applyActivation:h}=rr(i),f=`
  const ivec2 strides = ivec2(${i.strides[0]}, ${i.strides[1]});
  const ivec2 pads = ivec2(${i.pads[0]}, ${i.pads[1]});
  ${c}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${u};
    int wOutChannel = output_channel - group_id * ${u};

    float value = ${o};
    for (int inChannelOffset = 0; inChannelOffset < ${l}; inChannelOffset++) {
      int input_channel = group_id * ${l} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${s[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${s[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${i.dilations[0]}, wHOff * ${i.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${a[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${a[3]}
          ) {
            float xVal = getX(batch, input_channel, wLocIn.y, wLocIn.x);
            float wVal = getW(input_channel, wOutChannel, wHOff, wWOff);
            value += xVal * wVal;
          }
        }
      }
    }
    ${h}
    ${p.output} = vec4(value, .0, .0, .0);
  }
`;return{...n,output:{dims:d,type:t[0].type,textureType:0},shaderSource:f,hasMain:!0}},$T=(e,t,n)=>{let i=IT(t.length>2,n.cacheKey);return{...i,get:()=>ST(e,t,i,n)}},AT=(e,t,n)=>e.run($T(e,t,n),t),PT=(e,t)=>{let n=e.kernelShape.slice();if(0===e.kernelShape.length)for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e]);let i=e.pads.slice(),o=e.outputShape.slice();TT(t[0].dims,n,e.dilations,e.autoPad,i,e.strides,e.outputPadding,o);let a=Object.assign({},e);return Object.assign(a,{kernelShape:n,pads:i,outputShape:o,cacheKey:e.cacheKey}),a},up=e=>{let t=e.attributes,n=yn(t),i=t.getString("auto_pad","NOTSET"),o=t.getInts("dilations",[1,1]),a=t.getInt("group",1),s=t.getInts("kernel_shape",[]),u=t.getInts("output_padding",[0,0]),l=t.getInts("output_shape",[]),d=t.getInts("pads",[0,0,0,0]),p=t.getInts("strides",[1,1]);return xe({autoPad:i,dilations:o,group:a,kernelShape:s,outputPadding:u,outputShape:l,pads:d,strides:p,...n})},OT=(e,t)=>{if(!e||2!==e.length&&3!==e.length)throw Error("Conv requires 2 or 3 inputs");if(4!==e[0].dims.length||4!==e[1].dims.length)throw Error("currently only support 2-dimensional conv");if(e[0].dims[1]!==e[1].dims[0])throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(3===e.length&&(1!==e[2].dims.length||e[2].dims[0]!==n))throw Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw Error(`strides should be ${i}D`);if(t.pads.length!==2*i)throw Error(`pads should be ${2*i}D`);if(t.outputPadding.length!==i)throw Error(`output_padding should be ${i}D`);if(0!==t.kernelShape.length&&t.kernelShape.length!==e[1].dims.length-2)throw Error("invalid kernel shape");if(0!==t.outputShape.length&&t.outputShape.length!==e[0].dims.length-2)throw Error("invalid output shape");if("float32"!==e[0].type||"float32"!==e[1].type)throw Error("ConvTranspose input(X,W) should be float tensor");if(3===e.length&&"float32"!==e[2].type)throw Error("ConvTranspose input(bias) should be float tensor")}}),cp,jr,fp,ET,dp,CT,kT,DT,Xo=C(()=>{lt(),ze(),Oe(),cp={name:"Transpose",inputNames:["A"],inputTypes:[0]},jr=(e,t,n)=>(DT(t),[e.run({...cp,cacheHint:n.cacheKey,get:()=>ET(e,t[0],n.perm)},t)]),fp=e=>xe({perm:e.attributes.getInts("perm",[])}),ET=(e,t,n)=>{let i=t.dims;n=dp(i,n);let o=CT(i,n),a=i.length,s=`
      ${kT("perm",n,a)}
      float process(int indices[${a}]) {
        int a[${a}];
        perm(a, indices);
        return _A(a);
      }`;return{...cp,output:{dims:o,type:t.type,textureType:0},shaderSource:s}},dp=(e,t)=>(t&&t.length!==e.length&&(t=[...e.keys()].reverse()),t),CT=(e,t)=>(t=dp(e,t),Q.sortBasedOnPerm(e,t)),kT=(e,t,n)=>{let i=[];i.push(`void ${e}(out int a[${n}], int src[${n}]) {`);for(let e=0;e<n;++e)i.push(`	a[${t[e]}]=src[${e}];`);return i.push("	}"),i.join(`
`)},DT=e=>{if(!e||1!==e.length)throw Error("Transpose requires 1 input.");if("float32"!==e[0].type&&"float64"!==e[0].type)throw Error("input should be float tensor")}}),pp,mp,BT,hp=C(()=>{Xo(),pp=(e,t,n)=>{BT(t);let i=n.blocksize,o=i*i,a="DCR"===n.mode?[0,3,4,1,5,2]:[0,1,4,2,5,3],s="DCR"===n.mode?[t[0].dims[0],i,i,t[0].dims[1]/o,t[0].dims[2],t[0].dims[3]]:[t[0].dims[0],t[0].dims[1]/o,i,i,t[0].dims[2],t[0].dims[3]],u=e.reshapeUnpacked(t[0],s),l={perm:a,cacheKey:`${a}`},[d]=jr(e,[u],l),p=[t[0].dims[0],t[0].dims[1]/o,t[0].dims[2]*i,t[0].dims[3]*i];return[e.reshapeUnpacked(d,p)]},mp=e=>{let t=e.attributes.getInt("blocksize");if(t<1)throw Error(`blocksize must be >= 1, but got : ${t} for DepthToSpace`);let n=e.attributes.getString("mode","DCR");if("DCR"!==n&&"CRD"!==n)throw Error(`unrecognized mode: ${n} for DepthToSpace`);return{mode:n,blocksize:t}},BT=e=>{if(1!==e.length)throw Error(`DepthToSpace expect 1 inputs, but got ${e.length}`);if("string"===e[0].type||4!==e[0].dims.length)throw TypeError("DepthToSpace input should be a 4-D numeric tensor")}}),gp,bp,LT,yp=C(()=>{ze(),gp=(e,t,n)=>{LT(t,n);let i=Q.flattenShape(t[0].dims,n);return[e.reshapeUnpacked(t[0],i)]},bp=e=>e.attributes.getInt("axis",1),LT=(e,t)=>{if(!e||1!==e.length)throw Error("Flatten requires 1 input.");let n=e[0].dims.length;if(0===n)throw Error("scalar tensor is not supported.");if(t<-n||t>n)throw Error("Invalid axis");if("string"===e[0].type)throw Error("string tensor is not supported.")}}),$r,Vn=C(()=>{$r=["float32","float64","int32","int16","int8","uint16","uint32","uint8"]}),xp,wp,RT,zT,NT,MT,vp=C(()=>{lt(),Vn(),ze(),Oe(),xp=(e,t,n)=>(MT(t,n.axis),[e.run(NT(e,t,n),t)]),wp=e=>xe({axis:e.attributes.getInt("axis",0)}),RT={name:"Gather",inputNames:["A","B"],inputTypes:[0,0]},zT=(e,t,n,i)=>{let o=n[0].dims.slice(),a=n[1].dims.slice(),s=Array(o.length+a.length-1);i=Q.normalizeAxis(i,o.length);let u=[];for(let e=0;e<s.length;e++)e<i?(s[e]=o[e],u.push(`inputIdx[${e}] = outputIdx[${e}];`)):e<i+a.length?(s[e]=a[e-i],u.push(`indexDataIdx[${e-i}] = outputIdx[${e}];`)):(s[e]=o[e-a.length+1],u.push(`inputIdx[${e-a.length+1}] = outputIdx[${e}];`));let l=s.length||1,d=o.length,p=a.length||1,c=`
      float process(int outputIdx[${l}]) {
        int inputIdx[${d}];
        int indexDataIdx[${p}];
        indexDataIdx[0] = 0;
        ${u.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${i}] = idx < 0 ? idx + ${o[i]} : idx;
        return _A(inputIdx);
      }`;return{...t,output:{dims:s,type:n[0].type,textureType:0},shaderSource:c}},NT=(e,t,n)=>{let i={...RT,cacheHint:n.cacheKey};return{...i,get:()=>zT(e,i,t,n.axis)}},MT=(e,t)=>{if(!e||2!==e.length)throw Error("Gather requires 2 inputs.");let n=e[0].dims.length;if(n<1)throw Error("Invalid input shape.");if(t<-n||t>n-1)throw Error("Invalid axis.");if(-1===$r.indexOf(e[0].type)||"int32"!==e[1].type&&"int16"!==e[1].type)throw Error("Invaid input type.")}}),bs,Tp,_p,Ip,FT,VT,GT,Sp=C(()=>{lt(),ze(),Oe(),bs=(e,t,n)=>(GT(t,n),[e.run(FT(t,n),t)]),Tp=(e,t)=>{let n=0!==e.attributes.getInt("transA",0),i=0!==e.attributes.getInt("transB",0),o=e.attributes.getFloat("alpha",1),a=e.attributes.getFloat("beta",1);return xe({transA:n,transB:i,alpha:o,beta:a,isOptionalC:t})},_p=e=>Tp(e,!1),Ip=e=>Tp(e,!0),FT=(e,t)=>{let n={name:"Gemm",inputNames:3===e.length?["A","B","C"]:["A","B"],inputTypes:3===e.length?[0,0,0]:[0,0],key:t.cacheKey};return{...n,get:()=>VT(n,e,t)}},VT=(e,t,n)=>{let i=t[0].dims.slice(),o=t[1].dims.slice(),[a,s]=No.getShapeOfGemmResult(i,n.transA,o,n.transB,3===t.length?t[2].dims:void 0),u=[a,s];if(!u)throw Error("Can't use gemm on the given tensors");let l=i[i.length-1],d="";n.transA&&(l=i[0]),n.transA&&n.transB?d="value += _A_T(a) * _B_T(b);":n.transA&&!n.transB?d="value += _A_T(a) * _B(b);":!n.transA&&n.transB?d="value += _A(a) * _B_T(b);":n.transA||n.transB||(d="value += _A(a) * _B(b);");let p=u.length,c=3===t.length?`int c[${t[2].dims.length}];`:"",h=3===t.length?"bcastIndices_C(indices, c);":"",f=3===t.length?"value += beta * _C(c);":"",m=`
      float process(int indices[${p}]) {
          int a[${p}];
          int b[${p}];
          ${c}

          copyVec(indices, a);
          copyVec(indices, b);
          ${h}

          float value = 0.0;
          for (int k=0; k<${l}; ++k) {
              a[${p-1}] = k;
              b[${p-2}] = k;
              ${d}
          }

          value = value * alpha;
          ${f}
          return value;
      }`;return{...e,output:{dims:u,type:t[0].type,textureType:0},variables:[{name:"alpha",type:"float",data:n.alpha},{name:"beta",type:"float",data:n.beta}],shaderSource:m}},GT=(e,t)=>{if(!e)throw Error("Input is missing");if(t.isOptionalC&&(e.length<2||e.length>3))throw Error("Invaid input shape.");if(!t.isOptionalC&&3!==e.length)throw Error("Gemm requires 3 inputs");if(3===e.length&&1!==e[2].dims.length&&2!==e[2].dims.length)throw Error("Invalid input shape of C");if("float32"!==e[0].type&&"float64"!==e[0].type||"float32"!==e[1].type&&"float64"!==e[1].type||3===e.length&&"float32"!==e[2].type&&"float64"!==e[2].type)throw Error("Invalid input type.");if(e[0].type!==e[1].type||3===e.length&&e[0].type!==e[2].type)throw Error("Input types are mismatched")}}),$p,Ap,UT,WT,HT,qT,jT,Pp=C(()=>{lt(),Oe(),$p=(e,t,n)=>(jT(t),[e.run(HT(e,t,n),t)]),Ap=e=>{let t=e.attributes.getFloat("scale"),n=e.attributes.getFloats("bias");return xe({scale:t,bias:n})},UT={name:"ImageScaler",inputNames:["X"],inputTypes:[0]},WT=(e,t,n,i)=>{let o=n[0].dims.slice(),a=o.length,s=`
      ${qT(i.bias.length)}
      float process(int indices[${a}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return{...t,output:{dims:o,type:n[0].type,textureType:0},variables:[{name:"bias",type:"float",arrayLength:i.bias.length,data:i.bias},{name:"scale",type:"float",data:i.scale}],shaderSource:s}},HT=(e,t,n)=>{let i={...UT,cacheHint:n.cacheKey};return{...i,get:()=>WT(e,i,t,n)}},qT=e=>{let t=[`float getBias(float bias[${e}], int channel) {`];for(let n=0;n<e;++n)0===n?t.push(`	if (channel == ${n}) { return bias[${n}]; }`):n===e-1?t.push(`	else { return bias[${n}]; }`):t.push(`	else if (channel == ${n}) { return bias[${n}]; }`);return t.push("	}"),t.join(`
`)},jT=e=>{if(!e||1!==e.length)throw Error("ImageScaler requires 1 input.");if(4!==e[0].dims.length)throw Error("Invalid input shape.");if("float32"!==e[0].type&&"float64"!==e[0].type)throw Error("Invalid input type.")}}),Ep,Cp,Op,KT,XT,ZT,YT,JT,QT,kp=C(()=>{qe(),Oe(),Ep=(e,t,n)=>{QT(t);let i=e.run(XT(t[0]),t);return[e.run(JT(e,t[0],n,i.dims),[t[0],i,t[1],t[2]])]},Cp=e=>e.attributes.getFloat("epsilon",1e-5),Op={name:"InstanceNormalization_MeanAndVariance",inputNames:["X"],inputTypes:[0]},KT=(e,t)=>{let n=t.dims.slice(),i=n[1],o=n[2]*n[3],a=[n[0],i],s=`
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${n[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${o});
        temp = 0.0;
        for(int a2=0; a2<${n[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${o});

        return v;
      }`;return{...e,output:{dims:a,type:t.type,textureType:4},shaderSource:s}},XT=e=>({...Op,get:()=>KT(Op,e)}),ZT={name:"InstanceNormalization_ComputeOutput",inputNames:["X","MeanAndVariance","Scale","B"],inputTypes:[0,4,0,0]},YT=(e,t,n,i,o)=>{let a=ae(e.session.backend.glContext.version),[s,u]=e.calculateTextureWidthAndHeight(o,4),[l,d]=[s/4,u],p=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${l}, ${d});
        return ${a.texture2D}(MeanAndVariance, coords);
      }

      float process(int[4] indices) {
        int mv[2];
        mv[0] = indices[0];
        mv[1] = indices[1];
        vec4 mean_and_variance = get_MeanAndVariance(mv);
        float mean = mean_and_variance.r;
        float variance = mean_and_variance.g;

        int sb[1];
        sb[0] = indices[1];
        float scale = _Scale(sb);
        float b = _B(sb);

        return scale * (_X(indices) - mean) / sqrt(variance + epsilon) + b;
      }`;return{...t,output:{dims:n.dims,type:n.type,textureType:0},variables:[{name:"epsilon",type:"float",data:i}],shaderSource:p}},JT=(e,t,n,i)=>{let o={...ZT,cacheHint:`${n}`};return{...o,get:()=>YT(e,o,t,n,i)}},QT=e=>{if(!e||3!==e.length)throw Error("InstanceNormalization requires 3 inputs.");let t=e[0],n=e[1],i=e[2];if(t.dims.length<3||1!==n.dims.length||1!==i.dims.length)throw Error("Invalid input shape.");if(n.dims[0]!==t.dims[1]||i.dims[0]!==t.dims[1])throw Error("Input shapes are mismatched.");if("float32"!==t.type&&"float64"!==t.type||"float32"!==n.type&&"float64"!==n.type||"float32"!==i.type&&"float64"!==i.type)throw Error("Invalid input type.");if(4!==e[0].dims.length)throw Error("Only support 4-D input shape.")}});function e_(e,t){let n=e[0].dims[1],i=e[0].dims.length,o=-Math.floor((t.size-1)/2),a=Math.ceil((t.size-1)/2),s=`float(${t.alpha}) / float(${t.size})`,u=`float(${t.bias})`,l=`float(${t.beta})`,d=`
    float process(int indices[${i}]) {
        int c = indices[1];
        float x = _X(indices);
        float square_sum = 0.0;

        for (int i = ${o}; i <= ${a}; i++) {
          int idx = c + i;
          if (c >= 0 && c < ${n}) {
            indices[1] = idx;
            float j = _X(indices);
            square_sum += j * j;
          }
        }
        return x / pow(${u} + ${s} * square_sum, ${l});
    }`;return{...Lp,cacheHint:t.cacheKey,output:{dims:e[0].dims,type:e[0].type,textureType:0},shaderSource:d}}function t_(e,t){return{...Lp,cacheHint:t.cacheKey,get:()=>e_(e,t)}}var Dp,Bp,Lp,r_,Rp=C(()=>{lt(),Oe(),Dp=(e,t,n)=>(r_(t),[e.run(t_(t,n),t)]),Bp=e=>{let t=e.attributes.getFloat("alpha",1e-4),n=e.attributes.getFloat("beta",.75),i=e.attributes.getFloat("bias",1),o=e.attributes.getInt("size");return xe({alpha:t,beta:n,bias:i,size:o})},Lp={name:"LRN",inputNames:["X"],inputTypes:[0]},r_=e=>{if(!e||1!==e.length)throw Error("LRN requires 1 input.");if(4!==e[0].dims.length)throw Error('currently only support LRN for input with "NCHW" format');if("float32"!==e[0].type)throw Error("input should be float type")}}),n_,ys,zp,Np,Mp,o_,i_,a_,s_,u_,l_,c_,f_,Fp=C(()=>{lt(),ze(),qe(),Oe(),n_={name:"Pad",inputNames:["A"],inputTypes:[0]},ys=(e,t,n)=>(a_(t),[e.run({...n_,cacheHint:n.cacheKey,get:()=>i_(e,t[0],n)},t)]),zp=e=>{let t=e.attributes.getString("mode","constant"),n=e.attributes.getFloat("value",0),i=e.attributes.getInts("pads");return xe({mode:t,value:n,pads:i})},Np=(e,t,n)=>{s_(t);let i=o_(e,t,n);return ys(e,[t[0]],i)},Mp=e=>e.attributes.getString("mode","constant"),o_=(e,t,n)=>{if(!e.session.isInitializer(t[1].dataId)||t.length>=3&&!e.session.isInitializer(t[2].dataId))throw Error("dynamic pad attributes are not allowed");let i=Array.from(t[1].integerData),o=t.length>=3?t[2].floatData[0]:0;return xe({mode:n,pads:i,value:o})},i_=(e,t,n)=>{let i=Q.padShape(t.dims.slice(),n.pads),o=i.length,a=`
      ${u_(e,t,n)}
      float process(int[${o}] indices) {
          return padA(indices);
      }`;return{name:"Pad",inputNames:["A"],inputTypes:[0],output:{dims:i,type:t.type,textureType:0},shaderSource:a}},a_=e=>{if(!e||1!==e.length)throw Error("Pad requires 1 input");if("float32"!==e[0].type&&"float64"!==e[0].type)throw Error("Invalid input type.")},s_=e=>{if(!e||2!==e.length&&3!==e.length)throw Error("Pad requires 2 or 3 inputs");if("int32"!==e[1].type||e.length>=3&&"string"===e[2].type)throw Error("Invalid input type.")},u_=(e,t,n)=>{let i=ae(e.session.backend.glContext.version),[o,a]=e.calculateTextureWidthAndHeight(t.dims,0),s=Q.computeStrides(t.dims);switch(n.mode){case"constant":return l_(i,t.dims,s,o,a,n.pads,n.value);case"reflect":return c_(i,t.dims,s,o,a,n.pads);case"edge":return f_(i,t.dims,s,o,a,n.pads);default:throw Error("Invalid mode")}},l_=(e,t,n,i,o,a,s)=>{let u=t.length,l="";for(let e=u-1;e>=0;--e)l+=`
        k = m[${e}] - ${a[e]};
        if (k < 0)  return constant;
        if (k >= ${t[e]}) return constant;
        offset += k * ${n[e]};
        `;return`
      float padA(int m[${u}]) {
        const float constant = float(${s});
        int offset = 0;
        int k = 0;
        ${l}
        vec2 coords = offsetToCoords(offset, ${i}, ${o});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},c_=(e,t,n,i,o,a)=>{let s=t.length,u="";for(let e=s-1;e>=0;--e)u+=`
        k = m[${e}] - ${a[e]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2*(t[e]-1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${t[e]}) { k = _2n_1 - k; }
        }
        offset += k * ${n[e]};
        `;return`
      float padA(int m[${s}]) {
        int offset = 0;
        int k = 0;
        ${u}
        vec2 coords = offsetToCoords(offset, ${i}, ${o});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},f_=(e,t,n,i,o,a)=>{let s=t.length,u="";for(let e=s-1;e>=0;--e)u+=`
        k = m[${e}] - ${a[e]};
        if (k < 0)  k = 0;
        if (k >= ${t[e]}) k = ${t[e]-1};
        offset += k * ${n[e]};
      `;return`
      float padA(int m[${s}]) {
        int offset = 0;
        int k = 0;
        ${u}
        vec2 coords = offsetToCoords(offset, ${i}, ${o});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `}}),Gp,Up,Wp,Hp,qp,jp,Kp,Xp,Zp,d_,Vp,Yp,Yo,Jp,Zo,p_,Qp=C(()=>{lt(),ze(),Oe(),Gp=(e,t,n)=>{Yo(t);let i={name:"AveragePool",inputNames:["X"],inputTypes:[0],cacheHint:n.cacheKey};return[e.run({...i,get:()=>Wp(t,i,!1,n)},t)]},Up=e=>{let t=e.attributes.getString("auto_pad","NOTSET"),n=e.attributes.getInt("ceil_mode",0),i=0!==e.attributes.getInt("count_include_pad",0),o=e.attributes.getInts("kernel_shape"),a=e.attributes.getInts("strides",[]),s=e.attributes.getInts("pads",[]);if(0!==n)throw Error("using ceil() in shape computation is not yet supported for AveragePool");return xe({autoPad:t,ceilMode:n,countIncludePad:i,kernelShape:o,strides:a,pads:s})},Wp=(e,t,n,i)=>{let[o,a]=Zp(e,i,n),s=Q.size(o.kernelShape),u="value += _X(x);",l="";o.countIncludePad?l+=`value /= float(${s});`:l+=`value /= float(${s} - pad);`;let d=`
        ${Jp(e[0].dims,o,u,l,"0.0")}
      `;return{...t,output:{dims:a,type:e[0].type,textureType:0},shaderSource:d}},Hp=(e,t,n)=>{Yo(t);let i={name:"GlobalAveragePool",inputNames:["X"],inputTypes:[0],cacheHint:`${n.countIncludePad}`};return[e.run({...i,get:()=>Wp(t,i,!0,n)},t)]},qp=e=>{let t=0!==e.attributes.getInt("count_include_pad",0);return xe({autoPad:"",ceilMode:0,countIncludePad:t,kernelShape:[],strides:[],pads:[]})},jp=(e,t,n)=>{Yo(t);let i={name:"MaxPool",inputNames:["X"],inputTypes:[0],cacheHint:n.cacheKey};return[e.run({...i,get:()=>Xp(t,i,!1,n)},t)]},Kp=e=>{let t=e.attributes.getString("auto_pad","NOTSET"),n=e.attributes.getInt("ceil_mode",0),i=e.attributes.getInts("kernel_shape"),o=e.attributes.getInts("strides",[]),a=e.attributes.getInts("pads",[]),s=e.attributes.getInt("storage_order",0),u=e.attributes.getInts("dilations",[]);if(0!==s)throw Error("column major storage order is not yet supported for MaxPool");if(0!==n)throw Error("using ceil() in shape computation is not yet supported for MaxPool");return xe({autoPad:t,ceilMode:n,countIncludePad:!1,kernelShape:i,strides:o,pads:a,storageOrder:s,dilations:u})},Xp=(e,t,n,i)=>{let[o,a]=Zp(e,i,n),s=`
      value = max(_X(x), value);
    `,u="",l=`
      ${Jp(e[0].dims,o,s,u,"-1e5")}
    `;return{...t,output:{dims:a,type:e[0].type,textureType:0},shaderSource:l}},Zp=(e,t,n)=>{let i=e[0].dims.slice(),o=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),s=t.strides.slice(),u=o?t.dilations.slice():[],l=t.pads.slice();Vr.adjustPoolAttributes(n,i,a,s,u,l);let d=Vr.computePoolOutputShape(n,i,s,u,a,l,t.autoPad),p=Object.assign({},t);return o?Object.assign(p,{kernelShape:a,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:s,pads:l,cacheKey:t.cacheKey}),[p,d]},d_={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:""},Vp={name:"GlobalMaxPool",inputNames:["X"],inputTypes:[0]},Yp=(e,t)=>(Yo(t),[e.run({...Vp,get:()=>Xp(t,Vp,!0,d_)},t)]),Yo=e=>{if(!e||1!==e.length)throw Error("Pool ops requires 1 input.");if("float32"!==e[0].type&&"float64"!==e[0].type)throw Error("Invalid input type.")},Jp=(e,t,n,i,o)=>{let a=e.length;if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],p=e[a-1],c="",h="",f="";if(c=l+d!==0?`
          for (int i = 0; i < ${s}; i++) {
            x[${a} - 1] = indices[${a} - 1] * ${u} - ${l} + i;
            if (x[${a} - 1] < 0 || x[${a} - 1] >= ${p}) {
              pad++;
              continue;
            }
            ${n}
          }`:`
          for (int i = 0; i < ${s}; i++) {
            x[${a} - 1] = indices[${a} - 1] * ${u} - ${l} + i;
            ${n}
          }`,2===t.kernelShape.length){let n=t.kernelShape[t.kernelShape.length-2],i=t.strides[t.strides.length-2],o=t.pads[t.pads.length/2-2],u=t.pads[t.pads.length-2],l=e[a-2];h=o+u!==0?`
            for (int j = 0; j < ${n}; j++) {
              x[${a} - 2] = indices[${a} - 2] * ${i} - ${o} + j;
              if (x[${a} - 2] < 0 || x[${a} - 2] >= ${l}) {
                pad+= ${s};
                continue;
              }
          `:`
            for (int j = 0; j < ${n}; j++) {
              x[${a} - 2] = indices[${a} - 2] * ${i} - ${o} + j;
            `,f=`
          }
        `}return`
        float process(int indices[${a}]) {
          int x[${a}];
          copyVec(indices, x);

          float value = ${o};
          int pad = 0;
          ${h}
          ${c}
          ${f}
          ${i}
          return value;
        }
      `}{let s=Q.size(t.kernelShape),u=Q.computeStrides(t.kernelShape),l=u.length,d=t.pads.length,p=p_(l),c=Zo(e,"inputDims"),h=Zo(t.pads,"pads"),f=Zo(u,"kernelStrides"),m=Zo(t.strides,"strides"),g=t.pads.reduce((e,t)=>e+t),y="";return y=g?`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${n}
          }`:`
          }
          ${n}
        `,`
        ${p}
        float process(int indices[${a}]) {
          int x[${a}];
          copyVec(indices, x);
          int offset[${l}];
          int pads[${d}];
          int inputDims[${a}];
          int kernelStrides[${l}];
          int strides[${l}];
          ${h}
          ${c}
          ${m}
          ${f}

          float value = ${o};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${s}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${a} - ${l}; j < ${a}; j++) {
              x[j] = indices[j] * strides[j - ${a} + ${l}]
                + offset[j - ${a} + ${l}] - pads[j - 2];
              ${y}
          }
          ${i}

          return value;
        }
      `}},Zo=(e,t)=>{let n="";for(let i=0;i<e.length;i++)n+=`
      ${t}[${i}] = ${e[i]};
    `;return n},p_=e=>`
  void offsetToIndices(int offset, int[${e}] strides, out int[${e}] indices) {
    if (${e} == 0) {
      return;
    }
    for (int i = 0; i < ${e} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${e} - 1] = offset;
  }`}),Kr,Ar,m_,h_,em,tm,rm,nm,om,im,am,sm=C(()=>{lt(),Vn(),ze(),Oe(),Kr=(e,t,n,i,o)=>{h_(t);let a={name:i,inputNames:["A"],inputTypes:[0]};return[e.run({...a,cacheHint:n.cacheKey,get:()=>m_(e,t,n,i,o,a)},t)]},Ar=e=>{let t=e.attributes.getInts("axes",[]),n=1===e.attributes.getInt("keepdims",1);return xe({axes:t,keepDims:n})},m_=(e,t,n,i,o,a)=>{let s=[],u=t[0].dims.length||1,l=[],d=Q.normalizeAxes(n.axes,t[0].dims.length),p=o(t,d),c=p[1];for(let e=0;e<t[0].dims.length;e++)d.indexOf(e)>=0||0===d.length?(n.keepDims&&s.push(1),c=`
          for(int j${e} = 0; j${e} < ${t[0].dims[e]}; j${e}++) {
            inputIdx[${e}] = j${e};
            ${c}
          }`):(l.push(`inputIdx[${e}] = outputIdx[${s.length}];`),s.push(t[0].dims[e]));let h=`
      float process(int outputIdx[${s.length||1}]) {
        float value;                 // final result
        int inputIdx[${u}];      // addressing input data
        ${l.join(`
`)}
        ${p[0]}       // init ops for reduce max/min
        ${c}
        ${p[2]}       // final computation for reduce mean
        return value;
      }`;return{...a,output:{dims:s,type:t[0].type,textureType:0},shaderSource:h}},h_=e=>{if(!e||1!==e.length)throw Error("Reduce op requires 1 input.");if(-1===$r.indexOf(e[0].type))throw Error("Invalid input type.")},em=(e,t,n)=>Kr(e,t,n,"ReduceSum",()=>["value = 0.0;","value += _A(inputIdx);",""]),tm=(e,t,n)=>Kr(e,t,n,"ReduceMean",(e,t)=>{let n=1;for(let i=0;i<e[0].dims.length;i++)(t.indexOf(i)>=0||0===t.length)&&(n*=e[0].dims[i]);return["value = 0.0;","value += _A(inputIdx);",`value /= ${n}.;`]}),rm=(e,t,n)=>Kr(e,t,n,"ReduceMax",(e,t)=>{let n=[];for(let i=0;i<e[0].dims.length;i++)(t.indexOf(i)>=0||0===t.length)&&n.push(`inputIdx[${i}] = 0;`);return[`${n.join(`
`)}
value = _A(inputIdx);`,"value = max(value, _A(inputIdx));",""]}),nm=(e,t,n)=>Kr(e,t,n,"ReduceMin",(e,t)=>{let n=[];for(let i=0;i<e[0].dims.length;i++)(t.indexOf(i)>=0||0===t.length)&&n.push(`inputIdx[${i}] = 0;`);return[`${n.join(`
`)}
value = _A(inputIdx);`,"value = min(value, _A(inputIdx));",""]}),om=(e,t,n)=>Kr(e,t,n,"ReduceProd",()=>["value = 1.0;","value *= _A(inputIdx);",""]),im=(e,t,n)=>Kr(e,t,n,"ReduceLogSum",()=>["value = 0.0;","value += _A(inputIdx);","value = log(value);"]),am=(e,t,n)=>Kr(e,t,n,"ReduceLogSumSquare",()=>["float t; value = 0.0;","t = _A(inputIdx); value += t * t;",""])}),um,lm=C(()=>{ze(),um=(e,t)=>{let n=Q.calculateReshapedDims(t[0].dims,t[1].integerData);return e.session.pack?[e.reshapePacked(t[0],n)]:[e.reshapeUnpacked(t[0],n)]}}),cm,xs,fm,dm,Gn,g_,ws,Jo,vs=C(()=>{lt(),qe(),Oe(),cm={name:"Upsample",inputNames:["X"],inputTypes:[0]},xs=(e,t,n)=>(ws(t,n),[e.run({...cm,cacheHint:n.cacheKey,get:()=>g_(e,t,n)},t)]),fm=e=>Gn(e,7),dm=e=>Gn(e,9),Gn=(e,t)=>{let n=t>=10,i=e.attributes.getString("mode","nearest");if("nearest"!==i&&"linear"!==i&&(t<11||"cubic"!==i))throw Error(`unrecognized mode: ${i}`);let o=[];t<9&&(o=e.attributes.getFloats("scales"),Jo(o,i,n));let a=e.attributes.getFloat("extrapolation_value",0),s=t>10?e.attributes.getString("coordinate_transformation_mode","half_pixel"):"asymmetric";if(-1===["asymmetric","pytorch_half_pixel","tf_half_pixel_for_nn","align_corners","tf_crop_and_resize","half_pixel"].indexOf(s))throw Error(`coordinate_transform_mode '${s}' is not supported`);let u="tf_crop_and_resize"===s,l=u,d="nearest"===i&&t>=11?e.attributes.getString("nearest_mode","round_prefer_floor"):"";if(-1===["round_prefer_floor","round_prefer_ceil","floor","ceil",""].indexOf(d))throw Error(`nearest_mode '${d}' is not supported`);let p=e.attributes.getFloat("cubic_coeff_a",-.75),c=0!==e.attributes.getInt("exclude_outside",0);if(c&&"cubic"!==i)throw Error("exclude_outside can be set to 1 only when mode is CUBIC.");let h=t<11||"nearest"===i&&"asymmetric"===s&&"floor"===d,f=0,m=0,g=0;return t>10?e.inputs.length>2?(f=1,m=2,g=3):(m=1,g=2):9===t&&(m=1),xe({opset:t,isResize:n,mode:i,scales:o,extrapolationValue:a,coordinateTransformMode:s,useExtrapolation:l,needRoiInput:u,nearestMode:d,cubicCoefficientA:p,excludeOutside:c,useNearest2xOptimization:h,roiInputIdx:f,scalesInputIdx:m,sizesInputIdx:g})},g_=(e,t,n)=>{let i=ae(e.session.backend.glContext.version),[o,a]=e.calculateTextureWidthAndHeight(t[0].dims,0),s=t[0].dims.map((e,t)=>Math.floor(e*n.scales[t])),[u,l]=e.calculateTextureWidthAndHeight(s,0),d=s.length,p=Array(d),c=Array(d),h=`
      int output_pitches[${d}];
      int input_pitches[${d}];
      `;for(let e=d-1;e>=0;e--)p[e]=e===d-1?1:p[e+1]*s[e+1],c[e]=e===d-1?1:c[e+1]*t[0].dims[e+1],h+=`
        output_pitches[${e}] = ${p[e]};
        input_pitches[${e}] = ${c[e]};
        `;let f=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${o}, ${a});
        float value = getColorAsFloat(${i.texture2D}(X, coords));
        return value;
      }
      `,m="nearest"===n.mode?`
    ${f}
    float process(int indices[${d}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${u}, ${l});

      ${h}

      int d, m;
      for (int dim = 0; dim < ${d}; ++dim) {
        d = output_index / output_pitches[dim];
        m = output_index - d * output_pitches[dim];
        output_index = m;

        if (scales[dim] != 1 && d > 0) {
          int d2 = d / scales[dim];
          m = d - d2 * scales[dim];
          d = d2;
        }
        input_index += input_pitches[dim] * d;
      }

      return getInputFloat(input_index);
    }`:4===d?`
    ${f}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${u}, ${l});

      ${h}

      int m;
      int index_of_dim0, index_of_dim1, index_of_dim2, index_of_dim3;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m / output_pitches[1];
      m = m - index_of_dim1 * output_pitches[1];
      index_of_dim2 = m / output_pitches[2];
      m = m - index_of_dim2 * output_pitches[2];
      index_of_dim3 = m;

      int index_of_input_dim2, index_of_input_dim3, x_offset, y_offset;
      index_of_input_dim2 = index_of_dim2 / scales[2];
      y_offset = index_of_dim2 - index_of_input_dim2 * scales[2];
      index_of_input_dim3 = index_of_dim3 / scales[3];
      x_offset = index_of_dim3 - index_of_input_dim3 * scales[3];

      input_index = index_of_dim0 * input_pitches[0] +
            index_of_dim1 * input_pitches[1] +
            index_of_input_dim2 * input_pitches[2] +
            index_of_input_dim3;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim2 = false;
      if (index_of_input_dim2 == (${t[0].dims[2]} - 1)) {
        // It's the end in dimension 2
        x01 = x00;
        end_of_dim2 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[2]);
      }

      if (index_of_input_dim3 == (input_pitches[2] - 1)) {
        // It's the end in dimension 3
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim2 ? x10 : getInputFloat(input_index + input_pitches[2] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[2]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[2]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[3]);
    }`:`
    ${f}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${u}, ${l});

      ${h}

      int m;
      int index_of_dim0, index_of_dim1;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m;

      int index_of_input_dim0, index_of_input_dim1, x_offset, y_offset;
      index_of_input_dim0 = index_of_dim0 / scales[0];
      y_offset = index_of_dim0 - index_of_input_dim0 * scales[0];
      index_of_input_dim1 = index_of_dim1 / scales[1];
      x_offset = index_of_dim1 - index_of_input_dim1 * scales[1];

      input_index = index_of_input_dim0 * input_pitches[0] + index_of_input_dim1;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim0 = false;
      if (index_of_input_dim0 == (${t[0].dims[0]} - 1)) {
        // It's the end in dimension 0
        x01 = x00;
        end_of_dim0 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[0]);
      }

      if (index_of_input_dim1 == (input_pitches[0] - 1)) {
        // It's the end in dimension 1
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim0 ? x10 : getInputFloat(input_index + input_pitches[0] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[0]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[0]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[1]);
    }`;return{...cm,output:{dims:s,type:t[0].type,textureType:0},shaderSource:m,variables:[{name:"scales",type:"int",arrayLength:n.scales.length,data:n.scales.map(e=>Math.ceil(e))}]}},ws=(e,t)=>{if(!e||t.opset<9&&1!==e.length||t.opset>=9&&t.opset<11&&2!==e.length||t.opset>=11&&e.length<2)throw Error("invalid inputs.");if(t.scales.length>0&&e[0].dims.length!==t.scales.length)throw Error("Invalid input shape.");if("string"===e[0].type)throw Error("Invalid input tensor types.")},Jo=(e,t,n)=>{if(n){for(let t of e)if(t<=0)throw Error("Scale value should be greater than 0.")}else for(let t of e)if(t<1)throw Error("Scale value should be greater than or equal to 1.");if(("linear"===t||"cubic"===t)&&2!==e.length&&(4!==e.length||1!==e[0]||1!==e[1]))throw Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${n?"Resize":"Upsample"} opeartor.`)}}),Ts,_s,pm,mm,b_,y_,x_,w_,hm=C(()=>{qe(),Oe(),er(),Hr(),vs(),Ts={name:"Resize",inputNames:["A"],inputTypes:[2]},_s=(e,t,n)=>(ws(t,n),[e.run({...Ts,cacheHint:n.cacheKey,get:()=>b_(e,t,n)},t)]),pm=e=>Gn(e,10),mm=e=>Gn(e,11),b_=(e,t,n)=>{let i=ae(e.session.backend.glContext.version),[o,a]=y_(t,n);if(o.every(e=>1===e)&&"tf_crop_and_resize"!==n.coordinateTransformMode)return{...Ts,output:{dims:a,type:t[0].type,textureType:2},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${i.texture2D}(X, TexCoords);
                    ${i.output} = v;
                }`};let s=a.length;if(s<2)throw Error(`output dimension should be at least 2, but got ${s}`);let u=a[s-2],l=a[s-1],d=t[0].dims;if(s!==d.length)throw Error(`output dimension should match input ${d.length}, but got ${s}`);let p=d[s-2],c=d[s-1],h=o[s-2],f=o[s-1],m="";if("linear"!==n.mode)throw Error(`resize (packed) does not support mode: '${n.mode}'`);switch(n.coordinateTransformMode){case"asymmetric":m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return vec4(coords) / scaleWHWH;
                    }
                `;break;case"half_pixel":m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;
                    }
                `;break;case"pytorch_half_pixel":m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${l}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${u}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${l}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${u}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case"align_corners":m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${l}.0 - 1.0, ${u}.0 - 1.0, ${l}.0 - 1.0,
                            ${u}.0 - 1.0);
                        vec4 original = vec4(${c}.0 - 1.0, ${p}.0 - 1.0, ${c}.0 - 1.0,
                            ${p}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw Error(`resize (packed) does not support coordinateTransformMode:                                 '${n.coordinateTransformMode}'`)}let g=bt(s),y=tr(),b=`
            const vec2 inputWH = vec2(${p}.0, ${c}.0);
            const vec4 scaleWHWH = vec4(float(${h}), float(${f}), float(${h}), float(${f}));
            ${y}
            ${m}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${g} rc = getOutputCoords();

                int batch = rc[0];
                int depth = rc[1];

                // retrieve the 4 coordinates that is used in the 4 packed output values.
                ivec4 coords = ivec4(rc.wz, rc.w + 1, rc.z + 1);

                // calculate the source index in fraction
                vec4 sourceFrac = getSourceFracIndex(coords);

                // get the lower and upper bound of the 4 values that will be packed into one texel.
                ivec4 x00 = ivec4(max(sourceFrac.xy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xy)));
                ivec4 x01 = ivec4(max(sourceFrac.xw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xw)));
                ivec4 x10 = ivec4(max(sourceFrac.zy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zy)));
                ivec4 x11 = ivec4(max(sourceFrac.zw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zw)));

                bool hasNextRow = rc.w < ${u-1};
                bool hasNextCol = rc.z < ${l-1};

                // pack x00, x01, x10, x11's top-left corner into one vec4 structure
                vec4 topLeft = vec4(
                    getAValue(batch, depth, x00.x, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.y) : 0.0);

                // pack x00, x01, x10, x11's top-right corner into one vec4 structure
                vec4 topRight = vec4(
                    getAValue(batch, depth, x00.x, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.w) : 0.0);

                // pack x00, x01, x10, x11's bottom-left corner into one vec4 structure
                vec4 bottomLeft = vec4(
                    getAValue(batch, depth, x00.z, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.y) : 0.0);

                // pack x00, x01, x10, x11's bottom-right corner into one vec4 structure
                vec4 bottomRight = vec4(
                    getAValue(batch, depth, x00.z, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.w) : 0.0);

                // calculate the interpolation fraction on u and v direction
                vec4 frac = vec4(sourceFrac) - floor(sourceFrac);
                vec4 clampFrac = clamp(frac, vec4(0.0), vec4(1.0));

                vec4 top = mix(topLeft, topRight, clampFrac.ywyw);
                vec4 bottom = mix(bottomLeft, bottomRight, clampFrac.ywyw);
                vec4 newValue = mix(top, bottom, clampFrac.xxzz);

                ${i.output} = vec4(newValue);
            }
        `;return{...Ts,output:{dims:a,type:t[0].type,textureType:2},hasMain:!0,shaderSource:b}},y_=(e,t)=>{let n=e[0].dims,i=t.scales,o;if(0===i.length){let a=e[t.scalesInputIdx];if(a&&0!==a.size){if(e[t.sizesInputIdx])throw Error("Only one of scales or sizes must be provided as input.");i=x_(a,t.mode,t.isResize)}else{let a=e[t.sizesInputIdx];if(!a||0===a.size)throw Error("Either scales or sizes MUST be provided as input.");o=Array.from(a.integerData),i=w_(o,n,t.mode,t.isResize)}}else if(e[t.sizesInputIdx])throw Error("Only one of scales or sizes must be provided as input.");let a=o||n.map((e,t)=>Math.floor(e*i[t]));return[i,a]},x_=(e,t,n)=>{let i=Array.from(e.floatData);return Jo(i,t,n),i},w_=(e,t,n,i)=>{let o=t.length,a=Array(o);for(let n=0,i=o;n<i;n++)if(0===t[n]){if(0!==e[n])throw Error("Input dim is zero but required output dim is non-zero.");a[n]=1}else a[n]=e[n]/t[n];return Jo(a,n,i),a}}),gm,v_,bm=C(()=>{Wr(),gm=(e,t)=>(v_(t),[new rt([t[0].dims.length],"int32",void 0,void 0,new Int32Array(t[0].dims))]),v_=e=>{if(!e||1!==e.length)throw Error("Shape requires 1 input.")}}),Is,ym,xm,wm,T_,vm,__,I_,Tm=C(()=>{lt(),Vn(),ze(),Oe(),Is={name:"Slice",inputNames:["A"],inputTypes:[0]},ym=(e,t,n)=>(T_(t),[e.run({...Is,cacheHint:n.cacheKey,get:()=>wm(e,t[0],n)},t)]),xm=e=>{let t=e.attributes.getInts("starts"),n=e.attributes.getInts("ends"),i=e.attributes.getInts("axes",[]);return xe({starts:t,ends:n,axes:i})},wm=(e,t,n)=>{let i=0===n.axes.length?t.dims.slice(0).map((e,t)=>t):n.axes,o=Q.normalizeAxes(i,t.dims.length),a=n.starts.map((e,n)=>e>t.dims[o[n]]-1?t.dims[o[n]]:Q.normalizeAxis(e,t.dims[o[n]])),s=n.ends.map((e,n)=>e>t.dims[o[n]]-1?t.dims[o[n]]:Q.normalizeAxis(e,t.dims[o[n]])),u=t.dims.slice(),l=[];for(let e=0;e<o.length;e++)u[o[e]]=s[e]-a[e],a[e]>0&&l.push(`outputIdx[${o[e]}] += ${a[e]};`);let d=`
      float process(int outputIdx[${u.length}]) {
        ${l.join(`
      `)}
        return _A(outputIdx);
      }`;return{...Is,output:{dims:u,type:t.type,textureType:0},shaderSource:d}},T_=e=>{if(!e||1!==e.length)throw Error("Slice requires 1 input.");if(-1===$r.indexOf(e[0].type))throw Error("Invalid input type.")},vm=(e,t)=>{I_(t);let n=__(e,t);return[e.run({...Is,cacheHint:n.cacheKey,get:()=>wm(e,t[0],n)},[t[0]])]},__=(e,t)=>{if(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)||t.length>=4&&!e.session.isInitializer(t[3].dataId)||t.length>=5&&!e.session.isInitializer(t[4].dataId))throw Error("dynamic slice attributes are not allowed");if(t.length>=5&&t[4].integerData.some(e=>1!==e))throw Error("currently non-1 steps is not supported for Slice");let n=Array.from(t[1].integerData),i=Array.from(t[2].integerData),o=t.length>=4?Array.from(t[3].integerData):[],a=`${o};${n};${i}`;return{starts:n,ends:i,axes:o,cacheKey:a}},I_=e=>{if(!e||e.length<3||e.length>5)throw Error("Invalid input number.");if("int32"!==e[1].type||1!==e[1].dims.length||"int32"!==e[2].type||1!==e[2].dims.length||e.length>=4&&("int32"!==e[3].type||1!==e[3].dims.length)||e.length>=5&&("int32"!==e[4].type||1!==e[4].dims.length))throw Error("Invalid input type.")}}),_m,Im,Sm,$m,Am,Pm,Om,Em,S_,$_,A_,Cm,km=C(()=>{lt(),ze(),qe(),Oe(),Xo(),_m={name:"SoftmaxComputeMax",inputNames:["A"],inputTypes:[0]},Im={name:"SoftmaxComputeScale",inputNames:["A","Max"],inputTypes:[0,0]},Sm={name:"SoftMax",inputNames:["A","Max","Norm"],inputTypes:[0,0,0]},$m=(e,t,n)=>{Cm(t);let i=t[0].dims.slice(),o=Q.normalizeAxis(n.axis,i.length),a=Q.sizeToDimension(i,o),s=Q.sizeFromDimension(i,o);return Em(e,t,n,a,s)},Am=e=>xe({axis:e.attributes.getInt("axis",1)}),Pm=e=>xe({axis:e.attributes.getInt("axis",-1)}),Om=(e,t,n)=>{Cm(t);let i=t[0].dims.slice(),o=Q.normalizeAxis(n.axis,i.length),a=i.length,s=o!==a-1,u=[],l=[],d=[],p;s&&((l=Array.from({length:a}).map((e,t)=>t))[o]=a-1,l[a-1]=o,l.map(e=>u.push(i[e])),p=xe({perm:l}),d=jr(e,t,p));let c=s?Q.sizeToDimension(u,a-1):Q.sizeToDimension(i,a-1),h=s?Q.sizeFromDimension(u,a-1):Q.sizeFromDimension(i,a-1),f=Em(e,s?d:t,n,c,h);return s?jr(e,f,p):f},Em=(e,t,n,i,o)=>{let a=S_(e,t[0],i,o,[i]),s=e.run({..._m,cacheHint:n.cacheKey,get:()=>a},t),u=$_(e,t[0],i,o,a.output.dims,[i]),l=e.run({...Im,cacheHint:n.cacheKey,get:()=>u},[t[0],s]),d=A_(e,t[0],i,o,a.output.dims,u.output.dims);return[e.run({...Sm,cacheHint:n.cacheKey,get:()=>d},[t[0],s,l])]},S_=(e,t,n,i,o)=>{let[a,s]=e.calculateTextureWidthAndHeight(t.dims,0),u=o.length;if(n<1||i<1)throw Error("Logical row count N and feature count D must be greater than or equal to 1");if(1!==o.length)throw Error("Dimensionality of the output should be 1");if(o[0]!==n)throw Error("Shape of the output should be equal to logical row count");let l=ae(e.session.backend.glContext.version),d=`
      float process(int[${u}] indices) {
        int logical_row_start_offset = indices[0] * ${i};

        float max = getColorAsFloat(${l.texture2D}(A, offsetToCoords(logical_row_start_offset, ${a},
        ${s} )));
        for(int i=1; i<${i}; ++i)
        {
          float current = getColorAsFloat(${l.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${a}, ${s})));
          if(current > max)
          max = current;
        }

        return max;
      }`;return{..._m,output:{dims:o,type:t.type,textureType:0},shaderSource:d}},$_=(e,t,n,i,o,a)=>{let[s,u]=e.calculateTextureWidthAndHeight(t.dims,0),l=a.length;if(n<1||i<1)throw Error("Logical row count N and feature count D must be greater than or equal to 1");if(1!==a.length)throw Error("Dimensionality of the output should be 1");if(a[0]!==n)throw Error("Shape of the output should be equal to logical row count");if(1!==o.length)throw Error("Dimensionality of the intermediate results should be 1");if(o[0]!==n)throw Error("Shape of the intermediate results should be equal to logical row count");let d=ae(e.session.backend.glContext.version),p=`
      float process(int[${l}] indices) {
        int logical_row_start_offset = indices[0] * ${i};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${i}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${d.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${s}, ${u}))) - max);
        }

        return norm_factor;
      }`;return{...Im,output:{dims:a,type:t.type,textureType:0},shaderSource:p}},A_=(e,t,n,i,o,a)=>{let[s,u]=e.calculateTextureWidthAndHeight(t.dims,0),l=t.dims.length;if(n<1||i<1)throw Error("Logical row count N and feature count D must be greater than or equal to 1");if(1!==o.length||1!==a.length)throw Error("Dimensionality of the intermediate results should be 1");if(o[0]!==n||a[0]!==n)throw Error("Shape of the intermediate results should be equal to logical row count");let d=`
      float process(int[${l}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${s}, ${u});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${i};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;return{...Sm,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:d}},Cm=e=>{if(!e||1!==e.length)throw Error("Softmax requires 1 input.");if("float32"!==e[0].type&&"float64"!==e[0].type)throw Error("Invalid input type")}}),Dm,Bm,Lm,P_,O_,E_,Rm=C(()=>{lt(),ze(),Oe(),Dm={name:"Split",inputNames:["A"],inputTypes:[0]},Bm=(e,t,n)=>{E_(t);let i=Q.normalizeAxis(n.axis,t[0].dims.length),o=P_(e,t,i,n),a=[];for(let s=0;s<o;++s)a.push(e.run({...Dm,cacheHint:`${n.cacheKey};${s}`,get:()=>O_(e,t[0],n,i,s)},t));return a},Lm=e=>{let t=e.attributes.getInt("axis",0),n=e.attributes.getInts("split",[]),i=e.outputs.length;return xe({axis:t,split:n,numOutputs:i})},P_=(e,t,n,i)=>{let[,o]=Ln.splitShape(t[0].dims,n,i.split,i.numOutputs);return o.length},O_=(e,t,n,i,o)=>{let[a,s]=Ln.splitShape(t.dims,i,n.split,n.numOutputs),u=s[o],l=a[o],d=`
      float process(int indices[${l.length}]) {
        indices[${i}] += ${u};
        return _A(indices);
      }
    `;return{...Dm,cacheHint:`${n.cacheKey}:${o}`,output:{dims:l,type:t.type,textureType:0},shaderSource:d}},E_=e=>{if(!e||1!==e.length)throw Error("Split requires one input.");if("int8"!==e[0].type&&"uint8"!==e[0].type&&"int16"!==e[0].type&&"uint16"!==e[0].type&&"int32"!==e[0].type&&"uint32"!==e[0].type&&"float32"!==e[0].type&&"float64"!==e[0].type&&"bool"!==e[0].type)throw Error("Invalid input type.")}}),Ss,zm,Nm,C_,k_,Mm=C(()=>{ze(),Ss=(e,t,n)=>{C_(t);let i=Q.squeezeShape(t[0].dims,n);return[e.reshapeUnpacked(t[0],i)]},zm=(e,t)=>(k_(t),Ss(e,[t[0]],Array.from(t[1].integerData))),Nm=e=>e.attributes.getInts("axes"),C_=e=>{if(!e||1!==e.length)throw Error("Squeeze requires 1 input.");if("string"===e[0].type)throw Error("invalid input tensor types.")},k_=e=>{if(!e||2!==e.length)throw Error("Squeeze requires 2 inputs.");if("int32"!==e[1].type)throw Error("Invalid input type.")}}),Fm,D_,B_,Vm=C(()=>{qe(),Oe(),Fm=(e,t)=>{B_(t);let n={name:"Sum",inputNames:t.map((e,t)=>`X${t}`),inputTypes:Array(t.length).fill(0)};return[e.run({...n,get:()=>D_(e,t,n)},t)]},D_=(e,t,n)=>{let i=ae(e.session.backend.glContext.version),o=t[0].dims.slice(),a=`
      void main() {
        vec4 result = ${t.map((e,t)=>`${i.texture2D}(X${t},TexCoords)`).join(" + ")};
        ${i.output} = result;
      }
    `;return{...n,output:{dims:o,type:t[0].type,textureType:0},hasMain:!0,shaderSource:a}},B_=e=>{if(!e||0===e.length)throw Error("Sum requires inputs.");let t=e[0].dims.length;for(let n=1;n<e.length;n++){if(t!==e[n].dims.length)throw Error("Input shapes are mismatched.");for(let i=0;i<t;i++)if(e[0].dims[i]!==e[n].dims[i])throw Error("Input shapes are not matched.")}if("float32"!==e[0].type&&"float64"!==e[0].type)throw Error("Invalid input type.");for(let t=1;t<e.length;t++)if(e[0].type!==e[t].type)throw Error("Input types are not matched.")}}),Gm,L_,R_,Um=C(()=>{Vn(),Oe(),Gm=(e,t)=>{R_(t);let n={name:"Tile",inputNames:["A"],inputTypes:[0]};return[e.run({...n,get:()=>L_(e,t,n)},t)]},L_=(e,t,n)=>{let i=t[0].dims.slice(),o=Array(i.length),a=[];for(let e=0;e<i.length;e++)o[e]=i[e]*t[1].numberData[e],a.push(`inputIdx[${e}] = int(mod(float(outputIdx[${e}]), ${i[e]}.));`);let s=o.length,u=`
      float process(int outputIdx[${s}]) {
        int inputIdx[${s}];
        ${a.join(`
`)}
        return _A(inputIdx);
      }
    `;return{...n,output:{dims:o,type:t[0].type,textureType:0},shaderSource:u}},R_=e=>{if(!e||2!==e.length)throw Error("Tile requires 2 input.");if(1!==e[1].dims.length)throw Error("The second input shape must 1 dimension.");if(e[1].dims[0]!==e[0].dims.length)throw Error("Invalid input shape.");if(-1===$r.indexOf(e[0].type))throw Error("Invalid input type.");if("int32"!==e[1].type&&"int16"!==e[1].type)throw Error("Invalid repeat type.")}}),$s,Wm,Hm,z_,N_,qm=C(()=>{ze(),$s=(e,t,n)=>{z_(t);let i=Q.unsqueezeShape(t[0].dims,n);return[e.reshapeUnpacked(t[0],i)]},Wm=(e,t)=>(N_(t),$s(e,[t[0]],Array.from(t[1].integerData))),Hm=e=>e.attributes.getInts("axes"),z_=e=>{if(!e||1!==e.length)throw Error("Unsqueeze requires 1 input.");if("string"===e[0].type)throw Error("invalid input tensor types.")},N_=e=>{if(!e||2!==e.length)throw Error("Unsqueeze requires 2 inputs.");if("int32"!==e[1].type)throw Error("Invalid input type.")}}),jm,Km=C(()=>{od(),bd(),wd(),$d(),qo(),lp(),hp(),yp(),vp(),Sp(),Pp(),kp(),Rp(),jo(),Fp(),Qp(),sm(),lm(),hm(),bm(),Tm(),km(),Rm(),Mm(),Vm(),Um(),Xo(),ls(),qm(),vs(),jm=[["Abs","","6+",Ad],["Acos","","7+",Pd],["Add","","7+",id],["And","","7+",ad],["Asin","","7+",Od],["Atan","","7+",Ed],["AveragePool","","7+",Gp,Up],["BatchNormalization","","7+",rd,nd],["Cast","","6+",yd,xd],["Ceil","","6+",Dd],["Clip","","6-10",ss,Cd],["Clip","","11+",kd],["Concat","","4+",_d,Sd],["Conv","","1+",hs,gs],["ConvTranspose","","1+",sp,up],["Cos","","7+",Bd],["Div","","7+",sd],["Dropout","","7+",us],["DepthToSpace","","1+",pp,mp],["Equal","","7+",ud],["Elu","","6+",Ld,Rd],["Exp","","6+",zd],["Flatten","","1+",gp,bp],["Floor","","6+",Nd],["FusedConv","com.microsoft","1+",hs,gs],["Gather","","1+",xp,wp],["Gemm","","7-10",bs,_p],["Gemm","","11+",bs,Ip],["GlobalAveragePool","","1+",Hp,qp],["GlobalMaxPool","","1+",Yp],["Greater","","7+",ld],["Identity","","1+",us],["ImageScaler","","1+",$p,Ap],["InstanceNormalization","","6+",Ep,Cp],["LeakyRelu","","6+",Md,Fd],["Less","","7+",cd],["LRN","","1+",Dp,Bp],["Log","","6+",Vd],["MatMul","","1+",ep,tp],["MaxPool","","1+",jp,Kp],["Mul","","7+",fd],["Neg","","6+",Gd],["Not","","1+",Ud],["Or","","7+",dd],["Pad","","2-10",ys,zp],["Pad","","11+",Np,Mp],["Pow","","7+",pd],["PRelu","","7+",md],["ReduceLogSum","","1+",im,Ar],["ReduceMax","","1+",rm,Ar],["ReduceMean","","1+",tm,Ar],["ReduceMin","","1+",nm,Ar],["ReduceProd","","1+",om,Ar],["ReduceSum","","1-12",em,Ar],["ReduceSumSquare","","1+",am,Ar],["Relu","","6+",Wd],["Reshape","","5+",um],["Resize","","10",_s,pm],["Resize","","11+",_s,mm],["Shape","","1+",gm],["Sigmoid","","6+",Hd],["Sin","","7+",qd],["Slice","","10+",vm],["Slice","","1-9",ym,xm],["Softmax","","1-12",$m,Am],["Softmax","","13+",Om,Pm],["Split","","2-12",Bm,Lm],["Sqrt","","6+",jd],["Squeeze","","1-12",Ss,Nm],["Squeeze","","13+",zm],["Sub","","7+",hd],["Sum","","6+",Fm],["Tan","","7+",Kd],["Tanh","","6+",Xd],["Tile","","6+",Gm],["Transpose","","1+",jr,fp],["Upsample","","7-8",xs,fm],["Upsample","","9",xs,dm],["Unsqueeze","","1-12",$s,Hm],["Unsqueeze","","13+",Wm],["Xor","","7+",gd]]});function Zm(e){let t={},n;for(;null!==(n=Xm.exec(e));){let e=n[3].split(",").map(e=>{let t=e.trim().split(" ");return t&&2===t.length?{type:t[0],name:t[1]}:null}).filter(e=>null!==e);t[n[2]]={params:e,body:n[4]}}for(let i in t){let o=RegExp(M_.replace("__FUNC__",i),"gm");for(;null!==(n=o.exec(e));){let o=n[1],a=n[2],s=n[3].split(","),u=o?`${o} ${a};`:"",l=t[i].body,d="";t[i].params.forEach((e,t)=>{e&&(d+=`${e.type} ${e.name} = ${s[t]};
`)}),l=(l=`${d}
 ${l}`).replace("return",`${a} = `);let p=`
      ${u}
      {
        ${l}
      }
      `;e=e.replace(n[0],p)}}return e=e.replace(Xm,"")}var Xm,M_,Ym=C(()=>{Xm=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm,M_="(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;"});function wn(e,t){let n=[],i=[],o=null!=t&&Array.isArray(t)&&0===t.length,a=null==t||o?null:F_(t,e).sort(),s=0;for(let t=0;t<e.length;++t){if(null!=a){if(a[s]===t&&1!==e[t])throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(null==a[s]||a[s]>t)&&1===e[t]&&(n.push(e[t]),i.push(t)),a[s]<=t&&s++}1!==e[t]&&(n.push(e[t]),i.push(t))}return{newShape:n,keptDims:i}}function F_(e,t){let n=t.length;return mn((e=null==e?t.map((e,t)=>t):[].concat(e)).every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),mn(e.every(V_),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function V_(e){return e%1==0}function G_(e){if(0===e.length)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function Jm(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}var Qo,As=C(()=>{kt(),ze(),Qo=class{constructor(e){this.maxTextureSize=e}computeTextureWH(e,t){let n=this.computeTexture(e,t);return t&&t.isPacked&&(n[0]/=2,n[1]/=2),t&&t.reverseWH?[n[1],n[0]]:n}computeTexture(e,t){let n=t&&t.isPacked;if(0===e.length)return n?[2,2]:[1,1];let i=this.maxTextureSize;if(t&&void 0!==t.breakAxis){let n=t.breakAxis>=e.length?1:e.slice(t.breakAxis).reduce((e,t)=>e*t),o=t.breakAxis<=0?1:e.slice(0,t.breakAxis).reduce((e,t)=>e*t);if(!(n>i)&&!(o>i))return[n,o];Ne.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${e}, breakAxis:${t.breakAxis}`)}let o=e.slice(0);n&&(i*=2,1===(o=o.map((e,t)=>t>=o.length-2?o[t]%2==0?o[t]:o[t]+1:o[t])).length&&(o=[2,o[0]])),2!==o.length&&(o=wn(o).newShape);let a=G_(o);return o.length<=1&&a<=i?[1,a]:2===o.length&&o[0]<=i&&o[1]<=i?o:3===o.length&&o[0]*o[1]<=i&&o[2]<=i?[o[0]*o[1],o[2]]:3===o.length&&o[0]<=i&&o[1]*o[2]<=i?[o[0],o[1]*o[2]]:4===o.length&&o[0]*o[1]*o[2]<=i&&o[3]<=i?[o[0]*o[1]*o[2],o[3]]:4===o.length&&o[0]<=i&&o[1]*o[2]*o[3]<=i?[o[0],o[1]*o[2]*o[3]]:n?Jm(a/4).map(e=>2*e):Jm(a)}}}),ei,Qm=C(()=>{ze(),mr(),qe(),As(),er(),ei=class extends Rt{constructor(e){super(e)}getFunctions(){return{...this.offsetToCoords(),...this.coordsToOffset(),...this.toVec(),...this.valueFrom(),...this.getCommonUtilFuncs(),...this.getInputsSamplingSnippets(),...this.getOutputSamplingSnippet()}}getCustomTypes(){return{}}offsetToCoords(){let e="offsetToCoords";return{offsetToCoords:new X(`
      vec2 ${e}(int offset, int width, int height) {
        int t = offset / width;
        int s = offset - t*width;
        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);
        return coords;
      }
      `)}}coordsToOffset(){let e="coordsToOffset";return{coordsToOffset:new X(`
      int ${e}(vec2 coords, int width, int height) {
        float s = coords.s * float(width);
        float t = coords.t * float(height);
        int offset = int(t) * width + int(s);
        return offset;
      }
      `)}}getOutputSamplingSnippet(){let e=this.context.outputTextureLayout;return e.isPacked?this.getPackedOutputSamplingSnippet(e):this.getUnpackedOutputSamplingSnippet(e)}getPackedOutputSamplingSnippet(e){let t=e.unpackedShape,n=[e.width,e.height],i={},o="getOutputCoords";switch(t.length){case 0:i[o]=this.getOutputScalarCoords();break;case 1:i[o]=this.getOutputPacked1DCoords(t,n);break;case 2:i[o]=this.getOutputPacked2DCoords(t,n);break;case 3:i[o]=this.getOutputPacked3DCoords(t,n);break;default:i[o]=this.getOutputPackedNDCoords(t,n)}let a=`
      void setOutput(vec4 val) {
        ${ae(this.context.glContext.version).output} = val;
      }
    `;return i.floatTextureSetRGBA=new X(a),i}getUnpackedOutputSamplingSnippet(e){let t=e.unpackedShape,n=[e.width,e.height],i={},o="getOutputCoords";switch(t.length){case 0:i[o]=this.getOutputScalarCoords();break;case 1:i[o]=this.getOutputUnpacked1DCoords(t,n);break;case 2:i[o]=this.getOutputUnpacked2DCoords(t,n);break;case 3:i[o]=this.getOutputUnpacked3DCoords(t,n);break;case 4:i[o]=this.getOutputUnpacked4DCoords(t,n);break;case 5:i[o]=this.getOutputUnpacked5DCoords(t,n);break;case 6:i[o]=this.getOutputUnpacked6DCoords(t,n);break;default:throw Error(`Unsupported output dimensionality: ${t.length}`)}let a=`
        void setOutput(float val) {
          ${ae(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `;return i.floatTextureSetR=new X(a),i}getOutputScalarCoords(){return new X(`
      int getOutputCoords() {
        return 0;
      }
    `)}getOutputPacked1DCoords(e,t){let n=t,i="";return 1===n[0]?i=`
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${n[1]}.0);
          }
        `:1===n[1]?i=`
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${n[0]}.0);
          }
        `:i=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${n[0]}, ${n[1]}));
          return 2 * (resTexRC.y * ${n[0]} + resTexRC.x);
        }
      `,new X(i)}getOutputPacked2DCoords(e,t){let n="";if(Fr.arraysEqual(e,t))return n=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${t[0]}, ${t[1]}));
        }
      `,new X(n);let i=t,o=Math.ceil(e[1]/2);return n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${i[0]}, ${i[1]}));

          int index = resTexRC.y * ${i[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${o}) * 2;
          int c = 2 * (index / ${o});

          return ivec2(r, c);
        }
      `,new X(n)}getOutputPacked3DCoords(e,t){let n=[t[0],t[1]],i=Math.ceil(e[2]/2),o=i*Math.ceil(e[1]/2),a=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${n[0]}, ${n[1]}));
          int index = resTexRC.y * ${n[0]} + resTexRC.x;

          int b = index / ${o};
          index -= b * ${o};

          // reverse r and c order for packed texture
          int r = imod(index, ${i}) * 2;
          int c = 2 * (index / ${i});

          return ivec3(b, r, c);
        }
      `;return new X(a)}getOutputPackedNDCoords(e,t){let n=[t[0],t[1]],i=Math.ceil(e[e.length-1]/2),o=i*Math.ceil(e[e.length-2]/2),a=o,s="",u="b, r, c";for(let t=2;t<e.length-1;t++)a*=e[e.length-t-1],s=`
      int b${t} = index / ${a};
      index -= b${t} * ${a};
    `+s,u=`b${t}, `+u;let l=`
      ivec${e.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${n[0]}, ${n[1]}));
        int index = resTexRC.y * ${n[0]} + resTexRC.x;

        ${s}

        int b = index / ${o};
        index -= b * ${o};

        // reverse r and c order for packed texture
        int r = imod(index, ${i}) * 2;
        int c = 2 * (index / ${i});

        return ivec${e.length}(${u});
      }
    `;return new X(l)}getOutputUnpacked1DCoords(e,t){let n=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          return resTexRC.y * ${t[0]} + resTexRC.x;
        }
      `;return new X(n)}getOutputUnpacked2DCoords(e,t){let n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          int r = index / ${e[1]};
          int c = index - r * ${e[1]};
          return ivec2(r, c);
        }
      `;return new X(n)}getOutputUnpacked3DCoords(e,t){let n="",i=e.length,o=null;i<2&&(o=[]),(o=Array(i-1))[i-2]=e[i-1];for(let t=i-3;t>=0;--t)o[t]=o[t+1]*e[t+1];let a=["r","c","d"],s=o.map((e,t)=>{let n=`int ${a[t]} = index / ${e}`,i=t===o.length-1?`int ${a[t+1]} = index - ${a[t]} * ${e}`:`index -= ${a[t]} * ${e}`;return`${n}; ${i};`}).join("");return n=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${s}
          return ivec3(r, c, d);
        }
      `,new X(n)}getOutputUnpacked4DCoords(e,t){let n="",i=e.length,o=null;i<2&&(o=[]),(o=Array(i-1))[i-2]=e[i-1];for(let t=i-3;t>=0;--t)o[t]=o[t+1]*e[t+1];let a=["r","c","d","d2"],s=o.map((e,t)=>{let n=`int ${a[t]} = index / ${e}`,i=t===o.length-1?`int ${a[t+1]} = index - ${a[t]} * ${e}`:`index -= ${a[t]} * ${e}`;return`${n}; ${i};`}).join("");return n=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${s}
          return ivec4(r, c, d, d2);
        }
      `,new X(n)}getOutputUnpacked5DCoords(e,t){let n="",i=e.length,o=null;i<2&&(o=[]),(o=Array(i-1))[i-2]=e[i-1];for(let t=i-3;t>=0;--t)o[t]=o[t+1]*e[t+1];let a=["r","c","d","d2","d3"],s=o.map((e,t)=>{let n=`int ${a[t]} = index / ${e}`,i=t===o.length-1?`int ${a[t+1]} = index - ${a[t]} * ${e}`:`index -= ${a[t]} * ${e}`;return`${n}; ${i};`}).join("");return n=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${s}
          return ivec5(r, c, d, d2, d3);
        }
      `,new X(n)}getOutputUnpacked6DCoords(e,t){let n="",i=e.length,o=null;i<2&&(o=[]),(o=Array(i-1))[i-2]=e[i-1];for(let t=i-3;t>=0;--t)o[t]=o[t+1]*e[t+1];let a=["r","c","d","d2","d3","d4"],s=o.map((e,t)=>{let n=`int ${a[t]} = index / ${e}`,i=t===o.length-1?`int ${a[t+1]} = index - ${a[t]} * ${e}`:`index -= ${a[t]} * ${e}`;return`${n}; ${i};`}).join("");return n=`
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${t[0]}, ${t[1]}));
         int index = resTexRC.y * ${t[0]} + resTexRC.x;
         ${s}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `,new X(n)}getCommonUtilFuncs(){let e={},t="uvFromFlat";e[t]=new X(`
    vec2 uvFromFlat(int texNumR, int texNumC, int index) {
      int texC = index / texNumR;
      int texR = index - texC * texNumR;
      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to
      //       v.
      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);
    }
    `),e[t="packedUVfrom1D"]=new X(`
      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
        int texelIndex = index / 2;
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),e[t="packedUVfrom2D"]=new X(`
      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {
        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),e[t="packedUVfrom3D"]=new X(`
      vec2 packedUVfrom3D(int texNumR, int texNumC,
          int texelsInBatch, int texelsInLogicalRow, int b,
          int row, int col) {
        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = index / texNumC;
        int texC = index - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="sampleTexture";let n=ae(this.context.glContext.version);return e[t]=new X(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${n.texture2D}(textureSampler, uv).r;
        }`),e}getInputsSamplingSnippets(){let e={},t=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((n,i)=>{let o=this.context.inputTextureLayouts[i],a=Mo(n);o.isPacked?e[a]=this.getPackedSamplerFromInput(a,n,o):e[a]=this.getUnpackedSamplerFromInput(a,n,o);let s=Ff(n);o.unpackedShape.length<=t.unpackedShape.length&&(o.isPacked?e[s]=this.getPackedSamplerAtOutputCoords(s,o,t,n):e[s]=this.getUnpackedSamplerAtOutputCoords(s,o,t,n))}),e}getPackedSamplerAtOutputCoords(e,t,n,i){let o=t.unpackedShape,a=n.unpackedShape,s=Mo(i),u=o.length,l=a.length,d=gt.getBroadcastDims(o,a),p=bt(l),c=l-u,h,f=qt();h=0===u?"":l<2&&d.length>=1?"coords = 0;":d.map(e=>`coords.${f[e+c]} = 0;`).join(`
`);let m="";m=l<2&&u>0?"coords":o.map((e,t)=>`coords.${f[t+c]}`).join(", ");let g="return outputValue;",y=1===Q.size(o),b=1===Q.size(a);if(1!==u||y||b){if(y&&!b)g=1===l?`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:`
          return vec4(outputValue.x);
        `;else if(d.length){let e=u-2,t=u-1;d.indexOf(e)>-1&&d.indexOf(t)>-1?g="return vec4(outputValue.x);":d.indexOf(e)>-1?g="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":d.indexOf(t)>-1&&(g="return vec4(outputValue.xx, outputValue.zz);")}}else g=`
        return vec4(outputValue.xy, outputValue.xy);
      `;let _=`
        int lastDim = coords.${f[l-1]};
        coords.${f[l-1]} = coords.${f[l-2]};
        coords.${f[l-2]} = lastDim;
      `,v=`
      vec4 ${e}() {
        ${p} coords = getOutputCoords();
        ${_}
        ${h}
        vec4 outputValue = ${s}(${m});
        ${g}
      }
    `;return new X(v,["coordinates.getOutputCoords"])}getUnpackedSamplerAtOutputCoords(e,t,n,i){let o=[n.width,n.height],a=[t.width,t.height],s=t.unpackedShape.length,u=n.unpackedShape.length,l=t.unpackedShape,d=n.unpackedShape,p=Mo(i);if(s===u&&Fr.arraysEqual(a,o)){let t=`
          float ${e}() {
            return sampleTexture(${i}, TexCoords);
          }
        `;return new X(t,["coordinates.sampleTexture"])}let c=bt(u),h=gt.getBroadcastDims(l,d),f=u-s,m,g=qt();m=0===s?"":u<2&&h.length>=1?"coords = 0;":h.map(e=>`coords.${g[e+f]} = 0;`).join(`
`);let y="";y=u<2&&s>0?"coords":t.unpackedShape.map((e,t)=>`coords.${g[t+f]}`).join(", ");let b=`
        float ${e}() {
          ${c} coords = getOutputCoords();
          ${m}
          return ${p}(${y});
        }
      `;return new X(b,["coordinates.getOutputCoords"])}getPackedSamplerFromInput(e,t,n){switch(n.unpackedShape.length){case 0:return this.getPackedSamplerScalar(e,t);case 1:return this.getPackedSampler1D(e,t,n);case 2:return this.getPackedSampler2D(e,t,n);case 3:return this.getPackedSampler3D(e,t,n);default:return this.getPackedSamplerND(e,t,n)}}getUnpackedSamplerFromInput(e,t,n){let i=n.unpackedShape;switch(i.length){case 0:return this.getUnpackedSamplerScalar(e,t,n);case 1:return this.getUnpackedSampler1D(e,t,n);case 2:return this.getUnpackedSampler2D(e,t,n);case 3:return this.getUnpackedSampler3D(e,t,n);case 4:return this.getUnpackedSampler4D(e,t,n);case 5:return this.getUnpackedSampler5D(e,t,n);case 6:return this.getUnpackedSampler6D(e,t,n);default:throw Error(`Unsupported dimension ${i.length}-D`)}}getPackedSamplerScalar(e,t){let n=ae(this.context.glContext.version),i=`
          vec4 ${e}() {
            return ${n.texture2D}(${t}, halfCR);
          }
        `;return new X(i)}getPackedSampler1D(e,t,n){let i=[n.width,n.height],o=[i[1],i[0]],a=ae(this.context.glContext.version),s=`vec4 ${e}(int index) {
      vec2 uv = packedUVfrom1D(
      ${o[0]}, ${o[1]}, index);
      return ${a.texture2D}(${t}, uv);
    }`;return new X(s,["coordinates.packedUVfrom1D"])}getPackedSampler2D(e,t,n){let i=n.unpackedShape,o=[n.width,n.height],a=ae(this.context.glContext.version),s=o[0],u=o[1];if(null!=o&&Fr.arraysEqual(i,o)){let n=`vec4 ${e}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${u}.0, ${s}.0);
        return ${a.texture2D}(${t}, uv);
      }`;return new X(n)}let l=o,d=Math.ceil(i[1]/2),p=`vec4 ${e}(int row, int col) {
      vec2 uv = packedUVfrom2D(${l[1]}, ${l[0]}, ${d}, row, col);
      return ${a.texture2D}(${t}, uv);
    }`;return new X(p,["coordinates.packedUVfrom2D"])}getPackedSampler3D(e,t,n){let i=n.unpackedShape,o=[n.width,n.height],a=[o[0],o[1]],s=ae(this.context.glContext.version);if(1===i[0]){let o=i.slice(1),a=[1,2],s=hn(i,o),u=["b","row","col"],l=JSON.parse(JSON.stringify(n));l.unpackedShape=s;let d=this.getPackedSamplerFromInput(e,t,l),p=`${d.routineBody}
      vec4 ${e}(int b, int row, int col) {
        return ${e}(${gn(u,a)});
      } `;return new X(p,d.dependencies)}let u=a[0],l=a[1],d=Math.ceil(i[2]/2),p=d*Math.ceil(i[1]/2),c=`vec4 ${e}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${u}, ${p}, ${d}, b, row, col);
      return ${s.texture2D}(${t}, uv);}`;return new X(c,["coordinates.packedUVfrom3D"])}getPackedSamplerND(e,t,n){let i=n.unpackedShape,o=i.length,a=[n.width,n.height],s=ae(this.context.glContext.version),u=[a[0],a[1]],l=u[1],d=u[0],p=Math.ceil(i[o-1]/2),c=p*Math.ceil(i[o-2]/2),h="int b, int row, int col",f=`b * ${c} + (row / 2) * ${p} + (col / 2)`;for(let e=2;e<o-1;e++)h=`int b${e}, `+h,c*=i[o-e-1],f=`b${e} * ${c} + `+f;let m=`vec4 ${e}(${h}) {
      int index = ${f};
      int texR = index / ${d};
      int texC = index - texR * ${d};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}, ${l});
      return ${s.texture2D}(${t}, uv);
    }`;return new X(m)}getUnpackedSamplerScalar(e,t,n){let[i,o]=[n.width,n.height];if(1===i&&1===o){let n=`
          float ${e}() {
            return sampleTexture(${t}, halfCR);
          }
        `;return new X(n,["coordinates.sampleTexture"])}let a=`
        float ${e}() {
          int offset_${t} = coordsToOffset(TexCoords, ${i}, ${o});
          vec2 uv = uvFromFlat(${i}, ${o}, offset_${t});
          return sampleTexture(${t}, uv);
        }
      `;return new X(a,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler1D(e,t,n){let i=n.width,o=n.height;if(1===o&&1===i){let n=`
        float ${e}(int index) {
          return sampleTexture(${t}, halfCR);
        }
      `;return new X(n,["coordinates.sampleTexture"])}if(1===o){let n=`
          float ${e}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${i}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new X(n,["coordinates.sampleTexture"])}if(1===i){let n=`
          float ${e}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${o}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new X(n,["coordinates.sampleTexture"])}let a=`
        float ${e}(int index) {
          vec2 uv = uvFromFlat(${i}, ${o}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new X(a,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler2D(e,t,n){let i=n.unpackedShape,o=[n.height,n.width];if(null!=o&&Fr.arraysEqual(i,o)){let n=o[1],i=o[0],a=`
          float ${e}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${n}.0, ${i}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new X(a,["coordinates.sampleTexture"])}let{newShape:a,keptDims:s}=wn(i),u=a;if(u.length<i.length){let o=hn(i,u),a=JSON.parse(JSON.stringify(n));a.unpackedShape=o;let l=["col","row"],d=`
          ${this.getUnpackedSamplerFromInput(e,t,a).routineBody}
          float ${e}(int row, int col) {
            return ${e}(${gn(l,s)});
          }
        `;return new X(d,["coordinates.sampleTexture"])}let l=o[1],d=o[0];if(1===d){let n=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${l}, ${d});
            float index = dot(vec3(row, col, offset_${t}), vec3(${i[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new X(n,["coordinates.sampleTexture","coordinates.coordsToOffset"])}if(1===l){let n=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${l}, ${d});
            float index = dot(vec3(row, col, offset_${t}), vec3(${i[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${d}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new X(n,["coordinates.sampleTexture","coordinates.coordsToOffset"])}let p=`
        float ${e}(int row, int col) {
          int index = col * ${i[1]} + row;
          vec2 uv = uvFromFlat(${l}, ${d}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new X(p,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler3D(e,t,n){let i=n.unpackedShape,o=i[1]*i[2],a=i[2],{newShape:s,keptDims:u}=wn(i),l=s;if(l.length<i.length){let o=hn(i,l),a=["batch","col","row"],s=JSON.parse(JSON.stringify(n));s.unpackedShape=o;let d=this.getUnpackedSamplerFromInput(e,t,s),p=u.reverse(),c=`
          ${d.routineBody}
          float ${e}(int batch, int row, int col) {
            return ${e}(${gn(a,p)});
          }
        `;return new X(c,d.dependencies)}let d=n.width,p=n.height,c=`
          float ${e}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${o} + col * ${a} + row;
            vec2 uv = uvFromFlat(${d}, ${p}, index);
            return sampleTexture(${t}, uv);
          }
      `;return new X(c,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler4D(e,t,n){let i=n.unpackedShape,o=i[3],a=i[2]*o,s=i[1]*a,u=n.width,l=n.height,d=`
        float ${e}(int row, int col, int depth, int depth2) {
          int index = row * ${s} + col * ${a} +
              depth2 * ${o} + depth;
          vec2 uv = uvFromFlat(${u}, ${l}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new X(d,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler5D(e,t,n){let i=n.unpackedShape,o=i[4],a=i[3]*o,s=i[2]*a,u=i[1]*s,{newShape:l,keptDims:d}=wn(i);if(l.length<i.length){let o=hn(i,l),a=["row","col","depth","depth2","depth3"],s=JSON.parse(JSON.stringify(n));s.unpackedShape=o;let u=`
          ${this.getUnpackedSamplerFromInput(e,t,s).routineBody}
          float ${e}(int row, int col, int depth, int depth2, int depth3) {
            return ${e}(${gn(a,d)});
          }
        `;return new X(u,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let p=n.width,c=n.height,h=`
        float ${e}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${u} + col * ${s} + depth * ${a} +
          depth3 * ${o} + depth2;
          vec2 uv = uvFromFlat(${p}, ${c}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new X(h,["coordinates.sampleTexture","coordinates.uvFromFlat"])}getUnpackedSampler6D(e,t,n){let i=n.unpackedShape,o=i[5],a=i[4]*o,s=i[3]*a,u=i[2]*s,l=i[1]*u,{newShape:d,keptDims:p}=wn(i);if(d.length<i.length){let o=hn(i,d),a=["row","col","depth","depth2","depth3","depth4"],s=JSON.parse(JSON.stringify(n));s.unpackedShape=o;let u=`
            ${this.getUnpackedSamplerFromInput(e,t,s).routineBody}
            float ${e}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${e}(${gn(a,p)});
            }
          `;return new X(u,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let c=n.width,h=n.height,f=`
          float ${e}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${l} + col * ${u} + depth * ${s} +
            depth2 * ${a} + depth3 * ${o} + depth4;
            vec2 uv = uvFromFlat(${c}, ${h}, index);
            return sampleTexture(${t}, uv);
          }
        `;return new X(f,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}toVec(){let e=this.context.outputTextureLayout,t=e.shape.length,n=e.strides,i=e.width,o=e.height,a=[];for(let e=0;e<t-1;++e)a.push(`
        c[${e}] = offset / ${n[e]};`),a.push(`
        offset -= c[${e}] * ${n[e]};`);a.push(`
        c[${t-1}] = offset;`);let s=`
      void toVec(vec2 texCoords, out int c[${t}]) {
        int offset = coordsToOffset(texCoords, ${i}, ${o});
        ${a.join("")}
      }
      void toVec(int offset, out int c[${t}]) {
        ${a.join("")}
      }
    `;return{toVec:new X(s,["coordinates.coordsToOffset"])}}valueFrom(){let e={};return this.context.programInfo.inputNames.forEach((t,n)=>{let i=this.context.inputTextureLayouts[n],o=(i.unpackedShape.length>0?i.unpackedShape:i.shape).length,a=`_${t}`;e[a]=new X(this.getValueFromSingle(t,o,i.width,i.height,!1),[`shapeUtils.indicesToOffset${a}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"]),e[a+="_T"]=new X(this.getValueFromSingle(t,o,i.width,i.height,!0),[`shapeUtils.indicesToOffset${a}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"])}),e}getValueFromSingle(e,t,n,i,o){let a=`_${e}`;o&&(a+="_T");let s=ae(this.context.glContext.version);return`
        float ${a}(int m[${t}]) {
          int offset = indicesToOffset${a}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${i});
          float value = getColorAsFloat(${s.texture2D}(${e}, coords));
          return value;
        }
        `}getPackedValueFrom(e,t,n,i,o){let a=`_${e}_Pack`;o&&(a+="_T");let s=ae(this.context.glContext.version);return`
        vec4 ${a}(int m[${t}]) {
          int offset = indicesToOffset_${e}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${i});
          return ${s.texture2D}(${e}, coords);
        }
        `}}}),ti,eh=C(()=>{mr(),ti=class e extends Rt{constructor(e){super(e)}getFunctions(){return{...this.encodeFloat32(),...this.decodeFloat32()}}getCustomTypes(){return{}}encodeFloat32(){return{encode:new X(`highp vec4 encode(highp float f) {
        return vec4(f, 0.0, 0.0, 0.0);
      }
        `)}}decodeFloat32(){return{decode:new X(`highp float decode(highp vec4 rgba) {
        return rgba.r;
      }
        `)}}encodeUint8(){let t=e.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{encode:new X(`
      highp vec4 encode(highp float f) {
        highp float F = abs(f);
        highp float Sign = step(0.0,-f);
        highp float Exponent = floor(log2(F));
        highp float Mantissa = (exp2(- Exponent) * F);
        Exponent = floor(log2(F) + 127.0) + floor(log2(Mantissa));
        highp vec4 rgba;
        rgba[0] = 128.0 * Sign  + floor(Exponent*exp2(-1.0));
        rgba[1] = 128.0 * mod(Exponent,2.0) + mod(floor(Mantissa*128.0),128.0);
        rgba[2] = floor(mod(floor(Mantissa*exp2(23.0 -8.0)),exp2(8.0)));
        rgba[3] = floor(exp2(23.0)*mod(Mantissa,exp2(-15.0)));
        ${t}
        rgba = rgba / 255.0; // values need to be normalized to [0,1]
        return rgba;
    }
        `)}}decodeUint8(){let t=e.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{decode:new X(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${t}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `)}}static isLittleEndian(){let e=new ArrayBuffer(4),t=new Uint32Array(e),n=new Uint8Array(e);if(t[0]=0xdeadbeef,239===n[0])return!0;if(222===n[0])return!1;throw Error("unknown endianness")}}}),ri,th=C(()=>{mr(),qe(),ri=class extends Rt{constructor(e){super(e)}getFunctions(){return{...this.setFragColor(),...this.getColorAsFloat()}}getCustomTypes(){return{}}setFragColor(){let e=ae(this.context.glContext.version);return{setFragColor:new X(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `,["encoding.encode"])}}getColorAsFloat(){return{getColorAsFloat:new X(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,["encoding.decode"])}}}}),ni,rh=C(()=>{mr(),ni=class e extends Rt{constructor(e){super(e)}getFunctions(){return{...this.bcastIndex(),...this.bcastMatmulIndex(),...this.offsetToIndices(),...this.indicesToOffset(),...this.incrementIndices()}}getCustomTypes(){return{}}bcastIndex(){let e=this.context.outputTextureLayout.shape.length,t={};return this.context.programInfo.inputNames.forEach((n,i)=>{let o=this.context.inputTextureLayouts[i].unpackedShape;if(o.length<=e){let i=o.length,a=e-i,s=`bcastIndices_${n}`,u="";for(let e=0;e<i;++e)u+=`
          realIndices[${e}] = int( mod(float(bcastedIndices[${a+e}]), ${o[e]}.0) );
          `;let l=`
        void ${s} (int bcastedIndices[${e}], out int realIndices[${i}]) {
          ${u}
        }
        `;t[s]=new X(l)}}),t}bcastMatmulIndex(){let e=this.context.outputTextureLayout.shape.length,t={};return this.context.programInfo.inputNames.forEach((n,i)=>{let o=this.context.inputTextureLayouts[i].shape;if(!(o.length<2||o.length>e)){let i=o.length,a=e-i,s=`bcastMatmulIndices_${n}`,u="";for(let e=0;e<i-2;++e)u+=`
          realIndices[${e}] = int( mod(float(bcastedIndices[${a+e}]), ${o[e]}.0) );
          `;let l=`
        void ${s}(int bcastedIndices[${e}], out int realIndices[${i}]) {
          ${u}
          realIndices[${i-1}] = bcastedIndices[${e-1}];
          realIndices[${i-2}] = bcastedIndices[${e-2}];
        }
        `;t[s]=new X(l)}}),t}indicesToOffset(){let t={};return this.context.programInfo.inputNames.forEach((n,i)=>{let o=this.context.inputTextureLayouts[i].shape,a=this.context.inputTextureLayouts[i].strides,s=o.length,u=`indicesToOffset_${n}`;t[u]=new X(e.indexToOffsetSingle(u,s,a)),t[u=`indicesToOffset_${n}_T`]=new X(e.indexToOffsetSingle(u,s,a.slice().reverse()))}),t}static indexToOffsetSingle(e,t,n){let i="";for(let e=t-1;e>=0;--e)i+=`
        offset += indices[${e}] * ${n[e]};
        `;return`
      int ${e}(int indices[${t}]) {
        int offset = 0;
        ${i}
        return offset;
      }
      `}offsetToIndices(){let t={};return this.context.programInfo.inputNames.forEach((n,i)=>{let o=this.context.inputTextureLayouts[i].shape,a=this.context.inputTextureLayouts[i].strides,s=o.length,u=`offsetToIndices_${n}`;t[u]=new X(e.offsetToIndicesSingle(u,s,a)),t[u=`offsetToIndices_${n}_T`]=new X(e.offsetToIndicesSingle(u,s,a.slice().reverse()))}),t}static offsetToIndicesSingle(e,t,n){let i=[];for(let e=0;e<t-1;++e)i.push(`
      indices[${e}] = offset / ${n[e]};`),i.push(`
        offset -= indices[${e}] * ${n[e]};`);return i.push(`
      indices[${t-1}] = offset;`),`
      void ${e}(int offset, out int indices[${t}]) {
        ${i.join("")}
      }
      `}incrementIndices(){let e={};return this.context.programInfo.inputNames.forEach((t,n)=>{let i=this.context.inputTextureLayouts[n].shape,o=i.length,a=`incrementIndices_${t}`,s="";for(let e=0;e<o;++e)s+=`
        shape[${e}] = ${i[e]};`;let u=`
        void ${a}(int axis, out int indices[${o}]) {
          int shape[${o}];
          ${s};
          for(int i = ${o} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;e[a]=new X(u)}),e}}}),oi,nh=C(()=>{mr(),oi=class extends Rt{constructor(e){super(e)}getCustomTypes(){return{}}getFunctions(){return{...this.binaryVecFunctions(),...this.copyVec(),...this.setVecItem(),...this.getVecItem()}}binaryVecFunctions(){let e=this.context.outputTextureLayout.shape.length,t={add:"+=",sub:"-=",mul:"*=",div:"/="},n={};for(let i in t){let o=`${i}Vec`,a="";for(let n=0;n<e;++n)a+=`
          dest[${n}] ${t[i]} src[${n}];
          `;let s=`
        void ${o}(int src[${e}], out int dest[${e}]) {
          ${a}
        }
        `;n[o]=new X(s)}return n}copyVec(){let e=this.context.outputTextureLayout.shape.length,t="";for(let n=0;n<e;++n)t+=`
        dest[${n}] = src[${n}];
        `;let n=`
      void copyVec(int src[${e}], out int dest[${e}]) {
        ${t}
      }
      `;return{copyVec:new X(n)}}setVecItem(){let e=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index =${e} + index;
        if (index == 0)
            m[0] = value;
        `;for(let n=1;n<e-1;++n)t+=`
        else if (index == ${n})
            m[${n}] = value;
            `;t+=`
        else
            m[${e-1}] = value;
        `;let n=`
      void setVecItem(out int m[${e}], int index, int value) {
        ${t}
      }
        `;return{setVecItem:new X(n)}}getVecItem(){let e=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index = ${e} + index;
        if (index == 0)
            return m[0];
      `;for(let n=1;n<e-1;++n)t+=`
        else if (index == ${n})
            return m[${n}];
      `;t+=`
        else
            return m[${e-1}];
        `;let n=`
      int getVecItem(int m[${e}], int index) {
        ${t}
      }
    `;return{getVecItem:new X(n)}}}}),Ps,oh=C(()=>{Qm(),eh(),th(),rh(),nh(),Ps={encoding:ti,fragcolor:ri,vec:oi,shapeUtils:ni,coordinates:ei}}),ii,ih=C(()=>{mr(),Ym(),oh(),qe(),ii=class{constructor(e,t,n,i){this.libs={},this.glslLibRoutineDependencyGraph={},this.context=new Uo(e,t,n,i),Object.keys(Ps).forEach(e=>{let t=new Ps[e](this.context);this.libs[e]=t});let o=this.glslLibRoutineDependencyGraph;for(let e in this.libs){let t=this.libs[e].getFunctions();for(let n in t){let i=e+"."+n,a;o[i]?(a=o[i]).routineBody=t[n].routineBody:(a=new Fn(i,t[n].routineBody),o[i]=a);let s=t[n].dependencies;if(s)for(let e=0;e<s.length;++e)if(o[s[e]])a.addDependency(o[s[e]]);else{let t=new Fn(s[e]);o[s[e]]=t,a.addDependency(t)}}}}preprocess(){let e=this.context.programInfo,t=e.shaderSource;return this.context.programInfo.hasMain||(t=`${t}
      ${Mf(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),t=Zm(t),`${Nf(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames,e.variables)}
    ${this.getImports(t)}
    ${t}`}getImports(e){let t=this.selectGlslLibRoutinesToBeIncluded(e);if(0===t.length)return"";let n="";for(let e=0;e<t.length;++e)if(t[e].routineBody)n+=t[e].routineBody+`
`;else throw Error(`Missing body for the Glsl Library routine: ${t[e].name}`);return n}selectGlslLibRoutinesToBeIncluded(e){let t=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(n=>{let i=n.split(".")[1];-1!==e.indexOf(i)&&t.push(this.glslLibRoutineDependencyGraph[n])}),Wo.returnOrderedNodes(t)}getUniforms(e,t){let n=[];if(e)for(let t of e)n.push(`uniform sampler2D ${t};`);if(t)for(let e of t)n.push(`uniform ${e.type} ${e.name}${e.arrayLength?`[${e.arrayLength}]`:""};`);return n.join(`
`)}}}),ai,ah=C(()=>{mt(),kt(),ih(),qe(),ai=class{constructor(e,t,n){this.profiler=e,this.glContext=t,this.textureLayoutStrategy=n,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n){this.profiler.event("op",`ProgramManager.run ${e.programInfo.name??"unknown kernel"}`,()=>{let i=this.glContext.gl,o=e.program;i.useProgram(o);try{this.bindOutput(n),this.attributesBound||this.bindAttributes(e.attribLocations),this.bindUniforms(e.uniformLocations,e.programInfo.variables??[],t)}catch(t){throw Ne.error("ProgramManager",e.programInfo.shaderSource),t}this.profiler.event("backend","GlContext.draw()",()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(e=>this.glContext.deleteProgram(e.program))}build(e,t,n){return this.profiler.event("backend","ProgramManager.build",()=>{let i=new ii(this.glContext,e,t,n),o=i.preprocess(),a=this.compile(o);return{programInfo:e,program:a,uniformLocations:this.getUniformLocations(a,i.context.programInfo.inputNames,i.context.programInfo.variables),attribLocations:this.getAttribLocations(a)}})}compile(e){if(!this.vertexShader){Ne.verbose("ProrgramManager","Compiling and caching Vertex shader for the first time");let e=zf(this.glContext.version);this.vertexShader=this.glContext.compileShader(e,this.glContext.gl.VERTEX_SHADER)}ce.debug&&Ne.verbose("ProrgramManager",`FragShader:
${e}
`);let t=this.glContext.compileShader(e,this.glContext.gl.FRAGMENT_SHADER),n=this.glContext.createProgram(this.vertexShader,t);return this.glContext.deleteShader(t),n}bindOutput(e){let t=e.width,n=e.height;Ne.verbose("ProrgramManager",`Binding output texture to Framebuffer: w/h=${t}/${n}, shape=${e.shape}, type=${e.tensor.type}`),this.glContext.attachFramebuffer(e.texture,t,n)}bindAttributes(e){let t=e.position,n=e.textureCoord;this.glContext.setVertexAttributes(t,n),this.attributesBound=!0}bindUniforms(e,t,n){let i=this.glContext.gl,o=0;for(let{name:a,type:s,location:u,arrayLength:l}of e){let e=t.find(e=>e.name===a)?.data;if("sampler2D"!==s&&!e)throw Error(`variable '${a}' does not have data defined in program info`);switch(s){case"sampler2D":this.bindTexture(n[o],u,o),o++;break;case"float":l?i.uniform1fv(u,e):i.uniform1f(u,e);break;case"int":l?i.uniform1iv(u,e):i.uniform1i(u,e);break;default:throw Error(`Uniform not implemented: ${s}`)}}}bindTexture(e,t,n){this.glContext.bindTextureToUniform(e.texture,n,t)}getAttribLocations(e){return{position:this.getAttribLocation(e,"position"),textureCoord:this.getAttribLocation(e,"textureCoord")}}getUniformLocations(e,t,n){let i=[];if(t)for(let n of t)i.push({name:n,type:"sampler2D",location:this.getUniformLocation(e,n)});if(n)for(let t of n)i.push({...t,location:this.getUniformLocation(e,t.name)});return i}getUniformLocation(e,t){let n=this.glContext.gl.getUniformLocation(e,t);if(null===n)throw Error(`Uniform ${t} not found.`);return n}getAttribLocation(e,t){return this.glContext.gl.getAttribLocation(e,t)}}}),si,sh=C(()=>{kt(),Nn(),si=class{constructor(e,t,n,i){this.glContext=e,this.layoutStrategy=t,this.profiler=n,this.config=i,this.pendingRead=new Map,i.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(e,t,n,i){let o=this.toEncoderType(e),a=this.glContext.getEncoder(o,t.channels||1,i);if(t.isPacked&&1===i)throw Error("not implemented");let s=t.width,u=t.height,l,d;if(this.config.reuseTextures){l=`${s}x${u}_${a.format}_${a.internalFormat}_${a.textureType}`,(d=this.inUseTextures.get(l))||(d=[],this.inUseTextures.set(l,d));let t=this.idleTextures.get(l);if(t&&t.length>0){let o=t.pop();return d.push(o),1===i&&this.glContext.updateTexture(o,s,u,a,this.toTextureData(e,n)),o}}Ne.verbose("TextureManager",`Creating new texture of size ${t.width}x${t.height}`);let p=this.glContext.allocateTexture(s,u,a,this.toTextureData(e,n));return this.config.reuseTextures&&(d.push(p),this.textureLookup.set(p,l)),p}readTexture(e,t,n){return n||(n=1),this.profiler.event("backend","TextureManager.readTexture",()=>{let i=e.shape.reduce((e,t)=>e*t)*n,o=this.glContext.readTexture(e.texture,e.width,e.height,i,this.toEncoderType(t),n);return this.toTensorData(t,o)})}async readTextureAsync(e,t,n){let i=e.tensor.dataId;if(n||(n=1),this.pendingRead.has(i)){let e=this.pendingRead.get(i);return new Promise(t=>e?.push(t))}return this.profiler.event("backend","TextureManager.readTextureAsync",async()=>{this.pendingRead.set(i,[]);let o=e.shape.reduce((e,t)=>e*t)*n;await this.glContext.createAndWaitForFence();let a=this.glContext.readTexture(e.texture,e.width,e.height,o,this.toEncoderType(t),n),s=this.toTensorData(t,a),u=this.pendingRead.get(i);return this.pendingRead.delete(i),u?.forEach(e=>e(s)),s})}readUint8TextureAsFloat(e){return this.profiler.event("backend","TextureManager.readUint8TextureAsFloat",()=>{let t=e.shape.reduce((e,t)=>e*t),n=this.glContext.readTexture(e.texture,e.width,e.height,4*t,"byte",4);return new Float32Array(n.buffer,n.byteOffset,t)})}releaseTexture(e,t){let n;if(this.config.reuseTextures&&(n=this.textureLookup.get(e.texture))){t&&this.textureLookup.delete(n);let i=this.inUseTextures.get(n);if(i){let t=i.indexOf(e.texture);if(-1!==t){i.splice(t,1);let o=this.idleTextures.get(n);o||(o=[],this.idleTextures.set(n,o)),o.push(e.texture)}}}(!n||t)&&(Ne.verbose("TextureManager",`Deleting texture of size ${e.width}x${e.height}`),this.glContext.deleteTexture(e.texture))}toTensorData(e,t){switch(e){case"int16":return t instanceof Int16Array?t:Int16Array.from(t);case"int32":return t instanceof Int32Array?t:Int32Array.from(t);case"int8":return t instanceof Int8Array?t:Int8Array.from(t);case"uint16":return t instanceof Uint16Array?t:Uint16Array.from(t);case"uint32":return t instanceof Uint32Array?t:Uint32Array.from(t);case"uint8":case"bool":return t instanceof Uint8Array?t:Uint8Array.from(t);case"float32":return t instanceof Float32Array?t:Float32Array.from(t);case"float64":return t instanceof Float64Array?t:Float64Array.from(t);default:throw Error(`TensorData type ${e} is not supported`)}}toTextureData(e,t){if(t)return t instanceof Float32Array?t:new Float32Array(t)}toEncoderType(e){return"float"}clearActiveTextures(){this.glContext.clearActiveTextures()}}}),ui,uh=C(()=>{kt(),Tc(),ed(),Km(),ah(),As(),sh(),ui=class{constructor(e,t){this.backend=e,this.context=t,this.layoutStrategy=new Qo(e.glContext.maxTextureSize),this.programManager=new ai(this.context.profiler,e.glContext,this.layoutStrategy),this.textureManager=new si(e.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:"full"===e.textureCacheMode}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=e.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new Go(this)}onGraphInitialized(e){let t=e.getValues().filter(e=>-1===e.from&&e.tensor).map(e=>e.tensor.dataId);this.initializers=new Set(t)}isInitializer(e){return!!this.initializers&&this.initializers.has(e)}addInitializer(e){this.initializers.add(e)}getTextureData(e,t){return t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,n=!1){Ne.verbose("WebGLSessionHandler","Storing Texture data in cache"),n?this.packedTextureDataCache.set(e,t):this.unpackedTextureDataCache.set(e,t)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.unpackedTextureDataCache=new Map}resolve(e,t,n){let i=vc(e,t,jm);return{impl:i.opImpl,context:i.opInit?i.opInit(e,n):e}}}});function U_(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var Un,lh=C(()=>{mt(),Nn(),Nn(),er(),Un=class{constructor(e,t){this.frameBufferBound=!1,this.itemsToPoll=[],this.gl=e,this.version=t,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(e,t,n,i){let o=this.gl,a=o.createTexture();o.bindTexture(o.TEXTURE_2D,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE);let s=i?n.encode(i,e*t):null;return o.texImage2D(o.TEXTURE_2D,0,n.internalFormat,e,t,0,n.format,n.textureType,s),this.checkError(),a}updateTexture(e,t,n,i,o){let a=this.gl;a.bindTexture(a.TEXTURE_2D,e);let s=i.encode(o,t*n);a.texSubImage2D(a.TEXTURE_2D,0,0,0,t,n,i.format,i.textureType,s),this.checkError()}attachFramebuffer(e,t,n){let i=this.gl;i.bindTexture(i.TEXTURE_2D,e),i.bindFramebuffer(i.FRAMEBUFFER,this.framebuffer),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,e,0),this.checkError(),i.viewport(0,0,t,n),i.scissor(0,0,t,n)}readTexture(e,t,n,i,o,a){let s=this.gl;a||(a=1),this.frameBufferBound||this.attachFramebuffer(e,t,n);let u=this.getEncoder(o,a),l=u.allocate(t*n);return s.bindTexture(s.TEXTURE_2D,e),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,e,0),s.readPixels(0,0,t,n,s.RGBA,u.textureType,l),this.checkError(),u.decode(l,i)}isFramebufferReady(){return!0}getActiveTexture(){let e=this.gl;return`TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE)-e.TEXTURE0}`}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(e,t){let n=this.gl;n.vertexAttribPointer(e,3,n.FLOAT,!1,20,0),n.enableVertexAttribArray(e),-1!==t&&(n.vertexAttribPointer(t,2,n.FLOAT,!1,20,12),n.enableVertexAttribArray(t)),this.checkError()}createProgram(e,t){let n=this.gl,i=n.createProgram();return n.attachShader(i,e),n.attachShader(i,t),n.linkProgram(i),i}compileShader(e,t){let n=this.gl,i=n.createShader(t);if(!i)throw Error(`createShader() returned null with type ${t}`);if(n.shaderSource(i,e),n.compileShader(i),!1===n.getShaderParameter(i,n.COMPILE_STATUS))throw Error(`Failed to compile shader: ${n.getShaderInfoLog(i)}
Shader source:
${e}`);return i}deleteShader(e){this.gl.deleteShader(e)}bindTextureToUniform(e,t,n){let i=this.gl;i.activeTexture(i.TEXTURE0+t),this.checkError(),i.bindTexture(i.TEXTURE_2D,e),this.checkError(),i.uniform1i(n,t),this.checkError()}draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.checkError()}checkError(){if(ce.debug){let e=this.gl,t=e.getError(),n="";switch(t){case e.NO_ERROR:return;case e.INVALID_ENUM:n="INVALID_ENUM";break;case e.INVALID_VALUE:n="INVALID_VALUE";break;case e.INVALID_OPERATION:n="INVALID_OPERATION";break;case e.INVALID_FRAMEBUFFER_OPERATION:n="INVALID_FRAMEBUFFER_OPERATION";break;case e.OUT_OF_MEMORY:n="OUT_OF_MEMORY";break;case e.CONTEXT_LOST_WEBGL:n="CONTEXT_LOST_WEBGL";break;default:n=`Unknown WebGL Error: ${t.toString(16)}`}throw Error(n)}}deleteTexture(e){this.gl.deleteTexture(e)}deleteProgram(e){this.gl.deleteProgram(e)}getEncoder(e,t,n=0){if(2===this.version)return new Fo(this.gl,t);switch(e){case"float":return 1===n||this.isRenderFloat32Supported?new zn(this.gl,t):new zn(this.gl,t,this.textureHalfFloatExtension.HALF_FLOAT_OES);case"int":throw Error("not implemented");case"byte":return new Vo(this.gl,t);default:throw Error(`Invalid dataType: ${e}`)}}clearActiveTextures(){let e=this.gl;for(let t=0;t<this.maxTextureImageUnits;++t)e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,null)}dispose(){if(this.disposed)return;let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(this.framebuffer),e.bindBuffer(e.ARRAY_BUFFER,null),e.deleteBuffer(this.vertexbuffer),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.finish(),this.disposed=!0}createDefaultGeometry(){return new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0])}createVertexbuffer(){let e=this.gl,t=e.createBuffer();if(!t)throw Error("createBuffer() returned null");let n=this.createDefaultGeometry();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),this.checkError(),t}createFramebuffer(){let e=this.gl.createFramebuffer();if(!e)throw Error("createFramebuffer returned null");return e}queryVitalParameters(){let e=this.gl;if(this.isFloatTextureAttachableToFrameBuffer=this.checkFloatTextureAttachableToFrameBuffer(),this.isRenderFloat32Supported=this.checkRenderFloat32(),this.isFloat32DownloadSupported=this.checkFloat32Download(),1===this.version&&!this.textureHalfFloatExtension&&!this.isRenderFloat32Supported)throw Error("both float32 and float16 TextureType are not supported");this.isBlendSupported=!this.isRenderFloat32Supported||this.checkFloat32Blend(),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxTextureImageUnits=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.version}getExtensions(){2===this.version?(this.colorBufferFloatExtension=this.gl.getExtension("EXT_color_buffer_float"),this.disjointTimerQueryWebgl2Extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")):(this.textureFloatExtension=this.gl.getExtension("OES_texture_float"),this.textureHalfFloatExtension=this.gl.getExtension("OES_texture_half_float"))}checkFloatTextureAttachableToFrameBuffer(){let e=this.gl,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t);let n=2===this.version?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,n,1,1,0,e.RGBA,e.FLOAT,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0);let o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(t),e.deleteFramebuffer(i),o}checkRenderFloat32(){if(2===this.version){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension)return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Download(){if(2===this.version){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension||!this.gl.getExtension("WEBGL_color_buffer_float"))return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Blend(){let e=this.gl,t,n,i,o,a;try{t=e.createTexture(),n=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,t);let s=2===this.version?e.RGBA32F:e.RGBA;return e.texImage2D(e.TEXTURE_2D,0,s,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),e.enable(e.BLEND),!!(i=e.createShader(e.VERTEX_SHADER))&&(e.shaderSource(i,"void main(){}"),e.compileShader(i),!!(o=e.createShader(e.FRAGMENT_SHADER)))&&(e.shaderSource(o,"precision highp float;void main(){gl_FragColor=vec4(0.5);}"),e.compileShader(o),!!(a=e.createProgram()))&&(e.attachShader(a,i),e.attachShader(a,o),e.linkProgram(a),e.useProgram(a),e.drawArrays(e.POINTS,0,1),e.getError()===e.NO_ERROR)}finally{e.disable(e.BLEND),a&&e.deleteProgram(a),i&&e.deleteShader(i),o&&e.deleteShader(o),n&&(e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(n)),t&&(e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(t))}}beginTimer(){if(2===this.version&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension,n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}throw Error("WebGL1 profiling currently not supported.")}endTimer(){if(2===this.version&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension;e.endQuery(t.TIME_ELAPSED_EXT);return}throw Error("WebGL1 profiling currently not supported")}isTimerResultAvailable(e){let t=!1,n=!1;if(2===this.version&&this.disjointTimerQueryWebgl2Extension){let i=this.gl,o=this.disjointTimerQueryWebgl2Extension;t=i.getQueryParameter(e,i.QUERY_RESULT_AVAILABLE),n=i.getParameter(o.GPU_DISJOINT_EXT)}else throw Error("WebGL1 profiling currently not supported");return t&&!n}getTimerResult(e){let t=0;if(2===this.version){let n=this.gl;t=n.getQueryParameter(e,n.QUERY_RESULT),n.deleteQuery(e)}else throw Error("WebGL1 profiling currently not supported");return t/1e6}async waitForQueryAndGetTime(e){return await Qa(()=>this.isTimerResultAvailable(e)),this.getTimerResult(e)}async createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n=e,i=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),t=null===i?()=>!0:()=>{let e=n.clientWaitSync(i,0,0);return e===n.ALREADY_SIGNALED||e===n.CONDITION_SATISFIED},{query:i,isFencePassed:t}}async pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=U_(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}async addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||await Qa(()=>(this.pollItems(),0===this.itemsToPoll.length))}}});function Os(e){let t;if((!e||"webgl2"===e)&&"webgl2"in vn?t=vn.webgl2:(!e||"webgl"===e)&&"webgl"in vn&&(t=vn.webgl),!t)try{let n=H_();t=ch(n,e)}catch{t=ch(W_(),e)}e=e||1===t.version?"webgl":"webgl2";let n=t.gl;return vn[e]=t,n.isContextLost()?(delete vn[e],Os(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),t)}function ch(e,t){let n,i={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1};if((!t||"webgl2"===t)&&(n=e.getContext("webgl2",i)))try{return new Un(n,2)}catch(e){Ne.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl2'. Error: ${e}`)}if((!t||"webgl"===t)&&(n=e.getContext("webgl",i)||e.getContext("experimental-webgl",i)))try{return new Un(n,1)}catch(e){Ne.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${e}`)}throw Error("WebGL is not supported")}function W_(){if(typeof document>"u")throw TypeError("failed to create canvas: document is not supported");let e=document.createElement("canvas");return e.width=1,e.height=1,e}function H_(){if(typeof OffscreenCanvas>"u")throw TypeError("failed to create offscreen canvas: OffscreenCanvas is not supported");return new OffscreenCanvas(1,1)}var vn,fh=C(()=>{kt(),lh(),vn={}}),li,dh=C(()=>{mt(),kt(),uh(),fh(),li=class{get contextId(){return ce.webgl.contextId}set contextId(e){ce.webgl.contextId=e}get matmulMaxBatchSize(){return ce.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(e){ce.webgl.matmulMaxBatchSize=e}get textureCacheMode(){return ce.webgl.textureCacheMode}set textureCacheMode(e){ce.webgl.textureCacheMode=e}get pack(){return ce.webgl.pack}set pack(e){ce.webgl.pack=e}get async(){return ce.webgl.async}set async(e){ce.webgl.async=e}initialize(){try{return this.glContext=Os(this.contextId),"number"!=typeof this.matmulMaxBatchSize&&(this.matmulMaxBatchSize=16),"string"!=typeof this.textureCacheMode&&(this.textureCacheMode="full"),"boolean"!=typeof this.pack&&(this.pack=!1),"boolean"!=typeof this.async&&(this.async=!1),Ne.setWithEnv(ce),ce.webgl.context||Object.defineProperty(ce.webgl,"context",{value:this.glContext.gl}),Ne.verbose("WebGLBackend",`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(e){return Ne.warning("WebGLBackend",`Unable to initialize WebGLBackend. ${e}`),!1}}createSessionHandler(e){return new ui(this,e)}dispose(){this.glContext.dispose()}}});async function Es(e){if(!e)return Es(["webgl"]);for(let t of"string"==typeof e?[e]:e){let e=ph.get(t);if(e)return e;let n=await j_(t);if(n)return n}throw Error("no available backend to use")}async function j_(e){let t=q_;if("u">typeof t[e]&&K_(t[e])){let n=t[e],i=n.initialize();if("object"==typeof i&&"then"in i&&(i=await i),i)return ph.set(e,n),n}}function K_(e){let t=e;return"initialize"in t&&"function"==typeof t.initialize&&"createSessionHandler"in t&&"function"==typeof t.createSessionHandler&&"dispose"in t&&"function"==typeof t.dispose}var ph,q_,mh=C(()=>{dh(),ph=new Map,q_={webgl:new li}}),Cs,ci,hh=C(()=>{kt(),Cs=class{constructor(e,t){this.op=e,this.node=t}},ci=class{constructor(e,t,n){this.graph=e,this.profiler=n,this.initialize(t)}initialize(e){this.profiler.event("session","ExecutionPlan.initialize",()=>{let t=this.graph.getNodes();if(t.length!==e.length)throw Error("The size of nodes and OPs do not match.");this._ops=e.map((e,n)=>new Cs(e,t[n])),this.reset(),this._starter=[],this._ops.forEach((e,t)=>{let n=!0;for(let t of e.node.inputs)if(!this._values[t]&&-1===this.graph.getInputIndices().indexOf(t)){n=!1;break}n&&this._starter.push(t)})})}reset(){this._values=this.graph.getValues().map(e=>e.tensor)}async execute(e,t){return this.profiler.event("session","ExecutionPlan.execute",async()=>{this.reset();let n=e.createInferenceHandler(),i=this.graph.getInputIndices();if(t.length!==i.length)throw Error(`number of input tensors don't match the number of inputs to the model: actual: ${t.length} expected: ${i.length}`);t.forEach((e,t)=>{let n=i[t];this._values[n]=e});let o=this._starter.slice(0),a=this.graph.getValues(),s=this.graph.getNodes(),u=0;for(;u<o.length;){let e=o[u++],t=this._ops[e],i=t.node.inputs.map(e=>this._values[e]);if(-1!==i.indexOf(void 0))throw Error(`unresolved input detected: op: ${t.node}`);let l=i;Ne.verbose("ExecPlan",`Running op:${t.node.name} (${l.map((e,n)=>`'${t.node.inputs[n]}': ${e.type}[${e.dims.join(",")}]`).join(", ")})`);let d=await this.profiler.event("node",t.node.name,async()=>t.op.impl(n,l,t.op.context));if(d.length!==t.node.outputs.length)throw Error("the size of output does not match model definition.");d.forEach((e,n)=>{let i=t.node.outputs[n];if(this._values[i])throw Error(`output [${i}] already has value: op:${t.node.name}`);this._values[i]=e});let p=new Set;d.forEach((e,n)=>{for(let e of a[t.node.outputs[n]].to){let t=s[e],n=!0;for(let e of t.inputs)if(!this._values[e]){n=!1;break}n&&p.add(e)}}),o.push(...p)}let l=[];for(let e=0;e<this.graph.getOutputIndices().length;e++){let t=this.graph.getOutputIndices()[e],n=this._values[t];if(void 0===n)throw Error(`required output [${t}] does not have value`);0===t?await n.getData():n.data,l.push(n)}return Ne.verbose("ExecPlan","disposing of inferenceHandler"),n.dispose(),l})}}}),Pe,Mt,Wn,gh=C(()=>{Cn(),Pe=ln(pn()),Wr(),ze(),Mt=ee.experimental.fbs,Wn=class e{constructor(t){if(this._attributes=new Map,null!=t){for(let n of t)n instanceof Pe.onnx.AttributeProto?this._attributes.set(n.name,[e.getValue(n),e.getType(n)]):n instanceof Mt.Attribute&&this._attributes.set(n.name(),[e.getValue(n),e.getType(n)]);if(this._attributes.size<t.length)throw Error("duplicated attribute names")}}set(e,t,n){this._attributes.set(e,[n,t])}delete(e){this._attributes.delete(e)}getFloat(e,t){return this.get(e,"float",t)}getInt(e,t){return this.get(e,"int",t)}getString(e,t){return this.get(e,"string",t)}getTensor(e,t){return this.get(e,"tensor",t)}getFloats(e,t){return this.get(e,"floats",t)}getInts(e,t){return this.get(e,"ints",t)}getStrings(e,t){return this.get(e,"strings",t)}getTensors(e,t){return this.get(e,"tensors",t)}get(e,t,n){let i=this._attributes.get(e);if(void 0===i){if(void 0!==n)return n;throw Error(`required attribute not found: ${e}`)}if(i[1]!==t)throw Error(`type mismatch: expected ${t} but got ${i[1]}`);return i[0]}static getType(e){let t=e instanceof Pe.onnx.AttributeProto?e.type:e.type();switch(t){case Pe.onnx.AttributeProto.AttributeType.FLOAT:return"float";case Pe.onnx.AttributeProto.AttributeType.INT:return"int";case Pe.onnx.AttributeProto.AttributeType.STRING:return"string";case Pe.onnx.AttributeProto.AttributeType.TENSOR:return"tensor";case Pe.onnx.AttributeProto.AttributeType.FLOATS:return"floats";case Pe.onnx.AttributeProto.AttributeType.INTS:return"ints";case Pe.onnx.AttributeProto.AttributeType.STRINGS:return"strings";case Pe.onnx.AttributeProto.AttributeType.TENSORS:return"tensors";default:throw Error(`attribute type is not supported yet: ${Pe.onnx.AttributeProto.AttributeType[t]}`)}}static getValue(e){let t=e instanceof Pe.onnx.AttributeProto?e.type:e.type();if(t===Pe.onnx.AttributeProto.AttributeType.GRAPH||t===Pe.onnx.AttributeProto.AttributeType.GRAPHS)throw Error("graph attribute is not supported yet");let n=this.getValueNoCheck(e);if(t===Pe.onnx.AttributeProto.AttributeType.INT&&_t.isLong(n))return _t.longToNumber(n);if(t===Pe.onnx.AttributeProto.AttributeType.INTS){let e=n,t=Array(e.length);for(let n=0;n<e.length;n++){let i=e[n];t[n]=_t.longToNumber(i)}return t}if(t===Pe.onnx.AttributeProto.AttributeType.TENSOR)return e instanceof Pe.onnx.AttributeProto?rt.fromProto(n):rt.fromOrtTensor(n);if(t===Pe.onnx.AttributeProto.AttributeType.TENSORS){if(e instanceof Pe.onnx.AttributeProto)return n.map(e=>rt.fromProto(e));if(e instanceof Mt.Attribute)return n.map(e=>rt.fromOrtTensor(e))}return t===Pe.onnx.AttributeProto.AttributeType.STRING&&e instanceof Pe.onnx.AttributeProto?Rn(n):t===Pe.onnx.AttributeProto.AttributeType.STRINGS&&e instanceof Pe.onnx.AttributeProto?n.map(Rn):n}static getValueNoCheck(e){return e instanceof Pe.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(e):this.getValueNoCheckFromOrtFormat(e)}static getValueNoCheckFromOnnxFormat(e){switch(e.type){case Pe.onnx.AttributeProto.AttributeType.FLOAT:return e.f;case Pe.onnx.AttributeProto.AttributeType.INT:return e.i;case Pe.onnx.AttributeProto.AttributeType.STRING:return e.s;case Pe.onnx.AttributeProto.AttributeType.TENSOR:return e.t;case Pe.onnx.AttributeProto.AttributeType.GRAPH:return e.g;case Pe.onnx.AttributeProto.AttributeType.FLOATS:return e.floats;case Pe.onnx.AttributeProto.AttributeType.INTS:return e.ints;case Pe.onnx.AttributeProto.AttributeType.STRINGS:return e.strings;case Pe.onnx.AttributeProto.AttributeType.TENSORS:return e.tensors;case Pe.onnx.AttributeProto.AttributeType.GRAPHS:return e.graphs;default:throw Error(`unsupported attribute type: ${Pe.onnx.AttributeProto.AttributeType[e.type]}`)}}static getValueNoCheckFromOrtFormat(e){switch(e.type()){case Mt.AttributeType.FLOAT:return e.f();case Mt.AttributeType.INT:return e.i();case Mt.AttributeType.STRING:return e.s();case Mt.AttributeType.TENSOR:return e.t();case Mt.AttributeType.GRAPH:return e.g();case Mt.AttributeType.FLOATS:return e.floatsArray();case Mt.AttributeType.INTS:{let t=[];for(let n=0;n<e.intsLength();n++)t.push(e.ints(n));return t}case Mt.AttributeType.STRINGS:{let t=[];for(let n=0;n<e.stringsLength();n++)t.push(e.strings(n));return t}case Mt.AttributeType.TENSORS:{let t=[];for(let n=0;n<e.tensorsLength();n++)t.push(e.tensors(n));return t}default:throw Error(`unsupported attribute type: ${Mt.AttributeType[e.type()]}`)}}}}),Ds,fi,Bs,nr,di,ks,bh=C(()=>{gh(),Cn(),Ds=ln(pn()),Wr(),ze(),fi=ee.experimental.fbs,Bs={from:(e,t)=>new ks(e,t)},nr=class{constructor(e){this._from=void 0,this._to=[],this.tensor=void 0,this.type=void 0,e&&(this.type=dt.tensorValueTypeFromProto(e.type.tensorType))}get from(){return this._from}get to(){return this._to}},di=class{constructor(e,t){e instanceof Ds.onnx.NodeProto?(this.name=e.name,this.opType=e.opType,this.attributes=new Wn(e.attribute)):e instanceof fi.Node&&(this.name=t??e.name(),this.opType=e.opType(),this.attributes=new Wn(dt.tensorAttributesFromORTFormat(e))),this.inputs=[],this.outputs=[],this.executeNode=!0}},ks=class{constructor(e,t){if(!e)throw TypeError("graph is empty");this.buildGraph(e),this.transformGraph(t),this.checkIsAcyclic()}getInputIndices(){return this._allInputIndices}getInputNames(){return this._allInputNames}getOutputIndices(){return this._allOutputIndices}getOutputNames(){return this._allOutputNames}getValues(){return this._allData}getNodes(){return this._nodes}buildGraph(e){if(e instanceof Ds.onnx.GraphProto)this.buildGraphFromOnnxFormat(e);else if(e instanceof fi.Graph)this.buildGraphFromOrtFormat(e);else throw TypeError("Graph type is not supported.")}buildGraphFromOnnxFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let n=new Map;if(!e.input)throw Error("missing information in graph: input");let i=[];for(let n of e.input){if(t.has(n.name))throw Error(`duplicated input name: ${n.name}`);let e=this._allData.push(new nr(n))-1;t.set(n.name,e),i.push(n.name)}if(!e.initializer)throw Error("missing information in graph: initializer");for(let n of e.initializer){let e=t.get(n.name);if(void 0===e){let i=new nr;i.type={shape:{dims:dt.tensorDimsFromProto(n.dims)},tensorType:dt.tensorDataTypeFromProto(n.dataType)},e=this._allData.push(i)-1,t.set(n.name,e)}this._allData[e]._from=-1,this._allData[e].tensor=rt.fromProto(n)}for(let e=0;e<this._allData.length;e++)this._allData[e].tensor||(this._allInputIndices.push(e),this._allInputNames.push(i[e]));if(!e.output)throw Error("missing information in graph: output");for(let n of e.output){if(t.has(n.name))throw Error(`duplicated output name: ${n.name}`);let e=this._allData.push(new nr(n))-1;t.set(n.name,e),this._allOutputIndices.push(e),this._allOutputNames.push(n.name)}if(!e.node)throw Error("missing information in graph: node");for(let t of e.node){if(!t.name)for(let e=0;;e++){let i=`unnamed_${t.opType}_${e}`;if(!n.has(i)){t.name=i;break}}if(n.has(t.name))throw Error(`duplicated node name: ${t.name}`);let e=this._nodes.push(new di(t))-1;n.set(t.name,e)}for(let n=0;n<this._nodes.length;n++){let i=this._nodes[n],o=e.node[n];if(!o.output)throw Error(`missing output for node: ${o.name}`);for(let e of o.output){let a=t.get(e);if(typeof a>"u"&&(a=this._allData.push(new nr)-1,t.set(e,a)),i.outputs.push(a),void 0!==this._allData[a]._from)throw Error(`multiple nodes output to one data value: ${a}`);if(this._allData[a]._from=n,"Constant"===o.opType){if(!o.attribute||1!==o.attribute.length||!o.attribute[0].t)throw Error("missing attributes or missing tensor value in attributes for this Constant operator");if(!o.output||1!==o.output.length)throw Error("missing output or incorrect number of outputs for this Constant operator");i.outputs.pop(),i.executeNode=!1,this._allData[a]._from=-1,this._allData[a].tensor=rt.fromProto(o.attribute[0].t)}}}for(let n=0;n<this._nodes.length;n++){let i=this._nodes[n],o=e.node[n];if(!o.input)throw Error(`missing input for node: ${o.name}`);for(let e of o.input){let a=t.get(e);if(typeof a>"u"){if(""===e&&(3===o.input.length||4===o.input.length)&&"Resize"===o.opType)continue;throw Error(`unrecognized input '${e}' for node: ${o.name}`)}i.inputs.push(a),this._allData[a]._to.push(n)}}return!0}buildGraphFromOrtFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let n=new Map,i=[];for(let n=0;n<e.inputsLength();n++){let o=e.inputs(n);if(t.has(o))throw Error(`duplicated input name: ${o}`);for(let n=0;n<e.nodeArgsLength();n++)if(e.nodeArgs(n)?.name()===o){let a=new nr;if(e.nodeArgs(n)?.type()?.valueType()!==fi.TypeInfoValue.tensor_type)throw Error("Unexpected value type for the nodeArg.");let s=e.nodeArgs(n).type().value(new fi.TensorTypeAndShape),u=dt.tensorDataTypeFromProto(s.elemType()),l=s.shape(),d=[];for(let e=0;e<l.dimLength();e++)d.push(_t.longToNumber(l.dim(e).value().dimValue()));a.type={shape:{dims:d},tensorType:u};let p=this._allData.push(a)-1;t.set(o,p),i.push(o)}}for(let n=0;n<e.initializersLength();n++){let i=e.initializers(n),o=t.get(i.name());if(void 0===o){let e=new nr,n=dt.tensorDimsFromORTFormat(i),a=dt.tensorDataTypeFromProto(i.dataType());e.type={shape:{dims:n},tensorType:a},o=this._allData.push(e)-1,t.set(i.name(),o)}this._allData[o]._from=-1,this._allData[o].tensor=rt.fromOrtTensor(i)}for(let e=0;e<this._allData.length;e++)this._allData[e].tensor||(this._allInputIndices.push(e),this._allInputNames.push(i[e]));for(let n=0;n<e.outputsLength();n++){let i=e.outputs(n);if(t.has(i))throw Error(`duplicated output name: ${i}`);let o=this._allData.push(new nr)-1;t.set(i,o),this._allOutputIndices.push(o),this._allOutputNames.push(i)}if(!e.nodes)throw Error("missing information in graph: node");for(let t=0;t<e.nodesLength();t++){let i=e.nodes(t),o=i.name();if(!o)for(let e=0;o=`unnamed_${i.opType()}_${e}`,n.has(o);e++);if(n.has(o))throw Error(`duplicated node name: ${o}`);let a=this._nodes.push(new di(i,o))-1;n.set(o,a)}for(let n=0;n<this._nodes.length;n++){let i=this._nodes[n],o=e.nodes(n);if(null==o)throw Error(`No node exists at index ${n}`);if(o?.outputsLength()===0)throw Error(`missing output for node: ${o.name}`);for(let e=0;e<o?.outputsLength();e++){let a=o?.outputs(e),s=t.get(a);if(typeof s>"u"&&(s=this._allData.push(new nr)-1,t.set(a,s)),i.outputs.push(s),void 0!==this._allData[s]._from)throw Error(`multiple nodes output to one data value: ${s}`);if(this._allData[s]._from=n,"Constant"===o.opType()){if(1!==o.attributesLength()||!o.attributes(0).t())throw Error("missing attributes or missing tensor value in attributes for this Constant operator");if(1!==o.outputsLength())throw Error("missing output or incorrect number of outputs for this Constant operator");i.outputs.pop(),i.executeNode=!1,this._allData[s]._from=-1,this._allData[s].tensor=rt.fromOrtTensor(o.attributes(0).t())}}}for(let n=0;n<this._nodes.length;n++){let i=this._nodes[n],o=e.nodes(n);if(0===o.inputsLength())throw Error(`missing input for node: ${o.name}`);for(let e=0;e<o.inputsLength();e++){let a=o.inputs(e),s=t.get(a);if(typeof s>"u")throw Error(`unrecognized input '${a}' for node: ${o.name()}`);i.inputs.push(s),this._allData[s]._to.push(n)}}}checkIsAcyclic(){let e=new Set;this._allInputIndices.forEach(t=>{this._allData[t]._to.forEach(t=>{e.add(t)})});let t=Array.from(e),n=Array(this._nodes.length).fill("white");for(;t.length>0;){let e=t.pop();"gray"===n[e]?n[e]="black":(t.push(e),n[e]="gray",this._nodes[e].outputs.forEach(i=>{let o=this._allData[i];if("u">typeof o.tensor)throw Error("node outputs should not be initialized");if(o._from!==e)throw Error("from property of the Value object doesn't match index of Node being processed");o._to.forEach(e=>{if("gray"===n[e])throw Error("model graph is cyclic");"white"===n[e]&&t.push(e)})}))}}transformGraph(e){this.removeAllIdentityNodes(),this.removeAllDropoutNodes(),this.fuseConvActivationNodes(),e&&e.transformGraph(this),this.finalizeGraph()}finalizeGraph(){let e=0,t=[this._nodes.length,0],n=0;for(let e=0;e<this._nodes.length;e++)t[e]=n,this._nodes[e].executeNode?(n!==e&&(this._nodes[n]=this._nodes[e]),n++):this._nodes[e].outputs.forEach(e=>{this._allData[e]._from=-2});this._nodes.splice(n,this._nodes.length-n);for(let e=0;e<this._allData.length;e++){let n=this._allData[e];void 0!==n._from&&-1!==n._from&&-2!==n._from&&(n._from=t[n._from]);for(let e=0;e<n._to.length;e++)if(n._to[e]>=0)n._to[e]=t[n._to[e]];else throw Error("Trying to update a removed node")}e=0;for(let t=0;t<this._allData.length;t++){if(-2===this._allData[t].from&&-1===this._allOutputIndices.indexOf(t+e)){e++,this._allData.splice(t,1),t--;continue}if(e>0){let n=-1;void 0!==this._allData[t].from&&-1!==this._allData[t].from?-1!==(n=this._nodes[this._allData[t].from].outputs.indexOf(t+e))&&(this._nodes[this._allData[t].from].outputs[n]=t):-1!==(n=this._allInputIndices.indexOf(t+e))&&(this._allInputIndices[n]=t),this._allData[t].to.forEach(i=>{-1!==(n=this._nodes[i].inputs.indexOf(t+e))&&(this._nodes[i].inputs[n]=t)}),0===this._allData[t].to.length&&-1!==(n=this._allOutputIndices.indexOf(t+e))&&(this._allOutputIndices[n]=t)}}}deleteNode(e){let t=this._nodes[e];if(t.outputs.length>1){for(let e=1;e<t.outputs.length;e++)if(this._allData[t.outputs[e]].to.length>0)throw Error("Node deletion with more than one output connected to other nodes is not supported. ")}t.executeNode=!1;let n=t.inputs[0],i=t.outputs[0],o=this._allData[i].to;for(let n=0;n<t.inputs.length;n++){let i=this._allData[t.inputs[n]].to.indexOf(e);if(-1===i)throw Error("The Value object doesn't have the current Node in it's 'to' property ");this._allData[t.inputs[n]].to.splice(i,1)}this._allData[i]._to=[];let a=this._allOutputIndices.indexOf(i);if(-1!==a&&(this._allOutputIndices[a]=n),o&&o.length>0)for(let e of o){let t=this._nodes[e].inputs.indexOf(i);if(-1===t)throw Error("The Node object doesn't have the output Value in it's 'inputs' property ");this._nodes[e].inputs[t]=n,this._allData[n].to.push(e)}}removeAllDropoutNodes(){let e=0;for(let t of this._nodes){if("Dropout"===t.opType){if(1!==t.inputs.length)throw Error("Dropout nodes should only contain one input. ");if(1!==t.outputs.length&&2!==t.outputs.length)throw Error("Dropout nodes should contain either 1 or 2 output(s)");if(2===t.outputs.length&&0!==this._allData[t.outputs[1]]._to.length)throw Error("Dropout nodes's second output should not be referenced by other nodes");this.deleteNode(e)}e++}}removeAllIdentityNodes(){let e=0;for(let t of this._nodes)"Identity"===t.opType&&this.deleteNode(e),e++}isActivation(e){switch(e.opType){case"Relu":case"Sigmoid":case"Clip":return!0;default:return!1}}fuseConvActivationNodes(){for(let e of this._nodes)if("Conv"===e.opType){let t=this._allData[e.outputs[0]]._to;if(1===t.length&&this.isActivation(this._nodes[t[0]])){let n=this._nodes[t[0]];if("Clip"===n.opType){if(1===n.inputs.length)try{e.attributes.set("activation_params","floats",[n.attributes.getFloat("min"),n.attributes.getFloat("max")])}catch{e.attributes.set("activation_params","floats",[Gr,Ur])}else{if(!(n.inputs.length>=3)||void 0===this._allData[n.inputs[1]].tensor||void 0===this._allData[n.inputs[2]].tensor)continue;e.attributes.set("activation_params","floats",[this._allData[n.inputs[1]].tensor.floatData[0],this._allData[n.inputs[2]].tensor.floatData[0]])}}e.attributes.set("activation","string",n.opType),this.deleteNode(t[0])}}}}}),yh,X_,pi,xh=C(()=>{Do(),bh(),Cn(),yh=ln(pn()),ze(),X_=ee.experimental.fbs,pi=class{constructor(){}load(e,t,n){let i;if(!n)try{this.loadFromOnnxFormat(e,t);return}catch(e){if(void 0!==n)throw e;i=e}try{this.loadFromOrtFormat(e,t)}catch(e){throw void 0!==n?e:Error(`Failed to load model as ONNX format: ${i}
as ORT format: ${e}`)}}loadFromOnnxFormat(e,t){let n=yh.onnx.ModelProto.decode(e);if(3>_t.longToNumber(n.irVersion))throw Error("only support ONNX model with IR_VERSION>=3");this._opsets=n.opsetImport.map(e=>({domain:e.domain,version:_t.longToNumber(e.version)})),this._graph=Bs.from(n.graph,t)}loadFromOrtFormat(e,t){let n=new D.ByteBuffer(e),i=X_.InferenceSession.getRootAsInferenceSession(n).model();if(3>_t.longToNumber(i.irVersion()))throw Error("only support ONNX model with IR_VERSION>=3");this._opsets=[];for(let e=0;e<i.opsetImportLength();e++){let t=i.opsetImport(e);this._opsets.push({domain:t?.domain(),version:_t.longToNumber(t.version())})}this._graph=Bs.from(i.graph(),t)}get graph(){return this._graph}get opsets(){return this._opsets}}}),mi,wh=C(()=>{mh(),hh(),kt(),xh(),mi=class{constructor(e={}){this._initialized=!1,this.backendHint=e.backendHint,this.profiler=Co.create(e.profiler),this.context={profiler:this.profiler,graphInputTypes:[],graphInputDims:[]}}get inputNames(){return this._model.graph.getInputNames()}get outputNames(){return this._model.graph.getOutputNames()}startProfiling(){this.profiler.start()}endProfiling(){this.profiler.stop()}async loadModel(e,t,n){await this.profiler.event("session","Session.loadModel",async()=>{let i=await Es(this.backendHint);if(this.sessionHandler=i.createSessionHandler(this.context),this._model=new pi,"string"==typeof e){let t=e.endsWith(".ort");{let n=await (await fetch(e)).arrayBuffer();this.initialize(new Uint8Array(n),t)}}else if(ArrayBuffer.isView(e))this.initialize(e);else{let i=new Uint8Array(e,t||0,n||e.byteLength);this.initialize(i)}})}initialize(e,t){if(this._initialized)throw Error("already initialized");this.profiler.event("session","Session.initialize",()=>{let n=this.sessionHandler.transformGraph?this.sessionHandler:void 0;this._model.load(e,n,t),this.sessionHandler.onGraphInitialized&&this.sessionHandler.onGraphInitialized(this._model.graph),this.initializeOps(this._model.graph),this._executionPlan=new ci(this._model.graph,this._ops,this.profiler)}),this._initialized=!0}async run(e){if(!this._initialized)throw Error("session not initialized yet");return this.profiler.event("session","Session.run",async()=>{let t=this.normalizeAndValidateInputs(e),n=await this._executionPlan.execute(this.sessionHandler,t);return this.createOutput(n)})}normalizeAndValidateInputs(e){let t=this._model.graph.getInputNames();if(Array.isArray(e)){if(e.length!==t.length)throw Error(`incorrect input array length: expected ${t.length} but got ${e.length}`)}else{if(e.size!==t.length)throw Error(`incorrect input map size: expected ${t.length} but got ${e.size}`);let n=Array(e.size),i=0;for(let o=0;o<t.length;++o){let a=e.get(t[o]);if(!a)throw Error(`missing input tensor for: '${name}'`);n[i++]=a}e=n}if(this.context.graphInputTypes&&0!==this.context.graphInputTypes.length&&this.context.graphInputDims&&0!==this.context.graphInputDims.length)this.validateInputTensorDims(this.context.graphInputDims,e,!1);else{let t=this._model.graph.getInputIndices(),n=this._model.graph.getValues(),i=Array(t.length);for(let o=0;o<t.length;++o){let a=n[t[o]];i[o]=a.type.shape.dims,this.context.graphInputTypes.push(a.type.tensorType),this.context.graphInputDims.push(e[o].dims)}this.validateInputTensorDims(i,e,!0)}return this.validateInputTensorTypes(this.context.graphInputTypes,e),e}validateInputTensorTypes(e,t){for(let n=0;n<t.length;n++){let i=e[n],o=t[n].type;if(i!==o)throw Error(`input tensor[${n}] check failed: expected type '${i}' but got ${o}`)}}validateInputTensorDims(e,t,n){for(let i=0;i<t.length;i++){let o=e[i],a=t[i].dims;if(!this.compareTensorDims(o,a,n))throw Error(`input tensor[${i}] check failed: expected shape '[${o.join(",")}]' but got [${a.join(",")}]`)}}compareTensorDims(e,t,n){if(e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i]&&(!n||0!==e[i]))return!1;return!0}createOutput(e){let t=this._model.graph.getOutputNames();if(e.length!==t.length)throw Error("expected number of outputs do not match number of generated outputs");let n=new Map;for(let i=0;i<t.length;++i)n.set(t[i],e[i]);return n}initializeOps(e){let t=e.getNodes();this._ops=Array(t.length);for(let n=0;n<t.length;n++)this._ops[n]=this.sessionHandler.resolve(t[n],this._model.opsets,e)}}}),hi,vh=C(()=>{mt(),Wr(),hi=class{constructor(e){this.session=e,this.inputNames=this.session.inputNames,this.outputNames=this.session.outputNames}async dispose(){}async run(e,t,n){let i=new Map;for(let t in e)if(Object.hasOwnProperty.call(e,t)){let n=e[t];i.set(t,new rt(n.dims,n.type,void 0,void 0,n.data))}let o=await this.session.run(i),a={};return o.forEach((e,t)=>{a[t]=new nt(e.type,e.data,e.dims)}),a}startProfiling(){this.session.startProfiling()}endProfiling(){this.session.endProfiling()}}}),Th={};un(Th,{onnxjsBackend:()=>Z_});var Z_,_h=C(()=>{wh(),vh(),Z_=new class{async init(){}async createInferenceSessionHandler(e,t){let n=new mi(t);return await n.loadModel(e),new hi(n)}}}),gi=C(()=>{}),$h={};un($h,{default:()=>Y_});var Ih,Sh,Y_,Ah=C(()=>{Rs(),Pr(),Hn(),Ih="ort-wasm-proxy-worker",(Sh=globalThis.self?.name===Ih)&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case"init-wasm":bi(n.wasm).then(()=>{yi(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case"init-ep":{let{epName:e,env:i}=n;xi(i,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case"copy-from":{let{buffer:e}=n,i=qn(e);postMessage({type:t,out:i});break}case"create":{let{model:e,options:i}=n;wi(e,i).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case"release":vi(n),postMessage({type:t});break;case"run":{let{sessionId:e,inputIndices:i,inputs:o,outputIndices:a,options:s}=n;Ti(e,i,o,a,Array(a.length).fill(null),s).then(e=>{e.some(e=>"cpu"!==e[3])?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:e},Ii([...o,...e]))},e=>{postMessage({type:t,err:e})});break}case"end-profiling":_i(n),postMessage({type:t})}}catch(e){postMessage({type:t,err:e})}}),Y_=Sh?null:e=>new Worker(e??Tn,{type:"module",name:Ih})}),Oh={};un(Oh,{default:()=>J_});var zs,Ph,J_,Eh=C(()=>{zs="file:///Users/yukimasa.funaoka/works/kaeru-web-image-classification/node_modules/onnxruntime-web/dist/ort.all.bundle.min.mjs",J_=Ph=async function(e={}){function t(){return D.buffer!=N.buffer&&H(),N}function n(){return D.buffer!=N.buffer&&H(),R}function i(){return D.buffer!=N.buffer&&H(),B}function o(){return D.buffer!=N.buffer&&H(),F}function a(){return D.buffer!=N.buffer&&H(),M}function s(){return D.buffer!=N.buffer&&H(),L}function u(){return D.buffer!=N.buffer&&H(),j}function l(){return D.buffer!=N.buffer&&H(),q}var d,p,c=Object.assign({},e),h=new Promise((e,t)=>{d=e,p=t}),f="object"==typeof window,m="function"==typeof importScripts,g=m&&"em-pthread"==self.name;c.mountExternalData=(e,t)=>{e.startsWith("./")&&(e=e.substring(2)),(c.Fb||(c.Fb=new Map)).set(e,t)},c.unmountExternalData=()=>{delete c.Fb};var y=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let b=()=>{let e=(e,t,n)=>(...i)=>{let o=tB,a=t?.();i=e(...i);let s=t?.();return a!==s&&(e=s,n(a),t=n=null),tB!=o?new Promise((e,t)=>{tU={resolve:e,reject:t}}):i},t=e=>async(...t)=>{try{if(c.Eb)throw Error("Session already started");let n=c.Eb={fc:t[0],errors:[]},i=await e(...t);if(c.Eb!==n)throw Error("Session mismatch");c.Gb?.flush();let o=n.errors;if(0<o.length){let e=await Promise.all(o);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{c.Eb=null}};c._OrtCreateSession=e(c._OrtCreateSession,()=>c._OrtCreateSession,e=>c._OrtCreateSession=e),c._OrtRun=t(e(c._OrtRun,()=>c._OrtRun,e=>c._OrtRun=e)),c._OrtRunWithBinding=t(e(c._OrtRunWithBinding,()=>c._OrtRunWithBinding,e=>c._OrtRunWithBinding=e)),c._OrtBindInput=e(c._OrtBindInput,()=>c._OrtBindInput,e=>c._OrtBindInput=e),b=void 0};c.jsepInit=(e,t)=>{if(b?.(),"webgpu"===e){[c.Gb,c.Ub,c.Yb,c.Nb,c.Xb,c.jb,c.Zb,c.bc,c.Vb,c.Wb,c.$b]=t;let e=c.Gb;c.jsepRegisterBuffer=(t,n,i,o)=>e.registerBuffer(t,n,i,o),c.jsepGetBuffer=t=>e.getBuffer(t),c.jsepCreateDownloader=(t,n,i)=>e.createDownloader(t,n,i),c.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},c.jsepOnRunStart=t=>e.onRunStart(t),c.cc=(t,n)=>{e.upload(t,n)}}else if("webnn"===e){[c.Gb,c.ac,c.Ob,c.jsepEnsureTensor,c.dc,c.jsepDownloadTensor]=t,c.jsepReleaseTensorId=c.Ob;let e=c.Gb;c.jsepOnRunStart=t=>e.onRunStart(t),c.jsepRegisterMLContext=(t,n)=>{e.registerMLContext(t,n)},c.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},c.jsepCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),c.jsepRegisterMLTensor=(t,n,i)=>e.registerMLTensor(t,n,i)}};var _,v,x=Object.assign({},c),w="./this.program",$=(e,t)=>{throw t},T="";(f||m)&&(m?T=self.location.href:"u">typeof document&&document.currentScript&&(T=document.currentScript.src),zs&&(T=zs),T=T.startsWith("blob:")?"":T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1),m&&(v=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),_=(e,t,n)=>{var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=()=>{200==i.status||0==i.status&&i.response?t(i.response):n()},i.onerror=n,i.send(null)});var S,I=console.log.bind(console),E=console.error.bind(console),O=I,A=E;if(Object.assign(c,x),x=null,g){let e=function(t){try{var n=t.data,i=n.cmd;if("load"===i){let t=[];for(let i of(self.onmessage=e=>t.push(e),self.startWorker=()=>{for(let n of(postMessage({cmd:"loaded"}),t))e(n);self.onmessage=e},n.handlers))c[i]&&!c[i].proxy||(c[i]=(...e)=>{postMessage({Mb:"callHandler",oc:i,args:e})},"print"==i&&(O=c[i]),"printErr"==i&&(A=c[i]));D=n.wasmMemory,H(),k(n.wasmModule)}else if("run"===i){r2(n.pthread_ptr,0,0,1,0,0),tS(n.pthread_ptr),eE(),e$(),P||(rY(),P=!0);try{eO(n.start_routine,n.arg)}catch(e){if("unwind"!=e)throw e}}else"cancel"===i?rQ()&&r8(-1):"setimmediate"!==n.target&&("checkMailbox"===i?P&&tI():i&&(A(`worker: received unknown command ${i}`),A(n)))}catch(e){throw r3(),e}};var k,P=!1;A=function(...e){console.error(e=e.join(" "))},self.alert=function(...e){postMessage({Mb:"alert",text:e.join(" "),qc:rQ()})},c.instantiateWasm=(e,t)=>new Promise(e=>{k=n=>{t(n=new WebAssembly.Instance(n,ea())),e()}}),self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}c.wasmBinary&&(S=c.wasmBinary);var D,C,z,N,R,B,F,M,L,j,V,U,q,G=!1;function H(){var e=D.buffer;c.HEAP8=N=new Int8Array(e),c.HEAP16=B=new Int16Array(e),c.HEAPU8=R=new Uint8Array(e),c.HEAPU16=F=new Uint16Array(e),c.HEAP32=M=new Int32Array(e),c.HEAPU32=L=new Uint32Array(e),c.HEAPF32=j=new Float32Array(e),c.HEAPF64=q=new Float64Array(e),c.HEAP64=V=new BigInt64Array(e),c.HEAPU64=U=new BigUint64Array(e)}if(!g){if(!((D=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof y))throw A("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");H()}var W=[],K=[],X=[],Z=0,Y=null,J=null;function Q(){if(0==--Z&&(null!==Y&&(clearInterval(Y),Y=null),J)){var e=J;J=null,e()}}function ee(e){throw A(e="Aborted("+e+")"),G=!0,z=1,e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info."),p(e),e}var et,er=e=>e.startsWith("data:application/octet-stream;base64,"),en=e=>e.startsWith("file://");function ei(e){if(e==et&&S)return new Uint8Array(S);if(v)return v(e);throw"both async and sync fetching of the wasm failed"}function eo(e,t,n){return(function(e){if(!S&&(f||m)){if("function"==typeof fetch&&!en(e))return fetch(e,{credentials:"same-origin"}).then(t=>{if(!t.ok)throw`failed to load wasm binary file at '${e}'`;return t.arrayBuffer()}).catch(()=>ei(e));if(_)return new Promise((t,n)=>{_(e,e=>t(new Uint8Array(e)),n)})}return Promise.resolve().then(()=>ei(e))})(e).then(e=>WebAssembly.instantiate(e,t)).then(n,e=>{A(`failed to asynchronously prepare wasm: ${e}`),ee(e)})}function ea(){return{a:{O:el,Aa:eu,b:ek,aa:eD,B:eR,qa:eB,Y:ej,_:eV,ra:eU,oa:eq,ha:eG,na:eH,L:eW,Z:eK,W:eX,pa:eZ,X:eY,wa:e0,F:e5,Q:e9,P:ts,E:tl,u:td,q:tp,G:tc,A:tv,R:tx,ua:tw,ka:t$,U:tE,ba:tA,H:tk,ja:tS,ta:tP,t:tz,x:tH,o:tK,l:tY,c:tr,n:tQ,j:t3,w:t4,p:t6,g:t8,s:t5,m:t7,e:t9,k:re,i:rt,h:rr,d:rn,ea:ri,fa:ru,ga:rl,ca:rd,da:rp,T:rc,f:rm,D:rg,I:ry,M:rb,y:r_,sa:rx,V:rw,v:rv,z:r$,N:rT,S:rS,za:rA,ya:rk,la:rz,ma:rN,$:ey,C:rR,K:rB,ia:rF,J:rL,a:D,xa:em,va:rq,r:rG}}}var es={868340:(e,t,i,o,a)=>{if(void 0===c||!c.Fb)return 1;if((e=eN(e>>>0)).startsWith("./")&&(e=e.substring(2)),!(e=c.Fb.get(e)))return 2;if(o>>>=0,(t>>>=0)+(i>>>=0)>e.byteLength)return 3;try{let s=e.subarray(t,t+i);switch(a){case 0:n().set(s,o>>>0);break;case 1:c.cc(o,s);break;default:return 4}return 0}catch{return 4}},869023:(e,t,i)=>{c.dc(e,n().subarray(t>>>0,t+i>>>0))},869086:()=>c.ac(),869127:e=>{c.Ob(e)},869163:()=>{c.Vb()},869194:()=>{c.Wb()},869223:()=>{c.$b()},869248:e=>c.Ub(e),869281:e=>c.Yb(e),869313:(e,t,n)=>{c.Nb(e,t,n,!0)},869352:(e,t,n)=>{c.Nb(e,t,n)},869385:()=>"u">typeof wasmOffsetConverter,869442:e=>{c.jb("Abs",e,void 0)},869493:e=>{c.jb("Neg",e,void 0)},869544:e=>{c.jb("Floor",e,void 0)},869597:e=>{c.jb("Ceil",e,void 0)},869649:e=>{c.jb("Reciprocal",e,void 0)},869707:e=>{c.jb("Sqrt",e,void 0)},869759:e=>{c.jb("Exp",e,void 0)},869810:e=>{c.jb("Erf",e,void 0)},869861:e=>{c.jb("Sigmoid",e,void 0)},869916:(e,t,n)=>{c.jb("HardSigmoid",e,{alpha:t,beta:n})},869995:e=>{c.jb("Log",e,void 0)},870046:e=>{c.jb("Sin",e,void 0)},870097:e=>{c.jb("Cos",e,void 0)},870148:e=>{c.jb("Tan",e,void 0)},870199:e=>{c.jb("Asin",e,void 0)},870251:e=>{c.jb("Acos",e,void 0)},870303:e=>{c.jb("Atan",e,void 0)},870355:e=>{c.jb("Sinh",e,void 0)},870407:e=>{c.jb("Cosh",e,void 0)},870459:e=>{c.jb("Asinh",e,void 0)},870512:e=>{c.jb("Acosh",e,void 0)},870565:e=>{c.jb("Atanh",e,void 0)},870618:e=>{c.jb("Tanh",e,void 0)},870670:e=>{c.jb("Not",e,void 0)},870721:(e,t,n)=>{c.jb("Clip",e,{min:t,max:n})},870790:e=>{c.jb("Clip",e,void 0)},870842:(e,t)=>{c.jb("Elu",e,{alpha:t})},870900:e=>{c.jb("Gelu",e,void 0)},870952:e=>{c.jb("Relu",e,void 0)},871004:(e,t)=>{c.jb("LeakyRelu",e,{alpha:t})},871068:(e,t)=>{c.jb("ThresholdedRelu",e,{alpha:t})},871138:(e,t)=>{c.jb("Cast",e,{to:t})},871196:e=>{c.jb("Add",e,void 0)},871247:e=>{c.jb("Sub",e,void 0)},871298:e=>{c.jb("Mul",e,void 0)},871349:e=>{c.jb("Div",e,void 0)},871400:e=>{c.jb("Pow",e,void 0)},871451:e=>{c.jb("Equal",e,void 0)},871504:e=>{c.jb("Greater",e,void 0)},871559:e=>{c.jb("GreaterOrEqual",e,void 0)},871621:e=>{c.jb("Less",e,void 0)},871673:e=>{c.jb("LessOrEqual",e,void 0)},871732:(e,t,n,i,o)=>{c.jb("ReduceMean",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},871891:(e,t,n,i,o)=>{c.jb("ReduceMax",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},872049:(e,t,n,i,o)=>{c.jb("ReduceMin",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},872207:(e,t,n,i,o)=>{c.jb("ReduceProd",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},872366:(e,t,n,i,o)=>{c.jb("ReduceSum",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},872524:(e,t,n,i,o)=>{c.jb("ReduceL1",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},872681:(e,t,n,i,o)=>{c.jb("ReduceL2",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},872838:(e,t,n,i,o)=>{c.jb("ReduceLogSum",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},872999:(e,t,n,i,o)=>{c.jb("ReduceSumSquare",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},873163:(e,t,n,i,o)=>{c.jb("ReduceLogSumExp",e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},873327:e=>{c.jb("Where",e,void 0)},873380:(e,t,n)=>{c.jb("Transpose",e,{perm:t?Array.from(a().subarray(t>>>0,n>>>0)):[]})},873488:(e,t,n,i)=>{c.jb("DepthToSpace",e,{blocksize:t,mode:eN(n),format:i?"NHWC":"NCHW"})},873621:(e,t,n,i)=>{c.jb("DepthToSpace",e,{blocksize:t,mode:eN(n),format:i?"NHWC":"NCHW"})},873754:(e,n,i,o,s,u,l,d,p,h,f,m,g,y,b)=>{c.jb("ConvTranspose",e,{format:p?"NHWC":"NCHW",autoPad:n,dilations:[i],group:o,kernelShape:[s],pads:[u,l],strides:[d],wIsConst:()=>!!t()[h>>>0],outputPadding:f?Array.from(a().subarray(f>>>0,m>>>0)):[],outputShape:g?Array.from(a().subarray(g>>>0,y>>>0)):[],activation:eN(b)})},874155:(e,n,i,o,s,u,l,d,p,h,f,m,g,y)=>{c.jb("ConvTranspose",e,{format:d?"NHWC":"NCHW",autoPad:n,dilations:Array.from(a().subarray(i>>>0,2+(i>>>0)>>>0)),group:o,kernelShape:Array.from(a().subarray(s>>>0,2+(s>>>0)>>>0)),pads:Array.from(a().subarray(u>>>0,4+(u>>>0)>>>0)),strides:Array.from(a().subarray(l>>>0,2+(l>>>0)>>>0)),wIsConst:()=>!!t()[p>>>0],outputPadding:h?Array.from(a().subarray(h>>>0,f>>>0)):[],outputShape:m?Array.from(a().subarray(m>>>0,g>>>0)):[],activation:eN(y)})},874720:(e,n,i,o,s,u,l,d,p,h,f,m,g,y,b)=>{c.jb("ConvTranspose",e,{format:p?"NHWC":"NCHW",autoPad:n,dilations:[i],group:o,kernelShape:[s],pads:[u,l],strides:[d],wIsConst:()=>!!t()[h>>>0],outputPadding:f?Array.from(a().subarray(f>>>0,m>>>0)):[],outputShape:g?Array.from(a().subarray(g>>>0,y>>>0)):[],activation:eN(b)})},875121:(e,n,i,o,s,u,l,d,p,h,f,m,g,y)=>{c.jb("ConvTranspose",e,{format:d?"NHWC":"NCHW",autoPad:n,dilations:Array.from(a().subarray(i>>>0,2+(i>>>0)>>>0)),group:o,kernelShape:Array.from(a().subarray(s>>>0,2+(s>>>0)>>>0)),pads:Array.from(a().subarray(u>>>0,4+(u>>>0)>>>0)),strides:Array.from(a().subarray(l>>>0,2+(l>>>0)>>>0)),wIsConst:()=>!!t()[p>>>0],outputPadding:h?Array.from(a().subarray(h>>>0,f>>>0)):[],outputShape:m?Array.from(a().subarray(m>>>0,g>>>0)):[],activation:eN(y)})},875686:(e,t)=>{c.jb("GlobalAveragePool",e,{format:t?"NHWC":"NCHW"})},875777:(e,t,n,i,o,s,u,l,d,p,h,f,m,g)=>{c.jb("AveragePool",e,{format:g?"NHWC":"NCHW",auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:o,dilations:s?Array.from(a().subarray(s>>>0,u>>>0)):[],kernel_shape:l?Array.from(a().subarray(l>>>0,d>>>0)):[],pads:p?Array.from(a().subarray(p>>>0,h>>>0)):[],strides:f?Array.from(a().subarray(f>>>0,m>>>0)):[]})},876192:(e,t)=>{c.jb("GlobalAveragePool",e,{format:t?"NHWC":"NCHW"})},876283:(e,t,n,i,o,s,u,l,d,p,h,f,m,g)=>{c.jb("AveragePool",e,{format:g?"NHWC":"NCHW",auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:o,dilations:s?Array.from(a().subarray(s>>>0,u>>>0)):[],kernel_shape:l?Array.from(a().subarray(l>>>0,d>>>0)):[],pads:p?Array.from(a().subarray(p>>>0,h>>>0)):[],strides:f?Array.from(a().subarray(f>>>0,m>>>0)):[]})},876698:(e,t)=>{c.jb("GlobalMaxPool",e,{format:t?"NHWC":"NCHW"})},876785:(e,t,n,i,o,s,u,l,d,p,h,f,m,g)=>{c.jb("MaxPool",e,{format:g?"NHWC":"NCHW",auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:o,dilations:s?Array.from(a().subarray(s>>>0,u>>>0)):[],kernel_shape:l?Array.from(a().subarray(l>>>0,d>>>0)):[],pads:p?Array.from(a().subarray(p>>>0,h>>>0)):[],strides:f?Array.from(a().subarray(f>>>0,m>>>0)):[]})},877196:(e,t)=>{c.jb("GlobalMaxPool",e,{format:t?"NHWC":"NCHW"})},877283:(e,t,n,i,o,s,u,l,d,p,h,f,m,g)=>{c.jb("MaxPool",e,{format:g?"NHWC":"NCHW",auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:o,dilations:s?Array.from(a().subarray(s>>>0,u>>>0)):[],kernel_shape:l?Array.from(a().subarray(l>>>0,d>>>0)):[],pads:p?Array.from(a().subarray(p>>>0,h>>>0)):[],strides:f?Array.from(a().subarray(f>>>0,m>>>0)):[]})},877694:(e,t,n,i,o)=>{c.jb("Gemm",e,{alpha:t,beta:n,transA:i,transB:o})},877798:e=>{c.jb("MatMul",e,void 0)},877852:(e,t,n,i)=>{c.jb("ArgMax",e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},877960:(e,t,n,i)=>{c.jb("ArgMin",e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},878068:(e,t)=>{c.jb("Softmax",e,{axis:t})},878131:(e,t)=>{c.jb("Concat",e,{axis:t})},878191:(e,t,n,i,o)=>{c.jb("Split",e,{axis:t,numOutputs:n,splitSizes:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},878331:e=>{c.jb("Expand",e,void 0)},878385:(e,t)=>{c.jb("Gather",e,{axis:Number(t)})},878456:(e,t)=>{c.jb("GatherElements",e,{axis:Number(t)})},878535:(e,t,n,i,o,s,u,l,d,p,h)=>{c.jb("Resize",e,{antialias:t,axes:n?Array.from(a().subarray(n>>>0,i>>>0)):[],coordinateTransformMode:eN(o),cubicCoeffA:s,excludeOutside:u,extrapolationValue:l,keepAspectRatioPolicy:eN(d),mode:eN(p),nearestMode:eN(h)})},878881:(e,t,n,i,o,s,u)=>{c.jb("Slice",e,{starts:t?Array.from(a().subarray(t>>>0,n>>>0)):[],ends:i?Array.from(a().subarray(i>>>0,o>>>0)):[],axes:s?Array.from(a().subarray(s>>>0,u>>>0)):[]})},879097:e=>{c.jb("Tile",e,void 0)},879149:(e,t,n)=>{c.jb("InstanceNormalization",e,{epsilon:t,format:n?"NHWC":"NCHW"})},879263:(e,t,n)=>{c.jb("InstanceNormalization",e,{epsilon:t,format:n?"NHWC":"NCHW"})},879377:e=>{c.jb("Range",e,void 0)},879430:(e,t)=>{c.jb("Einsum",e,{equation:eN(t)})},879511:(e,t,n,i,o)=>{c.jb("Pad",e,{mode:t,value:n,pads:i?Array.from(a().subarray(i>>>0,o>>>0)):[]})},879638:(e,t,n,i,o,a)=>{c.jb("BatchNormalization",e,{epsilon:t,momentum:n,spatial:!!o,trainingMode:!!i,format:a?"NHWC":"NCHW"})},879807:(e,t,n,i,o,a)=>{c.jb("BatchNormalization",e,{epsilon:t,momentum:n,spatial:!!o,trainingMode:!!i,format:a?"NHWC":"NCHW"})},879976:(e,t,n)=>{c.jb("CumSum",e,{exclusive:Number(t),reverse:Number(n)})},880073:(e,t,n)=>{c.jb("DequantizeLinear",e,{axis:t,blockSize:n})},880163:(e,t,n,i,o,s,u,l,d)=>{c.jb("Attention",e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:o,doRotary:s,qkvHiddenSizes:u?Array.from(a().subarray(Number(l)>>>0,Number(l)+u>>>0)):[],pastPresentShareBuffer:!!d})},880435:e=>{c.jb("BiasAdd",e,void 0)},880490:e=>{c.jb("BiasSplitGelu",e,void 0)},880551:e=>{c.jb("FastGelu",e,void 0)},880607:(e,n,i,o,s,l,d,p,h,f,m,g,y,b,_,v)=>{c.jb("Conv",e,{format:g?"NHWC":"NCHW",auto_pad:n,dilations:i?Array.from(a().subarray(i>>>0,o>>>0)):[],group:s,kernel_shape:l?Array.from(a().subarray(l>>>0,d>>>0)):[],pads:p?Array.from(a().subarray(p>>>0,h>>>0)):[],strides:f?Array.from(a().subarray(f>>>0,m>>>0)):[],w_is_const:()=>!!t()[y>>>0],activation:eN(b),activation_params:_?Array.from(u().subarray(_>>>0,v>>>0)):[]})},881103:e=>{c.jb("Gelu",e,void 0)},881155:(e,t,n,i)=>{c.jb("GroupQueryAttention",e,{numHeads:t,kvNumHeads:n,scale:i})},881268:(e,t,n,i)=>{c.jb("LayerNormalization",e,{axis:t,epsilon:n,simplified:!!i})},881379:(e,t,n,i)=>{c.jb("LayerNormalization",e,{axis:t,epsilon:n,simplified:!!i})},881490:(e,t,n,i,o,a)=>{c.jb("MatMulNBits",e,{k:t,n:n,accuracyLevel:i,bits:o,blockSize:a})},881617:(e,t,n,i,o,a)=>{c.jb("MultiHeadAttention",e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:o,doRotary:a})},881776:(e,t)=>{c.jb("QuickGelu",e,{alpha:t})},881840:(e,t,n,i,o)=>{c.jb("RotaryEmbedding",e,{interleaved:!!t,numHeads:n,rotaryEmbeddingDim:i,scale:o})},881979:(e,t,n)=>{c.jb("SkipLayerNormalization",e,{epsilon:t,simplified:!!n})},882081:(e,t,n)=>{c.jb("SkipLayerNormalization",e,{epsilon:t,simplified:!!n})},882183:(e,t,n,i)=>{c.jb("GatherBlockQuantized",e,{gatherAxis:t,quantizeAxis:n,blockSize:i})},882304:e=>{c.Zb(e)},882338:(e,t)=>c.bc(e,t,c.Eb.fc,c.Eb.errors)};function eu(e,t,n){return tG(async()=>{await c.Xb(e,t,n)})}function el(){return"u">typeof wasmOffsetConverter}function ed(e){this.name="ExitStatus",this.message=`Program terminated with exit(${e})`,this.status=e}var ep=e=>{e.terminate(),e.onmessage=()=>{}},ec=e=>{0==eb.length&&(eS(),eT(eb[0]));var t=eb.pop();if(!t)return 6;e_.push(t),ex[e.Ab]=t,t.Ab=e.Ab;var n={cmd:"run",start_routine:e.hc,arg:e.Qb,pthread_ptr:e.Ab};return t.postMessage(n,e.mc),0},eh=0,ef=(e,t,...n)=>{for(var i=2*n.length,o=nt(),a=ne(8*i),s=a>>>3,u=0;u<n.length;u++){var d=n[u];"bigint"==typeof d?(V[s+2*u]=1n,V[s+2*u+1]=d):(V[s+2*u]=0n,l()[s+2*u+1>>>0]=d)}return e=r4(e,0,i,a,t),r9(o),e};function em(e){if(g)return ef(0,1,e);if(z=e,!(0<eh)){for(var t of e_)ep(t);for(t of eb)ep(t);eb=[],e_=[],ex=[],G=!0}$(e,new ed(e))}function eg(e){if(g)return ef(1,0,e);ey(e)}var ey=e=>{if(z=e,g)throw eg(e),"unwind";em(e)},eb=[],e_=[],ev=[],ex={},ew=e=>{var t=e.Ab;delete ex[t],eb.push(e),e_.splice(e_.indexOf(e),1),e.Ab=0,r6(t)};function e$(){ev.forEach(e=>e())}var eT=e=>new Promise(t=>{e.onmessage=n=>{var i=(n=n.data).cmd;if(n.targetThread&&n.targetThread!=rQ()){var o=ex[n.targetThread];o?o.postMessage(n,n.transferList):A(`Internal error! Worker sent a message "${i}" to target pthread ${n.targetThread}, but that thread no longer exists!`)}else"checkMailbox"===i?tI():"spawnThread"===i?ec(n):"cleanupThread"===i?ew(ex[n.thread]):"killThread"===i?(i=ex[n=n.thread],delete ex[n],ep(i),r6(n),e_.splice(e_.indexOf(i),1),i.Ab=0):"cancelThread"===i?ex[n.thread].postMessage({cmd:"cancel"}):"loaded"===i?(e.loaded=!0,t(e)):"alert"===i?alert(`Thread ${n.threadId}: ${n.text}`):"setimmediate"===n.target?e.postMessage(n):"callHandler"===i?c[n.handler](...n.args):i&&A(`worker sent an unknown command ${i}`)},e.onerror=e=>{throw A(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var n,i=[];for(n of[])c.hasOwnProperty(n)&&i.push(n);e.postMessage({cmd:"load",handlers:i,wasmMemory:D,wasmModule:C})});function eS(){var e=new Worker(new URL("file:///Users/yukimasa.funaoka/works/kaeru-web-image-classification/node_modules/onnxruntime-web/dist/ort.all.bundle.min.mjs"),{type:"module",workerData:"em-pthread",name:"em-pthread"});eb.push(e)}var eI=e=>{for(;0<e.length;)e.shift()(c)},eE=()=>{var e=rQ(),t=s()[e+52>>>2>>>0];e=s()[e+56>>>2>>>0],r7(t,t-e),r9(t)},eO=(e,t)=>{eh=0,e=nr(e,t),0<eh?z=e:r8(e)};class eA{constructor(e){this.Jb=e-24}}function ek(e,t,n){var i=new eA(e>>>=0);throw t>>>=0,n>>>=0,s()[i.Jb+16>>>2>>>0]=0,s()[i.Jb+4>>>2>>>0]=t,s()[i.Jb+8>>>2>>>0]=n,e}function eP(e,t,n,i){return g?ef(2,1,e,t,n,i):eD(e,t,n,i)}function eD(e,t,n,i){if(e>>>=0,t>>>=0,n>>>=0,i>>>=0,void 0===y)return A("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var o=[];return g&&0===o.length?eP(e,t,n,i):(e={hc:n,Ab:e,Qb:i,mc:o},g?(e.Mb="spawnThread",postMessage(e,o),0):ec(e))}var eC="u">typeof TextDecoder?new TextDecoder("utf8"):void 0,ez=(e,t,n)=>{var i=(t>>>=0)+n;for(n=t;e[n]&&!(n>=i);)++n;if(16<n-t&&e.buffer&&eC)return eC.decode(e.buffer instanceof y?e.slice(t,n):e.subarray(t,n));for(i="";t<n;){var o=e[t++];if(128&o){var a=63&e[t++];if((224&o)==192)i+=String.fromCharCode((31&o)<<6|a);else{var s=63&e[t++];65536>(o=(240&o)==224?(15&o)<<12|a<<6|s:(7&o)<<18|a<<12|s<<6|63&e[t++])?i+=String.fromCharCode(o):(o-=65536,i+=String.fromCharCode(55296|o>>10,56320|1023&o))}}else i+=String.fromCharCode(o)}return i},eN=(e,t)=>(e>>>=0)?ez(n(),e,t):"";function eR(e,t,n){return g?ef(3,1,e,t,n):0}function eB(e,t){if(g)return ef(4,1,e,t)}var eF=e=>{for(var t=0,n=0;n<e.length;++n){var i=e.charCodeAt(n);127>=i?t++:2047>=i?t+=2:55296<=i&&57343>=i?(t+=4,++n):t+=3}return t},eM=(e,t,n,i)=>{if(!(0<i))return 0;var o=n>>>=0;i=n+i-1;for(var a=0;a<e.length;++a){var s=e.charCodeAt(a);if(55296<=s&&57343>=s&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a)),127>=s){if(n>=i)break;t[n++>>>0]=s}else{if(2047>=s){if(n+1>=i)break;t[n++>>>0]=192|s>>6}else{if(65535>=s){if(n+2>=i)break;t[n++>>>0]=224|s>>12}else{if(n+3>=i)break;t[n++>>>0]=240|s>>18,t[n++>>>0]=128|s>>12&63}t[n++>>>0]=128|s>>6&63}t[n++>>>0]=128|63&s}}return t[n>>>0]=0,n-o},eL=(e,t,i)=>eM(e,n(),t,i);function ej(e,t){if(g)return ef(5,1,e,t)}function eV(e,t,n){if(g)return ef(6,1,e,t,n)}function eU(e,t,n){return g?ef(7,1,e,t,n):0}function eq(e,t){if(g)return ef(8,1,e,t)}function eG(e,t,n){if(g)return ef(9,1,e,t,n)}function eH(e,t,n,i){if(g)return ef(10,1,e,t,n,i)}function eW(e,t,n,i){if(g)return ef(11,1,e,t,n,i)}function eK(e,t,n,i){if(g)return ef(12,1,e,t,n,i)}function eX(e){if(g)return ef(13,1,e)}function eZ(e,t){if(g)return ef(14,1,e,t)}function eY(e,t,n){if(g)return ef(15,1,e,t,n)}var eJ,eQ,e0=()=>{ee("")},e1=e=>{for(var t="";n()[e>>>0];)t+=eJ[n()[e++>>>0]];return t},e2={},e3={},e4={};function e6(e,t,n={}){if(!("argPackAdvance"in t))throw TypeError("registerType registeredInstance requires argPackAdvance");return function(e,t,n={}){var i=t.name;if(!e)throw new eQ(`type "${i}" must have a positive integer typeid pointer`);if(e3.hasOwnProperty(e)){if(n.Sb)return;throw new eQ(`Cannot register type '${i}' twice`)}e3[e]=t,delete e4[e],e2.hasOwnProperty(e)&&(t=e2[e],delete e2[e],t.forEach(e=>e()))}(e,t,n)}var e8=(e,u,l)=>{switch(u){case 1:return l?e=>t()[e>>>0]:e=>n()[e>>>0];case 2:return l?e=>i()[e>>>1>>>0]:e=>o()[e>>>1>>>0];case 4:return l?e=>a()[e>>>2>>>0]:e=>s()[e>>>2>>>0];case 8:return l?e=>V[e>>>3]:e=>U[e>>>3];default:throw TypeError(`invalid integer width (${u}): ${e}`)}};function e5(e,t,n){n>>>=0,e6(e>>>=0,{name:t=e1(t>>>0),fromWireType:e=>e,toWireType:function(e,t){if("bigint"!=typeof t&&"number"!=typeof t)throw t=null===t?"null":"object"==(e=typeof t)||"array"===e||"function"===e?t.toString():""+t,TypeError(`Cannot convert "${t}" to ${this.name}`);return"number"==typeof t&&(t=BigInt(t)),t},argPackAdvance:e7,readValueFromPointer:e8(t,n,-1==t.indexOf("u")),Db:null})}var e7=8;function e9(e,t,i,o){e6(e>>>=0,{name:t=e1(t>>>0),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?i:o},argPackAdvance:e7,readValueFromPointer:function(e){return this.fromWireType(n()[e>>>0])},Db:null})}var te=[],tt=[];function tr(e){9<(e>>>=0)&&0==--tt[e+1]&&(tt[e]=void 0,te.push(e))}var tn=e=>{if(!e)throw new eQ("Cannot use deleted val. handle = "+e);return tt[e]},ti=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=te.pop()||tt.length;return tt[t]=e,tt[t+1]=1,t}};function to(e){return this.fromWireType(s()[e>>>2>>>0])}var ta={name:"emscripten::val",fromWireType:e=>{var t=tn(e);return tr(e),t},toWireType:(e,t)=>ti(t),argPackAdvance:8,readValueFromPointer:to,Db:null};function ts(e){return e6(e>>>0,ta)}var tu=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(u()[e>>>2>>>0])};case 8:return function(e){return this.fromWireType(l()[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function tl(e,t,n){n>>>=0,e6(e>>>=0,{name:t=e1(t>>>0),fromWireType:e=>e,toWireType:(e,t)=>t,argPackAdvance:e7,readValueFromPointer:tu(t,n),Db:null})}function td(e,t,n,i,o){if(e>>>=0,n>>>=0,t=e1(t>>>0),-1===o&&(o=0xffffffff),o=e=>e,0===i){var a=32-8*n;o=e=>e<<a>>>a}var s=t.includes("unsigned")?function(e,t){return t>>>0}:function(e,t){return t};e6(e,{name:t,fromWireType:o,toWireType:s,argPackAdvance:e7,readValueFromPointer:e8(t,n,0!==i),Db:null})}function tp(e,n,i){function o(e){var n=s()[e>>>2>>>0];return e=s()[e+4>>>2>>>0],new a(t().buffer,e,n)}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][n];e6(e>>>=0,{name:i=e1(i>>>0),fromWireType:o,argPackAdvance:e7,readValueFromPointer:o},{Sb:!0})}function tc(e,t){e>>>=0;var i="std::string"===(t=e1(t>>>0));e6(e,{name:t,fromWireType:function(e){var t=s()[e>>>2>>>0],o=e+4;if(i)for(var a=o,u=0;u<=t;++u){var l=o+u;if(u==t||0==n()[l>>>0]){if(a=eN(a,l-a),void 0===d)var d=a;else d+="\0",d+=a;a=l+1}}else{for(d=Array(t),u=0;u<t;++u)d[u]=String.fromCharCode(n()[o+u>>>0]);d=d.join("")}return r1(e),d},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var o="string"==typeof t;if(!(o||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array))throw new eQ("Cannot pass non-string to std::string");var a=i&&o?eF(t):t.length,u=r0(4+a+1),l=u+4;if(s()[u>>>2>>>0]=a,i&&o)eL(t,l,a+1);else if(o)for(o=0;o<a;++o){var d=t.charCodeAt(o);if(255<d)throw r1(l),new eQ("String has UTF-16 code units that do not fit in 8 bits");n()[l+o>>>0]=d}else for(o=0;o<a;++o)n()[l+o>>>0]=t[o];return null!==e&&e.push(r1,u),u},argPackAdvance:e7,readValueFromPointer:to,Db(e){r1(e)}})}var th="u">typeof TextDecoder?new TextDecoder("utf-16le"):void 0,tf=(e,t)=>{for(var a=e>>1,s=a+t/2;!(a>=s)&&o()[a>>>0];)++a;if(32<(a<<=1)-e&&th)return th.decode(n().slice(e,a));for(a="",s=0;!(s>=t/2);++s){var u=i()[e+2*s>>>1>>>0];if(0==u)break;a+=String.fromCharCode(u)}return a},tm=(e,t,n)=>{if(2>(n??=0x7fffffff))return 0;var o=t;n=(n-=2)<2*e.length?n/2:e.length;for(var a=0;a<n;++a){var s=e.charCodeAt(a);i()[t>>>1>>>0]=s,t+=2}return i()[t>>>1>>>0]=0,t-o},tg=e=>2*e.length,ty=(e,t)=>{for(var n=0,i="";!(n>=t/4);){var o=a()[e+4*n>>>2>>>0];if(0==o)break;++n,65536<=o?(o-=65536,i+=String.fromCharCode(55296|o>>10,56320|1023&o)):i+=String.fromCharCode(o)}return i},tb=(e,t,n)=>{if(t>>>=0,4>(n??=0x7fffffff))return 0;var i=t;n=i+n-4;for(var o=0;o<e.length;++o){var s=e.charCodeAt(o);if(55296<=s&&57343>=s&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++o)),a()[t>>>2>>>0]=s,(t+=4)+4>n)break}return a()[t>>>2>>>0]=0,t-i},t_=e=>{for(var t=0,n=0;n<e.length;++n){var i=e.charCodeAt(n);55296<=i&&57343>=i&&++n,t+=4}return t};function tv(e,t,n){if(e>>>=0,t>>>=0,n=e1(n>>>=0),2===t)var i=tf,a=tm,u=tg,l=e=>o()[e>>>1>>>0];else 4===t&&(i=ty,a=tb,u=t_,l=e=>s()[e>>>2>>>0]);e6(e,{name:n,fromWireType:e=>{for(var n,o=s()[e>>>2>>>0],a=e+4,u=0;u<=o;++u){var d=e+4+u*t;u!=o&&0!=l(d)||(a=i(a,d-a),void 0===n?n=a:(n+="\0",n+=a),a=d+t)}return r1(e),n},toWireType:(e,i)=>{if("string"!=typeof i)throw new eQ(`Cannot pass non-string to C++ string type ${n}`);var o=u(i),l=r0(4+o+t);return s()[l>>>2>>>0]=o/t,a(i,l+4,o+t),null!==e&&e.push(r1,l),l},argPackAdvance:e7,readValueFromPointer:to,Db(e){r1(e)}})}function tx(e,t){e6(e>>>=0,{Tb:!0,name:t=e1(t>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var tw=()=>1;function t$(e){r2(e>>>0,!m,1,!f,131072,!1),e$()}var tT=e=>{if(!G)try{if(e(),!(0<eh))try{g?r8(z):ey(z)}catch(e){e instanceof ed||"unwind"==e||$(1,e)}}catch(e){e instanceof ed||"unwind"==e||$(1,e)}};function tS(e){e>>>=0,"function"==typeof Atomics.nc&&(Atomics.nc(a(),e>>>2,e).value.then(tI),e+=128,Atomics.store(a(),e>>>2,1))}var tI=()=>{var e=rQ();e&&(tS(e),tT(r5))};function tE(e,t){(e>>>=0)==t>>>0?setTimeout(tI):g?postMessage({targetThread:e,cmd:"checkMailbox"}):(e=ex[e])&&e.postMessage({cmd:"checkMailbox"})}var tO=[];function tA(e,t,n,i,o){for(t>>>=0,i/=2,tO.length=i,n=o>>>0>>>3,o=0;o<i;o++)tO[o]=V[n+2*o]?V[n+2*o+1]:l()[n+2*o+1>>>0];return(t?es[t]:rK[e])(...tO)}function tk(e){e>>>=0,g?postMessage({cmd:"cleanupThread",thread:e}):ew(ex[e])}function tP(e){}var tD=(e,t)=>{var n=e3[e];if(void 0===n)throw n=e1(e=rZ(e)),r1(e),new eQ(`${t} has unknown type ${n}`);return n},tC=(e,t,n)=>{var i=[];return e=e.toWireType(i,n),i.length&&(s()[t>>>2>>>0]=ti(i)),e};function tz(e,t,n){return t>>>=0,n>>>=0,e=tn(e>>>0),tC(t=tD(t,"emval::as"),n,e)}var tN=e=>{try{e()}catch(e){ee(e)}},tR=0,tB=null,tF=0,tM=[],tL={},tj={},tV=0,tU=null,tq=[];function tG(e){return function(e){if(!G){if(0===tR){var t=!1,n=!1;e((e=0)=>{if(!G&&(tF=e,t=!0,n)){tR=2,tN(()=>no(tB)),"u">typeof Browser&&Browser.Kb.Rb&&Browser.Kb.resume(),e=!1;try{var i=function(){var e=a()[tB+8>>>2>>>0];return e=rX[tj[e]],--eh,e()}()}catch(t){i=t,e=!0}var o=!1;if(!tB){var s=tU;s&&(tU=null,(e?s.reject:s.resolve)(i),o=!0)}if(e&&!o)throw i}}),n=!0,t||(tR=1,tB=function(){var e=r0(65548),t=e+12;s()[e>>>2>>>0]=t,s()[e+4>>>2>>>0]=t+65536;var n=tL[t=tM[0]];return void 0===n&&(n=tV++,tL[t]=n,tj[n]=t),t=n,a()[e+8>>>2>>>0]=t,e}(),"u">typeof Browser&&Browser.Kb.Rb&&Browser.Kb.pause(),tN(()=>nn(tB)))}else 2===tR?(tR=0,tN(na),r1(tB),tB=null,tq.forEach(tT)):ee(`invalid state: ${tR}`);return tF}}(t=>{e().then(t)})}function tH(e){return e>>>=0,tG(()=>(e=tn(e)).then(ti))}var tW=[];function tK(e,t,n,i){return n>>>=0,i>>>=0,(e=tW[e>>>0])(null,t=tn(t>>>0),n,i)}var tX={},tZ=e=>{var t=tX[e];return void 0===t?e1(e):t};function tY(e,t,n,i,o){return n>>>=0,i>>>=0,o>>>=0,(e=tW[e>>>0])(t=tn(t>>>0),t[n=tZ(n)],i,o)}var tJ=()=>"object"==typeof globalThis?globalThis:Function("return this")();function tQ(e){return 0==(e>>>=0)?ti(tJ()):(e=tZ(e),ti(tJ()[e]))}var t0=e=>{var t=tW.length;return tW.push(e),t},t1=(e,t)=>{for(var n=Array(e),i=0;i<e;++i)n[i]=tD(s()[t+4*i>>>2>>>0],"parameter "+i);return n},t2=(e,t)=>Object.defineProperty(t,"name",{value:e});function t3(e,t,n){var i=(t=t1(e,t>>>0)).shift();e--;var o=`return function (obj, func, destructorsRef, args) {
`,a=0,s=[];0===n&&s.push("obj");for(var u=["retType"],l=[i],d=0;d<e;++d)s.push("arg"+d),u.push("argType"+d),l.push(t[d]),o+=`  var arg${d} = argType${d}.readValueFromPointer(args${a?"+"+a:""});
`,a+=t[d].argPackAdvance;return o+=`  var rv = ${1===n?"new func":"func.call"}(${s.join(", ")});
`,i.Tb||(u.push("emval_returnValue"),l.push(tC),o+=`  return emval_returnValue(retType, destructorsRef, rv);
`),u.push(o+`};
`),e=(function(e){var t=Function;if(!(t instanceof Function))throw TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var n=t2(t.name||"unknownFunctionName",function(){});return n.prototype=t.prototype,n=new n,(e=t.apply(n,e))instanceof Object?e:n})(u)(...l),t0(t2(n=`methodCaller<(${t.map(e=>e.name).join(", ")}) => ${i.name}>`,e))}function t4(e){return ti(c[e=tZ(e>>>0)])}function t6(e,t){return t>>>=0,e=tn(e>>>0),ti(e[t=tn(t)])}function t8(e){9<(e>>>=0)&&(tt[e+1]+=1)}function t5(){return ti([])}function t7(e){e=tn(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return ti(t)}function t9(e){return ti(tZ(e>>>0))}function re(){return ti({})}function rt(e){for(var t=tn(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}tr(e)}function rr(e,t,n){t>>>=0,n>>>=0,e=tn(e>>>0),t=tn(t),n=tn(n),e[t]=n}function rn(e,t){return t>>>=0,ti(e=(e=tD(e>>>0,"_emval_take_value")).readValueFromPointer(t))}function ri(e,t){e=-0x20000000000000>e||0x20000000000000<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),a()[t>>>2>>>0]=e.getUTCSeconds(),a()[t+4>>>2>>>0]=e.getUTCMinutes(),a()[t+8>>>2>>>0]=e.getUTCHours(),a()[t+12>>>2>>>0]=e.getUTCDate(),a()[t+16>>>2>>>0]=e.getUTCMonth(),a()[t+20>>>2>>>0]=e.getUTCFullYear()-1900,a()[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,a()[t+28>>>2>>>0]=e}var ro=e=>e%4==0&&(e%100!=0||e%400==0),ra=[0,31,60,91,121,152,182,213,244,274,305,335],rs=[0,31,59,90,120,151,181,212,243,273,304,334];function ru(e,t){e=-0x20000000000000>e||0x20000000000000<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),a()[t>>>2>>>0]=e.getSeconds(),a()[t+4>>>2>>>0]=e.getMinutes(),a()[t+8>>>2>>>0]=e.getHours(),a()[t+12>>>2>>>0]=e.getDate(),a()[t+16>>>2>>>0]=e.getMonth(),a()[t+20>>>2>>>0]=e.getFullYear()-1900,a()[t+24>>>2>>>0]=e.getDay();var n=(ro(e.getFullYear())?ra:rs)[e.getMonth()]+e.getDate()-1|0;a()[t+28>>>2>>>0]=n,a()[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var i=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=i&&e.getTimezoneOffset()==Math.min(i,n)),a()[t+32>>>2>>>0]=e}function rl(e){e>>>=0;var t=new Date(a()[e+20>>>2>>>0]+1900,a()[e+16>>>2>>>0],a()[e+12>>>2>>>0],a()[e+8>>>2>>>0],a()[e+4>>>2>>>0],a()[e>>>2>>>0],0),n=a()[e+32>>>2>>>0],i=t.getTimezoneOffset(),o=new Date(t.getFullYear(),6,1).getTimezoneOffset(),s=new Date(t.getFullYear(),0,1).getTimezoneOffset(),u=Math.min(s,o);return 0>n?a()[e+32>>>2>>>0]=+(o!=s&&u==i):0<n!=(u==i)&&(o=Math.max(s,o),t.setTime(t.getTime()+6e4*((0<n?u:o)-i))),a()[e+24>>>2>>>0]=t.getDay(),n=(ro(t.getFullYear())?ra:rs)[t.getMonth()]+t.getDate()-1|0,a()[e+28>>>2>>>0]=n,a()[e>>>2>>>0]=t.getSeconds(),a()[e+4>>>2>>>0]=t.getMinutes(),a()[e+8>>>2>>>0]=t.getHours(),a()[e+12>>>2>>>0]=t.getDate(),a()[e+16>>>2>>>0]=t.getMonth(),a()[e+20>>>2>>>0]=t.getYear(),BigInt(isNaN(e=t.getTime())?-1:e/1e3)}function rd(e,t,n,i,o,a,s){return g?ef(16,1,e,t,n,i,o,a,s):-52}function rp(e,t,n,i,o,a){if(g)return ef(17,1,e,t,n,i,o,a)}function rc(e,t,n,i){e>>>=0,t>>>=0,n>>>=0,i>>>=0;var o=new Date().getFullYear(),u=new Date(o,0,1),l=new Date(o,6,1);o=u.getTimezoneOffset();var d=l.getTimezoneOffset(),p=Math.max(o,d);s()[e>>>2>>>0]=60*p,a()[t>>>2>>>0]=+(o!=d),u=(e=e=>e.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(u),l=e(l),d<o?(eL(u,n,17),eL(l,i,17)):(eL(u,i,17),eL(l,n,17))}var rh=[],rf=(e,t)=>{rh.length=0;for(var i;i=n()[e++>>>0];){var o=105!=i;t+=(o&=112!=i)&&t%8?4:0,rh.push(112==i?s()[t>>>2>>>0]:106==i?V[t>>>3]:105==i?a()[t>>>2>>>0]:l()[t>>>3>>>0]),t+=o?8:4}return rh};function rm(e,t,n){return e>>>=0,t=rf(t>>>0,n>>>0),es[e](...t)}function rg(e,t,n){return e>>>=0,t=rf(t>>>0,n>>>0),es[e](...t)}var ry=()=>{},rb=()=>Date.now();function r_(e,t){return A(eN(e>>>0,t>>>0))}var rv,rx=()=>{throw eh+=1,"unwind"};function rw(){return 0xffff0000}rv=()=>performance.timeOrigin+performance.now();var r$=()=>navigator.hardwareConcurrency;function rT(){return ee("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function rS(e){e>>>=0;var t=n().length;if(e<=t||0xffff0000<e)return!1;for(var i=1;4>=i;i*=2){var o=t*(1+.2/i);o=Math.min(o,e+0x6000000);var a=Math;o=Math.max(e,o);e:{a=(a.min.call(a,0xffff0000,o+(65536-o%65536)%65536)-D.buffer.byteLength+65535)/65536;try{D.grow(a),H();var s=1;break e}catch{}s=void 0}if(s)return!0}return!1}var rI=()=>(ee("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),rE={},rO=e=>{e.forEach(e=>{var t=rI();t&&(rE[t]=e)})};function rA(){var e=Error().stack.toString().split(`
`);return"Error"==e[0]&&e.shift(),rO(e),rE.Pb=rI(),rE.ec=e,rE.Pb}function rk(e,t,n){if(e>>>=0,t>>>=0,rE.Pb==e)var i=rE.ec;else"Error"==(i=Error().stack.toString().split(`
`))[0]&&i.shift(),rO(i);for(var o=3;i[o]&&rI()!=e;)++o;for(e=0;e<n&&i[e+o];++e)a()[t+4*e>>>2>>>0]=rI();return e}var rP,rD={},rC=()=>{if(!rP){var e,t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:w||"./this.program"};for(e in rD)void 0===rD[e]?delete t[e]:t[e]=rD[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);rP=n}return rP};function rz(e,n){if(g)return ef(18,1,e,n);e>>>=0,n>>>=0;var i=0;return rC().forEach((o,a)=>{var u=n+i;for(a=s()[e+4*a>>>2>>>0]=u,u=0;u<o.length;++u)t()[a++>>>0]=o.charCodeAt(u);t()[a>>>0]=0,i+=o.length+1}),0}function rN(e,t){if(g)return ef(19,1,e,t);e>>>=0,t>>>=0;var n=rC();s()[e>>>2>>>0]=n.length;var i=0;return n.forEach(e=>i+=e.length+1),s()[t>>>2>>>0]=i,0}function rR(e){return g?ef(20,1,e):52}function rB(e,t,n,i){return g?ef(21,1,e,t,n,i):52}function rF(e,t,n,i){return g?ef(22,1,e,t,n,i):70}var rM=[null,[],[]];function rL(e,t,i,o){if(g)return ef(23,1,e,t,i,o);t>>>=0,i>>>=0,o>>>=0;for(var a=0,u=0;u<i;u++){var l=s()[t>>>2>>>0],d=s()[t+4>>>2>>>0];t+=8;for(var p=0;p<d;p++){var c=n()[l+p>>>0],h=rM[e];0===c||10===c?((1===e?O:A)(ez(h,0)),h.length=0):h.push(c)}a+=d}return s()[o>>>2>>>0]=a,0}var rj=[31,29,31,30,31,30,31,31,30,31,30,31],rV=[31,28,31,30,31,30,31,31,30,31,30,31],rU=(e,n)=>{t().set(e,n>>>0)};function rq(e,t,n,i){function o(e,t,n){for(e="number"==typeof e?e.toString():e||"";e.length<t;)e=n[0]+e;return e}function u(e,t){return o(e,t,"0")}function l(e,t){var n;function i(e){return 0>e?-1:0<e?1:0}return 0===(n=i(e.getFullYear()-t.getFullYear()))&&0===(n=i(e.getMonth()-t.getMonth()))&&(n=i(e.getDate()-t.getDate())),n}function d(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function p(e){var t=e.Bb;for(e=new Date(new Date(e.Cb+1900,0,1).getTime());0<t;){var n=e.getMonth(),i=(ro(e.getFullYear())?rj:rV)[n];if(!(t>i-e.getDate())){e.setDate(e.getDate()+t);break}t-=i-e.getDate()+1,e.setDate(1),11>n?e.setMonth(n+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return n=new Date(e.getFullYear()+1,0,4),t=d(new Date(e.getFullYear(),0,4)),n=d(n),0>=l(t,e)?0>=l(n,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}e>>>=0,t>>>=0,n>>>=0,i>>>=0;var c=s()[i+40>>>2>>>0];for(var h in i={kc:a()[i>>>2>>>0],jc:a()[i+4>>>2>>>0],Hb:a()[i+8>>>2>>>0],Lb:a()[i+12>>>2>>>0],Ib:a()[i+16>>>2>>>0],Cb:a()[i+20>>>2>>>0],ub:a()[i+24>>>2>>>0],Bb:a()[i+28>>>2>>>0],rc:a()[i+32>>>2>>>0],ic:a()[i+36>>>2>>>0],lc:c?eN(c):""},n=eN(n),c={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})n=n.replace(RegExp(h,"g"),c[h]);var f="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),m="January February March April May June July August September October November December".split(" ");for(h in c={"%a":e=>f[e.ub].substring(0,3),"%A":e=>f[e.ub],"%b":e=>m[e.Ib].substring(0,3),"%B":e=>m[e.Ib],"%C":e=>u((e.Cb+1900)/100|0,2),"%d":e=>u(e.Lb,2),"%e":e=>o(e.Lb,2," "),"%g":e=>p(e).toString().substring(2),"%G":p,"%H":e=>u(e.Hb,2),"%I":e=>(0==(e=e.Hb)?e=12:12<e&&(e-=12),u(e,2)),"%j":e=>{for(var t=0,n=0;n<=e.Ib-1;t+=(ro(e.Cb+1900)?rj:rV)[n++]);return u(e.Lb+t,3)},"%m":e=>u(e.Ib+1,2),"%M":e=>u(e.jc,2),"%n":()=>`
`,"%p":e=>0<=e.Hb&&12>e.Hb?"AM":"PM","%S":e=>u(e.kc,2),"%t":()=>"	","%u":e=>e.ub||7,"%U":e=>u(Math.floor((e.Bb+7-e.ub)/7),2),"%V":e=>{var t=Math.floor((e.Bb+7-(e.ub+6)%7)/7);if(2>=(e.ub+371-e.Bb-2)%7&&t++,t)53==t&&(4==(n=(e.ub+371-e.Bb)%7)||3==n&&ro(e.Cb)||(t=1));else{t=52;var n=(e.ub+7-e.Bb-1)%7;(4==n||5==n&&ro(e.Cb%400-1))&&t++}return u(t,2)},"%w":e=>e.ub,"%W":e=>u(Math.floor((e.Bb+7-(e.ub+6)%7)/7),2),"%y":e=>(e.Cb+1900).toString().substring(2),"%Y":e=>e.Cb+1900,"%z":e=>{var t=0<=(e=e.ic);return(t?"+":"-")+("0000"+((e=Math.abs(e)/60)/60*100+e%60)).slice(-4)},"%Z":e=>e.lc,"%%":()=>"%"},n=n.replace(/%%/g,"\0\0"),c)n.includes(h)&&(n=n.replace(RegExp(h,"g"),c[h](i)));return(h=function(e){var t=Array(eF(e)+1);return eM(e,t,0,t.length),t}(n=n.replace(/\0\0/g,"%"))).length>t?0:(rU(h,e),h.length-1)}function rG(e,t,n,i){return rq(e>>>0,t>>>0,n>>>0,i>>>0)}g||function(){for(var e=c.numThreads-1;e--;)eS();W.unshift(()=>{Z++,function(e){g?e():Promise.all(eb.map(eT)).then(e)}(()=>Q())})}();for(var rH=Array(256),rW=0;256>rW;++rW)rH[rW]=String.fromCharCode(rW);eJ=rH,eQ=c.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},c.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},tt.push(0,1,void 0,1,null,1,!0,1,!1,1),c.count_emval_handles=()=>tt.length/2-5-te.length;var rK=[em,eg,eP,eR,eB,ej,eV,eU,eq,eG,eH,eW,eK,eX,eZ,eY,rd,rp,rz,rN,rR,rB,rF,rL],rX=function(){function e(e,t){return rX=e.exports,rX=function(){var e={};for(let[t,n]of Object.entries(rX))e[t]="function"==typeof n?(...e)=>{tM.push(t);try{return n(...e)}finally{G||(tM.pop(),tB&&1===tR&&0===tM.length&&(tR=0,eh+=1,tN(ni),"u">typeof Fibers&&Fibers.sc()))}}:n;return e}(),rX=function(){var e=rX,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).Ca=t(e.Ca),e.fb=n(e.fb),e.gb=t(e.gb),e.emscripten_main_runtime_thread_id=n(e.emscripten_main_runtime_thread_id),e.sb=t(e.sb),e.tb=n(e.tb),e}(),ev.push(rX.ib),K.unshift(rX.Ba),C=t,Q(),rX}var t=ea();if(Z++,c.instantiateWasm)try{return c.instantiateWasm(t,e)}catch(e){A(`Module.instantiateWasm callback failed with error: ${e}`),p(e)}return et||=c.locateFile?er("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":c.locateFile?c.locateFile("ort-wasm-simd-threaded.jsep.wasm",T):T+"ort-wasm-simd-threaded.jsep.wasm":new URL(__webpack_require__(474),__webpack_require__.b).href,(function(e,t){var n=et;return S||"function"!=typeof WebAssembly.instantiateStreaming||er(n)||en(n)||"function"!=typeof fetch?eo(n,e,t):fetch(n,{credentials:"same-origin"}).then(i=>WebAssembly.instantiateStreaming(i,e).then(t,function(i){return A(`wasm streaming compile failed: ${i}`),A("falling back to ArrayBuffer instantiation"),eo(n,e,t)}))})(t,function(t){e(t.instance,t.module)}).catch(p),{}}(),rZ=e=>(rZ=rX.Ca)(e),rY=()=>(rY=rX.Da)();c._OrtInit=(e,t)=>(c._OrtInit=rX.Ea)(e,t),c._OrtGetLastError=(e,t)=>(c._OrtGetLastError=rX.Fa)(e,t),c._OrtCreateSessionOptions=(e,t,n,i,o,a,s,u,l,d)=>(c._OrtCreateSessionOptions=rX.Ga)(e,t,n,i,o,a,s,u,l,d),c._OrtAppendExecutionProvider=(e,t)=>(c._OrtAppendExecutionProvider=rX.Ha)(e,t),c._OrtAddFreeDimensionOverride=(e,t,n)=>(c._OrtAddFreeDimensionOverride=rX.Ia)(e,t,n),c._OrtAddSessionConfigEntry=(e,t,n)=>(c._OrtAddSessionConfigEntry=rX.Ja)(e,t,n),c._OrtReleaseSessionOptions=e=>(c._OrtReleaseSessionOptions=rX.Ka)(e),c._OrtCreateSession=(e,t,n)=>(c._OrtCreateSession=rX.La)(e,t,n),c._OrtReleaseSession=e=>(c._OrtReleaseSession=rX.Ma)(e),c._OrtGetInputOutputCount=(e,t,n)=>(c._OrtGetInputOutputCount=rX.Na)(e,t,n),c._OrtGetInputName=(e,t)=>(c._OrtGetInputName=rX.Oa)(e,t),c._OrtGetOutputName=(e,t)=>(c._OrtGetOutputName=rX.Pa)(e,t),c._OrtFree=e=>(c._OrtFree=rX.Qa)(e),c._OrtCreateTensor=(e,t,n,i,o,a)=>(c._OrtCreateTensor=rX.Ra)(e,t,n,i,o,a),c._OrtGetTensorData=(e,t,n,i,o)=>(c._OrtGetTensorData=rX.Sa)(e,t,n,i,o),c._OrtReleaseTensor=e=>(c._OrtReleaseTensor=rX.Ta)(e),c._OrtCreateRunOptions=(e,t,n,i)=>(c._OrtCreateRunOptions=rX.Ua)(e,t,n,i),c._OrtAddRunConfigEntry=(e,t,n)=>(c._OrtAddRunConfigEntry=rX.Va)(e,t,n),c._OrtReleaseRunOptions=e=>(c._OrtReleaseRunOptions=rX.Wa)(e),c._OrtCreateBinding=e=>(c._OrtCreateBinding=rX.Xa)(e),c._OrtBindInput=(e,t,n)=>(c._OrtBindInput=rX.Ya)(e,t,n),c._OrtBindOutput=(e,t,n,i)=>(c._OrtBindOutput=rX.Za)(e,t,n,i),c._OrtClearBoundOutputs=e=>(c._OrtClearBoundOutputs=rX._a)(e),c._OrtReleaseBinding=e=>(c._OrtReleaseBinding=rX.$a)(e),c._OrtRunWithBinding=(e,t,n,i,o)=>(c._OrtRunWithBinding=rX.ab)(e,t,n,i,o),c._OrtRun=(e,t,n,i,o,a,s,u)=>(c._OrtRun=rX.bb)(e,t,n,i,o,a,s,u),c._OrtEndProfiling=e=>(c._OrtEndProfiling=rX.cb)(e),c._JsepOutput=(e,t,n)=>(c._JsepOutput=rX.db)(e,t,n),c._JsepGetNodeName=e=>(c._JsepGetNodeName=rX.eb)(e);var rJ,rQ=()=>(rQ=rX.fb)(),r0=c._malloc=e=>(r0=c._malloc=rX.gb)(e),r1=c._free=e=>(r1=c._free=rX.hb)(e),r2=(e,t,n,i,o,a)=>(r2=rX.kb)(e,t,n,i,o,a),r3=()=>(r3=rX.lb)(),r4=(e,t,n,i,o)=>(r4=rX.mb)(e,t,n,i,o),r6=e=>(r6=rX.nb)(e),r8=e=>(r8=rX.ob)(e),r5=()=>(r5=rX.pb)(),r7=(e,t)=>(r7=rX.qb)(e,t),r9=e=>(r9=rX.rb)(e),ne=e=>(ne=rX.sb)(e),nt=()=>(nt=rX.tb)(),nr=c.dynCall_ii=(e,t)=>(nr=c.dynCall_ii=rX.vb)(e,t),nn=e=>(nn=rX.wb)(e),ni=()=>(ni=rX.xb)(),no=e=>(no=rX.yb)(e),na=()=>(na=rX.zb)();function ns(){0<Z||(g?(d(c),g||eI(K),startWorker(c)):(eI(W),0<Z||rJ||(rJ=!0,c.calledRun=!0,G||(g||eI(K),d(c),g||eI(X)))))}return c.___start_em_js=882450,c.___stop_em_js=882672,c.stackSave=()=>nt(),c.stackRestore=e=>r9(e),c.stackAlloc=e=>ne(e),c.UTF8ToString=eN,c.stringToUTF8=eL,c.lengthBytesUTF8=eF,J=function e(){rJ||ns(),rJ||(J=e)},ns(),h},globalThis.self?.name==="em-pthread"&&Ph()}),Tn,Q_,e2,t2,Ch,kh,r2,Dh,Hn=C(()=>{gi(),Tn="file:///Users/yukimasa.funaoka/works/kaeru-web-image-classification/node_modules/onnxruntime-web/dist/ort.all.bundle.min.mjs",Q_=typeof location>"u"?void 0:location.origin,e2=(e,t)=>{try{let n=t??Tn;return(n?new URL(e,n):new URL(e)).origin===Q_}catch{return!1}},t2=async e=>{let t=await (await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ch=(Ah(),Pn($h)).default,kh=async()=>{if(!Tn)throw Error("Failed to load proxy worker: cannot determine the script source URL.");if(e2(Tn))return[void 0,Ch()];let e=await t2(Tn);return[e,Ch(e)]},r2=(Eh(),Pn(Oh)).default,Dh=async(e,t,n)=>[void 0,r2]}),Ns,Ms,Si,Bh,n2,o2,bi,Ke,Pr=C(()=>{Hn(),Ms=!1,Si=!1,Bh=!1,n2=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return"u">typeof MessageChannel&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},o2=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},bi=async e=>{if(Ms)return Promise.resolve();if(Si)throw Error("multiple calls to 'initializeWebAssembly()' detected.");if(Bh)throw Error("previous call to 'initializeWebAssembly()' failed.");Si=!0;let t=e.initTimeout,n=e.numThreads;if(!o2())throw Error("WebAssembly SIMD is not supported in the current environment.");let i=n2();n>1&&!i&&("u">typeof self&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let o=e.wasmPaths,a="string"==typeof o?o:void 0,s=o?.mjs,u=s?.href??s,l=o?.wasm,d=l?.href??l,p=e.wasmBinary,[c,h]=await Dh(u,a,n>1),f=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{f=!0,e()},t)})),m.push(new Promise((e,t)=>{let i={numThreads:n};p?i.wasmBinary=p:(d||a)&&(i.locateFile=(e,t)=>d??(a??t)+e),h(i).then(t=>{Si=!1,Ms=!0,Ns=t,e(),c&&URL.revokeObjectURL(c)},e=>{Si=!1,Bh=!0,t(e)})})),await Promise.race(m),f)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ke=()=>{if(Ms&&Ns)return Ns;throw Error("WebAssembly is not initialized yet.")}}),ot,jn,Ue,$i=C(()=>{Pr(),ot=(e,t)=>{let n=Ke(),i=n.lengthBytesUTF8(e)+1,o=n._malloc(i);return n.stringToUTF8(e,o,i),t.push(o),o},jn=(e,t,n,i)=>{if("object"==typeof e&&null!==e){if(n.has(e))throw Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([e,o])=>{let a=t?t+e:e;if("object"==typeof o)jn(o,a+".",n,i);else if("string"==typeof o||"number"==typeof o)i(a,o.toString());else if("boolean"==typeof o)i(a,o?"1":"0");else throw Error(`Can't handle extra config type: ${typeof o}`)})},Ue=e=>{let t=Ke(),n=t.stackSave();try{let n=t.stackAlloc(8);t._OrtGetLastError(n,n+4);let i=t.HEAP32[n/4],o=t.HEAPU32[n/4+1],a=o?t.UTF8ToString(o):"";throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(n)}}}),Lh,Rh=C(()=>{Pr(),$i(),Lh=e=>{let t=Ke(),n=0,i=[],o=e||{};try{if(e?.logSeverityLevel===void 0)o.logSeverityLevel=2;else if("number"!=typeof e.logSeverityLevel||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)o.logVerbosityLevel=0;else if("number"!=typeof e.logVerbosityLevel||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(o.terminate=!1);let a=0;return e?.tag!==void 0&&(a=ot(e.tag,i)),n=t._OrtCreateRunOptions(o.logSeverityLevel,o.logVerbosityLevel,!!o.terminate,a),0===n&&Ue("Can't create run options."),e?.extra!==void 0&&jn(e.extra,"",new WeakSet,(e,o)=>{let a=ot(e,i),s=ot(o,i);0!==t._OrtAddRunConfigEntry(n,a,s)&&Ue(`Can't set a run config entry: ${e} - ${o}.`)}),[n,i]}catch(e){throw 0!==n&&t._OrtReleaseRunOptions(n),i.forEach(e=>t._free(e)),e}}}),i2,a2,s2,u2,zh,Nh=C(()=>{Pr(),$i(),i2=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},a2=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw Error(`unsupported execution mode: ${e}`)}},s2=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(e=>("string"==typeof e?e:e.name)==="webgpu")&&(e.enableMemPattern=!1)},u2=(e,t,n)=>{for(let i of t){let t="string"==typeof i?i:i.name;switch(t){case"webnn":if(t="WEBNN","string"!=typeof i){let t=i?.deviceType;if(t){let i=ot("deviceType",n),o=ot(t,n);0!==Ke()._OrtAddSessionConfigEntry(e,i,o)&&Ue(`Can't set a session config entry: 'deviceType' - ${t}.`)}}break;case"webgpu":if(t="JS","string"!=typeof i){let t=i;if(t?.preferredLayout){if("NCHW"!==t.preferredLayout&&"NHWC"!==t.preferredLayout)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${t.preferredLayout}`);let i=ot("preferredLayout",n),o=ot(t.preferredLayout,n);0!==Ke()._OrtAddSessionConfigEntry(e,i,o)&&Ue(`Can't set a session config entry: 'preferredLayout' - ${t.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw Error(`not supported execution provider: ${t}`)}let o=ot(t,n);0!==Ke()._OrtAppendExecutionProvider(e,o)&&Ue(`Can't append execution provider: ${t}.`)}},zh=e=>{let t=Ke(),n=0,i=[],o=e||{};s2(o);try{let e=i2(o.graphOptimizationLevel??"all"),a=a2(o.executionMode??"sequential"),s="string"==typeof o.logId?ot(o.logId,i):0,u=o.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw Error(`log serverity level is not valid: ${u}`);let l=o.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw Error(`log verbosity level is not valid: ${l}`);let d="string"==typeof o.optimizedModelFilePath?ot(o.optimizedModelFilePath,i):0;if(n=t._OrtCreateSessionOptions(e,!!o.enableCpuMemArena,!!o.enableMemPattern,a,!!o.enableProfiling,0,s,u,l,d),0===n&&Ue("Can't create session options."),o.executionProviders&&u2(n,o.executionProviders,i),void 0!==o.enableGraphCapture){if("boolean"!=typeof o.enableGraphCapture)throw Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);let e=ot("enableGraphCapture",i),a=ot(o.enableGraphCapture.toString(),i);0!==t._OrtAddSessionConfigEntry(n,e,a)&&Ue(`Can't set a session config entry: 'enableGraphCapture' - ${o.enableGraphCapture}.`)}if(o.freeDimensionOverrides)for(let[e,a]of Object.entries(o.freeDimensionOverrides)){if("string"!=typeof e)throw Error(`free dimension override name must be a string: ${e}`);if("number"!=typeof a||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let o=ot(e,i);0!==t._OrtAddFreeDimensionOverride(n,o,a)&&Ue(`Can't set a free dimension override: ${e} - ${a}.`)}return void 0!==o.extra&&jn(o.extra,"",new WeakSet,(e,o)=>{let a=ot(e,i),s=ot(o,i);0!==t._OrtAddSessionConfigEntry(n,a,s)&&Ue(`Can't set a session config entry: ${e} - ${o}.`)}),[n,i]}catch(e){throw 0!==n&&t._OrtReleaseSessionOptions(n),i.forEach(e=>t._free(e)),e}}}),Kn,Or,Xr,Ai,Xn,Pi,Oi,Fs,ue=C(()=>{Kn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw Error(`unsupported data type: ${e}`)}},Or=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw Error(`unsupported data type: ${e}`)}},Xr=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i="number"==typeof t?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(i*n):void 0},Ai=e=>{switch(e){case"float16":return"u">typeof Float16Array&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":case"bool":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Xn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw Error(`unsupported logging level: ${e}`)}},Pi=e=>"float32"===e||"float16"===e||"int32"===e||"int64"===e||"uint32"===e||"uint8"===e||"bool"===e||"uint4"===e||"int4"===e,Oi=e=>"float32"===e||"float16"===e||"int32"===e||"int64"===e||"uint32"===e||"uint64"===e||"int8"===e||"uint8"===e||"bool"===e,Fs=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Zn,Vs=C(()=>{gi(),Zn=async e=>{if("string"!=typeof e)return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e);{let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),i=n?parseInt(n,10):0;if(i<0x40000000)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),o;try{o=new ArrayBuffer(i)}catch(e){if(e instanceof RangeError){let e=Math.ceil(i/65536);o=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let i=t.byteLength;new Uint8Array(o,a,i).set(t),a+=i}return new Uint8Array(o,0,i)}}}}),l2,c2,Mh,Fh,Ei,f2,$e,jt=C(()=>{ue(),l2=["V","I","W","E","F"],c2=(e,t)=>{console.log(`[${l2[e]},${new Date().toISOString()}]${t}`)},Ei=(e,t)=>{Mh=e,Fh=t},f2=(e,t)=>{let n=Xn(e);n>=Xn(Mh)&&c2(n,"function"==typeof t?t():t)},$e=(...e)=>{Fh&&f2(...e)}}),Ci,Gs=C(()=>{ue(),Ci=(e,t)=>new(Ai(t))(e)}),ki=C(()=>{}),Vh,Us,Ws,d2,p2,Gh,qs,Hs,Wh,Hh=C(()=>{jt(),ki(),Vh=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[0xc00000,10],[0x1000000,10],[0x1900000,15],[0x2000000,22],[0x2a30000,2],[0x3840000,6],[0x4000000,6],[0x8000000,6],[0xa000000,6]]),Us=[],Ws=e=>16*Math.ceil(e/16),d2=e=>{for(let t=0;t<Us.length;t++){let n=Us[t];if(e<=n)return n}return 16*Math.ceil(e/16)},p2=1,Gh=()=>p2++,qs=async(e,t,n,i)=>{let o=Ws(n),a=e.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,o),e.flush(),await a.mapAsync(GPUMapMode.READ);let u=a.getMappedRange();if(!i)return new Uint8Array(u.slice(0,n));{let e=i();return e.set(new Uint8Array(u,0,n)),e}}finally{a.destroy()}},Hs=class{constructor(e){for(let[t]of(this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map,Vh))Us.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){let n=t.buffer,i=t.byteOffset,o=t.byteLength,a=Ws(o),s=this.storageCache.get(e);if(!s)throw Error("gpu data for uploading does not exist");if(s.originalSize!==o)throw Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${o}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC});new Uint8Array(u.getMappedRange()).set(new Uint8Array(n,i,o)),u.unmap();let l=this.backend.getCommandEncoder();this.backend.endComputePass(),l.copyBufferToBuffer(u,0,s.gpuData.buffer,0,a),$e("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(u)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw Error("destination gpu data for memcpy does not exist");if(n.originalSize!==i.originalSize)throw Error("inconsistent source and destination gpu data size");let o=Ws(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,i.gpuData.buffer,0,o)}registerExternalBuffer(e,t,n){let i;if(n){if(i=n[0],e===n[1])return $e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Gh();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),$e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){void 0!==e&&(this.storageCache.delete(e),$e("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=d2(e),i,o=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(o||a){let e=(o?this.freeBuffers:this.freeUniformBuffers).get(n);i=e?e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t}):this.backend.device.createBuffer({size:n,usage:t})}else i=this.backend.device.createBuffer({size:n,usage:t});let s={id:Gh(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:e}),$e("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=this.storageCache.get(e);if(!t)throw Error("releasing data does not exist");return $e("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){let n=this.storageCache.get(e);if(!n)throw Error("data does not exist");await qs(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],0!==this.buffersPending.length){if("default"===this.backend.sessionStatus){for(let e of this.buffersPending){let t=Vh.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];void 0===t||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];void 0===t||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);for(let t of(e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e)),this.buffersPending))e.push(t);this.buffersPending=[]}}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e))}},Wh=(...e)=>new Hs(...e)}),js,le,Xe=C(()=>{js=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},le=e=>new js(e)}),Ks,or,k,Zr,Di,qh,jh,ge=C(()=>{Ks=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},or=class{static calcShape(e,t,n=!1){let i=e.length,o=t.length;if(0===i)return t;if(0===o)return e;let a=Math.max(e.length,t.length),s=Array(a);if(n){if(i<2||o<2)return;let n=Ks.calcMatMulShape([e[i-2],e[i-1]],[t[o-2],t[o-1]]);if(void 0===n)return;[s[a-2],s[a-1]]=n}for(let u=n?3:1;u<=a;u++){let n=i-u<0?1:e[i-u],l=o-u<0?1:t[o-u];if(n!==l&&n>1&&l>1)return;let d=Math.max(n,l);if(n&&l)s[a-u]=Math.max(n,l);else{if(d>1)return;s[a-u]=0}}return s}static isValidBroadcast(e,t){let n=e.length,i=t.length;if(n>i)return!1;for(let o=1;o<=n;o++)if(1!==e[n-o]&&e[n-o]!==t[i-o])return!1;return!0}},k=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(0===n)return[];let i=Array(n),o=n-1;for(;o>=0;){if(e[o]%t==0){i[o]=e[o]/t;break}if(t%e[o]!=0)throw Error("cannot convert shape");i[o]=1,t/=e[o],o--}for(o--;o>=0;o--)i[o]=e[o];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let i=1;for(let o=t;o<n;o++){if(e[o]<0)throw Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=e[o]}return i}static computeStrides(e){let t=e.length;if(0===t)return[];if(1===t)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let i=t-3;i>=0;--i)n[i]=n[i+1]*e[i+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error("unsupported axis for this operation.");return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,i)=>e+t[i]+t[i+n])}static areEqual(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}},Zr=class e{static adjustPoolAttributes(e,t,n,i,o,a){if(!e&&n.length!==t.length-2)throw Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error("strides should be greater than or equal to 1")}else i.push(1);for(let e=0;e<n.length;e++)if(e<o.length){if(o[e]<0)throw Error("dilations should be greater than or equal to 1")}else o.push(1);for(let e=0;e<2*n.length;e++)if(e<a.length){if(a[e]<0)throw Error("pad should be greater than or equal to 1")}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error("kernel shapes need to be greater than 0");if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,i,o,a,s,u){if(u){if(a.length!==2*(t.length-2))throw Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw Error("length of strides should be the length of data dimensions");if(o.length!==t.length-2)throw Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)e.adjustPadAndReturnShape(t[l+(s?1:2)],n[l],i[l],o[l],a,l,l+t.length-2,u)}}static computePoolOutputShape(t,n,i,o,a,s,u){if(n.length<=0)throw Error("input shape must be of size greater than 0");let l=[n[0],n[1]];return e.computeShapeHelper(t,n,l,i,o,a,s,u),l}static computeConvOutputShape(t,n,i,o,a,s,u){if(t.length<=0||n.length<=0)throw Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],n[0]];return e.computeShapeHelper(!1,t,l,i,o,a,s,u),l}static computeShapeHelper(t,n,i,o,a,s,u,l){if(t)for(let e=0;e<n.length-2;e++)i.push(1);else for(let t=0;t<n.length-2;t++)i.push(e.adjustPadAndReturnShape(n[t+2],o[t],a[t],s[t],u,t,t+n.length-2,l))}static adjustPadAndReturnShape(e,t,n,i,o,a,s,u){let l=n*(i-1)+1;if(!u||"NOTSET"===u)return Math.floor((e+o[a]+o[s]-l)/t+1);switch(u){case"VALID":return o[a]=0,o[s]=0,Math.floor((e-l)/t+1);case"SAME_LOWER":case"SAME_UPPER":if(1!==n)throw Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let n=((e+t-1)/t-1)*t+i-e;return o[a]=Math.floor("SAME_LOWER"===u?(n+1)/2:n/2),o[s]=n-o[a],Math.floor((e+n-i)/t+1)}default:throw Error("Unsupported AutoPad type")}}},Di=class{static getShapeOfGemmResult(e,t,n,i,o){let a,s,u;if(2!==e.length||2!==n.length)throw Error("shape need to be of size 2");t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(u=n[0],l=1):(u=n[1],l=0),n[l]!==s)throw Error("dimension mismatch");if(a<=0||u<=0||s<=0)throw Error("invalid shape specified");if(o&&!or.isValidBroadcast(o,[a,u]))throw Error("gemm: invalid bias shape for broadcast");return[a,u,s]}},qh=-34028234663852886e22,jh=34028234663852886e22}),Yr,Zs,ke,it,G,Me,Ys,Jr,Kt,J,Js,L,F,Bi,Xs,Kh,In,be=C(()=>{ue(),ge(),Yr=64,Zs=(e,t)=>{if(3===t)throw Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(4!==t)throw Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw Error(`Unknown data type: ${e}`)}},ke=(e,t=1)=>{let n=Zs(e,t);return"string"==typeof n?n:n[0]},it=(e,t=1)=>{let n=Zs(e,t);return"string"==typeof n?n:n[1]},G=(...e)=>{let t=[];return e.forEach(e=>{0!==e.length&&t.push({type:12,data:e},{type:12,data:k.computeStrides(e)})}),t},Me=e=>e%4==0?4:e%2==0?2:1,Ys=(e="f32",t,n="0")=>t&&1!==t?`vec${t}<${e}>(${n})`:`${e}(${n})`,Jr=(e,t,n)=>"f32"===e?n:1===t?`f32(${n})`:`vec${t}<f32>(${n})`,Kt=(e,t)=>4===t?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:2===t?`(${e}.x + ${e}.y)`:3===t?`(${e}.x + ${e}.y + ${e}.z)`:e,J=(e,t,n,i)=>e.startsWith("uniforms.")&&n>4?"string"==typeof t?"f16"===i?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:"f16"===i?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Js=(e,t,n,i,o)=>{let a="number"==typeof n,s=a?n:n.length,u=[...Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Zs(t,o),p="string"==typeof d?d:d[1],c={indices:l,value:p,storage:"string"==typeof d?d:d[0],tensor:t},h=e=>"string"==typeof e?e:`${e}u`,f={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?"uniforms.":"",g=`${m}${e}_shape`,y=`${m}${e}_strides`,b="";for(let e=0;e<s-1;e++)b+=`
    let dim${e} = current / ${J(y,e,s)};
    let rest${e} = current % ${J(y,e,s)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;b+=`indices[${s-1}] = current;`;let _=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${c.indices} {
    var indices: ${c.indices};
    var current = offset;
    ${b}
    return indices;
  }`,v=t=>(f.offsetToIndices=!0,s<2?t:`o2i_${e}(${t})`),x=[];if(s>=2)for(let e=s-1;e>=0;e--)x.push(`${J(y,e,s)} * (indices[${e}])`);let w=s<2?"":`
  fn i2o_${e}(indices: ${c.indices}) -> u32 {
    return ${x.join("+")};
  }`,$=t=>(f.indicesToOffset=!0,s<2?t:`i2o_${e}(${t})`),T=(...e)=>0===s?"0u":`${c.indices}(${e.map(h).join(",")})`,S=(e,t)=>s<2?`${e}`:`${J(e,t,s)}`,I=(e,t,n)=>s<2?`${e}=${n};`:`${J(e,t,s)}=${n};`,E={},O=(t,n)=>{f.broadcastedIndicesToOffset=!0;let i=`${n.name}broadcastedIndicesTo${e}Offset`;if(i in E)return`${i}(${t})`;let o=[];for(let e=s-1;e>=0;e--){let t=n.indicesGet("outputIndices",e+n.rank-s);o.push(`${S(y,e)} * (${t} % ${S(g,e)})`)}return E[i]=`fn ${i}(outputIndices: ${n.type.indices}) -> u32 {
             return ${o.length>0?o.join("+"):"0u"};
           }`,`${i}(${t})`},A=(t,n)=>(()=>{if(c.storage===c.value)return`${e}[${t}]=${n};`;if("vec2<u32>"===c.storage&&"i32"===c.value)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if("vec2<u32>"===c.storage&&"u32"===c.value)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if("u32"===c.storage&&"vec4<bool>"===c.value)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),P=t=>(()=>{if(c.storage===c.value)return`${e}[${t}]`;if("vec2<u32>"===c.storage&&"i32"===c.value)return`i32(${e}[${t}].x)`;if("vec2<u32>"===c.storage&&"u32"===c.value)return`u32(${e}[${t}].x)`;if("u32"===c.storage&&"vec4<bool>"===c.value)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),D=s<2?"":`
  fn get_${e}ByIndices(indices: ${c.indices}) -> ${p} {
    return ${P(`i2o_${e}(indices)`)};
  }`,C=s<2?"":(()=>{let t=u.map(e=>`d${e}: u32`).join(", "),n=u.map(e=>`d${e}`).join(", ");return`
  fn get_${e}(${t}) -> ${p} {
    return get_${e}ByIndices(${T(n)});
  }`})(),z=(...t)=>{if(t.length!==s)throw Error(`indices length must be ${s}`);let n=t.map(h).join(",");return 0===s?P("0u"):1===s?P(n[0]):(f.get=!0,f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}(${n})`)},N=t=>s<2?P(t):(f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}ByIndices(${t})`),R=s<2?"":`
  fn set_${e}ByIndices(indices: ${c.indices}, value: ${p}) {
    ${A(`i2o_${e}(indices)`,"value")}
  }`,B=s<2?"":(()=>{let t=u.map(e=>`d${e}: u32`).join(", "),n=u.map(e=>`d${e}`).join(", ");return`
  fn set_${e}(${t}, value: ${p}) {
    set_${e}ByIndices(${T(n)}, value);
  }`})();return{impl:()=>{let e=[],t=!1;return f.offsetToIndices&&(e.push(_),t=!0),f.indicesToOffset&&(e.push(w),t=!0),f.broadcastedIndicesToOffset&&(Object.values(E).forEach(t=>e.push(t)),t=!0),f.set&&(e.push(B),t=!0),f.setByIndices&&(e.push(R),t=!0),f.get&&(e.push(C),t=!0),f.getByIndices&&(e.push(D),t=!0),!a&&t&&e.unshift(`const ${g} = ${c.indices}(${n.join(",")});`,`const ${y} = ${c.indices}(${k.computeStrides(n).join(",")});`),e.join(`
`)},type:c,offsetToIndices:v,indicesToOffset:$,broadcastedIndicesToOffset:O,indices:T,indicesGet:S,indicesSet:I,set:(...t)=>{if(t.length!==s+1)throw Error(`indices length must be ${s}`);let n=t[s];if("string"!=typeof n)throw Error("value must be string");let i=t.slice(0,s).map(h).join(",");return 0===s?A("0u",n):1===s?A(i[0],n):(f.set=!0,f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}(${i}, ${n})`)},setByOffset:A,setByIndices:(t,n)=>s<2?A(t,n):(f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:z,getByOffset:P,getByIndices:N,usage:i,name:e,strides:y,shape:g,rank:s}},L=(e,t,n,i=1)=>Js(e,t,n,"input",i),F=(e,t,n,i=1)=>Js(e,t,n,"output",i),Bi=(e,t,n,i=1)=>Js(e,t,n,"internal",i),Xs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${"number"==typeof e?`${e}u`:e}) { return; }`}mainStart(e=Yr){let t="number"==typeof e?e:e[0],n="number"==typeof e?1:e[1],i="number"==typeof e?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*i>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let o=1===this.normalizedDispatchGroup[1]&&1===this.normalizedDispatchGroup[2],a=o?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=o?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){0!==e.rank&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if("internal"===e.usage)throw Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n="input"===e.usage?"read":"read_write",i=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if("internal"!==e.usage)throw Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(0===this.uniforms.length)return"";let e=[];for(let{name:t,type:n,length:i}of this.uniforms)if(i&&i>4)"f16"===n?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(i/4)}>`);else{let o=null==i||1===i?n:`vec${i}<${n}>`;e.push(`${t}:${o}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(0===this.uniforms.length)return;let e=e=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Kh=(e,t)=>new Xs(e,t),In=(e,t)=>{let n=e.length,i=[];for(let o=0;o<n;o++){let a=n-1-o,s=e[a]||1;(t[t.length-1-o]||1)>1&&1===s&&i.unshift(a)}return i}}),m2,Xh,h2,g2,b2,at,Zh,Yh,hr=C(()=>{ue(),ge(),Xe(),be(),m2=e=>{if(!e||1!==e.length)throw Error("Transpose requires 1 input.")},Xh=(e,t)=>t&&t.length!==e?[...Array(e).keys()].reverse():t,h2=(e,t)=>k.sortBasedOnPerm(e,Xh(e.length,t)),g2=(e,t,n,i)=>{let o=`fn perm(i: ${i.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let i=0;i<t;++i)o+=n.indicesSet("a",e[i],`i[${i}]`);return o+"return a;}"},b2=(e,t)=>{let n=[],i=[];for(let o=0;o<e.length;++o)1!==e[o]&&n.push(e[o]),1!==e[t[o]]&&i.push(t[o]);return{newShape:n,newPerm:i}},at=(e,t)=>{let n=e.dataType,i=e.dims.length,o=Xh(i,t),a=h2(e.dims,o),{newShape:s,newPerm:u}=b2(e.dims,o),l=k.areEqual(u,[2,3,1]),d=k.areEqual(u,[3,1,2]),p=2===s.length&&u[0]>u[1]||l||d,c=p?s:e.dims,h=a;p&&(h=[(c=l?[s[0],s[1]*s[2]]:d?[s[0]*s[1],s[2]]:s)[1],c[0]]);let f=L("a",n,c.length),m=F("output",n,h.length),g=16,y;return y=p?e=>`
  ${e.registerUniform("output_size","u32").declareVariables(f,m)}
  var<workgroup> tile : array<array<${m.type.value}, ${g+1}>, ${g}>;
  ${e.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${f.getByIndices(`${f.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${m.setByIndices(`${m.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:e=>`
  ${e.registerUniform("output_size","u32").declareVariables(f,m)}

  ${g2(o,i,f,m)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${m.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${m.setByOffset("global_idx",f.getByIndices("aIndices"))}
  }`,{name:p?"TransposeShared":"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let t=k.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:p?{x:Math.ceil(h[1]/g),y:Math.ceil(h[0]/g)}:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...G(c,h)]}},getShaderSource:y}},Zh=(e,t)=>{m2(e.inputs),e.compute(at(e.inputs[0],t.perm))},Yh=e=>le({perm:e.perm})}),y2,x2,w2,v2,T2,_2,I2,S2,$2,A2,ir,Jh,Qh,eg,tg,rg,ng,og,ig,ag,sg,ug=C(()=>{ue(),ge(),be(),Li(),hr(),y2={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},x2={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},w2={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},v2={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},T2=(e,t)=>{let n=[];for(let i=t-e;i<t;++i)n.push(i);return n},_2=(e,t)=>{let n=[],i=e.length;for(let o=0;o<i;o++)-1===t.indexOf(o)&&n.push(e[o]);return[n,t.map(t=>e[t])]},I2=(e,t)=>{let n=e.length+t.length,i=[],o=0;for(let a=0;a<n;a++)-1===t.indexOf(a)?i.push(e[o++]):i.push(1);return i},S2=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},$2=(e,t)=>{let n=[];if(!S2(e,t)){for(let i=0;i<t;++i)-1===e.indexOf(i)&&n.push(i);e.forEach(e=>n.push(e))}return n},A2=(e,t,n,i,o,a,s)=>{let u=n[0].dims,l=k.size(a),d=k.size(s),p=L("_A",n[0].dataType,u),c=F("output",o,a),h=32,f=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `;return{name:e,shaderCache:t,getShaderSource:e=>`
        ${e.registerUniform("reduceSize","u32").declareVariables(p,c)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${w2[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${y2[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${x2[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${"mean"===i?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${v2[i]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},ir=(e,t,n,i)=>{let o=1===e.inputs.length?n:Qs(e.inputs,n),a=o.axes;0!==a.length||o.noopWithEmptyAxes||(a=e.inputs[0].dims.map((e,t)=>t));let s=k.normalizeAxes(a,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=$2(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(at(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=T2(u.length,l.dims.length));let[p,c]=_2(l.dims,u),h=p;o.keepDims&&(h=I2(p,s)),e.compute(A2(t,{hint:o.cacheKey,inputDependencies:["type"]},[l],i,e.inputs[0].dataType,h,c),{inputs:[l]})},Jh=(e,t)=>{ir(e,"ReduceMeanShared",t,"mean")},Qh=(e,t)=>{ir(e,"ReduceL1Shared",t,"l1")},eg=(e,t)=>{ir(e,"ReduceL2Shared",t,"l2")},tg=(e,t)=>{ir(e,"ReduceLogSumExpShared",t,"logSumExp")},rg=(e,t)=>{ir(e,"ReduceMaxShared",t,"max")},ng=(e,t)=>{ir(e,"ReduceMinShared",t,"min")},og=(e,t)=>{ir(e,"ReduceProdShared",t,"prod")},ig=(e,t)=>{ir(e,"ReduceSumShared",t,"sum")},ag=(e,t)=>{ir(e,"ReduceSumSquareShared",t,"sumSquare")},sg=(e,t)=>{ir(e,"ReduceLogSumShared",t,"logSum")}}),ar,P2,Ri,Qs,sr,O2,E2,C2,k2,D2,B2,L2,R2,z2,N2,ur,lg,cg,fg,dg,pg,mg,hg,gg,bg,yg,Li=C(()=>{ue(),ge(),Xe(),be(),ug(),ar=e=>{if(!e||0===e.length||e.length>2)throw Error("Reduce op requires 1 or 2 inputs.");if(2===e.length&&1!==e[1].dims.length)throw Error("Invalid axes input dims.")},P2=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ri=(e,t,n,i,o,a,s=!1,u=!1)=>{let l=[],d=n[0].dims,p=d.length,c=k.normalizeAxes(o,p),h=!u&&0===c.length;d.forEach((e,t)=>{h||c.indexOf(t)>=0?s&&l.push(1):l.push(e)});let f=l.length,m=k.size(l);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],o=L("_A",n[0].dataType,p),u=F("output",a,f),l=i(o,u,c),m=l[2];for(let e=0,n=0;e<p;e++)h||c.indexOf(e)>=0?(s&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${d[e]}; j${e}++) {
                  ${l[2].includes("last_index")?`let last_index = j${e};`:""}
                  ${o.indicesSet("input_indices",e,`j${e}`)}
                  ${m}
                }`):(t.push(`${o.indicesSet("input_indices",e,u.indicesGet("output_indices",n))};`),n++);return`

        ${e.registerUniform("output_size","u32").declareVariables(o,u)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${o.type.indices};
          let output_indices = ${u.offsetToIndices("global_idx")};

          ${t.join(`
`)}
          ${l[0]}       // init ops for reduce max/min
          ${l[1]}
          ${m}
          ${l[3]}
          ${4===l.length?u.setByOffset("global_idx","value"):l.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...G(d,l)]})}},Qs=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),le({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},sr=(e,t,n,i)=>{let o=e.inputs,a=1===o.length?n:Qs(o,n);e.compute(Ri(t,{hint:a.cacheKey,inputDependencies:["rank"]},[o[0]],a.noopWithEmptyAxes&&0===a.axes.length?P2:i,a.axes,o[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},O2=(e,t)=>{ar(e.inputs),sr(e,"ReduceLogSum",t,(e,t)=>[`var value = ${t.type.storage}(0);`,"",`value += ${e.getByIndices("input_indices")};`,"value = log(value);"])},E2=(e,t)=>{ar(e.inputs),sr(e,"ReduceL1",t,(e,t)=>[`var value = ${t.type.storage}(0);`,"",`value += abs(${e.getByIndices("input_indices")});`,""])},C2=(e,t)=>{ar(e.inputs),sr(e,"ReduceL2",t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,"",`t = ${e.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},k2=(e,t)=>{ar(e.inputs),sr(e,"ReduceLogSumExp",t,(e,t)=>[`var value = ${t.type.storage}(0);`,"",`value += exp(${e.getByIndices("input_indices")});`,"value = log(value);"])},D2=(e,t)=>{ar(e.inputs),sr(e,"ReduceMax",t,(e,t,n)=>{let i=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||0===n.length)&&i.push(e.indicesSet("input_indices",t,0));return[`${i.join(`
`)}`,`var value = ${e.getByIndices("input_indices")};`,`value = max(value, ${e.getByIndices("input_indices")});`,""]})},B2=(e,t)=>{ar(e.inputs),sr(e,"ReduceMean",t,(t,n,i)=>{let o=1;for(let n=0;n<t.rank;n++)(i.indexOf(n)>=0||0===i.length)&&(o*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${t.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${o});`]})},L2=(e,t)=>{ar(e.inputs),sr(e,"ReduceMin",t,(e,t,n)=>{let i=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||0===n.length)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices("input_indices")};`,`value = min(value, ${e.getByIndices("input_indices")});`,""]})},R2=(e,t)=>{ar(e.inputs),sr(e,"ReduceProd",t,(e,t)=>[`var value = ${t.type.storage}(1);`,"",`value *= ${e.getByIndices("input_indices")};`,""])},z2=(e,t)=>{ar(e.inputs),sr(e,"ReduceSum",t,(e,t)=>[`var value = ${t.type.storage}(0);`,"",`value += ${e.getByIndices("input_indices")};`,""])},N2=(e,t)=>{ar(e.inputs),sr(e,"ReduceSumSquare",t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,"",`t = ${e.getByIndices("input_indices")}; value += t * t;`,""])},ur=(e,t,n)=>{if(0===t.length)return n;let i=1,o=1;for(let n=0;n<t.length;n++)-1===t.indexOf(n)?i*=e[n]:o*=e[n];return o<32&&i>1024},lg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?B2(e,t):Jh(e,t)},cg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?E2(e,t):Qh(e,t)},fg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?C2(e,t):eg(e,t)},dg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?k2(e,t):tg(e,t)},pg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?D2(e,t):rg(e,t)},mg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?L2(e,t):ng(e,t)},hg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?R2(e,t):og(e,t)},gg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?z2(e,t):ig(e,t)},bg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?N2(e,t):ag(e,t)},yg=(e,t)=>{ur(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?O2(e,t):sg(e,t)}}),xg,wg,vg,eu,Tg=C(()=>{ue(),Xe(),Li(),xg=e=>{if(!e||0===e.length||e.length>2)throw Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(1!==e[0].dataType)throw Error("Invalid input type.")},wg=(e,t)=>{xg(e.inputs);let n=(e,n,i)=>{let o=[];for(let t=0;t<e.rank;t++)(i.indexOf(t)>=0||0===i.length)&&o.push(`input_indices[${t}] = 0;`);return[`${o.join(`
`)}`,`var value = ${e.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${e.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${e.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Ri("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},vg=(e,t)=>{xg(e.inputs);let n=(e,n,i)=>{let o=[];for(let t=0;t<e.rank;t++)(i.indexOf(t)>=0||0===i.length)&&o.push(`input_indices[${t}] = 0;`);return[`${o.join(`
`)}`,`var value = ${e.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${e.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${e.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Ri("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},eu=e=>le(e)}),M2,F2,V2,G2,Sn,U2,_g,zi=C(()=>{ue(),ge(),ki(),be(),M2=(e,t)=>{let n=e[0],i=e[1],o=e[2],a=e[3],s=e[4],u=e[5];if(s&&u)throw Error("Attention cannot have both past and attention_bias");if(3!==n.dims.length)throw Error('Input "input" must have 3 dimensions');let l=n.dims[0],d=n.dims[1],p=n.dims[2];if(1!==o.dims.length)throw Error('Input "bias" is expected to have 1 dimensions');if(2!==i.dims.length)throw Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==p)throw Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==i.dims[1])throw Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=o.dims[0]/3,h=c,f=h;if(t.qkvHiddenSizes.length>0){if(3!==t.qkvHiddenSizes.length)throw Error("qkv_hidden_sizes attribute should have 3 elements");for(let e of t.qkvHiddenSizes)if(e%t.numHeads!=0)throw Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=d;if(c!==h)throw Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==c+h+f)throw Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let g=0;if(s){if(h!==f)throw Error('Input "past" expect k_hidden_size == v_hidden_size');if(5!==s.dims.length)throw Error('Input "past" must have 5 dimensions');if(2!==s.dims[0])throw Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(g=s.dims[3])}let y=m+g,b=-1,_=0;if(a)throw Error("Mask not supported");if(s)throw Error("past is not supported");if(u){if(4!==u.dims.length)throw Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==y)throw Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:y,maxSequenceLength:b,inputHiddenSize:p,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},F2=(e,t,n)=>{let i=Me(n),o=64,a=n/i;a<64&&(o=32);let s=Math.ceil(n/i/o),u=[{type:1,data:1/n},{type:12,data:a},{type:12,data:s}],l=ke(e.dataType,i),d=it(1,i),p=t=>{let n=F("x",e.dataType,e.dims,i),a=it(e.dataType),s=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${o}>;
  var<workgroup> thread_sum: array<f32, ${o}>;
  ${t.registerUniforms(s).declareVariables(n)}
  ${t.mainStart([o,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${o}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${d}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${d}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(i){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${o}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${d}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${d}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(i){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${o}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${n.type.value}(${a}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${d}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${o};${l};${i}`,inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[],dispatchGroup:{x:t},programUniforms:u})}},V2=(e,t,n,i,o,a,s,u)=>{let l=u+a.kvSequenceLength,d=[a.batchSize,a.numHeads,a.sequenceLength,l],p=void 0===a.kvNumHeads&&e>1&&i,c=p?[a.batchSize,a.numHeads,l,a.headSize]:void 0,h=0===s.scale?1/Math.sqrt(a.headSize):s.scale,f=Me(a.headSize),m=a.headSize/f,g=12,y={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/g),z:a.batchSize*a.numHeads},b=[{type:12,data:a.sequenceLength},{type:12,data:m},{type:12,data:l},{type:12,data:a.numHeads},{type:1,data:h},{type:12,data:u},{type:12,data:a.kvSequenceLength}],_=p&&i&&k.size(i.dims)>0,v=["type","type"];_&&v.push("type"),o&&v.push("type");let x=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&x.push({dims:c,dataType:t.dataType,gpuDataType:0});let w=e=>{let a=L("q",t.dataType,t.dims,f),s=[a,L("key",n.dataType,n.dims,f)];if(_){let e=L("past_key",i.dataType,i.dims,f);s.push(e)}o&&s.push(L("attention_bias",o.dataType,o.dims));let u=F("output",t.dataType,d),l=[u];p&&l.push(F("present_key",t.dataType,c,f));let h=it(1,f),m=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${g}u;

  var<workgroup> tileQ: array<${a.type.storage}, ${g*g}>;
  var<workgroup> tileK: array<${a.type.storage}, ${g*g}>;
  ${e.registerUniforms(m).declareVariables(...s,...l)}
  ${e.mainStart([g,g,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${_&&p?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${p?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${h}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${_&&p?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${p?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${h}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(f){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw Error(`Unsupported components: ${f}`)}})()};
        output[outputIdx] = ${u.type.value} (sum * uniforms.alpha) + ${o?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${f};${void 0!==o};${void 0!==i};${e}`,inputDependencies:v},getRunData:()=>({outputs:x,dispatchGroup:y,programUniforms:b}),getShaderSource:w}},G2=(e,t,n,i,o,a)=>{let s=a+o.kvSequenceLength,u=o.nReps?o.nReps:1,l=o.vHiddenSize*u,d=null==o.kvNumHeads&&e>1&&i,p=d?[o.batchSize,o.numHeads,s,o.headSize]:void 0,c=[o.batchSize,o.sequenceLength,l],h=12,f={x:Math.ceil(o.vHeadSize/h),y:Math.ceil(o.sequenceLength/h),z:o.batchSize*o.numHeads},m=[{type:12,data:o.sequenceLength},{type:12,data:s},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:l},{type:12,data:a},{type:12,data:o.kvSequenceLength}],g=d&&i&&k.size(i.dims)>0,y=["type","type"];g&&y.push("type");let b=[{dims:c,dataType:t.dataType,gpuDataType:0}];d&&b.push({dims:p,dataType:t.dataType,gpuDataType:0});let _=e=>{let o=L("probs",t.dataType,t.dims),a=[o,L("v",n.dataType,n.dims)];g&&a.push(L("past_value",i.dataType,i.dims));let s=[F("output",t.dataType,c)];d&&s.push(F("present_value",t.dataType,p));let u=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${h}u;
  var<workgroup> tileQ: array<${o.type.value}, ${h*h}>;
  var<workgroup> tileK: array<${o.type.value}, ${h*h}>;
  ${e.registerUniforms(u).declareVariables(...a,...s)}
  ${e.mainStart([h,h,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${g&&d?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${d?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${o.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${g&&d?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${d?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${void 0!==i};${e}`,inputDependencies:y},getRunData:()=>({outputs:b,dispatchGroup:f,programUniforms:m}),getShaderSource:_}},Sn=(e,t,n,i,o,a,s,u,l,d,p)=>{let c=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),h=void 0!==d.kvNumHeads||c>1?d.pastSequenceLength:0,f=h+d.kvSequenceLength,m=l&&k.size(l.dims)>0?l:void 0,g=[t,n];void 0===d.kvNumHeads&&c>1&&s&&k.size(s.dims)>0&&g.push(s),m&&g.push(m);let y=e.compute(V2(c,t,n,s,m,d,p,h),{inputs:g,outputs:void 0===d.kvNumHeads&&c>1?[-1,1]:[-1]})[0];e.compute(F2(y,d.batchSize*d.numHeads*d.sequenceLength,f),{inputs:[y],outputs:[]});let b=[y,i];void 0===d.kvNumHeads&&c>1&&u&&k.size(u.dims)>0&&b.push(u),e.compute(G2(c,y,i,u,d,h),{inputs:b,outputs:void 0===d.kvNumHeads&&c>1?[0,2]:[0]})},U2=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,o=t.inputHiddenSize,a=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:o},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=e=>{let t=F("output_q",l[0].dataType,n),i=F("output_k",l[0].dataType,n),o=F("output_v",l[0].dataType,n),a=L("input",l[0].dataType,l[0].dims),u=L("weight",l[1].dataType,l[1].dims),d=L("bias",l[2].dataType,l[2].dims),p=a.type.storage,c=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${p}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${p}, ${s*s}>;
  var<workgroup> tileWeightK: array<${p}, ${s*s}>;
  var<workgroup> tileWeightV: array<${p}, ${s*s}>;
  ${e.registerUniforms(c).declareVariables(a,u,d,t,i,o)}
  ${e.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${p}(0);
    var valueK = ${p}(0);
    var valueV = ${p}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:p},{inputs:l,outputs:[-1,-1,-1]})},_g=(e,t)=>{let n=M2(e.inputs,t),[i,o,a]=U2(e,n);return Sn(e,i,o,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n,t)}}),W2,H2,q2,Ig,Sg=C(()=>{mt(),ue(),ge(),Xe(),be(),W2=(e,t)=>{if(!e||5!==e.length)throw Error("BatchNormalization requires 5 inputs");let n=(e,t,n)=>{let i=t.length;if(i!==e.length)throw Error(`${n}: num dimensions != ${i}`);t.forEach((t,i)=>{if(t!==e[i])throw Error(`${n}: dim[${i}] do not match`)})};if(e[0].dims.length>1){let i="NHWC"===t.format?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,i,"Invalid input scale"),n(e[2].dims,i,"Invalid input B"),n(e[3].dims,i,"Invalid input mean"),n(e[4].dims,i,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},H2=(e,t)=>{let{epsilon:n,spatial:i,format:o}=t,a=e[0].dims,s=i?Me(a[a.length-1]):1,u="NHWC"===o&&a.length>1?s:1,l=k.size(a)/s,d=i,p=d?a.length:a,c=L("x",e[0].dataType,e[0].dims,s),h=L("scale",e[1].dataType,e[1].dims,u),f=L("bias",e[2].dataType,e[2].dims,u),m=L("inputMean",e[3].dataType,e[3].dims,u),g=L("inputVar",e[4].dataType,e[4].dims,u),y=F("y",e[0].dataType,p,s),b=()=>{let e="";if(i)e=`let cOffset = ${1===a.length?"0u":"NHWC"===o?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if("NCHW"===o)e=`
            ${y.indicesSet("outputIndices","0","0")}
            let cOffset = ${y.indicesToOffset("outputIndices")};`;else{e=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<h.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return e},_=e=>`
  const epsilon = ${n};
  ${e.registerUniform("outputSize","u32").declareVariables(c,h,f,m,g,y)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${y.offsetToIndices(`global_idx * ${s}`)};
    ${b()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${g.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${y.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...G(a)]:[{type:12,data:l}]})}},q2=e=>le(e),Ig=(e,t)=>{let{inputs:n,outputCount:i}=e,o=q2({...t,outputCount:i});if(ce.webgpu.validateInputContent&&W2(n,o),t.trainingMode)throw Error("BatchNormalization trainingMode is not supported yet.");e.compute(H2(n,o))}}),j2,K2,$g,Ag=C(()=>{ge(),be(),j2=e=>{if(3!==e[0].dims.length)throw Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw Error("number of channels should be 320, 640 or 1280");if(1!==e[1].dims.length)throw Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw Error("last dimension of input and bias are not the same")},K2=e=>{let t=e[0].dims,n=e[0].dims[2],i=k.size(t)/4,o=e[0].dataType,a=L("input",o,t,4),s=L("bias",o,[n],4),u=L("residual",o,t,4),l=F("output",o,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,s,u,l)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},$g=e=>{j2(e.inputs),e.compute(K2(e.inputs))}}),X2,De,Pg,Og,Eg,Cg,kg,Dg,Bg,Lg,Rg,Z2,zg,Ng,Mg,Fg,Yn,Vg,Ni,Gg,Ug,Wg,Hg,qg,jg,Kg,Xg,Zg,Yg,Jg,Qg,eb,tb,rb,nb,ob,ib,tu,ru,ab,sb,ub,Y2,J2,lb,Mi=C(()=>{ue(),ge(),Xe(),be(),X2=(e,t,n,i,o,a,s)=>{let u=Math.ceil(t/4),l="";l="string"==typeof o?`${o}(a)`:o("a");let d=L("inputData",n,[u],4),p=F("outputData",i,[u],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`},De=(e,t,n,i,o,a=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(k.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:t=>X2(t,k.size(e.dims),e.dataType,a,n,i,u),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(k.size(t[0].dims)/64/4)},programUniforms:l})}},Pg=e=>{e.compute(De(e.inputs[0],"Abs","abs"))},Og=e=>{e.compute(De(e.inputs[0],"Acos","acos"))},Eg=e=>{e.compute(De(e.inputs[0],"Acosh","acosh"))},Cg=e=>{e.compute(De(e.inputs[0],"Asin","asin"))},kg=e=>{e.compute(De(e.inputs[0],"Asinh","asinh"))},Dg=e=>{e.compute(De(e.inputs[0],"Atan","atan"))},Bg=e=>{e.compute(De(e.inputs[0],"Atanh","atanh"))},Lg=e=>le(e),Rg=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(De(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Z2=e=>{let t,n,i=e.length>=2&&0!==e[1].data,o=e.length>=3&&0!==e[2].data;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,n=o?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,n=o?e[2].getUint16Array()[0]:31743;break;default:throw Error("Unsupport data type")}return le({min:t,max:n})},zg=(e,t)=>{let n=t||Z2(e.inputs),i=it(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Clip",e=>`clamp(${e}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Ng=e=>{e.compute(De(e.inputs[0],"Ceil","ceil"))},Mg=e=>{e.compute(De(e.inputs[0],"Cos","cos"))},Fg=e=>{e.compute(De(e.inputs[0],"Cosh","cosh"))},Yn=e=>le(e),Vg=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Elu",e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ni=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Gg=e=>{let t=it(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Erf",e=>`erf_vf32(${e})`,Ni(t)))},Ug=e=>{e.compute(De(e.inputs[0],"Exp","exp"))},Wg=e=>{e.compute(De(e.inputs[0],"Floor","floor"))},Hg=e=>{let t=it(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Gelu",e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Ni(t)))},qg=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(De(e.inputs[0],"LeakyRelu",e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},jg=e=>{e.compute(De(e.inputs[0],"Not",e=>`!${e}`))},Kg=e=>{e.compute(De(e.inputs[0],"Neg",e=>`-${e}`))},Xg=e=>{e.compute(De(e.inputs[0],"Reciprocal",e=>`1.0/${e}`))},Zg=e=>{let t=it(e.inputs[0].dataType);e.compute(De(e.inputs[0],"Relu",e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Yg=e=>{e.compute(De(e.inputs[0],"Sigmoid",e=>`(1.0 / (1.0 + exp(-${e})))`))},Jg=e=>le(e),Qg=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(De(e.inputs[0],"HardSigmoid",e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},eb=e=>{e.compute(De(e.inputs[0],"Sin","sin"))},tb=e=>{e.compute(De(e.inputs[0],"Sinh","sinh"))},rb=e=>{e.compute(De(e.inputs[0],"Sqrt","sqrt"))},nb=e=>{e.compute(De(e.inputs[0],"Tan","tan"))},ob=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ib=e=>{e.compute(De(e.inputs[0],"Tanh",ob))},tu=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ob("v")};
}
`,ru=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,ab=e=>{let t=it(e.inputs[0].dataType);e.compute(De(e.inputs[0],"FastGelu",ru,tu(t),void 0,e.inputs[0].dataType))},sb=(e,t)=>{let n=it(e.inputs[0].dataType);return e.compute(De(e.inputs[0],"ThresholdedRelu",e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},ub=e=>{e.compute(De(e.inputs[0],"Log","log"))},Y2=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,J2=e=>`quick_gelu_impl(${e})`,lb=(e,t)=>{let n=it(e.inputs[0].dataType);e.compute(De(e.inputs[0],"QuickGelu",J2,Y2(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Q2,e1,fb,db=C(()=>{ge(),be(),Mi(),Q2=e=>{if(3!==e[0].dims.length)throw Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw Error("hidden state should be 2560, 5120 or 10240");if(1!==e[1].dims.length)throw Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw Error("last dimension of input and bias are not the same")},e1=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=L("input",e[0].dataType,e[0].dims,4),i=L("bias",e[0].dataType,[e[0].dims[2]],4),o=F("output",e[0].dataType,t,4),a=k.size(t)/4,s=ke(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,i,o)}

  ${Ni(s)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${o.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},fb=e=>{Q2(e.inputs),e.compute(e1(e.inputs))}}),t1,r1,lr,pb,mb,hb,gb,bb,yb,xb,wb,vb,Tb,_b=C(()=>{ue(),ge(),be(),t1=(e,t,n,i,o,a,s,u,l,d,p,c)=>{let h,f;"string"==typeof u?h=f=(e,t)=>`${u}((${e}),(${t}))`:"function"==typeof u?h=f=u:(h=u.scalar,f=u.vector);let m=F("outputData",p,i.length,4),g=L("aData",l,t.length,4),y=L("bData",d,n.length,4),b;if(o){if(a){let e=1===k.size(t),i=1===k.size(n),o=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;b=e||i?m.setByOffset("global_idx",f(e?`${g.type.value}(${g.getByOffset("0")}.x)`:g.getByOffset("global_idx"),i?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"))):`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${g.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(s||o?g.getByOffset("offsetA / 4u"):`${g.type.value}(${g.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||a?y.getByOffset("offsetB / 4u"):`${y.type.value}(${y.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(g.getByOffset("global_idx"),y.getByOffset("global_idx")))}else{if(!a)throw Error("no necessary to use scalar implementation for element-wise binary op implementation.");let e=(e,t,n="")=>{let i=`aData[indexA${t}][componentA${t}]`,o=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${y.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${h(i,o)});
          `};b=9===p?`
            var data = vec4<u32>(0);
            ${e("data",0,"u32")}
            ${e("data",1,"u32")}
            ${e("data",2,"u32")}
            ${e("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e("outputData[global_idx]",0)}
            ${e("outputData[global_idx]",1)}
            ${e("outputData[global_idx]",2)}
            ${e("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(g,y,m)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},r1=(e,t,n,i,o,a,s=n.dataType)=>{let u=!k.areEqual(n.dims,i.dims),l=n.dims,d=k.size(n.dims),p=!1,c=!1,h=[u];if(u){let e=or.calcShape(n.dims,i.dims,!1);if(!e)throw Error("Can't perform binary op on the given tensors");l=e,d=k.size(l);let t=1===k.size(n.dims),o=1===k.size(i.dims),a=n.dims.length>0&&n.dims[n.dims.length-1]%4==0,s=i.dims.length>0&&i.dims[i.dims.length-1]%4==0;h.push(t),h.push(o),h.push(a),h.push(s);let u=1;for(let e=1;e<l.length;e++){let t=n.dims[n.dims.length-e]??1;if(t===(i.dims[i.dims.length-e]??1))u*=t;else break}u%4==0?(c=!0,p=!0):(t||o||a||s)&&(p=!0)}else p=!0;return h.push(p),{name:e,shaderCache:{hint:t+h.map(e=>e.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:e=>t1(e,n.dims,i.dims,l,p,u,c,o,n.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(k.size(l)/4)},...G(n.dims,i.dims,l)]})}},lr=(e,t,n,i,o,a)=>{e.compute(r1(t,o??"",e.inputs[0],e.inputs[1],n,i,a))},pb=e=>{lr(e,"Add",(e,t)=>`${e}+${t}`)},mb=e=>{lr(e,"Div",(e,t)=>`${e}/${t}`)},hb=e=>{lr(e,"Equal",{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},gb=e=>{lr(e,"Mul",(e,t)=>`${e}*${t}`)},bb=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;lr(e,"Pow",{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${"i32"===t?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},yb=e=>{lr(e,"Sub",(e,t)=>`${e}-${t}`)},xb=e=>{lr(e,"Greater",{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},wb=e=>{lr(e,"Less",{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},vb=e=>{lr(e,"GreaterOrEqual",{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},Tb=e=>{lr(e,"LessOrEqual",{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),o1,i1,a1,s1,Ib,Sb,$b=C(()=>{ue(),ge(),Xe(),be(),o1=(e,t)=>{if(!e||e.length<1)throw Error("too few inputs");let n=0,i=e[0],o=i.dataType,a=i.dims.length;e.forEach((e,s)=>{if(s!==n){if(e.dataType!==o)throw Error("input tensors should be one type");if(e.dims.length!==a)throw Error("input tensors should have the same shape");e.dims.forEach((e,n)=>{if(n!==t&&e!==i.dims[n])throw Error("non concat dimensions must match")})}})},i1=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,a1=(e,t)=>{let n=e.length,i=[];for(let o=0;o<n;++o){let a=t.setByOffset("global_idx",e[o].getByIndices("indices"));1===n?i.push(a):0===o?i.push(`if (inputIndex == ${o}u) { ${a} }`):o===n-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${o}) { ${a} }`)}return i.join(`
`)},s1=(e,t,n,i)=>{let o=k.size(n),a=Array(e.length),s=Array(e.length),u=0,l=[],d=[],p=[{type:12,data:o}];for(let n=0;n<e.length;++n)u+=e[n].dims[t],a[n]=u,d.push(e[n].dims.length),s[n]=L(`input${n}`,i,d[n]),l.push("rank"),p.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)p.push(...G(e[t].dims));p.push(...G(n));let c=F("output",i,n.length),h=c.indicesGet("indices",t),f=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(",");return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:t=>`

  ${(()=>{t.registerUniform("outputSize","u32");for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,"u32");return t.declareVariables(...s,c)})()}

  ${i1(a.length,f)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${f});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${a1(s,c)}
  }`}},Ib=(e,t)=>{let n=e.inputs,i=n[0].dims,o=k.normalizeAxis(t.axis,i.length);o1(n,o);let a=i.slice();a[o]=n.reduce((e,t)=>e+(t.dims.length>o?t.dims[o]:0),0);let s=n.filter(e=>k.size(e.dims)>0);e.compute(s1(s,o,a,n[0].dataType),{inputs:s})},Sb=e=>le({axis:e.axis})}),At,Pt,Ot,Fi,gr=C(()=>{ue(),ge(),At=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw Error(`Unsupported activation ${e.activation}`)}},Pt=(e,t)=>{"Clip"===e.activation?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):"HardSigmoid"===e.activation?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):"LeakyRelu"===e.activation&&t.push({type:1,data:e.alpha})},Ot=(e,t)=>{"Clip"===e.activation?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):"HardSigmoid"===e.activation?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):"LeakyRelu"===e.activation&&t.push({name:"alpha",type:"f32"})},Fi=e=>{let t=e?.activation||"";if("HardSigmoid"===t){let[n,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:i}}if("Clip"===t){let[n,i]=e?.activation_params||[qh,jh];return{activation:t,clipMax:i,clipMin:n}}if("LeakyRelu"===t){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),ct,Vi,Jn=C(()=>{ct=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},Vi=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Gi,nu=C(()=>{Gi=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),u1,l1,Qn,Ab,c1,eo,f1,Ui,to=C(()=>{ue(),ge(),be(),gr(),Jn(),u1=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,l1=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${3===t?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${3===t?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${3===t?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Qn=(e,t,n="f32",i,o=!1,a=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],p=o?l:a,c=o?a:l,h=p/t[0],f=a/t[1];if(!((o&&4===h&&4===e[1]||!o&&(3===h||4===h))&&p%t[0]==0&&a%t[1]==0&&4===e[0]))throw Error(`If transposeA ${o} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${n}>, ${p/h}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${u1(o,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${3===h?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${l1(o,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ab=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,c1=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",eo=(e,t,n="f32",i,o=!1,a=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],c=o?d:a,h=o?a:d;if(!(h%t[1]==0&&c%t[0]==0&&a%t[1]==0))throw Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let f=h/t[1],m=c/t[0],g=a/t[1],y=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Ab(o,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${o?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${g};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ab(o,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${c1(o)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${c}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${p}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${y}
  }
`},f1=(e,t,n,i,o,a=!1)=>{let[s,u,l]=o,[d,p,c,h]=i,f=In(s,l),m=In(u,l),g=ke(i[0].type.tensor),y=()=>{let e=p.rank,t=d.rank,n=`var aIndices: ${p.type.indices};`;for(let i=e-2-1,o=t-1;i>=0;i--,o--)n+=`
aIndices[${i}] = ${t>1?`batchIndices[${o}]`:"batchIndices"};`;return f.forEach(e=>{n+=`
aIndices[${e}] = 0;`}),n+=`
aIndices[${e-2}] = u32(row);
                   aIndices[${e-1}] = u32(colIn);`},b=()=>{let e=c.rank,t=d.rank,n=`var bIndices: ${c.type.indices};`;for(let i=e-2-1,o=t-1;i>=0;i--,o--)n+=`
bIndices[${i}] = ${t>1?`batchIndices[${o}]`:"batchIndices"};`;return m.forEach(e=>{n+=`
bIndices[${e}] = 0;`}),n+=`
bIndices[${e-2}] = u32(row);
                   bIndices[${e-1}] = u32(colIn);`};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${ct(e,g)} {
      var value = ${ct(e,g)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${y()}
        value = ${p.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${ct(e,g)} {
      var value = ${ct(e,g)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${b()}
        value = ${c.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ct(e,g)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${ct(e,g)}(bias[row])`};`:""}
        ${n}
        ${h.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ui=(e,t,n,i,o=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),p=i?i.slice(0,-2):n.slice(0,-2),c=k.size(p),h=s[s.length-2],f=s[s.length-1],m=u[u.length-1],g=f%4==0&&m%4==0,y=h<=8?[4,1,1]:[4,4,1],b=[8,8,1],_=[Math.ceil(m/b[0]/y[0]),Math.ceil(h/b[1]/y[1]),Math.ceil(c/b[2]/y[2])],v=g?4:1,x=[...l,h,f/v],w=x.length,$=[...d,f,m/v],T=$.length,S=[c,h,m/v],I=[{type:6,data:h},{type:6,data:m},{type:6,data:f}];Pt(t,I),I.push(...G(p,x,$));let E=["rank","rank"],O=e.length>2;O&&(I.push(...G(e[2].dims)),E.push("rank")),I.push(...G(S));let A=n=>{let i=p.length,a=Bi("batchDims",e[0].dataType,i,1),s=ke(e[0].dataType),u=L("a",e[0].dataType,w,v),c=L("b",e[1].dataType,T,v),h=F("result",e[0].dataType,S.length,v),f=[u,c];if(O){let t=o?v:1;f.push(L("bias",e[2].dataType,e[2].dims.length,t))}let m=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ot(t,m);let _=ke(h.type.tensor),x=f1(v,O,At(t,h.type.value,_),[a,u,c,h],[l,d,p],o);return`
  ${n.registerUniforms(m).registerInternalVariables(a).declareVariables(...f,h)}
  ${x}
  ${g?Qn(y,b,s,a):eo(y,b,s,a)}
                   `};return{name:"MatMul",shaderCache:{hint:`${y};${t.activation};${g};${o}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:I}),getShaderSource:A}}}),d1,Pb,Ob=C(()=>{ue(),jt(),be(),gr(),Jn(),nu(),to(),d1=(e,t,n,i,o=!1,a,s=4,u=4,l=4,d="f32")=>{let p=e=>{switch(e){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw Error(`innerElementSize ${e} is not supported.`)}},c=e=>{switch(e){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw Error(`innerElementSize ${e} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,f=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",g=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",y=e?"row":"col",b=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${y} / outWidth;
    let outCol = ${y} % outWidth;

    let WRow = ${b} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${b} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${b} % inChannels;
    var resData = ${ct(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${g}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,v=e?t&&i?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${ct(s,d)}(0.0);`:i&&n?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${ct(s,d)}(0.0);`,x=`${c(u)}`,w=ct(l,d),$=e?ct(s,d):ct(u,d),T=e?ct(u,d):ct(s,d),S=At(a,w,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${$} {
      ${e?v:x}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?x:v}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${w}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${Vi(o)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Pb=(e,t,n,i,o,a,s,u,l)=>{let d="NHWC"===t.format,p=d?e[0].dims[3]:e[0].dims[1],c=n[0],h=d?n[2]:n[3],f=d?n[1]:n[2],m=d?n[3]:n[1],g=d&&(p%4==0||p%3==0)&&m%4==0,y=d?m:h*f,b=d?h*f:m,_=[8,8,1],v=i<=8?[4,1,1]:[4,4,1],x=[Math.ceil(y/_[0]/v[0]),Math.ceil(b/_[1]/v[1]),Math.ceil(c/_[2]/v[2])];$e("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${x}`);let w=g?d&&p%4!=0?3:4:1,$=_[1]*v[1],T=_[0]*v[0],S=Math.max(_[0]*w,_[1]),I=i%$==0,E=o%T==0,O=a%S==0,A=g?[w,4,4]:[1,1,1],k=[{type:6,data:i},{type:6,data:o},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Pt(t,k),k.push(...G(e[0].dims,e[1].dims));let P=["rank","rank"];s&&(k.push(...G(e[2].dims)),P.push("rank")),k.push(...G(n));let D=i=>{let o=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ot(t,o);let a=g?4:1,l=ke(e[0].dataType),p=`
      fn setOutputAtIndex(flatIndex : i32, value : ${g?`vec4<${l}>`:l}) {
        result[flatIndex] = ${g?`vec4<${l}>`:l}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${g?`vec4<${l}>`:l}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${g?"/ 4":""}, value);
      }`,c=[L("x",e[0].dataType,e[0].dims.length,3===w?1:w),L("w",e[1].dataType,e[1].dims.length,a)],h=F("result",e[0].dataType,n.length,a);if(s){let t=L("bias",e[2].dataType,e[2].dims.length,a);c.push(t),p+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${g?`vec4<${l}>`:l} {
          return bias[coords.${d?"w":"y"}${g?"/ 4":""}];
        }`}return`
        ${Gi("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${i.registerUniforms(o).declareVariables(...c,h)}
        ${p}
        ${d1(d,I,E,O,s,t,A[0],A[1],A[2],l)}
        ${g?Qn(v,_,l,void 0,!d,S):eo(v,_,l,void 0,!d,S,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${w};${g};${I};${E};${O};${$};${T};${S}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:l?l(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:k}),getShaderSource:D}}}),p1,Eb,Wi,m1,Cb,h1,kb,Db,Bb=C(()=>{ue(),jt(),ge(),be(),gr(),Jn(),p1=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Eb=e=>"number"==typeof e?[e,e,e]:e,Wi=(e,t)=>t<=1?e:e+(e-1)*(t-1),m1=(e,t,n,i=1)=>{let o=Wi(t,i);return Math.floor((e[0]*(n-1)-n+o)/2)},Cb=(e,t,n,i,o)=>{null==o&&(o=m1(e,t[0],i[0]));let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*o>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*o)/i[n]+1));return a},h1=(e,t,n,i,o,a,s,u,l,d)=>{let p,c,h,f;if("VALID"===e&&(e=0),"number"==typeof e){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Cb([t,n,i,1],[u,l,d],1,[o,a,s],e);c=m[0],h=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Cb([t,n,i,1],[u,l,d],1,[o,a,s],e[0]);c=m[0],h=m[1],f=m[2]}else if("SAME_UPPER"===e){c=Math.ceil(t/o),h=Math.ceil(n/a),f=Math.ceil(i/s);let e=(c-1)*o+u-t,m=(h-1)*a+l-n,g=(f-1)*s+d-i,y=Math.floor(e/2),b=e-y,_=Math.floor(m/2),v=m-_,x=Math.floor(g/2),w=g-x;p={top:_,bottom:v,left:x,right:w,front:y,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:c,outHeight:h,outWidth:f}},kb=(e,t,n,i,o,a=!1,s="channelsLast")=>{let u,l,d,p,c;if("channelsLast"===s)[u,l,d,p,c]=e;else if("channelsFirst"===s)[u,c,l,d,p]=e;else throw Error(`Unknown dataFormat ${s}`);let[h,,f,m,g]=t,[y,b,_]=Eb(n),[v,x,w]=Eb(i),$=Wi(f,v),T=Wi(m,x),S=Wi(g,w),{padInfo:I,outDepth:E,outHeight:O,outWidth:A}=h1(o,l,d,p,y,b,_,$,T,S),P=a?h*c:h,D=[0,0,0,0,0];return"channelsFirst"===s?D=[u,P,E,O,A]:"channelsLast"===s&&(D=[u,E,O,A,P]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:p,inChannels:c,outDepth:E,outHeight:O,outWidth:A,outChannels:P,padInfo:I,strideDepth:y,strideHeight:b,strideWidth:_,filterDepth:f,filterHeight:m,filterWidth:g,effectiveFilterDepth:$,effectiveFilterHeight:T,effectiveFilterWidth:S,dilationDepth:v,dilationHeight:x,dilationWidth:w,inShape:e,outShape:D,filterShape:t}},Db=(e,t,n,i,o,a)=>{let s="channelsLast"===a,u=s?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],p=[Math.ceil(p1(({x:n.map((e,t)=>t)}).x.map(e=>n[e]))/d[0]),1,1];$e("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let c=l?s&&u%4!=0?3:4:1,h=[{type:12,data:k.size(n)},{type:12,data:i},{type:12,data:o},{type:12,data:t.strides},{type:12,data:t.dilations}];Pt(t,h),h.push(...G(e[0].dims,e[1].dims));let f=["rank","rank"],m=3===e.length;m&&(h.push(...G(e[2].dims)),f.push("rank")),h.push(...G(n));let g=a=>{let u=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ot(t,u);let d=l?4:1,p=ke(e[0].dataType),h=L("x",e[0].dataType,e[0].dims.length,3===c?1:c),f=L("W",e[1].dataType,e[1].dims.length,d),g=[h,f],y=F("result",e[0].dataType,n.length,d),b="";if(m){let t=L("bias",e[2].dataType,e[2].dims.length,d);g.push(t),b+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${p}>`:p} {
          return bias[${s?J("coords",4,5):J("coords",1,5)}${l?"/ 4":""}];
        }`}let _=ct(c,p),v=At(t,_,p);return`
            ${b}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${h.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${f.getByIndices("aIndices")};
            }
          ${a.registerUniforms(u).declareVariables(...g,y)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${y.offsetToIndices("global_idx")};
              let batch = ${J("coords",0,h.rank)};
              let d2 = ${s?J("coords",h.rank-1,h.rank):J("coords",1,h.rank)};
              let xFRCCorner = vec3<u32>(${s?J("coords",1,h.rank):J("coords",2,h.rank)},
              ${s?J("coords",2,h.rank):J("coords",3,h.rank)},
              ${s?J("coords",3,h.rank):J("coords",4,h.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?J("uniforms.x_shape",1,h.rank):J("uniforms.x_shape",2,h.rank)};
              let xShapeZ = ${s?J("uniforms.x_shape",2,h.rank):J("uniforms.x_shape",3,h.rank)};
              let xShapeW = ${s?J("uniforms.x_shape",3,h.rank):J("uniforms.x_shape",4,h.rank)};
              let xShapeU = ${s?J("uniforms.x_shape",4,h.rank):J("uniforms.x_shape",1,h.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${v}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:h}),getShaderSource:g}}}),Lb,Rb,zb=C(()=>{ue(),ge(),be(),gr(),Lb=(e,t,n,i)=>{let o=e.length>2,a=o?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l="NHWC"===t.format,d=l?n[3]:n[1],p=d/t.group,c=l&&p>=4?Me(d):1,h=k.size(n)/c,f=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];Pt(t,f),f.push(...G(s,[u[0],u[1],u[2],u[3]/c]));let m=o?["rank","rank","rank"]:["rank","rank"];f.push(...G([n[0],n[1],n[2],n[3]/c]));let g=i=>{let d=F("output",e[0].dataType,n.length,c),p=ke(d.type.tensor),h=At(t,d.type.value,p),f=L("x",e[0].dataType,s.length),m=L("w",e[1].dataType,u.length,c),g=[f,m];o&&g.push(L("b",e[2].dataType,e[2].dims,c));let y=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ot(t,y);let b=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${f.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${m.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${f.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${m.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${i.registerUniforms(y).declareVariables(...g,d)}

  ${i.mainStart()}
    ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${d.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${d.type.value} = ${d.type.value}(0);
    ${b}
    ${a}
    ${h}
    ${d.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i?i(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:f}),getShaderSource:g}},Rb=(e,t,n,i)=>{let o=e.length>2,a=Me(n[3]),s=Me(n[2]),u=k.size(n)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Pt(t,c),c.push(...G(l,d,p));let h=(s-1)*t.strides[1]+d[1],f=n=>{let i=F("output",e[0].dataType,p.length,a),u=ke(i.type.tensor),c=At(t,i.type.value,u),f=L("x",e[0].dataType,l.length,a),m=L("w",e[1].dataType,d.length,a),g=[f,m];o&&g.push(L("b",e[2].dataType,e[2].dims,a));let y=o?"value += b[output_channel];":"",b=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ot(t,b),`
  ${n.registerUniforms(b).declareVariables(...g,i)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${f.type.value}, ${h}>;
    var values: array<${i.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${f.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${f.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${m.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${y}
      ${c}
      ${i.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${h};${d[0]};${d[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:f}}}),ou,g1,Nb,iu=C(()=>{ue(),ge(),to(),be(),gr(),ou=(e,t,n,i,o=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],p=s[s.length-1],c=Me(d),h=Me(p),f=Me(l),m=k.size(n)/c/f,g=e.length>2,y=i?i.slice(0,-2):n.slice(0,-2),b=[k.size(y),l,d],_=[{type:12,data:m},{type:12,data:l},{type:12,data:d},{type:12,data:p}];Pt(t,_),_.push(...G(y,s,u)),g&&_.push(...G(e[2].dims)),_.push(...G(b));let v=i=>{let a=Bi("batch_dims",e[0].dataType,y.length),l=L("a",e[0].dataType,s.length,h),d=L("b",e[1].dataType,u.length,c),p=F("output",e[0].dataType,b.length,c),m=ke(p.type.tensor),_=At(t,p.type.value,m),v=[l,d],x="";if(g){let t=o?c:1;v.push(L("bias",e[2].dataType,e[2].dims.length,t)),x=`${o?`value += bias[col / ${t}];`:`value += ${p.type.value}(bias[row + i]);`}`}let w=s.slice(0,-2),$=u.slice(0,-2),T=In(w,y),S=In($,y),I=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ot(t,I);let E=(e,t)=>{let n=e.rank,i=e.name;if(2===n)return`var ${i}_indices = ${e.type.indices}(0u, 0u);`;let o=a.rank,s=`var ${i}_indices: ${e.type.indices};`;for(let e=n-2-1,t=o-1;e>=0;e--,t--)s+=`
${i}_indices[${e}] = ${o>1?`batch_indices[${t}]`:"batch_indices"};`;return t.forEach(e=>{s+=`
${i}_indices[${e}] = 0;`}),s+=`${i}_indices[${n-2}] = 0u;
                     ${i}_indices[${n-1}] = 0u;`},O=()=>{let e=`var a_data: ${l.type.value};`;for(let t=0;t<h;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${c}];`;for(let t=0;t<f;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${h}];`;for(let n=0;n<h;n++)e+=`
            values[${t}] = fma(${d.type.value}(a_data${1===h?"":`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${i.registerUniforms(I).registerInternalVariables(a).declareVariables(...v,p)}
  ${i.mainStart()}
    ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${2===n.length?"":`let batch_indices = ${a.offsetToIndices("batch")};`}
    ${E(l,T)}
    let a_offset = ${l.indicesToOffset("a_indices")};
    ${E(d,S)}
    let b_offset = ${d.indicesToOffset("b_indices")};
    var values: array<${p.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${O()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${x}
      ${_}
      let cur_indices = ${p.type.indices}(batch, row + i, col);
      let offset = ${p.indicesToOffset("cur_indices")};
      ${p.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${h};${f};${o}`,inputDependencies:g?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:v}},g1=e=>{if(!e||2!==e.length)throw Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error("shared dimension does not match.")},Nb=e=>{g1(e.inputs);let t=or.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error("Can't use matmul on the given tensors");let n=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];n<8&&i<8?e.compute(ou(e.inputs,{activation:""},t)):e.compute(Ui(e.inputs,{activation:""},t))}}),b1,au,y1,su,uu,Mb,x1,w1,lu,Fb=C(()=>{ge(),Ob(),Bb(),to(),zb(),gr(),iu(),hr(),b1=(e,t,n,i,o,a)=>{let s=e[0],u=e.slice(a?1:2,a?3:4),l=u.length,d=t[0],p=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),c=u.map((e,t)=>e+i[t]+i[t+l]).map((e,t)=>Math.floor((e-p[t]+o[t])/o[t]));return c.splice(0,0,s),c.splice(a?3:1,0,d),c},au=[2,3,1,0],y1=(e,t)=>{if(!e||2!==e.length&&3!==e.length)throw Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw Error("filter does not have same dimension as input");if(e[0].dims["NHWC"===t.format?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(3===e.length&&(1!==e[2].dims.length||e[1].dims[0]!==e[2].dims[0]))throw Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==2*n)throw Error(`pads should be ${2*n}D`);if(0!==t.kernelShape.length&&t.kernelShape.length!==e[1].dims.length-2)throw Error("invalid kernel shape")},su=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)0===n[e-2]&&(n[e-2]=t[1].dims[e]);let i=e.pads.slice();Zr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,i,"NHWC"===e.format,e.autoPad);let o=Object.assign({},e);return Object.assign(o,{kernelShape:n,pads:i}),o},uu=e=>{let t=Fi(e),n=e.format;return{autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},Mb=(e,t,n,i)=>{let o="NHWC"===n.format,a=b1(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,o);if(1!==n.group){let s=[t[0]];if(o){let i=e.kernelCustomData.wT??e.compute(at(t[1],au),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i),s.push(i)}else s.push(t[1]);3===t.length&&s.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&o&&t[1].dims[0]===n.group&&1===t[1].dims[1]&&1===n.dilations[0]&&1===n.dilations[1]?e.compute(Rb(s,n,a,i),{inputs:s}):e.compute(Lb(s,n,a,i),{inputs:s});return}let s=3===t.length,u=t[0].dims[o?1:2],l=t[0].dims[o?2:3],d=t[0].dims[o?3:1],p=t[1].dims[2],c=t[1].dims[3],h=a[o?1:2],f=a[o?2:3],m=a[o?3:1],g=o&&p===u&&c===l&&0===n.pads[0]&&0===n.pads[1];if(g||1===p&&1===c&&1===n.dilations[0]&&1===n.dilations[1]&&1===n.strides[0]&&1===n.strides[1]&&0===n.pads[0]&&0===n.pads[1]){let p=a[0],c,y,b,_=[];if(o){let i=e.kernelCustomData.wT??e.compute(at(t[1],au),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i),g){let e=u*l*d;c=t[0].reshape([1,p,e]),y=i.reshape([1,e,m]),b=[1,p,m]}else c=t[0].reshape([p,u*l,d]),y=i.reshape([1,d,m]),b=[p,h*f,m];_.push(c),_.push(y)}else c=t[0].reshape([p,d,u*l]),y=t[1].reshape([1,m,d]),b=[p,m,h*f],_.push(y),_.push(c);s&&_.push(t[2]);let v=b[2],x=_[0].dims[_[0].dims.length-1];v<8&&x<8?e.compute(ou(_,n,a,b,o,i),{inputs:_}):e.compute(Ui(_,n,a,b,o,i),{inputs:_});return}let y=!0,b=e.kernelCustomData.wT??e.compute(at(t[1],au),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let _=[t[0],b];s&&_.push(t[2]);let v=o?h*f:m,x=o?m:h*f,w=p*c*d;e.compute(Pb(_,n,a,v,x,w,s,y,i),{inputs:_})},x1=(e,t)=>{let n="NHWC"===t.format,i=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];3===e.inputs.length&&i.push(e.inputs[2]);let o=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=su({...t,pads:o,strides:a,dilations:s,kernelShape:u},i);Mb(e,i,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},w1=(e,t,n)=>{let i="NHWC"===n.format?"channelsLast":"channelsFirst",o=su(n,t),a="NOTSET"===n.autoPad?n.pads:n.autoPad,s=kb(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,i);e.compute(Db(t,o,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},lu=(e,t)=>{if(y1(e.inputs,t),3===e.inputs[0].dims.length)x1(e,t);else if(5===e.inputs[0].dims.length)w1(e,e.inputs,t);else{let n=su(t,e.inputs);Mb(e,e.inputs,n)}}}),v1,Vb,Gb=C(()=>{ue(),jt(),be(),gr(),Jn(),nu(),to(),v1=(e,t=!1,n,i,o=4)=>{let a=e=>{switch(e){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${i}(v0, v1, v2, v3);
            `;default:throw Error(`innerElementSize ${e} is not supported.`)}},s=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,u=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,l=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",d=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",p=e?"row":"col",c=e?"col":"row",h=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${p} / outWidth;
      let outCol = ${p} % outWidth;

      let WRow = ${c} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${c} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${l}) || fract(xR) > 0.0) {
        return ${i}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${d}) || fract(xC) > 0.0) {
        return ${i}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${c} % inChannels;
      ${s}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${o}];`,f=e?`
      let col = colIn * ${o};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${h}
      }
      return ${i}(0.0);`:`
      let col = colIn * ${o};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${h}
      }
      return ${i}(0.0);`,m=`
      let col = colIn * ${o};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${a(o)}
      }
      return ${i}(0.0);
      `,g=At(n,i);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?f:m}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?m:f}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${i}) {
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${u}
      ${Vi(t)}
      ${g}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${o}] = value;
    }
  }`},Vb=(e,t,n,i,o,a,s,u)=>{let l="NHWC"===t.format,d=l?e[0].dims[3]:e[0].dims[1],p=n[0],c=l?n[2]:n[3],h=l?n[1]:n[2],f=l?n[3]:n[1],m=l&&d%4==0&&d%3&&f%4==0,g=l?f:c*h,y=l?c*h:f,b=[8,8,1],_=i<=8?[4,1,1]:[4,4,1],v=[Math.ceil(g/b[0]/_[0]),Math.ceil(y/b[1]/_[1]),Math.ceil(p/b[2]/_[2])];$e("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${v}`);let x=m?4:1,w=Math.max(b[0]*x,b[1]),$=m?4:1,T=[t.kernelShape[l?1:2],t.kernelShape[l?2:3]],S=[T[0]+(t.dilations[0]<=1?0:(T[0]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(T[1]-1)*(t.dilations[1]-1))],I=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],E=[{type:6,data:i},{type:6,data:o},{type:6,data:a},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:T},{type:6,data:I}];Pt(t,E),E.push(...G(e[0].dims,e[1].dims));let O=["rank","rank"];s&&(E.push(...G(e[2].dims)),O.push("rank")),E.push(...G(n));let A=i=>{let o=L("x",e[0].dataType,e[0].dims.length,$),a=L("w",e[1].dataType,e[1].dims.length,1),d=F("result",e[0].dataType,n.length,$),p=[o,a],c="";if(s){let t=L("bias",e[2].dataType,e[2].dims.length,$);p.push(t),c+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${t.type.value} {
            return bias[coords.${l?"w":"y"}${m?"/ 4":""}];
          }`}let h=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:T.length},{name:"pads",type:"i32",length:I.length}];Ot(t,h);let f=ke(e[0].dataType,1);if("f16"!==f&&"f32"!==f)throw Error(`elemType ${f} is not supported.`);return`
        ${Gi("uniforms.result_strides")}
        ${i.registerUniforms(h).declareVariables(...p,d)};
        ${c}
        ${v1(l,s,t,o.type.value,x)}
        ${m?Qn(_,b,f,void 0,!l,w):eo(_,b,f,void 0,!l,w,!1,void 0,u)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${_};${b};${m}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:E}),getShaderSource:A}}}),T1,cu,Ub=C(()=>{ue(),jt(),ge(),be(),T1=(e,t,n,i,o,a=!1,s,u,l=!1)=>{let d=l?1:2,p=l?2:3,c=l?3:1,h=a?2:1,f=`
  fn setOutputAtIndex(flatIndex : u32, value : ${a?`vec4<${s}>`:s}) {
    result[flatIndex] = ${a?`vec4<${s}>`:s}(value);
  }`;i&&(f+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${a?`vec4<${s}>`:s} {
      return bias[coords.${l?"w":"y"}${a?"/ 4":""}];
    }`);let m=a?4:1,g=L("W",t[1].dataType,t[1].dims.length,m),y=L("Dy",t[0].dataType,t[0].dims.length,m),b=[y,g];i&&b.push(L("bias",t[2].dataType,[n[c]].length,m));let _=F("result",t[0].dataType,n.length,m),v=`{
        let batch: u32 = ${o?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${o?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${o?"global_id.y":"workgroup_id.y"} * ${h};
        let d1: u32 = ${o?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${s}>, ${h}>;
        for (var i = 0; i < ${h}; i++) {
          dotProd[i] = vec4<${s}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${s}(dyCorner.x) + ${s}(wR)) / ${s}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${s}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${s}(dyCorner.y) + ${s}(wC)) / ${s}(uniforms.strides.y);
            let dyC2 = (${s}(dyCorner.y) + 1.0 + ${s}(wC)) / ${s}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${s}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${s}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${y.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${y.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${s}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${c}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${y.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${y.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${h}; i = i + 1) {
          let value = dotProd[i] + ${i?"bias[c+i]":`vec4<${s}>(0.0)`};
          ${_.set("batch","r","c + i","d1","value")};
        }
      }`,x=`
          let outputIndices = ${_.offsetToIndices("global_idx")};
          let batch = ${_.indicesGet("outputIndices",0)};
          let d1 = ${_.indicesGet("outputIndices",c)};
          let r = ${_.indicesGet("outputIndices",d)};
          let c = ${_.indicesGet("outputIndices",p)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${s}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${s}(dyRCorner) + ${s}(wR)) / ${s}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${s}(uniforms.Dy_shape[${d}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${s}(dyCCorner) + ${s}(wC)) / ${s}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${s}(uniforms.Dy_shape[${p}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${l?y.get("batch","idyR","idyC","inputChannel"):y.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${g.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${i?"bias[d1]":`${s}(0.0)`};
          ${_.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(u).declareVariables(...b,_)}
  ${f}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${a?v:x}}`},cu=(e,t,n)=>{let i=e.length>2,o=t.outputShape,a=k.size(o),s=[Math.ceil(a/64),1,1];$e("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${s}`);let u="NHWC"===t.format,l=["rank","rank"],d=[t.strides[0],t.strides[1]],p=[t.kernelShape[u?1:2],t.kernelShape[u?2:3]],c=[t.dilations[0],t.dilations[1]],h=[p[0]+(t.dilations[0]<=1?0:(t.kernelShape[u?1:2]-1)*(t.dilations[0]-1)),p[1]+(t.dilations[1]<=1?0:(t.kernelShape[u?2:3]-1)*(t.dilations[1]-1))],f=[h[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),h[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],m=!1,g=t.group,y=e[1].dims,b=[{type:12,data:a},{type:12,data:d},{type:12,data:p},{type:12,data:c},{type:12,data:h},{type:6,data:f},{type:12,data:y[0]/g},{type:12,data:y[1]},...G(e[0].dims,e[1].dims)];i&&(b.push(...G(e[2].dims)),l.push("rank")),b.push(...G(o));let _=1===s[1]&&1===s[2],v=t=>{let n=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:d.length},{name:"filter_dims",type:"u32",length:p.length},{name:"dilations",type:"u32",length:p.length},{name:"effective_filter_dims",type:"u32",length:h.length},{name:"pads",type:"i32",length:f.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],a=ke(e[0].dataType);return`${T1(t,e,o,i,_,m,a,n,u)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:l},getRunData:()=>({dispatchGroup:{x:s[0],y:s[1],z:s[2]},outputs:[{dims:n?n(o):o,dataType:e[0].dataType}],programUniforms:b}),getShaderSource:v}}}),_1,I1,S1,Wb,Hb,$1,A1,P1,O1,qb,jb=C(()=>{Gb(),Ub(),gr(),hr(),_1=(e,t,n,i,o,a)=>(e-1)*t+n+(i-1)*o+1-a,I1=(e,t,n,i,o)=>{let a=Math.floor(e/2);"SAME_UPPER"===t?(n[i]=a,n[o]=e-a):"SAME_LOWER"===t&&(n[i]=e-a,n[o]=a)},S1=(e,t,n,i,o,a,s,u,l,d)=>{let p=e.length-2,c=0===d.length;l.length<p&&l.push(...Array(p-l.length).fill(0));let h=e[0],f=t[u?3:1]*o;for(let o=0,h=e.length-p-(u?1:0);o<p;++o,++h){let u=e[h],f=c?u*s[o]:d[o];I1(_1(u,s[o],a[o],t[h],n[o],f),i,a,o,o+p),c&&d.push(s[o]*(u-1)+l[o]+(t[h]-1)*n[o]+1-a[o]-a[o+p])}d.splice(0,0,h),d.splice(u?3:1,0,f)},Wb=(e,t)=>{let n=e.kernelShape.slice();if(0===e.kernelShape.length||0===e.kernelShape.reduce((e,t)=>e*t,1)){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let i="NHWC"===e.format;n.splice(0,0,t[1].dims[0]),n.splice(i?3:1,0,t[1].dims[1]);let o=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();0===l.reduce((e,t)=>e+t,0)&&(l=Array(t[0].dims.length-2).fill(1));let d=e.strides.slice();0===d.reduce((e,t)=>e+t,0)&&(d=Array(t[0].dims.length-2).fill(1)),S1(u,n,l,e.autoPad,e.group,o,d,i,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:n,pads:o,outputPadding:s,outputShape:a,dilations:l,strides:d}),p},Hb=e=>{let t=Fi(e),n=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],o=e.dilations,a=e.group,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst();return{autoPad:i,format:n,dilations:o,group:a,kernelShape:s,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},$1=(e,t)=>{if(!e||2!==e.length&&3!==e.length)throw Error("Conv requires 2 or 3 inputs");if(4!==e[0].dims.length&&3!==e[0].dims.length)throw Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw Error("filter does not have same dimension as input");if(e[0].dims["NHWC"===t.format?e[0].dims.length-1:1]!==e[1].dims[0])throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(3===e.length&&(1!==e[2].dims.length||e[2].dims[0]!==n))throw Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==i)throw Error(`dilations should be ${i}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==i)throw Error(`strides should be ${i}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==2*i)throw Error(`pads should be ${2*i}D`);if(t.outputPadding.length!==i&&0!==t.outputPadding.length)throw Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&0!==t.kernelShape.length&&t.kernelShape.length!==e[1].dims.length-2)throw Error("invalid kernel shape");if(0!==t.outputShape.length&&t.outputShape.length!==e[0].dims.length-2)throw Error("invalid output shape")},A1=[2,3,1,0],P1=(e,t,n)=>{let i=Wb(n,t),o="NHWC"===n.format,a=i.outputShape,s=a[o?3:1],u=t[0].dims[o?3:1];if(1!==i.group||1===s&&1===u){e.compute(cu(t,i));return}let l=a[o?1:2],d=a[o?2:3],p=t[1].dims[2],c=t[1].dims[3],h=o?l*d:s,f=o?s:l*d,m=p*c*u,g=!0,y=e.kernelCustomData.wT??e.compute(at(t[1],A1),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=y);let b=[t[0],y],_=3===t.length;_&&(o||1!==t[2].dims.length?b.push(t[2]):b.push(t[2].reshape([t[2].dims[0],1,1]))),e.compute(Vb(b,i,a,h,f,m,_,g),{inputs:b})},O1=(e,t)=>{let n="NHWC"===t.format,i=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];3===e.inputs.length&&i.push(e.inputs[2]);let o=t.kernelShape;(0===o.length||0===o[0])&&(o=[e.inputs[1].dims[2]]);let a=t.dilations;(0===a.length||0===a[0])&&(a=[1]);let s=t.strides;(0===s.length||0===s[0])&&(s=[1]);let u=t.pads;0===u.length&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),a=[1].concat(a),o=[1].concat(o);let l=Wb({...t,pads:u,strides:s,dilations:a,kernelShape:o},i);e.compute(cu(i,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]]))},qb=(e,t)=>{$1(e.inputs,t),3===e.inputs[0].dims.length?O1(e,t):P1(e,e.inputs,t)}}),E1,Kb,Xb,Zb=C(()=>{ue(),ge(),Xe(),be(),E1=(e,t,n,i)=>{let o=k.size(t),a=t.length,s=L("input",e,a),u=F("output",e,a),l=6===n.dataType?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),d=k.normalizeAxis(l,a),p=e=>{let t=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,n=J("uniforms.input_shape","uniforms.axis",a),o=i.reverse?t+(i.exclusive?" + 1":""):"0",l=i.reverse?n:t+(i.exclusive?"":" + 1");return`
                ${e.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${o};
                  let last : i32 = ${l};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:d},...G(t,t)]}),getShaderSource:p}},Kb=(e,t)=>{let n=e.inputs[0].dims,i=e.inputs[0].dataType,o=e.inputs[1];e.compute(E1(i,n,o,t),{inputs:[0]})},Xb=e=>{let t=1===e.exclusive,n=1===e.reverse;return le({exclusive:t,reverse:n})}}),C1,k1,D1,Yb,Jb,Qb=C(()=>{ue(),ge(),Xe(),be(),C1=e=>{if(!e||1!==e.length)throw Error("DepthToSpace requires 1 input.");if(4!==e[0].dims.length)throw Error("DepthToSpace requires 4D input.")},k1=(e,t,n,i)=>{let o=[];o.push(`fn perm(i: ${i.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let i=0;i<t;++i)o.push(n.indicesSet("a",e[i],`i[${i}]`));return o.push("return a;}"),o.join(`
`)},D1=(e,t)=>{let n,i,o,a,s,u,l="NHWC"===t.format,d=t.blocksize,p="DCR"===t.mode;l?([n,i,o,a]=e.dims,s=p?[n,i,o,d,d,a/d**2]:[n,i,o,a/d**2,d,d],u=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,i,o,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[n,d,d,a/d**2,i,o]:[n,a/d**2,d,d,i,o],u=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),h=c.dims.length,f=e.dataType,m=L("a",f,h),g=F("output",f,h),y=e=>`
  ${e.registerUniform("output_size","u32").declareVariables(m,g)}

  ${k1(u,h,m,g)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:e=>{let t=l?[n,i*d,o*d,a/d**2]:[n,a/d**2,i*d,o*d],s=k.size(t),p=c.dims,h=k.sortBasedOnPerm(p,u);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...G(p,h)]}},getShaderSource:y}},Yb=(e,t)=>{C1(e.inputs),e.compute(D1(e.inputs[0],t))},Jb=e=>le({blocksize:e.blocksize,mode:e.mode,format:e.format})}),fu,Hi,ey,L1,du,pu,ty,R1,ry,ny,oy=C(()=>{ue(),ge(),Xe(),be(),ey="^"+(Hi="("+(fu="[a-zA-Z]|\\.\\.\\.")+")+")+"$",L1="^"+("("+Hi+",)*"+Hi)+"$",du=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);void 0===n?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},pu=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,i]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(L1)))throw Error("Invalid LHS term");if(n.split(",").forEach((t,n)=>{let i=e[n].dims.slice();if(!t.match(RegExp(ey)))throw Error("Invalid LHS term");let o=this.processTerm(t,!0,i,n);this.lhs.push(o)}),""===i)i+=[...this.symbolToInfo.entries()].filter(([e,t])=>1===t.count||"..."===e).map(([e])=>e).join("");else if(!i.match(RegExp(Hi)))throw Error("Invalid RHS");i.match(RegExp(fu,"g"))?.forEach(e=>{if("..."===e)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(void 0===t)throw Error("Invalid RHS symbol");this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,n){let i=this.symbolToInfo.get(e);if(void 0!==i){if(i.dimValue!==t&&1!==i.count)throw Error("Dimension mismatch");i.count++,i.inputIndices.push(n)}else i={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,i)}processTerm(e,t,n,i=-1){let o=n.length,a=!1,s=[],u=0;if(!e.match(RegExp(ey))&&!t&&""!==e)throw Error("Invalid LHS term");let l=e.match(RegExp(fu,"g")),d=new du(i);return l?.forEach((e,p)=>{if("..."===e){if(a)throw Error("Only one ellipsis is allowed per input term");a=!0;let e=o-l.length+1;if(e<0)throw Error("Ellipsis out of bounds");if(s=n.slice(u,u+e),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw Error("Ellipsis must be specified in the LHS");for(let e=0;e<s.length;e++){let t=String.fromCharCode(48+e);d.addSymbol(t,p+e),this.addSymbol(t,n[u++],i)}}else d.addSymbol(e,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[u++],i)}),d}},ty=e=>e+"_max",R1=(e,t,n,i)=>{let o=e.map(e=>e.length).map((e,n)=>L(`input${n}`,t,e)),a=k.size(i),s=F("output",t,i.length),u=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e)),l=e=>{let t=[],i="var prod = 1.0;",a="var sum = 0.0;",l="sum += prod;",d=[],p=[],c=[],h=[],f=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,i)=>{if(n.rhs.symbolToIndices.has(i)){let a=n.rhs.symbolToIndices.get(i)?.[0];void 0!==a&&n.lhs.forEach((n,u)=>{if(e.inputIndices.includes(u)){let e=n.symbolToIndices.get(i);if(void 0===e)throw Error("Invalid symbol error");e.forEach(e=>{t.push(`${o[u].indicesSet(`input${u}Indices`,e,s.indicesGet("outputIndices",a))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(i);if(void 0===e)throw Error("Invalid symbol error");e.forEach(e=>{d.push(`${o[n].indicesSet(`input${n}Indices`,e,`${i}`)}`)}),h.push(`prod *= ${o[n].getByIndices(`input${n}Indices`)};`)}}),p.push(`for(var ${i}: u32 = 0; ${i} < uniforms.${ty(i)}; ${i}++) {`),c.push("}")});let m=f?[...t,`let sum = ${o.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(" * ")};`]:[...t,a,...p,...d,i,...h,l,...c];return`
            ${e.registerUniforms(u.map(e=>({name:`${ty(e)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...o,s)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${o.map((e,t)=>`var input${t}Indices: ${o[t].type.indices};`).join(`
`)}
            ${m.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let o=u.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));o.push({type:12,data:a});let s=e.map((e,t)=>[...G(e)]).reduce((e,t)=>e.concat(t),o);return s.push(...G(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:s}},getShaderSource:l}},ry=(e,t)=>{let n=new pu(e.inputs,t.equation),i=n.outputDims,o=e.inputs.map((e,t)=>e.dims);e.compute(R1(o,e.inputs[0].dataType,n,i))},ny=e=>{let t=e.equation.replace(/\s+/g,"");return le({equation:t})}}),z1,iy,N1,M1,ay,sy=C(()=>{ue(),ge(),be(),z1=e=>{if(!e||2!==e.length)throw Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),i=n.length<t.length?0:n.length-t.length,o=t.length<n.length?0:t.length-n.length;for(;i<n.length&&o<t.length;++i,++o)if(n[i]!==t[o]&&1!==n[i]&&1!==t[o])throw Error("Expand requires shape to be broadcastable to input")},iy=(e,t)=>{let n=e.length-t.length,i=[];for(let t=0;t<n;++t)i.push(e[t]);for(let o=0;o<t.length;++o)i.push(1===t[o]?e[o+n]:t[o]);return i},N1=(e,t)=>e.length>t.length?iy(e,t):iy(t,e),M1=e=>{let t=e[0].dims,n=N1(t,Array.from(e[1].getBigInt64Array(),Number)),i=e[0].dataType,o=9===i?4:1,a=Math.ceil(k.size(n)/o),s=e=>{let a=L("input",i,t.length,o),s=F("output",i,n.length,o),u;if(9===i){let e=(e,t,n="")=>`
          let outputIndices${t} = ${s.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${a.broadcastedIndicesToOffset(`outputIndices${t}`,s)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${n}(${a.getByOffset(`index${t}`)}[component${t}]);
        `;u=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${e("data",0,"u32")}
        ${e("data",1,"u32")}
        ${e("data",2,"u32")}
        ${e("data",3,"u32")}
        ${s.setByOffset("global_idx","data")}
      }`}else u=`
        let outputIndices = ${s.offsetToIndices("global_idx")};
        let inputOffset = ${a.broadcastedIndicesToOffset("outputIndices",s)};
        ${s.setByOffset("global_idx",a.getByOffset("inputOffset"))}
      }`;return`
    ${e.registerUniform("vec_size","u32").declareVariables(a,s)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${u}`},u=[{type:12,data:a},...G(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length}`,inputDependencies:["rank"]},getShaderSource:s,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u})}},ay=e=>{z1(e.inputs),e.compute(M1(e.inputs),{inputs:[0]})}}),F1,uy,ly=C(()=>{ue(),ge(),be(),Mi(),F1=e=>{let t=e[0].dataType,n=k.size(e[0].dims),i=k.size(e[1].dims),o=i%4==0,a=e=>{let n=L("x",t,[1],4),i=L("bias",t,[1],4),a=F("y",t,[1],4),s=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],u=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${i.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,l=o?`
      let bias = ${i.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${u(0)}${u(1)}${u(2)}${u(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(s).declareVariables(n,i,a)}

    ${tu(it(t))}

    ${e.mainStart(Yr)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${n.getByOffset("global_idx")};
      ${l}
      let x_in = x + bias;
      ${a.setByOffset("global_idx",ru("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(n/Yr/4)}})}},uy=e=>{e.inputs.length<2||0===k.size(e.inputs[1].dims)?ab(e):e.compute(F1(e.inputs))}}),V1,G1,cy,fy,dy=C(()=>{ue(),ge(),Xe(),be(),V1=e=>{if(!e||2!==e.length)throw Error("Gather requires 2 inputs.")},G1=(e,t)=>{let n=e[0].dims,i=e[1].dims,o=n.length,a=k.normalizeAxis(t.axis,o),s=n.slice(0);s.splice(a,1,...i);let u=n[a],l=9===e[0].dataType?4:1,d=Math.ceil(k.size(s)/l),p=[{type:12,data:d},{type:6,data:u},{type:12,data:a},...G(e[0].dims,e[1].dims,s)],c=t=>{let n=L("data",e[0].dataType,e[0].dims.length,l),u=L("inputIndices",e[1].dataType,e[1].dims.length),d=F("output",e[0].dataType,s.length,l),p=e=>{let t=i.length,l=`var indicesIndices${e}  = ${u.type.indices}(0);`;for(let n=0;n<t;n++)l+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${s.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;l+=`
          var idx${e} = ${u.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,i=0;n<o;n++)n===a?(l+=`${o>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,i+=t):(l+=`${o>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${s.length>1?`outputIndices${e}[${i}]`:`outputIndices${e}`};`,i++);return l},c;if(9===e[0].dataType){let e=(e,t,i="")=>`
          let outputIndices${t} = ${d.offsetToIndices(`outputOffset + ${t}u`)};
          ${p(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${i}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${e("value",0,"u32")}
        ${e("value",1,"u32")}
        ${e("value",2,"u32")}
        ${e("value",3,"u32")}
        ${d.setByOffset("global_idx","value")}
      `}else c=`
      let outputIndices = ${d.offsetToIndices("global_idx")};
      ${p("")};
      let value = ${n.getByIndices("dataIndices")};
      ${d.setByOffset("global_idx","value")};
      `;return`
      ${t.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(n,u,d)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${c}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:c}},cy=e=>le({axis:e.axis}),fy=(e,t)=>{V1(e.inputs),e.compute(G1(e.inputs,t))}}),U1,W1,py,my,hy=C(()=>{ue(),ge(),Xe(),be(),U1=(e,t)=>{if(e.length<3||e.length>4)throw Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=k.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,o=e[0],a=e[2],s=4===e.length?e[3]:void 0;if(a.dims.length!==o.dims.length||!o.dims.map((e,t)=>t===n?Math.ceil(e/i)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==o.dataType)throw Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},W1=(e,t)=>{let n=e[0].dims,i=e[1].dims,o=n.length,a=k.normalizeAxis(t.gatherAxis,o),s=k.normalizeAxis(t.quantizeAxis,o),u=n.slice(0);u.splice(a,1,...i);let l=k.size(u),d=e[2].dataType,p=22===e[0].dataType,c=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...G(...e.map((e,t)=>e.dims),u)],h=t=>{let o=L("data",e[0].dataType,e[0].dims.length),s=L("inputIndices",e[1].dataType,e[1].dims.length),l=L("scales",e[2].dataType,e[2].dims.length),c=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,h=F("output",d,u.length),f=[o,s,l];c&&f.push(c);let m=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${t.registerUniforms(m).declareVariables(...f,h)}
        ${t.mainStart()}
        let output_indices = ${h.offsetToIndices("global_idx")};
        var indices_indices = ${s.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${h.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${s.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${h.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${o.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${h.indicesGet("output_indices","i")};
          ${o.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${s.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${o.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${h.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${o.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${o.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${o.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${l.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${l.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${l.getByIndices("scale_indices")};
        ${c?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${c.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${c.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${it(d)}(quantized_data - zero_point) * scale;
        ${h.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>1!==t).map(e=>e.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(e,t)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:h}},py=(e,t)=>{U1(e.inputs,t),e.compute(W1(e.inputs,t))},my=e=>le({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),H1,q1,gy,by,yy=C(()=>{ue(),ge(),Xe(),be(),H1=e=>{if(!e||2!==e.length)throw Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},q1=(e,t)=>{let n=e[0].dims,i=e[0].dataType,o=n.length,a=e[1].dims,s=e[1].dataType,u=k.normalizeAxis(t.axis,o),l=n[u],d=a.slice(0),p=k.size(d),c=L("input",i,o),h=L("indicesInput",s,a.length),f=F("output",i,d.length),m=[{type:12,data:p},{type:6,data:l},{type:12,data:u}];return m.push(...G(n,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,h,f)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},gy=e=>le({axis:e.axis}),by=(e,t)=>{H1(e.inputs),e.compute(q1(e.inputs,t))}}),j1,K1,xy,wy,vy=C(()=>{ue(),ge(),be(),j1=e=>{if(!e)throw Error("Input is missing");if(e.length<2||e.length>3)throw Error("Invaid input number.");if(3===e.length&&e[2].dims.length>2)throw Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||3===e.length&&e[0].dataType!==e[2].dataType)throw Error("Input types are mismatched")},K1=(e,t)=>{let n=e[0].dims.slice(),i=e[1].dims.slice(),[o,a,s]=Di.getShapeOfGemmResult(n,t.transA,i,t.transB,3===e.length?e[2].dims:void 0),u=[o,a];if(!u)throw Error("Can't use gemm on the given tensors");let l=k.size(u),d=[{type:12,data:l},{type:12,data:o},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],p=["type","type"];3===e.length&&(d.push(...G(e[2].dims)),p.push("rank")),d.push(...G(u));let c=n=>{let i="";t.transA&&t.transB?i="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?i="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?i="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":t.transA||t.transB||(i="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let o=1===t.alpha?"":"value *= uniforms.alpha;",a=L("a",e[0].dataType,e[0].dims),s=L("b",e[1].dataType,e[1].dims),l=a.type.value,d=null,p=[a,s];3===e.length&&(d=L("c",e[2].dataType,e[2].dims.length),p.push(d));let c=F("output",e[0].dataType,u.length);p.push(c);let h=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${n.registerUniforms(h).declareVariables(...p)}

  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${l}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${i}
    }

    ${o}
    ${null!=d?`let cOffset = ${d.broadcastedIndicesToOffset("vec2(m, n)",c)}; value += ${l}(uniforms.beta) * ${d.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c}},xy=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${1===e.alpha}`}),wy=(e,t)=>{j1(e.inputs),e.compute(K1(e.inputs,t))}}),It,Y1,_y,Ty,J1,ro,Iy,mu=C(()=>{ue(),ge(),Xe(),ki(),zi(),be(),hr(),It=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Y1=(e,t)=>{let n,i=e[0],o=It(e,1),a=It(e,2),s=It(e,3),u=It(e,4),l=It(e,5),d=It(e,6),p=It(e,7);if(3!==i.dims.length&&5!==i.dims.length)throw Error("Input query is expected to have 3 or 5 dimensions");let c=i.dims[0],h=i.dims[1],f=3===i.dims.length?i.dims[2]:t.numHeads*i.dims[4],m=h,g=0,y=0,b=Math.floor(f/t.numHeads);if(d&&p&&k.size(d.dims)&&k.size(p.dims)){if(4!==d.dims.length)throw Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==b)throw Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==c||p.dims[1]!==t.numHeads||p.dims[3]!==b)throw Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(4!==p.dims.length)throw Error('Input "past_value" is expected to have 4 dimensions');g=d.dims[2],y=d.dims[2]}else if(d&&k.size(d.dims)||p&&k.size(p.dims))throw Error('Input "past_key" and "past_value" shall be both present or both absent');if(o&&k.size(o.dims)>0){if(3!==i.dims.length)throw Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==o.dims[0])throw Error('Input "query" and "key" shall have same dim 0 (batch size)');if(3===o.dims.length){if(o.dims[2]!==i.dims[2])throw Error('Input "query" and "key" shall have same dim 2 (hidden_size)');n=2,m=o.dims[1]}else if(5===o.dims.length){if(o.dims[2]!==t.numHeads||2!==o.dims[3]||o.dims[4]!==b)throw Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw Error('Expect "value" be none when "key" has packed kv format.');n=5,m=o.dims[1]}else{if(o.dims[1]!==t.numHeads||o.dims[3]!==b)throw Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');n=0,m=o.dims[2]}}else{if(5!==i.dims.length)throw Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||3!==i.dims[3])throw Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');n=3}if(s&&k.size(s.dims)>0){if(1!==s.dims.length)throw Error('Input "bias" is expected to have 1 dimension');if(o&&5===o.dims.length&&2===o.dims[3])throw Error("bias is not allowed for packed kv.")}let _=g+m,v=0;if(u&&k.size(u.dims)>0){v=8;let e=u.dims;throw 1===e.length?e[0]===c?v=1:e[0]===3*c+2&&(v=3):2===e.length&&e[0]===c&&e[1]===_&&(v=5),8===v?Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):Error("Mask not supported")}let x=!1,w=f;if(a&&k.size(a.dims)>0){if(3!==a.dims.length&&4!==a.dims.length)throw Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(3===a.dims.length){if(m!==a.dims[1])throw Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');w=a.dims[2]}else{if(m!==a.dims[2])throw Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');w=a.dims[1]*a.dims[3],x=!0}}let $=!1;if(u&&k.size(u.dims)>0)throw Error("Key padding mask is not supported");if(l&&k.size(l.dims)>0){if(4!==l.dims.length)throw Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[2]!==h||l.dims[3]!==_)throw Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:_,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:f,vHiddenSize:w,headSize:b,vHeadSize:Math.floor(w/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:$,passPastInKv:x,qkvFormat:n}},_y=e=>le({...e}),Ty=le({perm:[0,2,1,3]}),J1=(e,t,n,i,o,a,s)=>{let u=[i,o,a],l=k.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],p=e=>{let i=F("qkv_with_bias",t.dataType,u),o=L("qkv",t.dataType,u),a=L("bias",n.dataType,u),s=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${e.registerUniforms(s).declareVariables(o,a,i)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,n],outputs:[-1]})[0]},ro=(e,t,n,i,o,a,s,u)=>{let l=a;if(!(s&&k.size(s.dims)>0))return 3===a.dims.length&&(l=a.reshape([t,i,n,o])),1===n||1===i?l:e.compute(at(l,Ty.perm),{inputs:[l],outputs:[-1]})[0];if(1===i)throw Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=(l=J1(e,a,s,t,i,n*o,u)).reshape([t,i,n,o]),1===n||1===i?l:e.compute(at(l,Ty.perm),{inputs:[l],outputs:[-1]})[0]},Iy=(e,t)=>{let n=Y1(e.inputs,t),i=e.inputs[0],o=It(e.inputs,1),a=It(e.inputs,2),s=It(e.inputs,3),u=It(e.inputs,4),l=It(e.inputs,5),d=It(e.inputs,6),p=It(e.inputs,7);if(5===i.dims.length)throw Error("Packed QKV is not implemented");if(o?.dims.length===5)throw Error("Packed KV is not implemented");let c=o&&a&&4===o.dims.length&&4===a.dims.length,h=ro(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,i,s,0);if(c)return Sn(e,h,o,a,u,void 0,d,p,l,n,t);if(!o||!a)throw Error("key and value must be provided");let f=ro(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,o,s,n.hiddenSize),m=ro(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);Sn(e,h,f,m,u,void 0,d,p,l,n,t)}}),Sy,Q1,eI,hu,$y,gu=C(()=>{ue(),ge(),be(),Sy=e=>Array.from(e.getBigInt64Array(),Number),Q1=e=>{if(!e||2!==e.length)throw Error("Tile requires 2 inputs.");if(1!==e[0].dataType&&10!==e[0].dataType&&6!==e[0].dataType&&12!==e[0].dataType)throw Error("Tile only support float, float16, int32, and uint32 data types");if(7!==e[1].dataType)throw Error("Tile `repeats` input should be of int64 data type");if(1!==e[1].dims.length)throw Error("Tile `repeats` input should be 1-D");if(Sy(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},eI=(e,t)=>{let n=[];for(let i=0;i<e.length;++i)n.push(e[i]*t[i]);return n},hu=(e,t)=>{let n=e[0].dims,i=t??Sy(e[1]),o=eI(n,i),a=k.size(o),s=e[0].dataType,u=L("input",s,n.length),l=F("output",s,o.length);return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...G(e[0].dims,o)]}),getShaderSource:e=>`
      const inputShape = ${u.indices(...n)};
      ${e.registerUniform("output_size","u32").declareVariables(u,l)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`}},$y=e=>{Q1(e.inputs),e.compute(hu(e.inputs),{inputs:[0]})}}),tI,Ay,Oy,rI,Py,Ey,Cy=C(()=>{ue(),ge(),Xe(),zi(),be(),mu(),gu(),hr(),tI=(e,t)=>{let n,i=e[0],o=e[1],a=e[2],s=e[3],u=e[4];if(3!==i.dims.length&&5!==i.dims.length)throw Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=i.dims[0],p=i.dims[1],c=3===i.dims.length?l?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],h=p,f=0,m=0,g=Math.floor(c/t.numHeads),y=s&&0!==s.dims.length,b=u&&0!==u.dims.length,_=!0;if(y&&b){if(4!==s.dims.length)throw Error('Input "past_key" is expected to have 4 dimensions');if(4!==u.dims.length)throw Error('Input "past_value" is expected to have 4 dimensions');_?(f=s.dims[1],m=s.dims[1]):(f=s.dims[2],m=s.dims[2])}else if(y||b)throw Error('Input "past_key" and "past_value" shall be both present or both absent');if(o){if(3!==i.dims.length)throw Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==o.dims[0])throw Error('Input "query" and "key" shall have same dim 0 (batch size)');if(3===o.dims.length){if(i.dims[2]%o.dims[2]!=0)throw Error('Dimension 2 of "query" should be a multiple of "key"');n=2,h=o.dims[1]}else if(5===o.dims.length){if(o.dims[2]!==t.numHeads||2!==o.dims[3]||o.dims[4]!==g)throw Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw Error('Expect "value" be none when "key" has packed kv format.');n=5,h=o.dims[1]}else{if(o.dims[1]!==t.numHeads||o.dims[3]!==g)throw Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');n=0,h=o.dims[2]}}else{if(3!==i.dims.length&&5!==i.dims.length)throw Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(5===i.dims.length&&(i.dims[2]!==t.numHeads||3!==i.dims[3]))throw Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');n=3}let v=0,x=!1,w=c;if(a){if(3!==a.dims.length&&4!==a.dims.length)throw Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(3===a.dims.length){if(h!==a.dims[1])throw Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');w=a.dims[2]}else{if(h!==a.dims[2])throw Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');w=a.dims[1]*a.dims[3],x=!0}}let $=f+h,T=!1;return{batchSize:d,sequenceLength:p,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:$,maxSequenceLength:m,inputHiddenSize:0,hiddenSize:c,vHiddenSize:w,headSize:g,vHeadSize:Math.floor(w/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:T,passPastInKv:x,qkvFormat:n,isPastkvBSNH:_}},Ay=(e,t,n,i)=>{let o=[i.batchSize,i.totalSequenceLength,i.kvNumHeads,i.headSize],a=4,s=k.size(o)/a,u=i.totalSequenceLength,l=F("present_kv",n,o.length,a),d=L("new_kv",e.dataType,e.dims.length,a),p=t?L("past_kv",t.dataType,t.dims.length,a):void 0,c=Math.ceil(i.headSize/a),h={x:u,y:e.dims[0],z:1},f=t?["rank","rank"]:["rank"],m=[{type:12,data:s},{type:12,data:i.pastSequenceLength},{type:12,data:i.kvSequenceLength},{type:12,data:i.totalSequenceLength}],g=[d];p?(m.push(...G(e.dims),...G(t.dims),...G(o)),g.push(p)):m.push(...G(e.dims),...G(o));let y=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],b=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,_=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,v=t?`if (s < past_seqlen) {
        ${b}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${_}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${_}
        }`,x=e=>`

  ${e.registerUniforms(y).declareVariables(...g,l)}
  ${e.mainStart([c,i.kvNumHeads,1])}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${l.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${i.kvNumHeads}u;
    let H = ${c}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${i.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${v}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${i.kvNumHeads}${c}${!!t}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:h,programUniforms:m}),getShaderSource:x}},Oy=e=>le({...e}),rI=le({perm:[0,2,1,3]}),Py=(e,t,n,i,o)=>{let a=t,s=i.kvNumHeads,u=i.nReps;return 3===t.dims.length&&0!==i.kvSequenceLength&&(a=t.reshape([i.batchSize,i.kvSequenceLength,s,i.headSize])),a=n?e.compute(Ay(a,n,a.dataType,i),{inputs:[a,n],outputs:[i.isPastkvBSNH?o:-1]})[0]:e.compute(Ay(a,void 0,a.dataType,i),{inputs:[a],outputs:[i.isPastkvBSNH?o:-1]})[0],1!==u&&(a=(a=e.compute(hu([a],[1,1,1,u]),{inputs:[a],outputs:[-1]})[0]).reshape([i.batchSize,i.totalSequenceLength,s*u,i.headSize])),e.compute(at(a,rI.perm),{inputs:[a],outputs:[-1]})[0]},Ey=(e,t)=>{let n=tI(e.inputs,t);if(5===e.inputs[0].dims.length)throw Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw Error("Packed KV is not implemented");let i=ro(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,e.inputs[0],void 0,0),o=e.inputs[3]&&0!==e.inputs[3].dims.length?e.inputs[3]:void 0,a=e.inputs[4]&&0!==e.inputs[4].dims.length?e.inputs[4]:void 0,s=Py(e,e.inputs[1],o,n,1),u=Py(e,e.inputs[2],a,n,2);Sn(e,i,s,u,void 0,void 0,void 0,void 0,void 0,n,t)}}),ky,nI,oI,Dy,By=C(()=>{ue(),ge(),hr(),be(),ky=(e,t,n,i,o,a,s,u)=>{let l=Me(a),d=1===l?"f32":`vec${l}f`,p=1===l?"vec2f":`mat2x${l}f`,c=o*s,h=[o,s,a/l],f=[o,s,2],m=["rank","type","type"],g=[];g.push(...G(h,f));let y=e=>{let o=L("x",t.dataType,3,l),a=[o,L("scale",n.dataType,n.dims),L("bias",i.dataType,i.dims),F("output",1,3,2)],s=64;return`
  var<workgroup> workgroup_shared : array<${p}, ${s}>;
  const workgroup_size = ${s}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(s)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${o.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Kt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Kt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:f,dataType:1}],dispatchGroup:{x:c},programUniforms:g}),getShaderSource:y},{inputs:[t,n,i],outputs:[-1]})[0]},nI=(e,t,n)=>{let i=t[0].dims,o=i,a=2,s=i[0],u=i[1],l=k.sizeFromDimension(i,a),d=Me(l),p=k.size(o)/d,c=ky(e,t[0],t[1],t[2],s,l,u,n.epsilon),h=[s,u,l/d],f=[s,u],m=["type","none"],g=e=>{let n=L("x",t[0].dataType,h.length,d),i=L("scale_shift",1,f.length,2),o=F("output",t[0].dataType,h.length,d),a=[n,i,o];return`
  ${e.registerUniform("output_size","u32").declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${o.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${i.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${n.getByOffset("global_idx")} * ${o.type.value}(scale_shift.x) + ${o.type.value}(scale_shift.y);
      ${o.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...G(h,f,h)]}),getShaderSource:g},{inputs:[t[0],c]})},oI=(e,t,n)=>{let i=t[0].dims,o=i,a=i[0],s=i[i.length-1],u=k.sizeFromDimension(i,1)/s,l=Me(s),d=k.size(o)/l,p=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],c=["type","type"],h=[0,i.length-1];for(let e=0;e<i.length-2;e++)h.push(e+1);let f=e.compute(at(e.inputs[0],h),{inputs:[e.inputs[0]],outputs:[-1]})[0],m=ky(e,f,t[1],t[2],a,u,s,n.epsilon),g=e=>{let n=ke(t[0].dataType),i=1===l?"vec2f":`mat${l}x2f`,a=e=>{let t=0===e?"x":"y",i=1===l?"f32":`vec${l}f`;switch(l){case 1:return`${n}(${i}(scale.${t}))`;case 2:return`vec2<${n}>(${i}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${i}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${l}`)}},s=L("input",t[0].dataType,t[0].dims,l),u=F("output",t[0].dataType,o,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${s.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${i}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${u.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:g},{inputs:[t[0],m]})},Dy=(e,t)=>{"NHWC"===t.format?oI(e,e.inputs,t):nI(e,e.inputs,t)}}),iI,aI,Ly,Ry=C(()=>{ue(),ge(),be(),iI=e=>{if(!e||e.length<2)throw Error("layerNorm requires at least 2 inputs.")},aI=(e,t,n)=>{let i=t.simplified,o=e[0].dims,a=e[1],s=!i&&e[2],u=o,l=k.normalizeAxis(t.axis,o.length),d=k.sizeToDimension(o,l),p=k.sizeFromDimension(o,l),c=k.size(a.dims),h=s?k.size(s.dims):0;if(c!==p||s&&h!==p)throw Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${h}`);let f=[];for(let e=0;e<o.length;++e)e<l?f.push(o[e]):f.push(1);let m=Me(p),g=["type","type"],y=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/m)},{type:1,data:t.epsilon}];s&&g.push("type");let b=n>1,_=n>2,v=t=>{let n=ke(e[0].dataType),o=[L("x",e[0].dataType,e[0].dims,m),L("scale",a.dataType,a.dims,m)];s&&o.push(L("bias",s.dataType,s.dims,m)),o.push(F("output",e[0].dataType,u,m)),b&&o.push(F("mean_data_output",1,f)),_&&o.push(F("inv_std_output",1,f));let l=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${t.registerUniforms(l).declareVariables(...o)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ys("f32",m)};
    var mean_square_vector = ${Ys("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Jr(n,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Kt("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Kt("mean_square_vector",m)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Jr(n,m,"x[j + offset]")};
      let f32scale = ${Jr(n,m,"scale[j]")};
      output[j + offset] = ${o[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Jr(n,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},x=[{dims:u,dataType:e[0].dataType}];return b&&x.push({dims:f,dataType:1}),_&&x.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${i}`,inputDependencies:g},getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:y}),getShaderSource:v}},Ly=(e,t)=>{iI(e.inputs),e.compute(aI(e.inputs,t,e.outputCount))}}),sI,uI,lI,zy,Ny,My=C(()=>{ue(),ge(),Xe(),be(),sI=(e,t)=>{if(e.length<3||e.length>4)throw Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],i=n.dims.length;if(n.dims[i-1]!==t.k)throw Error("The last dim of input shape does not match the k value");let o=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!k.areEqual(s.dims,[t.n,o,a]))throw Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(k.size(u)!==t.n*o)throw Error("scales input size error.");if(4===e.length){let n=e[3].dims,i=t.bits>4?t.n*o:t.n*Math.floor((o+1)/2);if(k.size(n)!==i)throw Error("zeroPoints input size error.")}},uI=(e,t)=>{let n=e[0].dims,i=n.length,o=n[i-2],a=t.k,s=t.n,u=n.slice(0,i-2),l=k.size(u),d=e[1].dims[2]/4,p=e[0].dataType,c=Me(t.k),h=Me(d),f=Me(s),m=u.concat([o,s]),g=o>1&&s/f%2==0?2:1,y=k.size(m)/f/g,b=64,_=[],v=[l,o,a/c],x=k.convertShape(e[1].dims).slice();x.splice(-1,1,d/h),_.push(...G(v)),_.push(...G(x)),_.push(...G(e[2].dims)),4===e.length&&_.push(...G(k.convertShape(e[3].dims)));let w=[l,o,s/f];_.push(...G(w));let $=n=>{let i=v.length,o=L("a",e[0].dataType,i,c),a=L("b",12,x.length,h),s=L("scales",e[2].dataType,e[2].dims.length),u=[o,a,s],l=4===e.length?L("zero_points",12,e[3].dims.length):void 0;l&&u.push(l);let p=w.length,m=F("output",e[0].dataType,p,f),y=ke(e[0].dataType),_=(()=>{switch(c){case 1:return`array<${y}, 8>`;case 2:return`mat4x2<${y}>`;case 4:return`mat2x4<${y}>`;default:throw Error(`${c}-component is not supported.`)}})(),$=()=>{let e=`
          // reuse a data
            var input_offset = ${o.indicesToOffset(`${o.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_};
            for (var j: u32 = 0; j < ${8/c}; j++) {
              a_data[j] = ${o.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let t=0;t<f*g;t++)e+=`
            b_value = ${1===h?`b${t}_data`:`b${t}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${y}(b_value_lower[${t}]), ${y}(b_value_upper[${t}])`).join(", ")});
            b_dequantized_values = ${1===c?`${_}(${Array.from({length:8},(e,n)=>`(b_quantized_values[${n}] - ${l?`zero_point${t}`:"zero_point"}) * scale${t}`).join(", ")});`:`(b_quantized_values - ${_}(${Array(8).fill(`${l?`zero_point${t}`:"zero_point"}`).join(",")})) * scale${t};`};
            workgroup_shared[local_id.x * ${g} + ${Math.floor(t/f)}]${f>1?`[${t%f}]`:""} += ${Array.from({length:8/c},(e,t)=>`${1===c?`a_data[${t}] * b_dequantized_values[${t}]`:`dot(a_data[${t}], b_dequantized_values[${t}])`}`).join(" + ")};
          `;return e},T=()=>{let e=`
            var col_index = col * ${f};
            ${l?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${y}(8);`}
            `;for(let t=0;t<f*g;t++)e+=`
            let scale${t} = ${s.getByOffset("col_index * nBlocksPerCol + block")};
            ${l?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${l.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${t} = ${y}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return e},S=()=>{let e=`col_index = col * ${f};`;for(let t=0;t<f*g;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${g*b}>;
        ${n.declareVariables(...u,m)}
        ${n.mainStart([b,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / ${b}) * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${T()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${S()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${$()}
                word_offset += ${8/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${g}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${g};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${h};${f};${g};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:y},programUniforms:_}),getShaderSource:$}},lI=(e,t)=>{let n=e[0].dims,i=n.length,o=n[i-2],a=t.k,s=t.n,u=n.slice(0,i-2),l=k.size(u),d=e[1].dims[2]/4,p=e[0].dataType,c=Me(t.k),h=Me(d),f=u.concat([o,s]),m=128,g=s%8==0?8:s%4==0?4:1,y=128/g,b=y*h*8,_=b/c,v=b/t.blockSize,x=k.size(f)/g,w=[],$=[l,o,a/c],T=k.convertShape(e[1].dims).slice();T.splice(-1,1,d/h),w.push(...G($)),w.push(...G(T)),w.push(...G(e[2].dims)),4===e.length&&w.push(...G(k.convertShape(e[3].dims)));let S=[l,o,s];w.push(...G(S));let I=n=>{let i=$.length,o=L("a",e[0].dataType,i,c),a=L("b",12,T.length,h),s=L("scales",e[2].dataType,e[2].dims.length),u=[o,a,s],l=4===e.length?L("zero_points",12,e[3].dims.length):void 0;l&&u.push(l);let d=S.length,p=F("output",e[0].dataType,d),f=ke(e[0].dataType),b=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${f}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${f}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${f}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${f}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${o.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${p.type.value}, ${y}>, ${g}>;
        ${n.declareVariables(...u,p)}
        ${n.mainStart([y,g,1])}
          let output_indices = ${p.offsetToIndices(`workgroup_index * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${o.getByIndices(`${o.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${o.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${l?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${l.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${f}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${f}(8);`}
            let scale = ${s.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${b()}
              let b_value = ${1===h?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${f}>(${Array.from({length:4},(e,t)=>`${f}(b_value_lower[${t}]), ${f}(b_value_upper[${t}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${f}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`dot(a_data${t}, b_dequantized_values[${t}])`).join(" + ")};
              word_offset += ${8/c};
            }
            workgroupBarrier();
          }

          if (local_idx < ${g}) {
            var output_value: ${p.type.value} = ${p.type.value}(0);
            for (var b = 0u; b < ${y}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${p.setByIndices(`${p.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${h};${y};${g}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:p}],dispatchGroup:{x:x},programUniforms:w}),getShaderSource:I}},zy=(e,t)=>{sI(e.inputs,t),32===t.blockSize&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(lI(e.inputs,t)):e.compute(uI(e.inputs,t))},Ny=e=>le(e)}),cI,fI,dI,pI,mI,hI,gI,bI,Fy,Vy=C(()=>{ue(),ge(),be(),cI=e=>{if(!e||e.length<1)throw Error("Too few inputs");if(1!==e[0].dataType&&10!==e[0].dataType)throw Error("Input type must be float or float16.");if(e.length>=2){let t=2*e[0].dims.length===e[1].dims[0];if(4===e.length&&(t=2*e[3].dims[0]===e[1].dims[0]),!t)throw Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},fI=(e,t,n)=>{let i="";for(let o=t-1;o>=0;--o)i+=`
            k = i32(${e.indicesGet("indices",o)}) - ${J("uniforms.pads",o,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${J("uniforms.x_shape",o,t)})) {
              break;
            }
            offset += k * i32(${J("uniforms.x_strides",o,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},dI=(e,t,n)=>{let i="";for(let o=t-1;o>=0;--o)i+=`
                k = i32(${e.indicesGet("indices",o)}) - ${J("uniforms.pads",o,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${J("uniforms.x_shape",o,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${J("uniforms.x_shape",o,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${J("uniforms.x_strides",o,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},pI=(e,t,n)=>{let i="";for(let o=t-1;o>=0;--o)i+=`
                k = i32(${e.indicesGet("indices",o)}) - ${J("uniforms.pads",o,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${J("uniforms.x_shape",o,t)})) {
                  k = i32(${J("uniforms.x_shape",o,t)}) - 1;
                }
                offset += k * i32(${J("uniforms.x_strides",o,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},mI=(e,t,n)=>{let i="";for(let o=t-1;o>=0;--o)i+=`
                k = i32(${e.indicesGet("indices",o)}) - ${J("uniforms.pads",o,n)};
                if (k < 0)  {
                  k += i32(${J("uniforms.x_shape",o,t)}]);
                }
                if (k >= i32(${J("uniforms.x_shape",o,t)})) {
                  k -= i32(${J("uniforms.x_shape",o,t)});
                }
                offset += k * i32(${J("uniforms.x_strides",o,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},hI=(e,t,n)=>{switch(n.mode){case 0:return fI(e,t,n.pads.length);case 1:return dI(e,t,n.pads.length);case 2:return pI(e,t,n.pads.length);case 3:return mI(e,t,n.pads.length);default:throw Error("Invalid mode")}},gI=(e,t)=>{let n=k.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,o=[{type:12,data:k.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;0===t.mode&&o.push({type:a?e[2].dataType:1,data:t.value}),o.push(...G(e[0].dims,n));let s=["rank"],u=o=>{let s=F("output",e[0].dataType,n.length),u=L("x",e[0].dataType,i.length),l=u.type.value,d=hI(s,i.length,t),p=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return 0===t.mode&&p.push({name:"constant_value",type:a?l:"f32"}),`
            ${o.registerUniforms(p).declareVariables(u,s)}
            ${o.mainStart()}
            ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${s.offsetToIndices("global_idx")};

            var value = ${l}(0);
            ${d}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(k.size(n)/64)},programUniforms:o}),getShaderSource:u}},bI=(e,t)=>{if(!(e.length>1))return t;{let n=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?10===e[2].dataType?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,o=e[0].dims.length,a=new Int32Array(2*o).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+o]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let s=[];return a.forEach(e=>s.push(e)),{mode:t.mode,value:i,pads:s}}},Fy=(e,t)=>{cI(e.inputs);let n=bI(e.inputs,t);e.compute(gI(e.inputs,n),{inputs:[0]})}}),qi,Gy,Uy,Wy,Hy,yI,xI,qy,jy,Ky,Xy,Zy,Yy,Jy,Qy,ex,tx,rx,nx,ox=C(()=>{mt(),ue(),ge(),be(),qi=e=>{if(ce.webgpu.validateInputContent&&(!e||1!==e.length))throw Error("Pool ops requires 1 input.")},Gy=(e,t,n)=>{let i="NHWC"===t.format,o=e.dims.slice();i&&o.splice(1,0,o.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();Zr.adjustPoolAttributes(n,o,s,u,l,d);let p=Zr.computePoolOutputShape(n,o,u,l,s,d,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let h=p.slice();return h.push(h.splice(1,1)[0]),[c,i?h:p]},Uy=(e,t)=>{let n="NHWC"===t.format,i=[{type:12,data:k.size(e)},{type:12,data:k.size(t.kernelShape)}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],a=t.pads[t.pads.length/2-1],s=t.pads[t.pads.length-1],u=!!(a+s);i.push({type:12,data:e},{type:12,data:n},{type:12,data:a},{type:12,data:s}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let l=!1;if(2===t.kernelShape.length){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],a=t.pads[t.pads.length/2-2],s=t.pads[t.pads.length-2];l=!!(a+s),i.push({type:12,data:e},{type:12,data:n},{type:12,data:a},{type:12,data:s}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,o,!0,u,l]}{if(n)throw Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let e=k.computeStrides(t.kernelShape);return i.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:e.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length}),[i,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},Wy=(e,t,n,i,o,a,s,u,l,d,p,c)=>{let h="NHWC"===o.format,f=t.type.value,m=F("output",t.type.tensor,i);if(o.kernelShape.length<=2){let i="",d="",g="",y=n-(h?2:1);if(i=p?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${y}] < 0 || xIndices[${y}]
                      >= uniforms.x_shape[${y}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,2===o.kernelShape.length){let e=n-(h?3:2);d=c?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,g=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${f}(${u});
              var pad = 0;
              ${d}
              ${i}
              ${g}
              ${s}

              output[global_idx] = value;
            }`}{if(h)throw Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let i=o.kernelShape.length,p=o.pads.length,c="";return c=d?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${i}>;

              var value = ${f}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${i-1}u; j++) {
                  offsets[j] = offset / ${J("uniforms.kernelStrides","j",i)};
                  offset -= offsets[j] * ${J("uniforms.kernelStrides","j",i)};
                }
                offsets[${i-1}] = offset;

                isPad = false;
                for (var j = ${n-i}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${J("uniforms.strides",`j - ${n-i}u`,i)}
                    + offsets[j - ${n-i}u] - ${J("uniforms.pads","j - 2u",p)};
                  ${c}
              }
              ${s}

              output[global_idx] = value;
            }`}},Hy=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,yI=e=>`${Hy(e)};${e.countIncludePad}`,xI=e=>`${Hy(e)};${e.storageOrder};${e.dilations}`,qy=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),jy=(e,t,n,i)=>{let[o,a]=Gy(t,i,n),s=L("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";o.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[p,c,h,f,m]=Uy(a,o);p.push(...G(t.dims,a));let g=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${h};${f};${m}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(k.size(a)/64)},programUniforms:p}),getShaderSource:e=>Wy(e,s,t.dims.length,a.length,o,l,d,0,c,h,f,m)}},Ky=e=>{let t=0!==e.count_include_pad,n=qy(e);if(0!==n.ceilMode)throw Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...n,cacheKey:""};return{...i,cacheKey:yI(i)}},Xy=(e,t)=>{qi(e.inputs),e.compute(jy("AveragePool",e.inputs[0],!1,t))},Zy={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Yy=e=>{let t=e.format;return{format:t,...Zy,cacheKey:t}},Jy=(e,t)=>{qi(e.inputs),e.compute(jy("GlobalAveragePool",e.inputs[0],!0,t))},Qy=(e,t,n,i)=>{let[o,a]=Gy(t,i,n),s=`
      value = max(x_val, value);
    `,u="",l=L("x",t.dataType,t.dims.length),d=["rank"],[p,c,h,f,m]=Uy(a,o);return p.push(...G(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${h};${f};${m}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(k.size(a)/64)},programUniforms:p}),getShaderSource:e=>Wy(e,l,t.dims.length,a.length,o,s,u,10===t.dataType?-65504:-1e5,c,h,f,m)}},ex=(e,t)=>{qi(e.inputs),e.compute(Qy("MaxPool",e.inputs[0],!1,t))},tx=e=>{let t=e.storage_order,n=e.dilations,i=qy(e);if(0!==t)throw Error("column major storage order is not yet supported for MaxPool");if(0!==i.ceilMode)throw Error("using ceil() in shape computation is not yet supported for MaxPool");let o={storageOrder:t,dilations:n,...i,cacheKey:""};return{...o,cacheKey:xI(o)}},rx=e=>{let t=e.format;return{format:t,...Zy,cacheKey:t}},nx=(e,t)=>{qi(e.inputs),e.compute(Qy("GlobalMaxPool",e.inputs[0],!0,t))}}),vI,TI,ix,ax,sx=C(()=>{ue(),ge(),Xe(),be(),vI=(e,t)=>{if(e.length<2||e.length>3)throw Error("DequantizeLinear requires 2 or 3 inputs.");if(3===e.length&&e[1].dims===e[2].dims)throw Error("x-scale and x-zero-point must have the same shape.");if(3===e.length&&e[0].dataType!==e[2].dataType)throw Error("x and x-zero-point must have the same data type.");if(6===e[0].dataType&&e.length>2)throw Error("In the case of dequantizing int32 there is no zero point.");if(0!==e[1].dims.length&&1!==e[1].dims.length&&e[1].dims.length!==e[0].dims.length)throw Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(0===e[1].dims.length||1===e[1].dims.length&&1===e[1].dims[0])throw Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,i)=>i===t.axis||n===e[0].dims[i]).reduce((e,t)=>e&&t,!0))throw Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/i)||t.blockSize>Math.ceil(n/(i-1)-1))throw Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},TI=(e,t)=>{let n=k.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,o=3===i,a=e[0].dims,s=e[1].dataType,u=k.size(a),l=3===i||2===i,d=l?[Math.ceil(k.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,c=e.length>2?e[2]:void 0,h=c?l?[Math.ceil(k.size(c.dims)/4)]:c.dims:void 0,f=0===p.length||1===p.length&&1===p[0],m=!1===f&&1===p.length,g=Me(u),y=f&&(!l||4===g),b=y?g:1,_=y&&!l?g:1,v=L("input",l?12:i,d.length,_),x=L("scale",s,p.length),w=c?L("zero_point",l?12:i,h.length):void 0,$=F("output",s,a.length,b),T=[v,x];w&&T.push(w);let S=[d,p];c&&S.push(h);let I=[{type:12,data:u/b},{type:12,data:n},{type:12,data:t.blockSize},...G(...S,a)],E=e=>{let t=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${e.registerUniforms(t).declareVariables(...T,$)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${$.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${v.getByOffset("global_idx / 4")};
            let x_vec = ${o?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${1===b?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${v.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${x.getByOffset("0")}`:m?`
            let scale_index = ${$.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${x.getByOffset("scale_index")};`:`
            var scale_indices: ${x.type.indices} = output_indices;
            let index = ${x.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${x.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${x.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${w?f?l?`
                let zero_point_input = ${w.getByOffset("0")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${w.getByOffset("0")}`:m?l?`
                let zero_point_index = ${$.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${w.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${$.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${w.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${x.indicesToOffset("scale_indices")};
                let zero_point_input = ${w.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${w.getByIndices("scale_indices")};`:`let zero_point_value = ${l?o?"i32":"u32":v.type.value}(0);`};
      // Compute and write output
      ${$.setByOffset("global_idx",`${$.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getShaderSource:E,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(u/b/64),y:1,z:1},programUniforms:I})}},ix=(e,t)=>{vI(e.inputs,t),e.compute(TI(e.inputs,t))},ax=e=>le({axis:e.axis,blockSize:e.blockSize})}),_I,II,ux,lx=C(()=>{mt(),ue(),be(),_I=(e,t,n)=>{let i=e===t,o=e<t&&n<0,a=e>t&&n>0;if(i||o||a)throw Error("Range these inputs' contents are invalid.")},II=(e,t,n,i)=>{let o=Math.abs(Math.ceil((t-e)/n)),a=[o],s=o,u=[{type:12,data:s},{type:i,data:e},{type:i,data:n},...G(a)],l=e=>{let t=F("output",i,a.length),n=t.type.value,o=[{name:"outputSize",type:"u32"},{name:"start",type:n},{name:"delta",type:n}];return`
        ${e.registerUniforms(o).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},ux=e=>{let t=0,n=0,i=0;6===e.inputs[0].dataType?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):1===e.inputs[0].dataType&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ce.webgpu.validateInputContent&&_I(t,n,i),e.compute(II(t,n,i,e.inputs[0].dataType),{inputs:[]})}}),SI,$I,AI,PI,OI,EI,CI,kI,DI,BI,LI,cx,RI,zI,NI,MI,FI,fx,dx,px=C(()=>{ue(),ge(),Xe(),be(),SI=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error("Resize requires scales input values to be positive")})),e.length>0){if("linear"===t.mode){if(!(2===e.length||3===e.length||4===e.length&&1===e[0]&&1===e[1]||4===e.length&&1===e[0]&&1===e[3]||5===e.length&&1===e[0]&&1===e[1]))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if("cubic"===t.mode&&!(2===e.length||4===e.length&&1===e[0]&&1===e[1]||4===e.length&&1===e[0]&&1===e[3]))throw Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},$I=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error("Resize requires axes input values to be positive and less than rank")}));let i=Array(n).fill(1);return t.forEach((t,n)=>i[t]=e[n]),i},AI=(e,t,n,i,o,a)=>{let[s,u,l]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(e=>a.push(e));else if("tf_crop_and_resize"===t.coordinateTransformMode)throw Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&1===e[u].dims.length&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(e=>i.push(e)),0!==i.length&&i.length!==d&&n>=18&&i.length!==t.axes.length)throw Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");SI(i,t),t.axes.length>0&&$I(i,t.axes,d).forEach((e,t)=>i[t]=e)}if(l>0&&e.length>l&&1===e[l].dims.length&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(e=>o.push(Number(e))),0!==o.length&&o.length!==d&&n>=18&&o.length!==t.axes.length))throw Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(0!==i.length&&i.length!==t.axes.length)throw Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(0!==o.length&&o.length!==t.axes.length)throw Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if("u">typeof i&&"u">typeof o&&i.length>0&&o.length>d)throw Error("Resize requires only of scales or sizes to be specified")},PI=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`return ${t}(xResized) / ${t}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${t}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${t}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${t}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",OI=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw Error(`Nearest mode ${e} is not supported`)}})()+"}",EI=(e,t,n)=>{let i=Array(n).fill(0).concat(Array(n).fill(1)),o=0===e.length?i:e.slice();return t.length>0?(t.forEach((e,a)=>{i[e]=o[a],i[a+n]=o[t.length+a]}),i):o},CI=(e,t,n,i)=>{let o=[];if(n.length>0){if(i.length>0){if(e.forEach(e=>o.push(e)),Math.max(...i)>e.length)throw Error("axes is out of bound");i.forEach((e,t)=>o[e]=n[t])}else n.forEach(e=>o.push(e))}else{if(0===t.length)throw Error("Resize requires either scales or sizes.");o=e.map((e,n)=>Math.round(e*t[n]))}return o},kI=(e,t,n)=>{let i=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let o=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=i),n.axes.forEach(n=>o[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),o.forEach((e,n)=>o[n]=Math.round(e*t[n]))),o},DI=(e,t,n,i,o)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${J("uniforms.scales","i",i)};
        var roi_low = ${J("uniforms.roi","i",o)};
        var roi_hi = ${J("uniforms.roi",`i + ${t.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${J("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,BI=(e,t,n,i,o,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${J("uniforms.scales","i",o)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${J("uniforms.roi","i",a)};
          var roi_hi = ${J("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${J("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,LI=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${J("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,cx=(e,t,n,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",RI=(e,t,n,i,o)=>{let[a,s,u,l]=2===n.length?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${n[u]} - 1))`)};
      ${cx(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${n[s]} - 1) || col < 0 || col > (${n[u]} - 1)) {
        return ${o};
      }`:""};
      row = max(0, min(row, ${n[s]} - 1));
      col = max(0, min(col, ${n[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},zI=(e,t,n,i,o,a,s,u,l,d)=>{let p=2===n.length,c=!0,[h,f]=p?[0,1]:c?[2,3]:[1,2],m=e.type.value,g=s=>{let p=s===h?"row":"col";return`
      fn ${p}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",s)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${o[s]},
        ${i[s]}, ${n[s]}, ${a[s]}, ${a[s]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${n[s]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${p}: ${m} = originalIdx + ${m}(i);
          if (${p} < 0 || ${p} >= ${n[s]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${p} = max(0, min(${p}, ${n[s]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",s,`u32(${p})`)};
          data[i + 1] = ${s===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(h)};
    ${g(f)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},NI=(e,t,n,i,o)=>{let[a,s,u,l,d]=3===n.length?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${n[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${n[l]} - 1))`)};
      ${cx(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${u}];
      var width:${p} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${n[s]} - 1) || height < 0 || height > (${n[u]} - 1) || width < 0 || (width > ${n[l]} - 1)) {
      return ${o};
        }`:""};

    depth = max(0, min(depth, ${n[s]} - 1));
      height = max(0, min(height, ${n[u]} - 1));
      width = max(0, min(width, ${n[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},MI=(e,t,n,i,o,a)=>{let s=e.dims,u=EI(a,t.axes,s.length),l=CI(s,i,o,t.axes),d=i.slice();0===i.length&&(d=s.map((e,t)=>0===e?1:l[t]/e),"stretch"!==t.keepAspectRatioPolicy&&(l=kI(s,d,t)));let p=F("output",e.dataType,l.length),c=L("input",e.dataType,s.length),h=k.size(l),f=s.length===l.length&&s.every((e,t)=>e===l[t]),m="tf_crop_and_resize"===t.coordinateTransformMode,g=t.extrapolationValue,y=c.type.value,b=e=>`
      ${f?"":`
      ${PI(t.coordinateTransformMode,y)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${LI(c,s)};
              ${OI(t.nearestMode,n,y)};
              ${BI(c,p,s,l,d.length,u.length,m)};
              `;case"linear":return`
              ${DI(p,s,l,d.length,u.length)};
              ${(()=>{if(2===s.length||4===s.length)return`${RI(c,p,s,m,g)}`;if(3===s.length||5===s.length)return`${NI(c,p,s,m,g)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(2===s.length||4===s.length)return`${zI(c,p,s,l,d,u,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${e.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(c,p)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${2===s.length||4===s.length?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${d.length>0?d:""}|${o.length>0?o:""}|${u.length>0?u:""}|${f}|${s}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:u},...G(s,l)]})}},FI=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},fx=(e,t)=>{let n=[],i=[],o=[],a=FI(e);if(0!==t.antialias)throw Error("Only default value (0) for Antialias attribute is supported");AI(e.inputs,t,a,n,i,o),e.compute(MI(e.inputs[0],t,a,n,i,o),{inputs:[0]})},dx=e=>{let t=e.antialias,n=e.axes,i=e.coordinateTransformMode,o=e.cubicCoeffA,a=0!==e.excludeOutside,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=""===e.nearestMode?"simple":e.nearestMode;return le({antialias:t,axes:n,coordinateTransformMode:i,cubicCoeffA:o,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),VI,GI,mx,hx=C(()=>{ue(),ge(),Xe(),be(),VI=(e,t)=>{let[n,i,o,a]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(3!==n.dims.length&&4!==n.dims.length)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!k.areEqual(i.dims,[])&&!k.areEqual(i.dims,[1])&&2!==i.dims.length)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(2!==o.dims.length)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(2!==a.dims.length)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!k.areEqual(o.dims,a.dims))throw Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&0===s)throw Error("num_heads must be provided if rotary_embedding_dim is specified");let l=n.dims[0],d=n.dims[n.dims.length-2],p=o.dims[0],c=k.sizeFromDimension(n.dims,1)/d,h=0===u?2*o.dims[1]:c/s;if(u>h)throw Error("rotary_embedding_dim must be less than or equal to head_size");if(2===i.dims.length){if(l!==i.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(h/2!==o.dims[1]&&u/2!==o.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`);if(d>p)throw Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},GI=(e,t)=>{let{interleaved:n,numHeads:i,rotaryEmbeddingDim:o,scale:a}=t,s=e[0].dims[0],u=k.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,p=e[2].dims[1],c=0===o?2*p:d/i,h=[s,l,d/c,c-p],f=k.computeStrides(h),m=[{type:1,data:a},{type:12,data:h},{type:12,data:f},...3===e[0].dims.length?Array({type:12,data:[u,d,c,1]}):[],...4===e[0].dims.length?Array({type:12,data:[u,c,l*c,1]}):[],...G(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],g=t=>{let i=L("input",e[0].dataType,e[0].dims.length),o=L("position_ids",e[1].dataType,e[1].dims.length),a=L("cos_cache",e[2].dataType,e[2].dims.length),s=L("sin_cache",e[3].dataType,e[3].dims.length),u=F("output",e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${t.declareVariables(i,o,a,s,u)}

        ${t.mainStart(Yr)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${o.broadcastedIndicesToOffset("bsnh.xy",F("",o.type.tensor,2))};
            let position_id =
                u32(${o.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${i.getByOffset("i")} * ${a.get("position_id","bsnh[3]")} -
                ${i.getByOffset("j")} * ${s.get("position_id","bsnh[3]")};
            ${u.setByOffset("i","re")}
            let im = ${i.getByOffset("i")} * ${s.get("position_id","bsnh[3]")} +
                ${i.getByOffset("j")} * ${a.get("position_id","bsnh[3]")};
            ${u.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${u.setByOffset("k",i.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:le({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(k.size(h)/Yr)},programUniforms:m})}},mx=(e,t)=>{VI(e.inputs,t),e.compute(GI(e.inputs,t))}}),UI,WI,gx,bx=C(()=>{ue(),ge(),be(),UI=e=>{if(!e||e.length<3)throw Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],i=e[2];if(t.dataType!==n.dataType||t.dataType!==i.dataType)throw Error("All inputs must have the same data type");if(3!==t.dims.length&&2!==t.dims.length)throw Error("Input must be 2D or 3D");if(3!==n.dims.length&&2!==n.dims.length)throw Error("Skip must be 2D or 3D");let o=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==o)throw Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw Error("Skip must have the same sequence length as input");if(1!==i.dims.length)throw Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==o)throw Error("Gamma must have the same hidden size as input");if(e.length>3){let t=e[3];if(1!==t.dims.length)throw Error("Beta must be 1D");if(t.dims[t.dims.length-1]!==o)throw Error("Beta must have the same hidden size as input")}if(e.length>4){let t=e[4];if(1!==t.dims.length)throw Error("Bias must be 1D");if(t.dims[t.dims.length-1]!==o)throw Error("Bias must have the same hidden size as input")}},WI=(e,t,n,i)=>{let o=t.simplified,a=e[0].dims,s=k.size(a),u=a,l=s,d=a.slice(-1)[0],p=i?a.slice(0,-1).concat(1):[],c=!o&&e.length>3,h=e.length>4,f=i&&n>1,m=i&&n>2,g=n>3,y=64,b=Me(d),_=[{type:12,data:l},{type:12,data:b},{type:12,data:d},{type:1,data:t.epsilon}],v=t=>{let n=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],i=[L("x",e[0].dataType,e[0].dims,b),L("skip",e[1].dataType,e[1].dims,b),L("gamma",e[2].dataType,e[2].dims,b)];c&&i.push(L("beta",e[3].dataType,e[3].dims,b)),h&&i.push(L("bias",e[4].dataType,e[4].dims,b)),i.push(F("output",e[0].dataType,u,b)),f&&i.push(F("mean_output",1,p)),m&&i.push(F("inv_std_output",1,p)),g&&i.push(F("input_skip_bias_sum",e[0].dataType,u,b));let a=ke(e[0].dataType),s=ke(1,b);return`

      ${t.registerUniforms(n).declareVariables(...i)}
      var<workgroup> sum_shared : array<${s}, ${y}>;
      var<workgroup> sum_squared_shared : array<${s}, ${y}>;

      ${t.mainStart([y,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${y};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${y};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${y-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":a+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${g?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Jr(a,b,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${y};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Kt("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Kt("square_sum",b)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},x=[{dims:u,dataType:e[0].dataType}];return n>1&&x.push({dims:p,dataType:1}),n>2&&x.push({dims:p,dataType:1}),n>3&&x.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${g}`,inputDependencies:e.map((e,t)=>"type")},getShaderSource:v,getRunData:()=>({outputs:x,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:_})}},gx=(e,t)=>{UI(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(WI(e.inputs,t,e.outputCount,!1),{outputs:n})}}),HI,ji,qI,yx,jI,KI,xx,wx,vx=C(()=>{ue(),ge(),Xe(),be(),HI=(e,t)=>{if(!e||e.length<1)throw Error("too few inputs");if(0!==t.axes.length){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw Error("starts and ends must have the same length");e.slice(1).forEach((t,n)=>{if(6!==e[n+1].dataType&&7!==e[n+1].dataType)throw Error(`Input ${n} must be an array of int32 or int64`)})},ji=(e,t)=>{let n=[];if(e.length>t){if(7===e[t].dataType)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(6===e[t].dataType)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`)}return n},qI=(e,t)=>{if(!(e.length>1))return t;{let t=ji(e,1),n=ji(e,2),i=ji(e,3);return 0===i.length&&(i=[...Array(e[0].dims.length).keys()]),le({starts:t,ends:n,axes:i})}},yx=(e,t,n,i,o)=>{let a=e;return e<0&&(a+=n[i[t]]),o[t]<0?Math.max(0,Math.min(a,n[i[t]]-1)):Math.max(0,Math.min(a,n[i[t]]))},jI=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length}; i >= 0; i--) {
            let input_shape_i = ${J("uniforms.input_shape","i",n.length)};
            let steps_i = ${J("uniforms.steps","i",n.length)};
            let signs_i = ${J("uniforms.signs","i",n.length)};
            let starts_i = ${J("uniforms.starts","i",n.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,KI=(e,t)=>{let n=e[0].dims,i=k.size(n),o=t.axes.length>0?k.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=ji(e,4);a.forEach(e=>0!==e||(()=>{throw Error("step cannot be 0")})),0===a.length&&(a=Array(o.length).fill(1));let s=t.starts.map((e,t)=>yx(e,t,n,o,a)),u=t.ends.map((e,t)=>yx(e,t,n,o,a));if(o.length!==s.length||o.length!==u.length)throw Error("start, ends and axes should have the same number of elements");if(o.length!==n.length)for(let e=0;e<n.length;++e)o.includes(e)||(s.splice(e,0,0),u.splice(e,0,n[e]),a.splice(e,0,1));let l=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let i=(u[t]-s[t])/e,o=s[t],l=o+i*a[t];s[t]=l,u[t]=o,n[t]=-e}});let d=n.slice(0);o.forEach((e,t)=>{d[e]=Math.ceil((u[e]-s[e])/a[e])});let p={dims:d,dataType:e[0].dataType},c=F("output",e[0].dataType,d.length),h=L("input",e[0].dataType,e[0].dims.length),f=k.size(d),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],g=[{type:12,data:f},{type:12,data:s},{type:6,data:l},{type:12,data:a},...G(e[0].dims,d)],y=e=>`
      ${e.registerUniforms(m).declareVariables(h,c)}
        ${jI(h,c,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},xx=(e,t)=>{HI(e.inputs,t);let n=qI(e.inputs,t);e.compute(KI(e.inputs,n),{inputs:[0]})},wx=e=>{let t=e.starts,n=e.ends,i=e.axes;return le({starts:t,ends:n,axes:i})}}),XI,ZI,Tx,_x,Ix=C(()=>{ue(),ge(),Xe(),hr(),be(),XI=e=>{if(!e||1!==e.length)throw Error("Softmax op requires 1 input.")},ZI=(e,t)=>{let n=e.inputs[0],i=n.dims,o=k.size(i),a=64,s=i.length,u=k.normalizeAxis(t.axis,s),l=u<i.length-1,d,p=[];l?((p=Array.from({length:s},(e,t)=>t))[u]=s-1,p[s-1]=u,d=e.compute(at(n,p),{inputs:[n],outputs:[-1]})[0]):d=n;let c=d.dims,h=c[s-1],f=o/h,m=Me(h),g=h/m,y=(e,t)=>4===t?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:2===t?`max(${e}.x, ${e}.y)`:3===t?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,b=L("x",d.dataType,d.dims,m),_=F("result",d.dataType,d.dims,m),v=b.type.value,x="f32"===ke(d.dataType)?`var threadMax = ${v}(-3.402823e+38f);`:`var threadMax = ${v}(-65504.0h);`,w=e=>`
      var<workgroup> rowMaxShared : ${v};
      var<workgroup> rowSumShared : ${v};
      var<workgroup> threadShared : array<${v}, ${a}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${v} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${v}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform("packedCols","i32").declareVariables(b,_)}
      ${e.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${a};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${x}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${v}(${y("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${v}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${v}(${Kt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,$=e.compute({name:"Softmax",shaderCache:{hint:`${m}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:d.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:g}]}),getShaderSource:w},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(at($,p),{inputs:[$]})},Tx=(e,t)=>{XI(e.inputs),ZI(e,t)},_x=e=>le({axis:e.axis})}),YI,JI,QI,eS,tS,Sx,$x,Ax=C(()=>{ue(),ge(),Xe(),be(),YI=e=>{if(!e||e.length<1)throw Error("too few inputs")},JI=(e,t)=>{let n=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),i=n.length),le({numOutputs:i,axis:t.axis,splitSizes:n})},QI=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${J("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,eS=e=>{let t=e.length,n=[];for(let i=0;i<t;++i){let o=e[i].setByIndices("indices","input[global_idx]");1===t?n.push(o):0===i?n.push(`if (output_number == ${i}u) { ${o} }`):i===t-1?n.push(`else { ${o} }`):n.push(`else if (output_number == ${i}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},tS=(e,t)=>{let n=e[0].dims,i=k.size(n),o=e[0].dataType,a=k.normalizeAxis(t.axis,n.length),s=Array(t.numOutputs),u=L("input",o,n.length),l=Array(t.numOutputs),d=[],p=[],c=0,h=[{type:12,data:i}];for(let i=0;i<t.numOutputs;i++){c+=t.splitSizes[i],l[i]=c;let u=n.slice();u[a]=t.splitSizes[i],p.push(u),s[i]=F(`output${i}`,o,u.length),d.push({dims:p[i],dataType:e[0].dataType})}h.push({type:12,data:l},...G(n,...p));let f=e=>`
  ${e.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${QI(l.length)}
  ${eS(s)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${J("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},Sx=(e,t)=>{YI(e.inputs);let n=1===e.inputs.length?t:JI(e.inputs,t);e.compute(tS(e.inputs,n),{inputs:[0]})},$x=e=>{let t=e.axis,n=e.splitSizes,i=e.numOutputs<0?n.length:e.numOutputs;if(i!==n.length)throw Error("numOutputs and splitSizes lengh must be equal");return le({axis:t,numOutputs:i,splitSizes:n})}}),rS,nS,Px,Ox=C(()=>{ue(),ge(),be(),rS=(e,t,n,i,o)=>{let a=F("output_data",o,n.length,4),s=L("a_data",t[1].dataType,t[1].dims.length,4),u=L("b_data",t[2].dataType,t[2].dims.length,4),l=L("c_data",t[0].dataType,t[0].dims.length,4),d,p=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(i){let e=(e,t,n="")=>{let i=`a_data[index_a${t}][component_a${t}]`,o=`b_data[index_b${t}][component_b${t}]`,d=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${u.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${l.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${p(i,o,d)});
          `};d=9===o?`
            var data = vec4<u32>(0);
            ${e("data",0,"u32")}
            ${e("data",1,"u32")}
            ${e("data",2,"u32")}
            ${e("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e("output_data[global_idx]",0)}
            ${e("output_data[global_idx]",1)}
            ${e("output_data[global_idx]",2)}
            ${e("output_data[global_idx]",3)}
          `}else d=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},nS=e=>{let t=e[1].dims,n=e[2].dims,i=e[0].dims,o=e[1].dataType,a=!(k.areEqual(t,n)&&k.areEqual(n,i)),s=t,u=k.size(t);if(a){let e=or.calcShape(or.calcShape(t,n,!1),i,!1);if(!e)throw Error("Can't perform where op on the given tensors");s=e,u=k.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:t=>rS(t,e,s,a,o),getRunData:()=>({outputs:[{dims:s,dataType:o}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...G(i,t,n,s)]})}},Px=e=>{e.compute(nS(e.inputs))}}),Ex,Cx=C(()=>{Tg(),zi(),Sg(),Ag(),db(),_b(),$b(),Fb(),jb(),Zb(),Qb(),oy(),sy(),ly(),dy(),hy(),yy(),vy(),Cy(),By(),Ry(),iu(),My(),mu(),Vy(),ox(),sx(),lx(),Li(),px(),hx(),bx(),vx(),Ix(),Ax(),gu(),hr(),Mi(),Ox(),Ex=new Map([["Abs",[Pg]],["Acos",[Og]],["Acosh",[Eg]],["Add",[pb]],["ArgMax",[vg,eu]],["ArgMin",[wg,eu]],["Asin",[Cg]],["Asinh",[kg]],["Atan",[Dg]],["Atanh",[Bg]],["Attention",[_g]],["AveragePool",[Xy,Ky]],["BatchNormalization",[Ig]],["BiasAdd",[$g]],["BiasSplitGelu",[fb]],["Cast",[Rg,Lg]],["Ceil",[Ng]],["Clip",[zg]],["Concat",[Ib,Sb]],["Conv",[lu,uu]],["ConvTranspose",[qb,Hb]],["Cos",[Mg]],["Cosh",[Fg]],["CumSum",[Kb,Xb]],["DepthToSpace",[Yb,Jb]],["DequantizeLinear",[ix,ax]],["Div",[mb]],["Einsum",[ry,ny]],["Elu",[Vg,Yn]],["Equal",[hb]],["Erf",[Gg]],["Exp",[Ug]],["Expand",[ay]],["FastGelu",[uy]],["Floor",[Wg]],["FusedConv",[lu,uu]],["Gather",[fy,cy]],["GatherElements",[by,gy]],["GatherBlockQuantized",[py,my]],["Gelu",[Hg]],["Gemm",[wy,xy]],["GlobalAveragePool",[Jy,Yy]],["GlobalMaxPool",[nx,rx]],["Greater",[xb]],["GreaterOrEqual",[vb]],["GroupQueryAttention",[Ey,Oy]],["HardSigmoid",[Qg,Jg]],["InstanceNormalization",[Dy]],["LayerNormalization",[Ly]],["LeakyRelu",[qg,Yn]],["Less",[wb]],["LessOrEqual",[Tb]],["Log",[ub]],["MatMul",[Nb]],["MatMulNBits",[zy,Ny]],["MaxPool",[ex,tx]],["Mul",[gb]],["MultiHeadAttention",[Iy,_y]],["Neg",[Kg]],["Not",[jg]],["Pad",[Fy]],["Pow",[bb]],["QuickGelu",[lb,Yn]],["Range",[ux]],["Reciprocal",[Xg]],["ReduceMin",[mg]],["ReduceMean",[lg]],["ReduceMax",[pg]],["ReduceSum",[gg]],["ReduceProd",[hg]],["ReduceL1",[cg]],["ReduceL2",[fg]],["ReduceLogSum",[yg]],["ReduceLogSumExp",[dg]],["ReduceSumSquare",[bg]],["Relu",[Zg]],["Resize",[fx,dx]],["RotaryEmbedding",[mx]],["Sigmoid",[Yg]],["Sin",[eb]],["Sinh",[tb]],["Slice",[xx,wx]],["SkipLayerNormalization",[gx]],["Split",[Sx,$x]],["Sqrt",[rb]],["Softmax",[Tx,_x]],["Sub",[yb]],["Tan",[nb]],["Tanh",[ib]],["ThresholdedRelu",[sb,Yn]],["Tile",[$y]],["Transpose",[Zh,Yh]],["Where",[Px]]])}),Ki,kx=C(()=>{mt(),jt(),be(),Ki=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,i,o){$t(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(2*this.backend.pendingDispatchNumber);let u=[];for(let e of t)u.push({binding:u.length,resource:{buffer:e.buffer}});for(let e of n)u.push({binding:u.length,resource:{buffer:e.buffer}});o&&u.push({binding:u.length,resource:o});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if("capturing"===this.backend.sessionStatus){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(2*this.backend.pendingDispatchNumber+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||"at-passes"===this.backend.queryType)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),wt(e.programInfo.name)}dispose(){}build(e,t){$t(e.name);let n=this.backend.device,i=[];n.features.has("shader-f16")&&i.push("enable f16;");let o=Kh(t,this.backend.device.limits),a=e.getShaderSource(o),s=`${i.join(`
`)}
${o.additionalImplementations}
${a}`,u=n.createShaderModule({code:s,label:e.name});$e("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=n.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return wt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:o.variablesInfo}}normalizeDispatchGroupSize(e){let t="number"==typeof e?e:e.x,n="number"==typeof e?1:e.y||1,i="number"==typeof e?1:e.z||1,o=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=o&&n<=o&&i<=o)return[t,n,i];let a=t*n*i,s=Math.ceil(Math.sqrt(a));if(!(s>o))return[s,s,1];if((s=Math.ceil(Math.cbrt(a)))>o)throw Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}}}),oS,iS,bu,Xi,Dx=C(()=>{mt(),ue(),jt(),Gs(),Hh(),Cx(),kx(),oS=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let i=0;i<e.length;++i){let o=e[i].dataType;switch(t[i]){case"none":n.push("");break;case"type":n.push(`${o}`);break;case"rank":{let t=e[i].dims.length;n.push(`${o};${t}`);break}case"dims":{let t=e[i].dims.join(",");n.push(`${o};${t}`);break}default:throw Error(`unsupported input dependency: ${t[i]}`)}}return n.join("|")},iS=(e,t,n)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+n+`:${oS(t,e.shaderCache?.inputDependencies??Array(t.length).fill("dims"))}`},bu=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Xi=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(null===this.currentKernelId)throw Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n};t.features.has("chromium-experimental-timestamp-query-inside-passes")?n.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&n.push("timestamp-query"),t.features.has("shader-f16")&&n.push("shader-f16"),this.device=await t.requestDevice(i),this.adapterInfo=new bu(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Wh(this),this.programManager=new Ki(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ei(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){"u">typeof this.querySet&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};"at-passes"===this.queryType&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:2*this.pendingDispatchNumber,endOfPassWriteIndex:2*this.pendingDispatchNumber+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){let e;this.commandEncoder&&($t(),this.endComputePass(),"none"!==this.queryType&&(this.commandEncoder.resolveQuerySet(this.querySet,0,2*this.pendingDispatchNumber,this.queryResolveBuffer,0),e=this.device.createBuffer({size:16*this.pendingDispatchNumber,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,16*this.pendingDispatchNumber)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,"none"!==this.queryType&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let i=n[e],o=i.kernelId,a=this.kernels.get(o),s=a.kernelType,u=a.kernelName,l=i.programName,d=i.inputTensorViews,p=i.outputTensorViews,c=t[2*e],h=t[2*e+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=c);let f=Number(c-this.queryTimeBase),m=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(f)||!Number.isSafeInteger(m))throw RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(e=>({dims:e.dims,dataType:Or(e.dataType)})),outputsMetadata:p.map(e=>({dims:e.dims,dataType:Or(e.dataType)})),kernelId:o,kernelType:s,kernelName:u,programName:l,startTime:f,endTime:m});else{let e="";d.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Or(t.dataType)}, `});let t="";p.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Or(e.dataType)}, `}),console.log(`[profiling] kernel "${o}|${s}|${u}|${l}" ${e}${t}execution time: ${m-f} ns`)}Io("GPU",`${l}::${c}::${h}`)}e.unmap(),this.pendingQueries.delete(e)}),wt())}run(e,t,n,i,o,a){let s;$t(e.name);let u=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(0===n)continue;let i=this.gpuDataManager.get(n);if(!i)throw Error(`no GPU data for input: ${n}`);u.push(i)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),c=0===n.length?l.map((e,t)=>t):n;if(c.length!==l.length)throw Error(`Output size ${c.length} must be equal to ${l.length}.`);let h=[],f=[];for(let e=0;e<l.length;++e){if(!Number.isInteger(c[e])||c[e]<-3||c[e]>=a)throw Error(`Invalid output index: ${c[e]}`);if(-3===c[e])continue;let t=-1===c[e],n=-2===c[e],s=t||n?o(l[e].dataType,l[e].dims):i(c[e],l[e].dataType,l[e].dims);if(h.push(s),0===s.data)continue;let u=this.gpuDataManager.get(s.data);if(!u)throw Error(`no GPU data for output: ${s.data}`);if(t&&this.temporaryData.push(u),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(u)}f.push(u)}if(u.length!==t.length||f.length!==h.length){if(0===f.length)return wt(e.name),h;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}if(p){let e=0,t=[];p.forEach(n=>{let i="number"==typeof n.data?[n.data]:n.data;if(0===i.length)return;let o=10===n.type?2:4,a,s;10===n.type?(s=i.length>4?16:i.length>2?8:i.length*o,a=i.length>4?16:o*i.length):(s=i.length<=2?i.length*o:16,a=16),e=Math.ceil(e/s)*s,t.push(e);let u=10===n.type?8:4;e+=i.length>4?Math.ceil(i.length/u)*a:i.length*o});let n=16,i=new ArrayBuffer(e=16*Math.ceil(e/16));p.forEach((e,n)=>{let o=t[n],a="number"==typeof e.data?[e.data]:e.data;if(6===e.type)new Int32Array(i,o,a.length).set(a);else if(12===e.type)new Uint32Array(i,o,a.length).set(a);else if(10===e.type)new Uint16Array(i,o,a.length).set(a);else if(1===e.type)new Float32Array(i,o,a.length).set(a);else throw Error(`Unsupported uniform type: ${Or(e.type)}`)});let o=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(o.buffer,0,i,0,e),this.gpuDataManager.release(o.id),s={offset:0,size:e,buffer:o.buffer}}let m=this.programManager.normalizeDispatchGroupSize(d),g=iS(e,t,1===m[1]&&1===m[2]),y=this.programManager.getArtifact(g);if(y||(y=this.programManager.build(e,m),this.programManager.setArtifact(g,y),$e("info",()=>`[artifact] key: ${g}, programName: ${e.name}`)),p&&y.uniformVariablesInfo){if(p.length!==y.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${y.uniformVariablesInfo.length}, got ${p.length} in program "${y.programInfo.name}".`);for(let e=0;e<p.length;e++){let t=p[e],n=t.type,i="number"==typeof t.data?1:t.data.length,[o,a]=y.uniformVariablesInfo[e];if(n!==o||i!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${o} with size ${a}, got type ${n} with size ${i} in program "${y.programInfo.name}".`)}}if($e("info",()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),"none"!==this.queryType||"capturing"===this.sessionStatus){let e={kernelId:this.currentKernelId,programName:y.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(e),"capturing"===this.sessionStatus&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(y,u,f,m,s),wt(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,i){let o=Ex.get(e);if(!o)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:o[0],attributes:[o[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let i=this.kernels.get(e);if(!i)throw Error(`kernel not created: ${e}`);let o=i.kernelType,a=i.kernelName,s=i.kernelEntry,u=i.attributes;if(null!==this.currentKernelId)throw Error(`kernel "[${o}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),$e("info",()=>`[WebGPU] Start to run kernel "[${o}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${o}] ${a}" failed. ${e}`)),1}finally{for(let e of(l&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${o}] ${a}": ${e.message}`:null)),this.temporaryData))this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,i){let o=this.sessionExternalDataMapping.get(e);o||(o=new Map,this.sessionExternalDataMapping.set(e,o));let a=o.get(t),s=this.gpuDataManager.registerExternalBuffer(n,i,a);return o.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let i=await qs(this,e,t);return Ci(i.buffer,n)}}writeTimestamp(e){"inside-passes"===this.queryType&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),"none"!==this.queryType&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:2*this.maxDispatchNumber}),this.queryResolveBuffer=this.device.createBuffer({size:16*this.maxDispatchNumber,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){$e("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){$e("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){$e("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let i=0;i<n;i++){let n=this.getComputePassEncoder(),o=e[i];this.writeTimestamp(2*this.pendingDispatchNumber),n.setPipeline(o.computePipeline),n.setBindGroup(0,o.bindGroup),n.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(2*this.pendingDispatchNumber+1),this.pendingDispatchNumber++,"none"!==this.queryType&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||"at-passes"===this.queryType)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),aS,Bx,Zi,yu,Lx,Rx=C(()=>{jt(),aS=1,Bx=()=>aS++,Zi=class{constructor(e,t){this.mlContext=e,this.tensorEntry=t,this.tensorCache=t?[t]:[]}get tensor(){return this.tensorEntry?.[0]}get context(){if(!this.mlContext)throw Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(let[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,t){for(let[n,i,o]of this.tensorCache)if(t===n){if(this.context!==e)throw Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[n,i,o],!0}return!1}async ensureTensor(e,t,n){if(this.tensorEntry){let[n,i,o]=this.tensorEntry;if(i===e&&o.every((e,n)=>e===t[n]))return n}for(let[i,o,a]of this.tensorCache)if(o===e&&a.every((e,n)=>e===t[n])){if(n&&this.tensorEntry){$e("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${t}}`);let n=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(i,n)}return this.tensorEntry=[i,o,a],i}$e("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let i=MLTensorUsage.READ|MLTensorUsage.WRITE,o=await this.context.createTensor({dataType:e,shape:t,dimensions:t,usage:i});return this.tensorEntry=[o,e,t],this.tensorCache.push(this.tensorEntry),this.activeUpload&&(this.mlContext?.writeTensor(o,this.activeUpload),this.activeUpload=void 0),o}upload(e){if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}this.mlContext?.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload){if(!e)return this.activeUpload.buffer;else{e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}}if(!this.tensorEntry)throw Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},yu=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){let e=Bx();return this.tensorsById.set(e,new Zi),e}releaseTensorId(e){let t=this.tensorsById.get(e);if(t){for(let[n,i]of(t.destroy(),this.tensorsById.delete(e),this.tensorIdsByContext))if(i.has(e)){i.delete(e),0===i.size&&this.tensorIdsByContext.delete(n);break}}}async ensureTensor(e,t,n,i){$e("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${n}, copyOld: ${i}}`);let o=this.tensorsById.get(e);if(!o)throw Error("Tensor not found.");return o.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),this.tensorIdsByContext.get(this.backend.currentContext)?.add(e),o.ensureTensor(t,n,i)}upload(e,t){this.tensorsById.get(e).upload(t)}async download(e,t){return $e("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`),this.tensorsById.get(e).download(t)}releaseTensorsForContext(e){let t=this.tensorIdsByContext.get(e);if(t){for(let e of t)this.tensorsById.get(e).destroy(),this.tensorsById.delete(e);this.tensorIdsByContext.delete(e)}}registerTensor(e,t,n,i){for(let[n,i]of this.tensorsById)if(i.trySelectTensor(e,t))return n;let o=Bx();this.tensorsById.set(o,new Zi(e,[t,n,i]));let a=this.tensorIdsByContext.get(e);return a||(a=new Set,this.tensorIdsByContext.set(e,a)),a.add(o),o}},Lx=(...e)=>new yu(...e)}),zx,Yi,Nx=C(()=>{ue(),Pr(),Gs(),Rx(),jt(),zx=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Yi=class{constructor(e){this.tensorManager=Lx(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,Ei(e.logLevel,!!e.debug)}get currentSessionId(){if(void 0===this.activeSessionId)throw Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.mlContextBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);n.delete(e),0===n.size&&(this.sessionIdsByMLContext.delete(t),this.tensorManager.releaseTensorsForContext(t))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){$e("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,i){let o=zx.get(t);if(!o)throw Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,o,n,i)}uploadTensor(e,t){if(!Ke().shouldTransferToMLTensor)throw Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");$e("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Ci(n,t)}}registerMLTensor(e,t,n){let i=zx.get(t);if(!i)throw Error(`Unsupported ONNX data type: ${t}`);let o=this.tensorManager.registerTensor(this.currentContext,e,i,n);return $e("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${o}}`),o}flush(){}}}),Mx={};un(Mx,{init:()=>sS});var no,xu,sS,Fx=C(()=>{ue(),Dx(),jt(),ge(),Nx(),no=class e{constructor(e,t,n,i){this.module=e,this.dataType=t,this.data=n,this.dims=i}getFloat32Array(){if(1!==this.dataType)throw Error("Invalid data type");let e=k.size(this.dims);return 0===e?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(7!==this.dataType)throw Error("Invalid data type");let e=k.size(this.dims);return 0===e?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(6!==this.dataType)throw Error("Invalid data type");let e=k.size(this.dims);return 0===e?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(10!==this.dataType&&4!==this.dataType)throw Error("Invalid data type");let e=k.size(this.dims);return 0===e?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(k.size(t)!==k.size(this.dims))throw Error("Invalid new shape");return new e(this.module,this.dataType,this.data,t)}},xu=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.HEAPU32,o=n>>>2;this.opKernelContext=i[o++];let a=i[o++];this.outputCount=i[o++],this.customDataOffset=i[o++],this.customDataSize=i[o++];let s=[];for(let t=0;t<a;t++){let t=i[o++],n=i[o++],a=i[o++],u=[];for(let e=0;e<a;e++)u.push(i[o++]);s.push(new no(e,t,n,u))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){let n=t?.inputs?.map(e=>"number"==typeof e?this.inputs[e]:e)??this.inputs,i=t?.outputs??[],o=(e,t,n)=>new no(this.module,t,this.output(e,n),n),a=(e,t)=>{let n=Xr(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let i=n>0?this.backend.gpuDataManager.create(n).id:0;return new no(this.module,e,i,t)};return this.backend.run(e,n,i,o,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.stackAlloc((1+t.length)*4),i=n>>2;this.module.HEAPU32[i++]=t.length;for(let e=0;e<t.length;e++)this.module.HEAPU32[i++]=t[e];return this.module._JsepOutput(this.opKernelContext,e,n)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},sS=async(e,t,n,i)=>{let o=t.jsepInit;if(!o)throw Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if("webgpu"===e){let e=new Xi;await e.initialize(n,i),o("webgpu",[e,t=>e.alloc(t),t=>e.free(t),(n,i,o,a=!1)=>{if(a)$e("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${n}, dst=${i}, size=${o}`),e.memcpy(n,i);else{$e("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${n}, gpuDataId=${i}, size=${o}`);let a=t.HEAPU8.subarray(n>>>0,(n>>>0)+o);e.upload(i,a)}},async(n,i,o)=>{$e("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${i}, size=${o}`),await e.download(n,()=>t.HEAPU8.subarray(i>>>0,(i>>>0)+o))},(n,i,o)=>e.createKernel(n,i,o,t.UTF8ToString(t._JsepGetNodeName(i))),t=>e.releaseKernel(t),(n,i,o,a)=>{$e("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${o}, kernel=${n}, contextDataOffset=${i}`);let s=new xu(t,e,i);return e.computeKernel(n,s,a)},()=>e.captureBegin(),()=>e.captureEnd(),()=>e.replay()])}else{let e=new Yi(n);o("webnn",[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,i,o)=>e.ensureTensor(t,n,i,o),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n)])}}}),uS,yi,xi,Qr,lS,qn,wi,vi,Vx,Ti,_i,Ii,Rs=C(()=>{Rh(),Nh(),ue(),Pr(),$i(),Vs(),uS=(e,t)=>{0!==Ke()._OrtInit(e,t)&&Ue("Can't initialize onnxruntime.")},yi=async e=>{uS(e.wasm.numThreads,Xn(e.logLevel))},xi=async(e,t)=>{{let n=(Fx(),Pn(Mx)).init;if("webgpu"===t){if(typeof navigator>"u"||!navigator.gpu)throw Error("WebGPU is not supported in current environment");let t=e.webgpu.adapter;if(t){if("object"!=typeof t.limits||"object"!=typeof t.features||"function"!=typeof t.requestDevice)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(void 0!==n&&"low-power"!==n&&"high-performance"!==n)throw Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(void 0!==i&&"boolean"!=typeof i)throw Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(!(t=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i})))throw Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await n("webgpu",Ke(),e,t)}if("webnn"===t){if(typeof navigator>"u"||!navigator.ml)throw Error("WebNN is not supported in current environment");await n("webnn",Ke(),e)}}},Qr=new Map,lS=e=>{let t=Ke(),n=t.stackSave();try{let n=t.stackAlloc(8);return 0!==t._OrtGetInputOutputCount(e,n,n+4)&&Ue("Can't get session input/output count."),[t.HEAP32[n/4],t.HEAP32[n/4+1]]}finally{t.stackRestore(n)}},qn=e=>{let t=Ke(),n=t._malloc(e.byteLength);if(0===n)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},wi=async(e,t)=>{let n,i,o=Ke();Array.isArray(e)?[n,i]=e:e.buffer===o.HEAPU8.buffer?[n,i]=[e.byteOffset,e.byteLength]:[n,i]=qn(e);let a=0,s=0,u=0,l=[],d=[],p=[];try{if([s,l]=zh(t),t?.externalData&&o.mountExternalData){let e=[];for(let n of t.externalData){let t="string"==typeof n?n:n.path;e.push(Zn("string"==typeof n?n:n.data).then(e=>{o.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if(("string"==typeof e?e:e.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,o.currentContext)throw Error("WebNN execution provider is already set.");if("string"!=typeof e){let t=e,n=t?.context,i=t?.gpuDevice,a=t?.deviceType,s=t?.numThreads,u=t?.powerPreference;n?o.currentContext=n:i?o.currentContext=await navigator.ml.createContext(i):o.currentContext=await navigator.ml.createContext({deviceType:a,numThreads:s,powerPreference:u})}else o.currentContext=await navigator.ml.createContext();break}a=await o._OrtCreateSession(n,i,s),0===a&&Ue("Can't create a session."),o.currentContext&&(o.jsepRegisterMLContext(a,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[e,c]=lS(a),h=!!t?.enableGraphCapture,f=[],m=[],g=[];for(let t=0;t<e;t++){let e=o._OrtGetInputName(a,t);0===e&&Ue("Can't get an input name."),d.push(e),f.push(o.UTF8ToString(e))}for(let e=0;e<c;e++){let n=o._OrtGetOutputName(a,e);0===n&&Ue("Can't get an output name."),p.push(n);let i=o.UTF8ToString(n);m.push(i);{if(h&&t?.preferredOutputLocation===void 0){g.push("gpu-buffer");continue}let e="string"==typeof t?.preferredOutputLocation?t.preferredOutputLocation:t?.preferredOutputLocation?.[i]??"cpu";if("cpu"!==e&&"cpu-pinned"!==e&&"gpu-buffer"!==e&&"ml-tensor"!==e)throw Error(`Not supported preferred output location: ${e}.`);if(h&&"gpu-buffer"!==e)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);g.push(e)}}let y=null;return g.some(e=>"gpu-buffer"===e||"ml-tensor"===e)&&(u=o._OrtCreateBinding(a),0===u&&Ue("Can't create IO binding."),y={handle:u,outputPreferredLocations:g,outputPreferredLocationsEncoded:g.map(e=>Fs(e))}),Qr.set(a,[a,d,p,y,h,!1]),[a,f,m]}catch(e){throw d.forEach(e=>o._OrtFree(e)),p.forEach(e=>o._OrtFree(e)),0!==u&&o._OrtReleaseBinding(u),0!==a&&o._OrtReleaseSession(a),e}finally{o._free(n),0!==s&&o._OrtReleaseSessionOptions(s),l.forEach(e=>o._free(e)),o.unmountExternalData?.()}},vi=e=>{let t=Ke(),n=Qr.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[i,o,a,s,u]=n;s&&(u&&t._OrtClearBoundOutputs(s.handle),t._OrtReleaseBinding(s.handle)),t.jsepOnReleaseSession?.(e),o.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(i),Qr.delete(e)},Vx=(e,t,n,i,o,a=!1)=>{if(!e){t.push(0);return}let s=Ke(),u=e[0],l=e[1],d=e[3],p,c;if("string"===u&&("gpu-buffer"===d||"ml-tensor"===d))throw Error("String tensor is not supported on GPU.");if(a&&"gpu-buffer"!==d)throw Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if("gpu-buffer"===d){let t=e[2].gpuBuffer;c=Xr(Kn(u),l);let n=s.jsepRegisterBuffer;if(!n)throw Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');p=n(i,o,t,c)}else if("ml-tensor"===d){let t=e[2].mlTensor;c=Xr(Kn(u),l);let n=s.jsepRegisterMLTensor;if(!n)throw Error('Tensor location "ml-tensor" is not supported without using WebNN.');p=n(t,Kn(u),l)}else{let t=e[2];if(Array.isArray(t)){c=4*t.length,p=s._malloc(c),n.push(p);let e=p/4;for(let i=0;i<t.length;i++){if("string"!=typeof t[i])throw TypeError(`tensor data at index ${i} is not a string`);s.HEAPU32[e++]=ot(t[i],n)}}else c=t.byteLength,p=s._malloc(c),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,c),p)}let h=s.stackSave(),f=s.stackAlloc(4*l.length);try{let e=f/4;l.forEach(t=>s.HEAP32[e++]=t);let n=s._OrtCreateTensor(Kn(u),p,c,f,l.length,Fs(d));0===n&&Ue(`Can't create tensor for input/output. session=${i}, index=${o}.`),t.push(n)}finally{s.stackRestore(h)}},Ti=async(e,t,n,i,o,a)=>{let s=Ke(),u=Qr.get(e);if(!u)throw Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],p=u[2],c=u[3],h=u[4],f=u[5],m=t.length,g=i.length,y=0,b=[],_=[],v=[],x=[],w=s.stackSave(),$=s.stackAlloc(4*m),T=s.stackAlloc(4*m),S=s.stackAlloc(4*g),I=s.stackAlloc(4*g);try{let u;s.jsepOnRunStart?.(l),[y,b]=Lh(a);for(let i=0;i<m;i++)Vx(n[i],_,x,e,t[i],h);for(let t=0;t<g;t++)Vx(o[t],v,x,e,m+i[t],h);let w=$/4,E=T/4,O=S/4,A=I/4;for(let e=0;e<m;e++)s.HEAPU32[w++]=_[e],s.HEAPU32[E++]=d[t[e]];for(let e=0;e<g;e++)s.HEAPU32[O++]=v[e],s.HEAPU32[A++]=p[i[e]];if(c&&!f){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:u}=c;if(d.length!==m)throw Error(`input count from feeds (${m}) is expected to be always equal to model's input count (${d.length}).`);for(let i=0;i<m;i++){let o=t[i];await s._OrtBindInput(n,d[o],_[i])!==0&&Ue(`Can't bind input[${i}] for session=${e}.`)}for(let t=0;t<g;t++){let l=i[t];o[t]?.[3]?0!==s._OrtBindOutput(n,p[l],v[t],0)&&Ue(`Can't bind pre-allocated output[${t}] for session=${e}.`):0!==s._OrtBindOutput(n,p[l],0,u[l])&&Ue(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}Qr.set(e,[l,d,p,c,h,!0])}u=c?await s._OrtRunWithBinding(l,c.handle,g,S,y):await s._OrtRun(l,T,$,m,I,g,S,y),0!==u&&Ue("failed to call OrtRun().");let k=[];for(let e=0;e<g;e++){let t=s.HEAPU32[S/4+e];if(t===v[e]){k.push(o[e]);continue}let n=s.stackSave(),a=s.stackAlloc(16),u=!1,l,d=0;try{0!==s._OrtGetTensorData(t,a,a+4,a+8,a+12)&&Ue(`Can't access output tensor data on index ${e}.`);let n=a/4,o=s.HEAPU32[n++];d=s.HEAPU32[n++];let p=s.HEAPU32[n++],h=s.HEAPU32[n++],f=[];for(let e=0;e<h;e++)f.push(s.HEAPU32[p/4+e]);s._OrtFree(p);let m=f.reduce((e,t)=>e*t,1);l=Or(o);let g=c?.outputPreferredLocations[i[e]];if("string"===l){if("gpu-buffer"===g||"ml-tensor"===g)throw Error("String tensor is not supported on GPU.");let e=[],t=d/4;for(let n=0;n<m;n++){let i=s.HEAPU32[t++],o=n===m-1?void 0:s.HEAPU32[t]-i;e.push(s.UTF8ToString(i,o))}k.push([l,f,e,"cpu"])}else if("gpu-buffer"===g&&m>0){let e=s.jsepGetBuffer;if(!e)throw Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let n=e(d),i=Xr(o,m);if(void 0===i||!Pi(l))throw Error(`Unsupported data type: ${l}`);u=!0,k.push([l,f,{gpuBuffer:n,download:s.jsepCreateDownloader(n,i,l),dispose:()=>{s._OrtReleaseTensor(t)}},"gpu-buffer"])}else if("ml-tensor"===g&&m>0){let e=s.jsepEnsureTensor;if(!e)throw Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(void 0===Xr(o,m)||!Oi(l))throw Error(`Unsupported data type: ${l}`);let n=await e(d,o,f,!1);u=!0,k.push([l,f,{mlTensor:n,download:s.jsepCreateMLTensorDownloader(d,l),dispose:()=>{s.jsepReleaseTensorId(d),s._OrtReleaseTensor(t)}},"ml-tensor"])}else{let e=new(Ai(l))(m);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(s.HEAPU8.subarray(d,d+e.byteLength)),k.push([l,f,e,"cpu"])}}finally{s.stackRestore(n),"string"===l&&d&&s._free(d),u||s._OrtReleaseTensor(t)}}return c&&!h&&(s._OrtClearBoundOutputs(c.handle),Qr.set(e,[l,d,p,c,h,!1])),k}finally{s.stackRestore(w),_.forEach(e=>s._OrtReleaseTensor(e)),v.forEach(e=>s._OrtReleaseTensor(e)),x.forEach(e=>s._free(e)),0!==y&&s._OrtReleaseRunOptions(y),b.forEach(e=>s._free(e))}},_i=e=>{let t=Ke(),n=Qr.get(e);if(!n)throw Error("invalid session id");let i=n[0],o=t._OrtEndProfiling(i);0===o&&Ue("Can't get an profile file name."),t._OrtFree(o)},Ii=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&"buffer"in e&&t.push(e.buffer)}return t}}),en,Ft,oo,Qi,ea,Ji,wu,vu,$n,An,fS,Gx,Ux,Wx,Hx,qx,jx,Kx,Tu=C(()=>{mt(),Rs(),Pr(),Hn(),en=()=>!!ce.wasm.proxy&&"u">typeof document,oo=!1,Qi=!1,ea=!1,vu=new Map,$n=(e,t)=>{let n=vu.get(e);n?n.push(t):vu.set(e,[t])},An=()=>{if(oo||!Qi||ea||!Ft)throw Error("worker not ready")},fS=e=>{switch(e.data.type){case"init-wasm":oo=!1,e.data.err?(ea=!0,wu[1](e.data.err)):(Qi=!0,wu[0]()),Ji&&(URL.revokeObjectURL(Ji),Ji=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=vu.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out)}}},Gx=async()=>{if(!Qi){if(oo)throw Error("multiple calls to 'initWasm()' detected.");if(ea)throw Error("previous call to 'initWasm()' failed.");if(oo=!0,en())return new Promise((e,t)=>{Ft?.terminate(),kh().then(([n,i])=>{try{(Ft=i).onerror=e=>t(e),Ft.onmessage=fS,wu=[e,t];let o={type:"init-wasm",in:ce};Ft.postMessage(o),Ji=n}catch(e){t(e)}},t)});try{await bi(ce.wasm),await yi(ce),Qi=!0}catch(e){throw ea=!0,e}finally{oo=!1}}},Ux=async e=>{if(en())return An(),new Promise((t,n)=>{$n("init-ep",[t,n]);let i={type:"init-ep",in:{epName:e,env:ce}};Ft.postMessage(i)});await xi(ce,e)},Wx=async e=>en()?(An(),new Promise((t,n)=>{$n("copy-from",[t,n]);let i={type:"copy-from",in:{buffer:e}};Ft.postMessage(i,[e.buffer])})):qn(e),Hx=async(e,t)=>{if(!en())return wi(e,t);if(t?.preferredOutputLocation)throw Error('session option "preferredOutputLocation" is not supported for proxy.');return An(),new Promise((n,i)=>{$n("create",[n,i]);let o={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Ft.postMessage(o,a)})},qx=async e=>{if(en())return An(),new Promise((t,n)=>{$n("release",[t,n]);let i={type:"release",in:e};Ft.postMessage(i)});vi(e)},jx=async(e,t,n,i,o,a)=>{if(!en())return Ti(e,t,n,i,o,a);if(n.some(e=>"cpu"!==e[3]))throw Error("input tensor on GPU is not supported for proxy.");if(o.some(e=>e))throw Error("pre-allocated output tensor is not supported for proxy.");return An(),new Promise((o,s)=>{$n("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:a}};Ft.postMessage(l,Ii(u))})},Kx=async e=>{if(en())return An(),new Promise((t,n)=>{$n("end-profiling",[t,n]);let i={type:"end-profiling",in:e};Ft.postMessage(i)});_i(e)}}),Xx,dS,ta,Zx=C(()=>{mt(),Tu(),ue(),gi(),Vs(),Xx=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},dS=e=>{switch(e[3]){case"cpu":return new nt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Pi(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:i,dispose:o}=e[2];return nt.fromGpuBuffer(n,{dataType:t,dims:e[1],download:i,dispose:o})}case"ml-tensor":{let t=e[0];if(!Oi(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:i,dispose:o}=e[2];return nt.fromMLTensor(n,{dataType:t,dims:e[1],download:i,dispose:o})}default:throw Error(`invalid data location: ${e[3]}`)}},ta=class{async fetchModelAndCopyToWasmMemory(e){return Wx(await Zn(e))}async loadModel(e,t){let n;$t(),n="string"==typeof e?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames]=await Hx(n,t),wt()}async dispose(){return qx(this.sessionId)}async run(e,t,n){$t();let i=[],o=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(-1===a)throw Error(`invalid input '${t}'`);i.push(n),o.push(a)});let a=[],s=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],i=this.outputNames.indexOf(t);if(-1===i)throw Error(`invalid output '${t}'`);a.push(n),s.push(i)});let u=i.map((e,t)=>Xx(e,()=>`input "${this.inputNames[o[t]]}"`)),l=a.map((e,t)=>e?Xx(e,()=>`output "${this.outputNames[s[t]]}"`):null),d=await jx(this.sessionId,o,u,s,l,n),p={};for(let e=0;e<d.length;e++)p[this.outputNames[s[e]]]=a[e]??dS(d[e]);return wt(),p}startProfiling(){}endProfiling(){Kx(this.sessionId)}}}),Jx={};un(Jx,{OnnxruntimeWebAssemblyBackend:()=>ra,initializeFlags:()=>Yx,wasmBackend:()=>pS});var Yx,ra,pS,Qx=C(()=>{mt(),Tu(),Zx(),Hn(),Yx=()=>{if(("number"!=typeof ce.wasm.initTimeout||ce.wasm.initTimeout<0)&&(ce.wasm.initTimeout=0),!1===ce.wasm.simd&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),"boolean"!=typeof ce.wasm.proxy&&(ce.wasm.proxy=!1),"boolean"!=typeof ce.wasm.trace&&(ce.wasm.trace=!1),"number"!=typeof ce.wasm.numThreads||!Number.isInteger(ce.wasm.numThreads)||ce.wasm.numThreads<=0){if("u">typeof self&&!self.crossOriginIsolated)ce.wasm.numThreads=1;else{let e=typeof navigator>"u"?$a("node:os").cpus().length:navigator.hardwareConcurrency;ce.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}}},pS=new(ra=class{async init(e){Yx(),await Gx(),await Ux(e)}async createInferenceSessionHandler(e,t){let n=new ta;return await n.loadModel(e,t),Promise.resolve(n)}})});mt(),mt(),mt();var yc="1.20.1",YV=Ea;{let r=(_h(),Pn(Th)).onnxjsBackend;vr("webgl",r,-10)}{let r=(Qx(),Pn(Jx)).wasmBackend;vr("webgpu",r,5),vr("webnn",r,5),vr("cpu",r,10),vr("wasm",r,10)}Object.defineProperty(ce.versions,"web",{value:yc,enumerable:!0})},541:function(e,t,n){n.d(t,{P:function(){return i}});function i(e,t,n){var i,o=n||{},a=o.noTrailing,s=void 0!==a&&a,u=o.noLeading,l=void 0!==u&&u,d=o.debounceMode,p=void 0===d?void 0:d,c=!1,h=0;function f(){i&&clearTimeout(i)}function m(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;f(),c=!n}function g(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];var u=this,d=Date.now()-h;if(!c)!l&&p&&!i&&m(),f(),void 0===p&&d>e?l?(h=Date.now(),!s&&(i=setTimeout(p?g:m,e))):m():!0!==s&&(i=setTimeout(p?g:m,void 0===p?e-d:e));function m(){h=Date.now(),t.apply(u,o)}function g(){i=void 0}}return g.cancel=m,g}}}]);