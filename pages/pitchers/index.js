import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import Logo3 from "../../components/logo3";
import { useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const Pitchers = ({ page, navigation, events }) => {
  const [filter, setFilter] = useState(null);
  const today = new Date();

  // --- 1️⃣ Filter events: only include ones with a filter that contains "pitch" ---
  const pitchEvents = events.filter((event) =>
    event.data.filter?.some((f) =>
      f.filter?.toLowerCase().includes("pitch")
    )
  );

  // Parse event dates
  const itemsWithParsedDates = pitchEvents
    .map((item) => {
      const date = new Date(item.data.date);
      return {
        ...item,
        parsedDate: isNaN(date) ? null : date,
        isUpcoming: !isNaN(date) && date >= today,
      };
    })
    .filter((item) => item.parsedDate);

  // --- 2️⃣ Group filters (exclude those containing "pitch") ---
  const groupedFilters = {};

  pitchEvents.forEach((event) => {
    event.data.filter?.forEach((f) => {
      const group = f.group?.trim();
      const filterName = f.filter?.trim();

      // Skip if missing data or includes "pitch"
      if (!filterName || !group || filterName.toLowerCase().includes("pitch")) return;

      if (!groupedFilters[group]) groupedFilters[group] = new Set();
      groupedFilters[group].add(filterName);
    });
  });

  // Flatten all filters for filtering logic
  const allFilters = Object.values(groupedFilters)
    .flatMap((set) => [...set])
    .filter(Boolean);

  // --- 3️⃣ Filtering logic (no "Aankomend/Verleden" — only grouped filters) ---
  const filteredItems = itemsWithParsedDates.filter((item) => {
    if (!filter) return true;
    return item.data.filter?.some((f) => f.filter === filter);
  });

  // Sort by date ascending
  const sortedItems = filteredItems.sort((a, b) => a.parsedDate - b.parsedDate);

  // Date formatting helper
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
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
          {/* FILTER BUTTONS (Grouped only) */}
          <div className="filter-buttons">
            {Object.entries(groupedFilters).map(([group, filters]) => (
              <div key={group} className="filter-group">
                <details>
                  <summary>{group}</summary>
                  <div className="dropdown-content">
                    {[...filters].map((f) => (
                      <div
                        key={f}
                        onClick={() =>
                          setFilter((prev) => (prev === f ? null : f))
                        }
                        className={`${filter === f ? "active" : ""}`}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* EVENTS GRID */}
          <div className="events-grid">
            {sortedItems.map((item, index) => {
              const primaryFilter = item.data.filter?.[0];
              const backgroundColor = primaryFilter?.color || "";

              return (
                <a
                  className="event-item"
                  key={index}
                  href={`programma/${item.uid}`}
                  style={{
                    cursor: "pointer",
                    backgroundColor: backgroundColor,
                    color: backgroundColor
                      ? backgroundColor === "#3E2602" || backgroundColor === "#6C2537"
                        ? "#C4CED5"
                        : "#6C2537"
                      : "#C4CED5",
                  }}
                >
                  <div>
                    <h3>{item.data.title}</h3>
                    <h4>{item.data.subtitle}</h4>
                    <PrismicNextImage
                      field={
                        item.data.preview_image?.url
                          ? item.data.preview_image
                          : item.data.image
                      }
                    />
                    <div
                      className="date-time"
                      style={{
                        borderColor: backgroundColor
                          ? backgroundColor === "#3E2602" || backgroundColor === "#6C2537"
                            ? "#C4CED5"
                            : "#6C2537"
                          : "#C4CED5",
                      }}
                    >
                      <p>
                        {item.data.dates
                          ? item.data.dates
                          : formatDate(item.data.date)}
                      </p>
                      <p>{item.data.time}</p>
                    </div>
                    <PrismicRichText
                      field={
                        item.data.intro?.length
                          ? item.data.intro
                          : item.data.description
                      }
                    />
                  </div>
                  <div className="buttons">
                    <Link href={`programma/${item.uid}`}>
                      {page.lang === "en-us" ? "Read more" : "Lees meer"}
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

export default Pitchers;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const pageRes = await client.getByType("pitchers", { lang: locale });
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
