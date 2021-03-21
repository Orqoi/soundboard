function playSound(event, audio) {
  audio.play();
  console.log(event.currentTarget);
  let x = event.currentTarget
  x.classList.add("grow");
  audio.onended = function(event){
  	console.log("ended");
  	x.setAttribute("class", "none");
  }
}

const audios = [];
for(let i = 1; i <= 45; i++){
	let song = new Audio(`./audio/sound${i}.mp3`);
	audios.push(song);
}
const buttons = document.querySelectorAll("a");
for(let i = 0; i < buttons.length; i++){
	buttons[i].onclick = () => playSound(event, audios[i]);
}