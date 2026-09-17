// ==UserScript==
// @name         Free Google
// @namespace    Free Google
// @version      3.6.3
// @description  Automatically uses the U.S. search region for general queries and South Korea for recognized local and financial queries, with results in Korean. Keeps other Google services unchanged.
// @match        *://google.com/*
// @match        *://www.google.com/*
// @match        *://google.co.kr/*
// @match        *://www.google.co.kr/*
// @match        *://google.co.jp/*
// @match        *://www.google.co.jp/*
// @match        *://google.co.uk/*
// @match        *://www.google.co.uk/*
// @match        *://google.de/*
// @match        *://www.google.de/*
// @match        *://google.fr/*
// @match        *://www.google.fr/*
// @run-at       document-start
// @noframes
// ==/UserScript==

(function(){
function b(W,o){W=W-135;const c=a();let d=c[W];if(b["ABTyhw"]===undefined){var k=function(W){
const o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";let c="",d="";for(let d=0,k,n,S=0;n=W["charAt"](S++);~n&&(k=d%4?k*64+n:n,
d++%4)?c+=String["fromCharCode"](255&k>>(-2*d&6)):0){n=o["indexOf"](n)}for(let W=0,o=c["length"];W<o;W++){
d+="%"+("00"+c["charCodeAt"](W)["toString"](16))["slice"](-2)}return decodeURIComponent(d)};const W=function(W,o){let c=[],d=0,n,S="";W=k(W);let t
;for(t=0;t<256;t++){c[t]=t}for(t=0;t<256;t++){d=(d+c[t]+o["charCodeAt"](t%o["length"]))%256,n=c[t],c[t]=c[d],c[d]=n}t=0,d=0;for(let o=0;o<W["length"];o++){
t=(t+1)%256,d=(d+c[t])%256,n=c[t],c[t]=c[d],c[d]=n,S+=String["fromCharCode"](W["charCodeAt"](o)^c[(c[t]+c[d])%256])}return S};b["AbBNVL"]=W,b["dxJqdH"]={},
b["ABTyhw"]=!![]}const n=c[0];b["VVsWjb"]!==n&&(b["dxJqdH"]={},b["VVsWjb"]=n);const S=b["dxJqdH"][W]
;return S===undefined?(b["WjOoOs"]===undefined&&(b["WjOoOs"]=!![]),d=b["AbBNVL"](d,o),b["dxJqdH"][W]=d):d=S,d}(function(W,o){const c=b,d=W();while(!![]){try{
const W=parseInt(c(263,"F3h7"))/1*(-parseInt(c(182,"qZYb"))/2)+-parseInt(c(231,"qZYb"))/3*(parseInt(c(213,"&)UO"))/4)+-parseInt(c(283,"&$cs"))/5+parseInt(c(154,"&$cs"))/6+parseInt(c(176,"4@OM"))/7+parseInt(c(256,"QXOa"))/8+parseInt(c(252,"dS&Z"))/9*(parseInt(c(289,"T0B("))/10)
;if(W===o)break;else d["push"](d["shift"]())}catch(W){d["push"](d["shift"]())}}})(a,384443),!function(){"use strict";const W=b,o={xttaT:W(264,"0E3U"),
UwlxP:W(172,"V[nl"),bbfda:W(156,"vNcm"),cXQwp:function(W,o){return W||o},uqGxF:function(W,o){return W(o)},wpiBg:function(W,o){return W+o},fwzXR:function(W,o){
return W===o},cTzWW:function(W,o){return W(o)},rYIKH:function(W,o,c){return W(o,c)},qRdIw:W(211,"OQ95"),zELcA:W(230,"(ZFh"),hwIjc:W(203,"38[U"),
ZVQbM:function(W,o){return W(o)},gbqMf:function(W){return W()},EmeOq:W(232,"vNcm"),sZBfg:W(170,"Km%d"),EgALs:W(273,"tg&j"),xkWVK:W(286,"tPvp")}
;const c=new RegExp(W(177,"OLc7"),"i");if(window[W(184,"11!x")]!==window[W(249,"zDUR")]||!c[W(250,"&y(6")](location[W(276,"&)UO")]))return
;const d=["\ud658\uc728","\ub0a0\uc528",W(160,"zDUR"),W(149,"(ZFh"),"\ud658\uc804","\uc99d\uc2dc",W(196,"0E3U"),"\ub0a0\uc9dc"],k=new RegExp(W(158,"4yM@"),""),n=new RegExp(W(166,"&$cs"),"i"),S=o[W(219,"qZYb")],t=o[W(143,"4yM@")],e=o[W(142,"qfOO")],R=W(268,"zDUR")
;let O="",C=!1,m=null;function r(S){const t=W;if(!c[t(163,"P0x7")](S[t(173,"^o00")])||!new RegExp(t(157,"tPvp"),"")[t(261,"eIcW")](S[t(270,"m09h")]))return null
;const e=(S[t(293,"70GC")][t(280,"We)J")]("q")||"")[t(208,"])7W")](o[t(136,")0Xe")])[t(254,")0Xe")]()
;return e?d[t(191,"BOPS")](W=>e[t(298,"Ynde")](W))||k[t(259,"fIh$")](e)||n[t(246,"0C&5")](e)?"kr":"us":null}function P(c){const d=W,k=document[d(150,"2$2z")]
;if(!k)return;let n=document[d(277,"F3h7")](t);if(!c)return k[d(214,"T0B(")](e)&&k[d(297,"0C&5")](e),void(n&&n[d(299,"4@OM")]())
;if(k[d(206,"tg&j")](e)!==c&&k[d(145,"F3h7")](e,c),m?(!n&&document[d(272,"E73]")]&&(n=document[d(187,"4yM@")]("a"),n["id"]=t,
n[d(210,"&$cs")][d(269,"11!x")]=o[d(151,"0C&5")],document[d(303,"F3h7")][d(247,"We)J")](n)),n&&(n[d(291,"fIh$")]=m,
n[d(255,"kQ4Y")]="us"===c?d(147,"kQ4Y"):d(188,"T0B("),n[d(169,"qZYb")]=o[d(221,"zDUR")])):n&&n[d(194,"Ynde")](),document[d(186,"V[nl")](S))return
;const R=document[d(144,"&y(6")](d(217,"m09h"))
;R["id"]=S,R[d(165,"4yM@")]=d(226,"eIcW")+e+d(215,"We)J")+e+d(146,"BOPS")+e+d(200,"qZYb")+e+d(248,"T0B(")+e+d(257,"(ZFh")+e+d(207,")0Xe")+e+d(295,"BOPS"),
(document[d(229,"G%KB")]||k)[d(244,"])7W")](R)}function u(){const c=W,d=sessionStorage[c(193,"W*Y!")](R);try{
return JSON[c(227,"4@OM")](o[c(138,"o6Xk")](d,c(192,"11!x")))}catch(W){return null}}function Q(c,d,k){const n=W;m=c,o[n(251,"0C&5")](P,d),
console[n(175,"o6Xk")](o[n(223,"P0x7")](n(243,"T0B("),k)+n(234,"OLc7"))}function i(){const c=W,d={kATut:function(W,c){const d=b;return o[d(222,"Km%d")](W,c)}
},k=location[c(159,"o6Xk")],n=new URL(k),S=o[c(212,"G%KB")](r,n);if(k!==O&&(m=null),o[c(202,"4@OM")](P,S),C||k===O)return;if(O=k,!S)return;let t=!1
;function e(W,o){const k=c,S=n[k(140,"0E3U")][k(292,"P0x7")](W);null===o?S[k(199,"2$2z")]&&(n[k(180,"OQ95")][k(300,"6*32")](W),
t=!0):d[k(225,"11!x")](1,S[k(290,"4yM@")])&&d[k(288,"dS&Z")](d[k(162,"OLc7")]("gl",W)?S[0][k(240,"dS&Z")]():S[0],o)||(n[k(218,"P*4Q")][k(307,"4@OM")](W,o),t=!0)
}e("gl",S),o[c(302,"Km%d")](e,"hl","ko"),e(c(265,"&)UO"),o[c(296,"0C&5")]("us",S)?o[c(242,"qfOO")]:null),e(c(282,"tPvp"),"us"===S?"0":null)
;const i=JSON[c(185,"70GC")]([(n[c(155,"qZYb")][c(294,"E73]")]("q")||"")[c(262,"11!x")](c(201,"m09h"))[c(189,"eIcW")](),S,...[c(271,"hZLf"),c(306,"G%KB"),o[c(167,"tg&j")],o[c(164,"T0B(")]][c(287,"0E3U")](W=>n[c(140,"0E3U")][c(161,"38[U")](W)||"")])
;if(!t){try{const W=u();W&&o[c(267,"eIcW")](W[c(260,"P*4Q")],i)&&sessionStorage[c(153,"&y(6")](R)}catch(W){}return}const l=n[c(148,"BOPS")];try{const W=u()
;if(W&&W[c(237,"HUyR")]===i)return void Q(l,S,c(305,"tg&j"));const o=JSON[c(285,"fIh$")]({pending:i});if(sessionStorage[c(152,"0E3U")](R,o),
sessionStorage[c(195,"o6Xk")](R)!==o)throw new Error(c(308,")0Xe"))}catch(W){return void Q(l,S,c(228,"W*Y!"))}C=!0;try{location[c(139,"&$cs")](l)}catch(W){C=!1
;try{sessionStorage[c(183,"0C&5")](R)}catch(W){}Q(l,S,c(274,"OQ95")),console[c(209,"P0x7")](c(168,"We)J"),W)}}if(i(),!document[W(258,"0C&5")]){
const c=new MutationObserver(()=>{const d=W;document[d(236,"dS&Z")]&&(c[d(204,"0E3U")](),
o[d(275,"MpNb")](P,o[d(224,"HUyR")](r,new URL(location[d(266,"dS&Z")]))))});c[W(171,"4@OM")](document,{childList:!0,subtree:!0})}
o[W(253,"2$2z")](setInterval,()=>{const c=W;document[c(141,"11!x")]||o[c(216,"qZYb")](i)},1e3),window[W(239,"P*4Q")](W(301,"1DTg"),i),
window[W(278,"38[U")](W(179,"38[U"),i),window[W(181,"kQ4Y")](o[W(279,"zDUR")],c=>{const d=W;c[d(238,"])7W")]&&(C=!1,O=""),o[d(216,"qZYb")](i)}),
document[W(174,"HUyR")](W(205,"&$cs"),i,{once:!0}),document[W(178,"0E3U")](W(284,"70GC"),()=>{const c=W;document[c(241,"&)UO")]||o[c(197,"(ZFh")](i)})}()
;function a(){
const W=["A8kJfMZdH8oUoCkNwvrKuG0yWOe","W7NdQSkoWR3dN8k5wq","wSkRW6NdUCkix8owW6Hs","WOlcHmonvJX3W58NhCkkWOL0d8kQbmo5","E8kJoxBdNCoUjCkqFuTK","WOdcPmkud8kTW5K","aCoJWP3cJSoC","W6jMW6NcSSoFWONcK8k+mSkAtSoMCW","s8k+W6VdR8kpsmoHW6vFtKe","WRRdICk1sSoJWQveW758","WOVcUGJdJq","bXddQCo4WPvbpcqIW6hcLG","W7K0WQlcJSkuWOdcTSkvn8owfCo8FxJcLhS0o1i3WRxcMcStbmowBSkcpuu6WPPUW6PNf2mLW7VcQCodW77dSXhcLIlcUCkAW6hdVJJcK8kFn8oSWQj4cmoQWQddOrTpWPGobqfXtmk8c8oEdLj5W5ddR8kDlSk4WPOAE8oFr8oRW7u","gSkEsa","eZRcQCoS","WORcRJZdGvS","nSkNaxJdK8oFgG","W4JcGhlcHmkU","vCo2k8oz","zM4PeCoXW73cGupcPGxdVa","ffRcUerfb3vXW7dcS1ZdVue","Dh9gW5xcT8otBYi9tYzQWPFcSCk9teTUW5ldQmkCirnzzSoQWO5xBCkFu8kmbq","WPVcSbJdJhdcPCkkW7bHFue0u8ofW58","W6BdP8kTW5i","WPpcHCohDYn8W5y","W6ZdPCkqpa","W6qZzmoiWQy+W6/dUgK","WO5qD25qofJdG0yq","W4xcV8ogta","WPVcRmkwdG","z8k+eh8","W77dT8kzeeO","cmkdxCooW446yuf9W6a9pfdcHvnVBSoUAc7cJCkDW7pdJxy","W6KVzCoXWQiQW7i","e8kkWO8kW7/dVmoGkq","r8kpWQO","WO8QW5rm","W57dGSoSCmoTWQ/cVqtcLhldJKXaCSk8WOTBW5JdVCogW5FdSmoY","7j2y6423uEYCJoUmQUYDTwxSIytTL4tTLBVSPBBcO+UQNo2uO+YlN+UjL+UiLdq","W7HUW6xcH8ks","WOdcOSkdh8kMW5BcSh0","W5ObnXjQmLhdOe0CWQvGW4Pw","jsKdWPFdSrhdOW/dLL7dLSo7WPXjnSk7","fSkAB8o9W5O","aqxdRq","W5RdTCoexSo7WOddRvxdTCoHpmkNzq","W7SsrG","W5ldSSoDW4uQbspcOCkSdgCMW48","uSkxo8kvWPJcJ0RdRGldH8o0W4eUCqFdNa","W6hdTSkSW48/W7jtWPFcTW","W7SeuJi3W4WUjG","W6BcMmo9","zmkniwZdNG","WPeNWRtdR8omW7BdJmkzaSkHACkAga","kgy7WRpdSt4","W7RdSmk7W4a","W4NdRJrUtgC","v8kBkCkoWPNcJNBdPGtdN8o6W5O","WOOGW4q","W7qZWQNcNSkhpwBcLqzHx23dTsVcU8omEaW5lCoaDYfMhmklWOrqESoQW5pcIcrZjgqQrmovWQOFxSoUWPCHW4mZfs0FW7DeC8ojbmkdW6X7CSkQW4BdPSopvSoFW7xcS0FcKhnxWOTFW4RdO8koxXJcUCk5W6LRW6ZcGYJcSftdOSo5","WPNcQahdOu8","WO3cUHBdLMVcPCkLW7bqy007q8oFW44","Fx4bW6LzWRKkW6i","CCkBW4tdLSolzq","E8kZDmkVW69s","WQldJCowW5yDFCkWW5G","EZX6l8or","W58ljY4","W5XZWOGgtg0CpmoPsCkq","6RkJ7j+JWRJQSPhSGiNSNPhdR+UXUEUWHh/SN53RJ7RSNAS17kEb64Ig7zE+7iIF64Mq64MfWPa","kdSg","CmkBW50","CSoWlCogW4BcM8khzCkmDCoBqCk3W7FcI098WOPzqq","DJnJW6hcVw7dPYxcPhXIWRxcRW","wCoWnSovW7m","W6KTA8oLsdblW5NdO8o4WOf6uq","WRyMWPbQWPO","WPlcR8kzWPX4uxy","W7JcNmoSFCoUWOjbW69JccGo","W6i1CSobWQi8","nCowWRJcI8oy","n1KxWRldOG","bc3cV8o5a8oMWRddPCkmdCoSWONdVq","W44bnXzYi07dReeDWPn8","WPqXW7lcRSojmb7cGruPndNcScBdT8kdo01Tzmkposf1ySogW4GR","66+Q6RwMCEQZPEYbU8kY7iEl7kcIW6pSOARSMke","WQfJWRNcIW","7lYD7iU564Uw","W57cTLJcUSklCdetW5fotwXJW7Sk","WQRcQbFdGu0","W7JcNmo5rSo5WO98","ftRcT8o3aCoMWRZdVCkmdq","W5NdUmoqW4eQaLtcU8ktcLCb","jSo9rY/dK2ZcPLBcTsJcOwe","7j2x64YgmEYFJEUpRUYEK8kn7ksl64Qn65kN7jARpUYMPoYHPCoX7kgp7jQI7zAj64Uy64URW5u","W5u5gIqHW4uZmI7cG8k5WOHY","7kk47iUEFCoRWQtTM5RSGBTbWRKKdmo3WRvUpSk8W44lW4VdJ33cRCoQxYpQS7GX7z6QeeyEit7cG+YNS+UnNw3SI6lQSk5lvmoFBbztW4vvW6i9mSkUgmki6RgzWPhTN7VdNmoCW5C1WQ7cN+YDPoUIKuhROk/dIEYEKSkq64IafoYFImov6RcKFoYDM0RRPl8E7jYtCUUoMYhRPzZdLoU1HU2fSblQU4xSPQzjW5XcWP5TCqi7WPBcJeNcGSkHmEQXJSoW7z2/whdcPmklzCoWWOqC7zMl7j+Sjo2wK+Q3QmkL7zQ+7ksVWRRSHzRQSODX7iUY6Ro4","WR0mWQr7","7lY67iMv7zse","iYGt","hSkrW7LLWQe","W5RdRJnB","W4XJW4xcVCkC","mgyTWQddHJNcUrZcOgjh","WRZcRSkYWQX9hJ3cSCodbvfbWQBdMCk67lo+WOlRPBKT7jwjW6HhW7ldQN0/pCki64MG65+K7zUrWQ/SLP/TMzK67jYb66gv7zMSWQBSNQRSL6xTM7xcLUYyUo2zSuNRIl/RNiqM7j+o66koa+YCPoYwQqZTJ5/SMidRKR5R7yYN7iwdzEUXUE2iJqRROklRU4KS7js5W43SMQ4mW4P1iNywyIpQSAjy7z2GWQaWfNZdNYBdGX/cLttdRWFSN4/ROlBdIEUHKSoN7j2VW47RIPtcOEYDTCoz6RoPW7JSN64B66sxkoYDSe3RJQddOEUKVuNRTOFTH5D96RIu7kALW7/SP5xRPPxcHmoCW4uV7jYWA+UlSCkq646XW6tRPR1qm8oKW5hcJb7dRuhcVoQXJ8kJ7z6ttSoeWQZcQqKSW6nbWPWyqSkSmokdNmkBi+kdQwBdRwvflCkoW7NdQCoWlSo+WOOAWRy6W7FdUhldSLTYWRb3WPBcKSoOWQKkrxNdKSoSWPpdQ8kPFI8RkdFdLXebvXVdUdpcNmkRWQiyAmompqZcSrG4hsxdOKyVs8k+mXyiWOFcU8ooWOpdNmkRW5aHWQm0rSocW53cOMJdM8kmWQtdPXVdP3ZdR8kxzSompx7dSq","W4ddPSouCSkb","ibldVmo4W5TIecmSW6hcL8k1qEQZSUYdI8kg7kA07jsf7j2GW4VSOOhSMPxTLA7SP5xdL+URO+2vToYjIEUiOoUkGSoS","iCoXuJhdLq","BXDwaCk0cKuOcfxcNxGSBSoLWOXvWRldL3CUrW9S","BmkCW5RdNmopDIG","W7nOkuOJW5zNWPBcVZCYWOHfExGUu2HdW6pcJWNdG8kCWP0tjSkXjxZdU8kRWRWQzxzEW7HXrg1ldSk7gCknW5zlWORcHurRWO4aWO8IDCoklhlcH3WckCoHW6z7W5junG3cJZ4gtSo6l8kaW7lcJsreW5ThW6ldP24LFx15W4zdxSkvk8kLFmoHW4H8WQj5W70MDcJdKCove8oMz17dGmkcWOPivehcO8kcWQJcOSo2W6DGWR3dHq7cNmoHy8oNmCoUnbddQCkzWRddPCkAfmojWOHvWQOqWPxcNK5UWRddRmo1n8kEf1fbWPxdRCoMa8kgWOWhoCk+W7VdPKDfWPmtgmksCSkSWO5ozW5wW65gWQdcQSkOeJf3Cu/dQmk0WQZcRwhdKCk7WRhdKmoCbtldGCkHWOFdT8oiWQhdUWhcMY00WOZcTGKoW74FjKPnW7VdPSkvjGzoF8kspqdcSCkjfNnhWP8GW6dcMW7cPhLgWOiTAH1SWOfYhSkCW6pcMCkAWR4wqhqWWONcSSkpWPO7tSkDWPtcHgm6WONdUfjyoMTcWPBdSSoIxmoQmSkPW7/dVCo/WPnoFMCSkY5iW7zxW4z8W4JcOmkRWRamCGyBW7mHWROQW4S","WOpdOeqLWRLRcuG","W6JdQ8keWPZdGmkYumkoBg3cUrNcQSkaW7j0","WQiFWRnZ","n8onWPZcJmknnx1gW5NdSrBcVSkd","k8o4WPiQWQizW5tdHhldKX/cOM7dJmkJjmoRWO3dHwqVW45VDCoNW7ZcUSkqoCoOnd0ai1K2WRNcJSkVd8kxWRRdR3TxWPJdSCovW75mWQZcNgJcVG","W6RcNCoPsSo7WO9/W7PDadyjWPxdO8k0cW","lcWuWRRdPbZdRbxdVvi","WRVdIXakWPbzfCobp0ldM8oW","C281imoeW7FcGupcJWldUW3dJ8o+W7VcVW","z8kVfcFdP1tcKw/cJq","WO3cUHBdLMVcPCkTW7bbFa","W7K5ESod","v8kkoSkvWPtcGu/dOq8","W6rIlMy7W5PLWP3dQYuzWOLPEq","j3eWWRxdStpcKGtcOgfwWQpcNW","7zE46Rw5WQZQSzFSGlBdRUYhMoYJHhxSO7FSMOi","W6ZdSSkkjq","W70IW6NdMmkvvxBcTbLPw0JdVq","WRP+WRhcIa","W6qPESoj","W6vvpSovA8kcCq","zNupW6PAWRG","WRiBWRvuWP7dJM0","67Up7yMb7l+z7j23","lJ9cW6VdSW","DZDHW63dKZNcSY7cOhq","W5BcVfxcQmksFq","cmk4cctdTZdcP2BcOMxdHJibWPbTW5m2W7JcQ8ouz8oco07dGmkpW5qj","lCkTWRaH","ymkQW5pdRSoQ","mc8u","W6/cKmo+BmoIWOr/W6TYhq","WQtcHCkKWRn2xgFcICkhlw4eW6/cGSoLbG","W53dHSoSumk0WR3cVqJcKYRdNuy","hmkMn8ohWOxcOCocA8k0m8oMa8kcWRldG3PfWQ10eCkGW7DCj8k7W6NcOWBdGdldI8kRn11oWOJcNNC/uq","rmkHW6NdP8kaqmolW7Dt","W5NdQJjb","WPpcVSkqWPX8","WQFdIbC","pGSrWR7dPG","W5NdVCoilSkMW7JcIgJdNq","W4X1W7/cLSklWRRcJSk4n8kdx8k5","o0dcT8okW45JrJKVWQhdUmkVqviIWOzuW4GeW4VcObWwFCkdnCkqWQC","mSo6vXddLG","emkFWOioW7q","WPdcHCoiysL6W6eYi8kcWPDZ","emo1qXldGq","sCoAWO3cPSosW6dcTq","dmktxSopW7a","BXjjpmol","W5NdUYLTrW","W5pdMCkXWRVdUW","W6eDqSoqWRm","WPlcOmodAdGnW5JdSZKjySk4mmkRW7hdQs7dNG","C8kFW5VdISoy","67kA67ofAUYFQoUpHSoh67c17kswW6RQUBJROQ/SNO457kon7jYf7zw2qUYlNfBSL7lSIR/RIjxRI43cMG","ntOkWO0","oILsW5tdOq","zmkUhM7cG0JcNxJcOb7cMa","WQhcRxtdNbRcGmocDqldK3OZfHhcSdXOWOG9FmkpW4/cMCoY","wSozW4jtWQlcRCokg8ozymk+aq","vEYKKEYIVddSO5tSM4FcG+ULME2aSoUMHGdTKPNSI53TL4RRIiZRIQZcOa","DJrNWQ7dKGBcSddcJW"]
;a=function(){return W};return a()}
})();