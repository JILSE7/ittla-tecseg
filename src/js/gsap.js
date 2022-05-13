(() => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("btnModal");
    const btnAcept = document.querySelector(".btn-accept");
    const span = document.getElementsByClassName("close")[0];
    const body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }

    btnAcept.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }


    btn.click();
})()
const logo = document.querySelector("#logo");
const nav = document.querySelector("#nav");

gsap.from(logo, {duration: 3, x: 3200, delay: 0.5, borderRadius:"50%"});
gsap.from(nav, {duration: 3, x: -3200, delay: 0.5});
gsap.to(".danger", {duration: 1, x: 0, scale: 2, y: 10}, "greyAndPink") 


