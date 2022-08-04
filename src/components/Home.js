import { Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Today = ()=> {
return <Box>   <Typography variant="h2" component="div" gutterBottom textAlign="center">
Today</Typography>
<Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>

      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="outlined">Add</Button>
</Box>
}

export default Today;