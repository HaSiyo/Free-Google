// ==UserScript==
// @name         Free Google
// @namespace    Free Google
// @version      3.7.0
// @description  Automatically routes Google search region to the US and completely removes unnecessary elements like 'Location unavailable' banners and DMCA filtering notifications.
// @match        *://*.google.com/*
// @match        *://*.google.co.kr/*
// @match        *://*.google.co.jp/*
// @match        *://*.google.co.uk/*
// @match        *://*.google.de/*
// @match        *://*.google.fr/*
// @run-at       document-start
// ==/UserScript==

(function(_0x4b72f1,_0x38db92){
'use strict';

const _0x1a92=[
'\ud658\uc728','\ub0a0\uc528','\uc8fc\uc2dd','\uc9c0\ub3c4','\uc2dc\uac04',
'\ucf54\uc2a4\ud53c','\ucf54\uc2a4\ub2e5','\ud658\uc804','\uc99d\uc2dc',
'\ube44\ud2b8\ucf54\uc778','\ub0a0\uc9dc'
];

const _0x43b9=/[0-9.,]*\s*(\ub2ec\ub7ec|\uc5d4|\uc720\ub85c|\uc704\uc548|\ud30c\uc6b4\ub4dc|\ud398\uc18c|\ubc14\ud2b8|\ub8e8\ube14|\uc6d0|\ub2ec\ub7ec\ud654|\uc5d4\ud654|\uc720\ub85c\ud654|\uc704\uc548\ud654)|[\$€¥£]\s*[0-9.,]+/i;

const _0x7f31=
'.W5F9ud,.vqkKIe,.O4T6Pe.TPKH4e,update-location,.ClPXac,.yG4QQe,'+
'.YkNJDb>.YkNJDb>div>div>.olrp5b>.C6AK7c.XVMlrc>.mXwfNd,'+
'div[data-async-type="folsrch"],[data-attrid="SGE"],[data-attrid^="SGE"],[data-attrid*="AIOverview"]';

const _0x5c66=
'div[data-async-type="folsrch"],[data-attrid="SGE"],[data-attrid^="SGE"],[data-attrid*="AIOverview"]';

function _0x2d18(){
    const _0x147c=_0x4b72f1.createElement('style');
    _0x147c.textContent=_0x7f31+'{display:none!important}';
    (_0x4b72f1.head||_0x4b72f1.documentElement)?.appendChild(_0x147c);
}

function _0xa99e(){
    _0x4b72f1.querySelectorAll(_0x5c66).forEach(_0x22be=>_0x22be.remove());
}

function _0xe013(){
    if(!_0x38db92.location.pathname.startsWith('/search'))return;

    const _0x65aa=new URL(_0x38db92.location.href);
    const _0xf533=_0x65aa.searchParams.get('q')||'';

    if(!_0xf533)return;

    let _0x9e88=false;

    const _0xa06e=
        _0x1a92.some(_0x2bfd=>_0xf533.includes(_0x2bfd))||
        _0x43b9.test(_0xf533);

    const _0x196f=(_0x4a15,_0x22fb)=>{
        if(_0x22fb===null){
            if(_0x65aa.searchParams.has(_0x4a15)){
                _0x65aa.searchParams.delete(_0x4a15);
                _0x9e88=true;
            }
            return;
        }

        if(_0x65aa.searchParams.get(_0x4a15)!==_0x22fb){
            _0x65aa.searchParams.set(_0x4a15,_0x22fb);
            _0x9e88=true;
        }
    };

    if(_0xa06e){
        _0x196f('gl','KR');
        _0x196f('hl','ko');
        _0x196f('safe',null);
        _0x196f('pws',null);
    }else{
        _0x196f('gl','US');
        _0x196f('hl','ko');
        _0x196f('safe','off');
        _0x196f('pws','0');
    }

    if(!_0x9e88)return;

    const _0x1514=Date.now();
    const _0x3188=Number(
        sessionStorage.getItem('google_script_reload_time')||0
    );

    if(_0x1514-_0x3188<500)return;

    sessionStorage.setItem(
        'google_script_reload_time',
        String(_0x1514)
    );

    _0x38db92.location.replace(_0x65aa.toString());
}

_0x2d18();
_0xe013();
_0xa99e();

let _0xc0ad=_0x38db92.location.href;

new MutationObserver(()=>{
    _0xa99e();

    if(_0x38db92.location.href!==_0xc0ad){
        _0xc0ad=_0x38db92.location.href;
        _0xe013();
    }
}).observe(_0x4b72f1.documentElement,{
    subtree:true,
    childList:true
});

})(document,window);
