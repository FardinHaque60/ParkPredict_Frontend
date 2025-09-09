import axios from 'axios';
import { DateTime } from 'luxon';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// data viz endpoints
export const fetchData = async (garage, day) => {
  return apiClient.get(`/data?garage=${garage}&day=${day}`);
};

export const fetchSouthCampusPrediction = async () => {
  const { data, error } = await supabase
    .from('people_prediction_south_campus')
    .select('*')
    .order('id', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching South Campus prediction:", error);
    throw error;
  }

  return data;
}

// predict endpoints expect a date param
export const quickPredictRequest = (timestamp) => {
  return apiClient.get(`/quick_predict?timestamp=${timestamp}`);
};

export const predictRequest = (timestamp) => {
  return apiClient.get(`/predict?timestamp=${timestamp}`);
};

export const allModelsPredictRequest = (timestamp) => {
  return apiClient.get(`/predict_all?timestamp=${timestamp}`);
}

export const fetchPredictions = async (time, setPredictionTime, setPredictions, setIsLoading) => {
  try {
    const predictionTime = DateTime.fromFormat(time, 'HH:mm').setZone("America/Los_Angeles");
    const response = await predictRequest(predictionTime.toISO());
    setPredictionTime(predictionTime);
    setPredictions(response.data.predictions);    
    // console.log("Predictions:", response.data);  
  } catch (err) {
    console.error("Error fetching predictions:", err);
    window.alert("Error fetching predictions. Please try again later.");
  } finally {
    setIsLoading(false);
  }
};

export const fetchQuickPredictions = async (predictionTime, setPredictionTime, setPredictions, setIsLoading) => {
  try {
    const response = await quickPredictRequest(predictionTime.toISO());
    setPredictionTime(predictionTime.plus({ minutes: 30 }));
    setPredictions(response.data.predictions.next_30_mins);
    // console.log("Quick Predictions:", response.data);
  } catch (err) {
    console.error("Error fetching quick predictions:", err);
    window.alert("Error fetching predictions. Please try again later.");
  } finally {
    setIsLoading(false);
  }
};