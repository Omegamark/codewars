var pongAchievements = [];

var win = false;
var gamesWon = 0;
var gamesLost = 0;
var p2GamesWon = 0;
var p2GamesLost = 0;
var rank = 0;
var pongGamesSinceLoss = 0;
var score = 0;
var p2Score = 0;
var level = 0;
var p2Level = 0;
var gamesPlayed = 0;

function kingPong(rank){
  if(rank === 1){
    pongAchievements.push("King Pong")
  }
}

function flingPong(gamesWon){
  if(gamesWon === 1){
    pongAchievements.push("Fling Pong");
  };
};

function rally(pongGamesSinceLoss){
  if(pongGamesSinceLoss >= 3){
    pongAchievements.push(`Rally: ${pongGamesSinceLoss}`);
  };
};

function skunk(p1Score, p2Score){
  if(p1Score === 21 && p2Score === 0){
    pongAchievements.push("Skunk");
  };
};

function stomped(score, p2Score){
  if(p1Score >= p2Score + 10){
    pongAchievements.push("Stomped");
  };
};

function bully(win, level, p2Level){
  if(win === true && level >= p2Level + 3){
    pongAchievements.push("Bully");
  };
};

function underdog(win, level, p2Level){
  if(win === true && level <= p2Level - 3){
    pongAchievements.push("Underdog");
  };
};

function rivalry(level, p2Level){
  if(level === p2Level){
    pongAchievements.push("Rivalry");
  };
};

function shadowBoxing(win, level, p2Level){
  if(win === true && level === p2Level){
    pongAchievements.push("Shadow-Boxing");
  };
};

function warrior(gamesPlayed, gamesLost){
  if(gamesPlayed >= 3 && gamesLost === 0){
    pongAchievements.push("Warrior");
  };
};

function evenSplit(gamesWon, gamesLost){
  if(gamesWon === gamesLost){
    pongAchievements.push("Even Split");
  };
};

function battlePaddle(gamesWon){
  if(gamesWon === 10){
    pongAchievements.push("Battle Paddle");
  };
};

function neckAndNeck(score, p2Score){
  if(win && score === p2Score + 2){
    pongAchievements.push("Neck and Neck");
  };
};
