(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="174",Oc=0,Ca=1,Bc=2,Bl=1,zc=2,pn=3,On=0,Ct=1,vn=2,Un=0,wi=1,Pa=2,La=3,Da=4,kc=5,Kn=100,Vc=101,Hc=102,Gc=103,Wc=104,Xc=200,qc=201,Yc=202,jc=203,ro=204,so=205,Zc=206,Jc=207,Kc=208,$c=209,Qc=210,eu=211,tu=212,nu=213,iu=214,oo=0,ao=1,lo=2,Fi=3,co=4,uo=5,ho=6,fo=7,zl=0,ru=1,su=2,Nn=0,ou=1,au=2,lu=3,kl=4,cu=5,uu=6,hu=7,Vl=300,Oi=301,Bi=302,po=303,mo=304,us=306,go=1e3,Qn=1001,_o=1002,Kt=1003,du=1004,vr=1005,tn=1006,xs=1007,ei=1008,En=1009,Hl=1010,Gl=1011,ar=1012,na=1013,ti=1014,xn=1015,dr=1016,ia=1017,ra=1018,zi=1020,Wl=35902,Xl=1021,ql=1022,Zt=1023,Yl=1024,jl=1025,Ai=1026,ki=1027,Zl=1028,sa=1029,Jl=1030,oa=1031,aa=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,vo=35840,xo=35841,yo=35842,Mo=35843,So=36196,Eo=37492,To=37496,bo=37808,wo=37809,Ao=37810,Ro=37811,Co=37812,Po=37813,Lo=37814,Do=37815,Io=37816,Uo=37817,No=37818,Fo=37819,Oo=37820,Bo=37821,jr=36492,zo=36494,ko=36495,Kl=36283,Vo=36284,Ho=36285,Go=36286,fu=3200,pu=3201,$l=0,mu=1,Ln="",zt="srgb",Vi="srgb-linear",ts="linear",et="srgb",si=7680,Ia=519,gu=512,_u=513,vu=514,Ql=515,xu=516,yu=517,Mu=518,Su=519,Ua=35044,Na="300 es",yn=2e3,ns=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ys=Math.PI/180,Wo=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Eu(i,e){return(i%e+e)%e}function Ms(i,e,t){return(1-t)*i+t*e}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],E=r[0],m=r[3],f=r[6],R=r[1],S=r[4],v=r[7],x=r[2],C=r[5],P=r[8];return s[0]=o*E+a*R+l*x,s[3]=o*m+a*S+l*C,s[6]=o*f+a*v+l*P,s[1]=c*E+u*R+h*x,s[4]=c*m+u*S+h*C,s[7]=c*f+u*v+h*P,s[2]=d*E+p*R+g*x,s[5]=d*m+p*S+g*C,s[8]=d*f+p*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=h*E,e[1]=(r*c-u*n)*E,e[2]=(a*n-r*o)*E,e[3]=d*E,e[4]=(u*t-r*l)*E,e[5]=(r*s-a*t)*E,e[6]=p*E,e[7]=(n*l-c*t)*E,e[8]=(o*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ss.makeScale(e,t)),this}rotate(e){return this.premultiply(Ss.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ss.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ss=new Be;function ec(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tu(){const i=is("canvas");return i.style.display="block",i}const Fa={};function Yn(i){i in Fa||(Fa[i]=!0,console.warn(i))}function bu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function wu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Au(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Oa=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ru(){const i={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===et&&(r.r=Sn(r.r),r.g=Sn(r.g),r.b=Sn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?ts:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vi]:{primaries:e,whitePoint:n,transfer:ts,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const Je=Ru();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oi;class Cu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=is("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Sn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pu=0;class la{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Es(r[o].image)):s.push(Es(r[o]))}else s=Es(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Es(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lu=0;class Pt extends Wi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Qn,r=Qn,s=tn,o=ei,a=Zt,l=En,c=Pt.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Xi(),this.name="",this.source=new la(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Vl;Pt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(p+1)/2,x=(f+1)/2,C=(u+d)/4,P=(h+E)/4,L=(g+m)/4;return S>v&&S>x?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=C/n,s=P/n):v>x?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=C/r,s=L/r):x<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),n=P/s,r=L/s),this.set(n,r,s,t),this}let R=Math.sqrt((m-g)*(m-g)+(h-E)*(h-E)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(h-E)/R,this.z=(d-u)/R,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Du extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new la(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Du{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tc extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iu extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],E=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=E;return}if(h!==E||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*E,R=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const x=Math.sqrt(S),C=Math.atan2(x,f*R);m=Math.sin(m*C)/x,a=Math.sin(a*C)/x}const v=a*R;if(l=l*m+d*v,c=c*m+p*v,u=u*m+g*v,h=h*m+E*v,m===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new U,za=new fr;class pr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(s,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),yr.subVectors(this.max,Ki),ai.subVectors(e.a,Ki),li.subVectors(e.b,Ki),ci.subVectors(e.c,Ki),Tn.subVectors(li,ai),bn.subVectors(ci,li),Vn.subVectors(ai,ci);let t=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-Vn.z,Vn.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,Vn.z,0,-Vn.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-Vn.y,Vn.x,0];return!bs(t,ai,li,ci,yr)||(t=[1,0,0,0,1,0,0,0,1],!bs(t,ai,li,ci,yr))?!1:(Mr.crossVectors(Tn,bn),t=[Mr.x,Mr.y,Mr.z],bs(t,ai,li,ci,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new U,new U,new U,new U,new U,new U,new U,new U],Xt=new U,xr=new pr,ai=new U,li=new U,ci=new U,Tn=new U,bn=new U,Vn=new U,Ki=new U,yr=new U,Mr=new U,Hn=new U;function bs(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Hn.fromArray(i,s);const a=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Uu=new pr,$i=new U,ws=new U;class hs{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($i,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(ws)),this.expandByPoint($i.copy(e.center).sub(ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new U,As=new U,Sr=new U,wn=new U,Rs=new U,Er=new U,Cs=new U;class nc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){As.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(As);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Sr),a=wn.dot(this.direction),l=-wn.dot(Sr),c=wn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const E=1/u;h*=E,d*=E,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(As).addScaledVector(Sr,d),p}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),r=cn.dot(cn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,r,s){Rs.subVectors(t,e),Er.subVectors(n,e),Cs.crossVectors(Rs,Er);let o=this.direction.dot(Cs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const l=a*this.direction.dot(Er.crossVectors(wn,Er));if(l<0)return null;const c=a*this.direction.dot(Rs.cross(wn));if(c<0||l+c>o)return null;const u=-a*wn.dot(Cs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,o,a,l,c,u,h,d,p,g,E,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,p,g,E,m)}set(e,t,n,r,s,o,a,l,c,u,h,d,p,g,E,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),o=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,E=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-E*c,t[9]=-a*l,t[2]=E-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,E=c*h;t[0]=d+E*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=E+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,E=c*h;t[0]=d-E*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=E-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,E=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+E,t[1]=l*h,t[5]=E*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*u,t[4]=E-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-E*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+E,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=E*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nu,e,Fu)}lookAt(e,t,n){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),An.crossVectors(n,Dt),An.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),An.crossVectors(n,Dt)),An.normalize(),Tr.crossVectors(Dt,An),r[0]=An.x,r[4]=Tr.x,r[8]=Dt.x,r[1]=An.y,r[5]=Tr.y,r[9]=Dt.y,r[2]=An.z,r[6]=Tr.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],E=n[6],m=n[10],f=n[14],R=n[3],S=n[7],v=n[11],x=n[15],C=r[0],P=r[4],L=r[8],b=r[12],M=r[1],D=r[5],X=r[9],B=r[13],w=r[2],V=r[6],Y=r[10],te=r[14],q=r[3],re=r[7],ge=r[11],xe=r[15];return s[0]=o*C+a*M+l*w+c*q,s[4]=o*P+a*D+l*V+c*re,s[8]=o*L+a*X+l*Y+c*ge,s[12]=o*b+a*B+l*te+c*xe,s[1]=u*C+h*M+d*w+p*q,s[5]=u*P+h*D+d*V+p*re,s[9]=u*L+h*X+d*Y+p*ge,s[13]=u*b+h*B+d*te+p*xe,s[2]=g*C+E*M+m*w+f*q,s[6]=g*P+E*D+m*V+f*re,s[10]=g*L+E*X+m*Y+f*ge,s[14]=g*b+E*B+m*te+f*xe,s[3]=R*C+S*M+v*w+x*q,s[7]=R*P+S*D+v*V+x*re,s[11]=R*L+S*X+v*Y+x*ge,s[15]=R*b+S*B+v*te+x*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],E=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*p-n*l*p)+E*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],E=e[13],m=e[14],f=e[15],R=h*m*c-E*d*c+E*l*p-a*m*p-h*l*f+a*d*f,S=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,v=u*E*c-g*h*c+g*a*p-o*E*p-u*a*f+o*h*f,x=g*h*l-u*E*l-g*a*d+o*E*d+u*a*m-o*h*m,C=t*R+n*S+r*v+s*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=R*P,e[1]=(E*d*s-h*m*s-E*r*p+n*m*p+h*r*f-n*d*f)*P,e[2]=(a*m*s-E*l*s+E*r*c-n*m*c-a*r*f+n*l*f)*P,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*p-n*l*p)*P,e[4]=S*P,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*P,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*P,e[8]=v*P,e[9]=(g*h*s-u*E*s-g*n*p+t*E*p+u*n*f-t*h*f)*P,e[10]=(o*E*s-g*a*s+g*n*c-t*E*c-o*n*f+t*a*f)*P,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*P,e[12]=x*P,e[13]=(u*E*r-g*h*r+g*n*d-t*E*d-u*n*m+t*h*m)*P,e[14]=(g*a*r-o*E*r-g*n*l+t*E*l+o*n*m-t*a*m)*P,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,E=o*u,m=o*h,f=a*h,R=l*c,S=l*u,v=l*h,x=n.x,C=n.y,P=n.z;return r[0]=(1-(E+f))*x,r[1]=(p+v)*x,r[2]=(g-S)*x,r[3]=0,r[4]=(p-v)*C,r[5]=(1-(d+f))*C,r[6]=(m+R)*C,r[7]=0,r[8]=(g+S)*P,r[9]=(m-R)*P,r[10]=(1-(d+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ui.set(r[0],r[1],r[2]).length();const o=ui.set(r[4],r[5],r[6]).length(),a=ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/o,h=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=yn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let p,g;if(a===yn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ns)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=yn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*c,p=(n+r)*u;let g,E;if(a===yn)g=(o+s)*h,E=-2*h;else if(a===ns)g=s*h,E=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ui=new U,qt=new it,Nu=new U(0,0,0),Fu=new U(1,1,1),An=new U,Tr=new U,Dt=new U,ka=new it,Va=new fr;class rn{constructor(e=0,t=0,n=0,r=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ka,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Va.setFromEuler(this),this.setFromQuaternion(Va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ou=0;const Ha=new U,hi=new fr,un=new it,br=new U,Qi=new U,Bu=new U,zu=new fr,Ga=new U(1,0,0),Wa=new U(0,1,0),Xa=new U(0,0,1),qa={type:"added"},ku={type:"removed"},di={type:"childadded",child:null},Ps={type:"childremoved",child:null};class xt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new U,t=new rn,n=new fr,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Be}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Ga,e)}rotateY(e){return this.rotateOnAxis(Wa,e)}rotateZ(e){return this.rotateOnAxis(Xa,e)}translateOnAxis(e,t){return Ha.copy(e).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ga,e)}translateY(e){return this.translateOnAxis(Wa,e)}translateZ(e){return this.translateOnAxis(Xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Qi,br,this.up):un.lookAt(br,Qi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),hi.setFromRotationMatrix(un),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qa),di.child=e,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ku),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qa),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xt.DEFAULT_UP=new U(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new U,hn=new U,Ls=new U,dn=new U,fi=new U,pi=new U,Ya=new U,Ds=new U,Is=new U,Us=new U,Ns=new tt,Fs=new tt,Os=new tt;class jt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),hn.subVectors(n,t),Ls.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(hn),l=Yt.dot(Ls),c=hn.dot(hn),u=hn.dot(Ls),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ns.setScalar(0),Fs.setScalar(0),Os.setScalar(0),Ns.fromBufferAttribute(e,t),Fs.fromBufferAttribute(e,n),Os.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ns,s.x),o.addScaledVector(Fs,s.y),o.addScaledVector(Os,s.z),o}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),hn.subVectors(e,t),Yt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Yt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;fi.subVectors(r,n),pi.subVectors(s,n),Ds.subVectors(e,n);const l=fi.dot(Ds),c=pi.dot(Ds);if(l<=0&&c<=0)return t.copy(n);Is.subVectors(e,r);const u=fi.dot(Is),h=pi.dot(Is);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(fi,o);Us.subVectors(e,s);const p=fi.dot(Us),g=pi.dot(Us);if(g>=0&&p<=g)return t.copy(s);const E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(pi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Ya.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Ya,a);const f=1/(m+E+d);return o=E*f,a=d*f,t.copy(n).addScaledVector(fi,o).addScaledVector(pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Bs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Eu(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Bs(o,s,e+1/3),this.g=Bs(o,s,e),this.b=Bs(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=rc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Je.fromWorkingColorSpace(St.copy(this),e),Math.round(He(St.r*255,0,255))*65536+Math.round(He(St.g*255,0,255))*256+Math.round(He(St.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(St.copy(this),t);const n=St.r,r=St.g,s=St.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=zt){Je.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,r=St.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(wr);const n=Ms(Rn.h,wr.h,t),r=Ms(Rn.s,wr.s,t),s=Ms(Rn.l,wr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ge;Ge.NAMES=rc;let Vu=0;class qi extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=wi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=so,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sc extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new U,Ar=new he;let Hu=0;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ua,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ua&&(e.usage=this.usage),e}}class oc extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ac extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gu=0;const Ot=new it,zs=new xt,mi=new U,It=new pr,er=new pr,gt=new U;class Ht extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ec(e)?ac:oc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return zs.lookAt(e),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];er.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(It.min,er.min),It.expandByPoint(gt),gt.addVectors(It.max,er.max),It.expandByPoint(gt)):(It.expandByPoint(er.min),It.expandByPoint(er.max))}It.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(mi.fromBufferAttribute(e,c),gt.add(mi)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new U,l[L]=new U;const c=new U,u=new U,h=new U,d=new he,p=new he,g=new he,E=new U,m=new U;function f(L,b,M){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(E.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(E),a[b].add(E),a[M].add(E),l[L].add(m),l[b].add(m),l[M].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let L=0,b=R.length;L<b;++L){const M=R[L],D=M.start,X=M.count;for(let B=D,w=D+X;B<w;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new U,v=new U,x=new U,C=new U;function P(L){x.fromBufferAttribute(r,L),C.copy(x);const b=a[L];S.copy(b),S.sub(x.multiplyScalar(x.dot(b))).normalize(),v.crossVectors(C,b);const D=v.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,D)}for(let L=0,b=R.length;L<b;++L){const M=R[L],D=M.start,X=M.count;for(let B=D,w=D+X;B<w;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),E=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new $t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new it,Gn=new nc,Rr=new hs,Za=new U,Cr=new U,Pr=new U,Lr=new U,ks=new U,Dr=new U,Ja=new U,Ir=new U;class Vt extends xt{constructor(e=new Ht,t=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Dr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ks.fromBufferAttribute(h,e),o?Dr.addScaledVector(ks,u):Dr.addScaledVector(ks.sub(t),u))}t.add(Dr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(Rr.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Rr,Za)===null||Gn.origin.distanceToSquared(Za)>(e.far-e.near)**2))&&(ja.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(ja),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=d.length;g<E;g++){const m=d[g],f=o[m.materialIndex],R=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=R,x=S;v<x;v+=3){const C=a.getX(v),P=a.getX(v+1),L=a.getX(v+2);r=Ur(this,f,e,n,c,u,h,C,P,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){const R=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);r=Ur(this,o,e,n,c,u,h,R,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=d.length;g<E;g++){const m=d[g],f=o[m.materialIndex],R=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=R,x=S;v<x;v+=3){const C=v,P=v+1,L=v+2;r=Ur(this,f,e,n,c,u,h,C,P,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){const R=m,S=m+1,v=m+2;r=Ur(this,o,e,n,c,u,h,R,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Wu(i,e,t,n,r,s,o,a){let l;if(e.side===Ct?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===On,a),l===null)return null;Ir.copy(a),Ir.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ir);return c<t.near||c>t.far?null:{distance:c,point:Ir.clone(),object:i}}function Ur(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Pr),i.getVertexPosition(c,Lr);const u=Wu(i,e,t,n,Cr,Pr,Lr,Ja);if(u){const h=new U;jt.getBarycoord(Ja,Cr,Pr,Lr,h),r&&(u.uv=jt.getInterpolatedAttribute(r,a,l,c,h,new he)),s&&(u.uv1=jt.getInterpolatedAttribute(s,a,l,c,h,new he)),o&&(u.normal=jt.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};jt.getNormal(Cr,Pr,Lr,d.normal),u.face=d,u.barycoord=h}return u}class Yi extends Ht{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(h,2));function g(E,m,f,R,S,v,x,C,P,L,b){const M=v/P,D=x/L,X=v/2,B=x/2,w=C/2,V=P+1,Y=L+1;let te=0,q=0;const re=new U;for(let ge=0;ge<Y;ge++){const xe=ge*D-B;for(let Ie=0;Ie<V;Ie++){const je=Ie*M-X;re[E]=je*R,re[m]=xe*S,re[f]=w,c.push(re.x,re.y,re.z),re[E]=0,re[m]=0,re[f]=C>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ie/P),h.push(1-ge/L),te+=1}}for(let ge=0;ge<L;ge++)for(let xe=0;xe<P;xe++){const Ie=d+xe+V*ge,je=d+xe+V*(ge+1),Q=d+(xe+1)+V*(ge+1),ae=d+(xe+1)+V*ge;l.push(Ie,je,ae),l.push(je,Q,ae),q+=6}a.addGroup(p,q,b),p+=q,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const r in n)e[r]=n[r]}return e}function Xu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const qu={clone:Hi,merge:Tt};var Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cc extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new U,Ka=new he,$a=new he;class Ut extends cc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,Ka,$a),t.subVectors($a,Ka)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,_i=1;class Zu extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(gi,_i,e,t);r.layers=this.layers,this.add(r);const s=new Ut(gi,_i,e,t);s.layers=this.layers,this.add(s);const o=new Ut(gi,_i,e,t);o.layers=this.layers,this.add(o);const a=new Ut(gi,_i,e,t);a.layers=this.layers,this.add(a);const l=new Ut(gi,_i,e,t);l.layers=this.layers,this.add(l);const c=new Ut(gi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uc extends Pt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ju extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yi(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Un});s.uniforms.tEquirect.value=t;const o=new Vt(r,s),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=tn),new Zu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Si extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class Vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const E of e.hand.values()){const m=t.getJointPose(E,n),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ca{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new ca(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $u extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hs=new U,Qu=new U,eh=new Be;class jn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Hs.subVectors(n,t).cross(Qu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eh.getNormalMatrix(e),r=this.coplanarPoint(Hs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new hs,Nr=new U;class ua{constructor(e=new jn,t=new jn,n=new jn,r=new jn,s=new jn,o=new jn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],E=r[10],m=r[11],f=r[12],R=r[13],S=r[14],v=r[15];if(n[0].setComponents(l-s,d-c,m-p,v-f).normalize(),n[1].setComponents(l+s,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+u,m+g,v+R).normalize(),n[3].setComponents(l-o,d-u,m-g,v-R).normalize(),n[4].setComponents(l-a,d-h,m-E,v-S).normalize(),t===yn)n[5].setComponents(l+a,d+h,m+E,v+S).normalize();else if(t===ns)n[5].setComponents(a,h,E,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Nr.x=r.normal.x>0?e.max.x:e.min.x,Nr.y=r.normal.y>0?e.max.y:e.min.y,Nr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hc extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qa=new it,Xo=new nc,Fr=new hs,Or=new U;class th extends xt{constructor(e=new Ht,t=new hc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Fr.radius+=s,e.ray.intersectsSphere(Fr)===!1)return;Qa.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(Qa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,E=p;g<E;g++){const m=c.getX(g);Or.fromBufferAttribute(h,m),el(Or,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,E=p;g<E;g++)Or.fromBufferAttribute(h,g),el(Or,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function el(i,e,t,n,r,s,o){const a=Xo.distanceSqToPoint(i);if(a<t){const l=new U;Xo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class dc extends Pt{constructor(e,t,n,r,s,o,a,l,c,u=Ai){if(u!==Ai&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ai&&(n=ti),n===void 0&&u===ki&&(n=zi),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new la(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],d=n[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new he:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,r=[],s=[],o=[],a=new U,l=new it;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(He(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(He(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ha extends sn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nh extends ha{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Br=new U,Gs=new da,Ws=new da,Xs=new da;class ih extends sn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Br.subVectors(r[0],r[1]).add(r[0]),c=Br);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Br.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),E=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Gs.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,E,m),Ws.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,E,m),Xs.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,E,m)}else this.curveType==="catmullrom"&&(Gs.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ws.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Xs.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Gs.calc(l),Ws.calc(l),Xs.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function tl(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function rh(i,e){const t=1-i;return t*t*e}function sh(i,e){return 2*(1-i)*i*e}function oh(i,e){return i*i*e}function ir(i,e,t,n){return rh(i,e)+sh(i,t)+oh(i,n)}function ah(i,e){const t=1-i;return t*t*t*e}function lh(i,e){const t=1-i;return 3*t*t*i*e}function ch(i,e){return 3*(1-i)*i*i*e}function uh(i,e){return i*i*i*e}function rr(i,e,t,n,r){return ah(i,e)+lh(i,t)+ch(i,n)+uh(i,r)}class fc extends sn{constructor(e=new he,t=new he,n=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new he){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rr(e,r.x,s.x,o.x,a.x),rr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hh extends sn{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rr(e,r.x,s.x,o.x,a.x),rr(e,r.y,s.y,o.y,a.y),rr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pc extends sn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dh extends sn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mc extends sn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ir(e,r.x,s.x,o.x),ir(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends sn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ir(e,r.x,s.x,o.x),ir(e,r.y,s.y,o.y),ir(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gc extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(tl(a,l.x,c.x,u.x,h.x),tl(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new he().fromArray(r))}return this}}var qo=Object.freeze({__proto__:null,ArcCurve:nh,CatmullRomCurve3:ih,CubicBezierCurve:fc,CubicBezierCurve3:hh,EllipseCurve:ha,LineCurve:pc,LineCurve3:dh,QuadraticBezierCurve:mc,QuadraticBezierCurve3:fh,SplineCurve:gc});class ph extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new qo[r.type]().fromJSON(r))}return this}}class Yo extends ph{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pc(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new mc(this.currentPoint.clone(),new he(e,t),new he(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new fc(this.currentPoint.clone(),new he(e,t),new he(n,r),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new gc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new ha(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fa extends Ht{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const E=[],m=n/2;let f=0;R(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(p,2));function R(){const v=new U,x=new U;let C=0;const P=(t-e)/n;for(let L=0;L<=s;L++){const b=[],M=L/s,D=M*(t-e)+e;for(let X=0;X<=r;X++){const B=X/r,w=B*l+a,V=Math.sin(w),Y=Math.cos(w);x.x=D*V,x.y=-M*n+m,x.z=D*Y,h.push(x.x,x.y,x.z),v.set(V,P,Y).normalize(),d.push(v.x,v.y,v.z),p.push(B,1-M),b.push(g++)}E.push(b)}for(let L=0;L<r;L++)for(let b=0;b<s;b++){const M=E[b][L],D=E[b+1][L],X=E[b+1][L+1],B=E[b][L+1];(e>0||b!==0)&&(u.push(M,D,B),C+=3),(t>0||b!==s-1)&&(u.push(D,X,B),C+=3)}c.addGroup(f,C,0),f+=C}function S(v){const x=g,C=new he,P=new U;let L=0;const b=v===!0?e:t,M=v===!0?1:-1;for(let X=1;X<=r;X++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const D=g;for(let X=0;X<=r;X++){const w=X/r*l+a,V=Math.cos(w),Y=Math.sin(w);P.x=b*Y,P.y=m*M,P.z=b*V,h.push(P.x,P.y,P.z),d.push(0,M,0),C.x=V*.5+.5,C.y=Y*.5*M+.5,p.push(C.x,C.y),g++}for(let X=0;X<r;X++){const B=x+X,w=D+X;v===!0?u.push(w,w+1,B):u.push(w+1,w,B),L+=3}c.addGroup(f,L,v===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pa extends fa{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ds extends Ht{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(s.slice(),3)),this.setAttribute("uv",new bt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(R){const S=new U,v=new U,x=new U;for(let C=0;C<t.length;C+=3)p(t[C+0],S),p(t[C+1],v),p(t[C+2],x),l(S,v,x,R)}function l(R,S,v,x){const C=x+1,P=[];for(let L=0;L<=C;L++){P[L]=[];const b=R.clone().lerp(v,L/C),M=S.clone().lerp(v,L/C),D=C-L;for(let X=0;X<=D;X++)X===0&&L===C?P[L][X]=b:P[L][X]=b.clone().lerp(M,X/D)}for(let L=0;L<C;L++)for(let b=0;b<2*(C-L)-1;b++){const M=Math.floor(b/2);b%2===0?(d(P[L][M+1]),d(P[L+1][M]),d(P[L][M])):(d(P[L][M+1]),d(P[L+1][M+1]),d(P[L+1][M]))}}function c(R){const S=new U;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(R),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function u(){const R=new U;for(let S=0;S<s.length;S+=3){R.x=s[S+0],R.y=s[S+1],R.z=s[S+2];const v=m(R)/2/Math.PI+.5,x=f(R)/Math.PI+.5;o.push(v,1-x)}g(),h()}function h(){for(let R=0;R<o.length;R+=6){const S=o[R+0],v=o[R+2],x=o[R+4],C=Math.max(S,v,x),P=Math.min(S,v,x);C>.9&&P<.1&&(S<.2&&(o[R+0]+=1),v<.2&&(o[R+2]+=1),x<.2&&(o[R+4]+=1))}}function d(R){s.push(R.x,R.y,R.z)}function p(R,S){const v=R*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const R=new U,S=new U,v=new U,x=new U,C=new he,P=new he,L=new he;for(let b=0,M=0;b<s.length;b+=9,M+=6){R.set(s[b+0],s[b+1],s[b+2]),S.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),C.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),x.copy(R).add(S).add(v).divideScalar(3);const D=m(x);E(C,M+0,R,D),E(P,M+2,S,D),E(L,M+4,v,D)}}function E(R,S,v,x){x<0&&R.x===1&&(o[S]=R.x-1),v.x===0&&v.z===0&&(o[S]=x/2/Math.PI+.5)}function m(R){return Math.atan2(R.z,-R.x)}function f(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.vertices,e.indices,e.radius,e.details)}}class ma extends ds{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ma(e.radius,e.detail)}}class Zr extends Yo{constructor(e){super(e),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Yo().fromJSON(r))}return this}}class mh{static triangulate(e,t,n=2){const r=t&&t.length,s=r?t[0]*n:e.length;let o=_c(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,u,h,d,p,g;if(r&&(o=yh(e,t,o,n)),e.length>80*n){l=u=e[0],c=h=e[1];for(let E=n;E<s;E+=n)d=e[E],p=e[E+1],d<l&&(l=d),p<c&&(c=p),d>u&&(u=d),p>h&&(h=p);g=Math.max(u-l,h-c),g=g!==0?32767/g:0}return lr(o,a,n,l,c,g,0),a}}function _c(i,e,t,n,r){let s,o;if(r===Lh(i,e,t,n)>0)for(s=e;s<t;s+=n)o=nl(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=nl(s,i[s],i[s+1],o);return o&&fs(o,o.next)&&(ur(o),o=o.next),o}function ii(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fs(t,t.next)||st(t.prev,t,t.next)===0)){if(ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function lr(i,e,t,n,r,s,o){if(!i)return;!o&&s&&bh(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?_h(i,n,r,s):gh(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ur(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=vh(ii(i),e,t),lr(i,e,t,n,r,s,2)):o===2&&xh(i,e,t,n,r,s):lr(ii(i),e,t,n,r,s,1);break}}}function gh(i){const e=i.prev,t=i,n=i.next;if(st(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Ei(r,a,s,l,o,c,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _h(i,e,t,n){const r=i.prev,s=i,o=i.next;if(st(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,E=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=jo(p,g,e,t,n),R=jo(E,m,e,t,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=f&&v&&v.z<=R;){if(S.x>=p&&S.x<=E&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ei(a,u,l,h,c,d,S.x,S.y)&&st(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=p&&v.x<=E&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ei(a,u,l,h,c,d,v.x,v.y)&&st(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=E&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ei(a,u,l,h,c,d,S.x,S.y)&&st(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=R;){if(v.x>=p&&v.x<=E&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ei(a,u,l,h,c,d,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vh(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!fs(r,s)&&vc(r,n,n.next,s)&&cr(r,s)&&cr(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ur(n),ur(n.next),n=i=s),n=n.next}while(n!==i);return ii(n)}function xh(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rh(o,a)){let l=xc(o,a);o=ii(o,o.next),l=ii(l,l.next),lr(o,e,t,n,r,s,0),lr(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function yh(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=_c(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Ah(c));for(r.sort(Mh),s=0;s<r.length;s++)t=Sh(r[s],t);return t}function Mh(i,e){return i.x-e.x}function Sh(i,e){const t=Eh(i,e);if(!t)return e;const n=xc(t,i);return ii(n,n.next),ii(t,t.next)}function Eh(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Ei(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),cr(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Th(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function Th(i,e){return st(i.prev,i,e.prev)<0&&st(e.next,i,i.next)<0}function bh(i,e,t,n){let r=i;do r.z===0&&(r.z=jo(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,wh(r)}function wh(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function jo(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ah(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ei(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Rh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ch(i,e)&&(cr(i,e)&&cr(e,i)&&Ph(i,e)&&(st(i.prev,i,e.prev)||st(i,e.prev,e))||fs(i,e)&&st(i.prev,i,i.next)>0&&st(e.prev,e,e.next)>0)}function st(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fs(i,e){return i.x===e.x&&i.y===e.y}function vc(i,e,t,n){const r=kr(st(i,e,t)),s=kr(st(i,e,n)),o=kr(st(t,n,i)),a=kr(st(t,n,e));return!!(r!==s&&o!==a||r===0&&zr(i,t,e)||s===0&&zr(i,n,e)||o===0&&zr(t,i,n)||a===0&&zr(t,e,n))}function zr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function kr(i){return i>0?1:i<0?-1:0}function Ch(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function cr(i,e){return st(i.prev,i,i.next)<0?st(i,e,i.next)>=0&&st(i,i.prev,e)>=0:st(i,e,i.prev)<0||st(i,i.next,e)<0}function Ph(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function xc(i,e){const t=new Zo(i.i,i.x,i.y),n=new Zo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function nl(i,e,t,n){const r=new Zo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zo(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lh(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Ci{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Ci.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];il(e),rl(n,e);let o=e.length;t.forEach(il);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,rl(n,t[l]);const a=mh.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function il(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function rl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ga extends Ht{constructor(e=new Zr([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new bt(r,3)),this.setAttribute("uv",new bt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Dh;let S,v=!1,x,C,P,L;f&&(S=f.getSpacedPoints(u),v=!0,d=!1,x=f.computeFrenetFrames(u,!1),C=new U,P=new U,L=new U),d||(m=0,p=0,g=0,E=0);const b=a.extractPoints(c);let M=b.shape;const D=b.holes;if(!Ci.isClockWise(M)){M=M.reverse();for(let H=0,J=D.length;H<J;H++){const _=D[H];Ci.isClockWise(_)&&(D[H]=_.reverse())}}const B=Ci.triangulateShape(M,D),w=M;for(let H=0,J=D.length;H<J;H++){const _=D[H];M=M.concat(_)}function V(H,J,_){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(J,_)}const Y=M.length,te=B.length;function q(H,J,_){let I,z,K;const j=H.x-J.x,Ae=H.y-J.y,ue=_.x-H.x,A=_.y-H.y,y=j*j+Ae*Ae,k=j*A-Ae*ue;if(Math.abs(k)>Number.EPSILON){const $=Math.sqrt(y),ie=Math.sqrt(ue*ue+A*A),ee=J.x-Ae/$,Re=J.y+j/$,fe=_.x-A/ie,ye=_.y+ue/ie,We=((fe-ee)*A-(ye-Re)*ue)/(j*A-Ae*ue);I=ee+j*We-H.x,z=Re+Ae*We-H.y;const oe=I*I+z*z;if(oe<=2)return new he(I,z);K=Math.sqrt(oe/2)}else{let $=!1;j>Number.EPSILON?ue>Number.EPSILON&&($=!0):j<-Number.EPSILON?ue<-Number.EPSILON&&($=!0):Math.sign(Ae)===Math.sign(A)&&($=!0),$?(I=-Ae,z=j,K=Math.sqrt(y)):(I=j,z=Ae,K=Math.sqrt(y/2))}return new he(I/K,z/K)}const re=[];for(let H=0,J=w.length,_=J-1,I=H+1;H<J;H++,_++,I++)_===J&&(_=0),I===J&&(I=0),re[H]=q(w[H],w[_],w[I]);const ge=[];let xe,Ie=re.concat();for(let H=0,J=D.length;H<J;H++){const _=D[H];xe=[];for(let I=0,z=_.length,K=z-1,j=I+1;I<z;I++,K++,j++)K===z&&(K=0),j===z&&(j=0),xe[I]=q(_[I],_[K],_[j]);ge.push(xe),Ie=Ie.concat(xe)}for(let H=0;H<m;H++){const J=H/m,_=p*Math.cos(J*Math.PI/2),I=g*Math.sin(J*Math.PI/2)+E;for(let z=0,K=w.length;z<K;z++){const j=V(w[z],re[z],I);le(j.x,j.y,-_)}for(let z=0,K=D.length;z<K;z++){const j=D[z];xe=ge[z];for(let Ae=0,ue=j.length;Ae<ue;Ae++){const A=V(j[Ae],xe[Ae],I);le(A.x,A.y,-_)}}}const je=g+E;for(let H=0;H<Y;H++){const J=d?V(M[H],Ie[H],je):M[H];v?(P.copy(x.normals[0]).multiplyScalar(J.x),C.copy(x.binormals[0]).multiplyScalar(J.y),L.copy(S[0]).add(P).add(C),le(L.x,L.y,L.z)):le(J.x,J.y,0)}for(let H=1;H<=u;H++)for(let J=0;J<Y;J++){const _=d?V(M[J],Ie[J],je):M[J];v?(P.copy(x.normals[H]).multiplyScalar(_.x),C.copy(x.binormals[H]).multiplyScalar(_.y),L.copy(S[H]).add(P).add(C),le(L.x,L.y,L.z)):le(_.x,_.y,h/u*H)}for(let H=m-1;H>=0;H--){const J=H/m,_=p*Math.cos(J*Math.PI/2),I=g*Math.sin(J*Math.PI/2)+E;for(let z=0,K=w.length;z<K;z++){const j=V(w[z],re[z],I);le(j.x,j.y,h+_)}for(let z=0,K=D.length;z<K;z++){const j=D[z];xe=ge[z];for(let Ae=0,ue=j.length;Ae<ue;Ae++){const A=V(j[Ae],xe[Ae],I);v?le(A.x,A.y+S[u-1].y,S[u-1].x+_):le(A.x,A.y,h+_)}}}Q(),ae();function Q(){const H=r.length/3;if(d){let J=0,_=Y*J;for(let I=0;I<te;I++){const z=B[I];Ce(z[2]+_,z[1]+_,z[0]+_)}J=u+m*2,_=Y*J;for(let I=0;I<te;I++){const z=B[I];Ce(z[0]+_,z[1]+_,z[2]+_)}}else{for(let J=0;J<te;J++){const _=B[J];Ce(_[2],_[1],_[0])}for(let J=0;J<te;J++){const _=B[J];Ce(_[0]+Y*u,_[1]+Y*u,_[2]+Y*u)}}n.addGroup(H,r.length/3-H,0)}function ae(){const H=r.length/3;let J=0;Me(w,J),J+=w.length;for(let _=0,I=D.length;_<I;_++){const z=D[_];Me(z,J),J+=z.length}n.addGroup(H,r.length/3-H,1)}function Me(H,J){let _=H.length;for(;--_>=0;){const I=_;let z=_-1;z<0&&(z=H.length-1);for(let K=0,j=u+m*2;K<j;K++){const Ae=Y*K,ue=Y*(K+1),A=J+I+Ae,y=J+z+Ae,k=J+z+ue,$=J+I+ue;Ve(A,y,k,$)}}}function le(H,J,_){l.push(H),l.push(J),l.push(_)}function Ce(H,J,_){we(H),we(J),we(_);const I=r.length/3,z=R.generateTopUV(n,r,I-3,I-2,I-1);Xe(z[0]),Xe(z[1]),Xe(z[2])}function Ve(H,J,_,I){we(H),we(J),we(I),we(J),we(_),we(I);const z=r.length/3,K=R.generateSideWallUV(n,r,z-6,z-3,z-2,z-1);Xe(K[0]),Xe(K[1]),Xe(K[3]),Xe(K[1]),Xe(K[2]),Xe(K[3])}function we(H){r.push(l[H*3+0]),r.push(l[H*3+1]),r.push(l[H*3+2])}function Xe(H){s.push(H.x),s.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ih(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new qo[r.type]().fromJSON(r)),new ga(n,e.options)}}const Dh={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new he(s,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],E=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-h),new he(d,1-g),new he(E,1-f)]:[new he(a,1-l),new he(u,1-h),new he(p,1-g),new he(m,1-f)]}};function Ih(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ps extends Ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],E=[],m=[];for(let f=0;f<u;f++){const R=f*d-o;for(let S=0;S<c;S++){const v=S*h-s;g.push(v,-R,0),E.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<a;R++){const S=R+c*f,v=R+c*(f+1),x=R+1+c*(f+1),C=R+1+c*f;p.push(S,v,C),p.push(v,x,C)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(E,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}class _a extends ds{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _a(e.radius,e.detail)}}class Uh extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yc extends Uh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nh extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fh extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Oh{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Bh=new Oh;class va{constructor(e){this.manager=e!==void 0?e:Bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}va.DEFAULT_MATERIAL_NAME="__DEFAULT";const fn={};class zh extends Error{constructor(e,t){super(e),this.response=t}}class kh extends va{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=sl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fn[e]!==void 0){fn[e].push({onLoad:t,onProgress:n,onError:r});return}fn[e]=[],fn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=fn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let E=0;const m=new ReadableStream({start(f){R();function R(){h.read().then(({done:S,value:v})=>{if(S)f.close();else{E+=v.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:E,total:p});for(let C=0,P=u.length;C<P;C++){const L=u[C];L.onProgress&&L.onProgress(x)}f.enqueue(v),R()}},S=>{f.error(S)})}}});return new Response(m)}else throw new zh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{sl.add(e,c);const u=fn[e];delete fn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete fn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xa extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const qs=new it,ol=new U,al=new U;class Mc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(ol),al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(al),t.updateMatrixWorld(),qs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ll=new it,tr=new U,Ys=new U;class Vh extends Mc{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),Ys.copy(n.position),Ys.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ys),n.updateMatrixWorld(),r.makeTranslation(-tr.x,-tr.y,-tr.z),ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll)}}class Hh extends xa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sc extends cc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gh extends Mc{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class js extends xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Gh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wh extends xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xh extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class qh{constructor(){this.type="ShapePath",this.color=new Ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Yo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const R=[];for(let S=0,v=f.length;S<v;S++){const x=f[S],C=new Zr;C.curves=x.curves,R.push(C)}return R}function n(f,R){const S=R.length;let v=!1;for(let x=S-1,C=0;C<S;x=C++){let P=R[x],L=R[C],b=L.x-P.x,M=L.y-P.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(P=R[C],b=-b,L=R[x],M=-M),f.y<P.y||f.y>L.y)continue;if(f.y===P.y){if(f.x===P.x)return!0}else{const D=M*(f.x-P.x)-b*(f.y-P.y);if(D===0)return!0;if(D<0)continue;v=!v}}else{if(f.y!==P.y)continue;if(L.x<=f.x&&f.x<=P.x||P.x<=f.x&&f.x<=L.x)return!0}}return v}const r=Ci.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Zr,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],d=[];let p=[],g=0,E;d[g]=void 0,p[g]=[];for(let f=0,R=s.length;f<R;f++)a=s[f],E=a.getPoints(),o=r(E),o=e?!o:o,o?(!u&&d[g]&&g++,d[g]={s:new Zr,p:E},d[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:E[0]});if(!d[0])return t(s);if(d.length>1){let f=!1,R=0;for(let S=0,v=d.length;S<v;S++)h[S]=[];for(let S=0,v=d.length;S<v;S++){const x=p[S];for(let C=0;C<x.length;C++){const P=x[C];let L=!0;for(let b=0;b<d.length;b++)n(P.p,d[b].p)&&(S!==b&&R++,L?(L=!1,h[b].push(P)):f=!0);L&&h[S].push(P)}}R>0&&f===!1&&(p=h)}let m;for(let f=0,R=d.length;f<R;f++){l=d[f].s,c.push(l),m=p[f];for(let S=0,v=m.length;S<v;S++)l.holes.push(m[S].h)}return c}}function cl(i,e,t,n){const r=Yh(n);switch(t){case Xl:return i*e;case Yl:return i*e;case jl:return i*e*2;case Zl:return i*e/r.components*r.byteLength;case sa:return i*e/r.components*r.byteLength;case Jl:return i*e*2/r.components*r.byteLength;case oa:return i*e*2/r.components*r.byteLength;case ql:return i*e*3/r.components*r.byteLength;case Zt:return i*e*4/r.components*r.byteLength;case aa:return i*e*4/r.components*r.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:case Mo:return Math.max(i,16)*Math.max(e,8)/4;case vo:case yo:return Math.max(i,8)*Math.max(e,8)/2;case So:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jr:case zo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kl:case Vo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ho:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yh(i){switch(i){case En:case Hl:return{byteLength:1,components:1};case ar:case Gl:case dr:return{byteLength:2,components:1};case ia:case ra:return{byteLength:2,components:4};case ti:case na:case xn:return{byteLength:4,components:1};case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ec(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function jh(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],E=h[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++d,h[d]=E)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const E=h[p];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ld=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,If=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,np=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Zh,alphahash_pars_fragment:Jh,alphamap_fragment:Kh,alphamap_pars_fragment:$h,alphatest_fragment:Qh,alphatest_pars_fragment:ed,aomap_fragment:td,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:rd,begin_vertex:sd,beginnormal_vertex:od,bsdfs:ad,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:_d,common:vd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:yd,displacementmap_pars_vertex:Md,displacementmap_vertex:Sd,emissivemap_fragment:Ed,emissivemap_pars_fragment:Td,colorspace_fragment:bd,colorspace_pars_fragment:wd,envmap_fragment:Ad,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Vd,envmap_vertex:Ld,fog_vertex:Dd,fog_pars_vertex:Id,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:kd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:jd,lights_fragment_maps:Zd,lights_fragment_end:Jd,logdepthbuf_fragment:Kd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:ef,map_fragment:tf,map_pars_fragment:nf,map_particle_fragment:rf,map_particle_pars_fragment:sf,metalnessmap_fragment:of,metalnessmap_pars_fragment:af,morphinstance_vertex:lf,morphcolor_vertex:cf,morphnormal_vertex:uf,morphtarget_pars_vertex:hf,morphtarget_vertex:df,normal_fragment_begin:ff,normal_fragment_maps:pf,normal_pars_fragment:mf,normal_pars_vertex:gf,normal_vertex:_f,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:Sf,opaque_fragment:Ef,packing:Tf,premultiplied_alpha_fragment:bf,project_vertex:wf,dithering_fragment:Af,dithering_pars_fragment:Rf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Df,shadowmap_vertex:If,shadowmask_pars_fragment:Uf,skinbase_vertex:Nf,skinning_pars_vertex:Ff,skinning_vertex:Of,skinnormal_vertex:Bf,specularmap_fragment:zf,specularmap_pars_fragment:kf,tonemapping_fragment:Vf,tonemapping_pars_fragment:Hf,transmission_fragment:Gf,transmission_pars_fragment:Wf,uv_pars_fragment:Xf,uv_pars_vertex:qf,uv_vertex:Yf,worldpos_vertex:jf,background_vert:Zf,background_frag:Jf,backgroundCube_vert:Kf,backgroundCube_frag:$f,cube_vert:Qf,cube_frag:ep,depth_vert:tp,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:rp,equirect_vert:sp,equirect_frag:op,linedashed_vert:ap,linedashed_frag:lp,meshbasic_vert:cp,meshbasic_frag:up,meshlambert_vert:hp,meshlambert_frag:dp,meshmatcap_vert:fp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:_p,meshphong_frag:vp,meshphysical_vert:xp,meshphysical_frag:yp,meshtoon_vert:Mp,meshtoon_frag:Sp,points_vert:Ep,points_frag:Tp,shadow_vert:bp,shadow_frag:wp,sprite_vert:Ap,sprite_frag:Rp},de={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},en={basic:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Tt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Tt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Tt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Tt([de.points,de.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Tt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Tt([de.common,de.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Tt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Tt([de.sprite,de.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Tt([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Tt([de.lights,de.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};en.physical={uniforms:Tt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Vr={r:0,b:0,g:0},Xn=new rn,Cp=new it;function Pp(i,e,t,n,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function E(S){let v=!1;const x=g(S);x===null?f(a,l):x&&x.isColor&&(f(x,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===us)?(u===void 0&&(u=new Vt(new Yi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Hi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xn.copy(v.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(Xn)),u.material.toneMapped=Je.getTransfer(x.colorSpace)!==et,(h!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Vt(new ps(2,2),new Bn({name:"BackgroundMaterial",uniforms:Hi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,v){S.getRGB(Vr,lc(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,v,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:E,addToRenderList:m,dispose:R}}function Lp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(M,D,X,B,w){let V=!1;const Y=h(B,X,D);s!==Y&&(s=Y,c(s.object)),V=p(M,B,X,w),V&&g(M,B,X,w),w!==null&&e.update(w,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(M,D,X,B),w!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,D,X){const B=X.wireframe===!0;let w=n[M.id];w===void 0&&(w={},n[M.id]=w);let V=w[D.id];V===void 0&&(V={},w[D.id]=V);let Y=V[B];return Y===void 0&&(Y=d(l()),V[B]=Y),Y}function d(M){const D=[],X=[],B=[];for(let w=0;w<t;w++)D[w]=0,X[w]=0,B[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,D,X,B){const w=s.attributes,V=D.attributes;let Y=0;const te=X.getAttributes();for(const q in te)if(te[q].location>=0){const ge=w[q];let xe=V[q];if(xe===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),ge===void 0||ge.attribute!==xe||xe&&ge.data!==xe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==B}function g(M,D,X,B){const w={},V=D.attributes;let Y=0;const te=X.getAttributes();for(const q in te)if(te[q].location>=0){let ge=V[q];ge===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));const xe={};xe.attribute=ge,ge&&ge.data&&(xe.data=ge.data),w[q]=xe,Y++}s.attributes=w,s.attributesNum=Y,s.index=B}function E(){const M=s.newAttributes;for(let D=0,X=M.length;D<X;D++)M[D]=0}function m(M){f(M,0)}function f(M,D){const X=s.newAttributes,B=s.enabledAttributes,w=s.attributeDivisors;X[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),w[M]!==D&&(i.vertexAttribDivisor(M,D),w[M]=D)}function R(){const M=s.newAttributes,D=s.enabledAttributes;for(let X=0,B=D.length;X<B;X++)D[X]!==M[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function S(M,D,X,B,w,V,Y){Y===!0?i.vertexAttribIPointer(M,D,X,w,V):i.vertexAttribPointer(M,D,X,B,w,V)}function v(M,D,X,B){E();const w=B.attributes,V=X.getAttributes(),Y=D.defaultAttributeValues;for(const te in V){const q=V[te];if(q.location>=0){let re=w[te];if(re===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const ge=re.normalized,xe=re.itemSize,Ie=e.get(re);if(Ie===void 0)continue;const je=Ie.buffer,Q=Ie.type,ae=Ie.bytesPerElement,Me=Q===i.INT||Q===i.UNSIGNED_INT||re.gpuType===na;if(re.isInterleavedBufferAttribute){const le=re.data,Ce=le.stride,Ve=re.offset;if(le.isInstancedInterleavedBuffer){for(let we=0;we<q.locationSize;we++)f(q.location+we,le.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let we=0;we<q.locationSize;we++)m(q.location+we);i.bindBuffer(i.ARRAY_BUFFER,je);for(let we=0;we<q.locationSize;we++)S(q.location+we,xe/q.locationSize,Q,ge,Ce*ae,(Ve+xe/q.locationSize*we)*ae,Me)}else{if(re.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)f(q.location+le,re.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let le=0;le<q.locationSize;le++)m(q.location+le);i.bindBuffer(i.ARRAY_BUFFER,je);for(let le=0;le<q.locationSize;le++)S(q.location+le,xe/q.locationSize,Q,ge,xe*ae,xe/q.locationSize*le*ae,Me)}}else if(Y!==void 0){const ge=Y[te];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(q.location,ge);break;case 3:i.vertexAttrib3fv(q.location,ge);break;case 4:i.vertexAttrib4fv(q.location,ge);break;default:i.vertexAttrib1fv(q.location,ge)}}}}R()}function x(){L();for(const M in n){const D=n[M];for(const X in D){const B=D[X];for(const w in B)u(B[w].object),delete B[w];delete D[X]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const X in D){const B=D[X];for(const w in B)u(B[w].object),delete B[w];delete D[X]}delete n[M.id]}function P(M){for(const D in n){const X=n[D];if(X[M.id]===void 0)continue;const B=X[M.id];for(const w in B)u(B[w].object),delete B[w];delete X[M.id]}}function L(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:x,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:m,disableUnusedAttributes:R}}function Dp(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let E=0;E<h;E++)g+=u[E]*d[E];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ip(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Zt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==En&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==xn&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:x,maxSamples:C}}function Up(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new jn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,E=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const R=s?0:n,S=R*4;let v=f.clippingState||null;l.value=v,v=u(g,d,S,p);for(let x=0;x!==S;++x)v[x]=t[x];f.clippingState=v,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const E=h!==null?h.length:0;let m=null;if(E!==0){if(m=l.value,g!==!0||m===null){const f=p+E*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,v=p;S!==E;++S,v+=4)o.copy(h[S]).applyMatrix4(R,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function Np(i){let e=new WeakMap;function t(o,a){return a===po?o.mapping=Oi:a===mo&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===po||a===mo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ju(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ti=4,ul=[.125,.215,.35,.446,.526,.582],$n=20,Zs=new Sc,hl=new Ge;let Js=null,Ks=0,$s=0,Qs=!1;const Zn=(1+Math.sqrt(5))/2,vi=1/Zn,dl=[new U(-Zn,vi,0),new U(Zn,vi,0),new U(-vi,0,Zn),new U(vi,0,Zn),new U(0,Zn,-vi),new U(0,Zn,vi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Fp=new U;class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Fp}=s;Js=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Js,Ks,$s),this._renderer.xr.enabled=Qs,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Js=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),$s=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:dr,format:Zt,colorSpace:Vi,depthBuffer:!1},r=pl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Op(s)),this._blurMaterial=Bp(s,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,n,r,s){const l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(hl),h.toneMapping=Nn,h.autoClear=!1;const g=new sc({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),E=new Vt(new Yi,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(hl),m=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));const v=this._cubeSize;Hr(r,S*v,R>2?v:0,v,v),h.setRenderTarget(r),m&&h.render(E,l),h.render(e,l)}E.geometry.dispose(),E.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Oi||e.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dl[(r-s-1)%dl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$n-1),E=s/g,m=isFinite(s)?1+Math.floor(u*E):$n;m>$n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let R=0;for(let P=0;P<$n;++P){const L=P/E,b=Math.exp(-L*L/2);f.push(b),P===0?R+=b:P<m&&(R+=2*b)}for(let P=0;P<f.length;P++)f[P]=f[P]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[r],x=3*v*(r>S-Ti?r-S+Ti:0),C=4*(this._cubeSize-v);Hr(t,x,C,3*v,2*v),l.setRenderTarget(t),l.render(h,Zs)}}function Op(i){const e=[],t=[],n=[];let r=i;const s=i-Ti+1+ul.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ti?l=ul[o-i+Ti-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,E=3,m=2,f=1,R=new Float32Array(E*g*p),S=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,L=C>2?0:-1,b=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];R.set(b,E*g*C),S.set(d,m*g*C);const M=[C,C,C,C,C,C];v.set(M,f*g*C)}const x=new Ht;x.setAttribute("position",new $t(R,E)),x.setAttribute("uv",new $t(S,m)),x.setAttribute("faceIndex",new $t(v,f)),e.push(x),r>Ti&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pl(i,e,t){const n=new ni(i,e,t);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Bp(i,e,t){const n=new Float32Array($n),r=new U(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ml(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function gl(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===po||l===mo,u=l===Oi||l===Bi;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new fl(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new fl(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Yn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Vp(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let E=0;if(p!==null){const R=p.array;E=p.version;for(let S=0,v=R.length;S<v;S+=3){const x=R[S+0],C=R[S+1],P=R[S+2];d.push(x,C,C,P,P,x)}}else if(g!==void 0){const R=g.array;E=g.version;for(let S=0,v=R.length/3-1;S<v;S+=3){const x=S+0,C=S+1,P=S+2;d.push(x,C,C,P,P,x)}}else return;const m=new(ec(d)?ac:oc)(d,1);m.version=E;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Hp(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,E){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],E[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,E,0,g);let f=0;for(let R=0;R<g;R++)f+=p[R]*E[R];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Gp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wp(i,e,t){const n=new WeakMap,r=new tt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),E===!0&&(v=2),m===!0&&(v=3);let x=a.attributes.position.count*v,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const P=new Float32Array(x*C*4*h),L=new tc(P,x,C,h);L.type=xn,L.needsUpdate=!0;const b=v*4;for(let D=0;D<h;D++){const X=f[D],B=R[D],w=S[D],V=x*C*4*D;for(let Y=0;Y<X.count;Y++){const te=Y*b;g===!0&&(r.fromBufferAttribute(X,Y),P[V+te+0]=r.x,P[V+te+1]=r.y,P[V+te+2]=r.z,P[V+te+3]=0),E===!0&&(r.fromBufferAttribute(B,Y),P[V+te+4]=r.x,P[V+te+5]=r.y,P[V+te+6]=r.z,P[V+te+7]=0),m===!0&&(r.fromBufferAttribute(w,Y),P[V+te+8]=r.x,P[V+te+9]=r.y,P[V+te+10]=r.z,P[V+te+11]=w.itemSize===4?r.w:1)}}d={count:h,texture:L,size:new he(x,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const E=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",E),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Xp(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Tc=new Pt,_l=new dc(1,1),bc=new tc,wc=new Iu,Ac=new uc,vl=[],xl=[],yl=new Float32Array(16),Ml=new Float32Array(9),Sl=new Float32Array(4);function ji(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=vl[r];if(s===void 0&&(s=new Float32Array(r),vl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ms(i,e){let t=xl[e];t===void 0&&(t=new Int32Array(e),xl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Sl.set(n),i.uniformMatrix2fv(this.addr,!1,Sl),mt(t,n)}}function Kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Ml.set(n),i.uniformMatrix3fv(this.addr,!1,Ml),mt(t,n)}}function $p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;yl.set(n),i.uniformMatrix4fv(this.addr,!1,yl),mt(t,n)}}function Qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function am(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_l.compareFunction=Ql,s=_l):s=Tc,t.setTexture2D(e||s,r)}function lm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||wc,r)}function cm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ac,r)}function um(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||bc,r)}function hm(i){switch(i){case 5126:return qp;case 35664:return Yp;case 35665:return jp;case 35666:return Zp;case 35674:return Jp;case 35675:return Kp;case 35676:return $p;case 5124:case 35670:return Qp;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return rm;case 36295:return sm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return um}}function dm(i,e){i.uniform1fv(this.addr,e)}function fm(i,e){const t=ji(e,this.size,2);i.uniform2fv(this.addr,t)}function pm(i,e){const t=ji(e,this.size,3);i.uniform3fv(this.addr,t)}function mm(i,e){const t=ji(e,this.size,4);i.uniform4fv(this.addr,t)}function gm(i,e){const t=ji(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _m(i,e){const t=ji(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vm(i,e){const t=ji(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xm(i,e){i.uniform1iv(this.addr,e)}function ym(i,e){i.uniform2iv(this.addr,e)}function Mm(i,e){i.uniform3iv(this.addr,e)}function Sm(i,e){i.uniform4iv(this.addr,e)}function Em(i,e){i.uniform1uiv(this.addr,e)}function Tm(i,e){i.uniform2uiv(this.addr,e)}function bm(i,e){i.uniform3uiv(this.addr,e)}function wm(i,e){i.uniform4uiv(this.addr,e)}function Am(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tc,s[o])}function Rm(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wc,s[o])}function Cm(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ac,s[o])}function Pm(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bc,s[o])}function Lm(i){switch(i){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return xm;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return Tm;case 36295:return bm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}class Dm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hm(t.type)}}class Im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lm(t.type)}}class Um{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function El(i,e){i.seq.push(e),i.map[e.id]=e}function Nm(i,e,t){const n=i.name,r=n.length;for(eo.lastIndex=0;;){const s=eo.exec(n),o=eo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){El(t,c===void 0?new Dm(a,i,e):new Im(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Um(a),El(t,h)),t=h}}}class Jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Nm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fm=37297;let Om=0;function Bm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const bl=new Be;function zm(i){Je._getMatrix(bl,Je.workingColorSpace,i);const e=`mat3( ${bl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case ts:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bm(i.getShaderSource(e),o)}else return r}function km(i,e){const t=zm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vm(i,e){let t;switch(e){case ou:t="Linear";break;case au:t="Reinhard";break;case lu:t="Cineon";break;case kl:t="ACESFilmic";break;case uu:t="AgX";break;case hu:t="Neutral";break;case cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new U;function Hm(){Je.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function Wm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function nr(i){return i!==""}function Al(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(i){return i.replace(qm,jm)}const Ym=new Map;function jm(i,e){let t=ke[e];if(t===void 0){const n=Ym.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jo(t)}const Zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(i){return i.replace(Zm,Jm)}function Jm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Km(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function $m(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function eg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zl:e="ENVMAP_BLENDING_MULTIPLY";break;case ru:e="ENVMAP_BLENDING_MIX";break;case su:e="ENVMAP_BLENDING_ADD";break}return e}function tg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ng(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Km(t),c=$m(t),u=Qm(t),h=eg(t),d=tg(t),p=Gm(t),g=Wm(s),E=r.createProgram();let m,f,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),f.length>0&&(f+=`
`)):(m=[Pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),f=[Pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,km("linearToOutputTexel",t.outputColorSpace),Hm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),o=Jo(o),o=Al(o,t),o=Rl(o,t),a=Jo(a),a=Al(a,t),a=Rl(a,t),o=Cl(o),a=Cl(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=R+m+o,v=R+f+a,x=Tl(r,r.VERTEX_SHADER,S),C=Tl(r,r.FRAGMENT_SHADER,v);r.attachShader(E,x),r.attachShader(E,C),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(D){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(E).trim(),B=r.getShaderInfoLog(x).trim(),w=r.getShaderInfoLog(C).trim();let V=!0,Y=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,x,C);else{const te=wl(r,x,"vertex"),q=wl(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+te+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(B===""||w==="")&&(Y=!1);Y&&(D.diagnostics={runnable:V,programLog:X,vertexShader:{log:B,prefix:m},fragmentShader:{log:w,prefix:f}})}r.deleteShader(x),r.deleteShader(C),L=new Jr(r,E),b=Xm(r,E)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(E,Fm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Om++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=x,this.fragmentShader=C,this}let ig=0;class rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sg(e),t.set(e,n)),n}}class sg{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}}function og(i,e,t,n,r,s,o){const a=new ic,l=new rg,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,D,X,B){const w=X.fog,V=B.geometry,Y=b.isMeshStandardMaterial?X.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),q=te&&te.mapping===us?te.image.height:null,re=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=ge!==void 0?ge.length:0;let Ie=0;V.morphAttributes.position!==void 0&&(Ie=1),V.morphAttributes.normal!==void 0&&(Ie=2),V.morphAttributes.color!==void 0&&(Ie=3);let je,Q,ae,Me;if(re){const Qe=en[re];je=Qe.vertexShader,Q=Qe.fragmentShader}else je=b.vertexShader,Q=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),Me=l.getFragmentShaderID(b);const le=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ve=B.isInstancedMesh===!0,we=B.isBatchedMesh===!0,Xe=!!b.map,H=!!b.matcap,J=!!te,_=!!b.aoMap,I=!!b.lightMap,z=!!b.bumpMap,K=!!b.normalMap,j=!!b.displacementMap,Ae=!!b.emissiveMap,ue=!!b.metalnessMap,A=!!b.roughnessMap,y=b.anisotropy>0,k=b.clearcoat>0,$=b.dispersion>0,ie=b.iridescence>0,ee=b.sheen>0,Re=b.transmission>0,fe=y&&!!b.anisotropyMap,ye=k&&!!b.clearcoatMap,We=k&&!!b.clearcoatNormalMap,oe=k&&!!b.clearcoatRoughnessMap,Ee=ie&&!!b.iridescenceMap,De=ie&&!!b.iridescenceThicknessMap,Ue=ee&&!!b.sheenColorMap,Te=ee&&!!b.sheenRoughnessMap,qe=!!b.specularMap,ze=!!b.specularColorMap,nt=!!b.specularIntensityMap,N=Re&&!!b.transmissionMap,pe=Re&&!!b.thicknessMap,Z=!!b.gradientMap,ne=!!b.alphaMap,ve=b.alphaTest>0,_e=!!b.alphaHash,Oe=!!b.extensions;let ot=Nn;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ot=i.toneMapping);const yt={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:Q,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:we,batchingColor:we&&B._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Vi,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:H,envMap:J,envMapMode:J&&te.mapping,envMapCubeUVHeight:q,aoMap:_,lightMap:I,bumpMap:z,normalMap:K,displacementMap:d&&j,emissiveMap:Ae,normalMapObjectSpace:K&&b.normalMapType===mu,normalMapTangentSpace:K&&b.normalMapType===$l,metalnessMap:ue,roughnessMap:A,anisotropy:y,anisotropyMap:fe,clearcoat:k,clearcoatMap:ye,clearcoatNormalMap:We,clearcoatRoughnessMap:oe,dispersion:$,iridescence:ie,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:ee,sheenColorMap:Ue,sheenRoughnessMap:Te,specularMap:qe,specularColorMap:ze,specularIntensityMap:nt,transmission:Re,transmissionMap:N,thicknessMap:pe,gradientMap:Z,opaque:b.transparent===!1&&b.blending===wi&&b.alphaToCoverage===!1,alphaMap:ne,alphaTest:ve,alphaHash:_e,combine:b.combine,mapUv:Xe&&E(b.map.channel),aoMapUv:_&&E(b.aoMap.channel),lightMapUv:I&&E(b.lightMap.channel),bumpMapUv:z&&E(b.bumpMap.channel),normalMapUv:K&&E(b.normalMap.channel),displacementMapUv:j&&E(b.displacementMap.channel),emissiveMapUv:Ae&&E(b.emissiveMap.channel),metalnessMapUv:ue&&E(b.metalnessMap.channel),roughnessMapUv:A&&E(b.roughnessMap.channel),anisotropyMapUv:fe&&E(b.anisotropyMap.channel),clearcoatMapUv:ye&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:We&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Te&&E(b.sheenRoughnessMap.channel),specularMapUv:qe&&E(b.specularMap.channel),specularColorMapUv:ze&&E(b.specularColorMap.channel),specularIntensityMapUv:nt&&E(b.specularIntensityMap.channel),transmissionMapUv:N&&E(b.transmissionMap.channel),thicknessMapUv:pe&&E(b.thicknessMap.channel),alphaMapUv:ne&&E(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(K||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Xe||ne),fog:!!w,useFog:b.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===et,decodeVideoTextureEmissive:Ae&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===Ct,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Oe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&b.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(R(M,b),S(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function R(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=g[b.type];let D;if(M){const X=en[M];D=qu.clone(X.uniforms)}else D=b.uniforms;return D}function x(b,M){let D;for(let X=0,B=u.length;X<B;X++){const w=u[X];if(w.cacheKey===M){D=w,++D.usedTimes;break}}return D===void 0&&(D=new ng(i,M,b,s),u.push(D)),D}function C(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:x,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:L}}function ag(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function lg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ll(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,p,g,E,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:E,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=E,f.group=m),e++,f}function a(h,d,p,g,E,m){const f=o(h,d,p,g,E,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,E,m){const f=o(h,d,p,g,E,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||lg),n.length>1&&n.sort(d||Ll),r.length>1&&r.sort(d||Ll)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function cg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Dl,i.set(n,[o])):r>=s.length?(o=new Dl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ug(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function hg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dg=0;function fg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pg(i){const e=new ug,t=hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,s=new it,o=new it;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,E=0,m=0,f=0,R=0,S=0,v=0,x=0,C=0,P=0;c.sort(fg);for(let b=0,M=c.length;b<M;b++){const D=c[b],X=D.color,B=D.intensity,w=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=X.r*B,h+=X.g*B,d+=X.b*B;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],B);P++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,q=t.get(D);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=D.shadow.matrix,R++}n.directional[p]=Y,p++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(X).multiplyScalar(B),Y.distance=w,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[E]=Y;const te=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,te.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[E]=te.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.spotShadow[E]=q,n.spotShadowMap[E]=V,v++}E++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(X).multiplyScalar(B),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const te=D.shadow,q=t.get(D);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(B),Y.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[f]=Y,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==E||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==R||L.numPointShadows!==S||L.numSpotShadows!==v||L.numSpotMaps!==x||L.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=E,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+x-C,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,L.directionalLength=p,L.pointLength=g,L.spotLength=E,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=R,L.numPointShadows=S,L.numSpotShadows=v,L.numSpotMaps=x,L.numLightProbes=P,n.version=dg++)}function l(c,u){let h=0,d=0,p=0,g=0,E=0;const m=u.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){const S=c[f];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[E];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:n}}function Il(i){const e=new pg(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mg(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Il(i),e.set(r,[a])):s>=o.length?(a=new Il(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vg(i,e,t){let n=new ua;const r=new he,s=new he,o=new tt,a=new Nh({depthPacking:pu}),l=new Fh,c={},u=t.maxTextureSize,h={[On]:Ct,[Ct]:On,[vn]:vn},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:gg,fragmentShader:_g}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let f=this.type;this.render=function(C,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Un),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const B=f!==pn&&this.type===pn,w=f===pn&&this.type!==pn;for(let V=0,Y=C.length;V<Y;V++){const te=C[V],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const re=q.getFrameExtents();if(r.multiply(re),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,q.mapSize.y=s.y)),q.map===null||B===!0||w===!0){const xe=this.type!==pn?{minFilter:Kt,magFilter:Kt}:{};q.map!==null&&q.map.dispose(),q.map=new ni(r.x,r.y,xe),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ge=q.getViewportCount();for(let xe=0;xe<ge;xe++){const Ie=q.getViewport(xe);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),X.viewport(o),q.updateMatrices(te,xe),n=q.getFrustum(),v(P,L,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===pn&&R(q,L),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,D)};function R(C,P){const L=e.update(E);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ni(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,L,d,E,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,L,p,E,null)}function S(C,P,L,b){let M=null;const D=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const X=M.uuid,B=P.uuid;let w=c[X];w===void 0&&(w={},c[X]=w);let V=w[B];V===void 0&&(V=M.clone(),w[B]=V,P.addEventListener("dispose",x)),M=V}if(M.visible=P.visible,M.wireframe=P.wireframe,b===pn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=L}return M}function v(C,P,L,b,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===pn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const B=e.update(C),w=C.material;if(Array.isArray(w)){const V=B.groups;for(let Y=0,te=V.length;Y<te;Y++){const q=V[Y],re=w[q.materialIndex];if(re&&re.visible){const ge=S(C,re,b,M);C.onBeforeShadow(i,C,P,L,B,ge,q),i.renderBufferDirect(L,null,B,ge,C,q),C.onAfterShadow(i,C,P,L,B,ge,q)}}}else if(w.visible){const V=S(C,w,b,M);C.onBeforeShadow(i,C,P,L,B,V,null),i.renderBufferDirect(L,null,B,V,C,null),C.onAfterShadow(i,C,P,L,B,V,null)}}const X=C.children;for(let B=0,w=X.length;B<w;B++)v(X[B],P,L,b,M)}function x(C){C.target.removeEventListener("dispose",x);for(const L in c){const b=c[L],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const xg={[oo]:ao,[lo]:ho,[co]:fo,[Fi]:uo,[ao]:oo,[ho]:lo,[fo]:co,[uo]:Fi};function yg(i,e){function t(){let N=!1;const pe=new tt;let Z=null;const ne=new tt(0,0,0,0);return{setMask:function(ve){Z!==ve&&!N&&(i.colorMask(ve,ve,ve,ve),Z=ve)},setLocked:function(ve){N=ve},setClear:function(ve,_e,Oe,ot,yt){yt===!0&&(ve*=ot,_e*=ot,Oe*=ot),pe.set(ve,_e,Oe,ot),ne.equals(pe)===!1&&(i.clearColor(ve,_e,Oe,ot),ne.copy(pe))},reset:function(){N=!1,Z=null,ne.set(-1,0,0,0)}}}function n(){let N=!1,pe=!1,Z=null,ne=null,ve=null;return{setReversed:function(_e){if(pe!==_e){const Oe=e.get("EXT_clip_control");pe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const ot=ve;ve=null,this.setClear(ot)}pe=_e},getReversed:function(){return pe},setTest:function(_e){_e?le(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(_e){Z!==_e&&!N&&(i.depthMask(_e),Z=_e)},setFunc:function(_e){if(pe&&(_e=xg[_e]),ne!==_e){switch(_e){case oo:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=_e}},setLocked:function(_e){N=_e},setClear:function(_e){ve!==_e&&(pe&&(_e=1-_e),i.clearDepth(_e),ve=_e)},reset:function(){N=!1,Z=null,ne=null,ve=null,pe=!1}}}function r(){let N=!1,pe=null,Z=null,ne=null,ve=null,_e=null,Oe=null,ot=null,yt=null;return{setTest:function(Qe){N||(Qe?le(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Qe){pe!==Qe&&!N&&(i.stencilMask(Qe),pe=Qe)},setFunc:function(Qe,Gt,an){(Z!==Qe||ne!==Gt||ve!==an)&&(i.stencilFunc(Qe,Gt,an),Z=Qe,ne=Gt,ve=an)},setOp:function(Qe,Gt,an){(_e!==Qe||Oe!==Gt||ot!==an)&&(i.stencilOp(Qe,Gt,an),_e=Qe,Oe=Gt,ot=an)},setLocked:function(Qe){N=Qe},setClear:function(Qe){yt!==Qe&&(i.clearStencil(Qe),yt=Qe)},reset:function(){N=!1,pe=null,Z=null,ne=null,ve=null,_e=null,Oe=null,ot=null,yt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,E=!1,m=null,f=null,R=null,S=null,v=null,x=null,C=null,P=new Ge(0,0,0),L=0,b=!1,M=null,D=null,X=null,B=null,w=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,te=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=te>=2);let re=null,ge={};const xe=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),je=new tt().fromArray(xe),Q=new tt().fromArray(Ie);function ae(N,pe,Z,ne){const ve=new Uint8Array(4),_e=i.createTexture();i.bindTexture(N,_e),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<Z;Oe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(pe+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return _e}const Me={};Me[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(Fi),z(!1),K(Ca),le(i.CULL_FACE),_(Un);function le(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Ce(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ve(N,pe){return h[N]!==pe?(i.bindFramebuffer(N,pe),h[N]=pe,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function we(N,pe){let Z=p,ne=!1;if(N){Z=d.get(pe),Z===void 0&&(Z=[],d.set(pe,Z));const ve=N.textures;if(Z.length!==ve.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Oe=ve.length;_e<Oe;_e++)Z[_e]=i.COLOR_ATTACHMENT0+_e;Z.length=ve.length,ne=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ne=!0);ne&&i.drawBuffers(Z)}function Xe(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const H={[Kn]:i.FUNC_ADD,[Vc]:i.FUNC_SUBTRACT,[Hc]:i.FUNC_REVERSE_SUBTRACT};H[Gc]=i.MIN,H[Wc]=i.MAX;const J={[Xc]:i.ZERO,[qc]:i.ONE,[Yc]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[Kc]:i.DST_COLOR,[Zc]:i.DST_ALPHA,[jc]:i.ONE_MINUS_SRC_COLOR,[so]:i.ONE_MINUS_SRC_ALPHA,[$c]:i.ONE_MINUS_DST_COLOR,[Jc]:i.ONE_MINUS_DST_ALPHA,[eu]:i.CONSTANT_COLOR,[tu]:i.ONE_MINUS_CONSTANT_COLOR,[nu]:i.CONSTANT_ALPHA,[iu]:i.ONE_MINUS_CONSTANT_ALPHA};function _(N,pe,Z,ne,ve,_e,Oe,ot,yt,Qe){if(N===Un){E===!0&&(Ce(i.BLEND),E=!1);return}if(E===!1&&(le(i.BLEND),E=!0),N!==kc){if(N!==m||Qe!==b){if((f!==Kn||v!==Kn)&&(i.blendEquation(i.FUNC_ADD),f=Kn,v=Kn),Qe)switch(N){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFunc(i.ONE,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case La:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Da:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}R=null,S=null,x=null,C=null,P.set(0,0,0),L=0,m=N,b=Qe}return}ve=ve||pe,_e=_e||Z,Oe=Oe||ne,(pe!==f||ve!==v)&&(i.blendEquationSeparate(H[pe],H[ve]),f=pe,v=ve),(Z!==R||ne!==S||_e!==x||Oe!==C)&&(i.blendFuncSeparate(J[Z],J[ne],J[_e],J[Oe]),R=Z,S=ne,x=_e,C=Oe),(ot.equals(P)===!1||yt!==L)&&(i.blendColor(ot.r,ot.g,ot.b,yt),P.copy(ot),L=yt),m=N,b=!1}function I(N,pe){N.side===vn?Ce(i.CULL_FACE):le(i.CULL_FACE);let Z=N.side===Ct;pe&&(Z=!Z),z(Z),N.blending===wi&&N.transparent===!1?_(Un):_(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ne=N.stencilWrite;a.setTest(ne),ne&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function z(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function K(N){N!==Oc?(le(i.CULL_FACE),N!==D&&(N===Ca?i.cullFace(i.BACK):N===Bc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),D=N}function j(N){N!==X&&(Y&&i.lineWidth(N),X=N)}function Ae(N,pe,Z){N?(le(i.POLYGON_OFFSET_FILL),(B!==pe||w!==Z)&&(i.polygonOffset(pe,Z),B=pe,w=Z)):Ce(i.POLYGON_OFFSET_FILL)}function ue(N){N?le(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+V-1),re!==N&&(i.activeTexture(N),re=N)}function y(N,pe,Z){Z===void 0&&(re===null?Z=i.TEXTURE0+V-1:Z=re);let ne=ge[Z];ne===void 0&&(ne={type:void 0,texture:void 0},ge[Z]=ne),(ne.type!==N||ne.texture!==pe)&&(re!==Z&&(i.activeTexture(Z),re=Z),i.bindTexture(N,pe||Me[N]),ne.type=N,ne.texture=pe)}function k(){const N=ge[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){je.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function Te(N){Q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function qe(N,pe){let Z=c.get(pe);Z===void 0&&(Z=new WeakMap,c.set(pe,Z));let ne=Z.get(N);ne===void 0&&(ne=i.getUniformBlockIndex(pe,N.name),Z.set(N,ne))}function ze(N,pe){const ne=c.get(pe).get(N);l.get(pe)!==ne&&(i.uniformBlockBinding(pe,ne,N.__bindingPointIndex),l.set(pe,ne))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,ge={},h={},d=new WeakMap,p=[],g=null,E=!1,m=null,f=null,R=null,S=null,v=null,x=null,C=null,P=new Ge(0,0,0),L=0,b=!1,M=null,D=null,X=null,B=null,w=null,je.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Ce,bindFramebuffer:Ve,drawBuffers:we,useProgram:Xe,setBlending:_,setMaterial:I,setFlipSided:z,setCullFace:K,setLineWidth:j,setPolygonOffset:Ae,setScissorTest:ue,activeTexture:A,bindTexture:y,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:ie,texImage2D:Ee,texImage3D:De,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:We,texStorage3D:oe,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Ue,viewport:Te,reset:nt}}function Mg(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):is("canvas")}function E(A,y,k){let $=1;const ie=ue(A);if((ie.width>k||ie.height>k)&&($=k/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ee=Math.floor($*ie.width),Re=Math.floor($*ie.height);h===void 0&&(h=g(ee,Re));const fe=y?g(ee,Re):h;return fe.width=ee,fe.height=Re,fe.getContext("2d").drawImage(A,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Re+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,y,k,$,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=y;if(y===i.RED&&(k===i.FLOAT&&(ee=i.R32F),k===i.HALF_FLOAT&&(ee=i.R16F),k===i.UNSIGNED_BYTE&&(ee=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.R8UI),k===i.UNSIGNED_SHORT&&(ee=i.R16UI),k===i.UNSIGNED_INT&&(ee=i.R32UI),k===i.BYTE&&(ee=i.R8I),k===i.SHORT&&(ee=i.R16I),k===i.INT&&(ee=i.R32I)),y===i.RG&&(k===i.FLOAT&&(ee=i.RG32F),k===i.HALF_FLOAT&&(ee=i.RG16F),k===i.UNSIGNED_BYTE&&(ee=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RG8UI),k===i.UNSIGNED_SHORT&&(ee=i.RG16UI),k===i.UNSIGNED_INT&&(ee=i.RG32UI),k===i.BYTE&&(ee=i.RG8I),k===i.SHORT&&(ee=i.RG16I),k===i.INT&&(ee=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),k===i.UNSIGNED_INT&&(ee=i.RGB32UI),k===i.BYTE&&(ee=i.RGB8I),k===i.SHORT&&(ee=i.RGB16I),k===i.INT&&(ee=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),k===i.UNSIGNED_INT&&(ee=i.RGBA32UI),k===i.BYTE&&(ee=i.RGBA8I),k===i.SHORT&&(ee=i.RGBA16I),k===i.INT&&(ee=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),y===i.RGBA){const Re=ie?ts:Je.getTransfer($);k===i.FLOAT&&(ee=i.RGBA32F),k===i.HALF_FLOAT&&(ee=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ee=Re===et?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(A,y){let k;return A?y===null||y===ti||y===zi?k=i.DEPTH24_STENCIL8:y===xn?k=i.DEPTH32F_STENCIL8:y===ar&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ti||y===zi?k=i.DEPTH_COMPONENT24:y===xn?k=i.DEPTH_COMPONENT32F:y===ar&&(k=i.DEPTH_COMPONENT16),k}function x(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),L(y),y.isVideoTexture&&u.delete(y)}function P(A){const y=A.target;y.removeEventListener("dispose",P),M(y)}function L(A){const y=n.get(A);if(y.__webglInit===void 0)return;const k=A.source,$=d.get(k);if($){const ie=$[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(A),Object.keys($).length===0&&d.delete(k)}n.remove(A)}function b(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const k=A.source,$=d.get(k);delete $[y.__cacheKey],o.memory.textures--}function M(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let ie=0;ie<y.__webglFramebuffer[$].length;ie++)i.deleteFramebuffer(y.__webglFramebuffer[$][ie]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=A.textures;for(let $=0,ie=k.length;$<ie;$++){const ee=n.get(k[$]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(A)}let D=0;function X(){D=0}function B(){const A=D;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function w(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function V(A,y){const k=n.get(A);if(A.isVideoTexture&&j(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(k,A,y);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function Y(A,y){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Q(k,A,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function te(A,y){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Q(k,A,y);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function q(A,y){const k=n.get(A);if(A.version>0&&k.__version!==A.version){ae(k,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const re={[go]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},ge={[Kt]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[xs]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},xe={[gu]:i.NEVER,[Su]:i.ALWAYS,[_u]:i.LESS,[Ql]:i.LEQUAL,[vu]:i.EQUAL,[Mu]:i.GEQUAL,[xu]:i.GREATER,[yu]:i.NOTEQUAL};function Ie(A,y){if(y.type===xn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===tn||y.magFilter===xs||y.magFilter===vr||y.magFilter===ei||y.minFilter===tn||y.minFilter===xs||y.minFilter===vr||y.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,re[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,re[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,re[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ge[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Kt||y.minFilter!==vr&&y.minFilter!==ei||y.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function je(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const $=y.source;let ie=d.get($);ie===void 0&&(ie={},d.set($,ie));const ee=w(y);if(ee!==A.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ie[ee].usedTimes++;const Re=ie[A.__cacheKey];Re!==void 0&&(ie[A.__cacheKey].usedTimes--,Re.usedTimes===0&&b(y)),A.__cacheKey=ee,A.__webglTexture=ie[ee].texture}return k}function Q(A,y,k){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);const ie=je(A,y),ee=y.source;t.bindTexture($,A.__webglTexture,i.TEXTURE0+k);const Re=n.get(ee);if(ee.version!==Re.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);const fe=Je.getPrimaries(Je.workingColorSpace),ye=y.colorSpace===Ln?null:Je.getPrimaries(y.colorSpace),We=y.colorSpace===Ln||fe===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let oe=E(y.image,!1,r.maxTextureSize);oe=Ae(y,oe);const Ee=s.convert(y.format,y.colorSpace),De=s.convert(y.type);let Ue=S(y.internalFormat,Ee,De,y.colorSpace,y.isVideoTexture);Ie($,y);let Te;const qe=y.mipmaps,ze=y.isVideoTexture!==!0,nt=Re.__version===void 0||ie===!0,N=ee.dataReady,pe=x(y,oe);if(y.isDepthTexture)Ue=v(y.format===ki,y.type),nt&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Ue,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ue,oe.width,oe.height,0,Ee,De,null));else if(y.isDataTexture)if(qe.length>0){ze&&nt&&t.texStorage2D(i.TEXTURE_2D,pe,Ue,qe[0].width,qe[0].height);for(let Z=0,ne=qe.length;Z<ne;Z++)Te=qe[Z],ze?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Te.width,Te.height,Ee,De,Te.data):t.texImage2D(i.TEXTURE_2D,Z,Ue,Te.width,Te.height,0,Ee,De,Te.data);y.generateMipmaps=!1}else ze?(nt&&t.texStorage2D(i.TEXTURE_2D,pe,Ue,oe.width,oe.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Ee,De,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,oe.width,oe.height,0,Ee,De,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ue,qe[0].width,qe[0].height,oe.depth);for(let Z=0,ne=qe.length;Z<ne;Z++)if(Te=qe[Z],y.format!==Zt)if(Ee!==null)if(ze){if(N)if(y.layerUpdates.size>0){const ve=cl(Te.width,Te.height,y.format,y.type);for(const _e of y.layerUpdates){const Oe=Te.data.subarray(_e*ve/Te.data.BYTES_PER_ELEMENT,(_e+1)*ve/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,_e,Te.width,Te.height,1,Ee,Oe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Te.width,Te.height,oe.depth,Ee,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ue,Te.width,Te.height,oe.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Te.width,Te.height,oe.depth,Ee,De,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ue,Te.width,Te.height,oe.depth,0,Ee,De,Te.data)}else{ze&&nt&&t.texStorage2D(i.TEXTURE_2D,pe,Ue,qe[0].width,qe[0].height);for(let Z=0,ne=qe.length;Z<ne;Z++)Te=qe[Z],y.format!==Zt?Ee!==null?ze?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Te.width,Te.height,Ee,De,Te.data):t.texImage2D(i.TEXTURE_2D,Z,Ue,Te.width,Te.height,0,Ee,De,Te.data)}else if(y.isDataArrayTexture)if(ze){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ue,oe.width,oe.height,oe.depth),N)if(y.layerUpdates.size>0){const Z=cl(oe.width,oe.height,y.format,y.type);for(const ne of y.layerUpdates){const ve=oe.data.subarray(ne*Z/oe.data.BYTES_PER_ELEMENT,(ne+1)*Z/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,Ee,De,ve)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,De,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,Ee,De,oe.data);else if(y.isData3DTexture)ze?(nt&&t.texStorage3D(i.TEXTURE_3D,pe,Ue,oe.width,oe.height,oe.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,De,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,Ee,De,oe.data);else if(y.isFramebufferTexture){if(nt)if(ze)t.texStorage2D(i.TEXTURE_2D,pe,Ue,oe.width,oe.height);else{let Z=oe.width,ne=oe.height;for(let ve=0;ve<pe;ve++)t.texImage2D(i.TEXTURE_2D,ve,Ue,Z,ne,0,Ee,De,null),Z>>=1,ne>>=1}}else if(qe.length>0){if(ze&&nt){const Z=ue(qe[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ue,Z.width,Z.height)}for(let Z=0,ne=qe.length;Z<ne;Z++)Te=qe[Z],ze?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ee,De,Te):t.texImage2D(i.TEXTURE_2D,Z,Ue,Ee,De,Te);y.generateMipmaps=!1}else if(ze){if(nt){const Z=ue(oe);t.texStorage2D(i.TEXTURE_2D,pe,Ue,Z.width,Z.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,De,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Ee,De,oe);m(y)&&f($),Re.__version=ee.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ae(A,y,k){if(y.image.length!==6)return;const $=je(A,y),ie=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const ee=n.get(ie);if(ie.version!==ee.__version||$===!0){t.activeTexture(i.TEXTURE0+k);const Re=Je.getPrimaries(Je.workingColorSpace),fe=y.colorSpace===Ln?null:Je.getPrimaries(y.colorSpace),ye=y.colorSpace===Ln||Re===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const We=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let ne=0;ne<6;ne++)!We&&!oe?Ee[ne]=E(y.image[ne],!0,r.maxCubemapSize):Ee[ne]=oe?y.image[ne].image:y.image[ne],Ee[ne]=Ae(y,Ee[ne]);const De=Ee[0],Ue=s.convert(y.format,y.colorSpace),Te=s.convert(y.type),qe=S(y.internalFormat,Ue,Te,y.colorSpace),ze=y.isVideoTexture!==!0,nt=ee.__version===void 0||$===!0,N=ie.dataReady;let pe=x(y,De);Ie(i.TEXTURE_CUBE_MAP,y);let Z;if(We){ze&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,qe,De.width,De.height);for(let ne=0;ne<6;ne++){Z=Ee[ne].mipmaps;for(let ve=0;ve<Z.length;ve++){const _e=Z[ve];y.format!==Zt?Ue!==null?ze?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,_e.width,_e.height,Ue,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,qe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,_e.width,_e.height,Ue,Te,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,qe,_e.width,_e.height,0,Ue,Te,_e.data)}}}else{if(Z=y.mipmaps,ze&&nt){Z.length>0&&pe++;const ne=ue(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee[ne].width,Ee[ne].height,Ue,Te,Ee[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Ee[ne].width,Ee[ne].height,0,Ue,Te,Ee[ne].data);for(let ve=0;ve<Z.length;ve++){const Oe=Z[ve].image[ne].image;ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Oe.width,Oe.height,Ue,Te,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,qe,Oe.width,Oe.height,0,Ue,Te,Oe.data)}}else{ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,Te,Ee[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Ue,Te,Ee[ne]);for(let ve=0;ve<Z.length;ve++){const _e=Z[ve];ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Ue,Te,_e.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,qe,Ue,Te,_e.image[ne])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),ee.__version=ie.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Me(A,y,k,$,ie,ee){const Re=s.convert(k.format,k.colorSpace),fe=s.convert(k.type),ye=S(k.internalFormat,Re,fe,k.colorSpace),We=n.get(y),oe=n.get(k);if(oe.__renderTarget=y,!We.__hasExternalTextures){const Ee=Math.max(1,y.width>>ee),De=Math.max(1,y.height>>ee);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ee,ye,Ee,De,y.depth,0,Re,fe,null):t.texImage2D(ie,ee,ye,Ee,De,0,Re,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),K(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ie,oe.__webglTexture,0,z(y)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ie,oe.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(A,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const $=y.depthTexture,ie=$&&$.isDepthTexture?$.type:null,ee=v(y.stencilBuffer,ie),Re=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=z(y);K(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ee,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ee,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ee,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,A)}else{const $=y.textures;for(let ie=0;ie<$.length;ie++){const ee=$[ie],Re=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),ye=S(ee.internalFormat,Re,fe,ee.colorSpace),We=z(y);k&&K(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,ye,y.width,y.height):K(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,ye,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ye,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const ie=$.__webglTexture,ee=z(y);if(y.depthTexture.format===Ai)K(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(y.depthTexture.format===ki)K(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ve(A){const y=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=$}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ce(y.__webglFramebuffer,A)}else if(k){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),le(y.__webglDepthbuffer[$],A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),le(y.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(A,y,k){const $=n.get(A);y!==void 0&&Me($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ve(A)}function Xe(A){const y=A.texture,k=n.get(A),$=n.get(y);A.addEventListener("dispose",P);const ie=A.textures,ee=A.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++),ee){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let ye=0;ye<y.mipmaps.length;ye++)k.__webglFramebuffer[fe][ye]=i.createFramebuffer()}else k.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)k.__webglFramebuffer[fe]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Re)for(let fe=0,ye=ie.length;fe<ye;fe++){const We=n.get(ie[fe]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&K(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ye=ie[fe];k.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const We=s.convert(ye.format,ye.colorSpace),oe=s.convert(ye.type),Ee=S(ye.internalFormat,We,oe,ye.colorSpace,A.isXRRenderTarget===!0),De=z(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ee,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),le(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)Me(k.__webglFramebuffer[fe][ye],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else Me(k.__webglFramebuffer[fe],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,ye=ie.length;fe<ye;fe++){const We=ie[fe],oe=n.get(We);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),Ie(i.TEXTURE_2D,We),Me(k.__webglFramebuffer,A,We,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(We)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,$.__webglTexture),Ie(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)Me(k.__webglFramebuffer[ye],A,y,i.COLOR_ATTACHMENT0,fe,ye);else Me(k.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,fe,0);m(y)&&f(fe),t.unbindTexture()}A.depthBuffer&&Ve(A)}function H(A){const y=A.textures;for(let k=0,$=y.length;k<$;k++){const ie=y[k];if(m(ie)){const ee=R(A),Re=n.get(ie).__webglTexture;t.bindTexture(ee,Re),f(ee),t.unbindTexture()}}}const J=[],_=[];function I(A){if(A.samples>0){if(K(A)===!1){const y=A.textures,k=A.width,$=A.height;let ie=i.COLOR_BUFFER_BIT;const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(A),fe=y.length>1;if(fe)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const We=n.get(y[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,k,$,0,0,k,$,ie,i.NEAREST),l===!0&&(J.length=0,_.length=0,J.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(J.push(ee),_.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const We=n.get(y[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function z(A){return Math.min(r.maxSamples,A.samples)}function K(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function j(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function Ae(A,y){const k=A.colorSpace,$=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Vi&&k!==Ln&&(Je.getTransfer(k)===et?($!==Zt||ie!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=we,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=K}function Sg(i,e){function t(n,r=Ln){let s;const o=Je.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===na)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===Xl)return i.ALPHA;if(n===ql)return i.RGB;if(n===Zt)return i.RGBA;if(n===Yl)return i.LUMINANCE;if(n===jl)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===sa)return i.RED_INTEGER;if(n===Jl)return i.RG;if(n===oa)return i.RG_INTEGER;if(n===aa)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Yr)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Wr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Wr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===xo||n===yo||n===Mo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===Eo||n===To)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===So||n===Eo)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===To)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bo||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jr||n===zo||n===ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jr)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kl||n===Vo||n===Ho||n===Go)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===jr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:Eg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wg extends Wi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const E=new bg,m=t.getContextAttributes();let f=null,R=null;const S=[],v=[],x=new he;let C=null;const P=new Ut;P.viewport=new tt;const L=new Ut;L.viewport=new tt;const b=[P,L],M=new Xh;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=S[Q];return ae===void 0&&(ae=new Vs,S[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=S[Q];return ae===void 0&&(ae=new Vs,S[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=S[Q];return ae===void 0&&(ae=new Vs,S[Q]=ae),ae.getHandSpace()};function B(Q){const ae=v.indexOf(Q.inputSource);if(ae===-1)return;const Me=S[ae];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,c||o),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function w(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",w),r.removeEventListener("inputsourceschange",V);for(let Q=0;Q<S.length;Q++){const ae=v[Q];ae!==null&&(v[Q]=null,S[Q].disconnect(ae))}D=null,X=null,E.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,R=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",w),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(x),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,le=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?ki:Ai,le=m.stencil?zi:ti);const Ve={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new ni(d.textureWidth,d.textureHeight,{format:Zt,type:En,depthTexture:new dc(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new ni(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:En,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function V(Q){for(let ae=0;ae<Q.removed.length;ae++){const Me=Q.removed[ae],le=v.indexOf(Me);le>=0&&(v[le]=null,S[le].disconnect(Me))}for(let ae=0;ae<Q.added.length;ae++){const Me=Q.added[ae];let le=v.indexOf(Me);if(le===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=v.length){v.push(Me),le=Ve;break}else if(v[Ve]===null){v[Ve]=Me,le=Ve;break}if(le===-1)break}const Ce=S[le];Ce&&Ce.connect(Me)}}const Y=new U,te=new U;function q(Q,ae,Me){Y.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(Me.matrixWorld);const le=Y.distanceTo(te),Ce=ae.projectionMatrix.elements,Ve=Me.projectionMatrix.elements,we=Ce[14]/(Ce[10]-1),Xe=Ce[14]/(Ce[10]+1),H=(Ce[9]+1)/Ce[5],J=(Ce[9]-1)/Ce[5],_=(Ce[8]-1)/Ce[0],I=(Ve[8]+1)/Ve[0],z=we*_,K=we*I,j=le/(-_+I),Ae=j*-_;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ae),Q.translateZ(j),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ce[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ue=we+j,A=Xe+j,y=z-Ae,k=K+(le-Ae),$=H*Xe/A*ue,ie=J*Xe/A*ue;Q.projectionMatrix.makePerspective(y,k,$,ie,ue,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function re(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,Me=Q.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(Me=E.depthFar)),M.near=L.near=P.near=ae,M.far=L.far=P.far=Me,(D!==M.near||X!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,X=M.far),P.layers.mask=Q.layers.mask|2,L.layers.mask=Q.layers.mask|4,M.layers.mask=P.layers.mask|L.layers.mask;const le=Q.parent,Ce=M.cameras;re(M,le);for(let Ve=0;Ve<Ce.length;Ve++)re(Ce[Ve],le);Ce.length===2?q(M,P,L):M.projectionMatrix.copy(P.projectionMatrix),ge(Q,M,le)};function ge(Q,ae,Me){Me===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Wo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(M)};let xe=null;function Ie(Q,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let le=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let we=0;we<Me.length;we++){const Xe=Me[we];let H=null;if(p!==null)H=p.getViewport(Xe);else{const _=h.getViewSubImage(d,Xe);H=_.viewport,we===0&&(e.setRenderTargetTextures(R,_.colorTexture,d.ignoreDepthValues?void 0:_.depthStencilTexture),e.setRenderTarget(R))}let J=b[we];J===void 0&&(J=new Ut,J.layers.enable(we),J.viewport=new tt,b[we]=J),J.matrix.fromArray(Xe.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Xe.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(H.x,H.y,H.width,H.height),we===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(J)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const we=h.getDepthInformation(Me[0]);we&&we.isValid&&we.texture&&E.init(e,we,r.renderState)}}for(let Me=0;Me<S.length;Me++){const le=v[Me],Ce=S[Me];le!==null&&Ce!==void 0&&Ce.update(le,ae,c||o)}xe&&xe(Q,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const je=new Ec;je.setAnimationLoop(Ie),this.setAnimationLoop=function(Q){xe=Q},this.dispose=function(){}}}const qn=new rn,Ag=new it;function Rg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,lc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,R,S,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),E(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,R,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const R=e.get(f),S=R.envMap,v=R.envMapRotation;S&&(m.envMap.value=S,qn.copy(v),qn.x*=-1,qn.y*=-1,qn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(qn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,R,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*R,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,R){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){const R=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Cg(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,S){const v=S.program;n.uniformBlockBinding(R,v)}function c(R,S){let v=r[R.id];v===void 0&&(g(R),v=u(R),r[R.id]=v,R.addEventListener("dispose",m));const x=S.program;n.updateUBOMapping(R,x);const C=e.render.frame;s[R.id]!==C&&(d(R),s[R.id]=C)}function u(R){const S=h();R.__bindingPointIndex=S;const v=i.createBuffer(),x=R.__size,C=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,x,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const S=r[R.id],v=R.uniforms,x=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,P=v.length;C<P;C++){const L=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,M=L.length;b<M;b++){const D=L[b];if(p(D,C,b,x)===!0){const X=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let w=0;for(let V=0;V<B.length;V++){const Y=B[V],te=E(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,X+w,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,w),w+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,S,v,x){const C=R.value,P=S+"_"+v;if(x[P]===void 0)return typeof C=="number"||typeof C=="boolean"?x[P]=C:x[P]=C.clone(),!0;{const L=x[P];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return x[P]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(R){const S=R.uniforms;let v=0;const x=16;for(let P=0,L=S.length;P<L;P++){const b=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,D=b.length;M<D;M++){const X=b[M],B=Array.isArray(X.value)?X.value:[X.value];for(let w=0,V=B.length;w<V;w++){const Y=B[w],te=E(Y),q=v%x,re=q%te.boundary,ge=q+re;v+=re,ge!==0&&x-ge<te.storage&&(v+=x-ge),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=te.storage}}}const C=v%x;return C>0&&(v+=x-C),R.__size=v,R.__cache={},this}function E(R){const S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function m(R){const S=R.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Pg{constructor(e={}){const{canvas:t=Tu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),E=new Int32Array(4);let m=null,f=null;const R=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Nn,this.toneMappingExposure=1;const v=this;let x=!1,C=0,P=0,L=null,b=-1,M=null;const D=new tt,X=new tt;let B=null;const w=new Ge(0);let V=0,Y=t.width,te=t.height,q=1,re=null,ge=null;const xe=new tt(0,0,Y,te),Ie=new tt(0,0,Y,te);let je=!1;const Q=new ua;let ae=!1,Me=!1;this.transmissionResolutionScale=1;const le=new it,Ce=new it,Ve=new U,we=new tt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let H=!1;function J(){return L===null?q:1}let _=n;function I(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ta}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",_e,!1),_===null){const F="webgl2";if(_=I(F,T),_===null)throw I(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let z,K,j,Ae,ue,A,y,k,$,ie,ee,Re,fe,ye,We,oe,Ee,De,Ue,Te,qe,ze,nt,N;function pe(){z=new kp(_),z.init(),ze=new Sg(_,z),K=new Ip(_,z,e,ze),j=new yg(_,z),K.reverseDepthBuffer&&d&&j.buffers.depth.setReversed(!0),Ae=new Gp(_),ue=new ag,A=new Mg(_,z,j,ue,K,ze,Ae),y=new Np(v),k=new zp(v),$=new jh(_),nt=new Lp(_,$),ie=new Vp(_,$,Ae,nt),ee=new Xp(_,ie,$,Ae),Ue=new Wp(_,K,A),oe=new Up(ue),Re=new og(v,y,k,z,K,nt,oe),fe=new Rg(v,ue),ye=new cg,We=new mg(z),De=new Pp(v,y,k,j,ee,p,l),Ee=new vg(v,ee,K),N=new Cg(_,Ae,K,j),Te=new Dp(_,z,Ae),qe=new Hp(_,z,Ae),Ae.programs=Re.programs,v.capabilities=K,v.extensions=z,v.properties=ue,v.renderLists=ye,v.shadowMap=Ee,v.state=j,v.info=Ae}pe();const Z=new wg(v,_);this.xr=Z,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const T=z.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=z.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(Y,te,!1))},this.getSize=function(T){return T.set(Y,te)},this.setSize=function(T,F,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,te=F,t.width=Math.floor(T*q),t.height=Math.floor(F*q),G===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Y*q,te*q).floor()},this.setDrawingBufferSize=function(T,F,G){Y=T,te=F,q=G,t.width=Math.floor(T*G),t.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,F,G,W){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,F,G,W),j.viewport(D.copy(xe).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,F,G,W){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,F,G,W),j.scissor(X.copy(Ie).multiplyScalar(q).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(T){j.setScissorTest(je=T)},this.setOpaqueSort=function(T){re=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,G=!0){let W=0;if(T){let O=!1;if(L!==null){const se=L.texture.format;O=se===aa||se===oa||se===sa}if(O){const se=L.texture.type,me=se===En||se===ti||se===ar||se===zi||se===ia||se===ra,Se=De.getClearColor(),be=De.getClearAlpha(),Ne=Se.r,Fe=Se.g,Pe=Se.b;me?(g[0]=Ne,g[1]=Fe,g[2]=Pe,g[3]=be,_.clearBufferuiv(_.COLOR,0,g)):(E[0]=Ne,E[1]=Fe,E[2]=Pe,E[3]=be,_.clearBufferiv(_.COLOR,0,E))}else W|=_.COLOR_BUFFER_BIT}F&&(W|=_.DEPTH_BUFFER_BIT),G&&(W|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),De.dispose(),ye.dispose(),We.dispose(),ue.dispose(),y.dispose(),k.dispose(),ee.dispose(),nt.dispose(),N.dispose(),Re.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Sa),Z.removeEventListener("sessionend",Ea),zn.stop()};function ne(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=Ae.autoReset,F=Ee.enabled,G=Ee.autoUpdate,W=Ee.needsUpdate,O=Ee.type;pe(),Ae.autoReset=T,Ee.enabled=F,Ee.autoUpdate=G,Ee.needsUpdate=W,Ee.type=O}function _e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Oe(T){const F=T.target;F.removeEventListener("dispose",Oe),ot(F)}function ot(T){yt(T),ue.remove(T)}function yt(T){const F=ue.get(T).programs;F!==void 0&&(F.forEach(function(G){Re.releaseProgram(G)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,W,O,se){F===null&&(F=Xe);const me=O.isMesh&&O.matrixWorld.determinant()<0,Se=Lc(T,F,G,W,O);j.setMaterial(W,me);let be=G.index,Ne=1;if(W.wireframe===!0){if(be=ie.getWireframeAttribute(G),be===void 0)return;Ne=2}const Fe=G.drawRange,Pe=G.attributes.position;let Ye=Fe.start*Ne,Ke=(Fe.start+Fe.count)*Ne;se!==null&&(Ye=Math.max(Ye,se.start*Ne),Ke=Math.min(Ke,(se.start+se.count)*Ne)),be!==null?(Ye=Math.max(Ye,0),Ke=Math.min(Ke,be.count)):Pe!=null&&(Ye=Math.max(Ye,0),Ke=Math.min(Ke,Pe.count));const ht=Ke-Ye;if(ht<0||ht===1/0)return;nt.setup(O,W,Se,G,be);let at,Ze=Te;if(be!==null&&(at=$.get(be),Ze=qe,Ze.setIndex(at)),O.isMesh)W.wireframe===!0?(j.setLineWidth(W.wireframeLinewidth*J()),Ze.setMode(_.LINES)):Ze.setMode(_.TRIANGLES);else if(O.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),j.setLineWidth(Le*J()),O.isLineSegments?Ze.setMode(_.LINES):O.isLineLoop?Ze.setMode(_.LINE_LOOP):Ze.setMode(_.LINE_STRIP)}else O.isPoints?Ze.setMode(_.POINTS):O.isSprite&&Ze.setMode(_.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Yn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,_t=O._multiDrawCounts,$e=O._multiDrawCount,Wt=be?$.get(be).bytesPerElement:1,ri=ue.get(W).currentProgram.getUniforms();for(let Lt=0;Lt<$e;Lt++)ri.setValue(_,"_gl_DrawID",Lt),Ze.render(Le[Lt]/Wt,_t[Lt])}else if(O.isInstancedMesh)Ze.renderInstances(Ye,ht,O.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,Le);Ze.renderInstances(Ye,ht,_t)}else Ze.render(Ye,ht)};function Qe(T,F,G){T.transparent===!0&&T.side===vn&&T.forceSinglePass===!1?(T.side=Ct,T.needsUpdate=!0,_r(T,F,G),T.side=On,T.needsUpdate=!0,_r(T,F,G),T.side=vn):_r(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),f=We.get(G),f.init(F),S.push(f),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const W=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let me=0;me<se.length;me++){const Se=se[me];Qe(Se,G,O),W.add(Se)}else Qe(se,G,O),W.add(se)}),f=S.pop(),W},this.compileAsync=function(T,F,G=null){const W=this.compile(T,F,G);return new Promise(O=>{function se(){if(W.forEach(function(me){ue.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){O(T);return}setTimeout(se,10)}z.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Gt=null;function an(T){Gt&&Gt(T)}function Sa(){zn.stop()}function Ea(){zn.start()}const zn=new Ec;zn.setAnimationLoop(an),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(T){Gt=T,Z.setAnimationLoop(T),T===null?zn.stop():zn.start()},Z.addEventListener("sessionstart",Sa),Z.addEventListener("sessionend",Ea),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,L),f=We.get(T,S.length),f.init(F),S.push(f),Ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(Ce),Me=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,Me),m=ye.get(T,R.length),m.init(),R.push(m),Z.enabled===!0&&Z.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&_s(se,F,-1/0,v.sortObjects)}_s(T,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,ge),H=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,H&&De.addToRenderList(m,T),this.info.render.frame++,ae===!0&&oe.beginShadows();const G=f.state.shadowsArray;Ee.render(G,T,F),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){const se=F.cameras;if(O.length>0)for(let me=0,Se=se.length;me<Se;me++){const be=se[me];ba(W,O,T,be)}H&&De.render(T);for(let me=0,Se=se.length;me<Se;me++){const be=se[me];Ta(m,T,be,be.viewport)}}else O.length>0&&ba(W,O,T,F),H&&De.render(T),Ta(m,T,F);L!==null&&P===0&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(v,T,F),nt.resetDefaultState(),b=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],ae===!0&&oe.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function _s(T,F,G,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){W&&we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ce);const me=ee.update(T),Se=T.material;Se.visible&&m.push(T,me,Se,G,we.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const me=ee.update(T),Se=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),we.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),we.copy(me.boundingSphere.center)),we.applyMatrix4(T.matrixWorld).applyMatrix4(Ce)),Array.isArray(Se)){const be=me.groups;for(let Ne=0,Fe=be.length;Ne<Fe;Ne++){const Pe=be[Ne],Ye=Se[Pe.materialIndex];Ye&&Ye.visible&&m.push(T,me,Ye,G,we.z,Pe)}}else Se.visible&&m.push(T,me,Se,G,we.z,null)}}const se=T.children;for(let me=0,Se=se.length;me<Se;me++)_s(se[me],F,G,W)}function Ta(T,F,G,W){const O=T.opaque,se=T.transmissive,me=T.transparent;f.setupLightsView(G),ae===!0&&oe.setGlobalState(v.clippingPlanes,G),W&&j.viewport(D.copy(W)),O.length>0&&gr(O,F,G),se.length>0&&gr(se,F,G),me.length>0&&gr(me,F,G),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ba(T,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new ni(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?dr:En,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=f.state.transmissionRenderTarget[W.id],me=W.viewport||D;se.setSize(me.z*v.transmissionResolutionScale,me.w*v.transmissionResolutionScale);const Se=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(w),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),H&&De.render(G);const be=v.toneMapping;v.toneMapping=Nn;const Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ae===!0&&oe.setGlobalState(v.clippingPlanes,W),gr(T,G,W),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),z.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Pe=0,Ye=F.length;Pe<Ye;Pe++){const Ke=F[Pe],ht=Ke.object,at=Ke.geometry,Ze=Ke.material,Le=Ke.group;if(Ze.side===vn&&ht.layers.test(W.layers)){const _t=Ze.side;Ze.side=Ct,Ze.needsUpdate=!0,wa(ht,G,W,at,Ze,Le),Ze.side=_t,Ze.needsUpdate=!0,Fe=!0}}Fe===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}v.setRenderTarget(Se),v.setClearColor(w,V),Ne!==void 0&&(W.viewport=Ne),v.toneMapping=be}function gr(T,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,se=T.length;O<se;O++){const me=T[O],Se=me.object,be=me.geometry,Ne=W===null?me.material:W,Fe=me.group;Se.layers.test(G.layers)&&wa(Se,F,G,be,Ne,Fe)}}function wa(T,F,G,W,O,se){T.onBeforeRender(v,F,G,W,O,se),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,F,G,W,T,se),O.transparent===!0&&O.side===vn&&O.forceSinglePass===!1?(O.side=Ct,O.needsUpdate=!0,v.renderBufferDirect(G,F,W,O,T,se),O.side=On,O.needsUpdate=!0,v.renderBufferDirect(G,F,W,O,T,se),O.side=vn):v.renderBufferDirect(G,F,W,O,T,se),T.onAfterRender(v,F,G,W,O,se)}function _r(T,F,G){F.isScene!==!0&&(F=Xe);const W=ue.get(T),O=f.state.lights,se=f.state.shadowsArray,me=O.state.version,Se=Re.getParameters(T,O.state,se,F,G),be=Re.getProgramCacheKey(Se);let Ne=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?k:y).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Oe),Ne=new Map,W.programs=Ne);let Fe=Ne.get(be);if(Fe!==void 0){if(W.currentProgram===Fe&&W.lightsStateVersion===me)return Ra(T,Se),Fe}else Se.uniforms=Re.getUniforms(T),T.onBeforeCompile(Se,v),Fe=Re.acquireProgram(Se,be),Ne.set(be,Fe),W.uniforms=Se.uniforms;const Pe=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),Ra(T,Se),W.needsLights=Ic(T),W.lightsStateVersion=me,W.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Fe,W.uniformsList=null,Fe}function Aa(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Jr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ra(T,F){const G=ue.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Lc(T,F,G,W,O){F.isScene!==!0&&(F=Xe),A.resetTextureUnits();const se=F.fog,me=W.isMeshStandardMaterial?F.environment:null,Se=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Vi,be=(W.isMeshStandardMaterial?k:y).get(W.envMap||me),Ne=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!G.morphAttributes.position,Ye=!!G.morphAttributes.normal,Ke=!!G.morphAttributes.color;let ht=Nn;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ht=v.toneMapping);const at=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=at!==void 0?at.length:0,Le=ue.get(W),_t=f.state.lights;if(ae===!0&&(Me===!0||T!==M)){const Et=T===M&&W.id===b;oe.setState(W,T,Et)}let $e=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==_t.state.version||Le.outputColorSpace!==Se||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==be||W.fog===!0&&Le.fog!==se||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==Ne||Le.vertexTangents!==Fe||Le.morphTargets!==Pe||Le.morphNormals!==Ye||Le.morphColors!==Ke||Le.toneMapping!==ht||Le.morphTargetsCount!==Ze)&&($e=!0):($e=!0,Le.__version=W.version);let Wt=Le.currentProgram;$e===!0&&(Wt=_r(W,F,O));let ri=!1,Lt=!1,Zi=!1;const rt=Wt.getUniforms(),Nt=Le.uniforms;if(j.useProgram(Wt.program)&&(ri=!0,Lt=!0,Zi=!0),W.id!==b&&(b=W.id,Lt=!0),ri||M!==T){j.buffers.depth.getReversed()?(le.copy(T.projectionMatrix),wu(le),Au(le),rt.setValue(_,"projectionMatrix",le)):rt.setValue(_,"projectionMatrix",T.projectionMatrix),rt.setValue(_,"viewMatrix",T.matrixWorldInverse);const wt=rt.map.cameraPosition;wt!==void 0&&wt.setValue(_,Ve.setFromMatrixPosition(T.matrixWorld)),K.logarithmicDepthBuffer&&rt.setValue(_,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&rt.setValue(_,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Lt=!0,Zi=!0)}if(O.isSkinnedMesh){rt.setOptional(_,O,"bindMatrix"),rt.setOptional(_,O,"bindMatrixInverse");const Et=O.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),rt.setValue(_,"boneTexture",Et.boneTexture,A))}O.isBatchedMesh&&(rt.setOptional(_,O,"batchingTexture"),rt.setValue(_,"batchingTexture",O._matricesTexture,A),rt.setOptional(_,O,"batchingIdTexture"),rt.setValue(_,"batchingIdTexture",O._indirectTexture,A),rt.setOptional(_,O,"batchingColorTexture"),O._colorsTexture!==null&&rt.setValue(_,"batchingColorTexture",O._colorsTexture,A));const Ft=G.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&Ue.update(O,G,Wt),(Lt||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,rt.setValue(_,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Nt.envMap.value=be,Nt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Nt.envMapIntensity.value=F.environmentIntensity),Lt&&(rt.setValue(_,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&Dc(Nt,Zi),se&&W.fog===!0&&fe.refreshFogUniforms(Nt,se),fe.refreshMaterialUniforms(Nt,W,q,te,f.state.transmissionRenderTarget[T.id]),Jr.upload(_,Aa(Le),Nt,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Jr.upload(_,Aa(Le),Nt,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&rt.setValue(_,"center",O.center),rt.setValue(_,"modelViewMatrix",O.modelViewMatrix),rt.setValue(_,"normalMatrix",O.normalMatrix),rt.setValue(_,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Et=W.uniformsGroups;for(let wt=0,vs=Et.length;wt<vs;wt++){const kn=Et[wt];N.update(kn,Wt),N.bind(kn,Wt)}}return Wt}function Dc(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ic(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,F,G){ue.get(T.texture).__webglTexture=F,ue.get(T.depthTexture).__webglTexture=G;const W=ue.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const G=ue.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const Uc=_.createFramebuffer();this.setRenderTarget=function(T,F=0,G=0){L=T,C=F,P=G;let W=!0,O=null,se=!1,me=!1;if(T){const be=ue.get(T);if(be.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(_.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(be.__hasExternalTextures)A.rebindTextures(T,ue.get(T.texture).__webglTexture,ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pe=T.depthTexture;if(be.__boundDepthTexture!==Pe){if(Pe!==null&&ue.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const Fe=ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?O=Fe[F][G]:O=Fe[F],se=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?O=ue.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[G]:O=Fe,D.copy(T.viewport),X.copy(T.scissor),B=T.scissorTest}else D.copy(xe).multiplyScalar(q).floor(),X.copy(Ie).multiplyScalar(q).floor(),B=je;if(G!==0&&(O=Uc),j.bindFramebuffer(_.FRAMEBUFFER,O)&&W&&j.drawBuffers(T,O),j.viewport(D),j.scissor(X),j.setScissorTest(B),se){const be=ue.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,G)}else if(me){const be=ue.get(T.texture),Ne=F;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,be.__webglTexture,G,Ne)}else if(T!==null&&G!==0){const be=ue.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,be.__webglTexture,G)}b=-1},this.readRenderTargetPixels=function(T,F,G,W,O,se,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){j.bindFramebuffer(_.FRAMEBUFFER,Se);try{const be=T.texture,Ne=be.format,Fe=be.type;if(!K.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&G>=0&&G<=T.height-O&&_.readPixels(F,G,W,O,ze.convert(Ne),ze.convert(Fe),se)}finally{const be=L!==null?ue.get(L).__webglFramebuffer:null;j.bindFramebuffer(_.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,W,O,se,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){const be=T.texture,Ne=be.format,Fe=be.type;if(!K.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-W&&G>=0&&G<=T.height-O){j.bindFramebuffer(_.FRAMEBUFFER,Se);const Pe=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Pe),_.bufferData(_.PIXEL_PACK_BUFFER,se.byteLength,_.STREAM_READ),_.readPixels(F,G,W,O,ze.convert(Ne),ze.convert(Fe),0);const Ye=L!==null?ue.get(L).__webglFramebuffer:null;j.bindFramebuffer(_.FRAMEBUFFER,Ye);const Ke=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await bu(_,Ke,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Pe),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,se),_.deleteBuffer(Pe),_.deleteSync(Ke),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,G=0){T.isTexture!==!0&&(Yn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(T.image.width*W),se=Math.floor(T.image.height*W),me=F!==null?F.x:0,Se=F!==null?F.y:0;A.setTexture2D(T,0),_.copyTexSubImage2D(_.TEXTURE_2D,G,0,0,me,Se,O,se),j.unbindTexture()};const Nc=_.createFramebuffer(),Fc=_.createFramebuffer();this.copyTextureToTexture=function(T,F,G=null,W=null,O=0,se=null){T.isTexture!==!0&&(Yn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],F=arguments[2],se=arguments[3]||0,G=null),se===null&&(O!==0?(Yn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=O,O=0):se=0);let me,Se,be,Ne,Fe,Pe,Ye,Ke,ht;const at=T.isCompressedTexture?T.mipmaps[se]:T.image;if(G!==null)me=G.max.x-G.min.x,Se=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,Ne=G.min.x,Fe=G.min.y,Pe=G.isBox3?G.min.z:0;else{const Ft=Math.pow(2,-O);me=Math.floor(at.width*Ft),Se=Math.floor(at.height*Ft),T.isDataArrayTexture?be=at.depth:T.isData3DTexture?be=Math.floor(at.depth*Ft):be=1,Ne=0,Fe=0,Pe=0}W!==null?(Ye=W.x,Ke=W.y,ht=W.z):(Ye=0,Ke=0,ht=0);const Ze=ze.convert(F.format),Le=ze.convert(F.type);let _t;F.isData3DTexture?(A.setTexture3D(F,0),_t=_.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),_t=_.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),_t=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,F.unpackAlignment);const $e=_.getParameter(_.UNPACK_ROW_LENGTH),Wt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),ri=_.getParameter(_.UNPACK_SKIP_PIXELS),Lt=_.getParameter(_.UNPACK_SKIP_ROWS),Zi=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,at.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,at.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ne),_.pixelStorei(_.UNPACK_SKIP_ROWS,Fe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Pe);const rt=T.isDataArrayTexture||T.isData3DTexture,Nt=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Ft=ue.get(T),Et=ue.get(F),wt=ue.get(Ft.__renderTarget),vs=ue.get(Et.__renderTarget);j.bindFramebuffer(_.READ_FRAMEBUFFER,wt.__webglFramebuffer),j.bindFramebuffer(_.DRAW_FRAMEBUFFER,vs.__webglFramebuffer);for(let kn=0;kn<be;kn++)rt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ue.get(T).__webglTexture,O,Pe+kn),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ue.get(F).__webglTexture,se,ht+kn)),_.blitFramebuffer(Ne,Fe,me,Se,Ye,Ke,me,Se,_.DEPTH_BUFFER_BIT,_.NEAREST);j.bindFramebuffer(_.READ_FRAMEBUFFER,null),j.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(O!==0||T.isRenderTargetTexture||ue.has(T)){const Ft=ue.get(T),Et=ue.get(F);j.bindFramebuffer(_.READ_FRAMEBUFFER,Nc),j.bindFramebuffer(_.DRAW_FRAMEBUFFER,Fc);for(let wt=0;wt<be;wt++)rt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ft.__webglTexture,O,Pe+wt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ft.__webglTexture,O),Nt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Et.__webglTexture,se,ht+wt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Et.__webglTexture,se),O!==0?_.blitFramebuffer(Ne,Fe,me,Se,Ye,Ke,me,Se,_.COLOR_BUFFER_BIT,_.NEAREST):Nt?_.copyTexSubImage3D(_t,se,Ye,Ke,ht+wt,Ne,Fe,me,Se):_.copyTexSubImage2D(_t,se,Ye,Ke,Ne,Fe,me,Se);j.bindFramebuffer(_.READ_FRAMEBUFFER,null),j.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Nt?T.isDataTexture||T.isData3DTexture?_.texSubImage3D(_t,se,Ye,Ke,ht,me,Se,be,Ze,Le,at.data):F.isCompressedArrayTexture?_.compressedTexSubImage3D(_t,se,Ye,Ke,ht,me,Se,be,Ze,at.data):_.texSubImage3D(_t,se,Ye,Ke,ht,me,Se,be,Ze,Le,at):T.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,se,Ye,Ke,me,Se,Ze,Le,at.data):T.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,se,Ye,Ke,at.width,at.height,Ze,at.data):_.texSubImage2D(_.TEXTURE_2D,se,Ye,Ke,me,Se,Ze,Le,at);_.pixelStorei(_.UNPACK_ROW_LENGTH,$e),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Wt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,ri),_.pixelStorei(_.UNPACK_SKIP_ROWS,Lt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Zi),se===0&&F.generateMipmaps&&_.generateMipmap(_t),j.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G=null,W=null,O=0){return T.isTexture!==!0&&(Yn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0),Yn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,G,W,O)},this.initRenderTarget=function(T){ue.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),j.unbindTexture()},this.resetState=function(){C=0,P=0,L=null,j.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class Lg extends va{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new kh(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new Dg(e)}}class Dg{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=Ig(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function Ig(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=Ug(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function Ug(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new qh;let a,l,c,u,h,d,p,g;if(s.o){const E=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,f=E.length;m<f;)switch(E[m++]){case"m":a=E[m++]*e+t,l=E[m++]*e+n,o.moveTo(a,l);break;case"l":a=E[m++]*e+t,l=E[m++]*e+n,o.lineTo(a,l);break;case"q":c=E[m++]*e+t,u=E[m++]*e+n,h=E[m++]*e+t,d=E[m++]*e+n,o.quadraticCurveTo(h,d,c,u);break;case"b":c=E[m++]*e+t,u=E[m++]*e+n,h=E[m++]*e+t,d=E[m++]*e+n,p=E[m++]*e+t,g=E[m++]*e+n,o.bezierCurveTo(h,d,p,g,c,u);break}}return{offsetX:s.ha*e,path:o}}class Ul extends ga{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}let vt,nn,gn,ct=null,Mn=null,Pi=10,_n=null;const rs=-650,Kr=0,Ng=2.4;let Ma=0,hr=!0,Ko=!1,Nl=0;const $o=16;let ss=null,os=null,sr,Li,Di,Ii,Fn,mn=null,as=!1,ce=null,kt=!1,$r=0,Pn=0,Fl=0;const Fg=600;let ls=0,Rt=!1,cs=0,Ui=[],Qo=performance.now();const Qt={graphite:{name:"Graphite Executive",badge:"Graphite",icon:"🔘",accent:"#94a3b8",bg:921621,fog:1316638,ambientColor:14870768,ambientIntensity:1.05,leftColor:16317180,leftIntensity:2.3,rightColor:6583435,rightIntensity:2.1,topColor:16777215,topIntensity:2.4,auraColor:3718648,auraIntensity:2.4,textMat:{color:14410216,emissive:1316896,roughness:.16,metalness:.82,clearcoat:1},starColor:13621468,sassyQuote:"Graphite Executive. Sleek, matte, and undeniably more competent than management.",sassyQuotes:["Graphite Executive. Sleek, matte, and undeniably more competent than management.","Graphite Precision. Aerospace-grade styling for people who pretend to write clean code.","Graphite Titanium. Minimalist luxury for those who charge $200/hr for CSS changes.","Graphite Edition. Understated, razor-sharp, and intimidatingly professional."]},obsidian:{name:"Obsidian Void",badge:"Void",icon:"🌑",accent:"#ffffff",bg:0,fog:0,ambientColor:16777215,ambientIntensity:.9,leftColor:16777215,leftIntensity:1.8,rightColor:16777215,rightIntensity:1.8,topColor:16777215,topIntensity:1.4,auraColor:16777215,auraIntensity:1.5,textMat:{color:16777215,emissive:2039583,roughness:.18,metalness:.05,clearcoat:.9},starColor:16777215,sassyQuote:"Obsidian Void. Pitch black, just like your career prospects.",sassyQuotes:["Obsidian Void. Pitch black, just like your career prospects.","Obsidian Void. Deep dark void, perfectly matching your sense of humor.","Obsidian Void. The color of your soul after a Monday standup."]},crimson:{name:"Crimson Velvet",badge:"Crimson",icon:"🍷",accent:"#ff3366",bg:786692,fog:1180166,ambientColor:16770540,ambientIntensity:.85,leftColor:16724838,leftIntensity:2.2,rightColor:10027059,rightIntensity:2,topColor:16737928,topIntensity:1.6,auraColor:16720469,auraIntensity:3.2,textMat:{color:16764117,emissive:3342352,roughness:.15,metalness:.1,clearcoat:1},starColor:16742297,sassyQuote:"Crimson Velvet. Seductive ruby red. Did your code crash production again?",sassyQuotes:["Crimson Velvet. Seductive ruby red. Did your code crash production again?","Crimson Velvet. Spicy and dramatic. Don’t burn your fragile fingers.","Crimson Velvet. As red as the unread notifications you’re actively avoiding."]},cyber:{name:"Cyber Amour",badge:"Cyber",icon:"💜",accent:"#bd00ff",bg:262411,fog:459282,ambientColor:14743551,ambientIntensity:.8,leftColor:58879,leftIntensity:2.2,rightColor:12386559,rightIntensity:2.2,topColor:16711884,topIntensity:1.6,auraColor:10289407,auraIntensity:3,textMat:{color:15791615,emissive:1703987,roughness:.12,metalness:.15,clearcoat:1},starColor:61695,sassyQuote:"Cyber Amour. Neon purple. You definitely listen to synthwave while writing 0 code.",sassyQuotes:["Cyber Amour. Neon purple. You definitely listen to synthwave while writing 0 code.","Cyber Amour. Neon club vibes! Way too cool for your daily reality.","Cyber Amour. Aesthetic 10/10, actual life stability 2/10."]},gold:{name:"Liquid Gold",badge:"Gold",icon:"⚜️",accent:"#e5b95f",bg:525826,fog:985859,ambientColor:16775399,ambientIntensity:.9,leftColor:16769154,leftIntensity:2.2,rightColor:13933111,rightIntensity:2,topColor:16773299,topIntensity:1.6,auraColor:16758605,auraIntensity:3,textMat:{color:16774102,emissive:3022341,roughness:.14,metalness:.35,clearcoat:1},starColor:16770431,sassyQuote:"Liquid Gold. Champagne luxury for someone with $4.17 in their savings account.",sassyQuotes:["Liquid Gold. Champagne luxury for someone with $4.17 in their savings account.","Liquid Gold. Look at you feeling rich while your card gets declined at Subway.","Liquid Gold. Looks expensive, unlike your hourly wage."]},graffiti:{name:"Graffiti Studio",badge:"Graffiti",icon:"🎨",accent:"#00f0ff",bg:855314,fog:1184282,ambientColor:16777215,ambientIntensity:.95,leftColor:61695,leftIntensity:2.4,rightColor:16711765,rightIntensity:2.2,topColor:16770560,topIntensity:2.2,auraColor:12386559,auraIntensity:3.2,textMat:{color:15793652,emissive:8755,roughness:.18,metalness:.45,clearcoat:.9},starColor:61695,sassyQuote:"Graffiti Studio. Raw street art meets high-voltage neo-brutalism.",sassyQuotes:["Graffiti Studio. Raw street art meets high-voltage neo-brutalism.","Graffiti Edition. Spray paint drips, neon stencils, and absolute creative chaos.","Graffiti Studio. Digital street culture curated with executive finesse."]}};let on="graphite";const Jn=[{id:"employee1",name:"Sathwik",role:"Founder & Head of Drama",normalPhoto:"images/employee1-normal.jpg",roastPhoto:"images/employee1-roast.jpg",roast:"Built this whole website just to avoid replying to messages.",sound:"goat",fallbackNormal:"/photos/sathwik.jpg",fallbackRoast:"/team/sarcastic/sathwik.jpeg"},{id:"employee2",name:"Sathesh kumar",role:"Chief Bug Creator",normalPhoto:"images/employee2-normal.jpg",roastPhoto:"images/employee2-roast.jpg",roast:"Writes 2 lines of code, causes 15 errors, and blames the Wi-Fi.",sound:"cat",fallbackNormal:"/photos/sathesh.jpg",fallbackRoast:"/team/sarcastic/sathesh.png"},{id:"employee3",name:"Vamsi",role:"Non-Stop Yapper & Cringe Comedian 🎙️",normalPhoto:"images/employee3-normal.jpg",roastPhoto:"images/employee3-roast.jpg",roast:"Never shuts his mouth and tells the worst jokes in human history.",sound:"duck",fallbackNormal:"/photos/vamsi.jpg",fallbackRoast:"/team/sarcastic/vamsi.jpeg"},{id:"employee4",name:"Ashwini",role:"Merge Conflict Queen",normalPhoto:"images/employee4-normal.jpg",roastPhoto:"images/employee4-roast.jpg",roast:"Tries to merge two simple branches, but ends up breaking git itself.",sound:"chicken",fallbackNormal:"/photos/amrutha.jpg",fallbackRoast:"/team/sarcastic/ashwini.jpeg"},{id:"employee5",name:"viswanath",role:"Simulation Lead & Demo Destroyer 💥",normalPhoto:"images/employee5-normal.jpg",roastPhoto:"images/employee5-roast.jpg",roast:"Spends weeks building simulations. Crashes the exact second the demo starts.",sound:"owl",fallbackNormal:"/photos/viswanath.jpg",fallbackRoast:"/team/sarcastic/viswanath.jpeg"},{id:"employee6",name:"steel Binde",role:"High BP & Salty Queen 🧂",normalPhoto:"images/employee6-normal.jpg",roastPhoto:"images/employee6-roast.jpg",roast:"Eats extra salt just to stay angry. One tiny bug and her blood pressure shoots to outer space.",sound:"cow",fallbackNormal:"/photos/bindu.jpg",fallbackRoast:"/team/sarcastic/steelbinde.jpeg"},{id:"employee7",name:"Aakash",role:"Master of Procrastination",normalPhoto:"images/employee7-normal.jpg",roastPhoto:"images/employee7-roast.jpg",roast:"Starts working 5 minutes before the deadline and calls it 'passion'.",sound:"monkey",fallbackNormal:"/photos/aakash.jpg",fallbackRoast:"/team/sarcastic/aakash.jpeg"},{id:"employee8",name:"harshith",role:"Pixel Perfectionist (Blind) 🔍",normalPhoto:"images/employee8-normal.jpg",roastPhoto:"images/employee8-roast.jpg",roast:"Spends 5 days adjusting a 1px border that nobody in the world will ever notice.",sound:"cat",fallbackNormal:"/photos/harshith.jpg",fallbackRoast:"/team/sarcastic/harshith.jpeg"},{id:"employee9",name:"Harshitha",role:"Tire Pressure Destroyer 🛞",normalPhoto:"images/employee9-normal.jpg",roastPhoto:"images/employee9-roast.jpg",roast:"Google Maps doesn’t calculate her route… It calculates the bridge load capacity 😂",sound:"cow",fallbackNormal:"/photos/harshitha.jpg",fallbackRoast:"/team/sarcastic/harshitha.jpeg"},{id:"employee10",name:"Muni sankar",role:"Monaaa’s #1 Fan 💖",normalPhoto:"images/employee10-normal.jpg",roastPhoto:"images/employee10-roast.jpg",roast:"Types code with one hand while writing love letters to Monaaa with the other.",sound:"frog",fallbackNormal:"/photos/muni sankar.jpg",fallbackRoast:"/team/sarcastic/munisankar.jpeg"},{id:"employee11",name:"Hema sri",role:"Sephora VIP Ambassador 💄",normalPhoto:"images/employee11-normal.jpg",roastPhoto:"images/employee11-roast.jpg",roast:"Spends 2 hours putting on makeup for a 3-minute meeting where everyone has their camera turned off.",sound:"lion",fallbackNormal:"/photos/hema.jpg",fallbackRoast:"/team/sarcastic/hemasri.jpeg"}];window.employees=Jn;const ea={sathwik:{name:"Sathwik",role:"Founder & Head of Drama",sound:"goat",soundLabel:"🐐 Screaming Goat",realPhoto:"/team/sathwik.jpeg",sarcasticPhoto:"/team/sarcastic/sathwik.jpeg",roast:"Built this whole website just to avoid replying to messages."},sathesh:{name:"Sathesh kumar",role:"Chief Bug Creator",sound:"cat",soundLabel:"🐱 Drama Cat",realPhoto:"/team/sathesh.png",sarcasticPhoto:"/team/sarcastic/sathesh.png",roast:"Writes 2 lines of code, causes 15 errors, and blames the Wi-Fi."},vamsi:{name:"Vamsi",role:"Non-Stop Yapper & Cringe Comedian 🎙️",sound:"duck",soundLabel:"🦆 Sarcastic Quack",realPhoto:"/team/vamsi.jpeg",sarcasticPhoto:"/team/sarcastic/vamsi.jpeg",roast:`Never shuts his mouth and tells the worst jokes in human history.
Even the Wi-Fi disconnects just to escape his humor.`},ashwini:{name:"Ashwini",role:"Merge Conflict Queen",sound:"chicken",soundLabel:"🐔 Panicking Chicken",realPhoto:"/team/ashwini.jpeg",sarcasticPhoto:"/team/sarcastic/ashwini.jpeg",roast:"Tries to merge two simple branches, but by the end, the whole team has to fix both the code and her."},viswanath:{name:"viswanath",role:"Simulation Lead & Demo Destroyer 💥",sound:"owl",soundLabel:"🦉 Quantum Owl",realPhoto:"/team/viswanath.jpeg",sarcasticPhoto:"/team/sarcastic/viswanath.jpeg",roast:`Spends weeks building simulations.
Crashes the exact second the demo starts.`},steelbinde:{name:"steel Binde",role:"High BP & Salty Queen 🧂",sound:"cow",soundLabel:"🐮 Grumpy Cow",realPhoto:"/team/steelbinde.jpeg",sarcasticPhoto:"/team/sarcastic/steelbinde.jpeg",roast:"Eats extra salt just to stay angry. One tiny bug and her blood pressure shoots to outer space."},aakash:{name:"Aakash",role:"Master of Procrastination",sound:"monkey",soundLabel:"🐵 Chaotic Monkey",realPhoto:"/team/aakash.jpeg",sarcasticPhoto:"/team/sarcastic/aakash.jpeg",roast:'Starts working 5 minutes before the deadline and calls it "passion".'},harshith:{name:"harshith",role:"Pixel Perfectionist (Blind) 🔍",sound:"cat",soundLabel:"🐱 Blind Cat",realPhoto:"/team/harshith.jpeg",sarcasticPhoto:"/team/sarcastic/harshith.jpeg",roast:"Spends 5 days adjusting a 1px border that nobody in the world will ever notice."},harshitha:{name:"Harshitha a women 💅",role:"Tire Pressure Destroyer 🛞",sound:"cow",soundLabel:"🐮 Heavy Duty Moo",realPhoto:"/team/harshitha.jpeg",sarcasticPhoto:"/team/sarcastic/harshitha.jpeg",roast:`Google Maps doesn’t calculate her route…
It calculates the bridge load capacity 😂`},munisankar:{name:"Muni sankar",role:"Monaaa’s #1 Fan 💖",sound:"frog",soundLabel:"🐸 Lovesick Frog",realPhoto:"/team/munisankar.jpeg",sarcasticPhoto:"/team/sarcastic/munisankar.jpeg",roast:"Types code with one hand while writing love letters to Monaaa with the other."},hemasri:{name:"Hema sri",role:"Sephora VIP Ambassador 💄",sound:"lion",soundLabel:"🦁 Glamour Queen",realPhoto:"/team/hemasri.jpeg",sarcasticPhoto:"/team/sarcastic/hemasri.jpeg",roast:"Spends 2 hours putting on makeup for a 3-minute meeting where everyone has their camera turned off."}};function Og(){const i=document.getElementById("canvas-container");vt=new $u;const e=Qt[on];vt.background=new Ge(e.bg),vt.fog=new ca(e.fog,10,750),nn=new Ut(42,window.innerWidth/window.innerHeight,.1,2e3),nn.position.set(0,0,$o),gn=new Pg({antialias:!0,powerPreference:"high-performance"}),gn.setSize(window.innerWidth,window.innerHeight),gn.setPixelRatio(Math.min(window.devicePixelRatio,2)),gn.toneMapping=kl,gn.toneMappingExposure=1.35,i.appendChild(gn.domElement),Bg(),zg(),ct=new Si,ct.position.set(0,0,rs),vt.add(ct),kg(),Hg(),Yg(),Vg(),Wg(),Kg(),Qg(),e0(),$g(),Gg(),Ma=performance.now(),requestAnimationFrame(Pc)}function Bg(){const i=Qt[on];sr=new Wh(i.ambientColor,i.ambientIntensity),vt.add(sr),Li=new js(i.leftColor,i.leftIntensity),Li.position.set(-10,8,18),vt.add(Li),Di=new js(i.rightColor,i.rightIntensity),Di.position.set(10,8,18),vt.add(Di),Ii=new js(i.topColor,i.topIntensity),Ii.position.set(0,16,4),vt.add(Ii),Fn=new Hh(i.auraColor,i.auraIntensity,35,1.2),Fn.position.set(0,0,4),vt.add(Fn)}function zg(){const e=new Ht,t=new Float32Array(400*3);for(let n=0;n<400*3;n+=3)t[n]=(Math.random()-.5)*45,t[n+1]=(Math.random()-.5)*30,t[n+2]=-Math.random()*650;e.setAttribute("position",new $t(t,3)),os=new hc({color:Qt[on].starColor,size:.16,transparent:!0,opacity:.45}),ss=new th(e,os),vt.add(ss)}function kg(){new Lg().load("/fonts/gentilis_bold.typeface.json",e=>{const t=Qt[on];_n=new yc({color:t.textMat.color,emissive:t.textMat.emissive,roughness:t.textMat.roughness,metalness:t.textMat.metalness,clearcoat:t.textMat.clearcoat,clearcoatRoughness:.05});const n={font:e,size:1.8,depth:.28,curveSegments:32,bevelEnabled:!0,bevelThickness:.02,bevelSize:.015,bevelOffset:0,bevelSegments:6};Mn=new Si;const r=new Ul("DEBBA",n);r.computeBoundingBox(),r.computeVertexNormals();const s=new Ul("DEBBA",n);s.computeBoundingBox(),s.computeVertexNormals();const o=r.boundingBox,a=o.max.x-o.min.x,l=s.boundingBox,c=l.max.x-l.min.x,u=1.3;Pi=a+u+c;const h=new Vt(r,_n);h.position.set(-Pi/2-o.min.x,-n.size/2,0);const d=new Vt(s,_n);d.position.set(-Pi/2+a+u-l.min.x,-n.size/2,0),Mn.add(h),Mn.add(d),ct.add(Mn),Rc(),gs()})}function Rc(){if(!ct)return;const i=nn.fov*Math.PI/180,n=2*Math.tan(i/2)*nn.position.z*nn.aspect*.82;if(Pi>n){const r=n/Pi;ct.scale.set(r,r,r)}else ct.scale.set(1,1,1)}function gs(){Ma=performance.now(),hr=!0,Ko=!1,ct&&(ct.position.set(0,0,rs),ct.rotation.set(0,0,0))}function Ol(i,e=!0){if(!Qt[i])return;on=i;const t=Qt[i];document.body.setAttribute("data-theme",i);const n=document.getElementById("mood-icon"),r=document.getElementById("mood-badge");if(n&&(n.innerText=t.icon),r&&(r.innerText=t.badge),document.querySelectorAll(".mood-option").forEach(s=>{s.classList.toggle("active",s.dataset.mood===i)}),vt&&(vt.background.setHex(t.bg),vt.fog.color.setHex(t.fog)),sr&&(sr.color.setHex(t.ambientColor),sr.intensity=t.ambientIntensity),Li&&(Li.color.setHex(t.leftColor),Li.intensity=t.leftIntensity),Di&&(Di.color.setHex(t.rightColor),Di.intensity=t.rightIntensity),Ii&&(Ii.color.setHex(t.topColor),Ii.intensity=t.topIntensity),Fn&&(Fn.color.setHex(t.auraColor),Fn.intensity=t.auraIntensity),_n&&(_n.color.setHex(t.textMat.color),_n.emissive.setHex(t.textMat.emissive),_n.roughness=t.textMat.roughness,_n.metalness=t.textMat.metalness,_n.clearcoat=t.textMat.clearcoat),os&&os.color.setHex(t.starColor),e){const s=t.sassyQuotes||(t.sassyQuote?[t.sassyQuote]:[]),o=s.length>0?s[Math.floor(Math.random()*s.length)]:"";ut(o,3e3)}}function Vg(){const i=document.getElementById("mood-toggle"),e=document.getElementById("mood-menu");i&&e&&(i.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("hidden")}),document.querySelectorAll(".mood-option").forEach(n=>{n.addEventListener("click",r=>{r.stopPropagation();const s=n.dataset.mood;Ol(s),e.classList.add("hidden")})}),window.addEventListener("click",n=>{!n.target.closest("#mood-menu")&&!n.target.closest("#mood-toggle")&&e.classList.add("hidden")}));const t=Object.keys(Qt);window.addEventListener("keydown",n=>{if(n.key==="m"||n.key==="M"){const s=(t.indexOf(on)+1)%t.length;Ol(t[s])}})}function Hg(){mn=new Audio("/Jump_Cut_Flip.mp3"),mn.loop=!0,mn.volume=.65;const i=document.getElementById("audio-toggle"),e=document.getElementById("audio-icon");i.addEventListener("click",t=>{if(t.stopPropagation(),mr(),!as)mn.play().then(()=>{as=!0,i.classList.remove("muted"),e.innerText="🎵";const n=["Music on! Try not to headbang directly into your monitor.","Beats activated. Prepare your eardrums for peak corporate chaos.","Soundtrack on! Now you can procrastinate with rhythmic enthusiasm."];ut(n[Math.floor(Math.random()*n.length)],2600)}).catch(()=>{});else if(mn.muted=!mn.muted,mn.muted){i.classList.add("muted"),e.innerText="🔇";const n=["Muted? Wow, having fun is strictly illegal in your household, huh?","Muted? Complete silence won’t drown out your inner thoughts, but okay.","Muting the vibe? You must be the absolute life of the funeral."];ut(n[Math.floor(Math.random()*n.length)],2600)}else i.classList.remove("muted"),e.innerText="🎵"})}function mr(){if(!ce){const i=window.AudioContext||window.webkitAudioContext;i&&(ce=new i)}ce&&ce.state==="suspended"&&ce.resume()}function In(i=62,e=.18,t=.3){try{if(mr(),!ce)return;const n=ce.createOscillator(),r=ce.createGain();n.type="sine",n.frequency.setValueAtTime(i,ce.currentTime),n.frequency.exponentialRampToValueAtTime(35,ce.currentTime+e),r.gain.setValueAtTime(t,ce.currentTime),r.gain.exponentialRampToValueAtTime(.001,ce.currentTime+e),n.connect(r),r.connect(ce.destination),n.start(),n.stop(ce.currentTime+e)}catch{}}function Gi(i){try{if(mr(),!ce)return;const e=ce.currentTime;if(i==="goat"){const t=ce.createOscillator(),n=ce.createGain(),r=ce.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(520,e),t.frequency.linearRampToValueAtTime(620,e+.15),t.frequency.exponentialRampToValueAtTime(260,e+.65);const s=ce.createOscillator(),o=ce.createGain();s.frequency.setValueAtTime(18,e),o.gain.setValueAtTime(45,e),s.connect(t.frequency),s.start(e),s.stop(e+.65),r.type="bandpass",r.frequency.setValueAtTime(1100,e),r.Q.setValueAtTime(3.5,e),n.gain.setValueAtTime(.35,e),n.gain.linearRampToValueAtTime(.45,e+.2),n.gain.exponentialRampToValueAtTime(.001,e+.65),t.connect(r),r.connect(n),n.connect(ce.destination),t.start(e),t.stop(e+.65)}else if(i==="cat"){const t=ce.createOscillator(),n=ce.createGain(),r=ce.createBiquadFilter();t.type="triangle",t.frequency.setValueAtTime(340,e),t.frequency.exponentialRampToValueAtTime(780,e+.22),t.frequency.exponentialRampToValueAtTime(380,e+.55),r.type="bandpass",r.frequency.setValueAtTime(900,e),r.frequency.exponentialRampToValueAtTime(2100,e+.22),r.frequency.exponentialRampToValueAtTime(650,e+.55),r.Q.setValueAtTime(4,e),n.gain.setValueAtTime(.01,e),n.gain.linearRampToValueAtTime(.4,e+.18),n.gain.exponentialRampToValueAtTime(.001,e+.55),t.connect(r),r.connect(n),n.connect(ce.destination),t.start(e),t.stop(e+.55)}else if(i==="duck"){const t=(n,r)=>{const s=ce.createOscillator(),o=ce.createGain(),a=ce.createBiquadFilter();s.type="sawtooth",s.frequency.setValueAtTime(r,e+n),s.frequency.exponentialRampToValueAtTime(r*.7,e+n+.14),a.type="bandpass",a.frequency.setValueAtTime(1400,e+n),a.Q.setValueAtTime(5,e+n),o.gain.setValueAtTime(.4,e+n),o.gain.exponentialRampToValueAtTime(.001,e+n+.14),s.connect(a),a.connect(o),o.connect(ce.destination),s.start(e+n),s.stop(e+n+.14)};t(0,260),t(.16,220)}else if(i==="chicken"){const t=(n,r,s,o)=>{const a=ce.createOscillator(),l=ce.createGain();a.type="triangle",a.frequency.setValueAtTime(r,e+n),a.frequency.exponentialRampToValueAtTime(s,e+n+o),l.gain.setValueAtTime(.4,e+n),l.gain.exponentialRampToValueAtTime(.001,e+n+o),a.connect(l),l.connect(ce.destination),a.start(e+n),a.stop(e+n+o)};t(0,600,320,.08),t(.1,650,340,.08),t(.22,900,420,.18)}else if(i==="owl"){const t=(n,r,s)=>{const o=ce.createOscillator(),a=ce.createGain();o.type="sine",o.frequency.setValueAtTime(r,e+n),o.frequency.exponentialRampToValueAtTime(r*.85,e+n+s),a.gain.setValueAtTime(.01,e+n),a.gain.linearRampToValueAtTime(.4,e+n+s*.3),a.gain.exponentialRampToValueAtTime(.001,e+n+s),o.connect(a),a.connect(ce.destination),o.start(e+n),o.stop(e+n+s)};t(0,280,.18),t(.24,340,.45)}else if(i==="cow"){const t=ce.createOscillator(),n=ce.createGain(),r=ce.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(110,e),t.frequency.linearRampToValueAtTime(135,e+.25),t.frequency.exponentialRampToValueAtTime(80,e+.75),r.type="lowpass",r.frequency.setValueAtTime(400,e),r.frequency.linearRampToValueAtTime(750,e+.25),r.frequency.exponentialRampToValueAtTime(250,e+.75),r.Q.setValueAtTime(3,e),n.gain.setValueAtTime(.01,e),n.gain.linearRampToValueAtTime(.45,e+.2),n.gain.exponentialRampToValueAtTime(.001,e+.75),t.connect(r),r.connect(n),n.connect(ce.destination),t.start(e),t.stop(e+.75)}else if(i==="monkey")for(let t=0;t<4;t++){const n=t*.11,r=ce.createOscillator(),s=ce.createGain();r.type="sawtooth",r.frequency.setValueAtTime(700+t*150,e+n),r.frequency.exponentialRampToValueAtTime(1400+t*100,e+n+.08),s.gain.setValueAtTime(.3,e+n),s.gain.exponentialRampToValueAtTime(.001,e+n+.08),r.connect(s),s.connect(ce.destination),r.start(e+n),r.stop(e+n+.08)}else if(i==="pig"){const t=ce.createOscillator(),n=ce.createGain();t.type="sawtooth",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(85,e+.35);const r=ce.createOscillator(),s=ce.createGain();r.frequency.setValueAtTime(38,e),s.gain.setValueAtTime(80,e),r.connect(t.frequency),r.start(e),r.stop(e+.35),n.gain.setValueAtTime(.45,e),n.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(n),n.connect(ce.destination),t.start(e),t.stop(e+.35)}else if(i==="dolphin")for(let t=0;t<5;t++){const n=t*.08,r=ce.createOscillator(),s=ce.createGain();r.type="sine",r.frequency.setValueAtTime(1800,e+n),r.frequency.exponentialRampToValueAtTime(3600,e+n+.05),s.gain.setValueAtTime(.25,e+n),s.gain.exponentialRampToValueAtTime(.001,e+n+.05),r.connect(s),s.connect(ce.destination),r.start(e+n),r.stop(e+n+.05)}else if(i==="frog"){const t=ce.createOscillator(),n=ce.createGain(),r=ce.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(75,e+.45);const s=ce.createOscillator(),o=ce.createGain();s.frequency.setValueAtTime(28,e),o.gain.setValueAtTime(45,e),s.connect(t.frequency),s.start(e),s.stop(e+.45),r.type="bandpass",r.frequency.setValueAtTime(500,e),r.Q.setValueAtTime(4,e),n.gain.setValueAtTime(.45,e),n.gain.exponentialRampToValueAtTime(.001,e+.45),t.connect(r),r.connect(n),n.connect(ce.destination),t.start(e),t.stop(e+.45)}else if(i==="lion"){const t=ce.createOscillator(),n=ce.createGain(),r=ce.createBiquadFilter();t.type="sawtooth",t.frequency.setValueAtTime(75,e),t.frequency.linearRampToValueAtTime(95,e+.2),t.frequency.exponentialRampToValueAtTime(45,e+.65),r.type="lowpass",r.frequency.setValueAtTime(250,e),r.frequency.linearRampToValueAtTime(800,e+.25),r.frequency.exponentialRampToValueAtTime(180,e+.65),r.Q.setValueAtTime(4.5,e),n.gain.setValueAtTime(.01,e),n.gain.linearRampToValueAtTime(.5,e+.15),n.gain.exponentialRampToValueAtTime(.001,e+.65),t.connect(r),r.connect(n),n.connect(ce.destination),t.start(e),t.stop(e+.65)}}catch{}}function Cc(){mr(),mn&&!as&&mn.play().then(()=>{as=!0}).catch(()=>{})}function ft(i){if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(i)}catch{}}let to=null;function ut(i,e=3200){const t=document.getElementById("sassy-banner"),n=document.getElementById("sassy-text");!t||!n||(to&&clearTimeout(to),n.innerText=i,t.classList.remove("hidden"),to=setTimeout(()=>{t.classList.add("hidden")},e))}function Gg(){setTimeout(()=>{const e=["Welcome to DEBBA DEBBA — Executive Graphite Edition. Luxury aesthetics, zero excuses.","Welcome to DEBBA DEBBA. Please lower your expectations immediately.","Graphite Executive activated. Aerospace precision meets corporate reality.","Welcome! Staring is free, but your wasted time won’t be refunded.","Welcome! Try not to stare too hard, it’s rude and embarrassing.","Welcome to the void. We guarantee absolute zero productivity here.","You actually visited this site? Don’t you have real work to finish?"];ut(e[Math.floor(Math.random()*e.length)],3500)},1200);const i=["Staring at the void won’t fix your life or make your crush text back.","Did your brain crash, or are you buffering in 144p resolution? 🔄","Hello? Breathing check? Tap the screen before we call an ambulance.","Staring at this won’t get you promoted, bro. Do something.","Are you being paid by the hour to just stare blankly at this screen?","Even our 404 page has more brain activity than you right now.","Still frozen? Your boss thinks you’re typing furiously right now.","Blink twice if you’re currently stuck in an existential dread loop.","Don’t just sit there drooling on your keyboard... tap something!","Legend says if you stare long enough, you might find a single brain cell.","Your Wi-Fi might be fast, but your reaction time definitely isn’t.","Are you waiting for the text to do a backflip? Poke the screen!"];setInterval(()=>{if(!Rt&&!kt&&!hr){const e=performance.now()-Qo;if(e>9e3&&e<13e3){const t=i[Math.floor(Math.random()*i.length)];ut(t,3200),Qo=performance.now()-14e3}}},3e3)}function Jt(){Qo=performance.now()}let Dn,lt,Ni=[],Qr=[];function Wg(){if(Dn=document.getElementById("fluid-canvas"),!Dn)return;lt=Dn.getContext("2d");function i(){Dn.width=window.innerWidth,Dn.height=window.innerHeight}i(),window.addEventListener("resize",i);const e=(t,n)=>{Jt();const r=Qt[on];Ni.push({x:t,y:n,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5-.5,radius:Math.random()*8+6,alpha:.65,color:r.accent,decay:.02+Math.random()*.015}),Ni.length>80&&Ni.shift()};window.addEventListener("pointermove",t=>{(t.buttons>0||Math.random()>.4)&&e(t.clientX,t.clientY)}),window.addEventListener("pointerdown",t=>{e(t.clientX,t.clientY),Xg(t.clientX,t.clientY)})}function Xg(i,e){const t=Qt[on];Qr.push({x:i,y:e,radius:5,maxRadius:120,alpha:.7,color:t.accent,growth:4.5})}function qg(){if(!(!lt||!Dn)){lt.clearRect(0,0,Dn.width,Dn.height);for(let i=Ni.length-1;i>=0;i--){const e=Ni[i];if(e.x+=e.vx,e.y+=e.vy,e.alpha-=e.decay,e.alpha<=0){Ni.splice(i,1);continue}lt.save(),lt.beginPath(),lt.arc(e.x,e.y,e.radius,0,Math.PI*2),lt.fillStyle=e.color,lt.globalAlpha=e.alpha,lt.shadowBlur=15,lt.shadowColor=e.color,lt.fill(),lt.restore()}for(let i=Qr.length-1;i>=0;i--){const e=Qr[i];if(e.radius+=e.growth,e.alpha-=.022,e.alpha<=0||e.radius>=e.maxRadius){Qr.splice(i,1);continue}lt.save(),lt.beginPath(),lt.arc(e.x,e.y,e.radius,0,Math.PI*2),lt.strokeStyle=e.color,lt.lineWidth=2.5,lt.globalAlpha=e.alpha,lt.shadowBlur=18,lt.shadowColor=e.color,lt.stroke(),lt.restore()}}}function Yg(){window.addEventListener("resize",Jg),window.addEventListener("contextmenu",l=>l.preventDefault());let i=null,e=null;window.addEventListener("pointerdown",l=>{if(Jt(),l.target.closest("#credits-overlay")&&!l.target.classList.contains("credits-overlay")||l.target.closest(".action-dock")||l.target.closest("#secret-trigger")||l.target.closest("#mood-menu")||(Cc(),Rt))return;const c=performance.now();if(c-Fl<400?Pn++:Pn=1,Fl=c,Pn>=2){i&&clearTimeout(i),e&&clearTimeout(e),Pn=0,kt=!1,ft([60,40,140]),In(85,.25,.6);const h=["Double tap! Who hurt you? Therapy is cheaper than a new screen.","Calm down, Hulk. It’s just 3D text, not your sworn enemy.","Aggressive double tapping detected. Take a deep breath, champ.","Double tapped! Your anger management counselor would be thrilled."];ut(h[Math.floor(Math.random()*h.length)],2800),yi();return}e&&clearTimeout(e),kt=!1,$r=c,ls=0,cs=0,e=setTimeout(()=>{if(!Rt&&Pn===1){kt=!0,$r=performance.now(),ls=0,cs=0,In(58,.2,.35);const h=["Ooh, look at Mr. Strong Finger... don’t chicken out now!","Tension building... keep holding or forever be known as weak.","Hold it down! Let’s see if your attention span lasts 0.6 seconds."];ut(h[Math.floor(Math.random()*h.length)],2e3)}},420)});const t=()=>{if(Jt(),e&&(clearTimeout(e),e=null),Rt){kt=!1;return}const l=kt;kt=!1;const c=performance.now()-$r;if(l&&!Rt){ct&&(ct.position.set(0,0,Kr),ct.rotation.set(0,0,0));const u=["Letting go already? Classic commitment issues.","Weak grip. Couldn’t even hold down a click for half a second.","Gave up already? No wonder your projects are never finished on time.","Cowardly release detected. Try having some backbone next time."];ut(u[Math.floor(Math.random()*u.length)],2500);return}c<500&&Pn===1&&!hr&&(i&&clearTimeout(i),i=setTimeout(()=>{if(Pn===1&&!kt&&!Rt){gs();const u=["Is that a tap or did a housefly gently sneeze on the screen?","Weakest tap in human history. Put some protein in your diet.","Stop timidly poking me like I’m hot soup. Press and HOLD it!","My grandma taps harder than that while rejecting spam calls.","Are you scared you’ll break a nail? Hold it down like an adult.","Tapping like a confused pigeon... hold the screen down already!","That gentle tickle won’t do anything. Put some backbone into it!","Poke, poke, poke... is this your entire strategy in life?"];ut(u[Math.floor(Math.random()*u.length)],2800)}},450))};window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t);const n=document.getElementById("secret-trigger");n&&n.addEventListener("click",l=>{l.stopPropagation(),Jt(),ft([60,40,140]),In(80,.25,.5);const c=["Ooh, found the secret corner button? Someone give this 1337 hacker a medal.","Clicking suspicious buttons in dark corners? You’d fall for phishing so fast.","Sneaky click detected. You really have way too much free time on your hands."];ut(c[Math.floor(Math.random()*c.length)],2600),yi()}),document.getElementById("btn-return").addEventListener("click",no),document.getElementById("credits-overlay").addEventListener("click",l=>{l.target.id==="credits-overlay"&&no()}),window.addEventListener("keydown",l=>{if(l.key.length===1&&(xi+=l.key.toLowerCase(),xi.length>15&&(xi=xi.slice(-15)),["roast","meme","spicy","debba","cheat","troll","69"].some(u=>xi.endsWith(u))||l.key.toLowerCase()==="x"||l.key.toLowerCase()==="r")){xi="",or();return}if(l.key==="Escape"&&Rt)no();else if((l.key==="c"||l.key==="C"||l.key==="t"||l.key==="T")&&!Rt){Jt(),ft([60,40,140]),In(80,.25,.5);const c=["Keyboard shortcuts? Look at mister elite programmer pretending to work.","Pro keyboard shortcut user detected. Someone notify Silicon Valley.","Hitting random keys to look busy in the office? We respect the hustle."];ut(c[Math.floor(Math.random()*c.length)],2600),yi()}});let r=0,s=0;const o=document.querySelector(".founder-name"),a=document.querySelector(".founder-tag");[o,a].forEach(l=>{l&&l.addEventListener("click",()=>{const c=performance.now();c-s<450?(r++,r>=3&&(r=0,or())):r=1,s=c})}),window.location.hash.includes("meme")||window.location.hash.includes("roast")||window.location.hash.includes("spicy")?setTimeout(()=>{or(!0),Rt||yi()},600):(window.location.hash==="#team"||window.location.hash==="#credits")&&setTimeout(()=>{yi()},600)}function yi(){Rt=!0,Pn=0,kt=!1,Mn&&(Mn.visible=!1);const i=Qt[on],e=65,t=[new _a(.35,0),new pa(.3,.6,4),new ma(.28,0),new Yi(.4,.4,.2)],n=new yc({color:i.textMat.color,emissive:i.textMat.emissive,roughness:.1,metalness:.2,clearcoat:1,reflectivity:1});for(let s=0;s<e;s++){const o=t[Math.floor(Math.random()*t.length)],a=new Vt(o,n),l=(Math.random()-.5)*Pi*.9,c=(Math.random()-.5)*2,u=(Math.random()-.5)*.5;a.position.set(l,c,u);const h=l*.08+(Math.random()-.5)*.4,d=c*.08+(Math.random()-.5)*.4,p=Math.random()*.7+.35;a.userData={vx:h,vy:d,vz:p,rx:(Math.random()-.5)*.3,ry:(Math.random()-.5)*.3,rz:(Math.random()-.5)*.3},vt.add(a),Ui.push(a)}const r=["Great, you shattered the universe. Hope your mom is proud.",'Look what you did. Put "Destruction Specialist" on your LinkedIn now.',"Congratulations, you completely broke it. This is why we can’t have nice things.","Total structural collapse. Are you happy now, chaos goblin?"];ut(r[Math.floor(Math.random()*r.length)],3500),setTimeout(()=>{const s=document.getElementById("credits-overlay");s&&s.classList.remove("hidden")},350)}function jg(){for(let i=Ui.length-1;i>=0;i--){const e=Ui[i],t=e.userData;e.position.x+=t.vx,e.position.y+=t.vy,e.position.z+=t.vz,e.rotation.x+=t.rx,e.rotation.y+=t.ry,e.rotation.z+=t.rz,e.position.z>35&&(vt.remove(e),Ui.splice(i,1))}}function no(){Jt();const i=document.getElementById("credits-overlay");i&&i.classList.add("hidden"),Ui.forEach(t=>vt.remove(t)),Ui=[],Mn&&(Mn.visible=!0),Rt=!1,kt=!1,gs();const e=["Back already? Missed me that much? Go touch some grass. 🌱","Couldn’t survive 5 seconds without staring at DEBBA DEBBA? Obsessed.","Aww, did the real world scare you? Welcome back to the void, coward.","Back already? Your weekly screen time report is going to be humiliating.","Look who crawled back! Nobody even noticed you left, but welcome.","Couldn’t find anything better to do with your life? Expected.","Back so soon? Did HR reject your resignation letter already? 📝","Resetting the void for you. Try not to break it again in 3 seconds.","Back already? We were actually enjoying the peaceful silence.","Returned to the scene of the crime? We all saw you break it.","Back again? Your dopamine receptors are truly beyond repair.","Rebuilding the void because someone can’t handle an existential crisis."];ut(e[Math.floor(Math.random()*e.length)],3200)}function Zg(i){return i===1?1:1-Math.pow(2,-10*i)}function Pc(i){if(requestAnimationFrame(Pc),ct&&Mn){if(kt&&!Rt){const e=i-$r;if(e>120){const t=Math.min((e-120)/(Fg-120),1),n=Math.pow(t,2)*.45;ct.position.set((Math.random()-.5)*n,(Math.random()-.5)*n,Kr+(Math.random()-.5)*n),ct.rotation.set((Math.random()-.5)*n*.4,(Math.random()-.5)*n*.4,(Math.random()-.5)*n*.5);const r=Math.floor(t*5);r>ls&&(ls=r,ft(20+r*15),In(55+r*10,.14,.25+r*.08)),t>.65&&cs===0&&(cs=1,ut("HOLD TIGHT! Critical meltdown imminent! Don’t wimp out!",1800)),t>=1&&(ft([60,40,140]),In(90,.3,.65),kt=!1,yi())}}else if(hr&&!Rt){const e=(i-Ma)/1e3,t=Math.min(e/Ng,1),n=Zg(t),r=rs+(Kr-rs)*n;ct.position.z=r;const s=(1-n)*1.4;ct.scale.z=1+s,ss&&(ss.position.z=n*200),t>=1&&(hr=!1,Ko=!0,Nl=i,ct.position.z=Kr,ct.scale.z=1)}else if(Ko&&!Rt){const e=(i-Nl)/1e3;if(e<.28){const n=1-e/.28;nn.position.z=$o+Math.sin(e*45)*.1*n}else nn.position.z=$o;const t=i*.001;if(ct.position.y=Math.sin(t*1.5)*.06,ct.rotation.y=Math.cos(t*1)*.015,Fn){const n=Qt[on];Fn.intensity=n.auraIntensity+Math.sin(t*2.5)*.4}}}jg(),gn.render(vt,nn),qg()}function Jg(){nn.aspect=window.innerWidth/window.innerHeight,nn.updateProjectionMatrix(),gn.setSize(window.innerWidth,window.innerHeight),gn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Rc()}let bi=!1,Mi=!1,xi="",es=null;function or(i=null){if(!bi){const e=["🔒 Nice try! Roast Mode is locked. You gotta earn the disrespect in OFFICE DEVIL first.","🔒 Access denied! Beat Level 3 in OFFICE DEVIL before unlocking the emotional damage.","🔒 Locked tight! Go defeat the OFFICE DEVIL before trying to look at forbidden roasts."];ut(e[Math.floor(Math.random()*e.length)],3400),Gi("duck"),ft([60,40]);return}if(Mi=i!==null?i:!Mi,document.body.classList.toggle("meme-mode",Mi&&bi),Mi&&bi){const e=["🔥 OFFICE ROAST MODE ACTIVATED: Prepare your feelings to be permanently hurt.","🔥 Sarcastic Photos Unlocked! Warning: Zero HR compliance beyond this point.","🔥 Meme Mode engaged! Tap photos to flip between fake professionalism and pure slander."];ut(e[Math.floor(Math.random()*e.length)],3800),Gi("monkey"),ft([50,50,100])}else{const e=["😇 Normal Real Photos Restored. Cowardly retreat back to corporate politeness.","😇 Back to professional mode. Pretending we are civilized colleagues again.","😇 Normal photos restored. HR has entered the chat."];ut(e[Math.floor(Math.random()*e.length)],2800),ft([40])}if(es&&ea[es]){const e=ea[es],t=document.getElementById("photo-popup-img"),n=document.querySelector(".photo-avatar-wrapper");t&&n&&(n.classList.add("flipping"),setTimeout(()=>{const r=Mi&&bi?e.sarcasticPhoto:e.realPhoto;t.src=r,t.onerror=()=>{t.src=e.realPhoto},setTimeout(()=>n.classList.remove("flipping"),200)},150))}}let Bt=null;window.currentHoverMemberTarget=null;function Kg(){const i=document.getElementById("photo-popup"),e=document.getElementById("photo-popup-img"),t=document.getElementById("photo-popup-name"),n=document.getElementById("photo-popup-role"),r=document.getElementById("photo-popup-roast");if(!i||!e)return;function s(u){var C;Jt(),Bt&&(clearTimeout(Bt),Bt=null);const h=u.target.closest("[data-member]")||u.target.closest("[data-photo]");if(!h)return;window.currentHoverMemberTarget=h;const d=h.dataset.member||"sathwik";es=d;const p=ea[d]||{name:((C=h.querySelector(".team-name"))==null?void 0:C.innerText)||h.innerText||"Team Member",role:"Team Member",sound:"goat",realPhoto:h.dataset.oldPhoto||`/team/${d}.jpeg`,sarcasticPhoto:`/team/sarcastic/${d}.jpeg`,roast:"Too mysterious to roast. Or just hiding from bugs."},g=h.dataset.oldPhoto||p.realPhoto||`/team/${d}.jpeg`,E=bi&&Mi?p.sarcasticPhoto:g;e.src=E,e.onerror=function(){this.src!==g&&(this.src=g)},t&&(t.innerText=p.name),n&&(n.innerText=p.role),r&&(r.innerText=`“${p.roast}”`),p.sound&&Gi(p.sound),ft(40);const m=h.getBoundingClientRect(),f=330,R=125,S=12;let v=m.left+m.width/2-f/2,x=m.top-R-S;x<12&&(x=m.bottom+S),v=Math.max(12,Math.min(v,window.innerWidth-f-12)),x+R>window.innerHeight-12&&(x=Math.max(12,m.top-R-S)),i.style.left=`${v}px`,i.style.top=`${x}px`,i.classList.add("visible")}function o(){Bt&&(clearTimeout(Bt),Bt=null),i.classList.remove("visible")}function a(){Bt&&clearTimeout(Bt),Bt=setTimeout(()=>{i.classList.remove("visible")},180)}function l(){Bt&&(clearTimeout(Bt),Bt=null)}document.querySelectorAll("[data-member], [data-photo]").forEach(u=>{u.addEventListener("mouseenter",s),u.addEventListener("mouseleave",a),u.addEventListener("dblclick",h=>{h.stopPropagation(),window.openPhotoModal(u)})}),i.addEventListener("mouseenter",l),i.addEventListener("mouseleave",a),i.addEventListener("click",u=>{u.stopPropagation(),window.currentHoverMemberTarget&&window.openPhotoModal(window.currentHoverMemberTarget)}),i.addEventListener("dblclick",u=>{u.stopPropagation(),window.currentHoverMemberTarget&&window.openPhotoModal(window.currentHoverMemberTarget)}),document.addEventListener("pointerdown",u=>{!u.target.closest("#photo-popup")&&!u.target.closest("[data-member]")&&!u.target.closest("[data-photo]")&&o()})}function $g(){const i=document.getElementById("suspicious-pixel"),e=document.getElementById("mission-overlay"),t=document.getElementById("mission-close-btn"),n=document.getElementById("mission-stage-box");if(!i||!e||!n)return;let r=1,s=0,o=!1,a=null,l=0,c=!1,u=null,h=null;const d=["You trusted the floor. Rookie mistake.","Gravity says hello.","That platform had other plans.","Congratulations. You lost to a rectangle.","That looked easier in your imagination.","The floor has resigned.","Gravity remains undefeated.","You had ONE job.","That wasn't a bug. That was personal.","The game saw you coming.","Nice jump. Wrong universe.","You trusted the EXIT sign. 😂","Even the NPC is disappointed.","HR has been notified.","Productivity detected. This is unusual."];function p(){const S=document.getElementById("troll-canvas-box")||document.querySelector(".troll-canvas-container");S&&(S.classList.remove("screen-shake"),S.offsetWidth,S.classList.add("screen-shake"))}function g(S){try{if(mr(),!ce)return;const v=ce.currentTime;if(S==="jump"){const x=ce.createOscillator(),C=ce.createGain();x.type="square",x.frequency.setValueAtTime(160,v),x.frequency.exponentialRampToValueAtTime(480,v+.1),C.gain.setValueAtTime(.15,v),C.gain.exponentialRampToValueAtTime(.001,v+.1),x.connect(C),C.connect(ce.destination),x.start(v),x.stop(v+.1)}else if(S==="die"){const x=ce.createOscillator(),C=ce.createGain();x.type="sawtooth",x.frequency.setValueAtTime(320,v),x.frequency.exponentialRampToValueAtTime(60,v+.28),C.gain.setValueAtTime(.3,v),C.gain.exponentialRampToValueAtTime(.001,v+.28),x.connect(C),C.connect(ce.destination),x.start(v),x.stop(v+.28)}else if(S==="spring"){const x=ce.createOscillator(),C=ce.createGain();x.type="sine",x.frequency.setValueAtTime(200,v),x.frequency.exponentialRampToValueAtTime(900,v+.25),C.gain.setValueAtTime(.3,v),C.gain.exponentialRampToValueAtTime(.001,v+.25),x.connect(C),C.connect(ce.destination),x.start(v),x.stop(v+.25)}else if(S==="troll")[220,180,140].forEach((x,C)=>{const P=ce.createOscillator(),L=ce.createGain();P.type="sawtooth",P.frequency.setValueAtTime(x,v+C*.08),L.gain.setValueAtTime(.2,v+C*.08),L.gain.exponentialRampToValueAtTime(.001,v+C*.08+.1),P.connect(L),L.connect(ce.destination),P.start(v+C*.08),P.stop(v+C*.08+.1)});else if(S==="win")[330,392,523,659].forEach((x,C)=>{const P=ce.createOscillator(),L=ce.createGain();P.type="triangle",P.frequency.setValueAtTime(x,v+C*.1),L.gain.setValueAtTime(.25,v+C*.1),L.gain.exponentialRampToValueAtTime(.001,v+C*.1+.2),P.connect(L),L.connect(ce.destination),P.start(v+C*.1),P.stop(v+C*.1+.2)});else if(S==="alarm"){const x=ce.createOscillator(),C=ce.createGain();x.type="sawtooth",x.frequency.setValueAtTime(450,v),x.frequency.linearRampToValueAtTime(900,v+.2),x.frequency.linearRampToValueAtTime(450,v+.4),C.gain.setValueAtTime(.25,v),C.gain.exponentialRampToValueAtTime(.001,v+.45),x.connect(C),C.connect(ce.destination),x.start(v),x.stop(v+.45)}else if(S==="blip"){const x=ce.createOscillator(),C=ce.createGain();x.type="sine",x.frequency.setValueAtTime(800,v),C.gain.setValueAtTime(.1,v),C.gain.exponentialRampToValueAtTime(.001,v+.05),x.connect(C),C.connect(ce.destination),x.start(v),x.stop(v+.05)}}catch{}}function E(){Jt(),s=0,r=1,u&&(clearTimeout(u),u=null),c=!1,e.classList.remove("hidden"),g("jump");const S=["😈 OFFICE DEVIL: Entering the arena. Try not to rage-quit within 10 seconds.","😈 Welcome to the corporate grinder. Hope your emotional resilience is high.","😈 OFFICE DEVIL: Good luck, you will definitely need a miracle."];ut(S[Math.floor(Math.random()*S.length)],3200),R()}function m(){e.classList.add("hidden"),e.classList.remove("screen-darken"),o=!1,a&&(cancelAnimationFrame(a),a=null),u&&(clearTimeout(u),u=null),c=!1,h&&(h(),h=null)}i.addEventListener("click",S=>{S.stopPropagation(),E()}),t&&t.addEventListener("click",m),window.addEventListener("keydown",S=>{S.key==="Escape"&&!e.classList.contains("hidden")&&m()});const f=document.getElementById("secret-trigger");f&&f.addEventListener("click",S=>{S.stopPropagation(),E()});function R(){const S={1:{pill:"LEVEL 1",name:"JUST WALK 🚶",sub:"“How hard can this be?”"},2:{pill:"LEVEL 2",name:"TRUST NOTHING 💀",sub:"“Everything is probably lying.”"},3:{pill:"FINAL LEVEL",name:"THE EMPLOYEE TEST 💀",sub:"“Complete this and you'll discover something you probably shouldn't.”"}};n.innerHTML=`
      <div class="troll-game-wrapper">
        <div class="troll-hud">
          <div class="troll-level-header">
            <div class="troll-level-title">
              <span class="troll-level-pill" id="troll-level-pill">${S[r].pill}</span>
              <span id="troll-level-name">${S[r].name}</span>
            </div>
            <span id="troll-level-sub" class="troll-level-sub">${S[r].sub}</span>
          </div>
          <div class="troll-stats">
            <span class="troll-deaths" id="troll-deaths">💀 Fails: 0</span>
            <button class="troll-retry-btn" id="troll-retry-btn">🔄 Retry (R)</button>
          </div>
        </div>

        <div class="troll-canvas-container" id="troll-canvas-box">
          <canvas id="troll-game-canvas" width="680" height="340"></canvas>
          <div id="troll-banner-slot"></div>
        </div>

        <div class="troll-controls-bar">
          <span class="troll-keys-hint">Move: <b>← → / A D</b> | Jump: <b>SPACE / ↑ / W</b></span>
          <div class="troll-dpad-group">
            <button class="troll-ctrl-btn" id="btn-left">◀</button>
            <button class="troll-ctrl-btn" id="btn-right">▶</button>
            <button class="troll-ctrl-btn troll-jump-btn" id="btn-jump">⬆ JUMP</button>
          </div>
        </div>
      </div>
    `;const v=document.getElementById("troll-game-canvas"),x=v.getContext("2d");function C(H,J,_,I,z=6){if(typeof x.roundRect=="function")try{x.roundRect(H,J,_,I,z);return}catch{}x.rect(H,J,_,I)}const P=document.getElementById("troll-deaths"),L=document.getElementById("troll-level-pill"),b=document.getElementById("troll-level-name"),M=document.getElementById("troll-level-sub"),D=document.getElementById("troll-banner-slot"),X=document.getElementById("troll-retry-btn"),B={left:!1,right:!1,jump:!1};let w={x:35,y:230,vx:0,vy:0,w:18,h:28,isGrounded:!1,coyote:0,facing:1,anim:0,isDying:!1},V={},Y=[],te=[];function q(H){u&&(clearTimeout(u),u=null),c=!1,r=H,B.left=!1,B.right=!1,B.jump=!1,L&&(L.innerText=S[H].pill),b&&(b.innerText=S[H].name),M&&(M.innerText=S[H].sub),D&&(D.innerHTML=""),Y=[],te=[],w.isDying=!1,H===1?(w.x=35,w.y=230,w.vx=0,w.vy=0,V={platforms:[{x:15,y:275,w:90,h:22,type:"normal"},{x:125,y:275,w:75,h:22,type:"disappear",vanished:!1,flash:0},{x:225,y:260,w:75,h:22,type:"dodge",targetX:225,dodged:!1},{x:375,y:235,w:80,h:20,type:"surprise",revealed:!1},{x:460,y:260,w:110,h:22,type:"normal"},{x:595,y:260,w:75,h:22,type:"normal"}],springObject:{x:305,y:236,w:24,h:24,label:"FREE COFFEE ☕"},fakeWall:{x:472,y:155,w:22,h:105,label:"WALL 🧱",triggered:!1},door:{x:535,y:220,w:28,h:40,targetX:535,moved:!1,isReal:!0}}):H===2?(w.x=30,w.y=230,w.vx=0,w.vy=0,V={platforms:[{x:15,y:270,w:70,h:22,type:"normal"},{x:105,y:270,w:80,h:22,type:"fake_floor",triggered:!1,vy:0},{x:120,y:215,w:65,h:18,type:"invisible",revealed:!1},{x:200,y:225,w:70,h:18,type:"normal"},{x:295,y:195,w:70,h:18,type:"elevator",triggered:!1,vx:0,vy:0},{x:410,y:135,w:65,h:18,type:"normal"},{x:430,y:245,w:75,h:20,type:"normal"},{x:580,y:130,w:85,h:20,type:"normal"}],fakeCheckpoint:{x:225,y:200,w:34,h:24,triggered:!1,label:"SAFE CHECKPOINT 💾"},fakeDoor:{x:480,y:92,w:26,h:40,label:"EXIT 🚪"},fakeWin:{x:450,y:215,w:32,h:30,label:"YOU WIN! 🏆"},hazard:{x:440,y:105,w:22,h:22,vx:1.2,minX:375,maxX:505,reversed:!1},realDoor:{x:615,y:90,w:26,h:40,isReal:!0}}):H===3&&(w.x=25,w.y=220,w.vx=0,w.vy=0,V={platforms:[{x:10,y:260,w:90,h:22,type:"normal"},{x:115,y:240,w:75,h:20,type:"normal"},{x:205,y:215,w:75,h:20,type:"normal"},{x:295,y:190,w:80,h:20,type:"normal"},{x:390,y:165,w:85,h:20,type:"normal"},{x:95,y:288,w:385,h:20,type:"trampoline"},{x:485,y:210,w:185,h:22,type:"normal"}],fakeCheckpoint:{x:400,y:142,w:32,h:20,triggered:!1,label:"CHECKPOINT 💾"},fakeDoor:{x:442,y:125,w:26,h:40,label:"EXIT 🚪"},hazard:{x:320,y:172,w:18,h:18,vx:.6,minX:300,maxX:360,reversed:!1},target:{x:565,y:180,w:24,h:26,vx:0,speech:"Catch me for appraisal! 📈",timer:0,stamina:100}}),o=!0,a||(a=requestAnimationFrame(Xe))}function re(H,J,_,I="#ff3366"){te.push({text:H,x:J,y:_,vy:-1.2,alpha:1,color:I})}function ge(H,J){for(let _=0;_<18;_++){const I=Math.random()*Math.PI*2,z=2+Math.random()*4;Y.push({x:H,y:J,vx:Math.cos(I)*z,vy:Math.sin(I)*z,life:1,color:Math.random()>.5?"#ff3366":"#ffffff"})}}function xe(H=null){if(w.isDying||c)return;w.isDying=!0,w.vx=0,w.vy=0,s++,P&&(P.innerText=`💀 Fails: ${s}`);const J=H||d[Math.floor(Math.random()*d.length)];g("die"),p(),ft([80,50,100]),ge(w.x+w.w/2,w.y+w.h/2),re(J,Math.max(20,w.x-30),Math.max(30,w.y-15),"#ff3366"),setTimeout(()=>{q(r)},260)}function Ie(H){if(!c)if(c=!0,w.vx=0,w.vy=0,g("win"),ft([60,40,120]),H===1){D.innerHTML=`
          <div class="troll-banner-modal">
            <div class="troll-banner-title">LEVEL 1 COMPLETE 🎉</div>
            <div class="troll-banner-sub">“That was the easy one. Don't celebrate yet.”</div>
            <button class="troll-banner-btn" id="next-lvl-btn">Level 2: Trust Nothing 💀 →</button>
          </div>
        `;const J=document.getElementById("next-lvl-btn");J&&J.addEventListener("click",()=>{u&&(clearTimeout(u),u=null),D.innerHTML="",q(2)}),u=setTimeout(()=>{r===1&&(D.innerHTML="",q(2))},1800)}else if(H===2){D.innerHTML=`
          <div class="troll-banner-modal">
            <div class="troll-banner-title">LEVEL 2 PASSED 🧠</div>
            <div class="troll-banner-sub">“Okay… you're getting suspicious.”</div>
            <button class="troll-banner-btn" id="next-lvl-btn">Level 3: The Employee Test 💀 →</button>
          </div>
        `;const J=document.getElementById("next-lvl-btn");J&&J.addEventListener("click",()=>{u&&(clearTimeout(u),u=null),D.innerHTML="",q(3)}),u=setTimeout(()=>{r===2&&(D.innerHTML="",q(3))},1800)}else H===3&&je()}function je(){o=!1,e.classList.add("screen-darken"),g("alarm"),p(),ft([100,50,100,50,200]),n.innerHTML=`
        <div class="hacker-terminal" style="max-width: 520px; width: 100%; margin: 1rem 0;">
          <div style="color: #ff3366; font-weight: bold; margin-bottom: 0.6rem; font-size: 1rem; letter-spacing: 1px;">
            🚨 SYSTEM OVERRIDE: THE EMPLOYEE TEST PASSED!
          </div>
          <div id="climax-logs" class="terminal-logs" style="min-height: 165px;"></div>
          <div id="climax-progress-wrap" class="roast-progress-bar-wrap" style="display: none; margin-top: 0.8rem;">
            <div id="climax-progress-bar" class="roast-progress-bar"></div>
          </div>
        </div>
      `;const H=document.getElementById("climax-logs"),J=document.getElementById("climax-progress-wrap"),_=document.getElementById("climax-progress-bar"),I=["EMPLOYEE IDENTIFIED...","RUNNING BACKGROUND CHECK...","CHECKING PRODUCTIVITY...","CHECKING ATTENDANCE...","CHECKING WORK HISTORY...","CHECKING OFFICE BEHAVIOUR...","CALCULATING ROAST POTENTIAL..."];I.forEach((z,K)=>{setTimeout(()=>{if(!H)return;g("blip");const j=document.createElement("div");j.className="terminal-log-item",j.innerText=`> ${z}`,H.appendChild(j)},K*450)}),setTimeout(()=>{if(!H||!J||!_)return;g("alarm");const z=document.createElement("div");z.className="terminal-log-item terminal-log-error",z.style.fontSize="1.05rem",z.style.marginTop="0.5rem",z.innerText="⚠️ ROAST DATABASE FOUND",H.appendChild(z);const K=document.createElement("div");K.className="terminal-log-item",K.style.color="#00e676",K.style.fontWeight="bold",K.style.marginTop="0.4rem",K.innerText="Progress bar:",H.appendChild(K);const j=document.createElement("div");j.className="terminal-log-item",j.style.color="#00e676",j.style.fontWeight="bold",j.style.letterSpacing="1px",j.innerText="████████████████████ 100%",H.appendChild(j),J.style.display="block",setTimeout(()=>{_.style.width="100%"},80)},I.length*450+200),setTimeout(()=>{if(!H)return;g("win"),ft([100,100,250]);const z=document.createElement("div");z.className="terminal-log-item terminal-log-error",z.style.fontSize="1.2rem",z.style.marginTop="0.7rem",z.innerHTML='🔓 <b>OFFICE ROAST MODE ACTIVATED</b><br><span style="color: #fff; font-size: 0.92rem; font-weight: 600;">“You survived 3 levels just to unlock this.”</span>',H.appendChild(z),setTimeout(Q,2e3)},I.length*450+1700)}function Q(){bi=!0,or(!0),g("win");function H(){const z=Jn[l],K=document.getElementById("showcase-img"),j=document.getElementById("showcase-name"),Ae=document.getElementById("showcase-role"),ue=document.getElementById("showcase-roast"),A=document.getElementById("showcase-index");K&&z&&(K.src=z.roastPhoto,K.onerror=function(){this.src=z.fallbackRoast||z.fallbackNormal}),j&&z&&(j.innerText=z.name),Ae&&z&&(Ae.innerText=z.role),ue&&z&&(ue.innerText=`“${z.roast}”`),A&&(A.innerText=`${l+1} / ${Jn.length}`),z&&z.sound&&Gi(z.sound)}n.innerHTML=`
        <div class="secret-unlocked-card">
          <div class="unlocked-trophy">📸 🏆</div>
          <div class="mission-title" style="color: #ff3366; font-size: 1.35rem; font-weight: 800;">OFFICE ROAST MODE ACTIVATED</div>
          <div class="mission-desc" style="color: #ffffffe6; font-size: 0.95rem; margin-bottom: 0.6rem; font-style: italic;">
            “You survived 3 levels just to unlock this.”
          </div>

          <div class="sarcastic-showcase-box">
            <div class="showcase-avatar-frame">
              <img id="showcase-img" class="showcase-avatar-img" src="" alt="Sarcastic Roast" />
            </div>
            <div class="showcase-member-name" id="showcase-name">Employee Name</div>
            <div class="showcase-member-role" id="showcase-role">Employee Role</div>
            <div class="showcase-member-roast" id="showcase-roast">“Roast quote goes here”</div>

            <div class="showcase-nav-row">
              <button id="showcase-prev-btn" class="showcase-nav-btn" title="Previous Employee">←</button>
              <span id="showcase-index" class="showcase-index-pill">1 / ${Jn.length}</span>
              <button id="showcase-next-btn" class="showcase-nav-btn" title="Next Employee">→</button>
            </div>
          </div>

          <button id="btn-reset-reality" class="btn-reset-reality">
            <span>🔄 Return to Normal Reality</span>
          </button>
        </div>
      `,H();const J=document.getElementById("showcase-prev-btn"),_=document.getElementById("showcase-next-btn"),I=document.getElementById("btn-reset-reality");J&&J.addEventListener("click",z=>{z.stopPropagation(),Jt(),l=(l-1+Jn.length)%Jn.length,H()}),_&&_.addEventListener("click",z=>{z.stopPropagation(),Jt(),l=(l+1)%Jn.length,H()}),I&&I.addEventListener("click",z=>{z.stopPropagation(),Jt(),or(!1),m();const K=["😇 Normal Photos Restored. Cowardly retreat back to corporate safety.","😇 Back to reality. Let’s pretend you never saw those roasts.","😇 Professionalism restored before HR investigates."];ut(K[Math.floor(Math.random()*K.length)],3e3)})}function ae(){u&&(clearTimeout(u),u=null),c=!1,r=1,s=0,P&&(P.innerText="💀 Fails: 0"),D&&(D.innerHTML=""),g("jump");const H=["🔄 Restarting from Level 1? Embarrassing, but we respect the sheer delusion.","🔄 Back to square one. Maybe try keeping your eyes open this time?","🔄 Resetting! Hope you brought some extra dignity."];ut(H[Math.floor(Math.random()*H.length)],2500),q(1)}function Me(H){o&&(["ArrowLeft","a","A"].includes(H.key)&&(B.left=!0),["ArrowRight","d","D"].includes(H.key)&&(B.right=!0),["ArrowUp","w","W"," ","Spacebar"].includes(H.key)&&(H.preventDefault(),B.jump=!0),(H.key==="r"||H.key==="R")&&ae())}function le(H){["ArrowLeft","a","A"].includes(H.key)&&(B.left=!1),["ArrowRight","d","D"].includes(H.key)&&(B.right=!1),["ArrowUp","w","W"," ","Spacebar"].includes(H.key)&&(B.jump=!1)}h&&h(),window.addEventListener("keydown",Me),window.addEventListener("keyup",le),h=()=>{window.removeEventListener("keydown",Me),window.removeEventListener("keyup",le)};const Ce=document.getElementById("btn-left"),Ve=document.getElementById("btn-right"),we=document.getElementById("btn-jump");Ce&&(Ce.addEventListener("pointerdown",()=>B.left=!0),Ce.addEventListener("pointerup",()=>B.left=!1),Ce.addEventListener("pointerleave",()=>B.left=!1)),Ve&&(Ve.addEventListener("pointerdown",()=>B.right=!0),Ve.addEventListener("pointerup",()=>B.right=!1),Ve.addEventListener("pointerleave",()=>B.right=!1)),we&&(we.addEventListener("pointerdown",()=>B.jump=!0),we.addEventListener("pointerup",()=>B.jump=!1),we.addEventListener("pointerleave",()=>B.jump=!1)),X&&X.addEventListener("click",H=>{H.stopPropagation(),ae()}),v&&v.addEventListener("click",()=>{w.isDying&&q(r)}),q(1),o=!0;function Xe(){if(o){a=requestAnimationFrame(Xe);try{if(!w.isDying&&!c){const _=(B.right?3.6:0)-(B.left?3.6:0);if(w.vx=w.vx*.72+_*.28,Math.abs(_)>.1?(w.facing=_>0?1:-1,w.anim+=.25):w.anim=0,w.vy+=.42,w.vy>9.5&&(w.vy=9.5),w.isGrounded?w.coyote=6:w.coyote>0&&w.coyote--,B.jump&&w.coyote>0&&(w.vy=-9.1,w.coyote=0,w.isGrounded=!1,g("jump")),w.x+=w.vx,w.y+=w.vy,w.isGrounded=!1,V.platforms&&V.platforms.forEach(I=>{if(I.type==="moving"&&(I.x+=I.vx,(I.x<=I.minX||I.x>=I.maxX)&&(I.vx*=-1)),I.type==="elevator"&&I.triggered&&(I.x+=I.vx,I.y+=I.vy),I.type==="dodge"&&(w.x>150&&w.x<250&&!I.dodged&&(I.dodged=!0,I.targetX=285,re("BYE! ➡️",I.x,I.y-12)),I.x+=(I.targetX-I.x)*.12),I.type==="surprise"&&(!I.revealed&&w.x>345&&w.x<465&&w.y>170&&(I.revealed=!0,g("win"),re("SURPRISE! ✨",I.x+10,I.y-12)),!I.revealed)||I.type==="invisible"&&(!I.revealed&&w.y>165&&w.x>95&&w.x<195&&(I.revealed=!0,g("win"),re("SAVED! ✨",I.x+10,I.y-12)),!I.revealed)||(I.type==="fake_floor"&&I.triggered&&(I.vy+=.55,I.y+=I.vy),I.type==="disappear"&&I.vanished))return;const K=w.y-w.vy+w.h<=I.y+8;w.x+w.w>I.x+2&&w.x<I.x+I.w-2&&K&&w.y+w.h>=I.y&&w.y+w.h<=I.y+I.h+8&&w.vy>=0&&(w.y=I.y-w.h,w.vy=0,w.isGrounded=!0,I.type==="disappear"&&!I.vanished?(I.vanished=!0,g("die"),p(),re("NOPE! 💨",I.x+20,I.y-10)):I.type==="fake_floor"&&!I.triggered?(I.triggered=!0,I.vy=4,g("troll"),p(),re("TRICKED! 🤡",I.x+20,I.y-10)):I.type==="elevator"&&!I.triggered?(I.triggered=!0,I.vx=2.4,I.vy=-1,g("spring"),re("HOLD ON! 🚀",I.x+10,I.y-12)):I.type==="trampoline"&&(w.vy=-9.6,g("spring"),p(),ft(50),re("BOING! 🛋️",I.x+I.w/2-25,I.y-14,"#00e676")))}),r===1){const I=V.springObject;I&&Math.hypot(w.x+w.w/2-(I.x+I.w/2),w.y+w.h/2-(I.y+I.h/2))<24&&(g("spring"),p(),ft(60),w.vx=-15,w.vy=-6,re("SPRING TRAP! 💥",I.x-15,I.y-20));const z=V.fakeWall;if(z&&!z.triggered&&w.x+w.w>z.x&&w.x<z.x+z.w&&w.y+w.h>z.y&&(z.triggered=!0,re("GHOST WALL 👻",z.x-10,z.y-10)),V.door){const K=V.door;Math.hypot(w.x+w.w/2-(K.x+K.w/2),w.y+w.h/2-(K.y+K.h/2))<85&&!K.moved&&(K.moved=!0,K.targetX=625,g("troll"),re("NOPE! 🏃‍♂️",K.x,K.y-15)),K.x+=(K.targetX-K.x)*.14,!c&&Math.abs(w.x-K.x)<26&&Math.abs(w.y-K.y)<32&&Ie(1)}}if(r===2){const I=V.fakeCheckpoint;I&&!I.triggered&&Math.hypot(w.x+w.w/2-(I.x+I.w/2),w.y+w.h/2-(I.y+I.h/2))<24&&(I.triggered=!0,re("Checkpoint saved! ✅",I.x,I.y-14,"#00e676"),setTimeout(()=>{g("troll"),p(),re("Saved? Absolutely not. 😂",w.x,w.y-18,"#ff3366"),w.vx=-16,w.vy=-6},240));const z=V.hazard;if(z){z.x+=z.vx,(z.x<=z.minX||z.x>=z.maxX)&&(z.vx*=-1);const ue=Math.hypot(w.x+w.w/2-(z.x+z.w/2),w.y+w.h/2-(z.y+z.h/2));ue<70&&!z.reversed&&!w.isGrounded&&(z.reversed=!0,z.vx=w.x>z.x?3.8:-3.8,g("alarm"),re("SURPRISE REVERSE! 🔄",z.x,z.y-12)),ue<20&&xe("Hit by rogue office machinery.")}const K=V.fakeDoor;K&&Math.hypot(w.x+w.w/2-(K.x+K.w/2),w.y+w.h/2-(K.y+K.h/2))<26&&(g("troll"),p(),re("Door was a lie. 🌀 TELEPORTED!",w.x-20,w.y-16),w.x=215,w.y=195,w.vx=-4);const j=V.fakeWin;j&&Math.hypot(w.x+w.w/2-(j.x+j.w/2),w.y+w.h/2-(j.y+j.h/2))<28&&(g("troll"),p(),re("“HAHA. You actually believed that?”",j.x-30,j.y-18,"#ff3366"),w.x=220,w.y=195,w.vx=-7,w.vy=-3);const Ae=V.realDoor;Ae&&!c&&Math.hypot(w.x+w.w/2-(Ae.x+Ae.w/2),w.y+w.h/2-(Ae.y+Ae.h/2))<28&&Ie(2)}if(r===3){const I=V.fakeCheckpoint;I&&!I.triggered&&Math.hypot(w.x+w.w/2-(I.x+I.w/2),w.y+w.h/2-(I.y+I.h/2))<24&&(I.triggered=!0,g("troll"),re("“HR rejected this checkpoint! 😂”",I.x-20,I.y-14,"#ff3366"),w.vx=-3,w.vy=-2);const z=V.fakeDoor;z&&Math.hypot(w.x+w.w/2-(z.x+z.w/2),w.y+w.h/2-(z.y+z.h/2))<26&&(g("troll"),p(),re("Shortcut denied by Management! 🌀",w.x-30,w.y-16),w.x=395,w.y=135,w.vx=0,w.vy=0);const K=V.hazard;if(K&&(K.x+=K.vx,(K.x<=K.minX||K.x>=K.maxX)&&(K.vx*=-1),Math.hypot(w.x+w.w/2-(K.x+K.w/2),w.y+w.h/2-(K.y+K.h/2))<18&&(g("spring"),re("Printer Jam! 🖨️",K.x-10,K.y-12),w.vx=w.x>K.x?3.5:-3.5,w.vy=-2)),V.target){const j=V.target,Ae=w.x+w.w/2-(j.x+j.w/2),ue=w.y+w.h/2-(j.y+j.h/2),A=Math.hypot(Ae,ue);if(j.timer+=.02,A<140){if(j.vx=Ae>0?-1.8:1.8,j.stamina=(j.stamina!==void 0?j.stamina:100)-1,j.stamina<=0)j.vx*=.2,j.speech="I surrender! Take my appraisal! 🥵📈";else if(Math.random()<.04){const y=["Catch me for appraisal! 📈","I was on mute! 🎙️","Wait, don't ping me on Slack! 🏃‍♂️","Friday 5 PM speed! 💨","Take my leaves, not my soul! 😭"];j.speech=y[Math.floor(Math.random()*y.length)]}}else j.vx*=.85;j.x+=j.vx,j.x=Math.max(490,Math.min(640,j.x)),!c&&A<48&&Ie(3)}}!w.isDying&&!c&&w.y>(r===3?318:295)&&(r===3?xe("Bro escaped from work faster than from responsibility."):xe())}x.clearRect(0,0,v.width,v.height),x.strokeStyle="rgba(255, 255, 255, 0.04)",x.lineWidth=1;for(let _=0;_<v.width;_+=34)x.beginPath(),x.moveTo(_,0),x.lineTo(_,v.height),x.stroke();for(let _=0;_<v.height;_+=34)x.beginPath(),x.moveTo(0,_),x.lineTo(v.width,_),x.stroke();if(V.platforms&&V.platforms.forEach(_=>{if(!(_.type==="disappear"&&_.vanished)){if((_.type==="surprise"||_.type==="invisible")&&!_.revealed){x.fillStyle="rgba(255, 51, 102, 0.05)",x.fillRect(_.x,_.y,_.w,_.h);return}if(_.type==="trampoline"){x.fillStyle="rgba(16, 32, 48, 0.95)",x.beginPath(),C(_.x,_.y,_.w,_.h,8),x.fill(),x.strokeStyle="#00f0ff",x.lineWidth=2.5,x.beginPath(),x.moveTo(_.x+4,_.y+1),x.lineTo(_.x+_.w-4,_.y+1),x.stroke(),x.fillStyle="#00f0ff",x.font="bold 9px sans-serif",x.fillText("🛋️ OFFICE SAFETY BEANBAG (BOUNCE TO RECOVER)",_.x+_.w/2-110,_.y+13);return}x.fillStyle=_.flash>0?"#ff3366":"rgba(30, 30, 44, 0.94)",x.beginPath(),C(_.x,_.y,_.w,_.h,6),x.fill(),x.strokeStyle=_.type==="elevator"||_.type==="surprise"?"#bd00ff":"#00e676",x.lineWidth=2,x.beginPath(),x.moveTo(_.x+4,_.y+1),x.lineTo(_.x+_.w-4,_.y+1),x.stroke()}}),V.springObject){const _=V.springObject;x.font="20px sans-serif",x.fillText("☕",_.x,_.y+18),x.fillStyle="#ffe082",x.font="bold 8px sans-serif",x.fillText("FREE COFFEE",_.x-12,_.y+28)}if(V.fakeWall){const _=V.fakeWall;x.fillStyle="rgba(60, 60, 80, 0.85)",x.fillRect(_.x,_.y,_.w,_.h),x.strokeStyle="#ff3366",x.lineWidth=1.5,x.strokeRect(_.x,_.y,_.w,_.h),x.fillStyle="#fff",x.font="bold 9px monospace",x.fillText("WALL",_.x-1,_.y+50)}if(V.fakeCheckpoint){const _=V.fakeCheckpoint;x.fillStyle="#00e676",x.beginPath(),C(_.x,_.y,_.w,_.h,6),x.fill(),x.fillStyle="#000",x.font="bold 8px sans-serif",x.fillText("CHECKPOINT",_.x+2,_.y+14)}if(V.hazard){const _=V.hazard;x.font="22px sans-serif",x.fillText("🖨️",_.x,_.y+18)}if(V.fakeWin){const _=V.fakeWin;x.font="24px sans-serif",x.fillText("🏆",_.x,_.y+20),x.fillStyle="#ffe082",x.font="bold 8px sans-serif",x.fillText("YOU WIN!",_.x-2,_.y+30)}if(V.door){const _=V.door;x.fillStyle="#00e676",x.fillRect(_.x,_.y,_.w,_.h),x.fillStyle="#000",x.font="14px sans-serif",x.fillText("🚪",_.x+5,_.y+26)}if(V.fakeDoor){const _=V.fakeDoor;x.fillStyle="#ff3366",x.fillRect(_.x,_.y,_.w,_.h),x.fillStyle="#fff",x.font="14px sans-serif",x.fillText("🚪",_.x+5,_.y+26)}if(V.realDoor){const _=V.realDoor;x.fillStyle="#00e676",x.fillRect(_.x,_.y,_.w,_.h),x.fillStyle="#000",x.font="14px sans-serif",x.fillText("🚪",_.x+5,_.y+26)}if(V.target){const _=V.target;x.font="24px sans-serif",x.fillText("👔",_.x,_.y+20),x.fillStyle="rgba(255, 255, 255, 0.95)",x.beginPath(),C(_.x-45,_.y-18,125,16,8),x.fill(),x.fillStyle="#000",x.font="bold 8px sans-serif",x.fillText(_.speech,_.x-40,_.y-7),x.fillStyle="#ff3366",x.font="bold 8px monospace",x.fillText("EMPLOYEE",_.x-6,_.y+28),x.save(),x.fillStyle="#ff3366",x.font='bold 15px "Space Grotesk", sans-serif',x.textAlign="center";const I=1+Math.sin(Date.now()*.007)*.08;x.translate(585,48),x.scale(I,I),x.shadowColor="rgba(255, 51, 102, 0.8)",x.shadowBlur=12,x.fillText("🏃 CATCH THEM. 🏃",0,0),x.restore()}x.save(),x.translate(w.x+w.w/2,w.y+w.h/2),x.scale(w.facing,1),x.fillStyle="#f0f0f5",x.fillRect(-7,-12,14,18),x.fillStyle="#ffd1a4",x.beginPath(),x.arc(0,-17,7,0,Math.PI*2),x.fill(),x.fillStyle="#111",x.fillRect(2,-19,2,3);const H=Math.sin(w.anim)*4;x.fillStyle="#ff3366",x.beginPath(),x.moveTo(-1,-12),x.lineTo(2,-12),x.lineTo(H+1,-2),x.lineTo(-1,-4),x.fill(),x.strokeStyle="#222",x.lineWidth=3;const J=Math.sin(w.anim)*5;x.beginPath(),x.moveTo(-4,6),x.lineTo(-4-J,14),x.moveTo(3,6),x.lineTo(3+J,14),x.stroke(),x.restore();for(let _=Y.length-1;_>=0;_--){const I=Y[_];if(I.x+=I.vx,I.y+=I.vy,I.life-=.035,I.life<=0){Y.splice(_,1);continue}x.fillStyle=I.color,x.globalAlpha=I.life,x.beginPath(),x.arc(I.x,I.y,3*I.life,0,Math.PI*2),x.fill(),x.globalAlpha=1}for(let _=te.length-1;_>=0;_--){const I=te[_];if(I.y+=I.vy,I.alpha-=.025,I.alpha<=0){te.splice(_,1);continue}x.fillStyle=I.color,x.globalAlpha=I.alpha,x.font='bold 12px "Space Grotesk", sans-serif',x.fillText(I.text,I.x,I.y),x.globalAlpha=1}}catch(H){console.error("Troll game loop error:",H)}}}a&&cancelAnimationFrame(a),a=requestAnimationFrame(Xe)}}window.openPhotoModal=function(i){var c,u;const e=document.getElementById("photo-modal"),t=document.getElementById("photo-modal-img"),n=document.getElementById("photo-modal-name"),r=document.getElementById("photo-modal-role"),s=document.getElementById("photo-popup");if(!i||!e)return;s&&s.classList.remove("visible");const o=i.getAttribute("data-new-photo")||i.getAttribute("data-photo");if(!o)return;const a=((c=i.querySelector(".team-name"))==null?void 0:c.innerText)||i.innerText||"Team Member",l=(u=i.querySelector(".team-num"))==null?void 0:u.innerText;t&&(t.classList.remove("zoomed"),t.triedPhotos=!1,t.triedImages=!1,t.src=o,t.onerror=function(){const h=o.split("/").pop();this.triedPhotos?this.triedImages||(this.triedImages=!0,this.src="/images/"+h):(this.triedPhotos=!0,this.src="/photos/"+h)}),n&&(n.innerText=a.trim()),r&&(l?r.innerText=`TEAM DEBA DEBA • MEMBER ${l}`:r.innerText="FOUNDER • CREATOR • MAKER"),e.classList.remove("hidden")};window.openPhotoModalFromPopup=function(){window.currentHoverMemberTarget&&window.openPhotoModal(window.currentHoverMemberTarget)};window.closePhotoModal=function(){const i=document.getElementById("photo-modal");i&&i.classList.add("hidden")};const io=document.getElementById("photo-modal-img");io&&io.addEventListener("dblclick",i=>{i.stopPropagation(),io.classList.toggle("zoomed"),ft(50)});window.addEventListener("keydown",i=>{i.key==="Escape"&&window.closePhotoModal()});window.handlePasswordSubmit=function(i){i&&i.preventDefault();const e=document.getElementById("gate-password-input"),t=document.getElementById("password-gate"),n=document.querySelector(".password-gate-card"),r=document.getElementById("gate-error-msg"),s=document.getElementById("gate-error-text"),o=document.getElementById("gate-icon"),a=document.querySelector(".gate-input-wrap");if(!e||!t)return!1;if(e.value.trim()==="PASSWORD"){r&&r.classList.add("hidden"),a&&a.classList.remove("error"),n&&n.classList.add("success"),o&&(o.innerText="🔓"),In(110,.25,.6),ft([40,60]);const c=document.getElementById("coriander-popup"),u=document.getElementById("coriander-accept-btn");return c?(c.classList.remove("hidden"),u&&setTimeout(()=>u.focus(),120)):window.handleAcceptWarning(),!1}else return r&&(r.classList.remove("hidden"),s&&(s.innerHTML="🔐 <b>Hint:</b> The password is… well, the password. You can type it and open. 😂")),a&&a.classList.add("error"),n&&(n.classList.remove("shake"),n.offsetWidth,n.classList.add("shake")),Gi("duck"),ft([80,50,80]),e.select(),!1};window.handleAcceptWarning=function(i){i&&i.preventDefault();const e=document.getElementById("coriander-popup"),t=document.getElementById("password-gate");e&&e.classList.add("hidden");const n=["Access Granted! Hide your cumin & coriander... you’ve entered the danger zone. 😭💀","Access Granted! Protect your spices and your sanity at all costs. 🌿💀","Entered the void! We take zero responsibility for lost coriander or lost brain cells."];ut(n[Math.floor(Math.random()*n.length)],3800),Gi("goat"),In(120,.25,.7),ft([40,60,120]),t&&t.classList.add("unlocked"),Cc(),gs()};function Qg(){const i=document.getElementById("gate-password-input");i&&setTimeout(()=>i.focus(),250),window.addEventListener("keydown",e=>{const t=document.getElementById("coriander-popup");t&&!t.classList.contains("hidden")&&e.key==="Enter"&&(e.preventDefault(),window.handleAcceptWarning())})}function e0(){const i=document.getElementById("screenshot-shield");i&&(i.classList.add("hidden"),i.style.display="none");function e(t,n){const r=document.createElement("div");r.className="dengey-popup",r.innerText="Dengey.....",r.style.left=`${t||window.innerWidth/2}px`,r.style.top=`${n||window.innerHeight/2}px`,document.body.appendChild(r),setTimeout(()=>r.remove(),1250)}window.addEventListener("contextmenu",t=>{e(t.clientX,t.clientY)},!0),console.log("%cdebadeba IT solutions","color: #00f0ff; font-size: 24px; font-weight: 800;")}Og();
