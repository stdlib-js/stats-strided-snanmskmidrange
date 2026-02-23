"use strict";var q=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var m=q(function(G,l){
var g=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-negative-zerof/dist'),F=require('@stdlib/math-base-assert-is-positive-zerof/dist');function O(e,i,t,f,u,d,_){var v,n,s,o,r,a;if(e<=0)return NaN;for(s=f,o=_,a=0;a<e&&(r=i[s],!(r===r&&u[o]===0));a++)s+=t,o+=d;if(a===e)return NaN;for(n=r,v=n,a+=1,a;a<e;a++)s+=t,o+=d,!u[o]&&(r=i[s],!b(r)&&(r<n||r===n&&E(r)?n=r:(r>v||r===v&&F(r))&&(v=r)));return g(g(v+n)/2)}l.exports=O
});var y=q(function(H,x){
var p=require('@stdlib/strided-base-stride2offset/dist'),P=m();function T(e,i,t,f,u){return P(e,i,t,p(e,t),f,u,p(e,u))}x.exports=T
});var R=q(function(I,k){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=y(),w=m();h(j,"ndarray",w);k.exports=j
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=R(),c,Z=A(z(__dirname,"./native.js"));B(Z)?c=C:c=Z;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
