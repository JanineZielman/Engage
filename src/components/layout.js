'use client'
import Link from "next/link";

const Layout = ({children, menu}) => {
  console.log(menu)
  
  return (
    <div className="container">
      <div className="menu">
        {menu.link.map((item, i) => {
          return(
            <Link key={`link${i}`} href={item.url}>{item.text}</Link>
          )
        })}
      </div>
      {children}
    </div>
  );
};

export default Layout;
