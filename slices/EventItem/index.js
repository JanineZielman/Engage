import { useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const EventItem = ({ slice }) => {
  const [filter, setFilter] = useState("alles");

  const today = new Date();

  const itemsWithParsedDates = slice.primary.item
    .map((item) => {
      const date = new Date(item.date);
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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="events"
    >
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
      <div className="events-grid">
        {sortedItems.map((item, index) => (
          <div
            className={`event-item ${item.isUpcoming ? "aankomend" : "afgelopen"}`}
            key={index}
          >
            <h3>{item.title}</h3>
            <PrismicNextImage field={item.image} />
            <div className="date-time">
              <p>{formatDate(item.date)}</p>
              <p>{item.time}</p>
            </div>
            <PrismicRichText field={item.description} />
            {item.button?.uid && (
              <div className="button">
                <Link href={`/${item.button.lang}/${item.button.uid}`}>
                  {item.button.text}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventItem;
