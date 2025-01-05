let input = document.getElementById("item");
let form = document.getElementById("crud-form");
let ul = document.getElementById("item-list");


let item = JSON.parse(localStorage.getItem("item")) || [];

function saveitemtolocalstorage() {
    localStorage.setItem("item", JSON.stringify(item));
}

function renderItems() {
    ul.innerHTML = ""; 
    item.forEach((value, index) => {
        let li = document.createElement("li");
        li.innerHTML= value;

        let delbtn = document.createElement("button");
        delbtn.innerHTML = "Delete";
        delbtn.addEventListener("click", function() {
            item.splice(index, 1); 
            saveitemtolocalstorage();
            renderItems(); 
        });
        li.appendChild(delbtn);

        let editbtn = document.createElement("button");
        editbtn.innerHTML = "Edit";
        editbtn.addEventListener("click", function() {
            let updatedValue = prompt("Edit item:", value);
            if (updatedValue) {
                item[index] = updatedValue; 
                saveitemtolocalstorage();
                renderItems();
            }
        });
        li.appendChild(editbtn);

        ul.appendChild(li);
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let newitem = input.value.trim();
    if (newitem) {
        item.push(newitem); 
        input.value = ""; 
        saveitemtolocalstorage();
        renderItems(); 
    }
});

renderItems();





