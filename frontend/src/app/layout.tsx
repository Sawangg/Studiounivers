import "@styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className="bg-white font-body leading-normal text-primary-800">{children}</body>
        </html>
    );
}
