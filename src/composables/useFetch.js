import { ref } from 'vue';
import axiosR from '@/api/http';

export function useFetch(url) {
  const data = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await axiosR.get(url);
      data.value = response.data;  // Axios automatically parses JSON
    } catch (err) {
      error.value = err.response ? err.response.data.message : err.message;
    } finally {
      isLoading.value = false;
    }
  };

  // Automatically fetch data when the composable is used
  fetchData();

  return {
    data,
    isLoading,
    error,
  };
}