import { DgraphClientStub } from "./clientStub";
import { Txn } from "./txn";
import { Operation, Payload, UiKeywords, TxnOptions } from "./types";
export declare class DgraphClient {
    private readonly clients;
    private debugMode;
    private queryTimeout;
    constructor(...clients: DgraphClientStub[]);
    setQueryTimeout(timeout: number): DgraphClient;
    getQueryTimeout(): number;
    alter(op: Operation): Promise<Payload>;
    login(userid: string, password: string): Promise<boolean>;
    logout(): void;
    newTxn(options?: TxnOptions): Txn;
    setDebugMode(mode?: boolean): void;
    fetchUiKeywords(): Promise<UiKeywords>;
    debug(msg: string): void;
    anyClient(): DgraphClientStub;
}
