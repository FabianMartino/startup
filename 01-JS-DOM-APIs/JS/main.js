{

  document.addEventListener("DOMContentLoaded", function(e){
    let section = document.getElementById('hiddenSection');
    section.classList.add('visible');
  });

  function showAlert(){
    alert("a event is ocurring");
  }

  let button = document.getElementById("btn-event");
  button.onclick = function() {
    getResponse();
  };

  function getResponse(){
    fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(data => document.getElementById("hiddenSection").innerHTML = data.value.joke)
    .catch(err => alert("sorry, there are no jokes"));
  }

}