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

    //create an image tag, set src, give id 'greeting' to div
    let newImg = document.createElement('img');
    newImg.setAttribute('src', 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif')
    document.getElementById('greeting').appendChild(newImg);

    //add to do items in unordered list
    let ulItems = document.createElement('ul');
    ulItems.setAttribute('class', 'todo-items');
    document.querySelector('body').appendChild(ulItems)

    let toDoArray = ['make coffee','eat donut','change diapers','drive to work'];
    for (let todo of toDoArray) {
        let newItem = document.createElement('li');
        newItem.innerText = todo;
        document.querySelector('.todo-items').appendChild(newItem);
    }

})