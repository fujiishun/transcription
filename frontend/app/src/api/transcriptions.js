import axiosInstance from "../http/axiosInstance";

// 文字起こしの一覧を取得するAPI
export const fetchTranscriptionList = async () => {
  try {
    const response = await axiosInstance.get("/transcriptionList/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch transcriptions:", error);
    throw error;
  }
};
