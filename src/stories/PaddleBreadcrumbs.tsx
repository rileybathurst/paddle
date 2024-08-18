// this is the Name.tsx file
import React from 'react';
import { PaddleBreadcrumb } from './PaddleBreadcrumb';
import { faker } from '@faker-js/faker';
// import { Breadcrumbs, Breadcrumb, Link } from 'react-aria-components';

// * Theres something wrong with this file I cant loop it normally

export const PaddleBreadcrumbs = () => {

  return (
    <>
      {/*       <h1>1</h1>
      <ol className='react-aria-Breadcrumbs'>
        <PaddleBreadcrumb key={faker.number.int()} />
        <PaddleBreadcrumb key={faker.number.int()} />
        <PaddleBreadcrumb key={faker.number.int()} />
      </ol>
      <hr />
      <h1>2</h1> */}
      <ol className='react-aria-Breadcrumbs'>
        {Array.from({ length: faker.number.int({ min: 2, max: 4 }) }).map((_,) => (
          <PaddleBreadcrumb key={faker.number.int()} />
        ))}
      </ol>
      {/*       <hr />
      <h1>3</h1>
      <Breadcrumbs>
        <Breadcrumb><Link href="/">Home</Link></Breadcrumb>
        <Breadcrumb><Link href="/react-aria/">React Aria</Link></Breadcrumb>
        <Breadcrumb><Link>Breadcrumbs</Link></Breadcrumb>
      </Breadcrumbs>
      <hr />
      <h1>4</h1>
      <Breadcrumbs>
        <PaddleBreadcrumb key={faker.number.int()} />
      </Breadcrumbs> */}
    </>
  );
};