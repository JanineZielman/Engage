'use client'
import Link from "next/link";
import Logo2 from "../../components/logo2";
/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }) => {
  return (
    <>
    {slice.primary.hide_video ?
      <div className="page">
        <Logo2/>
      </div>
    :
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero"
    >
      <video loop muted autoPlay playsInline>
        <source src={slice.primary.video?.url} type="video/mp4"/>
      </video>
      <Logo2/>
      <div className="hero-link">
        <Link
          href={`/${slice.primary.link.lang}/${slice.primary.link.uid}`}
        >
          {slice.primary.link.text}
        </Link>
      </div>
    </section>
    }
    </>
  );
};

export default Hero;
