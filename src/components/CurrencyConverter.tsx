import { Container } from "@mantine/core";
import { useCurrencies } from "../hooks/useCurrencies";
import type { Currency } from "../types/currency";

export function CurrencyConverter() {
    const { currencies, isLoading: currenciesLoading, error: currenciesError } = useCurrencies();

    return (
        <Container size="sm" mt="xl">
            {!currenciesLoading && !currenciesError && (
                <select>
                    {currencies.map((item: Currency) => (
                        <option value={item.code}>{item.name}</option>
                    ))}
                </select>)
            }
        </Container>
    );
}