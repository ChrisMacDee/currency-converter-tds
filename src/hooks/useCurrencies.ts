import { useState, useEffect } from "react";
import { fetchCurrencies } from "../services/currencyApi";
import type { Currency } from "../types/currency";

export interface UseCurrenciesResult {
    currencies: Currency[];
    isLoading: boolean;
    error: string | null;
}

export function useCurrencies(): UseCurrenciesResult {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let beenCancelled = false;

        async function load() {
            try {
                setIsFetching(true);
                setError(null);
                const data = await fetchCurrencies();

                if (!beenCancelled) {
                    const sortedCurrencies = data.toSorted((a: Currency, b: Currency) => {
                        return a.short_code.localeCompare(b.short_code);
                    });
                    setCurrencies(sortedCurrencies);
                }
            } catch (err) {
                if (!beenCancelled) {
                    setError(
                        err instanceof Error ? err.message : "Failed to load currencies"
                    );
                }
            } finally {
                if (!beenCancelled) {
                    setIsFetching(false);
                }
            }
        }

        load();
        return () => {
            beenCancelled = true;
        };
    }, []);

    return { currencies, isLoading: isFetching, error };
}
