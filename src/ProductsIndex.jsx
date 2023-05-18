export function ProductsIndex(props) {
  return (
    <div>
    <h1>All Products</h1>
    {props.product.map(product => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>Price: {product.price} </p>
        <p>Description: {product.description}</p>
        <img src={product.images[0].url} alt=""/>
        <button onClick={() => props.onShowProduct(product)}>More info</button>
      </div>
    ))}
  </div>
);
}