// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  if (rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else {
    rover.direction = "N";
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  if (rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "W";
  } else {
    rover.direction = "N";
  }
}

function whereIsRover(rover) {
  console.log("Las coordenadas del rover son " + rover.x + "," + rover.y);
}

function moveForward(rover) {
  console.log("moveForward was called");
  if (rover.direction === "N") {
    rover.y -= 1;
  } else if (rover.direction === "S") {
    rover.y += 1;
  } else if (rover.direction === "E") {
    rover.x += 1;
  } else {
    rover.x -= 1;
  }
}

var cadena = "rffrfflfrrfffffffffffff";

function instruction(cadena) {

  console.log("instruction was called");
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] === "f" && rover.x >= 0 && rover.y >= 0 && rover.x <= 8 && rover.y <= 8) {
      rover.travelLog.push([rover.x,rover.y])
      moveForward(rover);
    } else if (cadena[i] === "r") {
      turnRight(rover);
    } else if(cadena[i] === "l"){
      turnLeft(rover);
    }else{
      continue;
    }
  }

  console.log(rover.travelLog)
}
