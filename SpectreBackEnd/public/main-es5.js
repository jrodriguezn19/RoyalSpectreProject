(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"container\" style=\"margin-top: 100px;\">\r\n  <div  class=\"row\">\r\n    <div class=\"col-lg-8 col-md-8 col-sm-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-4 d-block d-md-block d-sm-none\">\r\n      <app-side-menu></app-side-menu>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/callback/callback.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/callback/callback.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<br>\r\n<br>\r\n\r\n<h1> Loading.<span class=\"badge badge-secondary\"> SPECTRE </span></h1>\r\n<div class=\"spinner-border m-5\" role=\"status\">\r\n    <span class=\"sr-only\"></span>\r\n  </div> <div class=\"spinner-border m-5\" role=\"status\">\r\n    <span class=\"sr-only\"></span>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/external-api/external-api.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/external-api/external-api.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<br>\r\n<span class=\"badge badge-pill badge-dark\">Upload Image</span>\r\n<br>\r\n<br>\r\n<form>  \r\n    <div class=\"form-group\">\r\n      <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"MyProjectName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <select class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n        <option>Idea</option>\r\n        <option>Concept</option>\r\n        <option>Pre-Flight</option>\r\n        <option>Launched</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"input-group mb-3\">\r\n      <div class=\"custom-file\">\r\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile03\" aria-describedby=\"inputGroupFileAddon03\" (change)=\"onFileSelected($event)\">\r\n        <label class=\"custom-file-label\" for=\"inputGroupFile03\">Choose Image</label>\r\n      </div>\r\n    </div>\r\n    <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"inputGroupFileAddon03\" (click)=\"postImage()\">Submit</button>\r\n  </form>\r\n  \r\n\r\n\r\n<br>\r\n<br>\r\n<p>--------New method to upload images-----------</p>\r\n\r\n<input type=\"file\" (change)=\"uploadFile($event)\" />\r\n<div>{{ uploadPercent | async }}</div>\r\n<a [href]=\"downloadURL | async\">{{ downloadURL | async }}</a>\r\n\r\n<p>----------------Testing Zone------------</p>\r\n\r\n<button (click)=\"pingApi()\">Ping API</button>\r\n\r\n\r\n\r\n<pre *ngIf=\"responseJson\">\r\n<code>{{ responseJson | json }}</code>\r\n</pre>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet name=\"login\"></router-outlet>\r\n<router-outlet name=\"register\"></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-menu/main-menu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-menu/main-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<!-- Example split danger button -->\r\n<div class=\"btn-group\" float-right>\r\n    <button type=\"button\" class=\"btn btn-primary\">{{sortBy}}</button>\r\n    <button type=\"button\" class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      <span class=\"sr-only\">Toggle Dropdown</span>\r\n    </button>\r\n    <div class=\"dropdown-menu\">\r\n      <a class=\"dropdown-item\" href=\"\" (click)=\"getProjectSortPopular()\">Popular</a>\r\n      <a class=\"dropdown-item\" href=\"\" (click)=\"getProjectSortNewest()\">Newest</a>\r\n    </div>\r\n  </div>\r\n<br>\r\n<br>\r\n<div *ngFor=\"let project of projects\" class=\"card shadow p-3 mb-5 bg-white rounded\" style=\"margin-bottom: 4%;\">\r\n  <img src=\"{{project.image_url}}\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title\">{{project.user_name}}</h5>\r\n        <h5 class=\"text-left\">{{project.current_fund}}/{{project.target_fund}}</h5>\r\n        <p class=\"card-text\"></p>\r\n       \r\n      </div>\r\n      <div class=\"col text-right\">\r\n        <p class=\"card-text\">Popularity {{project.score_comment_react}}</p>\r\n        <button href=\"#\" class=\"btn btn-danger mr-1\">Like</button>\r\n        <button [routerLink]=\"['/project-detail', project._id]\" class=\"btn btn-primary\">See Project</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\r\n    aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    <img src=\"../assets/images/logo.png\" width=\"50\" height=\"50\" alt=\"\">\r\n  </a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <br>\r\n        <a class=\"nav-link\" routerLink=\"/\">Spectre</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <br>\r\n        <a class=\"nav-link\" href=\"#\">Popular</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <br>\r\n        <a class=\"nav-link\" routerLink=\"\" (click)=\"auth.login()\" *ngIf=\"!auth.loggedIn\">Login / Sign Up</a>\r\n        <a class=\"nav-link\" routerLink=\"\" (click)=\"auth.logout()\" *ngIf=\"auth.loggedIn\">Logout</a>&nbsp;\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <br>\r\n        \r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li>\r\n        \r\n      </li>\r\n    </ul>\r\n    <a class=\"nav-link text-white\" *ngIf=\"!auth.loggedIn\"> \r\n        <img src=\"../assets/images/logo2.png\" width=\"60\" height=\"45\" alt=\"\">\r\n        You Are Anonymous\r\n      </a>\r\n      <a class=\"form-inline my-2 my-lg-0\" *ngIf=\"auth.loggedIn\">\r\n        <div *ngIf=\"auth.userProfile$ | async as profile\">\r\n          <a class=\"btn btn-light\" [routerLink]=\"['/profile', profile.sub]\">\r\n          <img class=\"mr-2\" src=\"{{ profile.picture }}\" width=\"50\" alt=\"...\">\r\n          <strong>{{profile.nickname}}</strong>\r\n        </a>\r\n        </div>\r\n      </a>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n<!-- LOGIN FORM\r\n-->\r\n\r\n<div class=\"modal fade\" id=\"login\" tabindex=\"-1\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content \">\r\n      <div class=\"modal-header \">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Login</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"login\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email\" class=\"col-form-label\">email:</label>\r\n            <input [(ngModel)]=\"enteredEmail\" [ngModelOptions]=\"{standalone: true}\" type=\"email\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-form-label\">password:</label>\r\n            <input [(ngModel)]=\"enteredPassword\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" class=\"form-control\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" data-toggle=\"modal\" data-target=\"#register\" class=\"btn btn-secondary\"\r\n          data-dismiss=\"modal\">Register</button>\r\n        <span (click)=\"login()\" class=\"btn btn-primary\">Login</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- REGISTER FORM\r\n-->\r\n<div class=\"modal fade\" id=\"register\" tabindex=\"-1\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content \">\r\n      <div class=\"modal-header \">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Register</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"login\" ng-submit=\"auth.login()\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email\" class=\"col-form-label\">email:</label>\r\n            <input [(ngModel)] = \"enteredEmail\" [ngModelOptions]=\"{standalone: true}\" type=\"email\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-form-label\">password:</label>\r\n            <input [(ngModel)] = \"enteredPassword\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-form-label\">confirm password:</label>\r\n            <input [(ngModel)] = \"confirmPassword\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" class=\"form-control\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <span (click)=\"register()\" class=\"btn btn-primary\">Register</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile-anonymous/profile-anonymous.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile-anonymous/profile-anonymous.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Jumbotron for profile information-->\r\n\r\n<br>\r\n<br>\r\n<div >\r\n<div class=\"card mb-3\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-md-4\">\r\n      <img src=\"{{users.image_url}}\" class=\"card-img\" alt=\"...\">\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{users.user_name}}</h5>\r\n        <p class=\"card-text\"></p>\r\n          \r\n        <p class=\"card-text\"><small class=\"text-muted\">{{users.score_comment_react}}</small></p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n  <!--Heading for project carousel-->\r\n\r\n  <div>\r\n      \r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n      <span class=\"navbar-brand mb-0 h1\">Current Projects</span>\r\n      \r\n    </nav>\r\n    <br>\r\n    <a class=\"btn btn-primary btn-lg float-right\" routerLink=\"\" data-toggle=\"modal\" data-target=\"#newproject\">New Project</a>\r\n    <br>\r\n  </div>\r\n  \r\n  <br>\r\n  <br>\r\n  <div *ngFor=\"let project of projects\" class=\"card shadow p-3 mb-5 bg-white rounded\" style=\"margin-bottom: 4%;\">\r\n    <img src=\"{{project.image_url}}\" class=\"card-img-top\" alt=\"...\">\r\n    <div class=\"card-body\">\r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h5 class=\"card-title\">{{project.user_name}}</h5>\r\n          <h5 class=\"text-left\">{{project.current_fund}}/{{project.target_fund}}</h5>\r\n        </div>\r\n        <div class=\"col text-right\">\r\n          <p class=\"card-text\">Popularity {{project.score_comment_react}}</p>\r\n          </div>\r\n  \r\n      </div>\r\n       \r\n          <button  [routerLink]=\"['/project-detail', project._id]\" class=\" float-right btn btn-primary\">See Project</button>\r\n    </div>\r\n  </div>\r\n  \r\n  <!--Carousel for project presentation with 3 items-->\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"modal fade\" id=\"newproject\" tabindex=\"-1\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content \">\r\n        <div class=\"modal-header \">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Project</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form name=\"register\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"project\" class=\"col-form-label\">Target Fund</label>\r\n              <input [(ngModel)]=\"target_fund\" type=\"number\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"project\" class=\"col-form-label\">Status</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\" id=\"exampleFormControlSelect1\">\r\n                  <option>Idea</option>\r\n                  <option>Concept</option>\r\n                  <option>Pre-Flight</option>\r\n                  <option>Launched</option>\r\n                </select>\r\n              </div>\r\n              <label for=\"project\" class=\"col-form-label\">Choose Image</label>\r\n              <div class=\"input-group mb-3\">\r\n                  \r\n                <div class=\"custom-file\">\r\n                  <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile03\" (change)=\"onFileSelected($event)\" aria-describedby=\"inputGroupFileAddon03\">\r\n                  <label class=\"custom-file-label\" for=\"inputGroupFile03\">Choosen Image</label>\r\n                </div>\r\n              </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <span data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"CreateProject(profile.sub, profile.nickname, profile.picture)\" data-toggle=\"modal\"\r\n          data-target=\"#loadingScreen\" class=\"btn btn-primary\">Create</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"loadingScreen\" aria-hidden=\"true\">\r\n    <div class=\"d-flex justify-content-center\" style=\"margin-top: 20%;\">\r\n        <div class=\"spinner-grow text-primary\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-success\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-danger\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-warning\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-info\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1 class=\"text-white\">Creating</h1>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"deletingScreen\" aria-hidden=\"true\">\r\n    <div class=\"d-flex justify-content-center\" style=\"margin-top: 20%;\">\r\n        <div class=\"spinner-grow text-primary\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-success\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-danger\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-warning\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-info\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1 class=\"text-white\">Deleting</h1>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Jumbotron for profile information-->\r\n\r\n<br>\r\n<br>\r\n<div *ngIf=\"auth.userProfile$ | async as profile\">\r\n<div class=\"card mb-3\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-md-4\">\r\n      <img src=\"{{profile.picture}}\" class=\"card-img\" alt=\"...\">\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{profile.nickname}}</h5>\r\n        <p class=\"card-text\"></p>\r\n          \r\n        <p class=\"card-text\"><small class=\"text-muted\">{{profile.updated_at}}</small></p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n  <!--Heading for project carousel-->\r\n\r\n  <div>\r\n      \r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n      <span class=\"navbar-brand mb-0 h1\">Current Projects</span>\r\n      \r\n    </nav>\r\n    <br>\r\n    <a class=\"btn btn-primary btn-lg float-right\" routerLink=\"\" data-toggle=\"modal\" data-target=\"#newproject\">New Project</a>\r\n    <br>\r\n  </div>\r\n  \r\n  <br>\r\n  <br>\r\n  <div *ngFor=\"let project of projects\" class=\"card shadow p-3 mb-5 bg-white rounded\" style=\"margin-bottom: 4%;\">\r\n    <img src=\"{{project.image_url}}\" class=\"card-img-top\" alt=\"...\">\r\n    <div class=\"card-body\">\r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h5 class=\"card-title\">{{project.user_name}}</h5>\r\n          <h5 class=\"text-left\">{{project.current_fund}}/{{project.target_fund}}</h5>\r\n          \r\n         \r\n        </div>\r\n        <div class=\"col text-right\">\r\n          <p class=\"card-text\">Popularity {{project.score_comment_react}}</p>\r\n          </div>\r\n  \r\n      </div>\r\n      <button href=\"#\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Option</button>\r\n          <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" >Edit</a>\r\n              <a class=\"dropdown-item\" (click)=\"DeleteProject(project._id)\">Delete</a>\r\n          </div>\r\n          <button [routerLink]=\"['/project-detail', project._id]\" class=\" float-right btn btn-primary\">See Project</button>\r\n    </div>\r\n  </div>\r\n  \r\n  <!--Carousel for project presentation with 3 items-->\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"modal fade\" id=\"newproject\" tabindex=\"-1\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content \">\r\n        <div class=\"modal-header \">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Project</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form name=\"register\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"project\" class=\"col-form-label\">Target Fund</label>\r\n              <input [(ngModel)]=\"target_fund\" type=\"number\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"project\" class=\"col-form-label\">Status</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\" id=\"exampleFormControlSelect1\">\r\n                  <option>Idea</option>\r\n                  <option>Concept</option>\r\n                  <option>Pre-Flight</option>\r\n                  <option>Launched</option>\r\n                </select>\r\n              </div>\r\n              <label for=\"project\" class=\"col-form-label\">Choose Image</label>\r\n              <div class=\"input-group mb-3\">\r\n                  \r\n                <div class=\"custom-file\">\r\n                  <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile03\" (change)=\"onFileSelected($event)\" aria-describedby=\"inputGroupFileAddon03\">\r\n                  <label class=\"custom-file-label\" for=\"inputGroupFile03\">Choosen Image</label>\r\n                </div>\r\n              </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <span data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"CreateProject(profile.sub, profile.nickname, profile.picture)\" data-toggle=\"modal\"\r\n          data-target=\"#loadingScreen\" class=\"btn btn-primary\">Create</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"loadingScreen\" aria-hidden=\"true\">\r\n    <div class=\"d-flex justify-content-center\" style=\"margin-top: 20%;\">\r\n        <div class=\"spinner-grow text-primary\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-success\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-danger\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-warning\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-info\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1 class=\"text-white\">Creating</h1>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"deletingScreen\" aria-hidden=\"true\">\r\n    <div class=\"d-flex justify-content-center\" style=\"margin-top: 20%;\">\r\n        <div class=\"spinner-grow text-primary\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-success\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-danger\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-warning\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-info\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1 class=\"text-white\">Deleting</h1>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project-detail/project-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-detail/project-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div *ngFor=\"let project of project\" class=\"card shadow p-3 mb-2 bg-white rounded\" style=\"width: 90%;\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <h5 class=\"card-title\">{{project.user_name}}</h5>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <h5 class=\"text-right\">${{project.current_fund}}/${{project.target_fund}}</h5>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <a href=\"#\" class=\"btn btn-danger\" style=\"margin-right:3%;\">Like</a>\r\n                <a routerLink=\"project-detail\" class=\"btn btn-success\">Donate</a>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <p class=\"card-text text-right\">Project Popularity <strong\r\n                        class=\"text-success text-right\">{{project.score_comment_react}}</strong></p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <p class=\"card-text text-right\">Project still in <strong class=\"text-danger text-right\">Concept</strong>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngFor=\"let project of project\" class=\"card shadow p-3 mb-5 bg-white rounded\" style=\"width: 90%;\">\r\n    <img src=\"{{project.image_url}}\" class=\"card-img-top\" alt=\"...\">\r\n    <div class=\"card-body\">\r\n        <p class=\"card-text text-right\"><small class=\"text-muted\"></small></p>\r\n    </div>\r\n    <ul *ngFor=\"let comment of comments\" class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">\r\n            <div class=\"media\">\r\n                <img src=\"{{comment.profile_picture}}\" width=\"10%\" class=\"mr-3\" alt=\"...\">\r\n                <div class=\"media-body\">\r\n                    <h5>{{comment.user_name}}</h5>\r\n                    <small class=\"mt-0\">{{comment.date}}</small>\r\n                </div>\r\n                <div *ngIf=\"auth.userProfile$ | async as profile\">\r\n                    <div *ngIf=\"profile.sub === comment.id_user\">\r\n                        <button type=\"button\" data-toggle=\"modal\" data-target=\"#deletingScreen\" (click)=\"DeleteComment(comment._id)\" class=\"btn btn-outline-danger\">Delete</button>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <br>\r\n            <img src=\"{{comment.image_url}}\" style=\"width: 50%;\">\r\n    </ul>\r\n    <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">\r\n            <form>\r\n                <div class=\"custom-file\">\r\n\r\n                    <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"onFileSelected($event)\">\r\n                    <label class=\"custom-file-label\" for=\"customFile\">To comment, choose image</label>\r\n                </div>\r\n                <div *ngIf=\"auth.userProfile$ | async as profile; else elseButton\">\r\n                    <button type=\"submit\" (click)=\"SendComment(profile.sub, profile.nickname, profile.picture)\"\r\n                        class=\"btn btn-primary mt-2\" data-toggle=\"modal\" data-target=\"#loadingScreen\">Submit</button>\r\n\r\n                    <button class=\"mt-2 float-right btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Quick React\r\n                    </button>\r\n                    <div class=\"dropdown-menu\">\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact(profile.sub, profile.nickname, profile.picture, 1)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react1.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Love\r\n                        </a>\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact(profile.sub, profile.nickname, profile.picture, 2)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react2.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Like\r\n                        </a>\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact(profile.sub, profile.nickname, profile.picture, 3)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react3.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Neutral\r\n                        </a>\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact(profile.sub, profile.nickname, profile.picture, 4)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react4.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Dislike\r\n                        </a>\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact(profile.sub, profile.nickname, profile.picture, 5)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react5.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Heart Break\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <ng-template #elseButton>\r\n                    <button type=\"submit\"\r\n                        (click)=\"SendComment('Anonymous', 'Anonymous', 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/30816086.jpeg?alt=media&token=4877fc72-ee74-41e7-924c-645fde030bc2')\"\r\n                        class=\"btn btn-primary mt-2\" data-toggle=\"modal\" data-target=\"#loadingScreen\">Submit</button>\r\n                    <button class=\"mt-2 float-right btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Quick React\r\n                    </button>\r\n                    <div class=\"dropdown-menu\">\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact('Anonymous', 'Anonymous', 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/30816086.jpeg?alt=media&token=4877fc72-ee74-41e7-924c-645fde030bc2', 1)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react1.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Love\r\n                        </a>\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact('Anonymous', 'Anonymous', 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/30816086.jpeg?alt=media&token=4877fc72-ee74-41e7-924c-645fde030bc2', 2)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react2.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Like\r\n                        </a>\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact('Anonymous', 'Anonymous', 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/30816086.jpeg?alt=media&token=4877fc72-ee74-41e7-924c-645fde030bc2', 3)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react3.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Neutral\r\n                        </a>\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact('Anonymous', 'Anonymous', 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/30816086.jpeg?alt=media&token=4877fc72-ee74-41e7-924c-645fde030bc2', 4)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react4.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Dislike\r\n                        </a>\r\n                        <a data-toggle=\"modal\" data-target=\"#loadingScreen\"\r\n                            (click)=\"SendReact('Anonymous', 'Anonymous', 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/30816086.jpeg?alt=media&token=4877fc72-ee74-41e7-924c-645fde030bc2', 5)\"\r\n                            class=\"dropdown-item\">\r\n                            <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react5.svg?alt=media&token=3de75289-30ef-4bf7-a2bb-adf682d9d53b\"\r\n                                class=\"rounded-sm\" width=\"30%\" alt=\"...\">\r\n                            Heart Break\r\n                        </a>\r\n                    </div>\r\n                </ng-template>\r\n\r\n            </form>\r\n        </li>\r\n    </ul>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"loadingScreen\" aria-hidden=\"true\">\r\n    <div class=\"d-flex justify-content-center\" style=\"margin-top: 20%;\">\r\n        <div class=\"spinner-grow text-primary\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-success\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-danger\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-warning\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div class=\"spinner-grow text-info\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1 class=\"text-white\">Sending</h1>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"deletingScreen\" aria-hidden=\"true\">\r\n        <div class=\"d-flex justify-content-center\" style=\"margin-top: 20%;\">\r\n            <div class=\"spinner-grow text-primary\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n            <div class=\"spinner-grow text-success\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n            <div class=\"spinner-grow text-danger\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n            <div class=\"spinner-grow text-warning\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n            <div class=\"spinner-grow text-info\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-center\">\r\n            <h1 class=\"text-white\">Deleting</h1>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-menu/side-menu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-menu/side-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"card mb-3 shadow bg-white rounded\">\r\n    <img src=\"../assets/FundamentalAssets/mostPopular.jpg\" class=\"card-img\" alt=\"...\">\r\n    <div class=\"card-img-overlay\">\r\n        <h5 class=\"card-title text-white align-bottom\">Popular Project</h5>\r\n    </div>\r\n    <div class=\"card-body \">\r\n        <div *ngFor=\"let project of projects\" class=\"list-group-flush\">\r\n\r\n            <a class=\"list-group-item list-group-item-action\" [routerLink]=\"['/project-detail', project._id]\">\r\n                <img src=\"{{project.image_url}}\" class=\"rounded-sm\" width=\"100%\" height=\"14%\"\r\n                    alt=\"...\">\r\n            <br>\r\n            \r\n                <strong class=\"text-right\">{{project.user_name}}</strong>\r\n            </a>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card mb-3 shadow bg-white rounded\">\r\n    <img src=\"../assets/FundamentalAssets/mostPopular.jpg\" class=\"card-img\" alt=\"...\">\r\n    <div class=\"card-img-overlay\">\r\n        <h5 class=\"card-title text-white align-bottom\">Popular People</h5>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div *ngFor=\"let user of users\" class=\"list-group-flush\">\r\n            <a [routerLink]=\"['/profileAnonymous', user.id_user]\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"{{user.image_url}}\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"    alt=\"...\">\r\n                \r\n                {{user.user_name}} ({{user.score_comment_react}})\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-menu/top-menu.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-menu/top-menu.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>top-menu works!</p>\r\n"

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.ping$ = function () {
        return this.http.get('/api/external');
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_anonymous_profile_anonymous_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-anonymous/profile-anonymous.component */ "./src/app/profile-anonymous/profile-anonymous.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptor.service */ "./src/app/interceptor.service.ts");
/* harmony import */ var _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./external-api/external-api.component */ "./src/app/external-api/external-api.component.ts");












var routes = [
    { path: '', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"] },
    { path: 'project-detail/:id', component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailComponent"] },
    { path: 'callback', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_5__["CallbackComponent"] },
    { path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'profileAnonymous/:id', component: _profile_anonymous_profile_anonymous_component__WEBPACK_IMPORTED_MODULE_7__["ProfileAnonymousComponent"] },
    { path: 'external-api', component: _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_11__["ExternalApiComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_service__WEBPACK_IMPORTED_MODULE_10__["InterceptorService"],
                    multi: true
                }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background: #ff0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.auth.localAuthSetup();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/side-menu/side-menu.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./top-menu/top-menu.component */ "./src/app/top-menu/top-menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./external-api/external-api.component */ "./src/app/external-api/external-api.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _profile_anonymous_profile_anonymous_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile-anonymous/profile-anonymous.component */ "./src/app/profile-anonymous/profile-anonymous.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"],
                _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_11__["TopMenuComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                _callback_callback_component__WEBPACK_IMPORTED_MODULE_15__["CallbackComponent"],
                _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_16__["ExternalApiComponent"],
                _profile_anonymous_profile_anonymous_component__WEBPACK_IMPORTED_MODULE_20__["ProfileAnonymousComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"] // imports firebase/storage only needed for storage features
            ],
            providers: [
                { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["StorageBucket"], useValue: 'gs://royalspectreproject.appspot.com/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth) {
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                _this.auth.login(state.url);
            }
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default()({
            domain: "dev-q39f5c5h.au.auth0.com",
            client_id: "AgrNdz4qaWKp5T4CjofcBZcjZrqcwYM0",
            redirect_uri: window.location.origin + "/callback",
            audience: "https://profiles-api"
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.isAuthenticated()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.loggedIn = res; }));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.handleRedirectCallback()); }));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = null;
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    AuthService.prototype.getUser$ = function (options) {
        var _this = this;
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getUser(options)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return _this.userProfileSubject$.next(user); }));
    };
    AuthService.prototype.localAuthSetup = function () {
        var _this = this;
        // This should only be called on app initialization
        // Set up local authentication streams
        var checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (loggedIn) {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return _this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(loggedIn);
        }));
        checkAuth$.subscribe(function (response) {
            // If authenticated, response will be user object
            // If not authenticated, response will be 'false'
            _this.loggedIn = !!response;
        });
    };
    AuthService.prototype.login = function (redirectPath) {
        if (redirectPath === void 0) { redirectPath = '/'; }
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe(function (client) {
            // Call method to log in
            client.loginWithRedirect({
                redirect_uri: window.location.origin + "/callback",
                appState: { target: redirectPath }
            });
        });
    };
    AuthService.prototype.handleAuthCallback = function () {
        var _this = this;
        // Only the callback component should call this method
        // Call when app reloads after user logs in with Auth0
        var targetRoute; // Path to redirect to after login processsed
        var authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cbRes) {
            // Get and set target redirect route from callback results
            targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function () {
            // Redirect callback complete; get user and login status
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_this.getUser$(), _this.isAuthenticated$);
        }));
        // Subscribe to authentication completion observable
        // Response will be an array of user and login status
        authComplete$.subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), user = _b[0], loggedIn = _b[1];
            // Redirect to target route after callback processing
            _this.router.navigate([targetRoute]);
        });
    };
    AuthService.prototype.logout = function () {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe(function (client) {
            // Call method to log out
            client.logout({
                client_id: "AgrNdz4qaWKp5T4CjofcBZcjZrqcwYM0",
                returnTo: "" + window.location.origin
            });
        });
    };
    AuthService.prototype.getTokenSilently$ = function (options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getTokenSilently(options)); }));
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/callback/callback.component.css":
/*!*************************************************!*\
  !*** ./src/app/callback/callback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/*!************************************************!*\
  !*** ./src/app/callback/callback.component.ts ***!
  \************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(auth) {
        this.auth = auth;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        this.auth.handleAuthCallback();
    };
    CallbackComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! raw-loader!./callback.component.html */ "./node_modules/raw-loader/index.js!./src/app/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/callback/callback.component.css")]
        })
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/external-api/external-api.component.css":
/*!*********************************************************!*\
  !*** ./src/app/external-api/external-api.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dGVybmFsLWFwaS9leHRlcm5hbC1hcGkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/external-api/external-api.component.ts":
/*!********************************************************!*\
  !*** ./src/app/external-api/external-api.component.ts ***!
  \********************************************************/
/*! exports provided: ExternalApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalApiComponent", function() { return ExternalApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




//Libraries for Firebase Storage use


var ExternalApiComponent = /** @class */ (function () {
    function ExternalApiComponent(api, http, storage) {
        this.api = api;
        this.http = http;
        this.storage = storage;
        this.selectedFile = null;
    }
    ExternalApiComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = file.name;
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        this.uploadPercent = task.percentageChanges();
        // get notified when the download URL is available
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.downloadURL = fileRef.getDownloadURL(); }))
            .subscribe();
    };
    ExternalApiComponent.prototype.ngOnInit = function () {
    };
    ExternalApiComponent.prototype.pingApi = function () {
        var _this = this;
        this.api.ping$().subscribe(function (res) { return _this.responseJson = res; });
    };
    /**
     * The code below was the old method to upload images to Firebase that we can delete once the new fucntion is working properly
     *
     *
     *
     */
    ExternalApiComponent.prototype.postImage = function () {
        console.log("uploading");
        var fd = new FormData();
        fd.append('Testing', this.selectedFile, this.selectedFile.name);
        this.http.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                console.log("Upload Progress: " + Math.round(event.loaded / event.total * 100) + "%");
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response) {
                console.log(event);
                alert('Post Uploaded');
            }
        });
    };
    ExternalApiComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    };
    ExternalApiComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
    ]; };
    ExternalApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-external-api',
            template: __webpack_require__(/*! raw-loader!./external-api.component.html */ "./node_modules/raw-loader/index.js!./src/app/external-api/external-api.component.html"),
            styles: [__webpack_require__(/*! ./external-api.component.css */ "./src/app/external-api/external-api.component.css")]
        })
    ], ExternalApiComponent);
    return ExternalApiComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptor.service.ts":
/*!****************************************!*\
  !*** ./src/app/interceptor.service.ts ***!
  \****************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var InterceptorService = /** @class */ (function () {
    function InterceptorService(auth) {
        this.auth = auth;
    }
    InterceptorService.prototype.intercept = function (req, next) {
        return this.auth.getTokenSilently$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (token) {
            var tokenReq = req.clone({
                setHeaders: { Authorization: "Bearer " + token }
            });
            return next.handle(tokenReq);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
    };
    InterceptorService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
        this.projects = [];
        this.projectsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.sortBy = 'newest';
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]({
            offset: 200,
            delay: 0,
            duration: 1000 // values from 0 to 3000, with step 50ms
        });
        //localStorage.removeItem('sortBy');
        this.sortBy = localStorage.getItem('paramSorting');
        if (this.sortBy === 'newest') {
            this.getProjectSortNewest();
        }
        else {
            this.getProjectSortPopular();
        }
    };
    MainMenuComponent.prototype.getProjectSortNewest = function () {
        var _this = this;
        localStorage.setItem('paramSorting', 'newest');
        //alert("Setup to " + localStorage.getItem('sortBy'));
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/projectNewest')
            .then(function (projectData) {
            _this.projects = projectData.data.projects;
            _this.projectsUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.projects));
            console.log(_this.projects);
        });
    };
    MainMenuComponent.prototype.getProjectSortPopular = function () {
        var _this = this;
        localStorage.setItem('paramSorting', 'popular');
        //alert("Setup to " + localStorage.getItem('sortBy'));
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/projectPopular')
            .then(function (projectData) {
            _this.projects = projectData.data.projects;
            _this.projectsUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.projects));
            console.log(_this.projects);
        });
    };
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! raw-loader!./main-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        })
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(auth) {
        this.auth = auth;
        this.enteredEmail = '';
        this.enteredPassword = '';
        this.confirmPassword = '';
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.login = function () {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/login', { userEmail: this.enteredEmail, userPassword: this.enteredPassword })
            .then(function (response) {
            console.log(response.data['message']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    NavBarComponent.prototype.register = function () {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/register', { userEmail: this.enteredEmail, userPassword: this.enteredPassword })
            .then(function (response) {
            console.log(response.data['message']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    NavBarComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/profile-anonymous/profile-anonymous.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/profile-anonymous/profile-anonymous.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtYW5vbnltb3VzL3Byb2ZpbGUtYW5vbnltb3VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/profile-anonymous/profile-anonymous.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/profile-anonymous/profile-anonymous.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileAnonymousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAnonymousComponent", function() { return ProfileAnonymousComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ProfileAnonymousComponent = /** @class */ (function () {
    function ProfileAnonymousComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.projects = [];
        this.projectsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.users = [];
        this.userUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ProfileAnonymousComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        //#1 start
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function () {
            _this.getProject();
            _this.getUser();
        });
    };
    ProfileAnonymousComponent.prototype.getProject = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/projectUser', { id_user: this.id })
            .then(function (projectData) {
            _this.projects = projectData.data.projects;
            _this.projectsUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.projects));
            console.log(_this.projects);
        });
    };
    ProfileAnonymousComponent.prototype.getUser = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/detailUser', { id_user: this.id })
            .then(function (userData) {
            _this.users = userData.data;
            //this.userUpdated.next([...this.users]);
            console.log(userData.data);
        });
    };
    ProfileAnonymousComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProfileAnonymousComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-anonymous',
            template: __webpack_require__(/*! raw-loader!./profile-anonymous.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile-anonymous/profile-anonymous.component.html"),
            styles: [__webpack_require__(/*! ./profile-anonymous.component.css */ "./src/app/profile-anonymous/profile-anonymous.component.css")]
        })
    ], ProfileAnonymousComponent);
    return ProfileAnonymousComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activatedRoute, auth) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.projects = [];
        this.projectsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.enteredProjectName = '';
        this.enteredSummary = '';
        this.imageUpload = '';
        this.target_fund = '';
        this.fileData = null;
        this.selectedFile = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/projectUser', { id_user: this.id })
            .then(function (projectData) {
            _this.projects = projectData.data.projects;
            _this.projectsUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.projects));
            console.log(_this.projects);
        });
    };
    ProfileComponent.prototype.fileProgress = function (fileInput) {
        this.fileData = fileInput.target.files[0];
    };
    ProfileComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    };
    ProfileComponent.prototype.CreateProject = function (id_user, user_name, photo_profile) {
        var fileName = 'uio';
        var ext = this.selectedFile.name.split('.')[1];
        var fd = new FormData();
        var that = this;
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/imageName')
            .then(function (response) {
            fileName = response.data + '.' + ext;
            var url = 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/' + fileName + '?alt=media&token=57f0fd2a-30f4-469c-8371-d30e66a47975';
            fd.append('Testing', that.selectedFile, fileName);
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd).then(function (res) {
                console.log(res);
                location.reload();
            });
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/createProject', { user_name: user_name, photo_profile: photo_profile, id_user: id_user, target_fund: that.target_fund, status: that.status, image_url: url })
                .then(function (response) {
                console.log(response.data['message']);
            })
                .catch(function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.DeleteProject = function (id_project) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/deleteProject', { id_project: id_project })
            .then(function (document) {
            alert(document.data.message);
            location.reload();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/project-detail/project-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtZGV0YWlsL3Byb2plY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/project-detail/project-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-detail/project-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(activatedRoute, auth, router) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.router = router;
        this.projects = [];
        this.comments = [];
        this.commentsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.projectsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.imageUpload = '';
        this.fileData = null;
        this.selectedFile = null;
    }
    //#1 This code by Simon McClive on Medium for reload the same url
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //#1 start
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function () {
            _this.getDetailProject();
            _this.getComment();
        });
        //#1 finish
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        this.getDetailProject();
        this.getComment();
    };
    ProjectDetailComponent.prototype.getDetailProject = function () {
        var that = this;
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/selectedProject', { id_project: this.id })
            .then(function (response) {
            console.log(response.data['message']);
            //this.project = response.data.project;
            that.project = response.data.project;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    //sendComment
    ProjectDetailComponent.prototype.getComment = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/retrieveComments', { id_project: this.id })
            .then(function (commentData) {
            console.log(commentData.data['message']);
            _this.comments = commentData.data.comments;
            _this.commentsUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.comments));
            console.log(_this.comments);
        });
    };
    ProjectDetailComponent.prototype.fileProgress = function (fileInput) {
        this.fileData = fileInput.target.files[0];
    };
    ProjectDetailComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    };
    ProjectDetailComponent.prototype.DeleteComment = function (id_comment) {
        //deleteComment
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/deleteComment', { id_comment: id_comment })
            .then(function (response) {
            console.log(response.data['message']);
            location.reload();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProjectDetailComponent.prototype.SendReact = function (id_user, user_name, profile_picture, react) {
        var url = 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/react' + react + '.svg?alt=media&token=57f0fd2a-30f4-469c-8371-d30e66a47975';
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/sendComment', { id_user: id_user, typeReact: react, id_project: this.project[0]._id, user_name: user_name, image_url: url, profile_picture: profile_picture })
            .then(function (response) {
            console.log(response.data['message']);
            location.reload();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProjectDetailComponent.prototype.SendComment = function (id_user, user_name, profile_picture) {
        //alert(Object.values(this.project)[0]);
        console.log(this.project[0]._id);
        var fileName = 'file';
        var ext = this.selectedFile.name.split('.')[1];
        var fd = new FormData();
        var that = this;
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/imageName')
            .then(function (response) {
            fileName = response.data + '.' + ext;
            var url = 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/' + fileName + '?alt=media&token=57f0fd2a-30f4-469c-8371-d30e66a47975';
            fd.append('Testing', that.selectedFile, fileName);
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd).then(function (res) {
                console.log(res);
                location.reload();
            });
            axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/sendComment', { id_user: id_user, typeReact: 0, id_project: that.project[0]._id, user_name: user_name, image_url: url, profile_picture: profile_picture })
                .then(function (response) {
                console.log(response.data['message']);
            })
                .catch(function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProjectDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProjectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! raw-loader!./project-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.css */ "./src/app/project-detail/project-detail.component.css")]
        })
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/side-menu/side-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/side-menu/side-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.ts ***!
  \**************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var SideMenuComponent = /** @class */ (function () {
    //sortBy : String = "newest";
    function SideMenuComponent() {
        this.projects = [];
        this.projectsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.users = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        //localStorage.setItem('sortBy', 'popular');
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/projectPopularSideMenu')
            .then(function (projectData) {
            _this.projects = projectData.data.projects;
            _this.projectsUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.projects));
            console.log(_this.projects);
        });
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://ec2-13-59-247-94.us-east-2.compute.amazonaws.com/peoplePopularSideMenu')
            .then(function (userData) {
            _this.users = userData.data.users;
            _this.usersUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.users));
            console.log(_this.users);
        });
    };
    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! raw-loader!./side-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/side-menu/side-menu.component.css")]
        })
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/top-menu/top-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/top-menu/top-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.ts ***!
  \************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent() {
    }
    TopMenuComponent.prototype.ngOnInit = function () {
    };
    TopMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-menu',
            template: __webpack_require__(/*! raw-loader!./top-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-menu/top-menu.component.html"),
            styles: [__webpack_require__(/*! ./top-menu.component.css */ "./src/app/top-menu/top-menu.component.css")]
        })
    ], TopMenuComponent);
    return TopMenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDd0Q1Sbl5v8aV_I6KSKwVrYDRW7AQi1d4',
        authDomain: 'intellifarm-bce42.firebaseapp.com',
        databaseURL: 'https://intellifarm-bce42.firebaseio.com',
        projectId: 'intellifarm-bce42',
        storageBucket: 'intellifarm-bce42.appspot.com',
        messagingSenderId: '796518612029',
        appId: '1:796518612029:web:be9f21c43c2d70cf3f3e54'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\UTS Mis Archivos Maestria\4th Semester\Advanced Internet Programing\RoyalSpectreProject\SpectreFrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map