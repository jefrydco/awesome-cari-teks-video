import puppeteer from 'puppeteer'
import pSeries from 'p-series'
import data from '@awesome-cari-teks-video/data'
import { join } from 'path'

(async () => {
  const browser = await puppeteer.launch()

  async function visit(url: string, githubId: string) {
    const page = await browser.newPage()
    page.setViewport({ width: 1920, height: 1080 })
    await page.goto(url)
    await page.screenshot({ path: join(__dirname, '../app/assets/images/screencapt/', `${githubId}.png`) })
    await page.close()
  }

  await pSeries(data.map((datum) => () => visit(datum['Tautan Aplikasi'], datum['githubId'])))

  await browser.close()
})()
