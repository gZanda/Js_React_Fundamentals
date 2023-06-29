// Fetch API

async function fetchData() {
    try {
      // Fetch para uma API teste
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  fetchData();