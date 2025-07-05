import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              BidMaster
            </h3>
            <p className="text-gray-200 text-sm">
              Your trusted auction marketplace since 2025
            </p>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/about"
              className="text-gray-200 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/legal"
              className="text-gray-200 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
            >
              Legal
            </Link>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-200 text-sm">
            © 2025 BidMaster. All rights reserved. | Built with ❤️ by Prateek Rajput
          </p>
        </div>
      </div>
    </footer>
  );
};
