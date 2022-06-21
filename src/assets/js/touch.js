export default(selector, clb1, clb2)=>{
    let elem = document.querySelector(selector);
    console.log(selector)
    let touchStart, touchEnd;
    elem.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        touchStart = e.changedTouches[0].pageX;
        console.log(e.target)
    })
    elem.addEventListener('touchend', (e) => {
        e.stopPropagation();
        touchEnd = e.changedTouches[0].pageX;
        return touchStart > touchEnd ? clb1() : 
                touchStart < touchEnd ? clb2() : false
    })
}