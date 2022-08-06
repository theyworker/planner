import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const List = () => {
    const {list } = useParams()
    return <Box>{list}</Box>
}

export default List