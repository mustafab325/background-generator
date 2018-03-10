var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//body.style.background = "red";
/*console.log(css);
console.log(color1);
console.log(color2);
*/

//function to set the color gradient
function setGradient(){
	body.style.background = "linear-gradient(to right,"
							+color1.value
							+","
							+color2.value
							+")";

	css.textContent = body.style.background + ";"							
}

//The event required to register the change in color is -> 'input'
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);