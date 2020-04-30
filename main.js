// Validate tasks
function validatetask () {
	let inputval = document.querySelector('#taskval').value;
   if (inputval.length == '') {
   	document.querySelector('#form_todo').className = 'haserror';
   	setInterval(function(){
   	document.querySelector('#form_todo').classList.remove('haserror');
	
},2000)
}  else{
	addnewtask();}
}


// fnc_add_new_tasks
function addnewtask(){
	const taskval = document.querySelector('#taskval').value;
	const listele = document.createElement('li');
	listele.className = 'list-group-item';
	listele.textContent = taskval;
	document.querySelector('ul').appendChild(listele);
    listele.insertAdjacentHTML('beforeend', 
    '<i class="fas fa-trash float-right"></i>');
	document.querySelector('#taskval').value = "";

}

var del = document.querySelector(".fa-trash");
if (del) {
alert('hdhh')
}