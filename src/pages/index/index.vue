<script setup lang="ts">
// 引入导航栏
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerApi, getHomeCategoryAPI } from '@/services/home'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'
// 数据
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}
const getHomerCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomerCategoryData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
./components/CustomNavbar.vue
