// components/SearchBox.tsx

import React, { useState } from 'react';

interface SearchBoxProps {
    onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className="flex items-center">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search..."
                    className="border w-10"
                />
                <button
                    type="submit"
                    className="bg-black text-white"
                >
                    Search
                </button>
            </form>
        </div>

    );
};

export default SearchBox;
