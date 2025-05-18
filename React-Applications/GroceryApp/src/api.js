export const fetchGroceryProducts = async()=>{
    const response = await fetch("http://localhost:8080/productservice/getallproducts/grocery");
    if(!response.ok) throw new Error("Failed to fect grocery products"); 
    return response.json();
}
