import { createContext, useState } from 'react';

export const SearchContext = createContext('');

export const SearchProvider = ({ children }) => {
	const [isSearch, setIsSearch] = useState(false);

	return (
		<SearchContext.Provider value={{ isSearch, setIsSearch }}>
			{children}
		</SearchContext.Provider>
	);
};
