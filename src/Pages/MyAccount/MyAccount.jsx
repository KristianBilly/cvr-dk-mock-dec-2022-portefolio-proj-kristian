import { useNavigate } from "react-router";
import { AddEmployees } from "../../Components/AddEmployess/AddEmployees";
import { SmallContainer } from "../../Components/Other/SmallContainer";
import { Modal } from "../../Components/Other/Modal";
import {
  AUTH_LOCAL_STORAGE_KEY,
  LANDING_PAGE_PATH,
  LOG_OUT_LOCAL_STORAGE_VALUE,
} from "../../Constants/Constants";
import { useAuthContext } from "../../Context/AuthContext";
import { useModal } from "../../Hooks/useModal";
import { getLocalStorage } from "../../Utils/getLocalStorage";

export const MyAccount = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();
  const { isModalVisible, toggleModal } = useModal();

  const loginLocalStorageString = getLocalStorage(
    AUTH_LOCAL_STORAGE_KEY,
    LOG_OUT_LOCAL_STORAGE_VALUE
  );
  const loginName = JSON.parse(loginLocalStorageString).name;
  const capitalizedLoginName =
    loginName.charAt(0).toUpperCase() + loginName.slice(1);
  const nameShown = capitalizedLoginName ? capitalizedLoginName : "Anonymous";

  return (
    <>
      <SmallContainer
        title={`Welcome ${nameShown} `}
        onClick={() => toggleModal()}
        btnText="Log Out"
      />
      <AddEmployees />
      <Modal
        title="You want to sign out?"
        isModalVisible={isModalVisible}
        onYes={() => {
          logOut();
          toggleModal();
          navigate(LANDING_PAGE_PATH);
        }}
        onNo={() => toggleModal()}
      />
    </>
  );
};
