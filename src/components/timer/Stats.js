import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Dropdown } from '../common/Dropdown';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => 465),
      backgroundColor: 'rgb(59 130 246 / 0.5)'
    }
  ]
};

export const Stats = () => {
  const [activeFilter, setActiveFilter] = useState('Monthly');

  return (
        <div className='flex flex-col gap-8'>
            <div className='flex justify-between'>
                <h1>Hours Spent</h1>
                <Dropdown setActiveFilter={setActiveFilter} buttonText={activeFilter}/>
            </div>
            <Bar style={{ width: '40rem' }} options={options} data={data} />
        </div>
  );
};
