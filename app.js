const API_URL = 'https://ruddy-mail.glitch.me/api/list';

Vue.component('gif-list', {
  template: `
    <div class="columns is-multiline">
      <gif :src="item" v-for="item in items" :key="item"></gif>
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
      return API_URL + '?page=' + this.page
    },
  },
  methods: {
    fetchGifs() {
      axios.get(this.url).then(res => {
        const object = res.data.items
        const array = object.map(obj => obj.url)
        this.gifs = this.gifs.concat(array)
        this.page++

        if (res.data.last) {
          this.isLastPage = false
        }
      })
    },
  },
  created() {
    this.fetchGifs();
  },
});
