jstestdriver.RESPONSE_TYPES={FILE_LOAD_RESULT:"FILE_LOAD_RESULT",REGISTER_RESULT:"REGISTER_RESULT",TEST_RESULT:"TEST_RESULT",TEST_QUERY_RESULT:"TEST_QUERY_RESULT",RESET_RESULT:"RESET_RESULT",COMMAND_RESULT:"COMMAND_RESULT",BROWSER_READY:"BROWSER_READY"};jstestdriver.Response=function(c,a,b,d){this.type=c;this.response=a;this.browser=b;if(d){this.start=true}};jstestdriver.CommandResponse=function(a,b){this.done=a;this.response=b};jstestdriver.BrowserInfo=function(a){this.id=a};jstestdriver.BrowserLog=function(d,c,b,a){this.level=d;this.source=c;this.message=b;this.browser=a};function expectAsserts(a){jstestdriver.expectedAssertCount=a}function fail(b){var a=new Error(b);a.name="AssertError";throw a}function isBoolean_(a){if(typeof(a)!="boolean"){this.fail("Not a boolean: "+this.prettyPrintEntity_(a))}}function prettyPrintEntity_(a){var b=JSON.stringify(a);if(!b){if(typeof a==="function"){return"[function]"}return"["+typeof a+"]"}return b}function argsWithOptionalMsg_(b,e){var a=[];for(var d=0;d<b.length;d++){a.push(b[d])}var c=e-1;if(b.length<c){this.fail("expected at least "+c+" arguments, got "+b.length)}else{if(b.length==e){a[0]+=" "}else{a.unshift("")}}return a}function assertTrue(b,c){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;isBoolean_(a[1]);if(a[1]!=true){this.fail(a[0]+"expected true but was "+this.prettyPrintEntity_(a[1]))}return true}function assertFalse(b,c){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;isBoolean_(a[1]);if(a[1]!=false){this.fail(a[0]+"expected false but was "+this.prettyPrintEntity_(a[1]))}return true}function assertEquals(c,b,d){var a=this.argsWithOptionalMsg_(arguments,3);jstestdriver.assertCount++;c=a[0];b=a[1];d=a[2];if(!compare_(b,d)){this.fail(c+"expected "+this.prettyPrintEntity_(b)+" but was "+this.prettyPrintEntity_(d)+"")}return true}function compare_(d,e){var b=null;if(d!==undefined&&typeof(d)=="object"){var c=0;var a=0;if(d instanceof [].constructor){c=e.length}else{for(b in e){if(!e.hasOwnProperty(b)){continue}++c}}for(b in d){if(!d.hasOwnProperty(b)){continue}if(!compare_(d[b],e[b])){return false}++a}if(a!==c){return false}return true}if(e!=d){return false}return true}function assertNotEquals(d,b,f){try{assertEquals.apply(this,arguments)}catch(c){if(c.name=="AssertError"){return true}throw c}var a=this.argsWithOptionalMsg_(arguments,3);this.fail(a[0]+"expected "+this.prettyPrintEntity_(a[1])+" not to be equal to "+this.prettyPrintEntity_(a[2]))}function assertSame(c,b,d){var a=this.argsWithOptionalMsg_(arguments,3);jstestdriver.assertCount++;if(!isSame_(a[2],a[1])){this.fail(a[0]+"expected "+this.prettyPrintEntity_(a[1])+" but was "+this.prettyPrintEntity_(a[2]))}return true}function assertNotSame(c,b,d){var a=this.argsWithOptionalMsg_(arguments,3);jstestdriver.assertCount++;if(isSame_(a[2],a[1])){this.fail(a[0]+"expected not same as "+this.prettyPrintEntity_(a[1])+" but was "+this.prettyPrintEntity_(a[2]))}return true}function isSame_(a,b){return b===a}function assertNull(b,c){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;if(a[1]!==null){this.fail(a[0]+"expected null but was "+this.prettyPrintEntity_(a[1]))}return true}function assertNotNull(b,c){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;if(a[1]===null){this.fail(a[0]+"expected not null but was null")}return true}function assertUndefined(b,c){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;if(typeof a[1]!="undefined"){this.fail(a[2]+"expected undefined but was "+this.prettyPrintEntity_(a[1]))}return true}function assertNotUndefined(b,c){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;if(typeof a[1]=="undefined"){this.fail(a[0]+"expected not undefined but was undefined")}return true}function assertNaN(b,c){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;if(!isNaN(a[1])){this.fail(a[0]+"expected to be NaN but was "+a[1])}return true}function assertNotNaN(b,c){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;if(isNaN(a[1])){this.fail(a[0]+"expected not to be NaN")}return true}function assertException(c,d,a){if(arguments.length==1){d=c;c=""}else{if(arguments.length==2){if(typeof d!="function"){a=d;d=c;c=""}else{c+=" "}}else{c+=" "}}jstestdriver.assertCount++;try{d()}catch(b){if(b.name=="AssertError"){throw b}if(a&&b.name!=a){this.fail(c+"expected to throw "+a+" but threw "+b.name)}return true}this.fail(c+"expected to throw exception")}function assertNoException(c,d){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;try{a[1]()}catch(b){fail(a[0]+"expected not to throw exception, but threw "+b.name+" ("+b.message+")")}}function assertArray(b,c){var a=this.argsWithOptionalMsg_(arguments,2);jstestdriver.assertCount++;if(!jstestdriver.jQuery.isArray(a[1])){fail(a[0]+"expected to be array, but was "+this.prettyPrintEntity_(a[1]))}}function assertTypeOf(d,b,c){var a=this.argsWithOptionalMsg_(arguments,3);jstestdriver.assertCount++;var e=typeof a[2];if(e!=a[1]){this.fail(a[0]+"expected to be "+a[1]+" but was "+e)}return true}function assertBoolean(b,c){var a=this.argsWithOptionalMsg_(arguments,2);return assertTypeOf(a[0],"boolean",a[1])}function assertFunction(b,c){var a=this.argsWithOptionalMsg_(arguments,2);return assertTypeOf(a[0],"function",a[1])}function assertObject(b,c){var a=this.argsWithOptionalMsg_(arguments,2);return assertTypeOf(a[0],"object",a[1])}function assertNumber(b,c){var a=this.argsWithOptionalMsg_(arguments,2);return assertTypeOf(a[0],"number",a[1])}function assertString(b,c){var a=this.argsWithOptionalMsg_(arguments,2);return assertTypeOf(a[0],"string",a[1])}function assertMatch(d,c,e){var a=this.argsWithOptionalMsg_(arguments,3);var b=typeof a[2]=="undefined";jstestdriver.assertCount++;if(b||!a[1].test(a[2])){e=(b?undefined:this.prettyPrintEntity_(a[2]));this.fail(a[0]+"expected "+e+" to match "+a[1])}return true}function assertNoMatch(c,b,d){var a=this.argsWithOptionalMsg_(arguments,3);jstestdriver.assertCount++;if(a[1].test(a[2])){this.fail(a[0]+"expected "+this.prettyPrintEntity_(a[2])+" not to match "+a[1])}return true}function assertTagName(d,c,b){var a=this.argsWithOptionalMsg_(arguments,3);var e=a[2]&&a[2].tagName;if(String(e).toUpperCase()!=a[1].toUpperCase()){this.fail(a[0]+"expected tagName to be "+a[1]+" but was "+e)}return true}function assertClassName(g,c,b){var a=this.argsWithOptionalMsg_(arguments,3);var h=a[2]&&a[2].className;var d=new RegExp("(^|\\s)"+a[1]+"(\\s|$)");try{this.assertMatch(a[0],d,h)}catch(f){h=this.prettyPrintEntity_(h);this.fail(a[0]+"expected class name to include "+this.prettyPrintEntity_(a[1])+" but was "+h)}return true}function assertElementId(c,e,b){var a=this.argsWithOptionalMsg_(arguments,3);var d=a[2]&&a[2].id;jstestdriver.assertCount++;if(d!==a[1]){this.fail(a[0]+"expected id to be "+a[1]+" but was "+d)}return true}function assertInstanceOf(e,c,f){var a=this.argsWithOptionalMsg_(arguments,3);jstestdriver.assertCount++;if(!(Object(a[2]) instanceof a[1])){var d=a[1]&&a[1].name||a[1];var b=this.prettyPrintEntity_(a[2]);this.fail(a[0]+"expected "+b+" to be instance of "+d)}return true}function assertNotInstanceOf(e,c,f){var a=this.argsWithOptionalMsg_(arguments,3);jstestdriver.assertCount++;if(Object(a[2]) instanceof a[1]){var d=a[1]&&a[1].name||a[1];var b=this.prettyPrintEntity_(a[2]);this.fail(a[0]+"expected "+b+" not to be instance of "+d)}return true}var assert=assertTrue;jstestdriver.StreamingService=function(b,a,c){this.url_=b;this.now_=a;this.post_=c;this.activeResponses_={};this.completeFinalResponse=null};jstestdriver.StreamingService.prototype.stream=function(a,b){this.streamResponse(a,false,b)};jstestdriver.StreamingService.prototype.streamResponse=function(b,a,d){var c=new jstestdriver.CommandResponse(a,b);if(!a&&b!=null){c.responseId=this.now_();this.activeResponses_[c.responseId]=c}this.post_(this.url_,c,d,"text/plain")};jstestdriver.StreamingService.prototype.streamAcknowledged=function(a){for(var b=0;a[b];b++){if(this.activeResponses_[a[b]]){this.activeResponses_[a[b]]=null;delete this.activeResponses_[a[b]]}}if(this.completeFinalResponse){this.completeFinalResponse()}};jstestdriver.StreamingService.prototype.close=function(b,c){var a=this;this.completeFinalResponse=function(){if(a.hasOpenResponses()){a.streamResponse(null,false,c)}else{a.completeFinalResponse=null;a.activeResponses_={};a.streamResponse(b,true,c)}};this.completeFinalResponse()};jstestdriver.StreamingService.prototype.hasOpenResponses=function(){for(var a in this.activeResponses_){if(this.activeResponses_.hasOwnProperty(a)){return true}}return false};jstestdriver.FileSource=function(b,a,c){this.fileSrc=b;this.timestamp=a;this.basePath=c};jstestdriver.FileResult=function(a,c,b){this.file=a;this.success=c;this.message=b};jstestdriver.formatString=function(){var d=arguments.length;var a=[];var g=new RegExp("%[sdifo]","g");var e=0;while(e<d){var k=arguments[e];var h=g.exec(k);if(!h){var j=k;if(typeof j=="object"){j=JSON.stringify(j)}if(a.length>0){a.push(" ")}a.push(j);e++}else{var c=1;var b=e+1;var f=k;do{var j=arguments[b++];if(typeof j=="object"){j=JSON.stringify(j)}f=f.replace(h,j);c++}while((h=g.exec(f))!=null);a.push(f);e+=c}}return a.join("")};jstestdriver.convertToJson=function(b){var a=jstestdriver.parameterSerialize;return function(c,e,f,d){b(c,a(e),f,d)}};jstestdriver.parameterSerialize=function(c){var b={};for(var a in c){b[a]=JSON.stringify(c[a])}return b};jstestdriver.bind=function(a,c){function b(){return c.apply(a,arguments)}b.toString=function(){return"bound: "+a+" to: "+c};return b};jstestdriver.extractId=function(a){return a.match(/\/(slave|runner)\/(\d+)\//)[2]};jstestdriver.getBrowserFriendlyName=function(){if(jstestdriver.jQuery.browser.safari){if(navigator.userAgent.indexOf("Chrome")!=-1){return"Chrome"}return"Safari"}else{if(jstestdriver.jQuery.browser.opera){return"Opera"}else{if(jstestdriver.jQuery.browser.msie){return"Internet Explorer"}else{if(jstestdriver.jQuery.browser.mozilla){if(navigator.userAgent.indexOf("Firefox")!=-1){return"Firefox"}return"Mozilla"}}}}};jstestdriver.getBrowserFriendlyVersion=function(){if(jstestdriver.jQuery.browser.msie){if(typeof XDomainRequest!="undefined"){return"8.0"}}else{if(jstestdriver.jQuery.browser.safari){if(navigator.appVersion.indexOf("Chrome/")!=-1){return navigator.appVersion.match(/Chrome\/(.*)\s/)[1]}}}return jstestdriver.jQuery.browser.version};jstestdriver.toHtml=function(a,b){return jstestdriver.jQuery(a,b)[0]};jstestdriver.appendHtml=function(b,c){var a=jstestdriver.toHtml(b,c);jstestdriver.jQuery(c.body).append(a)};jstestdriver.now=function(){return new Date().getTime()};jstestdriver.Console=function(){this.log_=[]};jstestdriver.Console.prototype.log=function(){this.log_.push("[LOG] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.debug=function(){this.log_.push("[DEBUG] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.info=function(){this.log_.push("[INFO] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.warn=function(){this.log_.push("[WARN] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.error=function(){this.log_.push("[ERROR] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.getLog=function(){var a=this.log_;this.log_=[];return a.join("\n")};jstestdriver.PluginRegistrar=function(){this.plugins_=[]};jstestdriver.PluginRegistrar.PROCESS_TEST_RESULT="processTestResult";jstestdriver.PluginRegistrar.LOAD_SOURCE="loadSource";jstestdriver.PluginRegistrar.RUN_TEST="runTestConfiguration";jstestdriver.PluginRegistrar.IS_FAILURE="isFailure";jstestdriver.PluginRegistrar.GET_TEST_RUN_CONFIGURATIONS="getTestRunsConfigurationFor";jstestdriver.PluginRegistrar.prototype.register=function(c){if(!c.name){throw new Error("Plugins must define a name.")}var a=this.getIndexOfPlugin_(c.name);var b=1;if(a==-1){a=this.plugins_.length-1;b=0}this.plugins_.splice(a,b,c)};jstestdriver.PluginRegistrar.prototype.unregister=function(b){var a=this.getIndexOfPlugin_(b.name);if(a!=-1){this.plugins_.splice(a,1)}};jstestdriver.PluginRegistrar.prototype.getPlugin=function(b){var a=this.getIndexOfPlugin_(b);return a!=-1?this.plugins_[a]:null};jstestdriver.PluginRegistrar.prototype.getNumberOfRegisteredPlugins=function(){return this.plugins_.length};jstestdriver.PluginRegistrar.prototype.dispatch_=function(e,d){var b=this.plugins_.length;for(var a=0;a<b;a++){var c=this.plugins_[a];if(c[e]){if(c[e].apply(c,d)){return true}}}return false};jstestdriver.PluginRegistrar.prototype.getIndexOfPlugin_=function(a){var c=this.plugins_.length;for(var b=0;b<c;b++){var d=this.plugins_[b];if(d.name==a){return b}}return -1};jstestdriver.PluginRegistrar.prototype.loadSource=function(b,a){this.dispatch_(jstestdriver.PluginRegistrar.LOAD_SOURCE,arguments)};jstestdriver.PluginRegistrar.prototype.runTestConfiguration=function(a,b,c){this.dispatch_(jstestdriver.PluginRegistrar.RUN_TEST,arguments)};jstestdriver.PluginRegistrar.prototype.processTestResult=function(a){this.dispatch_(jstestdriver.PluginRegistrar.PROCESS_TEST_RESULT,arguments)};jstestdriver.PluginRegistrar.prototype.isFailure=function(a){return this.dispatch_(jstestdriver.PluginRegistrar.IS_FAILURE,arguments)};jstestdriver.PluginRegistrar.prototype.getTestRunsConfigurationFor=function(c,b,a){return this.dispatch_(jstestdriver.PluginRegistrar.GET_TEST_RUN_CONFIGURATIONS,arguments)};jstestdriver.LibLoader=function(b,c,a){this.files_=b;this.dom_=c;this.getScript_=a;this.remainingLibToLoad_=this.files_.length;this.boundOnLibLoaded_=jstestdriver.bind(this,this.onLibLoaded);this.savedDocumentWrite_=c.write;this.currentFile_=0};jstestdriver.LibLoader.prototype.load=function(a,b){if(this.files_.length==0){a(b)}else{this.dom_.write=function(){};this.onAllLibLoaded_=a;this.data_=b;this.getScript_(this.dom_,this.files_[this.currentFile_++],this.boundOnLibLoaded_)}};jstestdriver.LibLoader.prototype.onLibLoaded=function(){if(--this.remainingLibToLoad_==0){var a=this.onAllLibLoaded_;var b=this.data_;this.onAllLibLoaded_=null;this.data_=null;this.dom_.write=this.savedDocumentWrite_;a(b)}else{this.getScript_(this.dom_,this.files_[this.currentFile_++],this.boundOnLibLoaded_)}};jstestdriver.FileLoader=function(a,b){this.pluginRegistrar_=a;this.onAllFilesLoaded_=b;this.boundOnFileLoaded=jstestdriver.bind(this,this.onFileLoaded_);this.loadedFiles_=[]};jstestdriver.FileLoader.prototype.load=function(a){this.files_=a;if(this.files_.length>0){this.loadFile_(this.files_.shift())}else{this.onAllFilesLoaded_({loadedFiles:[]})}};jstestdriver.FileLoader.prototype.loadFile_=function(a){this.pluginRegistrar_.loadSource(a,this.boundOnFileLoaded)};jstestdriver.FileLoader.prototype.onFileLoaded_=function(a){this.loadedFiles_.push(a);if(this.files_.length==0){this.onAllFilesLoaded_({loadedFiles:this.loadedFiles_})}else{this.loadFile_(this.files_.shift())}};jstestdriver.TestCaseInfo=function(c,a,b){this.testCaseName_=c;this.template_=a;this.type_=b||jstestdriver.TestCaseInfo.DEFAULT_TYPE};jstestdriver.TestCaseInfo.DEFAULT_TYPE="default";jstestdriver.TestCaseInfo.ASYNC_TYPE="async";jstestdriver.TestCaseInfo.prototype.getType=function(){return this.type_};jstestdriver.TestCaseInfo.prototype.getTestCaseName=function(){return this.testCaseName_};jstestdriver.TestCaseInfo.prototype.getTemplate=function(){return this.template_};jstestdriver.TestCaseInfo.prototype.getTestNames=function(){var b=[];for(var a in this.template_.prototype){if(a.indexOf("test")==0){b.push(a)}}return b};jstestdriver.TestCaseInfo.prototype.getDefaultTestRunConfiguration=function(){return this.createTestRunConfiguration_(this.getTestNames())};jstestdriver.TestCaseInfo.prototype.createTestRunConfiguration_=function(a){return new jstestdriver.TestRunConfiguration(this,a)};jstestdriver.TestCaseInfo.prototype.getTestRunConfigurationFor=function(e){var g={};var l=e.length;for(var c=0;c<l;c++){var j=e[c];var h=j.split(".");var a=g[h[0]];if(!a){a=[];g[h[0]]=a}if(h.length==2){a.push(h[1])}else{if(h.length==3&&h[1]=="prototype"){a.push(h[2])}else{}}}var d=g[this.testCaseName_];if(!d){return null}if(d.length==0){return this.createTestRunConfiguration_(this.getTestNames())}var b=[];var k=d.length;for(var c=0;c<k;c++){var f=d[c];if(f in this.template_.prototype){b.push(f)}}return this.createTestRunConfiguration_(b)};jstestdriver.TestCaseInfo.prototype.equals=function(a){return a&&typeof a.getTestCaseName!="undefined"&&a.getTestCaseName()==this.testCaseName_};jstestdriver.TestCaseInfo.prototype.toString=function(){return"TestCaseInfo("+this.testCaseName_+","+this.template_+","+this.type_+")"};jstestdriver.TestResult=function(g,b,a,d,c,f,e){this.testCaseName=g;this.testName=b;this.result=a;this.message=d;this.log=c;this.time=f;this.data=e||{}};jstestdriver.TestRunConfiguration=function(a,b){this.testCaseInfo_=a;this.tests_=b};jstestdriver.TestRunConfiguration.prototype.getTestCaseInfo=function(){return this.testCaseInfo_};jstestdriver.TestRunConfiguration.prototype.getTests=function(){return this.tests_};jstestdriver.TestCaseManager=function(a){this.testCasesInfo_=[];this.fileToTestCaseMap_={};this.latestTestCaseInfo_=null;this.pluginRegistrar_=a};jstestdriver.TestCaseManager.prototype.add=function(b){var a=this.indexOf_(b);if(a!=-1){this.testCasesInfo_.splice(a,1,b)}else{this.testCasesInfo_.push(b)}this.latestTestCaseInfo_=b};jstestdriver.TestCaseManager.prototype.testCaseAdded=function(){return this.latestTestCaseInfo_!=null};jstestdriver.TestCaseManager.prototype.updateLatestTestCase=function(a){if(this.latestTestCaseInfo_!=null){var c=this.indexOf_(this.latestTestCaseInfo_);if(c==this.testCasesInfo_.length-1){var b=this.fileToTestCaseMap_[a];if(b!=undefined&&b!=c){this.removeTestCase_(b)}}this.fileToTestCaseMap_[a]=c;this.latestTestCaseInfo_=null}};jstestdriver.TestCaseManager.prototype.removeTestCaseForFilename=function(a){var b=this.fileToTestCaseMap_[a];if(b!=undefined){this.removeTestCase_(b)}};jstestdriver.TestCaseManager.prototype.removeTestCase_=function(a){this.testCasesInfo_.splice(a,1)};jstestdriver.TestCaseManager.prototype.indexOf_=function(a){var c=this.testCasesInfo_.length;for(var b=0;b<c;b++){var d=this.testCasesInfo_[b];if(d.equals(a)){return b}}return -1};jstestdriver.TestCaseManager.prototype.getDefaultTestRunsConfiguration=function(){var a=[];var d=this.testCasesInfo_.length;for(var c=0;c<d;c++){var b=this.testCasesInfo_[c];a.push(b.getDefaultTestRunConfiguration())}return a};jstestdriver.TestCaseManager.prototype.getTestRunsConfigurationFor=function(b){var a=[];this.pluginRegistrar_.getTestRunsConfigurationFor(this.testCasesInfo_,b,a);return a};jstestdriver.TestCaseManager.prototype.getTestCasesInfo=function(){return this.testCasesInfo_};jstestdriver.TestCaseManager.prototype.getCurrentlyLoadedTest=function(){var h=[];var e=this.testCasesInfo_.length;for(var d=0;d<e;d++){var b=this.testCasesInfo_[d];var g=b.getTestCaseName();var f=b.getTestNames();var c=f.length;for(var a=0;a<c;a++){h.push(g+"."+f[a])}}return{numTests:h.length,testNames:h}};jstestdriver.TestCaseManager.prototype.getCurrentlyLoadedTestFor=function(g){var l=this.getTestRunsConfigurationFor(g);var m=l.length;var f=[];for(var e=0;e<m;e++){var k=l[e];var b=k.getTestCaseInfo().getTestCaseName();var a=k.getTests();var d=a.length;for(var c=0;c<d;c++){var h=a[c];f.push(b+"."+h)}}return{numTests:f.length,testNames:f}};jstestdriver.TestCaseBuilder=function(a){this.testCaseManager_=a};jstestdriver.TestCaseBuilder.prototype.TestCase=function(d,a,c){var b=function(){};if(a){b.prototype=a}if(typeof b.prototype.setUp=="undefined"){b.prototype.setUp=function(){}}if(typeof b.prototype.tearDown=="undefined"){b.prototype.tearDown=function(){}}this.testCaseManager_.add(new jstestdriver.TestCaseInfo(d,b,c));return b};jstestdriver.TestCaseBuilder.prototype.AsyncTestCase=function(b,a){return this.TestCase(b,a,jstestdriver.TestCaseInfo.ASYNC_TYPE)};jstestdriver.TestRunner=function(a,c){this.pluginRegistrar_=a;var b=jstestdriver.bind(this,this.runNextConfiguration_);this.boundRunNextConfiguration_=function(){c(b)}};jstestdriver.TestRunner.prototype.runTests=function(a,c,d,b){this.testRunsConfiguration_=a;this.onTestDone_=c;this.onComplete_=d;this.captureConsole_=b;this.runNextConfiguration_()};jstestdriver.TestRunner.prototype.finish_=function(){var a=this.onComplete_;this.testRunsConfiguration_=null;this.onTestDone_=null;this.onComplete_=null;this.captureConsole_=false;a()};jstestdriver.TestRunner.prototype.runNextConfiguration_=function(){if(this.testRunsConfiguration_.length==0){this.finish_();return}if(this.captureConsole_){this.overrideConsole_()}this.pluginRegistrar_.runTestConfiguration(this.testRunsConfiguration_.shift(),this.onTestDone_,this.boundRunNextConfiguration_);if(this.captureConsole_){this.resetConsole_()}};jstestdriver.TestRunner.prototype.overrideConsole_=function(){this.logMethod_=console.log;this.logDebug_=console.debug;this.logInfo_=console.info;this.logWarn_=console.warn;this.logError_=console.error;console.log=function(){jstestdriver.console.log.apply(jstestdriver.console,arguments)};console.debug=function(){jstestdriver.console.debug.apply(jstestdriver.console,arguments)};console.info=function(){jstestdriver.console.info.apply(jstestdriver.console,arguments)};console.warn=function(){jstestdriver.console.warn.apply(jstestdriver.console,arguments)};console.error=function(){jstestdriver.console.error.apply(jstestdriver.console,arguments)}};jstestdriver.TestRunner.prototype.resetConsole_=function(){console.log=this.logMethod_;console.debug=this.logDebug_;console.info=this.logInfo_;console.warn=this.logWarn_;console.error=this.logError_};jstestdriver.TestRunner.TestCaseMap=function(){this.testCases_={}};jstestdriver.TestRunner.TestCaseMap.prototype.startCase=function(a){this.testCases_[a]=true};jstestdriver.TestRunner.TestCaseMap.prototype.stopCase=function(a){this.testCases_[a]=false};jstestdriver.TestRunner.TestCaseMap.prototype.hasActiveCases=function(){for(var a in this.testCases_){if(this.testCases_.hasOwnProperty(a)&&this.testCases_[a]){return true}}return false};jstestdriver.listen=function(){var c=jstestdriver.extractId(window.location.toString());var b=jstestdriver.SERVER_URL+c;jstestdriver.pluginRegistrar=new jstestdriver.PluginRegistrar();jstestdriver.testCaseManager=new jstestdriver.TestCaseManager(jstestdriver.pluginRegistrar);var g=new jstestdriver.TestRunner(jstestdriver.pluginRegistrar,jstestdriver.testBreather(jstestdriver.setTimeout,jstestdriver.TIMEOUT));jstestdriver.testCaseBuilder=new jstestdriver.TestCaseBuilder(jstestdriver.testCaseManager);jstestdriver.global.TestCase=jstestdriver.bind(jstestdriver.testCaseBuilder,jstestdriver.testCaseBuilder.TestCase);jstestdriver.global.AsyncTestCase=jstestdriver.bind(jstestdriver.testCaseBuilder,jstestdriver.testCaseBuilder.AsyncTestCase);var a=new jstestdriver.plugins.ScriptLoader(window,document,jstestdriver.testCaseManager);var i=new jstestdriver.plugins.StylesheetLoader(window,document,jstestdriver.jQuery.browser.mozilla||jstestdriver.jQuery.browser.safari);var h=new jstestdriver.plugins.FileLoaderPlugin(a,i);var e=new jstestdriver.plugins.TestRunnerPlugin(Date,function(){jstestdriver.jQuery("body").children().remove();jstestdriver.jQuery(document).unbind();jstestdriver.jQuery(document).die()});jstestdriver.pluginRegistrar.register(new jstestdriver.plugins.DefaultPlugin(h,e,new jstestdriver.plugins.AssertsPlugin(),new jstestdriver.plugins.TestCaseManagerPlugin()));jstestdriver.pluginRegistrar.register(new jstestdriver.plugins.async.AsyncTestRunnerPlugin(Date,function(){jstestdriver.jQuery("body").children().remove();jstestdriver.jQuery(document).unbind();jstestdriver.jQuery(document).die()}));jstestdriver.testCaseManager.TestCase=jstestdriver.global.TestCase;var d=new jstestdriver.StreamingService(b,jstestdriver.now,jstestdriver.convertToJson(jstestdriver.jQuery.post));var f=jstestdriver.executor=new jstestdriver.CommandExecutor(parseInt(c),d,jstestdriver.testCaseManager,g,jstestdriver.pluginRegistrar,jstestdriver.now);f.registerCommand("execute",f,f.execute);f.registerCommand("runAllTests",f,f.runAllTests);f.registerCommand("runTests",f,f.runTests);f.registerCommand("loadTest",f,f.loadTest);f.registerCommand("reset",f,f.reset);f.registerCommand("dryRun",f,f.dryRun);f.registerCommand("dryRunFor",f,f.dryRunFor);f.registerCommand("streamAcknowledged",d,d.streamAcknowledged);f.listen()};jstestdriver.testBreather=function(c,a){var d=new Date();function b(f){var e=new Date();if((e-d)>a){c(f,1);d=e}else{f()}}return b};jstestdriver.TIMEOUT=500;jstestdriver.CommandExecutor=function(f,b,e,d,a,c){this.__id=f;this.streamingService_=b;this.__testCaseManager=e;this.__testRunner=d;this.__pluginRegistrar=a;this.__boundExecuteCommand=jstestdriver.bind(this,this.executeCommand);this.__boundExecute=jstestdriver.bind(this,this.execute);this.__boundEvaluateCommand=jstestdriver.bind(this,this.evaluateCommand);this.boundCleanTestManager=jstestdriver.bind(this,this.cleanTestManager);this.boundOnFileLoaded_=jstestdriver.bind(this,this.onFileLoaded);this.boundOnFileLoadedRunnerMode_=jstestdriver.bind(this,this.onFileLoadedRunnerMode);this.boundOnTestDone=jstestdriver.bind(this,this.onTestDone_);this.boundOnComplete=jstestdriver.bind(this,this.onComplete_);this.boundOnTestDoneRunnerMode=jstestdriver.bind(this,this.onTestDoneRunnerMode_);this.boundOnCompleteRunnerMode=jstestdriver.bind(this,this.onCompleteRunnerMode_);this.boundSendTestResults=jstestdriver.bind(this,this.sendTestResults);this.commandMap_={};this.testsDone_=[];this.debug_=false;this.now_=c;this.lastTestResultsSent_=0};jstestdriver.CommandExecutor.prototype.executeCommand=function(a){if(a=="noop"){this.streamingService_.close(null,this.__boundExecuteCommand)}else{var b=jsonParse(a);this.commandMap_[b.command](b.parameters)}};jstestdriver.CommandExecutor.prototype.execute=function(b){var a=new jstestdriver.Response(jstestdriver.RESPONSE_TYPES.COMMAND_RESULT,JSON.stringify(this.__boundEvaluateCommand(b)),this.getBrowserInfo());this.streamingService_.close(a,this.__boundExecuteCommand)};jstestdriver.CommandExecutor.prototype.findScriptTagsToRemove_=function(e,l){var c=e.getElementsByTagName("script");var a=l.length;var k=c.length;var b=[];for(var g=0;g<a;g++){var h=l[g].fileSrc;for(var d=0;d<k;d++){var m=c[d];if(m.src.indexOf(h)!=-1){b.push(m);break}}}return b};jstestdriver.CommandExecutor.prototype.removeScriptTags_=function(e,f){var d=e.getElementsByTagName("head")[0];var c=f.length;for(var b=0;b<c;b++){var a=f[b];d.removeChild(a)}};jstestdriver.CommandExecutor.prototype.removeScripts=function(b,a){this.removeScriptTags_(b,this.findScriptTagsToRemove_(b,a))};jstestdriver.CommandExecutor.prototype.loadTest=function(c){var e=c[0];var d=c[1]=="true"?true:false;var b=jsonParse('{"f":'+e+"}").f;this.removeScripts(document,b);var a=new jstestdriver.FileLoader(this.__pluginRegistrar,!d?this.boundOnFileLoaded_:this.boundOnFileLoadedRunnerMode_);a.load(b)};jstestdriver.CommandExecutor.prototype.getBrowserInfo=function(){return new jstestdriver.BrowserInfo(this.__id)};jstestdriver.CommandExecutor.prototype.onFileLoaded=function(a){var b=new jstestdriver.Response(jstestdriver.RESPONSE_TYPES.FILE_LOAD_RESULT,JSON.stringify(a),this.getBrowserInfo());this.streamingService_.close(b,this.__boundExecuteCommand)};jstestdriver.CommandExecutor.prototype.onFileLoadedRunnerMode=function(a){if(!parent.G_testRunner){parent.G_testRunner={finished_:false,success_:1,report_:"",filesLoaded_:0,isFinished:function(){return this.finished_},isSuccess:function(){return this.success_},getReport:function(){return this.report_},getNumFilesLoaded:function(){return this.filesLoaded_},setIsFinished:function(c){this.finished_=c},setIsSuccess:function(c){this.success_=c},setReport:function(c){this.report_=c},setNumFilesLoaded:function(c){this.filesLoaded_=c}}}var b=parent.G_testRunner;b.setNumFilesLoaded(a.loadedFiles.length);this.streamingService_.close(null,this.__boundExecuteCommand)};jstestdriver.CommandExecutor.prototype.runAllTests=function(b){var a=b[0];var c=b[1]=="true"?true:false;this.debug_=Boolean(b[2]);this.runTestCases_(this.__testCaseManager.getDefaultTestRunsConfiguration(),a=="true"?true:false,c)};jstestdriver.CommandExecutor.prototype.runTests=function(b){var c=jsonParse('{"expressions":'+b[0]+"}").expressions;var a=b[1];this.debug_=Boolean(b[2]);this.runTestCases_(this.__testCaseManager.getTestRunsConfigurationFor(c),a=="true"?true:false,false)};jstestdriver.CommandExecutor.prototype.runTestCases_=function(a,b,c){if(!c){this.lastTestResultsSent_=this.now_();this.__testRunner.runTests(a,this.boundOnTestDone,this.boundOnComplete,b)}else{this.__testRunner.runTests(a,this.boundOnTestDoneRunnerMode,this.boundOnCompleteRunnerMode,b)}};jstestdriver.CommandExecutor.prototype.onTestDoneRunnerMode_=function(a){var b=parent.G_testRunner;b.setIsSuccess(b.isSuccess()&(a.result=="passed"));this.addTestResult(a)};jstestdriver.CommandExecutor.prototype.onCompleteRunnerMode_=function(){var a=parent.G_testRunner;a.setReport(JSON.stringify(this.testsDone_));this.testsDone_=[];a.setIsSuccess(a.isSuccess()==1?true:false);a.setIsFinished(true)};jstestdriver.CommandExecutor.prototype.sendTestResults=function(){if(this.testsDone_.length>0){var a=new jstestdriver.Response(jstestdriver.RESPONSE_TYPES.TEST_RESULT,JSON.stringify(this.testsDone_),this.getBrowserInfo());this.testsDone_=[];this.streamingService_.stream(a,this.__boundExecuteCommand)}};jstestdriver.CommandExecutor.prototype.onTestDone_=function(a){this.addTestResult(a);var b=this.now_()-this.lastTestResultsSent_;if((a.result=="error"||a.log!=""||this.debug_||b>jstestdriver.TIMEOUT)){this.lastTestResultsSent_=this.now_();this.sendTestResults()}};jstestdriver.CommandExecutor.prototype.addTestResult=function(a){this.__pluginRegistrar.processTestResult(a);this.testsDone_.push(a)};jstestdriver.CommandExecutor.prototype.sendTestResultsOnComplete_=function(){var a=new jstestdriver.Response(jstestdriver.RESPONSE_TYPES.TEST_RESULT,JSON.stringify(this.testsDone_),this.getBrowserInfo());this.testsDone_=[];this.streamingService_.close(a,this.__boundExecuteCommand)};jstestdriver.CommandExecutor.prototype.onComplete_=function(){this.sendTestResultsOnComplete_()};jstestdriver.CommandExecutor.prototype.evaluateCommand=function(cmd){var res="";try{var evaluatedCmd=eval("("+cmd+")");if(evaluatedCmd){res=evaluatedCmd.toString()}}catch(e){res="Exception "+e.name+": "+e.message+"\n"+e.fileName+"("+e.lineNumber+"):\n"+e.stack}return res};jstestdriver.CommandExecutor.prototype.reset=function(){if(window.location.href.search("\\?refresh")!=-1){window.location.reload()}else{window.location.replace(window.location.href+"?refresh")}};jstestdriver.CommandExecutor.prototype.registerCommand=function(a,b,c){this.commandMap_[a]=jstestdriver.bind(b,c)};jstestdriver.CommandExecutor.prototype.dryRun=function(){var a=new jstestdriver.Response(jstestdriver.RESPONSE_TYPES.TEST_QUERY_RESULT,JSON.stringify(this.__testCaseManager.getCurrentlyLoadedTest()),this.getBrowserInfo());this.streamingService_.close(a,this.__boundExecuteCommand)};jstestdriver.CommandExecutor.prototype.dryRunFor=function(b){var d=jsonParse('{"expressions":'+b[0]+"}").expressions;var c=JSON.stringify(this.__testCaseManager.getCurrentlyLoadedTestFor(d));var a=new jstestdriver.Response(jstestdriver.RESPONSE_TYPES.TEST_QUERY_RESULT,c,this.getBrowserInfo());this.streamingService_.close(a,this.__boundExecuteCommand)};jstestdriver.CommandExecutor.prototype.listen=function(){var a;if(window.location.href.search("\\?refresh")!=-1){a=new jstestdriver.Response(jstestdriver.RESPONSE_TYPES.RESET_RESULT,"Runner reset.",this.getBrowserInfo(),true)}else{a=new jstestdriver.Response(jstestdriver.RESPONSE_TYPES.BROWSER_READY,null,this.getBrowserInfo(),true)}this.streamingService_.close(a,this.__boundExecuteCommand)};/*
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/**
 * @fileoverview Defines the FiniteUseCallback class, which decorates a
 * Javascript function by notifying the test runner about any exceptions thrown
 * when the function executes.
 *
 * @author rdionne@google.com (Robert Dionne)
 */


/**
 * Constructs a CatchingCallback.
 *
 * @param testCase the testCase to use as 'this' when calling the wrapped function.
 * @param herd the herd to which this callback belongs.
 * @param wrapped the wrapped callback function.
 */
jstestdriver.plugins.async.CatchingCallback = function(testCase, herd, wrapped) {
  this.testCase_ = testCase;
  this.herd_ = herd;
  this.callback_ = wrapped;
};


/**
 * Invokes the wrapped callback, catching any exceptions and reporting the status
 * to the herd.
 */
jstestdriver.plugins.async.CatchingCallback.prototype.invoke = function() {
  var result;
  var message;
  try {
    result = this.callback_.apply(this.testCase_, arguments);
    message = 'success.';
    return result;
  } catch (e) {
    this.herd_.onError(e);
    message = 'failure: ' + e;
    throw e;
  } finally {
    this.herd_.remove(message);
  }
};
/*
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * @fileoverview Defines the ExpiringCallback class, which decorates a
 * Javascript function by restricting the length of time the asynchronous system
 * may delay before calling the function.
 * 
 * @author rdionne@google.com (Robert Dionne)
 */


/**
 * Constructs an ExpiringCallback.
 *
 * @param herd the herd to which this callback belongs.
 * @param callback a FiniteUseCallback.
 * @param timeout a Timeout object.
 */
jstestdriver.plugins.async.ExpiringCallback = function(herd, callback, timeout) {
  this.herd_ = herd;
  this.callback_ = callback;
  this.timeout_ = timeout;
};


/**
 * Arms this callback to expire after the given delay.
 * 
 * @param delay the amount of time before this callback expires.
 */
jstestdriver.plugins.async.ExpiringCallback.prototype.arm = function(delay) {
  var callback = this;
  this.timeout_.arm(function() {
    callback.herd_.onError(new Error('expired.'));
    callback.herd_.remove('expired.', callback.callback_.getRemainingUses());
    callback.callback_.deplete();
  }, delay);
};


/**
 * Invokes this callback.
 */
jstestdriver.plugins.async.ExpiringCallback.prototype.invoke = function() {
  return this.callback_.invoke.apply(this.callback_, arguments);
};

/*
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * @fileoverview Defines the FiniteUseCallback class, which decorates a
 * Javascript function by restricting the number of times the asynchronous
 * system may call it.
 *
 * @author rdionne@google.com (Robert Dionne)
 */


/**
 * Constructs a FiniteUseCallback.
 *
 * @param callback a CatchingCallback.
 * @param onDepleted a function to execute when this FiniteUseCallback depletes.
 * @param opt_remainingUses the number of permitted uses remaining; defaults to
 * one.
 */
jstestdriver.plugins.async.FiniteUseCallback = function(callback, onDepleted, opt_remainingUses) {
  this.callback_ = callback;
  this.onDepleted_ = onDepleted;
  this.remainingUses_ = opt_remainingUses || 1;
};


/**
 * Depletes the remaining permitted uses.  Calls onDepleted.
 */
jstestdriver.plugins.async.FiniteUseCallback.prototype.deplete = function() {
  this.remainingUses_ = 0;
  if (this.onDepleted_) {
    this.onDepleted_.apply();
  }
};


/**
 * Returns the number of remaining permitted uses.
 */
jstestdriver.plugins.async.FiniteUseCallback.prototype.getRemainingUses = function() {
  return this.remainingUses_;
};


/**
 * Invokes this callback if it is usable. Calls onDepleted if invoking this
 * callback depletes its remaining permitted uses.
 */
jstestdriver.plugins.async.FiniteUseCallback.prototype.invoke = function(var_args) {
  if (this.isUsable()) {
    try {
      this.remainingUses_ -= 1;
      return this.callback_.invoke.apply(this.callback_, arguments);
    } finally {
      if (this.onDepleted_ && !this.isUsable()) {
        this.onDepleted_.apply();
      }
    }
  } else {
    console.log('Warning. Attempted to call unusable callback.');
  }
};


/**
 * Returns true if any permitted uses remain.
 */
jstestdriver.plugins.async.FiniteUseCallback.prototype.isUsable = function() {
  return this.remainingUses_ > 0;
};
/*
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * @fileoverview Defines the Timeout class.  The arm() method is equivalent to
 * window.setTimeout() and maybeDisarm() is equivalent to window.clearTimeout().
 *  
 * @author rdionne@google.com (Robert Dionne)
 */


/**
 * Constructs a Timeout. Accepts alternate implementations of setTimeout and
 * clearTimeout.
 *
 * @param setTimeout the global setTimeout function to use.
 * @param clearTimeout the global clearTimeout function to use.
 */
jstestdriver.plugins.async.Timeout = function(setTimeout, clearTimeout) {
  this.setTimeout_ = setTimeout;
  this.clearTimeout_ = clearTimeout;
  this.handle_ = null;
};


/**
 * Arms this Timeout to fire after the specified delay.
 *
 * @param callback the callback to call after the delay passes.
 * @param delay the timeout delay in milliseconds.
 */
jstestdriver.plugins.async.Timeout.prototype.arm = function(callback, delay) {
  var self = this;
  this.handle_ = this.setTimeout_(function() {
    self.maybeDisarm();
    return callback.apply(null, arguments);
  }, delay);
};

/**
 * Explicitly disarms the timeout.
 */
jstestdriver.plugins.async.Timeout.prototype.disarm_ = function() {
  this.clearTimeout_(this.handle_);
  this.handle_ = null;
};


/**
 * Returns true if the timeout is armed.
 */
jstestdriver.plugins.async.Timeout.prototype.isArmed = function() {
  return this.handle_ != null;
};


/**
 * Disarms the timeout if it is armed.
 */
jstestdriver.plugins.async.Timeout.prototype.maybeDisarm = function() {
  if (this.isArmed()) {
    this.disarm_();
  }
};
/*
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * @fileoverview Defines the TestSafeCallbackBuilder class, which decorates a
 * Javascript function with several safeguards so that it may be safely executed
 * asynchronously within a test. The safeguards include:
 * 
 *   1) notifying the test runner about any exceptions thrown when the function
 *      executes
 *   2) restricting the number of times the asynchronous system may call the
 *      function
 *   3) restricting the length of time the asynchronous system may delay before
 *      calling the function
 *
 * @author rdionne@google.com (Robert Dionne)
 */


/**
 * Constructs a TestSafeCallbackBuilder.
 * 
 * @param opt_setTimeout the global setTimeout function to use.
 * @param opt_clearTimeout the global clearTimeout function to use.
 * @param opt_timeoutConstructor a constructor for obtaining new the Timeouts.
 */
jstestdriver.plugins.async.TestSafeCallbackBuilder = function(
    opt_setTimeout, opt_clearTimeout, opt_timeoutConstructor) {
  this.setTimeout_ = opt_setTimeout || jstestdriver.setTimeout;
  this.clearTimeout_ = opt_clearTimeout || jstestdriver.clearTimeout;
  this.timeoutConstructor_ = opt_timeoutConstructor || jstestdriver.plugins.async.Timeout;
  this.herd_ = null;
  this.remainingUses_ = null;
  this.testCase_ = null;
  this.wrapped_ = null;
};


/**
 * Returns the original function decorated with safeguards.
 */
jstestdriver.plugins.async.TestSafeCallbackBuilder.prototype.build = function() {
  var catchingCallback = new jstestdriver.plugins.async.CatchingCallback(this.testCase_, this.herd_, this.wrapped_);
  var timeout = new (this.timeoutConstructor_)(this.setTimeout_, this.clearTimeout_);
  var onDepleted = function() {
    timeout.maybeDisarm();
  };
  var finiteUseCallback = new jstestdriver.plugins.async.FiniteUseCallback(catchingCallback, onDepleted, this.remainingUses_);
  return new jstestdriver.plugins.async.ExpiringCallback(this.herd_, finiteUseCallback, timeout);
};


/**
 * @param herd the callback herd to contain the callback.
 */
jstestdriver.plugins.async.TestSafeCallbackBuilder.prototype.setHerd = function(herd) {
  this.herd_ = herd;
  return this;
};


/**
 * @param remainingUses the remaining number of permitted calls.
 */
jstestdriver.plugins.async.TestSafeCallbackBuilder.prototype.setRemainingUses = function(remainingUses) {
  this.remainingUses_ = remainingUses;
  return this;
};


/**
 * @param testCase the test case instance available as 'this' within the functions scope.
 */
jstestdriver.plugins.async.TestSafeCallbackBuilder.prototype.setTestCase = function(testCase) {
  this.testCase_ = testCase;
  return this;
};


/**
 * @param wrapped the function wrapped by the above safeguards.
 */
jstestdriver.plugins.async.TestSafeCallbackBuilder.prototype.setWrapped = function(wrapped) {
  this.wrapped_ = wrapped;
  return this;
};
/*
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * @fileoverview Defines the CallbackHerd function, which decorates given callback
 * functions with safeguards and tracks them until they execute or expire.
 * 
 * @author rdionne@google.com (Robert Dionne)
 */


/**
 * Constructs a CallbackHerd.
 *
 * @param setTimeout the global setTimeout function.
 * @param testCase the test case instance.
 * @param onHerdComplete a function to call when the herd empties.
 */
jstestdriver.plugins.async.CallbackHerd = function(setTimeout, testCase, onHerdComplete) {
  this.setTimeout_ = setTimeout;
  this.testCase_ = testCase;
  this.onHerdComplete_ = onHerdComplete;
  this.errors_ = [];
  this.count_ = 0;
};


/**
 * The number of milliseconds to wait before expiring a delinquent callback.
 */
jstestdriver.plugins.async.CallbackHerd.TIMEOUT = 30000;


/**
 * Calls onHerdComplete if the herd is empty.
 */
jstestdriver.plugins.async.CallbackHerd.prototype.maybeComplete = function() {
  if (this.count_ == 0 && this.onHerdComplete_) {
    var herd = this;
    this.setTimeout_(function() {
      herd.onHerdComplete_(herd.errors_);
    }, 0);
  }
};


/**
 * Returns the number of outstanding callbacks in the herd.
 */
jstestdriver.plugins.async.CallbackHerd.prototype.count = function() {
  return this.count_;
};


/**
 * Accepts errors to later report them to the test runner via onHerdComplete.
 * @param error the error to report
 */
jstestdriver.plugins.async.CallbackHerd.prototype.onError = function(error) {
  this.errors_.push(error);
};


/**
 * Adds a callback function to the herd, optionally more than once.
 *
 * @param wrapped the callback function to decorate with safeguards and to add
 * to the herd.
 * @param opt_n the number of permitted uses of the given callback; defaults to one.
 */
jstestdriver.plugins.async.CallbackHerd.prototype.add = function(wrapped, opt_n) {
  this.count_ += opt_n || 1;
  console.log('adding. (' + this.count_ + ' in herd)');
  var callback = new jstestdriver.plugins.async.TestSafeCallbackBuilder()
      .setHerd(this)
      .setRemainingUses(opt_n)
      .setTestCase(this.testCase_)
      .setWrapped(wrapped)
      .build();
  callback.arm(jstestdriver.plugins.async.CallbackHerd.TIMEOUT);
  return function() {
    return callback.invoke(arguments);
  };
};


/**
 * Removes a callback from the herd, optionally more than one.
 *
 * @param message a message to pass to the herd for logging purposes; usually the
 * reason that the callback was removed from the herd.
 * @param opt_n the number of callbacks to remove from the herd.
 */
jstestdriver.plugins.async.CallbackHerd.prototype.remove = function(message, opt_n) {
  if (this.count_ > 0) {
    this.count_ -= opt_n || 1;
    if (message) {
      console.log(message + ' (' + this.count_ + ' in herd)');
    }
    this.maybeComplete();
  }
};
/*
 * Copyright 2009 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
jstestdriver.plugins.ScriptLoader = function(win, dom, testCaseManager) {
  this.win_ = win;
  this.dom_ = dom;
  this.testCaseManager_ = testCaseManager;
  this.originalDocumentWrite_ = this.dom_.write;
};


jstestdriver.plugins.ScriptLoader.prototype.load = function(file, callback) {
  this.fileResult_ = null;
  var head = this.dom_.getElementsByTagName('head')[0];
  var script = this.dom_.createElement('script');
  var handleError = jstestdriver.bind(this, function(msg, url, line) {
    var loadMsg = 'error loading file: ' + file.fileSrc;

    if (line != undefined && line != null) {
      loadMsg += ':' + line;
    }
    if (msg != undefined && msg != null) {
      loadMsg += ': ' + msg;
    }
    this.updateResult_(new jstestdriver.FileResult(file, false, loadMsg));
  });

  this.win_.onerror = handleError; 
  script.onerror = handleError;
  if (!jstestdriver.jQuery.browser.opera) {
    script.onload = jstestdriver.bind(this, function() {
      this.onLoad_(file, callback);
    });
  }
  script.onreadystatechange = jstestdriver.bind(this, function() {
    if (script.readyState == 'loaded') {
      this.onLoad_(file, callback);
    }
  });
  script.type = "text/javascript";
  script.src = file.fileSrc;
  this.disableDocumentWrite();
  head.appendChild(script);
};


jstestdriver.plugins.ScriptLoader.prototype.onLoad_ = function(file, callback) {
  if (this.testCaseManager_.testCaseAdded()) {
    this.testCaseManager_.updateLatestTestCase(file.fileSrc);
  }
  this.updateResult_(new jstestdriver.FileResult(file, true, ''));
  this.win_.onerror = jstestdriver.EMPTY_FUNC;
  this.restoreDocumentWrite();
  callback(this.fileResult_);
};


jstestdriver.plugins.ScriptLoader.prototype.updateResult_ = function(fileResult) {
  if (this.fileResult_ == null) {
    this.fileResult_ = fileResult;
  } else {
    this.testCaseManager_.removeTestCaseForFilename(fileResult.file.fileSrc);
  }
};


jstestdriver.plugins.ScriptLoader.prototype.disableDocumentWrite = function() {
  this.dom_.write = jstestdriver.EMPTY_FUNC;
};


jstestdriver.plugins.ScriptLoader.prototype.restoreDocumentWrite = function() {
  this.dom_.write = this.originalDocumentWrite_;
};
/*
 * Copyright 2009 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
jstestdriver.plugins.StylesheetLoader = function(win, dom, synchronousCallback) {
  this.win_ = win;
  this.dom_ = dom;
  this.synchronousCallback_ = synchronousCallback;
};


jstestdriver.plugins.StylesheetLoader.prototype.load = function(file, callback) {
  this.fileResult_ = null;
  var head = this.dom_.getElementsByTagName('head')[0];
  var link = this.dom_.createElement('link');
  var handleError = jstestdriver.bind(this, function(msg, url, line) {
    var loadMsg = 'error loading file: ' + file.fileSrc;

    if (line != undefined && line != null) {
      loadMsg += ':' + line;
    }
    if (msg != undefined && msg != null) {
      loadMsg += ': ' + msg;
    }
    this.updateResult_(new jstestdriver.FileResult(file, false, loadMsg));
  });

  this.win_.onerror = handleError;
  link.onerror = handleError;
  if (!jstestdriver.jQuery.browser.opera) {
    link.onload = jstestdriver.bind(this, function() {
      this.onLoad_(file, callback);
    });
  }
  link.onreadystatechange = jstestdriver.bind(this, function() {
    if (link.readyState == 'loaded') {
      this.onLoad_(file, callback);
    }
  });
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = file.fileSrc;
  head.appendChild(link);

  // Firefox and Safari don't seem to support onload or onreadystatechange for link
  if (this.synchronousCallback_) {
    this.onLoad_(file, callback);
  }
};


jstestdriver.plugins.StylesheetLoader.prototype.onLoad_ = function(file, callback) {
  this.updateResult_(new jstestdriver.FileResult(file, true, ''));
  this.win_.onerror = jstestdriver.EMPTY_FUNC;
  callback(this.fileResult_);  
};


jstestdriver.plugins.StylesheetLoader.prototype.updateResult_ = function(fileResult) {
  if (this.fileResult_ == null) {
    this.fileResult_ = fileResult;
  }
};
/*
 * Copyright 2009 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
jstestdriver.plugins.FileLoaderPlugin = function(scriptLoader, stylesheetLoader) {
  this.scriptLoader_ = scriptLoader;
  this.stylesheetLoader_ = stylesheetLoader;
};


jstestdriver.plugins.FileLoaderPlugin.prototype.loadSource = function(file, onSourceLoaded) {
  if (file.fileSrc.match(/\.css$/)) {
    this.stylesheetLoader_.load(file, onSourceLoaded);
  } else {
    this.scriptLoader_.load(file, onSourceLoaded);
  }
};
/*
 * Copyright 2009 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
jstestdriver.plugins.TestRunnerPlugin = function(dateObj, clearBody) {
  this.dateObj_ = dateObj;
  this.clearBody_ = clearBody;
};


jstestdriver.plugins.TestRunnerPlugin.prototype.runTestConfiguration = function(
    testRunConfiguration, onTestDone, onTestRunConfigurationComplete) {
  var testCaseInfo = testRunConfiguration.getTestCaseInfo();
  var tests = testRunConfiguration.getTests();
  var size = tests.length;

  for (var i = 0; i < size; i++) {
    var testName = tests[i];

    onTestDone(this.runTest(testCaseInfo.getTestCaseName(), testCaseInfo.getTemplate(), testName));
  }
  onTestRunConfigurationComplete();
};


jstestdriver.plugins.TestRunnerPlugin.prototype.runTest = function(testCaseName, testCase,
    testName) {
  var testCaseInstance;
  try {
    try {
      testCaseInstance = new testCase();
    } catch (e) {
      return new jstestdriver.TestResult(testCaseName, testName, 'error',
          testCaseName + ' is not a test case', '', 0);
    }
    var start = new this.dateObj_().getTime();
  
    jstestdriver.expectedAssertCount = -1;
    jstestdriver.assertCount = 0;
    var res = 'passed';
    var msg = '';
  
    try {
      if (testCaseInstance.setUp) {
        testCaseInstance.setUp();
      }
      if (!(testName in testCaseInstance)) {
        var err = new Error(testName + ' not found in ' + testCaseName);
        err.name = 'AssertError';
        throw err;
      }
      testCaseInstance[testName]();
      if (jstestdriver.expectedAssertCount != -1 &&
          jstestdriver.expectedAssertCount != jstestdriver.assertCount) {
        var err = new Error("Expected '" +
            jstestdriver.expectedAssertCount +
            "' asserts but '" +
            jstestdriver.assertCount +
            "' encountered.");
  
        err.name = 'AssertError';
        throw err;
      }
    } catch (e) {
  
      // We use the global here because of a circular dependency. The isFailure plugin should be
      // refactored.
      res = jstestdriver.pluginRegistrar.isFailure(e) ? 'failed' : 'error';
      msg = JSON.stringify(e);
    }
    try {
      if (testCaseInstance.tearDown) {
        testCaseInstance.tearDown();
      }
      this.clearBody_();
    } catch (e) {
      if (res == 'passed' && msg == '') {
        res = 'error';
        msg = JSON.stringify(e);
      }
    }
    var end = new this.dateObj_().getTime();
    return new jstestdriver.TestResult(testCaseName, testName, res, msg,
            jstestdriver.console.getLog(), end - start);  
  } catch (e) {
    return new jstestdriver.TestResult(testCaseName, testName,
            'error', 'Unexpected runner error: ' + JSON.stringify(e),
            jstestdriver.console.getLog(), 0);
  }
};
/*
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * @fileoverview Defines the AsyncTestRunnerPlugin class, which executes
 * asynchronous test cases within JsTestDriver.
 *
 *      +----------------------------- more tests? ------------ nextTest() <--------------+
 *     |                                                                                 |
 *     v                                                                                 |
 * startSetUp() ---- execute ---> finishSetUp(errors)                                    |
 *                                     |                                                 |
 * startTestMethod() <--- no errors ---+---- errors ----+                                |
 *        |                                             |                                |
 *     execute                                          |                                |
 *        |                                             |                                |
 *        v                                             v                                |
 * finishTestMethod(errors) -- errors or no errors -> startTearDown() -- execute -> finishTearDown(errors)
 *
 * @author rdionne@google.com (Robert Dionne)
 */


/**
 * Constructs an AsyncTestRunnerPlugin.
 *
 * @param dateObj the date object constructor
 * @param clearBody a function to call to clear the document body.
 * @param opt_herdConstructor a constructor for obtaining new CallbackHerds.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin = function(dateObj, clearBody, opt_herdConstructor) {
  this.name = "AsyncTestRunnerPlugin";
  this.dateObj_ = dateObj;
  this.clearBody_ = clearBody;
  this.herdConstructor_ = opt_herdConstructor || jstestdriver.plugins.async.CallbackHerd;
  this.testRunConfiguration_ = null;
  this.testCaseInfo_ = null;
  this.onTestDone_ = null;
  this.onTestRunConfigurationComplete_ = null;
  this.testIndex_ = 0;
  this.testCase_ = null;
  this.testName_ = null;
  this.start_ = null;
  this.errors_ = null;
};

/**
 * Runs a test case.
 *
 * @param testRunConfiguration the test case configuration
 * @param onTestDone the function to call to report a test is complete
 * @param onTestRunConfigurationComplete the function to call to report a test
 * case is complete 
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.runTestConfiguration = function(
    testRunConfiguration, onTestDone, onTestRunConfigurationComplete) {
    console.log('runTestConfiguration');
  if (testRunConfiguration.getTestCaseInfo().getType() == jstestdriver.TestCaseInfo.ASYNC_TYPE) {
    this.testRunConfiguration_ = testRunConfiguration;
    this.testCaseInfo_ = testRunConfiguration.getTestCaseInfo();
    this.onTestDone_ = onTestDone;
    this.onTestRunConfigurationComplete_ = onTestRunConfigurationComplete;
    this.testIndex_ = 0;
    this.nextTest();
    return true;
  }

  return false;
};

/**
 * Runs the next test in the current test case.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.nextTest = function() {
  console.log('nextTest');
  this.start_ = new this.dateObj_().getTime();
  if (this.testIndex_ < this.testRunConfiguration_.getTests().length) {
    this.testCase_ = new (this.testCaseInfo_.getTemplate());
    this.testName_ = this.testRunConfiguration_.getTests()[this.testIndex_];
    this.errors_ = [];
    console.log('next test: ' + this.testName_);
    this.startSetUp();
  } else {
    this.testRunConfiguration_ = null;
    this.testCaseInfo_ = null;
    this.onTestDone_ = null;
    this.testIndex_ = 0;
    this.testCase_ = null;
    this.testName_ = null;
    this.start_ = null;
    this.errors_ = null;
    this.onTestRunConfigurationComplete_();
    this.onTestRunConfigurationComplete_ = null;
  }
};


/**
 * Starts the next phase of the current test in the current test case. Creates a
 * herd to manage the callbacks spawned during this phase, executes the phase
 * catching any exceptions, and then hands the control over to the herd to
 * call onHerdComplete when it empties.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.start = function(
    onHerdComplete, invokeMethod) {
  console.log('start');

  // Create a new herd of callbacks that will call invokeMethod() once all callbacks complete.
  var herd = new (this.herdConstructor_)(jstestdriver.setTimeout, this.testCase_, onHerdComplete);

  // Attempt to invoke the method. The method will add zero or more asynchronous callbacks
  // to the herd. If the method throws an error, add that error to the list.
  if (invokeMethod) {
    try {
      invokeMethod(herd);
    } catch (e) {
      this.errors_.push(e);
    }
  }

  // If invokeMethod() schedules any asynchronous callbacks, maybeComplete() does nothing. The herd will
  // call onHerdComplete() once all the scheduled callbacks complete or expire.
  //
  // If invokeMethod() schedules no asynchronous callbacks, maybeComplete() schedules an immediate
  // call to onHerdComplete().
  herd.maybeComplete();
};


/**
 * Starts the setUp phase.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.startSetUp = function() {
  console.log('startSetUp');
  var runner = this;
  this.start(function(errors) {
    runner.finishSetUp(errors);
  }, this.testCase_.setUp);
};

/**
 * Finishes the setUp phase and reports any errors. If there are errors it
 * initiates the tearDown phase, otherwise initiates the testMethod phase.
 *
 * @param errors errors caught during the current asynchronous phase.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.finishSetUp = function(errors) {
  console.log('finishSetUp');
  this.errors_ = this.errors_.concat(errors);
  if (this.errors_.length) {
    this.startTearDown();
  } else {
    this.startTestMethod();
  }
};

/**
 * Starts the testMethod phase.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.startTestMethod = function() {
  console.log('startTestMethod');
  var runner = this;
  this.start(function(errors) {
    runner.finishTestMethod(errors);
  }, this.testCase_[this.testName_]);
};

/**
 * Finishes the testMethod phase and reports any errors. Continues with the
 * tearDown phase.
 *
 * @param errors errors caught during the current asynchronous phase.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.finishTestMethod = function(errors) {
  console.log('finishTestMethod');
  this.errors_ = this.errors_.concat(errors);
  this.startTearDown();
};


/**
 * Start the tearDown phase.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.startTearDown = function() {
  console.log('startTearDown');
  var runner = this;
  this.start(function(errors){
    runner.finishTearDown(errors);
  }, this.testCase_.tearDown);
};


/**
 * Finishes the tearDown phase and reports any errors. Submits the test results
 * to the test runner. Continues with the next test.
 *
 * @param errors errors caught during the current asynchronous phase.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.finishTearDown = function(errors) {
  console.log('finishTearDown');
  this.errors_ = this.errors_.concat(errors);
  this.clearBody_();
  this.onTestDone_(this.buildResult());
  this.testIndex_ += 1;
  this.nextTest();
};

/**
 * Builds a test result.
 */
jstestdriver.plugins.async.AsyncTestRunnerPlugin.prototype.buildResult = function() {
  console.log('buildResult');
  var end = new this.dateObj_().getTime();
  var result = 'passed';
  var message = '';
  if (this.errors_.length) {
    result = 'failed';
    message = JSON.stringify(this.errors_);
  }
  return new jstestdriver.TestResult(
      this.testCaseInfo_.getTestCaseName(), this.testName_, result, message,
      jstestdriver.console.getLog(), end - this.start_);
}

/*
 * Copyright 2009 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
jstestdriver.plugins.DefaultPlugin = function(fileLoaderPlugin,
                                              testRunnerPlugin,
                                              assertsPlugin,
                                              testCaseManagerPlugin) {
  this.fileLoaderPlugin_ = fileLoaderPlugin;
  this.testRunnerPlugin_ = testRunnerPlugin;
  this.assertsPlugin_ = assertsPlugin;
  this.testCaseManagerPlugin_ = testCaseManagerPlugin;
};


jstestdriver.plugins.DefaultPlugin.prototype.name = 'defaultPlugin';


jstestdriver.plugins.DefaultPlugin.prototype.loadSource = function(file, onSourceLoaded) {
  return this.fileLoaderPlugin_.loadSource(file, onSourceLoaded);
};


jstestdriver.plugins.DefaultPlugin.prototype.runTestConfiguration = function(testRunConfiguration,
    onTestDone, onTestRunConfigurationComplete) {
  return this.testRunnerPlugin_.runTestConfiguration(testRunConfiguration, onTestDone,
      onTestRunConfigurationComplete);
};


jstestdriver.plugins.DefaultPlugin.prototype.isFailure = function(exception) {
  return this.assertsPlugin_.isFailure(exception);
};


jstestdriver.plugins.DefaultPlugin.prototype.getTestRunsConfigurationFor =
    function(testCaseInfos, expressions, testRunsConfiguration) {
  return this.testCaseManagerPlugin_.getTestRunsConfigurationFor(testCaseInfos,
                                                                expressions,
                                                                testRunsConfiguration);
};
/*
 * Copyright 2009 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
jstestdriver.plugins.AssertsPlugin = function() {
};


jstestdriver.plugins.AssertsPlugin.prototype.isFailure = function(e) {
  return e.name == 'AssertError';
};
/*
 * Copyright 2009 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Plugin that handles the default behavior for the TestCaseManager.
 * @author corysmith@google.com (Cory Smith)
 */
jstestdriver.plugins.TestCaseManagerPlugin = function() {};


/**
 * Write testRunconfigurations retrieved from testCaseInfos defined by expressions.
 * @param {Array.<jstestdriver.TestCaseInfo>} testCaseInfos The loaded test case infos.
 * @param {Array.<String>} The expressions that define the TestRunConfigurations
 * @parma {Array.<jstestdriver.TestRunConfiguration>} The resultant array of configurations.
 */
jstestdriver.plugins.TestCaseManagerPlugin.prototype.getTestRunsConfigurationFor =
    function(testCaseInfos, expressions, testRunsConfiguration) {
  var size = testCaseInfos.length;
  for (var i = 0; i < size; i++) {
    var testCaseInfo = testCaseInfos[i];
    var testRunConfiguration = testCaseInfo.getTestRunConfigurationFor(expressions);

    if (testRunConfiguration != null) {
      testRunsConfiguration.push(testRunConfiguration);
    }
  }
  return true;
};
