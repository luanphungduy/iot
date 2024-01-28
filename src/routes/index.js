import Dashboard from '~/pages/Dashboard';
import DataSensor from '~/pages/DataSensor';
import History from '~/pages/History';
import Profile from '~/pages/Profile';

export const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/data-sensor', element: <DataSensor /> },
    { path: '/history', element: <History /> },
    { path: '/my-profile', element: <Profile /> },
];
