import React, {createContext} from 'react';

type ContextType = {displayName: string, userType: string};

export const userContext:ContextType = createContext({
    displayName: '',
    userType: '',
})