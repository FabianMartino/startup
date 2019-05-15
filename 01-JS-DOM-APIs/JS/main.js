{
  /**
   * when the content of the DOM is load call the fade in made in css
   */
  document.addEventListener("DOMContentLoaded", function(e){
    let section = document.getElementById('hiddenSection');
    section.classList.add('visible');
  });

  /**
   * alert requested in Ej 2.2
   */
  function showAlert(){
    alert("a event is ocurring");
  }

  let button = document.getElementById("btn-event");
  button.onclick = function() {
    getResponse();
  };

  var config = {url: 'http://api.icndb.com/jokes/random' ,
  };

  var configParam = {url: 'https://api.github.com/search/repositories' ,
                text: '?q='+'JavaScript'
                
  };
  /**
   * Detect when the input text "search" is modified and start the search with the new value
   */
  document.getElementById('search').onchange = function(e){
    configParam.text = '?q='+ document.getElementById('search').value;
    request = new Request( configParam.url+configParam.text );
    let conteinerList = document.getElementById("contentList");
    if (conteinerList.childElementCount >1){
      conteinerList.lastChild.remove();
    }
    getResponseParam();
  }
  let request

  /**
   * Bring a joke from a API and assign it in the hidden section
   */
  function getResponse(){
    fetch( config.url ).then( response => response.json() )
    .then( data => document.getElementById("textConteiner").innerHTML = data.value.joke)
    .catch( e => document.getElementById('hiddenSection').style.backgroundColor = "red");
  
  }
  /**
   * Receive a json and create a list using the url 
   * @param {json} data 
   */
  function createLists(data){
    let lista = document.createElement('ul');
    data.items.forEach(item => {
      let element = document.createElement('li');
      let name = document.createTextNode(item.url);
      element.appendChild(name)
      lista.appendChild(element);
    });
    return lista
  }
  /**
   * Make a request to a API and add a list made of that
   */
  function getResponseParam(){
    fetch( request ).then( response => response.json() )
    .then( data => document.getElementById("contentList").appendChild(createLists(data)))
    .catch( e => document.getElementById('contentList').style.backgroundColor = "red");
  
  }


   /**
    * From a given matrix create the html element to form a table
    * @param {array} matriz 
    */

  function createTable(matriz){
    console.log('dvnaovdnjkla');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tfile = document.createElement('tr');
    for (let index = 0; index < matriz.length; index++) {
      let value = document.createTextNode(matriz[0][index])
      let tcolumnHead = document.createElement('th');
      tcolumnHead.appendChild(value);
      tfile.appendChild(tcolumnHead);
    }
    console.log(tfile);
    thead.appendChild(tfile);
    table.appendChild(thead);
    let tbody = document.createElement('tbody');
    for (let file = 1; file < matriz.length; file++) {
      let tfile = document.createElement('tr');
      for (let column = 0; column < matriz.length; column++) {
        let tcolumn = document.createElement('td');
        let value = document.createTextNode(matriz[file][column]);
        tcolumn.appendChild(value);
        tfile.appendChild(tcolumn);
      }
      tbody.appendChild(tfile);
    }
    table.appendChild(tbody);
    document.getElementById('hiddenSection').appendChild(table) ;
  }
}

