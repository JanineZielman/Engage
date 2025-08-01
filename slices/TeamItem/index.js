/**
 * Component for "TeamItem" Slices.
 */
const TeamItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for team_item (variation: {slice.variation}) slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
     
    </section>
  );
};

export default TeamItem;
