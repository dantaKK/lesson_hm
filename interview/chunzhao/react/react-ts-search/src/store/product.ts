import {create} from "zustand"
import type {Product} from "@/types/product"

interface ProductStore {
    products: Product[];
    setProdects: (products:Product[])=>void;

}

export const useProductStore = create<ProductStore>((set)=>({
   products:[],
   setProdects:(products:Product[])=>set({products})
}));
