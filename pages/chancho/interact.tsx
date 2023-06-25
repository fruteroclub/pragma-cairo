import {
    useContract,
    useAccount,
    useContractRead,
    useBalance,
  } from "@starknet-react/core";
  import { vault_abi } from './vault';
  
  export default function ContractInteract() {
    const { address } = useAccount();
    console.log("userAddress", { address });
    // para obtener la instancia de un contrato
    const { contract } = useContract({
      address:
       // "0x073c43795687eb35b637b4b740877aa582eee5beb5ccf89116682603b152bfa2",
       '0x06bf73b966e4428e94d1cf8d8c21cf8851d6e7aaff9802ae4e570b185d74ecf9',
      abi: vault_abi,
    });
  
    const { data: ethBalance } = useBalance({
      address,
      token: "0x0680caae95491d92f41553dadf8a9c75605d23d63443c1ad2cd236a59c46a30a",
    });
  
    const { data: eth_staked, isLoading, error, refetch } = useContractRead({
      address:
        //"0x073c43795687eb35b637b4b740877aa582eee5beb5ccf89116682603b152bfa2",
        '0x06bf73b966e4428e94d1cf8d8c21cf8851d6e7aaff9802ae4e570b185d74ecf9',
      abi: vault_abi,
      functionName: "earnedRewards",
      args: [
        '0x01D8d13b68cdCC94e0DF5aEC50067064163282577D3832dC9eF197663C610B77',
    ],
    });
  
    if (isLoading) return <span>Loading...</span>;
    // if (error) return <span>Error: {error}</span>;
  
    console.log({ contract });
    console.log({ eth_staked, ethBalance });
  
    return (
      <div>
        <div style={{ margin: "20px" }}>
          <h3>Staking Contract: </h3>
          <span>{contract?.address}</span>
        </div>
        <div style={{ margin: "20px" }}>
          <h3>Your ETH Balance: </h3>
          <span>{ethBalance?.formatted}</span>
          <span>{JSON.stringify(eth_staked)}</span>

        </div>
        <button onClick={refetch}>Refresh</button>
      </div>
    );
  }
  