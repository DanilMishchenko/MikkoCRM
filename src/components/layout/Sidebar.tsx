'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWindowWidth } from '@/hooks/useWindowWidth';

import {
  Home,
  Users,
  Boxes,
  Package,
  ShoppingCart,
  Tags,
  Truck,
  Inbox,
  Factory,
  Wallet,
  Target,
  MessageSquare,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const links = [
  { href: '/', label: 'Головна', icon: Home },
  { href: '/employees', label: 'Співробітники', icon: Users },
  { href: '/warehouse', label: 'Склад', icon: Boxes },
  { href: '/orders', label: 'Замовлення', icon: ShoppingCart },
  { href: '/products', label: 'Товари', icon: Package },
  { href: '/categories', label: 'Категорії', icon: Tags },
  { href: '/suppliers', label: 'Постачання', icon: Truck },
  { href: '/receiving', label: 'Приход', icon: Inbox },
  { href: '/production', label: 'Цех', icon: Factory },
  { href: '/finances', label: 'Фінанси', icon: Wallet },
  { href: '/goals', label: 'Цілі', icon: Target },
  { href: '/messages', label: 'Повідомлення', icon: MessageSquare },
];

interface SidebarProps {
  isVisible: boolean;
  closeSidebar: () => void;
}

export const Sidebar = ({ isVisible, closeSidebar }: SidebarProps) => {
  const pathname = usePathname();
  const windowWidth = useWindowWidth();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (windowWidth < 640) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [windowWidth]);

  return (
    <aside
      className={`relative bg-white shrink-0 max-sm:w-full 
        ${!isVisible && ' max-sm:hidden'} 
        ${isExpanded && 'sm:w-1/4 sm:max-w-45 md:max-w-50 lg:w-2/9 lg:max-w-55'}`}
    >
      <nav className="flex flex-col max-sm:items-center gap-1 p-3">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            onClick={() => window.innerWidth < 640 && closeSidebar()}
            className={`flex items-center  gap-2 ${isExpanded ? 'p-2' : 'justify-center h-10 w-10'}
             rounded sm:text-xs md:text-sm lg:text-base font-medium ${
               pathname === href
                 ? 'bg-success text-primary'
                 : 'hover:bg-blue-100 text-gray-medium'
             }`}
          >
            <Icon className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 h-6" />
            {isExpanded && <span>{label}</span>}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="sm:block hidden absolute bottom-2 right-[-12px] p-1 bg-white rounded-full shadow-md cursor-pointer"
      >
        {/* || window.innerWidth < 640 222*/}
        {isExpanded ? <ChevronsLeft size={12} /> : <ChevronsRight size={12} />}
      </button>
    </aside>
  );
};
