import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import productReducer from '../features/ProductSlice'
import categoryReducer from '../features/CategorySlice'
import cartReducer from '../features/CartSlice'
import userReducer from '../features/UserSlice'
// ...
export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
        user: userReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;