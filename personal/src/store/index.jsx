import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/usersApi";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

// Middleware'leri getDefaultMiddleware ile birleştirin
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, albumsApi.middleware).concat(photosApi.middleware)
});

setupListeners(store.dispatch);

export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation

} from './apis/photosApi'

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
