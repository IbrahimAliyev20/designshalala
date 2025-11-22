export type ProductSpec = {
  key: string;
  value: string;
};

export type ProductCategory = "Xonçalar" | "Buklet" | "Özəl Gün Xatirəsi";

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
  // Xonçalar Kategorisi
  {
    id: 1,
    slug: "xonca-1",
    category: "Xonçalar",
    title: "Dəbdəbəli Gəlin Xonçası",
    short_description: "Qırmızı lentli, bəzəkli gəlin xonçası.",
    long_description:
      "Bu xüsusi gəlin xonçası ənənəvi naxışlar və müasir dizayn elementləri ilə bəzədilmişdir. Toyunuzun unudulmaz bir parçası olacaq.",
    main_image: "/product/xoncalar/1dcbdd285a2ed712d157fd51cee65f00.jpg",
    gallery_images: [
      "/product/xoncalar/1dcbdd285a2ed712d157fd51cee65f00.jpg",
    ],
    price: 250,
    specs: [
      { key: "Material", value: "Məxmər, Gümüş Bəzəklər" },
      { key: "Rəng", value: "Qırmızı, Qızılı" },
    ],
  },
  {
    id: 2,
    slug: "xonca-2",
    category: "Xonçalar",
    title: "Zərif Nişan Xonçası",
    short_description: "Pastel rənglərdə, güllərlə bəzədilmiş nişan xonçası.",
    long_description:
      "Zərifliyi sevənlər üçün ideal seçim. Bu nişan xonçası qonaqlarınızı heyran edəcək. Tamamilə əl işidir.",
    main_image: "/product/xoncalar/9b4155e6e7234cbae400b7d8c4acf346 (1).jpg",
    gallery_images: [
      "/product/xoncalar/9b4155e6e7234cbae400b7d8c4acf346 (1).jpg",
    ],
    price: 180,
    specs: [
      { key: "Material", value: "Taxta, Tül" },
      { key: "Rəng", value: "Çəhrayı, Pudra" },
    ],
  },
  {
    id: 3,
    slug: "xonca-3",
    category: "Xonçalar",
    title: "Klassik Gəlin Xonçası",
    short_description: "Ənənəvi dizayn ilə hazırlanmış zərif gəlin xonçası.",
    long_description:
      "Klassik gözəlliyi müasir zövqlə birləşdirən bu xonça, toyunuzun ən gözəl detallarından biri olacaq.",
    main_image: "/product/xoncalar/fa52336b50725e6008953308ec8e8479.jpg",
    gallery_images: [
      "/product/xoncalar/fa52336b50725e6008953308ec8e8479.jpg",
    ],
    price: 220,
    specs: [
      { key: "Material", value: "Məxmər, Qızıl Bəzəklər" },
      { key: "Rəng", value: "Qırmızı, Qızılı" },
    ],
  },
  // Şokolad Kategorisi
  {
    id: 4,
    slug: "sokolad-1",
    category: "Özəl Gün Xatirəsi",
    title: "Premium Belçika Şokolad Qutusu",
    short_description: "Əl işi, çeşidli tünd və südlü şokoladlar.",
    long_description:
      "Dad biliciləri üçün xüsusi hazırlanmış bu qutuda 24 fərqli dadda şokolad tapacaqsınız. Hər biri unikal bir təcrübə vəd edir.",
    main_image: "/product/sokoladlar/00050fb11063668871da72058ed04135.jpg",
    gallery_images: [
      "/product/sokoladlar/00050fb11063668871da72058ed04135.jpg",
    ],
    price: 85,
    specs: [
      { key: "Çəki", value: "500 qr." },
      { key: "Növ", value: "Tünd, Südlü, Ağ" },
    ],
  },
  {
    id: 5,
    slug: "sokolad-2",
    category: "Özəl Gün Xatirəsi",
    title: "Çiyələkli Şokolad Buketi",
    short_description:
      "Təzə çiyələklərin Belçika şokoladı ilə mükəmməl uyğunluğu.",
    long_description:
      "Həm gözəl, həm də ləzzətli bir hədiyyə. Bu buket təzə çiyələklərin südlü və ağ şokoladla örtülməsindən hazırlanmışdır.",
    main_image: "/product/sokoladlar/0374058fee6873328cff8f4212e71e51.jpg",
    gallery_images: [
      "/product/sokoladlar/0374058fee6873328cff8f4212e71e51.jpg",
    ],
    price: 120,
    specs: [
      { key: "Tərkibi", value: "Çiyələk, Südlü Şokolad, Ağ Şokolad" },
      { key: "Say", value: "Təxminən 25-30 çiyələk" },
    ],
  },
  {
    id: 6,
    slug: "sokolad-3",
    category: "Özəl Gün Xatirəsi",
    title: "Lüks Şokolad Kompozisiyası",
    short_description: "Premium şokoladlardan hazırlanmış zərif kompozisiya.",
    long_description:
      "Hər bir detalı xüsusi diqqətlə hazırlanmış bu kompozisiya, sevdiyiniz insanlar üçün mükəmməl bir hədiyyədir.",
    main_image: "/product/sokoladlar/05113a52fe3d7f47855a7af8dcdd5155.jpg",
    gallery_images: [
      "/product/sokoladlar/05113a52fe3d7f47855a7af8dcdd5155.jpg",
    ],
    price: 95,
    specs: [
      { key: "Çəki", value: "400 qr." },
      { key: "Növ", value: "Premium Belçika Şokoladı" },
    ],
  },
  {
    id: 7,
    slug: "sokolad-4",
    category: "Özəl Gün Xatirəsi",
    title: "Şokolad Hədiyyə Qutusu",
    short_description: "Müxtəlif növ şokoladlardan ibarət hədiyyə qutusu.",
    long_description:
      "Sevdiyiniz insanları sevindirmək üçün ideal seçim. Bu qutuda müxtəlif daddlar və formalarda şokoladlar var.",
    main_image: "/product/sokoladlar/35bb5552844e474863bf22be5fbea095.jpg",
    gallery_images: [
      "/product/sokoladlar/35bb5552844e474863bf22be5fbea095.jpg",
    ],
    price: 75,
    specs: [
      { key: "Çəki", value: "350 qr." },
      { key: "Növ", value: "Qarışıq" },
    ],
  },
  {
    id: 8,
    slug: "sokolad-5",
    category: "Özəl Gün Xatirəsi",
    title: "Romantik Şokolad Buketi",
    short_description: "Sevgi günü üçün xüsusi hazırlanmış şokolad buketi.",
    long_description:
      "Sevgililər günü və ya xüsusi günlər üçün mükəmməl hədiyyə. Hər bir detal sevgi ilə hazırlanmışdır.",
    main_image: "/product/sokoladlar/a1c2e4024321de6d981128db13d2092b.jpg",
    gallery_images: [
      "/product/sokoladlar/a1c2e4024321de6d981128db13d2092b.jpg",
    ],
    price: 110,
    specs: [
      { key: "Tərkibi", value: "Premium Şokolad, Dekorasiya" },
      { key: "Məqsəd", value: "Romantik Hədiyyə" },
    ],
  },
  {
    id: 9,
    slug: "sokolad-6",
    category: "Özəl Gün Xatirəsi",
    title: "Şokolad Səbəti",
    short_description: "Zərif səbətdə təqdim olunan şokolad kompozisiyası.",
    long_description:
      "Gözəl bir səbətdə təqdim olunan bu şokolad kompozisiyası, hər bir xüsusi gün üçün ideal hədiyyədir.",
    main_image: "/product/sokoladlar/a42a1bf5a54e012a6820dd154fa9e6f5.jpg",
    gallery_images: [
      "/product/sokoladlar/a42a1bf5a54e012a6820dd154fa9e6f5.jpg",
    ],
    price: 130,
    specs: [
      { key: "Çəki", value: "600 qr." },
      { key: "Təqdimat", value: "Həsir Səbət" },
    ],
  },
  {
    id: 10,
    slug: "sokolad-7",
    category: "Özəl Gün Xatirəsi",
    title: "Premium Şokolad Kolleksiyası",
    short_description: "Yüksək keyfiyyətli şokoladlardan ibarət kolleksiya.",
    long_description:
      "Hər biri xüsusi seçilmiş premium şokoladlardan ibarət bu kolleksiya, dad biliciləri üçün mükəmməl seçimdir.",
    main_image: "/product/sokoladlar/d3c856628e438e7d52ffb4501d6de946.jpg",
    gallery_images: [
      "/product/sokoladlar/d3c856628e438e7d52ffb4501d6de946.jpg",
    ],
    price: 100,
    specs: [
      { key: "Çəki", value: "450 qr." },
      { key: "Keyfiyyət", value: "Premium" },
    ],
  },
  {
    id: 11,
    slug: "sokolad-8",
    category: "Özəl Gün Xatirəsi",
    title: "Şokolad Hədiyyə Paketi",
    short_description: "Gözəl qablaşdırmada təqdim olunan şokolad paketi.",
    long_description:
      "Xüsusi qablaşdırmada təqdim olunan bu şokolad paketi, hər bir xüsusi gün üçün ideal hədiyyədir.",
    main_image: "/product/sokoladlar/e8ffaff1d6f027899fbb032eb243d6e0.jpg",
    gallery_images: [
      "/product/sokoladlar/e8ffaff1d6f027899fbb032eb243d6e0.jpg",
    ],
    price: 80,
    specs: [
      { key: "Çəki", value: "400 qr." },
      { key: "Qablaşdırma", value: "Premium" },
    ],
  },
  {
    id: 12,
    slug: "sokolad-9",
    category: "Özəl Gün Xatirəsi",
    title: "Şokolad Kompozisiyası",
    short_description: "Müxtəlif formalarda şokoladlardan ibarət kompozisiya.",
    long_description:
      "Hər biri unikal formada hazırlanmış şokoladlardan ibarət bu kompozisiya, gözəl bir hədiyyədir.",
    main_image: "/product/sokoladlar/f48f373c1268827d6a0ae3a15faa0364.jpg",
    gallery_images: [
      "/product/sokoladlar/f48f373c1268827d6a0ae3a15faa0364.jpg",
    ],
    price: 90,
    specs: [
      { key: "Çəki", value: "500 qr." },
      { key: "Forma", value: "Müxtəlif" },
    ],
  },
  // Buklet (Devetname) Kategorisi
  {
    id: 13,
    slug: "gul-1",
    category: "Buklet",
    title: "Qızılgül Buketi",
    short_description: "51 ədəd premium holland qızılgülündən ibarət buket.",
    long_description:
      "Sevginizi ifadə etməyin ən gözəl yolu. Hər bir qızılgül xüsusi diqqətlə seçilmişdir və təzəliyini uzun müddət qoruyur.",
    main_image: "/product/devetname/395f12ae536383b12f7e714668909c8b.jpg",
    gallery_images: [
      "/product/devetname/395f12ae536383b12f7e714668909c8b.jpg",
    ],
    price: 190,
    specs: [
      { key: "Gül sayı", value: "51 ədəd" },
      { key: "Mənşə", value: "Hollandiya" },
    ],
  },
  {
    id: 14,
    slug: "gul-2",
    category: "Buklet",
    title: "Qarışıq Mövsüm Gülləri Səbəti",
    short_description: "Rəngarəng mövsüm güllərindən ibarət zərif səbət.",
    long_description:
      "Hər bir hadisə üçün mükəmməl hədiyyə. Zambaqlar, çobanyastığılar və qızılgüllərin harmoniyası.",
    main_image: "/product/devetname/e1282a54d540de18f9433eac14d4db62.jpg",
    gallery_images: [
      "/product/devetname/e1282a54d540de18f9433eac14d4db62.jpg",
    ],
    price: 150,
    specs: [
      { key: "Növ", value: "Qarışıq (Mövsümi)" },
      { key: "Təqdimat", value: "Həsir səbət" },
    ],
  },
  {
    id: 15,
    slug: "gul-3",
    category: "Buklet",
    title: "Romantik Gül Buketi",
    short_description: "Sevgi günü üçün xüsusi hazırlanmış romantik gül buketi.",
    long_description:
      "Sevgililər günü və ya xüsusi günlər üçün mükəmməl hədiyyə. Hər bir gül sevgi ilə seçilmişdir.",
    main_image: "/product/devetname/e1282a54d540de18f9433saeac14d4db62.jpg",
    gallery_images: [
      "/product/devetname/e1282a54d540de18f9433saeac14d4db62.jpg",
    ],
    price: 170,
    specs: [
      { key: "Gül sayı", value: "33 ədəd" },
      { key: "Rəng", value: "Qırmızı, Çəhrayı" },
    ],
  },
  {
    id: 16,
    slug: "gul-4",
    category: "Buklet",
    title: "Lüks Gül Kompozisiyası",
    short_description: "Premium güllərdən hazırlanmış lüks kompozisiya.",
    long_description:
      "Hər bir detalı xüsusi diqqətlə hazırlanmış bu kompozisiya, ən xüsusi günlər üçün mükəmməl hədiyyədir.",
    main_image: "/product/devetname/f74efa7c00cd67d662dfebfe20fd7157.jpg",
    gallery_images: [
      "/product/devetname/f74efa7c00cd67d662dfebfe20fd7157.jpg",
    ],
    price: 200,
    specs: [
      { key: "Gül sayı", value: "99 ədəd" },
      { key: "Keyfiyyət", value: "Premium" },
    ],
  },
];

export default products;
