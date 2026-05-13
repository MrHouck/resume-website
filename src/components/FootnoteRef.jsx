"use client";

import { JETBRAINS_MONO } from "@/utils/constants";

export default function FootnoteRef({ n }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("bibliography:open", { detail: { n } }));
    setTimeout(() => {
      document.getElementById(`ref-${n}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
  };

  return (
    <a
      href={`#ref-${n}`}
      onClick={handleClick}
      className={`${JETBRAINS_MONO.className} text-[10px] text-(--accent) bg-(--accent)/10 hover:bg-(--accent)/20 px-1 rounded transition-colors cursor-pointer not-italic align-super leading-none`}
    >
      [{n}]
    </a>
  );
}
