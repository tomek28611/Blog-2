import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>

     {/* Header */}
     
     {/* Banner */}

      <body>{children}</body>
    </html>
  )
}
