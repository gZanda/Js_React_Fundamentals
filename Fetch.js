// Fetch API

async function fetchData() {
    try {
      const response = await fetch('http://localhost:8080/notes');
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