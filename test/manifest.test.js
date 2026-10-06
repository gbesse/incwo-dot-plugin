import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

test("portable plugin wires the official incwo MCP and three multilingual skills", async () => {
  const plugin = JSON.parse(await readFile(new URL("../plugin.json", import.meta.url)));
  const mcp = JSON.parse(await readFile(new URL("../mcp.json", import.meta.url)));
  assert.equal(plugin.name, "incwo-business-workflows");
  assert.equal(mcp.mcpServers.incwo.type, "streamable-http");
  assert.equal(mcp.mcpServers.incwo.url, "https://www.incwo.com/mcp");
  assert.equal(JSON.stringify({ plugin, mcp }).includes("Bearer "), false);
  const skills = await readdir(new URL("../skills/", import.meta.url));
  assert.equal(skills.length, 3);
  for (const skill of skills) {
    const body = await readFile(new URL("../skills/" + skill + "/SKILL.md", import.meta.url), "utf8");
    for (const language of ["## Français", "## English", "## Español"]) assert.ok(body.includes(language));
    assert.match(body, /approval|validation|aprobación/);
  }
});
