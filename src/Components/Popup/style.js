import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
        height: '500px'
    },
    dialogTitle: {
        paddingRight: '0px'
    },
    title:{
        color:'black',
        fontFamily:'Varela Round',
        fontWeight:'bold'
    },
   textForm:{
       color:'black',
       fontFamily:'Varela Round',
       fontWeight:'bold'
   },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        marginTop: 5,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontFamily:'Varela Round'
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
        marginTop:10,
        fontFamily:'Varela Round'

    },
    a:{
        fontFamily:'Varela Round',

    }
}))

export default useStyles;
