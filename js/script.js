//adding an item
var addItem = function(){
	var input = document.getElementsByTagName('input')[0];
	var newItemText = input.value;


	var newItem = document.createElement('li');
	newItem.innerHTML = newItemText;

	if (newItemText === ''){
		alert("You must write sth!");
	}
	else {
	document.getElementById('todo').appendChild(newItem);
	}
};
document.getElementsByTagName('button')[0].addEventListener('click', addItem);

//crossing out toggle
var list = document.querySelector('ul');
var crossOut = function(item){
 if (item.target.tagName === 'LI') {
   item.target.classList.toggle('done');
  }
}
list.addEventListener('click', crossOut, false);





