import { configureStore } from "@reduxjs/toolkit";
import auth_Slice from "./authSlice";
import { banksApi,idCardApi,businessTypeApi,agentApi,aggregatorsApi,managersApi, terminalsApi, logOutApi, admintransactApi, dashboardApi } from "./apiSlice";

const store = configureStore({
    reducer:{
        auth: auth_Slice.reducer,
        [banksApi.reducerPath]: banksApi.reducer,
        [idCardApi.reducerPath]:idCardApi.reducer,  
        [businessTypeApi.reducerPath]: businessTypeApi.reducer,
        [agentApi.reducerPath]: agentApi.reducer,
        [managersApi.reducerPath]: managersApi.reducer,
        [aggregatorsApi.reducerPath]: aggregatorsApi.reducer,
        [admintransactApi.reducerPath]: admintransactApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
        [terminalsApi.reducerPath]: terminalsApi.reducer,
        [logOutApi.reducerPath]:logOutApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat([admintransactApi.middleware,dashboardApi.middleware,terminalsApi.middleware,logOutApi.middleware,aggregatorsApi.middleware,managersApi.middleware,banksApi.middleware,agentApi.middleware, idCardApi.middleware, businessTypeApi.middleware])
    },
});

export default store;