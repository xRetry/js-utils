
document.addEventListener("DOMContentLoaded", function() {

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

function handleTriggerEvent(e: InputEvent) {
    let htmlTarget = <HTMLElement> e.currentTarget;

    let menuSelector = htmlTarget.getAttribute('mx-menu');

    let htmlMenu = document.querySelector(menuSelector);
    if (htmlMenu == null || !(htmlMenu instanceof HTMLElement) ) { 
        throw new Error('Specified menu not found'); 
    }

    htmlMenu.style.position = 'absolute';

    let positionTarget = htmlTarget.getBoundingClientRect();

    let spaceToBottom = window.innerHeight 
        - htmlTarget.offsetTop 
        + htmlTarget.offsetHeight 
        + (<HTMLElement>htmlMenu).offsetHeight;

    console.log(spaceToBottom)
    
    // TODO(marco): Show menu on top if not enough space at bottom

    if (spaceToBottom > 10) {
        (<HTMLElement>htmlMenu).style.left = positionTarget.left.toString()+'px';
        (<HTMLElement>htmlMenu).style.top = positionTarget.bottom.toString()+'px';
    } else {
        (<HTMLElement>htmlMenu).style.left = positionTarget.left.toString()+'px';
        (<HTMLElement>htmlMenu).style.bottom = positionTarget.top.toString()+'px';
    }

    htmlMenu.removeAttribute('hidden');
}
