import * as React from "react"
import type { PaddleBookNowTypes } from "./types/paddle-book-now-types";

export const PaddleBookNow = ({ peek_base, strapiBranchName, specificName, specificLink }: PaddleBookNowTypes) => {
  return (
    <a
      href={specificLink || peek_base}
      rel="noopener noreferrer"
      className="book-now"
      title={`Book now ${specificLink && <> {specificLink} </>} with ${strapiBranchName} kayak and paddleboard`}
    >
      {specificName && (<>{specificName} <br /></>)}
      BOOK NOW
    </a>
  );
};