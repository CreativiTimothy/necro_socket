/// <reference path="./ILocalStorage.ts" />
/// <reference path="./IPokemonFilter.ts" />

interface IAppConfig extends IStorageItem{
    EnableDesktopNotification:boolean;
    EnableToastNotification:boolean;
    UseMSniper:boolean;
    UsePokesnipers :boolean;
    UseCustomSniper:boolean;
    CustomSniperLink?: string;
    ToastPosition?: string;
    PokemonFilters? :IPokemonFilter[]
}