var myRover = {
  position: [0,0],
  direction: 'N'
};
var myRover2 = {
  position: [1,0],
  direction: 'N'
};
var actualPositionRover = "[" + myRover.position[0] + ", " + myRover.position[1] + "]";
var actualPositionRover2 = "[" + myRover2.position[0] + ", " + myRover2.position[1] + "]";

var numberRover = '';
var obstacle1 = '[2, 0]';
var obstacle2 = '[2, 2]';

function goForward(rover) {



  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
  if (rover.position[0] <= -6) {
    rover.position[0] = 5;
  }
  if (rover.position[0] >= 6) {
    rover.position[0] = -5;
  }
  if (rover.position[1] <= -6) {
    rover.position[1] = 5;
  }
  if (rover.position[1] >= 6) {
    rover.position[1] = -5;
  }


  var actualPosition = "[" + rover.position[0] + ", " + rover.position[1] + "]";
  if ( numberRover == '') {
    actualPositionRover = "[" + rover.position[0] + ", " + rover.position[1] + "]";
    console.log('Grabada1: ' + actualPositionRover);
  } else {
    actualPositionRover2 = "[" + rover.position[0] + ", " + rover.position[1] + "]";
    console.log('Grabada2: ' + actualPositionRover2);
  }
  //actualPositionRover = "[" + rover.position[0] + ", " + rover.position[1] + "]";

  console.log("New Rover " + numberRover +  " position:" + actualPosition);
  actualPosition = "[" + rover.position[0] + ", " + rover.position[1] + "]";

  //console.log("ActualPosition" + actualPosition)

  console.log("Obstacle1: " + obstacle1);
  console.log("Obstacle2: " + obstacle2);

  if (actualPosition == obstacle1) {
    alert('stop');
    if ( numberRover == '') {
      goBack(myRover);
    } else {
      goBack(myRover2);
    }
  }
  if (actualPosition == obstacle2) {
    alert('stop');
    if ( numberRover == '') {
      goBack(myRover);
    } else {
      goBack(myRover2);
    }
  }
  console.log("Rover1: " + actualPositionRover);
  console.log("Rover2: " + actualPositionRover2);
  if (actualPositionRover == actualPositionRover2) {
    alert('stop Rover');
    if ( numberRover == '') {
      goBack(myRover);
    } else {
      goBack(myRover2);
    }

  }


}





function goBack(rover) {

  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
  if (rover.position[0] <= -6) {
    rover.position[0] = 5;
  }
  if (rover.position[0] >= 6) {
    rover.position[0] = -5;
  }
  if (rover.position[1] <= -6) {
    rover.position[1] = 5;
  }
  if (rover.position[1] >= 6) {
    rover.position[1] = -5;
  }

/*  var actualPosition = "[" + rover.position[0] + ", " + rover.position[1] + "]";

  console.log("New Rover " + numberRover +  " position:" + actualPosition);
*/

var actualPosition = "[" + rover.position[0] + ", " + rover.position[1] + "]";
if ( numberRover == '') {
  actualPositionRover = "[" + rover.position[0] + ", " + rover.position[1] + "]";
  console.log('Grabada1: ' + actualPositionRover);
} else {
  actualPositionRover2 = "[" + rover.position[0] + ", " + rover.position[1] + "]";
  console.log('Grabada2: ' + actualPositionRover2);
}
//actualPositionRover = "[" + rover.position[0] + ", " + rover.position[1] + "]";

console.log("New Rover " + numberRover +  " position:" + actualPosition);
actualPosition = "[" + rover.position[0] + ", " + rover.position[1] + "]";

//console.log("ActualPosition" + actualPosition)

console.log("Obstacle1: " + obstacle1);
console.log("Obstacle2: " + obstacle2);

  //console.log("ActualPosition" + actualPosition)
    //console.log("Obstacle1: " + obstacle1);
    //console.log("Obstacle2: " + obstacle2);
  if (actualPosition == obstacle1){
    alert('stop');
    goForward(myRover);
  }
  if (actualPosition == obstacle2){
    alert('stop');
    goForward(myRover);
  }
  console.log("Rover1: " + actualPositionRover);
  console.log("Rover2: " + actualPositionRover2);
  if (actualPositionRover == actualPositionRover2) {
    alert('stop Rover');
    if ( numberRover == '') {
      goForward(myRover);
    } else {
      goForward(myRover2);
    }

  }

}

function goRight(rover) {

  switch(rover.direction) {
    case 'N':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "W";
      break;
    case 'W':
      rover.direction = "N";
      break;
  }
  console.log('New direction rover ' + numberRover +': '+ rover.direction);

}
function goLeft(rover) {

  switch(rover.direction) {
    case 'N':
      rover.direction = "W";
      break;
    case 'E':
      rover.direction = "N";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'W':
      rover.direction = "S";
      break;
  }
  console.log('New direction rover ' + numberRover +': '+ rover.direction);

}
//inutilizada
function moveRover(event) {
    var x = event.keyCode;

    if (x == 70) {
        //alert ("You pressed the f");
        goForward(myRover);
    }
    if (x == 66) {
        //alert ("You pressed the b");
        goBack(myRover);
    }
    if (x == 82) {
        //alert ("You pressed the r");
        goRight(myRover);
    }
    if (x == 76) {
        //alert ("You pressed the l");
        goLeft(myRover);
    }
}

function moveRover2(keys) {
    var x = keys;
    if (x == 'f') {
        //alert ("You pressed the f");
        if (numberRover === '') {
          goForward(myRover);
        } else {
          goForward(myRover2);
        }

    }
    if (x == 'b') {
        //alert ("You pressed the b");
        if (numberRover === '') {
        goBack(myRover);
      } else {
        goBack(myRover2);
      }
    }
    if (x == 'r') {
        //alert ("You pressed the r");
        if (numberRover === '') {
        goRight(myRover);
      } else {
        goRight(myRover2);
      }
    }
    if (x == 'l') {
        //alert ("You pressed the l");
        if (numberRover === '') {
        goLeft(myRover);
      } else {
        goLeft(myRover2);
      }
    }
}

var insertMove = "";
document.getElementById('submit').addEventListener('click', function(){
  insertMove = document.getElementById('insertMove').value;
  numberRover = '';
  var strMove = insertMove;
  var arrayResultado = [];
  arrayResultado = strMove.split("");
  console.log(arrayResultado);
  for (var i = 0; i < arrayResultado.length; i++) {
    //console.log(arrayResultado[i]);
    moveRover2(arrayResultado[i]);
  }

});

document.getElementById('submitMove2').addEventListener('click', function(){
  insertMove = document.getElementById('insertMoveRover2').value;
  numberRover = '2';
  var strMove = insertMove;
  var arrayResultado = [];
  arrayResultado = strMove.split("");
  console.log(arrayResultado);
  for (var i = 0; i < arrayResultado.length; i++) {
    //console.log(arrayResultado[i]);
    moveRover2(arrayResultado[i]);
  }

});




//moveRover2('b');
//f avanzar 70
//b retroceder 66
//r right 82
//l left 76
//
//goLeft(myRover);
//goRight(myRover);
//goForward(myRover);
