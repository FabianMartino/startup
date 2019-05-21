class Logger{
  constructor(){
    this.listen = document.addEventListener("loggin", function(e){ log(e)});
  };
  log(info){
    console.log("The "+info+" event has been emitted");
  };
}