<template>
  <a-layout class="page">
    <left-side-bar/>
    <a-layout>
      <a-layout-header class="header"></a-layout-header>
      <a-layout-content class="min-h-screen main">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <div class="text-coppy">
          {{ `Copyright ©2023 ` }}
        </div>
        <div class="">
          <span class="hidden sm:block"> Bản quyền thuộc về </span>
          <span>Công Ty Cổ Phần Đầu Tư Ngành Nước DNP</span>
        </div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import LeftSideBar from '@/layouts/LeftSideBar.vue'
</script>
