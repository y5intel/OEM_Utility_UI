// import axios, { AxiosResponse } from "axios";

// interface ImportWalletResponse {
//     data: string[]; // Adjust the type based on the actual response structure
// }

// const importWallet = async (
//     mnemonicWords: string[]
// ): Promise<string[] | false> => {
const importWallet = async (mnemonicWords: string[]) => {
    const config = {
        data: [
            {
                mnemonic: mnemonicWords,
            },
        ],
    };

    // try {
    //     const response: AxiosResponse<ImportWalletResponse> = await axios.post(
    //         `${process.env.REACT_APP_SERVER_URL}/api/importWallet`,
    //         config
    //     );

    //     return response.data.data;
    // } catch (error) {
    //     console.error("Error!", error);
    //     return false;
    // }
    return config;
};

export default importWallet;
