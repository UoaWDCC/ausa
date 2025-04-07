export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Service: {params.slug} </h1>;
}
