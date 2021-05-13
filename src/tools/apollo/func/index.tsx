import { gql, useQuery } from "@apollo/client";
import { client } from "../index"

export const queryData = async (inputQuery: any, variables = {}, hasGql = true, fetchPolicy: any = 'no-cache') => {
    const query = hasGql ? inputQuery : gql`${inputQuery}`
    const data = client.query({
        query,
        variables,
        fetchPolicy
    })
    return data;
}

export const mutateData = async (inputQuery: any, variables = {}, hasGql = true) => {
    const mutation = hasGql ? inputQuery : gql`${inputQuery}`
    const data = await client.mutate({
        mutation,
        variables
    })
    return data
}