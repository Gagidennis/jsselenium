const { Builder, By, Key, until } = require("selenium-webdriver");
require ("chromedriver");


async function fillOutForm() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(  process.cwd()+"/test/form.html");

    // Locate the form elements 
    let formElement = await driver.findElement(By.id("form"));
    let input1 = await formElement.findElement(By.id("input1"));
    let input2 = await formElement.findElement(By.id("input2"));
    let input3 = await formElement.findElement(By.id("input3"));
   // let input4 = await formElement.findElement(By.id("input4"));
    let dropDown1 = await formElement.findElement(By.id("browsers"));
    let dropDown2 = await formElement.findElement(By.id("cars"));
    let dropDown3 = await formElement.findElement(By.id("animals"));
    let dropDown4 = await formElement.findElement(By.id("fruits"));
    let dropDown5 = await formElement.findElement(By.id("vegetables"));
    let dropDown6 = await formElement.findElement(By.id("colors"));
    // let dropDown7 = await formElement.findElement(By.id("dropdown7"));
    // let dropDown8 = await formElement.findElement(By.id("dropdown8"));
    // let dropDown9 = await formElement.findElement(By.id("dropdown9"));
    // let submitButton = await formElement.findElement(By.id("submit-button"));
    let summary = await formElement.findElement(By.id("summary"));

    // Fill out the form
    await input1.sendKeys("Value 1");
    await input2.sendKeys("Value 2");
    await input3.sendKeys("Value 3");
    // await input4.sendKeys("Value 4");
    await dropDown1.click();
    await dropDown1.sendKeys("firefox");
    await dropDown1.sendKeys(Key.RETURN);
    await dropDown2.click();
    await dropDown2.sendKeys("audi");
    await dropDown2.sendKeys(Key.RETURN);
    await dropDown3.click();
    await dropDown3.sendKeys("dog");
    await dropDown3.sendKeys(Key.RETURN);
    await dropDown4.click();
    await dropDown4.sendKeys("orange");
    await dropDown4.sendKeys(Key.RETURN);
    await dropDown5.click();
    await dropDown5.sendKeys("onion");
    await dropDown5.sendKeys(Key.RETURN);
    await dropDown6.click();
    await dropDown6.sendKeys("blue");
    await dropDown6.sendKeys(Key.RETURN);
    // await dropDown7.click();
    // await dropDown7.sendKeys("Option 7");
    // await dropDown7.sendKeys(Key.RETURN);
    // await dropDown8.click();
    // await dropDown8.sendKeys("Option 8");
    // await dropDown8.sendKeys(Key.RETURN);
    // await dropDown9.click();
    // await dropDown9.sendKeys("Option 9");
    // await dropDown9.sendKeys(Key.RETURN);
    //await submitButton.click();
    await summary.sendKeys("summary");
    } finally {
        // await driver.quit();
        }
    }

fillOutForm();

