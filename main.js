var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")
// main.addEventListener("mousemove",function(){
//     console.log("hey")
    main.addEventListener("mousemove",function(dets){
        // console.log(dets)
        // style will work when we give position absolute to cursor in style css
        crsr.style.left = dets.x+"px"
        crsr.style.top = dets.y+"px"
        // will get details of mousemovement dets.x will show x axis movment dets.y for y aixs
})