import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Create an array of promises
  const promises = [
    signUpUser(firstName, lastName), // Call signUpUser
    uploadPhoto(fileName), // Call uploadPhoto
  ];

  // Use Promise.allSettled to wait for both promises to settle
  const results = await Promise.allSettled(promises);

  // Map the results to the desired structure
  return results.map((result) => ({
    status: result.status, // Status of the promise
    value: result.status === 'fulfilled' ? result.value : result.reason, // Value or error
  }));
}
