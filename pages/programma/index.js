import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import Logo3 from "../../components/logo3";
import { useState } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const Programma = ({ page, navigation, events }) => {
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
    .filter((item) => item.parsedDate);

  const filteredItems = itemsWithParsedDates.filter((item) => {
    if (filter === "alles") return true;
    if (filter === "aankomend") return item.isUpcoming;
    if (filter === "afgelopen") return !item.isUpcoming;
    return true;
  });

  const sortedItems = filteredItems.sort(
    (a, b) => b.parsedDate - a.parsedDate
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // fallback if invalid
    return date.toLocaleDateString("nl-NL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="page">
      <Layout menu={navigation.results[0].data} page={page}>
        <Logo3 logo={page.data.title_svg} />
        <div className="events">
          {/* Filter buttons */}
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
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {sortedItems.map((item, index) => (
              <a
                className={`event-item ${item.isUpcoming ? "aankomend" : "afgelopen"}`}
                key={index}
                href={`programma/${item.uid}`}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <h3>{item.data.title}</h3>
                  <PrismicNextImage field={item.data.image} />
                  <div className="date-time">
                    <p>{item.data.dates ? item.data.dates : formatDate(item.data.date)}</p>
                    <p>{item.data.time}</p>
                  </div>
                  <PrismicRichText field={item.data.description} />
                </div>
                <div
                  className="buttons"
                >
                  {item.data.slices[0]?.primary.button.map((link) => (
                    <PrismicNextLink
                      key={link.key}
                      field={link}
                    >
                      {link.text}
                    </PrismicNextLink>
                  ))}
                </div>
              </a>
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

  const pageRes = await client.getByType("programma", { lang: locale });
  const events = await client.getAllByType("event", { lang: locale });
  const navigation = await client.getByType("navigation", { lang: locale });

  const page = pageRes.results[0];

  return {
    props: {
      page,
      navigation,
      events,
    },
  };
}
