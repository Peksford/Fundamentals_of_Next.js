import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>About this course</h1>
      <p>This is a next js course</p>

      <nav>
        <Link href="/">Back to Home</Link>
      </nav>
    </main>
  );
}
