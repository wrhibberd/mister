import Alpine from "alpinejs";
import mediaGallery from "./components/mediaGallery";

window.Alpine = Alpine;

Alpine.data("mediaGallery", mediaGallery);

Alpine.start();
