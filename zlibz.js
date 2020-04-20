
/*
 * Copyright:   zhigp(novem)
*/

function zRdm(min, max) {
    return (min + Math.floor(Math.random() * (max-min+1)));
}

function zLoadJs(url) {
        let js = document.createElement('script');
js.src = url;
document.body.appendChild(js);
}

// flush the src if chrome console is open
function zBreakConsole() {
    let z = document.createElement('div');
    Object.defineProperty(z, 'id', {
        get: function () {
            document.open();
            document.write('');
            document.close();
            location.replace('index.htm');
        }
    });
    console.log(z);
}

//
// Evt Utilities:
//
function zEvtGetEvt(evt) {
    return evt ? evt : window.event;
}

function zEvtGetTarget(evt) {
    evt = evt ? evt : window.event;
    return evt.target || evt.srcElement;
}

function zEvtAddHandler(elmt, type, hdFunc) {
    if(elmt.addEventListener)
        elmt.addEventListener(type, hdFunc, false);
    else if(elmt.attachEvent)
        elmt.attachEvent('on'+type, hdFunc);
    else
        elmt['on'+type] = hdFunc;
}

function zEvtRemoveHandler(elmt, type, hdFunc) {
    if(elmt.removeEventListener)
        elmt.removeEventListener(type, hdFunc, false);
    else if(elmt.detachEvent)
        elmt.detachEvent(type, hdFunc);
    else
        elmt['on'+type] = null;
}

function zEvtPreventDefault(evt) {
    evt = evt ? evt : window.event;
    if(evt.preventDefault)
        evt.preventDefault();       // DOM
    else
        evt.returnValue = false;    // IE
    
    return false;
}

function zEvtStopPropagation(evt) {
    evt = evt ? evt : window.event;
    if(evt.stopPropagation)
        evt.stopPropagation();      // DOM
    else
        evt.cancelBubble = true;    // IE
    
    return false;
}

function zEvtDisDefault(evt) {
    zEvtPreventDefault(evt);
    zEvtStopPropagation(evt);

    return false;
}
