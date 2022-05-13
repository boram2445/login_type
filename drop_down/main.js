"use-strict";

//1. btn-select를 선택하면 cont-list가 나타나게 한다.
const selectBtn = document.querySelector('.btn-select');
const lists = document.querySelector('.cont-lists');

selectBtn.addEventListener('click', ()=>{
  selectBtn.classList.toggle('on');
})

//2. cont-lists를 선택하면 btn-select의 id값을 받아와 textContent를 변경한다.  
lists.addEventListener('click',(event)=>{
  if(event.target.tagName !== 'BUTTON'){
    return;
  }
  selectBtn.textContent = event.target.textContent;
})