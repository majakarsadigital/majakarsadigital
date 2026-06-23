export type Product = {
  id: string
  name: string
  image: string
  category: string
  desc: string
  price: string
  originalPrice: string | null
  discount: string | null
  badge?: 'Popular' | 'New'
  type?: string
}

export const sampleProducts: Product[] = [
  {
    id: 'dashboard-analytics',
    name: 'Dashboard Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=338&fit=crop',
    category: 'Web & App',
    desc: 'Dashboard analitik real-time untuk visualisasi data bisnis Anda secara komprehensif.',
    price: 'Rp 4.900.000',
    originalPrice: 'Rp 9.900.000',
    discount: '-50%',
    badge: 'Popular',
    type: 'ready',
  },
  {
    id: 'ecommerce-ui-kit',
    name: 'E-Commerce UI Kit',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=338&fit=crop',
    category: 'Website',
    desc: 'Kit komponen toko online siap pakai dengan desain modern dan responsif.',
    price: 'Rp 2.900.000',
    originalPrice: 'Rp 5.900.000',
    discount: 'Hemat Rp 3jt',
    type: 'ready',
  },
  {
    id: 'saas-landing-page',
    name: 'SaaS Landing Page',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=338&fit=crop',
    category: 'Website',
    desc: 'Landing page konversi tinggi untuk produk SaaS dengan animasi dan form leads.',
    price: 'Rp 1.900.000',
    originalPrice: 'Rp 3.900.000',
    discount: '-51%',
    type: 'custom',
  },
  {
    id: 'mobile-banking-app',
    name: 'Mobile Banking App',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=338&fit=crop',
    category: 'Aplikasi',
    desc: 'Aplikasi perbankan mobile dengan UI modern, aman, dan mudah digunakan.',
    price: 'Rp 5.900.000',
    originalPrice: 'Rp 8.900.000',
    discount: 'Hemat Rp 3jt',
    badge: 'Popular',
    type: 'custom'
  },
  {
    id: 'portfolio-template',
    name: 'Portfolio Template',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=338&fit=crop',
    category: 'Website',
    desc: 'Template portofolio profesional untuk freelancer, developer, dan desainer kreatif.',
    price: 'Rp 1.500.000',
    originalPrice: 'Rp 3.500.000',
    discount: '-57%',
    type: 'custom'
  },
  {
    id: 'food-delivery-app',
    name: 'Food Delivery App',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&h=338&fit=crop',
    category: 'Aplikasi',
    desc: 'Aplikasi pesan antar makanan lengkap dengan tracking real-time dan payment gateway.',
    price: 'Rp 3.900.000',
    originalPrice: 'Rp 6.900.000',
    discount: 'Hemat Rp 3jt',
    badge: 'New',
    type: 'custom'
  },
  {
    id: 'admin-dashboard',
    name: 'Admin Dashboard',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=338&fit=crop',
    category: 'Web & App',
    desc: 'Panel admin lengkap dengan manajemen user, laporan, dan kontrol akses berbasis peran.',
    price: 'Rp 4.500.000',
    originalPrice: 'Rp 7.900.000',
    discount: '-43%',
    type: 'custom'
  },
  {
    id: 'travel-booking-ui',
    name: 'Travel Booking UI',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=338&fit=crop',
    category: 'Web & App',
    desc: 'Antarmuka pemesanan perjalanan dengan pencarian tiket, hotel, dan itinerary planner.',
    price: 'Rp 3.500.000',
    originalPrice: 'Rp 6.500.000',
    discount: null,
    type: 'ready',
  },
  {
    id: 'fitness-tracker-app',
    name: 'Fitness Tracker App',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=338&fit=crop',
    category: 'Aplikasi',
    desc: 'Aplikasi pelacak kebugaran dengan fitur workout log, kalori, dan progress harian.',
    price: 'Rp 2.900.000',
    originalPrice: 'Rp 4.900.000',
    discount: '-40%',
    type: 'custom'
  },
  {
    id: 'real-estate-website',
    name: 'Real Estate Website',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=338&fit=crop',
    category: 'Website',
    desc: 'Website properti profesional dengan filter pencarian, peta interaktif, dan form inquiry.',
    price: 'Rp 5.500.000',
    originalPrice: 'Rp 8.900.000',
    discount: 'Hemat Rp 3.4jt',
    badge: 'Popular',
    type: 'ready',
  },
  {
    id: 'social-media-app',
    name: 'Social Media App',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=338&fit=crop',
    category: 'Aplikasi',
    desc: 'Platform media sosial dengan feed, stories, notifikasi real-time, dan sistem follow.',
    price: 'Rp 3.900.000',
    originalPrice: 'Rp 6.900.000',
    discount: '-43%',
    type: 'custom'
  },
  {
    id: 'music-streaming-ui',
    name: 'Music Streaming UI',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=338&fit=crop',
    category: 'Web & App',
    desc: 'Antarmuka streaming musik dengan player, playlist, dan rekomendasi berbasis AI.',
    price: 'Rp 2.500.000',
    originalPrice: 'Rp 4.500.000',
    discount: 'Hemat Rp 2jt',
    badge: 'New',
    type: 'custom'
  },
  {
    id: 'crypto-wallet-app',
    name: 'Crypto Wallet App',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=338&fit=crop',
    category: 'Aplikasi',
    desc: 'Dompet kripto mobile dengan fitur swap, portfolio tracker, dan keamanan biometrik.',
    price: 'Rp 4.900.000',
    originalPrice: 'Rp 7.900.000',
    discount: '-37%',
    type: 'custom'
  },
  {
    id: 'crm-web-app',
    name: 'CRM Web App',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=338&fit=crop',
    category: 'Web & App',
    desc: 'Sistem CRM lengkap untuk manajemen leads, pipeline penjualan, dan laporan performa tim.',
    price: 'Rp 6.500.000',
    originalPrice: 'Rp 9.900.000',
    discount: 'Hemat Rp 3.4jt',
    badge: 'Popular',
  },
  {
    id: 'news-blog-template',
    name: 'News & Blog Template',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=338&fit=crop',
    category: 'Website',
    desc: 'Template berita dan blog dengan CMS terintegrasi, kategori, dan SEO-friendly.',
    price: 'Rp 1.900.000',
    originalPrice: 'Rp 3.900.000',
    discount: '-51%',
    type: 'custom'
  },
  {
    id: 'marketplace-ui-kit',
    name: 'Marketplace UI Kit',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=338&fit=crop',
    category: 'Web & App',
    desc: 'Kit UI marketplace B2C lengkap dengan halaman produk, keranjang, dan checkout flow.',
    price: 'Rp 4.500.000',
    originalPrice: 'Rp 7.500.000',
    discount: '-40%',
    type: 'custom'
  },
]

