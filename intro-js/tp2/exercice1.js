


function init(){
    let a = 5;
    let y = nombreAlea();
    var input = document.querySelector('#deco');

    function nombreAlea (){
        let z = 0;
        z = Math.trunc(Math.random()*11);
        console.log('nombre alea ' + z); 
        return z;
    }


    function decoChance(){
        if (a != -2){
            a--;
        }
        console.log(a);
        return a;
        
    }

    window.onload = function(){
        main();
    }


    function main(){
        
        input.onclick = function(){ 
            var span = document.querySelector('#compt');
            span.textContent = a;
            decoChance();
            if (a == -1){
                alert("perdu");
                a = 5
                y = nombreAlea();
            }
            

            var x = document.getElementById("test_nombre").value;
            console.log(x);
            console.log('1 '+ typeof( x));
            var x = parseInt(x,10);
            console.log('2 ' + typeof( x ));


            //if ( typeof(x) != Number){
    
                if ( x > y){
                    alert("trop grand")
                }
                if ( x < y){
                    alert("trop petit")
                }
                if ( x == y){
                    alert(" BINGOOOOOOOOOOO");
                    a = 5
                    y = nombreAlea();
                }
            //}else { alert("taper un nombre")};
        }
    
    }

}
init();
