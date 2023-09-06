import React from "react";

const Header: React.FC<{}> = () => {
  return (
    <>
      <div className="bg-slate-300 w-full h-14 p-4 flex justify-between items-center">
        <div>
          <i className="fa-solid fa-bars cursor-pointer"></i>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-4 relative">
            <i className="fa-regular fa-bell cursor-pointer text-xl"></i>
            <span
              style={{ top: 10 }}
              className="absolute right-0 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-xs"
            >
              4
            </span>
          </div>
          <i className="fa-brands fa-facebook-messenger cursor-pointer"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
