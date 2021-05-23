import {
    ApolloClient,
    HttpLink,
    split,
    ApolloLink,
    InMemoryCache
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from '@apollo/client/utilities';
import { errorMiddleware } from '@tools'
import { ACCESS_TOKEN } from '@constants'


const domain = window.location.host // 'tms2.digihcs.com'
const endPoint = `${process.env.END_POINT}`

const urn = process.env.REACT_APP_GRAPHQL_URN || `${domain}/${endPoint}`

const httpLink = new HttpLink({
    uri: `${window.location.protocol}//${urn}`,
})

const wsLink = new WebSocketLink({
    uri: `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${urn}`,
    options: {
        reconnect: true,
        connectionParams: () => ({
            'access-token': localStorage.getItem(`${ACCESS_TOKEN}`) || ''
        })
    }
})

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        'access-token':
            localStorage.getItem(ACCESS_TOKEN) || ''
    }
}))

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);


const link = ApolloLink.from([errorMiddleware, splitLink])

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache({
        // addTypename: false
    })
})

export { client }
