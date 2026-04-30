import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
 const Stats = ({ timeline }) => {
 const chartData = [
{
   name: 'Call',
  value: timeline.filter(t => t.type === 'Call').length, 
  color: '#064E3B' },
   { name: 'Text', value: timeline.filter(t => t.type === 'Text').length,
   color: '#8B5CF6' },
    { name: 'Video', value: timeline.filter(t => t.type === 'Video').length, color: '#22C55E' },
   ];
   return (
     <div> 
      <div className="max-w-5xl mx-auto px-6 py-16">
     <h1 className="text-4xl font-bold text-[#1E293B] mb-10">Friendship Analytics</h1> 
    <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm min-h-[500px]"> 
    <h3 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-8">By Interaction Type</h3>
   <div className="h-[350px] w-full">
   <ResponsiveContainer width="100%" height="100%"> 
  <PieChart>
 <Pie data={chartData} innerRadius={80} outerRadius={120} paddingAngle={5} dataKey="value">
   {chartData.map((entry, index) => <Cell key={index} fill={entry.color} 
   />
   )
   }
   </Pie>
 <Tooltip />
 <Legend verticalAlign="bottom" height={36}/>
    </PieChart>
 </ResponsiveContainer>
  </div> 
  </div> 
  </div> 
  </div>
   ); 
  };
  
  export default Stats;