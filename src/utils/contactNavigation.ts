export const CONTACT_SCROLL_FLAG = 'scrollToContactOnHome';
export const CONTACT_SECTION_ID = 'contacto';

export function scrollToContactSection(block: ScrollLogicalPosition = 'end') {
  const element = document.getElementById(CONTACT_SECTION_ID);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block });
    return;
  }

  globalThis.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
}

export function markContactScrollOnHomeFlag() {
  try {
    globalThis.sessionStorage.setItem(CONTACT_SCROLL_FLAG, '1');
  } catch {
  }
}

export function consumeContactScrollOnHomeFlag() {
  try {
    const shouldScroll = globalThis.sessionStorage.getItem(CONTACT_SCROLL_FLAG) === '1';
    if (shouldScroll) {
      globalThis.sessionStorage.removeItem(CONTACT_SCROLL_FLAG);
    }
    return shouldScroll;
  } catch {
    return false;
  }
}
