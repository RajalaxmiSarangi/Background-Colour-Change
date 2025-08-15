const button = document.querySelectorAll('.box');
const body = document.querySelector("body");

button.forEach(function(box){
     box.addEventListener('click',function(color){
          if(color.target.id === 'box1'){
               body.style.backgroundColor = 'aquamarine';
          }
          if(color.target.id === 'box2'){
               body.style.backgroundColor = 'rgb(174, 238, 10)';
          }
          if(color.target.id === 'box3'){
               body.style.backgroundColor = 'rgba(231, 119, 191, 0.858)';
          }
          if(color.target.id === 'box4'){
               body.style.backgroundColor = 'rgb(251, 166, 8)';
          }
          if(color.target.id === 'box5'){
               body.style.backgroundColor = 'rgb(243, 239, 5)';
          }
          
     })
})