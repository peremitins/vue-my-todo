import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: 'mdiSvg',
  theme: {
    themes: {
      light: {
        primary: '#cbcbcb',
        success: '#3cd1c2',
        info: '#ff2acc',
        error: '#f83e70',
        black: '#4e4e4e',
        white: '#fff',
        gray1: '#d9d9d9'
      }
    }
  }
});
