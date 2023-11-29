import { configureStore } from "@reduxjs/toolkit";
import auth_Slice from "./authSlice";
import { banksApi,idCardApi,businessTypeApi,agentApi,aggregatorsApi,managersApi, terminalsApi } from "./apiSlice";

const store = configureStore({
    reducer:{
        auth: auth_Slice.reducer,
        [banksApi.reducerPath]: banksApi.reducer,
        [idCardApi.reducerPath]:idCardApi.reducer,  
        [businessTypeApi.reducerPath]: businessTypeApi.reducer,
        [agentApi.reducerPath]: agentApi.reducer,
        [managersApi.reducerPath]: managersApi.reducer,
        [aggregatorsApi.reducerPath]: aggregatorsApi.reducer,
        [terminalsApi.reducerPath]: terminalsApi.reducer     
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat([terminalsApi.middleware,aggregatorsApi.middleware,managersApi.middleware,banksApi.middleware,agentApi.middleware, idCardApi.middleware, businessTypeApi.middleware])
    },
});

export default store;