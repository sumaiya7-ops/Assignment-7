import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFounder = () => {
    return (
        <div>
             <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-extrabold text-[#064E3B] tracking-widest">404</h1>
      <div className="bg-[#8B5CF6] px-2 text-sm rounded rotate-12 absolute text-white font-bold">
        Page Not Found
      </div>
      
      <div className="mt-8">
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Oops! This page is missing.
        </p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The link you followed might be broken, or the page may have been removed. 
          Don't worry, you can always head back home.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-[#064E3B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#043327] transition shadow-lg"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
        </div>
    );
};

export default NotFounder;