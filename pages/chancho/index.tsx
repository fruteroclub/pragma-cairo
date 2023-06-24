import React, { ChangeEvent, useState } from 'react';
import type { AccountInterface } from "starknet";
import { connect } from "get-starknet";
import { executeSwap, fetchQuotes, Quote } from "@avnu/avnu-sdk";
import { formatUnits, parseUnits } from 'ethers';

const AVNU_OPTIONS = { baseUrl: 'https://goerli.api.avnu.fi' };

const ethAddress = "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"
const usdcAddress = "0x005a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426"

function App() {
  const [ account, setAccount ] = useState<AccountInterface>()
  const [ sellAmount, setSellAmount ] = useState<string>()
  const [ quotes, setQuotes ] = useState<Quote[]>([])
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ errorMessage, setErrorMessage ] = useState<string>()
  const [ successMessage, setSuccessMessage ] = useState<string>()

  const handleConnect = async () => {
    const starknet = await connect();
    if (!starknet) return;
    await starknet.enable();
    if (starknet.isConnected && starknet.provider && starknet.account.address) {
      setAccount(starknet.account)
    }
  }

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!account) return;
    setErrorMessage('')
    setQuotes([])
    setSellAmount(event.target.value);
    setLoading(true)
    const params = {
      sellTokenAddress: ethAddress,
      buyTokenAddress: usdcAddress,
      sellAmount: parseUnits(event.target.value, 18),
      takerAddress: account.address,
      size: 1,
    }
    fetchQuotes(params, AVNU_OPTIONS)
      .then((quotes) => {
        setLoading(false)
        setQuotes(quotes)
        console.log(quotes)
      })
      .catch(() => setLoading(false));
  }

  const handleSwap = async () => {
    if (!account || !sellAmount || !quotes || !quotes[0]) return;
    setErrorMessage('')
    setSuccessMessage('')
    setLoading(true)
    executeSwap(account, quotes[0], {}, AVNU_OPTIONS)
      .then(() => {
        setSuccessMessage('success')
        setLoading(false)
        setQuotes([])
      })
      .catch((error: Error) => {
        setLoading(false)
        setErrorMessage(error.message)
      });
  }

  if (!account) {
    return <section className="bg-white max-h-full dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-h-full max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a onClick={handleConnect} className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Chancho</span> <span className="text-sm font-medium">The easiest way to invest your crypto</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the LATAM&apos;s potential</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">The first Starknet protocol to save your crypto while investing in LATAM&apos;s startups.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
 
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" onClick={handleConnect}>Connect Wallet</button>
        </div>
    </div>
</section>
  }

  return (
    
    <div>
      <div>
        <h2>Sell Token</h2>
        <h3>ETH</h3>
        <input onChange={handleChangeInput} disabled={loading}/>
      </div>
      <div>&darr;</div>
      <div>
        <h2>Buy Token</h2>
        <h3>USDC</h3>
        <input
          readOnly
          type="text"
          id="buy-amount"
          value={(quotes && quotes[0]) ? formatUnits(quotes[0].buyAmount, 6) : ''}
        />
      </div>
      {loading ? <p>Loading...</p> : quotes && quotes[0] && <button onClick={handleSwap}>Swap</button>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>Success</p>}
    </div>
    
  );
}

export default App;