interface IProductCard {}

export default function ProductCard({product}: IProductCard) {
    return <div>
      <div>{product.name}</div>
      <div>{product.images[0]}</div>
    </div>
}
