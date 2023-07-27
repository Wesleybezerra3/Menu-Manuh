$(document).ready(function () {
    let rotate = 0;
    $('#summaryCake').click(()=>{
        rotate += 180;
        $('.fa-caret-down').css('transform',`rotate(${rotate}deg)`)
        if(rotate === 180){
          rotate =- 180;
        }
    })
});