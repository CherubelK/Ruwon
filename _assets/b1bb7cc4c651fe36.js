(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[64519],{

/***/ 823148:
function(_,__,__webpack_require__){__webpack_require__.n_x=__webpack_require__.n;const __web_req__=__webpack_require__;__web_req__(765703);globalThis._5f74ec40302898c5a55451c9fbd04240=globalThis._5f74ec40302898c5a55451c9fbd04240||{};(function(__c){var fVd;__c.cVd=function(a){if(!(a.length<2))return Math.abs(a[1].value-a[0].value)};__c.dVd=function(a,b,c){var d=c.cr;if(d==null||b.length===0)return!1;a=__c.KP(d,a.xc.Df.Nl)/(c.percent?100:1)*1E-5*(1-1E-10);c=__c.cVd(b);return c!=null?c<a:Math.max(...b.map(({value:e})=>Math.abs(e)))<a};
__c.eVd=function(a,b){var c={},d=(0,__c.N)(()=>[...a.rows].sort(b));for(let e of a.keys)c[e]=new __c.Wn({data:()=>{var f=d.get();return a.$Z[e].cols.E9(g=>f.map(h=>h[e].Ob(g)))},meta:()=>a.$Z[e].cols.Se(f=>f.meta),kc:a.G8[e]});return new __c.Xn(c)};__c.VZ=function(a,b){return new fVd(a,b)};__c.gVd=function(a){a=a.filter(d=>Number.isFinite(d));if(a.length!==0){var {min:b,max:c}=a.reduce(({min:d,max:e},f)=>({max:Math.max(e,f),min:Math.min(d,f)}),{min:Infinity,max:-Infinity});return[b,c]}};
__c.hVd=function(a,b,c){__c.u(a<=b);return b<c?[a,c]:a>c?[c,b]:[a,b]};
fVd=class{jt(a,{data:b,meta:c,kc:d}){return new fVd(this.km,this.by,{...this.pqb,[a]:{data:b,meta:c,kc:d}})}build(){var a=this.km,b=this.by,c=this.pqb,d=(0,__c.N)(()=>{var g=new Map;for(let h of a.rows){let k=b(h),l=g.get(k);l||(l=[],g.set(k,l));l.push(h)}return g}),e=(0,__c.N)(()=>{var g=[];for(let h of d.get().values()){let k={};for(let l of a.keys)k[l]=(c[l]?.data??(m=>m[0][l].values()))(h);g.push(k)}return g}),f={};for(let g of a.keys)f[g]=new __c.Wn({data:()=>{var h=e.get().map(k=>k[g]);return h.length?
h[0].map((k,l)=>h.map(m=>m[l])):[]},meta:()=>(c[g]?.meta??(h=>h.values()))(new __c.RQ(()=>__c.Rn(this.km.cols[g],([h,k])=>[h,k.meta]))),kc:c[g]?.kc??this.km.G8[g]});return new __c.Xn(f)}constructor(a,b,c={}){this.km=a;this.by=b;this.pqb=c}};
}).call(globalThis,globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/b1bb7cc4c651fe36.js.map