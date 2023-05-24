import axios from "axios"
import { useState, useEffect } from "react"

export function ProductsNew(props) {
  const [suppliers, setSuppliers] = useState([])
    
  const getSuppliers = () => {
    console.log('getting suppliers')
    axios.get("http://localhost:3000/suppliers.json").then(response => {
      console.log(response.data)
      setSuppliers(response.data)
    })

  }
  useEffect(getSuppliers, [])
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handling submit');

    const params = new FormData(event.target);
    axios.post('http://localhost:3000/products.json', params).then(response => {
    console.log(response.data);
    })
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
          Image: <input name="{product.images[0].url}" />
        </div>
        <select name="supplier_id">
          {suppliers.map(supplier => (
            <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
          ))}


        </select>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}