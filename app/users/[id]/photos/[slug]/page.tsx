

const page = ({ params: { slug}}: { params: { slug: number}}) => {
  return (
    <div>page {slug}</div>
  )
}
export default page