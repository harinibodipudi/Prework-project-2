// Bonus 1 - Gotta keep her in the battle!
  
// Bonus 2 - The queen is more powerful than what you think!
    
// Bonus 3 - How about multiple queens?

// Checkpoint 1 | Creating the queen object
var queen = {
  direction:"S",
  position:[4,0]
};


// Creating position_log
var chess_board = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];


// Checkpoint 2 | Turning the queen

function changeDirection(newdirection)
{
    queen.direction=newdirection;
}

// Checkpoint 3 | Moving the queen

function moveForward(direction) {
  let tempx;
  let tempy;

  switch (direction) {
    case "E":
      tempx=queen.position[0]+1;
      if (tempx > 8 || tempx < 0) {
        document.write("out of boundry");
      } else {
        queen.position[0]=tempx;
      }
      break;
    case "W":
      tempx=queen.position[0]-1;
      if (tempx > 8 || tempx < 0) {
        document.write("out of boundry");
      } else {
        queen.position[0]=tempx;
      }
      break;
    case "S":
      tempx=queen.position[1]+1;
      if (tempx > 8 || tempx < 0) {
        document.write("out of boundry");
      } else {
        queen.position[1]=tempx;
      }
      break;
    case "N":
      temp = queen.position[1]-1;
      if (temp > 8 || temp < 0) {
        document.write("out of boundry");
      } else {
        queen.position[1]=tempx;
      }
      break;
    case "SE":
      tempx = queen.position[0] +1;
      tempy = queen.position[1] + 1;
      if ((tempx > 8 || tempx < 0) && (tempy > 8 || tempy < 0)) {
        document.write("out of boundry");
      } else {
        queen.position[0] = tempx;
        queen.position[1] = tempy;
      }
      break;
    case "NW":
      tempx = queen.position[0] -1;
      tempy = queen.position[1] -1;
      if ((tempx > 8 || tempx < 0) && (tempy > 8 || tempy < 0)) {
        document.write("out of boundry");
      } else {
        queen.position[0]= tempx;
        queen.position[1]= tempy;
      }
      break;
    case "SW":
      tempx = queen.position[0]-1;
      tempy = queen.position[1] +1;
      if ((tempx > 8 || tempx < 0) && (tempy > 8 || tempy < 0)) {
        document.write("out of boundry");
      } else {
        queen.position[0] = tempx;
        queen.position[1] = tempy;
      }
      break;
    case "NE":
      tempx = queen.position[0]+1;
      tempy = queen.position[1]-1;
      if ((tempx > 8 || tempx < 0) && (tempy > 8 || tempy < 0)) {
        document.write("out of boundry");
      } else {
        queen.position[0]= tempx;
        queen.position[1]= tempy;
      }
      break;
  }
}

// Checkpoint 4 | Jump move the queen

function jumpMoveForward(num_of_steps, direction) {
  let tempx;
  let tempy;

  switch (direction) {
    case "E":
      tempx = queen.position[0]+num_of_steps;
      if (tempx > 8 || tempx < 0) {
        document.write("out of boundry");
      } else {
        queen.position[0] = tempx;
      }
      break;
    case "W":
      tempx = queen.position[0]- num_of_steps;
      if (tempx> 8 || tempx < 0) {
        document.write("out of boundry");
      } else {
        queen.position[0]= tempx;
      }
      break;
    case "S":
      tempx = queen.position[1]+ num_of_steps;
      if (tempx > 8 || tempx < 0) {
        document.write("out of boundry");
      } else {
        queen.position[1] = tempx;
      }
      break;
    case "N":
      tempx = queen.position[1] -num_of_steps;
      if (tempx > 8 || tempx < 0) {
        document.write("out of boundry");
      } else {
        queen.position[1] = tempx;
      }
      break;
    case "SE":
      tempx = queen.position[0] + num_of_steps;
      tempy = queen.position[1] +num_of_steps;
      if ((tempx > 8 || tempx < 0) && (tempy > 8 || tempy < 0)) {
        console.log("out of boundry");
      } else {
        queen.position[0] = tempx;
        queen.position[1] = tempy;
      }
      break;
    case "NW":
      tempx = queen.position[0] - num_of_steps;
      tempy = queen.position[1] - num_of_steps;
      if ((tempx > 8 || tempx < 0) && (tempy > 8 || tempy < 0)) {
        document.write("out of boundry");
      } else {
        queen.position[0] = tempx;
        queen.position[1]= tempy;
      }
      break;
    case "SW":
      tempx = queen.position[0] - num_of_steps;
      tempy = queen.position[1] + num_of_steps;
      if ((tempx > 8 || tempx < 0) && (tempy > 8 || temp1 < 0)) {
        document.write("out of boundry");
      } else {
        queen.position[0] = tempx;
        queen.position[1] = tempy;
      }
      break;
    case "NE":
      tempx = queen.position[0] + num_of_steps;
      tempy = queen.position[1] - num_of_steps;
      if ((tempx > 8 || tempx < 0) && (tempy > 8 || tempy < 0)) {
        document.write("out of boundry");
      } else {
        queen.position[0] = tempx;
        queen.position[1] = tempy;
      }
      break;
  }
}

// Checkpoint 5 |  Tracking the position

function start_chess() {
  let input1 =prompt();
  var input = input1.split(" ");
  input.forEach((n) => {
    let number_of_steps = Number(n.slice(n.length - 1));
    let direction = n.slice(0, n.length - 1);
    jumpMoveForward(number_of_steps, direction);
  });
  console.log("Queens current position =>" + chess_board[queen.position[1]][queen.position[0]]);
}