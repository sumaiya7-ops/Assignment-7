import React from 'react';
import { UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home = ({ friends, loading, timeline }) => {
    if (loading) return
    <div className="h-96 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#064E3B]">
      </div>
      </div>;

    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#1E293B] mb-4">Friends to keep close in your life</h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <button className="bg-[#064E3B] text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#043327] transition">
          <UserPlus size={20}/> Add a Friend
        </button>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {[
          { label: 'Total Friends', val: friends.length },
          { label: 'On Track', val: friends.filter(f => f.status === 'on-track').length },
          { label: 'Need Attention', val: friends.filter(f => f.status === 'overdue').length },
          { label: 'Interactions This Month', val: timeline.length }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border text-center shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800">{stat.val}</h2>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {friends.map(friend => (
          <Link to={`/friend/${friend.id}`} key={friend.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition text-center group">
            <img src={friend.picture} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="font-bold text-lg text-gray-800">{friend.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{friend.days_since_contact} days ago</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {friend.tags.map(tag => <span key={tag} className="px-3 py-1 bg-green-50 text-[#064E3B] text-[10px] font-bold rounded-full uppercase tracking-wider">{tag}</span>)}
            </div>
            <div className={`py-1 px-4 rounded-full text-[10px] font-extrabold uppercase inline-block ${
              friend.status === 'overdue' ? 'bg-red-500 text-white' : 
              friend.status === 'almost due' ? 'bg-orange-400 text-white' : 'bg-green-500 text-white'
            }`}>
              {friend.status}
            </div>
          </Link>
        ))}
      </div>
    </div>
   </div>
    );
};

export default Home;