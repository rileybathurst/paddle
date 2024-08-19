import React from "react";
import { Script } from "gatsby";

interface BreadcrumbsTypes {
  url?: string;
  [key: number]: {
    name?: string;
    item?: string;
  };
}[]
// I could probably pass it two arguments instead but for now
function Breadcrumbs(breadcrumbs: BreadcrumbsTypes) {

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
          "item": "${breadcrumbs.url}/${breadcrumb.item}"
        }`
      })}
          ]
        }
      `}
    </Script>
  );
}

type SEOtypes = {
  title?: string;
  description?: string;
  url: string;
  ogImage?: string;
  ogImageDescription?: string;
  breadcrumbs?: BreadcrumbsTypes;
  // children: React.ReactNode;

  strapiLocale: {
    name: string;
    topbar: {
      topbar: string;
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

  allStrapiLocation: {
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
}

export const PaddleSEO = ({ title, description, ogImage, ogImageDescription, breadcrumbs, strapiLocale, strapiLocation, allStrapiLocation, children }: SEOtypes) => {

  const businessName = `${strapiLocale.name} Kayak & Paddleboard rentals and tours`;

  const PaddleTitle = title ? `${title} | ${businessName}` : `${businessName} | ${strapiLocale.topbar.topbar} `;
  // TODO: tagline would be a better fallback description
  const PaddleDescription = description || strapiLocale.slogan;
  // url: `${strapiLocale.url}${SE0.url}` || strapiLocale.url,
  const PaddleImage = ogImage || strapiLocale.ogImage;
  const PaddleImageAlt = ogImageDescription || strapiLocale.ogImageDescription;

  // const query = '- cash\n - credit card';
  // const formatted = query.split('\n').map((item) => item.trim().replace('- ', '')).join(', ');
  // console.log(formatted);

  // TODO: this is now allStrapiLocation.nodes
  // TODO: I think this will be a keylocation piece
  // console.log(strapiLocale.paymentAccepted);
  const paymentAcceptedQuery = strapiLocale.paymentAccepted ? strapiLocale.paymentAccepted : '';
  const paymentAcceptedFormatted = paymentAcceptedQuery.split('\n').map((payment: string) => payment.trim().replace('- ', '')).join(', ');
  // console.log(paymentAcceptedFormatted);

  console.log(breadcrumbs);

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
      <meta name="theme-color" content={strapiLocale.themeColor} />

      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            "name": "${businessName}",
            "url": "${strapiLocale.url}",
            "description": "${strapiLocale.name}",
            "image": "${PaddleImage}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${strapiLocation.streetAddress}",
              "addressLocality": "${strapiLocation.addressLocality}",
              "addressRegion": "${strapiLocation.addressRegion}",
              "postalCode": "${strapiLocation.postalCode}",
              "addressCountry": "US"
            }
            
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
                }`
        })}
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "${strapiLocale.latitude}",
              "longitude": "${strapiLocale.longitude}"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "${strapiLocale.latitude}",
                "longitude": "${strapiLocale.longitude}"
              },
              "geoRadius": "${strapiLocale.geoRadius}"
            },
            "telephone": "${strapiLocale.phone}",
            "email": "${strapiLocale.email}",

            "numberOfEmployees" : "${strapiLocale.numberOfEmployees}",
            "priceRange": "${strapiLocale.priceRange}",
            "slogan": "${strapiLocale.slogan}",
            "paymentAccepted": "${paymentAcceptedFormatted}"
          }
        `}
      </Script>

      <Breadcrumbs
        url={strapiLocale.url}
        {...breadcrumbs}
      />
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