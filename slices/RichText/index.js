import {
  PrismicRichText,
} from "@prismicio/react";



/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }) => {
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
