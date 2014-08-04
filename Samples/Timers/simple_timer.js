function simpleTimer(consoleTimer) {
    console.timeEnd(consoleTimer);
}

console.time("twoSecond");
setTimeout(simpleTimer, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimer, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimer, 5000, "fiveSecond");
console.time("50MilliSecond");
setTimeout(simpleTimer, 50, "50MilliSecond");
