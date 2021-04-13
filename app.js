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
      return API_URL
    },
  },
  methods: {
    fetchGifs() {
      axios.get(this.url).then(res => {
        console.log(res);
        // オブジェクトで取得する
        const object = res.data.items
        // 配列に変換する
        const array = object.map(obj => obj.url)
        // gifsに追加する
        this.gifs = this.gifs.concat(array)
        console.log(this.gifs);
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
