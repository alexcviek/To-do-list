var addItem = function(){
	var input = document.getElementsByTagName('input')[0];
	var newItemText = input.value;


	var newItem = document.createElement('li');
	newItem.innerHTML = newItemText;

	document.getElementById('todo').appendChild(newItem);
};
document.getElementsByTagName('button')[0].addEventListener('click', addItem);



