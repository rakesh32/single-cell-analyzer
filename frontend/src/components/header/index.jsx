import { SearchIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { headerRoutes } from '../../constants/nav';

const Header = () => {
  return (
    <div className="bg-[#0043a4] flex px-[8em] justify-around items-center text-white p-4">
      <span className="text-2xl font-bold">Logo</span>
      <div className="flex items-center gap-12 justify-between">
        <div className="flex gap-8 items-center font-bold">
          {headerRoutes.map((route, index) => (
            <Link to={route.href} key={index}>
              {route.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button className="flex items-center gap-2 bg-[#4b7bc0] rounded-md px-2 py-1">
          <SearchIcon width={18} height={18} />
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
