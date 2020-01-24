
    function exo2(){
        let a = 0;
        let b = 1;
        let n = prompt('rentrer une valeur pour la boucle while (exo2)');
        document.write(n);
        while (n < 20){
            let c = a + b;
            a = b;
            b = c;
            n++;
            document.write(c + ' ');
        }
    }

    exo2();