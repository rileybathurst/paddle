import * as React from "react";

interface FormatPhoneNumberTypes {
  phoneNumberString: number;
}
const FormatPhoneNumber = ({ phoneNumberString }: FormatPhoneNumberTypes) => {
  const phoneNumber = String(phoneNumberString);
  const cleaned = `${phoneNumber}`.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};

type PhoneTypes = {
  phone: number;
};

const Phone = ({ phone }: PhoneTypes) => {
  return (
    <a href={`tel:${phone}`} rel="norel norefferer" className="button">
      Phone: <FormatPhoneNumber phoneNumberString={phone} />
    </a>
  );
};

export default Phone;
