import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">
            © {currentYear} Trinadh Samudrala. All rights reserved.
          </p>
          {/* <div className="mt-4">
            <a
              href="#"
              className="text-sm hover:text-white transition-colors mx-2"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-sm hover:text-white transition-colors mx-2"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;