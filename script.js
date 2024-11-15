const textbox = document.getElementById("text");
const task = document.getElementById("tasks");
const img = document.getElementsByTagName("img");
function addTask() {
    if (textbox.value == '') {
        alert("Write something!!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<img src="assets/unchecked.png" alt="" class="img" >
                        
                            ${textbox.value}
                        
                        <span id="cut"> × </span>`;

        task.appendChild(li);
    }
}
task.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();

    }
}, false);
