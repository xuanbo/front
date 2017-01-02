<template>
  <div>
    <h1 class="text-center">{{ msg }}</h1>
    <h5 class="text-center">
      <router-link to="/">{{ back }}</router-link>
    </h5>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  data () {
    return {
      msg: 'Page Not Found!',
      back: '返回首页'
    }
  }
}
</script>
