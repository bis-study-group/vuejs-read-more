const API_URL = 'https://ruddy-mail.glitch.me/api/list';

Vue.component('gif-list', {
  template: `
    <div class="columns is-multiline">
      <!-- Insert gif component here... -->
      <gif v-for="item in items" :src="item.url">
      </gif>
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
      return API_URL;
    },
  },
  methods: {
    fetchGifs() {
      axios.get(this.url + '?page=' + this.page)
        .then(res => {
          /* Insert code here... */
          this.gifs.push({
            id: res.data.items[0],
            url: res.data.items[0]['url']
          },
          {
            id: res.data.items[1],
            url: res.data.items[1]['url']
          },
          {
            id: res.data.items[2],
            url: res.data.items[2]['url']
          });
          if (res.data.last) {
            this.isLastPage = false;
          }
        });
      this.page++;
    },
  },
  created() {
    this.fetchGifs();
  },
});
