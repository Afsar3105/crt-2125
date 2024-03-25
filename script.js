
let body = document.body;

let profile = document.querySelector('.header .flex .profile');
document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
}


let sideBar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}


document.querySelector('.side-bar .close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
    body.classList.remove('active');
  
}


window.onscroll = () =>{
    profile.classList.remove('active');

    if(window.innerWidth < 1200){
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 10;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.students .box-container .allstudents')];
    for (var i = currentItem; i <= currentItem + 10; i++){
        boxes[i].style.display = 'flex';
    }
    currentItem += 10;

    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}