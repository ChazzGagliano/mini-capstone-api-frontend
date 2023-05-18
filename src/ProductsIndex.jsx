export function ProductsIndex(props) {
      return (
        <div>
          <h1>All photos</h1>
         {props.products.map((product) => (
           <div key={product.id}>
             <p>name: {product.name}</p>
             <p>price: {product.price}</p>
             <p>description: {product.description}</p>
             <img src={product.image} />
           </div>
         ))}
        </div>
      );
    }