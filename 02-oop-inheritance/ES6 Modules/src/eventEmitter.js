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
export default EventEmitter;


