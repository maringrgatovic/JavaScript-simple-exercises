var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	AddDeleteButton(li);
	li.addEventListener("click", toggleClass);
	ul.appendChild(li);
	input.value = "";
}

function AddDeleteButton(li) {
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.addEventListener("click", deleteListItem);
	li.appendChild(delButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClass() {
	this.classList.toggle("done");
}

function DeleteButtons() {
	for(i=0; i<li.length; i++){
		var deleteButton = li[i].children[0];
		deleteButton.addEventListener("click", deleteListItem);
	}
}

function deleteListItem() {
	this.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for(i=0; i<li.length; i++) {
	li[i].addEventListener("click", toggleClass)
}

DeleteButtons();
