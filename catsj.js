const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsContainer = document.querySelector("details-container");
const detailsTitle = document.querySelector(".details-title");
const mainElement = document.querySelector(".main-class");
const hideButtonElement = document.getElementById("hide-button");
const HIDDEN = "hidden";
const IS_POINT = "is-point";

function showDetails() {
mainElement.classList.remove(HIDDEN);
detailsContainer.classList.add(IS_POINT);
}
function hideDetails(){
    mainElement.classList.add(HIDDEN);
}
function setDetails (anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    showDetails();
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    const color = anchor.getAttribute("data-text-color");
}
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function () {
        console.log("event - click on", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
    })
}


