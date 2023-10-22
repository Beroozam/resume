import { configureStore } from '@reduxjs/toolkit'
import {baseApi} from "./services/BaseApi";


export const store = configureStore({
    reducer: {
        // dashboard: dashboardSlice,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch