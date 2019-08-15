import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 使用多文件管理不同的语言是一个好习惯：
const i18n = new VueI18n({
  // locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./zh'),
    'en': require('./en')
  }
})

export default i18n