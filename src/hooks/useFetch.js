import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for fetching data from an API
 * Handles loading, error, and data states
 */
const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { immediate = true, ...fetchOptions } = options;

    const fetchData = useCallback(async () => {
        if (!url) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, fetchOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message || 'An error occurred while fetching data');
        } finally {
            setLoading(false);
        }
    }, [url, JSON.stringify(fetchOptions)]);

    useEffect(() => {
        if (immediate) {
            fetchData();
        }
    }, [fetchData, immediate]);

    const refetch = useCallback(() => {
        return fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch };
};

export default useFetch;
