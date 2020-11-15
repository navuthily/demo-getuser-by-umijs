import service from './services';
import { Effect, Reducer } from 'umi';

export interface UserState {
  users: IUser[];
}

export interface IUser {
id:string;
email: string;
first_name:string;
last_name:string;
avatar:string;
}

export interface UserModelType {
  namespace: string;
  state: UserState;
  effects: {
    getUsers: Effect;

  };
  reducers: {
    save: Reducer<UserState>;
  };
}

const initialState: UserState = {
  users: []
};

const UserModel: UserModelType = {
  namespace: 'User',
  state: initialState,
  effects: {
    *getUsers({ payload }, { call, put }) {
      const response = yield call(service.getUsers);
      if (response.err === 'empty list') {
        return yield put({
          type: 'getUsers',
        });
      }
      if (response.err && response.err !== 'empty list') {
        return;
      }
      const { data} = response.data;
      yield put({
        type: 'save',
        payload: {
          users: data,
        },
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default UserModel;