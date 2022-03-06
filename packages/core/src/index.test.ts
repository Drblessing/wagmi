import * as Exports from './'

it('should expose correct exports', () => {
  expect(Object.keys(Exports)).toMatchInlineSnapshot(`
    [
      "Connector",
      "InjectedConnector",
      "connect",
      "disconnect",
      "fetchBalance",
      "fetchBlockNumber",
      "fetchEnsAddress",
      "fetchEnsAvatar",
      "fetchEnsName",
      "fetchEnsResolver",
      "fetchFeeData",
      "fetchSigner",
      "fetchToken",
      "getAccount",
      "getContract",
      "getNetwork",
      "readContract",
      "sendTransaction",
      "signMessage",
      "switchNetwork",
      "waitForTransaction",
      "watchAccount",
      "watchBalance",
      "watchBlockNumber",
      "watchContractEvent",
      "watchEnsAddress",
      "watchEnsAvatar",
      "watchEnsName",
      "watchEnsResolver",
      "watchFeeData",
      "watchNetwork",
      "watchReadContract",
      "watchSigner",
      "watchToken",
      "writeContract",
      "erc1155ABI",
      "erc20ABI",
      "erc721ABI",
      "chain",
      "allChains",
      "defaultChains",
      "defaultL2Chains",
      "developmentChains",
      "units",
      "AddChainError",
      "ChainNotConfiguredError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "SwitchChainError",
      "SwitchChainNotSupportedError",
      "UserRejectedRequestError",
      "createWagmiClient",
      "normalizeChainId",
      "createStorage",
    ]
  `)
})
