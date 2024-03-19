import { http } from '@/utils/http'
import type { BannerItem } from '@/types/home'
// banner首页
export const getHomeBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
