// (function () {
//   var scriptURL =
//     "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
//   if (window.ShopifyBuy) {
//     if (window.ShopifyBuy.UI) {
//       ShopifyBuyInit();
//     } else {
//       loadScript();
//     }
//   } else {
//     loadScript();
//   }
//   function loadScript() {
//     var script = document.createElement("script");
//     script.async = true;
//     script.src = scriptURL;
//     (
//       document.getElementsByTagName("head")[0] ||
//       document.getElementsByTagName("body")[0]
//     ).appendChild(script);
//     script.onload = ShopifyBuyInit;
//   }
//   function ShopifyBuyInit() {
//     var client = ShopifyBuy.buildClient({
//       domain: "outdoor-solution-at.myshopify.com",
//       storefrontAccessToken: "4edd2c6cb585d2bb523bbe651b73d21a",
//     });
//     ShopifyBuy.UI.onReady(client).then(function (ui) {
//       ui.createComponent("collection", {
//         id: "264256651471",
//         node: document.getElementById("collection-component-1619857110401"),
//         moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
//         options: {
//           product: {
//             styles: {
//               product: {
//                 "@media (min-width: 601px)": {
//                   "max-width": "calc(25% - 20px)",
//                   "margin-left": "20px",
//                   "margin-bottom": "50px",
//                   width: "calc(25% - 20px)",
//                 },
//                 img: {
//                   height: "calc(100% - 15px)",
//                   position: "absolute",
//                   left: "0",
//                   right: "0",
//                   top: "0",
//                 },
//                 imgWrapper: {
//                   "padding-top": "calc(75% + 15px)",
//                   position: "relative",
//                   height: "0",
//                 },
//               },
//               title: {
//                 "font-family": "Montserrat, sans-serif",
//                 "font-weight": "normal",
//               },
//               button: {
//                 "font-family": "Montserrat, sans-serif",
//                 ":hover": {
//                   "background-color": "#005b2a",
//                 },
//                 "background-color": "#00652f",
//                 ":focus": {
//                   "background-color": "#005b2a",
//                 },
//               },
//               price: {
//                 "font-family": "Montserrat, sans-serif",
//               },
//               compareAt: {
//                 "font-family": "Montserrat, sans-serif",
//               },
//               unitPrice: {
//                 "font-family": "Montserrat, sans-serif",
//               },
//             },
//             buttonDestination: "modal",
//             contents: {
//               options: false,
//             },
//             text: {
//               button: "Produkt anzeigen",
//             },
//             googleFonts: ["Montserrat"],
//           },
//           productSet: {
//             styles: {
//               products: {
//                 "@media (min-width: 601px)": {
//                   "margin-left": "-20px",
//                 },
//               },
//             },
//           },
//           modalProduct: {
//             contents: {
//               img: false,
//               imgWithCarousel: true,
//               button: false,
//               buttonWithQuantity: true,
//             },
//             styles: {
//               product: {
//                 "@media (min-width: 601px)": {
//                   "max-width": "100%",
//                   "margin-left": "0px",
//                   "margin-bottom": "0px",
//                 },
//               },
//               button: {
//                 "font-family": "Montserrat, sans-serif",
//                 ":hover": {
//                   "background-color": "#005b2a",
//                 },
//                 "background-color": "#00652f",
//                 ":focus": {
//                   "background-color": "#005b2a",
//                 },
//               },
//               title: {
//                 "font-family": "Montserrat, sans-serif",
//                 "font-weight": "normal",
//                 "font-size": "26px",
//                 color: "#4c4c4c",
//               },
//               price: {
//                 "font-family": "Montserrat, sans-serif",
//                 "font-weight": "normal",
//                 "font-size": "18px",
//                 color: "#4c4c4c",
//               },
//               compareAt: {
//                 "font-family": "Montserrat, sans-serif",
//                 "font-weight": "normal",
//                 "font-size": "15.299999999999999px",
//                 color: "#4c4c4c",
//               },
//               unitPrice: {
//                 "font-family": "Montserrat, sans-serif",
//                 "font-weight": "normal",
//                 "font-size": "15.299999999999999px",
//                 color: "#4c4c4c",
//               },
//               description: {
//                 "font-family": "Montserrat, sans-serif",
//               },
//             },
//             googleFonts: ["Montserrat"],
//             text: {
//               button: "In den Warenkorb",
//             },
//           },
//           option: {},
//           cart: {
//             styles: {
//               button: {
//                 "font-family": "Montserrat, sans-serif",
//                 ":hover": {
//                   "background-color": "#005b2a",
//                 },
//                 "background-color": "#00652f",
//                 ":focus": {
//                   "background-color": "#005b2a",
//                 },
//               },
//             },
//             text: {
//               total: "Subtotal",
//               notice: "",
//               button: "Checkout",
//             },
//             googleFonts: ["Montserrat"],
//           },
//           toggle: {
//             styles: {
//               toggle: {
//                 "font-family": "Montserrat, sans-serif",
//                 "background-color": "#00652f",
//                 ":hover": {
//                   "background-color": "#005b2a",
//                 },
//                 ":focus": {
//                   "background-color": "#005b2a",
//                 },
//               },
//             },
//             googleFonts: ["Montserrat"],
//           },
//         },
//       });
//     });
//   }
// })();