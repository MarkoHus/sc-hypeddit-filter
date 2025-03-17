// ==UserScript==
// @name         SoundCloud Hypeddit Filter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove SoundCloud tracks without Hypeddit download links
// @author       YourName
// @match        *://soundcloud.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// Date released: 17.03.2025

(function() {
    'use strict';

    function filterTracks() {
        document.querySelectorAll('.soundList__item').forEach(track => {
            const hasHypeddit = Array.from(track.querySelectorAll('a')).some(link => link.href.includes('hypeddit'));
            if (!hasHypeddit) {
                track.style.display = 'none';
            }
        });
    }

    // Run initially and then observe changes
    const observer = new MutationObserver(filterTracks);
    observer.observe(document.body, { childList: true, subtree: true });

    filterTracks();
})();
