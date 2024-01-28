import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = () => {
    const data = [
        { time: 'Monday', humidity: 60, temperature: 25, light: 30 },
        { time: 'Tuesday', humidity: 62, temperature: 26, light: 40 },
        { time: 'Wednesday', humidity: 58, temperature: 24, light: 50 },
        { time: 'Thursday', humidity: 65, temperature: 27, light: 70 },
        { time: 'Friday', humidity: 70, temperature: 28, light: 45 },
        { time: 'Saturday', humidity: 63, temperature: 25, light: 60 },
        { time: 'Sunday', humidity: 61, temperature: 26, light: 55 },
    ];

    return (
        <LineChart width={1050} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="time"
                type="category"
                label={{ value: 'Time', position: 'insideBottomRight', offset: -8 }}
                ticks={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
            />
            <YAxis dataKey="humidity" type="number" label={{ value: 'Value', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="red" name="Temperature" />
            <Line type="monotone" dataKey="humidity" stroke="blue" name="Humidity" />
            <Line type="monotone" dataKey="light" stroke="green" name="Light intensity" />
        </LineChart>
    );
};

export default Chart;
