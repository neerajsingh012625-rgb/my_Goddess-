const audio=document.getElementById("bgm");
const overlay=document.getElementById("startOverlay");
overlay.onclick=()=>{audio.play();overlay.style.display="none"};

const tl=gsap.timeline();
tl.to(".stage1",{opacity:1,duration:2}).to(".stage1",{opacity:0,duration:1,delay:1})
  .to(".stage2",{opacity:1,duration:2}).to(".stage2",{opacity:0,duration:1,delay:1})
  .to(".stage3",{opacity:1,duration:2}).to(".stage3",{opacity:0,duration:1,delay:1})
  .to(".stage4",{opacity:1,duration:2})
  .to(".media img:nth-child(1)",{opacity:1,duration:1},"+=1")
  .to(".media img:nth-child(2)",{opacity:1,duration:1})
  .to(".media img:nth-child(3)",{opacity:1,duration:1})
  .call(()=>{document.querySelector("video").play()});
