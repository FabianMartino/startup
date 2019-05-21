
let social = {
  share(friendName) {
    console.log(`${friendName} share ${this.title}`);
  },
  like(friendName) {
    console.log(`${friendName} like ${this.title}`);
  }
}


class Movie {
  constructor (title, year, duration) {
    this.title  = title;
    this.year = year;
    this.duration = duration;
  };
  play(){};
  pause(){};
  resume(){};
}
Object.assign(Movie.prototype, social); //is used so movie can inherit the function from social

  //test
  let m1 = new Movie("Inside Man", 2006, 129);
  m1.like("Fabian Martino");
  m1.share("Fabian Martino");