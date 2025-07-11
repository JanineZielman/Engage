import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

const LOCALES = {
  "nl-nl": "nl",
  "en-us": "en",
};

export const Layout = ({ menu, children, page }) => {
  const [pathname, setPathname] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef();

  useEffect(() => {
    setPathname(window.location.pathname);

    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <Head>
        <title>{`${page.data.meta_title}`}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${page.data.meta_title}`} />
        <meta property="og:image" content={page.data.meta_image.url} />
        <meta name="description" content={page.data.meta_description} />
        <meta property="og:description" content={page.data.meta_description} />
      </Head>

      <div className="container">
        {/* Header + Hamburger (mobile only) */}
        <div className="menu-header">
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="menu">
          {Array.isArray(menu.link) &&
            menu.link.map((item, i) => {
              const isActive = item.uid === pathname.split("/").reverse()[0];
              return (
                <Link
                  key={`link${i}`}
                  href={`/${item.lang}/${item.slug === "homepage" ? "" : item.uid}`}
                  className={isActive ? "active-menu-item" : ""}
                >
                  {item.text}
                </Link>
              );
            })}

          <div className="language-switcher">
            {Object.entries(LOCALES).map(([locale, label], i) => {
              const isActive = menu.link[0].lang === locale;
              const newPathname = pathname.replace(menu.link[0].lang, locale);
              return (
                <span key={locale}>
                  <a
                    className={isActive ? "active-language" : ""}
                    href={newPathname === "/" ? `/${locale}` : `${newPathname}`}
                  >
                    {label}
                  </a>
                  {i === 0 && <span>/ </span>}
                </span>
              );
            })}
          </div>
        </div>

        {/* Mobile Overlay */}
        {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}

        {/* Mobile Drawer Menu */}
        <div
          ref={drawerRef}
          className={`mobile-drawer ${mobileOpen ? "open" : ""}`}
        >
          <div className="drawer-header">
            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          <nav className="drawer-links">
            {Array.isArray(menu.link) &&
              menu.link.map((item, i) => {
                const isActive = item.uid === pathname.split("/").reverse()[0];
                return (
                  <Link
                    key={`mobile-link${i}`}
                    href={`/${item.lang}/${item.slug === "homepage" ? "" : item.uid}`}
                    className={isActive ? "active-menu-item" : ""}
                    onClick={handleLinkClick}
                  >
                    {item.text.toLowerCase()}
                  </Link>
                );
              })}
          </nav>

          <div className="drawer-language-switcher">
            {Object.entries(LOCALES).map(([locale, label], i) => {
              const isActive = menu.link[0].lang === locale;
              const newPathname = pathname.replace(menu.link[0].lang, locale);
              return (
                <span key={locale}>
                  <a
                    className={isActive ? "active-language" : ""}
                    href={newPathname === "/" ? `/${locale}` : `${newPathname}`}
                    onClick={handleLinkClick}
                  >
                    {label}
                  </a>
                  {i === 0 && <span>/ </span>}
                </span>
              );
            })}
          </div>
        </div>

        {/* Page Content */}
        <div className="page-content">{children}</div>
      </div>
    </>
  );
};
