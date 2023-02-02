import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const cardsMarkup = createGalleryImages(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryImages(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
						<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
					</a>`;
		})
		.join(``);
}

var lightbox = new SimpleLightbox(".gallery a", {});

lightbox.on("show.simplelightbox", function (event) {
	const image = event.currentTarget.firstElementChild;
	const titleImage = image.getAttribute("alt");
	const title = document.createElement("h1");
	title.textContent = titleImage;

	const modalImageBox = lightbox.domNodes.image;

	console.log(modalImageBox.innerHTML);
});
