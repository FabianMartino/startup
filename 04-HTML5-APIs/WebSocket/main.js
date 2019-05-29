
var url = "wss://echo.websocket.org/";
var output;

function init()
{
  output = document.getElementById("output");
  testWebSocket();
}

/**
 * function in charge of communicating with the url in this case send message and receive the response
 */
function testWebSocket()
{
  websocket = new WebSocket(url);
  websocket.onopen = function() { doSend("Hello World"); };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onMessage(evt)
{
  writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
  websocket.close();
}

function onError(evt)
{
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message)
{
  writeToScreen("SENT: " + message);
  websocket.send(message);
}

/**
 * print out the message
 * @param {*} message 
 */
function writeToScreen(message)
{
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener("load", init, false);
