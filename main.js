let li = document.querySelector("#last");
let otherLinks = document.querySelector(".other-links");

li.addEventListener("mouseover" , function() {
    otherLinks.style.visibility = "visible";
    otherLinks.style.margin = "0px";
})

li.addEventListener("mouseleave" , function() {
    otherLinks.style.visibility = "hidden";
    otherLinks.style.marginTop = "80px";
})
otherLinks.addEventListener("mouseover" , function() {
    otherLinks.style.visibility = "visible";
    otherLinks.style.margin = "0px";
})
otherLinks.addEventListener("mouseleave" , function() {
    otherLinks.style.visibility = "hidden";
    otherLinks.style.marginTop = "80px";
})
