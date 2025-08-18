import { PrismicRichText } from "@prismicio/react";

/**
 * Component for "Columns" Slices.
 */
const Columns = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`columns amount-${slice.primary.columns.length}`}
    >
      {slice.primary.columns.map((item) => (
        <div className="column">
          <PrismicRichText field={item.text} />
        </div>
      ))}
    </section>
  );
};

export default Columns;
