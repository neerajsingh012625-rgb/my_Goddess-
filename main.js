const audio = document.getElementById("bgm");
const overlay = document.getElementById("startOverlay");
const video = document.querySelector("video");

overlay.addEventListener("click", () => {
  audio.play();
  overlay.style.display = "none";
});

const tl = gsap.timeline();

tl.to(".stage1",{opacity:1,duration:2})
  .to(".stage1",{opacity:0,duration:1,delay:1})

  .to(".stage2",{opacity:1,duration:2})
  .to(".stage2",{opacity:0,duration:1,delay:1})

  .to(".stage3",{opacity:1,duration:2})
  .to(".stage3",{opacity:0,duration:1,delay:1})

  .to(".stage4",{opacity:1,duration:2})

  // PHOTO 1
  .to(".m1",{opacity:1,duration:2},"+=1")
  .to(".m1",{opacity:0,duration:2,delay:1})

  // PHOTO 2
  .to(".m2",{opacity:1,duration:2})
  .to(".m2",{opacity:0,duration:2,delay:1})

  // PHOTO 3
  .to(".m3",{opacity:1,duration:2})
  .to(".m3",{opacity:0,duration:2,delay:1})

  // VIDEO
  .to(".m4",{opacity:1,duration:2})
  .call(()=>{
    video.currentTime = 0;
    video.play();
  });
