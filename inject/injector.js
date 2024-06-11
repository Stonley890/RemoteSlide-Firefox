console.info("Injector active")
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {  // Updated line
    console.log(msg)
    if (msg.action == 'inject_controller') {
        $.get(chrome.extension.getURL('/inject/controller/overlay.html'), function (data) {
            $("body").append("<div id='remoteSlideOverlayHtmlContainer'></div>");
            $("#remoteSlideOverlayHtmlContainer").append($.parseHTML(data));
        });
    }
});
