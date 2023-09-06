const mongoose = require("mongoose");
const Product = require("./models/product");
const User = require("./models/users");

mongoose
  .connect("mongodb://localhost:27017/uniMarketPlace")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

const seedProducts = [
  {
    product_id: 1,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968958_832_samsung_galaxy-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Smartwatch (Black Strap, 46mm)",
    product_price: 146.960784313725,
    product_description:
      "Exynos 9110 Dual Core Processor360 x 360 PixelsSuper AMOLEDBlackLithium PolymerTracks: Distance, Pace, Steps, Sleep Quality, Calories Burned, Heart RateAlways-On Color Display With Scratch Resistant Gorilla Glass Dx+",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 2,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968958_832_samsung_galaxy-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Smartwatch (Beige Strap, 42mm)",
    product_price: 156.764705882353,
    product_description:
      "Exynos 9110 Dual Core Processor360 x 360 PixelsSuper AMOLEDBlackSports modes, Firstbeat motion algorithm, Pressure detection, 24-hour heart rate monitoring, Breathing training, sleep detection",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 3,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Mi-Watch-Revolve-DB-437x800-1601366021.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Xiaomi",
    product_name: "Xiaomi Mi Watch Revolve Smartwatch (Black Strap, 36mm)",
    product_price: 107.833333333333,
    product_description:
      "454√ó454AMOLEDChrome Silver, Midnight BlackSports modes, Firstbeat motion algorithm, Pressure detection, 24-hour heart rate monitoring, Breathing training, sleep detection",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 4,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Mi-Watch-Revolve-DB-437x800-1601366021.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Xiaomi",
    product_name: "Xiaomi Mi Watch Revolve Smartwatch (Blue Strap, 36mm)",
    product_price: 107.745098039216,
    product_description:
      "454√ó454AMOLEDChrome Silver, Midnight BlackLithium PolymerTracks: Distance, Pace, Steps, Sleep Quality, Calories Burned, Heart RateAlways-On Color Display With Scratch Resistant Gorilla Glass Dx+",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 5,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968958_832_samsung_galaxy-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Smartwatch (Black Strap, 42mm)",
    product_price: 195,
    product_description:
      "Exynos 9110 Dual Core Processor360 x 360 PixelsSuper AMOLEDBlackLithium PolymerTracks: Distance, Pace, Steps, Sleep Quality, Calories Burned, Heart RateAlways-On Color Display With Scratch Resistant Gorilla Glass Dx+",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 6,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968958_832_samsung_galaxy-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Smartwatch (Rose Gold Strap, 42mm)",
    product_price: 862.598039215686,
    product_description:
      "Exynos 9110 Dual Core Processor360 x 360 PixelsSuper AMOLEDBlackBlood pressure tracking",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 7,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-active-main-448x800-1561459523.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Watch Active Smartwatch (Black Strap, 40mm)",
    product_price: 186.176470588235,
    product_description:
      "Samsung Exynos 9110360x360AMOLEDBlack, Deep Green, Rose Gold, SilverBlood pressure tracking",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 8,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-active-main-448x800-1561459523.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name:
      "Samsung Galaxy Watch Active Smartwatch (Rose Gold Strap, 40mm)",
    product_price: 313.71568627451,
    product_description:
      "Samsung Exynos 9110360x360AMOLEDBlack, Deep Green, Rose Gold, SilverBlood pressure tracking",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 9,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-active-main-448x800-1561459523.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Watch Active Smartwatch (Silver Strap, 40mm)",
    product_price: 186.176470588235,
    product_description:
      "Samsung Exynos 9110360x360AMOLEDBlack, Deep Green, Rose Gold, SilverLithium IonBuilt In Fitness Tracker: Sleep, Steps Count, Distance And Calories Burned",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 10,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968938_832_fossil_q-founder-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Founder Smartwatch (Silver Strap, 45mm)",
    product_price: 58.8137254901961,
    product_description:
      "Qualcomm Snapdragon Wear 2100320 x 290 PixelsOLED RetinaBlackLithium IonBuilt In Fitness Tracker: Sleep, Steps Count, Distance And Calories Burned",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 11,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968938_832_fossil_q-founder-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Founder Smartwatch (Maroon Strap, 45mm)",
    product_price: 93.1078431372549,
    product_description:
      "Qualcomm Snapdragon Wear 2100320 x 290 PixelsOLED RetinaBlackLithium IonBuilt In Fitness Tracker: Sleep, Steps Count, Distance And Calories Burned",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 12,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968938_832_fossil_q-founder-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Founder Smartwatch (Black Strap, 45mm)",
    product_price: 98.0098039215686,
    product_description:
      "Qualcomm Snapdragon Wear 2100320 x 290 PixelsOLED RetinaBlackLithium IonBuilt In Fitness Tracker: Sleep, Steps Count, Distance And Calories Burned",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 13,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968938_832_fossil_q-founder-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Founder Smartwatch (White Strap, 45mm)",
    product_price: 186.225490196078,
    product_description:
      "Qualcomm Snapdragon Wear 2100320 x 290 PixelsOLED RetinaBlackLithium IonBuilt In Fitness Tracker: Sleep, Steps Count, Distance And Calories Burned",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 14,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968938_832_fossil_q-founder-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Founder Smartwatch (Brown Strap, 45mm)",
    product_price: 588.225490196078,
    product_description:
      "Qualcomm Snapdragon Wear 2100320 x 290 PixelsOLED RetinaBlackLithium IonActivity Tracker (Distance, Steps, Calories Burned, Heart Rate)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 15,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/puma-smartwatch-db-513x800-1580725547.jpeg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Puma",
    product_name: "Puma PT9100 Smartwatch (Black Strap, 31mm)",
    product_price: 196.029411764706,
    product_description:
      "Snapdragon Wear 3100390x390 pixelsAMOLEDBlackLithium IonActivity Tracker (Distance, Steps, Calories Burned, Heart Rate)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 16,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/puma-smartwatch-db-513x800-1580725547.jpeg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Puma",
    product_name: "Puma PT9101 Smartwatch (Yellow Strap, 31mm)",
    product_price: 137.225490196078,
    product_description:
      "Snapdragon Wear 3100390x390 pixelsAMOLEDBlackLithium IonActivity Tracker (Distance, Steps, Calories Burned, Heart Rate)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 17,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/puma-smartwatch-db-513x800-1580725547.jpeg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Puma",
    product_name: "Puma PT9102 Smartwatch (White Strap, 31mm)",
    product_price: 137.225490196078,
    product_description:
      "Snapdragon Wear 3100390x390 pixelsAMOLEDBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 18,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Smartron-t-band-832x558-1573195941.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Smartron",
    product_name: "Smartron t.band Smartband (Black)",
    product_price: 6.85294117647059,
    product_description:
      "128 x 64 PixelsOLEDLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 19,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (Graphite Milanese Strap, 44mm)",
    product_price: 763.725490196078,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 20,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 4 GPS + Cellular Smartwatch (Pink Strap, 44mm)",
    product_price: 518.627450980392,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 21,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 4 GPS + Cellular Smartwatch (Silver Strap, 44mm)",
    product_price: 518.627450980392,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 22,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 4 GPS + Cellular Smartwatch (Black Strap, 44mm)",
    product_price: 518.627450980392,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 23,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (Black Strap, 44mm)",
    product_price: 724.509803921569,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 24,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 4 GPS + Cellular Smartwatch (White Strap, 44mm)",
    product_price: 490.098039215686,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 25,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 4 GPS + Cellular Smartwatch (Pink Strap, 40mm)",
    product_price: 489.21568627451,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 26,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (Gold Milanese Strap, 40mm)",
    product_price: 724.509803921569,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 27,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (Silver Milanese Strap, 40mm)",
    product_price: 724.509803921569,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 28,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 4 GPS + Cellular Smartwatch (Black Strap, 40mm)",
    product_price: 489.21568627451,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 29,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 4 GPS + Cellular Smartwatch (White Strap, 40mm)",
    product_price: 489.21568627451,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 30,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (Cyprus Green Strap, 44mm)",
    product_price: 724.509803921569,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 31,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (Cyprus Green Strap, 40mm)",
    product_price: 685.294117647059,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 32,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 4 GPS + Cellular Smartwatch (Beige Strap, 44mm)",
    product_price: 529.313725490196,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 33,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (Pink Sand Strap, 44mm)",
    product_price: 518.627450980392,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 34,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (White Strap, 40mm)",
    product_price: 489.21568627451,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 35,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (Red Strap, 40mm)",
    product_price: 489.21568627451,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 36,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 6 GPS + Cellular Smartwatch (White Strap, 44mm)",
    product_price: 724.509803921569,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 37,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968932_832_apple_watch-series-4-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 4 GPS + Cellular Smartwatch (Beige Strap, 40mm)",
    product_price: 665.686274509804,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 38,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968933_832_apple_watch-series-4-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 4 GPS Smartwatch (Pink Strap, 44mm)",
    product_price: 362.647058823529,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 39,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968933_832_apple_watch-series-4-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 4 GPS Smartwatch (White Strap, 44mm)",
    product_price: 430.392156862745,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 40,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968933_832_apple_watch-series-4-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 4 GPS Smartwatch (White Strap, 40mm)",
    product_price: 343.039215686275,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 41,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968933_832_apple_watch-series-4-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 4 GPS Smartwatch (Grey Strap, 40mm)",
    product_price: 382.254901960784,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 42,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968933_832_apple_watch-series-4-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 4 GPS Smartwatch (Pink Strap, 40mm)",
    product_price: 400.970588235294,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 43,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968933_832_apple_watch-series-4-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 4 GPS Smartwatch (Black Strap, 40mm)",
    product_price: 400.980392156863,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 44,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968933_832_apple_watch-series-4-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 4 GPS Smartwatch (Black Strap, 44mm)",
    product_price: 401.862745098039,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium IonTracks: Distance, Steps, Sleep Quality, Calories Burned, Heart Rate, Low And High Heart Rate Notifications, Fall Detection, Pace And Cadence Alerts, Yoga And Hiking WorkoutsLtpo Oled Retina Display With Force Touch (1000 Nits Brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 45,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968933_832_apple_watch-series-4-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 4 GPS Smartwatch (Gold Strap, 44mm)",
    product_price: 430.392156862745,
    product_description:
      "S4 with 64-bit Dual Core Processor324 x 394 PixelsOLED RetinaBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 46,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Mi-Band-3-832x558-1573195736.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Mi",
    product_name: "Xiaomi Mi Smartband 3 (Black)",
    product_price: 19.5098039215686,
    product_description:
      "128 x 80 PixelsOLEDLithium IonBuilt In Fitness Tracker: Steps Count, Distance And Calories BurnedIon-X (Strengthened Glass), Support Force Touch",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 47,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968931_832_apple_watch-series-3-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 3 GPS Smartwatch (Brown Strap, 42mm)",
    product_price: 597.058823529412,
    product_description:
      "S3 Dual Core Processor312 x 390 PixelsOLED RetinaGreyLithium IonBuilt In Fitness Tracker: Steps Count, Distance And Calories BurnedIon-X (Strengthened Glass), Support Force Touch",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 48,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968931_832_apple_watch-series-3-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 3 GPS Smartwatch (Blue Strap, 38mm)",
    product_price: 597.058823529412,
    product_description:
      "S3 Dual Core Processor312 x 390 PixelsOLED RetinaGreyLithium IonBuilt In Fitness Tracker: Steps Count, Distance And Calories BurnedIon-X (Strengthened Glass), Support Force Touch",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 49,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968931_832_apple_watch-series-3-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 3 GPS Smartwatch (Pink Strap, 38mm)",
    product_price: 293.137254901961,
    product_description:
      "S3 Dual Core Processor312 x 390 PixelsOLED RetinaGreyLithium IonBuilt In Fitness Tracker: Steps Count, Distance And Calories BurnedIon-X (Strengthened Glass), Support Force Touch",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 50,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968931_832_apple_watch-series-3-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS Smartwatch (Space Grey Strap, 42mm)",
    product_price: 234.313725490196,
    product_description:
      "S3 Dual Core Processor312 x 390 PixelsOLED RetinaGreyLithium IonBuilt In Fitness Tracker: Steps Count, Distance And Calories BurnedIon-X (Strengthened Glass), Support Force Touch",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 51,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968931_832_apple_watch-series-3-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 3 GPS Smartwatch (Black Strap, 42mm)",
    product_price: 214.705882352941,
    product_description:
      "S3 Dual Core Processor312 x 390 PixelsOLED RetinaGreyLithium IonLTPO OLED Always-On Retina display with Force Touch (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 52,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-5-gps-cellular-467x800-1568269203.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 5 GPS + Cellular Smartwatch (44mm)",
    product_price: 518.627450980392,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394OLED RetinaSilver, Gold, Space GreyLithium IonBuilt In Fitness Tracker: Steps Count, Distance And Calories BurnedIon-X (Strengthened Glass), Support Force Touch",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 53,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968931_832_apple_watch-series-3-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 3 GPS Smartwatch (Black Strap, 38mm)",
    product_price: 204.901960784314,
    product_description:
      "S3 Dual Core Processor312 x 390 PixelsOLED RetinaGreyLithium IonLTPO OLED Always-On Retina display with Force Touch (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 54,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-5-gps-cellular-467x800-1568269203.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 5 GPS + Cellular Smartwatch (40mm)",
    product_price: 489.21568627451,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394OLED RetinaSilver, Gold, Space GreyLithium PolymerActivity Tracking Features: Burned Calories, Elevation, Stride Length, Sleep Tracking, Multisport Tracking: Track Runs, Cycling And More With Mapped Routes, Detailed Stats And Heart Rate ZonesAlways-On Reflective Color Display, 3Rd Gen 2.5D Corning Gorilla Glass With Af Coating",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 55,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968923_832_amazfit_bip-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Bip Smartwatch (Blue Strap, 32mm)",
    product_price: 58.6764705882353,
    product_description:
      "176 x 176 PixelsBlackLithium PolymerActivity Tracking Features: Burned Calories, Elevation, Stride Length, Sleep Tracking, Multisport Tracking: Track Runs, Cycling And More With Mapped Routes, Detailed Stats And Heart Rate ZonesAlways-On Reflective Color Display, 3Rd Gen 2.5D Corning Gorilla Glass With Af Coating",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 56,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968923_832_amazfit_bip-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Bip Smartwatch (White Strap, 32mm)",
    product_price: 53.9117647058824,
    product_description:
      "176 x 176 PixelsBlackLithium PolymerActivity Tracking Features: Burned Calories, Elevation, Stride Length, Sleep Tracking, Multisport Tracking: Track Runs, Cycling And More With Mapped Routes, Detailed Stats And Heart Rate ZonesAlways-On Reflective Color Display, 3Rd Gen 2.5D Corning Gorilla Glass With Af Coating",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 57,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968923_832_amazfit_bip-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Bip Smartwatch (Black Strap, 32mm)",
    product_price: 46.0686274509804,
    product_description:
      "176 x 176 PixelsBlackLithium IonBuilt In Fitness Tracker: Steps Count, Distance And Calories BurnedIon-X (Strengthened Glass), Support Force Touch",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 58,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968931_832_apple_watch-series-3-gps-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS Smartwatch (Space Grey Strap, 38mm)",
    product_price: 204.901960784314,
    product_description:
      "S3 Dual Core Processor312 x 390 PixelsOLED RetinaGreyLithium IonLTPO OLED Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 59,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-se-gps-cellular-560x800-1600235813.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch SE GPS + Cellular Smartwatch (Black Strap, 44mm)",
    product_price: 361.764705882353,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Space Grey, GoldFitness Run, 5-Min Workouts, Fat Burn Run, Outdoor Walk, Outdoor Cycling, Swimming, Heart rate monitoring, Sleep monitoring, Get Up Reminder, Guided breathing exercises",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 60,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/oppo-watch-46-712x800-1583500363.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Oppo",
    product_name: "Oppo Watch (46mm) Smartwatch (Gold Strap, 46mm)",
    product_price: 195.980392156863,
    product_description:
      "Qualcomm Snapdragon Wear 3100, Ambiq Micro Apollo3 Wireless402 x 476AMOLEDBlack, Glossy GoldFitness Run, 5-Min Workouts, Fat Burn Run, Outdoor Walk, Outdoor Cycling, Swimming, Heart rate monitoring, Sleep monitoring, Get Up Reminder, Guided breathing exercises",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 61,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/oppo-watch-46-712x800-1583500363.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Oppo",
    product_name: "Oppo Watch (46mm) Smartwatch (Black Strap, 46mm)",
    product_price: 195.980392156863,
    product_description:
      "Qualcomm Snapdragon Wear 3100, Ambiq Micro Apollo3 Wireless402 x 476AMOLEDBlack, Glossy GoldLithium IonLTPO OLED Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 62,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-se-gps-cellular-560x800-1600235813.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch SE GPS + Cellular Smartwatch (Pink Sand Strap, 44mm)",
    product_price: 361.764705882353,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Space Grey, GoldLithium Polymer (Li-poly)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 63,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Charge-2-832x558-1573194270.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Charge 2 Smartband (Black/Silver)",
    product_price: 132.107843137255,
    product_description:
      "OLEDLithium IonLTPO OLED Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 64,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-se-gps-cellular-560x800-1600235813.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch SE GPS + Cellular Smartwatch (Deep Navy Strap, 44mm)",
    product_price: 361.764705882353,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Space Grey, Gold",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 65,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-active-2-419x800-1577105214.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name:
      "Samsung Galaxy Active 2 4G Smartwatch (Cloud Silver Strap, 44mm)",
    product_price: 303.823529411765,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDCloud Silver, Aqua Black, Pink Gold",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 66,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-active-2-419x800-1577105214.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name:
      "Samsung Galaxy Active 2 4G Smartwatch (Pink Gold Strap, 44mm)",
    product_price: 196.06862745098,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDCloud Silver, Aqua Black, Pink Gold",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 67,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-active-2-419x800-1577105214.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name:
      "Samsung Galaxy Active 2 4G Smartwatch (Aqua Black Strap, 44mm)",
    product_price: 193.127450980392,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDCloud Silver, Aqua Black, Pink GoldLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 68,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-gps-563x800-1600234592.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 6 GPS Smartwatch (Red Strap, 44mm)",
    product_price: 430.392156862745,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 69,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-gps-563x800-1600234592.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 6 GPS Smartwatch (Pink Sand Strap, 44mm)",
    product_price: 430.392156862745,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 70,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-gps-563x800-1600234592.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 6 GPS Smartwatch (White Strap, 44mm)",
    product_price: 430.392156862745,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium IonLTPO OLED Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 71,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-se-gps-cellular-560x800-1600235813.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch SE GPS + Cellular Smartwatch (White Strap, 44mm)",
    product_price: 361.764705882353,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Space Grey, GoldLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 72,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-gps-563x800-1600234592.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 6 GPS Smartwatch (Black Strap, 40mm)",
    product_price: 400.980392156863,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT REDLithium Polymer (Li-poly)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 73,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Charge-2-832x558-1573194270.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Charge 2 Smartband (Black)",
    product_price: 73.5098039215686,
    product_description: "OLEDLithium Polymer (Li-poly)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 74,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Charge-2-832x558-1573194270.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Charge 2 Smartband (Blue)",
    product_price: 73.5196078431373,
    product_description:
      "OLEDLithium IonBlood Oxgen Sensor, ECG sensorLTPO OLED Always-On Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 75,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-6-gps-563x800-1600234592.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 6 GPS Smartwatch (Red Strap, 40mm)",
    product_price: 400.980392156863,
    product_description:
      "S6 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Grey, Gold, Blue, PRODUCT RED",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 76,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Galaxy-Watch-3-45mm-4G-DB-552x800-1596688704.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Watch 3 4G Smartwatch (Black Strap, 45mm)",
    product_price: 323.43137254902,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDMystic Black, Mystic Bronze, Mystic SilverLithium Polymer (Li-poly)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 77,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Charge-2-832x558-1573194270.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Charge 2 Smartband (Violet)",
    product_price: 147.049019607843,
    product_description:
      "OLEDLithium IonLTPO OLED Always-On Retina display with Force Touch (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 78,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-5-gps-472x800-1568268941.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 5 GPS Smartwatch (40mm)",
    product_price: 400.980392156863,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaLithium IonLTPO OLED Always-On Retina display with Force Touch (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 79,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-series-5-gps-472x800-1568268941.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 5 GPS Smartwatch (44mm)",
    product_price: 430.392156862745,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaLithium PolymerVo2Max (Measure Fitness Level, Training Effect, Recovery Time, And Training Load), Activity Tracking Features: Step Counter, Sleep Monitoring, Calories Burned, Distance Traveled, Movement Reminders, Detailed Sports Tracking: Running, Walking, Cycling, Swimming, Elliptical Machine, Mountaineering, Trail Running, Triathlon, Tennis, Soccer And SkiingAlways-On Transflective Color Display, Scratch Resistant 2.5D Corning Gorilla Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 80,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968925_832_amazfit_stratos-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Stratos Smartwatch (Black Strap, 32mm)",
    product_price: 127.441176470588,
    product_description: "172 x 172 PixelsBlackLithium Polymer (Li-poly)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 81,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Charge-2-832x558-1573194270.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Charge 2 Smartband (Light Blue)",
    product_price: 147.049019607843,
    product_description: "OLED420mAh",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 82,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/realme-watch-s-pro-db-800x800-1608709692.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Realme",
    product_name: "Realme Watch S Pro Smartwatch (Black Strap, 35mm)",
    product_price: 98.0294117647059,
    product_description:
      "ARM Cortex M4454x454BlackLithium IonLTPO OLED Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 83,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-se-db-571x800-1600235365.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch SE GPS Smartwatch (White Strap, 44mm)",
    product_price: 322.549019607843,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Space Grey, GoldLithium IonLTPO OLED Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 84,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-se-db-571x800-1600235365.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch SE GPS Smartwatch (Black Strap, 44mm)",
    product_price: 322.549019607843,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Space Grey, GoldLithium IonLTPO OLED Retina display (1000 nits brightness)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 85,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/apple-watch-se-db-571x800-1600235365.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch SE GPS Smartwatch (Pink Strap, 44mm)",
    product_price: 322.549019607843,
    product_description:
      "S5 with 64-bit Dual Core Processor324x394 pixelsOLED RetinaSilver, Space Grey, GoldFitness Run, 5-Min Workouts, Fat Burn Run, Outdoor Walk, Outdoor Cycling, Swimming, Heart rate monitoring, Sleep monitoring, Get Up Reminder, Guided breathing exercises",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 86,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/oppo-watch-41-726x800-1583499833.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Oppo",
    product_name: "Oppo Watch (41mm) Smartwatch (Black Strap, 41mm)",
    product_price: 146.960784313725,
    product_description:
      "Qualcomm Snapdragon Wear 3100, Ambiq Micro Apollo3 Wireless320x360AMOLEDBlack, Pink Gold, Silver MistLithium Polymer (Li-poly)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 87,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Charge-3-832x558-1573194322.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name:
      "Fitbit Charge 3 Fitness Activity Tracker (Graphite and Black)",
    product_price: 94.1078431372549,
    product_description: "OLED",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 88,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/galaxy-watch-active2-470x800-1570718402.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Active 2 Smartwatch (Grey Strap, 44mm)",
    product_price: 183.225490196078,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDCloud Silver, Aqua Black, Pink GoldLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 89,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/mi-smart-band-5-280x800-1600246597.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Mi",
    product_name: "Mi Smart Band 5 (Black)",
    product_price: 24.5,
    product_description:
      "126x294AMOLEDActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 90,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (Midnight Blue Strap, 38mm)",
    product_price: 636.274509803922,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlackActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 91,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (Rose Gold Strap, 38mm)",
    product_price: 322.549019607843,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 92,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/galaxy-watch-active2-470x800-1570718402.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Active 2 Smartwatch (Black Strap, 44mm)",
    product_price: 187.245098039216,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDCloud Silver, Aqua Black, Pink GoldLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 93,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/mi-band-3i-db-412x800-1574320689.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Mi",
    product_name: "Mi Smart Band 3i Smartband (Black)",
    product_price: 12.7352941176471,
    product_description:
      "128 x 80 PixelsAMOLEDActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 94,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (Black Strap, 38mm)",
    product_price: 253.921568627451,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlackActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 95,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (Orange Strap, 42mm)",
    product_price: 253.921568627451,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlackActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 96,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (White Ceramic Strap, 38mm)",
    product_price: 273.529411764706,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 97,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-3-500x800-1596637355.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Watch 3 Smartwatch (Black Strap, 41mm)",
    product_price: 254.803921568627,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDMystic Black, Mystic Bronze, Mystic SilverActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 98,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (Midnight Blue Strap, 42mm)",
    product_price: 328.43137254902,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlackLithium IonIon-X Glass, 2X Brighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 99,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968927_832_apple_watch-nike-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Nike+ Smartwatch (Silver/White Strap, 42mm)",
    product_price: 342.156862745098,
    product_description:
      "S2 Dual Core Processor312 x 390 PixelsOLED RetinaBlackActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 100,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (Brown Strap, 38mm)",
    product_price: 557.843137254902,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlackLithium IonIon-X Glass, 2X Brighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 101,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968927_832_apple_watch-nike-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Nike+ Smartwatch (Black Strap, 42mm)",
    product_price: 318.617647058824,
    product_description:
      "S2 Dual Core Processor312 x 390 PixelsOLED RetinaBlackLithium IonIon-X Glass, 2X Brighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 102,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968927_832_apple_watch-nike-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Nike+ Smartwatch (Silver/Volt Strap, 38mm)",
    product_price: 322.549019607843,
    product_description:
      "S2 Dual Core Processor312 x 390 PixelsOLED RetinaBlackLithium IonIon-X Glass, 2X Brighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 103,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968927_832_apple_watch-nike-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Nike+ Smartwatch (Black Strap, 38mm)",
    product_price: 309.803921568627,
    product_description:
      "S2 Dual Core Processor312 x 390 PixelsOLED RetinaBlackLithium IonIon-X Glass, 2X Brighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 104,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968927_832_apple_watch-nike-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Nike+ Smartwatch (Silver/White Strap, 38mm)",
    product_price: 273.529411764706,
    product_description:
      "S2 Dual Core Processor312 x 390 PixelsOLED RetinaBlackLithium IonIon-X Glass, 2X Brighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 105,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968927_832_apple_watch-nike-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Nike+ Smartwatch (Black/Volt Strap, 42mm)",
    product_price: 273.529411764706,
    product_description:
      "S2 Dual Core Processor312 x 390 PixelsOLED RetinaBlackActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 106,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (Rose Gold Strap, 42mm)",
    product_price: 342.156862745098,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlackActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 107,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (Silver Strap, 38mm)",
    product_price: 372.539215686275,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlackActivity Tracking With Three Rings (Stand, Move, Exercise), Workout App (Elapsed Time, Distance, Calories, Pace And Speed, Goals, Progress Updates, Workout Summary), Strava Cycling, Activity HistoryBrighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn233", name: "Rohit Nair" },
  },
  {
    product_id: 108,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968929_832_apple_watch-series-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 2 Smartwatch (Black Strap, 42mm)",
    product_price: 494.117647058824,
    product_description:
      "S2 Dual Core Processor272 x 340 pixelsOLED RetinaBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 109,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/galaxy-watch-active2-470x800-1570718402.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Active 2 Smartwatch (Cloud Blue Strap, 44mm)",
    product_price: 284.303921568627,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDCloud Silver, Aqua Black, Pink Gold",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 110,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/galaxy-watch-active2-470x800-1570718402.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Active 2 Smartwatch (Brown Strap, 44mm)",
    product_price: 240.098039215686,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDCloud Silver, Aqua Black, Pink Gold",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 111,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/galaxy-watch-active2-470x800-1570718402.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Active 2 Smartwatch (Beige Strap, 44mm)",
    product_price: 190.186274509804,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDCloud Silver, Aqua Black, Pink GoldLithium IonIon-X Glass, 2X Brighter Oled Retina Display With Force Touch (1000 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 112,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968927_832_apple_watch-nike-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Nike+ Smartwatch (Black/Volt Strap, 38mm)",
    product_price: 309.803921568627,
    product_description:
      "S2 Dual Core Processor312 x 390 PixelsOLED RetinaBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 113,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-3-500x800-1596637355.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Watch 3 Smartwatch (Pink Strap, 41mm)",
    product_price: 294.019607843137,
    product_description:
      "Exynos 9110360 x 360Super AMOLEDMystic Black, Mystic Bronze, Mystic SilverGPS speed and distance, Sleep monitoring, Cardio workouts, Strength workouts, Automatic rep counting, Move IQ, TrueUp, All-day Stress Tracking, V02 max,",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 114,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-fenix-6-550x800-1573208937.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Fenix 6 Smartwatch (Black, 33mm)",
    product_price: 746.294117647059,
    product_description:
      "260 x 260Titanium, Carbon Grey DLC, Black DLC, SilverLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 115,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968926_832_apple_watch-nike-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Nike+ GPS + Cellular Smartwatch (Black Strap, 42mm)",
    product_price: 404.019607843137,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackGPS speed and distance, Sleep monitoring, Cardio workouts, Strength workouts, Automatic rep counting, Move IQ, TrueUp, All-day Stress Tracking, V02 max,",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 116,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-fenix-6x-pro-solar-550x800-1573211562.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Fenix 6X Pro Solar Smartwatch (Black, 36mm)",
    product_price: 1067.54901960784,
    product_description:
      "280 x 280Titanium Carbon Gray, Titanium, Carbon Gray DLC, Black DLCLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 117,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (Pink Strap, 42mm)",
    product_price: 403.137254901961,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 118,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (Silver Strap, 38mm)",
    product_price: 383.529411764706,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 119,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (Black Strap, 38mm)",
    product_price: 383.137254901961,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 120,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (Silver Strap, 42mm)",
    product_price: 382.254901960784,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 121,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (Gold Strap, 42mm)",
    product_price: 382.254901960784,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 122,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (Black Strap, 42mm)",
    product_price: 367.676470588235,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 123,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (Pink Strap, 38mm)",
    product_price: 383.137254901961,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 124,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (Space Grey, 42mm)",
    product_price: 322.549019607843,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 125,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (White Strap, 38mm)",
    product_price: 293.137254901961,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 126,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Garmin-vivosmart-3-832x558-1573194721.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivosmart 3 Smartband (Black)",
    product_price: 106.764705882353,
    product_description:
      "64 x 128 PixelsOLEDGPS speed and distance, Sleep monitoring, Cardio workouts, Strength workouts, Automatic rep counting, Move IQ, TrueUp, All-day Stress Tracking, V02 max,",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 127,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-fenix-6s-550x800-1573211129.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Fenix 6S Smartwatch (Grey Strap, 31mm)",
    product_price: 745.117647058824,
    product_description:
      "240 x 240Rose Gold tone, Carbon Gray DLC, Light Gold tone, SilverGPS speed and distance, Sleep monitoring, Cardio workouts, Strength workouts, Automatic rep counting, Move IQ, TrueUp, All-day Stress Tracking, V02 max,",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 128,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-fenix-6s-550x800-1573211129.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Fenix 6S Smartwatch (Black Strap, 31mm)",
    product_price: 745.117647058824,
    product_description:
      "240 x 240Rose Gold tone, Carbon Gray DLC, Light Gold tone, SilverLithium IonTrack Casual Walk, Intense RideIon-X Strengthened Glass",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 129,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968930_832_apple_watch-series-3-gps-cellular-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name:
      "Apple Watch Series 3 GPS + Cellular Smartwatch (White Strap, 42mm)",
    product_price: 322.549019607843,
    product_description:
      "S3 Dual Core Processor312 x 390 pixelsOLED RetinaBlackGPS speed and distance, Sleep monitoring, Cardio workouts, Strength workouts, Automatic rep counting, Move IQ, TrueUp, All-day Stress Tracking, V02 max,",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 130,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-fenix-6x-550x800-1573211758.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Fenix 6X Smartwatch (Black, 36mm)",
    product_price: 803.941176470588,
    product_description:
      "280 x 280Carbon Gray DLC, Black DLC, TitaniumActivity TrackingDisplay Resolution: 229 Dpi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 131,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968944_832_fossil_q-marshal-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Marshal Smartwatch (Silver Strap, 45mm)",
    product_price: 98.0098039215686,
    product_description:
      "320 x 290 pixelsOLED RetinaSilverActivity TrackingDisplay Resolution: 229 Dpi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 132,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968944_832_fossil_q-marshal-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Marshal Smartwatch (Grey Strap, 45mm)",
    product_price: 98.0098039215686,
    product_description: "320 x 290 pixelsOLED RetinaSilver",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 133,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Band-4-832x558-1573195165.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 4 Smartband (Pink)",
    product_price: 18.1372549019608,
    product_description:
      "AMOLEDOutdoor Run, Walk, Indoor Run, Outdoor Cycle, Aerobic Capacity, Strength Training, Football, Basketball, Table Tennis, Badminton, Indoor Cycle, Elliptical , Yoga, Cricket Modes",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 134,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/realme-watch-670x800-1590388807.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Realme",
    product_name: "Realme Watch Smartwatch (Black Strap, 36mm)",
    product_price: 34.3039215686275,
    product_description: "320x320Black",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 135,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Band-4-832x558-1573195165.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 4 Smartband (Black)",
    product_price: 26.4607843137255,
    product_description: "AMOLED",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 136,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Band-4-832x558-1573195165.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 4 Smartband (Blue)",
    product_price: 26.4705882352941,
    product_description: "AMOLEDActivity TrackingDisplay Resolution: 229 Dpi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 137,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968944_832_fossil_q-marshal-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Marshal Smartwatch (Brown Strap, 45mm)",
    product_price: 111.735294117647,
    product_description:
      "320 x 290 pixelsOLED RetinaSilverLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 138,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Mi-Smart-Band-4-832x558-1573195785.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Mi",
    product_name: "Xiaomi Mi Smartband 4 (Black)",
    product_price: 22.5392156862745,
    product_description: "120 x 240 RGBAMOLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 139,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/thumbnail-Noise-ColorFit-832x558-1573195828-832x558-1573652293.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Noise",
    product_name: "Noise ColorFit Fitness Band",
    product_price: 16.656862745098,
    product_description:
      "160x80LCDActivity TrackingDisplay Resolution: 229 Dpi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 140,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968951_832_fossil_q-wander-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Wander Smartwatch (Gold Strap, 45mm)",
    product_price: 588.225490196078,
    product_description:
      "320 x 290 pixelsOLED RetinaBlackActivity TrackingDisplay Resolution: 229 Dpi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 141,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968951_832_fossil_q-wander-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Wander Smartwatch (Silver Strap, 45mm)",
    product_price: 85.5,
    product_description:
      "320 x 290 pixelsOLED RetinaBlackActivity TrackingDisplay Resolution: 229 Dpi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 142,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968951_832_fossil_q-wander-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Wander Smartwatch (Light Brown Strap, 45mm)",
    product_price: 111.735294117647,
    product_description: "320 x 290 pixelsOLED RetinaBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 143,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Band-3-832x558-1573195105.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 3 Smart Band (Orange)",
    product_price: 22.0490196078431,
    product_description:
      "128x32 pixelsAMOLED210Heart Rate Monitor, Step Tracker, Calories, Burned Distance Travelled, Activity History, Sleep Monitor, Breathe Sports Mode",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 144,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/noise-colorfit-nav-gadgets360-db-960x800-1599143166.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Noise",
    product_name: "Noise Colorfit Nav Smartwatch (Stealth Black Strap, 36mm)",
    product_price: 44.1078431372549,
    product_description: "320x320Lithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 145,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Band-3-832x558-1573195105.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 3 Smart Band (Navy Blue)",
    product_price: 22.5392156862745,
    product_description:
      "128x32 pixelsAMOLED210Heart Rate Monitor, Step Tracker, Calories, Burned Distance Travelled, Activity History, Sleep Monitor, Breathe Sports Mode",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 146,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/noise-colorfit-nav-gadgets360-db-960x800-1599143166.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Noise",
    product_name: "Noise Colorfit Nav Smartwatch (Camo Green Strap, 36mm)",
    product_price: 44.1078431372549,
    product_description: "320x320Lithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 147,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Band-3-832x558-1573195105.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 3 Smartband (Black)",
    product_price: 17.6470588235294,
    product_description: "128x32 pixelsAMOLEDLithium Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 148,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/huami-amazfit-gtr-47mm-titanium-400x800-1576045766.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit GTR Titanium Smartwatch (Grey Strap, 47mm)",
    product_price: 107.833333333333,
    product_description: "454x454 pixelsAMOLEDBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 149,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/1553678391_635_huawei_watch_gt_active.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huawei",
    product_name: "Huawei Watch GT Active Smartwatch (Green Strap, 35mm)",
    product_price: 88.1372549019608,
    product_description:
      "454 x 454AMOLEDBlack Stainless Steel, Stainless Steel, Titanium Grey Stainless SteelLithium Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 150,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968924_832_amazfit_pace-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Pace Smartwatch (Red Strap, 34mm)",
    product_price: 98.0294117647059,
    product_description:
      "1.2 GHz Core320 x 300 pixelsBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 151,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Samsung-Galaxy-Fit-832x558-1573195874.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Fit Smartband (Silver)",
    product_price: 88.1372549019608,
    product_description: "240 x 120 PixelsAMOLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 152,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Samsung-Galaxy-Fit-832x558-1573195874.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Fit Smartband (Black)",
    product_price: 88.1372549019608,
    product_description: "240 x 120 PixelsAMOLED",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 153,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/1553678391_635_huawei_watch_gt_active.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huawei",
    product_name: "Huawei Watch GT Active Smartwatch (Orange Strap, 35mm)",
    product_price: 156.764705882353,
    product_description:
      "454 x 454AMOLEDBlack Stainless Steel, Stainless Steel, Titanium Grey Stainless SteelS Health - 24 Hrs Activity Tracker: Heart Rate Monitor, Exercise Tracker, Caffiene / Water Intake Tracker",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 154,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968962_832_samsung_gear-s2-classic-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S2 Classic Smartwatch (Rose Gold Strap, 30mm)",
    product_price: 186.264705882353,
    product_description:
      "Exynos 3250360 x 360 pixelsSuper AMOLEDBlackS Health - 24 Hrs Activity Tracker: Heart Rate Monitor, Exercise Tracker, Caffiene / Water Intake Tracker",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 155,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968962_832_samsung_gear-s2-classic-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S2 Classic Smartwatch (Black Strap, 30mm)",
    product_price: 132.254901960784,
    product_description:
      "Exynos 3250360 x 360 pixelsSuper AMOLEDBlackLithium Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 156,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968924_832_amazfit_pace-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Pace Smartwatch (Black Strap, 34mm)",
    product_price: 78.3333333333333,
    product_description:
      "1.2 GHz Core320 x 300 pixelsBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 157,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-A2-832x558-1573195039.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor A2 Smartband (Black)",
    product_price: 78.421568627451,
    product_description:
      "OLEDS Health - 24 Hrs Activity Tracker: Heart Rate Monitor, Exercise Tracker, Caffiene / Water Intake Tracker",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 158,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968962_832_samsung_gear-s2-classic-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S2 Classic Smartwatch (Black Strap, 42mm)",
    product_price: 239.21568627451,
    product_description:
      "Exynos 3250360 x 360 pixelsSuper AMOLEDBlackLithium Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 159,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit-gtr-42mm-glitter-edition-400x800-1576046156.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit GTR Glitter Edition Smartwatch (White Strap, 42mm)",
    product_price: 98.0294117647059,
    product_description: "390x390 pixelsAMOLEDBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 160,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/HONOR-Band-5-832x558-1573195236.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 5 Smartband (Pink)",
    product_price: 20.578431372549,
    product_description:
      "240 x 120 PixelsAMOLEDBacklit Lcd, Corning Gorilla Glass 3, 233 Ppi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 161,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968952_832_motorola_moto-360-gen-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Gen 2 Smartwatch (Silver Strap, 35mm)",
    product_price: 152.93137254902,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 X 330 pixelsBlackLithium-ion polymer battery80 Sports Modes",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 162,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit-stratos-3-541x800-1591863887.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huami",
    product_name: "Huami Amazfit Stratos 3 Smartwatch (Black Strap, 34mm)",
    product_price: 137.245098039216,
    product_description: "320x320Backlit Lcd, Corning Gorilla Glass 3, 233 Ppi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 163,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968952_832_motorola_moto-360-gen-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Gen 2 Smartwatch (Brown Strap, 35mm)",
    product_price: 196.06862745098,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 X 330 pixelsBlackBacklit Lcd, Corning Gorilla Glass 3, 233 Ppi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 164,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968952_832_motorola_moto-360-gen-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Gen 2 Smartwatch (Beige Strap, 35mm)",
    product_price: 196.06862745098,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 X 330 pixelsBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 165,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/HONOR-Band-5-832x558-1573195236.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 5 Smartband (Black)",
    product_price: 21.5588235294118,
    product_description: "240 x 120 PixelsAMOLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 166,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/HONOR-Band-5-832x558-1573195236.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 5 Smartband (Blue)",
    product_price: 20.578431372549,
    product_description:
      "240 x 120 PixelsAMOLEDBacklit Lcd, Corning Gorilla Glass 3, 233 Ppi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 167,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968952_832_motorola_moto-360-gen-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Gen 2 Smartwatch (Black Strap, 35mm)",
    product_price: 78.421568627451,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 X 330 pixelsBlackBacklit Lcd, Corning Gorilla Glass 3, 233 Ppi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 168,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968952_832_motorola_moto-360-gen-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Gen 2 Smartwatch (Black Strap, 39mm)",
    product_price: 205.872549019608,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 X 330 pixelsBlackBacklit Lcd, Corning Gorilla Glass 3, 233 Ppi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 169,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968952_832_motorola_moto-360-gen-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Gen 2 Smartwatch (Gold Strap, 35mm)",
    product_price: 460.774509803922,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 X 330 pixelsBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 170,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/HONOR-Band-5-832x558-1573195236.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 5 Smartband (Midnight Navy)",
    product_price: 20.578431372549,
    product_description:
      "240 x 120 PixelsAMOLEDBacklit Lcd, Corning Gorilla Glass 3, 233 Ppi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 171,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968952_832_motorola_moto-360-gen-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Gen 2 Smartwatch (Silver Strap, 39mm)",
    product_price: 470.578431372549,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 X 330 pixelsBlackBacklit Lcd, Corning Gorilla Glass 3, 233 Ppi",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 172,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968952_832_motorola_moto-360-gen-2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Gen 2 Smartwatch (Brown Strap, 39mm)",
    product_price: 490.186274509804,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 X 330 pixelsBlacklithium-ion polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 173,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit-bip-s-420x800-1591102734.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Bip S Smartwatch (33mm)",
    product_price: 49.0098039215686,
    product_description: "176x176Black220mAh",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 174,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit-gts-2-mini-470x800-1608794923.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit GTS 2 mini Smartwatch (Midnight Black Strap, 39mm)",
    product_price: 68.6176470588235,
    product_description:
      "354x306AMOLEDMidnight Black, Flamingo Pink, Sage Green",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 175,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968949_832_fossil_q-venture-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Venture Smartwatch (Silver Strap, 42mm)",
    product_price: 196.06862745098,
    product_description:
      "Snapdragon Wear 2100320 x 320 pixelsSuper AMOLEDBlackS Health - 24 Hrs Activity Tracker: Heart Rate Monitor, Exercise Tracker, Caffiene / Water Intake Tracker",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 176,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968963_832_samsung_gear-s2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S2 Smartwatch (Silver Strap, 42mm)",
    product_price: 215.676470588235,
    product_description: "Exynos 3250360 x 360 pixelsSuper AMOLEDSilver",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 177,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968949_832_fossil_q-venture-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Venture Smartwatch (Light Brown Strap, 42mm)",
    product_price: 196.029411764706,
    product_description:
      "Snapdragon Wear 2100320 x 320 pixelsSuper AMOLEDBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 178,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968949_832_fossil_q-venture-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Venture Smartwatch (Beige Strap, 42mm)",
    product_price: 196.029411764706,
    product_description:
      "Snapdragon Wear 2100320 x 320 pixelsSuper AMOLEDBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 179,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968949_832_fossil_q-venture-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Venture Smartwatch (Pink Strap, 42mm)",
    product_price: 156.813725490196,
    product_description:
      "Snapdragon Wear 2100320 x 320 pixelsSuper AMOLEDBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 180,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968949_832_fossil_q-venture-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Venture Smartwatch (Blue/Gold Strap, 42mm)",
    product_price: 107.813725490196,
    product_description:
      "Snapdragon Wear 2100320 x 320 pixelsSuper AMOLEDBlackS Health - 24 Hrs Activity Tracker: Heart Rate Monitor, Exercise Tracker, Caffiene / Water Intake Tracker",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 181,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968963_832_samsung_gear-s2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S2 Smartwatch (Black Strap, 42mm)",
    product_price: 662.735294117647,
    product_description: "Exynos 3250360 x 360 pixelsSuper AMOLEDSilver",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 182,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968937_832_fossil_q-explorist-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Explorist Smartwatch (Silver Strap, 46mm)",
    product_price: 147.392156862745,
    product_description: "Snapdragon Wear 2100320 x 320 pixelsBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 183,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968949_832_fossil_q-venture-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Venture Smartwatch (Gold Strap, 42mm)",
    product_price: 107.813725490196,
    product_description:
      "Snapdragon Wear 2100320 x 320 pixelsSuper AMOLEDBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 184,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968937_832_fossil_q-explorist-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Explorist Smartwatch (Black Strap, 46mm)",
    product_price: 98.0196078431373,
    product_description: "Snapdragon Wear 2100320 x 320 pixelsBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 185,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968937_832_fossil_q-explorist-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Explorist Smartwatch (Brown Strap, 46mm)",
    product_price: 98.0098039215686,
    product_description:
      "Snapdragon Wear 2100320 x 320 pixelsBlackS Health - 24 Hrs Activity Tracker: Heart Rate Monitor, Exercise Tracker, Caffiene / Water Intake Tracker",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 186,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968963_832_samsung_gear-s2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S2 Smartwatch (Silver Strap, 30mm)",
    product_price: 166.56862745098,
    product_description:
      "Exynos 3250360 x 360 pixelsSuper AMOLEDSilverS Health - 24 Hrs Activity Tracker: Heart Rate Monitor, Exercise Tracker, Caffiene / Water Intake Tracker",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 187,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968963_832_samsung_gear-s2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S2 Smartwatch (Black Strap, 30mm)",
    product_price: 200.980392156863,
    product_description: "Exynos 3250360 x 360 pixelsSuper AMOLEDSilver",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 188,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968937_832_fossil_q-explorist-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Explorist Smartwatch (Grey Strap, 46mm)",
    product_price: 107.813725490196,
    product_description:
      "Snapdragon Wear 2100320 x 320 pixelsBlackS Health - 24 Hrs Activity Tracker: Heart Rate Monitor, Exercise Tracker, Caffiene / Water Intake Tracker",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 189,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968963_832_samsung_gear-s2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S2 Smartwatch (Black Strap, 44mm)",
    product_price: 407.450980392157,
    product_description: "Exynos 3250360 x 360 pixelsSuper AMOLEDSilver",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 190,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/huawei-band-4-413x800-1579860414.jpeg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huawei",
    product_name: "Huawei Band 4 Smartband (Graphite Black)",
    product_price: 18.6176470588235,
    product_description: "80 x 160LCDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 191,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Inspire-832x558-1573194374.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Inspire Fitness Tracker Smartband (Maroon)",
    product_price: 78.421568627451,
    product_description: "72 x 128 PixelOLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 192,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Inspire-832x558-1573194374.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Inspire Fitness Tracker Smartband (Black)",
    product_price: 59.6862745098039,
    product_description: "72 x 128 PixelOLED",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 193,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/huaweiwatchgt2-db-577x800-1568963268.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huawei",
    product_name: "Huawei Watch GT 2 (46mm) Smartwatch (Grey Strap)",
    product_price: 205.78431372549,
    product_description:
      "454 x 454AMOLEDBlack Stainless Steel, Stainless Steel, Titanium Grey Stainless Steel",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 194,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/diesel-full-guard-530x800-1578559347.jpeg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Diesel",
    product_name: "Diesel Full Guard 2.5 Smartwatch (Black Strap, 48mm)",
    product_price: 240.147058823529,
    product_description:
      "454 x 454 PixelOled Retina Display With Force Touch (450 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 195,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 1 Smartwatch (Black Strap, 42mm)",
    product_price: 381.362745098039,
    product_description: "S1P312 x 390 PixelsOLED RetinaBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 196,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968965_832_samsung_gear-sport-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear Sport Smartwatch (Black Strap, 30mm)",
    product_price: 224.166666666667,
    product_description:
      "Super AMOLEDBlueOled Retina Display With Force Touch (450 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 197,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 1 Smartwatch (Midnight Blue Strap, 42mm)",
    product_price: 253.921568627451,
    product_description: "S1P312 x 390 PixelsOLED RetinaBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 198,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968965_832_samsung_gear-sport-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear Sport Smartwatch (Blue Strap, 36mm)",
    product_price: 191.078431372549,
    product_description:
      "Super AMOLEDBlueOled Retina Display With Force Touch (450 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 199,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 1 Smartwatch (Cocoa Strap, 42mm)",
    product_price: 253.921568627451,
    product_description:
      "S1P312 x 390 PixelsOLED RetinaBlackOled Retina Display With Force Touch (450 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 200,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 1 Smartwatch (White Strap, 42mm)",
    product_price: 234.313725490196,
    product_description:
      "S1P312 x 390 PixelsOLED RetinaBlackOled Retina Display With Force Touch (450 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 201,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 1 Smartwatch (Beige Strap, 42mm)",
    product_price: 597.058823529412,
    product_description:
      "S1P312 x 390 PixelsOLED RetinaBlackOled Retina Display With Force Touch (450 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 202,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 1 Smartwatch (Rose Gold Strap, 38mm)",
    product_price: 234.313725490196,
    product_description:
      "S1P312 x 390 PixelsOLED RetinaBlackOled Retina Display With Force Touch (450 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 203,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 1 Smartwatch (Black Strap, 38mm)",
    product_price: 212.009803921569,
    product_description: "S1P312 x 390 PixelsOLED RetinaBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 204,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/huaweiwatchgt2-db-577x800-1568963268.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huawei",
    product_name: "Huawei Watch GT 2 (46mm) Smartwatch (Black Strap)",
    product_price: 146.960784313725,
    product_description:
      "454 x 454AMOLEDBlack Stainless Steel, Stainless Steel, Titanium Grey Stainless Steel",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 205,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/huaweiwatchgt2-db-577x800-1568963268.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huawei",
    product_name: "Huawei Watch GT 2 (46mm) Smartwatch (Brown Strap)",
    product_price: 166.56862745098,
    product_description:
      "454 x 454AMOLEDBlack Stainless Steel, Stainless Steel, Titanium Grey Stainless Steel",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 206,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/huaweiwatchgt2-db-577x800-1568963268.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huawei",
    product_name: "Huawei Watch GT 2 (46mm) Smartwatch (Orange Strap)",
    product_price: 171.558823529412,
    product_description:
      "454 x 454AMOLEDBlack Stainless Steel, Stainless Steel, Titanium Grey Stainless Steel",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 207,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-4g-46mm-561x800-1570708033.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy 4G Smartwatch (Black Strap, 46mm)",
    product_price: 343.039215686275,
    product_description:
      "360 x 360 pixelsSuper AMOLEDOled Retina Display With Force Touch (450 Nits)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 208,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Apple",
    product_name: "Apple Watch Series 1 Smartwatch (White Strap, 38mm)",
    product_price: 214.705882352941,
    product_description:
      "S1P312 x 390 PixelsOLED RetinaBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 209,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Samsung-Galaxy-Fite-832x558-1573195899.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Fit e Smartband (Yellow)",
    product_price: 24.4117647058824,
    product_description: "64 x 128 PixelsAMOLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 210,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Samsung-Galaxy-Fite-832x558-1573195899.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Fit e Smartband (Black)",
    product_price: 21.5588235294118,
    product_description: "64 x 128 PixelsAMOLED",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 211,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit-verge-lite-635x476-1575546940.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Verge Lite Smartwatch (White Strap, 33mm)",
    product_price: 49.0098039215686,
    product_description: "360x360 pixelsAMOLED",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 212,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/watchgt2-db-531x800-1568963682.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huawei",
    product_name: "Huawei Watch GT 2 (42mm) Smartwatch (Black Strap)",
    product_price: 146.960784313725,
    product_description:
      "454 x 454AMOLEDBlack Stainless Steel, Stainless Steel, Rose God Stainless SteelS Health - 24 Hrs Activity Tracker: Heart Rate Monitor, Exercise Tracker, Caffiene / Water Intake Tracker",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 213,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968961_832_samsung_gear-s-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S Smartwatch (Black Strap, 50mm)",
    product_price: 235.107843137255,
    product_description:
      "Exynos 3250360 x 360 pixelsSuper AMOLEDBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 214,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Lenovo-Cardio-2-832x558-1573195407.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Lenovo",
    product_name: "Lenovo Cardio 2 Smartband (Black)",
    product_price: 16.6960784313725,
    product_description: "OLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 215,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Samsung-Galaxy-Fite-832x558-1573195899.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Fit e Smartband (White)",
    product_price: 24.4117647058824,
    product_description: "64 x 128 PixelsAMOLED",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 216,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit-verge-lite-635x476-1575546940.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Verge Lite Smartwatch (Grey Strap, 33mm)",
    product_price: 49.0098039215686,
    product_description: "360x360 pixelsAMOLEDTruSeen 3.0, TruSleep 2.0",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 217,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/1552388935_635_huawei_watch_gt.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Huawei",
    product_name: "Huawei Watch GT Sport Smartwatch (Black, 35mm)",
    product_price: 107.745098039216,
    product_description:
      "454 x 454AMOLEDBlack Stainless Steel, Stainless SteelCorning Gorilla Glass 3, 263 Ppi, Anylight Hybrid Display",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 218,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968953_832_motorola_moto-360-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Smartwatch (Silver Strap, 39mm)",
    product_price: 572.823529411765,
    product_description: "Qualcomm Snapdragon 400 APQ8026360 x 325 pixelsBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 219,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/GOQii-VITAL-832x558-1573194868.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "GOQii",
    product_name: "GOQii VITAL (Black)",
    product_price: 34.3039215686275,
    product_description:
      "OLEDLithium IonDismiss Calls And Alarms With A Simple Tap",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 220,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968959_832_samsung_gear-fit-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear Fit Smartwatch (Black Strap, 46mm)",
    product_price: 78.421568627451,
    product_description:
      "128 x 432 pixelsSuper AMOLEDMulticolorCorning Gorilla Glass 3, 263 Ppi, Anylight Hybrid Display",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 221,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968953_832_motorola_moto-360-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Smartwatch (Grey Strap, 39mm)",
    product_price: 88.2254901960784,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 x 325 pixelsBlackCorning Gorilla Glass 3, 263 Ppi, Anylight Hybrid Display",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 222,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968953_832_motorola_moto-360-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Smartwatch (Black Strap, 39mm)",
    product_price: 137.245098039216,
    product_description: "Qualcomm Snapdragon 400 APQ8026360 x 325 pixelsBlack",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 223,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/realme-band-261x800-1583398355.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Realme",
    product_name: "Realme Smartband (Black)",
    product_price: 15.6470588235294,
    product_description: "80x160 pixelsLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 224,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Mi-Band-832x558-1573195689.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Mi",
    product_name: "Xiaomi Mi Smartband (Black)",
    product_price: 14.0098039215686,
    product_description: "OLED",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 225,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/realme-band-261x800-1583398355.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Realme",
    product_name: "Realme Smartband (Green)",
    product_price: 19.5980392156863,
    product_description: "80x160 pixels",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 226,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/realme-band-261x800-1583398355.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Realme",
    product_name: "Realme Smartband (Yellow)",
    product_price: 25,
    product_description: "80x160 pixelsLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 227,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Band-4-V1-832x558-1573195203.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 4 Running Smartband (Green and Grey)",
    product_price: 16.9117647058824,
    product_description: "AMOLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 228,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Band-4-V1-832x558-1573195203.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 4 Running Smartband (Red and Black)",
    product_price: 16.9117647058824,
    product_description: "AMOLEDLithium-Ion Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 229,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit-gts-461x800-1571041788.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit GTS Smartwatch (42mm)",
    product_price: 93.1274509803922,
    product_description: "348x442 pixelsAMOLEDBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 230,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Alta-832x558-1573194173.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Alta Fitness Smartband (Blue)",
    product_price: 127.352941176471,
    product_description: "OLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 231,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Alta-832x558-1573194173.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Alta Fitness Smartband (Black)",
    product_price: 127.352941176471,
    product_description:
      "OLEDBluetooth Support, Touchscreen, Water Resistant, Fitness & Outdoor",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 232,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968954_832_motorola_moto-360-sport-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Sport Smartwatch (White Strap, 35mm)",
    product_price: 802.93137254902,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 x 325 pixelsBlackBluetooth Support, Touchscreen, Water Resistant, Fitness & Outdoor",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 233,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968954_832_motorola_moto-360-sport-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Sport Smartwatch (Black Strap, 35mm)",
    product_price: 156.852941176471,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 x 325 pixelsBlackBluetooth Support, Touchscreen, Water Resistant, Fitness & Outdoor",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 234,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968954_832_motorola_moto-360-sport-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Motorola",
    product_name: "Motorola Moto 360 Sport Smartwatch (Orange Strap, 35mm)",
    product_price: 93.0392156862745,
    product_description:
      "Qualcomm Snapdragon 400 APQ8026360 x 325 pixelsBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 235,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Alta-832x558-1573194173.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Alta Fitness Smartband (Teal)",
    product_price: 127.441176470588,
    product_description: "OLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 236,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Alta-832x558-1573194173.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Alta Fitness Smart Band (Purple)",
    product_price: 127.441176470588,
    product_description: "OLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 237,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Alta-832x558-1573194173.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Alta Fitness Smart Band (Green)",
    product_price: 120.578431372549,
    product_description: "OLEDLithium Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 238,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit47mm-db-647x800-1563281213.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit GTR Smartwatch (Brown Strap, 47mm)",
    product_price: 88.2254901960784,
    product_description: "320x320 pixelsBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 239,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Lenovo-Spectra-HX03F-832x558-1573195490.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Lenovo",
    product_name: "Lenovo Spectra HX03F Smartband (Black)",
    product_price: 13.7156862745098,
    product_description: "160 x 80 PixelsLCDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 240,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Lenovo-Spectra-HX03F-832x558-1573195490.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Lenovo",
    product_name: "Lenovo Spectra HX03F Smart Band (Blue)",
    product_price: 22.5392156862745,
    product_description: "160 x 80 PixelsLCDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 241,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Lenovo-HW02-Plus-832x558-1573195458.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Lenovo",
    product_name: "Lenovo HW02 Plus Smartband (Blue)",
    product_price: 29.4019607843137,
    product_description: "128 x 32 PixelsOLEDLithium Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 242,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit42mm-db-688x800-1563281680.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit GTR Smartwatch (Pink Strap, 42mm)",
    product_price: 98.0294117647059,
    product_description: "320x320 pixelsBlackLithium Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 243,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit42mm-db-688x800-1563281680.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit GTR Smartwatch (White Strap, 42mm)",
    product_price: 98.0294117647059,
    product_description: "320x320 pixelsBlackLithium Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 244,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit42mm-db-688x800-1563281680.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit GTR Smartwatch (Black Strap, 42mm)",
    product_price: 98.0294117647059,
    product_description: "320x320 pixelsBlackLithium Polymer",
    product_category: "Wearables",
    product_condition: "Used",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 245,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/amazfit42mm-db-688x800-1563281680.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit GTR Smartwatch (Red Strap, 42mm)",
    product_price: 98.0294117647059,
    product_description: "320x320 pixelsBlackLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 246,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Lenovo-HW02-Plus-832x558-1573195458.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Lenovo",
    product_name: "Lenovo HW02 Plus Smartband (Black)",
    product_price: 27.4411764705882,
    product_description: "128 x 32 PixelsOLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 247,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Lenovo-Ego-DB-800x600-1572260402.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Lenovo",
    product_name: "Lenovo Ego Smartwatch (Black, 40mm)",
    product_price: 10.7745098039216,
    product_description: "Lithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 248,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Lenovo-HW02-Plus-832x558-1573195458.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Lenovo",
    product_name: "Lenovo HW02 Plus Smartband (Orange)",
    product_price: 27.4411764705882,
    product_description:
      "128 x 32 PixelsOLEDTracking Smarts: Cycling, Running And Elliptical, Auto-Sleep Detect, Calorie Count",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 249,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968960_832_samsung_gear-fit2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear Fit2 Smartwatch (Blue Strap, 38mm)",
    product_price: 147.058823529412,
    product_description:
      "216 x 432 pixelsSuper AMOLEDBlackTracking Smarts: Cycling, Running And Elliptical, Auto-Sleep Detect, Calorie Count",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 250,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968960_832_samsung_gear-fit2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear Fit2 Smartwatch (Pink Strap, 42mm)",
    product_price: 122.539215686275,
    product_description:
      "216 x 432 pixelsSuper AMOLEDBlackTracking Smarts: Cycling, Running And Elliptical, Auto-Sleep Detect, Calorie Count",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 251,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968960_832_samsung_gear-fit2-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear Fit2 Smartwatch (Black Strap, 38mm)",
    product_price: 147.058823529412,
    product_description: "216 x 432 pixelsSuper AMOLEDBlack",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 252,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968964_832_samsung_gear-s3-classic-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S3 Classic Smartwatch (Black Strap, 32mm)",
    product_price: 365.872549019608,
    product_description: "1.93 x 1.81 x 0.51 pixelsBlack390mAh",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 253,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/realme-watch-s-670x800-1604407110.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Realme",
    product_name: "Realme Watch S Smartwatch (Black Strap, 33mm)",
    product_price: 49.0098039215686,
    product_description: "360x360Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 254,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968964_832_samsung_gear-s3-classic-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S3 Classic Smartwatch (Black Strap, 45mm)",
    product_price: 490.186274509804,
    product_description:
      "1.93 x 1.81 x 0.51 pixelsBlackHuawei TruSleep 2.0, Huawei TruRelax, Huawei TruSeen",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 255,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/honor-magic-watch-2-450x800-1574768754.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Watch Magic 2 Smartwatch (Charcoal Black Strap, 46mm)",
    product_price: 156.852941176471,
    product_description:
      "HiSilicon Kirin A1AMOLEDHuawei TruSleep 2.0, Huawei TruRelax, Huawei TruSeen",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 256,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/honor-magic-watch-2-450x800-1574768793.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Watch Magic 2 Smartwatch (Agate Black Strap, 42mm)",
    product_price: 156.852941176471,
    product_description:
      "HiSilicon Kirin A1AMOLEDHuawei TruSleep 2.0, Huawei TruRelax, Huawei TruSeen",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 257,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/honor-magic-watch-2-450x800-1574768793.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name:
      "Honor Watch Magic 2 Smartwatch (Black Fluoroelastomer Strap, 42mm)",
    product_price: 124.490196078431,
    product_description: "HiSilicon Kirin A1AMOLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 258,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Sony-SmartBand-Talk-832x558-1573195981.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Sony",
    product_name: "Sony Talk SWR30 Smartband (White)",
    product_price: 127.352941176471,
    product_description: "296x128 pixelsLithium-polymer",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 259,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/fitbit-versa-2-db-506x800-1571143134.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Versa 2 Smartwatch (34mm)",
    product_price: 138.28431372549,
    product_description: "AMOLEDLithium-polymer",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 260,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/fitbit-versa-2-special-edition-505x800-1571143478.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Versa 2 Special Edition Smartwatch (34mm)",
    product_price: 166.078431372549,
    product_description: "AMOLEDLithium-polymer",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 261,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/1553678270_635_fitbit_versa_lite_edition.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Versa Lite Edition Smartwatch (Grey, 34mm)",
    product_price: 146.558823529412,
    product_description: "300x300OLEDBlackLithium-polymer",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 262,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/1553678270_635_fitbit_versa_lite_edition.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Versa Lite Edition Smartwatch (Marina Blue, 34mm)",
    product_price: 141.166666666667,
    product_description: "300x300OLEDBlackLithium-polymer",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 263,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/1553678270_635_fitbit_versa_lite_edition.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Versa Lite Edition Smartwatch (Lilac, 34mm)",
    product_price: 132.352941176471,
    product_description: "300x300OLEDBlackLithium-polymer",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn234", name: "Shashank" },
  },
  {
    product_id: 264,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/1553678270_635_fitbit_versa_lite_edition.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Versa Lite Edition Smartwatch (Purple, 34mm)",
    product_price: 127.441176470588,
    product_description: "300x300OLEDBlack",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 265,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968936_832_fossil_q-control-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Control Smartwatch (Grey Strap, 45mm)",
    product_price: 32.7647058823529,
    product_description: "454 x 454 pixelsSuper AMOLEDBlack",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 266,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968936_832_fossil_q-control-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Control Smartwatch (Black Strap, 45mm)",
    product_price: 24.7549019607843,
    product_description: "454 x 454 pixelsSuper AMOLEDBlackLithium-polymer",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 267,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/1553678270_635_fitbit_versa_lite_edition.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Versa Lite Edition Smartwatch (White, 34mm)",
    product_price: 137.156862745098,
    product_description:
      "300x300OLEDBlackSpO2 blood oxygen level monitoring., Guided Meditation1.54-Inch square coloured display",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 268,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/boat-watch-enigma-800x800-1607497537.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "boAt",
    product_name: "boAt Watch Enigma Smartwatch (Black Strap, 39mm)",
    product_price: 29.4019607843137,
    product_description: "SilverLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 269,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Inspire-HR-832x558-1573194506.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Inspire HR Fitness Tracker Smartband (Black)",
    product_price: 72.8921568627451,
    product_description: "128 x 72 PixelLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 270,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Inspire-HR-832x558-1573194506.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Inspire HR Fitness Tracker Smartband (Lilac)",
    product_price: 76.0098039215686,
    product_description: "128 x 72 PixelLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 271,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Inspire-HR-832x558-1573194506.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Inspire HR Fitness Tracker Smartband (White)",
    product_price: 98.0294117647059,
    product_description: "128 x 72 PixelLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 272,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Garmin-Vivosmart-HR-832x558-1573194770.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivosmart HR Smartband (Midnight Blue)",
    product_price: 107.843137254902,
    product_description: "160 x 68 PixelsOLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 273,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Garmin-Vivosmart-HR-832x558-1573194770.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivosmart HR Smartband (Black)",
    product_price: 127.352941176471,
    product_description: "160 x 68 PixelsOLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 274,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Garmin-Vivosmart-HR-832x558-1573194770.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivosmart HR Smartband (Purple )",
    product_price: 137.156862745098,
    product_description:
      "160 x 68 PixelsOLEDstep counter, sleep monitoring, gym activity profiles, V02 max tracking, heart rate monitoring",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 275,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Garmin-Vivoactve-3-element-DB-389x800-1609321689.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivoactive 3 Element Smartwatch (Grey Strap, 30mm)",
    product_price: 161.666666666667,
    product_description: "240x240Silver",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 276,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/thumbnail-MevoFit-Slim-HR-832x558-1573195579-832x558-1573652672.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Mevofit",
    product_name: "MevoFit Slim + HR Smartband (Blue)",
    product_price: 13.7156862745098,
    product_description: "OLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 277,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968957_832_samsung_galaxy-gear-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Gear Smartwatch (Yellow Strap, 41mm)",
    product_price: 78.421568627451,
    product_description: "320 x 320 pixelsBlack",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 278,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968957_832_samsung_galaxy-gear-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Gear Smartwatch (White Strap, 41mm)",
    product_price: 88.2254901960784,
    product_description: "320 x 320 pixelsBlack",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 279,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968957_832_samsung_galaxy-gear-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Gear Smartwatch (Black Strap, 41mm)",
    product_price: 107.745098039216,
    product_description: "320 x 320 pixelsBlack",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 280,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968957_832_samsung_galaxy-gear-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Galaxy Gear Smartwatch (Orange Strap, 41mm)",
    product_price: 117.637254901961,
    product_description: "320 x 320 pixelsBlack",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 281,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/thumbnail-MevoFit-Slim-HR-832x558-1573195579-832x558-1573652672.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Mevofit",
    product_name: "MevoFit Slim + HR Smartband (Red)",
    product_price: 13.7156862745098,
    product_description: "OLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 282,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/thumbnail-MevoFit-Slim-HR-832x558-1573195579-832x558-1573652672.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Mevofit",
    product_name: "MevoFit Slim + HR Smartband (Black)",
    product_price: 13.7156862745098,
    product_description:
      "OLEDTake A Picture / Control Your Music / Sleep Tracker / Step Tracker / Interchangeable Watch BandAnalog Display",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 283,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968950_832_fossil_q-virginia-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Virginia Smartwatch (Silver Strap, 36mm)",
    product_price: 88.1862745098039,
    product_description: "SilverLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 284,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/REFLEX-BEAT-BLACK-SMART-BAND-WITH-ACTIVE-HEART-RATE-MONITOR-600x400-1584099223.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fastrack",
    product_name: "Fastrack Reflex Beat Smartband (Purple)",
    product_price: 21.5196078431373,
    product_description: "128 x 32 PixelsOLEDLithium Ion",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 285,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968934_832_fossil_q-activist-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Activist Smartwatch (Black Strap, 42mm)",
    product_price: 142.107843137255,
    product_description: "White",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 286,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968934_832_fossil_q-accomplice-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Accomplice Smartwatch (Gold Strap, 39mm)",
    product_price: 68.578431372549,
    product_description: "Silver",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 287,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968934_832_fossil_q-accomplice-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Accomplice Smartwatch (Brown Strap, 39mm)",
    product_price: 68.578431372549,
    product_description: "Silver",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 288,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968934_832_fossil_q-accomplice-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Accomplice Smartwatch (Silver Strap, 39mm)",
    product_price: 68.578431372549,
    product_description: "SilverLithium Ion",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 289,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968934_832_fossil_q-activist-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Activist Smartwatch (Grey Strap, 42mm)",
    product_price: 68.578431372549,
    product_description: "WhiteLithium Ion",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 290,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968934_832_fossil_q-activist-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Activist Smartwatch (Brown Strap, 42mm)",
    product_price: 68.578431372549,
    product_description: "White",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 291,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968934_832_fossil_q-accomplice-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Accomplice Smartwatch (Blue Strap, 39mm)",
    product_price: 68.578431372549,
    product_description: "Silver",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 292,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-venu-563x800-1575973975.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Venu Smartwatch (Black Strap, 30mm)",
    product_price: 323.43137254902,
    product_description: "AMOLEDSilver, Slate, Gold, Rose Gold",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 293,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968935_832_fossil_q-commuter-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Commuter Smartwatch (Silver Strap, 44mm)",
    product_price: 142.107843137255,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 294,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968935_832_fossil_q-commuter-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Commuter Smartwatch (Midnight Blue Strap, 44mm)",
    product_price: 88.1862745098039,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 295,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968935_832_fossil_q-commuter-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Commuter Smartwatch (Brown Strap, 44mm)",
    product_price: 88.1862745098039,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 296,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968935_832_fossil_q-commuter-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Commuter Smartwatch (Grey Strap, 44mm)",
    product_price: 88.1862745098039,
    product_description: "BlackLithium Ion",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 297,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968943_832_fossil_q-machine-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Machine Smartwatch (Gold Strap, 45mm)",
    product_price: 88.1862745098039,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 298,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968943_832_fossil_q-jacqueline-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Jacqueline Smartwatch (Gold Strap, 36mm)",
    product_price: 68.578431372549,
    product_description: "White",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 299,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968943_832_fossil_q-jacqueline-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Jacqueline Smartwatch (Silver Strap, 36mm)",
    product_price: 68.578431372549,
    product_description: "WhiteLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 300,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/GOQii-Fitness-Tracker-832x558-1573194818.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "GOQii",
    product_name: "GOQii Fitness Tracker (Black)",
    product_price: 8.82352941176471,
    product_description: "OLEDLithium Ion",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 301,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968943_832_fossil_q-machine-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Machine Smartwatch (Black Strap, 45mm)",
    product_price: 68.578431372549,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 302,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/infinix-band-5.-dbjpg-643x800-1574848614.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Infinix",
    product_name: "Infinix Band 5 Smartband (Red)",
    product_price: 14.6960784313725,
    product_description: "LCD",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 303,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-venu-563x800-1575973975.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Venu Smartwatch (Granite Blue Strap, 30mm)",
    product_price: 323.549019607843,
    product_description: "AMOLEDSilver, Slate, Gold, Rose Gold",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 304,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/infinix-band-5.-dbjpg-643x800-1574848614.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Infinix",
    product_name: "Infinix Band 5 Smartband (Blue)",
    product_price: 14.6960784313725,
    product_description: "LCD",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 305,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/infinix-band-5.-dbjpg-643x800-1574848614.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Infinix",
    product_name: "Infinix Band 5 Smartband (Black)",
    product_price: 22.5392156862745,
    product_description: "LCDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 306,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/REFLEX-2.0-SMART-BAND-IN-MILITARY-GREEN-WITH-CHARCOAL-BLACK-ACCENT-600x400-1584101011.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fastrack",
    product_name: "Fastrack Reflex 2.0 Smartband (Green)",
    product_price: 19.5588235294118,
    product_description: "OLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 307,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-venu-563x800-1575973975.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Venu Smartwatch (Light Sand Strap, 30mm)",
    product_price: 323.43137254902,
    product_description: "AMOLEDSilver, Slate, Gold, Rose Gold",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 308,
    product_image_url:
      "https://gadgets.ndtv.com/static/icons/smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fastrack",
    product_name: "Fastrack Reflex Smartwatch",
    product_price: 11.7156862745098,
    product_description: "AMOLEDBlack",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 309,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968945_832_fossil_q-modern-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Modern Smartwatch (Brown Strap, 41mm)",
    product_price: 117.598039215686,
    product_description: "Blue",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 310,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968936_832_fossil_q-crewmaster-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Crewmaster Smartwatch (Black Strap, 48mm)",
    product_price: 117.598039215686,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 311,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Watch-Magic-800x600-1572262041.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Watch Magic Smartwatch (Brown Strap, 31mm)",
    product_price: 86.3921568627451,
    product_description: "390 x 390 PixelsAMOLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 312,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968946_832_fossil_q-nate-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Nate Smartwatch (Gold Strap, 42mm)",
    product_price: 252.343137254902,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 313,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968946_832_fossil_q-nate-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Nate Smartwatch (Brown Strap, 42mm)",
    product_price: 88.1862745098039,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 314,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968945_832_fossil_q-modern-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Modern Smartwatch (Midnight Blue Strap, 41mm)",
    product_price: 117.598039215686,
    product_description: "Blue",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 315,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968946_832_fossil_q-nate-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Nate Smartwatch (Black Strap, 42mm)",
    product_price: 88.1862745098039,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 316,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968946_832_fossil_q-nate-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Nate Smartwatch (Silver Strap, 42mm)",
    product_price: 68.578431372549,
    product_description: "Black",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 317,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Honor-Watch-Magic-800x600-1572262041.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Watch Magic Smartwatch (Black Strap, 31mm)",
    product_price: 78.3823529411765,
    product_description: "390 x 390 PixelsAMOLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 318,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968940_832_fossil_q-grant-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Grant Smartwatch (Grey Strap, 44mm)",
    product_price: 68.578431372549,
    product_description: "Blue",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 319,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Alta-HR-832x558-1573194561.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Alta HR Smartband (Black)",
    product_price: 147.049019607843,
    product_description: "LED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 320,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968940_832_fossil_q-grant-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Grant Smartwatch (Brown Strap, 44mm)",
    product_price: 68.578431372549,
    product_description: "Blue",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 321,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Alta-HR-832x558-1573194561.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Alta HR Smart Band (Grey)",
    product_price: 147.049019607843,
    product_description: "LED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 322,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968939_832_fossil_q-gazer-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Gazer Smartwatch (Gold Strap, 40mm)",
    product_price: 137.205882352941,
    product_description: "Blue",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 323,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968939_832_fossil_q-gazer-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Gazer Smartwatch (Midnight Blue Strap, 40mm)",
    product_price: 68.578431372549,
    product_description: "Blue",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 324,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Alta-HR-832x558-1573194561.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Alta HR Smart Band (Plum)",
    product_price: 147.049019607843,
    product_description: "LED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 325,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968940_832_fossil_q-grant-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Grant Smartwatch (Silver Strap, 44mm)",
    product_price: 68.578431372549,
    product_description: "Blue",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 326,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968940_832_fossil_q-grant-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Grant Smartwatch (Blue Strap, 44mm)",
    product_price: 68.578431372549,
    product_description: "Blue",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 327,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/Fitbit-Alta-HR-832x558-1573194561.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fitbit",
    product_name: "Fitbit Alta HR Smart Band (Rose Gold)",
    product_price: 166.656862745098,
    product_description: "LED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 328,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968948_832_fossil_q-tailor-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Q Tailor Smartwatch (Gold Strap, 40mm)",
    product_price: 68.578431372549,
    product_description: "White",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 329,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/honorband5i-db-303x800-1571747278.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 5i Smartband (Olive Green)",
    product_price: 17.6372549019608,
    product_description: "",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 330,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-vivomove-watch-576x800-1581060943.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivomove HR Smartwatch (Brown Strap, 32mm)",
    product_price: 225.392156862745,
    product_description: "8 sports mode",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 331,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/lenovo-carme-hw25p-500x800-1568459308.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Lenovo",
    product_name: "Lenovo Carme (HW25P) Smartwatch (Black Strap, 33mm)",
    product_price: 19.5980392156863,
    product_description: "",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 332,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/honorband5i-db-303x800-1571747278.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 5i Smartband (Coral Powder)",
    product_price: 38.0588235294118,
    product_description: "",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 333,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/honorband5i-db-303x800-1571747278.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 5i Smartband (Meteorite Black)",
    product_price: 17.6470588235294,
    product_description: "",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 334,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/honorband5i-db-303x800-1571747278.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Honor",
    product_name: "Honor Band 5i Smartband (Coral Pink)",
    product_price: 17.6372549019608,
    product_description: "",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 335,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-vivomove-watch-576x800-1581060943.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivomove HR Smartwatch (Black Strap, 32mm)",
    product_price: 270.656862745098,
    product_description: "Custom goal tracking, Workout modes",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 336,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/fossil-hybrid-hr-db-800x800-1580372806.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Fossil",
    product_name: "Fossil Hybrid HR Smartwatch (Brown Strap, 42mm)",
    product_price: 147.009803921569,
    product_description: "",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 337,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-vivomove-watch-576x800-1581060943.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivomove HR Smartwatch (Purple Strap, 32mm)",
    product_price: 191.441176470588,
    product_description: "",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 338,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-vivomove-watch-576x800-1581060943.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivomove HR Smartwatch (Blue Strap, 32mm)",
    product_price: 156.764705882353,
    product_description: "",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 339,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/garmin-vivomove-watch-576x800-1581060943.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Garmin",
    product_name: "Garmin Vivomove HR Smartwatch (White Strap, 32mm)",
    product_price: 175.490196078431,
    product_description: "",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 340,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/huami-amazfit-bip-lite-450x800-1562329071.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Amazfit",
    product_name: "Amazfit Bip Lite Smartwatch (32mm)",
    product_price: 51.9509803921569,
    product_description: "Lithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 341,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/iVooMi-FitMe-832x558-1573195327.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "iVoomi",
    product_name: "iVooMi FitMe Smartband (Blue)",
    product_price: 7.02941176470588,
    product_description: "128 x 32 PixelOLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 342,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/iVooMi-FitMe-832x558-1573195327.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "iVoomi",
    product_name: "iVooMi FitMe Smartband (Black)",
    product_price: 8.81372549019608,
    product_description: "128 x 32 PixelOLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 343,
    product_image_url:
      "https://i.gadgets360cdn.com/products/wearables/large/1551968965_832_samsung_gear-s3-frontier-smartwatch.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Samsung",
    product_name: "Samsung Gear S3 Frontier Smartwatch (Black Strap, 33mm)",
    product_price: 215.588235294118,
    product_description: "360 x 360 pixelsSuper AMOLEDBlack",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 344,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/timex-helix-gusto-264x800-1577372074.jpeg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "TIMEX",
    product_name: "TIMEX Helix Gusto HRM Smartband (Blue)",
    product_price: 12.4019607843137,
    product_description: "OLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 345,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/timex-helix-gusto-264x800-1577372074.jpeg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "TIMEX",
    product_name: "TIMEX Helix Gusto HRM Smartband (Aqua)",
    product_price: 15.7549019607843,
    product_description: "OLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 346,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/timex-helix-gusto-264x800-1577372074.jpeg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "TIMEX",
    product_name: "TIMEX Helix Gusto HRM Smartband (Black)",
    product_price: 19.5980392156863,
    product_description: "OLEDLithium Ion (Li-ion)",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
  {
    product_id: 347,
    product_image_url:
      "https://i.gadgets360cdn.com/products/large/thumbnail-LCARE-Band-2S-832x558-1573195363-832x558-1573652724.jpg?downsize=*:180&amp;output-quality=80&amp;output-format=webp",
    product_brand: "Lcare",
    product_name: "Lcare Band 2S Smartband (Black)",
    product_price: 18.578431372549,
    product_description: "AMOLED",
    product_category: "Wearables",
    product_condition: "New",
    product_seller: { id: "rxn235", name: "Yuta" },
  },
];

const seedUsers = [
  {
    user_id: "rxn233",
    user_name: "Rohit Nair",
    user_contact: "0XXXXXXXXXX",
    user_email: "rxn233@student.bham.ac.uk",
    user_password: "rxn233@bham",
  },
  {
    user_id: "rxn234",
    user_name: "Shashank",
    user_contact: "0YYYYYYYYYY",
    user_email: "rxn234@student.bham.ac.uk",
    user_password: "rxn234@bham",
  },
  {
    user_id: "rxn235",
    user_name: "Yuta",
    user_contact: "0ZZZZZZZZZZ",
    user_email: "rxn235@student.bham.ac.uk",
    user_password: "rxn235@bham",
  },
];

/*Script below used to insert above seedProducts data in uniMarketPlace
collection named products- total count 347*/
// Product.insertMany(seedProducts)
//   .then((data) => {
//     console.log("Success", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

/*Script below used to insert above seedUsers data in uniMarketPlace 
collection named users- total count - 3 */
// User.insertMany(seedUsers)
//   .then((data) => {
//     console.log("Success", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
