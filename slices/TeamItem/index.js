import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
/**
 * Component for "TeamItem" Slices.
 */
const TeamItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="team-grid"
    >
      {slice.primary.item.map((item) => (
      <div className="team-item">
        <PrismicNextImage field={item.image} />
        <h3>{item.name}</h3>
        <PrismicRichText field={item.description} />
        {/* <PrismicRichText field={item.role} /> */}
      </div>
    ))}
    </section>
  );
};

export default TeamItem;
