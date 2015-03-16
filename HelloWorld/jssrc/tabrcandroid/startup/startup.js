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

function fprefreshgesture_function() {
    var y = {
        fingers: 1,
        swipedistance: 30,
        swipevelocity: 60
    };
    try {
        kony.application.setGestureRecognizerForAllForms(2, y, function(widgetRef, gestureInfo) {
            if (kony.os.toNumber(gestureInfo["gestureType"]) == 2) {
                if (kony.os.toNumber(gestureInfo["swipeDirection"]) == 2) {
                    kony.application.launchApplication(null);
                }
            }
        });
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture:" + err.message);
    }
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: fprefreshgesture_function,
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