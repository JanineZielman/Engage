import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Logo3 from "../components/logo3";

const Index = ({ home, navigation, about}) => {
  return (
    <div className="homepage">
      <Layout menu={navigation.results[0].data} page={home}>
        <SliceZone slices={home.data.slices} components={components} />
        {about?.data.slices &&
          <div className="page" id="about">
            <Logo3 logo={about.data.title_svg}/>
            <SliceZone slices={about.data.slices} components={components} />
          </div>
        }
      </Layout>
    </div>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const home = await client.getSingle("homepage", { lang: locale });
  const about = await client.getByUID("page", "about", { lang: locale });
  const navigation = await client.getByType("navigation",  { lang: locale });


  return {
    props: {
     home,
     navigation,
     about
    },
  };
}
