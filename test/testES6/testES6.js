// //Comment envoyer un tableau de nombre à la méthode Math.max, en utilisant le spread:

// const tab = [ 1,2,3,4,5,6,7,8,9,4,5,6,8,7,5,5,5,6,8,11,8,5,878,55,68];
// // const [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r] = tab;
// // console.log(Math.max(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r))
// console.log(Math.max(...tab));


// class Animal {

    
//     constructor(Nb_pattes,Nb_oeil,Vocalise) {
//         this.Nb_pattes = Nb_pattes;
//         this.Nb_oeil = Nb_oeil;
//         this.Vocalise = Vocalise;
//     }

//     // PATTES
//     get Nb_pattes(){
//         return this._Nb_pattes;
//     }

//     set Nb_pattes(str){
//         this._Nb_pattes = str;
//     }

//     // OEIL 

   

//     get Nb_oeil(){
//         return this._Nb_oeil;
//     }  

//     set Nb_oeil(str){
//         this._Nb_oeil = this._Nb_oeil;
//     }

//     // VOCALISE

//     get Vocalise(){
//         return this._Vocalise;
//     }  

//     set Vocalise(str){
//         this._Vocalise = this._Vocalise;
//     }

//     afficherNbPattes(){
//         console.log("je possede " + this._Nb_pattes + " pattes");
//     }
// }

// class Chien extends Animal {
//     constructor(){
//         super();
//         this._Nb_pattes = 4;
//         this._Nb_oeil = 2;
//         this._Vocalise = "l'aboiement"
//     }

//     afficherVocalise(){
//         console.log("Je suis un chien et ma vocalise est " + this._Vocalise);
//         }
// }

// class Chat extends Animal {
//     constructor(){
//         super();
//         this._Nb_pattes = 4;
//         this._Nb_oeil = 2;
//         this._Vocalise = "le miaulement"
//     }

//     afficherVocalise(){
//         console.log("Je suis un chat et ma vocalise est " + this._Vocalise);
//         }
    
//     afficherCaractere(){
//         console.log("je suis une veritable plaie pour l'humanité")
//     }
// }

// var a = new Animal();
// var c = new Chien();
// var cat = new Chat();

// c.afficherVocalise();
// c.afficherNbPattes();
// cat.afficherVocalise();
// cat.afficherNbPattes();
// cat.afficherCaractere();
 




// let p = fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
// .then(r => r.json()) // recuperer le json de l'url
// .then(d => console.log(d));



// let p = fetch('https://api.spacexdata.com/v3/launches/latest')
// .then(r => r.json())
// .then(d => console.log(d)); 



// async function test() {
//     let response = await fetch('https://api.spacexdata.com/v3/launches/latest')
//     .then(r => r.json());
//     console.log(response);
// }



// //   prof

// async function fusee() {
//     let response = await fetch('https://api.spacexdata.com/v3/launches/latest')
//     if  (response.ok){
//         let data = await response.json();
//         console.log(JSON.stringify(data.details));
//     }else{
//         throw new Error(response.statusText);
//     }
// }
// fusee();
// console.log("other process...");


