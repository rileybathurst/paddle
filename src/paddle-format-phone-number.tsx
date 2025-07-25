import React from "react";

export const PaddleFormatPhoneNumber = ({ phoneNumberString }: { phoneNumberString: number }) => {
  const cleaned = (`${phoneNumberString}`).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return <>({match[1]}) {match[2]}-{match[3]}</>;
  }
  console.warn(`Invalid phone number format: ${phoneNumberString}`);
  return null;
}