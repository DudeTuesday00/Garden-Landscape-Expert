import ContactUs from '../../components/ContactUs.jsx'

export const metadata = {
  title: 'Contact Us',
  description:
    'Have a question or feedback? Send us a message and the Planting Atlas team will get back to you.',
  keywords: 'contact Planting Atlas, garden questions, feedback, plant advice, custom 3D garden orders',
  alternates: {
    canonical: 'https://plantingatlas.com/contact/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/contact/',
    title: 'Contact Us | Planting Atlas',
    description: 'Have a question or feedback? Send us a message and the Planting Atlas team will get back to you.',
  },
  twitter: {
    title: 'Contact Us | Planting Atlas',
    description: 'Have a question or feedback? Send us a message and the Planting Atlas team will get back to you.',
  },
}

export default function ContactPage() {
  return <ContactUs />
}
