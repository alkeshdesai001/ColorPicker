import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const SnackbarComp = ({ openSnackbar, handleClose, messageInfo }) => (
  <div>
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={openSnackbar}
      autoHideDuration={2000}
      onClose={handleClose}
      message={messageInfo ? messageInfo : undefined}
      action={
        <React.Fragment>
          <IconButton aria-label='close' color='inherit' onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </React.Fragment>
      }
    />
  </div>
);

export default SnackbarComp;
