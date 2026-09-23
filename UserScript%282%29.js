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
const _0x730a=['\x73\x61\x66\x65','\x67\x6c','\ub0a0\uc528','\x67\x6f\x6f\x67\x6c\x65\x5f\x73\x63\x72\x69\x70\x74\x5f\x72\x65\x6c\x6f\x61\x64\x5f\x74\x69\x6d\x65','\x4b\x52','\x2e\x59\x6b\x4e\x4a\x44\x62\x3e\x2e\x59\x6b\x4e\x4a\x44\x62\x3e\x64\x69\x76\x3e\x64\x69\x76\x3e\x2e\x6f\x6c\x72\x70\x35\x62\x3e\x2e\x43\x36\x41\x4b\x37\x63\x2e\x58\x56\x4d\x6c\x72\x63\x3e\x2e\x6d\x58\x77\x66\x4e\x64\x2c','\uc9c0\ub3c4','\ube44\ud2b8\ucf54\uc778','\x70\x77\x73','\x2e\x57\x35\x46\x39\x75\x64\x2c\x2e\x76\x71\x6b\x4b\x49\x65\x2c\x2e\x4f\x34\x54\x36\x50\x65\x2e\x54\x50\x4b\x48\x34\x65\x2c\x75\x70\x64\x61\x74\x65\x2d\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2c\x2e\x43\x6c\x50\x58\x61\x63\x2c\x2e\x79\x47\x34\x51\x51\x65\x2c','\x68\x6c','\x64\x69\x76\x5b\x64\x61\x74\x61\x2d\x61\x73\x79\x6e\x63\x2d\x74\x79\x70\x65\x3d\x22\x66\x6f\x6c\x73\x72\x63\x68\x22\x5d\x2c\x5b\x64\x61\x74\x61\x2d\x61\x74\x74\x72\x69\x64\x3d\x22\x53\x47\x45\x22\x5d\x2c\x5b\x64\x61\x74\x61\x2d\x61\x74\x74\x72\x69\x64\x5e\x3d\x22\x53\x47\x45\x22\x5d\x2c\x5b\x64\x61\x74\x61\x2d\x61\x74\x74\x72\x69\x64\x2a\x3d\x22\x41\x49\x4f\x76\x65\x72\x76\x69\x65\x77\x22\x5d','\x6b\x6f','','\uc2dc\uac04','\x73\x74\x79\x6c\x65','\x6f\x66\x66','\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x6e\x6f\x6e\x65\x21\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x7d','\x71','\uc8fc\uc2dd','\x55\x53','\x30','\ucf54\uc2a4\ud53c','\uc99d\uc2dc','\ud658\uc804','\ucf54\uc2a4\ub2e5','\ub0a0\uc9dc','\ud658\uc728','\x2f\x73\x65\x61\x72\x63\x68'];
function _0x9d1b(_0x188f){return _0x730a[_0x188f-0x1a7]}


const _0x1a92=[
_0x9d1b(0x1c2),_0x9d1b(0x1a9),_0x9d1b(0x1ba),_0x9d1b(0x1ad),_0x9d1b(0x1b5),
_0x9d1b(0x1bd),_0x9d1b(0x1c0),_0x9d1b(0x1bf),_0x9d1b(0x1be),
_0x9d1b(0x1ae),_0x9d1b(0x1c1)
];

const _0x43b9=/[0-9.,]*\s*(\ub2ec\ub7ec|\uc5d4|\uc720\ub85c|\uc704\uc548|\ud30c\uc6b4\ub4dc|\ud398\uc18c|\ubc14\ud2b8|\ub8e8\ube14|\uc6d0|\ub2ec\ub7ec\ud654|\uc5d4\ud654|\uc720\ub85c\ud654|\uc704\uc548\ud654)|[\$€¥£]\s*[0-9.,]+/i;

const _0x7f31=
_0x9d1b(0x1b0)+
_0x9d1b(0x1ac)+
_0x9d1b(0x1b2);

const _0x5c66=
_0x9d1b(0x1b2);

function _0x2d18(){
    const _0x147c=_0x4b72f1.createElement(_0x9d1b(0x1b6));
    _0x147c.textContent=_0x7f31+_0x9d1b(0x1b8);
    (_0x4b72f1.head||_0x4b72f1.documentElement)?.appendChild(_0x147c);
}

function _0xa99e(){
    _0x4b72f1.querySelectorAll(_0x5c66).forEach(_0x22be=>_0x22be.remove());
}

function _0xe013(){
    if(!_0x38db92.location.pathname.startsWith(_0x9d1b(0x1c3)))return;

    const _0x65aa=new URL(_0x38db92.location.href);
    const _0xf533=_0x65aa.searchParams.get(_0x9d1b(0x1b9))||_0x9d1b(0x1b4);

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
        _0x196f(_0x9d1b(0x1a8),_0x9d1b(0x1ab));
        _0x196f(_0x9d1b(0x1b1),_0x9d1b(0x1b3));
        _0x196f(_0x9d1b(0x1a7),null);
        _0x196f(_0x9d1b(0x1af),null);
    }else{
        _0x196f(_0x9d1b(0x1a8),_0x9d1b(0x1bb));
        _0x196f(_0x9d1b(0x1b1),_0x9d1b(0x1b3));
        _0x196f(_0x9d1b(0x1a7),_0x9d1b(0x1b7));
        _0x196f(_0x9d1b(0x1af),_0x9d1b(0x1bc));
    }

    if(!_0x9e88)return;

    const _0x1514=Date.now();
    const _0x3188=Number(
        sessionStorage.getItem(_0x9d1b(0x1aa))||0
    );

    if(_0x1514-_0x3188<500)return;

    sessionStorage.setItem(
        _0x9d1b(0x1aa),
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
