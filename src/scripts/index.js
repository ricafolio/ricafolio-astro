const rica = document.getElementById("rica")
const philippines = document.getElementById("ph")
const emoji = document.getElementById("emoji")
const setEmoji = (emojicon) => {
  emoji.innerHTML = emojicon
}
const resetEmoji = () => {
  emoji.innerHTML = "👋"
}

rica.addEventListener(
  "mouseenter",
  () => {
    setEmoji("🤠")
  },
  false,
)
rica.addEventListener("mouseleave", resetEmoji, false)

philippines.addEventListener(
  "mouseenter",
  () => {
    setEmoji("🇵🇭")
  },
  false,
)
philippines.addEventListener("mouseleave", resetEmoji, false)
