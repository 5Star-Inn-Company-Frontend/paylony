import { configureStore } from "@reduxjs/toolkit";
import auth_Slice from "./authSlice";
import { banksApi,rolesApi,idCardApi,transactHistoryApi,businessTypeApi,cashOutApi,ticketApi,disputeApi,chargeBackApi,agentCurrentMonthTargetApi,agentStateCountApi,agentMapApi,overviewReportApi,revenueWalletApi,mainWalletApi,agentApi,aggregatorsApi,managersApi, terminalsApi, admintransactApi, dashboardApi } from "./apiSlice";

const store = configureStore({
    reducer:{
        auth: auth_Slice.reducer,
        [transactHistoryApi.reducerPath]:transactHistoryApi.reducer,
        [banksApi.reducerPath]: banksApi.reducer,
        [idCardApi.reducerPath]:idCardApi.reducer,  
        [businessTypeApi.reducerPath]: businessTypeApi.reducer,
        [agentApi.reducerPath]: agentApi.reducer,
        [managersApi.reducerPath]: managersApi.reducer,
        [aggregatorsApi.reducerPath]: aggregatorsApi.reducer,
        [rolesApi.reducerPath]: rolesApi.reducer,
        [admintransactApi.reducerPath]: admintransactApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
        [terminalsApi.reducerPath]: terminalsApi.reducer,
        // [logOutApi.reducerPath]:logOutApi.reducer,
        [ticketApi.reducerPath]:ticketApi.reducer,
        [disputeApi.reducerPath]:disputeApi.reducer,
        [chargeBackApi.reducerPath]:chargeBackApi.reducer,
        [agentCurrentMonthTargetApi.reducerPath]:agentCurrentMonthTargetApi.reducer,
        [agentStateCountApi.reducerPath]:agentStateCountApi.reducer,
        [agentMapApi.reducerPath]:agentMapApi.reducer,
        [overviewReportApi.reducerPath]:overviewReportApi.reducer,
        [revenueWalletApi.reducerPath]:revenueWalletApi.reducer,
        [mainWalletApi.reducerPath]:mainWalletApi.reducer,
        [cashOutApi.reducerPath]:cashOutApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(
            [
                admintransactApi.middleware,
                dashboardApi.middleware,
                terminalsApi.middleware,
                // logOutApi.middleware,
                aggregatorsApi.middleware,
                managersApi.middleware,
                banksApi.middleware,
                cashOutApi.middleware,
                agentApi.middleware,
                idCardApi.middleware,
                businessTypeApi.middleware,
                ticketApi.middleware,
                rolesApi.middleware,
                transactHistoryApi.middleware,
                disputeApi.middleware,
                chargeBackApi.middleware,
                agentCurrentMonthTargetApi.middleware,
                agentStateCountApi.middleware,
                agentMapApi.middleware,
                overviewReportApi.middleware,
                revenueWalletApi.middleware,
                mainWalletApi.middleware
            ])
    },
});

export default store;