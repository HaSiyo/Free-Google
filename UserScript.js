// ==UserScript==
// @name         Free Google
// @namespace    Free Google
// @version      3.6.0
// @description  Automatically routes Google search region to the US and completely removes unnecessary elements like 'Location unavailable' banners and DMCA filtering notifications.
// @author       Modified by Assistant
// @match        *://*.google.com/*
// @match        *://*.google.co.kr/*
// @match        *://*.google.co.jp/*
// @match        *://*.google.co.uk/*
// @match        *://*.google.de/*
// @match        *://*.google.fr/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 💡 1. 예외 처리할 기본 생활/금융 키워드 목록
    const EXCLUDED_KEYWORDS = [
        '환율', '날씨', '주식', '지도', '시간', '코스피', '코스닥', '환전', '증시', '비트코인', '날짜'
    ];

    // 💡 2. 화폐 단위 및 기호 정규식
    const CURRENCY_REGEX = /[0-9.,]*\s*(달러|엔|유로|위안|파운드|페소|바트|루블|원|달러화|엔화|유로화|위안화)|[\$€¥£]\s*[0-9.,]+/i;

    // 💡 3. 불필요한 요소 숨기기 (AdGuard 극초기 로딩에 맞춘 가속 주입)
    function injectCSS() {
        const css = `
            /* 세이프서치 잠금 경고 숨김 */
            .W5F9ud,
            /* '위치를 확인할 수 없습니다' 배너 및 하단 위치 업데이트 블록 완벽 숨김 */
            .vqkKIe,
            .O4T6Pe.TPKH4e,
            update-location,
            /* DMCA(저작권법) 필터링 알림 영역 숨김 */
            .ClPXac,
            .yG4QQe,
            /* AI 모드 탭 등 기존 불필요 요소 숨김 유지 */
            .YkNJDb > .YkNJDb > div > div > .olrp5b > .C6AK7c.XVMlrc > .mXwfNd {
                display: none !important;
            }
        `;
        const style = document.createElement('style');
        style.textContent = css;

        // AdGuard의 document-start 시점에는 head가 없을 수 있으므로 html(documentElement)에 우선 부착
        const target = document.head || document.documentElement;
        if (target) {
            target.appendChild(style);
        } else {
            document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
        }
    }

    // 💡 4. URL 파라미터 변조 로직 (미국 US 완벽 우회 및 언어 충돌 방지)
    function modifyURL() {
        if (!window.location.pathname.startsWith('/search')) return;

        let currentURL = window.location.href;
        let url = new URL(currentURL);
        let changed = false;

        const query = url.searchParams.get('q') || '';
        if (!query) return;

        const isExcluded = EXCLUDED_KEYWORDS.some(keyword => query.includes(keyword)) || CURRENCY_REGEX.test(query);

        // 파라미터 강제 설정 헬퍼 함수
        const setParam = (key, value) => {
            if (url.searchParams.get(key) !== value) {
                if (value === null) url.searchParams.delete(key);
                else url.searchParams.set(key, value);
                changed = true;
            }
        };

        if (isExcluded) {
            // [예외 검색] 한국(KR) 강제 고정
            setParam('gl', 'KR');
            setParam('hl', 'ko');
            setParam('safe', null);
            setParam('pws', null);
        } else {
            // [일반 검색] 미국(US) 우회 및 SafeSearch 해제
            setParam('gl', 'US');
            setParam('hl', 'ko'); // 국가(US)와 브라우저 언어 간 충돌로 인한 위치 에러 방지를 위해 강제 고정
            setParam('safe', 'off');
            setParam('pws', '0');
        }

        if (changed) {
            const now = Date.now();
            const lastReload = parseInt(sessionStorage.getItem('google_script_reload_time') || '0');
            
            // 무한 새로고침 방지 (500ms 쿨타임)
            if (now - lastReload < 500) {
                console.warn('Free Google: 무한 새로고침 방지 작동');
                return; 
            }
            
            sessionStorage.setItem('google_script_reload_time', now.toString());
            window.location.replace(url.toString());
        }
    }

    // --- 실행부 ---
    injectCSS();
    modifyURL();

    // 💡 5. 브라우저 자체 URL 변화 감지기 (AJAX 검색 대응)
    let lastUrl = location.href;
    new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            modifyURL();
        }
    }).observe(document, { subtree: true, childList: true });

})();
