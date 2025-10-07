import { SliceZone } from "@prismicio/react";

import { createClient } from "../../../prismicio";
import { components } from "../../../slices";
import { Layout } from "../../../components/Layout";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const Page = ({ page, navigation }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // fallback if invalid
    return date.toLocaleDateString("nl-NL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  return (
    <div className="page event-page">
      <Layout menu={navigation.results[0].data} page={page}>
        <div className="flex-intro">
          {page.data.video?.url ?
          <video playsInline autoPlay muted loop>
            <source src={page.data.video.url} type="video/mp4"/>
          </video>
          :
           <PrismicNextImage field={page.data.image} />
          }
           <div className="text-wrapper">
            <h2>{page.data.title}</h2>
            <h3>{page.data.subtitle}</h3>
              <div className="date-time">
                <p>{page.data.dates ? page.data.dates : formatDate(page.data.date)}</p>
                <p>{page.data.time}</p>
              </div>
            <PrismicRichText field={page.data.description} />
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        </div>
        <div className="iframe"
          dangerouslySetInnerHTML={{ __html: page.data.embed?.html }}
        />
        <div className={`columns ${page.data.long_description2.length > 0 ? 'amount-2': 'amount-1'}`}>
          <div className="column">
            <PrismicRichText field={page.data.long_description} />
          </div>
          <div className="column">
            <PrismicRichText field={page.data.long_description2} />
          </div>
        </div>
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
