import { type Metadata } from "next";
import { reverseLocaleLookup } from "@/i18n";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Layout from "@/components/layout"

type Params = { lang: string };

export default async function Home({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  const client = createClient();
  const home = await client.getSingle("homepage", {
      lang: reverseLocaleLookup(lang),
    });
  const navigation = await client.getByType('navigation', {
      lang: reverseLocaleLookup(lang),
    });

  return (
    <div className="home">
      <Layout menu={navigation.results[0].data} lang={lang}>
        <SliceZone slices={home.data.slices} components={components} />
      </Layout>
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params;
  const client = createClient();
  const home = await client.getSingle("homepage", {
    lang: reverseLocaleLookup(lang),
  });

  return {
    title: asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}
