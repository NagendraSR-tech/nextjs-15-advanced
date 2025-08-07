export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  // Simulate fetching documentation content based on slug
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing Docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing Docs for feature {slug[0]}</h1>;
  }
  return <h1>Docs Home page</h1>;
}
