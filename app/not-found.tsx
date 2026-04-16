import Link from 'next/link';
import { Metadata } from 'next';
import GoBackButton from '@/components/shared/GoBackButton';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <div className="text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <svg
            className="mx-auto h-64 w-64 text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Code */}
        <h1 className="text-9xl font-bold text-gray-900 dark:text-white">404</h1>

        {/* Error Message */}
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          The page may have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>

          <GoBackButton />
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-500">
          Need help?{' '}
          <Link
            href="/contact"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}