This repo has been modified to create a modern dark card-based UI for atavishaala.

Requested: remove these changes.

Manual rollback plan (since no VCS/backup info is available):
1) Restore original placeholders in pages:
   - home/about/services/contact/login/profile components back to simple <h1>u are on ...</h1>.
2) Restore original Card implementation:
   - card.css back to the earlier light card styling.
   - card.jsx back to the earlier version.
3) Restore original Navbar styling:
   - navbar.css back to the earlier black bar + circular icons styling.
4) Restore original global index.css and App.css if they were changed.
5) Remove/revert SmallContainer if it was recreated.

If the original contents are available in chat or backup, apply exact reversions.

