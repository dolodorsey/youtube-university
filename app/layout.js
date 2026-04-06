import './globals.css'

export const metadata = {
  title: 'YouTube University — Learn How To Do Anything',
  description: 'Free DIY tutorials on everything. Fix it. Build it. Cook it. Style it. Learn anything, taught by people who actually do it.',
  openGraph: { title: 'YouTube University', description: 'Free tutorials on how to do everything. No subscriptions. No paywalls. Just learn.' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
