export default(selector, clb1, clb2)=>{
    let elem = document.querySelector(selector);
    let touchStart, touchEnd;
    elem.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        touchStart = e.changedTouches[0].pageX;
    })
    elem.addEventListener('touchend', (e) => {
        e.stopPropagation();
        touchEnd = e.changedTouches[0].pageX;
        return touchStart - touchEnd > 70  ? clb1() : 
                touchStart - touchEnd < -70 ? clb2() : false
    })
}