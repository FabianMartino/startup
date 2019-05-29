window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

let infoValue = document.getElementById("textArea");
/**
 * listener for cleaning the content of the local and indexeddb storage
 */
let clear = document.getElementById("btn-clearStorage").addEventListener("click" , function() {
  window.localStorage.clear();
  removeDBElement();
  infoValue.value = "";
});

/**
 * listener for saving the content of the text area into local and indexeddb storage
 */
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
 
//listener for the drag and drop of text files
infoValue.addEventListener('drop', previewFile, false)

/**
 * upload one text file and upload his content into the text area
 * @param {*} file 
 */
function previewFile(file) {
  event.preventDefault();
  infoValue.value = "";
  let files = event.dataTransfer.files;
  let reader = new FileReader()
  reader.readAsText(files[0]);
  reader.onloadend = function() {
    infoValue.value = reader.result;
  }
}
