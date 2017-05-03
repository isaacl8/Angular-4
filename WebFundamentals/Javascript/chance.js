function quarters(game) {
  for (var gamesLeft= game; gamesLeft>0; gamesLeft--){
    var diceRoll= 1+ Math.floor(100*Math.random());
    console.log("This is diceRoll:", diceRoll)
    if (diceRoll ==100){
      //main focus of this problem is to understand hhow to use Math
      var won= 50+ Math.floor(51*Math.random());
      return won+gamesLeft;
    }
  }
console.log("you lost it all")
}

console.log(quarters(15000));
