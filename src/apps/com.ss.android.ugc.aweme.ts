import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '直播弹出',
      fastQuery: true,
      activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@View -2 View < View < View < FrameLayout < FrameLayout < FrameLayout[id="com.ss.android.ugc.aweme:id/o8o"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="了解详情"] < FrameLayout -n @[id="com.ss.android.ugc.aweme:id/iv_close"]',
          ],
        },
        {
          key: 2,
          matches: ['@View <3 View > View > ViewGroup > [text="打开游戏"]'],
        },
        {
          key: 3,
          matches: ['@View <(3) View >5 [text="下载"]'],
        },
      ],
    },
  ],
});
