// ==UserScript==
// @name         Op3rat10n Cat G1f
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       JonPizza
// @match        *://*/*
// @grant        *
// ==/UserScript==

(function() {
    'use strict';

    window.setInterval(function(){
    var images = document.getElementsByTagName('img');
    var iframes = document.getElementsByTagName('iframe');
    var i;
    var randnum;
    for (i = 0; i < images.length; i++) {
        randnum = Math.floor((Math.random() * 10) + 1);
        if (randnum == 1) {
            images[i].srcset = 'https://media.giphy.com/media/waIb4gha3r6PS/giphy.gif';
        } else if (randnum == 2) {
            images[i].srcset = 'https://media.giphy.com/media/uB95dmqTMDCsU/giphy.gif';
        } else if (randnum == 3) {
            images[i].srcset = 'https://media.giphy.com/media/RBBWIAfTzuHxS/giphy.gif';
        } else if (randnum == 4) {
            images[i].srcset = 'https://media.tenor.co/images/2081958de67e704573beef09999517e3/raw';
        } else if (randnum == 5) {
            images[i].srcset = 'https://media.giphy.com/media/l6Td5sKDNmDGU/giphy.gif';
        } else if (randnum == 6) {
            images[i].srcset = 'https://media.giphy.com/media/UmO1IuCwW14k/giphy.gif';
        } else if (randnum == 7) {
            images[i].srcset = 'https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif';
        } else if (randnum == 8) {
            images[i].srcset = 'https://media.giphy.com/media/blPpTGDhn6hEI/giphy.gif';
        } else if (randnum == 9) {
            images[i].srcset = 'https://media.giphy.com/media/Jd5YlXOVTcQtW/giphy.gif';
        } else if (randnum == 10) {
            images[i].srcset = 'https://media.giphy.com/media/dYoceNWjX7qes/giphy.gif';
        };
        images[i].src = 'https://media.giphy.com/media/dYoceNWjX7qes/giphy.gif';
    }
    for (i = 0; i < iframes.length; i++) {
        randnum = Math.floor((Math.random() * 10) + 1);
        if (randnum == 1) {
            iframes[i].src = 'https://media.giphy.com/media/waIb4gha3r6PS/giphy.gif';
        } else if (randnum == 2) {
            iframes[i].src = 'https://media.giphy.com/media/uB95dmqTMDCsU/giphy.gif';
        } else if (randnum == 3) {
            iframes[i].src = 'https://media.giphy.com/media/RBBWIAfTzuHxS/giphy.gif';
        } else if (randnum == 4) {
            iframes[i].src = 'https://media.tenor.co/images/2081958de67e704573beef09999517e3/raw';
        } else if (randnum == 5) {
            iframes[i].src = 'https://media.giphy.com/media/l6Td5sKDNmDGU/giphy.gif';
        } else if (randnum == 6) {
            iframes[i].src = 'https://media.giphy.com/media/UmO1IuCwW14k/giphy.gif';
        } else if (randnum == 7) {
            iframes[i].src = 'https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif';
        } else if (randnum == 8) {
            iframes[i].src = 'https://media.giphy.com/media/blPpTGDhn6hEI/giphy.gif';
        } else if (randnum == 9) {
            iframes[i].src = 'https://media.giphy.com/media/Jd5YlXOVTcQtW/giphy.gif';
        } else if (randnum == 10) {
            iframes[i].src = 'https://media.giphy.com/media/dYoceNWjX7qes/giphy.gif';
        };
    }}, 100);
})();
