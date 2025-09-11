// import { SliceZone } from "@prismicio/react";

import { createClient } from "../../../prismicio";
// import { components } from "../slices";
import { Layout } from "../../../components/Layout";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const Page = ({ page, navigation }) => {
  return (
    <div className="page event-page">
      <Layout menu={navigation.results[0].data} page={page}>
        <div className="flex-intro">
           <PrismicNextImage field={page.data.image} />
           <div className="text-wrapper">
            <h2>{page.data.title}</h2>
              <div className="date-time">
                <p>{page.data.date}</p>
                <p>{page.data.time}</p>
              </div>
            <PrismicRichText field={page.data.description} />
             {page.data.button?.url && (
                <div className="button">
                  <Link
                    target="_blank"
                    href={`${page.data.button.url}`}
                  >
                    {page.data.button.text}
                  </Link>
                </div>
              )}
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <PrismicRichText field={page.data.long_description} />
          </div>
          <div className="column">
            <PrismicRichText field={page.data.long_description2} />
          </div>
        </div>
        {/* <SliceZone slices={page.data.slices} components={components} /> */}
      </Layout>
    </div>
  );
};

export default Page;

export async function getStaticProps({ params, previewData, locale }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("event", params.uid, { lang: locale });
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

  const pages = await client.getAllByType("event", { lang: "*" });

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
