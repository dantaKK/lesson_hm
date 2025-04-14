import { createI18n } from 'vue-i18n';
// 语言包
// 确定
import en from './locals/en'; // 引入英文语言包
import zh from './locals/zh'; // 引入中文语言包
import ja from './locals/ja'; // 引入日语语言包

// 原型链找到i18n 
const i18n = createI18n({
   legacy: false, // 你使用的是Composition API，所以需要设置为false
    //    locale: 'zh', // 默认语言
     locale: localStorage.getItem('lang')?? 'zh', // 默认语言
   messages: {
     en,
     zh,
     ja, 
   }
})


export default i18n