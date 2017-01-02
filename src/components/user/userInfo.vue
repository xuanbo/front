<template>
  <div>
    <h1 class="text-center">{{ msg }}</h1>
    <div>{{ user }}</div>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data () {
    return {
      msg: '用户信息',
      user: ''
    }
  },
  mounted: function() {
    var uri = this.$core.CONST.URI;
    this.$http.get(uri + '/user?access_token='+this.$core.token.get()).then(response => {
      console.log(response.data);
      this.user = response.data;
    })
  }
}
</script>
