function time (hour, minute, period){
  var message=""
  if (minute >30){
    message+="It's almost "+ (hour+1) +" "

  }
  else if (minute<30){
    message+= "It's just after "+ hour+ " "

  }
  if (period=="am"){
    message+="in the morning";
  }
  else if {
     message+= "in the evening";
  }

  console.log (message)

}

time (2,40,"pm");
