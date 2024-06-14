import React from 'react';
import { AuthContextProvider } from '@/app/infrastructure/contexts/auth-context';
import {UserContextProvider} from "@/app/infrastructure/contexts/user-context";

export const HOC = (Component) => {
    return function WrappedComponent(props) {
        return (
            <AuthContextProvider>
                <UserContextProvider>
                    <Component {...props} />
                </UserContextProvider>
            </AuthContextProvider>
        );
    };
};
