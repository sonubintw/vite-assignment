import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectLoggedOutUser = (path) => {
    const navigate = useNavigate()
    let fromLocal = localStorage.getItem("userdetails")
    let parsedData = JSON.parse(fromLocal)

    useEffect(() => {
        const redirectLoggedOutUser = () => {
            if (!parsedData) {
                alert("Pls sign up first")
                navigate(path)
                return
            }
        }
        redirectLoggedOutUser()
    }, [parsedData, navigate])
}