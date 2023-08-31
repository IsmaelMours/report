import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ModuleBarGraph = () => {
  const moduleData = [
    { module: 'P P', percentage: 80 },
    { module: 'P S', percentage: 60 },
    { module: 'SQL', percentage: 75 },
    { module: 'Stats', percentage: 70 },
    { module: 'Python', percentage: 90 },
    { module: 'P BI', percentage: 50 },
    { module: 'ST', percentage: 85 },
    { module: 'RPA', percentage: 65 },
  ];

  return (
    <div style={{ width: '1000px', height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={moduleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="module" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="percentage" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ModuleBarGraph;
