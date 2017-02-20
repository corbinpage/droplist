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
        dropNotices2: null
      }
    },

    created() {
      this.fetchDropNotices();
    },

    watch: {
      '$route': 'fetchDropNotices'
    },

    methods: {
      fetchDropNotices() {
        dropNoticeService.read()
          .then((data) => {
            console.log(data);
            this.dropNotices2 = data;
          })
      }
    },

    //    dropNotices2: 
    // .then((data) => {
    //   console.log(data);
    //   return data;
    // })


    //   return {
    //     dropNotices: [{
    //       name: 1,
    //       description: 1,
    //       date: 1
    //     }, {
    //       name: 2,
    //       description: 2,
    //       date: 2
    //     }],
    //     dropNotices2: dropNoticeService.read()
    //     .then((data) => {
    //       console.log(data);
    //       return data;
    //     })
    //   };
    // },

    components: {
      VLayout: require('layouts/default/default.vue'),
      VPanel: require('components/panel/panel.vue'),
    },
};
