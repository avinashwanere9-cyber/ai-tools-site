"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

export default function UseCaseNavbar({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -56% 0px",
        threshold: [0.12, 0.28, 0.45],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="uc-navbar">
      <div className="uc-navbar__inner">
        <Link className="uc-navbar__brand" href="/">
          AI Tools
        </Link>

        <div className="uc-navbar__links">
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <a
                aria-current={isActive ? "true" : undefined}
                className={`uc-navbar__link ${isActive ? "is-active" : ""}`}
                href={`#${item.id}`}
                key={item.id}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
