import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {  EditorState, RichUtils} from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import moment from 'moment/moment';
import React, { useState } from 'react';

export const Calendar = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

return <Box>
    <Typography component='h1' variant='h2'>Today</Typography>
    <Typography component='h3' variant='h4'>{moment().format("ll")}</Typography>

    {/* <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand}/>
     */}
     <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={setEditorState}
/>
</Box>
}