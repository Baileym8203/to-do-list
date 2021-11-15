 function newItem() {
 // this is the creation of the ol list \\
 let li = $('<li></li>');
//this is the value given from the inputs \\
 let inputValue = $('#input').val();
 li.append(inputValue);
 let text = $(document.createTextNode(inputValue))
 li.append(text)
 li.addClass('delete');
 
if (inputValue === '') {
alert('you must input something')
} else {
let list = $('#list'); 
list.append(li);
}
 }

function crossOut() {
li.addClass("strike");
}
// when clicked will cross out \\
li.on("dblclick", crossOut)
    
let crossOutButton = $("crossOutbutton")
crossOutButton.append(document.createTextNode("X"));
li.append(crossOutButton);


crossOutButton.on("click", deleteListItem);

function deleteListItem() {
li.addClass("delete")
}

$('#list').sortable();


