import { defineConfig } from './src/types/config';

export default defineConfig({
  manifest: {
    id: '/',
    name: 'Bac Feljib',
    short_name: 'Bac Feljib',
    description: 'منصة تعليمية جزائرية لطلاب البكالوريا: دروس، ملخصات، تمارين وحساب المعدل.',
    dir: 'rtl',
    lang: 'ar-DZ',
    background_color: '#f8fafc',
    theme_color: '#2447c7',
    display: 'standalone',
    orientation: 'natural',
    scope: '/',
    start_url: '/?utm_source=homescreen',
    
    // ✅ تفعيل الربط مع تطبيقك على جوجل بلاي
    prefer_related_applications: true,
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=com.bac.feljib.dz.education',
        id: 'com.bac.feljib.dz.education',
      },
    ],

    shortcuts: [
      {
        name: 'الدروس والملخصات',
        short_name: 'الدروس',
        description: 'دروس وملخصات البكالوريا',
        url: '/p/lessons-and-summaries-bac?utm_source=homescreen',
      },
      {
        name: 'تمارين محلولة',
        short_name: 'تمارين',
        description: 'تمارين محلولة للبكالوريا',
        url: '/p/exercises-with-solution-bac?utm_source=homescreen',
      },
      {
        name: 'العد التنازلي للبكالوريا',
        short_name: 'العد التنازلي',
        description: 'توقيت امتحان البكالوريا',
        url: '/p/bac-exam-countdown?utm_source=homescreen',
      },
    ],
  },

  pwa: {
    logs: true,
  },

  oneSignal: {
    enabled: false, // اجعلها true إذا كنت تريد تفعيل الإشعارات عبر OneSignal
    appId: 'd9dd4395-8656-4f28-a0ef-e38f554b1c42',
    allowLocalhostAsSecureOrigin: true,
  },

  origin: 'https://www.bac-feljib.com',
});
