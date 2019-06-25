class Speaker {
  constructor(name, verb) {
    this.name = name;
    this.verbal = verb;
  }

  set sVerb(verbal) {
    verbal = this.verbal || "says";
  }
  get verb() {
    return this.verbal;
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
