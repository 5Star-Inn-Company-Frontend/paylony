import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "https://patrick.5starcompany.com.ng"
const user = JSON.parse(localStorage.getItem('paylonyToken'))

export const banksApi = createApi({
    reducerPath:"banksApi",
    baseQuery: fetchBaseQuery({baseUrl:baseUrl}),
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

export const logOutApi = createApi({
    reducerPath:"logOutApi",
    baseQuery: fetchBaseQuery({
        baseUrl:baseUrl,
        prepareHeaders: (headers, {getState})=>{
            headers.set( "Authorization",`Bearer Bearer ${user?.authorization?.token}`)
            return headers
        }
    }),
    endpoints:(builder)=>({
        logOut: builder.mutation({
            query: (todo)=> ({
                url:"/api/v1/auth/logout",
                method:'POST'
            }),
        }),
    })
})

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
export const {useLogOutMutation} = logOutApi;
export const {useGetAllIdCardQuery} = idCardApi;
export const {useGetAllAgentsQuery,useCreateAgentMutation} = agentApi;
export const {useGetAllManagersQuery,useCreateManagersMutation} = managersApi;
export const {useGetAllAggregatorsQuery,useCreateAggregatorsMutation} = aggregatorsApi;
export const {useGetAllTerminalsQuery,useCreateTerminalsMutation,useDeleteTerminalsMutation,useUpdateTerminalsMutation} = terminalsApi;
export const {useGetAllBusinessTypeQuery,useGetAllBusinessShowQuery,useDeleteBussinessMutation,useCreateBussinessMutation} = businessTypeApi;