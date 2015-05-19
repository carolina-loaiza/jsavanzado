
var guessNumber = function () {

  this.guess = function (number) {
    var numRan = Math.floor(Math.random() * (10 - 1)) + 1;
    x.push( numRan );
    console.log(x)
    if( number == numRan) {
      return true;
    }else{
      return false;
    }
  } 

}

var x = [];
var userF = new guessNumber;
var userS = new guessNumber;
var userT = new guessNumber;


$( "#userF" ).keyup(function() {
  var inputF = $(this).val();
  console.log("Numero 1", userF.guess(inputF))
  $("#randomF").val(x[0]);
});

$( "#userS" ).keyup(function() {
 var inputS = $(this).val();
  console.log("Numero 2", userS.guess(inputS))
  $("#randomS").val(x[1]);
});

$( "#userT" ).keyup(function() {
  var inputT = $(this).val();
  console.log("Numero 3", userT.guess(inputT))
  $("#randomT").val(x[2]);
});



$('#randomT').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).val()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
      $(this).val(Math.ceil(now));
    }
  });
});