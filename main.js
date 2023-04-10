/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/popovers/Popovers.js


// Класс принимает 4 аргуманта:
// container - куда будет вставлятся элемент
// buttonText - текст кнопки
// buttonPopoverTitle - Заголовок всплывашки
// buttonPopoverContent - описание всплывашки
class Popovers {
  constructor(container) {
    let buttonText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "___";
    let buttonPopoverTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "___";
    let buttonPopoverContent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "___";
    this.container = container;
    this.buttonText = buttonText;
    this.buttonPopoverTitle = buttonPopoverTitle;
    this.buttonPopoverContent = buttonPopoverContent;
  }
  static get markup() {
    return `
    <div class="button-wraper">
      <button class="button">Кнопочка</button>
      <div class="popover-button" style="top: 15px; left: 27.6875px;">
        <div class="popover-button__title">Всплывашка для кнопочки</div>
        <div class="popover-button__content">Очено много текта для кнопочки</div>
      </div>
    </div>
    `;
  }
  drawUi() {
    const buttonWraper = document.createElement("div");
    buttonWraper.classList.add("button-wraper");
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = this.buttonText;
    const buttonPopover = this.getButtonPopover();
    buttonWraper.appendChild(button);
    buttonWraper.appendChild(buttonPopover);
    this.container.appendChild(buttonWraper);
    this.positionButtonPopover(button, buttonPopover);
    button.addEventListener("click", e => {
      e.preventDefault();
      buttonPopover.classList.toggle("visibility");
    });
  }
  getButtonPopover() {
    const buttonPopover = document.createElement("div");
    buttonPopover.classList.add("popover-button");
    const buttonPopoverTitle = document.createElement("div");
    buttonPopoverTitle.classList.add("popover-button__title");
    buttonPopoverTitle.textContent = "Всплывашка для кнопочки";
    buttonPopoverTitle.textContent = this.buttonPopoverTitle;
    buttonPopover.appendChild(buttonPopoverTitle);
    const buttonPopoverContent = document.createElement("div");
    buttonPopoverContent.classList.add("popover-button__content");
    buttonPopoverContent.textContent = this.buttonPopoverContent;
    buttonPopover.appendChild(buttonPopoverContent);
    return buttonPopover;
  }
  positionButtonPopover(button, buttonPopover) {
    const {
      top,
      left,
      width
    } = button.getBoundingClientRect();
    buttonPopover.style.top = `${top - buttonPopover.getBoundingClientRect().height - 15}px`;
    buttonPopover.style.left = `${left + width / 2 - buttonPopover.getBoundingClientRect().width / 2}px`;
  }
}
;// CONCATENATED MODULE: ./src/app.js

const formConteiner = document.querySelector(".form-conteiner");
const popover = new Popovers(formConteiner, "Кнопочка", "Всплывашка для кнопочки", "Очено много текта для кнопочки");
popover.drawUi();
formConteiner.addEventListener("submit", e => {
  e.preventDefault();
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;