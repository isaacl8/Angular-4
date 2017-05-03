function birthday(num) {

  for (var i = num; i > 0; i--) {
    if (i >= 30) {
      console.log(i + " days until my birthday. Such a long time...");
    }
    else if (i < 30 && i > 5) {
      console.log(i + " days until my birtday. It's close");
    }
    else if (i < 5 && i > 2) {
      console.log(i + " DAYS UNTIL MY BIRTHDAY!!!");
    }
    else if (i<= 1) {
      console.log(i + " DAY UNTIL MY BIRTHDAY");
    }
  }

}
console.log(birthday(45));
