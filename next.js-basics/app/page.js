import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <nav>
        <Link href="/about">Go to About Page</Link>
      </nav>
    </main>
  );
}
