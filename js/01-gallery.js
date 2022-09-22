import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");
galleryBox.addEventListener("click", showImage);

galleryItemsCreate(galleryItems);

function galleryItemsCreate(array) {
  const imagesPrewievTable = array
    .map((image) => {
      return `<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>`;
    })
    .join("");
  galleryBox.innerHTML = imagesPrewievTable;
}

function showImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const bigImg = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
`
  );

  bigImg.show();

  galleryBox.addEventListener("keydown", closeModalImage);
  function closeModalImage(e) {
    if (e.code === "Escape") {
      bigImg.close();
      console.log("Закрив картинку ескейпом, видаляю EventListener");
      galleryBox.removeEventListener("keydown", closeModalImage);
    }
  }
}
