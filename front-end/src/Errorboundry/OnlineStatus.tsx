import React, { ReactNode } from "react"; // Import ReactNode type
import { Detector } from "react-detect-offline";

interface Props {
    children: ReactNode; // Use ReactNode type for children prop
}

const OnlineStatus: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Detector
                render={({ online }) =>
                    online ? children : <div>You are offline. Check your internet connection!</div>
                }
            />
        </>
    );
};

export default OnlineStatus;
