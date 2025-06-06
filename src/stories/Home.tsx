import React from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-aria-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { LocationDeck } from './LocationDeck';
import { Pricing } from './Pricing';
import { PaddleBreadcrumbs } from './PaddleBreadcrumbs';
import { Menu } from './Menu';
import { BookNow } from './BookNow';
import { Flight } from './Flight';
import { Testimonial } from './Testimonial';

export const Home = () => {

  return (
    <div >
      <Header />
      <Menu />
      <main className="albatross wrap">
        <section>

          <LocationDeck />

          {/* // TODO: move to components */}
          <div className="button__double">
            {Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => (
              // TODO: needs additional props
              <BookNow />
            ))}
          </div>

          <div className='pelican'>
            <h2 className="kilimanjaro">
              <a href={faker.internet.domainName()}>
                {faker.company.catchPhrase()}
              </a>
            </h2>
            <div className="margin-block-end-aconcagua">
              <p>{faker.lorem.sentences(5)}</p>
            </div>
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

      <section id="tours" className="cloud">
        <div className='condor'>

          <h3 className="">
            <Link href={faker.internet.domainName()}>
              Tours
            </Link>
          </h3>
          <p>{faker.lorem.sentences(2)}</p>
        </div>

        <Flight />

        <h4 className='condor'>
          <Link href={faker.internet.domainName()}>
            Compare Tours
          </Link>
        </h4>
      </section>

      <section id="retail" className="pelican water">
        <article>
          <h3>
            <a
              href={faker.internet.domainName()}
              target="_blank"
              rel='noopener noreferrer'
            >
              Retail Store
            </a>
          </h3>

          <p>{faker.lorem.sentences(2)}</p>
        </article>
        <div>
          {/* // TODO: this is where the brand logos are going */}
        </div>
        <hr />
      </section>

      <Testimonial />

      <PaddleBreadcrumbs />
      <Footer />
    </div >
  );
};
