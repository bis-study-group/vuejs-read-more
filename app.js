const API_URL = 'https://ruddy-mail.glitch.me/api/list';

Vue.component('gif-list', {
  template: `
    <div class="columns is-multiline">
      <!-- Insert gif component here... -->
    </div>
  `,
  props: ['items'],
});

Vue.component('gif', {
  template: `
    <figure class="column is-one-third">
      <img :src="src" alt="" />
    </figure>
  `,
  props: ['src'],
});

new Vue({
  el: '#app',
  data: {
    gifs: [],
    page: 1,
    isLastPage: true,
  },
  computed: {
    url() {
      /* Insert code here... */
    },
  },
  methods: {
    fetchGifs() {
      axios.get(this.url).then(res => {
        /* Insert code here... */
      });
    },
  },
  created() {
    this.fetchGifs();
  },
});
