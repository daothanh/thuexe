<script setup lang="ts">
import { RouterView } from 'vue-router'
import viVN from 'ant-design-vue/es/locale/vi_VN'

const locale = viVN
const theme = {
  token: {
    colorPrimary: '#05428C',
    borderRadius: 2,
    fontFamily: "'Quicksand', sans-serif",
    fontFeatureSettings: 'tnum',
  },
}
</script>

<template>
  <a-config-provider :locale="locale" :theme="theme">
    <RouterView />
  </a-config-provider>
</template>
