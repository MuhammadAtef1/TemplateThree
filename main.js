let li = document.querySelector("#last");
let otherLinks = document.querySelector(".other-links");

li.addEventListener("mouseover" , function() {
    otherLinks.style.visibility = "visible";
    otherLinks.style.marginTop = "0px";
})

li.addEventListener("mouseleave" , function() {
    otherLinks.style.visibility = "hidden";
    otherLinks.style.marginTop = "80px";
})
otherLinks.addEventListener("mouseover" , function() {
    otherLinks.style.visibility = "visible";
    otherLinks.style.marginTop = "0px";
})
otherLinks.addEventListener("mouseleave" , function() {
    otherLinks.style.visibility = "hidden";
    otherLinks.style.marginTop = "80px";
})

//*********************************************** */

let html = document.querySelector(".per-icon-shape-number:nth-child(1)");
let paython = [...document.querySelectorAll(".per-icon-shape-number")][3];
let options = {} ;

let observerHTML= new IntersectionObserver((enteries)=> {
    enteries.forEach((el)=>{
        el.target.classList.toggle("html" , el.isIntersecting);
        if (el.isIntersecting){
            observerHTML.unobserve(el.target);
        }
    })
},options);

observerHTML.observe(html);
observerHTML.observe(paython);

    //********************** */

    let css = [...document.querySelectorAll(".per-icon-shape-number")][1];

let observerCSS = new IntersectionObserver((enteries)=> {
    enteries.forEach((el)=>{
        el.target.classList.toggle("css" , el.isIntersecting);
        if (el.isIntersecting){
            observerCSS.unobserve(el.target);
        }
    })
},options);

observerCSS.observe(css);

//************************** */
let js = [...document.querySelectorAll(".per-icon-shape-number")][2];

let observerJS = new IntersectionObserver((enteries)=> {
    enteries.forEach((el)=>{
        el.target.classList.toggle("css" , el.isIntersecting);
        if (el.isIntersecting){
            observerJS.unobserve(el.target);
        }
    })
},options);

observerJS.observe(js);
//*******************************************************/

let latestCircles1 = document.querySelectorAll(".latest-circles-1");
let latestCircles2 = document.querySelectorAll(".latest-circles-2");
let latestCircle = document.querySelector(".latest-circle");
let arr = [...latestCircles1] ;

for (let j = 0 ; j < arr.length ; j++) {
    for (let i = 0 ; i < 155 ; i++) {
        let circle = document.createElement("div");
        circle.className = "latest-circle";
        latestCircles1[j].appendChild(circle) ;
    }
    for (let i = 0 ; i < 155 ; i++) {
        let circle = document.createElement("div");
        circle.className = "latest-circle";
        latestCircles2[j].appendChild(circle) ;
    }
}


//******************************************************* */

let day = document.querySelector(".latest-icon:nth-child(1) h1");
let hour = document.querySelector(".latest-icon:nth-child(2) h1");
let mins = document.querySelector(".latest-icon:nth-child(3) h1");
let sec = document.querySelector(".latest-icon:nth-child(4) h1");


const targetDate = new Date("2024-12-31T23:59:59");
function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const totalSeconds = Math.floor(timeDifference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds / 3600)-(days * 24));
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  day.textContent =` ${days} ` ;
hour.textContent =`${hours} ` ;
mins.textContent =` ${minutes} ` ;
sec.textContent =` ${seconds} ` ;
  if (totalSeconds > 0) {
    setTimeout(updateCountdown, 1000);
  } else {
    console.log("Countdown has ended");
  }
}

updateCountdown();

//*********************************************************** */

let clientsH1 = document.querySelector(".awesome-icon:nth-child(1) h1") ;
let options2 = {
    threshold : 1
}
let observerClients= new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
        if (clientsH1.innerHTML == 0) {
            function countUp1() {
                clientsH1.innerHTML++ ;
                if (clientsH1.innerHTML == 150) {
                clearInterval(ctrClients);
                }
                
        
                }
                let ctrClients = setInterval(countUp1,10);
        }
    }
    
}
,options2);

observerClients.observe(clientsH1);

                    //********************** */
let projH1 = document.querySelector(".awesome-icon:nth-child(2) h1") ;
let observerProj= new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
        if (projH1.innerHTML == 0) {
            function countUp2() {
                projH1.innerHTML++ ;
            if (projH1.innerHTML == 135) {
            clearInterval(ctrProj);
            }
    
            }
            let ctrProj = setInterval(countUp2,10);
        }
    }
}
,options2);

observerProj.observe(projH1);
                       //********************** */
let countH1 = document.querySelector(".awesome-icon:nth-child(3) h1") ;
let observerCount= new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
        if (countH1.innerHTML == 0) {
            function countUp3() {
                countH1.innerHTML++ ;
                if (countH1.innerHTML == 50) {
                clearInterval(ctrCount);
            }
    
            }
            let ctrCount = setInterval(countUp3,10);
        }
    }
}
,options2);

observerCount.observe(countH1);

                        //********************** */

let moneyH1 = document.querySelector(".awesome-icon:nth-child(4) h1") ;
let observerMoney= new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
        if (moneyH1.innerHTML == 0) {
            function countUp4() {
                moneyH1.innerHTML++ ;
                if (moneyH1.innerHTML == 500) {
                clearInterval(ctrMoney);
            }
    
            }
            let ctrMoney = setInterval(countUp4,3);
        }
    }
}
,options2);

observerMoney.observe(moneyH1);
                        //********************** */
