
function addnames(names){
var nameToAdd=document.getElementById(names).value;
createEl("li",nameToAdd);

}
function createEl(elementName,textToAdd){
    var createElem=document.createElement(elementName);
    var nameToAddInText=document.createTextNode(textToAdd);
    var textSpan=document.createElement("span");
    textSpan.appendChild(nameToAddInText);
    textSpan.setAttribute("id","text");
    createElem.appendChild(textSpan);
    var delButton=document.createElement("input");
    delButton.setAttribute("type","button");
    delButton.setAttribute("value","DELETE");
    delButton.setAttribute("onClick","remove(this)");
    delButton.setAttribute("class","side");
    createElem.appendChild(delButton);
    var editButton=document.createElement("input");
    editButton.setAttribute("type","button");
    editButton.setAttribute("value","EDIT");
    editButton.setAttribute("onClick","edit(this)");
    editButton.setAttribute("class","side");
    createElem.appendChild(editButton);
    var parentElement=document.getElementById("main-area");
    var InsertPlace=parentElement.firstElementChild;
    parentElement.insertBefore(createElem,InsertPlace);

}
function remove(thingToRemove){
    var liToDelete=thingToRemove.parentNode;
    var parentEl=thingToRemove.parentNode.parentNode;
    parentEl.removeChild(liToDelete);

}

function edit(thingToEdit){
var li=thingToEdit.parentNode;
var addedName=li.firstElementChild.innerText;
var extraSpan=document.createElement("span");
var previousText=document.createTextNode(addedName);
extraSpan.appendChild(previousText);
extraSpan.setAttribute("id","extraSpa");


var editingText=document.createElement("input");
editingText.setAttribute("type","text");
editingText.value=addedName;
editingText.setAttribute("id","editedText");


var update=document.createElement("input");
update.setAttribute("type","button");
update.setAttribute("value","Update");
update.setAttribute("onClick","updatingText(this,'editedText')");
update.setAttribute("class","side");


li.replaceChild(editingText,li.firstElementChild);
li.replaceChild(update,li.firstElementChild.nextElementSibling);
li.removeChild(li.lastElementChild);

}
function updatingText(elementComing,textComing){
var parentElu=elementComing.parentElement.parentElement;
var liDelete=elementComing.parentElement;
var text=document.getElementById(textComing).value;
createEl("li",text);
parentElu.removeChild(liDelete);
}
