import Lenis from "lenis";

export default function mediaGallery() {
	return {
		init() {
			const tail = this.$refs.tail;
			const root = this.$root;

			// Initialize Lenis
			const lenis = new Lenis({
				autoRaf: true,
				wrapper: root,
				orientation: "horizontal",
			});

			window.addEventListener("mousemove", (e) => {
				tail.style.top = `${e.clientY - 40}px`;
				tail.style.left = `${e.clientX - 40}px`;
			});
			root.addEventListener("mouseover", () => {
				tail.classList.remove("opacity-0");
			});
			root.addEventListener("mouseout", () => {
				tail.classList.add("opacity-0");
			});
		},
	};
}
