import '@/styles/globals.css'
import { InjectedConnector, StarknetConfig } from "@starknet-react/core";
import { Provider } from "starknet";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const provider = new Provider({ sequencer: { network: "goerli-alpha" } });
  //console.log({ provider });
  

  const connectors = [
    new InjectedConnector({ options: { id: "braavos" } }),
    new InjectedConnector({ options: { id: "argentX" } }),
  ];

  return (
    <StarknetConfig
      autoConnect
      connectors={connectors}
      defaultProvider={provider}
    >
      <Component {...pageProps} />
    </StarknetConfig>
  );
}