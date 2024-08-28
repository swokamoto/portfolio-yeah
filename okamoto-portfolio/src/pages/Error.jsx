import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const { error } = useRouteError();

    return (
        <section>
            <h2>Error: {error.status}</h2>
            <p>{error.message}</p>
        </section>
    )
}
