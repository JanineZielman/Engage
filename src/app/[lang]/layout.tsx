export const dynamic = 'force-dynamic';

import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import '../globals.scss';

export default async function LangLayout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
    <html>
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
