export function ProductsNew(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handling submit');

    const params = new FormData(event.target);
    props.onCreateProduct(params)
    event.target.reset()
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="integer" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Image: <input name="product.images[0].url" />
        </div>
        
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}