import Swup from "swup"
import SwupA11yPlugin from "@swup/a11y-plugin"
import SwupHeadPlugin from "@swup/head-plugin"
import SwupSlideTheme from "@swup/slide-theme"

function initIndexScript() {
	if (window.location.pathname === '/') {
		const rica = document.getElementById("rica")
		const philippines = document.getElementById("ph")
		const emoji = document.getElementById("emoji")
		const setEmoji = (emojicon) => {
			emoji.innerHTML = emojicon
		}
		const resetEmoji = () => {
			emoji.innerHTML = "👋"
		}

		rica.addEventListener("mouseenter", () => {setEmoji("🤠")}, false)
		rica.addEventListener("mouseleave", resetEmoji, false)

		philippines.addEventListener("mouseenter", () => {setEmoji("🇵🇭")}, false)	
		philippines.addEventListener("mouseleave", resetEmoji, false)
	}
}

const swup = new Swup({
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), new SwupSlideTheme()]
})

// run once when page loads
if (document.readyState === 'complete') {
  initIndexScript();
} else {
  document.addEventListener('DOMContentLoaded', () => initIndexScript());
}

// run every page transition
swup.on('contentReplaced', initIndexScript)
