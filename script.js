
const loginScreen = document.getElementById("loginScreen");
const mainUI = document.getElementById("mainUI");
const clickSound = document.getElementById("clickSound");

let userData = {
  rank: "E",
  stats: {
    strength: 0,
    agility: 0,
    endurance: 0,
    speed: 0,
    vitality: 0
  },
  inventory: [],
  username: ""
};

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    playClick();
    userData.username = username;
    document.getElementById("displayUsername").textContent = username;
    loginScreen.classList.add("hidden");
    mainUI.classList.remove("hidden");
  } else {
    alert("Please enter both username and password.");
  }
}

function startWorkout() {
  playClick();
  const workouts = {
    E: ["10 pushups", "15 jumping jacks"],
    D: ["20 squats", "15 sit-ups"],
    C: ["30 pushups", "HIIT 10 min"],
    B: ["Explosive burpees", "Weighted squats"],
    A: ["One-arm pushups", "30s planks x 3"],
    S: ["Resistance circuits", "Sled pushes"],
    SSS: ["Shadow Boss Workout - 15 min intense HIIT"]
  };
  const level = userData.rank;
  const chosen = workouts[level][Math.floor(Math.random() * workouts[level].length)];
  document.getElementById("aiOutput").textContent = "Workout: " + chosen;
  increaseStats(level);
}

function increaseStats(rank) {
  const gain = {
    E: 1,
    D: 2,
    C: 3,
    B: 4,
    A: 5,
    S: 6,
    SSS: 10
  };
  userData.stats.strength += gain[rank];
  userData.stats.endurance += gain[rank];
  updateStatsDisplay();
}

function updateStatsDisplay() {
  document.getElementById("strength").textContent = userData.stats.strength;
  document.getElementById("agility").textContent = userData.stats.agility;
  document.getElementById("endurance").textContent = userData.stats.endurance;
  document.getElementById("speed").textContent = userData.stats.speed;
  document.getElementById("vitality").textContent = userData.stats.vitality;
}

function generateQuest() {
  playClick();
  const quests = [
    "50 jumping jacks",
    "15 burpees",
    "Stretch for 5 minutes",
    "Sprint 100m",
    "Hold plank for 1 minute"
  ];
  const quest = quests[Math.floor(Math.random() * quests.length)];
  document.getElementById("questDisplay").textContent = "Today's Quest: " + quest;
  userData.inventory.push("Loot Box");
  updateInventory();
}

function updateInventory() {
  const list = document.getElementById("inventoryList");
  list.innerHTML = "";
  userData.inventory.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
