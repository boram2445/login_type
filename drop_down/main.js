"use-strict";

const selectBtn = document.querySelector('.btn-select');
const lists = document.querySelector('.cont-lists');

selectBtn.addEventListener('click', ()=>{
  selectBtn.classList.toggle('on');
})

lists.addEventListener('click',(event)=>{
  if(event.target.tagName !== 'BUTTON'){
    return;
  }
  selectBtn.textContent = event.target.textContent;
  selectBtn.classList.remove('on');
})