import "./globals.css";

export const metadata = {
  title: "Wellness Intelligence — AI in everyday wellbeing",
  description:
    "Clear-eyed reviews of the AI startups shaping skincare, hair care, fitness, and everyday wellness."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
