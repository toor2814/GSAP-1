let heroH1 = document.querySelector("#section-1 h1")
let heroH1Text = heroH1.textContent

let splittedText = heroH1Text.split("")
let halfLength = splittedText.length/2

let clutter = ""

splittedText.forEach(function(elem,idx){
  if(idx>halfLength){
    clutter = clutter + `<span class="a" >${elem}</span>`
  }else{
    clutter = clutter + `<span class="b" >${elem}</span>`
  }
});

heroH1.innerHTML = clutter

// yahan tak ka code mene khud likha h ab time nahi h iss liye jaldi jaldi yahan sa code dekh raha hn but its not cheating man 



console.log(clutter)





let tl = gsap.timeline();

tl.from("nav h2", {
  scale: 0,
  duration: 1,
  // scrub:5,
  delay: 1,
  opacity: 0,
});

tl.from("#part-2 h4", {
  y: -70,
  duration: 0.7,
  stagger: 0.2,
});

tl.from(".a",{
  y:100,
  duration:1,
  delay:1,
  opacity:0,
  stagger:0.3,
})

tl.from(".b",{
  y:-100,
  duration:1,
  delay:1,
  opacity:0,
  stagger:-0.3,
})

// tl.from("#section-1 h1", {
//   y: 20,
//   opacity: 0,
//   scale: 0.5,
//   duration: 0.5,
// });

gsap.to("#section-2 h1", {
  transform: "translateX(-120%)",
  scrollTrigger: {
    trigger: "#section-2",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
gsap.from(".a",{
  y:100,
  duration:2,
  delay:1,
  opacity:0,
})

let initialPath = `M 10 100 Q 450 100 890 100`;
let finalPath = `M 10 100 Q 450 100 890 100`;

let string = document.querySelector("#section-3");

string.addEventListener("mousemove", function (dets) {
  initialPath = `M 10 80 Q ${dets.x} ${dets.y} 890 80`;
  gsap.to("svg path", {
    attr: { d: initialPath },
  });
});

string.addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.3,
    ease: "elastic.out(1,0.3)",
  });
});

window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".looping ", {
      x: "0%",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".looping img", {
      rotate: 360,
    });
  } else {
    gsap.to(".looping ", {
      x: "-100%",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".looping img", {
      rotate: 180,
    });
  }
});

//        markers:true,
// x:-1450,
// duration:5,

// gsap.to("#page2
// t ransform: "t " ,
// sc rot t Trigger:
// trigger: "#page2" ,
// scroller: "body",
// ma rkers: true,
// start: "top 0%",
// end: "top —150%" ,
// scrub:2,l
// pin: true
