function showimage(evt, link) {
    console.log("Show image!")
    let domElement = document.querySelector("#foodie");
    if (link) {
        domElement.innerHTML = "<img class='w-75' src='/images/boats/"+link+"' alt='food-image'>";
    } else {
        domElement.innerHTML = "";
    }
}