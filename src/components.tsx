import Link from "next/link";

export interface IListItem {
  title: string;
  url: string;
  tag: keyof typeof tags;
}

export const tags = {
  Article: "bg-red-600",
  Video: "bg-teal-500",
  Other: "bg-violet-500",
};

export function Header() {
  return (
    <header className="mb-12">
      <h1 className="font-semibold text-lg mb-1">
        I&apos;ll read that (again) later
      </h1>
      <p>
        A project by{" "}
        <Link
          href="https://www.abhin.dev/"
          className="underline text-green-600"
        >
          Abhin Rustagi
        </Link>
        . This is a collection of articles & resources I bookmarked that I find
        insightful, fascinating, or just plain useful. Inspired by{" "}
        <Link
          href="https://www.fuckiwishiknewth.at/"
          className="underline text-blue-500"
          target="_blank"
          rel="noopener"
        >
          F*ck I wish I knew that
        </Link>
        .
      </p>
    </header>
  );
}

export function ListItem(props: IListItem) {
  const color = tags[props.tag];

  return (
    <li className="mb-3">
      <Link
        href={props.url}
        className="flex items-center gap-2 hover:underline"
        target="_blank"
        rel="noopener"
      >
        <div className={`rounded-full relative w-2 h-2 mr-2 ${color}`}></div>
        {props.title}
      </Link>
    </li>
  );
}
