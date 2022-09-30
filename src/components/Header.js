import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const { title } = props;
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="left"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                <Stack spacing={1} direction="row">
                    <Button variant="outlined" size="small" onClick={() => navigate('/login')}>
                        Sign in
                    </Button>
                    <Button variant="outlined" size="small" onClick={() => navigate('/signup')}>
                        Sign up
                    </Button>
                </Stack>

            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {

    title: PropTypes.string.isRequired,
};

export default Header;