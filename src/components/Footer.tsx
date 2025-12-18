import Image from "next/image";

export default function Footer() {
    return (
        <footer className="h-dvh sm:h-[80vh] bg-black flex items-center justify-center">
            <Image src="/DEPT-logo.svg" alt="DEPT® Logo" width={110} height={110} className="invert" />
        </footer>
    );
}