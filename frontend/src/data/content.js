export const RESTAURANT = {
  name: "Jefferson's Grill",
  tagline: "Slow-Smoked. Southern-Soul.",
  rating: 4.7,
  reviewCount: 12,
  priceRange: "$10–20",
  address: "2430 Bailey Ave, Jackson, MS 39213",
  plusCode: "8RH5+32 Jackson, Mississippi",
  cuisine: "Barbecue",
  phone: "(601) 555-0142",
  email: "hello@jeffersonsgrill.com",
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "12:00 PM – 9:00 PM" },
    { day: "Wednesday", hours: "12:00 PM – 9:00 PM" },
    { day: "Thursday", hours: "12:00 PM – 9:00 PM" },
    { day: "Friday", hours: "12:00 PM – 10:00 PM" },
    { day: "Saturday", hours: "12:00 PM – 10:00 PM" },
    { day: "Sunday", hours: "1:00 PM – 8:00 PM" },
  ],
};

export const MENU = {
  ribs: [
    { name: "Full Rack St. Louis Ribs", desc: "Low-and-slow smoked 6 hours over hickory, finished with house glaze.", price: 24 },
    { name: "Half Rack Ribs", desc: "Tender, hand-rubbed, fall-off-the-bone.", price: 15 },
    { name: "Memphis Dry Rub Ribs", desc: "No sauce, all flavor. Paprika, brown sugar, chili.", price: 22 },
  ],
  brisket: [
    { name: "Texas-Style Brisket Plate", desc: "14hr pecan-smoked, with pickled onions and white bread.", price: 19 },
    { name: "Burnt Ends", desc: "Caramelized brisket points glazed in bourbon sauce.", price: 17 },
    { name: "Brisket Chili Bowl", desc: "Slow-cooked with smoked peppers, topped with sharp cheddar.", price: 12 },
  ],
  pulledPork: [
    { name: "Pulled Pork Plate", desc: "Carolina-style, vinegar mopped, with coleslaw.", price: 14 },
    { name: "Pulled Pork Sandwich", desc: "Brioche bun, pickles, crispy onions.", price: 11 },
    { name: "Loaded Pork Nachos", desc: "Smoked pork, jalapeños, cheese sauce, pico.", price: 13 },
  ],
  chicken: [
    { name: "Smoked Half Chicken", desc: "Brined overnight, smoked with applewood.", price: 16 },
    { name: "BBQ Chicken Thighs (3)", desc: "Charred, glazed, crispy skin.", price: 13 },
    { name: "Hot Honey Wings", desc: "Smoked then flash-fried, tossed in hot honey.", price: 12 },
  ],
  sandwiches: [
    { name: "The Jefferson", desc: "Brisket, pulled pork, house slaw, pickles on a toasted bun.", price: 14 },
    { name: "Hot Link Po'Boy", desc: "Smoked sausage, mustard, crispy onions.", price: 11 },
    { name: "Smokehouse Burger", desc: "Half-pound patty, bacon, cheddar, burnt-end jam.", price: 13 },
  ],
  sides: [
    { name: "Smoked Mac & Cheese", desc: "Three cheeses, panko crust.", price: 6 },
    { name: "Baked Beans", desc: "Slow-cooked with burnt ends and molasses.", price: 5 },
    { name: "Collard Greens", desc: "Braised with smoked turkey.", price: 5 },
    { name: "Cornbread", desc: "Cast-iron baked, with honey butter.", price: 4 },
    { name: "Hand-Cut Fries", desc: "Dusted with BBQ rub.", price: 5 },
    { name: "Coleslaw", desc: "Creamy, tangy, crisp.", price: 4 },
  ],
  desserts: [
    { name: "Banana Pudding", desc: "Vanilla wafers, fresh banana, whipped cream.", price: 6 },
    { name: "Peach Cobbler", desc: "Georgia peaches, cinnamon crumble.", price: 7 },
    { name: "Bourbon Pecan Pie", desc: "A Mississippi classic.", price: 7 },
  ],
  drinks: [
    { name: "Sweet Tea", desc: "House-brewed, endless refills.", price: 3 },
    { name: "Arnold Palmer", desc: "Sweet tea and lemonade.", price: 4 },
    { name: "Craft Root Beer", desc: "Barrel-aged vanilla.", price: 5 },
    { name: "Bourbon Flight", desc: "Three 1oz pours, Mississippi & Kentucky picks.", price: 14 },
  ],
};

export const MENU_TABS = [
  { id: "ribs", label: "Ribs" },
  { id: "brisket", label: "Brisket" },
  { id: "pulledPork", label: "Pulled Pork" },
  { id: "chicken", label: "Chicken" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "sides", label: "Sides" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

export const REVIEWS = [
  {
    name: "The High Church THC",
    rating: 5,
    date: "2 months ago",
    text: "Super excited about this new location!!! I'm in this area often and it's right on time! Their food is amazing and service is top tier! Will be back soon!",
    meta: "56 reviews",
  },
  {
    name: "Demetria Green",
    rating: 5,
    date: "2 months ago",
    text: "I tried the BBQ for the first time and it was amazing — the ribs are tender and juicy. Definitely worth the wait and we will be going back. Go check them out. You rock, Mr. Jefferson.",
    meta: "Local Guide · 64 reviews",
  },
  {
    name: "Michael Mclaurin",
    rating: 4,
    date: "a month ago",
    text: "Food was great. Waited a while for ribs, but the flavor was worth it. The brisket plate is seriously something special.",
    meta: "Local Guide · 20 reviews",
  },
  {
    name: "Tasha R.",
    rating: 5,
    date: "3 weeks ago",
    text: "Best banana pudding I've had in Jackson. The smoked mac & cheese — unreal.",
    meta: "18 reviews",
  },
];

export const GALLERY = [
  { url: "https://images.unsplash.com/photo-1611354609291-69aba96e45df?w=1200&q=80", alt: "Grilled meats", span: "row-span-2 col-span-2" },
  { url: "https://images.unsplash.com/photo-1761314014872-41e958dab41e?w=900&q=80", alt: "Glazed ribs", span: "" },
  { url: "https://images.unsplash.com/photo-1694192708491-881b730b8d2b?w=900&q=80", alt: "Steak on grill", span: "" },
  { url: "https://images.unsplash.com/photo-1680925847230-a3e85b84da92?w=900&q=80", alt: "Grill with food", span: "col-span-2" },
  { url: "https://images.unsplash.com/photo-1577271141104-b6bd7b76b8e9?w=900&q=80", alt: "Grilled meat", span: "" },
  { url: "https://images.unsplash.com/photo-1767346427054-d3a371e00f68?w=900&q=80", alt: "Cozy cabin interior", span: "" },
];
