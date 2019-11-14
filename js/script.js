const completed = document.querySelector('.completed');
const open = document.querySelector('.open');
const one = document.querySelector('.one');
const two = document.querySelector('.two');


one.addEventListener('click', function(event){
    if(open.innerHTML != 0){
        if(confirm('Are you sure you want to change the number of tasks?')){
            completed.innerHTML++;
            open.innerHTML--;
            if(open.innerHTML < 0){
                open.innerHTML++;
            }
        }       
    }
    else{
        alert('No :)')
    }

})

two.onclick = function(){
    return open.innerHTML++;
};


// array img)
const img = document.querySelectorAll('.world > div > img');
const notifications = document.querySelector('.Notifications > div');

img.forEach( (element, index) => {
    element.addEventListener('click', () => {
      notifications.innerHTML = index;
   });

  });