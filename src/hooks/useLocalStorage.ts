import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    // Gets value from local storage or inital value 
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            return (initialValue as () => T) ()
        } else {
            return initialValue
        }
    })

    // Store value back in local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value ])

    return [value, setValue] as [typeof value, typeof setValue]
}