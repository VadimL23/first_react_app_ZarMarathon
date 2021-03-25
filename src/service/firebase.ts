import firebase from "firebase/app";
import  "firebase/database";

  var firebaseConfig = {
    apiKey: "AIzaSyBA7bgI2h5SyZB4zjuEhJnY-ihtamtjsDU",
    authDomain: "pokemon-game-197e3.firebaseapp.com",
    databaseURL: "https://pokemon-game-197e3-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-197e3",
    storageBucket: "pokemon-game-197e3.appspot.com",
    messagingSenderId: "891154667316",
    appId: "1:891154667316:web:1469ac12762c03cecfb761"
  };


  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
 

//const req = async()=> {const resp = await firebase.database().ref("pokemons").once("value").then((snapshot)=>snapshot.val()).then((res)=>console.log(Object.entries(res)));
//                
//                      }
//req();

export default class FireBase {
  
    fire:any;
    database:any;

init(){
      console.log("Init firebase");
     if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
        this.fire = firebase;
        this.database  = this.fire.database();
    
}


getPockemonsOnce = async () =>{
    return await this.database.ref("pokemons").once("value").then((snapshot)=>snapshot.val());
}

generateKey(){
    return this.database.ref().child('pokemons').push().key;
}

writePockemonData(objID:string,candidate:{}):void 
{
   this.database.ref('pokemons/' + objID).update({...candidate}); 
}

  postPockemon = (key,pockemon) =>{
      this.database.ref(`pokemons/${key}`).set(pockemon);
      
      
  }  
  
  addPockemon = (data, cb) =>{
      
      const newKey = this.database.ref().child("pokemons").push().key;
      this.database.ref("pokemons/" + newKey).set(data).then(()=>cb());
      

  }
  
  getPockemonSoket = (cb)=>{
      this.init();
      this.database.ref('pokemons').on('value',(snapshot)=>{
     cb(snapshot.val());     
          
      })
  }
    
    
}







