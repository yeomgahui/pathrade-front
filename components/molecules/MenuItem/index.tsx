'use client';
import { cloneElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface MenuItemProps {
  icon: JSX.Element;
  label: string;
  href: string;
}

export default function MenuItem({ icon, label, href }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`flex mb-3 items-center p-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-700 hover:rounded-md ${
          isActive ? 'bg-gray-700 rounded-md' : ''
        }`}
      >
        {cloneElement(icon, { className: 'h-5 w-5 text-gray-400' })}
        <span className="ml-3 text-white">{label}</span>
      </div>
    </Link>
  );
}
