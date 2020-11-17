<template>
  <div class="home">
    <h1>Mis posts</h1>
    <div v-for="post in posts" :key="post.id">
      <p>{{post.title}}</p>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  mounted() {
    this.getPosts()
  },
  computed: {
    ...mapState(['posts'])
  }
}
</script>
