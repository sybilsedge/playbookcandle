export interface Product {
  id: string;
  name: string;
  scentProfile: string;
  tacticalNote: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  {
    id: "blitz-pine",
    name: "Red Zone Blitz",
    scentProfile: "Fraser Fir, Cedarwood, Crisp Winter Air",
    tacticalNote: "High-intensity scent for critical game situations. Best deployed when momentum is on the line.",
    price: 28,
    category: "Game Day Classics",
  },
  {
    id: "chalk-talk",
    name: "Monday Morning Chalk Talk",
    scentProfile: "Old Paper, Leather, Polished Mahogany",
    tacticalNote: "A sophisticated profile for film review and strategic planning. Keeps the mind sharp for the next opponent.",
    price: 28,
    category: "The Study",
  },
  {
    id: "tailgate-smoke",
    name: "Parking Lot Traditions",
    scentProfile: "Smoked Hickory, Charcoal, Bourbon Vanilla",
    tacticalNote: "Captured essence of the pre-game atmosphere. Ideal for establishing early dominance.",
    price: 28,
    category: "Game Day Classics",
  },
  {
    id: "trench-warfare",
    name: "The Trenches",
    scentProfile: "Earthy Moss, Wet Soil, Heavy Musk",
    tacticalNote: "Gritty and relentless. For those who understand that games are won at the line of scrimmage.",
    price: 28,
    category: "Special Teams",
  }
];
