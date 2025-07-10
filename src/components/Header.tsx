import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav>
        <Link href="/projects">Projects</Link>
        <a href="/about">About</a>
      </nav>
    </div>
  );
}
