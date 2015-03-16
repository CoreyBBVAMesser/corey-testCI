//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "HelloWorld",
    appName: "HelloWorld",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "8080",
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://127.0.0.1:8080/middleware/MWServlet",
    secureurl: "http://127.0.0.1:8080/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};