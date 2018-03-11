var forLoop=function(ar){
  for(let i = 0;i<25;i++){
    if(i===1){
      ar.push("I am ${i} strange loop.");
    } else {
      ar.push('I am ${i} string loops.');
    }
  }
  return ar;
};

var whileLoop=function(number){
  let count=number;
  while(count>0){
    console.log(count);
    count-=1;
  }
  return 'done';
};



var doWhileLoop=function(ar){
  function maybeTrue() {
  return Math.random() >= 0.5;
}
  do {
    console.log('some crap');
  } while (maybeTrue()&&array.length>0);
  return ar;
};