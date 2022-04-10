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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\nclass Contact{\r\n    constructor(name, phone, email, address, description) {\r\n        this.name = name,\r\n            this.phone = phone,\r\n            this.email = email,\r\n            this.address = address,\r\n            this.description= description\r\n    }\r\n}\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/contact.js?");

/***/ }),

/***/ "./src/contactForm.js":
/*!****************************!*\
  !*** ./src/contactForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderAddContact)\n/* harmony export */ });\nfunction renderAddContact() {\r\n    return `\r\n    <form name = \"addContactForm\" action=\"#\">  \r\n    <input\r\n    id=\"inputName\"\r\n    class=\"form-control\"\r\n    type=\"text\"\r\n    name=\"name\"\r\n    placeholder=\"Type name\"\r\n    />\r\n    <input\r\n    id=\"inputPhone\"\r\n    class=\"form-control\"\r\n    type=\"text\"\r\n    name=\"phone\"\r\n    placeholder=\"Type phone\"\r\n    />\r\n    <input\r\n    id=\"inputEmail\"\r\n    class=\"form-control\"\r\n    type=\"text\"\r\n    name=\"email\"\r\n    placeholder=\"Type email\"\r\n    />\r\n    <input\r\n    id=\"inputAddress\"\r\n    class=\"form-control\"\r\n    type=\"text\"\r\n    name=\"address\"\r\n    placeholder=\"Type address\"\r\n    />\r\n    <textarea\r\n    id=\"inputDesc\"\r\n    class=\"form-control\"\r\n    type=\"text\"\r\n    name=\"description\"\r\n    placeholder=\"Type description\"\r\n    ></textarea>\r\n    <div class=\"buttons\"><button class=\"add-btn\">Add</button></div>\r\n    </form>`\r\n}\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/contactForm.js?");

/***/ }),

/***/ "./src/contactsList.js":
/*!*****************************!*\
  !*** ./src/contactsList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderContacts)\n/* harmony export */ });\nfunction renderContacts(array) {\r\n    return `\r\n        <ul class = 'list'>\r\n        ${array.map(mapToContactRow).join('')}\r\n        </ul>\r\n        <div class = 'contact-view'>No selected contact</div>\r\n    `\r\n    \r\n}\r\n\r\nfunction mapToContactRow(contact, index) {\r\n    return `\r\n    <li class = 'list-item' data-index = ${index}>\r\n        <h2 class = 'title'>${contact.name}</h2>\r\n        <h3 class = 'sub-title'>${contact.phone}</h3>\r\n        <div class = 'delete'></div>\r\n    </li>\r\n    `\r\n}\r\n\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/contactsList.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHome)\n/* harmony export */ });\nfunction renderHome(){\r\n    return`\r\n    <img src=\"./img/contact_us.jpg\" alt =\"homeView\">\r\n    `\r\n}\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/home.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderLogin)\n/* harmony export */ });\nfunction renderLogin() {\r\n    return `\r\n    <form name = \"loginForm\" action=\"#\">\r\n    <input\r\n        id=\"login\"\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n        name=\"login\"\r\n        placeholder=\"Type login\"\r\n    />\r\n    <input\r\n        id=\"password\"\r\n        class=\"form-control\"\r\n        type=\"text\" \r\n        name=\"password\"\r\n        placeholder=\"Type password\"\r\n    />\r\n    <div class=\"buttons\">\r\n    <button id =\"login-btn\" class=\"add-btn\">login</button>\r\n    <button id = \"registration-btn\"class=\"add-btn\">registration</button>\r\n    </div>\r\n    </form>`\r\n}\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/login.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navigationView)\n/* harmony export */ });\nfunction navigationView(isAuth, active, navClickHandler) {\r\n    const div = document.createElement('div');\r\n    div.className = 'nav';\r\n    div.innerHTML = `\r\n    <ul>\r\n    ${isAuth ? `\r\n        <li><a href=\"contacts\" ${active === 'contacts' ? 'class = \"active\"' : \"\"}>Contacts</a></li>\r\n        <li><a  href=\"add\" ${active === 'add' ? 'class = \"active\"' : \"\"}>Add new contact</a></li>\r\n        <li><a href=\"logout\" ${active === 'logout' ? 'class = \"active\"' : \"\"}>logout</a></li>\r\n        `: `<li><a href=\"login\">Login</a></li>`\r\n        }\r\n    </ul>\r\n    `;\r\n    div.onclick = navClickHandler;\r\n    return div\r\n}\r\n\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/navigation.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _contactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactForm */ \"./src/contactForm.js\");\n/* harmony import */ var _contactsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactsList */ \"./src/contactsList.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validation */ \"./src/validation.js\");\n/* harmony import */ var _viewContact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewContact */ \"./src/viewContact.js\");\n\n\n\n\n\n\n\n\n\n\nfunction main() {\n    const root = document.querySelector('#root');\n    const state = {\n        currentUser: null,\n        location: null,\n        contacts:[]\n    }\n    setUp();\n    function setUp() {\n        const currentUser = _store__WEBPACK_IMPORTED_MODULE_6__.default.getCurrentUser();\n        if (!currentUser) {\n            navigation('home')\n            return\n        }\n        state.currentUser = currentUser;\n        state.contacts = _store__WEBPACK_IMPORTED_MODULE_6__.default.getAllContacts(currentUser);\n        navigation('contacts')\n    }\nfunction navigation(path) {\n    if (path !== state.location) {\n        if (path === 'logout') {\n            _store__WEBPACK_IMPORTED_MODULE_6__.default.logout();\n            state.currentUser = null;\n            state.contacts = [];\n            state.location='home'\n        } else {\n            state.location = path;\n            }\n    }\n    app(state.location, state.contacts);\n    }\n    function app(location, contacts) {\n        root.innerHTML = '';\n        root.append(\n            (0,_navigation__WEBPACK_IMPORTED_MODULE_5__.default)(state.currentUser, location, navClickHandler)\n        );\n        root.append(document.createElement('hr'));\n        const content = contentRender(location, contacts);\n        root.append(content)\n}\n    function navClickHandler(event) {\n    event.preventDefault();\n    if (event.target.tagName === 'A') {\n        navigation(event.target.getAttribute('href'))\n        }\n    }\n    \n    function contentRender(location, contacts) {\n        const div = document.createElement('div');\n        switch (location) {\n            case 'logout':\n            case 'home': {\n                div.className = 'home';\n                div.innerHTML = (0,_home__WEBPACK_IMPORTED_MODULE_3__.default)();\n                break\n            }\n            case 'login': {\n                div.className = 'add-contact';\n                div.innerHTML = (0,_login__WEBPACK_IMPORTED_MODULE_4__.default)();\n                div.querySelector('form').onsubmit = loginSubmitHandler;\n                break\n            }\n            case 'contacts': {\n                div.className = 'contacts';\n                div.innerHTML = (0,_contactsList__WEBPACK_IMPORTED_MODULE_2__.default)(contacts);\n                div.querySelector('.list').onclick = contactClickHandler;\n                break\n            }\n            case 'add': {\n                div.className = 'add-contact';\n                div.innerHTML = (0,_contactForm__WEBPACK_IMPORTED_MODULE_1__.default)();\n                div.querySelector('form').onsubmit = addContactHandler;\n                break\n            }\n        }\n        return div;\n    }\n    function loginSubmitHandler(e) {\n        e.preventDefault();\n        const form = e.target;\n        const email = form.login.value;\n        const password = form.password.value;\n        let regSuccess = true;\n        if (email === '' || password === '') {\n            regSuccess = false;\n            showMessage(regSuccess, 'The data is uncomplete')\n        } else {\n            if (e.submitter.id === 'login-btn') {\n                try {\n                    _store__WEBPACK_IMPORTED_MODULE_6__.default.login(email, password)\n                } catch (error) {\n                    regSuccess = false;\n                    showMessage(regSuccess, error.message)\n                } finally {\n                    form.reset()\n                }\n            } if (e.submitter.id === 'registration-btn') {\n                try {\n                    _store__WEBPACK_IMPORTED_MODULE_6__.default.registration(email, password)\n                } catch (error) {\n                    regSuccess = false;\n                    showMessage(regSuccess, error.message)\n                } finally {\n                    form.reset()\n                }\n            }\n        } if(regSuccess) {\n            state.currentUser = email;\n            state.location = 'contacts';\n            state.contacts = _store__WEBPACK_IMPORTED_MODULE_6__.default.getAllContacts(email)\n            app(state.location, state.contacts)\n        }\n    }\n\n\n    function addContactHandler(event) {\n        event.preventDefault();\n        const form = event.target\n        if (!(0,_validation__WEBPACK_IMPORTED_MODULE_7__.default)(form, showMessage)) {\n            const result = _store__WEBPACK_IMPORTED_MODULE_6__.default.addContact(state.currentUser, new _contact__WEBPACK_IMPORTED_MODULE_0__.default(\n                form.name.value,\n                form.phone.value,\n                form.email.value,\n                form.address.value,\n                form.description.value\n            ));\n            if (result) {\n                showMessage(result, form.name.value)\n                state.contacts=_store__WEBPACK_IMPORTED_MODULE_6__.default.getAllContacts(state.currentUser)\n            }\n        }\n        form.reset();\n    }\n    \n    function contactClickHandler(event) {\n        let li = event.target;\n        if (li.classList.contains('delete')) {\n            _store__WEBPACK_IMPORTED_MODULE_6__.default.deleteContact(state.currentUser, li.dataset.index)\n            state.contacts = _store__WEBPACK_IMPORTED_MODULE_6__.default.getAllContacts(state.currentUser);\n            if (state.contacts.length === 0) {\n                localStorage.removeItem(state.currentUser)\n            }\n            app(state.location, state.contacts)\n        } else {\n            if (li.tagName !== 'LI') {\n                li = event.target.parentNode\n            }\n            root.querySelectorAll('li').forEach((item) => item.classList.remove('item-active'));\n            li.classList.add('item-active');\n            const contact = state.contacts[li.dataset.index];\n            document.querySelector('.contact-view').innerHTML=(0,_viewContact__WEBPACK_IMPORTED_MODULE_8__.default)(contact)\n        }\n    }\n    function showMessage(formIsComplete, text){\n    let div = root.querySelector('.alert');\n    if(!div){\n        div = document.createElement('div');\n        root.querySelector('.add-contact').prepend(div)\n    }\n    div.className = `alert ${formIsComplete} ? 'alert-success' : 'alert-danger'};`\n    div.innerHTML = formIsComplete ? `Contact ${text} was added`: text\n}\n}\nmain();\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/script.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store{\r\n    static login(email, password) {\r\n        let users = localStorage.getItem('users');\r\n        if (users !== null) {\r\n            users = JSON.parse(users);\r\n            if (users[email]=== password){\r\n                localStorage.setItem('currentUser', email);\r\n                return true\r\n            }\r\n        }\r\n        throw new Error('Wrong email or password')\r\n    }\r\n    static registration(email, password) {\r\n        const json=localStorage.getItem('users');\r\n        let users = {};\r\n        if (json!== null) {\r\n            users = JSON.parse(json);\r\n            for (let key in users) {\r\n                if (key === email) {\r\n                    throw new Error(`User with ${email} already exists!`)\r\n                }\r\n            }\r\n        }users[email] = password;\r\n            localStorage.setItem('users', JSON.stringify(users));\r\n            localStorage.setItem('currentUser', email);\r\n            return true\r\n    }\r\n    static getCurrentUser() {\r\n        return localStorage.getItem('currentUser')\r\n    }\r\n    static logout() {\r\n        localStorage.removeItem('currentUser');\r\n    }\r\n    static addContact(email, contact) {\r\n        const json = localStorage.getItem(email);\r\n        const contacts = (json !== null) ? JSON.parse(json) : []\r\n        contacts.push(contact)\r\n        localStorage.setItem(email, JSON.stringify(contacts));\r\n        return true\r\n    }\r\n    static deleteContact(email, index) {\r\n        const contacts = JSON.parse(localStorage.getItem(email));\r\n        contacts.splice(index, 1);\r\n        localStorage.setItem(email, JSON.stringify(contacts))\r\n    }\r\n    static getAllContacts(email) {\r\n        const contacts = localStorage.getItem(email);\r\n        return contacts ? JSON.parse(contacts) : []\r\n    }\r\n    static getContactByIndex(email, index) {\r\n        const contacts = this.getAllContacts(email);\r\n        return contacts[index]\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/store.js?");

/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formValidation)\n/* harmony export */ });\nfunction formValidation(form, showMessage) {\r\n    let hasError = false;\r\n    for(let element of form){\r\n        if(element.localName !== 'button'){           \r\n            if(element.value.trim() === ''){\r\n                element.classList.add('is-invalid');\r\n                hasError = true;\r\n            }else{\r\n                element.classList.remove('is-invalid');\r\n            }\r\n        }\r\n    }\r\n    if(hasError){\r\n        showMessage(false, 'All fields should be fill!!!')\r\n    }\r\n    return hasError;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/validation.js?");

/***/ }),

/***/ "./src/viewContact.js":
/*!****************************!*\
  !*** ./src/viewContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactView)\n/* harmony export */ });\nfunction contactView(contact) {\r\n    return `\r\n    <h2>${contact.name}</h2>\r\n    <div class=\"contact-view-row\">\r\n    <img src=\"./img/technology.png\" alt=\"\" />\r\n    <h3>${contact.phone}</h3>\r\n    </div>\r\n    <div class=\"contact-view-row\">\r\n    <img src=\"./img/multimedia.png\" alt=\"\" />\r\n    <h3>${contact.email}</h3>\r\n    </div>\r\n    <div class=\"contact-view-row\">\r\n    <img src=\"./img/buildings.png\" alt=\"\" />\r\n    <h3 \">${contact.address}</h3>\r\n    </div>\r\n    <p>${contact.description}</p>`\r\n}\r\n\r\n\n\n//# sourceURL=webpack://51-02-09-phone-book/./src/viewContact.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;