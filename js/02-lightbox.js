import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const imageListEl = galleryItems.map(({ preview, original, description }) => {
  return `<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});

let markup = imageListEl.join("");
galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
}

const simple = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
