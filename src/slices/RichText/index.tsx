import { type FC } from "react";
import { type Content } from "@prismicio/client";
import {
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";


/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText: FC<RichTextProps> = ({ slice }) => {
  return (
    <section className={`textWrapper ${slice.primary.full_width ? 'fullwidth' : 'small'}`}>
      <div>
        <PrismicRichText field={slice.primary.content} />
      </div>
      {slice.primary.side_column?.[0] &&
        <div>
          <PrismicRichText field={slice.primary.side_column}/>
        </div>
      }
    </section>
  );
};

export default RichText;
