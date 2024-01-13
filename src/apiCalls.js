export const getJobStoryIds = () => {
  return fetch("https://hacker-news.firebaseio.com/v0/jobstories.json").then(
    (response) => {
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error("Error: There was a problem with the request.");
        } else if (response.status >= 500) {
          throw new Error("Error: Please try again later.");
        } else {
          throw new Error("Error: Unable to fulfill request.");
        }
      }
      return response.json();
    }
  );
};

export const getJobStoryDetails = (id) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
    (response) => {
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error("Error: There was a problem with the request.");
        } else if (response.status >= 500) {
          throw new Error("Error: Please try again later.");
        } else {
          throw new Error("Error: Unable to fulfill request.");
        }
      }
      return response.json();
    }
  );
};
