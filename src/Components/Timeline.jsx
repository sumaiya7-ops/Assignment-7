import React from 'react';
import { useState } from 'react';
import { Phone, MessageSquare, Video, ChevronDown } from 'lucide-react';
import call from '../../B13-A7-keen-keeper/assets/call.png';
import text from '../../B13-A7-keen-keeper/assets/text.png';
import video from '../../B13-A7-keen-keeper/assets/video.png';
const Timeline = ({ timeline }) => {
    const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? timeline : timeline.filter(t => t.type === filter);
   const icons = {
    Call: call,
    Text: text,
    Video: video
   };
    return (
        <div>
            <div className="max-w-4xl mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Timeline</h1>
      
      <div className="relative w-64 mb-10">
        <select 
          className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-5 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter Timeline (All)</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
        <ChevronDown className="absolute right-4 top-4 text-gray-400" size={16}/>
      </div>

      <div className="space-y-4">
        {filtered.length > 0 ? filtered.map(item => (
          <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-50 shadow-sm flex items-center gap-5">
            <div className="p-4 bg-gray-50 rounded-xl">
             <img 
             src={icons[item.type]}
             alt={item.type}
             className='w-5 h-5 object-contain'
             />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">{item.title}</h4>
              <p className="text-xs text-gray-400 font-medium">{item.date}</p>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 text-gray-400 font-medium">No interactions found</div>
        )}
      </div>
    </div>
        </div>
    );
};

export default Timeline;