import { Boxes, CreditCard, Laptop, Receipt, ScanLine } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import swan2Img from '../assets/products/swan2.webp';
import falcon2Img from '../assets/products/falcon2.webp';
import libra1Img from '../assets/products/libra1.webp';
import pegasus1Img from '../assets/products/pegasus1.webp';
import gemini1seImg from '../assets/products/gemini1se.webp';
import swift2Img from '../assets/products/swift2.png';
import cashDrawerImg from '../assets/products/cashdrawer.jpg';
import scannerImg from '../assets/products/scanner.webp';
import kozenHandheldImg from '../assets/products/kozen-handheld.jpg';
import kozenHandheld2Img from '../assets/products/kozen-handheld2.jpg';
import kozenHandheld3Img from '../assets/products/kozen-handheld3.jpg';
import thermalPaperImg from '../assets/products/thermal-paper.jpg';
import labelPaperImg from '../assets/products/label-paper.jpg';
import desktopPcImg from '../assets/products/desktop-pc.jpg';
import laptopImg from '../assets/products/laptop.jpg';

export type Product = {
  name: string;
  // Only iMin and Nebullar are used as product brands. PCs / accessories /
  // consumables have no brand — omit this field and the badge is hidden.
  brand?: string;
  blurb: string;
  specs: string[];
  // One image per item. Currently temporary stock photos — replace each
  // with the real product photo (URL or local src/assets/ path) one by one.
  image: string;
  featured?: boolean;
};

export type ProductCategory = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  brands: string[];
  products: Product[];
};

const U = (id: string) => `https://images.unsplash.com/${id}?w=900&q=80&auto=format&fit=crop`;

export type HeroSlide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  images: string[];
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'POS Series',
    title: 'Smart POS for every counter',
    subtitle:
      'Android all-in-one terminals, tablets, handhelds, and cash drawers for retail, dining, and service businesses.',
    images: [libra1Img, pegasus1Img, gemini1seImg]
  },
  {
    eyebrow: 'Fintech Series',
    title: 'Accept payments, anywhere',
    subtitle:
      'Handheld payment terminals and card readers with VISA, Mastercard, QRPH, WeChat Pay, and Alipay support.',
    images: [kozenHandheldImg, kozenHandheld2Img, kozenHandheld3Img]
  },
  {
    eyebrow: 'Warehouse Series',
    title: 'Rugged devices for the warehouse',
    subtitle:
      'PDAs and barcode scanners built for scanning, picking, tracking, and stock operations.',
    images: [swift2Img, scannerImg]
  }
];

export type Industry = {
  title: string;
  blurb: string;
  image: string;
};

export const industries: Industry[] = [
  {
    title: 'Retail',
    blurb: 'Fast checkout, inventory, barcode scanning, and member management.',
    image: U('photo-1567521464027-f127ff144326')
  },
  {
    title: 'Food & Beverages',
    blurb: 'Order taking, kitchen printing, table service, billing, and payments.',
    image: U('photo-1552566626-52f8b828add9')
  },
  {
    title: 'Logistics & Warehouse',
    blurb: 'Rugged handhelds for scanning, tracking, and stock operations.',
    image: U('photo-1553413077-190dd305871c')
  },
  {
    title: 'Supermarkets',
    blurb: 'High-volume checkout lanes, scales, and label printing.',
    image: U('photo-1578916171728-46686eac8d58')
  },
  {
    title: 'Services',
    blurb: 'Bookings, billing, and payments for salons, clinics, and shops.',
    image: U('photo-1542838132-92c53300491e')
  }
];

export const productCategories: ProductCategory[] = [
  {
    id: 'pos',
    title: 'POS Series',
    tagline: 'Main product line',
    description:
      'Android all-in-one terminals, tablets, handhelds, and cash drawers for retail checkout, restaurants, and service counters.',
    icon: ScanLine,
    brands: ['iMin', 'Nebullar'],
    products: [
      {
        name: 'Nebullar Libra 1',
        brand: 'Nebullar',
        blurb: 'Smart tablet terminal — works as desktop, tablet, or all-in-one.',
        specs: ['Android', 'Tablet', 'All-in-one'],
        image: libra1Img,
        featured: true
      },
      {
        name: 'Nebullar Pegasus 1',
        brand: 'Nebullar',
        blurb: 'Self-service kiosk for ordering and checkout with NFC payments.',
        specs: ['Kiosk', 'Self-service', 'NFC'],
        image: pegasus1Img,
        featured: true
      },
      {
        name: 'Nebullar Gemini 1 SE',
        brand: 'Nebullar',
        blurb: 'Entry-level smart ECR for everyday retail and small stores.',
        specs: ['Android', 'Dual screen', 'ECR'],
        image: gemini1seImg,
        featured: true
      },
      {
        name: 'iMin Swan 2',
        brand: 'iMin',
        blurb: 'Dual-screen desktop POS for counter checkout and customer display.',
        specs: ['Android', 'Dual screen', 'Built-in printer'],
        image: swan2Img,
        featured: true
      },
      {
        name: 'iMin Falcon 2',
        brand: 'iMin',
        blurb: 'All-in-one POS with built-in receipt printer in a compact body.',
        specs: ['Android', 'Built-in printer', 'Compact'],
        image: falcon2Img
      },
      {
        name: 'Cash Drawer',
        blurb: 'Durable cash drawer that connects to POS receipt printers.',
        specs: ['Metal build', 'RJ11 trigger', 'Multi-slot'],
        image: cashDrawerImg
      }
    ]
  },
  {
    id: 'fintech',
    title: 'Fintech Series',
    tagline: 'Payments',
    description:
      'Handheld payment terminals and card readers supporting card, QR, and e-wallet payments with secure settlement.',
    icon: CreditCard,
    brands: ['iMin', 'Kozen'],
    products: [
      {
        name: 'Kozen Payment POS',
        brand: 'Kozen',
        blurb: 'Handheld smart payment POS with dual screen for card, QR, and NFC.',
        specs: ['Card / QR / NFC', 'Dual screen', 'Android'],
        image: kozenHandheldImg
      },
      {
        name: 'iMin Swift 2',
        brand: 'iMin',
        blurb: 'Handheld mPOS for card, QR, and contactless payments on the go.',
        specs: ['Card / QR / NFC', 'Android', '4G'],
        image: swift2Img
      }
    ]
  },
  {
    id: 'warehouse',
    title: 'Warehouse Series',
    tagline: 'PDA',
    description:
      'Rugged PDAs and barcode scanners for picking, receiving, inventory counts, and stock movement.',
    icon: Boxes,
    brands: ['Nebullar'],
    products: [
      {
        name: 'Rugged PDA',
        brand: 'iMin',
        blurb: 'iMin Swift handheld data terminal for scanning, picking, and tracking.',
        specs: ['Android', 'Rugged', '1D / 2D scan'],
        image: swift2Img
      },
      {
        name: 'Barcode Scanner',
        blurb: 'Fast 1D/2D handheld scanner for receiving and stock operations.',
        specs: ['1D / 2D', 'USB', 'Durable'],
        image: scannerImg
      }
    ]
  },
  {
    id: 'desktop',
    title: 'Desktop & Computers',
    tagline: 'Computers',
    description:
      'Desktop computers and laptops for back office, management, and business software.',
    icon: Laptop,
    brands: [],
    products: [
      {
        name: 'Desktop PC',
        blurb: 'Reliable desktop unit for store management and daily software.',
        specs: ['Desktop', 'Business use', 'Expandable'],
        image: desktopPcImg
      },
      {
        name: 'Laptop',
        blurb: 'Portable laptop for back-office work and reporting.',
        specs: ['Portable', 'Business use', 'Wi-Fi'],
        image: laptopImg
      }
    ]
  },
  {
    id: 'consumables',
    title: 'Consumables',
    tagline: 'Paper & labels',
    description:
      'Thermal receipt paper and label paper for POS printers, scales, and label printers.',
    icon: Receipt,
    brands: [],
    products: [
      {
        name: 'Thermal Paper',
        blurb: 'Receipt rolls for POS and payment terminal printers.',
        specs: ['57mm / 80mm', 'BPA-free', 'Bulk supply'],
        image: thermalPaperImg
      },
      {
        name: 'Label Paper',
        blurb: 'Adhesive label rolls for price tags and barcode printing.',
        specs: ['Multiple sizes', 'Strong adhesive', 'Bulk supply'],
        image: labelPaperImg
      }
    ]
  }
];
