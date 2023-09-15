import React from "react";
import ContentLoader from "react-content-loader";

const CustomLoader = (props) => (
  <ContentLoader
    speed={2}
    width={900} // Adjust the width according to your layout
    height={500} // Adjust the height according to your layout
    viewBox="0 0 900 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Content Loader elements based on your styling */}
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="200" />
    <rect x="0" y="220" rx="5" ry="5" width="100%" height="20" />
    <rect x="0" y="250" rx="5" ry="5" width="100%" height="20" />
    <rect x="0" y="280" rx="5" ry="5" width="100%" height="20" />
    <rect x="0" y="310" rx="5" ry="5" width="100%" height="20" />
    <rect x="0" y="340" rx="5" ry="5" width="100%" height="20" />
    <rect x="0" y="370" rx="5" ry="5" width="100%" height="20" />
    <rect x="0" y="400" rx="5" ry="5" width="100%" height="20" />
  </ContentLoader>
);

export default CustomLoader;
