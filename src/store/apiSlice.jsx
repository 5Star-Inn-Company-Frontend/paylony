import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "https://patrick.5starcompany.com.ng"
const user = JSON.parse(localStorage.getItem('paylonyToken'))

export const mainWalletApi = createApi({
    reducerPath:"mainWalletApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getMainWallet: builder.query({
            query: ()=> "/api/v1/analytics/main-wallet-history",
        }),
    }),
});  

export const revenueWalletApi = createApi({
    reducerPath:"revenueWalletApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getRevenueWallet: builder.query({
            query: ()=> "/api/v1/analytics/revenue-wallet-history",
        }),
    }),
});

export const overviewReportApi = createApi({
    reducerPath:"overviewReportApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getOverviewReport: builder.query({
            query: ()=> "/api/v1/analytics/overview-report",
        }),
    }),
});

export const agentMapApi = createApi({
    reducerPath:"agentMapApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAgentMap: builder.query({
            query: ()=> "/api/v1/analytics/agent-map",
        }),
    }),
});

export const agentStateCountApi = createApi({
    reducerPath:"agentStateCountApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAgentStateCount: builder.query({
            query: ()=> "/api/v1/analytics/agent-state-count",
        }),
    }),
});

export const agentCurrentMonthTargetApi = createApi({
    reducerPath:"agentCurrentMonthTargetApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAgentCurrentMonthTarget: builder.query({
            query: ()=> "/api/v1/analytics/agent-current-month-target",
        }),
    }),
});

export const chargeBackApi = createApi({
    reducerPath:"chargeBackApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getChargeBack: builder.query({
            query: ()=> "/api/v1/charge-back",
        }),
    }),
});

export const disputeApi = createApi({
    reducerPath:"disputeApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer  Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),   
    endpoints:(builder)=>({
        getDispute: builder.query({
            query: ()=> "/api/v1/disputes",
        }),
    }),
});

export const ticketApi = createApi({
    reducerPath:"ticketApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getTicket: builder.query({
            query: ()=> "/api/v1/tickets",
        }),
        getTicketDetails: builder.query({
            query: (status)=> `/api/v1/tickets/status/${status}`,
        }),
    }),
});

export const cashOutApi = createApi({
    reducerPath:"cashOutApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getCashOut: builder.query({
            query: ()=> "/api/v1/cashout-history",
        }),
    }),
});

export const banksApi = createApi({
    reducerPath:"banksApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAllBanks: builder.query({
            query: ()=> "/api/v1/banks",
        }),
    }),
});



export const idCardApi = createApi({
    reducerPath:"idCardApi",
    baseQuery: fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder)=>({
        getAllIdCard: builder.query({
            query: ()=> "/api/v1/id-card-types",
        }),
    }),
});

export const dashboardApi = createApi({
    reducerPath:"dashboardApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAllDashboard: builder.query({
            query: ()=> "/api/v1/dashboard",
        }),
    }),
});

export const businessTypeApi = createApi({
    reducerPath:"businessTypeApi",
    baseQuery:  fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAllBusinessType: builder.query({
            query: ()=> "/api/v1/business-types",
        }),
        getAllBusinessShow: builder.query({
            query: (todo)=> `/api/v1/business-types/${todo.id}`,
        }),
        deleteBussiness: builder.mutation({
            query: (todo)=> ({
                url:`/api/v1/business-types/${todo.id}`,
                method:'DELETE'
            }),
        }),
        createBussiness: builder.mutation({
            query: (todo)=> ({
                url:`/api/v1/business-types`,
                method:'POST',
                body:todo.body
            }),
        }),
    }),
});

export const agentApi = createApi({
    reducerPath:"agentApi",
    baseQuery:  fetchBaseQuery({
        baseUrl:baseUrl,
        tagTypes : ['Agents'],
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAllAgents: builder.query({
            query: ()=> "/api/v1/agents",
            providesTags :['Agents']
        }),
        createAgent: builder.mutation({
            query: (todo)=> {
                return {
                    url:`/api/v1/agents`,
                    method:'POST',
                    headers:{
                        "Accept":'application/json',
                    },
                    body:todo.body,
                    formData : true
                }
            },
            invalidatesTags :['Agents']
        }),
    }),
});

// export const logOutApi = createApi({
//     reducerPath:"logOutApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl:baseUrl,
//         prepareHeaders: (headers, {getState})=>{
//             headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
//             return headers
//         }
//     }),
//     endpoints:(builder)=>({
//         logOut: builder.mutation({
//             query: (todo)=> ({
//                 url:"/api/v1/auth/logout",
//                 method:'POST'
//             }),
//         }),
//     })
// })

export const managersApi = createApi({
    reducerPath:"managersApi",
    baseQuery:  fetchBaseQuery({
        baseUrl:baseUrl,
        tagTypes : ['manager'],
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAllManagers: builder.query({
            query: ()=> "/api/v1/managers",
            providesTags :['manager']
        }),
        createManagers: builder.mutation({
            query: (todo)=> {
                return {
                    url:`/api/v1/managers`,
                    method:'POST',
                    headers:{
                        "Accept":'application/json',
                    },
                    body:todo.body,
                    formData : true
                }
            },
            invalidatesTags :['manager']
        }),
    }),
});

export const rolesApi = createApi({
    reducerPath:"rolesApi",
    baseQuery:  fetchBaseQuery({
        baseUrl:baseUrl,
        tagTypes : ['roles'],
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAllRoles: builder.query({
            query: ()=> "/api/v1/roles",
            providesTags :['roles']
        }),
        getAllPermissions: builder.query({
            query: ()=> "/api/v1/permissions",
            providesTags :['permissions']
        }),
        getSingleRoles: builder.query({
            query: (id)=> `/api/v1/roles/${id}`
        }),

        createRoles: builder.mutation({
            query: (name)=> {
                return {
                    url:`/api/v1/roles`,
                    method:'POST',
                    headers:{
                        "Accept":'application/json',
                    },
                    body:name,
                    formData : true
                }
            },
            invalidatesTags :['roles']
        }),
        updateRoles: builder.mutation({
            query: (info)=> {
                return {
                    url:`/api/v1/roles/${info.id}`,
                    method:'PUT',
                    headers:{
                        "Accept":'application/json',
                    },
                    body:info.name,
                    formData : true
                }
            },
            invalidatesTags :['roles']
        }),
        assignRoles: builder.mutation({
            query: (info)=> {
                return {
                    url:`/api/v1/admin/assign-user-role`,
                    method:'POST',
                    headers:{
                        "Accept":'application/json',
                    },
                    body:info,
                    formData : true
                }
            }
        }),
        deleteRoles: builder.mutation({
            query: (id)=> {
                return {
                    url:`/api/v1/roles/${id}`,
                    method:'DELETE',
                    headers:{
                        "Accept":'application/json',
                    },
                    formData : true
                }
            },
            invalidatesTags :['roles']
        }),
        revokeRoles: builder.mutation({
            query: (info)=> {
                return {
                    url:`/api/v1/admin/revoke-user-role`,
                    method:'DELETE',
                    headers:{
                        "Accept":'application/json',
                    },
                    formData : true,
                    body:info
                }
            }
        }),
    }),
});

export const aggregatorsApi = createApi({
    reducerPath:"aggregatorsApi",
    baseQuery:  fetchBaseQuery({
        baseUrl:baseUrl,
        tagTypes : ['aggregators'],
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAllAggregators: builder.query({
            query: ()=> "/api/v1/aggregators?status=pending",
            providesTags :['aggregators']
        }),
        createAggregators: builder.mutation({
            query: (todo)=> {
                return {
                    url:`/api/v1/aggregators`,
                    method:'POST',
                    headers:{
                        "Accept":'application/json',
                    },
                    body:todo.body,
                    formData : true
                }
            },
            invalidatesTags :['aggregators']
        }),
    }),
});

export const admintransactApi = createApi({
    reducerPath:"admintransactApi",
    baseQuery:  fetchBaseQuery({
        baseUrl:baseUrl,
        tagTypes : ['admintransact'],
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAllTransaction: builder.query({
            query: ()=> "/api/v1/transactions",
            providesTags :['admintransact']
        }),
        createTransaction: builder.mutation({
            query: (todo)=> {
                return {
                    url:`/api/v1/transactions`,
                    method:'POST',
                    headers:{
                        "Accept":'application/json',
                    },
                    body:todo.body,
                    formData : true
                }
            },
            invalidatesTags :['admintransact']
        }),
    }),
});




export const terminalsApi = createApi({
    reducerPath:"terminalsApi",
    baseQuery:  fetchBaseQuery({
        baseUrl:baseUrl,
        tagTypes : ['terminals'],
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        getAllTerminals: builder.query({
            query: ()=> "/api/v1/terminals",
            providesTags :['terminals']
        }),
        createTerminals: builder.mutation({
            query: (todo)=> {
                return {
                    url:`/api/v1/terminals`,
                    method:'POST',
                    headers:{
                        "Accept":'application/json',
                    },
                    body:todo.body,
                    formData : true
                }
            },
            invalidatesTags :['terminals']
        }),
        deleteTerminals: builder.mutation({
            query: (todo)=> {
                return {
                    url:`/api/v1/terminals/${todo.id}`,
                    method:'DELETE',
                    headers:{
                        "Accept":'application/json',
                    }
                }
            },
            invalidatesTags :['terminals']
        }),
        updateTerminals: builder.mutation({
            query: (todo)=> {
                return {
                    url:`/api/v1/terminals/${todo.id}`,
                    method:'PUT',
                    headers:{
                        "Accept":'application/json',
                    }
                }
            },
            invalidatesTags :['terminals']
        }),
    }),
});



export const {useGetAllBanksQuery} = banksApi;
export const {useGetCashOutQuery} = cashOutApi;
export const {useGetTicketQuery,useGetTicketDetailsQuery} = ticketApi;
export const {useGetDisputeQuery} = disputeApi;
export const {useGetChargeBackQuery} = chargeBackApi;
export const {useGetAgentCurrentMonthTargetQuery} = agentCurrentMonthTargetApi;
export const {useGetAgentStateCountQuery} = agentStateCountApi;
export const {useGetAgentMapQuery} = agentMapApi;
export const {useGetOverviewReportQuery} = overviewReportApi;
export const {useGetRevenueWalletQuery} = revenueWalletApi;
export const {useGetMainWalletQuery} = mainWalletApi;
// export const {useLogOutMutation} = logOutApi;
export const {useGetAllIdCardQuery} = idCardApi;
export const {useGetAllDashboardQuery} = dashboardApi;
export const {useGetAllAgentsQuery,useCreateAgentMutation} = agentApi;
export const {useGetAllTransactionQuery,useCreateTransactionMutation} = admintransactApi;
export const {useGetAllManagersQuery,useCreateManagersMutation} = managersApi;
export const {useGetAllAggregatorsQuery,useCreateAggregatorsMutation} = aggregatorsApi;
export const {useGetAllRolesQuery,useGetAllPermissionsQuery,useGetSingleRolesQuery,useRevokeRolesMutation,useCreateRolesMutation,useDeleteRolesMutation,useAssignRolesMutation,useUpdateRolesMutation} = rolesApi;
export const {useGetAllTerminalsQuery,useCreateTerminalsMutation,useDeleteTerminalsMutation,useUpdateTerminalsMutation} = terminalsApi;
export const {useGetAllBusinessTypeQuery,useGetAllBusinessShowQuery,useDeleteBussinessMutation,useCreateBussinessMutation} = businessTypeApi;