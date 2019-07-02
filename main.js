import Vue from 'vue';
import App from './App';

//wx api请求
import wxApi from './common/js/wxplugin.js';
Vue.use(wxApi);

//公共方法请求
import publicFunc from './common/js/publicFunc.js';
Vue.use(publicFunc);

//vue-i18n語言
import VueI18n from 'vue-i18n';
import locales from './common/js/locales.js'
Vue.use(VueI18n);
Vue.config.productionTip = false;
const i18n = new VueI18n({  
  locale: 'zh_CN',  
  messages: locales  
});
Vue.prototype._i18n = i18n;
App.mpType = 'app';

const app = new Vue({
	i18n,
    ...App
});
app.$mount();