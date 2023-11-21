/**
 * @jest-environment jsdom
 */
import ProjectsPage from "@/app/projects/page";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

const unmockedFetch = global.fetch

describe('/projects', () => {
  afterEach(() => {
    global.fetch = unmockedFetch
  })

  describe('when the projects data fails to retrive', () => {
    it('will throw an error', () => { })
  })

  describe('when the projects data is retrieved', () => {
    describe('when there is an issue parsing the data', () => {
      it('will throw an error', () => { })
    })

    describe('when the data is parsed', () => {
      const testData = "airbox\nmaps\nfw_sensor\nrescue_tw\nharvard_iaq\n"

      beforeEach(() => {
        const expectedResult = {
          ok: true,
          text: () => Promise.resolve(testData)
        }
        global.fetch = jest.fn(() =>
          Promise.resolve(expectedResult)
        ) as jest.Mock
      })

      it('will display each project', async () => {
        const page = await ProjectsPage()
        render(page)

        expect(screen.getAllByRole('link')).toHaveLength(5)
        expect(screen.getByRole('link', {
          name: 'airbox'
        })).toHaveProperty('href', 'http://localhost/project/airbox')
      })
    })
  })
})