import { useMemo } from 'react';

export const useDataCount = (data) => {
    const count = useMemo(() => {
        return Array.isArray(data) ? data.length : 0;
    }, [data]);

    return count;
};