import { http } from '@/utils/http'
import type { BannerItem, CategoryItem } from '@/types/home'
// banner首页
export const getHomeBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
// 首页分类
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
  })
}
