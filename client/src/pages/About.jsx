import { Link } from "react-router";
import { AdsComponent } from "../components/AdsComponent";
import { useSelector } from "react-redux";

export const About = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-sm shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            About This Project
          </h1>

          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              Welcome to my Online Auction System - a comprehensive web
              application that I've developed to facilitate online bidding and auctions.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Project Overview
              </h2>
              <p>
                This project represents my journey in mastering modern web development
                technologies. I built this auction system to demonstrate my skills in
                full-stack development and to create a practical solution for online
                bidding and marketplace functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                My Development Journey
              </h2>
              <p>
                As a passionate developer, I created this application to showcase my
                expertise in:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Full-stack web development using the MERN stack
                </li>
                <li>Real-time bidding system implementation</li>
                <li>Secure user authentication and authorization</li>
                <li>Database design and optimization</li>
                <li>Responsive UI/UX design principles</li>
              </ul>
            </section>

            {!user && <AdsComponent dataAdSlot="1002244889" />}

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features I've Implemented
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure user registration and authentication system</li>
                <li>Real-time auction bidding with live updates</li>
                <li>Comprehensive item listing and management</li>
                <li>User profile and dashboard functionality</li>
                <li>Mobile-responsive design for all devices</li>
                <li>Payment integration and transaction handling</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About the Developer
              </h2>
              <p>
                Hi, I'm <strong>Prateek Rajput</strong>, a passionate full-stack developer
                with expertise in modern web technologies. I created this online auction
                system to demonstrate my skills in building scalable, user-friendly web
                applications.
              </p>

              <div className="mt-4 p-4 bg-gray-50 rounded-sm">
                <p className="font-medium text-gray-900 mb-2">
                  My Technical Skills:
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Frontend:</span> React.js, JavaScript, HTML5, CSS3, Tailwind CSS
                  </p>
                  <p>
                    <span className="font-medium">Backend:</span> Node.js, Express.js, MongoDB, RESTful APIs
                  </p>
                  <p>
                    <span className="font-medium">Tools:</span> Git, VS Code, Postman, npm/yarn
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <p>
                I chose the MERN stack for this project because of its flexibility
                and modern development approach. The application features a React
                frontend with a Node.js/Express backend, utilizing MongoDB for
                data storage and real-time functionality for live bidding.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Project Goals
              </h2>
              <p>
                My primary goal was to create a fully functional auction platform
                that provides users with a seamless bidding experience. I focused
                on implementing best practices in web development, ensuring security,
                performance, and user experience are at the forefront of the design.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center">
                Interested in my work or have questions about the project?{" "}
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Get in touch
                </Link>{" "}
                - I'd love to discuss development opportunities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
