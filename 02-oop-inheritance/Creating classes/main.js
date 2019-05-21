
 
  class Actor{
    constructor (name, age) {
      this.name  = name;
      this.age = age;
    }
  }

  class Movie {
    constructor (title, year, duration) {
      this._title  = title;
      this._year = year;
      this._duration = duration;
    };
    play(){};
    pause(){};
    resume(){};
  }

  /**
   * test to create two movies
   */

  let m1 = new Movie("John Wick", 2014, 101);
  let m2 = new Movie("HarryPotter", 2004, 120);
  console.log(m1.duration);
  console.log(m1.title);
  console.log(m2.title);
  


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
  

