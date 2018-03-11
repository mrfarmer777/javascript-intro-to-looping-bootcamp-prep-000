var forLoop =function(ar){
  for(let i = 0;i<25;i++){
    if(i===1){
      ar.push("I am ${i} strange loop.");
    } else {
      ar.push('I am ${i} string loops.');
    }
  }
}