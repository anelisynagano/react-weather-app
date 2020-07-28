import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";


const Loading = ({ isLoading }) => {
    return (
    <PacmanLoader loading={isLoading} size={25} color={'orange'} />
    )
}

export default Loading;