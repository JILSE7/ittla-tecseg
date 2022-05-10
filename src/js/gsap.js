const logo = document.querySelector("#logo");
const nav = document.querySelector("#nav");



gsap.from(logo, {duration: 3, x: 3200, delay: 0.5, borderRadius:"50%"});
gsap.from(nav, {duration: 3, x: -3200, delay: 0.5});
gsap.to(".danger", {duration: 1, x: 0, scale: 2, y: 10}, "greyAndPink") 
