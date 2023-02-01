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
document.addEventListener("keydown", pushEscape);

function onImageClick(event) {
	if (event.target.nodeName !== "IMG") {
		return;
	}

	const originalUrl = event.target.dataset.source;
	const linkHref = event.target.parentNode;

	deletDataHref(linkHref);
	createAndOpenModal(originalUrl);
}

let modal;
function createAndOpenModal(link) {
	modal = basicLightbox.create(`
   <img src="${link}" alt="" width = "500"/>`);
	modal.show();
}

function deletDataHref(teg) {
	return teg.removeAttribute("href");
}

function pushEscape(event) {
	const EscKeyCode = "Escape";
	if (event.code === EscKeyCode) {
		modal.close();
	}
}
