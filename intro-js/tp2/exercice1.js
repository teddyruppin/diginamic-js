
function nombreAlea (){
    let z = 0;
    z = Math.trunc(Math.random()*11);
    console.log(z); 
    return z;
}


let a = 5;
let y = nombreAlea();

function decoChance(){
    if (a != 0){
        a--;
    } else {
        alert("perdu");
    } 
    console.log(a);
    return a;
    
}

window.onload = function(){
    decompte();
}


function decompte(){
    var input = document.querySelector('#deco');
    input.onclick = function(){ 
        var span = document.querySelector('#compt');
        decoChance();
        span.textContent = a;

        let x = document.getElementById("#test_nombre")
        var input = document.querySelector('#test_nombre');
        
        if (x < y){
            alert("plus grand");
        }
        if (x > y){
            alert("plus petit");
        } else if(x == y) {
        } alert("gagné");
    }
    
}



