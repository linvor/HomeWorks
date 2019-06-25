class Speaker {
  constructor(name, verb) {
    this.name = name;
    this.verb = verb;
  }

  set verb(verbal) {
    this.verbal = verbal;
  }
  get verb() {
    return this.verbal || "says";
  }

  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'");
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name);
  }
  speak(text) {
    super.speak.call(this, text.toUpperCase());
  }
}

new Shouter("Dr. Loudmouth").speak("hello there");
