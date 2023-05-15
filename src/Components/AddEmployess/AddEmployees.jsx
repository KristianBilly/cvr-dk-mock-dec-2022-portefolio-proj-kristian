import { useState, useEffect } from "react";
import {
  EMPLOYEE_LOCAL_STORAGE_KEY,
  FORMIK_FORM,
  NO_EMPLOYEES_LOCAL_STORAGE_VALUE,
  VANILLA_FORM,
} from "../../Constants/Constants";
import { getLocalStorage } from "../../Utils/getLocalStorage";
import { AddEmployeesFormikForm } from "./AddEmployeesFormikForm";
import { AddEmployeesTable } from "./AddEmployeesTable";
import { AddEmployeesVanillaForm } from "./AddEmployeesVanillaForm";

export const AddEmployees = () => {
  const savedEmployees = getLocalStorage(
    EMPLOYEE_LOCAL_STORAGE_KEY,
    NO_EMPLOYEES_LOCAL_STORAGE_VALUE
  );

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [employees, setEmployees] = useState(JSON.parse(savedEmployees));
  const [formShown, setFormShown] = useState(VANILLA_FORM);

  const handleVanillaFormSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      localStorageId: new Date().getTime().toString(),
      name,
      title,
    };
    const allEmployess = [...employees, newEmployee];
    setEmployees(allEmployess);
    setName("");
    setTitle("");
  };

  const handleFormikFormSubmit = (values) => {
    const newEmployee = {
      localStorageId: new Date().getTime().toString(),
      name: values.name,
      title: values.title,
    };
    const allEmployees = [...employees, newEmployee];
    setEmployees(allEmployees);
  };

  const removeEmployee = (localStorageId) => {
    const filteredEmployees = employees.filter(
      (employee) => employee.localStorageId !== localStorageId
    );
    setEmployees(filteredEmployees);
  };

  const toggleForms = () => {
    setFormShown(formShown === VANILLA_FORM ? FORMIK_FORM : VANILLA_FORM);
  };

  useEffect(() => {
    const employeeLocalStorageValue = JSON.stringify(employees);
    localStorage.setItem(EMPLOYEE_LOCAL_STORAGE_KEY, employeeLocalStorageValue);
  }, [employees]);

  return (
    <div className="add-employess">
      <h2>Grant employees access to www.cvr.dk</h2>
      <button className="swap-btn" onClick={() => toggleForms()}>
        {formShown === VANILLA_FORM ? "Swap to Formik" : "Swap to Vanilla"}{" "}
      </button>
      <div className="container">
        {formShown === VANILLA_FORM && (
          <AddEmployeesVanillaForm
            handleVanillaFormSubmit={handleVanillaFormSubmit}
            name={name}
            title={title}
            setName={setName}
            setTitle={setTitle}
          />
        )}
        {formShown === FORMIK_FORM && (
          <AddEmployeesFormikForm
            handleFormikFormSubmit={handleFormikFormSubmit}
          />
        )}
        <AddEmployeesTable
          removeEmployee={removeEmployee}
          employees={employees}
        />
      </div>
    </div>
  );
};
