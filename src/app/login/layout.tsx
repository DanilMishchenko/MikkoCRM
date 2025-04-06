import { ReduxProvider } from '@/redux/provider';
// import './globals.css';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
