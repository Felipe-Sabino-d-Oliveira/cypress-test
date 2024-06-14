Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora os erros específicos do ResizeObserver
    if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
      return false
    }
  });  