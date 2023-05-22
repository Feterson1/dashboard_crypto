


import { Button } from '@mui/material';
import {styled} from '@mui/styles';
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';


const AppLoadingButton = styled(LoadingButton)({
    borderRadius: 4,
    backgroundColor: '#1900D5 !important',
    boxShadow: '0px 1px 7px #332a76 !important',
    padding: '10px 20px !important',
    maxWidth: 300,

    
})

export default AppLoadingButton;


// LoadingButton
//           size="small"
//           onClick={handleClick}
//           loading={loading}
//           variant="outlined"
//           disabled
//         >