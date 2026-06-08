import { Cctv, Monitor, ScanLine } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Product = {
  name: string;
  brand: string;
  blurb: string;
  specs: string[];
  // One image per model. Currently temporary stock photos — replace each
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

const U = (id: string) => `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`;

// Hero showcase image (replace with a real iMin POS photo later).
export const heroImage = U('photo-1556740758-90de374c12ad');

export const productCategories: ProductCategory[] = [
  {
    id: 'pos',
    title: 'POS Terminals',
    tagline: 'Main product line',
    description:
      'iMin Android smart POS terminals for retail checkout, restaurants, and service counters. Built-in printer options, large touch displays, and stable daily operation.',
    icon: ScanLine,
    brands: ['iMin'],
    products: [
      {
        name: 'iMin D1',
        brand: 'iMin',
        blurb: 'Compact handheld smart POS for mobile checkout and table-side ordering.',
        specs: ['Android', '5.5" touch', 'Built-in scanner'],
        image: U('photo-1556740758-90de374c12ad'),
        featured: true
      },
      {
        name: 'iMin D1 Pro',
        brand: 'iMin',
        blurb: 'Upgraded handheld terminal with stronger performance and longer battery.',
        specs: ['Android', '6" touch', 'Long battery'],
        image: U('photo-1556742502-ec7c0e9f34b1')
      },
      {
        name: 'iMin D2',
        brand: 'iMin',
        blurb: 'Portable POS with optional built-in receipt printer for on-the-go sales.',
        specs: ['Android', '58mm printer', 'Portable'],
        image: U('photo-1601598851547-4302969d0614')
      },
      {
        name: 'iMin D3',
        brand: 'iMin',
        blurb: 'All-in-one handheld for fast retail and food service transactions.',
        specs: ['Android', 'Touch display', '4G / Wi-Fi'],
        image: U('photo-1563013544-824ae1b704d3')
      },
      {
        name: 'iMin D4',
        brand: 'iMin',
        blurb: 'Rugged mobile terminal for high-volume daily checkout.',
        specs: ['Android', 'Durable build', 'Fast scan'],
        image: U('photo-1572584642822-6f8de0243c93')
      },
      {
        name: 'iMin Swan 1',
        brand: 'iMin',
        blurb: 'Desktop dual-screen POS for counter checkout with customer display.',
        specs: ['Dual screen', 'Built-in printer', 'Counter use'],
        image: U('photo-1580048915913-4f8f5cb481c4')
      },
      {
        name: 'iMin Swan 2',
        brand: 'iMin',
        blurb: 'Modular desktop POS supporting flexible peripheral connections.',
        specs: ['Modular', 'Large display', 'Expandable'],
        image: U('photo-1565514020179-026b92b84bb6')
      },
      {
        name: 'iMin M2-202',
        brand: 'iMin',
        blurb: 'Compact desktop terminal with integrated thermal printer.',
        specs: ['80mm printer', 'Touch screen', 'Counter use'],
        image: U('photo-1559526324-4b87b5e36e44')
      },
      {
        name: 'iMin M2 Max',
        brand: 'iMin',
        blurb: 'High-performance desktop POS for busy retail and dining counters.',
        specs: ['High performance', 'Large screen', 'Built-in printer'],
        image: U('photo-1604754742629-3e5728249d73')
      },
      {
        name: 'iMin Falcon 1',
        brand: 'iMin',
        blurb: 'Stationary POS workstation for full-service checkout setups.',
        specs: ['Workstation', 'Multi-port', 'Stable operation'],
        image: U('photo-1556745757-8d76bdb6984b')
      }
    ]
  },
  {
    id: 'surveillance',
    title: 'Security & Surveillance',
    tagline: 'Dahua · Hikvision',
    description:
      'Cameras and recorders from Dahua and Hikvision for store security, monitoring, and loss prevention.',
    icon: Cctv,
    brands: ['Dahua', 'Hikvision'],
    products: [
      {
        name: 'Dahua IP Bullet Camera',
        brand: 'Dahua',
        blurb: 'Outdoor HD bullet camera for entrances and perimeter monitoring.',
        specs: ['HD / 4MP', 'Night vision', 'Weatherproof'],
        image: U('photo-1557597774-9d273605dfa9')
      },
      {
        name: 'Dahua Dome Camera',
        brand: 'Dahua',
        blurb: 'Indoor dome camera for retail floor and counter coverage.',
        specs: ['HD', 'Wide angle', 'Indoor'],
        image: U('photo-1558002038-1055907df827')
      },
      {
        name: 'Dahua NVR Recorder',
        brand: 'Dahua',
        blurb: 'Network video recorder for multi-camera storage and playback.',
        specs: ['Multi-channel', 'HDD storage', 'Remote view'],
        image: U('photo-1610552050890-fe99536c2615')
      },
      {
        name: 'Hikvision ColorVu Camera',
        brand: 'Hikvision',
        blurb: 'Full-color night vision camera for clear 24-hour monitoring.',
        specs: ['Full-color night', 'HD', 'Weatherproof'],
        image: U('photo-1591453089816-0fbb971b454c')
      },
      {
        name: 'Hikvision Dome Camera',
        brand: 'Hikvision',
        blurb: 'Compact indoor dome for store interiors and stockrooms.',
        specs: ['HD', 'Discreet', 'Indoor'],
        image: U('photo-1572569511254-d8f925fe2cbb')
      },
      {
        name: 'Hikvision NVR Recorder',
        brand: 'Hikvision',
        blurb: 'Network recorder with mobile remote viewing for store owners.',
        specs: ['Multi-channel', 'Mobile app', 'HDD storage'],
        image: U('photo-1517248135467-4c7edcad34c4')
      }
    ]
  },
  {
    id: 'displays',
    title: 'Monitors & Computers',
    tagline: 'AOC',
    description:
      'AOC monitors and business computers for back office, customer displays, and management workstations.',
    icon: Monitor,
    brands: ['AOC'],
    products: [
      {
        name: 'AOC 24" Monitor',
        brand: 'AOC',
        blurb: 'Full HD monitor for office and back-of-house workstations.',
        specs: ['24"', 'Full HD', 'VGA / HDMI'],
        image: U('photo-1527443224154-c4a3942d3acf')
      },
      {
        name: 'AOC 27" Monitor',
        brand: 'AOC',
        blurb: 'Larger display for management dashboards and reporting.',
        specs: ['27"', 'Full HD', 'HDMI'],
        image: U('photo-1593640408182-31c70c8268f5')
      },
      {
        name: 'AOC All-in-One PC',
        brand: 'AOC',
        blurb: 'Space-saving all-in-one computer for counters and offices.',
        specs: ['All-in-one', 'Compact', 'Business use'],
        image: U('photo-1547082299-de196ea013d6')
      },
      {
        name: 'AOC Business Desktop',
        brand: 'AOC',
        blurb: 'Reliable desktop unit for daily store management software.',
        specs: ['Desktop', 'Expandable', 'Business use'],
        image: U('photo-1517336714731-489689fd1ca8')
      }
    ]
  }
];
