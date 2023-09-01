"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const DownloadButton: React.FC = () => {

    const router = useRouter();
    const handleDownload = (): void => {
        router.push('/files/cv.pdf');
    };

    return (
        <button className="btn btn-outline flex items-center" onClick={handleDownload}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span className="capitalize">Download CV</span>
        </button>
    );
};

export default DownloadButton;