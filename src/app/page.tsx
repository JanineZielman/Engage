import { type Metadata } from "next";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Layout from "@/components/layout"

export default async function Home() {
  const client = createClient();
  const home = await client.getByUID("page", "home");
  const navigation = await client.getByType('navigation');

  // <SliceZone> renders the page's slices.
  return (
    <div className="home">
      <Layout menu={navigation.results[0].data}>
        <SliceZone slices={home.data.slices} components={components} />
      </Layout>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}
