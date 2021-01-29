'use strict'
// Selector
const img = document.querySelector('.img');
const box = document.querySelector('.box');

//Variable
let dragged;


// addEventListener
document.addEventListener('drag', (event) => {
});


//드래그한 요소에 대한 참조 변수
document.addEventListener('dragstart', (event) => {
    dragged = event.target;
    dragged.style.opacity = 0.5;

});

//드래그가 끝났을 때 발생하는 이벤트 
document.addEventListener('dragend', (event) => {
    dragged = event.target;
    dragged.style.opacity = '';
});

//드롭 대상에서 이벤트 발생
document.addEventListener('dragover', (event) => {
    event.preventDefault();
});


//요소를 드롭하려는 대상 위로 드래그 했을 때 발생하는 이벤트
document.addEventListener('dragenter', (event) => {
    if (event.target.className == 'box') {
        event.target.style.background = 'rgba(128, 128, 128, 0.479)';
    };
});

//요소를 드래그하여 드롭하려던 대상으로 부터 벗어 났을때 발생하는 이벤트 
document.addEventListener('dragleave', (event) => {
    if (event.target.className == 'box') {
        event.target.style.background = '';
    }
});

//드롭을 최종 수행 하였을 때 발생하는 이벤트 
document.addEventListener('drop', (event) => {
    event.preventDefault();
    dragged = event.target;
    if (event.target.className == 'box') {
        event.target.style.background = '';
        dragged.appendChild(img);
    }
});






