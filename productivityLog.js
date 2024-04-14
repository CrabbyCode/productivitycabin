var fakeUsers = [
    {
        username: "Ali123",
        age: 30,
        gender: "Male",
        occupation: "Engineer"
    },
    {
        username: "Alice-gamer",
        age: 25,
        gender: "Female",
        occupation: "Teacher"
    },
    {
        username: "Bob@somewhere",
        age: 35,
        gender: "Male",
        occupation: "Doctor"
    },
    {
        username: "Mo978",
        age: 35,
        gender: "Male",
        occupation: "Doctor"
    }
    
];
tasks=["do the front end", "change tailwend code to bootstarp", "fix errors in the index file", "color adjustment to the final report"]
template="";
i =0;
const container = document.getElementById('container');
function showLog(){
    fakeUsers.forEach(user => {
        template+=`
            <div style = "border: 2px solid; background-color: #C1E1BF; border-radius: 20px; margin-left: 10px; color: black; margin-bottom: 10px; padding: 5px;">
                <span style = "margin-left: 10px; margin-right: 40px; background-color: #C1E1BF; border-radius: 20px; padding: 5px;"><strong>${user.username}</strong> crossed: 
                ${tasks[i]}
                </span>
            </div>
            `
        i++;
    })
    
    container.innerHTML += container.innerHTML + template

}



window.addEventListener('DOMContentLoaded', ()=>showLog())
