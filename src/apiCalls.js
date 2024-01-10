export const getJobStoryIds = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );
    if (!response.ok) {
      throw new Error(
        `Error fetching job stories: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching job story IDs:", error);
    throw error;
  }
};

export const getJobStoryDetails = async (id) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    if (!response.ok) {
      throw new Error(
        `Error fetching job story details: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching job story with ID ${id}:`, error);
    throw error;
  }
};
