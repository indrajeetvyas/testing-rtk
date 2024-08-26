import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const GITHUB_BASE_URL = 'https://api.github.com/';

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: GITHUB_BASE_URL }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: (username) => `users/${username}`
        }),
        getUserPublicRepos: builder.query({
            query: (username) => `users/${username}/repos?sort=updated_at&order=desc`
        })
    })
});
export const { useGetUserDetailsQuery, useGetUserPublicReposQuery } = githubApi