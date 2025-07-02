import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

const LOCALES = {
  'nl-nl': "nl",
  'en-us': "en",
};

export const Layout = ({
  menu,
  children,
  page
}) => {
    const [pathname, setPathname] = useState("/");
  
    useEffect(() => {
      setPathname(window.location.pathname);
    });


  return (
    <>
    <Head>
        <title>
          {`${page.data.meta_title}`}
        </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${page.data.meta_title}`} />
        <meta property="og:image" content={page.data.meta_image.url} />
      <meta name="description" content={page.data.meta_description} />
      <meta property="og:description" content={page.data.meta_description} />
    </Head>
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
    </>
  );
};
