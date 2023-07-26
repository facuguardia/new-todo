import { getConnection } from "./../database/database";

// Get tasks
const getTasks = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM task_list");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong!",
    });
  }
};

export const methods = {
  getTasks,
};
