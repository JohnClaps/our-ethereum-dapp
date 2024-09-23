// import React from 'react';
// import { Row, Col, Card } from 'react-bootstrap';
// import { Pie, Line } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
// // import { text } from '@fortawesome/fontawesome-svg-core';

// // Register chart components
// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

// function AnalyticsScreen() {
//   // Data for Pie Chart
//   const pieData = {
//     labels: ['Gold', 'Copper', 'Coal', 'Others'],
//     datasets: [
//       {
//         label: 'Mineral Distribution',
//         data: [30, 50, 70, 40],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//       },
//     ],
//   };

//   // Data for Line Chart
//   const lineData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         label: 'Royalties Over Time',
//         data: [120000, 150000, 100000, 200000, 180000, 250000],
//         fill: false,
//         backgroundColor: '#36A2EB',
//         borderColor: '#36A2EB',
//       },
//     ],
//   };

//   return (
//     <div>
//       <Card>
//       <h2 className="text-center mb-4">Analytics Overview</h2>
//       </Card>
//       <br/>

//       <Row className="mt-4">
//         {/* Total Mining Transactions */}
//         <Col md={4}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Total Mining Transactions</Card.Title>
//               <Card.Text>
//                 <h3>1,234</h3>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         {/* Pie Chart for Mineral Distribution */}
//         <Col md={4}>
//           <Card className="mb-4">
//             <Card.Body>

//               <Card.Title>Mineral Distribution</Card.Title>
//               <Pie data={pieData} />
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Line Chart for Royalties */}
//         <Col md={4}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Royalties Over Time</Card.Title>
//               <Line data={lineData} />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row>
//         {/* Additional Card for Sales */}
//         <Col md={6}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Sales</Card.Title>
//               <Card.Text>
//                 <h3>500 Units</h3>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Placeholder for future graphs */}
//         <Col md={6}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Future Graph</Card.Title>
//               <Card.Text>Graph data will be displayed here.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default AnalyticsScreen;
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title } from 'chart.js';

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title);

function AnalyticsScreen() {
  // Data for Pie Chart
  const pieData = {
    labels: ['Gold', 'Copper', 'Coal', 'Others'],
    datasets: [
      {
        label: 'Mineral Distribution',
        data: [30, 50, 70, 40],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  // Data for Line Chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Royalties Over Time',
        data: [120000, 150000, 100000, 200000, 180000, 250000],
        fill: false,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
      },
    ],
  };

  // Data for Bar Chart (Sales Performance)
  const barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales Performance',
        data: [300, 400, 350, 500],
        backgroundColor: '#FFCE56',
      },
    ],
  };

  // Data for Trend Analysis
  const trendData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'Yearly Growth',
        data: [120, 150, 200],
        backgroundColor: '#4BC0C0',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <Card>
        <h2 className="text-center mb-4">Analytics Overview</h2>
      </Card>
      <br/>

      <Row className="mt-4">
        {/* Total Mining Transactions */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Total Mining Transactions</Card.Title>
              <Card.Text>
                <h3>1,234</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Pie Chart for Mineral Distribution */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Mineral Distribution</Card.Title>
              <Pie data={pieData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Line Chart for Royalties */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Royalties Over Time</Card.Title>
              <Line data={lineData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Additional Card for Sales */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Sales</Card.Title>
              <Card.Text>
                <h3>500 Units</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Bar Chart for Sales Performance */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Sales Performance by Quarter</Card.Title>
              <Bar data={barData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Trend Analysis Card */}
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Yearly Growth Trend</Card.Title>
              <Line data={trendData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AnalyticsScreen;
