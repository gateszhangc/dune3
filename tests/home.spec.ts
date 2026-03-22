import { expect, test } from "@playwright/test"

test("homepage shows the rewritten editorial copy and working sections", async ({
  page,
}) => {
  await page.goto("/")

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Dune 3 is Dune: Part Three. Here's what matters now.",
    }),
  ).toBeVisible()

  await expect(
    page.getByText(
      "If you searched dune 3, you are looking for Denis Villeneuve's Dune: Part Three",
    ),
  ).toBeVisible()

  await expect(page.getByRole("link", { name: "What We Know Now" })).toBeVisible()
  await expect(page.getByRole("link", { name: "See the Timeline" })).toBeVisible()

  await page.locator("header").getByRole("link", { name: "Timeline", exact: true }).click()
  await expect(page).toHaveURL(/#timeline$/)

  await page.locator("header").getByRole("link", { name: "FAQ", exact: true }).click()
  await expect(page).toHaveURL(/#faq$/)

  await page.getByRole("button", { name: "Is there a Dune 3 trailer yet?" }).click()
  await expect(
    page.getByText(
      "The first trailer surfaced in March 2026, marking the point where the campaign shifted from production news to public rollout.",
    ),
  ).toBeVisible()

  await expect(page.getByRole("link", { name: "Open source" })).toHaveCount(4)
})

test("homepage stays usable on mobile without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Dune 3 is Dune: Part Three. Here's what matters now.",
    }),
  ).toBeVisible()

  await expect(page.getByText("What fans call it")).toBeVisible()
  await expect(page.getByRole("link", { name: "What We Know Now" })).toBeVisible()

  const hasNoHorizontalOverflow = await page.evaluate(() => {
    const { clientWidth, scrollWidth } = document.documentElement

    return scrollWidth <= clientWidth
  })

  expect(hasNoHorizontalOverflow).toBe(true)
})
