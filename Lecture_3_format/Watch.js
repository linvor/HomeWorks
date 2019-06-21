class Watch {
  constructor() {
    this.interval = null;
  }

  start() {
    this.interval = setInterval(function() {
      let date = new Date();
      //console.log(date.toLocaleTimeString());
      let hours = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();

      if (hours < 10) hours = "0" + hours;
      if (min < 10) min = "0" + min;
      if (sec < 10) sec = "0" + sec;

      let time = hours + ":" + min + ":" + sec;

      console.log(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    console.clear();
  }
}

const watch = new Watch();

watch.start();

setTimeout(() => {
  // Остановится через 10 секунд
  watch.stop();
}, 10000);
