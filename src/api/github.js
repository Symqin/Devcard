// fetch data dari api github
export const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Hmm, username tersebut tidak ditemukan di semesta GitHub!');
      }
      throw new Error(`Terjadi kesalahan sistem: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};