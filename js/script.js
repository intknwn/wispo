(function () {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (vw < 767) {
    const table = document.querySelector(`#table`);

    table.addEventListener(`click`, function (e) {
      let target = e.target;
      let targetClass = e.target.className;

      while (true) {
        if (target === table) return;

        const isTitle = target.classList.contains(`table__title`);
        const isGroupTitle = target.classList.contains(`table__group-title`);

        if (isTitle || isGroupTitle) break;

        target = target.parentElement;
      }

      const sibling = target.nextElementSibling;
      sibling.classList.toggle(`visually-hidden`);
    });
  }
})();
