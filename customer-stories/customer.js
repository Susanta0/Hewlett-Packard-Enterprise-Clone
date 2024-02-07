// const customerStoriesContainer = document.getElementById(
//   "customerStoriesContainer"
// );
// const customerStoriesText = document.createElement("p");
// customerStoriesText.id = "customerStoriesText";
// customerStoriesText.textContent = "Customer Stories";
// const customerCardContainer = document.createElement("div");
// customerCardContainer.id = "customerCardContainer";
// const allCard = [
//   [
//   { imageSrc: "./customer-stories/stories-images/image-1.png", heading1:"The Race to innovation", headingDetails:"How the Mercedes-AMG PETRONAS Formula One Team uses data to open opportunity from the factory to trackside.", videoLink1:"Watch the video"},
//   { imageSrc: "./customer-stories/stories-images/image-2.png", heading1:"Carnegie Clean Energy", headingDetails:"Carnegie Clean Energy is on a mission to capture energy from ocean waves, and power thr world with a renewable source.", videoLink1:"Watch the video"},
//   { imageSrc: "./customer-stories/stories-images/image-3.png", heading1:"CGIAR", headingDetails:"From crops, to weather and satellites -- CGIAR is capturing inteligence at the edge, sharing it back with small farmers that help feed the world.", videoLink1:"Watch the video"},
//   { imageSrc: "./customer-stories/stories-images/image-4.png", heading1:"To dare is to do", headingDetails:"Tottenham Hotspur levels-up the fan experience with a digital-first, state-of-the-art stadium.", videoLink1:"Watch the video"},
//   { imageSrc: "./customer-stories/stories-images/image-5.png", heading1:"German Center for Neurodegenerative Diseases (DZNE)", headingDetails:"There's progress on a cure for Alzheimer's disease with new ways to gain intelligence from data.", videoLink1:"Watch the video"},
//   { imageSrc: "./customer-stories/stories-images/image-6.png", heading1:"Zenseact", headingDetails:"Data drives autonomous vehicles towards zero collisions.", videoLink1:"Watch the video"},
//   { imageSrc: "./customer-stories/stories-images/image-7.png", heading1:"Walt Disney World", headingDetails:"An immersive, connected experience awaits at Star Wars Galaxy's Edge in Walt Disney World.", videoLink1:"Learn more"},
//   { imageSrc: "./customer-stories/stories-images/image-8.png", heading1:"Golden State Warriors", headingDetails:"The Golden State Warriors are winners in basketball and tech.", videoLink1:"Learn more"},],
//   [{ imageSrc: "./customer-stories/stories-images/image-9.png", heading1:"2023 Ryder Cup", headingDetails:"How the premiere biennial golf competition created a smart city and intelligent environment, enhancing the overall fan experience.", videoLink1:"Watch the video"},
//   { imageSrc: "./customer-stories/stories-images/image-10.png", heading1:"Oak Ridge National Laboratory", headingDetails:"ORNL's Frontier supercomputer will transform science, and help change the world.", videoLink1:"Watch the video"},]
// ];
// allCard.forEach((content) => {
//     const cardElement = document.createElement("div");
//     cardElement.className="cardElement"
//     const cardElement2 = document.createElement("div");
//     cardElement2.className="cardElement2"

//     const cardhover = document.createElement("div");
//     cardhover.className="cardhover"
//     cardElement.append(cardElement2,cardhover)

//     // image tag
//     const imageElement = document.createElement("img");
//     imageElement.className="imageElement"
//     imageElement.src = content.imageSrc;
//     cardElement2.appendChild(imageElement);

//     // text
//     const textA=document.createElement("a")
//     textA.className="textA"
//     cardhover.append(textA)

//     const text1=document.createElement("h2")
//     text1.textContent=content.heading1
//     text1.className="text1"

//     const text2=document.createElement("p")
//     text2.textContent=content.headingDetails
//     text2.className="text2"

//     const videoLink=document.createElement("button")
//     videoLink.textContent=content.videoLink1
//     videoLink.className="videoLink1"

//     const videoLinkEIcon = document.createElement("span");
//     videoLinkEIcon.className = "fa-solid fa-arrow-right";
//     videoLinkEIcon.id = "videoLinkEIcon";
//     videoLink.append(videoLinkEIcon)

//     textA.append(text1, text2, videoLink)

//     customerCardContainer.append(cardElement);
// });

// const allCard2= []

// customerStoriesContainer.append(customerStoriesText, customerCardContainer);

const customerStoriesContainer = document.getElementById(
  "customerStoriesContainer"
);
const customerStoriesText = document.createElement("p");
customerStoriesText.id = "customerStoriesText";
customerStoriesText.textContent = "Customer Stories";
const customerCardContainer = document.createElement("div");
customerCardContainer.id = "customerCardContainer";
const allCard = [
  [
    {
      imageSrc: "./customer-stories/stories-images/image-1.png",
      heading1: "The Race to innovation",
      headingDetails:
        "How the Mercedes-AMG PETRONAS Formula One Team uses data to open opportunity from the factory to trackside.",
      videoLink1: "Watch the video",
    },
    {
      imageSrc: "./customer-stories/stories-images/image-2.png",
      heading1: "Carnegie Clean Energy",
      headingDetails:
        "Carnegie Clean Energy is on a mission to capture energy from ocean waves, and power thr world with a renewable source.",
      videoLink1: "Watch the video",
    },
    {
      imageSrc: "./customer-stories/stories-images/image-3.png",
      heading1: "CGIAR",
      headingDetails:
        "From crops, to weather and satellites -- CGIAR is capturing inteligence at the edge, sharing it back with small farmers that help feed the world.",
      videoLink1: "Watch the video",
    },
    {
      imageSrc: "./customer-stories/stories-images/image-4.png",
      heading1: "To dare is to do",
      headingDetails:
        "Tottenham Hotspur levels-up the fan experience with a digital-first, state-of-the-art stadium.",
      videoLink1: "Watch the video",
    },
    {
      imageSrc: "./customer-stories/stories-images/image-5.png",
      heading1: "German Center for Neurodegenerative Diseases (DZNE)",
      headingDetails:
        "There's progress on a cure for Alzheimer's disease with new ways to gain intelligence from data.",
      videoLink1: "Watch the video",
    },
    {
      imageSrc: "./customer-stories/stories-images/image-6.png",
      heading1: "Zenseact",
      headingDetails:
        "Data drives autonomous vehicles towards zero collisions.",
      videoLink1: "Watch the video",
    },
    {
      imageSrc: "./customer-stories/stories-images/image-7.png",
      heading1: "Walt Disney World",
      headingDetails:
        "An immersive, connected experience awaits at Star Wars Galaxy's Edge in Walt Disney World.",
      videoLink1: "Learn more",
    },
    {
      imageSrc: "./customer-stories/stories-images/image-8.png",
      heading1: "Golden State Warriors",
      headingDetails:
        "The Golden State Warriors are winners in basketball and tech.",
      videoLink1: "Learn more",
    },
  ],
  [
    {
      imageSrc: "./customer-stories/stories-images/image-9.png",
      heading1: "2023 Ryder Cup",
      headingDetails:
        "How the premiere biennial golf competition created a smart city and intelligent environment, enhancing the overall fan experience.",
      videoLink1: "Watch the video",
    },
    {
      imageSrc: "./customer-stories/stories-images/image-10.png",
      heading1: "Oak Ridge National Laboratory",
      headingDetails:
        "ORNL's Frontier supercomputer will transform science, and help change the world.",
      videoLink1: "Watch the video",
    },
  ],
];

for(let i=0 ; i<allCard.length;i++){
  allCard[i].forEach((content, index) => {
    const cardElement = document.createElement("div");
    cardElement.className = "cardElement";
    const cardElement2 = document.createElement("div");
    cardElement2.className = "cardElement2";
  
    const cardhover = document.createElement("div");
    cardhover.className = "cardhover";
    cardElement.append(cardElement2, cardhover);
  
    // image tag
    const imageElement = document.createElement("img");
    imageElement.className = "imageElement";
    imageElement.src = content.imageSrc;
    console.log(content);
    cardElement2.appendChild(imageElement);
  
    // text
    const textA = document.createElement("a");
    textA.className = "textA";
    cardhover.append(textA);
  
    const text1 = document.createElement("h2");
    text1.textContent = content.heading1;
    text1.className = "text1";
  
    const text2 = document.createElement("p");
    text2.textContent = content.headingDetails;
    text2.className = "text2";
  
    const videoLink = document.createElement("button");
    videoLink.textContent = content.videoLink1;
    videoLink.className = "videoLink1";
  
    const videoLinkEIcon = document.createElement("span");
    videoLinkEIcon.className = "fa-solid fa-arrow-right";
    videoLinkEIcon.id = "videoLinkEIcon";
    videoLink.append(videoLinkEIcon);
  
    textA.append(text1, text2, videoLink);
  
    if (index < 8) {
      customerCardContainer.append(cardElement);
    } else {
      const customerCardContainer2 = document.createElement("div");
      customerCardContainer2.id = "customerCardContainer2";
      customerCardContainer2.append(cardElement);
      customerStoriesContainer.append(
        customerStoriesText,
        customerCardContainer,
        customerCardContainer2
      );
    }
  });
}

