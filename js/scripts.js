

function Player(name, score) {
  this.name = name;
  //this.turn = 0;
  this.score = 0;
};

function Play( player,turnTotal, roll) {
this.player = player;
this.turnTotal = 0;
this.roll = 0;
};
Play.prototype.rollPlayer = function(player1, player2) {
  var roll = Math.ceil(Math.random() * 6)
  this.turnTotal += roll;
  if (roll !== 1) {
    this.roll += roll;
    return roll;
  } else {
    this.total = 0;
    this.endPlay(player1, player2)
    return roll;
  };
};
Play.prototype.endPlay = function(player1,player2) {
  this.player = this.score+this.turnTotal;
  this.turnTotal = 0;
  this.roll = 0;
  if (this.player === player1) {
    this.player = player2;
    alert (player2);
  } else if (this.player === player2) {
    this.player = player1;
    alert (player1);
  };
};


$(document).ready(function() {

  $(".btn").click(function(event) {
    $("#input").show();
    var player1Input = $("input#player1").val("");
    //var player1 = new Player(player1Input);
    var player2Input = $("input#player2").val("");
    //var player2 = new Player(player2Input);
    $(".player1").text("player1Input");
    $(".player2").text("player2Input");
    //var first = new Play(player1)
    $("#names").hide();
    event.preventDefault();



    //$("btn#roll").click(function(event) {


      //event.preventDefault();
  //  });
  });
});
