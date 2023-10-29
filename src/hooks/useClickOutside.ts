import { useState, useEffect } from 'react'

const useClickOutside = (ref: React.RefObject<HTMLDivElement>) => {
    const [isClickedOutside, setIsClickedOutside] = useState(false);
    useEffect(() => {

        const isClickedOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsClickedOutside(true)
            } else {
                setIsClickedOutside(false)
            }
        }

        document.addEventListener("mousedown", isClickedOutside);

        return () => {
            document.removeEventListener("mousedown", isClickedOutside)
        }
    }, [ref])

    return isClickedOutside;
}

export default useClickOutside