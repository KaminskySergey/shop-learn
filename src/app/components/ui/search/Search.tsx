'use client'

import { ChangeEvent } from "react"
import Input from "../input/Input"
import { useSearch } from "@/hooks/useSearch";

interface ISearch { }

export default function Search({ }: ISearch) {
    const { searchQuery, setSearchQuery } = useSearch();
    

    const handleInputChange = (value: string) => {
        setSearchQuery(value);
    };

    return <div>
        <Input placeholder="Search..." value={searchQuery} onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}/>
    </div>
}
