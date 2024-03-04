const mapRange = (inputLower, inputUpper, outputLower, outputUpper, value) => {
  const INPUT_RANGE = inputUpper - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;
  return (
    outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  );
};

new Carousel(document.getElementById("myCarousel"), {
  Dots: false,
  slidesPerPage: 1,
  friction: 0.08,
  on: {
    "refresh Panzoom.beforeTransform": (carousel) => {
      carousel.slides.map((slide) => {
        let slide_progress = carousel.getProgress(slide.index, true);
        slide_progress = mapRange(-1, 1, 1 / 6, -(1 / 6), slide_progress);

        slide.el.style.setProperty("--progress", `${slide_progress}`);
      });
    },
  },
});
