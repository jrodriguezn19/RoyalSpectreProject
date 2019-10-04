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

module.exports = "\r\n<br>\r\n<span class=\"badge badge-pill badge-dark\">Upload Image</span>\r\n<br>\r\n<br>\r\n<form>  \r\n    <div class=\"form-group\">\r\n      <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"MyProjectName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <select class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n        <option>Idea</option>\r\n        <option>Concept</option>\r\n        <option>Pre-Flight</option>\r\n        <option>Launched</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"input-group mb-3\">\r\n      <div class=\"custom-file\">\r\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile03\" aria-describedby=\"inputGroupFileAddon03\" (change)=\"onFileSelected($event)\">\r\n        <label class=\"custom-file-label\" for=\"inputGroupFile03\">Choose Image</label>\r\n      </div>\r\n    </div>\r\n    <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"inputGroupFileAddon03\" (click)=\"postImage()\">Submit</button>\r\n  </form>\r\n  \r\n\r\n\r\n<br>\r\n<br>\r\n<p>----------------Testing Zone------------</p>\r\n\r\n<button (click)=\"pingApi()\">Ping API</button>\r\n\r\n\r\n\r\n<pre *ngIf=\"responseJson\">\r\n<code>{{ responseJson | json }}</code>\r\n</pre>\r\n"

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

module.exports = "<br>\r\n<div class=\"card shadow p-3 mb-5 bg-white rounded\" style=\"margin-bottom: 4%;\">\r\n  <img src=\"../assets/images/4.jpg\" class=\"card-img-top\" alt=\"...\">\r\n  <div class=\"card-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title\">Michael Moore</h5>\r\n        <h5 class=\"text-left\">$120/$500</h5>\r\n        <p class=\"card-text\">30 Participants</p>\r\n       \r\n      </div>\r\n      <div class=\"col text-right\">\r\n        <p class=\"card-text\">Likes by 56 people</p>\r\n        <button href=\"#\" class=\"btn btn-danger mr-1\">Like</button>\r\n        <button href=\"#\" class=\"btn btn-primary\">See Project</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"card shadow p-3 mb-5 bg-white rounded\" style=\"margin-bottom: 4%;\">\r\n    <img src=\"https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/6.jpg?alt=media&token=57f0fd2a-30f4-469c-8371-d30e66a47975\" class=\"card-img-top\" alt=\"...\">\r\n    <div class=\"card-body\">\r\n  \r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h5 class=\"card-title\">Michael Moore</h5>\r\n          <h5 class=\"text-left\">$120/$500</h5>\r\n          <p class=\"card-text\">30 Participants</p>\r\n         \r\n        </div>\r\n        <div class=\"col text-right\">\r\n          <p class=\"card-text\">Likes by 56 people</p>\r\n          <button href=\"#\" class=\"btn btn-danger mr-1\">Like</button>\r\n          <button href=\"#\" class=\"btn btn-primary\">See Project</button>\r\n        </div>\r\n  \r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\r\n    aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    <img src=\"../assets/images/logo.png\" width=\"50\" height=\"50\" alt=\"\">\r\n  </a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <br>\r\n        <a class=\"nav-link\" routerLink=\"/\">Spectre</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <br>\r\n        <a class=\"nav-link\" href=\"#\">Popular</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <br>\r\n        <a class=\"nav-link\" routerLink=\"\" (click)=\"auth.login()\" *ngIf=\"!auth.loggedIn\">Login/Sign up</a>\r\n        <a class=\"nav-link\" routerLink=\"\" (click)=\"auth.logout()\" *ngIf=\"auth.loggedIn\">Logout</a>&nbsp;\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <br>\r\n        <a class=\"nav-link\" routerLink=\"external-api\" *ngIf=\"auth.loggedIn\">Post</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li>\r\n        <a class=\"nav-link\" *ngIf=\"!auth.loggedIn\"> \r\n          <img src=\"../assets/images/logo2.png\" width=\"60\" height=\"45\" alt=\"\">\r\n          You Are Anonymous\r\n        </a>\r\n        <a routerLink=\"profile\" *ngIf=\"auth.loggedIn\">\r\n            <img src=\"../assets/images/logo2.png\" width=\"60\" height=\"45\" alt=\"\">\r\n            Profile Page\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n<!-- LOGIN FORM\r\n-->\r\n\r\n<div class=\"modal fade\" id=\"login\" tabindex=\"-1\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content \">\r\n      <div class=\"modal-header \">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Login</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"login\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email\" class=\"col-form-label\">email:</label>\r\n            <input [(ngModel)]=\"enteredEmail\" [ngModelOptions]=\"{standalone: true}\" type=\"email\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-form-label\">password:</label>\r\n            <input [(ngModel)]=\"enteredPassword\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" class=\"form-control\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" data-toggle=\"modal\" data-target=\"#register\" class=\"btn btn-secondary\"\r\n          data-dismiss=\"modal\">Register</button>\r\n        <span (click)=\"login()\" class=\"btn btn-primary\">Login</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- REGISTER FORM\r\n-->\r\n<div class=\"modal fade\" id=\"register\" tabindex=\"-1\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content \">\r\n      <div class=\"modal-header \">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Register</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form name=\"login\" ng-submit=\"auth.login()\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email\" class=\"col-form-label\">email:</label>\r\n            <input [(ngModel)] = \"enteredEmail\" [ngModelOptions]=\"{standalone: true}\" type=\"email\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-form-label\">password:</label>\r\n            <input [(ngModel)] = \"enteredPassword\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-form-label\">confirm password:</label>\r\n            <input [(ngModel)] = \"confirmPassword\" [ngModelOptions]=\"{standalone: true}\" type=\"password\" class=\"form-control\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <span (click)=\"register()\" class=\"btn btn-primary\">Register</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Jumbotron for profile information-->\r\n\r\n<br>\r\n<div class=\"jumbotron\">\r\n    <h1 class=\"display-4\"> [User profile name!] </h1>\r\n    <p class=\"lead\">This is a short description about the user and the projects they are involved in.</p>\r\n    <hr class=\"my-4\">\r\n    <p>Longer description about the projects, motivations, and ideas the user may have. Some more text to ensure this looks built out for the demonstration. There would usually be better text than this.</p>\r\n    <hr class=\"my-4\">\r\n    <br>\r\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"\" data-toggle=\"modal\" data-target=\"#newproject\">New Project</a>\r\n  </div>\r\n\r\n  <!--Heading for project carousel-->\r\n\r\n  <div>\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n      <span class=\"navbar-brand mb-0 h1\">Current Projects</span>\r\n    </nav>\r\n    <br>\r\n  </div>\r\n\r\n  <!--Carousel for project presentation with 3 items-->\r\n\r\n  <div class=\"bd-example\">\r\n      <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <ol class=\"carousel-indicators\">\r\n          <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\r\n          <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\r\n          <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\r\n        </ol>\r\n        <div class=\"carousel-inner\">\r\n          <div class=\"carousel-item active\">\r\n            <img src=\"../assets/images/3.jpg\" class=\"d-block w-100\" alt=\"Project 1\">\r\n            <div class=\"carousel-caption d-none d-md-block\">\r\n              <h5>First slide label</h5>\r\n              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img src=\"../assets/images/5.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n            <div class=\"carousel-caption d-none d-md-block\">\r\n              <h5>Second slide label</h5>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n            <img src=\"../assets/images/4.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n            <div class=\"carousel-caption d-none d-md-block\">\r\n              <h5>Third slide label</h5>\r\n              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- heading for profile information -->\r\n\r\n  <div>\r\n    <br>\r\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <span class=\"navbar-brand mb-0 h1\">Profile Information</span>\r\n      </nav>\r\n    <br>\r\n    </div>\r\n\r\n    <pre *ngIf=\"auth.userProfile$ | async as profile\">\r\n        {{ profile.sub | json }}\r\n        <input [(ngModel)]=\"id_user\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"  ng-init=\"id_user ='can you see me'\">\r\n    </pre>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"target_fund\" class=\"col-form-label\">Target Fund:</label>\r\n      <input [(ngModel)]=\"target_fund\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"status\" class=\"col-form-label\">Status: </label>\r\n      <input [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      \r\n      <label class=\"col-form-label\">Choose Image</label>\r\n      <input type=\"file\" class=\"form-control\" (change)=\"onFileSelected($event)\">\r\n    </div>\r\n    <span (click)=\"CreateProject()\" class=\"btn btn-primary\">Create Project</span>\r\n   \r\n\r\n    <!-- Modal new project form-->\r\n\r\n    <div class=\"modal fade\" id=\"newproject\" tabindex=\"-1\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content \">\r\n            <div class=\"modal-header \">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">New Project</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form name=\"register\">\r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"project\" class=\"col-form-label\">Project Name:</label>\r\n                  <input [(ngModel)]=\"enteredProjectName\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"summary\" class=\"col-form-label\">Project Summary: </label>\r\n                  <input [(ngModel)]=\"enteredSummary\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"uploadImage\" class=\"col-form-label\">Upload Image URL: </label>\r\n                  <input [(ngModel)]=\"imageUpload\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <span (click)=\"newProject()\" class=\"btn btn-primary\">Create</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project-detail/project-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-detail/project-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card shadow p-3 mb-2 bg-white rounded\" style=\"width: 90%;\">\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <h5 class=\"card-title\">Michael Moore</h5>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <h5 class=\"text-right\">$120/$500</h5>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <a href=\"#\" class=\"btn btn-danger\" style=\"margin-right:3%;\">Like</a>\r\n                <a routerLink=\"project-detail\" class=\"btn btn-success\">Donate</a>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <p class=\"card-text text-right\">30 Participants</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <p class=\"text-right\">Likes by 56 people</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <p class=\"card-text\">Project still in <strong class=\"text-danger\">Concept</strong></p>\r\n\r\n            </div>\r\n            <div class=\"col-6\">\r\n            </div>\r\n        </div>\r\n        <div class=\"progress mt-3\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"15\"\r\n                aria-valuemin=\"0\" aria-valuemax=\"100\">Progress 25%</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card shadow p-3 mb-5 bg-white rounded\" style=\"width: 90%;\">\r\n    <img src=\"../assets/images/4.jpg\" class=\"card-img-top\" alt=\"...\">\r\n    <div class=\"card-body\">\r\n        <p class=\"card-text text-right\"><small class=\"text-muted\">17 August 2019</small></p>\r\n    </div>\r\n</div>\r\n<div class=\"card shadow p-3 mb-5 bg-white rounded\" style=\"width: 90%;\">\r\n    <img src=\"../assets/images/pic2.jpg\" class=\"card-img-top\" alt=\"...\">\r\n    <div class=\"card-body\">\r\n        <p class=\"card-text text-right\"><small class=\"text-muted\">31 July 2019</small></p>\r\n    </div>\r\n</div>\r\n<div class=\"card shadow p-3 mb-5 bg-white rounded\" style=\"width: 90%;\">\r\n    <img src=\"../assets/images/pic3.jpg\" class=\"card-img-top\" alt=\"...\">\r\n    <div class=\"card-body\">\r\n        <p class=\"card-text text-right\"><small class=\"text-muted\">20 June 2019</small></p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-menu/side-menu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-menu/side-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"card mb-3 shadow bg-white rounded\">\r\n    <img src=\"../assets/FundamentalAssets/mostPopular.jpg\" class=\"card-img\" alt=\"...\">\r\n    <div class=\"card-img-overlay\">\r\n        <h5 class=\"card-title text-white align-bottom\">Popular Project</h5>\r\n    </div>\r\n    <div class=\"card-body \">\r\n        <div class=\"list-group-flush\">\r\n\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/1.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"\r\n                    alt=\"...\">\r\n                Antoine Sharp\r\n            </a>\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/3.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"\r\n                    alt=\"...\">\r\n                Gerald Tony\r\n            </a>\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/4.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"\r\n                    alt=\"...\">\r\n                Michael Moore\r\n            </a>\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/6.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"\r\n                    alt=\"...\">\r\n                Alejandra De Laurent\r\n            </a>\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/5.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"\r\n                    alt=\"...\">\r\n                Jonathan Michele\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card mb-3 shadow bg-white rounded\">\r\n    <img src=\"../assets/FundamentalAssets/mostPopular.jpg\" class=\"card-img\" alt=\"...\">\r\n    <div class=\"card-img-overlay\">\r\n        <h5 class=\"card-title text-white align-bottom\">Popular People</h5>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"list-group-flush\">\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/4.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"    alt=\"...\">\r\n                Michael Moore\r\n            </a>\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/5.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"\r\n                    alt=\"...\">\r\n                Jonathan Michele\r\n            </a>\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/1.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"\r\n                    alt=\"...\">\r\n                Antoine Mason\r\n            </a>\r\n\r\n\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/6.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"\r\n                    alt=\"...\">\r\n                Alejandra De Laurent\r\n            </a>\r\n\r\n            <a href=\"#\" class=\"list-group-item list-group-item-action\">\r\n                <img src=\"../assets/images/3.jpg\" class=\"rounded-sm\" style=\"margin-right:5%;\" width=\"14%\" height=\"14%\"\r\n                    alt=\"...\">\r\n                Gerald Tony\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    ping$() {
        return this.http.get('/api/external');
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptor.service */ "./src/app/interceptor.service.ts");
/* harmony import */ var _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./external-api/external-api.component */ "./src/app/external-api/external-api.component.ts");











const routes = [
    { path: '', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"] },
    { path: 'project-detail', component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailComponent"] },
    { path: 'callback', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_5__["CallbackComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'external-api', component: _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_10__["ExternalApiComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _interceptor_service__WEBPACK_IMPORTED_MODULE_9__["InterceptorService"],
                multi: true
            }
        ]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.localAuthSetup();
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/side-menu/side-menu.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/project-detail/project-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./top-menu/top-menu.component */ "./src/app/top-menu/top-menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./external-api/external-api.component */ "./src/app/external-api/external-api.component.ts");

















let AppModule = class AppModule {
};
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
            _external_api_external_api_component__WEBPACK_IMPORTED_MODULE_16__["ExternalApiComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthGuard = class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(loggedIn => {
            if (!loggedIn) {
                this.auth.login(state.url);
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default()({
            domain: "dev-q39f5c5h.au.auth0.com",
            client_id: "AgrNdz4qaWKp5T4CjofcBZcjZrqcwYM0",
            redirect_uri: `${window.location.origin}/callback`,
            audience: "https://profiles-api"
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err)));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.isAuthenticated())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => this.loggedIn = res));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.handleRedirectCallback())));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = null;
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    getUser$(options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getUser(options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(user => this.userProfileSubject$.next(user)));
    }
    localAuthSetup() {
        // This should only be called on app initialization
        // Set up local authentication streams
        const checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((loggedIn) => {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(loggedIn);
        }));
        checkAuth$.subscribe((response) => {
            // If authenticated, response will be user object
            // If not authenticated, response will be 'false'
            this.loggedIn = !!response;
        });
    }
    login(redirectPath = '/') {
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log in
            client.loginWithRedirect({
                redirect_uri: `${window.location.origin}/callback`,
                appState: { target: redirectPath }
            });
        });
    }
    handleAuthCallback() {
        // Only the callback component should call this method
        // Call when app reloads after user logs in with Auth0
        let targetRoute; // Path to redirect to after login processsed
        const authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(cbRes => {
            // Get and set target redirect route from callback results
            targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(() => {
            // Redirect callback complete; get user and login status
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.getUser$(), this.isAuthenticated$);
        }));
        // Subscribe to authentication completion observable
        // Response will be an array of user and login status
        authComplete$.subscribe(([user, loggedIn]) => {
            // Redirect to target route after callback processing
            this.router.navigate([targetRoute]);
        });
    }
    logout() {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log out
            client.logout({
                client_id: "AgrNdz4qaWKp5T4CjofcBZcjZrqcwYM0",
                returnTo: `${window.location.origin}`
            });
        });
    }
    getTokenSilently$(options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getTokenSilently(options))));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



let CallbackComponent = class CallbackComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.handleAuthCallback();
    }
};
CallbackComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-callback',
        template: __webpack_require__(/*! raw-loader!./callback.component.html */ "./node_modules/raw-loader/index.js!./src/app/callback/callback.component.html"),
        styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/callback/callback.component.css")]
    })
], CallbackComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ExternalApiComponent = class ExternalApiComponent {
    constructor(api, http) {
        this.api = api;
        this.http = http;
        // This code is based on an tutorial from the user "Academind" on Youtube.com
        // See https://www.youtube.com/watch?v=YkvqLNcJz3Y
        this.selectedFile = null;
    }
    ngOnInit() {
    }
    postImage() {
        console.log("uploading");
        const fd = new FormData();
        fd.append('Testing', this.selectedFile, this.selectedFile.name);
        this.http.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd).subscribe(res => {
            console.log(res);
            alert("Post Complete");
        });
    }
    pingApi() {
        this.api.ping$().subscribe(res => this.responseJson = res);
    }
    onFileSelected(event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    }
    onUpload() {
        console.log("uploading");
        const fd = new FormData();
        fd.append('Testing', this.selectedFile, this.selectedFile.name);
        this.http.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd).subscribe(res => {
            console.log(res);
            alert("Upload Completed");
        });
    }
};
ExternalApiComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ExternalApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-external-api',
        template: __webpack_require__(/*! raw-loader!./external-api.component.html */ "./node_modules/raw-loader/index.js!./src/app/external-api/external-api.component.html"),
        styles: [__webpack_require__(/*! ./external-api.component.css */ "./src/app/external-api/external-api.component.css")]
    })
], ExternalApiComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let InterceptorService = class InterceptorService {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        return this.auth.getTokenSilently$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(token => {
            const tokenReq = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
            return next.handle(tokenReq);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err)));
    }
};
InterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InterceptorService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



let MainMenuComponent = class MainMenuComponent {
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]({
            offset: 200,
            delay: 0,
            duration: 1000 // values from 0 to 3000, with step 50ms
        });
    }
};
MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-menu',
        template: __webpack_require__(/*! raw-loader!./main-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-menu/main-menu.component.html"),
        styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
    })
], MainMenuComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




let NavBarComponent = class NavBarComponent {
    constructor(auth) {
        this.auth = auth;
        this.enteredEmail = '';
        this.enteredPassword = '';
        this.confirmPassword = '';
    }
    ngOnInit() {
    }
    login() {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:8000/login', { userEmail: this.enteredEmail, userPassword: this.enteredPassword })
            .then(function (response) {
            console.log(response.data['message']);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    register() {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:8000/register', { userEmail: this.enteredEmail, userPassword: this.enteredPassword })
            .then(function (response) {
            console.log(response.data['message']);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




let ProfileComponent = class ProfileComponent {
    constructor(auth) {
        this.auth = auth;
        this.enteredProjectName = '';
        this.enteredSummary = '';
        this.imageUpload = '';
        this.id_user = '';
        this.target_fund = '';
        this.status = '';
        this.fileData = null;
        this.selectedFile = null;
    }
    ngOnInit() {
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
    }
    onFileSelected(event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    }
    newProject() {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:8000/newProject', { projectName: this.enteredProjectName, projectSummary: this.enteredSummary, image: this.imageUpload })
            .then(function (response) {
            console.log(response.data['message']);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    CreateProject() {
        let fileName = 'Hi Ivan.jpg';
        let url = 'https://firebasestorage.googleapis.com/v0/b/royalspectreproject.appspot.com/o/' + fileName + '?alt=media&token=57f0fd2a-30f4-469c-8371-d30e66a47975';
        const fd = new FormData();
        fd.append('Testing', this.selectedFile, fileName);
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('https://us-central1-royalspectreproject.cloudfunctions.net/uploadFile', fd).then(res => {
            console.log(res);
            alert("Post Complete");
        });
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:8000/createProject', { id_user: this.id_user, target_fund: this.target_fund, status: this.status, image_url: url })
            .then(function (response) {
            console.log(response.data['message']);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    })
], ProfileComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectDetailComponent = class ProjectDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-detail',
        template: __webpack_require__(/*! raw-loader!./project-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/project-detail/project-detail.component.html"),
        styles: [__webpack_require__(/*! ./project-detail.component.css */ "./src/app/project-detail/project-detail.component.css")]
    })
], ProjectDetailComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SideMenuComponent = class SideMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-menu',
        template: __webpack_require__(/*! raw-loader!./side-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-menu/side-menu.component.html"),
        styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/side-menu/side-menu.component.css")]
    })
], SideMenuComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopMenuComponent = class TopMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-menu',
        template: __webpack_require__(/*! raw-loader!./top-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-menu/top-menu.component.html"),
        styles: [__webpack_require__(/*! ./top-menu.component.css */ "./src/app/top-menu/top-menu.component.css")]
    })
], TopMenuComponent);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\UTS Mis Archivos Maestria\4th Semester\Advanced Internet Programing\RoyalSpectreProject\spectreFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map