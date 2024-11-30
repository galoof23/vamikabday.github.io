window.addEventListener('scroll', function() {
    const container1 = document.querySelector('.container');
    const scrollPosition = window.scrollY;  
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const opacity = 1 - (scrollPosition / maxHeight);  

    container1.style.opacity = opacity;
});

function addClass(){
    const element = document.getElementById("envelope");
    element.classList.remove("close");
    element.classList.add("open");
    const button = document.getElementById("button");
    button.style.display = 'none';
    const text = document.getElementById("entext");
    text.style.display = 'block';
}


function cakeVideo(){
    const element = document.getElementById("envelope");
    element.style.display = 'none';
    const cake = document.getElementById("cake");
    cake.style.display = 'flex';
    const cakeButton = document.getElementById("cakeButton");
    cakeButton.style.display = 'none';
    const video = cake.querySelector("video");
    video.autoplay = true; 
    video.loop = true;    
    video.play();
    const container2 = document.querySelector('.container2');
    container2.style.backgroundImage = "url('cake.jpg')";
    const img = document.getElementById("scrollE");
    img.style.display = 'flex';
}

function showGift(){
    const giftimg = document.getElementById("giftimg");
    giftimg.style.display = 'block';
    const giftText = document.getElementById("giftText");
    giftText.style.display = 'none';
    const button = document.getElementById("giftButton");
    button.style.display = 'block';
}

function openGift(){
    const giftimg = document.getElementById("giftimg");
    giftimg.style.display = 'none';
    const present = document.getElementById("present");
    present.style.display = 'block';
    const video = present.querySelector("video");
    video.autoplay = true;
    video.loop = true;
    video.play();
}