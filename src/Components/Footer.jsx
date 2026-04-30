import React from 'react';
import logo from '../../B13-A7-keen-keeper/assets/logo-xl.png';
import facebook from '../../B13-A7-keen-keeper/assets/facebook.png';
import instagram from '../../B13-A7-keen-keeper/assets/instagram.png';
import twitter from '../../B13-A7-keen-keeper/assets/twitter.png';
const Footer = () => {
    return (
        <div>
              <footer className="bg-[#1A3A32] text-white pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
                    <img src={logo} alt="KeenKeeper Logo" className="h-12 w-auto" />
                </div>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <div className="mb-16">
           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">Social Links</p>
           <div className="flex justify-center gap-4">
             <a href="#" className="hover:opacity-80 transition">
                            <img src={facebook} alt="Facebook" className="w-8 h-8 object-contain" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition">
                            <img src={instagram} alt="Instagram" className="w-8 h-8 object-contain" />
                        </a>
                        <a href="#" className="hover:opacity-80 transition">
                            <img src={twitter} alt="Twitter" className="w-8 h-8 object-contain" />
                        </a>
                        
           </div>
        </div>
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-wider">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;
