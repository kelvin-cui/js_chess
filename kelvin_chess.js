//Chess Player + 2-move lookahead AI
//Kelvin Wei Hai Cui, 2019

//                            TREE DATA STRUCTURE
//this is the section for functions of tree data structure
//notation = [root,[children]]

function Tree(data) {
    this.store = [data,[]]
    return true;
};

Tree.prototype.add = function(data) {//add data to parent
  this.store[1] = this.store[1].concat(data);
  return true;
};


//                            MOVE FUNCTIONS 
//these are the functions that are called recurisvely to figure out valid moves


function moveup(board,position,player,repeat,capture) {
  let validmoves = [];
  let poslist = getpos(position);
  let state = 1;

  let enemy = 20; //set the enemy's value based on the player
  if (player == 20) {
      enemy = 10;
  }
  
  if (poslist[0] == 0) { // check to make sure that the position isn't already at the top
      if (getcolor(board,(position - 8)) == 30) { // check to make sure the position is empty
          validmoves = validmoves.concat([position - 8]); //if so add position to list
          state = 0;
      }
          

      
      else if (getcolor(board,(position - 8)) == enemy && capture == 1) { //if position is taken by enemy and the player can capture
              validmoves = validmoves.concat([position - 8]);
      }
  }  
  if (repeat == 1 && state == 0) { //if move is repeatable and the position was empty
      validmoves = validmoves.concat(moveup(board,position-8,player,repeat,capture));
  }

  return validmoves;
}

function movedown(board,position,player,repeat,capture) {
  let validmoves = [];
  let poslist = getpos(position);
  let state = 1;
  
  let enemy = 20;
  if (player == 20) {
      enemy = 10;
  }
  
  if (poslist[2] == 0) {
      if (getcolor(board,(position + 8)) == 30) {
          validmoves = validmoves.concat([position + 8]);
          state = 0;
      }
          


      else if (getcolor(board,(position + 8)) == enemy && capture == 1) {
              validmoves = validmoves.concat([position + 8]);
      }
  }  
  if (repeat == 1 && state == 0) {
      validmoves = validmoves.concat(movedown(board,position + 8,player,repeat,capture));
  }

  return validmoves;
}

function moveupleft(board,position,player,repeat,capture) {
  let validmoves = [];
  let poslist = getpos(position);
  let state = 1;
  
  let enemy = 20;
  if (player == 20) {
      enemy = 10;
  }
  
  if (poslist[0] == 0 && poslist[3] == 0) {
    if (getcolor(board,(position - 9)) == 30 && capture == 1) {
      validmoves = validmoves.concat([position - 9]);
      state = 0;
    }
        
  
  
    else if (getcolor(board,(position - 9)) == enemy) {
      validmoves = validmoves.concat([position - 9]);
    }
  }
  
  if (repeat == 1 && state == 0) {
    validmoves = validmoves.concat(moveupleft(board,position - 9,player,repeat,capture));
  }

  return validmoves;
}

function moveupright(board,position,player,repeat,capture) {
  let validmoves = [];
  let poslist = getpos(position);
  let state = 1;

  let enemy = 20;
  if (player == 20) {
      enemy = 10;
  }
  if (poslist[0] == 0 && poslist[1] == 0) {
    if (getcolor(board,(position - 7)) == 30 && capture == 1) {
      validmoves = validmoves.concat([position - 7]);
      state = 0;
    }
        
  
  
    else if (getcolor(board,(position - 7)) == enemy) {
      validmoves = validmoves.concat([position - 7]);
    }
  }
  
  if (repeat == 1 && state == 0) {
    validmoves = validmoves.concat(moveupright(board,position -7,player,repeat,capture));
  }

  return validmoves;
}


function moveright(board,position,player,repeat,capture) {
  let validmoves = [];
  let poslist = getpos(position);
  let state = 1;

  let enemy = 20;
  if (player == 20) {
      enemy = 10;
  }
  if (poslist[1] == 0) {
      if (getcolor(board,(position + 1)) == 30) {
          validmoves = validmoves.concat([position + 1]);
          state = 0;
      }
          
  }

      else if (getcolor(board,(position + 1)) == enemy) {
              validmoves = validmoves.concat([position + 1]);
      }
  
  if (repeat == 1 && state == 0) {
      validmoves = validmoves.concat(moveright(board,position + 1,player,repeat,capture));
  }

  return validmoves;
}

function moveleft(board,position,player,repeat,capture) {
  let validmoves = [];
  let poslist = getpos(position);
  let state = 1;

  let enemy = 20;
  if (player == 20) {
      enemy = 10;
  }
 if (poslist[3] == 0) {
      if (getcolor(board,(position - 1 )) == 30) {
          validmoves = validmoves.concat([position - 1]);
          state = 0;
      }
          
  }

      else if (getcolor(board,(position - 1)) == enemy) {
              validmoves = validmoves.concat([position - 1]);
      }
  
  if (repeat == 1 && state == 0) {
      validmoves = validmoves.concat(moveleft(board,position - 1,player,repeat,capture));
  }

  return validmoves;
}

function movedownleft(board,position,player,repeat,capture) {
  let validmoves = [];
  let poslist = getpos(position);
  let state = 1;

  let enemy = 20;
  if (player == 20) {
      enemy = 10;
  }
  if (poslist[2] == 0 && poslist[3] == 0) {
    if (getcolor(board,(position + 7)) == 30 && capture == 1) {
      validmoves = validmoves.concat([position + 7]);
      state = 0;
    }
        
  
  
    else if (getcolor(board,(position + 7)) == enemy) {
      validmoves = validmoves.concat([position + 7]);
    }
  }
  
  if (repeat == 1 && state == 0) {
    validmoves = validmoves.concat(movedownleft(board,position + 7,player,repeat,capture));
  }

  return validmoves;
}
         

function movedownright(board,position,player,repeat,capture) {
  let validmoves = [];
  let poslist = getpos(position);
  let state = 1;
  
  let enemy = 20;
  if (player == 20) {
      enemy = 10;
  }
   if (poslist[2] == 0 && poslist[1] == 0) {
    if (getcolor(board,(position + 9)) == 30 && capture == 1) {
      validmoves = validmoves.concat([position + 9]);
      state = 0;
      console.log("tick!")
    }
        
  
  
    else if (getcolor(board,(position + 9)) == enemy) {
      validmoves = validmoves.concat([position + 9]);
    }
  }
  
  if (repeat == 1 && state == 0) {
    validmoves = validmoves.concat(movedownright(board,position + 9,player,repeat,capture));
  }

  return validmoves;
}


//                            PEICE FUNCTIONS
//these functions for the different peices call the move functions to find valid moves


//pawn moves : 
function pawnmoves(board,position) {
  let validmoves = [];
  let player = getcolor(board,position);
  console.log(player);
  
  if (player == 20) {
      validmoves = validmoves.concat(movedown(board,position,20,0,0), movedownleft(board,position,20,0,0), movedownright(board,position,20,0,0)); //based on player, return all valid moves
  }
  if (player == 10) {
      validmoves = validmoves.concat(moveup(board,position,10,0,0), moveupleft(board,position,10,0,0), moveupright(board,position,10,0,0));
  }
  
  return validmoves;
}

//bishop moves :
function bishopmoves(board,position) {
  let validmoves = [];
  let player = getcolor(board,position);
  validmoves = validmoves.concat(moveupleft(board,position,player,1,1), moveupright(board,position,player,1,1), movedownright(board,position,player,1,1), movedownleft(board,position,player,1,1));

  return validmoves;
}

//rook moves : 
function rookmoves(board,position) {
  let validmoves = [];
  let player = getcolor(board,position);
  validmoves = validmoves.concat(moveup(board,position,player,1,1), movedown(board,position,player,1,1), moveright(board,position,player,1,1), moveleft(board,position,player,1,1));

  return validmoves;
}

//king moves : 
function kingmoves(board,position) {
  let validmoves = [];
  let player = getcolor(board,position);

  validmoves = validmoves.concat(moveup(board,position,player,0,1), movedown(board,position,player,0,1), moveright(board,position,player,0,1), moveleft(board,position,player,0,1), moveupleft(board,position,player,0,1), moveupright(board,position,player,0,1), movedownright(board,position,player,0,1), movedownleft(board,position,player,0,1));
  
  return validmoves;
}

//queen moves : 
function queenmoves(board,position) {
  let validmoves = [];
  let player = getcolor(board,position);

  validmoves = validmoves.concat(moveup(board,position,player,1,1), movedown(board,position,player,1,1), moveright(board,position,player,1,1), moveleft(board,position,player,1,1), moveupleft(board,position,player,1,1), moveupright(board,position,player,1,1), movedownright(board,position,player,1,1), movedownleft(board,position,player,1,1));


  return validmoves;
}

//knightmoves  :
function knightmoves(board,position) { //since knights move in Ls, these had to be hardcoded
  let validmoves = [];
  let player = getcolor(board,position);
  let move1 = 0;
  let move2 = 0;
  let state1 = 1;
  let state2 = 1;
  let enemy = 10;
  let i = 0;
  
  if (player == 10){ //set enemy color
    enemy = 20
  }
  
  for (i = 0 ;i < 5 ; i = i + 1) {
    state1 = 1;
    state2 = 1;
    if (i == 1) {   
      move1 = -10;
      move2 = 10;

      if (getpos(position)[3] == 0 && getpos(position)[0] == 0) {
        if (getpos(position-1)[3] == 0) {
          state1 = 0;
        }
      }
      
      if (getpos(position)[1] == 0 && getpos(position)[2] == 0) {
        if (getpos(position+1)[1] == 0) {
          state2 = 0;
        }
      }
    }
    
    if (i == 2) {   
      move1 = -17;
      move2 = 17;

      if (getpos(position)[3] == 0 && getpos(position)[0] == 0) {
        if (getpos(position-8)[0] == 0) {
          state1 = 0;
        }
      }
      
      if (getpos(position)[1] == 0 && getpos(position)[2] == 0) {
        if (getpos(position+8)[2] == 0) {
          state2 = 0;
        }
      }
    }
    
    if (i == 3) {   
      move1 = -15;
      move2 = 15;

      if (getpos(position)[0] == 0 && getpos(position)[1] == 0) {
        if (getpos(position-8)[0] == 0) {
          state1 = 0;
          } 
        }
      
      if (getpos(position)[2] == 0 && getpos(position)[3] == 0){
        if (getpos(position+8)[2] == 0) {
          state2 = 0;
        }
      }
    }

    if (i == 4) {   
      move1 = -6;
      move2 = 6;

      if (getpos(position)[1] == 0 && getpos(position)[0] == 0){
        if (getpos(position+1)[1] == 0){ 
          state1 = 0;
        }
      }
      if (getpos(position)[3] == 0 && getpos(position)[2] == 0) {
        if (getpos(position-1)[3] == 0){
          state2 = 0;
        }
      }
    }

    if (state1 == 0) { 
      if (getcolor(board,position+move1) == 30 || getcolor(board,position+move1) == enemy) { 
        validmoves = validmoves.concat([position+move1]);
      }
    }
    
    if (state2 == 0) { 
      if (getcolor(board,position+move2) == 30 || getcolor(board,position+move2) == enemy) { 
        validmoves = validmoves.concat([position+move2]);
      }
    }
  }
  return validmoves;
}



//                            VALID MOVES FUNCTIONS:
//this function returns all the valid moves of a peice given a position

function GetPieceLegalMoves(board,position) {
  let rlist = [];
  let player = getcolor(board,position);
  let piece = board[position];

  if (piece - player == 0){
    console.log("peice selected = pawn")
    rlist = pawnmoves(board,position);
  }
  else if (piece - player == 1) {
    console.log("peice selected = knight");
    rlist = knightmoves(board,position);
  }
  else if (piece - player == 2) {
    console.log("peice selected = bishop");
    rlist = bishopmoves(board,position);
  }
  else if (piece - player == 3) {
    console.log("peice selected = rook");
    rlist = rookmoves(board,position);
  }
  else if (piece - player == 4) {
    console.log("peice selected = queen");
    rlist = queenmoves(board,position);
  }
  else if (piece - player == 5) {
    console.log("peice selected = king");
    rlist = kingmoves(board,position);
  }

  return rlist
}

//                            IS POSITION UNDER THREAT FUNCTION
//this function returns True if the position is under threat from the enemy, false if NodeList


function isPositionUnderThreat(board,position,player){
  let rlist = [];
  let state = 0;
  let i = 0;
  
  let enemy = 20; 
  if (player == 20) {
    enemy = 10;
  }
  
  while (true) { //see if position is in the range of any peices
    if (i == 0) {
      rlist = pawnmoves(board,position);
    }
    else if (i == 1) {
      rlist = knightmoves(board,position);
    }
    else if (i == 2) {
      rlist = bishopmoves(board,position);
    }
    else if (i == 3) {
      rlist = rookmoves(board,position);
    }
    else if (i == 4){
      rlist = queenmoves(board,position);
    }
    else if (i == 5){
      rlist = kingmoves(board,position);
    }
    else if (i == 6){
      return false;
    }
    for (let j in rlist) {
      if (board[rlist[j]] == enemy + i) {
        return true;
      }
    }
    i += 1;
  }
}
//                            IS KING UNDER THREAT
//a function that finds the player's king and runs isPositionUnderThreat

function iskingunderthreat(board,player) {
  let position = board.indexOf(5+player);
  return isPositionUnderThreat(board,position,player); 
}


//                            BOARD EVALUATION FUNCTION
//a function that scans the board and returns an evaluation value

function evalboard(board,player) {
//positive = for white = 10
//negative = for black = 20

  let pgrid = [[ 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5,
                 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0,
                 1.0, 1.0, 2.0, 3.0, 3.0, 2.0, 2.0, 1.0,
                 0.5, 0.5, 1.0, 2.5, 2.5, 1.0, 0.5, 0.5,
                 0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0,
                 0.5,-0.5,-1.0, 0.0, 0.0,-1.0,-0.5, 0.5,
                 0.5, 1.0, 1.0,-2.0,-2.0, 1.0, 1.0, 0.5,
                 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], //these grids set weights for each peice
      
                [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, //the first index has the values for the white peices, the second index has the indexes for black peices.
                 0.5, 1.0, 1.0,-2.0,-2.0, 1.0, 1.0, 0.5,
                 0.5,-0.5,-1.0, 0.0, 0.0,-1.0,-0.5, 0.5,
                 0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0,
                 0.5, 0.5, 1.0, 2.5, 2.5, 1.0, 0.5, 0.5,
                 1.0, 1.0, 2.0, 3.0, 3.0, 2.0, 2.0, 1.0,
                 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0,
                 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5]]

  let kngrid= [[-5.0,-4.0,-3.0,-3.0,-3.0,-3.0,-4.0,-5.0,
                -4.0,-2.0, 0.0, 0.0, 0.0, 0.0,-2.0,-4.0,
                -3.0, 0.0, 1.0, 1.5, 1.5, 1.0, 0.0,-3.0,
                -3.0, 0.5, 1.5, 2.0, 2.0, 1.5, 0.5,-3.0,
                -3.0, 0.0, 1.5, 2.0, 2.0, 1.5, 0.0,-3.0,
                -3.0, 0.5, 1.0, 1.5, 1.5, 1.0, 0.5,-3.0,
                -4.0,-2.0, 0.0, 0.5, 0.5 ,0.0,-2.0,-4.0,
                -5.0,-4.0,-3.0,-3.0,-3.0,-3.0,-4.0,-5.0,],
    
               [-5.0,-4.0,-3.0,-3.0,-3.0,-3.0,-4.0,-5.0,
                -4.0,-2.0, 0.0, 0.5, 0.5, 0.0,-2.0,-4.0,
                -3.0, 0.5, 1.0, 1.5, 1.5, 1.0, 0.5,-3.0,
                -3.0, 0.0, 1.5, 2.0, 2.0, 1.5, 0.0,-3.0,
                -3.0, 0.5, 1.5, 2.0, 2.0, 1.5, 0.5,-3.0,
                -3.0, 0.0, 1.0, 1.5, 1.5, 1.0, 0.0,-3.0,
                -4.0,-2.0, 0.0, 0.0, 0.0, 0.0,-2.0,-4.0,
                -5.0,-4.0,-3.0,-3.0,-3.0,-3.0,-4.0,-5.0]]
       

  let bgrid = [[-2.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-2.0,
                -1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-1.0,
                -1.0, 0.0, 0.5, 1.0, 1.0, 0.5, 0.0,-1.0,
                -1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5,-1.0,
                -1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0,-1.0,
                -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,-1.0,
                -1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5,-1.0,
                -2.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-2.0],
    
               [-2.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-2.0,
                -1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5,-1.0,
                -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,-1.0,
                -1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0,-1.0,
                -1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5,-1.0,
                -1.0, 0.0, 0.5, 1.0, 1.0, 0.5, 0.0,-1.0,
                -1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-1.0,
                -2.0,-1.0,-1.0,-1.0,-1.0,-1.0,-1.0,-2.0]]

  let rgrid = [[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                 0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0],
    
               [ 0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-0.5,
                 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5,
                 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]]

  let qgrid = [[-2.0,-1.0,-1.0,-0.5,-0.5,-1.0,-1.0,-2.0,
                -1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-1.0,
                -1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0,-1.0,
                -0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0,-0.5,
                 0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0,-0.5,
                -1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0,-1.0,
                -1.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0,-1.0,
                -2.0,-1.0,-1.0,-0.5,-0.5,-1.0,-1.0,-2.0],
           
               [-2.0,-1.0,-1.0,-0.5,-0.5,-1.0,-1.0,-2.0,
                -1.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0,-1.0,
                -1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.5,-1.0,
                -0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, 0.0,
                -0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0,-0.5,
                -1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,-1.0,
                -1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0,-1.0,
                -2.0,-1.0,-1.0,-0.5,-0.5,-1.0,-1.0,-2.0]]

  let kgrid = [[-3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0,
                -3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0,
                -3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0,
                -3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0,
                -2.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-2.0,
                -1.0,-2.0,-2.0,-2.0,-2.0,-2.0,-2.0,-1.0,
                 2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0,
                 2.0, 3.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0],
    
               [ 2.0, 3.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0,
                 2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0,
                -1.0,-2.0,-2.0,-2.0,-2.0,-2.0,-2.0,-1.0,
                -2.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-2.0,
                -3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0,
                -3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0,
                -3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0,
                -3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0]]

  let rval = 0;
  let i = 0;
  for (i=0; i<64; i=i+1) {
    if (board[i] != 0) {
      let ptemp = getcolor(board,i); 
      let p = 1;
      let offset = 1;
      if (ptemp == 10){
        p = 0;
      }
      if (ptemp != player){
        offset = (-1);
      }
      
      while (true) { //based on it's position, sum all the values of each peice
        if (board[i] == ptemp) {
          rval = rval + ((10+pgrid[p][i])*offset); 
          break;
        }
        
        else if (board[i] == ptemp + 1) { 
          rval = rval + ((30+kngrid[p][i])*offset);
          break;
        }
        
        else if (board[i] == ptemp + 2) { 
          rval = rval + ((30+bgrid[p][i])*offset);
          break;
        }
        else if (board[i] == ptemp + 3) {
          rval = rval + ((50+rgrid[p][i])*offset);
          break;
        }  
          
        else if (board[i] == ptemp + 4) {
          rval = rval + ((90+qgrid[p][i])*offset);
          break;
        }
        
        else if (board[i] == ptemp + 5) {
          rval = rval + ((900+kgrid[p][i])*offset);
          break;
        }
      }
    }
  }
  return rval;
}


//                            HELPER FUNCTIONS

function getcolor(board,position){//get color of peice
  let player = board[position];
  
  if (player >= 20){ //if any of the players are black, return 20
    return 20;
  }
  
  else if (player >= 10) {//if any of the players are white, return 10
    return 10;
  }
  
  else if (player < 10) {//if space is empty, return 30
    return 30;
  }
  
}

function getpos(position) {//get boundaries of piece
  
  let rlist = [0,0,0,0];
  
  if ((position % 8) == 0) {// check if the peice is on the right column
    rlist[3] = 1;
  }
  
  if ((position + 1) % 8 == 0) { // check if the peice is on the left column
    rlist[1] = 1;
  }
  
  if (position > 55) {//check if the peice is at the bottom row
    rlist[2] = 1;
  }
  
  if (position < 8) {//check if the peice is at the top row
    rlist[0] = 1;
  }
  
  return rlist;
}

function movepeice(board,position,move) {//moves a peice from one position to another 
  let temppeice = 0;
  temppeice = board[0][position];
  board[0][position] = 0;
  board[0][move] = temppeice;
  return 0;
  
}
//                            AI FUNCTIONS
//these are the functions that are used for the computer to determine which move to make

function chessplayer(board,player) { //this is the main function for the AI
  let rlist = [];
  let move = 0;
  let position = 0;
  let btemp = [];
  let tempeval = 0;
  let evaltree = new Tree([0,0,0]); // notation = [boardeval, position, move]
 
  let enemy = 10; //set enemy and player values
  if (player == 10) {
    enemy = 20
  }

  for (let i = 0; i<64; i=i+1) {
    if (getcolor(board,i) == player) { 
        rlist = GetPieceLegalMoves(board,i) //get valid moves for each cpu peice
        for (let j in rlist) {
            btemp = board.slice();
            btemp[rlist[j]] = board[i]
            btemp[i] = 0
            tempeval = evalboard(btemp,player);
        }
        addtree(evaltree,board,i,enemy,player,rlist,1); //make a tree for each move
    }
  }
  let besteval = alphabeta(evaltree,2,-10000,10000,true); //use alphabeta pruing to find the best possible board evaluation
  for (let i in evaltree.store[1]) {//scan tree to find the move that coorresponds with this best board evaluation
    if (evaltree.store[1][i].store[0][0] == besteval) {
      position = evaltree.store[1][i].store[0][1];
      move = evaltree.store[1][i].store[0][2];
      break;
    }
  }
  return [position, move];
}


function alphabeta(tree, depth, alpha, beta, player) {//alpha beta purning - assume the player will choose the best move for itself, so the CPU can find the best move
  let value = 0;
  let i = 0;
  
  if (depth == 0 || tree.store[1][1] == []) {
    return tree.store[0][0];
  }
  if (player == true){//maximize the board evaluation for the CPU
    value = -100000;
    for (i in tree.store[1]) {
      value = Math.max(value, alphabeta(tree.store[1][i], depth -1, alpha, beta, false));
      alpha = Math.max(alpha, value);
      if (alpha >= beta) {
          break;
      }
    }
    tree.store[0][0] = value;
    return value
  }
  if (player == false) {//minimize the board evaluation for the player
      value = 100000;
      for (i in tree.store[1]) {
          value = Math.min(value, alphabeta(tree.store[1][i], depth - 1, alpha, beta, true));
          beta = Math.min(beta, value);
          if (alpha >= beta) {
              break
          }
      }
      tree.store[0][0] = value;
      return value;
      
  }
}

function addtree(parent,board,position,player,enemy,rlist,depth) {//function to build evaltree
  let boardeval = 0;
  let btemp = [];
  let movelist = [];
  let i = 0;
  
  if (depth > 2){//cap scanning to 2 layers - anything more currently crashes my computer
      return 0;
  }

  for (i in rlist) { 
    let btemp = board.slice();
    btemp[rlist[i]] = board[position];
    btemp[position] = 0;
    
    if (depth == 2) {
      boardeval = evalboard(btemp,player);
    }
    else {
      boardeval = 0 ;
    }
    
    let a = new Tree([boardeval,position,rlist[i]]); //create new tree
    for (let j=0; j<64; j=j+1){
        movelist = [];
        if (getcolor(btemp,j) == enemy) { 
            movelist = GetPieceLegalMoves(btemp,j);
            addtree(a,btemp,j,enemy,player,movelist,depth + 1); //recurisvely create tree from bottom up
        }
    parent.add(a); //add new tree to parent
    }
  }
}

//Print board
//this function converts the board array to strings for HTML
function printboard(board) {
  let line = "";
  let piece = 0;
  
  for (let row = 0; row < 8; row = row + 1 ) {
    line = "|"
    for (let col = 0; col < 8; col = col + 1) { //scan each row, and add the character for each peice as it's scanned.
      piece = board[8*row + col];
      if (piece == 10) {
        line = line + "_P_";
      }
      else if (piece == 20) {
        line = line + "*p*";
      }
      else if (piece == 11) {
        line = line + "_N_";
      }
      else if (piece == 21) {
        line = line + "*n*";
      }
      else if (piece == 12) {
        line = line + "_B_";
      }
      else if (piece == 22) {
       line = line + "*b*";
      }
      else if (piece == 13) {
        line = line + "_R_" ;
      }
      else if (piece == 23) {
        line = line + "*r*";
      }
      else if (piece == 14) {
        line = line + "_Q_";
      }
      else if (piece == 24) {
        line = line + "*q*";
      }
      else if (piece == 15) {
        line = line + "_K_";
      }
      else if (piece == 25) {
        line = line + "*k*";
      }
      else {
        if ((8*row + col + row)%2 == 0) {
          line = line + " # ";
        }
        else {
          line = line + "___";
        }
      }
      line = line + "|"
    }
    if (row == 0) {
      document.getElementById("row8").innerHTML = line;
    }
    else if (row == 1) {
      document.getElementById("row7").innerHTML = line;
    }
    else if (row == 2) {
      document.getElementById("row6").innerHTML = line;
    }
    else if (row == 3) {
      document.getElementById("row5").innerHTML = line;
    }
    else if (row == 4) {
      document.getElementById("row4").innerHTML = line;
    }
    else if (row == 5) {
      document.getElementById("row3").innerHTML = line;
    }
    else if (row == 6) {
      document.getElementById("row2").innerHTML = line;
    }
    else if (row == 7) {
      document.getElementById("row1").innerHTML = line;
    }
  }
}

function oneturn(board) {
  printboard(board[0]); //update board
  let position = 0;
  let move = 0;
  let movelist = [];
  let validmovestate = 0;
  let temppeice = 0;
  
  let cpuposition = 0;
  let cpumove = 0;
  
  position = moves.position.value; //get user submitted position and move
  move = moves.move.value;
  if (position > 63 || position < 0 || getcolor(board[0],position) != 10){ //if the postion is invalid
    document.getElementById("status").innerHTML = "that is an invalid position- please choose another position";
    console.log("error!");
    return 0;
  }
  else { 
    movelist = GetPieceLegalMoves(board[0],parseInt(position,10));
    console.log(movelist);
    for (let i in movelist) {
      if (movelist[i] == move) {
        validmovestate = 1;
      }
    }
  
    if (validmovestate == 0) { //if the position doesn't have a certain move
      console.log("error - that peice cannot move there")
      document.getElementById("status").innerHTML = "that peice cannot move there - please choose another move";
      return 0;
    }
    
    else {
      document.getElementById("status").innerHTML = "CPU is thinking...";
      movepeice(board,position,move);
      printboard(board[0]);
      [cpuposition, cpumove] = chessplayer(board[0], 20) ; //run AI function
      console.log(cpuposition + "," + cpumove);
      movepeice(board,cpuposition,cpumove); //CPU Move
      printboard(board[0]); //update board
      document.getElementById("status").innerHTML = "Player move";
      if (iskingunderthreat(board[0],10) == 1) { //check if player is in check
        document.getElementById("status").innerHTML = "Check!";
      }
      return 1;
    }
  }
}

 let board = [[23,21,22,25,24,22,21,23,
               20,20,20,20,20,20,20,20,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
               10,10,10,10,10,10,10,10,
               13,11,12,15,14,12,11,13]]
               
printboard(board[0]);

               
