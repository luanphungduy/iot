import { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
} from '@mui/material';

// CSS classes
const tableHeadCell = {
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#2196f3',
    color: '#fff',
};

const tableCell = {
    border: '1px solid #ddd',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: '10px',
    fontSize: '16px',
    color: '#333',
};

const evenRow = {
    backgroundColor: '#e3f2fd',
};

const oddRow = {
    backgroundColor: '#ffffff',
};

const generateRandomData = (id) => {
    return {
        id: id,
        temperature: Math.floor(Math.random() * 151) - 50,
        humidity: Math.floor(Math.random() * 61) + 20,
        light: Math.floor(Math.random() * 401) + 100,
        created_at: new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long' }),
        id_sensor: Math.floor(Math.random() * 3) + 1,
    };
};

function DataSensor() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const newData = [];
        for (let id = 1; id <= 100; id++) {
            newData.push({ ...generateRandomData(id) });
        }
        setRows(newData);
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '90%', overflow: 'hidden', margin: '20px auto' }}>
            <TableContainer sx={{ maxHeight: 750 }}>
                <Table stickyHeader aria-label="sticky table" sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={tableHeadCell}>ID</TableCell>
                            <TableCell sx={tableHeadCell}>Temperature (°C)</TableCell>
                            <TableCell sx={tableHeadCell}>Humidity (%)</TableCell>
                            <TableCell sx={tableHeadCell}>Light (lx)</TableCell>
                            <TableCell sx={tableHeadCell}>Created At</TableCell>
                            <TableCell sx={tableHeadCell}>ID Sensor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow key={row.id} sx={index % 2 === 0 ? evenRow : oddRow}>
                                <TableCell sx={tableCell}>{row.id}</TableCell>
                                <TableCell sx={tableCell}>{Math.round(row.temperature)}</TableCell>
                                <TableCell sx={tableCell}>{row.humidity}</TableCell>
                                <TableCell sx={tableCell}>{row.light}</TableCell>
                                <TableCell sx={tableCell}>{row.created_at}</TableCell>
                                <TableCell sx={tableCell}>{row.id_sensor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, 50, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default DataSensor;
