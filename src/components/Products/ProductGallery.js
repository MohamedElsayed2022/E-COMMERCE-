import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from "../../images/mobile.png";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";

const ProductGallery = () => {
    const images = [
        {
            original: `${mobile}`,
        },
        {
            original: `${mobile}`,
        },
        {
            original: `${mobile}`,
        },
    ];
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ReactImageGallery items={images}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                renderLeftNav={LeftButton}

                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
            />
        </div>
    )
};

export default ProductGallery;
