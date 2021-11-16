 function newItem() {
 // this is the creation of the ol list \\
 let li = $('<li></li>');
//this is the value given from the inputs \\
 let inputValue = $('#input').val();
 li.append(inputValue);
 
if (inputValue === '') {
alert('you must input something')
} else {
let list = $('#list'); 
list.append(li);
}
function crossOut() {
li.addClass("strike");
}
// when clicked will cross out \\
li.on("dblclick", crossOut)
    
let crossOutButton = $("<CrossOutButton>X</crossOutButton")
crossOutButton.append("X");
li.append(crossOutButton);


crossOutButton.on("click", deleteListItem);

function deleteListItem() {
li.addClass("delete")
}

$('#list').sortable();
 }
