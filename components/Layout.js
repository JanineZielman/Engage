import { useEffect, useState } from "react";
import Link from "next/link";

const LOCALES = {
  'nl-nl': "nl",
  'en-us': "en",
};

export const Layout = ({
  menu,
  children
}) => {
    const [pathname, setPathname] = useState("/");
  
    useEffect(() => {
      setPathname(window.location.pathname);
    });

    console.log(menu)

  return (
    <div className="container">
      <div className="menu">
        {Array.isArray(menu.link) &&
          menu.link.map((item, i) => {
            const isActive = item.uid == pathname.split('/').reverse()[0]
            return (
              <Link
                key={`link${i}`}
                href={`/${item.lang}/${item.slug == 'homepage' ? '/' : item.uid}`}
                className={isActive ? "active-menu-item" : ""}
              >
                {item.text}
              </Link>
            );
          })}

        <div className="language-switcher">
          {Object.entries(LOCALES).map(([locale, label], i) => {
            const isActive = menu.link[0].lang === locale;
            const newPathname = pathname.replace(`/${menu.link[0].lang}`, `/${locale}`);
            return (
              <span key={locale}>
                <Link className={isActive ? "active-language" : ""} href={newPathname}>
                  {label}
                </Link>{" "}
                {i === 0 && <span>/ </span>}
              </span>
            );
          })}
        </div>
      </div>
      {children}
    </div>
  );
};
