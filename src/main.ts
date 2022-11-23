import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 全局样式
import "./styles/global-style.scss";

// element-plus UI
import ElementPlus from "element-plus";

// console.log("环境变量", import.meta.env)

createApp(App)
  .use(ElementPlus, {
    locale: ElementPlusLocaleZhCn,
  })
  .use(router)
  .mount("#app");
