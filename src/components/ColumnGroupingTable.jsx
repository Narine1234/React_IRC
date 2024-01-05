import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'serialNo', label: 'Serial No', minWidth: 100, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
  { id: 'country', label: 'Country', minWidth: 100, align: 'center' },
  { id: 'amountDonated', label: 'Amount Donated', minWidth: 170, align: 'center' },
  { id: 'modeOfDonation', label: 'Mode of Donation', minWidth: 170, align: 'center' },
];

function createData(serialNo, name, country, amountDonated, currencySymbol, modeOfDonation) {
  const flag = getCountryFlagEmoji(country);
  return { serialNo, name, country, amountDonated, currencySymbol, modeOfDonation, flag };
}

const rows = [
    createData(1, 'John Doe', 'USA', 500, '$', 'Credit Card'),
    createData(2, 'Jane Smith', 'Canada', 300, '$', 'PayPal'),
    createData(3, 'Alice Johnson', 'UK', 200, '£', 'Bank Transfer'),
    createData(4, 'Bob Wilson', 'Australia', 150, 'A$', 'Credit Card'),
    createData(5, 'Eva Brown', 'Germany', 100, '€', 'PayPal'),
    createData(6, 'Michael White', 'France', 50, '€', 'Bank Transfer'),
    createData(7, 'Sophia Rodriguez', 'Spain', 75, '€', 'Credit Card'),
    createData(8, 'Daniel Kim', 'South Korea', 120, '₩', 'PayPal'),
    // Add more rows as needed
  ];
  

function getCountryFlagEmoji(countryCode) {
    // Use Unicode representation for emoji flags
    switch (countryCode) {
      case 'USA':
        return '🇺🇸';
      case 'Canada':
        return '🇨🇦';
      // Add more cases as needed
      default:
        return countryCode; // Fallback to the country code if emoji is not available
    }
  }
  

export default function DonationTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: '1200px',
        margin: 'auto',
        backgroundColor: '#fff', // Set the background color
        borderRadius: '15px', // Add rounded corners
        overflow: 'hidden', // Hide overflow content
        boxShadow: '0 0 10px ', // Add a subtle shadow
        marginTop:'25px',
        marginBottom:'100px',
      }}
    >
      <TableContainer sx={{ maxHeight: 440, overflow: 'auto' }}>
        <Table stickyHeader aria-label="sticky table" sx={{backgroundColor: '#f5f5f5'}}>
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.serialNo}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'country' ? (
                        <>
                          {row.flag} {row[column.id]}
                        </>
                      ) : column.id === 'amountDonated' ? (
                        <>
                          {row.currencySymbol} {row[column.id]}
                        </>
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
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
