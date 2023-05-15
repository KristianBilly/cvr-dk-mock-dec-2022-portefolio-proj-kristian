import { Navigate } from 'react-router-dom'
import {
  LOG_OUT_LOCAL_STORAGE_VALUE,
  NO_ACCESS_PATH,
} from '../../../Constants/Constants'
import { useAuthContext } from '../../../Context/AuthContext'

export const ProtectedRoute = ({ children }) => {
  const { loginValue } = useAuthContext()

  if (loginValue === LOG_OUT_LOCAL_STORAGE_VALUE)
    return <Navigate to={NO_ACCESS_PATH} />

  return children
}
