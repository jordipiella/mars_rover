var myRover = {
  position: [0,0],
  direction: 'N'
};

/*var cols = 11;
var rows = 11;
var positionArray = [];

for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      document.write('<div class="" style="background-color:#333; float:left; width:30px; height:30px;"></div>');

    }
    document.write('<div style="clear:both"></div>');
}*/

/*document.write('<table>');
var gridWidth = 10;
var gridHeight = 10;
var grid = [];
for(var y = 0; y < gridHeight; y++)
{
    document.write('<tr>');
    grid.push([]);
    for(var x = 0; x < gridWidth; x++)
    {
        document.write('<td id="" style="border: black solid 1px; width:20px; height:20px" onclick="alert(\'clicked\');">');
        document.write(grid[y][x]);
        grid[y].push(0);
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');*/
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
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

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}





function goBack(rover) {

  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };
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


  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
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
  };
  console.log('New direction: '+ rover.direction);

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
  };
  console.log('New direction: '+ rover.direction);

}
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
//f avanzar 70
//b retroceder 66
//r right 82
//l left 76
//
//goLeft(myRover);
//goRight(myRover);
goForward(myRover);
