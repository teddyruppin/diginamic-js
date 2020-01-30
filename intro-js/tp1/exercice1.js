


    function exo1(){
        let a = 0;
        let b = 1;
        let n= 0;
        var d = document.querySelector("#fibo")
        while (n < 20){
            let c = a + b;
            a = b;
            b = c;
            n++;
            console.log(c);

            var div = document.createElement("button");
            div.textContent = c;
            d.appendChild(div);
        }
    }
    exo1();


    