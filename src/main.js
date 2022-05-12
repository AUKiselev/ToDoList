import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./assets/css/styles.sass";
import ElementPlus from "element-plus";
import ru from "element-plus/es/locale/lang/ru";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app.use(createPinia());
app.use(ElementPlus, {
  locate: ru,
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
