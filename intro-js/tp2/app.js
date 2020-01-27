// window.onload = function(){
//     var button = document.querySelector('input');
//     button.onclick = function(){
//         alert("bouton cliqué");
//     }
//     // button.onmouseover = function(){
//     //     alert("souris sur le bouton");
//     // }
//     console.log(button);
// }

window.onload = function(){
    var input = document.querySelector('input');
    input.onchange = function(){
        alert(input.value);
    }
}