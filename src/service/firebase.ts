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

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = firebase.database();

export function generateKey(){
    return database.ref().child('pokemons').push().key;
}

export function writePockemonData(objID:string,candidate:{}):void 
{
   database.ref('pokemons/' + objID).update({...candidate}); 
}


export default database;