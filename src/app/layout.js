import "../index.css";

export const metadata = {
    title: "next app",
    description: "restaurant app",
};

export const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            </head>
            <body>
                <div id="root">{children}</div>
                <script type="module" src="/src/main.jsx"></script>
            </body>
        </html>
    );
};

export default RootLayout;
