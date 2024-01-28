import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '~/App.scss';
import { routes } from '~/routes';
import Layout from './layouts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>}></Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
