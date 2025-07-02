import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import '../globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="engagebiennial.nl" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
