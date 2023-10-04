//your JS code here. If required.
let levelElement = document.getElementById("level");
let level = 1;

while (true) {
	if(levelElement.tagName === "HTML") {
		break;
	}
	levelElement= levelElement.parentNode;
	level++;
}
alert(`The level of the element is: ${level}`);
