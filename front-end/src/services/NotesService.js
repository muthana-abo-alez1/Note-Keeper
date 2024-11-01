const API_BASE_URL = "http://localhost:3001";

export const getNotes = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/notes?page=${page}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch notes: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    throw error;
  }
};

export const addNote = async (noteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to add note:", error);
    throw error;
  }
};

export const updateNote = async (id, noteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to update note:", error);
    throw error;
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return { message: "Note deleted successfully", id };
  } catch (error) {
    console.error("Failed to delete note:", error);
    throw error;
  }
};

export const searchNotes = async (query, page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/notes/search?query=${encodeURIComponent(
        query
      )}&page=${page}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`Failed to search notes: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to search notes:", error);
    throw error;
  }
};
