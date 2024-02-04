// @import ('~lucide-static/font/Lucide.css');

// navbar
const header = document.getElementById("main");

const logoContainer = document.createElement("div");
logoContainer.id = "logoCon";
logoContainer.addEventListener("click", () => {
  window.location = "./index.html";
});

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

// NOTE Solutions Dropdown
const solutionsLink = document.createElement("a");
solutionsLink.id = "solutions";
solutionsLink.textContent = "Solutions";
let span1 = document.createElement("span");
span1.className = "fa-solid fa-angle-down";
solutionsLink.appendChild(span1);
// solutions dropdown menu
let soluDiv = document.createElement("div");
soluDiv.id = "soluContainer";

//? Your open and secure edge-to-cloud platform that powers data-first modernization (section)..............
const div1 = document.createElement("div");
div1.className = "soluDropDownDiv1";
const div1H4 = document.createElement("h4");
div1H4.id = "div1H4";
div1H4.textContent =
  "Your open and secure edge-to-cloud platform that powers data-first modernization";

const div1P = document.createElement("p");
div1P.id = "div1P";
div1P.textContent = "Learn about the HPE GreenLake edge-to-cloud platform";
const rightSideIcon = document.createElement("span");
rightSideIcon.className = "fa-solid fa-arrow-right";

// right arrow append di1P
div1P.appendChild(rightSideIcon);
// append all the content inside the div1
div1.append(div1H4, div1P);

//? edge data ai cloud security (section)..................................................................
const div2 = document.createElement("div");
div2.className = "soluDropDownDiv2";
//! Edge section
const edgeDiv = document.createElement("div");
edgeDiv.className = "EdgeDiv";

const edgeName = document.createElement("p");
edgeName.className = "edgeName";
edgeName.textContent = "Edge";
const hr1 = document.createElement("hr");
hr1.className = "hr1";
const edgeTitle = document.createElement("p");
edgeTitle.textContent = "Connect your edge";
edgeTitle.className = "edgeTitle";
const rightSideIcon2 = document.createElement("span");
rightSideIcon2.className = "fa-solid fa-arrow-right";
rightSideIcon2.id = "rightSideIcon2";
edgeTitle.appendChild(rightSideIcon2);

const edgeDiscription = document.createElement("p");
edgeDiscription.className = "edgeDiscription";
edgeDiscription.textContent = "Control and harness data across edge to cloud.";
edgeDiv.append(edgeName, hr1, edgeTitle, edgeDiscription);

//! Data section
const dataDiv = document.createElement("div");
dataDiv.className = "dataDiv";

const dataName = document.createElement("p");
dataName.className = "dataName";
dataName.textContent = "Data";
const hr2 = document.createElement("hr");
hr2.className = "hr2";
const dataTitle = document.createElement("p");
dataTitle.className = "dataTitle";
dataTitle.textContent = "Turn your data into intelligence";
const rightSideIcon3 = document.createElement("span");
rightSideIcon3.className = "fa-solid fa-arrow-right";
rightSideIcon3.id = "rightSideIcon3";
dataTitle.appendChild(rightSideIcon3);

const dataDiscription = document.createElement("p");
dataDiscription.className = "dataDiscription";
dataDiscription.textContent =
  "A single source of truth from data to make smart decisions and recommendations to customers.";
dataDiv.append(dataName, hr2, dataTitle, dataDiscription);

//! Ai section
const aiDiv = document.createElement("div");
aiDiv.className = "aiDiv";

const aiName = document.createElement("p");
aiName.className = "aiName";
aiName.textContent = "AI";
const hr3 = document.createElement("hr");
hr3.className = "hr3";
const aiTitle = document.createElement("p");
aiTitle.className = "aiTitle";
aiTitle.textContent = "Make AI work for you";
const rightSideIcon4 = document.createElement("span");
rightSideIcon4.className = "fa-solid fa-arrow-right";
rightSideIcon4.id = "rightSideIcon4";
aiTitle.appendChild(rightSideIcon4);

const aiDiscription = document.createElement("p");
aiDiscription.className = "aiDiscription";
aiDiscription.textContent =
  "Create your AI advantage by unlocking the full potential of your data.";
aiDiv.append(aiName, hr3, aiTitle, aiDiscription);

//! Cloud section
const cloudDiv = document.createElement("div");
cloudDiv.className = "cloudDiv";

const cloudName = document.createElement("p");
cloudName.className = "cloudName";
cloudName.textContent = "Cloud";
const hr4 = document.createElement("hr");
hr4.className = "hr4";
const cloudTitle = document.createElement("p");
cloudTitle.className = "cloudTitle";
cloudTitle.textContent = "Create your hybrid cloud";
const rightSideIcon5 = document.createElement("span");
rightSideIcon5.className = "fa-solid fa-arrow-right";
rightSideIcon5.id = "rightSideIcon5";
cloudTitle.appendChild(rightSideIcon5);
const cloudDiscription = document.createElement("p");
cloudDiscription.className = "cloudDiscription";
cloudDiscription.textContent = "Hybrid cloud, just the way you need it.";
cloudDiv.append(cloudName, hr4, cloudTitle, cloudDiscription);

//! Security section
const securityDiv = document.createElement("div");
securityDiv.className = "securityDiv";

const securityName = document.createElement("p");
securityName.className = "securityName";
securityName.textContent = "Security";
const hr5 = document.createElement("hr");
hr5.className = "hr5";
const securityTitle = document.createElement("p");
securityTitle.className = "securityTitle";
securityTitle.textContent = "Secure your data";
const rightSideIcon6 = document.createElement("span");
rightSideIcon6.className = "fa-solid fa-arrow-right";
rightSideIcon6.id = "rightSideIcon6";
securityTitle.appendChild(rightSideIcon6);
const securityDiscription = document.createElement("p");
securityDiscription.className = "securityDiscription";
securityDiscription.textContent = "Only the rightlevel of security will do.";
securityDiv.append(securityName, hr5, securityTitle, securityDiscription);

div2.append(edgeDiv, dataDiv, aiDiv, cloudDiv, securityDiv);

//? All products and solutions (secion)........................................................
const div3 = document.createElement("div");
div3.className = "soluDropDownDiv3";
const allProduct = document.createElement("p");
allProduct.className = "allProduct";
allProduct.textContent = "All products and solutions";
const hr6 = document.createElement("hr");
hr6.className = "hr6";
const ul1 = document.createElement("ul");
ul1.className = "ul1";
const li1 = document.createElement("li");
li1.className = "li1";
const a1 = document.createElement("a");
a1.className = "a1";
a1.textContent = "Product types";
const rightSideIcon7 = document.createElement("span");
rightSideIcon7.className = "fa-solid fa-arrow-right";
rightSideIcon7.id = "rightSideIcon7";
a1.append(rightSideIcon7);
li1.append(a1);

const li2 = document.createElement("li");
li2.className = "li2";
const a2 = document.createElement("a");
a2.className = "a2";
a2.textContent = "Solutions by topic";
const rightSideIcon8 = document.createElement("span");
rightSideIcon8.className = "fa-solid fa-arrow-right";
rightSideIcon8.id = "rightSideIcon8";
a2.append(rightSideIcon8);
li2.append(a2);

const li3 = document.createElement("li");
li3.className = "li3";
const a3 = document.createElement("a");
a3.className = "a3";
a3.textContent = "Industries";
const rightSideIcon9 = document.createElement("span");
rightSideIcon9.className = "fa-solid fa-arrow-right";
rightSideIcon9.id = "rightSideIcon9";
a3.append(rightSideIcon9);
li3.append(a3);

const li4 = document.createElement("li");
li4.className = "li4";
const a4 = document.createElement("a");
a4.className = "a4";
a4.textContent = "See all";
const rightSideIcon10 = document.createElement("span");
rightSideIcon10.className = "fa-solid fa-arrow-right";
rightSideIcon10.id = "rightSideIcon10";
a4.append(rightSideIcon10);
li4.append(a4);

ul1.append(li1, li2, li3, li4);
div3.append(allProduct, hr6, ul1);

// div1,div2,div3, has inside the soluDiv
soluDiv.append(div1, div2, div3);

// soluDiv have inside the solutionsKink
solutionsLink.appendChild(soluDiv);

// ANCHOR Product Dropdown
const productsLink = document.createElement("a");
productsLink.id = "products";
productsLink.textContent = "Products";
let span2 = document.createElement("span");
span2.className = "fa-solid fa-angle-down";
productsLink.appendChild(span2);

const proDiv = document.createElement("div");
proDiv.className = "proContainer";

const proDropFistContainer1 = document.createElement("div");
proDropFistContainer1.className = "proDropFistContainer1";
const edge_cloud = document.createElement("div");
edge_cloud.className = "edge_cloud";
const edge_cloud_name = document.createElement("p");
edge_cloud_name.id = "edge_cloud_name";
edge_cloud_name.textContent = "Edge-to-cloud platform";
const edge_cloud_hr = document.createElement("hr");
edge_cloud_hr.id = "edge_cloud_hr";
const edge_cloud_title = document.createElement("p");
edge_cloud_title.id = "edge_cloud_title";
edge_cloud_title.textContent = "HPE GreenLake";
const edge_cloud_para = document.createElement("p");
edge_cloud_para.id = "edge_cloud_para";
edge_cloud_para.textContent =
  "Accelerate your data-first modernization with the HPE GreenLake edge-to-cloud platform, which brings the cloud to wherever your apps and data live.";
const edge_cloud_buttonDiv = document.createElement("div");
edge_cloud_buttonDiv.className = "edge_cloud_buttonDiv";
const edge_cloud_buttonDiv_text = document.createElement("p");
edge_cloud_buttonDiv_text.className = "edge_cloud_buttonDiv_text";
edge_cloud_buttonDiv_text.textContent = "Explore HPE GreenLake";
const edge_cloud_box = document.createElement("div");
edge_cloud_box.className = "edge_cloud_box";
edge_cloud_buttonDiv.append(edge_cloud_buttonDiv_text, edge_cloud_box);

edge_cloud.append(
  edge_cloud_name,
  edge_cloud_hr,
  edge_cloud_title,
  edge_cloud_para,
  edge_cloud_buttonDiv
);

//NOTE Products Types
const product_types = document.createElement("div");
product_types.className = "product_types";
const product_types_name = document.createElement("p");
product_types_name.className = "product_types_name";
product_types_name.textContent = "Product types";
const product_types_hr = document.createElement("hr");
product_types_hr.className = "product_types_hr";

const ul2 = document.createElement("ul");
ul2.className = "ul2";
const ul2_li1 = document.createElement("li");
ul2_li1.className = "ul2_li1";
const ul2_li1_a1 = document.createElement("a");
ul2_li1_a1.className = "ul2_li1_a1";
ul2_li1_a1.textContent = "Supercomputing";
ul2_li1.append(ul2_li1_a1);
const rightSideIcon11 = document.createElement("span");
rightSideIcon11.className = "fa-solid fa-arrow-right";
rightSideIcon11.id = "rightSideIcon11";
ul2_li1_a1.append(rightSideIcon11);

const ul2_li2 = document.createElement("li");
ul2_li2.className = "ul2_li2";
const ul2_li1_a2 = document.createElement("a");
ul2_li1_a2.className = "ul2_li1_a2";
ul2_li1_a2.textContent = "Compute";
ul2_li2.append(ul2_li1_a2);
const rightSideIcon12 = document.createElement("span");
rightSideIcon12.className = "fa-solid fa-arrow-right";
rightSideIcon12.id = "rightSideIcon12";
ul2_li1_a2.append(rightSideIcon12);

const ul2_li3 = document.createElement("li");
ul2_li3.className = "ul2_li3";
const ul2_li1_a3 = document.createElement("a");
ul2_li1_a3.className = "ul2_li1_a3";
ul2_li1_a3.textContent = "Storage";
ul2_li3.append(ul2_li1_a3);
const rightSideIcon13 = document.createElement("span");
rightSideIcon13.className = "fa-solid fa-arrow-right";
rightSideIcon13.id = "rightSideIcon13";
ul2_li1_a3.append(rightSideIcon13);

const ul2_li4 = document.createElement("li");
ul2_li4.className = "ul2_li4";
const ul2_li1_a4 = document.createElement("a");
ul2_li1_a4.className = "ul2_li1_a4";
ul2_li1_a4.textContent = "Networking";
ul2_li4.append(ul2_li1_a4);
const rightSideIcon14 = document.createElement("span");
rightSideIcon14.className = "fa-solid fa-arrow-right";
rightSideIcon14.id = "rightSideIcon14";
ul2_li1_a4.append(rightSideIcon14);

const ul2_li5 = document.createElement("li");
ul2_li5.className = "ul2_li5";
const ul2_li1_a5 = document.createElement("a");
ul2_li1_a5.className = "ul2_li1_a5";
ul2_li1_a5.textContent = "Software";
ul2_li5.append(ul2_li1_a5);
const rightSideIcon15 = document.createElement("span");
rightSideIcon15.className = "fa-solid fa-arrow-right";
rightSideIcon15.id = "rightSideIcon15";
ul2_li1_a5.append(rightSideIcon15);

const ul2_li6 = document.createElement("li");
ul2_li6.className = "ul2_li6";
const ul2_li1_a6 = document.createElement("a");
ul2_li1_a6.className = "ul2_li1_a6";
ul2_li1_a6.textContent = "Services";
ul2_li6.append(ul2_li1_a6);
const rightSideIcon16 = document.createElement("span");
rightSideIcon16.className = "fa-solid fa-arrow-right";
rightSideIcon16.id = "rightSideIcon16";
ul2_li1_a6.append(rightSideIcon16);

ul2.append(ul2_li1, ul2_li2, ul2_li3, ul2_li4, ul2_li5, ul2_li6);
product_types.append(product_types_name, product_types_hr, ul2);

// NOTE Products Brands
const product_brands = document.createElement("div");
product_brands.className = "product_brands";

const product_brands_name = document.createElement("p");
product_brands_name.className = "product_brands_name";
product_brands_name.textContent = "Product brands";
const product_brands_hr = document.createElement("hr");
product_brands_hr.className = "product_brands_hr";

const ul3 = document.createElement("ul");
ul3.className = "ul3";
const ul3_li1 = document.createElement("li");
ul3_li1.className = "ul3_li1";
const ul3_li1_a1 = document.createElement("a");
ul3_li1_a1.className = "ul3_li1_a1";
ul3_li1_a1.textContent = "HPE Cray Supercomputing";
ul3_li1.append(ul3_li1_a1);
const rightSideIcon17 = document.createElement("span");
rightSideIcon17.className = "fa-solid fa-arrow-right";
rightSideIcon17.id = "rightSideIcon17";
ul3_li1_a1.append(rightSideIcon17);

const ul3_li2 = document.createElement("li");
ul3_li2.className = "ul3_li2";
const ul3_li1_a2 = document.createElement("a");
ul3_li1_a2.className = "ul3_li1_a2";
ul3_li1_a2.textContent = "HPE ProLiant Compute";
ul3_li2.append(ul3_li1_a2);
const rightSideIcon18 = document.createElement("span");
rightSideIcon18.className = "fa-solid fa-arrow-right";
rightSideIcon18.id = "rightSideIcon18";
ul3_li1_a2.append(rightSideIcon18);

const ul3_li3 = document.createElement("li");
ul3_li3.className = "ul3_li3";
const ul3_li1_a3 = document.createElement("a");
ul3_li1_a3.className = "ul3_li1_a3";
ul3_li1_a3.textContent = "HPE Alletra Storage";
ul3_li3.append(ul3_li1_a3);
const rightSideIcon19 = document.createElement("span");
rightSideIcon19.className = "fa-solid fa-arrow-right";
rightSideIcon19.id = "rightSideIcon19";
ul3_li1_a3.append(rightSideIcon19);

const ul3_li4 = document.createElement("li");
ul3_li4.className = "ul3_li4";
const ul3_li1_a4 = document.createElement("a");
ul3_li1_a4.className = "ul3_li1_a4";
ul3_li1_a4.textContent = "HPE Aruba Networking";
ul3_li4.append(ul3_li1_a4);
const rightSideIcon20 = document.createElement("span");
rightSideIcon20.className = "fa-solid fa-arrow-right";
rightSideIcon20.id = "rightSideIcon20";
ul3_li1_a4.append(rightSideIcon20);

const ul3_li5 = document.createElement("li");
ul3_li5.className = "ul3_li5";
const ul3_li1_a5 = document.createElement("a");
ul3_li1_a5.className = "ul3_li1_a5";
ul3_li1_a5.textContent = "HPE Ezmeral Software";
ul3_li5.append(ul3_li1_a5);
const rightSideIcon21 = document.createElement("span");
rightSideIcon21.className = "fa-solid fa-arrow-right";
rightSideIcon21.id = "rightSideIcon21";
ul3_li1_a5.append(rightSideIcon21);

const ul3_li6 = document.createElement("li");
ul3_li6.className = "ul3_li6";
const ul3_li1_a6 = document.createElement("a");
ul3_li1_a6.className = "ul3_li1_a6";
ul3_li1_a6.textContent = "HPE Services";
ul3_li6.append(ul3_li1_a6);
const rightSideIcon22 = document.createElement("span");
rightSideIcon22.className = "fa-solid fa-arrow-right";
rightSideIcon22.id = "rightSideIcon22";
ul3_li1_a6.append(rightSideIcon22);

ul3.append(ul3_li1, ul3_li2, ul3_li3, ul3_li4, ul3_li5, ul3_li6);
product_brands.append(product_brands_name, product_brands_hr, ul3);

// NOTE Featured Products
const featured_products = document.createElement("div");
featured_products.className = "featured_products";

const featured_products_name = document.createElement("p");
featured_products_name.className = "featured_products_name";
featured_products_name.textContent = "Featured products";
const featured_products_hr = document.createElement("hr");
featured_products_hr.className = "featured_products_hr";

const ul4 = document.createElement("ul");
ul4.className = "ul4";
const ul4_li1 = document.createElement("li");
ul4_li1.className = "ul4_li1";
const ul4_li1_a1 = document.createElement("a");
ul4_li1_a1.className = "ul4_li1_a1";
ul4_li1_a1.textContent = "HPE GreenLake for Networking";
ul4_li1.append(ul4_li1_a1);
const rightSideIcon23 = document.createElement("span");
rightSideIcon23.className = "fa-solid fa-arrow-right";
rightSideIcon23.id = "rightSideIcon23";
ul4_li1_a1.append(rightSideIcon23);

const ul4_li2 = document.createElement("li");
ul4_li2.className = "ul4_li2";
const ul4_li1_a2 = document.createElement("a");
ul4_li1_a2.className = "ul4_li1_a2";
ul4_li1_a2.textContent = "HPE GreenLake for Block Storage";
ul4_li2.append(ul4_li1_a2);
const rightSideIcon24 = document.createElement("span");
rightSideIcon24.className = "fa-solid fa-arrow-right";
rightSideIcon24.id = "rightSideIcon24";
ul4_li1_a2.append(rightSideIcon24);

const ul4_li3 = document.createElement("li");
ul4_li3.className = "ul4_li3";
const ul4_li1_a3 = document.createElement("a");
ul4_li1_a3.className = "ul4_li1_a3";
ul4_li1_a3.textContent = "HPE GreenLake for Private Cloud Enterprise";
ul4_li3.append(ul4_li1_a3);
const rightSideIcon25 = document.createElement("span");
rightSideIcon25.className = "fa-solid fa-arrow-right";
rightSideIcon25.id = "rightSideIcon25";
ul4_li1_a3.append(rightSideIcon25);

const ul4_li4 = document.createElement("li");
ul4_li4.className = "ul4_li4";
const ul4_li1_a4 = document.createElement("a");
ul4_li1_a4.className = "ul4_li1_a4";
ul4_li1_a4.textContent = "HPE GreenLake for Compute Ops Management";
ul4_li4.append(ul4_li1_a4);
const rightSideIcon26 = document.createElement("span");
rightSideIcon26.className = "fa-solid fa-arrow-right";
rightSideIcon26.id = "rightSideIcon26";
ul4_li1_a4.append(rightSideIcon26);

const ul4_li5 = document.createElement("li");
ul4_li5.className = "ul4_li5";
const ul4_li1_a5 = document.createElement("a");
ul4_li1_a5.className = "ul4_li1_a5";
ul4_li1_a5.textContent = "HPE GreenLake for Disaster Recovery";
ul4_li5.append(ul4_li1_a5);
const rightSideIcon27 = document.createElement("span");
rightSideIcon27.className = "fa-solid fa-arrow-right";
rightSideIcon27.id = "rightSideIcon27";
ul4_li1_a5.append(rightSideIcon27);

const ul4_li6 = document.createElement("li");
ul4_li6.className = "ul4_li6";
const ul4_li1_a6 = document.createElement("a");
ul4_li1_a6.className = "ul4_li1_a6";
ul4_li1_a6.textContent = "HPE GreenLake for Backup and Recovery";
ul4_li6.append(ul4_li1_a6);
const rightSideIcon28 = document.createElement("span");
rightSideIcon28.className = "fa-solid fa-arrow-right";
rightSideIcon28.id = "rightSideIcon28";
ul4_li1_a6.append(rightSideIcon28);

ul4.append(ul4_li1, ul4_li2, ul4_li3, ul4_li4, ul4_li5, ul4_li6);
featured_products.append(featured_products_name, featured_products_hr, ul4);

proDropFistContainer1.append(
  edge_cloud,
  product_types,
  product_brands,
  featured_products
);

//NOTE All products and solutions (secion)........................................................
const proDropFistContainer2 = document.createElement("div");
proDropFistContainer2.className = "proDropFistContainer2";
const allProduct2 = document.createElement("p");
allProduct2.className = "allProduct2";
allProduct2.textContent = "All products and solutions";
const allProduct2_hr = document.createElement("hr");
allProduct2_hr.className = "allProduct2_hr";
const allProduct2_ul = document.createElement("ul");
allProduct2_ul.className = "allProduct2_ul";
const allProduct2_li1 = document.createElement("li");
allProduct2_li1.className = "allProduct2_li1";
const allProduct2_li1_a1 = document.createElement("a");
allProduct2_li1_a1.className = "allProduct2_li1_a1";
allProduct2_li1_a1.textContent = "Product types";
const rightSideIcon29 = document.createElement("span");
rightSideIcon29.className = "fa-solid fa-arrow-right";
rightSideIcon29.id = "rightSideIcon29";
allProduct2_li1_a1.append(rightSideIcon29);
allProduct2_li1.append(allProduct2_li1_a1);

const allProduct2_li2 = document.createElement("li");
allProduct2_li2.className = "allProduct2_li2";
const allProduct2_li1_a2 = document.createElement("a");
allProduct2_li1_a2.className = "allProduct2_li1_a2";
allProduct2_li1_a2.textContent = "Solutions by topic";
const rightSideIcon30 = document.createElement("span");
rightSideIcon30.className = "fa-solid fa-arrow-right";
rightSideIcon30.id = "rightSideIcon30";
allProduct2_li1_a2.append(rightSideIcon30);
allProduct2_li2.append(allProduct2_li1_a2);

const allProduct2_li3 = document.createElement("li");
allProduct2_li3.className = "allProduct2_li3";
const allProduct2_li1_a3 = document.createElement("a");
allProduct2_li1_a3.className = "allProduct2_li1_a3";
allProduct2_li1_a3.textContent = "Industries";
const rightSideIcon31 = document.createElement("span");
rightSideIcon31.className = "fa-solid fa-arrow-right";
rightSideIcon31.id = "rightSideIcon31";
allProduct2_li1_a3.append(rightSideIcon31);
allProduct2_li3.append(allProduct2_li1_a3);

const allProduct2_li4 = document.createElement("li");
allProduct2_li4.className = "allProduct2_li4";
const allProduct2_li1_a4 = document.createElement("a");
allProduct2_li1_a4.className = "allProduct2_li1_a4";
allProduct2_li1_a4.textContent = "See all";
const rightSideIcon32 = document.createElement("span");
rightSideIcon32.className = "fa-solid fa-arrow-right";
rightSideIcon32.id = "rightSideIcon32";
allProduct2_li1_a4.append(rightSideIcon32);
allProduct2_li4.append(allProduct2_li1_a4);

allProduct2_ul.append(
  allProduct2_li1,
  allProduct2_li2,
  allProduct2_li3,
  allProduct2_li4
);
proDropFistContainer2.append(allProduct2, allProduct2_hr, allProduct2_ul);

proDiv.append(proDropFistContainer1, proDropFistContainer2);
productsLink.appendChild(proDiv);

// NOTE Service Section.............................
const servicesLink = document.createElement("a");
servicesLink.id = "services";
servicesLink.textContent = "Services";
// NOTE Learn Section............................
const learnLink = document.createElement("a");
learnLink.id = "learn";
learnLink.textContent = "Learn";
let span3 = document.createElement("span");
span3.className = "fa-solid fa-angle-down";
learnLink.appendChild(span3);
// ANCHOR ....learn dropdown start
const learnDiv = document.createElement("div");
learnDiv.id = "learnDiv";

const aboutHpe = document.createElement("div");
aboutHpe.id = "aboutHpe";

const aboutHpeName = document.createElement("p");
aboutHpeName.id = "aboutHpeName";
aboutHpeName.textContent = "About HPE";
const aboutHpeHr = document.createElement("hr");
aboutHpeHr.id = "aboutHpeHr";
const aboutHpeUl = document.createElement("ul");

const aboutHpeli1 = document.createElement("li");
const aboutHpetext1 = document.createElement("a");
aboutHpetext1.textContent = "Learn about HPE";
const rightSideIcon33 = document.createElement("span");
rightSideIcon33.className = "fa-solid fa-arrow-right";
rightSideIcon33.id = "rightSideIcon33";
aboutHpetext1.append(rightSideIcon33);
aboutHpeli1.append(aboutHpetext1);

const aboutHpeli2 = document.createElement("li");
const aboutHpetext2 = document.createElement("a");
aboutHpetext2.textContent = "Corporate social responsibility";
const rightSideIcon34 = document.createElement("span");
rightSideIcon34.className = "fa-solid fa-arrow-right";
rightSideIcon34.id = "rightSideIcon34";
aboutHpetext2.append(rightSideIcon34);
aboutHpeli2.append(aboutHpetext2);

const aboutHpeli3 = document.createElement("li");
const aboutHpetext3 = document.createElement("a");
aboutHpetext3.textContent = "Careers";
const rightSideIcon35 = document.createElement("span");
rightSideIcon35.className = "fa-solid fa-arrow-right";
rightSideIcon35.id = "rightSideIcon35";
aboutHpetext3.append(rightSideIcon35);
aboutHpeli3.append(aboutHpetext3);

const aboutHpeli4 = document.createElement("li");
const aboutHpetext4 = document.createElement("a");
aboutHpetext4.textContent = "Events";
const rightSideIcon36 = document.createElement("span");
rightSideIcon36.className = "fa-solid fa-arrow-right";
rightSideIcon36.id = "rightSideIcon36";
aboutHpetext4.append(rightSideIcon36);
aboutHpeli4.append(aboutHpetext4);

aboutHpeUl.append(aboutHpeli1, aboutHpeli2, aboutHpeli3, aboutHpeli4);
aboutHpe.append(aboutHpeName, aboutHpeHr, aboutHpeUl);

const certification = document.createElement("div");
certification.id = "certification";

const certificationName = document.createElement("p");
certificationName.id = "certificationName";
certificationName.textContent = "Certification and training";

const certificationHr = document.createElement("hr");
certificationHr.id = "certificationHr";

const certificationUl = document.createElement("ul");

const certificationli1 = document.createElement("li");
const certificationtext1 = document.createElement("a");
certificationtext1.textContent = "HPE education services";
const rightSideIcon37 = document.createElement("span");
rightSideIcon37.className = "fa-solid fa-arrow-right";
rightSideIcon37.id = "rightSideIcon37";
certificationtext1.append(rightSideIcon37);
certificationli1.append(certificationtext1);

const certificationli2 = document.createElement("li");
const certificationtext2 = document.createElement("a");
certificationtext2.textContent = "FREE on-demand developer workshops";
const rightSideIcon38 = document.createElement("span");
rightSideIcon38.className = "fa-solid fa-arrow-right";
rightSideIcon38.id = "rightSideIcon38";
certificationtext2.append(rightSideIcon38);
certificationli2.append(certificationtext2);

const certificationli3 = document.createElement("li");
const certificationtext3 = document.createElement("a");
certificationtext3.textContent = "FREE on-demand technical courses";
const rightSideIcon39 = document.createElement("span");
rightSideIcon39.className = "fa-solid fa-arrow-right";
rightSideIcon39.id = "rightSideIcon39";
certificationtext3.append(rightSideIcon39);
certificationli3.append(certificationtext3);

certificationUl.append(certificationli1, certificationli2, certificationli3);
certification.append(certificationName, certificationHr, certificationUl);

const resources = document.createElement("div");
resources.id = "resources";

const resourcesName = document.createElement("p");
resourcesName.id = "resourcesName";
resourcesName.textContent = "Resources and documentation";

const resourcesHr = document.createElement("hr");
resourcesHr.id = "resourcesHr";

const resourcesUl = document.createElement("ul");

const resourcesli1 = document.createElement("li");
const resourcestext1 = document.createElement("a");
resourcestext1.textContent = "Customer success stories";
const rightSideIcon40 = document.createElement("span");
rightSideIcon40.className = "fa-solid fa-arrow-right";
rightSideIcon40.id = "rightSideIcon40";
resourcestext1.append(rightSideIcon40);
resourcesli1.append(resourcestext1);

const resourcesli2 = document.createElement("li");
const resourcestext2 = document.createElement("a");
resourcestext2.textContent = "Reference architectures";
const rightSideIcon41 = document.createElement("span");
rightSideIcon41.className = "fa-solid fa-arrow-right";
rightSideIcon41.id = "rightSideIcon41";
resourcestext2.append(rightSideIcon41);

resourcesli2.append(resourcestext2);

const resourcesli3 = document.createElement("li");
const resourcestext3 = document.createElement("a");
resourcestext3.textContent = "Quick specs";
const rightSideIcon42 = document.createElement("span");
rightSideIcon42.className = "fa-solid fa-arrow-right";
resourcestext3.append(rightSideIcon42);
rightSideIcon42.id = "rightSideIcon42";
resourcesli3.append(resourcestext3);

const resourcesli4 = document.createElement("li");
const resourcestext4 = document.createElement("a");
resourcestext4.textContent = "Webinars";
const rightSideIcon43 = document.createElement("span");
rightSideIcon43.className = "fa-solid fa-arrow-right";
rightSideIcon43.id = "rightSideIcon43";
resourcestext4.append(rightSideIcon43);
resourcesli4.append(resourcestext4);

const resourcesli5 = document.createElement("li");
const resourcestext5 = document.createElement("a");
resourcestext5.textContent = "See all";
const rightSideIcon44 = document.createElement("span");
rightSideIcon44.className = "fa-solid fa-arrow-right";
rightSideIcon44.id = "rightSideIcon44";
resourcestext5.append(rightSideIcon44);
resourcesli5.append(resourcestext5);

resourcesUl.append(
  resourcesli1,
  resourcesli2,
  resourcesli3,
  resourcesli4,
  resourcesli5
);
resources.append(resourcesName, resourcesHr, resourcesUl);

const getting = document.createElement("div");
getting.id = "getting";

const gettingName = document.createElement("p");
gettingName.id = "gettingName";
gettingName.textContent = "Getting started with HPE GreenLake";

const gettingHr = document.createElement("hr");
gettingHr.id = "gettingHr";

const gettingUl = document.createElement("ul");

const gettingli1 = document.createElement("li");
const gettingtext1 = document.createElement("a");
gettingtext1.textContent = "What is edge to cloud?";
const rightSideIcon45 = document.createElement("span");
rightSideIcon45.className = "fa-solid fa-arrow-right";
rightSideIcon45.id = "rightSideIcon45";
gettingtext1.append(rightSideIcon45);
gettingli1.append(gettingtext1);

const gettingli2 = document.createElement("li");
const gettingtext2 = document.createElement("a");
gettingtext2.textContent = "HPE GreenLake FAQ";
const rightSideIcon46 = document.createElement("span");
rightSideIcon46.className = "fa-solid fa-arrow-right";
rightSideIcon46.id = "rightSideIcon46";
gettingtext2.append(rightSideIcon46);
gettingli2.append(gettingtext2);

const gettingli3 = document.createElement("li");
const gettingtext3 = document.createElement("a");
gettingtext3.textContent = "Take a test drive";
const rightSideIcon47 = document.createElement("span");
rightSideIcon47.className = "fa-solid fa-arrow-right";
rightSideIcon47.id = "rightSideIcon47";
gettingtext3.append(rightSideIcon47);
gettingli3.append(gettingtext3);

const gettingli4 = document.createElement("li");
const gettingtext4 = document.createElement("a");
gettingtext4.textContent = "HPE GreenLake Central user guide";
const rightSideIcon48 = document.createElement("span");
rightSideIcon48.className = "fa-solid fa-arrow-right";
rightSideIcon48.id = "rightSideIcon48";
gettingtext4.append(rightSideIcon48);
gettingli4.append(gettingtext4);

gettingUl.append(gettingli1, gettingli2, gettingli3, gettingli4);
getting.append(gettingName, gettingHr, gettingUl);

learnDiv.append(aboutHpe, certification, resources, getting);
learnLink.appendChild(learnDiv);

// NOTE Support Section............................
const supportLink = document.createElement("a");
supportLink.id = "support";
supportLink.textContent = "Support";

// NOTE Contact Section............................
const contactLink = document.createElement("a");
contactLink.id = "contact";
contactLink.textContent = "Contact";

// append all menu container inside the nav
nav.append(
  homeLink,
  hpeLink,
  solutionsLink,
  productsLink,
  servicesLink,
  learnLink,
  supportLink,
  contactLink
);

// all icon nav bar
const iconDiv = document.createElement("div");
iconDiv.id = "iconContainer";

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
signInButton.textContent = "Sign In";
iconDiv.append(search, bag, menu, global, signInButton);
header.append(logoContainer, nav, iconDiv);







// slider js

