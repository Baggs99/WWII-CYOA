const adventures = {
  american: {
    label: "American infantry: Omaha Beach",
    openingTitle: "Omaha in the gray light",
    openingText:
      "The landing craft drops its ramp into cold surf. Machine-gun fire snaps overhead, smoke claws across the beach, and your squad needs someone to get a radio past the seawall.",
    success: "You carried the signal inland. By dusk, engineers are opening a road off the beach and your squad is still together.",
    hardWon: "You made it off the beach, battered but moving. The radio is damaged, yet the route you marked helps the next wave find cover.",
    failure: "The push stalls at the seawall. You survive the morning, but the radio never reaches the platoon that needed it.",
    scenes: [
      {
        title: "The ramp falls",
        text: "The coxswain yells for everyone to move. The shortest path is straight through the surf, but a wrecked obstacle offers partial cover.",
        choices: [
          { text: "Sprint for the obstacle and wave the squad behind you.", score: 1 },
          { text: "Charge straight ahead before fear locks anyone in place.", score: 0 },
        ],
      },
      {
        title: "Pinned near the shingle",
        text: "A medic is dragging a wounded engineer. The radio operator points at a gap in the smoke that may not stay open.",
        choices: [
          { text: "Help the medic pull the engineer into cover.", score: 1 },
          { text: "Use the smoke gap and keep the radio moving.", score: 0 },
        ],
      },
      {
        title: "The wire",
        text: "Barbed wire cuts across the exit. Bangalore torpedoes are scattered near a crater, but reaching them means crossing open ground.",
        choices: [
          { text: "Coordinate covering fire before anyone moves.", score: 1 },
          { text: "Dash alone for the explosives.", score: 0 },
        ],
      },
      {
        title: "Up the bluff",
        text: "The platoon finds a narrow trail. It is steep, muddy, and exposed, but it bypasses a fortified draw.",
        choices: [
          { text: "Climb the trail quietly with scouts in front.", score: 1 },
          { text: "Attack the draw before the defenders regroup.", score: 0 },
        ],
      },
      {
        title: "The farmhouse",
        text: "A farmhouse overlooks the road inland. You see movement in the window and hear a civilian voice from the cellar.",
        choices: [
          { text: "Clear the house room by room and protect the cellar.", score: 1 },
          { text: "Call artillery on the building immediately.", score: 0 },
        ],
      },
      {
        title: "The final transmission",
        text: "Your radio crackles. Command needs the road status now, but the squad sees a counterattack forming in the hedgerow.",
        choices: [
          { text: "Send the report, then shift the squad to the hedgerow.", score: 1 },
          { text: "Forget the report and throw everyone into the fight.", score: 0 },
        ],
      },
    ],
  },
  soviet: {
    label: "Soviet rifleman: Vistula bridgehead",
    openingTitle: "Across the Vistula",
    openingText:
      "Dawn stains the river red and gold. Your unit holds a shallow bridgehead while engineers lash pontoons together under fire.",
    success: "The bridgehead holds. Tanks grind across the pontoons before nightfall, and the road west opens another mile.",
    hardWon: "The crossing survives by inches. Your company is thinned out, but the engineers finish enough for reinforcements to arrive.",
    failure: "The bridgehead collapses back to the riverbank. The army will cross again, but not today.",
    scenes: [
      {
        title: "The first barrage",
        text: "Shells rake the bank. A green replacement freezes beside a crate of ammunition that everyone needs.",
        choices: [
          { text: "Drag him and the ammunition into the trench.", score: 1 },
          { text: "Leave him and take only what you can carry.", score: 0 },
        ],
      },
      {
        title: "Orders from the captain",
        text: "The captain wants eyes on a ruined mill. Smoke makes the direct route hard to read.",
        choices: [
          { text: "Circle through the orchard and report what you see.", score: 1 },
          { text: "Rush the mill before the enemy can reinforce it.", score: 0 },
        ],
      },
      {
        title: "A machine-gun nest",
        text: "The nest covers the engineers. Your squad has grenades, a captured map, and almost no time.",
        choices: [
          { text: "Use the map to flank the nest from a drainage ditch.", score: 1 },
          { text: "Throw grenades from the front and trust momentum.", score: 0 },
        ],
      },
      {
        title: "The pontoon gap",
        text: "A shell tears a gap in the pontoon line. Engineers shout for rope while enemy fire walks closer.",
        choices: [
          { text: "Lay down fire while two soldiers carry rope forward.", score: 1 },
          { text: "Abandon the repair and pull everyone back.", score: 0 },
        ],
      },
      {
        title: "Counterattack",
        text: "Armored cars nose out of the tree line. Your squad has one anti-tank rifle and a muddy lane for concealment.",
        choices: [
          { text: "Wait until the lead vehicle exposes its side.", score: 1 },
          { text: "Fire early to scare them off.", score: 0 },
        ],
      },
      {
        title: "Hold until dark",
        text: "The sun drops. The bridgehead is exhausted, and one last flare turns the riverbank white.",
        choices: [
          { text: "Rotate the wounded back and keep a thin firing line.", score: 1 },
          { text: "Commit everyone forward for one final push.", score: 0 },
        ],
      },
    ],
  },
  british: {
    label: "British paratrooper: night drop in France",
    openingTitle: "No moon over the drop zone",
    openingText:
      "You hit the ground hard in a French field, miles from the marker lights. Somewhere ahead, a resistance courier is waiting with the route to a rail junction.",
    success: "The junction is disabled before sunrise. The resistance melts away, and the enemy armor loses the rail line it needed.",
    hardWon: "The mission succeeds, though not cleanly. The junction is damaged enough to slow the enemy while your patrol slips into the woods.",
    failure: "The patrol scatters before reaching the junction. You avoid capture, but the trains keep moving.",
    scenes: [
      {
        title: "Gather the sticks",
        text: "Two parachutes hang from apple trees. You hear one of your men whistling the recognition tune from the wrong direction.",
        choices: [
          { text: "Answer softly and regroup before moving.", score: 1 },
          { text: "Move toward the road alone to save time.", score: 0 },
        ],
      },
      {
        title: "The courier",
        text: "A cyclist appears near a stone wall. She gives the password, but a patrol lantern bobs behind her.",
        choices: [
          { text: "Let her lead you through the drainage culvert.", score: 1 },
          { text: "Ambush the patrol in the lane.", score: 0 },
        ],
      },
      {
        title: "Village bells",
        text: "The village is awake. A priest offers shelter under the church floor while trucks idle in the square.",
        choices: [
          { text: "Hide under the church and wait for the trucks to pass.", score: 1 },
          { text: "Steal a truck and drive straight for the junction.", score: 0 },
        ],
      },
      {
        title: "The signal box",
        text: "The rail junction is protected by a signal box, sentries, and one searchlight that sweeps the yard.",
        choices: [
          { text: "Cut the searchlight cable before approaching.", score: 1 },
          { text: "Rush the signal box while the beam points away.", score: 0 },
        ],
      },
      {
        title: "Explosives set",
        text: "Charges are ready, but a civilian work crew is being marched across the tracks.",
        choices: [
          { text: "Delay the blast until the crew clears the yard.", score: 1 },
          { text: "Detonate immediately before guards discover you.", score: 0 },
        ],
      },
      {
        title: "Escape route",
        text: "The junction erupts behind you. The planned route is blocked, and the courier points toward marshland.",
        choices: [
          { text: "Trust the courier and vanish into the marsh.", score: 1 },
          { text: "Fight through the roadblock before reinforcements arrive.", score: 0 },
        ],
      },
    ],
  },
};

const perspectiveButtons = document.querySelectorAll(".perspective-card");
const frontLabel = document.querySelector("#front-label");
const choiceCount = document.querySelector("#choice-count");
const sceneTitle = document.querySelector("#scene-title");
const sceneText = document.querySelector("#scene-text");
const choiceList = document.querySelector("#choice-list");
const decisionLog = document.querySelector("#decision-log");

let activeAdventure = null;
let currentScene = 0;
let score = 0;
let log = [];

function startAdventure(key) {
  activeAdventure = adventures[key];
  currentScene = 0;
  score = 0;
  log = [];

  perspectiveButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.perspective === key);
  });

  renderScene(activeAdventure.openingTitle, activeAdventure.openingText, activeAdventure.scenes[0].choices);
  updateStatus();
  renderLog();
}

function chooseOption(choice) {
  const scene = activeAdventure.scenes[currentScene];
  score += choice.score;
  log.push(`${scene.title}: ${choice.text}`);
  currentScene += 1;

  if (currentScene >= activeAdventure.scenes.length) {
    renderEnding();
    return;
  }

  const nextScene = activeAdventure.scenes[currentScene];
  renderScene(nextScene.title, nextScene.text, nextScene.choices);
  updateStatus();
  renderLog();
}

function renderScene(title, text, choices) {
  sceneTitle.textContent = title;
  sceneText.textContent = text;
  choiceList.innerHTML = "";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice.text;
    button.addEventListener("click", () => chooseOption(choice));
    choiceList.appendChild(button);
  });
}

function renderEnding() {
  const result =
    score >= 5 ? activeAdventure.success : score >= 3 ? activeAdventure.hardWon : activeAdventure.failure;

  sceneTitle.textContent = "Dawn report";
  sceneText.textContent = result;
  choiceList.innerHTML = "";

  const restartButton = document.createElement("button");
  restartButton.className = "restart-button";
  restartButton.type = "button";
  restartButton.textContent = "Play another perspective";
  restartButton.addEventListener("click", resetGame);
  choiceList.appendChild(restartButton);

  updateStatus();
  renderLog();
}

function resetGame() {
  activeAdventure = null;
  currentScene = 0;
  score = 0;
  log = [];

  perspectiveButtons.forEach((button) => button.classList.remove("is-active"));
  frontLabel.textContent = "Choose a perspective to begin.";
  choiceCount.textContent = "0 / 6 choices";
  sceneTitle.textContent = "Waiting for orders";
  sceneText.textContent = "The map is open. The channel is clear. Choose who you are when the first order arrives.";
  choiceList.innerHTML = "";
  renderLog();
}

function updateStatus() {
  frontLabel.textContent = activeAdventure.label;
  choiceCount.textContent = `${Math.min(currentScene, 6)} / 6 choices`;
}

function renderLog() {
  decisionLog.innerHTML = "";

  log.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    decisionLog.appendChild(item);
  });
}

perspectiveButtons.forEach((button) => {
  button.addEventListener("click", () => startAdventure(button.dataset.perspective));
});
