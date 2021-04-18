import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './style';
import logo from '../../images/shopping-cart.png';
import {Button} from "@material-ui/core";
import Popup from "../Popup/Popup";



const Header =() => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [openPopup, setOpenPopup] = React.useState(false);

    const isMenuOpen = Boolean(anchorEl);



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };




    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

        </Menu>
    );



    return (
        <div className={classes.grow } >
            <AppBar position="static"  style={{ background: '#2E3B55' }}>
                <Toolbar >
                    <img src={logo} className={classes.logo} alt="Logo"/>

                    <Typography className={classes.title} variant="h6" noWrap>
                        CeylonHub
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase className={classes.inputBase}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button className={classes.buttonStyle} variant="h6" onClick={setOpenPopup}>Join </Button>
                        <Popup
                            title="Join CeylonHub"
                            openPopup={openPopup}
                            setOpenPopup={setOpenPopup}
                        >
                        </Popup>

                        <Button className={classes.buttonStyle} variant="h6" >Login</Button>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>



                    </div>

                </Toolbar>
            </AppBar>

            {renderMenu}
        </div>
    )
}
export default Header;

