import EventEmitter from './../eventEmitter.js';

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
   * @param {object} callback 
   */
  on(eventName, callback){
    if (eventName === "play"||eventName === "pause"|| eventName === "resume") {
      if( !this.events[eventName] ) {
        this.events[eventName] = [];
      }
      if(this.events[eventName]) {
        for( var i = 0; i < this.events[eventName].length; i++){ 
          if ( this.events[eventName][i] === callback) {
            return;
          }
        }
        this.events[eventName].push(callback);
      }
    }
  };

  /**
   * definition of the function inherit from eventEmitter and execute the function log of the object
   * @param {*} eventName 
   */
  emit(eventName){
    if(this.events[eventName]) {
      this.events[eventName].forEach(fn => fn.log(eventName));
    }
  };

  /**
   * add one or more actors to the cast in movie
   * @param {*} cast 
   */
  addCast(cast){
    this.cast.push(cast);
  };
}

