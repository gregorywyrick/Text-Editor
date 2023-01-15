const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
  });
  
  butInstall.addEventListener(`click`, async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
 
    promptEvent.prompt();
  
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
  });
  
  butInstall.addEventListener('click', async () => {});
  
  window.addEventListener('appinstalled', (event) => {
    console.log(`install hit`);
    window.deferredPrompt = null;
  });