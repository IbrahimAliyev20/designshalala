export type ProductSpec = {
  key: string;
  value: string;
};

export type ProductCategory = "Xonçalar" | "Gül" | "Şokolad";

export type Product = {
  id: number;
  slug: string;
  category: ProductCategory;
  title: string;
  short_description: string;
  long_description: string;
  main_image: string;
  gallery_images: string[];
  price: number;
  specs: ProductSpec[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "debdebeli-gelin-xonchasi",
    category: "Xonçalar",
    title: "Dəbdəbəli Gəlin Xonçası",
    short_description: "Qırmızı lentli, bəzəkli gəlin xonçası.",
    long_description:
      "Bu xüsusi gəlin xonçası ənənəvi naxışlar və müasir dizayn elementləri ilə bəzədilmişdir. Toyunuzun unudulmaz bir parçası olacaq.",
    main_image: "/images/logo.jpg",
    gallery_images: [
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
    ],
    price: 250,
    specs: [
      { key: "Material", value: "Məxmər, Gümüş Bəzəklər" },
      { key: "Rəng", value: "Qırmızı, Qızılı" },
    ],
  },
  {
    id: 2,
    slug: "zerif-nisan-xonchasi",
    category: "Xonçalar",
    title: "Zərif Nişan Xonçası",
    short_description: "Pastel rənglərdə, güllərlə bəzədilmiş nişan xonçası.",
    long_description:
      "Zərifliyi sevənlər üçün ideal seçim. Bu nişan xonçası qonaqlarınızı heyran edəcək. Tamamilə əl işidir.",
    main_image: "/images/logo.jpg",
    gallery_images: [
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
    ],
    price: 180,
    specs: [
      { key: "Material", value: "Taxta, Tül" },
      { key: "Rəng", value: "Çəhrayı, Pudra" },
    ],
  },
  {
    id: 3,
    slug: "qizilgul-buketi",
    category: "Gül",
    title: "Qızılgül Buketi",
    short_description: "51 ədəd premium holland qızılgülündən ibarət buket.",
    long_description:
      "Sevginizi ifadə etməyin ən gözəl yolu. Hər bir qızılgül xüsusi diqqətlə seçilmişdir və təzəliyini uzun müddət qoruyur.",
    main_image: "/images/logo.jpg",
    gallery_images: [
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
    ],
    price: 190,
    specs: [
      { key: "Gül sayı", value: "51 ədəd" },
      { key: "Mənşə", value: "Hollandiya" },
    ],
  },
  {
    id: 4,
    slug: "qarisiq-movsum-gulleri-sebeti",
    category: "Gül",
    title: "Qarışıq Mövsüm Gülləri Səbəti",
    short_description: "Rəngarəng mövsüm güllərindən ibarət zərif səbət.",
    long_description:
      "Hər bir hadisə üçün mükəmməl hədiyyə. Zambaqlar, çobanyastığılar və qızılgüllərin harmoniyası.",
    main_image: "/images/logo.jpg",
    gallery_images: [
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
    ],
    price: 150,
    specs: [
      { key: "Növ", value: "Qarışıq (Mövsümi)" },
      { key: "Təqdimat", value: "Həsir səbət" },
    ],
  },
  {
    id: 5,
    slug: "premium-belcika-sokolad-qutusu",
    category: "Şokolad",
    title: "Premium Belçika Şokolad Qutusu",
    short_description: "Əl işi, çeşidli tünd və südlü şokoladlar.",
    long_description:
      "Dad biliciləri üçün xüsusi hazırlanmış bu qutuda 24 fərqli dadda şokolad tapacaqsınız. Hər biri unikal bir təcrübə vəd edir.",
    main_image: "/images/logo.jpg",
    gallery_images: [
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
    ],
    price: 85,
    specs: [
      { key: "Çəki", value: "500 qr." },
      { key: "Növ", value: "Tünd, Südlü, Ağ" },
    ],
  },
  {
    id: 6,
    slug: "ciyelekli-sokolad-buketi",
    category: "Şokolad",
    title: "Çiyələkli Şokolad Buketi",
    short_description:
      "Təzə çiyələklərin Belçika şokoladı ilə mükəmməl uyğunluğu.",
    long_description:
      "Həm gözəl, həm də ləzzətli bir hədiyyə. Bu buket təzə çiyələklərin südlü və ağ şokoladla örtülməsindən hazırlanmışdır.",
    main_image: "/images/logo.jpg",
    gallery_images: [
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
      "/images/logo.jpg",
    ],
    price: 120,
    specs: [
      { key: "Tərkibi", value: "Çiyələk, Südlü Şokolad, Ağ Şokolad" },
      { key: "Say", value: "Təxminən 25-30 çiyələk" },
    ],
  },
];

export default products;
