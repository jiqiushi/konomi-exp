export interface IBaseData {
    id: number;
    blockNumber: number;
    transactionIndex: number;
    sources: number[];
    symbol: string;
    slug: string;
    leaseEnd: number;
    subscriptionId: number;
    networkId: number;
    aggregationStrategy: number;
    reportingStrategy: number;
    status: number;
    client: IClient;
    createdTimestamp: number;
    updatedTimestamp: number;
    display: Boolean
}

interface IClient {
    clientType: number;
    connectionInfo: IConnectionInfo;
}

interface IConnectionInfo {
    contractAddress: string;
    networkId: number;
}