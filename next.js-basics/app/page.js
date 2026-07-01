import Link from 'next/link';
// import styles from './home/home.module.css';
import Title from './components/Title.js';
import Button from './components/Button.js';

export default function Page() {
  return (
    <main>
      {/* <h1 className={titleStyle.title}>Home Page</h1> */}
      <Title />
      <Button />
      <p>This is my first next.js page</p>
      <nav>
        <Link href="/about">Go to About Page</Link>
      </nav>
    </main>
  );
}
