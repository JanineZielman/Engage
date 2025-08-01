import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";


const Index = ({ home, navigation, about, team}) => {
  return (
    <div className="homepage">
      <Layout menu={navigation.results[0].data} page={home}>
        <SliceZone slices={home.data.slices} components={components} />
        {about?.data.slices &&
          <div id="about">
            <SliceZone slices={about.data.slices} components={components} />
          </div>
        }
        {team?.data.slices &&
          <div id="team">
            <SliceZone slices={team.data.slices} components={components} />
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
  const team = await client.getByUID("page", "team", { lang: locale });
  const navigation = await client.getByType("navigation",  { lang: locale });


  return {
    props: {
     home,
     navigation,
     about,
     team
    },
  };
}
