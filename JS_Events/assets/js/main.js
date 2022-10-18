var startB = document.getElementById("start");
startB.addEventListener('click', function () {
    let m = 0;
    let s = 0;
    let h = 0;
    let ms = 0;

    function scrTime() {
        document.getElementById("child1").innerHTML = "Minute => " + m;
        document.getElementById("child").innerHTML = "Hour => " + h;
        document.getElementById("child2").innerHTML = "Second => " + s;
        ms++;
        document.getElementById("child3").innerHTML = "MSecond => " + ms;
        if (ms === 60) {
            s++;
            ms = 0;
        } else if (s === 60) {
            m++;
            ms = 0;
            s = 0;
        } else if (m === 60) {
            h++;
            s = 0;
            ms = 0;
            m = 0;
        }
    }
    st = setInterval(scrTime, 13);
})

var stopB = document.getElementById("stop");
stopB.addEventListener('click', function () {
    clearInterval(st);
})

var resetB = document.getElementById("reset");
resetB.addEventListener('click', function () {
    clearInterval(st);
    document.getElementById("child1").innerHTML = "Minute => " + 0;
    document.getElementById("child").innerHTML = "Hour => " + 0;
    document.getElementById("child2").innerHTML = "Second => " + 0;
    document.getElementById("child3").innerHTML = "MSecond => " + 0;

})


// ToDoList
// let addbtn = document.getElementById('todo');
// addbtn.addEventListener('click', function () {
//     let datetime = this.previousElementSibling;
//     let task = datetime.previousElementSibling;
//     datetime.style.borderColor = '#ced4da';
//     task.style.borderColor = '#ced4da';
//     if (task.value.trim().length > 0 && datetime.value.trim().length > 0) {
//         let list = document.getElementById('list');
//         let date = datetime.value.split('T')[0];
//         let time = datetime.value.split('T')[1];
//         list.innerHTML += `<li class="list-group-item">
//             <div class="row align-items-center">
//                 <p class="col-md-4 m-0">${task.value}</p>
//                 <p class="col-md-4 m-0">${date} | ${time}</p>
//                 <div class="col-md-4 row justify-content-between">
//                     <button class="btn btn-success done-btn col-md-5">Done</button>
//                     <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-danger col-md-5">Delete</button>
//                 </div>
//             </div>
//         </li>`
//         datetime.value = "";
//         task.value = "";
//         checkAllItem();
//     }
//     else {
//         datetime.style.borderColor = 'red';
//         task.style.borderColor = 'red';
//     }
// })

// function checkAllItem() {
//     let items = document.querySelectorAll(".list-group-item");
//     for (const item of items) {
//         let datetime = item.children[0].children[1].innerText.split('|');
//         let result = checkTime(datetime[0], datetime[1])
//         item.style = 'background-color:' + result + '!important'
//     }
// }

// setInterval(checkAllItem, 1000)
// // checkAllItem();

// function checkTime(taskDate, taskTime) {
//     let dateObj = new Date();
//     let date = dateObj.toLocaleDateString("az").trim();
//     let time = dateObj.toLocaleTimeString().trim();
//     taskDate = taskDate.trim();
//     taskTime = taskTime.trim();
//     if (date == taskDate) {
//         return '#0f0f0f';
//     }
//     else {
//         date.split('-')
//     }
//     return 'red';
// }