import type { Currency, CurrenciesResponse } from "../types/currency";

const BASE_URL = "https://api.currencybeacon.com/v1";

// Gets API key otherwise returns an error
function getApiKey(): string {
  const key = import.meta.env.VITE_API_KEY;
  if (!key) {
    throw new Error(
      "Missing VITE_API_KEY environment variable. Please add it to your .env file."
    );
  }
  return key;
}

/* export async function fetchCurrencies(): Promise<Currency[]> {
  const response = await fetch(
    `${BASE_URL}/currencies?api_key=${getApiKey()}&type=fiat`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch currencies: ${response.status}`);
  }

  const data: CurrencyResponse = await response.json();
  return data.response;
}*/

export async function fetchCurrencies(): Promise<Currency[]> {
    const response = await fetch(`${BASE_URL}/currencies?api_key=${getApiKey()}`);

    if(!response.ok) {
        throw new Error(`Currency fetch failed: ${response.status}`)
    }

    const payload : CurrenciesResponse = await response.json();
    return payload.response;
}