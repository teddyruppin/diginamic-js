
// let Sum = function(a,b = 0){
//     return a+b;
// };
// let res = Sum(10,3);
// console.log(res);




//     function sum(a,b){
//      return a+b;
//     }
//     let res = sum(5,2);
//     console.log(res);


 

    function test(){
        a = prompt ('rentrer une valeur pour test1');
        console.log(a);
        for (let i = 1; i <= a; i++){
            if (i%15 == 0){
                 console.log('FizzBuzz');}
            else if (i%5 == 0){
                 console.log('Buzz') ;  } 
            else if (i%3 == 0){
                 console.log('Fizz');}
            else {
                 console.log(i);
            }  
        }
    }

    function exo1(){
        let a = 0;
        let b = 1;
        let n= 0;
        while (n < 20){
            let c = a + b;
            a = b;
            b = c;
            n++;
            console.log(c);
        }
    }

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


    test();
    exo1();
    exo2();