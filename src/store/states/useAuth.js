import React, { useContext } from 'react'
import { AuthContextState } from '../Providers/AuthProvider';

export const useAuth = () => {
    return useContext(AuthContextState)
}
