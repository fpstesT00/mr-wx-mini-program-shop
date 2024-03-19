<script setup lang="ts">
// 引入导航栏
import { onLoad } from '@dcloudio/uni-app'
import customNavbar from './components/customNavbar.vue'
import { getHomeBannerApi } from '@/services/home'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <customNavbar />
  <XtxSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
