import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
/**
 * Props for `Buttons`.
 */
export type ButtonsProps = SliceComponentProps<Content.ButtonsSlice>;

/**
 * Component for "Buttons" Slices.
 */
const Buttons: FC<ButtonsProps> = ({ slice }) => {
  console.log(slice)
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
        />
      ))}
    </section>
  );
};

export default Buttons;
