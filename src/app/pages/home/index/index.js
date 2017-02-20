/* ============
 * Home Index Page
 * ============
 *
 * The home index page
 */

import dropNoticeService from './../../../services/dropnotice';

export default {

  data() {
      return {
        dropNotices: [{
          name: 1,
          description: 1,
          date: 1
        }, {
          name: 2,
          description: 2,
          date: 2
        }],
        dropNotices2: dropNoticeService.read(),
      };
    },

    // methods: {
    //   register(user) {
    //     authService.register(user);
    //   },
    // },


    components: {
      VLayout: require('layouts/default/default.vue'),
      VPanel: require('components/panel/panel.vue'),
    },
};
