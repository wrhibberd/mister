import Lenis from "lenis";

export default function mediaGallery() {
	const items = this.$root.querySelectorAll("[data-item]");

	return {
		currentItem: "01",
		totalItems: items.length.toString().padStart(2, "0"),

		init() {
			const container = this.$refs.container;
			const tail = this.$refs.tail;

			// // Initialize Lenis
			// const lenis = new Lenis({
			// 	autoRaf: true,
			// 	wrapper: container,
			// 	orientation: "horizontal",
			// });

			// container.addEventListener("scroll", () => {
			// 	items.forEach((item, i) => {
			// 		const rect = item.getBoundingClientRect();
			// 		const isInViewAndFurthestLeft =

			// 		if (isInViewAndFurthestLeft) {
			// 			this.currentItem = (i + 1).toString().padStart(2, "0");
			// 			console.log(this.currentItem);
			// 		}
			// 	});
			// });

			window.addEventListener("mousemove", (e) => {
				tail.style.top = `${e.clientY - 40}px`;
				tail.style.left = `${e.clientX - 40}px`;
			});
			container.addEventListener("mouseover", () => {
				tail.classList.remove("opacity-0");
			});
			container.addEventListener("mouseout", () => {
				tail.classList.add("opacity-0");
			});
		},
	};
}
