import { useEffect } from "react";
import { SearchCompany } from "./SearchCompany";
import { SearchNoResults } from "./SearchNoResults";
import { convertSearchData } from "../../Utils/convertSearchData";
import { filterCompanies } from "../../Utils/filterCompanies";
import { useSearchContext } from "../../Context/SearchContext";
import { SearchStatistic } from "./SearchStatistic";

export const Search = () => {
  const {
    searchField,
    companies,
    setCompanies,
    allCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSearchContext();

  useEffect(() => {
    const filteredCompanies = filterCompanies(searchField, allCompanies);
    setCompanies(filteredCompanies);
  }, [searchField]);

  if (!isCompaniesFound && !isSearchFieldEmpty) return <SearchNoResults />;

  if (isCompaniesFound)
    return (
      <div>
        <SearchStatistic />
        {companies.map((company, index) => {
          const convertedData = convertSearchData({ ...company });
          return (
            <SearchCompany
              key={index}
              index={index}
              convertedData={convertedData}
            />
          );
        })}
      </div>
    );

  return;
};
