var form = document.getElementById("todo_form");
var list = document.getElementById("todo_list");
var input = document.getElementById('todo_input');
var remove = document.getElementByTagName('button');

form.onsubmit = function(event) {
	event.preventDefault();

	var uList = document.createElement('ul');
	var newTextNode = document.createTextNode(input.value);
	var rmButton = document.createElement('button');

	var addItem = function(event) {
		list.innerHTML += "<ul>" + input.value + "</ul>"
	}

		rmButton.innerHTML = 'X'
		list.appendChild(uList)
		list.appendChild(newTextNode)
		list.appendChild(rmButton)

	rmButton.onclick = function(event){
		 rmButton.remove()
		 newtextNode.remove()
	}
}