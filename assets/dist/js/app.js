const counter=document.querySelector('.counter')
const nums=document.querySelectorAll('.num span')
const final=document.querySelector('.final')
const replay=document.querySelector('.replay')

animationWork()




function animationWork(){
 nums.forEach((num,idx)=>{
    const nextToGo= nums.length-1;
    num.addEventListener('animationend',e=>{
        if(e.animationName==='goIn'&& idx!==nextToGo){
           num.classList.remove('in')
           num.classList.add('out')
        }else if(e.animationName==='goOut',num.nextElementSibling){
            
            num.nextElementSibling.classList.add('in')

        }else{
            counter.classList.add('hide')
            final.classList.add('show')
        }
    })})}

    function resetAnimation(){
        counter.classList.remove('hide')
            final.classList.remove('show')
            nums.forEach((num,idx)=>{
            num.classList.value=''
            })
    nums[0].classList.add('in')
        }
        replay.addEventListener('click',()=>{
            resetAnimation()
            animationWork()
        })