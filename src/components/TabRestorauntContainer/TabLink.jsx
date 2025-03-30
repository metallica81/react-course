import { Link } from "react-router";

export function TabLink({ path, children }) {
    return <Link to={path}>{children}</Link>;
}
