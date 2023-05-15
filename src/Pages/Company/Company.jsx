import { Link, useParams } from "react-router-dom";
import { convertCompanyData } from "../../Utils/convertCompanyData";
import { contentData } from "../../Constants/contentData";
import { CompanyInfo } from "./CompanyInfo";
import { CompanyTable } from "./CompanyTable";

const companyInfoData = contentData.searchData.companyinfoTitles;
const lorem = contentData.lorem;

export const Company = () => {
  const { routeParams } = useParams();
  const selectedCompany = contentData.searchData.companies[routeParams];
  const formattedCompany = convertCompanyData(selectedCompany);
  const companyName = contentData.searchData.companies[routeParams].companyName;

  if (!formattedCompany) return <h2>No companies found...</h2>;

  return (
    <section className="company-page">
      <Link className="back-to-search" to="/">
        Back to search
      </Link>
      <h2> {companyName} </h2>
      <CompanyTable company={formattedCompany} />
      <div className="all-companies-info">
        {companyInfoData.map((companyInfo, index) => (
          <CompanyInfo key={index} {...companyInfo} lorem={lorem} />
        ))}
      </div>
    </section>
  );
};
