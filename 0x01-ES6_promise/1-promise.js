export default function getFullResponseFromAPI(success) {
  const Prom = new Promise((resolve, reject) => {
    if (success) {
      resolve(
        {
	  status: 200,
	  body: 'Success',
	},
      );
    } else {
      reject(new Error('the fake API is not working Currently'));
    }
  });
  return Prom;
}
