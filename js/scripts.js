//business logic
var add = function(number1, number2) {
  return number1 + number2;
  };

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};




//user logic
$(document).ready(function() {
  $(".btnAdd").click(function() {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    event.preventDefault();
    var result = (add(number1, number2));
    $("#result").text(result);
    $("#result").show();

  });
  $(".btnSub").click(function() {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    event.preventDefault();
    var result = (subtract(number1, number2));
    $("#result").text(result);
    $("#result").show();

  });
  $(".btnDiv").click(function() {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    event.preventDefault();
    var result = (divide(number1, number2));
    $("#result").text(result);
    $("#result").show();

  });

  $(".btnMult").click(function() {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    event.preventDefault();
    var result = (multiply(number1, number2));
    $("#result").text(result);
    $("#result").show();

  });
});