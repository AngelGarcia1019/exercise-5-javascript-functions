window.addEventListener("load", function () {
  const orderColorImages = ["red", "yellow", "green"];
  const componentSemaforo = document.getElementById("semaforo-image-id");
  let indexColor = 0;

  function getPathImage(nameImage) {
    return `assets/${nameImage}.png`;
  }

  function isReplay(index) {
    return index >= orderColorImages.length;
  }

  function simulation() {
    if (isReplay(indexColor)) indexColor = 0;
    let nameColor = orderColorImages[indexColor];
    componentSemaforo.setAttribute("src", getPathImage(nameColor));
    indexColor++;
  }

  setInterval(simulation, 2000);
});
