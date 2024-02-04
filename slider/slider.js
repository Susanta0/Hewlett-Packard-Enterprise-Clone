const allImage = [
  "https://theforage.wpengine.com/wp-content/uploads/2023/03/working-at-hewlett-packard-enterprise-1536x864.jpg",
  "https://static.nv.ua/shared/system/Article/posters/002/030/423/original/457bce9e32db55412e09d1bb86d046b8.jpeg",
  "https://www.hpe.com/content/dam/hpe/shared-publishing/images-norend/discover/2023/thumbnails/HPE_DiscLV23_GIT_SL5842.jpg",
  "https://www.hpe.com/content/dam/hpe/newsroom/houston-headquarters/image-norend/houston-campus.jpg",
];

let i = 0;
const sliderImg = document.createElement("img");
sliderImg.className = "sliderImg";
sliderImg.src = allImage[i];
sliderImg.alt = "images";
const root2 = document.querySelector("#sliderDiv");
root2.append(sliderImg);

const pre = document.createElement("button");
pre.textContent = "<";
pre.id = "pre";
pre.addEventListener("click", previous);

const next = document.createElement("button");
next.textContent = ">";
next.id = "next";
next.addEventListener("click", nextImage);

const buttonDiv = document.querySelector("#preNext");
buttonDiv.append(pre, next);

function previous() {
  i--;
  if (i < 0) {
    i = allImage.length - 1;
  }
  sliderImg.src = allImage[i];
}

function nextImage() {
  i++;
  if (i > allImage.length - 1) {
    i = 0;
  }
  sliderImg.src = allImage[i];
}
