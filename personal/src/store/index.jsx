import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/usersApi";
import { albumsApi } from "./apis/albumsApi";

// Middleware'leri getDefaultMiddleware ile birleştirin
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, albumsApi.middleware)
});

setupListeners(store.dispatch);

// İçe aktarmaları kullanıcıya göre gruplayın
export {
  useAddUserMutation,
  useFetchUsersQuery,
  useRemoveUserMutation
} from './apis/usersApi';

export {
  useFetchAlbumsQuery,
  useRemoveAlbumMutation,
  useAddAlbumMutation
} from './apis/albumsApi';
