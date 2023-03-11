import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 h-20 flex items-center justify-center">
      <div>
        <p className="text-lg text-white">
          © {new Date().getFullYear()} - Made by&nbsp;
          <a
            href="https://github.com/Lokeshsri11"
            target="_blank"
            className="hover:underline hover:underline-offset-4 hover:text-blue-300"
          >
            Lokesh Srivastava
          </a>
        </p>
      </div>
    </footer>
  );
}
