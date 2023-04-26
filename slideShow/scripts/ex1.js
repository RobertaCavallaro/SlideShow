/*
simple slide show
1. store all teh images
2. assign class of active to an image
3. keep track of which image is currectly displayed (.active)
4. keep active class for specified time
5. remove/add the active class to the next image
6. continually loop
*/

// const images = document.querySelectorAll('.slideshow img');
// let currentIndex=0;

// function showImage (index) {
//   images[currentIndex].classList.remove('active');
//   images[index].classList.add('active');
//   currentIndex= index;
// }

// setInterval(() =>{
// let nextIndex=currentIndex+1;
// if (nextIndex >= images.length) {
//   nextIndex= 0;
// }
// showImage(nextIndex);
// },3000);



// 2nd METHOD
const images = document.querySelectorAll('.slideshow img');
let currentIndex=0;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[currentIndex].style.opacity=0;
  images[index].classList.add('active');
  images[index].style.opacity=1;
  currentIndex=index;
}

images.forEach((image, index)=>{
  image.style.opacity = 0;
  image.addEventListener('load', () => {
    if (index === 0) {
      image.classList.add('active');
      image.style.opacity = 1;
    }
  })
})

setInterval(() => {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= images.length){
    nextIndex=0;
  }
  showImage(nextIndex)
},3000);