export function proccessDate(dateString) {
  console.log(dateString)
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
