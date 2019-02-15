"use strict"
define("ember-quickstart/app",["exports","ember-quickstart/resolver","ember-load-initializers","ember-quickstart/config/environment"],function(e,t,r,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,r.default)(i,a.default.modulePrefix)
var n=i
e.default=n}),define("ember-quickstart/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({actions:{showPerson:function(e){alert(e)}}})
e.default=t}),define("ember-quickstart/helpers/app-version",["exports","ember-quickstart/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function a(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,n=a.versionOnly||a.hideSha,o=a.shaOnly||a.hideVersion,l=null
return n&&(a.showExtended&&(l=i.match(r.versionExtendedRegExp)),l||(l=i.match(r.versionRegExp))),o&&(l=i.match(r.shaRegExp)),l?l[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
var i=Ember.Helper.helper(a)
e.default=i}),define("ember-quickstart/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-quickstart/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-quickstart/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-quickstart/config/environment"],function(e,t,r){var a,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(a=r.default.APP.name,i=r.default.APP.version)
var n={name:"App Version",initialize:(0,t.default)(a,i)}
e.default=n}),define("ember-quickstart/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("ember-quickstart/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("ember-quickstart/initializers/export-application-global",["exports","ember-quickstart/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var a,i=t.default.exportApplicationGlobal
a="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),r[a]||(r[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var a={name:"export-application-global",initialize:r}
e.default=a}),define("ember-quickstart/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("ember-quickstart/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-quickstart/router",["exports","ember-quickstart/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){this.route("scientists"),this.route("programmer")})
var a=r
e.default=a}),define("ember-quickstart/routes/programmer",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return["Marie Curie","Mae Jemison","Albert Hofmann"]}})
e.default=t}),define("ember-quickstart/routes/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return["Marie Curie","Mae Jemison","Albert Hofmann"]}})
e.default=t}),define("ember-quickstart/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-quickstart/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"tdg7NzHs",block:'{"symbols":[],"statements":[[7,"h1"],[9],[0," People Tracker "],[10],[0,"\\n\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-quickstart/templates/application.hbs"}})
e.default=t}),define("ember-quickstart/templates/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"vRIwVadm",block:'{"symbols":["person","&default"],"statements":[[7,"h2"],[9],[1,[22,0,["title"]],false],[10],[0,"\\n\\n"],[7,"ul"],[9],[0,"\\n"],[4,"each",[[22,0,["people"]]],null,{"statements":[[0,"    "],[7,"li"],[9],[1,[22,1,[]],false],[3,"action",[[22,0,[]],"showPerson",[22,1,[]]]],[10],[0,"\\n"]],"parameters":[1]},null],[10],[0,"\\n\\n"],[14,2],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-quickstart/templates/components/people-list.hbs"}})
e.default=t}),define("ember-quickstart/templates/programmer",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"H/podz9G",block:'{"symbols":[],"statements":[[0,"\\n"],[5,"people-list",[],[["@title","@people"],["List of Programmers",[22,0,["model"]]]]],[0,"\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-quickstart/templates/programmer.hbs"}})
e.default=t}),define("ember-quickstart/templates/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"VGAHA9r2",block:'{"symbols":[],"statements":[[5,"people-list",[],[["@title","@people"],["List of Scientists",[22,0,["model"]]]]],[0,"\\n\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-quickstart/templates/scientists.hbs"}})
e.default=t}),define("ember-quickstart/config/environment",[],function(){try{var e="ember-quickstart/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(unescape(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-quickstart/app").default.create({name:"ember-quickstart",version:"0.0.0+a588c47c"})
