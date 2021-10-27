const raisinAlarm = function(cookie) {
  let alert = "";
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return alert = "Raisin alert!";
    }
  }
  return alert = "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  let alert = [];
  for (let i = 0; i < cookies.length; i++) {
    let raisinCheck;
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "🍇") {
        raisinCheck = true;
      }
    }
    if (!raisinCheck) {
      alert.push("All good!");
    } else {
      alert.push("Raisin alert!");
    }
  }
  return alert;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));