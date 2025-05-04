"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const LOCALES = {
  'nl-nl': "nl",
  'en-us': "en",
};

const Layout = ({ children, menu, lang }) => {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const getLocalizedUrl = (url, lang) => {
    if (!url) return `/${lang}/connect`;
    if (url.startsWith("/")) {
      return `/${lang}${url}`;
    }
    return url;
  };

  const isActiveMenuItem = (url) => {
    if (!url) return false;
    const localizedUrl = getLocalizedUrl(url, lang);
    return pathname === localizedUrl || pathname.startsWith(localizedUrl + "/");
  };

  return (
    <div className="container">
      <div className="menu">
        {Array.isArray(menu.link) &&
          menu.link.map((item, i) => {
            const menuItemIsActive = isActiveMenuItem(item.url);
            const menuItemClass = menuItemIsActive ? "active-menu-item" : "";
            return (
              <Link
                key={`link${i}`}
                href={getLocalizedUrl(item.url, lang)}
                className={menuItemClass}
              >
                {item.text}
              </Link>
            );
          })}

        <div className="language-switcher">
          {Object.entries(LOCALES).map(([locale, label], i) => {
            const isActive = lang === locale;
            const className = isActive ? "active-language" : "";
            const newPathname = pathname.replace(`/${lang}`, `/${locale}`);
            return (
              <span key={locale}>
                <Link className={className} href={newPathname}>
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

export default Layout;
