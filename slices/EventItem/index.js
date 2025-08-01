import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
/**
 * Component for "EventItem" Slices.
 */
const EventItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="events-grid"
    >
       {slice.primary.item.map((item) => (
      <div className="event-item">
        <h3>{item.title}</h3>
        <PrismicNextImage field={item.image} />
        <div className="date-time">
          <p>{item.date}</p>
          <p>{item.time}</p>
        </div>
        <PrismicRichText field={item.description} />
        <div className="button">
          <Link
            href={`/${item.button.lang}/${item.button.uid}`}
          >
            {item.button.text}
          </Link>
        </div>
      </div>
    ))}
    </section>
  );
};

export default EventItem;
