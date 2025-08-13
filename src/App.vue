<script setup lang="ts">
import { RouterView } from 'vue-router'
import viVN from 'ant-design-vue/es/locale/vi_VN'
import { theme } from 'ant-design-vue'

const { useToken } = theme
const { token } = useToken()
console.log(token.value)

const locale = viVN
const theme1 = {
  token: {
    colorPrimary: '#05428C',
    wireframe: false,
    borderRadius: 2,
    fontFamily: "'Quicksand', sans-serif",
    fontFeatureSettings: 'tnum',
  },
  components: {
    Layout: {
      colorBgHeader: '#fff',
      colorBgTrigger: '#05428C',
    },
    Menu: {
      colorItemBg: 'transparent',
    },
  }
}
</script>

<template>
  <a-config-provider :locale="locale" :theme="theme1">
    <RouterView />
  </a-config-provider>
</template>
