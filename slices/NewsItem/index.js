import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

/**
 * Component for "NewsItem" Slices.
 */

const NewsItem = ({ slice }) => {
  console.log(slice)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="news-grid"
    >
      <div className="news">
        {slice.primary.item.map((item) => (
          <div className="news-item">
            <PrismicNextImage field={item.image} />
            <h3>{item.title}</h3>
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
      </div>
      <div className="current">
        {slice.primary.upcoming.length > 0 &&
          <div className="wrapper">
            <h2>upcoming events</h2>
            <div className="events">
            {slice.primary.upcoming.map((item) => (
              <div className="event-item">
                <PrismicNextImage field={item.event.data.image} />
                <h3>{item.event.data.title}</h3>
                <div className="date-time">
                  <p>{item.event.data.date}</p>
                  <p>{item.event.data.time}</p>
                </div>
                <PrismicRichText field={item.event.data.description} />
              </div>
            ))}
            </div>
          </div>
        }
        {slice.primary.blog.length > 0 &&
          <div className="wrapper">
            <h2>blog</h2>
            {slice.primary.blog.map((item) => (
              <div className="event-item">
                <h3>{item.blog_title}</h3>
                <div className="date-time">
                  <p>{item.date}</p>
                </div>
                <PrismicRichText field={item.text} />
              </div>
            ))}
          </div>
        }
      </div>
    </section>
  );
};

export default NewsItem;
