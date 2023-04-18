import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }

  const uploadUser = {
    photo,
    user,
  };
  return uploadUser;
}

export default asyncUploadUser;
