import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

enum LoginError {
  INCORRECT_DATA = '',
  SERVER_ERROR= '',
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps,
  ThunkConfig<string>>(
      'login/loginByUsername',
      async (authData, thunkAPI) => {
          try {
              const response = await thunkAPI.extra.api.post<User>('/login', authData);

              if (!response.data) {
                  throw new Error();
              }

              localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
              thunkAPI.dispatch(userActions.setAuthData(response.data));

              return response.data;
          } catch (e) {
              return thunkAPI.rejectWithValue('error');
          }
      },
  );
