import React from "react";
import Image from "next/image";

function Pomoja_brand_identity() {
  return (
    <>
     <div className="w-full min-h-screen">
  <div className="">
    <Image
      src="/images/identity_brand.png" // Ensure the leading slash for relative paths
      alt="Pamoja_Brand_identity"
      width={1280} // Specify a width (change as per your requirement)
      height={720} // Specify a height (change as per your requirement)
      className="object-contain w-auto h-auto" // Add any additional classes if needed
    />
  </div>
</div>
    </>
  );
}

export default Pomoja_brand_identity;
