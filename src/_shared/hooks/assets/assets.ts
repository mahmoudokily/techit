export type AssetDomainObject = Record<string, string | number | ((props: any) => JSX.Element)>;

export interface AssetDomains {
    icons: AssetDomainObject;
    images: AssetDomainObject;
    svg: AssetDomainObject;
}

export type AssetDomain = keyof AssetDomains;

export type AssetName<T extends AssetDomain> = keyof AssetDomains[T];

export type RemoteAssetDomain = {
    [name: string]: {
        url: string;
        active: boolean;
    };
};

export type RemoteAssets = Record<AssetDomain, RemoteAssetDomain>;

export type RemoteAssetsResponse = {
    type: string;

    assets: RemoteAssets;
};
