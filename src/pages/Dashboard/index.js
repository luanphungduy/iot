import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Switch } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import fan from '~/assets/images/fan-blades-icon.png';
import Chart from '~/components/Chart';

function Dashboard() {
    const [onLight, setOnLight] = useState(false);
    const [onFan, setOnFan] = useState(false);

    const handleSetOnLight = () => {
        // console.log('Bật đèn');
        setOnLight(!onLight);
    };

    const handleSetOnFan = () => {
        // console.log('Bật quạt');
        setOnFan(!onFan);
    };

    return (
        <Grid container spacing={2} style={{ padding: 16 }}>
            {/* Hàng thứ nhất */}
            <Grid item xs={4}>
                <Grid
                    container
                    style={{
                        background: 'linear-gradient(to top right, #ffcdd2, #f44336)',
                        padding: 20,
                        height: 236,
                    }}
                >
                    <Grid item xs={12} style={{ height: '10%' }}>
                        <Grid container>
                            <Grid item xs={11} style={{ fontSize: '20px', fontWeight: '500' }}>
                                TEMPERATURE
                            </Grid>
                            <Grid item xs={1}>
                                <AcUnitIcon style={{ fontSize: '32px', color: '#b3e5fc' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            height: '90%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px',
                        }}
                    >
                        <strong>13°C</strong>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid
                    container
                    style={{
                        background: 'linear-gradient(to top right, #bbdefb, #2196f3)',
                        padding: 20,
                        height: 236,
                    }}
                >
                    <Grid item xs={12} style={{ height: '10%' }}>
                        <Grid container>
                            <Grid item xs={11} style={{ fontSize: '20px', fontWeight: '500' }}>
                                HUMIDITY
                            </Grid>
                            <Grid item xs={1}>
                                <CloudIcon style={{ fontSize: '32px', color: '#eceff1' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            height: '90%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px',
                        }}
                    >
                        <strong>60 %</strong>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid
                    container
                    style={{
                        background: 'linear-gradient(to top right, #fff9c4, #ffeb3b)',
                        padding: 20,
                        height: 236,
                    }}
                >
                    <Grid item xs={12} style={{ height: '10%' }}>
                        <Grid container>
                            <Grid item xs={11} style={{ fontSize: '20px', fontWeight: '500' }}>
                                LIGHT INTENSITY
                            </Grid>
                            <Grid item xs={1}>
                                <WbSunnyIcon style={{ fontSize: '32px', color: '#c62828' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            height: '90%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px',
                        }}
                    >
                        <strong>150 lx</strong>
                    </Grid>
                </Grid>
            </Grid>

            {/* Hàng thứ hai */}
            <Grid item xs={8}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#efebe9',
                        padding: 20,
                        height: 596,
                    }}
                >
                    <Chart />
                </div>
            </Grid>
            <Grid item xs={4}>
                <Grid container spacing={2}>
                    {/* Ô chia thành 2 hàng */}
                    <Grid item xs={12}>
                        <Grid
                            container
                            style={{
                                backgroundColor: '#cfd8dc',
                                padding: 20,
                                height: 290,
                            }}
                        >
                            <Grid item xs={12} style={{ height: '80%' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '32px',
                                    }}
                                >
                                    {onLight ? (
                                        <EmojiObjectsIcon style={{ color: '#ffff00', fontSize: 100 }} />
                                    ) : (
                                        <EmojiObjectsOutlinedIcon style={{ fontSize: 100 }} />
                                    )}
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{ height: '20%' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Switch onClick={handleSetOnLight} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid
                            container
                            style={{
                                backgroundColor: '#dcedc8',
                                padding: 20,
                                height: 290,
                            }}
                        >
                            <Grid item xs={12} style={{ height: '80%' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '32px',
                                    }}
                                >
                                    <img
                                        alt="fan"
                                        src={fan}
                                        style={{ width: 80, height: 80, transition: 'transfrom .25s' }}
                                        className={`${onFan && 'active-fan'}`}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{ height: '20%' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Switch onClick={handleSetOnFan} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Dashboard;
