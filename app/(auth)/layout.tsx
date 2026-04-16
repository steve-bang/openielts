import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="py-6 px-4">
        <Link href="/" className="inline-block">
          <span className="text-2xl font-bold bg-linear-to-br from-[#D32F2F] to-[#E57373] bg-clip-text text-transparent">
            OpenIELTS
          </span>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        {children}
      </div>
      <div className="py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} OpenIELTS. All rights reserved.
      </div>
    </div>
  );
}
