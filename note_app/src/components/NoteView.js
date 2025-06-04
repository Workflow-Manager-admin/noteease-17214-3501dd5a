// PUBLIC_INTERFACE
/**
 * Renders the note view component.
 * @returns {HTMLElement} The note view element.
 */
export function renderNoteView() {
  const noteViewElement = document.createElement('div');
  noteViewElement.className = 'main-content'; // Using main-content class for styling

  const placeholderText = document.createElement('h2');
  placeholderText.textContent = 'Select a note to view or create a new one.';
  
  noteViewElement.appendChild(placeholderText);

  return noteViewElement;
}
