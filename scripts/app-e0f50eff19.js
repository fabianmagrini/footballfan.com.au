/******/!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),s=a(o),r=n(2),i=a(r),l=n(3),c=a(l),u=n(4),d=a(u),f=n(5),p=a(f),v=n(6),h=a(v),g=n(7),b=a(g),m=n(8),$=a(m),C=n(9),y=a(C);angular.module("footballfanApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap"]).constant("toastr",toastr).constant("moment",moment).constant("apiConfig",{apiHost:"https://afternoon-gorge-60512.herokuapp.com/api"}).config(s["default"]).config(i["default"]).run(c["default"]).service("postsService",$["default"]).service("feedsService",b["default"]).controller("MainController",p["default"]).controller("FeedsController",h["default"]).controller("AboutController",d["default"]).directive("acmeNavbar",function(){return new y["default"]})},function(e,t){"use strict";function n(e,t){"ngInject";e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}Object.defineProperty(t,"__esModule",{value:!0}),n.$inject=["$logProvider","toastr"],t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){"ngInject";e.state("home",{url:"/",resolve:{posts:["postsService",function(e){return e.getTopPosts(100).then(function(e){return e})}]},templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("top",{url:"/top",resolve:{posts:["postsService",function(e){return e.getTopPosts(100).then(function(e){return e})}]},templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("new",{url:"/new",resolve:{posts:["postsService",function(e){return e.getNewPosts(100).then(function(e){return e})}]},templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("feeds",{url:"/feeds",resolve:{feeds:["feedsService",function(e){return e.getFeeds().then(function(e){return e})}]},templateUrl:"app/feeds/feeds.html",controller:"FeedsController",controllerAs:"feeds"}).state("feedPosts",{url:"/feeds/:feedName/posts",resolve:{posts:["feedsService","$stateParams",function(e,t){return e.getFeedPosts(t.feedName).then(function(e){return e})}]},templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"AboutController",controllerAs:"about"}),t.otherwise("/")}Object.defineProperty(t,"__esModule",{value:!0}),n.$inject=["$stateProvider","$urlRouterProvider"],t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e){"ngInject";e.debug("runBlock end")}Object.defineProperty(t,"__esModule",{value:!0}),n.$inject=["$log"],t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function o(e){"ngInject";n(this,o),this.$log=e,e.debug("AboutController constructor")};a.$inject=["$log"],t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function o(e,t){"ngInject";n(this,o),this.posts=t,this.$log=e,e.debug("MainController constructor")};a.$inject=["$log","posts"],t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function o(e,t){"ngInject";n(this,o),this.feeds=t,this.$log=e,e.debug("FeedsController constructor")};a.$inject=["$log","feeds"],t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(){function e(t,a,o){"ngInject";n(this,e),this.$http=a,this.$log=t,this.apiHost=o.apiHost}return e.$inject=["$log","$http","apiConfig"],a(e,[{key:"getFeeds",value:function(){var e=this;return this.$http.get(this.apiHost+"/feeds").then(function(e){return e.data})["catch"](function(t){e.$log.error("XHR Failed for getFeeds.\n"+angular.toJson(t.data,!0))})}},{key:"getFeedPosts",value:function(e){var t=this;return this.$http.get(this.apiHost+"/feeds/"+e+"/posts").then(function(e){return e.data})["catch"](function(e){t.$log.error("XHR Failed for getFeedPosts.\n"+angular.toJson(e.data,!0))})}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(){function e(t,a,o){"ngInject";n(this,e),this.$http=a,this.$log=t,this.apiHost=o.apiHost}return e.$inject=["$log","$http","apiConfig"],a(e,[{key:"getTopPosts",value:function(e){var t=this;return e||(e=100),this.$http.get(this.apiHost+"/posts?take="+e).then(function(e){return e.data})["catch"](function(e){t.$log.error("XHR Failed for getPosts.\n"+angular.toJson(e.data,!0))})}},{key:"getNewPosts",value:function(e){var t=this;return e||(e=100),this.$http.get(this.apiHost+"/posts?orderBy=new&take="+e).then(function(e){return e.data})["catch"](function(e){t.$log.error("XHR Failed for getPosts.\n"+angular.toJson(e.data,!0))})}}]),e}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function s(){"ngInject";n(this,s);var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:o,controllerAs:"vm",bindToController:!0};return e},o=function r(e,t,a){"ngInject";n(this,r),this.relativeDate=e(this.creationDate).fromNow(),t.isCollapsed=!0,t.$on("$routeChangeSuccess",function(){t.isCollapsed=!0}),t.getClass=function(e){return"/"===e?"/"===a.path()?"active":"":a.path().substr(0,e.length)===e?"active":""}};o.$inject=["moment","$scope","$location"],t["default"]=a,e.exports=t["default"]}]),angular.module("footballfanApp").run(["$templateCache",function(e){e.put("app/about/about.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="row"><div class="col-sm-12"><h1>About</h1><p>Football Fan presents the essential football news and analysis from around the world on a single page. We are from Sydney, Australia so there may be just a little bias as we bring the latest and greatest from the football we love.</p><h1>Contact</h1><p>Send questions or comments to help@footballfan.com.au</p></div></div></div>'),e.put("app/feeds/feeds.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="row"><div class="col-sm-12 feed" ng-repeat="feed in feeds.feeds"><div class="title truncate-ellipsis"><span><a ui-sref="feedPosts({ feedName: feed.name})">{{ feed.name }}</a></span></div><div class="subtext"><span>{{feed.url}}</span></div><div class="spacer"></div></div></div></div>'),e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="row"><div class="col-sm-12" ng-repeat="post in main.posts"><div class="title truncate-ellipsis"><span><a ng-href="{{post.link}}">{{ post.title }}</a></span></div><div class="subtext"><span>{{post.age}} ago ({{ post.feed }})</span></div><div class="spacer"></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<header role="banner"><nav role="navigation" class="navbar navbar-static-top navbar-inverse"><div class="container-fluid visible-md visible-lg visible-sm"><div class="navbar-header"><a class="navbar-brand" href="/">Football Fan</a></div></div><div class="container-fluid"><div class="navbar-header visible-xs"><a class="navbar-brand" href="/">Football Fan</a> <button type="button" class="navbar-toggle" ng-click="isCollapsed = !isCollapsed"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button></div><div class="collapse navbar-collapse" ng-class="isCollapsed ? \'collapse\' : \'in\'"><ul class="nav navbar-nav"><li ng-class="getClass(\'/\')"><a ui-sref="home"><span class="glyphicon glyphicon-home"></span></a></li><li ng-class="getClass(\'/new\')"><a ui-sref="new">New</a></li><li ng-class="getClass(\'/feeds\')"><a ui-sref="feeds">Feeds</a></li><li ng-class="getClass(\'/about\')"><a ui-sref="about">About</a></li></ul></div></div></nav></header>')}]);