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

let originalUrl = null;

const modal = basicLightbox.create(`
   <img src="${originalUrl}" >
`);

function onImageClick(event) {
	if (event.target.nodeName !== "IMG") {
		return;
	}
	originalUrl = event.target.dataset.source;
	const linkHref = event.target.parentNode;
	deletDataHref(linkHref);
	modal.show();
}

function deletDataHref(link) {
	return link.removeAttribute("href");
}
