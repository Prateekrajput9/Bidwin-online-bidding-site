import React from "react";
import { Link } from "react-router";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-blue-900 pt-16 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center bg-white/95 rounded-xl p-10 shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Bid Smart,
            <span className="text-blue-600 block">Win More</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join our live auction platform where great deals meet smart bidders. 
            Buy, sell, and discover amazing items every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <button className="bg-blue-600 text-white px-10 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-slate-100 text-slate-700 border-2 border-slate-300 px-10 py-3 rounded-lg hover:bg-slate-200 transition-colors font-semibold text-lg">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
