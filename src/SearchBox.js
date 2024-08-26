import React from "react";
import { useNavigate } from "react-router-dom";
import { store } from "./store";
import PropTypes from "prop-types";

export default function SearchBox({search}) {
    const [userName, setUserName] = React.useState('');
    const navigate = useNavigate();
    const path = search === 'user' ? '/user-details' :'/repo-list';
    function submitAction(e) {
        e.preventDefault();
        console.log('submitting', userName);
        store.dispatch({type: 'GitHubActions/updateUserName', payload: {
            userName,
            search
        }})
        navigate(path);
    }

    return <>
            <form onSubmit={e => submitAction(e)}>
                <input type='text' placeholder="enter username" value={userName} onChange={(e) => {
                    console.log(e.target.value);
                    setUserName(e.target.value);
                }}/>
                <button >Submit</button>
            </form>

        </>;
}

SearchBox.propTypes = {
    search: PropTypes.string.isRequired
}