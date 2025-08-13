// import { ServerComponentOne } from "@/components/server-component-one";

import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterLeavingPage() {
  return (
    <>
      <h1>Inter Leaving Page</h1>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne/>
      </ClientComponentOne>
    </>
  );
}
