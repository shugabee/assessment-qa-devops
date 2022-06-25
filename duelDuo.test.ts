
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Div with choices shows up when Draw is clicked', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click();
    await driver.findElement(By.xpath('//div[@id="choices"]'));
})

test('Clicking Add to Duo displays div', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click();
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click;
    await driver.findElement(By.xpath('//div[@id="player-duo"]'));
})

test('Removed from duo button', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click();
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click;
    await driver.findElement(By.xpath('//button[@class="bot-btn"]')).click;
    await driver.findElement(By.xpath('//div[@id="choices"]'));
})