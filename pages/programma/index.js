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

  // --- 1️⃣ Exclude events where any filter includes "pitch" ---
  const nonPitchEvents = events.filter(
    (event) =>
      !event.data.filter?.some((f) =>
        f.filter?.toLowerCase().includes("pitch")
      )
  );

  // Parse event dates
  const itemsWithParsedDates = nonPitchEvents
    .map((item) => {
      const date = new Date(item.data.date);
      return {
        ...item,
        parsedDate: isNaN(date) ? null : date,
        isUpcoming: !isNaN(date) && date >= today,
      };
    })
    .filter((item) => item.parsedDate);

  // --- 2️⃣ GROUP FILTER LOGIC (only include filters with a group) ---
  const groupedFilters = {};

  nonPitchEvents.forEach((event) => {
    event.data.filter?.forEach((f) => {
      const group = f.group?.trim();
      const filterName = f.filter?.trim();
      if (!filterName || !group) return; // skip if no group or filter name
      if (filterName.toLowerCase().includes("pitch")) return; // skip "pitch" filters entirely

      if (!groupedFilters[group]) groupedFilters[group] = new Set();
      groupedFilters[group].add(filterName);
    });
  });

  // Flatten all filters for filtering logic
  const allFilters = Object.values(groupedFilters)
    .flatMap((set) => [...set])
    .filter(Boolean);

  // --- 3️⃣ Filtering logic ---
  const filteredItems = itemsWithParsedDates.filter((item) => {
    if (filter === "aankomend") return item.isUpcoming;
    if (filter === "afgelopen") return !item.isUpcoming;

    // Custom filters from Prismic
    if (allFilters.includes(filter)) {
      return item.data.filter?.some((f) => f.filter === filter);
    }

    return true;
  });

  // --- 4️⃣ Sort by date (newest first) ---
  const sortedItems = filteredItems.sort((a, b) => a.parsedDate - b.parsedDate);

  // --- 5️⃣ Split grouped filters into dropdowns vs singles ---
  const dropdownGroups = Object.entries(groupedFilters)
    .filter(([_, filters]) => filters.size > 1)
    .sort(([a], [b]) => a.localeCompare(b)); // sort dropdown groups alphabetically

  const singleGroups = Object.entries(groupedFilters)
    .filter(([_, filters]) => filters.size === 1)
    .sort(([a], [b]) => a.localeCompare(b)); // sort single filters alphabetically

  // --- 6️⃣ Date formatting helper ---
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    return date.toLocaleDateString("nl-NL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // --- 7️⃣ JSX ---
  return (
    <div className="page">
      <Layout menu={navigation.results[0].data} page={page}>
        <Logo3 logo={page.data} navigation={navigation} />

        <div className="events">
          {/* FILTER BUTTONS */}
          <div className="filter-buttons">
            {/* Static filters */}
            <div
              onClick={() => setFilter("aankomend")}
              className={`${filter === "aankomend" ? "active" : ""}`}
            >
              {page.lang === "nl-nl" ? "Aankomend" : "Upcoming"}
            </div>
            <div
              onClick={() => setFilter("afgelopen")}
              className={`${filter === "afgelopen" ? "active" : ""}`}
            >
              {page.lang === "nl-nl" ? "Verleden" : "Past"}
            </div>

            {/* Dropdown filters (alphabetical by group, and their items too) */}
            {dropdownGroups.map(([group, filters]) => {
              const filtersArray = [...filters].sort((a, b) =>
                a.localeCompare(b)
              );
              return (
                <div key={group} className="filter-group">
                  <details>
                    <summary>{group}</summary>
                    <div className="dropdown-content">
                      {filtersArray.map((f) => (
                        <div
                          key={f}
                          onClick={() => setFilter(f)}
                          className={`${filter === f ? "active" : ""}`}
                        >
                          {f}
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              );
            })}

            {/* Single filters (alphabetical after dropdowns) */}
            {singleGroups.map(([group, filters]) => {
              const f = [...filters][0];
              return (
                <div key={f} className="filter-group">
                  <div
                    onClick={() => setFilter(f)}
                    className={`${filter === f ? "active" : ""}`}
                  >
                    {f}
                  </div>
                </div>
              );
            })}
          </div>

          {/* EVENTS GRID */}
          <div className="events-grid">
            {sortedItems.map((item, index) => {
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
                    color: backgroundColor
                      ? backgroundColor === "#3E2602" ||
                        backgroundColor === "#6C2537"
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
                          ? backgroundColor === "#3E2602" ||
                            backgroundColor === "#6C2537"
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
