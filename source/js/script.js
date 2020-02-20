(function(){
    let backTop = document.getElementById('backTop')
    window.addEventListener('scroll',function(){
        if(document.body.scrollTop>document.body.clientHeight&&backTop.className=="backTop icon-arrow-up hideBtn"){
            backTop.className = "backTop icon-arrow-up showBtn";
        }else if(document.body.scrollTop<=document.body.clientHeight&&backTop.className=="backTop icon-arrow-up showBtn"){
            backTop.className = "backTop icon-arrow-up hideBtn";
        }
    })
    backTop.addEventListener('click',function(){
        function move(){
            if(document.body.scrollTop<10){
                document.body.scrollTop = 0;
                return false;
            }else{
                document.body.scrollTop-=document.body.scrollTop/10
                return true;
            }
        }
        requestAnimationFrame(function fn(){
            if(move()){
                console.log(1)
                requestAnimationFrame(fn)
            }   
        })
    })
})()