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
    </section>
  );
};

export default NewsItem;
