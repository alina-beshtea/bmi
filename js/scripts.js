

var height = parseFloat(prompt("Enter your height in m:" ));
var weight = parseInt(prompt("Enter your weight in kg:"));

var bmi = function(){

var heightSquared = height * height;
var result =  weight / heightSquared;
alert(result);

}
bmi();
