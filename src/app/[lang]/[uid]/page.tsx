import { Metadata } from "next";
import { notFound } from "next/navigation";
import { reverseLocaleLookup } from "@/i18n";

import { asText, filter } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Layout from "@/components/layout"
import Logo2 from "@/components/logo2"

type Params = { lang: string; uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { lang, uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid, {
    lang: reverseLocaleLookup(lang),
  }).catch(() => notFound());
  const navigation = await client.getByType('navigation',  {
    lang: reverseLocaleLookup(lang),
  });

  // <SliceZone> renders the page's slices.
  return (
    <div className="page">
      <Layout menu={navigation.results[0].data} lang={lang}>
        <Logo2/>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang, uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid, {
    lang: reverseLocaleLookup(lang),
  }).catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();

  // Get all pages from Prismic, except the homepage.
  const pages = await client.getAllByType("page", {
    filters: [filter.not("my.page.uid", "home")],
    lang: "*",
  });

  return pages.map((page) => ({ lang: page.lang, uid: page.uid }));
}
