    import React from 'react';
    import ReactApexChart from 'react-apexcharts';
    import Box from '@mui/material/Box';
    import Typography from '@mui/material/Typography';

    class ApexChart extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
            series: [85, 7, 13],
            options: {
            chart: {
            width: 380,
            type: 'donut',
            },
            dataLabels: {
            enabled: false,
            },
            responsive: [
            {
                breakpoint: 480,
                options: {
                chart: {
                    width: 200,
                },
                legend: {
                    show: false,
                },
                },
            },
            ],
            legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
            },
        },
        };
    }

    render() {
        return (
        <Box
            sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '25px',
            width: '80%',
            marginBottom: '60px',
            marginLeft:'50px',
            marginTop:'60px',
            }}
        >
            <Typography variant="h4" gutterBottom>
            People Towards Donation
            </Typography>

            {/* Donut Chart */}
            <div id="chart">
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                width={380}
            />
            </div>
        </Box>
        );
    }
    }

    export default ApexChart;
