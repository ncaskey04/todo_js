var form = document.getElementById("todo_form");
var list = document.getElementById("todo_list");
var input = document.getElementById('todo_input');
var remove = document.getElementsByTagName('button');


form.onsubmit = function(event) {
	event.preventDefault();

	var uList = document.createElement('li');
	var newTextNode = document.createTextNode(input.value);
	var rmButton = document.createElement('button');

	input.value = "";


	var addItem = function(event) {
		list.innerHTML += "<ul>" + input.value + "</ul>"
	}



		rmButton.innerHTML = 'X'
		list.appendChild(uList)
		uList.appendChild(newTextNode)
		uList.appendChild(rmButton)

	rmButton.onclick = function(event){
		 uList.remove();
	}
}