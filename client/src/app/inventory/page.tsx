"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "../(components)/Header";


const Inventory = () => {
    const { data: products, isError, isLoading} = useGetProductsQuery()

    if(isLoading) {
        return <div className="py-4">Loading...</div>
    }

    if(isError || !products) {
        return (
            <div className="py-4">
                Failed to fetch data
            </div>
    )}


  return
    <div className="flex flex-col">
        <Header name="Inventory"/>
    </div>

}

export default Inventory
