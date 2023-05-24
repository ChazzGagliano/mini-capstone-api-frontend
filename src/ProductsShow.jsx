export function ProductsShow(props) {
  
  const handleSubmit = (event) => {
       event.preventDefault();
       const params = new FormData(event.target);
       props.onUpdateProduct(props.product.id, params, () => event.target.reset());
     };

     const handleClick = () => {
           props.onDestroyProduct(props.product);
         };

  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <p>Image: {props.product.images[0].url}</p>
  
  
      <form onSubmit={handleSubmit}>
         <div>
           Name: <input defaultValue={props.product.name} name="name" type="text" />
         </div>
         <div>
           Price: <input defaultValue={props.product.price} name="price" type="integer" />
         </div>
         <div>
           Description: <input defaultValue={props.product.description} name="description" type="text" />
         </div>
         <div>
           Image: <input defaultValue={props.product.images && props.product.images[0].url}name="image" type="text" />
         </div>
      
         <button type="submit">Update photo</button>
       </form>
       <button onClick={handleClick}>Destroy Product</button>
    </div>
  );
}