import React from 'react'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa'

const socialLinksClassList =
  'CustomIcon CustomIcon--landingFooterIcon u-svg-white u-opacity-6'

export const socialLinks = [
  {
    id: 1,
    name: 'Facebook',
    icon: (
      <FaFacebookF className={socialLinksClassList} size={16}></FaFacebookF>
    ),
    url: 'https://www.facebook.com/anadeainc/',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: (
      <FaInstagram className={socialLinksClassList} size={16}></FaInstagram>
    ),
    url: 'https://www.instagram.com/anadea_info/',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: (
      <FaLinkedinIn className={socialLinksClassList} size={16}></FaLinkedinIn>
    ),
    url: 'https://www.linkedin.com/company/anadea-inc',
  },
  {
    id: 4,
    name: 'Twitter',
    icon: <FaTwitter className={socialLinksClassList} size={16}></FaTwitter>,
    url: 'https://twitter.com/Anadea_Info',
  },
  {
    id: 5,
    name: 'Telegram',
    icon: (
      <FaTelegramPlane
        className={socialLinksClassList}
        size={16}
      ></FaTelegramPlane>
    ),
    url: 'https://t.me/joinchat/AAAAAEqQnCs1G4V4gA8tKA',
  },
]
