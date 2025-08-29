class Timer {
  constructor(title, delay, stopCount) {
    this.title = title;
    this.delay = delay;
    this.stopCount = stopCount;
    this.cyclesLeft = stopCount;
    this.isRunning = true; 

    console.log(`Timer ${title} started delay: ${delay}, stopCount: ${stopCount})`);

    this.timerId = setInterval(() => {
      if (!this.isRunning) {
        return;
    }

      this.cyclesLeft--;
      console.log(`Timer ${this.title} Tick cycles left ${this.cyclesLeft}`);
      
      if (this.cyclesLeft <= 0) {
        this.clearInterval();
      }
    }, this.delay);
  }
  
  clearInterval() {
    this.isRunning = false;
    clearInterval(this.timerId);
    console.log(`Timer ${this.title} stopped`);
  }
}

function runTimer(id, delay, counter) {
  if (counter <= 0) {
    console.log("StopCount must be greater than 0");
    return;
  }
  new Timer(id, delay, counter);
}

runTimer("Bleep", 1000, 5);

