import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const imageListEl = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`;
});

let markup = imageListEl.join("");
galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onImageClick);

function onImageClick({ target }) {
  event.preventDefault();

  if (target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src='${target.dataset.source}' width="800" height="600">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (evt) => {
          if (evt.key === "Escape") {
            return instance.close();
          }
        });
      },
    }
  );
  instance.show();
}
