const elements = [
  {
    id: 1,
    type: "div",
    class: "a",
  },
  {
    id: 2,
    type: "div",
    class: "b",
  },
  {
    id: 3,
    type: "div",
    class: "c",
  },
  {
    id: 4,
    type: "div",
    class: "f",
  },
];

const paths = [
  {
    id: 1,
    type: "img",
    src: "../images/path-a.png",
    class: "path-img",
  },
  {
    id: 2,
    type: "img",
    src: "../images/path-b.png",
    class: "path-img",
  },
  {
    id: 3,
    type: "img",
    src: "../images/path-c.png",
    class: "path-img",
  },
  {
    id: 4,
    type: "img",
    src: "../images/path-f.png",
    class: "path-img",
  },
];

const container = document.querySelector(".container");
container.classList.add("container");

let previous;

const createBlocks = (elements) => {
  elements.forEach((element) => {
    const div = document.createElement(element.type);
    div.classList.add(element.class);
    
    div.addEventListener("click", () => {
      const path = document.getElementById(element.id);

      previous && previous.classList.add("hidden");

      path.classList.remove("hidden");
      
    previous = path;

    });
    container.append(div);
  });
};

const test = () => {};

const createPaths = (paths) => {
  paths.forEach((path) => {
    const routeImg = document.createElement(path.type);

    routeImg.id = path.id;
    routeImg.src = path.src;
    routeImg.classList.add("hidden");
    routeImg.classList.add(path.class);

    container.append(routeImg);
  });
};

createPaths(paths);
createBlocks(elements);
