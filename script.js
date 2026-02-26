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

