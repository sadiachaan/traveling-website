import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";

const MasonaryImages = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1 rem">
        {galleryImages.map((item, index) => (
          <img
            className="masonry-img"
            src={item}
            key={index}
            style={{ width: "100", display: "block", borderRadius: "10px" }}
            alt=""
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonaryImages;
