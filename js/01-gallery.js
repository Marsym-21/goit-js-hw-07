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
let modal;
gallery.onclick = event => {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	const link = event.target.dataset.source;
	const html = `<img src="${link}" alt="" />`;

	modal = basicLightbox.create(html);

	modal.show();
	document.addEventListener("keydown", pushEscape);
};

function pushEscape(event) {
	const EscKeyCode = "Escape";
	if (event.code === EscKeyCode) {
		modal.close();
	}
	document.removeEventListener("keydown", pushEscape);
}
