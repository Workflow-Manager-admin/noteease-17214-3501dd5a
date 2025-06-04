// PUBLIC_INTERFACE
/**
 * Renders the sidebar component.
 * @returns {HTMLElement} The sidebar element.
 */
export function renderSidebar() {
  const sidebarElement = document.createElement('div');
  sidebarElement.className = 'sidebar';

  const title = document.createElement('h2');
  title.textContent = 'My Notes';

  const notesList = document.createElement('ul');
  // Notes will be populated dynamically

  sidebarElement.appendChild(title);
  sidebarElement.appendChild(notesList);

  return sidebarElement;
}
