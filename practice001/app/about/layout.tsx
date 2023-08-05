export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>About nav</p>
      {children}
      <p>About Footer</p>
    </div>
  );
}
