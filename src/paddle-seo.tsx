import React from "react";
import { Script } from "gatsby";

interface BreadcrumbsTypes {
  url?: string;
  [key: number]: {
    name?: string;
    item?: string;
  };
}
[];
// I could probably pass it two arguments instead but for now
const Breadcrumbs = (breadcrumbs: BreadcrumbsTypes) => {
  // remove the breadcrumbs.url from the Object.entries
  // console.log(breadcrumbs.url);
  const { url, ...rest } = breadcrumbs;

  if (Object.keys(rest).length === 0) {
    return null;
  }

  return (
    <Script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            ${Object.entries(rest).map(([key, breadcrumb]) => {
        return `{
          "@type": "ListItem",
          "position": ${Number.parseInt(key) + 1},
          "name": "${breadcrumb.name}",
          "item": "${url}/${breadcrumb.item}"
        }`;
      })}
          ]
        }
      `}
    </Script>
  );
};

type SEOtypes = {
  title?: string;
  description?: string;
  url: string;
  ogImage?: string;
  ogImageDescription?: string;
  breadcrumbs?: BreadcrumbsTypes;
  // children: React.ReactNode;

  strapiBranch: {
    name: string;
    topbar: {
      data: {
        topbar: string;
      };
    };
    url: string;
    themeColor: string;
    latitude: string;
    longitude: string;
    geoRadius: string;
    phone: string;
    email: string;
    ogImage: string;
    ogImageDescription: string;
    paymentAccepted: string;
    numberOfEmployees: string;
    priceRange: string;
    slogan: string;
  };

  strapiLocation: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };

  allStrapiLocation?: {
    nodes: {
      name: string;
      schemaType: string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      paymentAccepted: string;
      phone: string;
      opening_time: string;
      closing_time: string;
    }[];
  };

  children: React.ReactNode;
};

export const PaddleSEO = ({
  title,
  description,
  ogImage,
  ogImageDescription,
  breadcrumbs,
  strapiBranch,
  strapiLocation,
  allStrapiLocation,
  children,
}: SEOtypes) => {
  const businessName = `${strapiBranch.name} Kayak & Paddleboard rentals and tours`;

  const PaddleTitle = title
    ? `${title} | ${businessName}`
    : `${businessName} | ${strapiBranch.topbar.data.topbar} `;
  // TODO: tagline would be a better fallback description
  const PaddleDescription = description || strapiBranch.slogan;
  // url: `${strapiBranch.url}${SE0.url}` || strapiBranch.url,
  const PaddleImage = ogImage || strapiBranch.ogImage;
  const PaddleImageAlt = ogImageDescription || strapiBranch.ogImageDescription;

  // const query = '- cash\n - credit card';
  // const formatted = query.split('\n').map((item) => item.trim().replace('- ', '')).join(', ');
  // console.log(formatted);

  // TODO: this is now allStrapiLocation.nodes
  // TODO: I think this will be a keylocation piece
  // console.log(strapiBranch.paymentAccepted);
  const paymentAcceptedQuery = strapiBranch.paymentAccepted
    ? strapiBranch.paymentAccepted
    : "";
  const paymentAcceptedFormatted = paymentAcceptedQuery
    .split("\n")
    .map((payment: string) => payment.trim().replace("- ", ""))
    .join(", ");
  // console.log(paymentAcceptedFormatted);

  // console.log(breadcrumbs);

  return (
    <>
      <title>{PaddleTitle}</title>
      <meta name="description" content={PaddleDescription} />

      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={url} /> */}
      <meta property="og:title" content={PaddleTitle} />
      <meta property="og:description" content={PaddleDescription} />
      <meta property="og:image" content={PaddleImage} />
      <meta property="og:image:alt" content={PaddleImageAlt} />
      <meta name="theme-color" content={strapiBranch.themeColor} />

      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "${businessName}",
            "url": "${strapiBranch.url}",
            "description": "${strapiBranch.name}",
            "image": "${PaddleImage}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${strapiLocation?.streetAddress}",
              "addressLocality": "${strapiLocation?.addressLocality}",
              "addressRegion": "${strapiLocation?.addressRegion}",
              "postalCode": "${strapiLocation?.postalCode}",
              "addressCountry": "US"
            },
            ${allStrapiLocation
            ? `
            "department": [
            ${allStrapiLocation.nodes.map((location) => {
              return `{
                  "name": "${location.name}",
                  "@type": "${location.schemaType}",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "${location.streetAddress}",
                    "addressLocality": "${location.addressLocality}",
                    "addressRegion": "${location.addressRegion}",
                    "postalCode": "${location.postalCode}",
                    "addressCountry": "US"
                  }
                }`;
            })}
            ],
            `
            : ""
          }
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "${strapiBranch.latitude}",
                "longitude": "${strapiBranch.longitude}"
              },
              "geoRadius": "${strapiBranch.geoRadius}"
            },
            "telephone": "${strapiBranch.phone}",
            "email": "${strapiBranch.email}",
            "numberOfEmployees" : "${strapiBranch.numberOfEmployees}",
            "priceRange": "${strapiBranch.priceRange}",
            "slogan": "${strapiBranch.slogan}",
            "paymentAccepted": "${paymentAcceptedFormatted}"
          }
        `}
      </Script>

      <Breadcrumbs url={strapiBranch.url} {...breadcrumbs} />
      {children}
    </>
  );
};

// TODO: image alt in rich data

/* "openingHoursSpecification": [
  ${allStrapiLocation.nodes.map((location) => {
return `{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "${location.opening_time}",
    "closes": "${location.closing_time}"
  }`
  })}
], */
