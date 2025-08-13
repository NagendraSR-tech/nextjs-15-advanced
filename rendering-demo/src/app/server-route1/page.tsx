import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ServerRoute1Page() {
  const result = serverSideFunction();
  const clientResult = clientSideFunction();
  return (
    <>
      <h1>
        Server Route {result} {clientResult}
      </h1>
      <ImageSlider />
    </>
  );
}
