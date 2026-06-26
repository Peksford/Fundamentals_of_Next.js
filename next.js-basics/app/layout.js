import NavigationBar from './components/Navigation';
import './globals.css';

export const metadata = {
  title: 'Next.js Course',
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
