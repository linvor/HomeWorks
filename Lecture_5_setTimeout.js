class Timer {
  constructor(initialTime) {
    this.initialTime = initialTime;
  }

  start() {
    if (this.timeleft > 0) this.initialTime = this.timeleft;
    this.finishTime = new Date().getTime() + this.initialTime;
    let savedThis = this;
    this.timerId = savedThis.timerId;
    (function run() {
      savedThis.timerId = setTimeout(function() {
        if (new Date().getTime() >= savedThis.finishTime) {
          savedThis.timeOver();
          savedThis.stop();
        } else {
          run();
        }
      }, 100);
    })();
  }

  stop() {
    clearTimeout(this.timerId);
    this.timeleft = this.finishTime - new Date().getTime();
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
