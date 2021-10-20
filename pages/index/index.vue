<template>
  <view class="content">
    <button type="default" @click="handleNow">记录一下</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    };
  },
  onLoad() {},
  methods: {
    handleNow() {
      console.log(123);
    }
  }
};
</script>

<style></style>
