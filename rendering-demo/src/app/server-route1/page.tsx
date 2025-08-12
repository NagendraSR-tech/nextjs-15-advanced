import { serverSideFunction } from "@/utils/server-utils";

import { ImageSlider } from "@/components/ImageSlider";

export default function ServerRoute1Page() {
  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route {result}</h1>;
      <ImageSlider />
    </>
  );
}
