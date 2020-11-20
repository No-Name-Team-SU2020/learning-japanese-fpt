import React, { Fragment } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import SnackBar from '@material-ui/core/Snackbar';
import { useSelector } from 'react-redux';

const AlertList = () => {
  const { alertList } = useSelector(state => state.ui);
  return (
    <Fragment>
      {
        alertList.map(alert => <SnackBar open={true} key={alert.id} autoHideDuration={3000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <MuiAlert severity={alert.alertType}>
            {alert.message}
          </MuiAlert>
        </SnackBar>
        )
      }
    </Fragment>
  )
}

export default AlertList;
