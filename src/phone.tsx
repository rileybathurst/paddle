import * as React from "react";

interface FormatPhoneNumberTypes {
  phone: number;
}
const FormatPhoneNumber = ({ phone }: FormatPhoneNumberTypes) => {
  const phoneNumber = String(phone);

  // TODO: testing
  console.log("FormatPhoneNumber phone", phone);
  const cleaned = `${phoneNumber}`.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {

    // TODO: testing
    console.log("match", match);
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};

type PhoneTypes = {
  phone: number;
};

const Phone = ({ phone }: PhoneTypes) => {

  // TODO: testing
  console.log("phone", phone);

  return (
    <a href={`tel:${phone}`}
    rel="noopener noreferrer"
    className="button location-phone"
    >
      Phone: <FormatPhoneNumber phone={phone} />
    </a>
  );
};

export default Phone;
