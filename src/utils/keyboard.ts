
export const handleKeyboardEvent = (
  event: React.KeyboardEvent,
  callback: () => void
) => {
  // Trigger the callback on Enter or Space key press
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    callback();
  }
};
