"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const LOCALES = {
  'nl-nl': "nl",
  'en-us': "en",
};

const Layout = ({ children, menu, lang }) => {
  const pathname = usePathname() || "/"; // Ensure pathname is always defined

  // Function to adjust menu item URLs with the correct language
  const getLocalizedUrl = (url, lang) => {
    if (!url) return ""; // Prevent errors if url is undefined
    if (url.startsWith("/")) {
      return `/${lang}${url}`;
    }
    return url; // Keep external links as is
  };

  // Function to check if the menu item is the current page
  const isActiveMenuItem = (url) => {
    if (!url) return false; // Prevent errors if url is undefined
    const localizedUrl = getLocalizedUrl(url, lang);
    return pathname === localizedUrl || pathname.startsWith(localizedUrl + "/"); // Exact match or subpage
  };

  return (
    <div className="container">
      <div className="menu">
        {Array.isArray(menu.link) &&
          menu.link.map((item, i) => {
            if (!item || !item.url) return null; // Ensure item and item.url are defined
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
        
        {/* Language Switcher */}
        <div className="language-switcher">
          {Object.entries(LOCALES).map(([locale, label], i) => {
            const isActive = lang === locale;
            const className = isActive ? "active-language" : "";

            const newPathname = pathname ? pathname.replace(`/${lang}`, `/${locale}`) : "/";
            
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
