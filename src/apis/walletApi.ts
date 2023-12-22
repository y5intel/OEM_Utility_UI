import axios, { AxiosResponse } from "axios";
// const apiUrl =
//     process.env.REACT_APP_LOCAL_SERVER_URL || "http://localhost:8080";
const apiUrl =
    process.env.REACT_APP_SERVER_URL ||
    "https://smart-supply-backend.onrender.com";

export const importWallet = async (
    mnemonic: string
): Promise<string[] | false> => {
    try {
        const response: AxiosResponse<any> = await axios.post(
            `${apiUrl}/oem/login-oem`,
            { mnemonic: mnemonic }
        );

        return response.data; // Adjust based on the actual structure of the response
    } catch (error) {
        console.error("Error!", error);
        return false;
    }
};

export const getSolBalance = async (publicKey: string) => {
    try {
        const apiUrl = `${process.env.REACT_APP_LOCAL_SERVER_URL}/oem/wallet-balance/${publicKey}`;
        const response = await axios.get(apiUrl);
        return response.data; // Adjust based on the actual structure of the response
    } catch (error) {
        console.error("Error fetching balance:", error);
        return 0;
    }
};
