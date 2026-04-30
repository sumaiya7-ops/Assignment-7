import React from 'react';
import { useParams } from 'react-router-dom';
import { Phone, MessageSquare, Video, Clock, Archive, Trash2, Edit2 } from 'lucide-react';
import call from '../../B13-A7-keen-keeper/assets/call.png';
import text from '../../B13-A7-keen-keeper/assets/text.png';
import video from '../../B13-A7-keen-keeper/assets/video.png';
const FriendDetails = ({ friends, onCheckIn }) => {
    const { id } = useParams();
  const friend = friends.find(f => f.id === parseInt(id));

  if (!friend) return <div className="text-center py-20 text-2xl font-bold">Friend Not Found</div>;

  const handleAction = (type) => {
    onCheckIn({
      id: Date.now(),
      friendName: friend.name,
      type: type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
  };
    return (
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">      
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white p-10 rounded-2xl border text-center">
            <img src={friend.picture} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-50" alt={friend.name} />
            <h2 className="text-3xl font-bold text-gray-800">{friend.name}</h2>
            <div className="flex justify-center gap-2 my-4 flex-wrap">
              <span className={`px-3 py-1 text-white text-[10px] font-bold rounded-full uppercase ${friend.status === 'overdue' ? 'bg-red-500' : friend.status === 'almost due' ? 'bg-orange-400' : 'bg-green-500'}`}>
                {friend.status}
              </span>
              {friend.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-green-100 text-[#064E3B] text-[10px] font-bold rounded-full uppercase">{tag}</span>
              ))}
            </div>
            <p className="text-gray-400 italic text-sm mb-4">"{friend.bio}"</p>
            <p className="text-xs text-gray-300 font-medium">Preferred: {friend.email}</p>
          </div>
          <div className="bg-white rounded-2xl border overflow-hidden">
            <button className="w-full p-4 border-b flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50">
           <Clock size={16}/> Snooze 2 Weeks</button>
            <button className="w-full p-4 border-b flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50">
            <Archive size={16}/> Archive</button>
            <button className="w-full p-4 flex items-center justify-center gap-2 text-red-500 font-bold hover:bg-red-50">
            <Trash2 size={16}/> Delete</button>
          </div>
        </div>     
        <div className="md:col-span-8 space-y-6">       
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border text-center">
              <h4 className="text-3xl font-bold text-gray-800">{friend.days_since_contact}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border text-center">
              <h4 className="text-3xl font-bold text-gray-800">{friend.goal}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border text-center">
              <h4 className="text-xl font-bold text-gray-800 pt-2">{friend.next_due_date}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-2">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-700">Relationship Goal</h4>
              <p className="text-sm text-gray-400">Connect every 
              <span className="font-bold text-gray-900">{friend.goal} days</span>
              </p>
            </div>
            <button className="px-4 py-2 border rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-2">
            <Edit2 size={14}/> Edit</button>
          </div>   
          <div className="bg-white p-10 rounded-2xl border">
            <h4 className="font-bold text-gray-700 mb-8">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-6">            
               <button onClick={() => handleAction('Call')} className="flex flex-col items-center gap-4 p-8 border rounded-2xl hover:border-[#064E3B] hover:bg-green-50 transition group">
                <img src={call} alt="Call" className="w-8 h-8 object-contain" />
                <span className="text-sm font-bold text-gray-500 group-hover:text-[#064E3B]">Call</span>
              </button>        
              <button onClick={() => handleAction('Text')} className="flex flex-col items-center gap-4 p-8 border rounded-2xl hover:border-[#064E3B] hover:bg-green-50 transition group">
                <img src={text} alt="Text" className="w-8 h-8 object-contain" />
                <span className="text-sm font-bold text-gray-500 group-hover:text-[#064E3B]">Text</span>
              </button>      
              <button onClick={() => handleAction('Video')} className="flex flex-col items-center gap-4 p-8 border rounded-2xl hover:border-[#064E3B] hover:bg-green-50 transition group">
                <img src={video} alt="Video" className="w-8 h-8 object-contain" />
                <span className="text-sm font-bold text-gray-500 group-hover:text-[#064E3B]">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default FriendDetails;