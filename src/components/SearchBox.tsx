import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../store";
import PropTypes from "prop-types";

interface SearchProps {
    search: string;
}

const SearchBox: FC<SearchProps> = ({ search }) => {
    const [userName, setUserName] = React.useState<string>('');
    const navigate = useNavigate();
    const path: string = search === 'user' ? '/user-details' : '/repo-list';
    function submitAction(e) {
        e.preventDefault();
        store.dispatch({
            type: 'GitHubActions/updateUserName', payload: {
                userName,
                search
            }
        })
        navigate(path);
    }

    return (
        <form onSubmit={e => submitAction(e)}>
            <input type='text' placeholder="enter username" value={userName} onChange={(e) => {
                console.log(e.target.value);
                setUserName(e.target.value);
            }} />
            <button >Submit</button>
        </form>
    )
}
export default SearchBox;