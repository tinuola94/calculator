
function mode(){
var body = document.getElementById('body');
var mode = body.getAttribute('data-mode');

if (mode == 'normal') {
    body.setAttribute('data-mode', 'night');
    
} else if (mode == 'night') {
    body.setAttribute('data-mode', 'normal');
    
}
}