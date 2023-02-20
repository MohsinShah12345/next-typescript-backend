import userModel from "../../models/auth";
export const updateUser = async (
  email: string,
  data: any
): Promise<any | void> => {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { email: email },
      { ...data },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};
export const deleteUser = async (id: any): Promise<any | void> => {
  try {
    const deleteUser = await userModel.findByIdAndDelete(id);
    return deleteUser;
  } catch (error) {
    throw error;
  }
};

export const singleUser = async (data: any): Promise<any | void> => {
  try {
    let user = await userModel.findById(data);
    return user;
  } catch (error) {
    throw error;
  }
};
export const findByEmail = async (email: string): Promise<any | void> => {
  try {
    let user = await userModel.findOne({ email: email });
    return user;
  } catch (error) {
    throw error;
  }
};
export const findAllUser = async (): Promise<any | void> => {
  try {
    const users = await userModel.find();
    return users;
  } catch (error) {
    throw error;
  }
};
export const updateByObject = async (
  filters: any,
  updatedObject: any
): Promise<any | void> => {
  try {
    const user = await userModel.findOneAndUpdate(
      { ...filters },
      { ...updatedObject },
      { new: true }
    );
    return user;
  } catch (error) {
    throw error;
  }
};
