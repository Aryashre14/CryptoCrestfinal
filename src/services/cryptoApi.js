import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '347fd1e910mshb3fc6492c4b3fa2p166bb4jsn82a62c823dfc',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl: 'https://coinranking1.p.rapidapi.com'}),
    endpoints:(builder) => ({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        // getExchanges: builder.query({
        //     query: () => createRequest('/exchanges'),
        // }),
    })

});

export const {useGetCryptosQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery} = cryptoApi;