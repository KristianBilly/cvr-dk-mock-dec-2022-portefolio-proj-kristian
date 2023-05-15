import { useNavigate } from "react-router";
import { SmallContainer } from "../../Components/Other/SmallContainer";
import { SIGN_IN_PAGE_PATH } from "../../Constants/Constants";

export const NoAccess = () => {
  const navigate = useNavigate();

  return (
    <SmallContainer
      title="You need to sign in to access your account"
      onClick={() => navigate(SIGN_IN_PAGE_PATH)}
      btnText="Sign In"
    />
  );
};
