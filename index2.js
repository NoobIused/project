let randomnum = Math.random() * 10
let randomtext = document.getElementById("randomtext")
let rounded = Math.round(randomnum)
console.log(randomnum)
console.log(rounded)


if(rounded == 0){
  randomtext.textContent = "'a really cool site' - someone that is most definetly not me";
}

else if(rounded == 1){
  randomtext.textContent = "established in january of 2024";
}

else if(rounded == 2){
  randomtext.style.fontWeight = 'bold';
  randomtext.textContent = "it is not my responsibility if you get caught using this site when you are supposed to be working";
}

else if(rounded == 3){
  randomtext.textContent = "not made in china";
}

else if(rounded == 4){
  randomtext.textContent = "76k views! (last checked march 31!)";
}

else if(rounded == 5){
  randomtext.textContent = "this is the last version of crystal";
}

else if(rounded == 6){
  randomtext.style.fontStyle = 'normal'
  randomtext.textContent = "😎😎😎😎😎😎😎😎";
}

else if(rounded == 7){
  randomtext.textContent = "i love turtles";
}

else if(rounded == 8){
  randomtext.textContent = "sitting at 58 games";
}

else if(rounded == 9){
  randomtext.textContent = "did you know this site has around 600+ lines of code";
}

else if(rounded == 10){
  randomtext.textContent = "..........";
}


