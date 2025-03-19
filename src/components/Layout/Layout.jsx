import { ProgressBar } from "../ProgressBar/ProgressBar"
export function Layout({children}) {
    return (
        <>
            <ProgressBar />
            <div style={{"paddingLeft": "30px", display: "flex", flexDirection: "column", gap: "30px"}}>
                
                <header style={{border: "1px white solid", width: "800px", height: "50px"}}>header</header>
                <section>{children}</section>
                <footer style={{border: "1px white solid", height: "50px"}}>footer</footer>
            </div>
        </>
    )
}