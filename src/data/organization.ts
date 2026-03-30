export interface ContactInfo {
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
}

export interface OfficeHours {
  day: string;
  hours: string;
}

export interface AdminContact {
  name: string;
  designation: string;
  phone: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
}

export const contactInfo: ContactInfo = {
  address: "Gajipur Pahor Road, Etah",
  postalCode: "Uttar Pradesh 207001",
  phone: "+91 9528910085",
  email: "info@gbconventetah.in",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.755534830704!2d78.63338557508703!3d27.539053076279377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974ff66e727ea79%3A0xa37eade2e6b0d13a!2sGB%20CONVENT%20SCHOOL%20ETAH!5e0!3m2!1sen!2sin!4v1749972210719!5m2!1sen!2sin"
};

export const officeHours: OfficeHours[] = [
  {
    day: "Monday - Saturday",
    hours: "8:00 AM - 1:00 PM"
  },
  {
    day: "Sunday",
    hours: "Closed"
  }
];

export const administrationContacts: AdminContact[] = [
  {
    name: "Ms. Shipra",
    designation: "Principal",
    phone: "+91 9876543201"
  },
  {
    name: "Admissions Office",
    designation: "Admissions Coordinator",
    phone: "+91 9876543202"
  },
  {
    name: "Accounts Department",
    designation: "Accounts Manager",
    phone: "+91 9876543203"
  }
];

export const socialMediaLinks: SocialMedia[] = [
  {
    platform: "facebook",
    url: "https://www.facebook.com/gbconventetah"
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/gbconventetah/"
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@GBConventEtah"
  }
];
