import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Scatter } from 'react-chartjs-2';

// Register the necessary chart components
ChartJS.register(
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement
);

// Function to generate distinct colors
const generateColor = (index) => {
  const hue = (index * 137.5) % 360; // 137.5 is the golden angle, which creates evenly spaced hues
  return `hsl(${hue}, 100%, 50%)`; // Using HSL to generate distinct, vibrant colors
};

// Function to create summary for each leiden (cluster) and its corresponding cell type
const generateSummary = (data, leidenColors) => {
  const summary = {};

  // Loop through the leiden values and summarize the information
  data.obs.leiden.forEach((leiden, index) => {
    if (!summary[leiden]) {
      summary[leiden] = {
        count: 0,
        cellType: data.obs.cell_type[parseInt(leiden, 10)],
        color: leidenColors[leiden],
      };
    }
    summary[leiden].count += 1;
  });

  return summary;
};

const AnnDataScatterPlot = ({ data }) => {
  // Step 1: Extract unique leiden values
  const uniqueLeiden = [...new Set(data.obs.leiden)];

  // Step 2: Generate a color map dynamically based on unique leiden values
  const leidenColors = uniqueLeiden.reduce((acc, leiden, index) => {
    acc[leiden] = generateColor(index); // Map each unique leiden to a color
    return acc;
  }, {});

  // Step 3: Map X_umap coordinates and assign colors based on leiden
  const points = data.obsm.X_umap.map((coords, index) => ({
    x: coords[0],
    y: coords[1],
    leiden: data.obs.leiden[index],
    obsIndex: data.obs_indices[index],
    cellType: data.obs.cell_type[parseInt(data.obs.leiden[index], 10)],
    backgroundColor:
      leidenColors[data.obs.leiden[index]] || 'rgba(0, 0, 0, 0.5)', // Default color if not in the map
  }));

  // Generate summary for each cluster
  const summary = generateSummary(data, leidenColors);

  // Chart.js data configuration
  const chartData = {
    datasets: [
      {
        label: 'UMAP Coordinates',
        data: points,
        backgroundColor: points.map((point) => point.backgroundColor), // Assign colors dynamically based on leiden
        borderColor: points.map((point) => point.backgroundColor), // Border color same as the background
        pointRadius: 6, // Set the point radius
      },
    ],
  };

  // Chart options configuration
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          // Custom tooltip displaying relevant data
          label: function (context) {
            const point = context.raw;
            return `Cluster: ${point.leiden} | Obs Index: ${point.obsIndex} | Cell Type: ${point.cellType}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
        title: {
          display: false, // Hide x-axis title
        },
      },
      y: {
        grid: {
          display: false, // Disable grid lines on the y-axis
        },
        title: {
          display: false, // Hide y-axis title
        },
      },
    },
    elements: {
      point: {
        radius: 6, // Set the point radius (size of the circles)
      },
    },
    layout: {
      padding: 0, // Remove any padding around the plot
    },
  };

  return (
    <div>
      {/* UMAP Scatter Plot */}
      <div style={{ width: '75%' }}>
        <h1>UMAP Scatter Plot</h1>
        <Scatter data={chartData} options={options} />
      </div>

      {/* Right Panel for Data Summary */}
      <div>
        <h2>Cluster Summary</h2>
        <ul className="grid grid-cols-4 gap-4">
          {Object.entries(summary).map(
            ([leiden, { count, cellType, color }]) => (
              <li key={leiden} style={{ marginBottom: '10px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: color,
                    padding: '10px',
                    borderRadius: '5px',
                    color: '#fff',
                  }}
                >
                  <span>{`Cluster ${leiden}`}</span>
                  <span>{`${count} Points`}</span>
                </div>
                <div style={{ marginTop: '5px', fontSize: '14px' }}>
                  Cell Type: {cellType}
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default AnnDataScatterPlot;