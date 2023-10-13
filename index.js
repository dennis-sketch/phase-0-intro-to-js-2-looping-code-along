// Code your solutions in this file
// writeCards function
function writeCards(namesArray, event) {
    const thankYouMessages = [];
    for (const name of namesArray) {
      thankYouMessages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  // countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  const names = ['Alice', 'Bob', 'Charlie'];
  const event = 'birthday';
  
  // Calling writeCards and logging the result
  const messages = writeCards(names, event);
  console.log(messages);
  
  // Calling countDown and logging the countdown
  countDown(5);
  