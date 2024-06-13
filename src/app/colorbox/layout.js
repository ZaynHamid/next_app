export default function ColorBoxLayout({children, left, right}) {
    const isHr = false
    return (
     <>
        {children}
        {isHr ? left : right}
     </>
    );
  }
  