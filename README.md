# Ex.07 Design of Interactive Image Gallery
## Date:26-12-2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
gal.html

<html>
<head>
    <title>pokemon Image Gallery</title>
    <link rel="stylesheet" href="gal.css">
</head>

    <header>
        <h1>Pokemon Image Gallery</h1>
    </header>
<body>


    <div class="gallery-container">
        <img id="gallImage" src="pika.jpg" alt="Gallery Image">
        <p id="caption">PIKACHU</p>

        <div class="buttons">
            <button onclick="prevImage()">Previous</button>
            <button onclick="nextImage()">Next</button>
        </div>
    </div>
    <footer>
        Done by Priyan M(25017302) 
    </footer>
    <script src="gal.js"></script>
</body>
</html>

gal.css

body {
    margin: 0;
    background-image: url(download.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
}

header {
    background-color:gold;
    color: black;
    padding: 15px;
    font-size: 25px;
}
.gallery-container {
    width: 350px;
    margin: 40px auto;
    background: gold;
    padding: 20px;
    border-radius: 12px;
    border: 7px solid brown;

}

.gallery-container img {
    width: 70%;
    height: 300px;
    object-fit: fit;
    border-radius: 10px;
    border: 5px solid green;
}
#caption {
    margin: 12px 0;
    font-weight: bold;      
}
.buttons {
    margin-top: 10px;
}
button {
    padding: 8px 20px;
    margin: 5px;
    border:none;
    background-color:cyan;
    color: black;
    border-radius: 30px;
    cursor: pointer;
}
button:hover {
    background-color: #09fc46;
}
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color:violet;
    color:black;
    padding: 10px;
    font-size: 14px;
}


gal.js

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


```
## OUTPUT:
![alt text](<Screenshot (73).png>)
![alt text](<Screenshot (74).png>)
![alt text](<Screenshot (75).png>)
![alt text](<Screenshot (76).png>)
![alt text](<Screenshot (77).png>)
![alt text](<Screenshot (78).png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
