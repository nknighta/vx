import { useState, useEffect } from "react"
import { getCookie } from "cookies-next"

export default function AccuntBotton (options) {
    const [localsession, setLocalsession] = useState<any>();
    useEffect(() => {
        const data = getCookie("cookie");
        setLocalsession(data);
    },[localsession]);
    return (
        <div>
            {localsession}
        </div>
    )
}