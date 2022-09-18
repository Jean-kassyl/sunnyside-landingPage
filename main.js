// working on the menu toggler

const menuToggler = document.getElementById("menuToggler");

const header = document.querySelector("header");


menuToggler.addEventListener("click", () => {
    header.classList.toggle("activated");
   
} );

// change image dynamically
const standOut = document.getElementById('stand-out');
const transform = document.getElementById('transform');
const cerise = document.getElementById('cerise');
const orange = document.getElementById('orange');



window.addEventListener('resize', () => {
    changeImage();
})

const gallery = document.querySelectorAll('.images-sec img');

const myGalleryMobile = ["./assets/images/mobile/image-gallery-milkbottles.jpg", "./assets/images/mobile/image-gallery-orange.jpg", "./assets/images/mobile/image-gallery-cone.jpg", "./assets/images/mobile/image-gallery-sugar-cubes.jpg"];

const myGalleryDesktop = ["./assets/images/desktop/image-gallery-milkbottles.jpg", "./assets/images/desktop/image-gallery-orange.jpg", "./assets/images/desktop/image-gallery-cone.jpg", "./assets/images/desktop/image-gallery-sugarcubes.jpg"];

function changeImage(){
    if(window.innerWidth >= 768){
        header.style.backgroundImage = "url('./assets/images/desktop/image-header.jpg')";
        header.classList.remove("activated");

        standOut.src = "./assets/images/desktop/image-stand-out.jpg";
        transform.src = "./assets/images/desktop/image-transform.jpg";
        cerise.src = "./assets/images/desktop/image-graphic-design.jpg";
        orange.src = "./assets/images/desktop/image-photography.jpg";

        gallery.forEach((image, index) => {
            image.src = myGalleryDesktop[index];
        })
    }else {
        header.style.backgroundImage = "url('./assets/images/mobile/image-header.jpg')";

        standOut.src = "./assets/images/mobile/image-stand-out.jpg";
        transform.src = "./assets/images/mobile/image-transform.jpg";
        cerise.src = "./assets/images/mobile/image-graphic-design.jpg";
        orange.src = "./assets/images/mobile/image-photography.jpg";

        gallery.forEach((image, index) => {
            image.src = myGalleryMobile[index];
        })
    }
}
changeImage();

// hover effect on the socials icons

const socials = document.querySelectorAll(".socials img");


const whiteSocials = ["./assets/images/facebook.svg", "./assets/images/instagram.svg", "./assets/images/twitter.svg", "./assets/images/pinterest.svg"];

const greenSocials = ["./assets/images/icon-facebook.svg", "./assets/images/icon-instagram.svg", "./assets/images/icon-twitter.svg", "./assets/images/icon-pinterest.svg"];

socials.forEach((icon, index) => {
    icon.addEventListener("mouseenter", () => {
        icon.src = whiteSocials[index];
    });
    icon.addEventListener("mouseout", () => {
        icon.src = greenSocials[index]; 
    })
})