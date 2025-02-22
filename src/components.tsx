import Link from "next/link";

export function Header() {
  return (
    <header className="mb-12">
      <h1 className="font-semibold text-lg mb-1">
        I&apos;ll read that (again) later
      </h1>
      <p>
        A project by{" "}
        <Link href="https://www.abhin.dev/" className="underline text-blue-500">
          Abhin Rustagi
        </Link>
        . This is a collection of articles & resources I bookmarked that I find
        insightful, fascinating, or just plain useful.
      </p>
    </header>
  );
}
