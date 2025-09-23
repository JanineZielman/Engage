import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";
import Logo3 from "../components/logo3";
import Logo2 from "../components/logo2";

const Page = ({ page, navigation }) => {
  return (
    <div className="page">
      <Layout menu={navigation.results[0].data} page={page}>
        {page.data.title_svg ?
          <Logo3 logo={page.data} navigation={navigation}/>
          :
          <Logo2/>
        }
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default Page;

export async function getStaticProps({ params, previewData, locale }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, { lang: locale });
  const navigation = await client.getByType("navigation",  { lang: locale });

  return {
    props: {
      page,
      navigation
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
