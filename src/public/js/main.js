console.log('hello word !');

function drop(ev) {
    ev.preventDefault();
    var d = ev.dataTransfer.getData("the_id");
    ev.target.appendChild(document.getElementById(d));
}