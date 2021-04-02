const interval = setInterval(() => {
  const header = document.querySelector("#side header");

  if (header) {
    clearInterval(interval);

    const button = document.createElement("button");
    button.id = "audio-speed-button";
    button.innerHTML = "1 X";

    button.addEventListener("click", () => {
      actualSpeed = button.innerText.split(" ", 1)[0];
      nextSpeed = parseFloat(actualSpeed) + 0.25;

      const audios = document.querySelectorAll("audio");

      if (nextSpeed < 3.0) {
        audios.forEach((element) => {
          element.playbackRate = nextSpeed;
        });
        button.innerHTML = nextSpeed + " X";
      } else {
        audios.forEach((element) => {
          element.playbackRate = 1;
        });
        button.innerHTML = 1 + " X";
      }
    });

    header.appendChild(button);

    document.addEventListener("click", () => {
      actualSpeed = parseFloat(button.innerText.split(" ", 1)[0]);
      const interval2 = setInterval(() => {
        const audios = document.querySelectorAll("audio");
        if (audios || interval2 == 2000) {
          clearInterval(interval2);
          audios.forEach((element) => {
            element.playbackRate = actualSpeed;
          }, 50);
        }
      });
    });
  }
}, 500);
