/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.css */ \"./index.css\");\n\nvar tasks = [{\n  id: \"1138465078061\",\n  completed: false,\n  text: \"Закончить проект\"\n}, {\n  id: \"1138465078062\",\n  completed: false,\n  text: \"Сходить на тренировку\"\n}, {\n  id: \"1138465078063\",\n  completed: false,\n  text: \"Погулять с собакой\"\n}];\n\nvar createTaskItem = function createTaskItem(taskId, taskText) {\n  var taskItem = document.createElement(\"div\");\n  taskItem.className = \"task-item\";\n  taskItem.dataset.taskId = taskId;\n  var mainContainer = document.createElement(\"div\");\n  mainContainer.className = \"task-item__main-container\";\n  taskItem.append(mainContainer);\n  var mainContent = document.createElement(\"div\");\n  mainContent.className = \"task-item__main-content\";\n  mainContainer.append(mainContent);\n  var checkboxForm = document.createElement(\"form\");\n  checkboxForm.className = \"checkbox-form\";\n  mainContent.append(checkboxForm);\n  var formInput = document.createElement(\"input\");\n  formInput.type = \"checkbox\";\n  formInput.className = \"checkbox-form__checkbox\";\n  var inputId = \"task-\".concat(taskId);\n  formInput.id = inputId;\n  checkboxForm.append(formInput);\n  var labelCheckbox = document.createElement(\"label\");\n  labelCheckbox.htmlFor = inputId;\n  checkboxForm.append(labelCheckbox);\n  var textOftasks = document.createElement(\"span\");\n  textOftasks.className = \"task-item__text\";\n  textOftasks.innerText = taskText;\n  mainContent.append(textOftasks);\n  var deleteButton = document.createElement(\"button\");\n  deleteButton.className = \"task-item__delete-button default-button delete-button\";\n  deleteButton.dataset.deleteTaskId = taskId;\n  deleteButton.innerText = \"Удалить\";\n  mainContainer.append(deleteButton);\n  return taskItem;\n};\n\nvar createModalOverlay = function createModalOverlay() {\n  var modalOverlay = document.createElement(\"div\");\n  modalOverlay.className = \"modal-overlay\";\n  var deleteModal = document.createElement(\"div\");\n  deleteModal.className = \"delete-modal\";\n  modalOverlay.append(deleteModal);\n  var deleteModalQuestion = document.createElement(\"h3\");\n  deleteModalQuestion.className = \"delete-modal__question\";\n  deleteModalQuestion.innerText = \"Вы действительно хотите удалить эту задачу?\";\n  deleteModal.append(deleteModalQuestion);\n  var deleteModalButtons = document.createElement(\"div\");\n  deleteModalButtons.className = \"delete-modal__buttons\";\n  deleteModal.append(deleteModalButtons);\n  var cancelButton = document.createElement(\"button\");\n  cancelButton.className = \"delete-modal__button delete-modal__cancel-button\";\n  cancelButton.innerText = \"Отмена\";\n  deleteModalButtons.append(cancelButton);\n  var deleteButton = document.createElement(\"button\");\n  deleteButton.className = \"delete-modal__button delete-modal__confirm-button\";\n  deleteButton.innerText = \"Удалить\";\n  deleteModalButtons.append(deleteButton);\n  tasksList.prepend(modalOverlay);\n  return modalOverlay;\n};\n\nvar errorMessage = function errorMessage(errorText) {\n  var errorMessageBlock = document.createElement(\"span\");\n  errorMessageBlock.className = \"error-message-block\";\n  errorMessageBlock.textContent = errorText;\n  createTaskBlock.append(errorMessageBlock);\n};\n\nvar tasksList = document.querySelector(\".tasks-list\");\ntasks.forEach(function (task) {\n  //получаем такски из массива\n  var taskItem = createTaskItem(task.id, task.text);\n  tasksList.append(taskItem);\n});\nvar createTaskBlock = document.querySelector(\".create-task-block\");\ncreateTaskBlock.addEventListener(\"submit\", function (event) {\n  var errorMessageBlock = document.querySelector(\".error-message-block\");\n\n  if (errorMessageBlock) {\n    //если блок с ошибкой есть, удаляем его\n    errorMessageBlock.remove();\n  }\n\n  event.preventDefault(); // убираем дефолтный функционал обработчика событий\n\n  var id = new Date().getTime(); // генерируем уникальный id через мс\n\n  var target = event.target;\n  var inputValue = target.taskName.value.trim(); //ловим текст в инпуте\n\n  var isTaskExists = tasks.some(function (task) {\n    return task.text === inputValue;\n  }); // если есть совпадение в тасках, возвращаем его\n\n  if (!inputValue) {\n    errorMessage(\"Название задачи не должно быть пустым\");\n  } else if (isTaskExists) {\n    errorMessage(\"Задача с таким названием уже существует.\");\n  } else if (inputValue && !isTaskExists) {\n    var newTask = {\n      id: \"\".concat(id),\n      completed: false,\n      text: inputValue\n    };\n    tasks.push(newTask);\n    var taskItem = createTaskItem(id, inputValue);\n    tasksList.append(taskItem);\n  }\n});\ntasksList.addEventListener(\"click\", function (event) {\n  var target = event.target;\n  var isButton = target.closest(\".task-item__delete-button\");\n\n  if (isButton) {\n    //при клике на кнопку Удалить всплывает модальное окно проверки\n    createModalOverlay();\n    var modalOverlay = document.querySelector(\".modal-overlay\");\n    modalOverlay.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      var target = event.target;\n      var isButtonCansel = target.closest(\".delete-modal__cancel-button\");\n      var isButtonDelete = target.closest(\".delete-modal__confirm-button\");\n\n      if (isButtonCansel) {\n        //если отмена, то модальноеокно удаляем\n        modalOverlay.remove();\n      } else if (isButtonDelete) {\n        var id = isButton.dataset.deleteTaskId;\n        document.querySelector(\"[data-task-id=\\\"\".concat(id, \"\\\"]\")).remove();\n        var indexTask = tasks.findIndex(function (task) {\n          return task.id === id;\n        });\n        tasks.splice(indexTask, 1);\n        modalOverlay.remove();\n      }\n    });\n  }\n});\nvar isDark = false;\nwindow.addEventListener(\"keydown\", function (event) {\n  var key = event.key;\n\n  if (key === \"Tab\") {\n    event.preventDefault();\n    isDark = !isDark;\n\n    if (isDark) {\n      document.body.style.background = \"#24292E\";\n      var taskItem = document.querySelectorAll(\".task-item\");\n      taskItem.forEach(function (taskItem) {\n        taskItem.style.color = \"#ffffff\";\n      });\n      var buttonHTML = document.querySelectorAll(\"button\");\n      buttonHTML.forEach(function (button) {\n        button.style.border = \"1px solid #ffffff\";\n      });\n    } else {\n      document.body.style.background = \"initial\";\n\n      var _taskItem = document.querySelectorAll(\".task-item\");\n\n      _taskItem.forEach(function (taskItem) {\n        taskItem.style.color = \"initial\";\n      });\n\n      var _buttonHTML = document.querySelectorAll(\"button\");\n\n      _buttonHTML.forEach(function (button) {\n        button.style.border = \"none\";\n      });\n    }\n  }\n\n  return;\n});\n\n//# sourceURL=webpack://dom/./src/app.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./index.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./index.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n    --primary-color: #546792;\\r\\n    --text-color: #ffffff;\\r\\n    --delete-button-background: #FF0000;\\r\\n    --checkbox-checked-background: #546791;\\r\\n    --checkbox-border-color: #000;\\r\\n    --checkbox-text-color: #fff;\\r\\n    --default-border-color: #000;\\r\\n    --error-color: #FF0000;\\r\\n    --modal-overlay: rgb(84, 103, 145, 0.6);\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    font-size: 10px;\\r\\n    line-height: 10px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n#tasks {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\n.tasks__wrapper {\\r\\n    max-width: 70%;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.tasks__wrapper_hidden {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.main-navigation {\\r\\n    display: flex;\\r\\n    justify-content: space-evenly;\\r\\n    background-color: var(--primary-color);\\r\\n}\\r\\n\\r\\n.main-navigation__button-item {\\r\\n    position: relative;\\r\\n    background-color: var(--primary-color);\\r\\n    color: var(--text-color);\\r\\n    padding: 25px;\\r\\n    text-decoration: none;\\r\\n    font-size: 2rem;\\r\\n    line-height: 2.5rem;\\r\\n}\\r\\n\\r\\n.main-navigation__button-item_selected {\\r\\n    box-shadow: inset 0 0 0 4px #fff;\\r\\n}\\r\\n\\r\\n.create-task-block {\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.create-task-block__input {\\r\\n    border: 2px solid var(--primary-color);\\r\\n    border-radius: 5px;\\r\\n    color: var(--primary-color);\\r\\n  \\r\\n    font-size: 2rem;\\r\\n    line-height: 2.5rem;\\r\\n    height: 40px;\\r\\n    width: 50%;\\r\\n    padding: 0;\\r\\n    margin-bottom: 40px;\\r\\n}\\r\\n\\r\\n.create-task-block__button {\\r\\n    height: 44px;\\r\\n}\\r\\n\\r\\n.create-task-block__button,\\r\\n.task-item__delete-button {\\r\\n    cursor: pointer;\\r\\n\\r\\n    background-color: var(--primary-color);\\r\\n    color: var(--text-color);\\r\\n    border: none;\\r\\n    padding: 5px 20px;\\r\\n    border-radius: 5px;\\r\\n  \\r\\n    font-size: 1.5rem;\\r\\n    line-height: 2.5rem;\\r\\n}\\r\\n\\r\\n.task-item {\\r\\n    width: 100%;\\r\\n    font-size: 1.5rem;\\r\\n    line-height: 2.5rem;\\r\\n    border-bottom: 2px solid var(--primary-color);\\r\\n    padding: 10px 0;\\r\\n\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.task-item__main-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.task-item__main-content {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.task-item__delete-button {\\r\\n    transition: 0.2s ease;\\r\\n}\\r\\n\\r\\n.task-item__delete-button {\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.task-item__delete-button:hover {\\r\\n    background-color: var(--delete-button-background);\\r\\n}\\r\\n\\r\\n.task-item__text {\\r\\n    font-size: 2rem;\\r\\n    line-height: 2.5rem;\\r\\n}\\r\\n\\r\\n.checkbox-form__checkbox + label {\\r\\n    display: block;\\r\\n    margin: 0.2em;\\r\\n    cursor: pointer;\\r\\n    padding: 0.2em;\\r\\n}\\r\\n  \\r\\n.checkbox-form__checkbox  {\\r\\n    display: none;\\r\\n}\\r\\n  \\r\\n.checkbox-form__checkbox + label:before {\\r\\n    content: \\\"\\\\2714\\\";\\r\\n    border: 0.1em solid var(--checkbox-border-color);\\r\\n    border-radius: 0.2em;\\r\\n    display: inline-block;\\r\\n    width: 1em;\\r\\n    height: 1em;\\r\\n    padding-left: 0.2em;\\r\\n    padding-bottom: 0.3em;\\r\\n    margin-right: 0.2em;\\r\\n    vertical-align: bottom;\\r\\n    color: transparent;\\r\\n    transition: .2s;\\r\\n}\\r\\n\\r\\n.checkbox-form__checkbox + label:active:before {\\r\\n    transform: scale(0);\\r\\n}\\r\\n\\r\\n.checkbox-form__checkbox:checked + label:before {\\r\\n    background-color: var(--checkbox-checked-background);\\r\\n    border-color: var(--checkbox-checked-background);\\r\\n    color: var(--checkbox-text-color);\\r\\n}\\r\\n\\r\\n.checkbox-form__checkbox:disabled + label:before {\\r\\n    transform: scale(1);\\r\\n}\\r\\n\\r\\n.checkbox-form__checkbox:checked:disabled + label:before {\\r\\n    transform: scale(1);\\r\\n    background-color: var(--checkbox-checked-background);\\r\\n    border-color: var(--checkbox-checked-background);\\r\\n}\\r\\n\\r\\n.tooltip {\\r\\n    position: absolute;\\r\\n    left: -50%;\\r\\n    bottom: calc(100% + 5px);\\r\\n    margin: auto 0;\\r\\n\\r\\n    background-color: var(--primary-color);\\r\\n    color: var(--text-color);\\r\\n    font-size: 1.5rem;\\r\\n    line-height: 2rem;\\r\\n    width: 200px;\\r\\n    border: 2px solid var(--default-border-color);\\r\\n}\\r\\n\\r\\n.error-message-block {\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    bottom: 0;\\r\\n\\r\\n    font-size: 1.5rem;\\r\\n    line-height: 2rem;\\r\\n    color: var(--error-color);\\r\\n}\\r\\n\\r\\n.modal-overlay {\\r\\n    position: fixed;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n\\r\\n    background-color: var(--modal-overlay);\\r\\n    z-index: 1000;\\r\\n    transition: 0.2s ease;\\r\\n    opacity: 1;\\r\\n}\\r\\n\\r\\n.modal-overlay_hidden {\\r\\n    top: 100%;\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n.delete-modal {\\r\\n    position: relative;\\r\\n    top: 0;\\r\\n    width: 50%;\\r\\n    height: fit-content;\\r\\n    padding: 15px 25px;\\r\\n\\r\\n    border: 2px solid var(--text-color);\\r\\n    border-radius: 5px;\\r\\n    background-color: var(--primary-color);\\r\\n    transition: 0.3s ease-in;\\r\\n}\\r\\n\\r\\n.delete-modal__question {\\r\\n    font-size: 2rem;\\r\\n    line-height: 2.5rem;\\r\\n    color: var(--text-color);\\r\\n    margin: 0;\\r\\n    margin-bottom: 30px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.delete-modal__buttons {\\r\\n    display: flex;\\r\\n    justify-content: space-evenly;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.delete-modal__button {\\r\\n    cursor: pointer;\\r\\n\\r\\n    font-size: 2rem;\\r\\n    line-height: 2.5rem;\\r\\n\\r\\n    border: 1px solid var(--text-color);\\r\\n    border-radius: 5px;\\r\\n\\r\\n    background: none;\\r\\n    color: var(--text-color);\\r\\n    padding: 5px 10px;\\r\\n\\r\\n    transition: 0.3s ease;\\r\\n}\\r\\n\\r\\n.delete-modal__button:hover {\\r\\n    box-shadow: 0 0 0 1px var(--text-color);\\r\\n}\\r\\n\\r\\n.delete-modal__confirm-button {\\r\\n    background-color: var(--delete-button-background);\\r\\n    border: 1px solid var(--delete-button-background);\\r\\n}\\r\\n  \", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dom/./index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dom/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dom/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dom/./index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dom/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dom/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dom/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dom/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dom/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dom/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;