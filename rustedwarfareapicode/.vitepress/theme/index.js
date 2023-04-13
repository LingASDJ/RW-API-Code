// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./style/custom.css";

function wait(timeout) {
	return new Promise((resolve) => setTimeout(resolve, timeout));
}

async function init() {
	try {
		await wait(1000);

		console.log("timeout");

		const copyBtnList = document.getElementsByClassName("copy");
		console.log(copyBtnList);
		console.log(copyBtnList.length);

		for (let i = 0; i < copyBtnList.length; i++) {
			const btn = copyBtnList[i];
			btn.addEventListener("touchend", async () => {
				alert("touchend");
				const parentDiv = btn.parentNode;
				const codeElem = parentDiv.querySelector("code");
				const spans = [...codeElem.querySelectorAll("span")];
				const textToCopy = [
					...new Set(spans.map((span) => span.textContent)),
				].join("");

				try {
					await navigator.clipboard.writeText(textToCopy);
					console.log("Text copied to clipboard");
				} catch (error) {
					const textarea = document.createElement("textarea");
					textarea.value = textToCopy;
					document.body.appendChild(textarea);
					textarea.select();
					document.execCommand("copy");
					document.body.removeChild(textarea);
					console.log("Text copied to clipboard");
				}
			});
		}
	} catch (error) {
		console.error(error);
	}
}

init();

export default DefaultTheme;
