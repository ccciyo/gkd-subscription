import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.kiwi',
  name: '虎牙',
  groups: [
    {
      key: 0,
      name: '直播弹出',
      fastQuery: true,
      activityIds: ['com.duowan.kiwi.liveroom.ChannelPage'],
      rules: [
        {
          key: 0,
          matches: ['[id="com.duowan.kiwi:id/ad_close"]'],
        },
        {
          key: 1,
          matches: ['[id="com.duowan.kiwi:id/iv_close"]'],
        },
        {
          key: 2,
          matches: ['[id="com.duowan.kiwi:id/ui_horizontal_close_top"]'],
        },
      ],
    },
  ],
});
