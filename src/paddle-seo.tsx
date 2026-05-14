import React from "react";
import { Script } from "gatsby";
import { PaddleGatsbyImageType } from "./types/paddle-gatsby-image-type";

type PaddleHeroImageWithRequiredFallback = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        images: {
          fallback: {
            src: string;
          };
        };
      };
    };
  };
  alternativeText: string;
};

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
  og_image?: string;
  og_image_description?: string;
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
    og_image: string;
    og_image_description: string;
    paymentAccepted: string;
    numberOfEmployees: string;
    priceRange: string;
    slogan: string;

    hero: PaddleHeroImageWithRequiredFallback;

    // * used in opening hours and seasonality checks
    season_start: string;
    season_end: string;
  };

  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };

  openingHours: {
    opening_time: string;
    closing_time: string;
  }

  departments?: {
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
  og_image,
  og_image_description,
  breadcrumbs,
  strapiBranch,
  address,
  openingHours,
  departments,
  children,
}: SEOtypes) => {
  const businessName = `${strapiBranch.name} Kayak & Paddleboard rentals and tours`;

  const PaddleTitle = title
    ? `${title} | ${businessName}`
    : `${businessName} | ${strapiBranch.topbar.data.topbar} `;

  const PaddleDescription = description || strapiBranch.slogan;
  const PaddleImage = og_image || `${strapiBranch.url}/${strapiBranch.hero.localFile.childImageSharp.gatsbyImageData.images.fallback.src}`;
  const PaddleImageAlt = og_image_description || strapiBranch.hero.alternativeText;

  const paymentAcceptedQuery = strapiBranch.paymentAccepted
    ? strapiBranch.paymentAccepted
    : "";
  const paymentAcceptedFormatted = paymentAcceptedQuery
    .split("\n")
    .map((payment: string) => payment.trim().replace("- ", ""))
    .join(", ");

  const currentDate = new Date();
  const seasonStartDate = new Date(strapiBranch.season_start);
  const seasonEndDate = new Date(strapiBranch.season_end);

  const isInSeason = currentDate >= seasonStartDate && currentDate <= seasonEndDate;

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

            // ! broken image
            "image": "${PaddleImage}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${address?.streetAddress}",
              "addressLocality": "${address?.addressLocality}",
              "addressRegion": "${address?.addressRegion}",
              "postalCode": "${address?.postalCode}",
              "addressCountry": "US"
            },
            ${departments
            ? `
            "department": [
            ${departments.nodes.map((location) => {
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
                  },
                  // * using branch for phone and price
                  "telephone": "${strapiBranch.phone}",
                  "priceRange": "${strapiBranch.priceRange}",
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
            "paymentAccepted": "${paymentAcceptedFormatted}",
            
            ${isInSeason
            ? `,
            // * hard coded 7 days a week
            // * temporal might be able to do something with time more than a slice but for now this is fine
            
            "openingHours": "Mo-Su ${openingHours.opening_time.slice(0, 5)}-${openingHours.closing_time.slice(0, 5)}"`
            : ""
          }

          }
        `}
      </Script>

      <Breadcrumbs url={strapiBranch.url} {...breadcrumbs} />
      {children}
    </>
  );
};

// TODO: image alt in rich data
