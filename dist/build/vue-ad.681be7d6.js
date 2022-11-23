var rt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},je={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(rt,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",c="minute",p="hour",u="day",w="week",O="month",x="quarter",m="year",h="date",T="Invalid Date",L=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,k={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},H=function(S,d,l){var y=String(S);return!y||y.length>=d?S:""+Array(d+1-y.length).join(l)+S},fe={s:H,z:function(S){var d=-S.utcOffset(),l=Math.abs(d),y=Math.floor(l/60),f=l%60;return(d<=0?"+":"-")+H(y,2,"0")+":"+H(f,2,"0")},m:function S(d,l){if(d.date()<l.date())return-S(l,d);var y=12*(l.year()-d.year())+(l.month()-d.month()),f=d.clone().add(y,O),b=l-f<0,E=d.clone().add(y+(b?-1:1),O);return+(-(y+(l-f)/(b?f-E:E-f))||0)},a:function(S){return S<0?Math.ceil(S)||0:Math.floor(S)},p:function(S){return{M:O,y:m,w,d:u,D:h,h:p,m:c,s,ms:o,Q:x}[S]||String(S||"").toLowerCase().replace(/s$/,"")},u:function(S){return S===void 0}},K="en",q={};q[K]=k;var de=function(S){return S instanceof se},re=function S(d,l,y){var f;if(!d)return K;if(typeof d=="string"){var b=d.toLowerCase();q[b]&&(f=b),l&&(q[b]=l,f=b);var E=d.split("-");if(!f&&E.length>1)return S(E[0])}else{var g=d.name;q[g]=d,f=g}return!y&&f&&(K=f),f||!y&&K},N=function(S,d){if(de(S))return S.clone();var l=typeof d=="object"?d:{};return l.date=S,l.args=arguments,new se(l)},D=fe;D.l=re,D.i=de,D.w=function(S,d){return N(S,{locale:d.$L,utc:d.$u,x:d.$x,$offset:d.$offset})};var se=function(){function S(l){this.$L=re(l.locale,null,!0),this.parse(l)}var d=S.prototype;return d.parse=function(l){this.$d=function(y){var f=y.date,b=y.utc;if(f===null)return new Date(NaN);if(D.u(f))return new Date;if(f instanceof Date)return new Date(f);if(typeof f=="string"&&!/Z$/i.test(f)){var E=f.match(L);if(E){var g=E[2]-1||0,$=(E[7]||"0").substring(0,3);return b?new Date(Date.UTC(E[1],g,E[3]||1,E[4]||0,E[5]||0,E[6]||0,$)):new Date(E[1],g,E[3]||1,E[4]||0,E[5]||0,E[6]||0,$)}}return new Date(f)}(l),this.$x=l.x||{},this.init()},d.init=function(){var l=this.$d;this.$y=l.getFullYear(),this.$M=l.getMonth(),this.$D=l.getDate(),this.$W=l.getDay(),this.$H=l.getHours(),this.$m=l.getMinutes(),this.$s=l.getSeconds(),this.$ms=l.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return this.$d.toString()!==T},d.isSame=function(l,y){var f=N(l);return this.startOf(y)<=f&&f<=this.endOf(y)},d.isAfter=function(l,y){return N(l)<this.startOf(y)},d.isBefore=function(l,y){return this.endOf(y)<N(l)},d.$g=function(l,y,f){return D.u(l)?this[y]:this.set(f,l)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(l,y){var f=this,b=!!D.u(y)||y,E=D.p(l),g=function(W,C){var I=D.w(f.$u?Date.UTC(f.$y,C,W):new Date(f.$y,C,W),f);return b?I:I.endOf(u)},$=function(W,C){return D.w(f.toDate()[W].apply(f.toDate("s"),(b?[0,0,0,0]:[23,59,59,999]).slice(C)),f)},A=this.$W,_=this.$M,v=this.$D,B="set"+(this.$u?"UTC":"");switch(E){case m:return b?g(1,0):g(31,11);case O:return b?g(1,_):g(0,_+1);case w:var X=this.$locale().weekStart||0,Z=(A<X?A+7:A)-X;return g(b?v-Z:v+(6-Z),_);case u:case h:return $(B+"Hours",0);case p:return $(B+"Minutes",1);case c:return $(B+"Seconds",2);case s:return $(B+"Milliseconds",3);default:return this.clone()}},d.endOf=function(l){return this.startOf(l,!1)},d.$set=function(l,y){var f,b=D.p(l),E="set"+(this.$u?"UTC":""),g=(f={},f[u]=E+"Date",f[h]=E+"Date",f[O]=E+"Month",f[m]=E+"FullYear",f[p]=E+"Hours",f[c]=E+"Minutes",f[s]=E+"Seconds",f[o]=E+"Milliseconds",f)[b],$=b===u?this.$D+(y-this.$W):y;if(b===O||b===m){var A=this.clone().set(h,1);A.$d[g]($),A.init(),this.$d=A.set(h,Math.min(this.$D,A.daysInMonth())).$d}else g&&this.$d[g]($);return this.init(),this},d.set=function(l,y){return this.clone().$set(l,y)},d.get=function(l){return this[D.p(l)]()},d.add=function(l,y){var f,b=this;l=Number(l);var E=D.p(y),g=function(_){var v=N(b);return D.w(v.date(v.date()+Math.round(_*l)),b)};if(E===O)return this.set(O,this.$M+l);if(E===m)return this.set(m,this.$y+l);if(E===u)return g(1);if(E===w)return g(7);var $=(f={},f[c]=r,f[p]=i,f[s]=n,f)[E]||1,A=this.$d.getTime()+l*$;return D.w(A,this)},d.subtract=function(l,y){return this.add(-1*l,y)},d.format=function(l){var y=this,f=this.$locale();if(!this.isValid())return f.invalidDate||T;var b=l||"YYYY-MM-DDTHH:mm:ssZ",E=D.z(this),g=this.$H,$=this.$m,A=this.$M,_=f.weekdays,v=f.months,B=function(C,I,he,ie){return C&&(C[I]||C(y,b))||he[I].slice(0,ie)},X=function(C){return D.s(g%12||12,C,"0")},Z=f.meridiem||function(C,I,he){var ie=C<12?"AM":"PM";return he?ie.toLowerCase():ie},W={YY:String(this.$y).slice(-2),YYYY:this.$y,M:A+1,MM:D.s(A+1,2,"0"),MMM:B(f.monthsShort,A,v,3),MMMM:B(v,A),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:B(f.weekdaysMin,this.$W,_,2),ddd:B(f.weekdaysShort,this.$W,_,3),dddd:_[this.$W],H:String(g),HH:D.s(g,2,"0"),h:X(1),hh:X(2),a:Z(g,$,!0),A:Z(g,$,!1),m:String($),mm:D.s($,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:E};return b.replace(P,function(C,I){return I||W[C]||E.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(l,y,f){var b,E=D.p(y),g=N(l),$=(g.utcOffset()-this.utcOffset())*r,A=this-g,_=D.m(this,g);return _=(b={},b[m]=_/12,b[O]=_,b[x]=_/3,b[w]=(A-$)/6048e5,b[u]=(A-$)/864e5,b[p]=A/i,b[c]=A/r,b[s]=A/n,b)[E]||A,f?_:D.a(_)},d.daysInMonth=function(){return this.endOf(O).$D},d.$locale=function(){return q[this.$L]},d.locale=function(l,y){if(!l)return this.$L;var f=this.clone(),b=re(l,y,!0);return b&&(f.$L=b),f},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},S}(),De=se.prototype;return N.prototype=De,[["$ms",o],["$s",s],["$m",c],["$H",p],["$W",u],["$M",O],["$y",m],["$D",h]].forEach(function(S){De[S[1]]=function(d){return this.$g(d,S[0],S[1])}}),N.extend=function(S,d){return S.$i||(S(d,se,N),S.$i=!0),N},N.locale=re,N.isDayjs=de,N.unix=function(S){return N(1e3*S)},N.en=q[K],N.Ls=q,N.p={},N})})(je);const un=je.exports;function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:He}=Object.prototype,{getPrototypeOf:Se}=Object,Oe=(e=>t=>{const n=He.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),j=e=>(e=e.toLowerCase(),t=>Oe(t)===e),ue=e=>t=>typeof t===e,{isArray:te}=Array,ye=ue("undefined");function st(e){return e!==null&&!ye(e)&&e.constructor!==null&&!ye(e.constructor)&&V(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ve=j("ArrayBuffer");function it(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ve(e.buffer),t}const ot=ue("string"),V=ue("function"),Ie=ue("number"),ze=e=>e!==null&&typeof e=="object",at=e=>e===!0||e===!1,oe=e=>{if(Oe(e)!=="object")return!1;const t=Se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ut=j("Date"),ct=j("File"),lt=j("Blob"),ft=j("FileList"),dt=e=>ze(e)&&V(e.pipe),ht=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||He.call(e)===t||V(e.toString)&&e.toString()===t)},pt=j("URLSearchParams"),mt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ce(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,i;if(typeof e!="object"&&(e=[e]),te(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let c;for(r=0;r<s;r++)c=o[r],t.call(null,e[c],c,e)}}function we(){const e={},t=(n,r)=>{oe(e[r])&&oe(n)?e[r]=we(e[r],n):oe(n)?e[r]=we({},n):te(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&ce(arguments[n],t);return e}const yt=(e,t,n,{allOwnKeys:r}={})=>(ce(t,(i,o)=>{n&&V(i)?e[o]=ke(i,n):e[o]=i},{allOwnKeys:r}),e),wt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Et=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},bt=(e,t,n,r)=>{let i,o,s;const c={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!c[s]&&(t[s]=e[s],c[s]=!0);e=n!==!1&&Se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},St=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ot=e=>{if(!e)return null;if(te(e))return e;let t=e.length;if(!Ie(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Rt=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&Se(Uint8Array)),Tt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},gt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Dt=j("HTMLFormElement"),At=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),$t=j("RegExp"),qe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ce(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},xt=e=>{qe(e,(t,n)=>{const r=e[n];if(!!V(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},Nt=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return te(e)?r(e):r(String(e).split(t)),n},_t=()=>{},Ct=(e,t)=>(e=+e,Number.isFinite(e)?e:t),a={isArray:te,isArrayBuffer:ve,isBuffer:st,isFormData:ht,isArrayBufferView:it,isString:ot,isNumber:Ie,isBoolean:at,isObject:ze,isPlainObject:oe,isUndefined:ye,isDate:ut,isFile:ct,isBlob:lt,isRegExp:$t,isFunction:V,isStream:dt,isURLSearchParams:pt,isTypedArray:Rt,isFileList:ft,forEach:ce,merge:we,extend:yt,trim:mt,stripBOM:wt,inherits:Et,toFlatObject:bt,kindOf:Oe,kindOfTest:j,endsWith:St,toArray:Ot,forEachEntry:Tt,matchAll:gt,isHTMLForm:Dt,hasOwnProperty:Ae,hasOwnProp:Ae,reduceDescriptors:qe,freezeMethods:xt,toObjectSet:Nt,toCamelCase:At,noop:_t,toFiniteNumber:Ct};function R(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}a.inherits(R,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Je=R.prototype,We={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{We[e]={value:e}});Object.defineProperties(R,We);Object.defineProperty(Je,"isAxiosError",{value:!0});R.from=(e,t,n,r,i,o)=>{const s=Object.create(Je);return a.toFlatObject(e,s,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),R.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var Pt=typeof self=="object"?self.FormData:window.FormData;function Ee(e){return a.isPlainObject(e)||a.isArray(e)}function Ve(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function $e(e,t,n){return e?e.concat(t).map(function(i,o){return i=Ve(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Mt(e){return a.isArray(e)&&!e.some(Ee)}const Ft=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Lt(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function le(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(Pt||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,L){return!a.isUndefined(L[T])});const r=n.metaTokens,i=n.visitor||w,o=n.dots,s=n.indexes,p=(n.Blob||typeof Blob!="undefined"&&Blob)&&Lt(t);if(!a.isFunction(i))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!p&&a.isBlob(h))throw new R("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?p&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function w(h,T,L){let P=h;if(h&&!L&&typeof h=="object"){if(a.endsWith(T,"{}"))T=r?T:T.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&Mt(h)||a.isFileList(h)||a.endsWith(T,"[]")&&(P=a.toArray(h)))return T=Ve(T),P.forEach(function(H,fe){!(a.isUndefined(H)||H===null)&&t.append(s===!0?$e([T],fe,o):s===null?T:T+"[]",u(H))}),!1}return Ee(h)?!0:(t.append($e(L,T,o),u(h)),!1)}const O=[],x=Object.assign(Ft,{defaultVisitor:w,convertValue:u,isVisitable:Ee});function m(h,T){if(!a.isUndefined(h)){if(O.indexOf(h)!==-1)throw Error("Circular reference detected in "+T.join("."));O.push(h),a.forEach(h,function(P,k){(!(a.isUndefined(P)||P===null)&&i.call(t,P,a.isString(k)?k.trim():k,T,x))===!0&&m(P,T?T.concat(k):[k])}),O.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return m(e),t}function xe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Re(e,t){this._pairs=[],e&&le(e,this,t)}const Ye=Re.prototype;Ye.append=function(t,n){this._pairs.push([t,n])};Ye.toString=function(t){const n=t?function(r){return t.call(this,r,xe)}:xe;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Bt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ke(e,t,n){if(!t)return e;const r=n&&n.encode||Bt,i=n&&n.serialize;let o;if(i?o=i(t,n):o=a.isURLSearchParams(t)?t.toString():new Re(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ne{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ut=typeof URLSearchParams!="undefined"?URLSearchParams:Re,jt=FormData,kt=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),U={isBrowser:!0,classes:{URLSearchParams:Ut,FormData:jt,Blob},isStandardBrowserEnv:kt,protocols:["http","https","file","blob","url","data"]};function Ht(e,t){return le(e,new U.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return U.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function vt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function It(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Ze(e){function t(n,r,i,o){let s=n[o++];const c=Number.isFinite(+s),p=o>=n.length;return s=!s&&a.isArray(i)?i.length:s,p?(a.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!c):((!i[s]||!a.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&a.isArray(i[s])&&(i[s]=It(i[s])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,i)=>{t(vt(r),i,n,0)}),n}return null}function zt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new R("Request failed with status code "+n.status,[R.ERR_BAD_REQUEST,R.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const qt=U.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,c){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(i)&&p.push("expires="+new Date(i).toGMTString()),a.isString(o)&&p.push("path="+o),a.isString(s)&&p.push("domain="+s),c===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Jt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Wt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Qe(e,t){return e&&!Jt(t)?Wt(e,t):t}const Vt=U.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const c=a.isString(s)?i(s):s;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function ne(e,t,n){R.call(this,e==null?"canceled":e,R.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(ne,R,{__CANCEL__:!0});function Yt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const Kt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Xt=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&Kt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},_e=Symbol("internals"),Ge=Symbol("defaults");function G(e){return e&&String(e).trim().toLowerCase()}function ae(e){return e===!1||e==null?e:a.isArray(e)?e.map(ae):String(e)}function Zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Ce(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Qt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Gt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}function Q(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}function F(e,t){e&&this.set(e),this[Ge]=t||null}Object.assign(F.prototype,{set:function(e,t,n){const r=this;function i(o,s,c){const p=G(s);if(!p)throw new Error("header name must be a non-empty string");const u=Q(r,p);u&&c!==!0&&(r[u]===!1||c===!1)||(r[u||s]=ae(o))}return a.isPlainObject(e)?a.forEach(e,(o,s)=>{i(o,s,t)}):i(t,e,n),this},get:function(e,t){if(e=G(e),!e)return;const n=Q(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return Zt(r);if(a.isFunction(t))return t.call(this,r,n);if(a.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=G(e),e){const n=Q(this,e);return!!(n&&(!t||Ce(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function i(o){if(o=G(o),o){const s=Q(n,o);s&&(!t||Ce(n,n[s],s,t))&&(delete n[s],r=!0)}}return a.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return a.forEach(this,(r,i)=>{const o=Q(n,i);if(o){t[o]=ae(r),delete t[i];return}const s=e?Qt(i):String(i).trim();s!==i&&delete t[i],t[s]=ae(r),n[s]=!0}),this},toJSON:function(e){const t=Object.create(null);return a.forEach(Object.assign({},this[Ge]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&a.isArray(n)?n.join(", "):n)}),t}});Object.assign(F,{from:function(e){return a.isString(e)?new this(Xt(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[_e]=this[_e]={accessors:{}}).accessors,r=this.prototype;function i(o){const s=G(o);n[s]||(Gt(r,o),n[s]=!0)}return a.isArray(e)?e.forEach(i):i(e),this}});F.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(F.prototype);a.freezeMethods(F);function en(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(p){const u=Date.now(),w=r[o];s||(s=u),n[i]=p,r[i]=u;let O=o,x=0;for(;O!==i;)x+=n[O++],O=O%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const m=w&&u-w;return m?Math.round(x*1e3/m):void 0}}function Pe(e,t){let n=0;const r=en(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,c=o-n,p=r(c),u=o<=s;n=o;const w={loaded:o,total:s,progress:s?o/s:void 0,bytes:c,rate:p||void 0,estimated:p&&s&&u?(s-o)/p:void 0};w[t?"download":"upload"]=!0,e(w)}}function Me(e){return new Promise(function(n,r){let i=e.data;const o=F.from(e.headers).normalize(),s=e.responseType;let c;function p(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(i)&&U.isStandardBrowserEnv&&o.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+h))}const w=Qe(e.baseURL,e.url);u.open(e.method.toUpperCase(),Ke(w,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function O(){if(!u)return;const m=F.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),T={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:e,request:u};zt(function(P){n(P),p()},function(P){r(P),p()},T),u=null}if("onloadend"in u?u.onloadend=O:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(O)},u.onabort=function(){!u||(r(new R("Request aborted",R.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new R("Network Error",R.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const T=e.transitional||Xe;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new R(h,T.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,u)),u=null},U.isStandardBrowserEnv){const m=(e.withCredentials||Vt(w))&&e.xsrfCookieName&&qt.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(h,T){u.setRequestHeader(T,h)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&s!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=m=>{!u||(r(!m||m.type?new ne(null,e,u):m),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const x=Yt(w);if(x&&U.protocols.indexOf(x)===-1){r(new R("Unsupported protocol "+x+":",R.ERR_BAD_REQUEST,e));return}u.send(i||null)})}const Fe={http:Me,xhr:Me},Le={getAdapter:e=>{if(a.isString(e)){const t=Fe[e];if(!e)throw Error(a.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!a.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Fe},tn={"Content-Type":"application/x-www-form-urlencoded"};function nn(){let e;return typeof XMLHttpRequest!="undefined"?e=Le.getAdapter("xhr"):typeof process!="undefined"&&a.kindOf(process)==="process"&&(e=Le.getAdapter("http")),e}function rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Y={transitional:Xe,adapter:nn(),transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return i&&i?JSON.stringify(Ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ht(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return le(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),rn(t)):t}],transformResponse:[function(t){const n=this.transitional||Y.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(c){if(s)throw c.name==="SyntaxError"?R.from(c,R.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:U.classes.FormData,Blob:U.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Y.headers[t]={}});a.forEach(["post","put","patch"],function(t){Y.headers[t]=a.merge(tn)});function pe(e,t){const n=this||Y,r=t||n,i=F.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function et(e){return!!(e&&e.__CANCEL__)}function me(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ne}function Be(e){return me(e),e.headers=F.from(e.headers),e.data=pe.call(e,e.transformRequest),(e.adapter||Y.adapter)(e).then(function(r){return me(e),r.data=pe.call(e,e.transformResponse,r),r.headers=F.from(r.headers),r},function(r){return et(r)||(me(e),r&&r.response&&(r.response.data=pe.call(e,e.transformResponse,r.response),r.response.headers=F.from(r.response.headers))),Promise.reject(r)})}function ee(e,t){t=t||{};const n={};function r(u,w){return a.isPlainObject(u)&&a.isPlainObject(w)?a.merge(u,w):a.isPlainObject(w)?a.merge({},w):a.isArray(w)?w.slice():w}function i(u){if(a.isUndefined(t[u])){if(!a.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function o(u){if(!a.isUndefined(t[u]))return r(void 0,t[u])}function s(u){if(a.isUndefined(t[u])){if(!a.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function c(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const p={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(w){const O=p[w]||i,x=O(w);a.isUndefined(x)&&O!==c||(n[w]=x)}),n}const tt="1.1.3",Te={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Te[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ue={};Te.transitional=function(t,n,r){function i(o,s){return"[Axios v"+tt+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,c)=>{if(t===!1)throw new R(i(s," has been removed"+(n?" in "+n:"")),R.ERR_DEPRECATED);return n&&!Ue[s]&&(Ue[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,c):!0}};function sn(e,t,n){if(typeof e!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const c=e[o],p=c===void 0||s(c,o,e);if(p!==!0)throw new R("option "+o+" must be "+p,R.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new R("Unknown option "+o,R.ERR_BAD_OPTION)}}const be={assertOptions:sn,validators:Te},z=be.validators;class J{constructor(t){this.defaults=t,this.interceptors={request:new Ne,response:new Ne}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ee(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&be.assertOptions(r,{silentJSONParsing:z.transitional(z.boolean),forcedJSONParsing:z.transitional(z.boolean),clarifyTimeoutError:z.transitional(z.boolean)},!1),i!==void 0&&be.assertOptions(i,{encode:z.function,serialize:z.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const o=n.headers&&a.merge(n.headers.common,n.headers[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],function(h){delete n.headers[h]}),n.headers=new F(n.headers,o);const s=[];let c=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(c=c&&h.synchronous,s.unshift(h.fulfilled,h.rejected))});const p=[];this.interceptors.response.forEach(function(h){p.push(h.fulfilled,h.rejected)});let u,w=0,O;if(!c){const m=[Be.bind(this),void 0];for(m.unshift.apply(m,s),m.push.apply(m,p),O=m.length,u=Promise.resolve(n);w<O;)u=u.then(m[w++],m[w++]);return u}O=s.length;let x=n;for(w=0;w<O;){const m=s[w++],h=s[w++];try{x=m(x)}catch(T){h.call(this,T);break}}try{u=Be.call(this,x)}catch(m){return Promise.reject(m)}for(w=0,O=p.length;w<O;)u=u.then(p[w++],p[w++]);return u}getUri(t){t=ee(this.defaults,t);const n=Qe(t.baseURL,t.url);return Ke(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(n,r){return this.request(ee(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,c){return this.request(ee(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}J.prototype[t]=n(),J.prototype[t+"Form"]=n(!0)});class ge{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(c=>{r.subscribe(c),o=c}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,c){r.reason||(r.reason=new ne(o,s,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ge(function(i){t=i}),cancel:t}}}function on(e){return function(n){return e.apply(null,n)}}function an(e){return a.isObject(e)&&e.isAxiosError===!0}function nt(e){const t=new J(e),n=ke(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return nt(ee(e,i))},n}const M=nt(Y);M.Axios=J;M.CanceledError=ne;M.CancelToken=ge;M.isCancel=et;M.VERSION=tt;M.toFormData=le;M.AxiosError=R;M.Cancel=M.CanceledError;M.all=function(t){return Promise.all(t)};M.spread=on;M.isAxiosError=an;M.formToJSON=e=>Ze(a.isHTMLForm(e)?new FormData(e):e);export{M as a,rt as c,un as d};
