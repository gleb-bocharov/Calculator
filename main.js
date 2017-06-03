function loaded(){
	var buttons = document.querySelectorAll("div.keysPanel > div.keysRow > div");
	buttons.forEach(function(button){
		button.addEventListener("click", onButtonClick);
	})
	var clearButton = document.querySelector("div.topRow > div.clearButton");
	clearButton.addEventListener("click", onButtonClick);
	
} 

function onButtonClick(e){
	var type = e.target.attributes["button-type"].value;
	var value = e.target.attributes["button-value"].value;
	console.log(type);
	console.log(value);
	
}