import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

import { errorMiddleware } from './middleware'
import { ACCESS_TOKEN } from '@constants'


let Client;

const domain = window.location.host // 'tms2.digihcs.com'
const endPoint = `${process.env.END_POINT}`

const urn = process.env.GRAPHQL_URN || `${domain}/${endPoint}`

const httpLink = new HttpLink({
  uri: `${window.location.protocol}//${urn}`
})

const wsLink = new WebSocketLink({
  uri: `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${urn}`,
  options: {
    reconnect: true,
    connectionParams: () => ({
      'access-token': localStorage.getItem(`Bearer ${ACCESS_TOKEN}`) || ''
    })
  }
})

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'access-token': localStorage.getItem(`Bearer ${ACCESS_TOKEN}`) || ''
  }
}))

const linkSplit = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const link = ApolloLink.from([errorMiddleware, linkSplit])

Client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
})

export { Client }
