import { Typography } from '@mui/material';
import React from 'react';

const SubTitle = ({text}) => <Typography variant="h4" component="div" gutterBottom textAlign="center" sx={{color: '#FFF', }} fontFamily={"'Josefin Sans', sans-serif"}>
{text}
</Typography>

export default SubTitle;