const myObserver = new IntersectionObserver((elements) => {
  if (elements[0].intersectionRatio !== 0) {
    console.log("The element is in the view");
  } else {
    console.log("The element is out of the view");
  }
});

const myEl = document.querySelector("div");
myObserver.observe(myEl);
