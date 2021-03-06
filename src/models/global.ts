import type { Reducer } from 'umi';

export type NoticeItem = {
  id: string;
  type: string;
  status: string;
};

export type GlobalModelState = {
  collapsed: boolean;
  notices: NoticeItem[];
};

export type GlobalModelType = {
  namespace: 'global';
  state: GlobalModelState;
  reducers: {
    changeLayoutCollapsed: Reducer<GlobalModelState>;
  };
};

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  reducers: {
    changeLayoutCollapsed(state = { notices: [], collapsed: true }, { payload }): GlobalModelState {
      return {
        ...state,
        collapsed: payload,
      };
    },
  },
};

export default GlobalModel;
