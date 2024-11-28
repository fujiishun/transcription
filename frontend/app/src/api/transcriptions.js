import axiosInstance from "../http/axiosInstance";

// 文字起こしの一覧を取得するAPI
export const fetchTranscriptionList = async () => {
  try {
    const response = await axiosInstance.get("/transcriptionList/");
    return response.data;
  } catch (error) {
    console.error("文字起こしリストの取得に失敗しました：", error);
    throw error;
  }
};

// 音声データを送信して文字起こしを作成するAPI
export const createTranscription = async (audioBlob) => {
  const formData = new FormData();
  formData.append("audio", audioBlob, "recording.webm");

  try {
    const response = await axiosInstance.post(
      "/transcriptionCreate/",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("文字起こしの作成に失敗しました：", error);
    throw error;
  }
};
