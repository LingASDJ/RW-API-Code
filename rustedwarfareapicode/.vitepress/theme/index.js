// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./style/custom.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const initializeFirebase = () => {
	const firebaseConfig = {
		apiKey: "AIzaSyANVvapu0ihi1cM8ZzuXTkwjx9lM_J1RyQ",
		authDomain: "rw-api-code-d0779.firebaseapp.com",
		projectId: "rw-api-code-d0779",
		storageBucket: "rw-api-code-d0779.appspot.com",
		messagingSenderId: "363611843335",
		appId: "1:363611843335:web:f15aef7ab427f52b4033a2",
		measurementId: "G-XJH5TKP5VL",
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);
	const perf = getPerformance(app);

	return "Firebase initialized successfully";
};

(async function () {
	try {
		const result = await initializeFirebase();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
})();

function wait(timeout) {
	return new Promise((resolve) => setTimeout(resolve, timeout));
}

async function requestClipboardPermission() {
	try {
		await navigator.permissions.query({ name: "clipboard-write" });
	} catch (error) {
		console.error(error);
	}
}

async function init() {
	try {
		await wait(1000);

		// console.log("timeout");

		const copyBtnList = document.getElementsByClassName("copy");
		// console.log(copyBtnList);
		// console.log(copyBtnList.length);

		for (let i = 0; i < copyBtnList.length; i++) {
			const btn = copyBtnList[i];
			btn.addEventListener("touchend", async () => {
				// 请求剪贴板权限
				await requestClipboardPermission();
				const parentDiv = btn.parentNode;
				const codeElem = parentDiv.querySelector("code");
				const spans = [...codeElem.querySelectorAll("span")];
				const textToCopy = [
					...new Set(spans.map((span) => span.textContent)),
				].join("");
				// console.log(textToCopy);

				try {
					await navigator.clipboard.writeText(textToCopy);
					// console.log("Text copied to clipboard");
				} catch (error) {
					const textarea = document.createElement("textarea");
					textarea.value = textToCopy;
					document.body.appendChild(textarea);
					textarea.select();
					document.execCommand("copy");
					document.body.removeChild(textarea);
					// console.log("Text copied to clipboard");
				}
			});
		}
	} catch (error) {
		console.error(error);
	}
}

setTimeout(() => {
	const notFoundDiv = document.querySelector(".NotFound");
	// 添加404图片
	const img = document.createElement("img");
	img.src =
		"https://img.quankexia.com/kelongwo/wp-content/uploads/2021/07/2021072708045950.png";
	img.alt = "404 Error";
	notFoundDiv.insertBefore(img, notFoundDiv.firstChild);

	// 将PAGE NOT FOUND改为无法找到该页面
	notFoundDiv.querySelector(".title").textContent = "无法找到该页面";

	// 将But if you don't change your direction, and if you keep looking, you may end up where you are heading.改为无法找到该页面
	notFoundDiv.querySelector(".quote").textContent = "无法找到该页面";

	// 将 Take me home 按钮文字替换为返回首页
	notFoundDiv.querySelector(".link").textContent = "返回首页";
}, 200);

init();
export default DefaultTheme;
