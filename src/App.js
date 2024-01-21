import React, { useState } from "react";
import { Box, Grid, Switch } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import fan from "./images/fan-blades-icon.png";
import "./App.css";

function App() {
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  const gridBorder = {
    border: "1px solid black",
    padding: 1,
  };

  const weatherIcon = {
    marginLeft: 4,
    width: 40,
    height: 40
  }

  const [temp, setTemp] = useState(20);
  const [humb, setHumb] = useState(60);
  const [lux, setLux] = useState(45);
  const [onLight, setOnLight] = useState(false);
  const [onFan, setOnFan] = useState(false);

  const handleSetOnLight = () => {
    setOnLight(!onLight);
  }

  const handleSetOnFan = () => {
    setOnFan(!onFan);
  }

  return (
    <Box width='60%' margin='200px auto'>
      <Grid container>
        <Grid item xs={12} display="flex" height={100}>
          <Grid item xs={4} sx={[gridBorder, center]}>Nhiệt độ: &nbsp; &nbsp; &nbsp;<strong>{temp} °C</strong> <AcUnitIcon sx={weatherIcon} /></Grid>
          <Grid item xs={4} sx={[gridBorder, center]}>Độ ẩm: &nbsp; &nbsp; &nbsp;<strong>{humb} %</strong> <CloudIcon sx={weatherIcon} /></Grid>
          <Grid item xs={4} sx={[gridBorder, center]}>Ánh sáng: &nbsp; &nbsp; &nbsp;<strong>{lux} lux</strong> <WbSunnyIcon sx={weatherIcon} /></Grid>
        </Grid>
        <Grid item xs={12} display="flex">
          <Grid item xs={8} sx={[gridBorder, center]}>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={302}
            />
          </Grid>
          <Grid item xs={4}>
            <Grid item xs={12} sx={[gridBorder, center]} display="flex" height={160}>
              <Grid item xs={6}><Switch onClick={handleSetOnFan} /></Grid>
              <Grid item xs={6}><img alt="fan" src={fan} className={`fan ${onFan ? 'active-fan' : ''}`} /></Grid>
            </Grid>
            <Grid item xs={12} sx={[gridBorder, center]} display="flex" height={160}>
              <Grid item xs={6}><Switch onClick={handleSetOnLight} /></Grid>
              <Grid item xs={6}>
                {onLight ? (
                  <EmojiObjectsIcon sx={{ color: 'rgb(237, 241, 0)', fontSize: 40 }} />
                ) : (
                  <EmojiObjectsOutlinedIcon sx={{ fontSize: 40 }} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
