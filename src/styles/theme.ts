const maxDeviceSizes = {
  mobile: "480px",
  tablet: "768px",
  laptop1: "1024px",
  laptop2: "1280px",
};

const maxPixelSizes = {
  mobile: "390px",
  tablet: "601px",
  laptop1: "800px",
  laptop2: "1000px",
};

const device = {
  mobile: `screen and (max-width:${maxDeviceSizes.mobile})`,
  tablet: `screen and (max-width: ${maxDeviceSizes.tablet})`,
  laptop1: `screen and (max-width: ${maxDeviceSizes.laptop1})`,
  laptop2: `screen and (max-width: ${maxDeviceSizes.laptop2})`,
};

const theme = {
  device,
  maxPixelSizes,
};

export default theme;
