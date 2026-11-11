const rawWhatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').trim();
const rawFormEndpoint = (import.meta.env.VITE_FORM_ENDPOINT || '').trim();

export const siteConfig = {
  brandName: 'Krishna Agarwal',
  logoMark: 'KA.',
  roleTitle: 'AI Automation & Business Operations Consultant',
  email: 'krishnakelanka@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/krishna-agarwal-248449283/',
  whatsappNumber: rawWhatsappNumber,
  whatsappConfigured: rawWhatsappNumber.length > 0,
  whatsappUrl: rawWhatsappNumber
    ? `https://wa.me/${rawWhatsappNumber.replace(/\D/g, '')}`
    : null,
  formEndpoint: rawFormEndpoint,
  formConfigured: rawFormEndpoint.length > 0,
  location: 'Mumbai, India · Remote Worldwide',
};

