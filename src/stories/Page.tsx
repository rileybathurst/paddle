import React from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-aria-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { LocationDeck } from './LocationDeck';
import { Pricing } from './Pricing';

export const Page = () => {

  return (
    <>
      <Header />
      <main className="albatross wrap">
        <section>
          <div className='pelican'>
            <h2 className="page-title">
              {faker.company.catchPhrase()}
            </h2>
            <div className="margin-block-end-aconcagua">
              <p>{faker.lorem.sentences(5)}</p>
            </div>
          </div>

          <LocationDeck
            background={false}
          />

          <div className="button__double">
            <a
              href={faker.commerce.isbn()}
              target="_blank"
              rel="noopener noreferrer"
              className="book-now"
              title={`book rental kayaks and paddleboards with ${faker.location.city()}`}
            >
              RENTALS<br />
              BOOK NOW
            </a>

            <a
              href={faker.commerce.isbn()}
              target="_blank"
              rel="noopener noreferrer"
              className="book-now"
              title={`book rental kayaks and paddleboards with ${faker.location.city()}`}
            >
              TOURS<br />
              BOOK NOW
            </a>
          </div>

        </section>

        <div>
          {/* <div className="home__photo-grid"> */}
          {/* <GatsbyImage
              image={data.southlakefriends.image.localFile.childImageSharp.gatsbyImageData}
              alt={data.southlakefriends.title}
              className='img__wrapped hero'
            /> */}
          {/* // ? this seems like every time it would have that classname */}
          {/* <WaterTexture className="texture" /> */}
          {/* <GatsbyImage
              image={data.goldshed.image.localFile.childImageSharp.gatsbyImageData}
              alt={data.southlakefriends.title}
              className='img__wrapped inset'
            /> */}
          {/* </div> */}

          <Pricing book={true} />
        </div>
      </main>

      <section id="tours" className="pelican water">
        <div>
          {/* // TODO: only one h and then p */}
          <hgroup className="crest">
            <h3 className="brow"><Link href="/tours">Tours</Link></h3>
            {/* think about capitalization here */}
            <h4 className="supra">Enjoy The Majesty Of Lake Tahoe</h4>
          </hgroup>

          <p>{faker.lorem.sentences(2)}</p>

          <h4>
            <Link href="/tours/compare">Compare Tours</Link>
          </h4>
        </div>
        <div>{/* stay gold */}</div>
      </section>

      {/* <div className="deck">
        {data.allStrapiTour.nodes.map((tour) => (
          <div key={tour.id}>
            <Ticket tour={tour} />
          </div>
        ))}
      </div> */}

      <section id="retail" className="pelican water">
        <article>
          {/* // TODO: only one h and then p */}
          <hgroup className="crest">
            <h3 className="brow">
              <a
                href={faker.internet.domainName()}
                target="_blank"
                rel='noopener noreferrer'
              >
                Retail Store
              </a>
            </h3>
            <h4 className="supra">Kayaks and Paddleboards</h4>
          </hgroup>

          <p>{faker.lorem.sentences(2)}</p>
        </article>
        <div>
          {/* stay gold */}
        </div>
      </section>
      <Footer />
    </>
  );
};
