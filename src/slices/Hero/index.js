'use client'
/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }) => {
  console.log(slice)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero"
    >
      <video loop muted autoPlay playsInline>
        <source src={slice.primary.video?.url} type="video/mp4"/>
      </video>
    </section>
  );
};

export default Hero;
