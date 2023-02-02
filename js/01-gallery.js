import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const cardsMarkup = createGalleryImages(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryImages(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
					<a class="gallery__link" href="${original}">
						<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
					</a>
				</div>`;
		})
		.join(``);
}

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	document.addEventListener("keydown", pushEscape);
	const originalUrl = event.target.dataset.source;
	createAndOpenModal(originalUrl);
}

let modal;
function createAndOpenModal(link) {
	modal = basicLightbox.create(`
   <img src="${link}" alt="" />`);
	modal.show();
}

function pushEscape(event) {
	const EscKeyCode = "Escape";
	if (event.code === EscKeyCode) {
		modal.close();
	}
	document.removeEventListener("keydown", pushEscape);
}
