<template>
  <div>
    <button @click="eatingTips">提醒吃饭</button>
  </div>
</template>

<script>
export default {
  methods: {
    eatingTips () {
      this.$axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=a78847a3-4d59-4f12-9ebf-852abe3bfd22', {
        msgtype: 'text',
        text: {
          content: '各位大佬早上好'
        }
      })
    }
  }
}
</script>
