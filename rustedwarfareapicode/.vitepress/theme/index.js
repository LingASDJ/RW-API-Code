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
			btn.addEventListener("click", () => {
				const parentDiv = btn.parentNode;
				const codeElem = parentDiv.querySelector("code");
				const spans = [...codeElem.querySelectorAll("span")];
				const textToCopy = [
					...new Set(spans.map((span) => span.textContent)),
				].join("");
				navigator.clipboard.writeText(textToCopy);
				console.log(textToCopy);
			});
		}
	} catch (error) {
		console.error(error);
	}
}

init();

export default DefaultTheme;
