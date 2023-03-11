function pageFoot() {
  const footer = document.createElement('footer');
  const footerGitHub = document.createElement('div');
  footerGitHub.classList.add('footer-github');
  const gitLink = document.createElement('a');
  gitLink.setAttribute('href', 'linkurl');
  gitLink.textContent = 'goldjared';

  content.append(footer);
  footer.append(footerGitHub);
  footerGitHub.append(gitLink);
}

export {pageFoot};