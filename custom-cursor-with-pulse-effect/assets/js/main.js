"use strict";

let cursor = document.querySelector(".cursor");
let cursorListener = function cursorListener(event) {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
};

window.addEventListener("mousemove", cursorListener);
