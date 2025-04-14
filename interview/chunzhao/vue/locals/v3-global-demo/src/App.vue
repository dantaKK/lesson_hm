<template>
  <div>
    <p>{{$t('message.greeting')}}</p>
    <p>{{$t('home.title')}}</p>
    <button @click="changeLocal('zh')">{{$t('message.switchTo')}}{{ $t('message.chinese') }}</button>
    <button @click="changeLocal('en')">{{$t('message.switchTo')}}{{ $t('message.english') }}</button>
    <button @click="changeLocal('ja')">{{$t('message.switchTo')}}{{ $t('message.japanese') }}</button>
  </div>
</template>

<script >
export default {
  name: 'App',
  methods: {
    changeLocal(local) {
      this.$i18n.locale = local
    }
  }
}
</script>

<style scoped>

</style>