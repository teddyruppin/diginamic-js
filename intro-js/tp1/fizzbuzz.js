
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

    test();