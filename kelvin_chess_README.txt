hello!

about : 
this is my simple chess game + AI, done in javascript.
it uses alpha-beta pruning, as well as a simple board evaluation function that has a two move look-ahead for the AI.
the chess game is created from scratch, using an size-64 array to represent the board.

how to play:
the game follows the rules of simple chess - no castling, no enpassant and pawns may only move one spot at a time, even at the beginning.
to move, input a peice that you want to move (peice), and select where you want to move it to (move), using the board indexes.

the board indexes are the following:

00,01,02,03,04,05,06,07,
08,09,10,11,12,13,14,15,
16,17,18,19,20,21,22,23,
24,25,26,27,28,29,30,31,
32,33,34,35,36,37,38,39,
40,41,42,43,44,45,46,47,
48,49,50,51,52,53,54,55,
56,57,58,59,60,61,62,63,

notes : 
the look ahead is currently capped at two due to my personal machine's constraints (anything past requires too many resources and crashes my computer)
