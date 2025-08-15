import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import Logo3 from "../../components/logo3";
import { useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const Programma = ({ page, navigation, events}) => {
  console.log(events)
   const [filter, setFilter] = useState("aankomend");
  
    const today = new Date();
  
    const itemsWithParsedDates = events
      .map((item) => {
        const date = new Date(item.data.date);
        return {
          ...item,
          parsedDate: isNaN(date) ? null : date,
          isUpcoming: !isNaN(date) && date >= today,
        };
      })
      .filter((item) => item.parsedDate); // Remove invalid dates
  
    const filteredItems = itemsWithParsedDates.filter((item) => {
      if (filter === "alles") return true;
      if (filter === "aankomend") return item.isUpcoming;
      if (filter === "afgelopen") return !item.isUpcoming;
      return true;
    });
  
    const sortedItems = filteredItems.sort(
      (a, b) => b.parsedDate - a.parsedDate
    );
  return (
    <div className="page">
      <Layout menu={navigation.results[0].data} page={page}>
        <Logo3 logo={page.data.title_svg}/>
        <div className="events">
          <div className="filter-buttons">
          <div
            onClick={() => setFilter("aankomend")}
            className={`${filter === "aankomend" ? "active" : ""}`}
          >
            Aankomend
          </div>
          <div
            onClick={() => setFilter("afgelopen")}
            className={`${filter === "afgelopen" ? "active" : ""}`}
          >
            Verleden
          </div>
          <div
            onClick={() => setFilter("alles")}
            className={`${filter === "alles" ? "active" : ""}`}
          >
            Alles
          </div>
        </div>
        <div className="events-grid">
          {sortedItems.map((item, index) => (
            <div
              className={`event-item ${item.isUpcoming ? "aankomend" : "afgelopen"}`}
              key={index}
            >
              <h3>{item.data.title}</h3>
              <PrismicNextImage field={item.data.image} />
              <div className="date-time">
                <p>{item.data.date}</p>
                <p>{item.data.time}</p>
              </div>
              <PrismicRichText field={item.data.description} />
              {item.data.button?.uid && (
                <div className="button">
                  <Link href={`/${item.data.button.lang}/${item.data.button.uid}`}>
                    {item.data.button.text}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </Layout>
    </div>
  );
};

export default Programma;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const pageRes = await client.getByType('programma', { lang: locale });
  const events = await client.getAllByType('event', { lang: locale })
  const navigation = await client.getByType("navigation",  { lang: locale });

  const page = pageRes.results[0]


  return {
    props: {
     page,
     navigation,
     events
    },
  };
}
