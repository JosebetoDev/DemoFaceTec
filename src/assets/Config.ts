export interface Config {
    DeviceKeyIdentifier: string;
    BaseURL: string;
    initializeFromAutogeneratedConfig: (FaceTecSDK: any, callback: any) => void;
}