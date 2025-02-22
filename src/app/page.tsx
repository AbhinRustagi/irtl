"use client";

import { IListItem, ListItem, tags } from "@/components";
import data from "@/data/list.json";
import { useMemo, useState } from "react";

export default function Home() {
  const all = data as IListItem[];
  const [tag, setTag] = useState<keyof typeof tags | "All">("All");
  const [items, setItems] = useState<IListItem[]>(all);

  useMemo(() => {
    if (tag === "All") {
      setItems(all);
      return;
    }
    // Filter the list based on the selected tag
    setItems(all.filter((item) => item.tag === tag));
  }, [all, tag]);

  return (
    <div>
      <div className="flex gap-4">
        <div
          className="border border-neutral-300 hover:bg-neutral-200/60 p-1 px-3 rounded-2xl text-sm flex items-center cursor-pointer gap-2"
          onClick={() => setTag("All")}
        >
          <div className={`rounded-full relative w-2 h-2 bg-indigo-400`}></div>{" "}
          All
        </div>
        {Object.entries(tags).map(([display, color]) => (
          <div
            key={`tag-${display}`}
            className="border border-neutral-300 hover:bg-neutral-200/60 p-1 px-3 rounded-2xl text-sm flex items-center cursor-pointer gap-2"
            onClick={() => setTag(display as keyof typeof tags)}
          >
            <div className={`rounded-full relative w-2 h-2 ${color}`}></div>{" "}
            {display}
          </div>
        ))}
      </div>
      <ul className="px-3 my-8">
        {items.map((item, index) => (
          <ListItem key={`item-${index + 1}`} {...item} />
        ))}
      </ul>
    </div>
  );
}
