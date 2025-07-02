import { PrismicNextLink } from "@prismicio/next";

/**
 * Component for "Buttons" Slices.
 */
const Buttons = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="buttons"
    >
      {slice.primary.button.map((link) => (
        <PrismicNextLink
          key={link.key}
          field={link}
        >
          {link.text}
        </PrismicNextLink>
      ))}
    </section>
  );
};

export default Buttons;
