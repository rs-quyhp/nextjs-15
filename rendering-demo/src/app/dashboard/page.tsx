'use client';
import { useState } from 'react';

const DashboardPage = () => {
  const [name, setName] = useState('');
  console.log('Dashboard client component');
  return (
    <div>
      <h1>Dashboard</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}!</p>
    </div>
  );
};

export default DashboardPage;
