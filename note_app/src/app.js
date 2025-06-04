import { renderTopBar } from './components/TopBar.js';
import { renderSidebar } from './components/Sidebar.js';
import { renderNoteView } from './components/NoteView.js';

// PUBLIC_INTERFACE
/**
 * Initializes the main application layout and renders the components.
 * @param {HTMLElement} appRoot - The root HTML element to render the app into.
 */
export function initializeApp(appRoot) {
  if (!appRoot) {
    console.error("Application root element not found!");
    return;
  }

  // Create main layout structure
  const topBar = renderTopBar();
  const sidebar = renderSidebar();
  const noteView = renderNoteView();

  const appContent = document.createElement('div');
  appContent.className = 'app-content';
  appContent.appendChild(sidebar);
  appContent.appendChild(noteView);

  appRoot.innerHTML = ''; // Clear previous content
  appRoot.appendChild(topBar);
  appRoot.appendChild(appContent);

  // Placeholder for event listeners and dynamic content updates
  console.log('NoteEase App Initialized');

  // Example: Simulate loading notes into the sidebar
  const notesList = sidebar.querySelector('ul');
  if (notesList) {
    const sampleNotes = [
      { id: 1, title: 'Grocery List', content: 'Milk, Eggs, Bread...' },
      { id: 2, title: 'Meeting Notes', content: 'Discuss project milestones...' },
      { id: 3, title: 'Book Ideas', content: 'A sci-fi novel about...' }
    ];

    sampleNotes.forEach(note => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<h3>${note.title}</h3><p>${note.content.substring(0, 30)}...</p>`;
      listItem.addEventListener('click', () => {
        const noteViewContainer = document.querySelector('.main-content');
        if (noteViewContainer) {
            noteViewContainer.innerHTML = `
                <h2>${note.title}</h2>
                <div class="note-editor">
                    <input type="text" value="${note.title}" placeholder="Note Title" />
                    <textarea placeholder="Note Content...">${note.content}</textarea>
                    <button>Save</button>
                    <button class="delete">Delete</button>
                </div>
            `;
        }
      });
      notesList.appendChild(listItem);
    });
  }
}
