import Link from 'next/link';
// import styles from './home/home.module.css';
import Title from './components/Title.js';
import Button from './components/Button.js';
import Card from './components/Card.js';
import AppLayout from './components/AppLayout.js';

export default function Page() {
  return (
    <AppLayout>
      <Title />
      <Button />
      <Card highlighted={true} />
      <p>This is my first next.js page</p>
      <nav>
        <Link href="/about">Go to About Page</Link>
      </nav>
    </AppLayout>
  );
}
