'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';
import { useState } from 'react';

const navLinks = [
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/register' },
  { label: 'Forgot Password', href: '/forgot-password' },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [input, setInput] = useState('');

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href) && link.href !== '/';

        return (
          <Link
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
