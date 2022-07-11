let arr=document.querySelectorAll("button");

for(let i=0;i<arr.length;i++){
  arr[i].addEventListener("click",function(){

    let a=this.innerHTML;

    switch(a){
      case "w":
        let audio=new Audio("sounds/tom-1.mp3");
        audio.play();
       break;

       case "a":
        let audio1=new Audio("sounds/tom-2.mp3");
        audio1.play();
       break;

       case "s":
        let audio2=new Audio("sounds/tom-3.mp3");
        audio2.play();
       break;

       case "d":
        let audio3=new Audio("sounds/tom-4.mp3");
        audio3.play();
       break;

       case "j":
        let audio5=new Audio("sounds/snare.mp3");
        audio5.play();
       break;

       case "k":
        let audio6=new Audio("sounds/crash.mp3");
        audio6.play();
       break;

       case "l":
        let audio7=new Audio("sounds/kick-bass.mp3");
        audio7.play();
       break;
    }
  });
}

document.addEventListener("keydown",function(event){
  switch(event.key){
    case "w":
      let audio=new Audio("sounds/tom-1.mp3");
      audio.play();
     break;

     case "a":
      let audio1=new Audio("sounds/tom-2.mp3");
      audio1.play();
     break;

     case "s":
      let audio2=new Audio("sounds/tom-3.mp3");
      audio2.play();
     break;

     case "d":
      let audio3=new Audio("sounds/tom-4.mp3");
      audio3.play();
     break;

     case "j":
      let audio5=new Audio("sounds/snare.mp3");
      audio5.play();
     break;

     case "k":
      let audio6=new Audio("sounds/crash.mp3");
      audio6.play();
     break;

     case "l":
      let audio7=new Audio("sounds/kick-bass.mp3");
      audio7.play();
     break;
  }
});
