"use strict";

import { checkFlexGap } from './checkFlexGap.js';
import { smoothScroll } from './smoothscroll.js';
import { observeHeroSec } from './stickynav.js';

///////////////////////////////////////////////////////////
// Set current year
function setCurrentYear() {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}

///////////////////////////////////////////////////////////
// Make mobile navigation work
function toggleNav() {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
}
// IFFY function
(function main() {
  checkFlexGap();
  smoothScroll();
  observeHeroSec();
  setCurrentYear();
  toggleNav();
})();
