const aboutSomeVideo = document.getElementById("aboutSomeVideo");

const photodiv = document.createElement("div");
photodiv.id = "photodiv";
const photo = document.createElement("img");
photo.src = "./image/group.png";
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
const aboutVideo1 = document.createElement("video");
aboutVideo1.id = "aboutVideo1";
aboutVideo1.textContent = "Watch the video";

aboutTextdiv.append(aboutTextBold, aboutTextParagraph, aboutVideo1);
aboutSomeVideo.append(photodiv, aboutTextdiv);
