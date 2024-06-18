// RecoilProvider.tsx
'use client'
import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilProviderProps {
    children: ReactNode;
}

const RecoilProvider: React.FC<RecoilProviderProps> = ({ children }) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    );
};

export default RecoilProvider;