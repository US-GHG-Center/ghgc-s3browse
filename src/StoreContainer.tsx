import { ReactNode, useEffect, useState } from "react";
import { useConfig } from "./context/configContext";
import { ApiSliceProvider } from "./context/apiSliceContext";

interface StoreContainerProps {
  children: ReactNode
}

export function StoreContainer({children}: StoreContainerProps): ReactNode {
// export const StoreContainer = () => {
    const [ cloudWatchUrlBase, setCloudWatchUrlBase ] = useState("");
    const { config } = useConfig();

    useEffect(() => {
      if (!config || !(Object.keys(config).length)) return;
      setCloudWatchUrlBase(config.cloudWatchUrlBase)
    }, [config])

    return (<>{
              cloudWatchUrlBase && (
                <ApiSliceProvider cloudWatchUrlBase={cloudWatchUrlBase}>
                  { children }
                </ApiSliceProvider>
                )
              }
            </>)
}
