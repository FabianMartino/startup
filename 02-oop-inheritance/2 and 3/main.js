
  class EventEmitter{
    constructor(){
      this.events = {};
    };
    on(eventName, callback){
      if( !this.events[eventName] ) {
        this.events[eventName] = [];
      }
      for( var i = 0; i < this.events[eventName].length; i++){ 
        if ( this.events[eventName][i] === callback) {
          return;
        }
      }
      this.events[eventName].push(callback);
    };

    emit(eventName){
      if(this.events[eventName]) {
        this.events[eventName].forEach(fn  => fn(data))
      }
    };

    off(eventName, callback){
      if( this.events[eventName] ) {
        for( var i = 0; i < this.events[eventName].length; i++){ 
          if ( this.events[eventName][i] === callback) {
            this.events[eventName].splice(i, 1); 
            i--;
          }
      }
      }
    };
  }

  class Actor{
    constructor (name, age) {
      this.name  = name;
      this.age = age;
    }
  }

  class Logger{
    constructor(){
      let self = this;
      this.listen = document.addEventListener("loggin", function(e){self.log(e.detail)}, false);
    };
    log(info){
      console.log("The "+info+" event has been emitted");
    };
  }

  class Movie extends EventEmitter{
    constructor (title, year, duration) {
      super();
      this.title  = title;
      this.year = year;
      this.duration = duration;
      this.cast = new Array();
    };
    play(){
      this.emit("play");
    };
    pause(){
      this.emit("pause");
    };
    resume(){
      this.emit("resume");
    };

    /**
     * Definition of the function inherit from eventEmitter but only accept event from movie
     * @param {String} eventName
     */
    on(eventName){
      if (eventName === "play"||eventName === "pause"|| eventName === "resume") {
        if( !this.events[eventName] ) {
          this.events[eventName] = [];
        }
      }
    };

    /**
     * definition of the function inherit from eventEmitter and execute the function log of the object
     * @param {*} eventName 
     */
    emit(eventName){
      if(this.events[eventName]) {
        var event = new CustomEvent("loggin", { 'detail': eventName });
        document.dispatchEvent(event);
      }
    };

     /**
     * definition of the function inherit from eventEmitter to unsubscribe
     * @param {*} eventName 
     */
    off(eventName){
      if( this.events[eventName] ){
        delete this.events[eventName];
      }
    }

    /**
     * add one or more actors to the cast in movie
     * @param {*} cast 
     */
    addCast(cast){
      this.cast.push(cast);
    };
  }

  
  let m1 = new Movie("John Wick", 2014, 101);

  //test addCast
  let a1 = new Actor("Keanu Reeves",54);
  let c1 = [
    new Actor('John Leguizamo', 54),
    new Actor('Willem Dafoe', 63),
    new Actor('Lance Reddick', 56)
  ];
  m1.addCast(a1);
  m1.addCast(c1);


  // test eventEmitter
  let l = new Logger();
  m1.on("play");  
  m1.play();

