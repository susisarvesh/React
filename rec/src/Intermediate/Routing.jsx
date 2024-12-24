import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const AboutBlog = () => {
  return (
    <div className="bg-black m-2 text-white text-[40px] flex items-center justify-between p-4 rounded-lg shadow-lg">
      About Sarvs.Blog
    </div>
  );
};
const Home = () => {
  return (
    <div className="bg-black m-2 text-white text-[40px] flex items-center justify-between p-4 rounded-lg shadow-lg">
      Home Sarvs.Blog
    </div>
  );
};
const Blog = () => {
  return (
    <div className="bg-black m-2 text-white text-[40px] flex items-center justify-between p-4 rounded-lg shadow-lg">
      Blog Sarvs.Blog
    </div>
  );
};

function Routing() {
  return (
      <div>
                  <h3 className="text-[30px] font-thin mb-10 mt-10">Routing: [React-router-dom]</h3>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <header className="bg-blue-600 text-white py-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h3 className="text-[30px] font-bold">Sarvs.Blog</h3>
            <nav>
              <ul className="flex gap-6 text-[20px] font-mono">
                <li>
                  <Link
                    to="/"
                    className="hover:underline hover:text-yellow-300 transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:underline hover:text-yellow-300 transition duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:underline hover:text-yellow-300 transition duration-200"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/about" element={<AboutBlog />} />
           
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white py-4 mt-auto">
          <div className="container mx-auto text-center">
            &copy; 2024 Sarvs.Blog. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Routing;
