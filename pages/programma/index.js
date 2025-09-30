import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import Logo3 from "../../components/logo3";
import { useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const Programma = ({ page, navigation, events }) => {
  const [filter, setFilter] = useState("aankomend");

  const today = new Date();

  // Parse event dates
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

  // Collect unique custom filters from Prismic
  // const allFilters = Array.from(
  //   new Set(
  //     events.flatMap((event) =>
  //       event.data.filter?.map((f) => f.filter) || []
  //     )
  //   )
  // );

  // Filtering logic
  const filteredItems = itemsWithParsedDates.filter((item) => {
    if (filter === "aankomend") return item.isUpcoming;
    if (filter === "afgelopen") return !item.isUpcoming;

    // Custom filters from Prismic
    // if (allFilters.includes(filter)) {
    //   return item.data.filter?.some((f) => f.filter === filter);
    // }

    return true;
  });

  // Sort by date (newest first)
  const sortedItems = filteredItems.sort(
    (a, b) => a.parsedDate - b.parsedDate
  );

  // Date formatting helper
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
        <Logo3 logo={page.data} navigation={navigation} />
        <div className="events">
          {/* Filter buttons */}
          <div className="filter-buttons">
            {/* Static filters */}
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

            {/* Dynamic filters from Prismic */}
            {/* {allFilters.map((f) => (
              <div
                key={f}
                onClick={() => setFilter(f)}
                className={`${filter === f ? "active" : ""}`}
              >
                {f}
              </div>
            ))} */}
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {sortedItems.map((item, index) => {
              // Grab the first filter with a color for styling
              const primaryFilter = item.data.filter?.[0];
              const backgroundColor = primaryFilter?.color || "";

              return (
                <a
                  className={`event-item ${
                    item.isUpcoming ? "aankomend" : "afgelopen"
                  }`}
                  key={index}
                  href={`programma/${item.uid}`}
                  style={{
                    cursor: "pointer",
                    backgroundColor: backgroundColor,
                    color: backgroundColor ? '#6C2537' : '#C4CED5'
                  }}
                >
                  <div>
                    <h3>{item.data.title}</h3>
                    <PrismicNextImage field={item.data.preview_image?.url ? item.data.preview_image : item.data.image} />
                    <div className="date-time" style={{borderColor: backgroundColor ? '#6C2537' : '#C4CED5'}}>
                      <p>
                        {item.data.dates
                          ? item.data.dates
                          : formatDate(item.data.date)}
                      </p>
                      <p>{item.data.time}</p>
                    </div>
                    <PrismicRichText field={item.data.intro?.length ? item.data.intro : item.data.description} />
                  </div>
                  <div className="buttons">
                    <Link href={`programma/${item.uid}`}>
                      {page.lang == 'en-us' ? 'Read more' : 'Lees meer'}
                    </Link>
                  </div>
                </a>
              );
            })}
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
