//  Define the shape of the box

import { Dispatch } from "react";
import React from "react";
import { AuthAction } from "../reducers/authReducer";

interface AuthContextType {
    user: string
    authDispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType)
export default AuthContext