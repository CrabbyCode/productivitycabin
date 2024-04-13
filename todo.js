const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listed-container");
const alertMessage = document.getElementById("alert-message");


function addTask() {
    if (inputBox.value === '') {
        // Display alert message in red above the input box
        alertMessage.innerHTML = "You must write something!";
        alertMessage.style.color = "red";
    } else {
        // Clear alert message if input is not empty
        alertMessage.innerHTML = "";

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        li.addEventListener('click', function() {
            if (li.classList.contains('deleted')){
                li.remove();
            }
        })
        
        inputBox.value = ''; 

        li.addEventListener('click', function() {
            li.classList.toggle('checked');
        });
        
    }
}

// Event listener for the Enter key press in the input box
inputBox.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});


document.getElementById('deleteButton').addEventListener('click', function() {
    var listItems = document.querySelectorAll('#listed-container li');
    var isAnyDeleted = false;

    listItems.forEach(function(item) {
        if (item.classList.contains('deleted')) {
            isAnyDeleted = true;
        }
    });

    if (isAnyDeleted) {
        listItems.forEach(function(item) {
            item.classList.remove('deleted');
        });
    } else {
        listItems.forEach(function(item) {
            item.classList.add('deleted');
        });
    }

});


