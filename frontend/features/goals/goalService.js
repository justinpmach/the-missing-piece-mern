import axios from 'axios';

const API_URL = 'http://localhost:3000/api/goals/';

const createGoal = async (goalData, token) => {
  const response = await axios.post(API_URL, goalData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const getGoals = async token => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
};

export default goalService;
