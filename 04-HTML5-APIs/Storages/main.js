let infoValue = document.getElementById("textArea");

let clear = document.getElementById("btn-clearStorage").addEventListener("click" , function() {
  window.localStorage.clear();
  removeDBElement();
});
let save = document.getElementById("btn-saveText").addEventListener("click" , function() {
  window.localStorage.setItem('Info', infoValue.value);
  addDBElement();
});

let db;
let request = indexedDB.open("DBStorage",3);
//create the storage space
request.onupgradeneeded = function() {
  // The database did not previously exist, so create object stores and indexes.
  db = request.result;
  request.onsuccess = function() {
    db = request.result;  
  };
  let store = db.createObjectStore("DBStorage",{autoIncrement: true});
};


//add element to the indexedDB
function addDBElement(){  
  let objectStore = db.transaction("DBStorage","readwrite").objectStore("DBStorage");
  objectStore.add({Info: infoValue.value});
}
//clear the indexedDB from all elements
function removeDBElement(){  
  let objectStore = db.transaction("DBStorage","readwrite").objectStore("DBStorage");
  objectStore.clear();
}
 