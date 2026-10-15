<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep each named portfolio area in a dedicated TanStack content route with its own head metadata; this makes recruiter navigation and search discoverability consistent.
- Keep professional facts and project records in the browser-safe portfolio data module; a single source supports consistent cards and future additions.
- Use the shared portfolio shell and semantic global style tokens for every portfolio page; this preserves navigation and light/dark appearance.
- The contact form prepares a LinkedIn message locally rather than transmitting submissions; there is no configured delivery service or recipient email.
- Serve the prepared CV summary as a same-origin static download; replace it with the original CV when supplied.
