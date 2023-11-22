import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementStepCount } from "../../../features/stepCounterSlice";

import DownloadComplete from "./DownloadComplete";
import LoadingSpinner from "../../LoadingSpinner";

import "./style.css";

const DownloadStep: React.FC = () => {
    const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDownloaded(true);
            dispatch(incrementStepCount());
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [dispatch]);

    return (
        <div className="download position-relative">
            {isDownloaded ? (
                <DownloadComplete />
            ) : (
                <LoadingSpinner isDownloaded={true} />
            )}
        </div>
    );
};

export default DownloadStep;
