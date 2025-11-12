import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import Container from '@/components/layout/Container';
import { YTMLogo } from '@/assets';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  // Social Media Icon Components
  const FacebookIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <FacebookIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'instagram':
        return <InstagramIcon />;
      default:
        return null;
    }
  };

  const services = [
    { name: 'Lending Solutions', href: '/services/lending' },
    { name: 'Financial Planning', href: '/services/financial-planning' },
    { name: 'Legal Services', href: '/services/legal' },
    { name: 'Business Insurance', href: '/services/business-insurance' },
    { name: 'Business Advisory', href: '/services/business-advisory' },
    { name: 'Property Services', href: '/services/property' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/YourTimeMattersGroup', icon: 'facebook' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ytm-group-pty-ltd/', icon: 'linkedin' },
    { name: 'Instagram', href: 'https://www.instagram.com/ytmgroupau/', icon: 'instagram' },
  ];

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <Container size="2xl">
        <div className="py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Company Info - Left Column */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                {/* Logo */}
                <Link to="/" className="inline-block">
                  <img
                    src={YTMLogo}
                    alt="YTM Group"
                    className="h-16 w-auto"
                  />
                </Link>

                {/* Company Description */}
                <p className="text-gray-300 text-base leading-relaxed max-w-md">
                  Leading financial planning and legal services firm in Australia, 
                  helping families build generational wealth through expert financial strategies.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <PhoneIcon className="h-5 w-5 text-primary-400" />
                    <a 
                      href="tel:+61370469786" 
                      className="hover:text-white transition-colors duration-200"
                    >
                      +61 3 7046 9786
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                    <a 
                      href="mailto:info@ytmgroup.com.au"
                      className="hover:text-white transition-colors duration-200"
                    >
                      info@ytmgroup.com.au
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPinIcon className="h-5 w-5 text-primary-400 mt-0.5" />
                    <div>
                      <p>1 Princess St</p>
                      <p>Kew, VIC 3101</p>
                      <p>Australia</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            {/* Navigation Links - Right Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                  <ul className="space-y-3">
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                  <ul className="space-y-3">
                    {company.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal & Compliance */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Legal & Compliance</h3>
                  <ul className="space-y-3">
                    {legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Compliance Text */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
                YTM GROUP PTY LTD (Australian Credit License:454991) is an Authorised Corporate Credit Representative of Australia of 
                Australian Finance Group Ltd (389087).
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
                YTM FINANCIAL PLANNING PTY Ltd is a Corporate Authorised Representative (1282852) of Lifespan Financial Planning Pty 
                Ltd AFSL 229892
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <p className="text-sm text-gray-400">
                © {currentYear} YTM Group. All rights reserved.
              </p>
              
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className="sr-only">{social.name}</span>
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 
