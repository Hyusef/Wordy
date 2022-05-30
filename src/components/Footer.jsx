import React from "react";

function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
        <div className="flex flex-wrap items-baseline lg:justify-center">
          <span className="mt-2 text-sm font-light text-gray-500">
            Copyright ©2021-2022
            <a
              className="mx-2 text-wickedblue hover:text-gray-500"
              rel="noopener noreferrer"
            >
              @Wordy
            </a>
            . Since 1983
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
