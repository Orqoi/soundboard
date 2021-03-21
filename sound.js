function playSound(event, i) {
	let song = new Audio(`./audio/sound${i}.mp3`);
  	song.play();
  	console.log(event.currentTarget);
  	let x = event.currentTarget
  	x.classList.add("grow");
  	song.onended = function(event){
  		console.log("ended");
  		x.setAttribute("class", "none");
  	}
}

const buttons = document.querySelectorAll("a");
for(let i = 0; i < buttons.length; i++){
	buttons[i].onclick = () => playSound(event, i + 1);
}
