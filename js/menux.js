document.addEventListener("DOMContentLoaded", function () {
    initMenux();
});
function initMenux() {
    let triggers = document.querySelectorAll('[mx-menu]');
    for (let htmlTrigger of triggers) {
        let triggerEvent = htmlTrigger.getAttribute('mx-trigger');
        if (triggerEvent === '') {
            triggerEvent = 'click';
        }
        htmlTrigger.addEventListener(triggerEvent, handleTriggerEvent);
    }
}
function handleTriggerEvent(e) {
    let htmlTarget = e.currentTarget;
    let menuSelector = htmlTarget.getAttribute('mx-menu');
    let htmlMenu = document.querySelector(menuSelector);
    if (htmlMenu == null || !(htmlMenu instanceof HTMLElement)) {
        throw new Error('Specified menu not found');
    }
    htmlMenu.style.position = 'absolute';
    let positionTarget = htmlTarget.getBoundingClientRect();
    let spaceToBottom = window.innerHeight
        - htmlTarget.offsetTop
        + htmlTarget.offsetHeight
        + htmlMenu.offsetHeight;
    console.log(spaceToBottom);
    if (spaceToBottom > 10) {
        htmlMenu.style.left = positionTarget.left.toString() + 'px';
        htmlMenu.style.top = positionTarget.bottom.toString() + 'px';
    }
    else {
        htmlMenu.style.left = positionTarget.left.toString() + 'px';
        htmlMenu.style.bottom = positionTarget.top.toString() + 'px';
    }
    htmlMenu.removeAttribute('hidden');
}
//# sourceMappingURL=menux.js.map