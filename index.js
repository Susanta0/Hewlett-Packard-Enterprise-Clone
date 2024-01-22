
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
edgeName.textContent="Edge"
const hr1 =document.createElement("hr")
const edgeTitle = document.createElement("p")
edgeTitle.textContent="Connect your edge"
const edgeDiscription=document.createElement("p")
edgeDiscription.textContent="Control and harness data across edge to cloud."
edgeDiv.append(edgeName, hr1, edgeTitle, edgeDiscription)

//! Ai section
const aiDiv = document.createElement("div")
aiDiv.className="aiDiv"

const aiName =document.createElement("p")
aiName.textContent="AI"
const hr2 =document.createElement("hr")
const aiTitle = document.createElement("p")
aiTitle.textContent="Make AI work for you"
const aiDiscription=document.createElement("p")
aiDiscription.textContent="Create your AI advantage by unlocking the full potential of your data."
aiDiv.append(aiName, hr2, aiTitle, aiDiscription)

//! Security section
const securityDiv = document.createElement("div")
securityDiv.className="securityDiv"

const securityName =document.createElement("p")
securityName.textContent="Security"
const hr3 =document.createElement("hr")
const securityTitle = document.createElement("p")
securityTitle.textContent="Secure your data"
const securityDiscription=document.createElement("p")
securityDiscription.textContent="Only the rightlevel of security will do."
securityDiv.append(securityName, hr3, securityTitle, securityDiscription)


div2.append(edgeDiv, aiDiv, securityDiv)
const div3 = document.createElement("div");
div3.className = "soluDropDownDiv3"

// const div4 = document.createElement("div");
// div4.className = "soluDropDownDiv4"

// div1,div2,div3,div4 has inside the soluDiv
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