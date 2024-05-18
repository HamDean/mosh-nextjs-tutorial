
interface Props {
    params: { slug: string[]}
}

const Products = ({ params: { slug }}: Props) => {
  return (
    <div>Products {slug[1]}</div>
  )
}
export default Products