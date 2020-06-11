console.log("Javascript is alive!");

document.addEventListener('DOMContentLoaded', function () {
    //change Hello, There to Hello, World
    document.getElementById('greeting').innerText = "Hello World!";

    //change background color of li elements to yellow
    let listItems = document.getElementById('essentials').children[0].children;
    for (const element of listItems) {
        element.style.backgroundColor = "yellow";
    }

    //Other types of loops we could have used
    /*
    for (let i = 0; i < listItems.length; i++) {

    }
    for(const key in object) {
       if (object.hasOwnProperty(k)) {
           const element = object[k];
       }
    }
    listItems.forEach(element => {

    })
    */
})