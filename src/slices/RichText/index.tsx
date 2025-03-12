import { type FC } from "react";
import { type Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  type SliceComponentProps,
  type JSXMapSerializer,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

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
        <PrismicRichText field={slice.primary.content} components={components} />
      </div>
      {slice.primary.side_column[0] &&
        <div>
          <PrismicRichText field={slice.primary.side_column} components={components} />
        </div>
      }
    </section>
  );
};

export default RichText;
