
/*
 * Copyright:   zhigp(novem)
*/

function hdDlgXClick(evt) {
    evt = evt ? evt : window.event;
    evt.target.parentNode.parentNode.style.display = "none";
}

var eDlgXs = document.getElementsByClassName('zdlg_x');
for(let i=eDlgXs.length-1; i>=0; i--) {
    eDlgXs[i].onclick = hdDlgXClick;
}
