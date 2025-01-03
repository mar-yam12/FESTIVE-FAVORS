import { NextResponse } from "next/server";
interface Feature {
  id: number;
  tag: string;
  name: string;
  price: number;
  category: string;
  color: string;
  imageUrl: string;
  description?: string;
}

const features: Feature[] = [
  {
    id: 1,
    tag: "SALE",
    name: "Metallic Gold Balloons",
    price: 1500,
    category: "Balloons",
    color: "red",
    imageUrl: "/1.jpg",
    description: "The package comes with 12 inch gold metallic balloons (50 pcs), whose colors are super metallic, vibrant and bright.",
  },
  {
    id: 2,
    tag: "HOT",
    name: "Backdrop Party Tinsel Curtain",
    price: 500,
    category: "Wall Decor",
    color: "white",
    imageUrl: "/2.jpg",
    description: "A delicate bundle of white roses symbolizing purity and elegance, ideal for special moments.",
  },
  {
    id: 3,
    tag: "NEW",
    name: "Star String Lights",
    price: 1500,
    category: "Wall Decor",
    color: "Gold",
    imageUrl: "/3.jpg",
    description: "10 feet led string lights with 20 cute little stars. Each star has a size of 1.3 inches, which is neither too big nor too small. Fun star-shaped pixie lights that made of crystal PVC, strong and durable",
  },
  {
    id: 4,
    tag: "HOT",
    name: "3D Butterfly Wall Decor",
    price: 2000,
    category: "Wall Decor",
    color: "Colorful",
    imageUrl: "/4.jpg",
    description: "The butterfly stickers are made of metallic paper, you can fold the butterfly sticker into the shape you want. After folding, 3D butterfly wall stickers will add vitality to your room..",
  },
  {
    id: 5,
    tag: "SALE",
    name: "Pink Rose Gold Birthday Party Decorations Set",
    price: 6000,
    category: "Decor Set",
    color: "Pink",
    imageUrl: "/5.jpg",
    description: "All the items of this stylish and fabulous decoration set come in elegant rose gold and all use high grade paper and string. Perfect 18th 21st 30th 40th 50th 60th 70th 80th 90th birthday decorations for girls and women",
  },
  {
    id: 6,
    tag: "NEW",
    name: "Red and Gold Balloons",
    price: 1000,
    category: "Balloons",
    color: "Red and Golden",
    imageUrl: "/6.jpg",
    description: "60 Pcs Balloons Gold Red Set Includes The Following Latex Balloons - 10 Inch Burgundy Balloons With One Metallic Gold Balloons Inside (25 Pcs); 10 Inch Ruby Red Balloons",
  },
  {
    id: 7,
    tag: "NEW",
    name: "Scented Tealight Candles",
    price: 1750,
    category: "Candles",
    color: "Red",
    imageUrl: "/7.jpg",
    description: "Scented Tealight Candle: Our scented candle releases a relaxing aroma that will captivate your senses, relaxing and soothing, restoring and balancing the mind and body with floral and fruity notes",
  },
  {
    id: 8,
    tag: "HOT",
    name: "LED Curtain Lights",
    price: 2500,
    category: "LED Lights",
    color: "Gold",
    imageUrl: "/8.jpg",
    description: "Curtain Lights: With a size of 9.8 x 9.8ft and 300 warm white LEDs, the fairy string lights create a dazzling and large cover display. The 1.64ft lead wire allows for flexible installation options, perfect for adding a warm and festive ambiance",
  },
  {
    id: 9,
    tag: "SALE",
    name: "Electric Air Balloon Pump",
    price: 5500,
    category: "Balloon Pump",
    color: "Pink",
    imageUrl: "/9.jpg",
    description: "Light Weight & Portable Design - AGPTEK balloon pump can easily create a warm atmosphere.",
  },
  {
    id: 10,
    tag: "NEW",
    name: "Mirror Disco Ball",
    price: 1550,
    category: "Disco Ball",
    color: "Silver",
    imageUrl: "/10.jpg",
    description: "The rotating mirror ball reflects the light on its surface. In this way, splendid light effect will be created.",
  },
  {
    id: 11,
    tag: "SALE",
    name: "Balloon Stand Kit",
    price: 500,
    category: "Stand",
    color: "White",
    imageUrl: "/11.jpg",
    description: "Multiple sets of balloon holders are provided, which can be combined in different ways according to the number of balloons.",
  },
  {
    id: 12,
    tag: "HOT",
    name: "Mr & Mrs Sign for Couple",
    price: 2600,
    category: "Stand",
    color: "mixed",
    imageUrl: "/12.jpg",
    description: "Our wedding table decorations are made of wood and are sturdy and durable",
  },
  {
    id: 13,
    tag: "SALE",
    name: " Wisteria Artificial Flowers",
    price: 3000,
    category: "Flowers",
    color: "White",
    imageUrl: "/13.jpg",
    description: " The stems are made of environmentally friendly plastic and flowers & leaves made of silk cloth, harmless and poison-less, easy to clean, perfect for wedding and table arrangement, party, courtyard, pipeline air conditioning winding flowers.",
  },
  {
    id: 14,
    tag: "HOT",
    name: "Valentines Day Decor",
    price: 6000,
    category: "Decor Tree",
    color: "Red",
    imageUrl: "/14.jpg",
    description: "The Valentines Day lighted birch tree is covered with artificial bark and hand-painted bark texture",
  },
  {
    id: 15,
    tag: "NEW",
    name: " Votive Candle Holders",
    price: 2500,
    category: "Candles",
    color: "Purple",
    imageUrl: "/15.jpg",
    description: "Each candle holders feature beauty, rich purple color and sunflower embossed design, be rich with the vintage",
  },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (id) {
    const featureId = parseInt(id, 10);

    if (isNaN(featureId)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const feature = features.find((f) => f.id === featureId);
    if (feature) {
      return NextResponse.json(feature, { status: 200 });
    } else {
      return NextResponse.json({ error: "Feature not found" }, { status: 404 });
    }
  }

  return NextResponse.json(features, { status: 200 });
}
