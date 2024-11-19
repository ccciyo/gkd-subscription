import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxtech.videoplayer.ad',
  name: 'MX Player',
  groups: [
    {
      key: 0,
      name: 'AdActivity',
      fastQuery: true,
      activityIds: ['com.google.android.gms.ads.AdActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@ImageButton[desc="Interstitial close button"] < FrameLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: 'ActivityScreen',
      fastQuery: true,
      activityIds: ['com.mxtech.videoplayer.ad.ActivityScreen'],
      rules: [
        {
          key: 0,
          matches: ['[vid="native_ad_close_button"]'],
        },
      ],
    },
  ],
});
