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
  });

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

      <div className={`container ${pathname.split("/").reverse()[0]}`}>
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
          {Array.isArray(menu.menu) &&
            menu.menu.map((item, i) => {
              const isActive = item.link.uid === pathname.split("/").reverse()[0];
              return (
                <div className="menu-item"  key={`link${i}`}>
                  <Link
                    href={`/${item.link.lang}/${item.link.slug === "homepage" ? "" : item.link.uid}`}
                    className={isActive ? "active-menu-item" : ""}
                  >
                    {item.link.text}
                  </Link>
                  <div className="sub">
                    {item.sublink.map((sub, i) => {
                      return(
                        <Link
                        key={`link2${i}`}
                        href={`/${sub.lang}/${sub.slug === "homepage" ? "" : sub.uid}`}
                        className={isActive ? "active-menu-item" : ""}
                      >
                        {sub.text}
                      </Link>
                      )
                    })}
                  </div>
                </div>
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
              menu.menu.map((item, i) => {
                const isActive = item.link.uid === pathname.split("/").reverse()[0];
                return (
                  <div key={`mobile-link${i}`}>
                  <Link
                    href={`/${item.link.lang}/${item.slug === "homepage" ? "" : item.link.uid}`}
                    className={isActive ? "active-menu-item" : ""}
                    onClick={handleLinkClick}
                  >
                    {item.link.text.toLowerCase()}
                  </Link>
                  <div className="sub">
                    {item.sublink.map((sub, i) => {
                      return(
                        <Link
                        key={`sub${i}`}
                        href={`/${sub.lang}/${sub.slug === "homepage" ? "" : sub.uid}`}
                        className={isActive ? "active-menu-item" : ""}
                      >
                        {sub.text}
                      </Link>
                      )
                    })}
                  </div>
                  </div>
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
        <div className={`page-content`}>{children}</div>
      </div>
    </>
  );
};
