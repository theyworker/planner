import { Typography } from '@mui/material';
import React from 'react';

const Title = ({text}) => <Typography variant="h2" component="div" gutterBottom textAlign="center" sx={{color: '#FFF', }} fontFamily={"'Josefin Sans', sans-serif"}>
{text}
</Typography>

export default Title;