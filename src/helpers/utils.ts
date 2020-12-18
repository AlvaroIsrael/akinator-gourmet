const userAnswer = (choice: string): boolean => {
  return choice.trim().toLowerCase() === 's';
};

export default userAnswer;
