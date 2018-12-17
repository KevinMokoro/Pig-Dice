function Player(name, score) {
  this.name = name;
  this.score = 0;
};

function Play(player, turnTotal, roll) {
  this.player = player;
  this.turnTotal = 0;
  this.roll = 0;
};
Play.prototype.rollPlayer = function(player1, player2) {
  var roll = Math.ceil(Math.random() * 6);
  this.turnTotal += roll;
  if (roll !== 1) {
    this.roll += roll;
    return roll;
  } else {
    this.total = 0;
    this.switchTurn(player1, player2);
    return roll;
  };
};
Play.prototype.switchTurn = function(player1, player2) {
  this.player = this.score + this.turnTotal;
  this.turnTotal = 0;
  this.roll = 0;
  if (this.player === player1) {
    this.player = player2;
    alert(player2);
  } else if (this.player === player2) {
    this.player = player1;
    alert(player1);
  };
};


$(document).ready(function() {

  $(".btn").submit(function(event) {
      $("#input").show();
      var player1Input = $("input#player1").val("");
      var player2Input = $("input#player2").val("");
      $(".player1").text("player1Input");
      $(".player2").text("player2Input");

      $("#names").hide();
      event.preventDefault();
    };
  };

  var player1 = new Player("Player 1");
  var player2 = new Player("Player 2");
  var first = new Play(player1);
  var current = new Play(player1);

  $("#turn-total").text(total);
  $("#output1").text(player1.score);
  $("#output2").text(player2.score);
  $("#current_player").text(current.player.name);

  $("#roll").submit(function(event) {
    event.preventDefault();
    var result = current.rollPlayer(player1, player2);
    $("#roll").text(result);
    $("#turn-total").text(current.total);

    if ((current.total + current.player.score) >= 100) {
      if (current.player == player1) {
        $("#output1").text(current.total + current.player.score);
        alert("player1 is the winner!");
      } else if (current.player == player2) {
        $("#output2").text(current.total + current.player.score)
        alert("Player 2 is the winner!");
      }
    };
  });

});
$("#switch").submit(function(event) {
event.preventDefault();

current.switchTurn(player1, player2);


$('#current_player').text(current.player.name);


$("#output1").text(player1.score);
$('#output2').text(player2.score);

$('#roll').text(current.roll);
$('#turn-total').text(current.total);
});
})
