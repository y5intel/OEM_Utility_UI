// https://codesandbox.io/s/react-spinner-loader-body-example-b9xce?file=/src/App.js
// https://codesandbox.io/s/react-spinner-xfcgh3?file=/src/App.js
// https://codesandbox.io/s/react-loader-spinner-forked-gfd4no?file=/src/App.js

import { useState, useEffect } from "react";

import DownloadComplete from "./DownloadComplete";
import LoadingSpinner from "../../LoadingSpinner";

import "./style.css";

const DownloadStep = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        // After 5 seconds, set isDownloading to true
        const timer = setTimeout(() => {
            setIsDownloading(true);
        }, 5000); // 5000 milliseconds = 5 seconds

        return () => {
            // Clean up the timer if the component unmounts before 5 seconds
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="download position-relative">
            {isDownloading ? (
                <DownloadComplete />
            ) : (
                <LoadingSpinner isDownloading={true} />
            )}
        </div>
    );
};

export default DownloadStep;
