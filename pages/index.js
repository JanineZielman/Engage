import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";


const Index = ({ home, navigation}) => {

  return (
    <Layout menu={navigation.results[0].data}>
      <SliceZone slices={home.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const home = await client.getSingle("homepage", { lang: locale });
  const navigation = await client.getByType("navigation",  { lang: locale });


  return {
    props: {
     home,
     navigation
    },
  };
}
