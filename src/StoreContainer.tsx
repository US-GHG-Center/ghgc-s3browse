import { ReactNode, useEffect, useState } from "react";
import { useConfig } from "./context/configContext";
import { ApiSliceProvider } from "./context/apiSliceContext";

interface StoreContainerProps {
  children: ReactNode
}

export function StoreContainer({children}: StoreContainerProps): ReactNode {
  const { config } = useConfig();

  if (!config || !(Object.keys(config).length)) return;


  return (<>{
      <ApiSliceProvider config={config}>
        { children }
      </ApiSliceProvider>
    }</>
  )
}
