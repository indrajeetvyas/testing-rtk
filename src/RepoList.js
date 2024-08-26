import React from "react";
import { getUserName } from "./features/github-actions";
import { useGetUserPublicReposQuery} from "./services/github";

export default function RepoList(props) {
    const userName = getUserName();
    const{data, error, isLoading} = useGetUserPublicReposQuery(userName);
    
    return (
        <div>
            {
                error ? (<>zzz no data found</>)
                : isLoading ? (
                    <>Loading data!!!</>
                )
                : (
                    data.length ?
                    (<ol>
                        {data.map((item) => <li>{item.name}</li>)}
                    </ol>)
                    : <>No repos found for {userName}</>
                )
            }
        </div>
    );

} 