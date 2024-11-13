import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxtech.videoplayer.ad',
  name: 'MX Player',
  groups: [
    {
      key: 0,
      name: 'AD',
      fastQuery: true,
      activityIds: ['com.google.android.gms.ads.AdActivity'],
      rules: [
        {
          key: 0,
          matches: ['[desc="Interstitial close button"]'],
        },
      ],
    },
  ],
});
