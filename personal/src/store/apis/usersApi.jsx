import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

//datayı gecikmeli çekmek için
const pause = (duration) => {
     return new Promise((resolve)=>{
        setTimeout(resolve, duration)
     })
}

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args)
        }
    }),
    endpoints(builder){
        return {
            //bir şey çekmek istediğimizde query düzeltmek istediğimizde mutation
            fetchUsers: builder.query({
                providesTags:['User'],
                query: () => {
                    return {
                        url: '/users',
                        method: 'GET'
                    }
                }
            }),
            addUser: builder.mutation({
                invalidatesTags: () => {
                  return [{ type: 'User' }];
                },
                query: () => {
                  return {
                    url: '/users',
                    method: 'POST',
                    body: {
                      name: faker.name.fullName(),
                    },
                  };
                },
              }),
            removeUser: builder.mutation({
                invalidatesTags: () => {
                    return [{type: 'User'}]
                },
                query: (user) => {
                    return {
                        url: `/users/${user.id}`,
                        method: 'DELETE'
                    }
                }
            })
        }
    }
})

export {usersApi};

export const {useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation} = usersApi