import { useRouteError } from "react-router-dom"

export default Error = () => {
    const error = useRouteError();
    return (
        <div>Oops!!{ error}</div>
    )
}