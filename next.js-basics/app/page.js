import Link from 'next/link';
// import styles from './home/home.module.css';
import Title from './components/Title.js';
import Button from './components/Button.js';
import Card from './components/Card.js';
import AppLayout from './components/AppLayout.js';
import Alert from './components/Alert.js';
import ProfileCard from './components/ProfileCard.js';

export default function Page() {
  return (
    <AppLayout>
      <Alert></Alert>
      <Title />
      <Button />
      <Card highlighted={true} />
      <p>This is my first next.js page</p>
      <ProfileCard name="John Lennon" instrument="Guitar" band="The Beatles" />
      <nav>
        <Link href="/about">Go to About Page</Link>
      </nav>
    </AppLayout>
  );
}
