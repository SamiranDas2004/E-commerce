// import React from "react";
// // import HomesectionCard from "../HomesectionCard/HomesectionCard";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { MensData } from "../../Data/mens";
// function HomesectionCarosol({ data = [], sectionName }) {
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 4 },
//   };

//   const items = MensData.map((item) => <HomesectionCard key={item.id} product={item} />);

//   return (
//     <div className="relative px-4 lg:px-8">
//       <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName} </h2>
//       <div className="relative p-6">
//         <AliceCarousel
//           disableDotsControls
//           items={items}
//           responsive={responsive}
//           controlsStrategy="alternate"
//         />
//       </div>
//     </div>
//   );
// }

// export default HomesectionCarosol;
