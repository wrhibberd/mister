export default function mediaGallery() {
	const items = this.$root.querySelectorAll("[data-item]");

	return {
		currentItem: "01",
		totalItems: items.length.toString().padStart(2, "0"),

		init() {},
	};
}
