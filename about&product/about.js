const aboutSomeVideo = document.getElementById("aboutSomeVideo");

const photodiv = document.createElement("div");
photodiv.id = "photodiv";
const photo = document.createElement("img");
photo.src = "./about&product/image/group.png";
photo.alt = "group image";
photo.id = "photo";
photodiv.append(photo);

const aboutTextdiv = document.createElement("div");
aboutTextdiv.id = "aboutTextdiv";
const aboutTextBold = document.createElement("h2");
aboutTextBold.id = "aboutTextBold";
aboutTextBold.textContent = "We are HPE";
const aboutTextParagraph = document.createElement("p");
aboutTextParagraph.id = "aboutTextParagraph";
aboutTextParagraph.textContent =
  "Accelerate your business outcomes and thrive in our connected, data-driven world.  We think data first at the edge and in the cloud. HPE GreenLake brings the cloud to you.  Helping you create unique advantages with AI. Open up opportunities across your enterprise. Turn data into intelligence, into insight, into action with enhanced safety and security. Advancing the way you live and work.";
const videoContainer= document.createElement("div")
    videoContainer.id="videoContainer"
const aboutVideo1 = document.createElement("a");
aboutVideo1.id = "aboutVideo1";
aboutVideo1.textContent = "Watch the video";
const  aboutVideo1Icon= document.createElement("span");
aboutVideo1Icon.className = "fa-solid fa-arrow-right";
aboutVideo1Icon.id = "aboutVideo1Icon";
aboutVideo1.append(aboutVideo1Icon)

const aboutVideo2 = document.createElement("a");
aboutVideo2.id = "aboutVideo2";
aboutVideo2.textContent = "Discover HPE GreenLake";
const  aboutVideo2Icon= document.createElement("span");
aboutVideo2Icon.className = "fa-solid fa-arrow-right";
aboutVideo2Icon.id = "aboutVdeo2Icon";
aboutVideo2.append(aboutVideo2Icon)

videoContainer.append(aboutVideo1, aboutVideo2)
aboutTextdiv.append(aboutTextBold, aboutTextParagraph, videoContainer);

aboutSomeVideo.append(photodiv, aboutTextdiv);
