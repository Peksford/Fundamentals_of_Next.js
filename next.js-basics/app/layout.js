import NavigationBar from './components/Navigation';
import '@/styles/globals.css';

export const metadata = {
  title: 'My App',
  description: 'Styled with global CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
