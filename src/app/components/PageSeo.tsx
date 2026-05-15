import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { getSportsActivityLocationJsonLd } from "../data/businessSchema";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  canonicalUrl,
  getSeoForPathname,
} from "../data/seo";

export function PageSeo() {
  const { pathname } = useLocation();
  const seo = getSeoForPathname(pathname);
  const canonical = canonicalUrl(pathname);
  const isHome = pathname === "/";

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:locale" content="en_GB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="theme-color" content="#000000" />
      {isHome ? (
        <script type="application/ld+json">
          {JSON.stringify(getSportsActivityLocationJsonLd())}
        </script>
      ) : null}
    </Helmet>
  );
}
