import robot from "robotjs";
import cron from "node-cron";

const key = ["w", "a", "s", "d"];

const getKey = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) - 1;
};

setTimeout(() => {
  cron.schedule("* * * * *", () => {
    console.log("lift all");
    robot.keyToggle("w", "up");
    robot.keyToggle("a", "up");
    robot.keyToggle("s", "up");
    robot.keyToggle("d", "up");
    console.log("press");
    robot.keyToggle(key[getKey(1, 4)], "down");
  });
}, 2000);
