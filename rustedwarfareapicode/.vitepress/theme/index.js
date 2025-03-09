// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./style/custom.css";
import NotFound from "../theme/NotFound.vue";

/**
 * 等待指定时间
 * @param {number} timeout 等待时间，单位：毫秒
 * @returns {Promise<void>} 等待结果
 * @example await wait(1000);
 * @example wait(1000).then(() => console.log("timeout"));
 */
function wait(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

/**
 * 请求剪贴板权限
 * @returns {Promise<void>} 请求结果
 * @example await requestClipboardPermission();
 */
async function requestClipboardPermission() {
    try {
        await navigator.permissions.query({ name: "clipboard-write" });
    } catch (error) {
        console.error(error);
    }
}
/**
 * 初始化
 * @returns {Promise<void>} 初始化结果
 * @example await init();
 */
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
init();
export default {
    ...DefaultTheme,
    Layout: NotFound,
};
