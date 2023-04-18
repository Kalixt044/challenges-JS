export function protectDog(dog) {
const protectedDog = Object.freeze(Object.assign({}, dog));
  return protectedDog;
}
