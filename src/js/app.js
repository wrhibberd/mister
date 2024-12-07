/* NPM packages get imported here */
import "lazysizes";
import Alpine from "alpinejs";

/* CSS imported here */
import "../css/app.pcss";

/* Project functions get imported here */
// import video from "./partials/video";
import mediaGallery from "./components/mediaGallery";

/* Place alpine on the window to get Alpine dev tools working */
window.Alpine = Alpine;

/* Alpine data */
// Alpine.data("video", video);
Alpine.data("mediaGallery", mediaGallery);

/* Start Alpine */
Alpine.start();

/* Accept HMR as per: https://vitejs.dev/guide/api-hmr.html */
if (import.meta.hot) {
	import.meta.hot.accept(() => {
		console.log("HMR");
	});
}
