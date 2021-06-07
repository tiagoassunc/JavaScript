//// ASYNCHROUNOUS JAVASCRIPT: PROMISES, ASYNC/AWAIT, AND AJAX ////
'use strict';

/* Your tasks:
PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this time
using async/await (only the part where the promise is consumed, reuse the
'createImage' function from before)
2. Compare the two versions, think about the big differences, and see which one
you like more
3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab */

//// PART 1 ////
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');
const creatImage = function (imgPath) {
  // const imgPath = imgPath;
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      img.classList.add('images');
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(console.error(new Error('Failed to load')));
    });
  });
};

/* const loadNPause = async function () {
  try {
    // Load img 1
    let img = await creatImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load img 2
    img = await creatImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load img 3
    img = await creatImage('img/img-3.jpg');
    console.log('Image 3 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
loadNPause(); */

/* PART 2
1. Create an async function 'loadAll' that receives an array of image paths
'imgArr'
2. Use .map to loop over the array, to load all the images with the
'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array �
5. Add the 'parallel' class to all the images (it has some CSS styles)
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function */

//// PART 2 ////

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await creatImage(img));
    console.log(imgs);

    const imgEl = await Promise.all(imgs);
    console.log(imgEl);

    imgEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
console.log('async');
