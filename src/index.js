const robot = require("robotjs");
const cron = require("node-cron");

const key = ["w", "a", "s", "d"];

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1));
};

cron.schedule("* * * * *", () => {
  const num = randomNum(1, 4);
  const pressKey = key[num];
  console.log("lift all");
  robot.keyToggle("w", "up");
  robot.keyToggle("a", "up");
  robot.keyToggle("s", "up");
  robot.keyToggle("d", "up");
  console.log(`key[${num}] = press ${pressKey}`);
  robot.keyToggle(pressKey, "down");
});
