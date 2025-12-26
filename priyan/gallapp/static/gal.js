let images = [
    { src: "pika.jpg",caption: "PIKACHU"},
    {src: "chari.jpeg",caption: "CHARIZARD"},
    {src: "psyd.jpg",caption: "PSYDUCK"},
    { src: "gren.jpg",caption: "GRENINJA"},
    {src: "bul.png",caption: "BULBASAUR"},
    {src: "arc.jpeg",caption: "ARCEUS"},
];

let Index = 0;
function showImage() {
    document.getElementById("gallImage").src = images[Index].src;
    document.getElementById("caption").innerText = images[Index].caption;
}

function nextImage() {
    Index++;
    if (Index >= images.length) {
        Index = 0;
    }
    showImage();
}

function prevImage() {
    Index--;
    if (Index < 0) {
        Index = images.length - 1;
    }
    showImage();
}
