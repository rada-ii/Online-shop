import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });

  return (
    <footer className="bg-indigo-300 fixed bottom-0 py-3 w-full mt-16">
      <div className="container mx-auto flex justify-start">
        <p className="text-white sm:-ml-4 ml-4 text-sm">
          &copy; {currentMonth} {currentYear} By Rada Ivankovic
        </p>
      </div>
    </footer>
  );
};

export default Footer;