const API_URL = 'https://ruddy-mail.glitch.me/api/list';

Vue.component('gif-list', {
  template: `
    <div class="columns is-multiline">      
      <gif v-for="item in items" :key="item.index" :src="item.url"></gif>
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
      return API_URL + '?page=' + this.page;
    },
  },
  methods: {
    fetchGifs() {
      axios.get(this.url).then(res => {
        res.data.items.forEach(item => {
          this.gifs.push(item);
        });
        this.isLastPage = res.data.last;
        this.page++;
      });
    },
  },
  created() {
    this.fetchGifs();
  },
});
