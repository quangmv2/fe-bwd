import { onError } from 'apollo-link-error'

const errorMiddleware = onError(({ graphQLErrors, networkError, response, operation }) => {
    console.log(operation);

    if (graphQLErrors) {
        if (response) {
            // eslint-disable-next-line prefer-destructuring
            response["errors"] = graphQLErrors[0]
        }
        // console.log(graphQLErrors)
        if (graphQLErrors[0].code === 'UNAUTHENTICATED') {
            const loginUrl = process.env.APP_SERVICE
                ? `/${process.env.APP_SERVICE}/login`
                : '/login'

            if (localStorage.getItem('access-token')) {
                localStorage.clear()
                window.location.href = loginUrl
            }
        }
    }
    if (networkError) {
        console.error(`[Network Error]: ${networkError}`)
    }
})

export { errorMiddleware }
