const allProductColorfullContainer = document.getElementById(
  "allProductColorfullContainer"
);
const allProductStrongText = document.createElement("h1");
allProductStrongText.id = "allProductStrongText";
allProductStrongText.textContent =
  "Explore the ways HPE can help you open up opportunities across edge to cloud";
const allProductColorfullMainContainer = document.createElement("div");
allProductColorfullMainContainer.id = "allProductColorfullMainContainer";

// NOTE Edge content
const allProductColorfullContainer1 = document.createElement("div");
allProductColorfullContainer1.id = "allProductColorfullContainer1";
const Container1Text = document.createElement("a");
Container1Text.id = "Container1Text";
Container1Text.href = "";
Container1Text.textContent = "Edge";
const span01 = document.createElement("span");
span01.id = "span01";
const boldText1 = document.createElement("h2");
boldText1.id = "boldText1";
boldText1.textContent = "Connect your edge";
const thinkText1 = document.createElement("p");
thinkText1.id = "thinkText1";
thinkText1.textContent = "Control and harness data across edge to cloud.";

span01.append(boldText1, thinkText1);
Container1Text.append(span01);
allProductColorfullContainer1.append(Container1Text);
// NOTE Data content
const allProductColorfullContainer2 = document.createElement("div");
allProductColorfullContainer2.id = "allProductColorfullContainer2";
const Container2Text = document.createElement("a");
Container2Text.id = "Container2Text";
Container2Text.href = "";
Container2Text.textContent = "DATA";
const span02 = document.createElement("span");
span02.id = "span02";
const boldText2 = document.createElement("h2");
boldText2.id = "boldText2";
boldText2.textContent = "Turn your data into intelligence";
const thinkText2 = document.createElement("p");
thinkText2.id = "thinkText2";
thinkText2.textContent =
  "A single source of truth from data to make smart decisions and recommendations to customers.";
span02.append(boldText2, thinkText2);
Container2Text.append(span02);
allProductColorfullContainer2.append(Container2Text);
// NOTE AI content
const allProductColorfullContainer3 = document.createElement("div");
allProductColorfullContainer3.id = "allProductColorfullContainer3";
const Container3Text = document.createElement("a");
Container3Text.id = "Container3Text";
Container3Text.href = "";
Container3Text.textContent = "AI";
const span03 = document.createElement("span");
span03.id = "span03";
const boldText3 = document.createElement("h2");
boldText3.id = "boldText3";
boldText3.textContent = "Make AI work for you";
const thinkText3 = document.createElement("p");
thinkText3.id = "thinkText3";
thinkText3.textContent =
  "Create your AI advantage by unlocking the full potential of your data.";

span03.append(boldText3, thinkText3);
Container3Text.append(span03);
allProductColorfullContainer3.append(Container3Text);

// NOTE Cloud content
const allProductColorfullContainer4 = document.createElement("div");
allProductColorfullContainer4.id = "allProductColorfullContainer4";
const Container4Text = document.createElement("a");
Container4Text.id = "Container4Text";
Container4Text.href = "";
Container4Text.textContent = "cloud";
const span04 = document.createElement("span");
span04.id = "span04";
const boldText4 = document.createElement("h2");
boldText4.id = "boldText4";
boldText4.textContent = "Create your hybrid cloud";
const thinkText4 = document.createElement("p");
thinkText4.id = "thinkText4";
thinkText4.textContent = "Hybrid cloud, just the way you need it.";

span04.append(boldText4, thinkText4);
Container4Text.append(span04);
allProductColorfullContainer4.append(Container4Text);

// NOTE Security content
const allProductColorfullContainer5 = document.createElement("div");
allProductColorfullContainer5.id = "allProductColorfullContainer5";
const Container5Text = document.createElement("a");
Container5Text.id = "Container5Text";
Container5Text.href = "";
Container5Text.textContent = "Security";
const span05 = document.createElement("span");
span05.id = "span05";
const boldText5 = document.createElement("h2");
boldText5.id = "boldText5";
boldText5.textContent = "Secure your data";
const thinkText5 = document.createElement("p");
thinkText5.id = "thinkText5";
thinkText5.textContent = "Only the right level of security will do.";

span05.append(boldText5, thinkText5);
Container5Text.append(span05);
allProductColorfullContainer5.append(Container5Text);
// NOTE Learn about more
const learnAboutHPEContainer = document.createElement("div");
learnAboutHPEContainer.id = "learnAboutHPEContainer";
const learnAboutHPE = document.createElement("a");
learnAboutHPE.id = "learnAboutHPE";
learnAboutHPE.href = "";
learnAboutHPE.textContent =
  "Learn about the HPE GreenLake edge-to-cloud platform";
const learnAboutHPEIcon = document.createElement("span");
learnAboutHPEIcon.className = "fa-solid fa-arrow-right";
learnAboutHPEIcon.id = "learnAboutHPEIcon";
learnAboutHPEContainer.append(learnAboutHPE);
learnAboutHPE.append(learnAboutHPEIcon);

allProductColorfullMainContainer.append(
  allProductColorfullContainer1,
  allProductColorfullContainer2,
  allProductColorfullContainer3,
  allProductColorfullContainer4,
  allProductColorfullContainer5
);

allProductColorfullContainer.append(
  allProductStrongText,
  allProductColorfullMainContainer,
  learnAboutHPEContainer
);
