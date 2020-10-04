const count = 30;
const apiKEY = "_ZqEyBWHDatSK0_8ktDmsJ31U_sK7A5wDutSCWI5Z3A";

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages =0;
let photosArray = [];

function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded=== totalImages){
        ready = true;
        loader.hidden= true;
        
    }

}


function displayPhotos(){
    imagesLoaded =0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
    
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');

    const head = document.createElement('h3');
    

    

    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);

    img.addEventListener('load', imageLoaded);

    var t = document.createTextNode(photo.alt_description) || "Beautiful";

    head.appendChild(t);
    imageContainer.appendChild(head);
    // console.log(t);
    var p = document.createElement('p');
    p.innerHTML = "Likes : " + photo.likes ;
    imageContainer.appendChild(p);

    item.appendChild(img);
    imageContainer.appendChild(item);

   

    // console.log(photo.likes);

    });

}


const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}&count=${count}`;

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();

        displayPhotos();
        // console.log(photosArray);
    }
    catch(e){
        console.log(e);
    }

    // }catch {
    //     console.log("WTF ERROR!!")
    // }
}

window.addEventListener('scroll', ()=> {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();
    }
})

getPhotos();