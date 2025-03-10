<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
    <Layout>
        <template #not-found>
            <!-- 404界面 -->
            <div
                data-v-98ddab3d=""
                data-v-8f7cd5e4=""
                class="VPContent"
                id="VPContent"
            >
                <div data-v-6c4a3ffe="" data-v-98ddab3d="" class="NotFound">
                    <img
                        src="/logo.png"
                        alt=""
                        class="notfound-img"
                    />
                    <p data-v-6c4a3ffe="" class="code">404</p>
                    <h1 data-v-6c4a3ffe="" class="title">
                        你干嘛~，这里什么都没有!
                    </h1>
                    <div data-v-6c4a3ffe="" class="divider"></div>
                    <blockquote data-v-6c4a3ffe="" class="quote">
                        你寻找的页面可能不存在或被迁移……
                    </blockquote>
                    <div data-v-6c4a3ffe="" class="action">
                        <a
                            data-v-6c4a3ffe=""
                            class="link"
                            href="/"
                            aria-label="go to home"
                        >
                            返回主页
                        </a>
                    </div>
                    
                </div>
            </div>
        </template>
    </Layout>
</template>

<style scoped>
.notfound-img {
    margin: 0 auto;
    max-width: 256px;
}
.NotFound {
    padding: 64px 24px 96px;
    text-align: center;
}
.code {
    line-height: 64px;
    font-size: 64px;
    font-weight: 600;
}
.title {
    padding-top: 12px;
    letter-spacing: 2px;
    line-height: 20px;
    font-size: 20px;
    font-weight: 700;
}

.divider {
    margin: 24px auto 18px;
    width: 64px;
    height: 1px;
    background-color: rgba(48, 52, 54, 0.12);
}

.quote {
    color: var(--darkreader-text--vp-c-text-2);
}
.quote {
    margin: 0 auto;
    max-width: 256px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}
.action {
    padding-top: 20px;
}
.link {
    color: #4ff0ba;
    border: 1px solid #10b981;
}
.link {
    display: inline-block;
    border: 1px solid #10b981;
    border-radius: 16px;
    padding: 3px 16px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand);
    transition: border-color 0.25s, color 0.25s;
}
</style>
