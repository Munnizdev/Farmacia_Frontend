import { UserCircleIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center drop-shadow-md bg-slate-50 px-10 py-4">
      <input
        type="text"
        placeholder="Encontre oque deseja"
        className="w-[400px] px-4 py-2 placeholder:text-gray-400 border border-gray-300 rounded-full text-sm text-emerald-950 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
      />

      <div className="ml-6">
        <Link to="/" className="text-gray-700 hover:text-[#1d4ed8]">
          <UserCircleIcon size={36} weight="thin" />
        </Link>
      </div>
    </header>
  );
}