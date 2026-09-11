import { useContext,useState, createContext , useMemo } from "react";
import ProductData from "../Data/ProductData";

const ProductContext = createContext({});

export const ProductProvider = ({children})=>{
    const [categorys, setCategory ] = useState();
    const [brands, setBrand] = useState();
    const [products , setProduct] = useState(ProductData);

    const Brand = useMemo(()=>{
        return ProductData.filter((item)=>{
           const Brand = brands === "ALL" || item.brand === brands;
           const Category = categorys === "ALL" || item.category === categorys;
            return Brand && Category ;
        })
    });
    const value = {categorys,setCategory,brands, setBrand , products , setProduct ,Brand};
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}
export function useProduct(){
    return useContext(ProductContext);
}