// this is the Name.tsx file
import { faker } from '@faker-js/faker';
import React from 'react';

type WidthCardTypes = {
  widths: string[];
};
function WidthCard({ widths }: WidthCardTypes) {
  return (
    <>
      {widths.map((width) => (
        <div
          key={width}
          className={width}
          style={{
            minHeight: '8rem',
            backgroundColor: 'var(--kingly-cloud)',
            marginInline: 'auto',
            marginBlockEnd: 'var(--vinson)',
            paddingBlock: 'var(--vinson)',
            color: 'var(--black-out)',
          }}
        >
          {width}<br />
          {/* {faker.string.fromCharacters('abc', { min: 45, max: 90 })} */}
          <p
            className='white-space'
            style={{
              color: 'var(--navy-400)'
            }}>
            {faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', { min: 45, max: 45 })}
          </p>
          <p
            className='white-space'
            style={{
              color: 'var(--mullen-100)'
            }}
          >
            {faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', { min: 90, max: 90 })}
          </p>
        </div >
      ))
      }
    </>
  );
}

type WarpCardsTypes = {
  widths: string[];
};
function WarpCards({ widths }: WarpCardsTypes) {
  return (
    <>
      {widths.map((width) => (
        <div
          key={width}
          className={`${width} wrap`}
          style={{
            minHeight: '8rem',
            marginBlockEnd: 'var(--vinson)',
            paddingBlock: 'var(--vinson)',
            backgroundColor: 'var(--kingly-cloud)',
            color: 'grey',
          }}
        >
          <div
            // className='white-space'
            style={{
              paddingBlock: 'var(--vinson)',
              backgroundColor: 'var(--tin-soldier)',
              color: 'var(--navy-400)'
            }}
          >
            {width} wrap
            {/* 45 char min */}
            <br />
            {/* {faker.string.fromCharacters('abc', { min: 45, max: 90 })} */}
            {/* // * adding the string breaks the wraps */}
            {/* // ? maybe I do this with a ref and give it colors based on sizing */}
            {/* {faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', { min: 45, max: 45 })} */}
            {faker.lorem.sentence()}
          </div>
          <div
            // className='white-space'
            style={{
              paddingBlock: 'var(--vinson)',
              backgroundColor: 'var(--tin-soldier)',
              color: 'var(--mullen-100)'
            }}
          >
            {width} wrap
            {/* 90 char max */}
            <br />
            {/* {faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', { min: 90, max: 90 })} */}
            {faker.lorem.sentence()}
          </div>
        </div >
      ))}
    </>
  )
}

export const Widths = () => {

  return (
    <>
      <h1>Widths</h1>
      <WidthCard widths={['vulture', 'stork', 'condor', 'pelican', 'albatross']} />
      <p>condor is good for measure</p>
      <hr />
      <h2>split</h2>
      <WarpCards widths={['condor', 'pelican', 'albatross']} />
      <p>pelican split is good for measure</p>
      <h3>Nested Wraps</h3>
      <div
        className='albatross wrap'
        style={{
          paddingBlock: 'var(--vinson)',
          backgroundColor: 'var(--kingly-cloud)',
        }}
      >
        {/* // TODO: doesnt work yet still controlled by the star, might just be ordering */}
        <div
          style={{
            backgroundColor: 'var(--tin-soldier)',
          }}
        >
          {/* {faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', { min: 45, max: 45 })} */}
          {/* <p className='text-center'>{faker.lorem.sentence()}</p> */}

          <section className='pelican'>
            Albatross wrap with pelican inside a nested div
            Double nested with the pelican inside the next layer down also stops the problems
            <p>{faker.lorem.paragraphs()}</p>
          </section>
        </div>
        <div
          style={{
            backgroundColor: 'var(--tin-soldier)',
          }}
        >
          {/* {faker.string.fromCharacters('abcdefghijklmnopqrstuvwxyz', { min: 90, max: 90 })} */}
          <section className='pelican'>
            <p>{faker.lorem.paragraphs()}</p>
          </section>
        </div>
      </div>
      <p>Albatross is too wide to run text on a traditional wrap, pelican is wide on this but fits better than condor</p>
    </>
  );
};