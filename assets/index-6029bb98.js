var Vl=Object.defineProperty;var Wl=(s,e,t)=>e in s?Vl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Xl=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var be=(s,e,t)=>(Wl(s,typeof e!="symbol"?e+"":e,t),t);var zm=Xl((Gm,Bs)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zs="154",Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ql=0,aa=1,Yl=2,qo=1,jl=2,ln=3,bn=0,Ct=1,cn=2,En=0,vi=1,oa=2,la=3,ca=4,Kl=5,mi=100,Jl=101,$l=102,ua=103,ha=104,Zl=200,Ql=201,ec=202,tc=203,Yo=204,jo=205,nc=206,ic=207,rc=208,sc=209,ac=210,oc=0,lc=1,cc=2,As=3,uc=4,hc=5,fc=6,dc=7,Rr=0,pc=1,mc=2,dn=0,gc=1,_c=2,vc=3,xc=4,Mc=5,Ko=300,Mi=301,yi=302,Sr=303,Rs=304,Cr=306,lt=1e3,Tt=1001,Cs=1002,vt=1003,fa=1004,Br=1005,gt=1006,yc=1007,An=1008,wn=1009,Sc=1010,Ec=1011,ks=1012,Jo=1013,yn=1014,zt=1015,hn=1016,$o=1017,Zo=1018,Gn=1020,wc=1021,Ot=1023,Tc=1024,bc=1025,Hn=1026,Si=1027,Ac=1028,Qo=1029,Rc=1030,el=1031,tl=1033,zr=33776,kr=33777,Gr=33778,Hr=33779,da=35840,pa=35841,ma=35842,ga=35843,Cc=36196,_a=37492,va=37496,xa=37808,Ma=37809,ya=37810,Sa=37811,Ea=37812,wa=37813,Ta=37814,ba=37815,Aa=37816,Ra=37817,Ca=37818,La=37819,Pa=37820,Da=37821,Vr=36492,Lc=36283,Ia=36284,Ua=36285,Na=36286,Er=2300,wr=2301,Wr=2302,Fa=2400,Oa=2401,Ba=2402,Pc=2500,nl=3e3,Vn=3001,Dc=3200,Ic=3201,Xi=0,Uc=1,Tn="",ke="srgb",Kt="srgb-linear",il="display-p3",Xr=7680,Nc=519,Fc=512,Oc=513,Bc=514,zc=515,kc=516,Gc=517,Hc=518,Vc=519,za=35044,ka="300 es",Ls=1035,fn=2e3,Tr=2001;class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let i=0,a=r.length;i<a;i++)r[i].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ga=1234567;const Oi=Math.PI/180,Ei=180/Math.PI;function Ln(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[s&255]+Mt[s>>8&255]+Mt[s>>16&255]+Mt[s>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function ct(s,e,t){return Math.max(e,Math.min(t,s))}function Gs(s,e){return(s%e+e)%e}function Wc(s,e,t,n,r){return n+(s-e)*(r-n)/(t-e)}function Xc(s,e,t){return s!==e?(t-s)/(e-s):0}function Bi(s,e,t){return(1-t)*s+t*e}function qc(s,e,t,n){return Bi(s,e,1-Math.exp(-t*n))}function Yc(s,e=1){return e-Math.abs(Gs(s,e*2)-e)}function jc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Kc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Jc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $c(s,e){return s+Math.random()*(e-s)}function Zc(s){return s*(.5-Math.random())}function Qc(s){s!==void 0&&(Ga=s);let e=Ga+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eu(s){return s*Oi}function tu(s){return s*Ei}function Ps(s){return(s&s-1)===0&&s!==0}function rl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function br(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nu(s,e,t,n,r){const i=Math.cos,a=Math.sin,o=i(t/2),l=a(t/2),c=i((e+n)/2),h=a((e+n)/2),u=i((e-n)/2),f=a((e-n)/2),p=i((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jt={DEG2RAD:Oi,RAD2DEG:Ei,generateUUID:Ln,clamp:ct,euclideanModulo:Gs,mapLinear:Wc,inverseLerp:Xc,lerp:Bi,damp:qc,pingpong:Yc,smoothstep:jc,smootherstep:Kc,randInt:Jc,randFloat:$c,randFloatSpread:Zc,seededRandom:Qc,degToRad:eu,radToDeg:tu,isPowerOfTwo:Ps,ceilPowerOfTwo:rl,floorPowerOfTwo:br,setQuaternionFromProperEuler:nu,normalize:bt,denormalize:Ni};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,r,i,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,l,c)}set(e,t,n,r,i,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=i,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],y=r[0],m=r[3],d=r[6],w=r[1],v=r[4],_=r[7],S=r[2],E=r[5],T=r[8];return i[0]=a*y+o*w+l*S,i[3]=a*m+o*v+l*E,i[6]=a*d+o*_+l*T,i[1]=c*y+h*w+u*S,i[4]=c*m+h*v+u*E,i[7]=c*d+h*_+u*T,i[2]=f*y+p*w+g*S,i[5]=f*m+p*v+g*E,i[8]=f*d+p*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*i*h+n*o*l+r*i*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*i,p=c*i-a*l,g=t*u+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=u*y,e[1]=(r*c-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=f*y,e[4]=(h*t-r*l)*y,e[5]=(r*i-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*i)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){const l=Math.cos(i),c=Math.sin(i);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Xe;function sl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Ha={};function zi(s){s in Ha||(Ha[s]=!0,console.warn(s))}function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const iu=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ru=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function su(s){return s.convertSRGBToLinear().applyMatrix3(ru)}function au(s){return s.applyMatrix3(iu).convertLinearToSRGB()}const ou={[Kt]:s=>s,[ke]:s=>s.convertSRGBToLinear(),[il]:su},lu={[Kt]:s=>s,[ke]:s=>s.convertLinearToSRGB(),[il]:au},Ht={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Kt},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ou[e],r=lu[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let $n;class al{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$n===void 0&&($n=Hi("canvas")),$n.width=e.width,$n.height=e.height;const n=$n.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$n}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let a=0;a<i.length;a++)i[a]=xi(i[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cu=0;class ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?i.push(jr(r[a].image)):i.push(jr(r[a]))}else i=jr(r);n.url=i}return t||(e.images[this.uuid]=n),n}}function jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?al.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uu=0;class xt extends Xn{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Tt,r=Tt,i=gt,a=An,o=Ot,l=wn,c=xt.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ln(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vn?ke:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lt:e.x=e.x-Math.floor(e.x);break;case Tt:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lt:e.y=e.y-Math.floor(e.y);break;case Tt:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?Vn:nl}set encoding(e){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vn?ke:Tn}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Ko;xt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,_=(p+1)/2,S=(d+1)/2,E=(h+f)/4,T=(u+y)/4,b=(g+m)/4;return v>_&&v>S?v<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(v),r=E/n,i=T/n):_>S?_<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(_),n=E/r,i=b/r):S<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(S),n=T/i,r=b/i),this.set(n,r,i,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-y)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rn extends Xn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?ke:Tn),this.texture=new xt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ll extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hu extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class It{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=i[a+0],p=i[a+1],g=i[a+2],y=i[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*y,w=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const S=Math.sqrt(v),E=Math.atan2(S,d*w);m=Math.sin(m*E)/S,o=Math.sin(o*E)/S}const _=o*w;if(l=l*m+f*_,c=c*m+p*_,h=h*m+g*_,u=u*m+y*_,m===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=i[a],f=i[a+1],p=i[a+2],g=i[a+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(i/2),f=l(n/2),p=l(r/2),g=l(i/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(i-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(i+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(i-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(i+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-i*l,this._y=r*h+a*l+i*o-n*c,this._z=i*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,i=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,h=l*n+o*t-i*r,u=l*r+i*n-a*t,f=-i*t-a*n-o*r;return this.x=c*l+f*-i+h*-o-u*-a,this.y=h*l+f*-a+u*-i-c*-o,this.z=u*l+f*-o+c*-a-h*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-i*o,this.y=i*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new J,Va=new It;class qn{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox),Zn.applyMatrix4(e.matrixWorld),this.union(Zn);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const i=r.attributes.position;for(let a=0,o=i.count;a<o;a++)tn.fromBufferAttribute(i,a).applyMatrix4(e.matrixWorld),this.expandByPoint(tn)}else r.boundingBox===null&&r.computeBoundingBox(),Zn.copy(r.boundingBox),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}const n=e.children;for(let r=0,i=n.length;r<i;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),Ji.subVectors(this.max,Li),Qn.subVectors(e.a,Li),ei.subVectors(e.b,Li),ti.subVectors(e.c,Li),mn.subVectors(ei,Qn),gn.subVectors(ti,ei),Un.subVectors(Qn,ti);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Un.z,Un.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Un.z,0,-Un.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Un.y,Un.x,0];return!Jr(t,Qn,ei,ti,Ji)||(t=[1,0,0,0,1,0,0,0,1],!Jr(t,Qn,ei,ti,Ji))?!1:($i.crossVectors(mn,gn),t=[$i.x,$i.y,$i.z],Jr(t,Qn,ei,ti,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new J,new J,new J,new J,new J,new J,new J,new J],tn=new J,Zn=new qn,Qn=new J,ei=new J,ti=new J,mn=new J,gn=new J,Un=new J,Li=new J,Ji=new J,$i=new J,Nn=new J;function Jr(s,e,t,n,r){for(let i=0,a=s.length-3;i<=a;i+=3){Nn.fromArray(s,i);const o=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const fu=new qn,Pi=new J,$r=new J;class Yn{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fu.setFromPoints(e).getCenter(n);let r=0;for(let i=0,a=e.length;i<a;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add($r)),this.expandByPoint(Pi.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new J,Zr=new J,Zi=new J,_n=new J,Qr=new J,Qi=new J,es=new J;class Hs{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zr.copy(e).add(t).multiplyScalar(.5),Zi.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(Zr);const i=e.distanceTo(t)*.5,a=-this.direction.dot(Zi),o=_n.dot(this.direction),l=-_n.dot(Zi),c=_n.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=i*h,u>=0)if(f>=-g)if(f<=g){const y=1/h;u*=y,f*=y,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=i,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-i,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*i+o)),f=u>0?-i:Math.min(Math.max(-i,-l),i),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-i,-l),i),p=f*(f+2*l)+c):(u=Math.max(0,-(a*i+o)),f=u>0?i:Math.min(Math.max(-i,-l),i),p=-u*u+f*(f+2*l)+c);else f=a>0?-i:i,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Zr).addScaledVector(Zi,f),p}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),r=nn.dot(nn)-n*n,i=e.radius*e.radius;if(r>i)return null;const a=Math.sqrt(i-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(i=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(i=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,r,i){Qr.subVectors(t,e),Qi.subVectors(n,e),es.crossVectors(Qr,Qi);let a=this.direction.dot(es),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,e);const l=o*this.direction.dot(Qi.crossVectors(_n,Qi));if(l<0)return null;const c=o*this.direction.dot(Qr.cross(_n));if(c<0||l+c>a)return null;const h=-o*_n.dot(es);return h<0?null:this.at(h/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,r,i,a,o,l,c,h,u,f,p,g,y,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,l,c,h,u,f,p,g,y,m)}set(e,t,n,r,i,a,o,l,c,h,u,f,p,g,y,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=i,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),i=1/ni.setFromMatrixColumn(e,1).length(),a=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const f=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,y=c*u;t[0]=f+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,y=c*u;t[0]=f-y*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-y*u}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(du,e,pu)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),vn.crossVectors(n,Pt),vn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),vn.crossVectors(n,Pt)),vn.normalize(),er.crossVectors(Pt,vn),r[0]=vn.x,r[4]=er.x,r[8]=Pt.x,r[1]=vn.y,r[5]=er.y,r[9]=Pt.y,r[2]=vn.z,r[6]=er.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],d=n[14],w=n[3],v=n[7],_=n[11],S=n[15],E=r[0],T=r[4],b=r[8],x=r[12],M=r[1],A=r[5],C=r[9],D=r[13],R=r[2],U=r[6],F=r[10],L=r[14],O=r[3],Y=r[7],K=r[11],H=r[15];return i[0]=a*E+o*M+l*R+c*O,i[4]=a*T+o*A+l*U+c*Y,i[8]=a*b+o*C+l*F+c*K,i[12]=a*x+o*D+l*L+c*H,i[1]=h*E+u*M+f*R+p*O,i[5]=h*T+u*A+f*U+p*Y,i[9]=h*b+u*C+f*F+p*K,i[13]=h*x+u*D+f*L+p*H,i[2]=g*E+y*M+m*R+d*O,i[6]=g*T+y*A+m*U+d*Y,i[10]=g*b+y*C+m*F+d*K,i[14]=g*x+y*D+m*L+d*H,i[3]=w*E+v*M+_*R+S*O,i[7]=w*T+v*A+_*U+S*Y,i[11]=w*b+v*C+_*F+S*K,i[15]=w*x+v*D+_*L+S*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+i*l*u-r*c*u-i*o*f+n*c*f+r*o*p-n*l*p)+y*(+t*l*p-t*c*f+i*a*f-r*a*p+r*c*h-i*l*h)+m*(+t*c*u-t*o*p-i*a*u+n*a*p+i*o*h-n*c*h)+d*(-r*o*h-t*l*u+t*o*f+r*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],w=u*m*c-y*f*c+y*l*p-o*m*p-u*l*d+o*f*d,v=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,_=h*y*c-g*u*c+g*o*p-a*y*p-h*o*d+a*u*d,S=g*u*l-h*y*l-g*o*f+a*y*f+h*o*m-a*u*m,E=t*w+n*v+r*_+i*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=w*T,e[1]=(y*f*i-u*m*i-y*r*p+n*m*p+u*r*d-n*f*d)*T,e[2]=(o*m*i-y*l*i+y*r*c-n*m*c-o*r*d+n*l*d)*T,e[3]=(u*l*i-o*f*i-u*r*c+n*f*c+o*r*p-n*l*p)*T,e[4]=v*T,e[5]=(h*m*i-g*f*i+g*r*p-t*m*p-h*r*d+t*f*d)*T,e[6]=(g*l*i-a*m*i-g*r*c+t*m*c+a*r*d-t*l*d)*T,e[7]=(a*f*i-h*l*i+h*r*c-t*f*c-a*r*p+t*l*p)*T,e[8]=_*T,e[9]=(g*u*i-h*y*i-g*n*p+t*y*p+h*n*d-t*u*d)*T,e[10]=(a*y*i-g*o*i+g*n*c-t*y*c-a*n*d+t*o*d)*T,e[11]=(h*o*i-a*u*i-h*n*c+t*u*c+a*n*p-t*o*p)*T,e[12]=S*T,e[13]=(h*y*r-g*u*r+g*n*f-t*y*f-h*n*m+t*u*m)*T,e[14]=(g*o*r-a*y*r-g*n*l+t*y*l+a*n*m-t*o*m)*T,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,l=e.z,c=i*a,h=i*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,i*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,c=i+i,h=a+a,u=o+o,f=i*c,p=i*h,g=i*u,y=a*h,m=a*u,d=o*u,w=l*c,v=l*h,_=l*u,S=n.x,E=n.y,T=n.z;return r[0]=(1-(y+d))*S,r[1]=(p+_)*S,r[2]=(g-v)*S,r[3]=0,r[4]=(p-_)*E,r[5]=(1-(f+d))*E,r[6]=(m+w)*E,r[7]=0,r[8]=(g+v)*T,r[9]=(m-w)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let i=ni.set(r[0],r[1],r[2]).length();const a=ni.set(r[4],r[5],r[6]).length(),o=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const c=1/i,h=1/a,u=1/o;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=fn){const l=this.elements,c=2*i/(t-e),h=2*i/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let p,g;if(o===fn)p=-(a+i)/(a-i),g=-2*a*i/(a-i);else if(o===Tr)p=-a/(a-i),g=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=fn){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-i),f=(t+e)*c,p=(n+r)*h;let g,y;if(o===fn)g=(a+i)*u,y=-2*u;else if(o===Tr)g=i*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new J,Vt=new Ie,du=new J(0,0,0),pu=new J(1,1,1),vn=new J,er=new J,Pt=new J,Wa=new Ie,Xa=new It;class kt{constructor(e=0,t=0,n=0,r=kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,i=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kt.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mu=0;const qa=new J,ii=new It,rn=new Ie,tr=new J,Di=new J,gu=new J,_u=new It,Ya=new J(1,0,0),ja=new J(0,1,0),Ka=new J(0,0,1),vu={type:"added"},Ja={type:"removed"};class nt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new J,t=new kt,n=new It,r=new J(1,1,1);function i(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Xe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(Ya,e)}rotateY(e){return this.rotateOnAxis(ja,e)}rotateZ(e){return this.rotateOnAxis(Ka,e)}translateOnAxis(e,t){return qa.copy(e).applyQuaternion(this.quaternion),this.position.add(qa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ya,e)}translateY(e){return this.translateOnAxis(ja,e)}translateZ(e){return this.translateOnAxis(Ka,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tr.copy(e):tr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Di,tr,this.up):rn.lookAt(tr,Di,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(rn),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ja)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ja)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,_u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let i=0,a=r.length;i<a;i++){const o=r[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];i(e.shapes,u)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));r.material=o}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(i(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}nt.DEFAULT_UP=new J(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new J,sn=new J,ts=new J,an=new J,ri=new J,si=new J,$a=new J,ns=new J,is=new J,rs=new J;let nr=!1;class Yt{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wt.subVectors(e,t),r.cross(Wt);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Wt.subVectors(r,t),sn.subVectors(n,t),ts.subVectors(e,t);const a=Wt.dot(Wt),o=Wt.dot(sn),l=Wt.dot(ts),c=sn.dot(sn),h=sn.dot(ts),u=a*c-o*o;if(u===0)return i.set(-2,-1,-1);const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return i.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,r,i,a,o,l){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),this.getInterpolation(e,t,n,r,i,a,o,l)}static getInterpolation(e,t,n,r,i,a,o,l){return this.getBarycoord(e,t,n,r,an),l.setScalar(0),l.addScaledVector(i,an.x),l.addScaledVector(a,an.y),l.addScaledVector(o,an.z),l}static isFrontFacing(e,t,n,r){return Wt.subVectors(n,t),sn.subVectors(e,t),Wt.cross(sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Wt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,i){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}getInterpolation(e,t,n,r,i){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,i=this.c;let a,o;ri.subVectors(r,n),si.subVectors(i,n),ns.subVectors(e,n);const l=ri.dot(ns),c=si.dot(ns);if(l<=0&&c<=0)return t.copy(n);is.subVectors(e,r);const h=ri.dot(is),u=si.dot(is);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ri,a);rs.subVectors(e,i);const p=ri.dot(rs),g=si.dot(rs);if(g>=0&&p<=g)return t.copy(i);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(si,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return $a.subVectors(i,r),o=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector($a,o);const d=1/(m+y+f);return a=y*d,o=f*d,t.copy(n).addScaledVector(ri,a).addScaledVector(si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xu=0;class Pn extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=vi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=jo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(t){const i=r(e.textures),a=r(e.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xt={h:0,s:0,l:0},ir={h:0,s:0,l:0};function ss(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ht.workingColorSpace){if(e=Gs(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,a=2*n-i;this.r=ss(a,i,e+1/3),this.g=ss(a,i,e),this.b=ss(a,i,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,t=ke){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const n=ul[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return Ht.fromWorkingColorSpace(yt.copy(this),e),Math.round(ct(yt.r*255,0,255))*65536+Math.round(ct(yt.g*255,0,255))*256+Math.round(ct(yt.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,r=yt.g,i=yt.b,a=Math.max(n,r,i),o=Math.min(n,r,i);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-i)/u+(r<i?6:0);break;case r:l=(i-n)/u+2;break;case i:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=ke){Ht.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,r=yt.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=n,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(ir);const n=Bi(Xt.h,ir.h,t),r=Bi(Xt.s,ir.s,t),i=Bi(Xt.l,ir.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ne;Ne.NAMES=ul;class Vs extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=Mu();function Mu(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const i=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,i[l]=c|h}for(let l=1024;l<2048;++l)i[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:i,exponentTable:a,offsetTable:o}}function yu(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ct(s,-65504,65504),un.floatView[0]=s;const e=un.uint32View[0],t=e>>23&511;return un.baseTable[t]+((e&8388607)>>un.shiftTable[t])}function Su(s){const e=s>>10;return un.uint32View[0]=un.mantissaTable[un.offsetTable[e]+(s&1023)]+un.exponentTable[e],un.floatView[0]}const rr={toHalfFloat:yu,fromHalfFloat:Su},ot=new J,sr=new Fe;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=za,this.updateRange={offset:0,count:-1},this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==za&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ws extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xs extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eu=0;const Ft=new Ie,as=new nt,ai=new J,Dt=new qn,Ii=new qn,mt=new J;class Ut extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?Xs:Ws)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Xe().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return as.lookAt(e),as.updateMatrix(),this.applyMatrix4(as.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const i=t[n];Dt.setFromBufferAttribute(i),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Dt.min,Ii.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,Ii.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(Ii.min),Dt.expandByPoint(Ii.max))}Dt.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)mt.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mt.fromBufferAttribute(o,c),l&&(ai.fromBufferAttribute(e,c),mt.add(ai)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<o;M++)c[M]=new J,h[M]=new J;const u=new J,f=new J,p=new J,g=new Fe,y=new Fe,m=new Fe,d=new J,w=new J;function v(M,A,C){u.fromArray(r,M*3),f.fromArray(r,A*3),p.fromArray(r,C*3),g.fromArray(a,M*2),y.fromArray(a,A*2),m.fromArray(a,C*2),f.sub(u),p.sub(u),y.sub(g),m.sub(g);const D=1/(y.x*m.y-m.x*y.y);isFinite(D)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(D),w.copy(p).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(D),c[M].add(d),c[A].add(d),c[C].add(d),h[M].add(w),h[A].add(w),h[C].add(w))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let M=0,A=_.length;M<A;++M){const C=_[M],D=C.start,R=C.count;for(let U=D,F=D+R;U<F;U+=3)v(n[U+0],n[U+1],n[U+2])}const S=new J,E=new J,T=new J,b=new J;function x(M){T.fromArray(i,M*3),b.copy(T);const A=c[M];S.copy(A),S.sub(T.multiplyScalar(T.dot(A))).normalize(),E.crossVectors(b,A);const D=E.dot(h[M])<0?-1:1;l[M*4]=S.x,l[M*4+1]=S.y,l[M*4+2]=S.z,l[M*4+3]=D}for(let M=0,A=_.length;M<A;++M){const C=_[M],D=C.start,R=C.count;for(let U=D,F=D+R;U<F;U+=3)x(n[U+0]),x(n[U+1]),x(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new J,i=new J,a=new J,o=new J,l=new J,c=new J,h=new J,u=new J;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),i.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,i),u.subVectors(r,i),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,i),u.subVectors(r,i),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new $t(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const i=e.morphAttributes;for(const c in i){const h=[],u=i[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new Ie,Fn=new Hs,ar=new Yn,Qa=new J,oi=new J,li=new J,ci=new J,os=new J,or=new J,lr=new Fe,cr=new Fe,ur=new Fe,eo=new J,to=new J,no=new J,hr=new J,fr=new J;class Rt extends nt{constructor(e=new Ut,t=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(i&&o){or.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const h=o[l],u=i[l];h!==0&&(os.fromBufferAttribute(u,e),a?or.addScaledVector(os,h):or.addScaledVector(os.sub(t),h))}t.add(or)}return t}raycast(e,t){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(i),Fn.copy(e.ray).recast(e.near),!(ar.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(ar,Qa)===null||Fn.origin.distanceToSquared(Qa)>(e.far-e.near)**2))&&(Za.copy(i).invert(),Fn.copy(e.ray).applyMatrix4(Za),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fn)))}_computeIntersections(e,t,n){let r;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv1,u=i.attributes.normal,f=i.groups,p=i.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const m=f[g],d=a[m.materialIndex],w=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,S=v;_<S;_+=3){const E=o.getX(_),T=o.getX(_+1),b=o.getX(_+2);r=dr(this,d,e,n,c,h,u,E,T,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const w=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);r=dr(this,a,e,n,c,h,u,w,v,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const m=f[g],d=a[m.materialIndex],w=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,S=v;_<S;_+=3){const E=_,T=_+1,b=_+2;r=dr(this,d,e,n,c,h,u,E,T,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const w=m,v=m+1,_=m+2;r=dr(this,a,e,n,c,h,u,w,v,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wu(s,e,t,n,r,i,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,i,r,!0,o):l=n.intersectTriangle(r,i,a,e.side===bn,o),l===null)return null;fr.copy(o),fr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(fr);return c<t.near||c>t.far?null:{distance:c,point:fr.clone(),object:s}}function dr(s,e,t,n,r,i,a,o,l,c){s.getVertexPosition(o,oi),s.getVertexPosition(l,li),s.getVertexPosition(c,ci);const h=wu(s,e,t,n,oi,li,ci,hr);if(h){r&&(lr.fromBufferAttribute(r,o),cr.fromBufferAttribute(r,l),ur.fromBufferAttribute(r,c),h.uv=Yt.getInterpolation(hr,oi,li,ci,lr,cr,ur,new Fe)),i&&(lr.fromBufferAttribute(i,o),cr.fromBufferAttribute(i,l),ur.fromBufferAttribute(i,c),h.uv1=Yt.getInterpolation(hr,oi,li,ci,lr,cr,ur,new Fe),h.uv2=h.uv1),a&&(eo.fromBufferAttribute(a,o),to.fromBufferAttribute(a,l),no.fromBufferAttribute(a,c),h.normal=Yt.getInterpolation(hr,oi,li,ci,eo,to,no,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new J,materialIndex:0};Yt.getNormal(oi,li,ci,u.normal),h.face=u}return h}class Wn extends Ut{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};const o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,i,0),g("z","y","x",1,-1,n,t,-e,a,i,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,i,4),g("x","y","z",-1,-1,e,t,-n,r,i,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(y,m,d,w,v,_,S,E,T,b,x){const M=_/T,A=S/b,C=_/2,D=S/2,R=E/2,U=T+1,F=b+1;let L=0,O=0;const Y=new J;for(let K=0;K<F;K++){const H=K*A-D;for(let V=0;V<U;V++){const B=V*M-C;Y[y]=B*w,Y[m]=H*v,Y[d]=R,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[d]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(V/T),u.push(1-K/b),L+=1}}for(let K=0;K<b;K++)for(let H=0;H<T;H++){const V=f+H+U*K,B=f+H+U*(K+1),N=f+(H+1)+U*(K+1),P=f+(H+1)+U*K;l.push(V,B,P),l.push(B,N,P),O+=6}o.addGroup(p,O,x),p+=O,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Et(s){const e={};for(let t=0;t<s.length;t++){const n=wi(s[t]);for(const r in n)e[r]=n[r]}return e}function Tu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hl(s){return s.getRenderTarget()===null?s.outputColorSpace:Kt}const bu={clone:wi,merge:Et};var Au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Au,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Tu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fl extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends fl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ei*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;i+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,hi=1;class Cu extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new wt(ui,hi,e,t);r.layers=this.layers,this.add(r);const i=new wt(ui,hi,e,t);i.layers=this.layers,this.add(i);const a=new wt(ui,hi,e,t);a.layers=this.layers,this.add(a);const o=new wt(ui,hi,e,t);o.layers=this.layers,this.add(o);const l=new wt(ui,hi,e,t);l.layers=this.layers,this.add(l);const c=new wt(ui,hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,l]=t;for(const c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,i,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=dn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class dl extends xt{constructor(e,t,n,r,i,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,r,i,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lu extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vn?ke:Tn),this.texture=new dl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wn(5,5,5),i=new pn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:En});i.uniforms.tEquirect.value=t;const a=new Rt(r,i),o=t.minFilter;return t.minFilter===An&&(t.minFilter=gt),new Cu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(i)}}const ls=new J,Pu=new J,Du=new Xe;class Bn{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ls.subVectors(n,t).cross(Pu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ls),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Du.getNormalMatrix(e),r=this.coplanarPoint(ls).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Yn,pr=new J;class qs{constructor(e=new Bn,t=new Bn,n=new Bn,r=new Bn,i=new Bn,a=new Bn){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],w=r[13],v=r[14],_=r[15];if(n[0].setComponents(l-i,f-c,m-p,_-d).normalize(),n[1].setComponents(l+i,f+c,m+p,_+d).normalize(),n[2].setComponents(l+a,f+h,m+g,_+w).normalize(),n[3].setComponents(l-a,f-h,m-g,_-w).normalize(),n[4].setComponents(l-o,f-u,m-y,_-v).normalize(),t===fn)n[5].setComponents(l+o,f+u,m+y,_+v).normalize();else if(t===Tr)n[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pl(){let s=null,e=!1,t=null,n=null;function r(i,a){t(i,a),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function Iu(s,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,f=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function i(c,h,u){const f=h.array,p=h.updateRange;s.bindBuffer(u,c),p.count===-1?s.bufferSubData(u,0,f):(t?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,h)):u.version<c.version&&(i(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Ys extends Ut{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const i=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],y=[],m=[];for(let d=0;d<h;d++){const w=d*f-a;for(let v=0;v<c;v++){const _=v*u-i;g.push(_,-w,0),y.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){const v=w+c*d,_=w+c*(d+1),S=w+1+c*(d+1),E=w+1+c*d;p.push(v,_,E),p.push(_,S,E)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var Uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
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
#endif`,Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,qu=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,th=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ih=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,hh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
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
}`,Mh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Th=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ph=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Dh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hh=`#if defined( USE_POINTS_UV )
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
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Af=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,zf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Gf=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Yf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Kf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,$f=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qf=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ed=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,td=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,nd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,id=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,sd=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ad=`uniform float size;
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
}`,od=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ld=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,cd=`uniform vec3 color;
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
}`,ud=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,hd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ve={alphahash_fragment:Uu,alphahash_pars_fragment:Nu,alphamap_fragment:Fu,alphamap_pars_fragment:Ou,alphatest_fragment:Bu,alphatest_pars_fragment:zu,aomap_fragment:ku,aomap_pars_fragment:Gu,begin_vertex:Hu,beginnormal_vertex:Vu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:ju,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:Ju,color_fragment:$u,color_pars_fragment:Zu,color_pars_vertex:Qu,color_vertex:eh,common:th,cube_uv_reflection_fragment:nh,defaultnormal_vertex:ih,displacementmap_pars_vertex:rh,displacementmap_vertex:sh,emissivemap_fragment:ah,emissivemap_pars_fragment:oh,colorspace_fragment:lh,colorspace_pars_fragment:ch,envmap_fragment:uh,envmap_common_pars_fragment:hh,envmap_pars_fragment:fh,envmap_pars_vertex:dh,envmap_physical_pars_fragment:Th,envmap_vertex:ph,fog_vertex:mh,fog_pars_vertex:gh,fog_fragment:_h,fog_pars_fragment:vh,gradientmap_pars_fragment:xh,lightmap_fragment:Mh,lightmap_pars_fragment:yh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:Eh,lights_pars_begin:wh,lights_toon_fragment:bh,lights_toon_pars_fragment:Ah,lights_phong_fragment:Rh,lights_phong_pars_fragment:Ch,lights_physical_fragment:Lh,lights_physical_pars_fragment:Ph,lights_fragment_begin:Dh,lights_fragment_maps:Ih,lights_fragment_end:Uh,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:Bh,map_fragment:zh,map_pars_fragment:kh,map_particle_fragment:Gh,map_particle_pars_fragment:Hh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:Wh,morphcolor_vertex:Xh,morphnormal_vertex:qh,morphtarget_pars_vertex:Yh,morphtarget_vertex:jh,normal_fragment_begin:Kh,normal_fragment_maps:Jh,normal_pars_fragment:$h,normal_pars_vertex:Zh,normal_vertex:Qh,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:sf,opaque_fragment:af,packing:of,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:uf,dithering_pars_fragment:hf,roughnessmap_fragment:ff,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:_f,skinbase_vertex:vf,skinning_pars_vertex:xf,skinning_vertex:Mf,skinnormal_vertex:yf,specularmap_fragment:Sf,specularmap_pars_fragment:Ef,tonemapping_fragment:wf,tonemapping_pars_fragment:Tf,transmission_fragment:bf,transmission_pars_fragment:Af,uv_pars_fragment:Rf,uv_pars_vertex:Cf,uv_vertex:Lf,worldpos_vertex:Pf,background_vert:Df,background_frag:If,backgroundCube_vert:Uf,backgroundCube_frag:Nf,cube_vert:Ff,cube_frag:Of,depth_vert:Bf,depth_frag:zf,distanceRGBA_vert:kf,distanceRGBA_frag:Gf,equirect_vert:Hf,equirect_frag:Vf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:qf,meshbasic_frag:Yf,meshlambert_vert:jf,meshlambert_frag:Kf,meshmatcap_vert:Jf,meshmatcap_frag:$f,meshnormal_vert:Zf,meshnormal_frag:Qf,meshphong_vert:ed,meshphong_frag:td,meshphysical_vert:nd,meshphysical_frag:id,meshtoon_vert:rd,meshtoon_frag:sd,points_vert:ad,points_frag:od,shadow_vert:ld,shadow_frag:cd,sprite_vert:ud,sprite_frag:hd},we={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},jt={basic:{uniforms:Et([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Et([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Et([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Et([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Et([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Et([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Et([we.points,we.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Et([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Et([we.common,we.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Et([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Et([we.sprite,we.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Et([we.common,we.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Et([we.lights,we.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};jt.physical={uniforms:Et([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const mr={r:0,b:0,g:0};function fd(s,e,t,n,r,i,a){const o=new Ne(0);let l=i===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let w=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),w=!0),s.xr.getEnvironmentBlendMode()){case"opaque":w=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),w=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),w=!0;break}(s.autoClear||w)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cr)?(h===void 0&&(h=new Rt(new Wn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:wi(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=v.colorSpace!==ke,(u!==v||f!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Rt(new Ys(2,2),new pn({name:"BackgroundMaterial",uniforms:wi(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==ke,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,d){m.getRGB(mr,hl(s)),n.buffers.color.setClear(mr.r,mr.g,mr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:g}}function dd(s,e,t,n){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||i!==null,o={},l=m(null);let c=l,h=!1;function u(R,U,F,L,O){let Y=!1;if(a){const K=y(L,F,U);c!==K&&(c=K,p(c.object)),Y=d(R,L,F,O),Y&&w(R,L,F,O)}else{const K=U.wireframe===!0;(c.geometry!==L.id||c.program!==F.id||c.wireframe!==K)&&(c.geometry=L.id,c.program=F.id,c.wireframe=K,Y=!0)}O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,b(R,U,F,L),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function f(){return n.isWebGL2?s.createVertexArray():i.createVertexArrayOES()}function p(R){return n.isWebGL2?s.bindVertexArray(R):i.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):i.deleteVertexArrayOES(R)}function y(R,U,F){const L=F.wireframe===!0;let O=o[R.id];O===void 0&&(O={},o[R.id]=O);let Y=O[U.id];Y===void 0&&(Y={},O[U.id]=Y);let K=Y[L];return K===void 0&&(K=m(f()),Y[L]=K),K}function m(R){const U=[],F=[],L=[];for(let O=0;O<r;O++)U[O]=0,F[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:L,object:R,attributes:{},index:null}}function d(R,U,F,L){const O=c.attributes,Y=U.attributes;let K=0;const H=F.getAttributes();for(const V in H)if(H[V].location>=0){const N=O[V];let P=Y[V];if(P===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),N===void 0||N.attribute!==P||P&&N.data!==P.data)return!0;K++}return c.attributesNum!==K||c.index!==L}function w(R,U,F,L){const O={},Y=U.attributes;let K=0;const H=F.getAttributes();for(const V in H)if(H[V].location>=0){let N=Y[V];N===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(N=R.instanceColor));const P={};P.attribute=N,N&&N.data&&(P.data=N.data),O[V]=P,K++}c.attributes=O,c.attributesNum=K,c.index=L}function v(){const R=c.newAttributes;for(let U=0,F=R.length;U<F;U++)R[U]=0}function _(R){S(R,0)}function S(R,U){const F=c.newAttributes,L=c.enabledAttributes,O=c.attributeDivisors;F[R]=1,L[R]===0&&(s.enableVertexAttribArray(R),L[R]=1),O[R]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),O[R]=U)}function E(){const R=c.newAttributes,U=c.enabledAttributes;for(let F=0,L=U.length;F<L;F++)U[F]!==R[F]&&(s.disableVertexAttribArray(F),U[F]=0)}function T(R,U,F,L,O,Y,K){K===!0?s.vertexAttribIPointer(R,U,F,O,Y):s.vertexAttribPointer(R,U,F,L,O,Y)}function b(R,U,F,L){if(n.isWebGL2===!1&&(R.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const O=L.attributes,Y=F.getAttributes(),K=U.defaultAttributeValues;for(const H in Y){const V=Y[H];if(V.location>=0){let B=O[H];if(B===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),B!==void 0){const N=B.normalized,P=B.itemSize,W=t.get(B);if(W===void 0)continue;const j=W.buffer,Z=W.type,le=W.bytesPerElement,re=n.isWebGL2===!0&&(Z===s.INT||Z===s.UNSIGNED_INT||B.gpuType===Jo);if(B.isInterleavedBufferAttribute){const te=B.data,X=te.stride,Le=B.offset;if(te.isInstancedInterleavedBuffer){for(let ye=0;ye<V.locationSize;ye++)S(V.location+ye,te.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<V.locationSize;ye++)_(V.location+ye);s.bindBuffer(s.ARRAY_BUFFER,j);for(let ye=0;ye<V.locationSize;ye++)T(V.location+ye,P/V.locationSize,Z,N,X*le,(Le+P/V.locationSize*ye)*le,re)}else{if(B.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)S(V.location+te,B.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let te=0;te<V.locationSize;te++)_(V.location+te);s.bindBuffer(s.ARRAY_BUFFER,j);for(let te=0;te<V.locationSize;te++)T(V.location+te,P/V.locationSize,Z,N,P*le,P/V.locationSize*te*le,re)}}else if(K!==void 0){const N=K[H];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(V.location,N);break;case 3:s.vertexAttrib3fv(V.location,N);break;case 4:s.vertexAttrib4fv(V.location,N);break;default:s.vertexAttrib1fv(V.location,N)}}}}E()}function x(){C();for(const R in o){const U=o[R];for(const F in U){const L=U[F];for(const O in L)g(L[O].object),delete L[O];delete U[F]}delete o[R]}}function M(R){if(o[R.id]===void 0)return;const U=o[R.id];for(const F in U){const L=U[F];for(const O in L)g(L[O].object),delete L[O];delete U[F]}delete o[R.id]}function A(R){for(const U in o){const F=o[U];if(F[R.id]===void 0)continue;const L=F[R.id];for(const O in L)g(L[O].object),delete L[O];delete F[R.id]}}function C(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:C,resetDefaultState:D,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:_,disableUnusedAttributes:E}}function pd(s,e,t,n){const r=n.isWebGL2;let i;function a(c){i=c}function o(c,h){s.drawArrays(i,c,h),t.update(h,i,1)}function l(c,h,u){if(u===0)return;let f,p;if(r)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](i,c,h,u),t.update(h,i,u)}this.setMode=a,this.render=o,this.renderInstances=l}function md(s,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=i(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,_=a||e.has("OES_texture_float"),S=v&&_,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:E}}function gd(s){const e=this;let t=null,n=0,r=!1,i=!1;const a=new Bn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||r;return r=f,n=u.length,p},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!r||g===null||g.length===0||i&&!m)i?h(null):c();else{const w=i?0:n,v=w*4;let _=d.clippingState||null;l.value=_,_=h(g,f,v,p);for(let S=0;S!==v;++S)_[S]=t[S];d.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const d=p+y*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,_=p;v!==y;++v,_+=4)a.copy(u[v]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function _d(s){let e=new WeakMap;function t(a,o){return o===Sr?a.mapping=Mi:o===Rs&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Sr||o===Rs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lu(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class js extends fl{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,a=i+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,io=[.125,.215,.35,.446,.526,.582],kn=20,cs=new js,ro=new Ne;let us=null;const zn=(1+Math.sqrt(5))/2,fi=1/zn,so=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,zn,fi),new J(0,zn,-fi),new J(fi,0,zn),new J(-fi,0,zn),new J(zn,fi,0),new J(-zn,fi,0)];class Ds{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){us=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(us),e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),us=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:hn,format:Ot,colorSpace:Kt,depthBuffer:!1},r=ao(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ao(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vd(i)),this._blurMaterial=xd(i,e,t)}return r}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,cs)}_sceneToCubeUV(e,t,n,r){const o=new wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ro),h.toneMapping=dn,h.autoClear=!1;const p=new Vs({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new Rt(new Wn,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(ro),y=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):w===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;gr(r,w*v,d>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Mi||e.mapping===yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oo());const i=r?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=so[(r-1)%so.length];this._blur(e,r-1,r,i,a)}t.autoClear=n}_blur(e,t,n,r,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",i),this._halfBlur(a,e,n,n,r,"longitudinal",i)}_halfBlur(e,t,n,r,i,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Rt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(i)?Math.PI/(2*p):2*Math.PI/(2*kn-1),y=i/g,m=isFinite(i)?1+Math.floor(h*y):kn;m>kn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const d=[];let w=0;for(let T=0;T<kn;++T){const b=T/y,x=Math.exp(-b*b/2);d.push(x),T===0?w+=x:T<m&&(w+=2*x)}for(let T=0;T<d.length;T++)d[T]=d[T]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const _=this._sizeLods[r],S=3*_*(r>v-gi?r-v+gi:0),E=4*(this._cubeSize-_);gr(t,S,E,3*_,2*_),l.setRenderTarget(t),l.render(u,cs)}}function vd(s){const e=[],t=[],n=[];let r=s;const i=s-gi+1+io.length;for(let a=0;a<i;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>s-gi?l=io[a-s+gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,d=1,w=new Float32Array(y*g*p),v=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,b=E>2?0:-1,x=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];w.set(x,y*g*E),v.set(f,m*g*E);const M=[E,E,E,E,E,E];_.set(M,d*g*E)}const S=new Ut;S.setAttribute("position",new $t(w,y)),S.setAttribute("uv",new $t(v,m)),S.setAttribute("faceIndex",new $t(_,d)),e.push(S),r>gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ao(s,e,t){const n=new Rn(s,e,t);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function xd(s,e,t){const n=new Float32Array(kn),r=new J(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ks(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function oo(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function lo(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ks(){return`

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
	`}function Md(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sr||l===Rs,h=l===Mi||l===yi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ds(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new Ds(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",i),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Sd(s,e,t,n){const r={},i=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=i.get(f);p&&(e.remove(p),i.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const y=p[g];for(let m=0,d=y.length;m<d;m++)e.update(y[m],s.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let y=0;if(p!==null){const w=p.array;y=p.version;for(let v=0,_=w.length;v<_;v+=3){const S=w[v+0],E=w[v+1],T=w[v+2];f.push(S,E,E,T,T,S)}}else{const w=g.array;y=g.version;for(let v=0,_=w.length/3-1;v<_;v+=3){const S=v+0,E=v+1,T=v+2;f.push(S,E,E,T,T,S)}}const m=new(sl(f)?Xs:Ws)(f,1);m.version=y;const d=i.get(u);d&&e.remove(d),i.set(u,m)}function h(u){const f=i.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return i.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ed(s,e,t,n){const r=n.isWebGL2;let i;function a(f){i=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,p){s.drawElements(i,p,o,f*l),t.update(p,i,1)}function u(f,p,g){if(g===0)return;let y,m;if(r)y=s,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](i,p,o,f*l,g),t.update(p,i,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function wd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(i/3);break;case s.LINES:t.lines+=o*(i/2);break;case s.LINE_STRIP:t.lines+=o*(i-1);break;case s.LINE_LOOP:t.lines+=o*i;break;case s.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Td(s,e){return s[0]-e[0]}function bd(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ad(s,e,t){const n={},r=new Float32Array(8),i=new WeakMap,a=new Je,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let m=i.get(h);if(m===void 0||m.count!==y){let U=function(){D.dispose(),i.delete(h),h.removeEventListener("dispose",U)};var p=U;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),_===!0&&(x=2),S===!0&&(x=3);let M=h.attributes.position.count*x,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*A*4*y),D=new ll(C,M,A,y);D.type=zt,D.needsUpdate=!0;const R=x*4;for(let F=0;F<y;F++){const L=E[F],O=T[F],Y=b[F],K=M*A*4*F;for(let H=0;H<L.count;H++){const V=H*R;v===!0&&(a.fromBufferAttribute(L,H),C[K+V+0]=a.x,C[K+V+1]=a.y,C[K+V+2]=a.z,C[K+V+3]=0),_===!0&&(a.fromBufferAttribute(O,H),C[K+V+4]=a.x,C[K+V+5]=a.y,C[K+V+6]=a.z,C[K+V+7]=0),S===!0&&(a.fromBufferAttribute(Y,H),C[K+V+8]=a.x,C[K+V+9]=a.y,C[K+V+10]=a.z,C[K+V+11]=Y.itemSize===4?a.w:1)}}m={count:y,texture:D,size:new Fe(M,A)},i.set(h,m),h.addEventListener("dispose",U)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const w=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",w),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let y=n[h.id];if(y===void 0||y.length!==g){y=[];for(let _=0;_<g;_++)y[_]=[_,0];n[h.id]=y}for(let _=0;_<g;_++){const S=y[_];S[0]=_,S[1]=f[_]}y.sort(bd);for(let _=0;_<8;_++)_<g&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Td);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let w=0;for(let _=0;_<8;_++){const S=o[_],E=S[0],T=S[1];E!==Number.MAX_SAFE_INTEGER&&T?(m&&h.getAttribute("morphTarget"+_)!==m[E]&&h.setAttribute("morphTarget"+_,m[E]),d&&h.getAttribute("morphNormal"+_)!==d[E]&&h.setAttribute("morphNormal"+_,d[E]),r[_]=T,w+=T):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),d&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}const v=h.morphTargetsRelative?1:1-w;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:l}}function Rd(s,e,t,n){let r=new WeakMap;function i(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:a}}const ml=new xt,gl=new ll,_l=new hu,vl=new dl,co=[],uo=[],ho=new Float32Array(16),fo=new Float32Array(9),po=new Float32Array(4);function Ti(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let i=co[r];if(i===void 0&&(i=new Float32Array(r),co[r]=i),e!==0){n.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(i,o)}return i}function ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Lr(s,e){let t=uo[e];t===void 0&&(t=new Int32Array(e),uo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Cd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ld(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function Pd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function Dd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function Id(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;po.set(n),s.uniformMatrix2fv(this.addr,!1,po),ft(t,n)}}function Ud(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;fo.set(n),s.uniformMatrix3fv(this.addr,!1,fo),ft(t,n)}}function Nd(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,n))return;ho.set(n),s.uniformMatrix4fv(this.addr,!1,ho),ft(t,n)}}function Fd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Od(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function Bd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function zd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function kd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Gd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function Hd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function Vd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function Wd(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||ml,r)}function Xd(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||_l,r)}function qd(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||vl,r)}function Yd(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gl,r)}function jd(s){switch(s){case 5126:return Cd;case 35664:return Ld;case 35665:return Pd;case 35666:return Dd;case 35674:return Id;case 35675:return Ud;case 35676:return Nd;case 5124:case 35670:return Fd;case 35667:case 35671:return Od;case 35668:case 35672:return Bd;case 35669:case 35673:return zd;case 5125:return kd;case 36294:return Gd;case 36295:return Hd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Wd;case 35679:case 36299:case 36307:return Xd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Yd}}function Kd(s,e){s.uniform1fv(this.addr,e)}function Jd(s,e){const t=Ti(e,this.size,2);s.uniform2fv(this.addr,t)}function $d(s,e){const t=Ti(e,this.size,3);s.uniform3fv(this.addr,t)}function Zd(s,e){const t=Ti(e,this.size,4);s.uniform4fv(this.addr,t)}function Qd(s,e){const t=Ti(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ep(s,e){const t=Ti(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tp(s,e){const t=Ti(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function np(s,e){s.uniform1iv(this.addr,e)}function ip(s,e){s.uniform2iv(this.addr,e)}function rp(s,e){s.uniform3iv(this.addr,e)}function sp(s,e){s.uniform4iv(this.addr,e)}function ap(s,e){s.uniform1uiv(this.addr,e)}function op(s,e){s.uniform2uiv(this.addr,e)}function lp(s,e){s.uniform3uiv(this.addr,e)}function cp(s,e){s.uniform4uiv(this.addr,e)}function up(s,e,t){const n=this.cache,r=e.length,i=Lr(t,r);ht(n,i)||(s.uniform1iv(this.addr,i),ft(n,i));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ml,i[a])}function hp(s,e,t){const n=this.cache,r=e.length,i=Lr(t,r);ht(n,i)||(s.uniform1iv(this.addr,i),ft(n,i));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_l,i[a])}function fp(s,e,t){const n=this.cache,r=e.length,i=Lr(t,r);ht(n,i)||(s.uniform1iv(this.addr,i),ft(n,i));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||vl,i[a])}function dp(s,e,t){const n=this.cache,r=e.length,i=Lr(t,r);ht(n,i)||(s.uniform1iv(this.addr,i),ft(n,i));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||gl,i[a])}function pp(s){switch(s){case 5126:return Kd;case 35664:return Jd;case 35665:return $d;case 35666:return Zd;case 35674:return Qd;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return rp;case 35669:case 35673:return sp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return dp}}class mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=jd(t.type)}}class gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=pp(t.type)}}class _p{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let i=0,a=r.length;i!==a;++i){const o=r[i];o.setValue(e,t[o.id],n)}}}const hs=/(\w+)(\])?(\[|\.)?/g;function mo(s,e){s.seq.push(e),s.map[e.id]=e}function vp(s,e,t){const n=s.name,r=n.length;for(hs.lastIndex=0;;){const i=hs.exec(n),a=hs.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mo(t,c===void 0?new mp(o,s,e):new gp(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new _p(o),mo(t,u)),t=u}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=e.getActiveUniform(t,r),a=e.getUniformLocation(t,i.name);vp(i,a,this)}}setValue(e,t,n,r){const i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){const o=t[i],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,i=e.length;r!==i;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function go(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let xp=0;function Mp(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=r;a<i;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function yp(s){switch(s){case Kt:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function _o(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const a=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+Mp(s.getShaderSource(e),a)}else return r}function Sp(s,e){const t=yp(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ep(s,e){let t;switch(e){case gc:t="Linear";break;case _c:t="Reinhard";break;case vc:t="OptimizedCineon";break;case xc:t="ACESFilmic";break;case Mc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fi).join(`
`)}function Tp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=s.getActiveAttrib(e,r),a=i.name;let o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Fi(s){return s!==""}function vo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function Is(s){return s.replace(Ap,Cp)}const Rp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cp(s,e){let t=Ve[e];if(t===void 0){const n=Rp.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Is(t)}const Lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mo(s){return s.replace(Lp,Pp)}function Pp(s,e,t,n){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function yo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Ip(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mi:case yi:e="ENVMAP_TYPE_CUBE";break;case Cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Up(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Np(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rr:e="ENVMAP_BLENDING_MULTIPLY";break;case pc:e="ENVMAP_BLENDING_MIX";break;case mc:e="ENVMAP_BLENDING_ADD";break}return e}function Fp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Op(s,e,t,n){const r=s.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Dp(t),c=Ip(t),h=Up(t),u=Np(t),f=Fp(t),p=t.isWebGL2?"":wp(t),g=Tp(i),y=r.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fi).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fi).join(`
`),d.length>0&&(d+=`
`)):(m=[yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),d=[p,yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==dn?Ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Sp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fi).join(`
`)),a=Is(a),a=vo(a,t),a=xo(a,t),o=Is(o),o=vo(o,t),o=xo(o,t),a=Mo(a),o=Mo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=w+m+a,_=w+d+o,S=go(r,r.VERTEX_SHADER,v),E=go(r,r.FRAGMENT_SHADER,_);if(r.attachShader(y,S),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),s.debug.checkShaderErrors){const x=r.getProgramInfoLog(y).trim(),M=r.getShaderInfoLog(S).trim(),A=r.getShaderInfoLog(E).trim();let C=!0,D=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(C=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,y,S,E);else{const R=_o(r,S,"vertex"),U=_o(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+R+`
`+U)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(M===""||A==="")&&(D=!1);D&&(this.diagnostics={runnable:C,programLog:x,vertexShader:{log:M,prefix:m},fragmentShader:{log:A,prefix:d}})}r.deleteShader(S),r.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new Mr(r,y)),T};let b;return this.getAttributes=function(){return b===void 0&&(b=bp(r,y)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=E,this}let Bp=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kp(e),t.set(e,n)),n}}class kp{constructor(e){this.id=Bp++,this.code=e,this.usedTimes=0}}function Gp(s,e,t,n,r,i,a){const o=new cl,l=new zp,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return x===0?"uv":`uv${x}`}function m(x,M,A,C,D){const R=C.fog,U=D.geometry,F=x.isMeshStandardMaterial?C.environment:null,L=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),O=L&&L.mapping===Cr?L.image.height:null,Y=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,H=K!==void 0?K.length:0;let V=0;U.morphAttributes.position!==void 0&&(V=1),U.morphAttributes.normal!==void 0&&(V=2),U.morphAttributes.color!==void 0&&(V=3);let B,N,P,W;if(Y){const _t=jt[Y];B=_t.vertexShader,N=_t.fragmentShader}else B=x.vertexShader,N=x.fragmentShader,l.update(x),P=l.getVertexShaderID(x),W=l.getFragmentShaderID(x);const j=s.getRenderTarget(),Z=D.isInstancedMesh===!0,le=!!x.map,re=!!x.matcap,te=!!L,X=!!x.aoMap,Le=!!x.lightMap,ye=!!x.bumpMap,ge=!!x.normalMap,fe=!!x.displacementMap,Pe=!!x.emissiveMap,Ae=!!x.metalnessMap,pe=!!x.roughnessMap,Se=x.anisotropy>0,Oe=x.clearcoat>0,We=x.iridescence>0,k=x.sheen>0,I=x.transmission>0,ie=Se&&!!x.anisotropyMap,de=Oe&&!!x.clearcoatMap,se=Oe&&!!x.clearcoatNormalMap,G=Oe&&!!x.clearcoatRoughnessMap,ue=We&&!!x.iridescenceMap,he=We&&!!x.iridescenceThicknessMap,ne=k&&!!x.sheenColorMap,ce=k&&!!x.sheenRoughnessMap,ve=!!x.specularMap,Me=!!x.specularColorMap,Ee=!!x.specularIntensityMap,me=I&&!!x.transmissionMap,Re=I&&!!x.thicknessMap,De=!!x.gradientMap,q=!!x.alphaMap,_e=x.alphaTest>0,ee=!!x.alphaHash,xe=!!x.extensions,Te=!!U.attributes.uv1,je=!!U.attributes.uv2,Ze=!!U.attributes.uv3;return{isWebGL2:h,shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:B,fragmentShader:N,defines:x.defines,customVertexShaderID:P,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Z,instancingColor:Z&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Kt,map:le,matcap:re,envMap:te,envMapMode:te&&L.mapping,envMapCubeUVHeight:O,aoMap:X,lightMap:Le,bumpMap:ye,normalMap:ge,displacementMap:f&&fe,emissiveMap:Pe,normalMapObjectSpace:ge&&x.normalMapType===Uc,normalMapTangentSpace:ge&&x.normalMapType===Xi,metalnessMap:Ae,roughnessMap:pe,anisotropy:Se,anisotropyMap:ie,clearcoat:Oe,clearcoatMap:de,clearcoatNormalMap:se,clearcoatRoughnessMap:G,iridescence:We,iridescenceMap:ue,iridescenceThicknessMap:he,sheen:k,sheenColorMap:ne,sheenRoughnessMap:ce,specularMap:ve,specularColorMap:Me,specularIntensityMap:Ee,transmission:I,transmissionMap:me,thicknessMap:Re,gradientMap:De,opaque:x.transparent===!1&&x.blending===vi,alphaMap:q,alphaTest:_e,alphaHash:ee,combine:x.combine,mapUv:le&&y(x.map.channel),aoMapUv:X&&y(x.aoMap.channel),lightMapUv:Le&&y(x.lightMap.channel),bumpMapUv:ye&&y(x.bumpMap.channel),normalMapUv:ge&&y(x.normalMap.channel),displacementMapUv:fe&&y(x.displacementMap.channel),emissiveMapUv:Pe&&y(x.emissiveMap.channel),metalnessMapUv:Ae&&y(x.metalnessMap.channel),roughnessMapUv:pe&&y(x.roughnessMap.channel),anisotropyMapUv:ie&&y(x.anisotropyMap.channel),clearcoatMapUv:de&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&y(x.sheenRoughnessMap.channel),specularMapUv:ve&&y(x.specularMap.channel),specularColorMapUv:Me&&y(x.specularColorMap.channel),specularIntensityMapUv:Ee&&y(x.specularIntensityMap.channel),transmissionMapUv:me&&y(x.transmissionMap.channel),thicknessMapUv:Re&&y(x.thicknessMap.channel),alphaMapUv:q&&y(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ge||Se),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:je,vertexUv3s:Ze,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(le||q),fog:!!R,useFog:x.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:V,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:dn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===Ct,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:xe&&x.extensions.derivatives===!0,extensionFragDepth:xe&&x.extensions.fragDepth===!0,extensionDrawBuffers:xe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)M.push(A),M.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(w(M,x),v(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function w(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function v(x,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),x.push(o.mask)}function _(x){const M=g[x.type];let A;if(M){const C=jt[M];A=bu.clone(C.uniforms)}else A=x.uniforms;return A}function S(x,M){let A;for(let C=0,D=c.length;C<D;C++){const R=c[C];if(R.cacheKey===M){A=R,++A.usedTimes;break}}return A===void 0&&(A=new Op(s,M,x,i),c.push(A)),A}function E(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:S,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:b}}function Hp(){let s=new WeakMap;function e(i){let a=s.get(i);return a===void 0&&(a={},s.set(i,a)),a}function t(i){s.delete(i)}function n(i,a,o){s.get(i)[a]=o}function r(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Vp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function So(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Eo(){const s=[];let e=0;const t=[],n=[],r=[];function i(){e=0,t.length=0,n.length=0,r.length=0}function a(u,f,p,g,y,m){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=y,d.group=m),e++,d}function o(u,f,p,g,y,m){const d=a(u,f,p,g,y,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(u,f,p,g,y,m){const d=a(u,f,p,g,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Vp),n.length>1&&n.sort(f||So),r.length>1&&r.sort(f||So)}function h(){for(let u=e,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:i,push:o,unshift:l,finish:h,sort:c}}function Wp(){let s=new WeakMap;function e(n,r){const i=s.get(n);let a;return i===void 0?(a=new Eo,s.set(n,[a])):r>=i.length?(a=new Eo,i.push(a)):a=i[r],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Xp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Ne};break;case"SpotLight":t={position:new J,direction:new J,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function qp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Yp=0;function jp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Kp(s,e){const t=new Xp,n=qp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new J);const i=new J,a=new Ie,o=new Ie;function l(h,u){let f=0,p=0,g=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,m=0,d=0,w=0,v=0,_=0,S=0,E=0,T=0,b=0;h.sort(jp);const x=u===!0?Math.PI:1;for(let A=0,C=h.length;A<C;A++){const D=h[A],R=D.color,U=D.intensity,F=D.distance,L=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=R.r*U*x,p+=R.g*U*x,g+=R.b*U*x;else if(D.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],U);else if(D.isDirectionalLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const Y=D.shadow,K=n.get(D);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=L,r.directionalShadowMatrix[y]=D.shadow.matrix,_++}r.directional[y]=O,y++}else if(D.isSpotLight){const O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(R).multiplyScalar(U*x),O.distance=F,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,r.spot[d]=O;const Y=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,Y.updateMatrices(D),D.castShadow&&b++),r.spotLightMatrix[d]=Y.matrix,D.castShadow){const K=n.get(D);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,r.spotShadow[d]=K,r.spotShadowMap[d]=L,E++}d++}else if(D.isRectAreaLight){const O=t.get(D);O.color.copy(R).multiplyScalar(U),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[w]=O,w++}else if(D.isPointLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*x),O.distance=D.distance,O.decay=D.decay,D.castShadow){const Y=D.shadow,K=n.get(D);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=L,r.pointShadowMatrix[m]=D.shadow.matrix,S++}r.point[m]=O,m++}else if(D.isHemisphereLight){const O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(U*x),O.groundColor.copy(D.groundColor).multiplyScalar(U*x),r.hemi[v]=O,v++}}w>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==y||M.pointLength!==m||M.spotLength!==d||M.rectAreaLength!==w||M.hemiLength!==v||M.numDirectionalShadows!==_||M.numPointShadows!==S||M.numSpotShadows!==E||M.numSpotMaps!==T)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=w,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=E+T-b,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=b,M.directionalLength=y,M.pointLength=m,M.spotLength=d,M.rectAreaLength=w,M.hemiLength=v,M.numDirectionalShadows=_,M.numPointShadows=S,M.numSpotShadows=E,M.numSpotMaps=T,r.version=Yp++)}function c(h,u){let f=0,p=0,g=0,y=0,m=0;const d=u.matrixWorldInverse;for(let w=0,v=h.length;w<v;w++){const _=h[w];if(_.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(d),f++}else if(_.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(d),g++}else if(_.isRectAreaLight){const S=r.rectArea[y];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),o.identity(),a.copy(_.matrixWorld),a.premultiply(d),o.extractRotation(a),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function wo(s,e){const t=new Kp(s,e),n=[],r=[];function i(){n.length=0,r.length=0}function a(u){n.push(u)}function o(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jp(s,e){let t=new WeakMap;function n(i,a=0){const o=t.get(i);let l;return o===void 0?(l=new wo(s,e),t.set(i,[l])):a>=o.length?(l=new wo(s,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class $p extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zp extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`;function t0(s,e,t){let n=new qs;const r=new Fe,i=new Fe,a=new Je,o=new $p({depthPacking:Ic}),l=new Zp,c={},h=t.maxTextureSize,u={[bn]:Ct,[Ct]:bn,[cn]:cn},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Qp,fragmentShader:e0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Rt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let d=this.type;this.render=function(S,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const b=s.getRenderTarget(),x=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),A=s.state;A.setBlending(En),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const C=d!==ln&&this.type===ln,D=d===ln&&this.type!==ln;for(let R=0,U=S.length;R<U;R++){const F=S[R],L=F.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const O=L.getFrameExtents();if(r.multiply(O),i.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(i.x=Math.floor(h/O.x),r.x=i.x*O.x,L.mapSize.x=i.x),r.y>h&&(i.y=Math.floor(h/O.y),r.y=i.y*O.y,L.mapSize.y=i.y)),L.map===null||C===!0||D===!0){const K=this.type!==ln?{minFilter:vt,magFilter:vt}:{};L.map!==null&&L.map.dispose(),L.map=new Rn(r.x,r.y,K),L.map.texture.name=F.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();const Y=L.getViewportCount();for(let K=0;K<Y;K++){const H=L.getViewport(K);a.set(i.x*H.x,i.y*H.y,i.x*H.z,i.y*H.w),A.viewport(a),L.updateMatrices(F,K),n=L.getFrustum(),_(E,T,L.camera,F,this.type)}L.isPointLightShadow!==!0&&this.type===ln&&w(L,T),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(b,x,M)};function w(S,E){const T=e.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Rn(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,T,f,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,T,p,y,null)}function v(S,E,T,b){let x=null;const M=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(M!==void 0)x=M;else if(x=T.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const A=x.uuid,C=E.uuid;let D=c[A];D===void 0&&(D={},c[A]=D);let R=D[C];R===void 0&&(R=x.clone(),D[C]=R),x=R}if(x.visible=E.visible,x.wireframe=E.wireframe,b===ln?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:u[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const A=s.properties.get(x);A.light=T}return x}function _(S,E,T,b,x){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===ln)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const C=e.update(S),D=S.material;if(Array.isArray(D)){const R=C.groups;for(let U=0,F=R.length;U<F;U++){const L=R[U],O=D[L.materialIndex];if(O&&O.visible){const Y=v(S,O,b,x);s.renderBufferDirect(T,null,C,Y,S,L)}}}else if(D.visible){const R=v(S,D,b,x);s.renderBufferDirect(T,null,C,R,S,null)}}const A=S.children;for(let C=0,D=A.length;C<D;C++)_(A[C],E,T,b,x)}}function n0(s,e,t){const n=t.isWebGL2;function r(){let q=!1;const _e=new Je;let ee=null;const xe=new Je(0,0,0,0);return{setMask:function(Te){ee!==Te&&!q&&(s.colorMask(Te,Te,Te,Te),ee=Te)},setLocked:function(Te){q=Te},setClear:function(Te,je,Ze,Qe,_t){_t===!0&&(Te*=Qe,je*=Qe,Ze*=Qe),_e.set(Te,je,Ze,Qe),xe.equals(_e)===!1&&(s.clearColor(Te,je,Ze,Qe),xe.copy(_e))},reset:function(){q=!1,ee=null,xe.set(-1,0,0,0)}}}function i(){let q=!1,_e=null,ee=null,xe=null;return{setTest:function(Te){Te?j(s.DEPTH_TEST):Z(s.DEPTH_TEST)},setMask:function(Te){_e!==Te&&!q&&(s.depthMask(Te),_e=Te)},setFunc:function(Te){if(ee!==Te){switch(Te){case oc:s.depthFunc(s.NEVER);break;case lc:s.depthFunc(s.ALWAYS);break;case cc:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case uc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case fc:s.depthFunc(s.GREATER);break;case dc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=Te}},setLocked:function(Te){q=Te},setClear:function(Te){xe!==Te&&(s.clearDepth(Te),xe=Te)},reset:function(){q=!1,_e=null,ee=null,xe=null}}}function a(){let q=!1,_e=null,ee=null,xe=null,Te=null,je=null,Ze=null,Qe=null,_t=null;return{setTest:function(tt){q||(tt?j(s.STENCIL_TEST):Z(s.STENCIL_TEST))},setMask:function(tt){_e!==tt&&!q&&(s.stencilMask(tt),_e=tt)},setFunc:function(tt,Nt,dt){(ee!==tt||xe!==Nt||Te!==dt)&&(s.stencilFunc(tt,Nt,dt),ee=tt,xe=Nt,Te=dt)},setOp:function(tt,Nt,dt){(je!==tt||Ze!==Nt||Qe!==dt)&&(s.stencilOp(tt,Nt,dt),je=tt,Ze=Nt,Qe=dt)},setLocked:function(tt){q=tt},setClear:function(tt){_t!==tt&&(s.clearStencil(tt),_t=tt)},reset:function(){q=!1,_e=null,ee=null,xe=null,Te=null,je=null,Ze=null,Qe=null,_t=null}}}const o=new r,l=new i,c=new a,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,y=[],m=null,d=!1,w=null,v=null,_=null,S=null,E=null,T=null,b=null,x=!1,M=null,A=null,C=null,D=null,R=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,L=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=L>=1):O.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=L>=2);let Y=null,K={};const H=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),B=new Je().fromArray(H),N=new Je().fromArray(V);function P(q,_e,ee,xe){const Te=new Uint8Array(4),je=s.createTexture();s.bindTexture(q,je),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<ee;Ze++)n&&(q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY)?s.texImage3D(_e,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(_e+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return je}const W={};W[s.TEXTURE_2D]=P(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=P(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(W[s.TEXTURE_2D_ARRAY]=P(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=P(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),j(s.DEPTH_TEST),l.setFunc(As),fe(!1),Pe(aa),j(s.CULL_FACE),ye(En);function j(q){f[q]!==!0&&(s.enable(q),f[q]=!0)}function Z(q){f[q]!==!1&&(s.disable(q),f[q]=!1)}function le(q,_e){return p[q]!==_e?(s.bindFramebuffer(q,_e),p[q]=_e,n&&(q===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=_e),q===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=_e)),!0):!1}function re(q,_e){let ee=y,xe=!1;if(q)if(ee=g.get(_e),ee===void 0&&(ee=[],g.set(_e,ee)),q.isWebGLMultipleRenderTargets){const Te=q.texture;if(ee.length!==Te.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let je=0,Ze=Te.length;je<Ze;je++)ee[je]=s.COLOR_ATTACHMENT0+je;ee.length=Te.length,xe=!0}}else ee[0]!==s.COLOR_ATTACHMENT0&&(ee[0]=s.COLOR_ATTACHMENT0,xe=!0);else ee[0]!==s.BACK&&(ee[0]=s.BACK,xe=!0);xe&&(t.isWebGL2?s.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function te(q){return m!==q?(s.useProgram(q),m=q,!0):!1}const X={[mi]:s.FUNC_ADD,[Jl]:s.FUNC_SUBTRACT,[$l]:s.FUNC_REVERSE_SUBTRACT};if(n)X[ua]=s.MIN,X[ha]=s.MAX;else{const q=e.get("EXT_blend_minmax");q!==null&&(X[ua]=q.MIN_EXT,X[ha]=q.MAX_EXT)}const Le={[Zl]:s.ZERO,[Ql]:s.ONE,[ec]:s.SRC_COLOR,[Yo]:s.SRC_ALPHA,[ac]:s.SRC_ALPHA_SATURATE,[rc]:s.DST_COLOR,[nc]:s.DST_ALPHA,[tc]:s.ONE_MINUS_SRC_COLOR,[jo]:s.ONE_MINUS_SRC_ALPHA,[sc]:s.ONE_MINUS_DST_COLOR,[ic]:s.ONE_MINUS_DST_ALPHA};function ye(q,_e,ee,xe,Te,je,Ze,Qe){if(q===En){d===!0&&(Z(s.BLEND),d=!1);return}if(d===!1&&(j(s.BLEND),d=!0),q!==Kl){if(q!==w||Qe!==x){if((v!==mi||E!==mi)&&(s.blendEquation(s.FUNC_ADD),v=mi,E=mi),Qe)switch(q){case vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oa:s.blendFunc(s.ONE,s.ONE);break;case la:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ca:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case la:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ca:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}_=null,S=null,T=null,b=null,w=q,x=Qe}return}Te=Te||_e,je=je||ee,Ze=Ze||xe,(_e!==v||Te!==E)&&(s.blendEquationSeparate(X[_e],X[Te]),v=_e,E=Te),(ee!==_||xe!==S||je!==T||Ze!==b)&&(s.blendFuncSeparate(Le[ee],Le[xe],Le[je],Le[Ze]),_=ee,S=xe,T=je,b=Ze),w=q,x=!1}function ge(q,_e){q.side===cn?Z(s.CULL_FACE):j(s.CULL_FACE);let ee=q.side===Ct;_e&&(ee=!ee),fe(ee),q.blending===vi&&q.transparent===!1?ye(En):ye(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),o.setMask(q.colorWrite);const xe=q.stencilWrite;c.setTest(xe),xe&&(c.setMask(q.stencilWriteMask),c.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),c.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),pe(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):Z(s.SAMPLE_ALPHA_TO_COVERAGE)}function fe(q){M!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),M=q)}function Pe(q){q!==ql?(j(s.CULL_FACE),q!==A&&(q===aa?s.cullFace(s.BACK):q===Yl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Z(s.CULL_FACE),A=q}function Ae(q){q!==C&&(F&&s.lineWidth(q),C=q)}function pe(q,_e,ee){q?(j(s.POLYGON_OFFSET_FILL),(D!==_e||R!==ee)&&(s.polygonOffset(_e,ee),D=_e,R=ee)):Z(s.POLYGON_OFFSET_FILL)}function Se(q){q?j(s.SCISSOR_TEST):Z(s.SCISSOR_TEST)}function Oe(q){q===void 0&&(q=s.TEXTURE0+U-1),Y!==q&&(s.activeTexture(q),Y=q)}function We(q,_e,ee){ee===void 0&&(Y===null?ee=s.TEXTURE0+U-1:ee=Y);let xe=K[ee];xe===void 0&&(xe={type:void 0,texture:void 0},K[ee]=xe),(xe.type!==q||xe.texture!==_e)&&(Y!==ee&&(s.activeTexture(ee),Y=ee),s.bindTexture(q,_e||W[q]),xe.type=q,xe.texture=_e)}function k(){const q=K[Y];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function I(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function se(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function G(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ne(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(q){B.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),B.copy(q))}function Ee(q){N.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),N.copy(q))}function me(q,_e){let ee=u.get(_e);ee===void 0&&(ee=new WeakMap,u.set(_e,ee));let xe=ee.get(q);xe===void 0&&(xe=s.getUniformBlockIndex(_e,q.name),ee.set(q,xe))}function Re(q,_e){const xe=u.get(_e).get(q);h.get(_e)!==xe&&(s.uniformBlockBinding(_e,xe,q.__bindingPointIndex),h.set(_e,xe))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Y=null,K={},p={},g=new WeakMap,y=[],m=null,d=!1,w=null,v=null,_=null,S=null,E=null,T=null,b=null,x=!1,M=null,A=null,C=null,D=null,R=null,B.set(0,0,s.canvas.width,s.canvas.height),N.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:j,disable:Z,bindFramebuffer:le,drawBuffers:re,useProgram:te,setBlending:ye,setMaterial:ge,setFlipSided:fe,setCullFace:Pe,setLineWidth:Ae,setPolygonOffset:pe,setScissorTest:Se,activeTexture:Oe,bindTexture:We,unbindTexture:k,compressedTexImage2D:I,compressedTexImage3D:ie,texImage2D:ce,texImage3D:ve,updateUBOMapping:me,uniformBlockBinding:Re,texStorage2D:he,texStorage3D:ne,texSubImage2D:de,texSubImage3D:se,compressedTexSubImage2D:G,compressedTexSubImage3D:ue,scissor:Me,viewport:Ee,reset:De}}function i0(s,e,t,n,r,i,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(k,I){return d?new OffscreenCanvas(k,I):Hi("canvas")}function v(k,I,ie,de){let se=1;if((k.width>de||k.height>de)&&(se=de/Math.max(k.width,k.height)),se<1||I===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const G=I?br:Math.floor,ue=G(se*k.width),he=G(se*k.height);y===void 0&&(y=w(ue,he));const ne=ie?w(ue,he):y;return ne.width=ue,ne.height=he,ne.getContext("2d").drawImage(k,0,0,ue,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+ue+"x"+he+")."),ne}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function _(k){return Ps(k.width)&&Ps(k.height)}function S(k){return o?!1:k.wrapS!==Tt||k.wrapT!==Tt||k.minFilter!==vt&&k.minFilter!==gt}function E(k,I){return k.generateMipmaps&&I&&k.minFilter!==vt&&k.minFilter!==gt}function T(k){s.generateMipmap(k)}function b(k,I,ie,de,se=!1){if(o===!1)return I;if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let G=I;return I===s.RED&&(ie===s.FLOAT&&(G=s.R32F),ie===s.HALF_FLOAT&&(G=s.R16F),ie===s.UNSIGNED_BYTE&&(G=s.R8)),I===s.RG&&(ie===s.FLOAT&&(G=s.RG32F),ie===s.HALF_FLOAT&&(G=s.RG16F),ie===s.UNSIGNED_BYTE&&(G=s.RG8)),I===s.RGBA&&(ie===s.FLOAT&&(G=s.RGBA32F),ie===s.HALF_FLOAT&&(G=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(G=de===ke&&se===!1?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)),(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(k,I,ie){return E(k,ie)===!0||k.isFramebufferTexture&&k.minFilter!==vt&&k.minFilter!==gt?Math.log2(Math.max(I.width,I.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?I.mipmaps.length:1}function M(k){return k===vt||k===fa||k===Br?s.NEAREST:s.LINEAR}function A(k){const I=k.target;I.removeEventListener("dispose",A),D(I),I.isVideoTexture&&g.delete(I)}function C(k){const I=k.target;I.removeEventListener("dispose",C),U(I)}function D(k){const I=n.get(k);if(I.__webglInit===void 0)return;const ie=k.source,de=m.get(ie);if(de){const se=de[I.__cacheKey];se.usedTimes--,se.usedTimes===0&&R(k),Object.keys(de).length===0&&m.delete(ie)}n.remove(k)}function R(k){const I=n.get(k);s.deleteTexture(I.__webglTexture);const ie=k.source,de=m.get(ie);delete de[I.__cacheKey],a.memory.textures--}function U(k){const I=k.texture,ie=n.get(k),de=n.get(I);if(de.__webglTexture!==void 0&&(s.deleteTexture(de.__webglTexture),a.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(ie.__webglFramebuffer[se]),ie.__webglDepthbuffer&&s.deleteRenderbuffer(ie.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&s.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let se=0;se<ie.__webglColorRenderbuffer.length;se++)ie.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(ie.__webglColorRenderbuffer[se]);ie.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let se=0,G=I.length;se<G;se++){const ue=n.get(I[se]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(I[se])}n.remove(I),n.remove(k)}let F=0;function L(){F=0}function O(){const k=F;return k>=l&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+l),F+=1,k}function Y(k){const I=[];return I.push(k.wrapS),I.push(k.wrapT),I.push(k.wrapR||0),I.push(k.magFilter),I.push(k.minFilter),I.push(k.anisotropy),I.push(k.internalFormat),I.push(k.format),I.push(k.type),I.push(k.generateMipmaps),I.push(k.premultiplyAlpha),I.push(k.flipY),I.push(k.unpackAlignment),I.push(k.colorSpace),I.join()}function K(k,I){const ie=n.get(k);if(k.isVideoTexture&&Oe(k),k.isRenderTargetTexture===!1&&k.version>0&&ie.__version!==k.version){const de=k.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(ie,k,I);return}}t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+I)}function H(k,I){const ie=n.get(k);if(k.version>0&&ie.__version!==k.version){le(ie,k,I);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+I)}function V(k,I){const ie=n.get(k);if(k.version>0&&ie.__version!==k.version){le(ie,k,I);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+I)}function B(k,I){const ie=n.get(k);if(k.version>0&&ie.__version!==k.version){re(ie,k,I);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+I)}const N={[lt]:s.REPEAT,[Tt]:s.CLAMP_TO_EDGE,[Cs]:s.MIRRORED_REPEAT},P={[vt]:s.NEAREST,[fa]:s.NEAREST_MIPMAP_NEAREST,[Br]:s.NEAREST_MIPMAP_LINEAR,[gt]:s.LINEAR,[yc]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},W={[Fc]:s.NEVER,[Vc]:s.ALWAYS,[Oc]:s.LESS,[zc]:s.LEQUAL,[Bc]:s.EQUAL,[Hc]:s.GEQUAL,[kc]:s.GREATER,[Gc]:s.NOTEQUAL};function j(k,I,ie){if(ie?(s.texParameteri(k,s.TEXTURE_WRAP_S,N[I.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,N[I.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,N[I.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,P[I.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,P[I.minFilter])):(s.texParameteri(k,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(k,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(I.wrapS!==Tt||I.wrapT!==Tt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(k,s.TEXTURE_MAG_FILTER,M(I.magFilter)),s.texParameteri(k,s.TEXTURE_MIN_FILTER,M(I.minFilter)),I.minFilter!==vt&&I.minFilter!==gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),I.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,W[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(I.magFilter===vt||I.minFilter!==Br&&I.minFilter!==An||I.type===zt&&e.has("OES_texture_float_linear")===!1||o===!1&&I.type===hn&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(s.texParameterf(k,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function Z(k,I){let ie=!1;k.__webglInit===void 0&&(k.__webglInit=!0,I.addEventListener("dispose",A));const de=I.source;let se=m.get(de);se===void 0&&(se={},m.set(de,se));const G=Y(I);if(G!==k.__cacheKey){se[G]===void 0&&(se[G]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,ie=!0),se[G].usedTimes++;const ue=se[k.__cacheKey];ue!==void 0&&(se[k.__cacheKey].usedTimes--,ue.usedTimes===0&&R(I)),k.__cacheKey=G,k.__webglTexture=se[G].texture}return ie}function le(k,I,ie){let de=s.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),I.isData3DTexture&&(de=s.TEXTURE_3D);const se=Z(k,I),G=I.source;t.bindTexture(de,k.__webglTexture,s.TEXTURE0+ie);const ue=n.get(G);if(G.version!==ue.__version||se===!0){t.activeTexture(s.TEXTURE0+ie),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const he=S(I)&&_(I.image)===!1;let ne=v(I.image,he,!1,h);ne=We(I,ne);const ce=_(ne)||o,ve=i.convert(I.format,I.colorSpace);let Me=i.convert(I.type),Ee=b(I.internalFormat,ve,Me,I.colorSpace);j(de,I,ce);let me;const Re=I.mipmaps,De=o&&I.isVideoTexture!==!0,q=ue.__version===void 0||se===!0,_e=x(I,ne,ce);if(I.isDepthTexture)Ee=s.DEPTH_COMPONENT,o?I.type===zt?Ee=s.DEPTH_COMPONENT32F:I.type===yn?Ee=s.DEPTH_COMPONENT24:I.type===Gn?Ee=s.DEPTH24_STENCIL8:Ee=s.DEPTH_COMPONENT16:I.type===zt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===Hn&&Ee===s.DEPTH_COMPONENT&&I.type!==ks&&I.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=yn,Me=i.convert(I.type)),I.format===Si&&Ee===s.DEPTH_COMPONENT&&(Ee=s.DEPTH_STENCIL,I.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=Gn,Me=i.convert(I.type))),q&&(De?t.texStorage2D(s.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Ee,ne.width,ne.height,0,ve,Me,null));else if(I.isDataTexture)if(Re.length>0&&ce){De&&q&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,Re[0].width,Re[0].height);for(let ee=0,xe=Re.length;ee<xe;ee++)me=Re[ee],De?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,me.width,me.height,ve,Me,me.data):t.texImage2D(s.TEXTURE_2D,ee,Ee,me.width,me.height,0,ve,Me,me.data);I.generateMipmaps=!1}else De?(q&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,Me,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,ne.width,ne.height,0,ve,Me,ne.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){De&&q&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ee,Re[0].width,Re[0].height,ne.depth);for(let ee=0,xe=Re.length;ee<xe;ee++)me=Re[ee],I.format!==Ot?ve!==null?De?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,ne.depth,ve,me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ee,me.width,me.height,ne.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,ne.depth,ve,Me,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ee,me.width,me.height,ne.depth,0,ve,Me,me.data)}else{De&&q&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,Re[0].width,Re[0].height);for(let ee=0,xe=Re.length;ee<xe;ee++)me=Re[ee],I.format!==Ot?ve!==null?De?t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ee,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,me.width,me.height,ve,Me,me.data):t.texImage2D(s.TEXTURE_2D,ee,Ee,me.width,me.height,0,ve,Me,me.data)}else if(I.isDataArrayTexture)De?(q&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,Me,ne.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,ve,Me,ne.data);else if(I.isData3DTexture)De?(q&&t.texStorage3D(s.TEXTURE_3D,_e,Ee,ne.width,ne.height,ne.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,Me,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,ve,Me,ne.data);else if(I.isFramebufferTexture){if(q)if(De)t.texStorage2D(s.TEXTURE_2D,_e,Ee,ne.width,ne.height);else{let ee=ne.width,xe=ne.height;for(let Te=0;Te<_e;Te++)t.texImage2D(s.TEXTURE_2D,Te,Ee,ee,xe,0,ve,Me,null),ee>>=1,xe>>=1}}else if(Re.length>0&&ce){De&&q&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,Re[0].width,Re[0].height);for(let ee=0,xe=Re.length;ee<xe;ee++)me=Re[ee],De?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ve,Me,me):t.texImage2D(s.TEXTURE_2D,ee,Ee,ve,Me,me);I.generateMipmaps=!1}else De?(q&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,ne.width,ne.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Me,ne)):t.texImage2D(s.TEXTURE_2D,0,Ee,ve,Me,ne);E(I,ce)&&T(de),ue.__version=G.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function re(k,I,ie){if(I.image.length!==6)return;const de=Z(k,I),se=I.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+ie);const G=n.get(se);if(se.version!==G.__version||de===!0){t.activeTexture(s.TEXTURE0+ie),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ue=I.isCompressedTexture||I.image[0].isCompressedTexture,he=I.image[0]&&I.image[0].isDataTexture,ne=[];for(let ee=0;ee<6;ee++)!ue&&!he?ne[ee]=v(I.image[ee],!1,!0,c):ne[ee]=he?I.image[ee].image:I.image[ee],ne[ee]=We(I,ne[ee]);const ce=ne[0],ve=_(ce)||o,Me=i.convert(I.format,I.colorSpace),Ee=i.convert(I.type),me=b(I.internalFormat,Me,Ee,I.colorSpace),Re=o&&I.isVideoTexture!==!0,De=G.__version===void 0||de===!0;let q=x(I,ce,ve);j(s.TEXTURE_CUBE_MAP,I,ve);let _e;if(ue){Re&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,q,me,ce.width,ce.height);for(let ee=0;ee<6;ee++){_e=ne[ee].mipmaps;for(let xe=0;xe<_e.length;xe++){const Te=_e[xe];I.format!==Ot?Me!==null?Re?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Te.width,Te.height,Me,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,me,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Te.width,Te.height,Me,Ee,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,me,Te.width,Te.height,0,Me,Ee,Te.data)}}}else{_e=I.mipmaps,Re&&De&&(_e.length>0&&q++,t.texStorage2D(s.TEXTURE_CUBE_MAP,q,me,ne[0].width,ne[0].height));for(let ee=0;ee<6;ee++)if(he){Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ne[ee].width,ne[ee].height,Me,Ee,ne[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,me,ne[ee].width,ne[ee].height,0,Me,Ee,ne[ee].data);for(let xe=0;xe<_e.length;xe++){const je=_e[xe].image[ee].image;Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,je.width,je.height,Me,Ee,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,me,je.width,je.height,0,Me,Ee,je.data)}}else{Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me,Ee,ne[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,me,Me,Ee,ne[ee]);for(let xe=0;xe<_e.length;xe++){const Te=_e[xe];Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,Me,Ee,Te.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,me,Me,Ee,Te.image[ee])}}}E(I,ve)&&T(s.TEXTURE_CUBE_MAP),G.__version=se.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function te(k,I,ie,de,se){const G=i.convert(ie.format,ie.colorSpace),ue=i.convert(ie.type),he=b(ie.internalFormat,G,ue,ie.colorSpace);n.get(I).__hasExternalTextures||(se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,0,he,I.width,I.height,I.depth,0,G,ue,null):t.texImage2D(se,0,he,I.width,I.height,0,G,ue,null)),t.bindFramebuffer(s.FRAMEBUFFER,k),Se(I)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,se,n.get(ie).__webglTexture,0,pe(I)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,se,n.get(ie).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function X(k,I,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,k),I.depthBuffer&&!I.stencilBuffer){let de=s.DEPTH_COMPONENT16;if(ie||Se(I)){const se=I.depthTexture;se&&se.isDepthTexture&&(se.type===zt?de=s.DEPTH_COMPONENT32F:se.type===yn&&(de=s.DEPTH_COMPONENT24));const G=pe(I);Se(I)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G,de,I.width,I.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,G,de,I.width,I.height)}else s.renderbufferStorage(s.RENDERBUFFER,de,I.width,I.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,k)}else if(I.depthBuffer&&I.stencilBuffer){const de=pe(I);ie&&Se(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,s.DEPTH24_STENCIL8,I.width,I.height):Se(I)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,s.DEPTH24_STENCIL8,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,k)}else{const de=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let se=0;se<de.length;se++){const G=de[se],ue=i.convert(G.format,G.colorSpace),he=i.convert(G.type),ne=b(G.internalFormat,ue,he,G.colorSpace),ce=pe(I);ie&&Se(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,ne,I.width,I.height):Se(I)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,ne,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,ne,I.width,I.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(k,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),K(I.depthTexture,0);const de=n.get(I.depthTexture).__webglTexture,se=pe(I);if(I.depthTexture.format===Hn)Se(I)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(I.depthTexture.format===Si)Se(I)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function ye(k){const I=n.get(k),ie=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!I.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Le(I.__webglFramebuffer,k)}else if(ie){I.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer[de]),I.__webglDepthbuffer[de]=s.createRenderbuffer(),X(I.__webglDepthbuffer[de],k,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer=s.createRenderbuffer(),X(I.__webglDepthbuffer,k,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(k,I,ie){const de=n.get(k);I!==void 0&&te(de.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),ie!==void 0&&ye(k)}function fe(k){const I=k.texture,ie=n.get(k),de=n.get(I);k.addEventListener("dispose",C),k.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=I.version,a.memory.textures++);const se=k.isWebGLCubeRenderTarget===!0,G=k.isWebGLMultipleRenderTargets===!0,ue=_(k)||o;if(se){ie.__webglFramebuffer=[];for(let he=0;he<6;he++)ie.__webglFramebuffer[he]=s.createFramebuffer()}else{if(ie.__webglFramebuffer=s.createFramebuffer(),G)if(r.drawBuffers){const he=k.texture;for(let ne=0,ce=he.length;ne<ce;ne++){const ve=n.get(he[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&k.samples>0&&Se(k)===!1){const he=G?I:[I];ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ne=0;ne<he.length;ne++){const ce=he[ne];ie.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[ne]);const ve=i.convert(ce.format,ce.colorSpace),Me=i.convert(ce.type),Ee=b(ce.internalFormat,ve,Me,ce.colorSpace,k.isXRRenderTarget===!0),me=pe(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,Ee,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,ie.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),X(ie.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),j(s.TEXTURE_CUBE_MAP,I,ue);for(let he=0;he<6;he++)te(ie.__webglFramebuffer[he],k,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he);E(I,ue)&&T(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){const he=k.texture;for(let ne=0,ce=he.length;ne<ce;ne++){const ve=he[ne],Me=n.get(ve);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),j(s.TEXTURE_2D,ve,ue),te(ie.__webglFramebuffer,k,ve,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D),E(ve,ue)&&T(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(o?he=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,de.__webglTexture),j(he,I,ue),te(ie.__webglFramebuffer,k,I,s.COLOR_ATTACHMENT0,he),E(I,ue)&&T(he),t.unbindTexture()}k.depthBuffer&&ye(k)}function Pe(k){const I=_(k)||o,ie=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let de=0,se=ie.length;de<se;de++){const G=ie[de];if(E(G,I)){const ue=k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,he=n.get(G).__webglTexture;t.bindTexture(ue,he),T(ue),t.unbindTexture()}}}function Ae(k){if(o&&k.samples>0&&Se(k)===!1){const I=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],ie=k.width,de=k.height;let se=s.COLOR_BUFFER_BIT;const G=[],ue=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(k),ne=k.isWebGLMultipleRenderTargets===!0;if(ne)for(let ce=0;ce<I.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ce=0;ce<I.length;ce++){G.push(s.COLOR_ATTACHMENT0+ce),k.depthBuffer&&G.push(ue);const ve=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ve===!1&&(k.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),ne&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[ce]),ve===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ue]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ue])),ne){const Me=n.get(I[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,ie,de,0,0,ie,de,se,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,G)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let ce=0;ce<I.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const ve=n.get(I[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function pe(k){return Math.min(u,k.samples)}function Se(k){const I=n.get(k);return o&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Oe(k){const I=a.render.frame;g.get(k)!==I&&(g.set(k,I),k.update())}function We(k,I){const ie=k.colorSpace,de=k.format,se=k.type;return k.isCompressedTexture===!0||k.format===Ls||ie!==Kt&&ie!==Tn&&(ie===ke?o===!1?e.has("EXT_sRGB")===!0&&de===Ot?(k.format=Ls,k.minFilter=gt,k.generateMipmaps=!1):I=al.sRGBToLinear(I):(de!==Ot||se!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),I}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=ge,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Se}function r0(s,e,t){const n=t.isWebGL2;function r(i,a=Tn){let o;if(i===wn)return s.UNSIGNED_BYTE;if(i===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Zo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Sc)return s.BYTE;if(i===Ec)return s.SHORT;if(i===ks)return s.UNSIGNED_SHORT;if(i===Jo)return s.INT;if(i===yn)return s.UNSIGNED_INT;if(i===zt)return s.FLOAT;if(i===hn)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===wc)return s.ALPHA;if(i===Ot)return s.RGBA;if(i===Tc)return s.LUMINANCE;if(i===bc)return s.LUMINANCE_ALPHA;if(i===Hn)return s.DEPTH_COMPONENT;if(i===Si)return s.DEPTH_STENCIL;if(i===Ls)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===Ac)return s.RED;if(i===Qo)return s.RED_INTEGER;if(i===Rc)return s.RG;if(i===el)return s.RG_INTEGER;if(i===tl)return s.RGBA_INTEGER;if(i===zr||i===kr||i===Gr||i===Hr)if(a===ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===zr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===zr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===da||i===pa||i===ma||i===ga)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===da)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ma)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ga)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===_a||i===va)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===_a)return a===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===va)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xa||i===Ma||i===ya||i===Sa||i===Ea||i===wa||i===Ta||i===ba||i===Aa||i===Ra||i===Ca||i===La||i===Pa||i===Da)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===xa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ma)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ya)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ta)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ba)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Aa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ra)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===La)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pa)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Vr)return a===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(i===Lc||i===Ia||i===Ua||i===Na)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Vr)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ia)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ua)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Na)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[i]!==void 0?s[i]:null}return{convert:r}}class s0 extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _i extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a0={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class o0 extends xt{constructor(e,t,n,r,i,a,o,l,c,h){if(h=h!==void 0?h:Hn,h!==Hn&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hn&&(n=yn),n===void 0&&h===Si&&(n=Gn),super(null,r,i,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class l0 extends Xn{constructor(e,t){super();const n=this;let r=null,i=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const y=t.getContextAttributes();let m=null,d=null;const w=[],v=[],_=new wt;_.layers.enable(1),_.viewport=new Je;const S=new wt;S.layers.enable(2),S.viewport=new Je;const E=[_,S],T=new s0;T.layers.enable(1),T.layers.enable(2);let b=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let V=w[H];return V===void 0&&(V=new fs,w[H]=V),V.getTargetRaySpace()},this.getControllerGrip=function(H){let V=w[H];return V===void 0&&(V=new fs,w[H]=V),V.getGripSpace()},this.getHand=function(H){let V=w[H];return V===void 0&&(V=new fs,w[H]=V),V.getHandSpace()};function M(H){const V=v.indexOf(H.inputSource);if(V===-1)return;const B=w[V];B!==void 0&&(B.update(H.inputSource,H.frame,c||a),B.dispatchEvent({type:H.type,data:H.inputSource}))}function A(){r.removeEventListener("select",M),r.removeEventListener("selectstart",M),r.removeEventListener("selectend",M),r.removeEventListener("squeeze",M),r.removeEventListener("squeezestart",M),r.removeEventListener("squeezeend",M),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",C);for(let H=0;H<w.length;H++){const V=v[H];V!==null&&(v[H]=null,w[H].disconnect(V))}b=null,x=null,e.setRenderTarget(m),p=null,f=null,u=null,r=null,d=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){i=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",M),r.addEventListener("selectstart",M),r.addEventListener("selectend",M),r.addEventListener("squeeze",M),r.addEventListener("squeezestart",M),r.addEventListener("squeezeend",M),r.addEventListener("end",A),r.addEventListener("inputsourceschange",C),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:p}),d=new Rn(p.framebufferWidth,p.framebufferHeight,{format:Ot,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let V=null,B=null,N=null;y.depth&&(N=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=y.stencil?Si:Hn,B=y.stencil?Gn:yn);const P={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:i};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(P),r.updateRenderState({layers:[f]}),d=new Rn(f.textureWidth,f.textureHeight,{format:Ot,type:wn,depthTexture:new o0(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const W=e.properties.get(d);W.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function C(H){for(let V=0;V<H.removed.length;V++){const B=H.removed[V],N=v.indexOf(B);N>=0&&(v[N]=null,w[N].disconnect(B))}for(let V=0;V<H.added.length;V++){const B=H.added[V];let N=v.indexOf(B);if(N===-1){for(let W=0;W<w.length;W++)if(W>=v.length){v.push(B),N=W;break}else if(v[W]===null){v[W]=B,N=W;break}if(N===-1)break}const P=w[N];P&&P.connect(B)}}const D=new J,R=new J;function U(H,V,B){D.setFromMatrixPosition(V.matrixWorld),R.setFromMatrixPosition(B.matrixWorld);const N=D.distanceTo(R),P=V.projectionMatrix.elements,W=B.projectionMatrix.elements,j=P[14]/(P[10]-1),Z=P[14]/(P[10]+1),le=(P[9]+1)/P[5],re=(P[9]-1)/P[5],te=(P[8]-1)/P[0],X=(W[8]+1)/W[0],Le=j*te,ye=j*X,ge=N/(-te+X),fe=ge*-te;V.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(fe),H.translateZ(ge),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Pe=j+ge,Ae=Z+ge,pe=Le-fe,Se=ye+(N-fe),Oe=le*Z/Ae*Pe,We=re*Z/Ae*Pe;H.projectionMatrix.makePerspective(pe,Se,Oe,We,Pe,Ae),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function F(H,V){V===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(V.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;T.near=S.near=_.near=H.near,T.far=S.far=_.far=H.far,(b!==T.near||x!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),b=T.near,x=T.far);const V=H.parent,B=T.cameras;F(T,V);for(let N=0;N<B.length;N++)F(B[N],V);B.length===2?U(T,_,S):T.projectionMatrix.copy(_.projectionMatrix),L(H,T,V)};function L(H,V,B){B===null?H.matrix.copy(V.matrixWorld):(H.matrix.copy(B.matrixWorld),H.matrix.invert(),H.matrix.multiply(V.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const N=H.children;for(let P=0,W=N.length;P<W;P++)N[P].updateMatrixWorld(!0);H.projectionMatrix.copy(V.projectionMatrix),H.projectionMatrixInverse.copy(V.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ei*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let O=null;function Y(H,V){if(h=V.getViewerPose(c||a),g=V,h!==null){const B=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let N=!1;B.length!==T.cameras.length&&(T.cameras.length=0,N=!0);for(let P=0;P<B.length;P++){const W=B[P];let j=null;if(p!==null)j=p.getViewport(W);else{const le=u.getViewSubImage(f,W);j=le.viewport,P===0&&(e.setRenderTargetTextures(d,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(d))}let Z=E[P];Z===void 0&&(Z=new wt,Z.layers.enable(P),Z.viewport=new Je,E[P]=Z),Z.matrix.fromArray(W.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(W.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(j.x,j.y,j.width,j.height),P===0&&(T.matrix.copy(Z.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),N===!0&&T.cameras.push(Z)}}for(let B=0;B<w.length;B++){const N=v[B],P=w[B];N!==null&&P!==void 0&&P.update(N,V,c||a)}O&&O(H,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const K=new pl;K.setAnimationLoop(Y),this.setAnimationLoop=function(H){O=H},this.dispose=function(){}}}function c0(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,hl(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(m,d):d.isMeshToonMaterial?(i(m,d),u(m,d)):d.isMeshPhongMaterial?(i(m,d),h(m,d)):d.isMeshStandardMaterial?(i(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(i(m,d),g(m,d)):d.isMeshDepthMaterial?i(m,d):d.isMeshDistanceMaterial?(i(m,d),y(m,d)):d.isMeshNormalMaterial?i(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,w,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ct&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ct&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ct&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u0(s,e,t,n){let r={},i={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,v){const _=v.program;n.uniformBlockBinding(w,_)}function c(w,v){let _=r[w.id];_===void 0&&(g(w),_=h(w),r[w.id]=_,w.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(w,S);const E=e.render.frame;i[w.id]!==E&&(f(w),i[w.id]=E)}function h(w){const v=u();w.__bindingPointIndex=v;const _=s.createBuffer(),S=w.__size,E=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,S,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const v=r[w.id],_=w.uniforms,S=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,T=_.length;E<T;E++){const b=_[E];if(p(b,E,S)===!0){const x=b.__offset,M=Array.isArray(b.value)?b.value:[b.value];let A=0;for(let C=0;C<M.length;C++){const D=M[C],R=y(D);typeof D=="number"?(b.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,x+A,b.__data)):D.isMatrix3?(b.__data[0]=D.elements[0],b.__data[1]=D.elements[1],b.__data[2]=D.elements[2],b.__data[3]=D.elements[0],b.__data[4]=D.elements[3],b.__data[5]=D.elements[4],b.__data[6]=D.elements[5],b.__data[7]=D.elements[0],b.__data[8]=D.elements[6],b.__data[9]=D.elements[7],b.__data[10]=D.elements[8],b.__data[11]=D.elements[0]):(D.toArray(b.__data,A),A+=R.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,x,b.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,v,_){const S=w.value;if(_[v]===void 0){if(typeof S=="number")_[v]=S;else{const E=Array.isArray(S)?S:[S],T=[];for(let b=0;b<E.length;b++)T.push(E[b].clone());_[v]=T}return!0}else if(typeof S=="number"){if(_[v]!==S)return _[v]=S,!0}else{const E=Array.isArray(_[v])?_[v]:[_[v]],T=Array.isArray(S)?S:[S];for(let b=0;b<E.length;b++){const x=E[b];if(x.equals(T[b])===!1)return x.copy(T[b]),!0}}return!1}function g(w){const v=w.uniforms;let _=0;const S=16;let E=0;for(let T=0,b=v.length;T<b;T++){const x=v[T],M={boundary:0,storage:0},A=Array.isArray(x.value)?x.value:[x.value];for(let C=0,D=A.length;C<D;C++){const R=A[C],U=y(R);M.boundary+=U.boundary,M.storage+=U.storage}if(x.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=_,T>0){E=_%S;const C=S-E;E!==0&&C-M.boundary<0&&(_+=S-E,x.__offset=_)}_+=M.storage}return E=_%S,E>0&&(_+=S-E),w.__size=_,w.__cache={},this}function y(w){const v={boundary:0,storage:0};return typeof w=="number"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){const v=w.target;v.removeEventListener("dispose",m);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(r[v.id]),delete r[v.id],delete i[v.id]}function d(){for(const w in r)s.deleteBuffer(r[w]);a=[],r={},i={}}return{bind:l,update:c,dispose:d}}function h0(){const s=Hi("canvas");return s.style.display="block",s}class xl{constructor(e={}){const{canvas:t=h0(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const d=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=dn,this.toneMappingExposure=1;const v=this;let _=!1,S=0,E=0,T=null,b=-1,x=null;const M=new Je,A=new Je;let C=null;const D=new Ne(0);let R=0,U=t.width,F=t.height,L=1,O=null,Y=null;const K=new Je(0,0,U,F),H=new Je(0,0,U,F);let V=!1;const B=new qs;let N=!1,P=!1,W=null;const j=new Ie,Z=new Fe,le=new J,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return T===null?L:1}let X=n;function Le(z,Q){for(let ae=0;ae<z.length;ae++){const $=z[ae],oe=t.getContext($,Q);if(oe!==null)return oe}return null}try{const z={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zs}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",xe,!1),X===null){const Q=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Q.shift(),X=Le(Q,z),X===null)throw Le(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let ye,ge,fe,Pe,Ae,pe,Se,Oe,We,k,I,ie,de,se,G,ue,he,ne,ce,ve,Me,Ee,me,Re;function De(){ye=new yd(X),ge=new md(X,ye,e),ye.init(ge),Ee=new r0(X,ye,ge),fe=new n0(X,ye,ge),Pe=new wd(X),Ae=new Hp,pe=new i0(X,ye,fe,Ae,ge,Ee,Pe),Se=new _d(v),Oe=new Md(v),We=new Iu(X,ge),me=new dd(X,ye,We,ge),k=new Sd(X,We,Pe,me),I=new Rd(X,k,We,Pe),ce=new Ad(X,ge,pe),ue=new gd(Ae),ie=new Gp(v,Se,Oe,ye,ge,me,ue),de=new c0(v,Ae),se=new Wp,G=new Jp(ye,ge),ne=new fd(v,Se,Oe,fe,I,f,l),he=new t0(v,I,ge),Re=new u0(X,Pe,ge,fe),ve=new pd(X,ye,Pe,ge),Me=new Ed(X,ye,Pe,ge),Pe.programs=ie.programs,v.capabilities=ge,v.extensions=ye,v.properties=Ae,v.renderLists=se,v.shadowMap=he,v.state=fe,v.info=Pe}De();const q=new l0(v,X);this.xr=q,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const z=ye.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){const z=ye.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(z){z!==void 0&&(L=z,this.setSize(U,F,!1))},this.getSize=function(z){return z.set(U,F)},this.setSize=function(z,Q,ae=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=z,F=Q,t.width=Math.floor(z*L),t.height=Math.floor(Q*L),ae===!0&&(t.style.width=z+"px",t.style.height=Q+"px"),this.setViewport(0,0,z,Q)},this.getDrawingBufferSize=function(z){return z.set(U*L,F*L).floor()},this.setDrawingBufferSize=function(z,Q,ae){U=z,F=Q,L=ae,t.width=Math.floor(z*ae),t.height=Math.floor(Q*ae),this.setViewport(0,0,z,Q)},this.getCurrentViewport=function(z){return z.copy(M)},this.getViewport=function(z){return z.copy(K)},this.setViewport=function(z,Q,ae,$){z.isVector4?K.set(z.x,z.y,z.z,z.w):K.set(z,Q,ae,$),fe.viewport(M.copy(K).multiplyScalar(L).floor())},this.getScissor=function(z){return z.copy(H)},this.setScissor=function(z,Q,ae,$){z.isVector4?H.set(z.x,z.y,z.z,z.w):H.set(z,Q,ae,$),fe.scissor(A.copy(H).multiplyScalar(L).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(z){fe.setScissorTest(V=z)},this.setOpaqueSort=function(z){O=z},this.setTransparentSort=function(z){Y=z},this.getClearColor=function(z){return z.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(z=!0,Q=!0,ae=!0){let $=0;if(z){let oe=!1;if(T!==null){const Ce=T.texture.format;oe=Ce===tl||Ce===el||Ce===Qo}if(oe){const Ce=T.texture.type,Ue=Ce===wn||Ce===yn||Ce===ks||Ce===Gn||Ce===$o||Ce===Zo,Be=ne.getClearColor(),ze=ne.getClearAlpha(),qe=Be.r,Ge=Be.g,He=Be.b;Ue?(p[0]=qe,p[1]=Ge,p[2]=He,p[3]=ze,X.clearBufferuiv(X.COLOR,0,p)):(g[0]=qe,g[1]=Ge,g[2]=He,g[3]=ze,X.clearBufferiv(X.COLOR,0,g))}else $|=X.COLOR_BUFFER_BIT}Q&&($|=X.DEPTH_BUFFER_BIT),ae&&($|=X.STENCIL_BUFFER_BIT),X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),se.dispose(),G.dispose(),Ae.dispose(),Se.dispose(),Oe.dispose(),I.dispose(),me.dispose(),Re.dispose(),ie.dispose(),q.dispose(),q.removeEventListener("sessionstart",tt),q.removeEventListener("sessionend",Nt),W&&(W.dispose(),W=null),dt.stop()};function _e(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const z=Pe.autoReset,Q=he.enabled,ae=he.autoUpdate,$=he.needsUpdate,oe=he.type;De(),Pe.autoReset=z,he.enabled=Q,he.autoUpdate=ae,he.needsUpdate=$,he.type=oe}function xe(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Te(z){const Q=z.target;Q.removeEventListener("dispose",Te),je(Q)}function je(z){Ze(z),Ae.remove(z)}function Ze(z){const Q=Ae.get(z).programs;Q!==void 0&&(Q.forEach(function(ae){ie.releaseProgram(ae)}),z.isShaderMaterial&&ie.releaseShaderCache(z))}this.renderBufferDirect=function(z,Q,ae,$,oe,Ce){Q===null&&(Q=re);const Ue=oe.isMesh&&oe.matrixWorld.determinant()<0,Be=zl(z,Q,ae,$,oe);fe.setMaterial($,Ue);let ze=ae.index,qe=1;$.wireframe===!0&&(ze=k.getWireframeAttribute(ae),qe=2);const Ge=ae.drawRange,He=ae.attributes.position;let it=Ge.start*qe,rt=(Ge.start+Ge.count)*qe;Ce!==null&&(it=Math.max(it,Ce.start*qe),rt=Math.min(rt,(Ce.start+Ce.count)*qe)),ze!==null?(it=Math.max(it,0),rt=Math.min(rt,ze.count)):He!=null&&(it=Math.max(it,0),rt=Math.min(rt,He.count));const Gt=rt-it;if(Gt<0||Gt===1/0)return;me.setup(oe,$,Be,ae,ze);let Qt,at=ve;if(ze!==null&&(Qt=We.get(ze),at=Me,at.setIndex(Qt)),oe.isMesh)$.wireframe===!0?(fe.setLineWidth($.wireframeLinewidth*te()),at.setMode(X.LINES)):at.setMode(X.TRIANGLES);else if(oe.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),fe.setLineWidth(Ke*te()),oe.isLineSegments?at.setMode(X.LINES):oe.isLineLoop?at.setMode(X.LINE_LOOP):at.setMode(X.LINE_STRIP)}else oe.isPoints?at.setMode(X.POINTS):oe.isSprite&&at.setMode(X.TRIANGLES);if(oe.isInstancedMesh)at.renderInstances(it,Gt,oe.count);else if(ae.isInstancedBufferGeometry){const Ke=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ur=Math.min(ae.instanceCount,Ke);at.renderInstances(it,Gt,Ur)}else at.render(it,Gt)},this.compile=function(z,Q){function ae($,oe,Ce){$.transparent===!0&&$.side===cn&&$.forceSinglePass===!1?($.side=Ct,$.needsUpdate=!0,Ki($,oe,Ce),$.side=bn,$.needsUpdate=!0,Ki($,oe,Ce),$.side=cn):Ki($,oe,Ce)}m=G.get(z),m.init(),w.push(m),z.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(v.useLegacyLights),z.traverse(function($){const oe=$.material;if(oe)if(Array.isArray(oe))for(let Ce=0;Ce<oe.length;Ce++){const Ue=oe[Ce];ae(Ue,z,$)}else ae(oe,z,$)}),w.pop(),m=null};let Qe=null;function _t(z){Qe&&Qe(z)}function tt(){dt.stop()}function Nt(){dt.start()}const dt=new pl;dt.setAnimationLoop(_t),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(z){Qe=z,q.setAnimationLoop(z),z===null?dt.stop():dt.start()},q.addEventListener("sessionstart",tt),q.addEventListener("sessionend",Nt),this.render=function(z,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(Q),Q=q.getCamera()),z.isScene===!0&&z.onBeforeRender(v,z,Q,T),m=G.get(z,w.length),m.init(),w.push(m),j.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B.setFromProjectionMatrix(j),P=this.localClippingEnabled,N=ue.init(this.clippingPlanes,P),y=se.get(z,d.length),y.init(),d.push(y),Yi(z,Q,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(O,Y),this.info.render.frame++,N===!0&&ue.beginShadows();const ae=m.state.shadowsArray;if(he.render(ae,z,Q),N===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(y,z),m.setupLights(v.useLegacyLights),Q.isArrayCamera){const $=Q.cameras;for(let oe=0,Ce=$.length;oe<Ce;oe++){const Ue=$[oe];ji(y,z,Ue,Ue.viewport)}}else ji(y,z,Q);T!==null&&(pe.updateMultisampleRenderTarget(T),pe.updateRenderTargetMipmap(T)),z.isScene===!0&&z.onAfterRender(v,z,Q),me.resetDefaultState(),b=-1,x=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Yi(z,Q,ae,$){if(z.visible===!1)return;if(z.layers.test(Q.layers)){if(z.isGroup)ae=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(Q);else if(z.isLight)m.pushLight(z),z.castShadow&&m.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||B.intersectsSprite(z)){$&&le.setFromMatrixPosition(z.matrixWorld).applyMatrix4(j);const Ue=I.update(z),Be=z.material;Be.visible&&y.push(z,Ue,Be,ae,le.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||B.intersectsObject(z))){const Ue=I.update(z),Be=z.material;if($&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),le.copy(z.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),le.copy(Ue.boundingSphere.center)),le.applyMatrix4(z.matrixWorld).applyMatrix4(j)),Array.isArray(Be)){const ze=Ue.groups;for(let qe=0,Ge=ze.length;qe<Ge;qe++){const He=ze[qe],it=Be[He.materialIndex];it&&it.visible&&y.push(z,Ue,it,ae,le.z,He)}}else Be.visible&&y.push(z,Ue,Be,ae,le.z,null)}}const Ce=z.children;for(let Ue=0,Be=Ce.length;Ue<Be;Ue++)Yi(Ce[Ue],Q,ae,$)}function ji(z,Q,ae,$){const oe=z.opaque,Ce=z.transmissive,Ue=z.transparent;m.setupLightsView(ae),N===!0&&ue.setGlobalState(v.clippingPlanes,ae),Ce.length>0&&Ir(oe,Ce,Q,ae),$&&fe.viewport(M.copy($)),oe.length>0&&jn(oe,Q,ae),Ce.length>0&&jn(Ce,Q,ae),Ue.length>0&&jn(Ue,Q,ae),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ir(z,Q,ae,$){const oe=ge.isWebGL2;W===null&&(W=new Rn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?hn:wn,minFilter:An,samples:oe?4:0})),v.getDrawingBufferSize(Z),oe?W.setSize(Z.x,Z.y):W.setSize(br(Z.x),br(Z.y));const Ce=v.getRenderTarget();v.setRenderTarget(W),v.getClearColor(D),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();const Ue=v.toneMapping;v.toneMapping=dn,jn(z,ae,$),pe.updateMultisampleRenderTarget(W),pe.updateRenderTargetMipmap(W);let Be=!1;for(let ze=0,qe=Q.length;ze<qe;ze++){const Ge=Q[ze],He=Ge.object,it=Ge.geometry,rt=Ge.material,Gt=Ge.group;if(rt.side===cn&&He.layers.test($.layers)){const Qt=rt.side;rt.side=Ct,rt.needsUpdate=!0,na(He,ae,$,it,rt,Gt),rt.side=Qt,rt.needsUpdate=!0,Be=!0}}Be===!0&&(pe.updateMultisampleRenderTarget(W),pe.updateRenderTargetMipmap(W)),v.setRenderTarget(Ce),v.setClearColor(D,R),v.toneMapping=Ue}function jn(z,Q,ae){const $=Q.isScene===!0?Q.overrideMaterial:null;for(let oe=0,Ce=z.length;oe<Ce;oe++){const Ue=z[oe],Be=Ue.object,ze=Ue.geometry,qe=$===null?Ue.material:$,Ge=Ue.group;Be.layers.test(ae.layers)&&na(Be,Q,ae,ze,qe,Ge)}}function na(z,Q,ae,$,oe,Ce){z.onBeforeRender(v,Q,ae,$,oe,Ce),z.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),oe.onBeforeRender(v,Q,ae,$,z,Ce),oe.transparent===!0&&oe.side===cn&&oe.forceSinglePass===!1?(oe.side=Ct,oe.needsUpdate=!0,v.renderBufferDirect(ae,Q,$,oe,z,Ce),oe.side=bn,oe.needsUpdate=!0,v.renderBufferDirect(ae,Q,$,oe,z,Ce),oe.side=cn):v.renderBufferDirect(ae,Q,$,oe,z,Ce),z.onAfterRender(v,Q,ae,$,oe,Ce)}function Ki(z,Q,ae){Q.isScene!==!0&&(Q=re);const $=Ae.get(z),oe=m.state.lights,Ce=m.state.shadowsArray,Ue=oe.state.version,Be=ie.getParameters(z,oe.state,Ce,Q,ae),ze=ie.getProgramCacheKey(Be);let qe=$.programs;$.environment=z.isMeshStandardMaterial?Q.environment:null,$.fog=Q.fog,$.envMap=(z.isMeshStandardMaterial?Oe:Se).get(z.envMap||$.environment),qe===void 0&&(z.addEventListener("dispose",Te),qe=new Map,$.programs=qe);let Ge=qe.get(ze);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===Ue)return ia(z,Be),Ge}else Be.uniforms=ie.getUniforms(z),z.onBuild(ae,Be,v),z.onBeforeCompile(Be,v),Ge=ie.acquireProgram(Be,ze),qe.set(ze,Ge),$.uniforms=Be.uniforms;const He=$.uniforms;(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(He.clippingPlanes=ue.uniform),ia(z,Be),$.needsLights=Gl(z),$.lightsStateVersion=Ue,$.needsLights&&(He.ambientLightColor.value=oe.state.ambient,He.lightProbe.value=oe.state.probe,He.directionalLights.value=oe.state.directional,He.directionalLightShadows.value=oe.state.directionalShadow,He.spotLights.value=oe.state.spot,He.spotLightShadows.value=oe.state.spotShadow,He.rectAreaLights.value=oe.state.rectArea,He.ltc_1.value=oe.state.rectAreaLTC1,He.ltc_2.value=oe.state.rectAreaLTC2,He.pointLights.value=oe.state.point,He.pointLightShadows.value=oe.state.pointShadow,He.hemisphereLights.value=oe.state.hemi,He.directionalShadowMap.value=oe.state.directionalShadowMap,He.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,He.spotShadowMap.value=oe.state.spotShadowMap,He.spotLightMatrix.value=oe.state.spotLightMatrix,He.spotLightMap.value=oe.state.spotLightMap,He.pointShadowMap.value=oe.state.pointShadowMap,He.pointShadowMatrix.value=oe.state.pointShadowMatrix);const it=Ge.getUniforms(),rt=Mr.seqWithValue(it.seq,He);return $.currentProgram=Ge,$.uniformsList=rt,Ge}function ia(z,Q){const ae=Ae.get(z);ae.outputColorSpace=Q.outputColorSpace,ae.instancing=Q.instancing,ae.skinning=Q.skinning,ae.morphTargets=Q.morphTargets,ae.morphNormals=Q.morphNormals,ae.morphColors=Q.morphColors,ae.morphTargetsCount=Q.morphTargetsCount,ae.numClippingPlanes=Q.numClippingPlanes,ae.numIntersection=Q.numClipIntersection,ae.vertexAlphas=Q.vertexAlphas,ae.vertexTangents=Q.vertexTangents,ae.toneMapping=Q.toneMapping}function zl(z,Q,ae,$,oe){Q.isScene!==!0&&(Q=re),pe.resetTextureUnits();const Ce=Q.fog,Ue=$.isMeshStandardMaterial?Q.environment:null,Be=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kt,ze=($.isMeshStandardMaterial?Oe:Se).get($.envMap||Ue),qe=$.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ge=!!ae.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!ae.morphAttributes.position,it=!!ae.morphAttributes.normal,rt=!!ae.morphAttributes.color,Gt=$.toneMapped?v.toneMapping:dn,Qt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,at=Qt!==void 0?Qt.length:0,Ke=Ae.get($),Ur=m.state.lights;if(N===!0&&(P===!0||z!==x)){const Lt=z===x&&$.id===b;ue.setState($,z,Lt)}let pt=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ur.state.version||Ke.outputColorSpace!==Be||oe.isInstancedMesh&&Ke.instancing===!1||!oe.isInstancedMesh&&Ke.instancing===!0||oe.isSkinnedMesh&&Ke.skinning===!1||!oe.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==ze||$.fog===!0&&Ke.fog!==Ce||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ue.numPlanes||Ke.numIntersection!==ue.numIntersection)||Ke.vertexAlphas!==qe||Ke.vertexTangents!==Ge||Ke.morphTargets!==He||Ke.morphNormals!==it||Ke.morphColors!==rt||Ke.toneMapping!==Gt||ge.isWebGL2===!0&&Ke.morphTargetsCount!==at)&&(pt=!0):(pt=!0,Ke.__version=$.version);let Dn=Ke.currentProgram;pt===!0&&(Dn=Ki($,Q,oe));let ra=!1,Ci=!1,Nr=!1;const St=Dn.getUniforms(),In=Ke.uniforms;if(fe.useProgram(Dn.program)&&(ra=!0,Ci=!0,Nr=!0),$.id!==b&&(b=$.id,Ci=!0),ra||x!==z){if(St.setValue(X,"projectionMatrix",z.projectionMatrix),ge.logarithmicDepthBuffer&&St.setValue(X,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),x!==z&&(x=z,Ci=!0,Nr=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const Lt=St.map.cameraPosition;Lt!==void 0&&Lt.setValue(X,le.setFromMatrixPosition(z.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&St.setValue(X,"isOrthographic",z.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||oe.isSkinnedMesh)&&St.setValue(X,"viewMatrix",z.matrixWorldInverse)}if(oe.isSkinnedMesh){St.setOptional(X,oe,"bindMatrix"),St.setOptional(X,oe,"bindMatrixInverse");const Lt=oe.skeleton;Lt&&(ge.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),St.setValue(X,"boneTexture",Lt.boneTexture,pe),St.setValue(X,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fr=ae.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0&&ge.isWebGL2===!0)&&ce.update(oe,ae,Dn),(Ci||Ke.receiveShadow!==oe.receiveShadow)&&(Ke.receiveShadow=oe.receiveShadow,St.setValue(X,"receiveShadow",oe.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(In.envMap.value=ze,In.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Ci&&(St.setValue(X,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&kl(In,Nr),Ce&&$.fog===!0&&de.refreshFogUniforms(In,Ce),de.refreshMaterialUniforms(In,$,L,F,W),Mr.upload(X,Ke.uniformsList,In,pe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Mr.upload(X,Ke.uniformsList,In,pe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&St.setValue(X,"center",oe.center),St.setValue(X,"modelViewMatrix",oe.modelViewMatrix),St.setValue(X,"normalMatrix",oe.normalMatrix),St.setValue(X,"modelMatrix",oe.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Lt=$.uniformsGroups;for(let Or=0,Hl=Lt.length;Or<Hl;Or++)if(ge.isWebGL2){const sa=Lt[Or];Re.update(sa,Dn),Re.bind(sa,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function kl(z,Q){z.ambientLightColor.needsUpdate=Q,z.lightProbe.needsUpdate=Q,z.directionalLights.needsUpdate=Q,z.directionalLightShadows.needsUpdate=Q,z.pointLights.needsUpdate=Q,z.pointLightShadows.needsUpdate=Q,z.spotLights.needsUpdate=Q,z.spotLightShadows.needsUpdate=Q,z.rectAreaLights.needsUpdate=Q,z.hemisphereLights.needsUpdate=Q}function Gl(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(z,Q,ae){Ae.get(z.texture).__webglTexture=Q,Ae.get(z.depthTexture).__webglTexture=ae;const $=Ae.get(z);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=ae===void 0,$.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(z,Q){const ae=Ae.get(z);ae.__webglFramebuffer=Q,ae.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(z,Q=0,ae=0){T=z,S=Q,E=ae;let $=!0,oe=null,Ce=!1,Ue=!1;if(z){const ze=Ae.get(z);ze.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(X.FRAMEBUFFER,null),$=!1):ze.__webglFramebuffer===void 0?pe.setupRenderTarget(z):ze.__hasExternalTextures&&pe.rebindTextures(z,Ae.get(z.texture).__webglTexture,Ae.get(z.depthTexture).__webglTexture);const qe=z.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const Ge=Ae.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(oe=Ge[Q],Ce=!0):ge.isWebGL2&&z.samples>0&&pe.useMultisampledRTT(z)===!1?oe=Ae.get(z).__webglMultisampledFramebuffer:oe=Ge,M.copy(z.viewport),A.copy(z.scissor),C=z.scissorTest}else M.copy(K).multiplyScalar(L).floor(),A.copy(H).multiplyScalar(L).floor(),C=V;if(fe.bindFramebuffer(X.FRAMEBUFFER,oe)&&ge.drawBuffers&&$&&fe.drawBuffers(z,oe),fe.viewport(M),fe.scissor(A),fe.setScissorTest(C),Ce){const ze=Ae.get(z.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ze.__webglTexture,ae)}else if(Ue){const ze=Ae.get(z.texture),qe=Q||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ze.__webglTexture,ae||0,qe)}b=-1},this.readRenderTargetPixels=function(z,Q,ae,$,oe,Ce,Ue){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ae.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){fe.bindFramebuffer(X.FRAMEBUFFER,Be);try{const ze=z.texture,qe=ze.format,Ge=ze.type;if(qe!==Ot&&Ee.convert(qe)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ge===hn&&(ye.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ge!==wn&&Ee.convert(Ge)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===zt&&(ge.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=z.width-$&&ae>=0&&ae<=z.height-oe&&X.readPixels(Q,ae,$,oe,Ee.convert(qe),Ee.convert(Ge),Ce)}finally{const ze=T!==null?Ae.get(T).__webglFramebuffer:null;fe.bindFramebuffer(X.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(z,Q,ae=0){const $=Math.pow(2,-ae),oe=Math.floor(Q.image.width*$),Ce=Math.floor(Q.image.height*$);pe.setTexture2D(Q,0),X.copyTexSubImage2D(X.TEXTURE_2D,ae,0,0,z.x,z.y,oe,Ce),fe.unbindTexture()},this.copyTextureToTexture=function(z,Q,ae,$=0){const oe=Q.image.width,Ce=Q.image.height,Ue=Ee.convert(ae.format),Be=Ee.convert(ae.type);pe.setTexture2D(ae,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ae.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ae.unpackAlignment),Q.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,$,z.x,z.y,oe,Ce,Ue,Be,Q.image.data):Q.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,$,z.x,z.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Ue,Q.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,$,z.x,z.y,Ue,Be,Q.image),$===0&&ae.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(z,Q,ae,$,oe=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=z.max.x-z.min.x+1,Ue=z.max.y-z.min.y+1,Be=z.max.z-z.min.z+1,ze=Ee.convert($.format),qe=Ee.convert($.type);let Ge;if($.isData3DTexture)pe.setTexture3D($,0),Ge=X.TEXTURE_3D;else if($.isDataArrayTexture)pe.setTexture2DArray($,0),Ge=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,$.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,$.unpackAlignment);const He=X.getParameter(X.UNPACK_ROW_LENGTH),it=X.getParameter(X.UNPACK_IMAGE_HEIGHT),rt=X.getParameter(X.UNPACK_SKIP_PIXELS),Gt=X.getParameter(X.UNPACK_SKIP_ROWS),Qt=X.getParameter(X.UNPACK_SKIP_IMAGES),at=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,at.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,at.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,z.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,z.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,z.min.z),ae.isDataTexture||ae.isData3DTexture?X.texSubImage3D(Ge,oe,Q.x,Q.y,Q.z,Ce,Ue,Be,ze,qe,at.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ge,oe,Q.x,Q.y,Q.z,Ce,Ue,Be,ze,at.data)):X.texSubImage3D(Ge,oe,Q.x,Q.y,Q.z,Ce,Ue,Be,ze,qe,at),X.pixelStorei(X.UNPACK_ROW_LENGTH,He),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,it),X.pixelStorei(X.UNPACK_SKIP_PIXELS,rt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Gt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Qt),oe===0&&$.generateMipmaps&&X.generateMipmap(Ge),fe.unbindTexture()},this.initTexture=function(z){z.isCubeTexture?pe.setTextureCube(z,0):z.isData3DTexture?pe.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?pe.setTexture2DArray(z,0):pe.setTexture2D(z,0),fe.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,fe.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?Vn:nl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vn?ke:Kt}}class f0 extends xl{}f0.prototype.isWebGL1Renderer=!0;class d0 extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const To=new J,bo=new Je,Ao=new Je,p0=new J,Ro=new Ie,di=new J,ds=new Yn,Co=new Ie,ps=new Hs;class m0 extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)di.fromBufferAttribute(t,n),this.applyBoneTransform(n,di),this.boundingBox.expandByPoint(di)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)di.fromBufferAttribute(t,n),this.applyBoneTransform(n,di),this.boundingSphere.expandByPoint(di)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(r),e.ray.intersectsSphere(ds)!==!1&&(Co.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Co),!(this.boundingBox!==null&&ps.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;bo.fromBufferAttribute(r.attributes.skinIndex,e),Ao.fromBufferAttribute(r.attributes.skinWeight,e),To.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const a=Ao.getComponent(i);if(a!==0){const o=bo.getComponent(i);Ro.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(p0.copy(To).applyMatrix4(Ro),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Us extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ml extends xt{constructor(e=null,t=1,n=1,r,i,a,o,l,c=vt,h=vt,u,f){super(null,a,o,l,c,h,r,i,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lo=new Ie,g0=new Ie;class Js{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let i=0,a=e.length;i<a;i++){const o=e[i]?e[i].matrixWorld:g0;Lo.multiplyMatrices(o,t[i]),Lo.toArray(n,i*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Js(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=rl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ml(t,e,e,Ot,zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const i=e.bones[n];let a=t[i];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),a=new Us),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class yl extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Po=new J,Do=new J,Io=new Ie,ms=new Hs,_r=new Yn;class _0 extends nt{constructor(e=new Ut,t=new yl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,i=t.count;r<i;r++)Po.fromBufferAttribute(t,r-1),Do.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Po.distanceTo(Do);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),_r.radius+=i,e.ray.intersectsSphere(_r)===!1)return;Io.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Io);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new J,h=new J,u=new J,f=new J,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let v=d,_=w-1;v<_;v+=p){const S=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,E),ms.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),w=Math.min(m.count,a.start+a.count);for(let v=d,_=w-1;v<_;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),ms.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}class v0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const i=n.length;let a;t?a=t:a=e*n[i-1];let o=0,l=i-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(i-1);const h=n[r],f=n[r+1]-h,p=(a-h)/f;return(r+p)/(i-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);const a=this.getPoint(r),o=this.getPoint(i),l=t||(a.isVector2?new Fe:new J);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new J,r=[],i=[],a=[],o=new J,l=new Ie;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new J)}i[0]=new J,a[0]=new J;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let p=1;p<=e;p++){if(i[p]=i[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ct(r[p-1].dot(r[p]),-1,1));i[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],i[p])}if(t===!0){let p=Math.acos(ct(i[0].dot(i[e]),-1,1));p/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(p=-p);for(let g=1;g<=e;g++)i[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],i[g])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $s extends Ut{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new J,f=new J,p=[],g=[],y=[],m=[];for(let d=0;d<=n;d++){const w=[],v=d/n;let _=0;d===0&&a===0?_=.5/t:d===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const E=S/t;u.x=-e*Math.cos(r+E*i)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+E*i)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(E+_,1-v),w.push(c++)}h.push(w)}for(let d=0;d<n;d++)for(let w=0;w<t;w++){const v=h[d][w+1],_=h[d][w],S=h[d+1][w],E=h[d+1][w+1];(d!==0||a>0)&&p.push(v,_,E),(d!==n-1||l<Math.PI)&&p.push(_,S,E)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class x0 extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class M0 extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gs extends Pn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y0 extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xi,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function xn(s,e,t){return Sl(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function vr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sl(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function S0(s){function e(r,i){return s[r]-s[i]}const t=s.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Uo(s,e,t){const n=s.length,r=new s.constructor(n);for(let i=0,a=0;a!==n;++i){const o=t[i]*e;for(let l=0;l!==e;++l)r[a++]=s[o+l]}return r}function El(s,e,t,n){let r=1,i=s[0];for(;i!==void 0&&i[n]===void 0;)i=s[r++];if(i===void 0)return;let a=i[n];if(a!==void 0)if(Array.isArray(a))do a=i[n],a!==void 0&&(e.push(i.time),t.push.apply(t,a)),i=s[r++];while(i!==void 0);else if(a.toArray!==void 0)do a=i[n],a!==void 0&&(e.push(i.time),a.toArray(t,t.length)),i=s[r++];while(i!==void 0);else do a=i[n],a!==void 0&&(e.push(i.time),t.push(a)),i=s[r++];while(i!==void 0)}class Pr{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],i=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<i)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(i=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=i)){const o=t[1];e<o&&(n=2,i=o);for(let l=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=i,i=t[--n-1],e>=i)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let a=0;a!==r;++a)t[a]=n[i+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class E0 extends Pr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fa,endingEnd:Fa}}intervalChanged_(e,t,n){const r=this.parameterPositions;let i=e-2,a=e+1,o=r[i],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oa:i=e,o=2*t-n;break;case Ba:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oa:a=e,l=2*n-t;break;case Ba:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=i*h,this._offsetNext=a*h}interpolate_(e,t,n,r){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*y+.5*g,_=p*m-p*y;for(let S=0;S!==o;++S)i[S]=d*a[h+S]+w*a[c+S]+v*a[l+S]+_*a[u+S];return i}}class w0 extends Pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==o;++f)i[f]=a[c+f]*u+a[l+f]*h;return i}}class T0 extends Pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zt{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new T0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new w0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new E0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case wr:t=this.InterpolantFactoryMethodLinear;break;case Wr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return Wr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);const o=this.getValueSize();this.times=xn(n,i,a),this.values=xn(this.values,i*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==i;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Sl(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=xn(this.times),t=xn(this.values),n=this.getValueSize(),r=this.getInterpolation()===Wr,i=e.length-1;let a=1;for(let o=1;o<i;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){const y=t[u+g];if(y!==t[f+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(i>0){e[a]=e[i];for(let o=i*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=xn(e,0,a),this.values=xn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=xn(this.times,0),t=xn(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=wr;class bi extends Zt{}bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Er;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;class wl extends Zt{}wl.prototype.ValueTypeName="color";class Vi extends Zt{}Vi.prototype.ValueTypeName="number";class b0 extends Pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)It.slerpFlat(i,0,a,c-o,a,c,l);return i}}class Ai extends Zt{InterpolantFactoryMethodLinear(e){return new b0(this.times,this.values,this.getValueSize(),e)}}Ai.prototype.ValueTypeName="quaternion";Ai.prototype.DefaultInterpolation=wr;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;class Ri extends Zt{}Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Er;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends Zt{}Wi.prototype.ValueTypeName="vector";class A0{constructor(e,t=-1,n,r=Pc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(C0(n[a]).scale(r));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,a=n.length;i!==a;++i)t.push(Zt.toJSON(n[i]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const i=t.length,a=[];for(let o=0;o<i;o++){let l=[],c=[];l.push((o+i-1)%i,o,(o+1)%i),c.push(0,1,0);const h=S0(l);l=Uo(l,1,h),c=Uo(c,1,h),!r&&l[0]===0&&(l.push(i),c.push(c[0])),a.push(new Vi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(i);if(h&&h.length>1){const u=h[1];let f=r[u];f||(r[u]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,p,g,y){if(p.length!==0){const m=[],d=[];El(p,m,d,g),m.length!==0&&y.push(new u(f,m,d))}},r=[],i=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)p[f[g].morphTargets[y]]=-1;for(const y in p){const m=[],d=[];for(let w=0;w!==f[g].morphTargets.length;++w){const v=f[g];m.push(v.time),d.push(v.morphTarget===y?1:0)}r.push(new Vi(".morphTargetInfluence["+y+"]",m,d))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(Wi,p+".position",f,"pos",r),n(Ai,p+".quaternion",f,"rot",r),n(Wi,p+".scale",f,"scl",r)}}return r.length===0?null:new this(i,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function R0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vi;case"vector":case"vector2":case"vector3":case"vector4":return Wi;case"color":return wl;case"quaternion":return Ai;case"bool":case"boolean":return bi;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function C0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=R0(s.type);if(s.times===void 0){const t=[],n=[];El(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ar={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class L0{constructor(e,t,n){const r=this;let i=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,i===!1&&r.onStart!==void 0&&r.onStart(h,a,o),i=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const P0=new L0;class Cn{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cn.DEFAULT_MATERIAL_NAME="__DEFAULT";const on={};class D0 extends Error{constructor(e,t){super(e),this.response=t}}class Tl extends Cn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Ar.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(on[e]!==void 0){on[e].push({onLoad:t,onProgress:n,onError:r});return}on[e]=[],on[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=on[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let y=0;const m=new ReadableStream({start(d){w();function w(){u.read().then(({done:v,value:_})=>{if(v)d.close();else{y+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let E=0,T=h.length;E<T;E++){const b=h[E];b.onProgress&&b.onProgress(S)}d.enqueue(_),w()}})}}});return new Response(m)}else throw new D0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ar.add(e,c);const h=on[e];delete on[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=on[e];if(h===void 0)throw this.manager.itemError(e),c;delete on[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class I0 extends Cn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Ar.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const o=Hi("img");function l(){h(),Ar.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(u){h(),r&&r(u),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class Zs extends Cn{constructor(e){super(e)}load(e,t,n,r){const i=this,a=new Ml,o=new Tl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(i.withCredentials),o.load(e,function(l){const c=i.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Tt,a.wrapT=c.wrapT!==void 0?c.wrapT:Tt,a.magFilter=c.magFilter!==void 0?c.magFilter:gt,a.minFilter=c.minFilter!==void 0?c.minFilter:gt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=An),c.mipmapCount===1&&(a.minFilter=gt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,r),a}}class yr extends Cn{constructor(e){super(e)}load(e,t,n,r){const i=new xt,a=new I0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}}class Dr extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _s=new Ie,No=new J,Fo=new J;class Qs{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;No.setFromMatrixPosition(e.matrixWorld),t.position.copy(No),Fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fo),t.updateMatrixWorld(),_s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U0 extends Qs{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ei*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class N0 extends Dr{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new U0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Oo=new Ie,Ui=new J,vs=new J;class F0 extends Qs{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Ui.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ui),vs.copy(n.position),vs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vs),n.updateMatrixWorld(),r.makeTranslation(-Ui.x,-Ui.y,-Ui.z),Oo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo)}}class Ns extends Dr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new F0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class O0 extends Qs{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bl extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new O0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Al extends Dr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class B0{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ea="\\[\\]\\.:\\/",z0=new RegExp("["+ea+"]","g"),ta="[^"+ea+"]",k0="[^"+ea.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",ta),H0=/(WCOD+)?/.source.replace("WCOD",k0),V0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ta),W0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ta),X0=new RegExp("^"+G0+H0+V0+W0+"$"),q0=["material","materials","bones","map"];class Y0{constructor(e,t,n){const r=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z0,"")}static parseTrackName(e){const t=X0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const i=n.nodeName.substring(r+1);q0.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let a=0;a<i.length;a++){const o=i[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let i=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(i!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=i}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=Y0;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zs);const zo={type:"change"},xs={type:"start"},ko={type:"end"};class j0 extends Xn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",Se),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(zo),n.update(),i=r.NONE},this.update=function(){const G=new J,ue=new It().setFromUnitVectors(e.up,new J(0,1,0)),he=ue.clone().invert(),ne=new J,ce=new It,ve=new J,Me=2*Math.PI;return function(){const me=n.object.position;G.copy(me).sub(n.target),G.applyQuaternion(ue),o.setFromVector3(G),n.autoRotate&&i===r.NONE&&x(T()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Re=n.minAzimuthAngle,De=n.maxAzimuthAngle;return isFinite(Re)&&isFinite(De)&&(Re<-Math.PI?Re+=Me:Re>Math.PI&&(Re-=Me),De<-Math.PI?De+=Me:De>Math.PI&&(De-=Me),Re<=De?o.theta=Math.max(Re,Math.min(De,o.theta)):o.theta=o.theta>(Re+De)/2?Math.max(Re,o.theta):Math.min(De,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),G.setFromSpherical(o),G.applyQuaternion(he),me.copy(n.target).add(G),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||ne.distanceToSquared(n.object.position)>a||8*(1-ce.dot(n.object.quaternion))>a||ve.distanceToSquared(n.target)>0?(n.dispatchEvent(zo),ne.copy(n.object.position),ce.copy(n.object.quaternion),ve.copy(n.target),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",ye),n.domElement.removeEventListener("pointercancel",fe),n.domElement.removeEventListener("wheel",pe),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",fe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=r.NONE;const a=1e-6,o=new Bo,l=new Bo;let c=1;const h=new J;let u=!1;const f=new Fe,p=new Fe,g=new Fe,y=new Fe,m=new Fe,d=new Fe,w=new Fe,v=new Fe,_=new Fe,S=[],E={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function x(G){l.theta-=G}function M(G){l.phi-=G}const A=function(){const G=new J;return function(he,ne){G.setFromMatrixColumn(ne,0),G.multiplyScalar(-he),h.add(G)}}(),C=function(){const G=new J;return function(he,ne){n.screenSpacePanning===!0?G.setFromMatrixColumn(ne,1):(G.setFromMatrixColumn(ne,0),G.crossVectors(n.object.up,G)),G.multiplyScalar(he),h.add(G)}}(),D=function(){const G=new J;return function(he,ne){const ce=n.domElement;if(n.object.isPerspectiveCamera){const ve=n.object.position;G.copy(ve).sub(n.target);let Me=G.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),A(2*he*Me/ce.clientHeight,n.object.matrix),C(2*ne*Me/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(A(he*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),C(ne*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(G){n.object.isPerspectiveCamera?c/=G:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*G)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(G){n.object.isPerspectiveCamera?c*=G:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/G)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(G){f.set(G.clientX,G.clientY)}function L(G){w.set(G.clientX,G.clientY)}function O(G){y.set(G.clientX,G.clientY)}function Y(G){p.set(G.clientX,G.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ue=n.domElement;x(2*Math.PI*g.x/ue.clientHeight),M(2*Math.PI*g.y/ue.clientHeight),f.copy(p),n.update()}function K(G){v.set(G.clientX,G.clientY),_.subVectors(v,w),_.y>0?R(b()):_.y<0&&U(b()),w.copy(v),n.update()}function H(G){m.set(G.clientX,G.clientY),d.subVectors(m,y).multiplyScalar(n.panSpeed),D(d.x,d.y),y.copy(m),n.update()}function V(G){G.deltaY<0?U(b()):G.deltaY>0&&R(b()),n.update()}function B(G){let ue=!1;switch(G.code){case n.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),ue=!0;break;case n.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),ue=!0;break;case n.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),ue=!0;break;case n.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),ue=!0;break}ue&&(G.preventDefault(),n.update())}function N(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const G=.5*(S[0].pageX+S[1].pageX),ue=.5*(S[0].pageY+S[1].pageY);f.set(G,ue)}}function P(){if(S.length===1)y.set(S[0].pageX,S[0].pageY);else{const G=.5*(S[0].pageX+S[1].pageX),ue=.5*(S[0].pageY+S[1].pageY);y.set(G,ue)}}function W(){const G=S[0].pageX-S[1].pageX,ue=S[0].pageY-S[1].pageY,he=Math.sqrt(G*G+ue*ue);w.set(0,he)}function j(){n.enableZoom&&W(),n.enablePan&&P()}function Z(){n.enableZoom&&W(),n.enableRotate&&N()}function le(G){if(S.length==1)p.set(G.pageX,G.pageY);else{const he=se(G),ne=.5*(G.pageX+he.x),ce=.5*(G.pageY+he.y);p.set(ne,ce)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ue=n.domElement;x(2*Math.PI*g.x/ue.clientHeight),M(2*Math.PI*g.y/ue.clientHeight),f.copy(p)}function re(G){if(S.length===1)m.set(G.pageX,G.pageY);else{const ue=se(G),he=.5*(G.pageX+ue.x),ne=.5*(G.pageY+ue.y);m.set(he,ne)}d.subVectors(m,y).multiplyScalar(n.panSpeed),D(d.x,d.y),y.copy(m)}function te(G){const ue=se(G),he=G.pageX-ue.x,ne=G.pageY-ue.y,ce=Math.sqrt(he*he+ne*ne);v.set(0,ce),_.set(0,Math.pow(v.y/w.y,n.zoomSpeed)),R(_.y),w.copy(v)}function X(G){n.enableZoom&&te(G),n.enablePan&&re(G)}function Le(G){n.enableZoom&&te(G),n.enableRotate&&le(G)}function ye(G){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(G.pointerId),n.domElement.addEventListener("pointermove",ge),n.domElement.addEventListener("pointerup",fe)),I(G),G.pointerType==="touch"?Oe(G):Pe(G))}function ge(G){n.enabled!==!1&&(G.pointerType==="touch"?We(G):Ae(G))}function fe(G){ie(G),S.length===0&&(n.domElement.releasePointerCapture(G.pointerId),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",fe)),n.dispatchEvent(ko),i=r.NONE}function Pe(G){let ue;switch(G.button){case 0:ue=n.mouseButtons.LEFT;break;case 1:ue=n.mouseButtons.MIDDLE;break;case 2:ue=n.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Kn.DOLLY:if(n.enableZoom===!1)return;L(G),i=r.DOLLY;break;case Kn.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enablePan===!1)return;O(G),i=r.PAN}else{if(n.enableRotate===!1)return;F(G),i=r.ROTATE}break;case Kn.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(n.enableRotate===!1)return;F(G),i=r.ROTATE}else{if(n.enablePan===!1)return;O(G),i=r.PAN}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(xs)}function Ae(G){switch(i){case r.ROTATE:if(n.enableRotate===!1)return;Y(G);break;case r.DOLLY:if(n.enableZoom===!1)return;K(G);break;case r.PAN:if(n.enablePan===!1)return;H(G);break}}function pe(G){n.enabled===!1||n.enableZoom===!1||i!==r.NONE||(G.preventDefault(),n.dispatchEvent(xs),V(G),n.dispatchEvent(ko))}function Se(G){n.enabled===!1||n.enablePan===!1||B(G)}function Oe(G){switch(de(G),S.length){case 1:switch(n.touches.ONE){case Jn.ROTATE:if(n.enableRotate===!1)return;N(),i=r.TOUCH_ROTATE;break;case Jn.PAN:if(n.enablePan===!1)return;P(),i=r.TOUCH_PAN;break;default:i=r.NONE}break;case 2:switch(n.touches.TWO){case Jn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(),i=r.TOUCH_DOLLY_PAN;break;case Jn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(),i=r.TOUCH_DOLLY_ROTATE;break;default:i=r.NONE}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(xs)}function We(G){switch(de(G),i){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;le(G),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;re(G),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(G),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(G),n.update();break;default:i=r.NONE}}function k(G){n.enabled!==!1&&G.preventDefault()}function I(G){S.push(G)}function ie(G){delete E[G.pointerId];for(let ue=0;ue<S.length;ue++)if(S[ue].pointerId==G.pointerId){S.splice(ue,1);return}}function de(G){let ue=E[G.pointerId];ue===void 0&&(ue=new Fe,E[G.pointerId]=ue),ue.set(G.pageX,G.pageY)}function se(G){const ue=G.pointerId===S[0].pointerId?S[1]:S[0];return E[ue.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",ye),n.domElement.addEventListener("pointercancel",fe),n.domElement.addEventListener("wheel",pe,{passive:!1}),this.update()}}var ki=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),n(++s%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function n(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";s=h}var r=(performance||Date).now(),i=r,a=0,o=t(new ki.Panel("FPS","#0ff","#002")),l=t(new ki.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new ki.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(l.update(h-r,200),h>=i+1e3&&(o.update(a*1e3/(h-i),100),i=h,a=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){r=this.end()},domElement:e,setMode:n}};ki.Panel=function(s,e,t){var n=1/0,r=0,i=Math.round,a=i(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,u=3*a,f=15*a,p=74*a,g=30*a,y=document.createElement("canvas");y.width=o,y.height=l,y.style.cssText="width:80px;height:48px";var m=y.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,o,l),m.fillStyle=e,m.fillText(s,c,h),m.fillRect(u,f,p,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u,f,p,g),{dom:y,update:function(d,w){n=Math.min(n,d),r=Math.max(r,d),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,o,f),m.fillStyle=e,m.fillText(i(d)+" "+s+" ("+i(n)+"-"+i(r)+")",c,h),m.drawImage(y,u+a,f,p-a,g,u,f,p-a,g),m.fillRect(u+p-a,f,a,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u+p-a,f,a,i((1-d/w)*g))}}};const K0=ki;class J0{constructor(){be(this,"_scene");be(this,"_renderer");be(this,"_camera");be(this,"_orbit");be(this,"_directionLight");be(this,"_state",new K0);be(this,"_loopFunc");be(this,"_loopNumber");be(this,"_loopList",[]);this._init(),this._addEvent(),document.body.appendChild(this._state.dom)}_init(){this._renderer=new xl,this._renderer.shadowMap.enabled=!0,this._renderer.setPixelRatio(window.devicePixelRatio),this._scene=new d0,this._camera=new wt(60),this._orbit=new j0(this._camera,this._renderer.domElement),this._directionLight=new bl,this._scene.add(this._directionLight),this.resize(window.innerWidth,window.innerHeight),this._loopFunc=()=>{this.render(),this._loopNumber=requestAnimationFrame(this._loopFunc)},document.body.appendChild(this.renderer.domElement)}_addEvent(){window.addEventListener("resize",()=>{this.resize(window.innerWidth,window.innerHeight),console.log("resize")})}resize(e,t){this._renderer.domElement.width=e,this._renderer.domElement.height=t,this._renderer.setSize(e,t),this._renderer.setViewport(0,0,e,t),this._camera.aspect=e/t,this._camera.updateProjectionMatrix()}render(){this._loopList.forEach(e=>{e()}),this._renderer.render(this._scene,this._camera),this._state.update()}startLoop(){this._loopFunc()}stopLoop(){cancelAnimationFrame(this._loopNumber)}addLoopFunc(e){this._loopList.push(e)}get scene(){return this._scene}get camera(){return this._camera}get renderer(){return this._renderer}get orbit(){return this._orbit}get directionLight(){return this._directionLight}}class $0 extends Zs{constructor(e){super(e),this.type=hn}parse(e){const o=function(v,_){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(_||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(_||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(_||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(_||""))}return-1},u=`
`,f=function(v,_,S){_=_||1024;let T=v.pos,b=-1,x=0,M="",A=String.fromCharCode.apply(null,new Uint16Array(v.subarray(T,T+128)));for(;0>(b=A.indexOf(u))&&x<_&&T<v.byteLength;)M+=A,x+=A.length,T+=128,A+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(T,T+128)));return-1<b?(S!==!1&&(v.pos+=x+b+1),M+A.slice(0,b)):!1},p=function(v){const _=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*FORMAT=(\S+)\s*$/,b=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,x={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let M,A;if(v.pos>=v.byteLength||!(M=f(v)))return o(1,"no header found");if(!(A=M.match(_)))return o(3,"bad initial token");for(x.valid|=1,x.programtype=A[1],x.string+=M+`
`;M=f(v),M!==!1;){if(x.string+=M+`
`,M.charAt(0)==="#"){x.comments+=M+`
`;continue}if((A=M.match(S))&&(x.gamma=parseFloat(A[1])),(A=M.match(E))&&(x.exposure=parseFloat(A[1])),(A=M.match(T))&&(x.valid|=2,x.format=A[1]),(A=M.match(b))&&(x.valid|=4,x.height=parseInt(A[1],10),x.width=parseInt(A[2],10)),x.valid&2&&x.valid&4)break}return x.valid&2?x.valid&4?x:o(3,"missing image size specifier"):o(3,"missing format specifier")},g=function(v,_,S){const E=_;if(E<8||E>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(E!==(v[2]<<8|v[3]))return o(3,"wrong scanline width");const T=new Uint8Array(4*_*S);if(!T.length)return o(4,"unable to allocate buffer space");let b=0,x=0;const M=4*E,A=new Uint8Array(4),C=new Uint8Array(M);let D=S;for(;D>0&&x<v.byteLength;){if(x+4>v.byteLength)return o(1);if(A[0]=v[x++],A[1]=v[x++],A[2]=v[x++],A[3]=v[x++],A[0]!=2||A[1]!=2||(A[2]<<8|A[3])!=E)return o(3,"bad rgbe scanline format");let R=0,U;for(;R<M&&x<v.byteLength;){U=v[x++];const L=U>128;if(L&&(U-=128),U===0||R+U>M)return o(3,"bad scanline data");if(L){const O=v[x++];for(let Y=0;Y<U;Y++)C[R++]=O}else C.set(v.subarray(x,x+U),R),R+=U,x+=U}const F=E;for(let L=0;L<F;L++){let O=0;T[b]=C[L+O],O+=E,T[b+1]=C[L+O],O+=E,T[b+2]=C[L+O],O+=E,T[b+3]=C[L+O],b+=4}D--}return T},y=function(v,_,S,E){const T=v[_+3],b=Math.pow(2,T-128)/255;S[E+0]=v[_+0]*b,S[E+1]=v[_+1]*b,S[E+2]=v[_+2]*b,S[E+3]=1},m=function(v,_,S,E){const T=v[_+3],b=Math.pow(2,T-128)/255;S[E+0]=rr.toHalfFloat(Math.min(v[_+0]*b,65504)),S[E+1]=rr.toHalfFloat(Math.min(v[_+1]*b,65504)),S[E+2]=rr.toHalfFloat(Math.min(v[_+2]*b,65504)),S[E+3]=rr.toHalfFloat(1)},d=new Uint8Array(e);d.pos=0;const w=p(d);if(w!==-1){const v=w.width,_=w.height,S=g(d.subarray(d.pos),v,_);if(S!==-1){let E,T,b;switch(this.type){case zt:b=S.length/4;const x=new Float32Array(b*4);for(let A=0;A<b;A++)y(S,A*4,x,A*4);E=x,T=zt;break;case hn:b=S.length/4;const M=new Uint16Array(b*4);for(let A=0;A<b;A++)m(S,A*4,M,A*4);E=M,T=hn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:_,data:E,header:w.string,gamma:w.gamma,exposure:w.exposure,type:T}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(a,o){switch(a.type){case zt:case hn:a.colorSpace=Kt,a.minFilter=gt,a.magFilter=gt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,i,n,r)}}const Z0=`

#define STANDARD

varying vec3 vViewPosition;
varying vec3 vPosition;

#ifdef USE_TRANSMISSION

	

#endif
varying vec3 vWorldPosition;

#include <common>
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
	#include <morphcolor_vertex>

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

	

#endif
	vWorldPosition = worldPosition.xyz;
	vPosition = position;
}
`;function Q0(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function em(s){const e={};for(let t=0;t<s.length;t++){const n=Q0(s[t]);for(const r in n)e[r]=n[r]}return e}const tm=`

layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor

#define STANDARD

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
varying vec3 vWorldPosition;
varying vec3 vPosition;

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

uniform sampler2D rippleMap;
uniform sampler2D watersMap;
uniform sampler2D watersNormalMap;

uniform vec2 watersUV;
uniform float time;
uniform float rainSpeed;

vec3 computeRipple(vec2 uv, float t, float factor) {
	vec2 e_uv = uv * 0.5;
	// float e_factor = pow(factor, 2.0);
	vec4 ripple = texture(rippleMap, e_uv);
	ripple.gb = ripple.gb * 2.0 - 1.0;
	float dropf = fract(ripple.a * rainSpeed + t);
	float timef = dropf - (1.0 - ripple.r);
	float drpofactor = 1.0 - saturate(dropf);
	float final = drpofactor * sin(clamp(timef * 8.0 , 0.0, 2.0) * PI);

	return vec3(ripple.gb * final, final);
}

// vec3 computeRippleColor(vec2 uv, float t) {
// 	vec4 ripple = texture(rippleMap, uv);
// 	ripple.gb = ripple.gb * 2.0 - 1.0;
// 	float dropf = fract(ripple.a + t);
// 	float timef = dropf - 1.0 + ripple.r;
// 	float drpofactor = 1.0 - saturate(dropf);
// 	float final = drpofactor * sin(clamp(timef * 9.0, 0.0, 4.0) * PI);

// 	return vec3(vec2(final), 1.0);
// }

vec4 lerp(vec4 a, vec4 b, float x) {
	return a + x * (b - a);
}

vec3 lerp(vec3 a, vec3 b, float x) {
	return a + x * (b - a);
}

float lerp(float a, float b, float x) {
	return a + x * (b - a);
}



void main() {

	

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
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

	// normal *= ripple;
	#include <normal_fragment_maps>

	vec3 wNormal = inverseTransformDirection( normal, viewMatrix );

	float factor = dot(wNormal, vec3(0, 1, 0));
	factor = clamp(factor, 0.0, 1.0);
	factor = pow(factor, 8.0);
	// factor *=  factor * factor;
	// factor *= factor * factor;

	float factorN = dot(wNormal, vec3(0, -1, 0));
	factorN = 1.0 - clamp(factorN, 0.0, 1.0);

	vec3 ripple = computeRipple(vWorldPosition.xz, time * 1.0, factor);
	vec3 ripple2 = computeRipple(vWorldPosition.xz + 0.5, time * 1.0 + 0.5, factor);
	
	float ripLerp = saturate(abs(sin(0.5 * time)));

	ripple += lerp(ripple, ripple2, ripLerp);
	
	vec3 rippleNormal =  normalize(tbn * vec3(ripple.xy * 0.4, 1.0));

	// rippleNormal.xy *= 1.0;
	rippleNormal = normalize(rippleNormal);

	vec4 rippleColor = texture2D(rippleMap, vWorldPosition.xz);
	// vec3 rc = computeRippleColor(vWorldPosition.xz, time);
	float rv = ripple.b * 0.5;
	// diffuseColor = lerp(diffuseColor, vec4(rv), rv * factor);

	vec2 uvOffset = vec2(1.0, time * 0.005 * rainSpeed);

	vec2 watersUV0 = vWorldPosition.xy + uvOffset;
	vec2 watersUV1 = vWorldPosition.zy + uvOffset;

	watersUV0 *= 0.5;
	watersUV1 *= 0.5;

	vec4 watersColor0 = texture(watersMap, watersUV0);
	vec4 watersColor1 = texture(watersMap, watersUV1);
	vec4 watersColor = lerp(watersColor0, watersColor1, abs(wNormal.x));

	// float dropf = fract(ripple.a + t);
	// float watersMask = (1.0 - watersColor.b);

	vec2 wUv = vec2(1.0, time * 0.2 * rainSpeed);

	vec4 maskColor0 = texture(watersMap, watersUV0 + wUv);
	vec4 maskColor1 = texture(watersMap, watersUV1 + wUv);
	vec4 maskColor = lerp(maskColor0, maskColor1, abs(wNormal.x));


	vec3 up = vec3(0, 1, 0);
	vec3 xaxis = cross(up, wNormal);
	vec3 yaxis = cross(wNormal, xaxis);

	mat3 projectPlane = mat3(
		xaxis,
		yaxis,
		wNormal
	);

	projectPlane = inverse(projectPlane);

	vec3 newpos = projectPlane * vWorldPosition;

	
	// maskColor = texture(watersMap, (newpos.xy) + wUv);

	// vec3 projection = wNormal * vWorldPosition;

	// float norDot = dot(wNormal, wNormal);
	// float posDot = dot(wNormal, vWorldPosition);
	// float t = posDot / norDot;
	// vec3 cp = wNormal * t * vWorldPosition;
	// cp = normalize(cp);

	// // vec3 subPos = vWorldPosition - cp;
	
	// float maskU = cp.y * 0.5 + 0.5;
	// float maskV = cp.z > 0.0 ? cp.x * 0.25 + 0.25: 1.0 - cp.x * 0.25 + 0.25;

	// maskColor = texture(watersMap, vec2(maskV, maskU) + wUv);

	vec2 pos2d = vWorldPosition.xz;
	float pos2dLength = length(pos2d);
	pos2d = normalize(pos2d);

	float acosx = acos(pos2d.x);
	float radian = pos2d.y < 0.0 ? PI * 2.0 - acosx : acosx;
	// radian /= PI;
	radian *= 2.0 * pos2dLength;

	// maskColor = texture(watersMap, vec2(radian, vPosition.y) + wUv);


	float watersMask = saturate(1.0 - maskColor.b);
	// watersMask *= watersMask;
	watersMask *= (1.0 - factor);// * saturate(watersColor.g * 2.0);

	vec4 waterNormal0 = texture(watersNormalMap, watersUV0)* 2.0 - 1.0;
	vec4 waterNormal1 = texture(watersNormalMap, watersUV1)* 2.0 - 1.0;
	vec4 waterNormal = normalize(lerp(waterNormal0, waterNormal1, abs(wNormal.x)));
	
	waterNormal.xy *= 0.4;
	vec3 cwaterNormal = tbn * (waterNormal.xyz);
	cwaterNormal = normalize(cwaterNormal);

	// watersMask *= watersMask * wNormal;

	float finalWaters = watersColor.g * watersMask * factorN;

	// vec3 totalFinalNormal = lerp(cwaterNormal, rippleNormal, factor);

	float normalAlpha = (1.0 - watersColor.g);
	normalAlpha *= normalAlpha * normalAlpha;
	normalAlpha = 1.0 - normalAlpha;
		
	cwaterNormal = lerp(normal, cwaterNormal, watersMask * factorN * normalAlpha);
	// cwaterNormal = lerp(normal, cwaterNormal, finalWaters);

	
	normal = lerp(cwaterNormal, rippleNormal, factor);
	normal = normalize(normal);

	float totalFinal = saturate(lerp(finalWaters * 0.4, rv * 0.4, factor));

	// diffuseColor = vec4(cwaterNormal * watersMask, 1.0);//vec4(watersColor.g * watersMask);
	// diffuseColor = lerp(diffuseColor, vec4(totalFinal), totalFinal);
	diffuseColor += totalFinal;
	// diffuseColor = vec4(vec3(normalAlpha), 1.0);

	// normal *= ripple;

	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>


	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;class Go extends pn{constructor(){super();be(this,"clearcoat");be(this,"clearcoatMap");be(this,"clearcoatRoughness");be(this,"clearcoatRoughnessMap");be(this,"clearcoatNormalScale",new Fe(1,1));be(this,"clearcoatNormalMap");be(this,"reflectivity");be(this,"ior",1.5);be(this,"sheen");be(this,"sheenColor",new Ne(0));be(this,"sheenColorMap");be(this,"sheenRoughness",1);be(this,"sheenRoughnessMap");be(this,"transmission");be(this,"transmissionMap");be(this,"thickness",.01);be(this,"thicknessMap");be(this,"attenuationDistance",0);be(this,"attenuationColor",new Ne(1,1,1));be(this,"specularIntensity",1);be(this,"specularColor",new Ne(1,1,1));be(this,"specularIntensityMap");be(this,"specularColorMap");be(this,"iridescenceMap");be(this,"iridescenceIOR",1.3);be(this,"iridescence");be(this,"iridescenceThicknessRange");be(this,"iridescenceThicknessMap");be(this,"anisotropy");be(this,"anisotropyRotation");be(this,"anisotropyMap");be(this,"color",new Ne(16777215));be(this,"roughness",1);be(this,"metalness",0);be(this,"map");be(this,"lightMap");be(this,"lightMapIntensity",1);be(this,"aoMap");be(this,"aoMapIntensity",2);be(this,"emissive",new Ne(0));be(this,"emissiveIntensity",1);be(this,"emissiveMap");be(this,"bumpMap");be(this,"bumpScale",1);be(this,"normalMap");be(this,"normalMapType",Xi);be(this,"normalScale",new Fe(1,1));be(this,"displacementMap");be(this,"displacementScale",1);be(this,"displacementBias",0);be(this,"roughnessMap");be(this,"metalnessMap");be(this,"alphaMap");be(this,"envMap");be(this,"envMapIntensity",1);be(this,"wireframeLinecap","round");be(this,"wireframeLinejoin","round");be(this,"flatShading",!1);be(this,"lights",!0);this.defines={},this.uniforms=em([jt.physical.uniforms,{rippleMap:{value:null},time:{value:0},watersMap:{value:null},watersUV:{value:new Fe(1,1)},watersNormalMap:{value:null},rainSpeed:{value:1}}]),this.glslVersion="300 es",this.vertexShader=Z0,this.fragmentShader=tm}set rippleMap(t){this.uniforms.rippleMap.value=t}set watersMap(t){this.uniforms.watersMap.value=t}set time(t){this.uniforms.time.value=t}get watersUV(){return this.uniforms.watersUV.value}set watersNormalMap(t){this.uniforms.watersNormalMap.value=t}set rainSpeed(t){this.uniforms.rainSpeed.value=t}updateUniforms(){Object.keys(this).forEach(t=>{let n=this.uniforms[t];n&&(n.value=this[t])})}}class Ms extends Zs{constructor(e){super(e)}parse(e){function t(F){switch(F.image_type){case f:case y:(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)&&console.error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case d:F.colormap_type&&console.error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:console.error("THREE.TGALoader: No data.");default:console.error('THREE.TGALoader: Invalid type "%s".',F.image_type)}(F.width<=0||F.height<=0)&&console.error("THREE.TGALoader: Invalid image size."),F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32&&console.error('THREE.TGALoader: Invalid pixel size "%s".',F.pixel_size)}function n(F,L,O,Y,K){let H,V;const B=O.pixel_size>>3,N=O.width*O.height*B;if(L&&(V=K.subarray(Y,Y+=O.colormap_length*(O.colormap_size>>3))),F){H=new Uint8Array(N);let P,W,j,Z=0;const le=new Uint8Array(B);for(;Z<N;)if(P=K[Y++],W=(P&127)+1,P&128){for(j=0;j<B;++j)le[j]=K[Y++];for(j=0;j<W;++j)H.set(le,Z+j*B);Z+=B*W}else{for(W*=B,j=0;j<W;++j)H[Z+j]=K[Y++];Z+=W}}else H=K.subarray(Y,Y+=L?O.width*O.height:N);return{pixel_data:H,palettes:V}}function r(F,L,O,Y,K,H,V,B,N){const P=N;let W,j=0,Z,le;const re=M.width;for(le=L;le!==Y;le+=O)for(Z=K;Z!==V;Z+=H,j++)W=B[j],F[(Z+re*le)*4+3]=255,F[(Z+re*le)*4+2]=P[W*3+0],F[(Z+re*le)*4+1]=P[W*3+1],F[(Z+re*le)*4+0]=P[W*3+2];return F}function i(F,L,O,Y,K,H,V,B){let N,P=0,W,j;const Z=M.width;for(j=L;j!==Y;j+=O)for(W=K;W!==V;W+=H,P+=2)N=B[P+0]+(B[P+1]<<8),F[(W+Z*j)*4+0]=(N&31744)>>7,F[(W+Z*j)*4+1]=(N&992)>>2,F[(W+Z*j)*4+2]=(N&31)<<3,F[(W+Z*j)*4+3]=N&32768?0:255;return F}function a(F,L,O,Y,K,H,V,B){let N=0,P,W;const j=M.width;for(W=L;W!==Y;W+=O)for(P=K;P!==V;P+=H,N+=3)F[(P+j*W)*4+3]=255,F[(P+j*W)*4+2]=B[N+0],F[(P+j*W)*4+1]=B[N+1],F[(P+j*W)*4+0]=B[N+2];return F}function o(F,L,O,Y,K,H,V,B){let N=0,P,W;const j=M.width;for(W=L;W!==Y;W+=O)for(P=K;P!==V;P+=H,N+=4)F[(P+j*W)*4+2]=B[N+0],F[(P+j*W)*4+1]=B[N+1],F[(P+j*W)*4+0]=B[N+2],F[(P+j*W)*4+3]=B[N+3];return F}function l(F,L,O,Y,K,H,V,B){let N,P=0,W,j;const Z=M.width;for(j=L;j!==Y;j+=O)for(W=K;W!==V;W+=H,P++)N=B[P],F[(W+Z*j)*4+0]=N,F[(W+Z*j)*4+1]=N,F[(W+Z*j)*4+2]=N,F[(W+Z*j)*4+3]=255;return F}function c(F,L,O,Y,K,H,V,B){let N=0,P,W;const j=M.width;for(W=L;W!==Y;W+=O)for(P=K;P!==V;P+=H,N+=2)F[(P+j*W)*4+0]=B[N+0],F[(P+j*W)*4+1]=B[N+0],F[(P+j*W)*4+2]=B[N+0],F[(P+j*W)*4+3]=B[N+1];return F}function h(F,L,O,Y,K){let H,V,B,N,P,W;switch((M.flags&w)>>v){default:case E:H=0,B=1,P=L,V=0,N=1,W=O;break;case _:H=0,B=1,P=L,V=O-1,N=-1,W=-1;break;case T:H=L-1,B=-1,P=-1,V=0,N=1,W=O;break;case S:H=L-1,B=-1,P=-1,V=O-1,N=-1,W=-1;break}if(D)switch(M.pixel_size){case 8:l(F,V,N,W,H,B,P,Y);break;case 16:c(F,V,N,W,H,B,P,Y);break;default:console.error("THREE.TGALoader: Format not supported.");break}else switch(M.pixel_size){case 8:r(F,V,N,W,H,B,P,Y,K);break;case 16:i(F,V,N,W,H,B,P,Y);break;case 24:a(F,V,N,W,H,B,P,Y);break;case 32:o(F,V,N,W,H,B,P,Y);break;default:console.error("THREE.TGALoader: Format not supported.");break}return F}const u=0,f=1,p=2,g=3,y=9,m=10,d=11,w=48,v=4,_=0,S=1,E=2,T=3;e.length<19&&console.error("THREE.TGALoader: Not enough data to contain header.");let b=0;const x=new Uint8Array(e),M={id_length:x[b++],colormap_type:x[b++],image_type:x[b++],colormap_index:x[b++]|x[b++]<<8,colormap_length:x[b++]|x[b++]<<8,colormap_size:x[b++],origin:[x[b++]|x[b++]<<8,x[b++]|x[b++]<<8],width:x[b++]|x[b++]<<8,height:x[b++]|x[b++]<<8,pixel_size:x[b++],flags:x[b++]};t(M),M.id_length+b>e.length&&console.error("THREE.TGALoader: No data."),b+=M.id_length;let A=!1,C=!1,D=!1;switch(M.image_type){case y:A=!0,C=!0;break;case f:C=!0;break;case m:A=!0;break;case p:break;case d:A=!0,D=!0;break;case g:D=!0;break}const R=new Uint8Array(M.width*M.height*4),U=n(A,C,M,b,x);return h(R,M.width,M.height,U.pixel_data,U.palettes),{data:R,width:M.width,height:M.height,flipY:!0,generateMipmaps:!0,minFilter:An}}}(function(){var s={};typeof Bs=="object"?Bs.exports=s:self.UTIF=s;var e=typeof require=="function"?require("pako"):self.pako;function t(){typeof process>"u"&&console.log.apply(console,arguments)}(function(n,r){(function(){var i=function(){function c(h){this.message="JPEG error: "+h}return c.prototype=new Error,c.prototype.name="JpegError",c.constructor=c,c}(),a=function(){var c=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),h=4017,u=799,f=3406,p=2276,g=1567,y=3784,m=5793,d=2896;function w(x){x==null&&(x={}),x.w==null&&(x.w=-1),this.V=x.n,this.N=x.w}function v(x,M){for(var A=0,C=[],D,R,U=16,F;U>0&&!x[U-1];)U--;C.push({children:[],index:0});var L=C[0];for(D=0;D<U;D++){for(R=0;R<x[D];R++){for(L=C.pop(),L.children[L.index]=M[A];L.index>0;)L=C.pop();for(L.index++,C.push(L);C.length<=D;)C.push(F={children:[],index:0}),L.children[L.index]=F.children,L=F;A++}D+1<U&&(C.push(F={children:[],index:0}),L.children[L.index]=F.children,L=F)}return C[0].children}function _(x,M,A){return 64*((x.P+1)*M+A)}function S(x,M,A,C,D,R,U,F,L,O){O==null&&(O=!1);var Y=A.m,K=A.Z,H=M,V=0,B=0,N=0,P=0,W,j=0,Z,le,re,te,X,Le,ye=0,ge,fe,Pe,Ae;function pe(){if(B>0)return B--,V>>B&1;if(V=x[M++],V===255){var ce=x[M++];if(ce){if(ce===220&&O){M+=2;var ve=o(x,M);if(M+=2,ve>0&&ve!==A.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",ve)}else if(ce===217){if(O){var Me=j*8;if(Me>0&&Me<A.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",Me)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new i("unexpected marker")}}return B=7,V>>>7}function Se(ce){for(var ve=ce;;){switch(ve=ve[pe()],typeof ve){case"number":return ve;case"object":continue}throw new i("invalid huffman sequence")}}function Oe(ce){for(var ve=0;ce>0;)ve=ve<<1|pe(),ce--;return ve}function We(ce){if(ce===1)return pe()===1?1:-1;var ve=Oe(ce);return ve>=1<<ce-1?ve:ve+(-1<<ce)+1}function k(ce,ve){var Me=Se(ce.J),Ee=Me===0?0:We(Me),me=1;for(ce.D[ve]=ce.Q+=Ee;me<64;){var Re=Se(ce.i),De=Re&15,q=Re>>4;if(De===0){if(q<15)break;me+=16;continue}me+=q;var _e=c[me];ce.D[ve+_e]=We(De),me++}}function I(ce,ve){var Me=Se(ce.J),Ee=Me===0?0:We(Me)<<L;ce.D[ve]=ce.Q+=Ee}function ie(ce,ve){ce.D[ve]|=pe()<<L}function de(ce,ve){if(N>0){N--;return}for(var Me=R,Ee=U;Me<=Ee;){var me=Se(ce.i),Re=me&15,De=me>>4;if(Re===0){if(De<15){N=Oe(De)+(1<<De)-1;break}Me+=16;continue}Me+=De;var q=c[Me];ce.D[ve+q]=We(Re)*(1<<L),Me++}}function se(ce,ve){for(var Me=R,Ee=U,me=0,Re,De;Me<=Ee;){var q=ve+c[Me],_e=ce.D[q]<0?-1:1;switch(P){case 0:if(De=Se(ce.i),Re=De&15,me=De>>4,Re===0)me<15?(N=Oe(me)+(1<<me),P=4):(me=16,P=1);else{if(Re!==1)throw new i("invalid ACn encoding");W=We(Re),P=me?2:3}continue;case 1:case 2:ce.D[q]?ce.D[q]+=_e*(pe()<<L):(me--,me===0&&(P=P===2?3:0));break;case 3:ce.D[q]?ce.D[q]+=_e*(pe()<<L):(ce.D[q]=W<<L,P=0);break;case 4:ce.D[q]&&(ce.D[q]+=_e*(pe()<<L));break}Me++}P===4&&(N--,N===0&&(P=0))}function G(ce,ve,Me,Ee,me){var Re=Me/Y|0,De=Me%Y;j=Re*ce.A+Ee;var q=De*ce.h+me,_e=_(ce,j,q);ve(ce,_e)}function ue(ce,ve,Me){j=Me/ce.P|0;var Ee=Me%ce.P,me=_(ce,j,Ee);ve(ce,me)}var he=C.length;for(K?R===0?Le=F===0?I:ie:Le=F===0?de:se:Le=k,he===1?fe=C[0].P*C[0].c:fe=Y*A.R;ye<=fe;){var ne=D?Math.min(fe-ye,D):fe;if(ne>0){for(le=0;le<he;le++)C[le].Q=0;if(N=0,he===1)for(Z=C[0],X=0;X<ne;X++)ue(Z,Le,ye),ye++;else for(X=0;X<ne;X++){for(le=0;le<he;le++)for(Z=C[le],Pe=Z.h,Ae=Z.A,re=0;re<Ae;re++)for(te=0;te<Pe;te++)G(Z,Le,ye,re,te);ye++}}if(B=0,ge=b(x,M),!ge)break;if(ge.u&&(M=ge.offset),ge.M>=65488&&ge.M<=65495)M+=2;else break}return M-H}function E(x,M,A){var C=x.$,D=x.D,R,U,F,L,O,Y,K,H,V,B,N,P,W,j,Z,le,re;if(!C)throw new i("missing required Quantization Table.");for(var te=0;te<64;te+=8){if(V=D[M+te],B=D[M+te+1],N=D[M+te+2],P=D[M+te+3],W=D[M+te+4],j=D[M+te+5],Z=D[M+te+6],le=D[M+te+7],V*=C[te],!(B|N|P|W|j|Z|le)){re=m*V+512>>10,A[te]=re,A[te+1]=re,A[te+2]=re,A[te+3]=re,A[te+4]=re,A[te+5]=re,A[te+6]=re,A[te+7]=re;continue}B*=C[te+1],N*=C[te+2],P*=C[te+3],W*=C[te+4],j*=C[te+5],Z*=C[te+6],le*=C[te+7],R=m*V+128>>8,U=m*W+128>>8,F=N,L=Z,O=d*(B-le)+128>>8,H=d*(B+le)+128>>8,Y=P<<4,K=j<<4,R=R+U+1>>1,U=R-U,re=F*y+L*g+128>>8,F=F*g-L*y+128>>8,L=re,O=O+K+1>>1,K=O-K,H=H+Y+1>>1,Y=H-Y,R=R+L+1>>1,L=R-L,U=U+F+1>>1,F=U-F,re=O*p+H*f+2048>>12,O=O*f-H*p+2048>>12,H=re,re=Y*u+K*h+2048>>12,Y=Y*h-K*u+2048>>12,K=re,A[te]=R+H,A[te+7]=R-H,A[te+1]=U+K,A[te+6]=U-K,A[te+2]=F+Y,A[te+5]=F-Y,A[te+3]=L+O,A[te+4]=L-O}for(var X=0;X<8;++X){if(V=A[X],B=A[X+8],N=A[X+16],P=A[X+24],W=A[X+32],j=A[X+40],Z=A[X+48],le=A[X+56],!(B|N|P|W|j|Z|le)){re=m*V+8192>>14,re<-2040?re=0:re>=2024?re=255:re=re+2056>>4,D[M+X]=re,D[M+X+8]=re,D[M+X+16]=re,D[M+X+24]=re,D[M+X+32]=re,D[M+X+40]=re,D[M+X+48]=re,D[M+X+56]=re;continue}R=m*V+2048>>12,U=m*W+2048>>12,F=N,L=Z,O=d*(B-le)+2048>>12,H=d*(B+le)+2048>>12,Y=P,K=j,R=(R+U+1>>1)+4112,U=R-U,re=F*y+L*g+2048>>12,F=F*g-L*y+2048>>12,L=re,O=O+K+1>>1,K=O-K,H=H+Y+1>>1,Y=H-Y,R=R+L+1>>1,L=R-L,U=U+F+1>>1,F=U-F,re=O*p+H*f+2048>>12,O=O*f-H*p+2048>>12,H=re,re=Y*u+K*h+2048>>12,Y=Y*h-K*u+2048>>12,K=re,V=R+H,le=R-H,B=U+K,Z=U-K,N=F+Y,j=F-Y,P=L+O,W=L-O,V<16?V=0:V>=4080?V=255:V>>=4,B<16?B=0:B>=4080?B=255:B>>=4,N<16?N=0:N>=4080?N=255:N>>=4,P<16?P=0:P>=4080?P=255:P>>=4,W<16?W=0:W>=4080?W=255:W>>=4,j<16?j=0:j>=4080?j=255:j>>=4,Z<16?Z=0:Z>=4080?Z=255:Z>>=4,le<16?le=0:le>=4080?le=255:le>>=4,D[M+X]=V,D[M+X+8]=B,D[M+X+16]=N,D[M+X+24]=P,D[M+X+32]=W,D[M+X+40]=j,D[M+X+48]=Z,D[M+X+56]=le}}function T(x,M){for(var A=M.P,C=M.c,D=new Int16Array(64),R=0;R<C;R++)for(var U=0;U<A;U++){var F=_(M,R,U);E(M,F,D)}return M.D}function b(x,M,A){A==null&&(A=M);var C=x.length-1,D=A<M?A:M;if(M>=C)return null;var R=o(x,M);if(R>=65472&&R<=65534)return{u:null,M:R,offset:M};for(var U=o(x,D);!(U>=65472&&U<=65534);){if(++D>=C)return null;U=o(x,D)}return{u:R.toString(16),M:U,offset:D}}return w.prototype={parse(x,M){M==null&&(M={});var A=M.F,C=0,D=null,R=null,U,F,L=0;function O(){var q=o(x,C);C+=2;var _e=C+q-2,ee=b(x,_e,C);ee&&ee.u&&(_e=ee.offset);var xe=x.subarray(C,_e);return C+=xe.length,xe}function Y(q){for(var _e=Math.ceil(q.o/8/q.X),ee=Math.ceil(q.s/8/q.B),xe=0;xe<q.W.length;xe++){se=q.W[xe];var Te=Math.ceil(Math.ceil(q.o/8)*se.h/q.X),je=Math.ceil(Math.ceil(q.s/8)*se.A/q.B),Ze=_e*se.h,Qe=ee*se.A,_t=64*Qe*(Ze+1);se.D=new Int16Array(_t),se.P=Te,se.c=je}q.m=_e,q.R=ee}var K=[],H=[],V=[],B=o(x,C);if(C+=2,B!==65496)throw new i("SOI not found");B=o(x,C),C+=2;e:for(;B!==65497;){var N,P,W;switch(B){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var j=O();B===65504&&j[0]===74&&j[1]===70&&j[2]===73&&j[3]===70&&j[4]===0&&(D={version:{d:j[5],T:j[6]},K:j[7],j:j[8]<<8|j[9],H:j[10]<<8|j[11],S:j[12],I:j[13],C:j.subarray(14,14+3*j[12]*j[13])}),B===65518&&j[0]===65&&j[1]===100&&j[2]===111&&j[3]===98&&j[4]===101&&(R={version:j[5]<<8|j[6],k:j[7]<<8|j[8],q:j[9]<<8|j[10],a:j[11]});break;case 65499:var Z=o(x,C),le;C+=2;for(var re=Z+C-2;C<re;){var te=x[C++],X=new Uint16Array(64);if(te>>4)if(te>>4===1)for(P=0;P<64;P++)le=c[P],X[le]=o(x,C),C+=2;else throw new i("DQT - invalid table spec");else for(P=0;P<64;P++)le=c[P],X[le]=x[C++];K[te&15]=X}break;case 65472:case 65473:case 65474:if(U)throw new i("Only single frame JPEGs supported");C+=2,U={},U.G=B===65473,U.Z=B===65474,U.precision=x[C++];var Le=o(x,C),ye,ge=0,fe=0;C+=2,U.s=A||Le,U.o=o(x,C),C+=2,U.W=[],U._={};var Pe=x[C++];for(N=0;N<Pe;N++){ye=x[C];var Ae=x[C+1]>>4,pe=x[C+1]&15;ge<Ae&&(ge=Ae),fe<pe&&(fe=pe);var Se=x[C+2];W=U.W.push({h:Ae,A:pe,L:Se,$:null}),U._[ye]=W-1,C+=3}U.X=ge,U.B=fe,Y(U);break;case 65476:var Oe=o(x,C);for(C+=2,N=2;N<Oe;){var We=x[C++],k=new Uint8Array(16),I=0;for(P=0;P<16;P++,C++)I+=k[P]=x[C];var ie=new Uint8Array(I);for(P=0;P<I;P++,C++)ie[P]=x[C];N+=17+I,(We>>4?H:V)[We&15]=v(k,ie)}break;case 65501:C+=2,F=o(x,C),C+=2;break;case 65498:var de=++L===1&&!A,se;C+=2;var G=x[C++],ue=[];for(N=0;N<G;N++){var he=x[C++],ne=U._[he];se=U.W[ne],se.index=he;var ce=x[C++];se.J=V[ce>>4],se.i=H[ce&15],ue.push(se)}var ve=x[C++],Me=x[C++],Ee=x[C++];try{var me=S(x,C,U,ue,F,ve,Me,Ee>>4,Ee&15,de);C+=me}catch(q){if(q instanceof DNLMarkerError)return this.parse(x,{F:q.s});if(q instanceof EOIMarkerError)break e;throw q}break;case 65500:C+=4;break;case 65535:x[C]!==255&&C--;break;default:var Re=b(x,C-2,C-3);if(Re&&Re.u){C=Re.offset;break}if(C>=x.length-1)break e;throw new i("JpegImage.parse - unknown marker: "+B.toString(16))}B=o(x,C),C+=2}for(this.width=U.o,this.height=U.s,this.g=D,this.b=R,this.W=[],N=0;N<U.W.length;N++){se=U.W[N];var De=K[se.L];De&&(se.$=De),this.W.push({index:se.index,e:T(U,se),l:se.h/U.X,t:se.A/U.B,P:se.P,c:se.c})}this.p=this.W.length},Y(x,M,A){A==null&&(A=!1);var C=this.width/x,D=this.height/M,R,U,F,L,O,Y,K,H,V,B,N=0,P,W=this.W.length,j=x*M*W,Z=new Uint8ClampedArray(j),le=new Uint32Array(x),re=4294967288,te;for(K=0;K<W;K++){if(R=this.W[K],U=R.l*C,F=R.t*D,N=K,P=R.e,L=R.P+1<<3,U!==te){for(O=0;O<x;O++)H=0|O*U,le[O]=(H&re)<<3|H&7;te=U}for(Y=0;Y<M;Y++)for(H=0|Y*F,B=L*(H&re)|(H&7)<<3,O=0;O<x;O++)Z[N]=P[B+le[O]],N+=W}var X=this.V;if(!A&&W===4&&!X&&(X=new Int32Array([-256,255,-256,255,-256,255,-256,255])),X)for(K=0;K<j;)for(H=0,V=0;H<W;H++,K++,V+=2)Z[K]=(Z[K]*X[V]>>8)+X[V+1];return Z},get f(){return this.b?!!this.b.a:this.p===3?this.N===0?!1:!(this.W[0].index===82&&this.W[1].index===71&&this.W[2].index===66):this.N===1},z:function(M){for(var A,C,D,R=0,U=M.length;R<U;R+=3)A=M[R],C=M[R+1],D=M[R+2],M[R]=A-179.456+1.402*D,M[R+1]=A+135.459-.344*C-.714*D,M[R+2]=A-226.816+1.772*C;return M},O:function(M){for(var A,C,D,R,U=0,F=0,L=M.length;F<L;F+=4)A=M[F],C=M[F+1],D=M[F+2],R=M[F+3],M[U++]=-122.67195406894+C*(-660635669420364e-19*C+.000437130475926232*D-54080610064599e-18*A+.00048449797120281*R-.154362151871126)+D*(-.000957964378445773*D+.000817076911346625*A-.00477271405408747*R+1.53380253221734)+A*(.000961250184130688*A-.00266257332283933*R+.48357088451265)+R*(-.000336197177618394*R+.484791561490776),M[U++]=107.268039397724+C*(219927104525741e-19*C-.000640992018297945*D+.000659397001245577*A+.000426105652938837*R-.176491792462875)+D*(-.000778269941513683*D+.00130872261408275*A+.000770482631801132*R-.151051492775562)+A*(.00126935368114843*A-.00265090189010898*R+.25802910206845)+R*(-.000318913117588328*R-.213742400323665),M[U++]=-20.810012546947+C*(-.000570115196973677*C-263409051004589e-19*D+.0020741088115012*A-.00288260236853442*R+.814272968359295)+D*(-153496057440975e-19*D-.000132689043961446*A+.000560833691242812*R-.195152027534049)+A*(.00174418132927582*A-.00255243321439347*R+.116935020465145)+R*(-.000343531996510555*R+.24165260232407);return M.subarray(0,U)},r:function(M){for(var A,C,D,R=0,U=M.length;R<U;R+=4)A=M[R],C=M[R+1],D=M[R+2],M[R]=434.456-A-1.402*D,M[R+1]=119.541-A+.344*C+.714*D,M[R+2]=481.816-A-1.772*C;return M},U:function(M){for(var A,C,D,R,U=0,F=0,L=M.length;F<L;F+=4)A=M[F],C=M[F+1],D=M[F+2],R=M[F+3],M[U++]=255+A*(-6747147073602441e-20*A+.0008379262121013727*C+.0002894718188643294*D+.003264231057537806*R-1.1185611867203937)+C*(26374107616089405e-21*C-8626949158638572e-20*D-.0002748769067499491*R-.02155688794978967)+D*(-3878099212869363e-20*D-.0003267808279485286*R+.0686742238595345)-R*(.0003361971776183937*R+.7430659151342254),M[U++]=255+A*(.00013596372813588848*A+.000924537132573585*C+.00010567359618683593*D+.0004791864687436512*R-.3109689587515875)+C*(-.00023545346108370344*C+.0002702845253534714*D+.0020200308977307156*R-.7488052167015494)+D*(6834815998235662e-20*D+.00015168452363460973*R-.09751927774728933)-R*(.0003189131175883281*R+.7364883807733168),M[U++]=255+A*(13598650411385307e-21*A+.00012423956175490851*C+.0004751985097583589*D-36729317476630422e-22*R-.05562186980264034)+C*(.00016141380598724676*C+.0009692239130725186*D+.0007782692450036253*R-.44015232367526463)+D*(5068882914068769e-22*D+.0017778369011375071*R-.7591454649749609)-R*(.0003435319965105553*R+.7063770186160144);return M.subarray(0,U)},getData:function(x){var M=x.width,A=x.height,C=x.forceRGB,D=x.isSourcePDF;if(this.p>4)throw new i("Unsupported color mode");var R=this.Y(M,A,D);if(this.p===1&&C){for(var U=R.length,F=new Uint8ClampedArray(U*3),L=0,O=0;O<U;O++){var Y=R[O];F[L++]=Y,F[L++]=Y,F[L++]=Y}return F}else{if(this.p===3&&this.f)return this.z(R);if(this.p===4){if(this.f)return C?this.O(R):this.r(R);if(C)return this.U(R)}}return R}},w}();function o(l,c){return l[c]<<8|l[c+1]}n.JpegDecoder=a})(),n.encodeImage=function(i,a,o,l){var c={t256:[a],t257:[o],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[o],t279:[a*o*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(l)for(var h in l)c[h]=l[h];for(var u=new Uint8Array(n.encode([c])),f=new Uint8Array(i),p=new Uint8Array(1e3+a*o*4),h=0;h<u.length;h++)p[h]=u[h];for(var h=0;h<f.length;h++)p[1e3+h]=f[h];return p.buffer},n.encode=function(i){var a=new Uint8Array(2e4),o=4,l=n._binBE;a[0]=a[1]=77,l.writeUshort(a,2,42);var c=8;l.writeUint(a,o,c),o+=4;for(var h=0;h<i.length;h++){var u=n._writeIFD(l,n._types.basic,a,c,i[h]);c=u[1],h<i.length-1&&(c&3&&(c+=4-(c&3)),l.writeUint(a,u[0],c))}return a.slice(0,c).buffer},n.decode=function(i,a){a==null&&(a={parseMN:!0,debug:!1});var o=new Uint8Array(i),l=0,c=n._binBE.readASCII(o,l,2);l+=2;var h=c=="II"?n._binLE:n._binBE;h.readUshort(o,l),l+=2;var u=h.readUint(o,l);l+=4;for(var f=[];;){var p=h.readUshort(o,u),g=h.readUshort(o,u+4);if(p!=0&&(g<1||13<g)){t("error in TIFF");break}if(n._readIFD(h,o,u,f,0,a),u=h.readUint(o,u+2+p*12),u==0)break}return f},n.decodeImage=function(i,a,o){if(!a.data){var l=new Uint8Array(i),c=n._binBE.readASCII(l,0,2);if(a.t256!=null){a.isLE=c=="II",a.width=a.t256[0],a.height=a.t257[0];var h=a.t259?a.t259[0]:1,u=a.t266?a.t266[0]:1;a.t284&&a.t284[0]==2&&t("PlanarConfiguration 2 should not be used!"),h==7&&a.t258&&a.t258.length>3&&(a.t258=a.t258.slice(0,3));var f=a.t277?a.t277[0]:1,p=a.t258?a.t258[0]:1,g=p*f;h==1&&a.t279!=null&&a.t278&&a.t262[0]==32803&&(g=Math.round(a.t279[0]*8/(a.width*a.t278[0]))),a.t50885&&a.t50885[0]==4&&(g=a.t258[0]*3);var y=Math.ceil(a.width*g/8)*8,m=a.t273;(m==null||a.t322)&&(m=a.t324);var d=a.t279;h==1&&m.length==1&&(d=[a.height*(y>>>3)]),(d==null||a.t322)&&(d=a.t325);var w=new Uint8Array(a.height*(y>>>3)),v=0;if(a.t322!=null){var _=a.t322[0],S=a.t323[0],E=Math.floor((a.width+_-1)/_),T=Math.floor((a.height+S-1)/S),b=new Uint8Array(Math.ceil(_*S*g/8)|0);console.log("====",E,T);for(var x=0;x<T;x++)for(var M=0;M<E;M++){var A=x*E+M;b.fill(0),n.decode._decompress(a,o,l,m[A],d[A],h,b,0,u),h==6?w=b:n._copyTile(b,Math.ceil(_*g/8)|0,S,w,Math.ceil(a.width*g/8)|0,a.height,Math.ceil(M*_*g/8)|0,x*S)}v=w.length*8}else{if(m==null)return;var C=a.t278?a.t278[0]:a.height;C=Math.min(C,a.height),console.log("====",a.width,C);for(var A=0;A<m.length;A++)n.decode._decompress(a,o,l,m[A],d[A],h,w,Math.ceil(v/8)|0,u),v+=y*C;v=Math.min(v,w.length*8)}a.data=new Uint8Array(w.buffer,0,Math.ceil(v/8)|0)}}},n.decode._decompress=function(i,a,o,l,c,h,u,f,p){if(h==1)for(var g=0;g<c;g++)u[f+g]=o[l+g];else if(h==2)n.decode._decodeG2(o,l,c,u,f,i.width,p);else if(h==3)n.decode._decodeG3(o,l,c,u,f,i.width,p,i.t292?(i.t292[0]&1)==1:!1);else if(h==4)n.decode._decodeG4(o,l,c,u,f,i.width,p);else if(h==5)n.decode._decodeLZW(o,l,c,u,f,8);else if(h==6)n.decode._decodeOldJPEG(i,o,l,c,u,f);else if(h==7||h==34892)n.decode._decodeNewJPEG(i,o,l,c,u,f);else if(h==8||h==32946){var y=new Uint8Array(o.buffer,l+2,c-6),m=r.inflateRaw(y);u.set(m,f)}else h==9?n.decode._decodeVC5(o,l,c,u,f):h==32767?n.decode._decodeARW(i,o,l,c,u,f):h==32773?n.decode._decodePackBits(o,l,c,u,f):h==32809?n.decode._decodeThunder(o,l,c,u,f):h==34316?n.decode._decodePanasonic(i,o,l,c,u,f):h==34713?n.decode._decodeNikon(i,a,o,l,c,u,f):h==34676?n.decode._decodeLogLuv32(i,o,l,c,u,f):t("Unknown compression",h);var d=i.t258?Math.min(32,i.t258[0]):1,w=i.t277?i.t277[0]:1,v=d*w>>>3,_=i.t278?i.t278[0]:i.height,S=Math.ceil(d*w*i.width/8);if(d==16&&!i.isLE&&i.t33422==null)for(var E=0;E<_;E++)for(var T=f+E*S,b=1;b<S;b+=2){var x=u[T+b];u[T+b]=u[T+b-1],u[T+b-1]=x}if(i.t317&&i.t317[0]==2)for(var E=0;E<_;E++){var M=f+E*S;if(d==16)for(var g=v;g<S;g+=2){var A=(u[M+g+1]<<8|u[M+g])+(u[M+g-v+1]<<8|u[M+g-v]);u[M+g]=A&255,u[M+g+1]=A>>>8&255}else if(w==3)for(var g=3;g<S;g+=3)u[M+g]=u[M+g]+u[M+g-3]&255,u[M+g+1]=u[M+g+1]+u[M+g-2]&255,u[M+g+2]=u[M+g+2]+u[M+g-1]&255;else for(var g=v;g<S;g++)u[M+g]=u[M+g]+u[M+g-v]&255}},n.decode._decodePanasonic=function(i,a,o,l,c,h){var u=a.buffer,f=i.t2[0],p=i.t3[0],g=i.t10[0],y=i.t45[0],m=0,d=0,w=0,v=0,_=y==6?new Uint32Array(14):new Uint8Array(16),S,E,T,b=[0,0],x=[0,0],M,A=0,C,D,R,U,F=new Uint8Array(16384),L=new Uint16Array(c.buffer);function O(re){if(w==0){var te=new Uint8Array(u,o+d+8184,8200),X=new Uint8Array(u,o+d,8184);F.set(te),F.set(X,te.length),d+=16384}if(y==5)for(S=0;S<16;S++)_[S]=F[w++],w&=16383;else return w=w-re&131071,v=w>>3^16368,(F[v]|F[v+1]<<8)>>(w&7)&~(-1<<re)}function Y(re){return F[w+15-re]}function K(){_[0]=Y(0)<<6|Y(1)>>2,_[1]=((Y(1)&3)<<12|Y(2)<<4|Y(3)>>4)&16383,_[2]=Y(3)>>2&3,_[3]=(Y(3)&3)<<8|Y(4),_[4]=Y(5)<<2|Y(6)>>6,_[5]=(Y(6)&63)<<4|Y(7)>>4,_[6]=Y(7)>>2&3,_[7]=(Y(7)&3)<<8|Y(8),_[8]=Y(9)<<2&1020|Y(10)>>6,_[9]=(Y(10)<<4|Y(11)>>4)&1023,_[10]=Y(11)>>2&3,_[11]=(Y(11)&3)<<8|Y(12),_[12]=(Y(13)<<2&1020|Y(14)>>6)&1023,_[13]=(Y(14)<<4|Y(15)>>4)&1023,w+=16,v=0}function H(){b[0]=0,b[1]=0,x[0]=0,x[1]=0}if(y==7)throw y;if(y==6){var V=Math.floor(f/11),B=V*16;for(D=0;D<p-15;D+=16){var N=Math.min(16,p-D),P=B*N;for(F=new Uint8Array(u,o+m,P),w=0,m+=P,U=0,R=0;U<N;U++,R=0){A=(D+U)*f;for(var W=0;W<V;W++)for(K(),H(),T=0,C=0,S=0;S<11;S++){if(M=S&1,S%3==2){var j=v<14?_[v++]:0;j==3&&(j=4),C=512<<j,T=1<<j}var Z=v<14?_[v++]:0;b[M]?(Z*=T,C<8192&&x[M]>C&&(Z+=x[M]-C),x[M]=Z):(b[M]=Z,Z?x[M]=Z:Z=x[M]),L[A+R++]=Z-15<=65535?Z-15&65535:Z+2147483633>>31&16383}}}}else if(y==5){var le=g==12?10:9;for(D=0;D<p;D++)for(R=0;R<f;R+=le)O(0),g==12?(L[A++]=((_[1]&15)<<8)+_[0],L[A++]=16*_[2]+(_[1]>>4),L[A++]=((_[4]&15)<<8)+_[3],L[A++]=16*_[5]+(_[4]>>4),L[A++]=((_[7]&15)<<8)+_[6],L[A++]=16*_[8]+(_[7]>>4),L[A++]=((_[10]&15)<<8)+_[9],L[A++]=16*_[11]+(_[10]>>4),L[A++]=((_[13]&15)<<8)+_[12],L[A++]=16*_[14]+(_[13]>>4)):g==14&&(L[A++]=_[0]+((_[1]&63)<<8),L[A++]=(_[1]>>6)+4*_[2]+((_[3]&15)<<10),L[A++]=(_[3]>>4)+16*_[4]+((_[5]&3)<<12),L[A++]=((_[5]&252)>>2)+(_[6]<<6),L[A++]=_[7]+((_[8]&63)<<8),L[A++]=(_[8]>>6)+4*_[9]+((_[10]&15)<<10),L[A++]=(_[10]>>4)+16*_[11]+((_[12]&3)<<12),L[A++]=((_[12]&252)>>2)+(_[13]<<6),L[A++]=_[14]+((_[15]&63)<<8))}else if(y==4)for(D=0;D<p;D++)for(R=0;R<f;R++)S=R%14,M=S&1,S==0&&H(),S%3==2&&(T=4>>3-O(2)),x[M]?(E=O(8),E!=0&&(b[M]-=128<<T,(b[M]<0||T==4)&&(b[M]&=~(-1<<T)),b[M]+=E<<T)):(x[M]=O(8),(x[M]||S>11)&&(b[M]=x[M]<<4|O(4))),L[A++]=b[R&1];else throw y},n.decode._decodeVC5=n.decode._decodeVC5=function(){var i=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],a,o,l,c=[3,3,3,3,2,2,2,1,1,1],h=24576,u=16384,f=8192,p=u|f;function g(T){var b=T[1],x=T[0][b>>>3]>>>7-(b&7)&1;return T[1]++,x}function y(T,b){if(a==null){a={};for(var x=0;x<i.length;x+=4)a[i[x+1]]=i.slice(x,x+4)}for(var M=g(T),A=a[M];A==null;)M=M<<1|g(T),A=a[M];var C=A[3];C!=0&&(C=g(T)==0?C:-C),b[0]=A[2],b[1]=C}function m(T,b){for(var x=0;x<b;x++)(T&1)==1&&T++,T=T>>>1;return T}function d(T,b){return T>>b}function w(T,b,x,M,A,C){b[x]=d(d(11*T[A]-4*T[A+C]+T[A+C+C]+4,3)+T[M],1),b[x+C]=d(d(5*T[A]+4*T[A+C]-T[A+C+C]+4,3)-T[M],1)}function v(T,b,x,M,A,C){var D=T[A-C]-T[A+C],R=T[A],U=T[M];b[x]=d(d(D+4,3)+R+U,1),b[x+C]=d(d(-D+4,3)+R-U,1)}function _(T,b,x,M,A,C){b[x]=d(d(5*T[A]+4*T[A-C]-T[A-C-C]+4,3)+T[M],1),b[x+C]=d(d(11*T[A]-4*T[A-C]+T[A-C-C]+4,3)-T[M],1)}function S(T){return T=T<0?0:T>4095?4095:T,T=l[T]>>>2,T}function E(T,b,x,M,A){M=new Uint16Array(M.buffer);var C=Date.now(),D=n._binBE,R=b+x,U,F,L,O,Y,K,H,V,B,N;for(b+=4;b<R;){var P=D.readShort(T,b),W=D.readUshort(T,b+2);if(b+=4,P==12)U=W;else if(P==20)F=W;else if(P==21)L=W;else if(P==48)O=W;else if(P==53)Y=W;else if(P!=35){if(P==62)K=W;else if(P!=101){if(P==109)H=W;else if(P!=84){if(P!=106){if(P!=107){if(P!=108){if(P!=102){if(P==104)V=W;else if(P!=105){var j=P<0?-P:P,Z=j&65280,le=0;if(j&p&&(j&f?(le=W&65535,le+=(j&255)<<16):le=W&65535),(j&h)==h){if(B==null){B=[];for(var re=0;re<4;re++)B[re]=new Int16Array((F>>>1)*(L>>>1));N=new Int16Array((F>>>1)*(L>>>1)),o=new Int16Array(1024);for(var re=0;re<1024;re++){var te=re-512,X=Math.abs(te),U=Math.floor(768*X*X*X/(255*255*255))+X;o[re]=Math.sign(te)*U}l=new Uint16Array(4096);for(var Le=65536-1,re=0;re<4096;re++){var ye=re,ge=Le*(Math.pow(113,ye/4095)-1)/112;l[re]=Math.min(ge,Le)}}var fe=B[K],Pe=m(F,1+c[O]),Ae=m(L,1+c[O]);if(O==0)for(var pe=0;pe<Ae;pe++)for(var Se=0;Se<Pe;Se++){var Oe=b+(pe*Pe+Se)*2;fe[pe*(F>>>1)+Se]=T[Oe]<<8|T[Oe+1]}else{for(var We=[T,b*8],k=[],I=0,ie=Pe*Ae,de=[0,0],se=0,W=0;I<ie;)for(y(We,de),se=de[0],W=de[1];se>0;)k[I++]=W,se--;for(var G=(O-1)%3,ue=G!=1?Pe:0,he=G!=0?Ae:0,pe=0;pe<Ae;pe++)for(var ne=(pe+he)*(F>>>1)+ue,ce=pe*Pe,Se=0;Se<Pe;Se++)fe[ne+Se]=o[k[ce+Se]+512]*Y;if(G==2){for(var V=F>>>1,ve=Pe*2,Me=Ae*2,pe=0;pe<Ae;pe++)for(var Se=0;Se<ve;Se++){var re=pe*2*V+Se,Ee=pe*V+Se,me=Ae*V+Ee;pe==0?w(fe,N,re,me,Ee,V):pe==Ae-1?_(fe,N,re,me,Ee,V):v(fe,N,re,me,Ee,V)}var Re=fe;fe=N,N=Re;for(var pe=0;pe<Me;pe++)for(var Se=0;Se<Pe;Se++){var re=pe*V+2*Se,Ee=pe*V+Se,me=Pe+Ee;Se==0?w(fe,N,re,me,Ee,1):Se==Pe-1?_(fe,N,re,me,Ee,1):v(fe,N,re,me,Ee,1)}var Re=fe;fe=N,N=Re;for(var De=[],q=2-~~((O-1)/3),_e=0;_e<3;_e++)De[_e]=H>>14-_e*2&3;var ee=De[q];if(ee!=0)for(var pe=0;pe<Me;pe++)for(var Se=0;Se<ve;Se++){var re=pe*V+Se;fe[re]=fe[re]<<ee}}}if(O==9&&K==3)for(var xe=B[0],Te=B[1],je=B[2],Ze=B[3],pe=0;pe<L;pe+=2)for(var Se=0;Se<F;Se+=2){var Qe=pe*F+Se,Oe=(pe>>>1)*(F>>>1)+(Se>>>1),_t=xe[Oe],tt=Te[Oe]-2048,Nt=je[Oe]-2048,dt=Ze[Oe]-2048,Yi=(tt<<1)+_t,ji=(Nt<<1)+_t,Ir=_t+dt,jn=_t-dt;M[Qe]=S(Yi),M[Qe+1]=S(Ir),M[Qe+F]=S(jn),M[Qe+F+1]=S(ji)}b+=le*4}else if(j==16388)b+=le*4;else if(!(Z==8192||Z==8448||Z==9216))throw j.toString(16)}}}}}}}}}console.log(Date.now()-C)}return E}(),n.decode._decodeLogLuv32=function(i,a,o,l,c,h){for(var u=i.width,f=u*4,p=0,g=new Uint8Array(f);p<l;){for(var y=0;y<f;){var m=a[o+p];if(p++,m<128){for(var d=0;d<m;d++)g[y+d]=a[o+p+d];y+=m,p+=m}else{m=m-126;for(var d=0;d<m;d++)g[y+d]=a[o+p];y+=m,p++}}for(var w=0;w<u;w++)c[h+0]=g[w],c[h+1]=g[w+u],c[h+2]=g[w+u*2],c[h+4]=g[w+u*3],h+=6}},n.decode._ljpeg_diff=function(i,a,o){var l=n.decode._getbithuff,c,h;return c=l(i,a,o[0],o),h=l(i,a,c,0),h&1<<c-1||(h-=(1<<c)-1),h},n.decode._decodeARW=function(i,a,o,l,c,h){var u=i.t256[0],f=i.t257[0],p=i.t258[0],g=i.isLE?n._binLE:n._binBE,y=u*f==l||u*f*1.5==l;if(!y){f+=8;var m=[o,0,0,0],d=new Uint16Array(32770),w=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],V,v,_,R,D,S=0,E=n.decode._ljpeg_diff;for(d[0]=15,_=V=0;V<18;V++)for(var T=32768>>>(w[V]>>>8),v=0;v<T;v++)d[++_]=w[V];for(R=u;R--;)for(D=0;D<f+1;D+=2)if(D==f&&(D=1),S+=E(a,m,d),D<f){var b=S&4095;n.decode._putsF(c,(D*u+R)*p,b<<16-p)}return}if(u*f*1.5==l){for(var V=0;V<l;V+=3){var x=a[o+V+0],M=a[o+V+1],A=a[o+V+2];c[h+V]=M<<4|x>>>4,c[h+V+1]=x<<4|A>>>4,c[h+V+2]=A<<4|M>>>4}return}var C=new Uint16Array(16),D,R,U,F,L,O,Y,K,H,V,B,N=new Uint8Array(u+1);for(D=0;D<f;D++){for(var P=0;P<u;P++)N[P]=a[o++];for(B=0,R=0;R<u-30;B+=16){for(F=2047&(U=g.readUint(N,B)),L=2047&U>>>11,O=15&U>>>22,Y=15&U>>>26,K=0;K<4&&128<<K<=F-L;K++);for(H=30,V=0;V<16;V++)V==O?C[V]=F:V==Y?C[V]=L:(C[V]=((g.readUshort(N,B+(H>>3))>>>(H&7)&127)<<K)+L,C[V]>2047&&(C[V]=2047),H+=7);for(V=0;V<16;V++,R+=2){var b=C[V]<<1;n.decode._putsF(c,(D*u+R)*p,b<<16-p)}R-=R&1?1:31}}},n.decode._decodeNikon=function(i,a,o,l,c,h,u){var f=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],p=i.t256[0],g=i.t257[0],y=i.t258[0],m=0,d=0,w=n.decode._make_decoder,v=n.decode._getbithuff,_=a[0].exifIFD.makerNote,S=_.t150?_.t150:_.t140,E=0,T=S[E++],b=S[E++];(T==73||b==88)&&(E+=2110),T==70&&(m=2),y==14&&(m+=3);for(var x=[[0,0],[0,0]],M=i.isLE?n._binLE:n._binBE,U=0;U<2;U++)for(var A=0;A<2;A++)x[U][A]=M.readShort(S,E),E+=2;var C=1<<y&32767,D=0,R=M.readShort(S,E);E+=2,R>1&&(D=Math.floor(C/(R-1))),T==68&&b==32&&D>0&&(d=M.readShort(S,562));var U,F,L,O,Y,K,H=[0,0],V=w(f[m]),B=[l,0,0,0];for(F=0;F<g;F++)for(d&&F==d&&(V=w(f[m+1])),L=0;L<p;L++){U=v(o,B,V[0],V),O=U&15,Y=U>>>4,K=(v(o,B,O-Y,0)<<1)+1<<Y>>>1,K&1<<O-1||(K-=(1<<O)-(Y==0?1:0)),L<2?H[L]=x[F&1][L]+=K:H[L&1]+=K;var N=Math.min(Math.max(H[L&1],0),(1<<y)-1),P=(F*p+L)*y;n.decode._putsF(h,P,N<<16-y)}},n.decode._putsF=function(i,a,o){o=o<<8-(a&7);var l=a>>>3;i[l]|=o>>>16,i[l+1]|=o>>>8,i[l+2]|=o},n.decode._getbithuff=function(i,a,o,l){var c=0;n.decode._get_byte;var h,u=a[0],f=a[1],p=a[2],g=a[3];if(o==0||p<0)return 0;for(;!g&&p<o&&(h=i[u++])!=-1&&!(g=c);)f=(f<<8)+h,p+=8;if(h=f<<32-p>>>32-o,l?(p-=l[h+1]>>>8,h=l[h+1]&255):p-=o,p<0)throw"e";return a[0]=u,a[1]=f,a[2]=p,a[3]=g,h},n.decode._make_decoder=function(i){var a,o,l,c,h,u=[];for(a=16;a!=0&&!i[a];a--);var f=17;for(u[0]=a,l=o=1;o<=a;o++)for(c=0;c<i[o];c++,++f)for(h=0;h<1<<a-o;h++)l<=1<<a&&(u[l++]=o<<8|i[f]);return u},n.decode._decodeNewJPEG=function(i,a,o,l,c,h){l=Math.min(l,a.length-o);var u=i.t347,f=u?u.length:0,p=new Uint8Array(f+l);if(u){for(var g=216,y=217,m=0,d=0;d<f-1&&!(u[d]==255&&u[d+1]==y);d++)p[m++]=u[d];var w=a[o],v=a[o+1];(w!=255||v!=g)&&(p[m++]=w,p[m++]=v);for(var d=2;d<l;d++)p[m++]=a[o+d]}else for(var d=0;d<l;d++)p[d]=a[o+d];if(i.t262[0]==32803||i.t259[0]==7&&i.t262[0]==34892){var _=i.t258[0],S=n.LosslessJpegDecode(p),E=S.length;if(_==16)if(i.isLE)for(var d=0;d<E;d++)c[h+(d<<1)]=S[d]&255,c[h+(d<<1)+1]=S[d]>>>8;else for(var d=0;d<E;d++)c[h+(d<<1)]=S[d]>>>8,c[h+(d<<1)+1]=S[d]&255;else if(_==14||_==12)for(var T=16-_,d=0;d<E;d++)n.decode._putsF(c,d*_,S[d]<<T);else if(_==8)for(var d=0;d<E;d++)c[h+d]=S[d];else throw new Error("unsupported bit depth "+_)}else{var b=new n.JpegDecoder;b.parse(p);for(var x=b.getData({width:b.width,height:b.height,forceRGB:!0,isSourcePDF:!1}),d=0;d<x.length;d++)c[h+d]=x[d]}i.t262[0]==6&&(i.t262[0]=2)},n.decode._decodeOldJPEGInit=function(i,a,o,l){var c=216,h=219,u=196,f=221,p=192,g=218,y=0,m=0,d,w,v=!1,_,S,E,T=i.t513,b=T?T[0]:0,x=i.t514,M=x?x[0]:0,A=i.t324||i.t273||T,C=i.t530,D=0,R=0,U=i.t277?i.t277[0]:1,F=i.t515;if(A&&(m=A[0],v=A.length>1),!v){if(a[o]==255&&a[o+1]==c)return{jpegOffset:o};if(T!=null&&(a[o+b]==255&&a[o+b+1]==c?y=o+b:t("JPEGInterchangeFormat does not point to SOI"),x==null?t("JPEGInterchangeFormatLength field is missing"):(b>=m||b+M<=m)&&t("JPEGInterchangeFormatLength field value is invalid"),y!=null))return{jpegOffset:y}}if(C!=null&&(D=C[0],R=C[1]),T!=null&&x!=null)if(M>=2&&b+M<=m){for(a[o+b+M-2]==255&&a[o+b+M-1]==c?d=new Uint8Array(M-2):d=new Uint8Array(M),_=0;_<d.length;_++)d[_]=a[o+b+_];t("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else t("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(d==null){var L=0,O=[];O[L++]=255,O[L++]=c;var Y=i.t519;if(Y==null)throw new Error("JPEGQTables tag is missing");for(_=0;_<Y.length;_++)for(O[L++]=255,O[L++]=h,O[L++]=0,O[L++]=67,O[L++]=_,S=0;S<64;S++)O[L++]=a[o+Y[_]+S];for(E=0;E<2;E++){var K=i[E==0?"t520":"t521"];if(K==null)throw new Error((E==0?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(_=0;_<K.length;_++){O[L++]=255,O[L++]=u;var H=19;for(S=0;S<16;S++)H+=a[o+K[_]+S];for(O[L++]=H>>>8,O[L++]=H&255,O[L++]=_|E<<4,S=0;S<16;S++)O[L++]=a[o+K[_]+S];for(S=0;S<H;S++)O[L++]=a[o+K[_]+16+S]}}if(O[L++]=255,O[L++]=p,O[L++]=0,O[L++]=8+3*U,O[L++]=8,O[L++]=i.height>>>8&255,O[L++]=i.height&255,O[L++]=i.width>>>8&255,O[L++]=i.width&255,O[L++]=U,U==1)O[L++]=1,O[L++]=17,O[L++]=0;else for(_=0;_<3;_++)O[L++]=_+1,O[L++]=_!=0?17:(D&15)<<4|R&15,O[L++]=_;F!=null&&F[0]!=0&&(O[L++]=255,O[L++]=f,O[L++]=0,O[L++]=4,O[L++]=F[0]>>>8&255,O[L++]=F[0]&255),d=new Uint8Array(O)}var V=-1;for(_=0;_<d.length-1;){if(d[_]==255&&d[_+1]==p){V=_;break}_++}if(V==-1){var B=new Uint8Array(d.length+10+3*U);B.set(d);var N=d.length;if(V=d.length,d=B,d[N++]=255,d[N++]=p,d[N++]=0,d[N++]=8+3*U,d[N++]=8,d[N++]=i.height>>>8&255,d[N++]=i.height&255,d[N++]=i.width>>>8&255,d[N++]=i.width&255,d[N++]=U,U==1)d[N++]=1,d[N++]=17,d[N++]=0;else for(_=0;_<3;_++)d[N++]=_+1,d[N++]=_!=0?17:(D&15)<<4|R&15,d[N++]=_}if(a[m]==255&&a[m+1]==g){var P=a[m+2]<<8|a[m+3];for(w=new Uint8Array(P+2),w[0]=a[m],w[1]=a[m+1],w[2]=a[m+2],w[3]=a[m+3],_=0;_<P-2;_++)w[_+4]=a[m+_+4]}else{w=new Uint8Array(2+6+2*U);var W=0;if(w[W++]=255,w[W++]=g,w[W++]=0,w[W++]=6+2*U,w[W++]=U,U==1)w[W++]=1,w[W++]=0;else for(_=0;_<3;_++)w[W++]=_+1,w[W++]=_<<4|_;w[W++]=0,w[W++]=63,w[W++]=0}return{jpegOffset:o,tables:d,sosMarker:w,sofPosition:V}},n.decode._decodeOldJPEG=function(i,a,o,l,c,h){var u,f,p,g,y,m=n.decode._decodeOldJPEGInit(i,a,o,l);if(m.jpegOffset!=null)for(f=o+l-m.jpegOffset,g=new Uint8Array(f),u=0;u<f;u++)g[u]=a[m.jpegOffset+u];else{for(p=m.tables.length,g=new Uint8Array(p+m.sosMarker.length+l+2),g.set(m.tables),y=p,g[m.sofPosition+5]=i.height>>>8&255,g[m.sofPosition+6]=i.height&255,g[m.sofPosition+7]=i.width>>>8&255,g[m.sofPosition+8]=i.width&255,(a[o]!=255||a[o+1]!=SOS)&&(g.set(m.sosMarker,y),y+=sosMarker.length),u=0;u<l;u++)g[y++]=a[o+u];g[y++]=255,g[y++]=EOI}var d=new n.JpegDecoder;d.parse(g);for(var w=d.getData({width:d.width,height:d.height,forceRGB:!0,isSourcePDF:!1}),u=0;u<w.length;u++)c[h+u]=w[u];i.t262&&i.t262[0]==6&&(i.t262[0]=2)},n.decode._decodePackBits=function(i,a,o,l,c){for(var h=new Int8Array(i.buffer),u=new Int8Array(l.buffer),f=a+o;a<f;){var p=h[a];if(a++,p>=0&&p<128)for(var g=0;g<p+1;g++)u[c]=h[a],c++,a++;if(p>=-127&&p<0){for(var g=0;g<-p+1;g++)u[c]=h[a],c++;a++}}return c},n.decode._decodeThunder=function(i,a,o,l,c){for(var h=[0,1,0,-1],u=[0,1,2,3,0,-3,-2,-1],f=a+o,p=c*2,g=0;a<f;){var y=i[a],m=y>>>6,d=y&63;if(a++,m==3&&(g=d&15,l[p>>>1]|=g<<4*(1-p&1),p++),m==0)for(var w=0;w<d;w++)l[p>>>1]|=g<<4*(1-p&1),p++;if(m==2)for(var w=0;w<2;w++){var v=d>>>3*(1-w)&7;v!=4&&(g+=u[v],l[p>>>1]|=g<<4*(1-p&1),p++)}if(m==1)for(var w=0;w<3;w++){var v=d>>>2*(2-w)&3;v!=2&&(g+=h[v],l[p>>>1]|=g<<4*(1-p&1),p++)}}},n.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3},n.decode._lens=function(){var i=function(p,g,y,m){for(var d=0;d<g.length;d++)p[g[d]]=y+d*m},a="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",o="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",l="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",c="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",h="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";a=a.split(","),o=o.split(","),l=l.split(","),c=c.split(","),h=h.split(",");var u={},f={};return i(u,a,0,1),i(u,l,64,64),i(u,h,1792,64),i(f,o,0,1),i(f,c,64,64),i(f,h,1792,64),[u,f]}(),n.decode._decodeG4=function(i,a,o,l,c,h,u){for(var f=n.decode,p=a<<3,g=0,y="",m=[],d=[],w=0;w<h;w++)d.push(0);d=f._makeDiff(d);for(var v=0,_=0,S=0,E=0,T=0,b=0,x="",M=0,A=Math.ceil(h/8)*8;p>>>3<a+o;){S=f._findDiff(d,v+(v==0?0:1),1-T),E=f._findDiff(d,S,T);var C=0;if(u==1&&(C=i[p>>>3]>>>7-(p&7)&1),u==2&&(C=i[p>>>3]>>>(p&7)&1),p++,y+=C,x=="H"){if(f._lens[T][y]!=null){var D=f._lens[T][y];y="",g+=D,D<64&&(f._addNtimes(m,g,T),v+=g,T=1-T,g=0,M--,M==0&&(x=""))}}else y=="0001"&&(y="",f._addNtimes(m,E-v,T),v=E),y=="001"&&(y="",x="H",M=2),f._dmap[y]!=null&&(_=S+f._dmap[y],f._addNtimes(m,_-v,T),v=_,y="",T=1-T);m.length==h&&x==""&&(f._writeBits(m,l,c*8+b*A),T=0,b++,v=0,d=f._makeDiff(m),m=[])}},n.decode._findDiff=function(i,a,o){for(var l=0;l<i.length;l+=2)if(i[l]>=a&&i[l+1]==o)return i[l]},n.decode._makeDiff=function(i){var a=[];i[0]==1&&a.push(0,1);for(var o=1;o<i.length;o++)i[o-1]!=i[o]&&a.push(o,i[o]);return a.push(i.length,0,i.length,1),a},n.decode._decodeG2=function(i,a,o,l,c,h,u){for(var f=n.decode,p=a<<3,g=0,y="",m=[],d=0,w=0,v=Math.ceil(h/8)*8;p>>>3<a+o;){var _=0;u==1&&(_=i[p>>>3]>>>7-(p&7)&1),u==2&&(_=i[p>>>3]>>>(p&7)&1),p++,y+=_,g=f._lens[d][y],g!=null&&(f._addNtimes(m,g,d),y="",g<64&&(d=1-d),m.length==h&&(f._writeBits(m,l,c*8+w*v),m=[],w++,d=0,p&7&&(p+=8-(p&7)),g>=64&&(p+=8)))}},n.decode._decodeG3=function(i,a,o,l,c,h,u,f){for(var p=n.decode,g=a<<3,y=0,m="",d=[],w=[],v=0;v<h;v++)d.push(0);for(var _=0,S=0,E=0,T=0,b=0,x=-1,M="",A=0,C=!0,D=Math.ceil(h/8)*8;g>>>3<a+o;){E=p._findDiff(w,_+(_==0?0:1),1-b),T=p._findDiff(w,E,b);var R=0;if(u==1&&(R=i[g>>>3]>>>7-(g&7)&1),u==2&&(R=i[g>>>3]>>>(g&7)&1),g++,m+=R,C){if(p._lens[b][m]!=null){var U=p._lens[b][m];m="",y+=U,U<64&&(p._addNtimes(d,y,b),b=1-b,y=0)}}else if(M=="H"){if(p._lens[b][m]!=null){var U=p._lens[b][m];m="",y+=U,U<64&&(p._addNtimes(d,y,b),_+=y,b=1-b,y=0,A--,A==0&&(M=""))}}else m=="0001"&&(m="",p._addNtimes(d,T-_,b),_=T),m=="001"&&(m="",M="H",A=2),p._dmap[m]!=null&&(S=E+p._dmap[m],p._addNtimes(d,S-_,b),_=S,m="",b=1-b);m.endsWith("000000000001")&&(x>=0&&p._writeBits(d,l,c*8+x*D),f&&(u==1&&(C=(i[g>>>3]>>>7-(g&7)&1)==1),u==2&&(C=(i[g>>>3]>>>(g&7)&1)==1),g++),m="",b=0,x++,_=0,w=p._makeDiff(d),d=[])}d.length==h&&p._writeBits(d,l,c*8+x*D)},n.decode._addNtimes=function(i,a,o){for(var l=0;l<a;l++)i.push(o)},n.decode._writeBits=function(i,a,o){for(var l=0;l<i.length;l++)a[o+l>>>3]|=i[l]<<7-(o+l&7)},n.decode._decodeLZW=n.decode._decodeLZW=function(){var i,a,o,l,c=0,h=0,u=0,f=0,p=function(){var S=i>>>3,E=a[S]<<16|a[S+1]<<8|a[S+2],T=E>>>24-(i&7)-h&(1<<h)-1;return i+=h,T},g=new Uint32Array(4096*4),y=0,m=function(S){if(S!=y){y=S,u=1<<S,f=u+1;for(var E=0;E<f+1;E++)g[4*E]=g[4*E+3]=E,g[4*E+1]=65535,g[4*E+2]=1}},d=function(S){h=S+1,c=f+1},w=function(S){for(var E=S<<2,T=g[E+2],b=l+T-1;E!=65535;)o[b--]=g[E],E=g[E+1];l+=T},v=function(S,E){var T=c<<2,b=S<<2;g[T]=g[(E<<2)+3],g[T+1]=b,g[T+2]=g[b+2]+1,g[T+3]=g[b+3],c++,c+1==1<<h&&h!=12&&h++},_=function(S,E,T,b,x,M){i=E<<3,a=S,o=b,l=x;var A=E+T<<3,C=0,D=0;for(m(M),d(M);i<A&&(C=p())!=f;){if(C==u){if(d(M),C=p(),C==f)break;w(C)}else C<c?(w(C),v(D,C)):(v(D,D),w(c-1));D=C}return l};return _}(),n.tags={},n._types=function(){var i=new Array(250);i.fill(0),i=i.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var a={33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7};return{basic:{main:i,rest:a},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}}(),n._readIFD=function(i,a,o,l,c,h){var u=i.readUshort(a,o);o+=2;var f={};h.debug&&t("   ".repeat(c),l.length-1,">>>----------------");for(var p=0;p<u;p++){var g=i.readUshort(a,o);o+=2;var y=i.readUshort(a,o);o+=2;var m=i.readUint(a,o);o+=4;var d=i.readUint(a,o);o+=4;var w=[];if((y==1||y==7)&&(w=new Uint8Array(a.buffer,m<5?o-4:d,m)),y==2){var v=m<5?o-4:d,_=a[v],S=Math.max(0,Math.min(m-1,a.length-v));_<128||S==0?w.push(i.readASCII(a,v,S)):w=new Uint8Array(a.buffer,v,S)}if(y==3)for(var E=0;E<m;E++)w.push(i.readUshort(a,(m<3?o-4:d)+2*E));if(y==4||y==13)for(var E=0;E<m;E++)w.push(i.readUint(a,(m<2?o-4:d)+4*E));if(y==5||y==10)for(var T=y==5?i.readUint:i.readInt,E=0;E<m;E++)w.push([T(a,d+E*8),T(a,d+E*8+4)]);if(y==8)for(var E=0;E<m;E++)w.push(i.readShort(a,(m<3?o-4:d)+2*E));if(y==9)for(var E=0;E<m;E++)w.push(i.readInt(a,(m<2?o-4:d)+4*E));if(y==11)for(var E=0;E<m;E++)w.push(i.readFloat(a,d+E*4));if(y==12)for(var E=0;E<m;E++)w.push(i.readDouble(a,d+E*8));if(m!=0&&w.length==0){if(t(g,"unknown TIFF tag type: ",y,"num:",m),p==0)return;continue}if(h.debug&&t("   ".repeat(c),g,y,n.tags[g],w),f["t"+g]=w,!(g==330&&f.t272&&f.t272[0]=="DSLR-A100")){if(g==330||g==34665||g==34853||g==50740&&i.readUshort(a,i.readUint(w,0))<300||g==61440){for(var b=g==50740?[i.readUint(w,0)]:w,x=[],E=0;E<b.length;E++)n._readIFD(i,a,b[E],x,c+1,h);g==330&&(f.subIFD=x),g==34665&&(f.exifIFD=x[0]),g==34853&&(f.gpsiIFD=x[0]),g==50740&&(f.dngPrvt=x[0]),g==61440&&(f.fujiIFD=x[0])}}if(g==37500&&h.parseMN){var M=w;if(i.readASCII(M,0,5)=="Nikon")f.makerNote=n.decode(M.slice(10).buffer)[0];else if(i.readUshort(a,d)<300&&i.readUshort(a,d+4)<=12){var A=[];n._readIFD(i,a,d,A,c+1,h),f.makerNote=A[0]}}}return l.push(f),h.debug&&t("   ".repeat(c),"<<<---------------"),o},n._writeIFD=function(i,a,o,l,c){var h=Object.keys(c),u=h.length;c.exifIFD&&u--,c.gpsiIFD&&u--,i.writeUshort(o,l,u),l+=2;for(var f=l+u*12+4,p=0;p<h.length;p++){var g=h[p];if(!(g=="t34665"||g=="t34853")){g=="exifIFD"&&(g="t34665"),g=="gpsiIFD"&&(g="t34853");var y=parseInt(g.slice(1)),m=a.main[y];if(m==null&&(m=a.rest[y]),m==null||m==0)throw new Error("unknown type of tag: "+y);var d=c[g];if(y==34665){var w=n._writeIFD(i,a,o,f,c.exifIFD);d=[f],f=w[1]}if(y==34853){var w=n._writeIFD(i,n._types.gps,o,f,c.gpsiIFD);d=[f],f=w[1]}m==2&&(d=d[0]+"\0");var v=d.length;i.writeUshort(o,l,y),l+=2,i.writeUshort(o,l,m),l+=2,i.writeUint(o,l,v),l+=4;var _=[-1,1,1,2,4,8,0,1,0,4,8,0,8][m]*v,S=l;if(_>4&&(i.writeUint(o,l,f),S=f),m==1||m==7)for(var E=0;E<v;E++)o[S+E]=d[E];else if(m==2)i.writeASCII(o,S,d);else if(m==3)for(var E=0;E<v;E++)i.writeUshort(o,S+2*E,d[E]);else if(m==4)for(var E=0;E<v;E++)i.writeUint(o,S+4*E,d[E]);else if(m==5||m==10)for(var T=m==5?i.writeUint:i.writeInt,E=0;E<v;E++){var b=d[E],x=b[0],M=b[1];if(x==null)throw"e";T(o,S+8*E,x),T(o,S+8*E+4,M)}else if(m==9)for(var E=0;E<v;E++)i.writeInt(o,S+4*E,d[E]);else if(m==12)for(var E=0;E<v;E++)i.writeDouble(o,S+8*E,d[E]);else throw m;_>4&&(_+=_&1,f+=_),l+=4}}return[l,f]},n.toRGBA8=function(i,a){var o=i.width,l=i.height,c=o*l,h=c*4,u=i.data,f=new Uint8Array(c*4),p=i.t262?i.t262[0]:2,g=i.t258?Math.min(32,i.t258[0]):1;if(i.t262==null&&g==1&&(p=0),p==0)for(var y=Math.ceil(g*o/8),m=0;m<l;m++){var d=m*y,w=m*o;if(g==1)for(var v=0;v<o;v++){var _=w+v<<2,S=u[d+(v>>3)]>>7-(v&7)&1;f[_]=f[_+1]=f[_+2]=(1-S)*255,f[_+3]=255}if(g==4)for(var v=0;v<o;v++){var _=w+v<<2,S=u[d+(v>>1)]>>4-4*(v&1)&15;f[_]=f[_+1]=f[_+2]=(15-S)*17,f[_+3]=255}if(g==8)for(var v=0;v<o;v++){var _=w+v<<2,S=u[d+v];f[_]=f[_+1]=f[_+2]=255-S,f[_+3]=255}}else if(p==1){var E=i.t258?i.t258.length:1,y=Math.ceil(E*g*o/8);a==null&&(a=1/256);for(var m=0;m<l;m++){var d=m*y,w=m*o;if(g==1)for(var v=0;v<o;v++){var _=w+v<<2,S=u[d+(v>>3)]>>7-(v&7)&1;f[_]=f[_+1]=f[_+2]=S*255,f[_+3]=255}if(g==2)for(var v=0;v<o;v++){var _=w+v<<2,S=u[d+(v>>2)]>>6-2*(v&3)&3;f[_]=f[_+1]=f[_+2]=S*85,f[_+3]=255}if(g==8)for(var v=0;v<o;v++){var _=w+v<<2,S=u[d+v*E];f[_]=f[_+1]=f[_+2]=S,f[_+3]=255}if(g==16)for(var v=0;v<o;v++){var _=w+v<<2,T=d+2*v,S=u[T+1]<<8|u[T];f[_]=f[_+1]=f[_+2]=Math.min(255,~~(S*a)),f[_+3]=255}}}else if(p==2){var E=i.t277?i.t277[0]:i.t258?i.t258.length:3;if(g==8){if(E==1)for(var v=0;v<c;v++)f[4*v]=f[4*v+1]=f[4*v+2]=u[v],f[4*v+3]=255;if(E==4)for(var v=0;v<h;v++)f[v]=u[v];if(E==3)for(var v=0;v<c;v++){var _=v<<2,b=v*3;f[_]=u[b],f[_+1]=u[b+1],f[_+2]=u[b+2],f[_+3]=255}}else if(g==16){if(E==4)for(var v=0;v<c;v++){var _=v<<2,b=v*8+1;f[_]=u[b],f[_+1]=u[b+2],f[_+2]=u[b+4],f[_+3]=u[b+6]}if(E==3)for(var v=0;v<c;v++){var _=v<<2,b=v*6+1;f[_]=u[b],f[_+1]=u[b+2],f[_+2]=u[b+4],f[_+3]=255}}else if(g==32){if(!f.isLE)for(var v=0;v<u.length;v+=4){var x=u[v];u[v]=u[v+3],u[v+3]=x,x=u[v+1],u[v+1]=u[v+2],u[v+2]=x}var M=new Float32Array(u.buffer);if(E==3)for(var v=0;v<c;v++){var _=v<<2,b=v*3;f[_]=~~(.5+M[b]*255),f[_+1]=~~(.5+M[b+1]*255),f[_+2]=~~(.5+M[b+2]*255),f[_+3]=255}else throw E}else throw g}else if(p==3)for(var A=i.t320,E=i.t277?i.t277[0]:i.t258?i.t258.length:1,y=Math.ceil(E*g*o/8),C=1<<g,D=g==8&&E>1&&i.t338&&i.t338[0]!=0,m=0;m<l;m++)for(var R=0;R<o;R++){var v=m*o+R,_=v<<2,U=0,F=m*y;if(g==1)U=u[F+(R>>>3)]>>>7-(R&7)&1;else if(g==2)U=u[F+(R>>>2)]>>>6-2*(R&3)&3;else if(g==4)U=u[F+(R>>>1)]>>>4-4*(R&1)&15;else if(g==8)U=u[F+R*E];else throw g;f[_]=A[U]>>8,f[_+1]=A[C+U]>>8,f[_+2]=A[C+C+U]>>8,f[_+3]=D?u[F+R*E+1]:255}else if(p==5)for(var E=i.t258?i.t258.length:4,L=E>4?1:0,v=0;v<c;v++){var _=v<<2,O=v*E;if(UDOC){var Y=u[O],K=u[O+1],H=u[O+2],V=u[O+3],B=UDOC.C.cmykToRgb([Y*(1/255),K*(1/255),H*(1/255),V*(1/255)]);f[_]=~~(.5+255*B[0]),f[_+1]=~~(.5+255*B[1]),f[_+2]=~~(.5+255*B[2])}else{var Y=255-u[O],K=255-u[O+1],H=255-u[O+2],V=(255-u[O+3])*(1/255);f[_]=~~(Y*V+.5),f[_+1]=~~(K*V+.5),f[_+2]=~~(H*V+.5)}f[_+3]=255*(1-L)+u[O+4]*L}else if(p==6&&i.t278)for(var N=i.t278[0],m=0;m<l;m+=N)for(var v=m*o,P=N*o,W=0;W<P;W++){var _=4*(v+W),O=3*v+4*(W>>>1),H=u[O+(W&1)],j=u[O+2]-128,Z=u[O+3]-128,le=H+((Z>>2)+(Z>>3)+(Z>>5)),re=H-((j>>2)+(j>>4)+(j>>5))-((Z>>1)+(Z>>3)+(Z>>4)+(Z>>5)),te=H+(j+(j>>1)+(j>>2)+(j>>6));f[_]=Math.max(0,Math.min(255,le)),f[_+1]=Math.max(0,Math.min(255,re)),f[_+2]=Math.max(0,Math.min(255,te)),f[_+3]=255}else if(p==32845){let Oe=function(We){return We<.0031308?12.92*We:1.055*Math.pow(We,1/2.4)-.055};for(var Se=Oe,m=0;m<l;m++)for(var R=0;R<o;R++){var O=(m*o+R)*6,_=(m*o+R)*4,X=u[O+1]<<8|u[O],X=Math.pow(2,(X+.5)/256-64),Le=(u[O+3]+.5)/410,ye=(u[O+5]+.5)/410,ge=9*Le/(6*Le-16*ye+12),fe=4*ye/(6*Le-16*ye+12),Pe=X,Ae=ge*Pe/fe,H=Pe,pe=(1-ge-fe)*Pe/fe,le=2.69*Ae-1.276*H-.414*pe,re=-1.022*Ae+1.978*H+.044*pe,te=.061*Ae-.224*H+1.163*pe;f[_]=Oe(Math.min(le,1))*255,f[_+1]=Oe(Math.min(re,1))*255,f[_+2]=Oe(Math.min(te,1))*255,f[_+3]=255}}else t("Unknown Photometric interpretation: "+p);return f},n.replaceIMG=function(i){i==null&&(i=document.getElementsByTagName("img"));for(var a=["tif","tiff","dng","cr2","nef"],o=0;o<i.length;o++){var l=i[o],c=l.getAttribute("src");if(c!=null){var h=c.split(".").pop().toLowerCase();if(a.indexOf(h)!=-1){var u=new XMLHttpRequest;n._xhrs.push(u),n._imgs.push(l),u.open("GET",c),u.responseType="arraybuffer",u.onload=n._imgLoaded,u.send()}}}},n._xhrs=[],n._imgs=[],n._imgLoaded=function(i){var a=n._xhrs.indexOf(i.target),o=n._imgs[a];n._xhrs.splice(a,1),n._imgs.splice(a,1),o.setAttribute("src",n.bufferToURI(i.target.response))},n.bufferToURI=function(i){var a=n.decode(i),o=a,l=0,c=o[0];a[0].subIFD&&(o=o.concat(a[0].subIFD));for(var h=0;h<o.length;h++){var u=o[h];if(!(u.t258==null||u.t258.length<3)){var f=u.t256*u.t257;f>l&&(l=f,c=u)}}n.decodeImage(i,c,a);var p=n.toRGBA8(c),g=c.width,y=c.height,m=document.createElement("canvas");m.width=g,m.height=y;var d=m.getContext("2d"),w=new ImageData(new Uint8ClampedArray(p.buffer),g,y);return d.putImageData(w,0,0),m.toDataURL()},n._binBE={nextZero:function(i,a){for(;i[a]!=0;)a++;return a},readUshort:function(i,a){return i[a]<<8|i[a+1]},readShort:function(i,a){var o=n._binBE.ui8;return o[0]=i[a+1],o[1]=i[a+0],n._binBE.i16[0]},readInt:function(i,a){var o=n._binBE.ui8;return o[0]=i[a+3],o[1]=i[a+2],o[2]=i[a+1],o[3]=i[a+0],n._binBE.i32[0]},readUint:function(i,a){var o=n._binBE.ui8;return o[0]=i[a+3],o[1]=i[a+2],o[2]=i[a+1],o[3]=i[a+0],n._binBE.ui32[0]},readASCII:function(i,a,o){for(var l="",c=0;c<o;c++)l+=String.fromCharCode(i[a+c]);return l},readFloat:function(i,a){for(var o=n._binBE.ui8,l=0;l<4;l++)o[l]=i[a+3-l];return n._binBE.fl32[0]},readDouble:function(i,a){for(var o=n._binBE.ui8,l=0;l<8;l++)o[l]=i[a+7-l];return n._binBE.fl64[0]},writeUshort:function(i,a,o){i[a]=o>>8&255,i[a+1]=o&255},writeInt:function(i,a,o){var l=n._binBE.ui8;n._binBE.i32[0]=o,i[a+3]=l[0],i[a+2]=l[1],i[a+1]=l[2],i[a+0]=l[3]},writeUint:function(i,a,o){i[a]=o>>24&255,i[a+1]=o>>16&255,i[a+2]=o>>8&255,i[a+3]=o>>0&255},writeASCII:function(i,a,o){for(var l=0;l<o.length;l++)i[a+l]=o.charCodeAt(l)},writeDouble:function(i,a,o){n._binBE.fl64[0]=o;for(var l=0;l<8;l++)i[a+l]=n._binBE.ui8[7-l]}},n._binBE.ui8=new Uint8Array(8),n._binBE.i16=new Int16Array(n._binBE.ui8.buffer),n._binBE.i32=new Int32Array(n._binBE.ui8.buffer),n._binBE.ui32=new Uint32Array(n._binBE.ui8.buffer),n._binBE.fl32=new Float32Array(n._binBE.ui8.buffer),n._binBE.fl64=new Float64Array(n._binBE.ui8.buffer),n._binLE={nextZero:n._binBE.nextZero,readUshort:function(i,a){return i[a+1]<<8|i[a]},readShort:function(i,a){var o=n._binBE.ui8;return o[0]=i[a+0],o[1]=i[a+1],n._binBE.i16[0]},readInt:function(i,a){var o=n._binBE.ui8;return o[0]=i[a+0],o[1]=i[a+1],o[2]=i[a+2],o[3]=i[a+3],n._binBE.i32[0]},readUint:function(i,a){var o=n._binBE.ui8;return o[0]=i[a+0],o[1]=i[a+1],o[2]=i[a+2],o[3]=i[a+3],n._binBE.ui32[0]},readASCII:n._binBE.readASCII,readFloat:function(i,a){for(var o=n._binBE.ui8,l=0;l<4;l++)o[l]=i[a+l];return n._binBE.fl32[0]},readDouble:function(i,a){for(var o=n._binBE.ui8,l=0;l<8;l++)o[l]=i[a+l];return n._binBE.fl64[0]},writeUshort:function(i,a,o){i[a]=o&255,i[a+1]=o>>8&255},writeInt:function(i,a,o){var l=n._binBE.ui8;n._binBE.i32[0]=o,i[a+0]=l[0],i[a+1]=l[1],i[a+2]=l[2],i[a+3]=l[3]},writeUint:function(i,a,o){i[a]=o>>>0&255,i[a+1]=o>>>8&255,i[a+2]=o>>>16&255,i[a+3]=o>>>24&255},writeASCII:n._binBE.writeASCII},n._copyTile=function(i,a,o,l,c,h,u,f){for(var p=Math.min(a,c-u),g=Math.min(o,h-f),y=0;y<g;y++)for(var m=(f+y)*c+u,d=y*a,w=0;w<p;w++)l[m+w]=i[d+w]},n.LosslessJpegDecode=function(){var i,a;function o(){return i[a++]}function l(){return i[a++]<<8|i[a++]}function c(S){for(var E=o(),T=[0,0,0,255],b=[],x=8,M=0;M<16;M++)b[M]=o();for(var M=0;M<16;M++)for(var A=0;A<b[M];A++){var C=h(T,0,M+1,1);T[C+3]=o()}var D=new Uint8Array(1<<x);S[E]=[new Uint8Array(T),D];for(var M=0;M<1<<x;M++){for(var R=x,U=M,F=0,L=0;T[F+3]==255&&R!=0;)L=U>>--R&1,F=T[F+L];D[M]=F}}function h(S,E,T,b){if(S[E+3]!=255)return 0;if(T==0)return E;for(var x=0;x<2;x++){S[E+x]==0&&(S[E+x]=S.length,S.push(0,0,b,255));var M=h(S,S[E+x],T-1,b+1);if(M!=0)return M}return 0}function u(S){for(var E=S.b,T=S.a;E<25&&S.e<S.d;){var b=S.data[S.e++];S.c||(S.e+=b+1>>>8),T=T<<8|b,E+=8}if(E<0)throw"e";S.b=E,S.a=T}function f(S,E){return E.b<S&&u(E),E.a>>(E.b-=S)&65535>>16-S}function p(S,E){var T=S[0],b=0,x=255,M=0;E.b<16&&u(E);var A=E.a>>E.b-8&255;for(b=S[1][A],x=T[b+3],E.b-=T[b+2];x==255;)M=E.a>>--E.b&1,b=T[b+M],x=T[b+3];return x}function g(S,E){return S<32768>>16-E&&(S+=-(1<<E)+1),S}function y(S,E){var T=p(S,E);if(T==0)return 0;if(T==16)return-32768;var b=f(T,E);return g(b,T)}function m(S,E,T,b,x,M){for(var A=0;A<M;A++)for(var C=A*E,D=0;D<E;D+=x)for(var R=0;R<x;R++)S[C+D+R]=y(b[R],T)}function d(S,E){return g(f(S,E),S)}function w(S,E,T,b,x){for(var M=i.length-a,A=0;A<M;A+=4){var C=i[a+A];i[a+A]=i[a+A+3],i[a+A+3]=C;var C=i[a+A+1];i[a+A+1]=i[a+A+2],i[a+A+2]=C}for(var D=0;D<x;D++)for(var R=32768,U=32768,F=0;F<E;F+=2){var L=p(b,T),O=p(b,T);L!=0&&(R+=d(L,T)),O!=0&&(U+=d(O,T)),S[D*E+F]=R&65535,S[D*E+F+1]=U&65535}}function v(S){if(i=S,a=0,l()!=65496)throw"e";for(var E=[],T=0,b=0,x=[],M=[],A=[],C=0,D=0,R=0;;){var U=l();if(U==65535){a--;continue}var F=l();if(U==65475){b=o(),D=l(),R=l(),C=o();for(var L=0;L<C;L++){var O=o(),Y=o(),K=o();if(K!=0)throw"e";E[O]=[L,Y>>4,Y&15]}}else if(U==65476)for(var H=a+F-2;a<H;)c(M);else if(U==65498){a++;for(var L=0;L<C;L++){var V=o(),B=E[V];A[B[0]]=M[o()>>>4],x[B[0]]=B.slice(1)}T=o(),a+=2;break}else a+=F-2}var N=b>8?Uint16Array:Uint8Array,P=new N(D*R*C),W={b:0,a:0,c:T==8,e:a,data:i,d:i.length};if(W.c)w(P,R*C,W,A[0],D);else{for(var j=[],Z=0,le=0,L=0;L<C;L++){var re=x[L],te=re[0],X=re[1];te>Z&&(Z=te),X>le&&(le=X),j.push(te*X)}if(Z!=1||le!=1){for(var Le=[],ye=0,L=0;L<C;L++){for(var ge=0;ge<j[L];ge++)Le.push(A[L]);ye+=j[L]}var fe=R/Z,Pe=D/le;m(P,fe*ye,W,Le,ye,Pe),_(P,T,fe,Pe,ye-2,ye,ye,b);for(var Ae=P.slice(0),X=0;X<D;X++)for(var te=0;te<R;te++)for(var pe=(X*R+te)*C,Se=~~(X/le),Oe=~~(te/Z),We=Se*fe+Oe,k=0,L=0;L<C;L++){var I=te&1,ie=X&1,de=We*ye+k+(L==0?le==1?I:I*2+ie:0);P[pe+L]=Ae[de],k+=j[L]}_(P,T,R,D,0,1,C,b)}else m(P,R*C,W,A,C,D),_(P,T,R,D,0,C,C,b)}return P}function _(S,E,T,b,x,M,A,C){for(var D=T*A,R=x;R<M;R++)S[R]+=1<<C-1;for(var U=A;U<D;U+=A)for(var R=x;R<M;R++)S[U+R]+=S[U+R-A];for(var F=1;F<b;F++){for(var L=F*D,R=x;R<M;R++)S[L+R]+=S[L+R-D];for(var U=A;U<D;U+=A)for(var R=x;R<M;R++){var O=L+U+R,Y=O-D,K=S[O-A],H=0;if(E==0)H=0;else if(E==1)H=K;else if(E==2)H=S[Y];else if(E==3)H=S[Y-A];else if(E==4)H=K+(S[Y]-S[Y-A]);else if(E==5)H=K+(S[Y]-S[Y-A]>>>1);else if(E==6)H=S[Y]+(K-S[Y-A]>>>1);else if(E==7)H=K+S[Y]>>>1;else throw E;S[O]+=H}}}return v}(),function(){var i=0,a=1,o=2,l=3,c=4,h=5,u=6,f=7,p=8,g=9,y=10,m=11,d=12,w=13,v=14,_=15,S=16,E=17,T=18;function b(B){var N=n._binBE.readUshort,P={b:N(B,0),i:B[2],C:B[3],u:B[4],q:N(B,5),k:N(B,7),e:N(B,9),l:N(B,11),s:B[13],d:N(B,14)};if(P.b!=18771||P.i>1||P.q<6||P.q%6||P.e<768||P.e%24||P.l!=768||P.k<P.l||P.k%P.l||P.k-P.e>=P.l||P.s>16||P.s!=P.k/P.l||P.s!=Math.ceil(P.e/P.l)||P.d!=P.q/6||P.u!=12&&P.u!=14&&P.u!=16||P.C!=16&&P.C!=0)throw"Invalid data";if(P.i==0)throw"Not implemented. We need this file!";return P.h=P.C==16,P.m=(P.h?P.l*2/3:P.l>>>1)|0,P.A=P.m+2,P.f=64,P.g=(1<<P.u)-1,P.n=4*P.u,P}function x(B,N){var P=new Array(N.s),W=4*N.s,j=16+W;W&12&&(j+=16-(W&12));for(var Z=0,le=16;Z<N.s;le+=4){var re=n._binBE.readUint(B,le);P[Z]=B.slice(j,j+re),P[Z].j=0,P[Z].a=0,j+=re,Z++}if(j!=B.length)throw"Invalid data";return P}function M(B,N){for(var P=-N[4],W=0;P<=N[4];W++,P++)B[W]=P<=-N[3]?-4:P<=-N[2]?-3:P<=-N[1]?-2:P<-N[0]?-1:P<=N[0]?0:P<N[1]?1:P<N[2]?2:P<N[3]?3:4}function A(B,N,P){var W=[N,3*N+18,5*N+67,7*N+276,P];B.o=N,B.w=(W[4]+2*N)/(2*N+1)+1|0,B.v=Math.ceil(Math.log2(B.w)),B.t=9,M(B.c,W)}function C(B){var N={c:new Int8Array(2<<B.u)};return A(N,0,B.g),N}function D(B){for(var N=[[],[],[]],P=Math.max(2,B.w+32>>>6),W=0;W<3;W++)for(var j=0;j<41;j++)N[W][j]=[P,1];return N}function R(B){for(var N=-1,P=0;!P;N++)P=B[B.j]>>>7-B.a&1,B.a++,B.a&=7,B.a||B.j++;return N}function U(B,N){var P=0,W=8-B.a;if(B.j,B.a,N){if(N>=W)do P<<=W,N-=W,P|=B[B.j]&(1<<W)-1,B.j++,W=8;while(N>=8);N&&(P<<=N,W-=N,P|=B[B.j]>>>W&(1<<N)-1),B.a=8-W}return P}function F(B,N){var P=0;if(N<B)for(;P<=14&&N<<++P<B;);return P}function L(B,N,P,W,j,Z,le,re){re==null&&(re=0);var te=Z+1,X=te%2,Le=0,ye,ge,fe=W[j],Pe=W[j-1],Ae=W[j-2][te],pe=Pe[te-1],Se=Pe[te],Oe=Pe[te+1],We=fe[te-1],k=fe[te+1],I=Math.abs,ie,de,se,G;if(X&&(ie=I(Oe-Se),de=I(Ae-Se),se=I(pe-Se)),X){if(G=ie>se&&de<ie?Ae+pe:ie<se&&de<se?Ae+Oe:Oe+pe,G=G+2*Se>>>2,re){fe[te]=G;return}ye=N.t*N.c[B.g+Se-Ae]+N.c[B.g+pe-Se]}else G=Se>pe&&Se>Oe||Se<pe&&Se<Oe?k+We+2*Se>>>2:We+k>>>1,ye=N.t*N.c[B.g+Se-pe]+N.c[B.g+pe-We];ge=I(ye);var ue=R(P);if(ue<B.n-N.v-1){var he=F(le[ge][0],le[ge][1]);Le=U(P,he)+(ue<<he)}else Le=U(P,N.v)+1;Le=Le&1?-1-(Le>>>1):Le>>>1,le[ge][0]+=I(Le),le[ge][1]==B.f&&(le[ge][0]>>>=1,le[ge][1]>>>=1),le[ge][1]++,G=ye<0?G-Le:G+Le,B.i&&(G<0?G+=N.w:G>B.g&&(G-=N.w)),fe[te]=G>=0?Math.min(G,B.g):0}function O(B,N,P){for(var W=B[0].length,j=N;j<=P;j++)B[j][0]=B[j-1][1],B[j][W-1]=B[j-1][W-2]}function Y(B){O(B,f,d),O(B,o,c),O(B,_,E)}function K(B,N,P,W,j,Z,le,re,te,X,Le,ye,ge){for(var fe=0,Pe=1,Ae=j<w&&j>c;Pe<B.m;)fe<B.m&&(L(B,N,P,W,j,fe,le[te],B.h&&(Ae&&X||!Ae&&(Le||(fe&ye)==ge))),L(B,N,P,W,Z,fe,le[te],B.h&&(!Ae&&X||Ae&&(Le||(fe&ye)==ge))),fe+=2),fe>8&&(L(B,N,P,W,j,Pe,re[te]),L(B,N,P,W,Z,Pe,re[te]),Pe+=2);Y(W)}function H(B,N,P,W,j,Z){K(B,N,P,W,o,f,j,Z,0,0,1,0,8),K(B,N,P,W,p,_,j,Z,1,0,1,0,8),K(B,N,P,W,l,g,j,Z,2,1,0,3,0),K(B,N,P,W,y,S,j,Z,0,0,0,3,2),K(B,N,P,W,c,m,j,Z,1,0,0,3,2),K(B,N,P,W,d,E,j,Z,2,1,0,3,0)}function V(B,N,P,W,j,Z){var le=Z.length,re=B.l;j+1==B.s&&(re=B.e-j*B.l);for(var te=6*B.e*W+j*B.l,X=0;X<6;X++){for(var Le=0;Le<re;Le++){var ye=Z[X%le][Le%le],ge;ye==0?ge=o+(X>>>1):ye==2?ge=_+(X>>>1):ge=f+X;var fe=B.h?(Le*2/3&2147483646|Le%3&1)+(Le%3>>>1):Le>>>1;N[te+Le]=P[ge][fe+1]}te+=B.e}}n._decompressRAF=function(B,N){var P=b(B),W=x(B,P),j=C(P),Z=new Int16Array(P.e*P.q);N==null&&(N=P.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var le=[[i,l],[a,c],[h,m],[u,d],[w,S],[v,E]],re=[],te=0;te<T;te++)re[te]=new Uint16Array(P.A);for(var X=0;X<P.s;X++){for(var Le=D(j),ye=D(j),te=0;te<T;te++)for(var ge=0;ge<P.A;ge++)re[te][ge]=0;for(var fe=0;fe<P.d;fe++){H(P,j,W[X],re,Le,ye);for(var te=0;te<6;te++)for(var ge=0;ge<P.A;ge++)re[le[te][0]][ge]=re[le[te][1]][ge];V(P,Z,re,fe,X,N);for(var te=o;te<T;te++)if([h,u,w,v].indexOf(te)==-1)for(var ge=0;ge<P.A;ge++)re[te][ge]=0;Y(re)}}return Z}}()})(s,e)})();const ys=UTIF;class Ss extends Zs{constructor(e){super(e)}parse(e){const t=ys.decode(e);ys.decodeImage(e,t[0]);const n=ys.toRGBA8(t[0]);return{width:t[0].width,height:t[0].height,data:n,flipY:!0,magFilter:gt,minFilter:An}}}class nm extends x0{constructor(){super(),this.glslVersion="300 es",this.uniforms={time:{value:0},speed:{value:0},colorMap:{value:null},normalMap:{value:null},alphaMap:{value:null},envMap:{value:null},cameraRotateXZMatrix:{value:new Ie},texMatrix:{value:new Ie}},this.transparent=!0,this.depthWrite=!1,this.vertexShader=`
      in vec4 positionS;
      in vec3 a_dir;

      uniform float time;
      uniform float speed;

      uniform mat4 modelMatrix;
      uniform mat4 viewMatrix;
      uniform mat4 projectionMatrix;
      // uniform mat4 modelViewMatrix;
      uniform mat4 cameraRotateXZMatrix;

      uniform mat3 normalMatrix;

      uniform vec3 cameraPosition;

      out vec4 v_worldPos;
      out vec2 v_uv;
      out vec4 v_endPos;
      out vec3 v_normal;

      void main() {
        vec2 rainSize = vec2(0.015, 0.3);
        vec2 offsetList[4];
        offsetList[0] = vec2( 1.0,  1.0);
        offsetList[1] = vec2( 1.0, -1.0);
        offsetList[2] = vec2(-1.0, -1.0);
        offsetList[3] = vec2(-1.0,  1.0);

        vec3 orgPos = positionS.xyz;
      
        orgPos.y -= time * speed;
        orgPos.y = fract(orgPos.y);

        vec2 dir = a_dir.xy;
        dir = normalize(dir);

        orgPos.x += dir.x * a_dir.z * fract(time * speed);
        orgPos.z += dir.y * a_dir.z * fract(time * speed);

        // debugOut = vec4(orgPos, 1.0);

        vec2 offset = offsetList[int(positionS.w)];

        v_uv = offset * 0.5 + 0.5;

        vec4 planePoint = vec4(offset * rainSize, 0.0, 1.0);
        planePoint = cameraRotateXZMatrix * planePoint;

        vec4 worldPos = modelMatrix * vec4(orgPos, 1.0);
        worldPos += planePoint;
        worldPos.w = 1.0;

        v_normal = (vec3(0.0, 0.0, -1.0)).xyz;
        v_worldPos = worldPos;
        v_endPos = projectionMatrix * viewMatrix * worldPos;
        gl_Position = v_endPos;

      }
    `,this.fragmentShader=`

      #define varying in

      #define gl_FragDepthEXT gl_FragDepth
      #define texture2D texture
      #define textureCube texture
      #define texture2DProj textureProj
      #define texture2DLodEXT textureLod
      #define texture2DProjLodEXT textureProjLod
      #define textureCubeLodEXT textureLod
      #define texture2DGradEXT textureGrad
      #define texture2DProjGradEXT textureProjGrad
      #define textureCubeGradEXT textureGrad
      precision highp float;

      precision highp float;
      precision highp int;

      uniform sampler2D normalMap;
      uniform sampler2D alphaMap;
      uniform sampler2D colorMap;
      uniform sampler2D envMap;
      uniform float time;

      uniform vec3 cameraPosition;

      uniform mat4 projectionMatrix;
      uniform mat4 viewMatrix;
      uniform mat3 normalMatrix;

      #define ENVMAP_TYPE_CUBE_UV

      #define CUBEUV_TEXEL_WIDTH 0.0006510416666666666
      #define CUBEUV_TEXEL_HEIGHT 0.00048828125
      #define CUBEUV_MAX_MIP 9.0

      #include <envmap_common_pars_fragment>
      #include <envmap_physical_pars_fragment>
      #include <cube_uv_reflection_fragment>

      #ifndef saturate
          #define saturate( a ) clamp( a, 0.0, 1.0 )
      #endif

      float nrand( vec2 n )
      {
        return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
      }

      float n1rand( vec2 n )
      {
        float t = fract( time );
        float nrnd0 = nrand( n + 0.07*t );
        return nrnd0;
      }

      vec3 RRTAndODTFit( vec3 v ) {
          vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
          vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
          return a / b;
      }

      #define toneMappingExposure 1.5 

      vec3 ACESFilmicToneMapping( vec3 color ) {
          const mat3 ACESInputMat = mat3(
          vec3( 0.59719, 0.07600, 0.02840 ), vec3( 0.35458, 0.90834, 0.13383 ), vec3( 0.04823, 0.01566, 0.83777 )
          );
          const mat3 ACESOutputMat = mat3(
          vec3(  1.60475, -0.10208, -0.00327 ), vec3( -0.53108, 1.10813, -0.07276 ), vec3( -0.07367, -0.00605, 1.07602 )
          );
          color *= toneMappingExposure / 0.6;
          color = ACESInputMat * color;
          color = RRTAndODTFit( color );
          color = ACESOutputMat * color;
          return saturate( color );
      }

      layout(location = 0) out highp vec4 fragColor;


      in vec2 v_uv;
      in vec4 v_endPos;
      in vec3 v_normal;
      in vec4 v_worldPos;

      void main() {

        vec3 normal = normalize(v_normal);
        vec3 t = vec3(0.0, 1.0, 0.0);
        vec3 b = cross(t, normal);

        mat3 tbn = mat3(t, b, normal);

        vec4 texNormal = texture(normalMap, v_uv) * 2.0 - 1.0;
        texNormal.xy *= 5.0;
        texNormal = normalize(texNormal);
        normal = normalMatrix * tbn * texNormal.xyz;

        vec4 endP4 = v_endPos / v_endPos.w;
        vec2 endP = endP4.xy;

        vec3 ref = refract(cameraPosition, normal, 0.01);
        vec4 ref4 = projectionMatrix * viewMatrix * vec4(v_worldPos.xyz + ref * sqrt(endP4.z), 1.0);
        // vec4 ref4 = projectionMatrix * viewMatrix * vec4(v_worldPos.xyz, 1.0);


        endP = ref4.xy / ref4.w;
        vec3 theColor = ACESFilmicToneMapping(texture(colorMap, endP * 0.5 + 0.5).xyz);
        // ACESFilmicToneMapping
        // theColor *= 1.2;
        // theColor += ACESFilmicToneMapping(textureCubeUV(envMap, normal, 0.0).xyz);

        // float n = n1rand(endP);

        // vec2 dir = endP;
        // dir = normalize(dir);
        // dir *=  -0.1;
        // dir += endP;

        // dir *= 0.5;
        // dir += 0.5;

        fragColor = vec4(theColor.xyz * 0.8 + 0.2, texture(alphaMap, v_uv).r);//texture(colorMap, dir);
        // fragColor.w = 1.0;
      }
    `}set time(e){this.uniforms.time.value=e}set speed(e){this.uniforms.speed.value=e}set colorMap(e){this.uniforms.colorMap.value=e}set normalMap(e){this.uniforms.normalMap.value=e}set alphaMap(e){this.uniforms.alphaMap.value=e}set envMap(e){this.uniforms.envMap.value=e}get cameraRotateXZMatrix(){return this.uniforms.cameraRotateXZMatrix.value}}class im extends Rt{constructor(){super();be(this,"speed",2);be(this,"density",5);this.initGeometry(),this.initMaterial()}initGeometry(){let t=this.density*2,n=this.density*20,r=[],i=[],a=[],o=0;for(let f=0;f<t;f++)for(let p=0;p<n;p++){let g=Math.random()*2-1,y=Math.random()*2-1,m=Math.random()/t+f/t;m=m*2-1,a.push(o,o+1,o+2),a.push(o,o+2,o+3);let d=Math.random()*2-1,w=Math.random()*2-1,v=Math.random();for(let _=0;_<4;_++)r.push(g,m,y,_),i.push(d,w,v),o++}let l=new Ut,c=new ut(r,4),h=new ut(i,3),u=new Xs(a,1);l.setAttribute("positionS",c),l.setAttribute("a_dir",h),l.setIndex(u),this.geometry=l,l.boundingBox=new qn,l.boundingBox.min.set(-1,-1,-1),l.boundingBox.max.set(1,1,1),l.boundingSphere=new Yn,l.boundingBox.getBoundingSphere(l.boundingSphere)}initMaterial(){let t=new nm;this.material=t,t.speed=this.speed}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Ho=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(Ho(""))}catch{Ho=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Bt=Uint8Array,Sn=Uint16Array,Fs=Uint32Array,Rl=new Bt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cl=new Bt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),rm=new Bt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ll=function(s,e){for(var t=new Sn(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var r=new Fs(t[30]),n=1;n<30;++n)for(var i=t[n];i<t[n+1];++i)r[i]=i-t[n]<<5|n;return[t,r]},Pl=Ll(Rl,2),Dl=Pl[0],sm=Pl[1];Dl[28]=258,sm[258]=28;var am=Ll(Cl,0),om=am[0],Os=new Sn(32768);for(var et=0;et<32768;++et){var Mn=(et&43690)>>>1|(et&21845)<<1;Mn=(Mn&52428)>>>2|(Mn&13107)<<2,Mn=(Mn&61680)>>>4|(Mn&3855)<<4,Os[et]=((Mn&65280)>>>8|(Mn&255)<<8)>>>1}var Gi=function(s,e,t){for(var n=s.length,r=0,i=new Sn(e);r<n;++r)++i[s[r]-1];var a=new Sn(e);for(r=0;r<e;++r)a[r]=a[r-1]+i[r-1]<<1;var o;if(t){o=new Sn(1<<e);var l=15-e;for(r=0;r<n;++r)if(s[r])for(var c=r<<4|s[r],h=e-s[r],u=a[s[r]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[Os[u]>>>l]=c}else for(o=new Sn(n),r=0;r<n;++r)s[r]&&(o[r]=Os[a[s[r]-1]++]>>>15-s[r]);return o},qi=new Bt(288);for(var et=0;et<144;++et)qi[et]=8;for(var et=144;et<256;++et)qi[et]=9;for(var et=256;et<280;++et)qi[et]=7;for(var et=280;et<288;++et)qi[et]=8;var Il=new Bt(32);for(var et=0;et<32;++et)Il[et]=5;var lm=Gi(qi,9,1),cm=Gi(Il,5,1),Es=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},qt=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},ws=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},um=function(s){return(s/8|0)+(s&7&&1)},hm=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof Sn?Sn:s instanceof Fs?Fs:Bt)(t-e);return n.set(s.subarray(e,t)),n},fm=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new Bt(0);var r=!e||t,i=!t||t.i;t||(t={}),e||(e=new Bt(n*3));var a=function(W){var j=e.length;if(W>j){var Z=new Bt(Math.max(j*2,W));Z.set(e),e=Z}},o=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,f=t.m,p=t.n,g=n*8;do{if(!h){t.f=o=qt(s,l,1);var y=qt(s,l+1,3);if(l+=3,y)if(y==1)h=lm,u=cm,f=9,p=5;else if(y==2){var v=qt(s,l,31)+257,_=qt(s,l+10,15)+4,S=v+qt(s,l+5,31)+1;l+=14;for(var E=new Bt(S),T=new Bt(19),b=0;b<_;++b)T[rm[b]]=qt(s,l+b*3,7);l+=_*3;for(var x=Es(T),M=(1<<x)-1,A=Gi(T,x,1),b=0;b<S;){var C=A[qt(s,l,M)];l+=C&15;var m=C>>>4;if(m<16)E[b++]=m;else{var D=0,R=0;for(m==16?(R=3+qt(s,l,3),l+=2,D=E[b-1]):m==17?(R=3+qt(s,l,7),l+=3):m==18&&(R=11+qt(s,l,127),l+=7);R--;)E[b++]=D}}var U=E.subarray(0,v),F=E.subarray(v);f=Es(U),p=Es(F),h=Gi(U,f,1),u=Gi(F,p,1)}else throw"invalid block type";else{var m=um(l)+4,d=s[m-4]|s[m-3]<<8,w=m+d;if(w>n){if(i)throw"unexpected EOF";break}r&&a(c+d),e.set(s.subarray(m,w),c),t.b=c+=d,t.p=l=w*8;continue}if(l>g){if(i)throw"unexpected EOF";break}}r&&a(c+131072);for(var L=(1<<f)-1,O=(1<<p)-1,Y=l;;Y=l){var D=h[ws(s,l)&L],K=D>>>4;if(l+=D&15,l>g){if(i)throw"unexpected EOF";break}if(!D)throw"invalid length/literal";if(K<256)e[c++]=K;else if(K==256){Y=l,h=null;break}else{var H=K-254;if(K>264){var b=K-257,V=Rl[b];H=qt(s,l,(1<<V)-1)+Dl[b],l+=V}var B=u[ws(s,l)&O],N=B>>>4;if(!B)throw"invalid distance";l+=B&15;var F=om[N];if(N>3){var V=Cl[N];F+=ws(s,l)&(1<<V)-1,l+=V}if(l>g){if(i)throw"unexpected EOF";break}r&&a(c+131072);for(var P=c+H;c<P;c+=4)e[c]=e[c-F],e[c+1]=e[c+1-F],e[c+2]=e[c+2-F],e[c+3]=e[c+3-F];c=P}}t.l=h,t.p=Y,t.b=c,h&&(o=1,t.m=f,t.d=u,t.n=p)}while(!o);return c==e.length?e:hm(e,0,c)},dm=new Bt(0),pm=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function mm(s,e){return fm((pm(s),s.subarray(2,-4)),e)}var gm=typeof TextDecoder<"u"&&new TextDecoder,_m=0;try{gm.decode(dm,{stream:!0}),_m=1}catch{}function Ul(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let r=s,i=n,a=Math.floor((r+i)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?i=a:r=a,a=Math.floor((r+i)/2);return a}function vm(s,e,t,n){const r=[],i=[],a=[];r[0]=1;for(let o=1;o<=t;++o){i[o]=e-n[s+1-o],a[o]=n[s+o]-e;let l=0;for(let c=0;c<o;++c){const h=a[c+1],u=i[o-c],f=r[c]/(h+u);r[c]=l+h*f,l=u*f}r[o]=l}return r}function xm(s,e,t,n){const r=Ul(s,n,e),i=vm(r,n,s,e),a=new Je(0,0,0,0);for(let o=0;o<=s;++o){const l=t[r-s+o],c=i[o],h=l.w*c;a.x+=l.x*h,a.y+=l.y*h,a.z+=l.z*h,a.w+=l.w*c}return a}function Mm(s,e,t,n,r){const i=[];for(let u=0;u<=t;++u)i[u]=0;const a=[];for(let u=0;u<=n;++u)a[u]=i.slice(0);const o=[];for(let u=0;u<=t;++u)o[u]=i.slice(0);o[0][0]=1;const l=i.slice(0),c=i.slice(0);for(let u=1;u<=t;++u){l[u]=e-r[s+1-u],c[u]=r[s+u]-e;let f=0;for(let p=0;p<u;++p){const g=c[p+1],y=l[u-p];o[u][p]=g+y;const m=o[p][u-1]/o[u][p];o[p][u]=f+g*m,f=y*m}o[u][u]=f}for(let u=0;u<=t;++u)a[0][u]=o[u][t];for(let u=0;u<=t;++u){let f=0,p=1;const g=[];for(let y=0;y<=t;++y)g[y]=i.slice(0);g[0][0]=1;for(let y=1;y<=n;++y){let m=0;const d=u-y,w=t-y;u>=y&&(g[p][0]=g[f][0]/o[w+1][d],m=g[p][0]*o[d][w]);const v=d>=-1?1:-d,_=u-1<=w?y-1:t-u;for(let E=v;E<=_;++E)g[p][E]=(g[f][E]-g[f][E-1])/o[w+1][d+E],m+=g[p][E]*o[d+E][w];u<=w&&(g[p][y]=-g[f][y-1]/o[w+1][u],m+=g[p][y]*o[u][w]),a[y][u]=m;const S=f;f=p,p=S}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)a[u][f]*=h;h*=t-u}return a}function ym(s,e,t,n,r){const i=r<s?r:s,a=[],o=Ul(s,n,e),l=Mm(o,n,s,i,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[h]=u}for(let h=0;h<=i;++h){const u=c[o-s].clone().multiplyScalar(l[h][0]);for(let f=1;f<=s;++f)u.add(c[o-s+f].clone().multiplyScalar(l[h][f]));a[h]=u}for(let h=i+1;h<=r+1;++h)a[h]=new Je(0,0,0);return a}function Sm(s,e){let t=1;for(let r=2;r<=s;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=s-e;++r)n*=r;return t/n}function Em(s){const e=s.length,t=[],n=[];for(let i=0;i<e;++i){const a=s[i];t[i]=new J(a.x,a.y,a.z),n[i]=a.w}const r=[];for(let i=0;i<e;++i){const a=t[i].clone();for(let o=1;o<=i;++o)a.sub(r[i-o].clone().multiplyScalar(Sm(i,o)*n[o]));r[i]=a.divideScalar(n[0])}return r}function wm(s,e,t,n,r){const i=ym(s,e,t,n,r);return Em(i)}class Tm extends v0{constructor(e,t,n,r,i){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=i||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new Je(o.x,o.y,o.z,o.w)}}getPoint(e,t=new J){const n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),i=xm(this.degree,this.knots,this.controlPoints,r);return i.w!==1&&i.divideScalar(i.w),n.set(i.x,i.y,i.z)}getTangent(e,t=new J){const n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),i=wm(this.degree,this.knots,this.controlPoints,r,1);return n.copy(i[1]).normalize(),n}}let Ye,st,At;class bm extends Cn{constructor(e){super(e)}load(e,t,n,r){const i=this,a=i.path===""?B0.extractUrlBase(e):i.path,o=new Tl(this.manager);o.setPath(i.path),o.setResponseType("arraybuffer"),o.setRequestHeader(i.requestHeader),o.setWithCredentials(i.withCredentials),o.load(e,function(l){try{t(i.parse(l,a))}catch(c){r?r(c):console.error(c),i.manager.itemError(e)}},n,r)}parse(e,t){if(Dm(e))Ye=new Pm().parse(e);else{const r=Bl(e);if(!Im(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Wo(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Wo(r));Ye=new Lm().parse(r)}const n=new yr(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Am(n,this.manager).parse(Ye)}}class Am{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){st=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),i=new Rm().parse(r);return this.parseScene(r,i,n),At}parseConnections(){const e=new Map;return"Connections"in Ye&&Ye.Connections.connections.forEach(function(n){const r=n[0],i=n[1],a=n[2];e.has(r)||e.set(r,{parents:[],children:[]});const o={ID:i,relationship:a};e.get(r).parents.push(o),e.has(i)||e.set(i,{parents:[],children:[]});const l={ID:r,relationship:a};e.get(i).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ye.Objects){const n=Ye.Objects.Video;for(const r in n){const i=n[r],a=parseInt(r);if(e[a]=i.RelativeFilename||i.Filename,"Content"in i){const o=i.Content instanceof ArrayBuffer&&i.Content.byteLength>0,l=typeof i.Content=="string"&&i.Content!=="";if(o||l){const c=this.parseImage(n[r]);t[i.RelativeFilename||i.Filename]=c}}}}for(const n in e){const r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase();let i;switch(r){case"bmp":i="image/bmp";break;case"jpg":case"jpeg":i="image/jpeg";break;case"png":i="image/png";break;case"tif":i="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),i="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+i+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:i}))}}parseTextures(e){const t=new Map;if("Texture"in Ye.Objects){const n=Ye.Objects.Texture;for(const r in n){const i=this.parseTexture(n[r],e);t.set(parseInt(r),i)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const r=e.WrapModeU,i=e.WrapModeV,a=r!==void 0?r.value:0,o=i!==void 0?i.value:0;if(n.wrapS=a===0?lt:Tt,n.wrapT=o===0?lt:Tt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const r=this.textureLoader.path,i=st.get(e.id).children;i!==void 0&&i.length>0&&t[i[0].ID]!==void 0&&(n=t[i[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new xt):(l.setPath(this.textureLoader.path),a=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new xt):a=this.textureLoader.load(n);return this.textureLoader.setPath(r),a}parseMaterials(e){const t=new Map;if("Material"in Ye.Objects){const n=Ye.Objects.Material;for(const r in n){const i=this.parseMaterial(n[r],e);i!==null&&t.set(parseInt(r),i)}}return t}parseMaterial(e,t){const n=e.id,r=e.attrName;let i=e.ShadingModel;if(typeof i=="object"&&(i=i.value),!st.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(i.toLowerCase()){case"phong":o=new gs;break;case"lambert":o=new y0;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',i),o=new gs;break}return o.setValues(a),o.name=r,o}parseParameters(e,t,n){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Ne().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Ne().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Ne().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Ne().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Ne().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Ne().fromArray(e.SpecularColor.value).convertSRGBToLinear());const i=this;return st.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":r.bumpMap=i.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":r.aoMap=i.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=i.getTexture(t,a.ID),r.map!==void 0&&(r.map.colorSpace=ke);break;case"DisplacementColor":r.displacementMap=i.getTexture(t,a.ID);break;case"EmissiveColor":r.emissiveMap=i.getTexture(t,a.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=ke);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=i.getTexture(t,a.ID);break;case"ReflectionColor":r.envMap=i.getTexture(t,a.ID),r.envMap!==void 0&&(r.envMap.mapping=Sr,r.envMap.colorSpace=ke);break;case"SpecularColor":r.specularMap=i.getTexture(t,a.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=ke);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=i.getTexture(t,a.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),r}getTexture(e,t){return"LayeredTexture"in Ye.Objects&&t in Ye.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=st.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ye.Objects){const n=Ye.Objects.Deformer;for(const r in n){const i=n[r],a=st.get(parseInt(r));if(i.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=r,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[r]=o}else if(i.attrType==="BlendShape"){const o={id:r};o.rawTargets=this.parseMorphTargets(a,n),o.id=r,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(r){const i=t[r.ID];if(i.attrType!=="Cluster")return;const a={ID:r.ID,indices:[],weights:[],transformLink:new Ie().fromArray(i.TransformLink.a)};"Indexes"in i&&(a.indices=i.Indexes.a,a.weights=i.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let r=0;r<e.children.length;r++){const i=e.children[r],a=t[i.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=st.get(parseInt(i.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){At=new _i;const r=this.parseModels(e.skeletons,t,n),i=Ye.Objects.Model,a=this;r.forEach(function(l){const c=i[l.ID];a.setLookAtProperties(l,c),st.get(l.ID).parents.forEach(function(u){const f=r.get(u.ID);f!==void 0&&f.add(l)}),l.parent===null&&At.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),At.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Fl(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new Cm().parse();At.children.length===1&&At.children[0].isGroup&&(At.children[0].animations=o,At=At.children[0]),At.animations=o}parseModels(e,t,n){const r=new Map,i=Ye.Objects.Model;for(const a in i){const o=parseInt(a),l=i[a],c=st.get(o);let h=this.buildSkeleton(c,e,o,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Us;break;case"Null":default:h=new _i;break}h.name=l.attrName?$e.sanitizeNodeName(l.attrName):"",h.ID=o}this.getTransformData(h,l),r.set(o,h)}return r}buildSkeleton(e,t,n,r){let i=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,h){if(c.ID===a.ID){const u=i;i=new Us,i.matrixWorld.copy(c.transformLink),i.name=r?$e.sanitizeNodeName(r):"",i.ID=n,l.bones[h]=i,u!==null&&i.add(u)}})}}),i}createCamera(e){let t,n;if(e.children.forEach(function(r){const i=Ye.Objects.NodeAttribute[r.ID];i!==void 0&&(n=i)}),n===void 0)t=new nt;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let i=1;n.NearPlane!==void 0&&(i=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new wt(h,c,i,a),u!==null&&t.setFocalLength(u);break;case 1:t=new js(-o/2,o/2,l/2,-l/2,i,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new nt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){const i=Ye.Objects.NodeAttribute[r.ID];i!==void 0&&(n=i)}),n===void 0)t=new nt;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let i=16777215;n.Color!==void 0&&(i=new Ne().fromArray(n.Color.value).convertSRGBToLinear());let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new Ns(i,a,o,l);break;case 1:t=new bl(i,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Jt.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=Jt.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new N0(i,a,o,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Ns(i,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,i=null,a=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(i=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new gs({name:Cn.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in i.attributes&&o.forEach(function(l){l.vertexColors=!0}),i.FBX_Deformer?(r=new m0(i,a),r.normalizeSkinWeights()):r=new Rt(i,a),r}createCurve(e,t){const n=e.children.reduce(function(i,a){return t.has(a.ID)&&(i=t.get(a.ID)),i},null),r=new yl({name:Cn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new _0(n,r)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ol(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&st.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const i=Ye.Objects.Model[r.ID];if("Lcl_Translation"in i){const a=i.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),At.add(e.target)):e.lookAt(new J().fromArray(a))}}})}bindSkeleton(e,t,n){const r=this.parsePoseNodes();for(const i in e){const a=e[i];st.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;st.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new Js(a.bones),r[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ye.Objects){const t=Ye.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(i){e[i.Node]=new Ie().fromArray(i.Matrix.a)}):e[r.Node]=new Ie().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ye&&"AmbientColor"in Ye.GlobalSettings){const e=Ye.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){const i=new Ne(t,n,r).convertSRGBToLinear();At.add(new Al(i,1))}}}}class Rm{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ye.Objects){const n=Ye.Objects.Geometry;for(const r in n){const i=st.get(parseInt(r)),a=this.parseGeometry(i,n[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const r=n.skeletons,i=[],a=e.parents.map(function(u){return Ye.Objects.Model[u.ID]});if(a.length===0)return;const o=e.children.reduce(function(u,f){return r[f.ID]!==void 0&&(u=r[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&i.push(n.morphTargets[u.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ol(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Fl(c);return this.genGeometry(t,o,i,h)}genGeometry(e,t,n,r){const i=new Ut;e.attrName&&(i.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new ut(o.vertex,3);if(l.applyMatrix4(r),i.setAttribute("position",l),o.colors.length>0&&i.setAttribute("color",new ut(o.colors,3)),t&&(i.setAttribute("skinIndex",new Ws(o.weightsIndices,4)),i.setAttribute("skinWeight",new ut(o.vertexWeights,4)),i.FBX_Deformer=t),o.normal.length>0){const c=new Xe().getNormalMatrix(r),h=new ut(o.normal,3);h.applyNormalMatrix(c),i.setAttribute("normal",h)}if(o.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;i.setAttribute(u,new ut(o.uvs[h],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],h=0;if(o.materialIndex.forEach(function(u,f){u!==c&&(i.addGroup(h,f-h,c),c=u,h=f)}),i.groups.length>0){const u=i.groups[i.groups.length-1],f=u.start+u.count;f!==o.materialIndex.length&&i.addGroup(f,o.materialIndex.length-f,c)}i.groups.length===0&&i.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(i,e,n,r),i}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,i){r.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:i,weight:r.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,r=0,i=!1,a=[],o=[],l=[],c=[],h=[],u=[];const f=this;return e.vertexIndices.forEach(function(p,g){let y,m=!1;p<0&&(p=p^-1,m=!0);let d=[],w=[];if(a.push(p*3,p*3+1,p*3+2),e.color){const v=xr(g,n,p,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(v){w.push(v.weight),d.push(v.id)}),w.length>4){i||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),i=!0);const v=[0,0,0,0],_=[0,0,0,0];w.forEach(function(S,E){let T=S,b=d[E];_.forEach(function(x,M,A){if(T>x){A[M]=T,T=x;const C=v[M];v[M]=b,b=C}})}),d=v,w=_}for(;w.length<4;)w.push(0),d.push(0);for(let v=0;v<4;++v)h.push(w[v]),u.push(d[v])}if(e.normal){const v=xr(g,n,p,e.normal);o.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(y=xr(g,n,p,e.material)[0],y<0&&(f.negativeMaterialIndices=!0,y=0)),e.uv&&e.uv.forEach(function(v,_){const S=xr(g,n,p,v);c[_]===void 0&&(c[_]=[]),c[_].push(S[0]),c[_].push(S[1])}),r++,m&&(r>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,a,y,o,l,c,h,u,r),n++,r=0,a=[],o=[],l=[],c=[],h=[],u=[])}),t}genFace(e,t,n,r,i,a,o,l,c,h){for(let u=2;u<h;u++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(u-1)*3]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+2]]),e.vertex.push(t.vertexPositions[n[u*3]]),e.vertex.push(t.vertexPositions[n[u*3+1]]),e.vertex.push(t.vertexPositions[n[u*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(u-1)*4]),e.vertexWeights.push(l[(u-1)*4+1]),e.vertexWeights.push(l[(u-1)*4+2]),e.vertexWeights.push(l[(u-1)*4+3]),e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(u-1)*4]),e.weightsIndices.push(c[(u-1)*4+1]),e.weightsIndices.push(c[(u-1)*4+2]),e.weightsIndices.push(c[(u-1)*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3])),t.color&&(e.colors.push(a[0]),e.colors.push(a[1]),e.colors.push(a[2]),e.colors.push(a[(u-1)*3]),e.colors.push(a[(u-1)*3+1]),e.colors.push(a[(u-1)*3+2]),e.colors.push(a[u*3]),e.colors.push(a[u*3+1]),e.colors.push(a[u*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(i[0]),e.normal.push(i[1]),e.normal.push(i[2]),e.normal.push(i[(u-1)*3]),e.normal.push(i[(u-1)*3+1]),e.normal.push(i[(u-1)*3+2]),e.normal.push(i[u*3]),e.normal.push(i[u*3+1]),e.normal.push(i[u*3+2])),t.uv&&t.uv.forEach(function(f,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(o[p][0]),e.uvs[p].push(o[p][1]),e.uvs[p].push(o[p][(u-1)*2]),e.uvs[p].push(o[p][(u-1)*2+1]),e.uvs[p].push(o[p][u*2]),e.uvs[p].push(o[p][u*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const i=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=Ye.Objects.Geometry[o.geoID];l!==void 0&&i.genMorphGeometry(e,t,l,r,o.name)})})}genMorphGeometry(e,t,n,r,i){const a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,h=new Float32Array(c);for(let g=0;g<l.length;g++){const y=l[g]*3;h[y]=o[g*3],h[y+1]=o[g*3+1],h[y+2]=o[g*3+2]}const u={vertexIndices:a,vertexPositions:h},f=this.genBuffers(u),p=new ut(f.vertex,3);p.name=i||n.attrName,p.applyMatrix4(r),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a;let i=[];return n==="IndexToDirect"&&("NormalIndex"in e?i=e.NormalIndex.a:"NormalsIndex"in e&&(i=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:i,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a;let i=[];return n==="IndexToDirect"&&(i=e.UVIndex.a),{dataSize:2,buffer:r,indices:i,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a;let i=[];n==="IndexToDirect"&&(i=e.ColorIndex.a);for(let a=0,o=new Ne;a<r.length;a+=4)o.fromArray(r,a).convertSRGBToLinear().toArray(r,a);return{dataSize:4,buffer:r,indices:i,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const r=e.Materials.a,i=[];for(let a=0;a<r.length;++a)i.push(a);return{dataSize:1,buffer:r,indices:i,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ut;const n=t-1,r=e.KnotVector.a,i=[],a=e.Points.a;for(let u=0,f=a.length;u<f;u+=4)i.push(new Je().fromArray(a,u));let o,l;if(e.Form==="Closed")i.push(i[0]);else if(e.Form==="Periodic"){o=n,l=r.length-1-o;for(let u=0;u<n;++u)i.push(i[u])}const h=new Tm(n,r,i,o,l).getPoints(i.length*12);return new Ut().setFromPoints(h)}}class Cm{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const r=t[n],i=this.addClip(r);e.push(i)}return e}parseClips(){if(Ye.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ye.Objects.AnimationCurveNode,t=new Map;for(const n in e){const r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const i={id:r.id,attr:r.attrName,curves:{}};t.set(i.id,i)}}return t}parseAnimationCurves(e){const t=Ye.Objects.AnimationCurve;for(const n in t){const r={id:t[n].id,times:t[n].KeyTime.a.map(Um),values:t[n].KeyValueFloat.a},i=st.get(r.id);if(i!==void 0){const a=i.parents[0].ID,o=i.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=r:o.match(/Y/)?e.get(a).curves.y=r:o.match(/Z/)?e.get(a).curves.z=r:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=r)}}}parseAnimationLayers(e){const t=Ye.Objects.AnimationLayer,n=new Map;for(const r in t){const i=[],a=st.get(parseInt(r));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(i[c]===void 0){const u=st.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){const f=Ye.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:f.attrName?$e.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};At.traverse(function(g){g.ID===f.id&&(p.transform=g.matrix,g.userData.transformData&&(p.eulerOrder=g.userData.transformData.eulerOrder))}),p.transform||(p.transform=new Ie),"PreRotation"in f&&(p.preRotation=f.PreRotation.value),"PostRotation"in f&&(p.postRotation=f.PostRotation.value),i[c]=p}}i[c]&&(i[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(i[c]===void 0){const u=st.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID,f=st.get(u).parents[0].ID,p=st.get(f).parents[0].ID,g=st.get(p).parents[0].ID,y=Ye.Objects.Model[g],m={modelName:y.attrName?$e.sanitizeNodeName(y.attrName):"",morphName:Ye.Objects.Deformer[u].attrName};i[c]=m}i[c][h.attr]=h}}}),n.set(parseInt(r),i))}return n}parseAnimStacks(e){const t=Ye.Objects.AnimationStack,n={};for(const r in t){const i=st.get(parseInt(r)).children;i.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(i[0].ID);n[r]={name:t[r].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new A0(e.name,-1,t)}generateTracks(e){const t=[];let n=new J,r=new It,i=new J;if(e.transform&&e.transform.decompose(n,r,i),n=n.toArray(),r=new kt().setFromQuaternion(r,e.eulerOrder).toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,r){const i=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(i,t,n);return new Wi(e+"."+r,i,a)}generateRotationTrack(e,t,n,r,i,a){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Jt.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Jt.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Jt.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,n);r!==void 0&&(r=r.map(Jt.degToRad),r.push(a),r=new kt().fromArray(r),r=new It().setFromEuler(r)),i!==void 0&&(i=i.map(Jt.degToRad),i.push(a),i=new kt().fromArray(i),i=new It().setFromEuler(i).invert());const c=new It,h=new kt,u=[];for(let f=0;f<l.length;f+=3)h.set(l[f],l[f+1],l[f+2],a),c.setFromEuler(h),r!==void 0&&c.premultiply(r),i!==void 0&&c.multiply(i),c.toArray(u,f/3*4);return new Ai(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(i){return i/100}),r=At.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Vi(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let i=1;i<t.length;i++){const a=t[i];a!==r&&(t[n]=a,r=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const r=n,i=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const h=t.x.values[a];i.push(h),r[0]=h}else i.push(r[0]);if(o!==-1){const h=t.y.values[o];i.push(h),r[1]=h}else i.push(r[1]);if(l!==-1){const h=t.z.values[l];i.push(h),r[2]=h}else i.push(r[2])}),i}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],r=e.values[t]-n,i=Math.abs(r);if(i>=180){const a=i/180,o=r/a;let l=n+o;const c=e.times[t-1],u=(e.times[t]-c)/a;let f=c+u;const p=[],g=[];for(;f<e.times[t];)p.push(f),f+=u,g.push(l),l+=o;e.times=Xo(e.times,t,p),e.values=Xo(e.values,t,g)}}}}class Lm{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Nl,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,i){const a=r.match(/^[\s\t]*;/),o=r.match(/^[\s\t]*$/);if(a||o)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++i]):h?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),i={name:n},a=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,i):n in o?(n==="PoseNode"?o.PoseNode.push(i):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=i)):typeof a.id=="number"?(o[n]={},o[n][a.id]=i):n!=="Properties70"&&(n==="PoseNode"?o[n]=[i]:o[n]=i),typeof a.id=="number"&&(i.id=a.id),a.name!==""&&(i.attrName=a.name),a.type!==""&&(i.attrType=a.type),this.pushStack(i)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),i=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&i===","&&(i=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,r,i);return}if(r==="C"){const l=i.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=i.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),r="connections",i=[c,h],Fm(i,u),a[r]===void 0&&(a[r]=[])}r==="Node"&&(a.id=i),r in a&&Array.isArray(a[r])?a[r].push(i):r!=="a"?a[r]=i:a.a=i,this.setCurrentProp(a,r),r==="a"&&i.slice(-1)!==","&&(a.a=bs(i))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=bs(t.a))}parseNodeSpecialProperty(e,t,n){const r=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),i=r[0],a=r[1],o=r[2],l=r[3];let c=r[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=bs(c);break}this.getPrevNode()[i]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),i)}}class Pm{parse(e){const t=new Vo(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const r=new Nl;for(;!this.endOfContent(t);){const i=this.parseNode(t,n);i!==null&&r.add(i.name,i)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},r=t>=7500?e.getUint64():e.getUint32(),i=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(r===0)return null;const l=[];for(let f=0;f<i;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=i===1&&e.getOffset()===r;r>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(o,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){const r=[];n.propertyList.forEach(function(i,a){a!==0&&r.push(i)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(i){t[i]=n[i]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],i=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),i==="Color"||i==="ColorRGB"||i==="Vector"||i==="Vector3D"||i.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:i,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),i=e.getUint32(),a=e.getUint32();if(i===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const o=mm(new Uint8Array(e.getArrayBuffer(a))),l=new Vo(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Vo{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}}class Nl{add(e,t){this[e]=t}}function Dm(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Bl(s,0,e.length)}function Im(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(r){const i=s[r-1];return s=s.slice(t+r),t++,i}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function Wo(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Um(s){return s/46186158e3}const Nm=[];function xr(s,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=s;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);const i=r*n.dataSize,a=i+n.dataSize;return Om(Nm,n.buffer,i,a)}const Ts=new kt,pi=new J;function Fl(s){const e=new Ie,t=new Ie,n=new Ie,r=new Ie,i=new Ie,a=new Ie,o=new Ie,l=new Ie,c=new Ie,h=new Ie,u=new Ie,f=new Ie,p=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(pi.fromArray(s.translation)),s.preRotation){const M=s.preRotation.map(Jt.degToRad);M.push(s.eulerOrder||kt.DEFAULT_ORDER),t.makeRotationFromEuler(Ts.fromArray(M))}if(s.rotation){const M=s.rotation.map(Jt.degToRad);M.push(s.eulerOrder||kt.DEFAULT_ORDER),n.makeRotationFromEuler(Ts.fromArray(M))}if(s.postRotation){const M=s.postRotation.map(Jt.degToRad);M.push(s.eulerOrder||kt.DEFAULT_ORDER),r.makeRotationFromEuler(Ts.fromArray(M)),r.invert()}s.scale&&i.scale(pi.fromArray(s.scale)),s.scalingOffset&&o.setPosition(pi.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(pi.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(pi.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(pi.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));const g=t.clone().multiply(n).multiply(r),y=new Ie;y.extractRotation(h);const m=new Ie;m.copyPosition(h);const d=m.clone().invert().multiply(h),w=y.clone().invert().multiply(d),v=i,_=new Ie;if(p===0)_.copy(y).multiply(g).multiply(w).multiply(v);else if(p===1)_.copy(y).multiply(w).multiply(g).multiply(v);else{const A=new Ie().scale(new J().setFromMatrixScale(u)).clone().invert(),C=w.clone().multiply(A);_.copy(y).multiply(g).multiply(C).multiply(v)}const S=c.clone().invert(),E=a.clone().invert();let T=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(S).multiply(o).multiply(a).multiply(i).multiply(E);const b=new Ie().copyPosition(T),x=h.clone().multiply(b);return f.copyPosition(x),T=f.clone().multiply(_),T.premultiply(h.invert()),T}function Ol(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function bs(s){return s.split(",").map(function(t){return parseFloat(t)})}function Bl(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function Fm(s,e){for(let t=0,n=s.length,r=e.length;t<r;t++,n++)s[n]=e[t]}function Om(s,e,t,n){for(let r=t,i=0;r<n;r++,i++)s[i]=e[r];return s}function Xo(s,e,t){return s.slice(0,e).concat(t).concat(s.slice(e))}async function Bm(){let s=[new Ss().loadAsync("./textures/TexturesCom_Wall_Stone3_2x2_1K_albedo.tif"),new Ss().loadAsync("./textures/TexturesCom_Wall_Stone3_2x2_1K_normal.tif"),new Ss().loadAsync("./textures/TexturesCom_Wall_Stone3_2x2_1K_roughness.tif"),new $0().loadAsync("/hdr/hansaplatz_2k.hdr"),new Ms().loadAsync("./textures/RainPattern_basecolor.tga"),new yr().loadAsync("./textures/rain.png"),new yr().loadAsync("./textures/raindrop_n.png"),new yr().loadAsync("./textures/raindrop_a.png"),new Ms().loadAsync("./textures/RainPattern_normal2.tga"),new Ms().loadAsync("./textures/RippleTex.tga"),new bm().loadAsync("models/stanford-bunny.fbx")],[e,t,n,r,i,a,o,l,c,h,u]=await Promise.all(s);a.wrapS=lt,a.wrapT=lt,c.wrapS=lt,c.wrapT=lt,c.generateMipmaps=!0,i.generateMipmaps=!0,i.wrapS=lt,i.wrapT=lt,h.wrapS=lt,h.wrapT=lt,h.generateMipmaps=!0;const f=new Rt(new Wn,new M0({color:"#6f9f6f"}));f.scale.set(10,.01,10),f.position.set(0,-1.455,0),f.castShadow=!0,f.receiveShadow=!0;let p=new J0,g=p.camera;g.position.set(5,5,5),g.lookAt(0,0,0);let y=p.directionLight;y.position.set(4,10,5),y.lookAt(0,0,0),y.updateMatrixWorld(),y.shadow.autoUpdate=!0,y.intensity=.5,y.shadow.mapSize.width=1024,y.shadow.mapSize.height=1024,y.shadow.camera.near=5,y.shadow.camera.far=20,y.shadow.needsUpdate=!0;let m=new Al;m.intensity=.1,p.scene.add(m);const d=new Ns(new Ne(16716049),2,10);d.position.set(-2,5,3),p.scene.add(d),p.scene.add(f),p.startLoop();let w=new im;w.scale.set(10,20,10),w.position.y=-5,p.scene.add(w);const _=new Ds(p.renderer).fromEquirectangular(r);p.scene.environment=_.texture,p.scene.background=_.texture;let S=w.material;S.normalMap=o,S.colorMap=a,S.alphaMap=l,S.envMap=r,e.repeat.set(4,4),t.repeat.set(4,4),n.repeat.set(4,4),t.wrapS=lt,t.wrapT=lt,e.wrapS=lt,e.wrapT=lt,n.wrapS=lt,n.wrapT=lt,n.generateMipmaps=!0;let E=new Go;E.roughness=.1,E.rippleMap=h,E.map=e,E.envMapIntensity=.5,E.normalMap=t,E.normalScale.set(.2,.2),E.roughness=0,E.envMap=p.scene.environment,E.envMapIntensity=.2,E.watersMap=i,E.watersNormalMap=c,E.rainSpeed=2,E.updateUniforms();let T=new Go;T.roughness=.1,T.rippleMap=h,T.envMapIntensity=.5,T.normalMap=t,T.normalScale.set(0,0),T.roughness=0,T.envMap=p.scene.environment,T.envMapIntensity=.2,T.watersMap=i,T.watersNormalMap=c,T.rainSpeed=2,T.updateUniforms();const b=new Rt(new $s,E),x=new Rt(new Wn,E);x.position.set(0,-1,3),b.position.set(0,-.5,-3),p.scene.add(x),b.castShadow=!0,b.receiveShadow=!0;let M=new J,A=new J(0,0,1),C=new It,D=new Je;p.renderer.getViewport(D),new Je(0,0,256,256);let R=new Rn(256,256,{colorSpace:Tn});S.colorMap=R.texture;let U=u.children[0];U.position.set(0,1,0),U.scale.setScalar(.01),U.material=T,p.scene.add(U),p.addLoopFunc(()=>{p.renderer.setRenderTarget(R),w.visible=!1,p.renderer.render(p.scene,p.camera),w.visible=!0,S.colorMap=R.texture,p.renderer.setRenderTarget(null);let F=performance.now()/1e3;E.time=F,T.time=F,S.time=F;let L=g.position;M.set(0,0,0),M.applyMatrix4(g.matrixWorld),M.set(0,0,-20),M.applyMatrix4(g.matrixWorld).sub(L),M.set(M.x,0,M.z).normalize(),C.setFromUnitVectors(A,M),S.cameraRotateXZMatrix.makeRotationFromQuaternion(C)}),new Vs({color:6710886}),f.material=E,p.scene.add(b)}Bm()});export default zm();
