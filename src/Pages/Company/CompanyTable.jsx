export const CompanyTable = ({ company: formattedCompany }) => (
  <div className="company-table">
    {formattedCompany.map(({ title, field }) => (
      <div className="content-container" key={field}>
        <p className="title">{title} </p>
        <p>{field} </p>
      </div>
    ))}
  </div>
);
