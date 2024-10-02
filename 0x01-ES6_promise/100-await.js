import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto(); // Call uploadPhoto
    const user = await createUser(); // Call createUser

    // Return an object with the responses
    return {
      photo,
      user,
    };
  } catch (error) {
    // In case of an error, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
