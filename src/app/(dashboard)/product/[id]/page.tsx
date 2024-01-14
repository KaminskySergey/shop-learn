import Product from "./Product";


interface IProductParams {
    params: {
      id: number
    }
  }

export default function ProductPage({params}: IProductParams) {
    return (
  <div>
  <Product params={params}/>
  </div>
      )
  } 