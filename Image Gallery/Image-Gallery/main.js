const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgarr = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const altarr = ['1','2','3','4','5'];
/* Looping through images */
for(let i=0;i<5;i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', imgarr[i]);
        newImage.setAttribute('alt', altarr[i]);
        thumbBar.appendChild(newImage);
}
thumbBar.addEventListener("click", (event) =>{
    const source = event.target.getAttribute('src');
    displayedImage.setAttribute('src', source);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () =>{
    const source2 = displayedImage.getAttribute('src');
    const state = btn.getAttribute('class');
    const overlayImg = document.createElement('img');
    if(state === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = "lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class', 'dark');
        btn.tabIndex = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});