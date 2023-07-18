var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient(){
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
		
		css.textContent = body.style.background + ";";
}

function setInitialGradient() {
	
	
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

css.textContent = "Linear-gradient(to right, " + "rgb(255, 0, 0), " + "rbg(255, 255, 0));";