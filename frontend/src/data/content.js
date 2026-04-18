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

const img = (id, w = 600) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const MENU = {
  ribs: [
    { name: "Full Rack St. Louis Ribs", desc: "Low-and-slow smoked 6 hours over hickory, finished with house glaze.", price: 24, image: img("photo-1544025162-d76694265947") },
    { name: "Half Rack Ribs", desc: "Tender, hand-rubbed, fall-off-the-bone.", price: 15, image: img("photo-1559847844-5315695dadae") },
    { name: "Memphis Dry Rub Ribs", desc: "No sauce, all flavor. Paprika, brown sugar, chili.", price: 22, image: img("photo-1605728791950-bf4964a59c30") },
  ],
  brisket: [
    { name: "Texas-Style Brisket Plate", desc: "14hr pecan-smoked, with pickled onions and white bread.", price: 19, image: img("photo-1529193591184-b1d58069ecdd") },
    { name: "Burnt Ends", desc: "Caramelized brisket points glazed in bourbon sauce.", price: 17, image: img("photo-1558030006-450675393462") },
    { name: "Brisket Chili Bowl", desc: "Slow-cooked with smoked peppers, topped with sharp cheddar.", price: 12, image: img("photo-1600891964092-4316c288032e") },
  ],
  pulledPork: [
    { name: "Pulled Pork Plate", desc: "Carolina-style, vinegar mopped, with coleslaw.", price: 14, image: img("photo-1544025162-d76694265947") },
    { name: "Pulled Pork Sandwich", desc: "Brioche bun, pickles, crispy onions.", price: 11, image: img("photo-1568901346375-23c9450c58cd") },
    { name: "Loaded Pork Nachos", desc: "Smoked pork, jalapeños, cheese sauce, pico.", price: 13, image: img("photo-1513456852971-30c0b8199d4d") },
  ],
  chicken: [
    { name: "Smoked Half Chicken", desc: "Brined overnight, smoked with applewood.", price: 16, image: img("photo-1587593810167-a84920ea0781") },
    { name: "BBQ Chicken Thighs (3)", desc: "Charred, glazed, crispy skin.", price: 13, image: img("photo-1598103442097-8b74394b95c6") },
    { name: "Hot Honey Wings", desc: "Smoked then flash-fried, tossed in hot honey.", price: 12, image: img("photo-1608039755401-742074f0548d") },
  ],
  sandwiches: [
    { name: "The Jefferson", desc: "Brisket, pulled pork, house slaw, pickles on a toasted bun.", price: 14, image: img("photo-1565299507177-b0ac66763828") },
    { name: "Hot Link Po'Boy", desc: "Smoked sausage, mustard, crispy onions.", price: 11, image: img("photo-1619096252214-ef06c45683e3") },
    { name: "Smokehouse Burger", desc: "Half-pound patty, bacon, cheddar, burnt-end jam.", price: 13, image: img("photo-1568901346375-23c9450c58cd") },
  ],
  sides: [
    { name: "Smoked Mac & Cheese", desc: "Three cheeses, panko crust.", price: 6, image: img("photo-1543339308-43e59d6b73a6") },
    { name: "Baked Beans", desc: "Slow-cooked with burnt ends and molasses.", price: 5, image: img("photo-1518779578993-ec3579fee39f") },
    { name: "Collard Greens", desc: "Braised with smoked turkey.", price: 5, image: img("photo-1574484284002-952d92456975") },
    { name: "Cornbread", desc: "Cast-iron baked, with honey butter.", price: 4, image: img("photo-1612203985729-70726954388c") },
    { name: "Hand-Cut Fries", desc: "Dusted with BBQ rub.", price: 5, image: img("photo-1576107232684-1279f390859f") },
    { name: "Coleslaw", desc: "Creamy, tangy, crisp.", price: 4, image: img("photo-1625938144755-652e08e359b7") },
  ],
  desserts: [
    { name: "Banana Pudding", desc: "Vanilla wafers, fresh banana, whipped cream.", price: 6, image: img("photo-1488477181946-6428a0291777") },
    { name: "Peach Cobbler", desc: "Georgia peaches, cinnamon crumble.", price: 7, image: img("photo-1562007908-859b4f7c6cc7") },
    { name: "Bourbon Pecan Pie", desc: "A Mississippi classic.", price: 7, image: img("photo-1464305795204-6f5bbfc7fb81") },
  ],
  drinks: [
    { name: "Sweet Tea", desc: "House-brewed, endless refills.", price: 3, image: img("photo-1556679343-c7306c1976bc") },
    { name: "Arnold Palmer", desc: "Sweet tea and lemonade.", price: 4, image: img("photo-1621263764928-df1444c5e859") },
    { name: "Craft Root Beer", desc: "Barrel-aged vanilla.", price: 5, image: img("photo-1527169402691-feff5539e52c") },
    { name: "Bourbon Flight", desc: "Three 1oz pours, Mississippi & Kentucky picks.", price: 14, image: img("photo-1569529465841-dfecdab7503b") },
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
  { name: "The High Church THC", rating: 5, date: "2 months ago", text: "Super excited about this new location!!! I'm in this area often and it's right on time! Their food is amazing and service is top tier! Will be back soon!", meta: "56 reviews" },
  { name: "Demetria Green", rating: 5, date: "2 months ago", text: "I tried the BBQ for the first time and it was amazing — the ribs are tender and juicy. Definitely worth the wait and we will be going back. Go check them out. You rock, Mr. Jefferson.", meta: "Local Guide · 64 reviews" },
  { name: "Michael Mclaurin", rating: 4, date: "a month ago", text: "Food was great. Waited a while for ribs, but the flavor was worth it. The brisket plate is seriously something special.", meta: "Local Guide · 20 reviews" },
  { name: "Tasha R.", rating: 5, date: "3 weeks ago", text: "Best banana pudding I've had in Jackson. The smoked mac & cheese — unreal.", meta: "18 reviews" },
];

export const GALLERY = [
  { url: "https://images.unsplash.com/photo-1611354609291-69aba96e45df?w=1200&q=80", alt: "Grilled meats", span: "row-span-2 col-span-2" },
  { url: "https://images.unsplash.com/photo-1761314014872-41e958dab41e?w=900&q=80", alt: "Glazed ribs", span: "" },
  { url: "https://images.unsplash.com/photo-1694192708491-881b730b8d2b?w=900&q=80", alt: "Steak on grill", span: "" },
  { url: "https://images.unsplash.com/photo-1680925847230-a3e85b84da92?w=900&q=80", alt: "Grill with food", span: "col-span-2" },
  { url: "https://images.unsplash.com/photo-1577271141104-b6bd7b76b8e9?w=900&q=80", alt: "Grilled meat", span: "" },
  { url: "https://images.unsplash.com/photo-1767346427054-d3a371e00f68?w=900&q=80", alt: "Cozy cabin interior", span: "" },
];
