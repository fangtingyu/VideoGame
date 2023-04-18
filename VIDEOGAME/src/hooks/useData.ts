import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";


export interface Genre {
    id: number;
    name: string;
}

interface FetchResponse<T> {
    count: number;
    results: Genre[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchResponse<T>>('/games', { signal: controller.signal })
            .then(res => {
                setData(res.data.results)
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })
        return () => controller.abort();
    }, [])

    return { genres: data, error, isLoading }

};

export default useData;