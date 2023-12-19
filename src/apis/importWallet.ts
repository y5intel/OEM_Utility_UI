import axios, { AxiosResponse } from "axios";

const importWallet = async (mnemonic: string): Promise<string[] | false> => {
    const apiUrl = process.env.REACT_APP_LOCAL_SERVER_URL;
    // const apiUrl = process.env.REACT_APP_SERVER_URL;

    if (!apiUrl) {
        console.error("API URL is undefined!");
        return false;
    }

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

export default importWallet;
