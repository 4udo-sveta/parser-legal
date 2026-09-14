// Статус запроса на удаление: Meta показывает человеку ссылку /data-deletion?code=...
// Код выводится только если это ровно 16 шестнадцатеричных символов, и только через textContent.
(function () {
  "use strict";

  const code = new URLSearchParams(window.location.search).get("code");
  if (!code || !/^[a-f0-9]{16}$/.test(code)) return;

  const status = document.getElementById("deletion-status");
  status.textContent =
    "Deletion request " +
    code +
    ": completed. Parser does not store data about your Threads account beyond an active session, which has been deleted.";
  status.hidden = false;
})();
