import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'light',
  primaryColor: '#40c0e5',
  layout: 'top',
  contentWidth: 'Fixed',
  headerHeight: 64,
  fixedHeader: true,
  fixSiderbar: true,

  title: '空谷的足迹',
  pwa: true,
  iconfontUrl: '',
};

export type { DefaultSettings };

export default proSettings;
