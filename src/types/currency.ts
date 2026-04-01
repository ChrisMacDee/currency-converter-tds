export interface Currency {
    id: number,
    name: string,
    short_code: string,
    code: string,
    precision: number,
    subunit: number,
    symbol: string,
    symbol_first: boolean,
    decimal_mark: string,
    thousands_separator: string
}

export interface CurrencyMeta {
    code: number,
    disclaimer: string
}

export interface CurrenciesResponse {
    meta: CurrencyMeta,
    response: Currency[]
}

export interface ConvertRequest {
    from: string,
    to: string,
    amount: number,
    date?: string // Has to be of format YYYY-MM-DD, so needs to be a string
}

export interface CurrencyConversionResult {
    timestamp: EpochTimeStamp,
    date: string,
    from: string,
    to: string,
    amount: number, // original number to be converted.
    value: number //result of conversion
}

export interface ConvertRequestResponse {
    meta: CurrencyMeta,
    response: CurrencyConversionResult
}