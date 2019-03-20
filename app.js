const API_URL = 'https://ruddy-mail.glitch.me/api/list';

Vue.component('gif-list', {
  template: `
    <div class="columns is-multiline">
      <gif :src="item.url" v-for="item in items"></gif>
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
      return API_URL;
    },
  },
  methods: {
    fetchGifs() {
      axios.get(this.url + "?page=" + this.page).then(res => {
        const data = res.data;
        this.gifs = this.gifs.concat(data.items);
        this.isLastPage = data.last;
        this.page++;
      });
    },
  },
  created() {
    this.fetchGifs();
  },
});
