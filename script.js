let backgroundClicked = false;

function toggleCandles() {
  const fires = document.querySelectorAll(".fire");
  const envelope = document.getElementById("envelope");
  const audio = document.getElementById("birthday-audio");

  fires.forEach((fire) => {
    fire.classList.toggle("active");
  });

  if (fires[0].classList.contains("active")) {
    envelope.style.display = "block";
    audio.play();
  } else {
    envelope.style.display = "none";
    audio.pause();
    audio.currentTime = 0;
    const letter = document.getElementById("letter");
    letter.style.display = "none";
  }
}

function toggleBackground() {
  const body = document.body;
  if (!backgroundClicked) {
    body.style.backgroundImage =
      "url('gliter.gif'), linear-gradient(219deg, #ffa69e, #faf3dd, #b8f2e6, #aed9e0, #98c9a3, #edeec9, #ffa8a9, #fbc2b5, #d88373, #93e1d8, #ddfff7, #aa4465)";
    body.style.backgroundSize = "cover, 2400% 2400%";
    backgroundClicked = true;
  } else {
    body.style.backgroundImage =
      "linear-gradient(219deg, #ffa69e, #faf3dd, #b8f2e6, #aed9e0, #98c9a3, #edeec9, #ffa8a9, #fbc2b5, #d88373, #93e1d8, #ddfff7, #aa4465)";
    body.style.backgroundSize = "2400% 2400%";
    backgroundClicked = false;
  }
}

function handleClick() {
  toggleCandles();
  toggleBackground();
}

function toggleLetter() {
  const letter = document.getElementById("letter");
  if (letter.style.display === "none") {
    letter.style.display = "block";
  } else {
    letter.style.display = "none";
  }
}

function closeLetter(event) {
  event.stopPropagation();
  const letter = document.getElementById("letter");
  letter.style.display = "none";
}
