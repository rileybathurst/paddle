// this is the Name.tsx file
import React from 'react';

export const Typography = () => {

  return (
    <>
      <h1>everest</h1>
      <h2>aconcagua</h2>
      <h3>denali</h3>
      <h4>kilimanjaro</h4>
      <h5>elbrus</h5>
      <h6>vinson</h6>
      <p>kosciuszko</p>

      <hr />

      {/* // TODO: fix this naming */}
      <p className="typography__secondary">typography__secondary</p>

      <hr />

      <p>
        These can be any version of h to be a well styled html doc as long as
        they have the hgroup wrapper with a class of crest
      </p>
    </ >
  );
};