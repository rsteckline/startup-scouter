export const getJobStoryIds = () => {
    return fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching job story IDs: ${response.status} ${response.statusText}`);
        }
        return response.json();
      });
  };
  
  export const getJobStoryDetails = (id) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching job story details: ${response.status} ${response.statusText}`);
        }
        return response.json();
      });
  };