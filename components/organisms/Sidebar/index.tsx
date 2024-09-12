import Image from 'next/image';
import MenuItem from '@/components/molecules/MenuItem';
import {
  DocumentIcon,
  CogIcon,
  ChartPieIcon,
  HomeIcon,
  DocumentMagnifyingGlassIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <aside className="w-72 bg-gray-900 h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="mb-20">
          <h2 className="text-white text-2xl">PATHRADE.</h2>
        </div>
        <nav>
          <MenuItem
            icon={HomeIcon}
            label="Dashboard"
            isActive
            href="/dashboard"
          />
          <MenuItem
            icon={DocumentMagnifyingGlassIcon}
            label="Line Sheets"
            href="line-sheets"
          />
          <MenuItem icon={DocumentIcon} label="Invoice" href="invoice" />
          <MenuItem
            icon={ChartPieIcon}
            label="Deposit Status"
            href="deposit-status"
          />
          <MenuItem icon={CogIcon} label="Inventories" href="inventories" />
          <MenuItem icon={CogIcon} label="Settings" href="settings" />
        </nav>
      </div>
      <div className="flex items-center mb-20 justify-between">
        <div className="flex gap-3">
          <Image
            src="/images/user-image.webp"
            className="h-10 w-19 rounded-full"
            alt="Olivia Rhye"
            width={40}
            height={40}
          />
          <div className="text-white">
            <p>Olivia Rhye</p>
            <p className="text-sm text-gray-400">Company name</p>
          </div>
        </div>
        <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-gray-400" />
      </div>
    </aside>
  );
};

export default Sidebar;
