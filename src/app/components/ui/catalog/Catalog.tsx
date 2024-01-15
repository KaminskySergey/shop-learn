'use client'
import React, { useState } from 'react';
import CatalogItem from './CatalogItem';
import { CatalogList } from './CatalogList';
import Pagination from '../pagination/Pagination';
import { IProduct } from '@/types/product.interface';
import Input from '../input/Input';
import Search from '../search/Search';
import { useSearch } from '@/hooks/useSearch';



interface ICatalogProps {
    products: IProduct[] | [];
}

const Catalog = ({ products }: ICatalogProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const { searchQuery } = useSearch();

    const filteredProducts = products.filter(product =>
        product.title.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);


    const currentProducts = filteredProducts.slice(startIndex, endIndex);


    return (
        <div>
            <CatalogList>
                {currentProducts.map((product: IProduct, index: number) => (
                    <CatalogItem key={index} product={product} />
                ))}
            </CatalogList>

            {currentProducts.length !== 0 && <Pagination productsLength={filteredProducts.length} productsPerPage={productsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />}
        </div>
    );
};

export default Catalog;
