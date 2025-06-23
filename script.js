let header = document.getElementById("header");
let lines = document.getElementById("lines");
let posts1 = document.getElementById("posts1");
let posts2 = document.getElementById("posts2");
let posts3 = document.getElementById("posts3");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let nav = document.getElementById("nav");
let darkMode = true;
let cards = document.getElementsByClassName('card');
let active_a = document.getElementById("active");
let body_contrast = 1;
let rand = Math.floor(Math.random() * 360);


posts1.style.opacity = '0';
posts2.style.opacity = '0';
posts3.style.opacity = '0';
header.style.opacity = "0";
p1.style.opacity = "0";
p2.style.opacity = "0";
p3.style.opacity = "0";


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function load(){
    
    lines.style.position = "fixed";
    lines.style.top = "50%";
    lines.style.transform = "translateY(-50%)";
    await wait(2100);
    lines.style.animation = "showUp_Up 1.6s ease"
    await wait(1400);
    lines.style.position = "initial";
    lines.style.top = "0%";
    lines.style.transform = "none";
    if (window.innerWidth <= 700){
        nav.style.animation = "none"
    }
    header.style.animation = "fadeUp 1.5s ease";
    header.style.opacity = "100%";


    await wait(400)
    p1.style.animation = "fadeUp_DelayPlus 2s ease"
    p1.style.opacity = "100%";
    await wait(1000);
    posts1.style.animation = "fadeUp_Delay 2s ease";
    posts1.style.opacity = '100%';

    await wait(400)
    p2.style.animation = "fadeUp_DelayPlus 2s ease"
    p2.style.opacity = "100%";
    await wait(1000);
    posts2.style.animation = "fadeUp_Delay 2s ease";
    posts2.style.opacity = '100%';

    await wait(400)
    p3.style.animation = "fadeUp_DelayPlus 2s ease"
    p3.style.opacity = "100%";
    await wait(1000);
    posts3.style.animation = "fadeUp_Delay 2s ease";
    posts3.style.opacity = '100%';


}

function randColor(){
    rand = Math.floor(Math.random() * 360);
    console.log(rand);
    document.body.style.filter = "hue-rotate("+rand+"deg) contrast("+body_contrast+")"
}


function dlMode(){
    if (darkMode){
        document.documentElement.style.setProperty('--bg', '#e8e8ee');
        document.documentElement.style.setProperty('--text', '#232326');
        active_a.style.border = '1px solid #645d71';
        active_a.style.color = '#645d71';
        body_contrast = 1.25;
        document.body.style.filter = "hue-rotate("+rand+"deg) contrast("+body_contrast+")"
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.boxShadow = '0 50px 46px rgba(0, 0, 0, 0.08)';
        }
        darkMode = false;
    }
    else{
        document.documentElement.style.setProperty('--bg', '#161617');
        document.documentElement.style.setProperty('--text', '#bdbdc5');
        active_a.style.border = '1px solid #c8c4d0';
        active_a.style.color = '#c8c4d0';
        body_contrast = 1;
        document.body.style.filter = "hue-rotate("+rand+"deg) contrast("+body_contrast+")"
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.boxShadow = '0 50px 46px rgba(0, 0, 0, 0.18)';
        }
        darkMode = true;
    }
}