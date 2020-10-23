module.exports = function toReadable (number) {
    let res = "";
  let numMap = new Map([
    [0,"zero"],
    [1,"one"],
    [2,"two"],
    [3,"three"],
    [4,"four"],
    [5,"five"],
    [6,"six"],
    [7,"seven"],
    [8,"eight"],
    [9,"nine"],
    [10,"ten"],
    [11,"eleven"],
    [12,"twelve"],
    [13,"thirteen"],
    [15,"fifteen"],
    [18,"eighteen"],
    [20,"twenty"],
    [30,"thirty"],
    [40,"forty"],
    [50,"fifty"],
    [80,"eighty"],
    [100,"hundred"],
  ]);
  if (number == 0){
      return "zero";
  }
  //console.log(number/100);
  if (number/100 >= 1){
      res += numMap.get(Math.floor(number/100)) + " " + "hundred";
  }
  number = number % 100;
  if (res != "" && number != 0){
      res += " ";
  }
  if (number <= 19 && number > 0){
    if (numMap.has(number)){
        res += numMap.get(number);
    }
    else{
        res += numMap.get(number%10) + "teen";
    }
  }
  else if (number != 0){
    if (numMap.has(number - number%10)){
        res += numMap.get(number - number%10);
    }
    else{
        res += numMap.get(Math.floor(number/10)) + "ty";
    }
    if (number%10 != 0){
        res += " " + numMap.get(number%10);
    }
  }
  return res;
}
