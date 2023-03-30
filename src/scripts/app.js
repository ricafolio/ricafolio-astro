import Swup from "swup"
import SwupA11yPlugin from "@swup/a11y-plugin"
import SwupHeadPlugin from "@swup/head-plugin"
import SwupSlideTheme from "@swup/slide-theme"

function initIndexEffect() {
	if (window.location.pathname === '/') {
		const rica = document.getElementById("rica")
		const ph = document.getElementById("ph")
		const emoji = document.getElementById("emoji")
		const setEmoji = (emojicon) => {
			emoji.innerHTML = emojicon
		}
		const resetEmoji = () => {
			emoji.innerHTML = "👋"
		}

		rica.addEventListener("mouseenter", () => {setEmoji("🤠")}, false)
		rica.addEventListener("mouseleave", resetEmoji, false)

		ph.addEventListener("mouseenter", () => {setEmoji("🇵🇭")}, false)	
		ph.addEventListener("mouseleave", resetEmoji, false)
	}
}

const swup = new Swup({
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), new SwupSlideTheme()]
})

// run once when page loads
if (document.readyState === 'complete') {
  initIndexEffect();
} else {
  document.addEventListener('DOMContentLoaded', () => initIndexEffect());
}

swup.on('contentReplaced', initIndexEffect)