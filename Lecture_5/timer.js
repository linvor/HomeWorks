class Timer {
  constructor(initialTime) {
    this.initialTime = initialTime;
  }

  start() {
    this.finishTime = new Date().getTime() + this.initialTime;
    this.timerId = setInterval(() => {
      if (new Date().getTime() >= this.finishTime) {
        this.timeOver();
        this.stop();
      }
    }, 100);
  }

  stop() {
    clearInterval(this.timerId);
  }

  reset() {
    this.initialTime = 0;
  }

  addTime(time) {
    this.finishTime += time;
  }

  subtractTime(time) {
    this.finishTime -= time;
  }

  timeOver() {
    console.log("time over");
  }
}
