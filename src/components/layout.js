"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const LOCALES = {
  'nl-nl': "nl",
  'en-us': "en",
};

const Layout = ({ children, menu, lang }) => {
  const pathname = usePathname(); // Get the current pathname

  // Function to adjust menu item URLs with the correct language
  const getLocalizedUrl = (url, lang) => {
    if (url.startsWith("/")) {
      return `/${lang}${url}`;
    }
    return url; // Keep external links as is
  };

  return (
    <div className="container">
      <div className="menu">
        {menu.link.map((item, i) => (
          <Link key={`link${i}`} href={getLocalizedUrl(item.url, lang)}>
            {item.text}
          </Link>
        ))}
        {/* Language Switcher */}
        <div className="language-switcher">
          {Object.entries(LOCALES).map(([locale, label], i) => {
            // Check if the current locale is the active language
            const isActive = lang === locale;
            
            // Apply an active class if it's the current language
            const className = isActive ? "active-language" : "";

            const newPathname = pathname.replace(`/${lang}`, `/${locale}`);
            return (
              <span key={locale}>
                <Link className={className} href={newPathname}>
                  {label}
                </Link> {i == 0 &&<span>/ </span>}
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
