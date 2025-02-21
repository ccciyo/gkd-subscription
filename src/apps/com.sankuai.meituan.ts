import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '直播',
      fastQuery: true,
      activityIds: ['com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@ImageView + TextView[text="正在讲解"]',
          ],
        },
      ],
    },
  ],
});
