import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

galleryItemsCreate(galleryItems);

function galleryItemsCreate(array) {
  const imagesPrewievTable = array
    .map((image) => {
      return `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`;
    })
    .join("");
  galleryBox.innerHTML = imagesPrewievTable;
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionClass: "centered-text",
});
