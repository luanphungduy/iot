import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';

function Layout({ children }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabStyle = {
        padding: 0,
    };

    const navLinkStyle = {
        display: 'inline-block',
        padding: '20px 24px',
        minWidth: '140px',
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'color 0.3s, background-color 0.3s', // Thêm hiệu ứng chuyển động
    };

    const activeNavLinkStyle = {
        color: 'rgb(25, 118, 210)', // Màu chữ khi active
    };

    return (
        <div>
            <Box sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: '4px', position: 'fixed' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab
                        style={tabStyle}
                        label={
                            <NavLink style={{ ...navLinkStyle, ...(value === 0 && activeNavLinkStyle) }} to="/">
                                DASHBOARD
                            </NavLink>
                        }
                    />
                    <Tab
                        style={tabStyle}
                        label={
                            <NavLink
                                style={{ ...navLinkStyle, ...(value === 1 && activeNavLinkStyle) }}
                                to="/data-sensor"
                            >
                                DATA SENSOR
                            </NavLink>
                        }
                    />
                    <Tab
                        style={tabStyle}
                        label={
                            <NavLink style={{ ...navLinkStyle, ...(value === 2 && activeNavLinkStyle) }} to="/history">
                                HISTORY
                            </NavLink>
                        }
                    />
                    <Tab
                        style={tabStyle}
                        label={
                            <NavLink
                                style={{ ...navLinkStyle, ...(value === 3 && activeNavLinkStyle) }}
                                to="/my-profile"
                            >
                                MY PROFILE
                            </NavLink>
                        }
                    />
                </Tabs>
            </Box>
            <div style={{ position: 'absolute', top: '60px', width: '100%' }}>{children}</div>
        </div>
    );
}

export default Layout;
