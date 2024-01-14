'use client'

import { ReactNode } from "react";

interface IPrivateProvider {
    children: ReactNode
}

export default function ProviderOrder({children}: IPrivateProvider) {
  
    return <div>{children}</div>
}
