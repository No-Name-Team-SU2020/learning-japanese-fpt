import axios from "../axios";

export const getAllQuizPresetRequest = async () => {
  return axios.get("/admin/quiz-presets");
};

export const createQuizPresetRequest = async (data) => {
  return axios.post("/admin/quiz-presets", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const updateQuizPresetRequest = async (presetId, data) => {
  return axios.post(`/admin/quiz-presets/${presetId}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const deleteQuizPresetRequest = async (presetId) => {
  return axios.delete("/admin/quiz-presets/" + presetId);
};

export const updateQuizPresetStatusRequest = async (is_chosen, presetId) => {
  return axios.patch(
    "/admin/quiz-presets/" + presetId,
    {
      is_chosen,
    },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};
