const faders=document.querySelectorAll(".fade");

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.2});

faders.forEach(f=>observer.observe(f));

const hamburger=document.getElementById("hamburger");
const nav=document.getElementById("nav");

hamburger.addEventListener("click",()=>{
    nav.classList.toggle("active");
});

const serviceCards = document.querySelectorAll('.service-card');

const serviceObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.2});

serviceCards.forEach(card=>{
    serviceObserver.observe(card);
});


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
