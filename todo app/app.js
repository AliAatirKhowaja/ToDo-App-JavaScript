var list = document.getElementById("list");



function additem() {
    var input = document.getElementById("input");
    var li = document.createElement("li");
    var litext = document.createTextNode(input.value);
    li.appendChild(litext);
    list.appendChild(li);
    input.value = "";

    //delete button
    var delbtn = document.createElement('button');
    var delbtnText = document.createTextNode("Delete");
    delbtn.appendChild(delbtnText);
    delbtn.setAttribute("onclick", "delBtn(this)")
    li.appendChild(delbtn);
    list.appendChild(li);

    //edited button
    var editbtn = document.createElement('button');
    var editbtnText = document.createTextNode("Edit");
    editbtn.setAttribute("onclick", "editBtn(this)")
    editbtn.appendChild(editbtnText);
    li.appendChild(editbtn);


}


function editBtn(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt ("enter edit value",val);
    e.parentNode.firstChild.nodeValue = editValue;
}

function delBtn(e) {

    e.parentNode.remove();

}

function delAll(e) {
    list.innerHTML = ""


}