var input = document.querySelector('input');
function number(num1){
  input.value += num1;
}
function calculate(){
  var result = eval(input.value);
  input.value = result;
}
function Clear(){
  input.value = '';
}
function absolute(){
  var num = input.value *-1;
  input.value = num;
}
function Pow(){
  var result = Math.pow(parseFloat(input.value),2);
  input.value = result;
}
function Sqrt(){
  var result = Math.sqrt(parseFloat(input.value));
  input.value = result;
}
function Percent(){
  input.value = input.value/100;
}


