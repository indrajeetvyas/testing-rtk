import React from "react";
import { getUserName } from "../features/github-actions";
import { useGetUserDetailsQuery } from "../services/github";

export default function UserDetails() {
    const userName = getUserName();
    const { data, error, isLoading } = useGetUserDetailsQuery(userName);


    return <>
        UserDetails for {userName} here!<br />
        {
            isLoading ? <>Loading....</>
                : error ? <>User does not exist </>
                    : <ul>
                        {(Object.entries(data).map(([key, value]) =>
                            <li key={key}>{key}: {value}</li>
                        ))}
                    </ul>
        }
    </>
}