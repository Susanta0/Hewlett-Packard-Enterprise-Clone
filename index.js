
// @import ('~lucide-static/font/Lucide.css');


// navbar
const header = document.getElementById("main");

const logoContainer = document.createElement("div");
logoContainer.id = "logoCon";
logoContainer.addEventListener("click",()=>{
    window.location="./index.html"
})

const logoBox = document.createElement("div");
logoBox.id = "logoBox";

const logoB = document.createElement("h1");
logoB.id = "logoB";
logoB.textContent = "Hewlett Packard";

const logoP = document.createElement("p");
logoP.id = "logoP";
logoP.textContent = "Enterprise";


// append all logo content inside the logoContainer.
logoContainer.append(logoBox, logoB, logoP);

// dropdown menu main content
const nav = document.createElement("nav");
nav.id = "navBar";

const homeLink = document.createElement("a");
homeLink.id = "home";
homeLink.textContent = "Home";

const hpeLink = document.createElement("a");
hpeLink.id = "HPE";
hpeLink.textContent = "HPE GreenLake";


const solutionsLink = document.createElement("a");
solutionsLink.id = "solutions";
solutionsLink.textContent = "Solutions";
let span1 = document.createElement("span")
span1.className ="fa-solid fa-angle-down"
solutionsLink.appendChild(span1)
// solutions dropdown menu
let soluDiv = document.createElement("div");
soluDiv.id = "soluContainer"

//* First
//! here three div inside of soluDiv
const div1 = document.createElement("div");
div1.className = "soluDropDownDiv1"
//* here is all content inside div1
const div1H4 = document.createElement("h4");
div1H4.id = "div1H4"
div1H4.textContent = "Your open and secure edge-to-cloud platform that powers data-first modernization"

const div1P = document.createElement("p");
div1P.id = "div1P"
div1P.textContent = "Learn about the HPE GreenLake edge-to-cloud platform"
const rightSideIcon = document.createElement("span")
rightSideIcon.className = "fa-solid fa-arrow-right"

// right arrow append di1P
div1P.appendChild(rightSideIcon)
// append all the content inside the div1
div1.append(div1H4, div1P)

//* Second 
const div2 = document.createElement("div");
div2.className = "soluDropDownDiv2"
//! Edge section
const edgeDiv = document.createElement("div")
edgeDiv.className="EdgeDiv"

const edgeName =document.createElement("p")
edgeName.className="edgeName"
edgeName.textContent="Edge"
const hr1 =document.createElement("hr")
hr1.className="hr1"
const edgeTitle = document.createElement("p")
edgeTitle.textContent="Connect your edge"
edgeTitle.className="edgeTitle"
const rightSideIcon2 = document.createElement("span")
rightSideIcon2.className = "fa-solid fa-arrow-right"
rightSideIcon2.id="rightSideIcon2"
edgeTitle.appendChild(rightSideIcon2)

const edgeDiscription=document.createElement("p")
edgeDiscription.className="edgeDiscription"
edgeDiscription.textContent="Control and harness data across edge to cloud."
edgeDiv.append(edgeName, hr1, edgeTitle, edgeDiscription)

//! Data section
const dataDiv = document.createElement("div")
dataDiv.className="dataDiv"

const dataName =document.createElement("p")
dataName.className="dataName"
dataName.textContent="Data"
const hr2 =document.createElement("hr")
hr2.className="hr2"
const dataTitle = document.createElement("p")
dataTitle.className="dataTitle"
dataTitle.textContent="Turn your data into intelligence"
const rightSideIcon3 = document.createElement("span")
rightSideIcon3.className = "fa-solid fa-arrow-right"
rightSideIcon3.id="rightSideIcon3"
dataTitle.appendChild(rightSideIcon3)

const dataDiscription=document.createElement("p")
dataDiscription.className="dataDiscription"
dataDiscription.textContent="A single source of truth from data to make smart decisions and recommendations to customers."
dataDiv.append(dataName, hr2, dataTitle, dataDiscription)

//! Ai section
const aiDiv = document.createElement("div")
aiDiv.className="aiDiv"

const aiName =document.createElement("p")
aiName.className="aiName"
aiName.textContent="AI"
const hr3 =document.createElement("hr")
hr3.className="hr3"
const aiTitle = document.createElement("p")
aiTitle.className="aiTitle"
aiTitle.textContent="Make AI work for you"
const rightSideIcon4 = document.createElement("span")
rightSideIcon4.className = "fa-solid fa-arrow-right"
rightSideIcon4.id="rightSideIcon4"
aiTitle.appendChild(rightSideIcon4)

const aiDiscription=document.createElement("p")
aiDiscription.className="aiDiscription"
aiDiscription.textContent="Create your AI advantage by unlocking the full potential of your data."
aiDiv.append(aiName, hr3, aiTitle, aiDiscription)


//! Cloud section
const cloudDiv = document.createElement("div")
cloudDiv.className="cloudDiv"

const cloudName =document.createElement("p")
cloudName.className="cloudName"
cloudName.textContent="Cloud"
const hr5 =document.createElement("hr")
hr5.className="hr5"
const cloudTitle = document.createElement("p")
cloudTitle.className="cloudTitle"
cloudTitle.textContent="Create your hybrid cloud"
const rightSideIcon5 = document.createElement("span")
rightSideIcon5.className = "fa-solid fa-arrow-right"
rightSideIcon5.id="rightSideIcon5"
cloudTitle.appendChild(rightSideIcon5)
const cloudDiscription=document.createElement("p")
cloudDiscription.className="cloudDiscription"
cloudDiscription.textContent="Hybrid cloud, just the way you need it."
cloudDiv.append(cloudName, hr5, cloudTitle, cloudDiscription)

//! Security section
const securityDiv = document.createElement("div")
securityDiv.className="securityDiv"

const securityName =document.createElement("p")
securityName.className="securityName"
securityName.textContent="Security"
const hr6 =document.createElement("hr")
hr6.className="hr6"
const securityTitle = document.createElement("p")
securityTitle.className="securityTitle"
securityTitle.textContent="Secure your data"
const rightSideIcon6 = document.createElement("span")
rightSideIcon6.className = "fa-solid fa-arrow-right"
rightSideIcon6.id="rightSideIcon6"
securityTitle.appendChild(rightSideIcon6)
const securityDiscription=document.createElement("p")
securityDiscription.className="securityDiscription"
securityDiscription.textContent="Only the rightlevel of security will do."
securityDiv.append(securityName, hr6, securityTitle, securityDiscription)


div2.append(edgeDiv, dataDiv, aiDiv, cloudDiv, securityDiv)

//? next work will start from here
const div3 = document.createElement("div");
div3.className = "soluDropDownDiv3"



// div1,div2,div3, has inside the soluDiv
soluDiv.append(div1, div2, div3)

// soluDiv have inside the solutionsKink 
solutionsLink.appendChild(soluDiv)


const productsLink = document.createElement("a");
productsLink.id = "products";
productsLink.textContent = "Products";
let span2 = document.createElement("span")
span2.className ="fa-solid fa-angle-down"
productsLink.appendChild(span2)


const servicesLink = document.createElement("a");
servicesLink.id = "services";
servicesLink.textContent = "Services";

const learnLink = document.createElement("a");
learnLink.id = "learn";
learnLink.textContent = "Learn";
let span3 = document.createElement("span")
span3.className ="fa-solid fa-angle-down"
learnLink.appendChild(span3)

const supportLink = document.createElement("a");
supportLink.id = "support";
supportLink.textContent = "Support";


const contactLink = document.createElement("a");
contactLink.id = "contact";
contactLink.textContent = "Contact";


// append all menu container inside the nav
nav.append(homeLink, hpeLink, solutionsLink, productsLink, servicesLink, learnLink, supportLink, contactLink);

// all icon nav bar
const iconDiv = document.createElement("div");
iconDiv.id = "iconContainer"

const search = document.createElement("i");
search.className = "fa-solid fa-magnifying-glass";


const bag = document.createElement("i");
bag.className = "fa-solid fa-bag-shopping";

const menu = document.createElement("i");
menu.className = "fa-solid fa-bars";

const global = document.createElement("i");
global.className = "fa-solid fa-globe";

const signInButton = document.createElement("button");
signInButton.id = "signInButton";
signInButton.textContent = "Sign In"
iconDiv.append(search, bag, menu, global, signInButton)
header.append(logoContainer, nav, iconDiv)