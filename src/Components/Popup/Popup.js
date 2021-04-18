import React from 'react'
import {
    Dialog,
    DialogTitle,
    Typography,
    Button,
    TextField,
    Paper,
    Divider
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './style';

const Popup = (props) => {

    const { title, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}

    return (

        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <Paper elevation={2} style={paperStyle}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }} className={classes.title}>
                        {title}
                    </Typography>
                    <Button
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </Button>
                </div>
            </DialogTitle>
                <Divider  />

           <form autoComplete="off" className={`${classes.root} ${classes.form}`}>
               <TextField name="creator" variant="outlined" label="Full Name" fullWidth
                          InputProps={{
                   className: classes.a
               }}
               />
               <TextField name="creator" variant="outlined" label="Email"      InputProps={{
                   className: classes.a
               }}
                          fullWidth />
               <TextField name="creator" variant="outlined" label="Password"
                          InputProps={{
                              className: classes.a
                          }}
                          fullWidth />

               <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit"

               fullWidth>Submit</Button>
               <Button variant="contained" color="secondary" size="small" className={classes.buttonSubmit} fullWidth>Clear</Button>

           </form>
            </Paper>
        </Dialog>
    )

}

export default Popup;
