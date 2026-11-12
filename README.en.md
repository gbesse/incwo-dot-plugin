# incwo plugin for dots and ChatGPT

[Français](README.md) · [Español](README.es.md)

This repository contains a portable Agent Plugin. It declares the [official incwo MCP](https://go.incwo.com/en/agents/for-your-agents/) and three workflow skills for quotes, invoice reminders, and stock. It contains no key or copy of customer data.

The plugin prepares sourced proposals. Actions that create, confirm, send, or pay require the user's request and approval, plus platform and incwo permissions. The skills preserve the user's language and source data.

## Install and check

Publish or install this folder from a plugin source supporting Agent Plugins. Then connect the incwo MCP server with your own account using the client's authentication flow. Check visible tools and first test a quote read. Run npm test to validate the local structure.

[Dots can use authorized plugins](https://learn.chatgpt.com/docs/dots), but publishing this repository on GitHub does not automatically list it in OpenAI's public directory. Connection, permissions, deployment, and behavior in a real dot remain to be tested with an eligible account. This repository does not replace ChatGPT or incwo's native safeguards.

MIT licensed.


## 2026-11-12

Offline reminder preflight checks source versions, disputes, balance, due date and contact. `node tools/reminder-preflight.mjs examples/reminder-preflight.json en` produces candidates without incwo access or sending; versions are caller supplied.
