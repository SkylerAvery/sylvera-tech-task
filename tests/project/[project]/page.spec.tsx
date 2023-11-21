/**
 * @jest-environment jsdom
 */
import ProjectPage from "@/app/project/[project]/page";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

const unmockedFetch = global.fetch

const testEntry = {
  device_id: '1',
  gps_lat: 0.1,
  gps_lon: 0.2,
  timestamp: Date.now().toString()
}

describe('/project/[project]', () => {
  afterEach(() => {
    global.fetch = unmockedFetch
  });

  describe('when no project is provided', () => {
    it('will throw an error', () => { });
  });

  describe('when a project is provided', () => {
    describe('when the data fails to retrive', () => {
      it('will throw an error', () => { });
    });

    describe('when the data is retrieved', () => {
      it('will render the data retrieved', async () => {
        const testData = {
          feeds: [testEntry, testEntry, testEntry, testEntry, testEntry],
          num_of_records: 5,
        }

        const expectedResult = {
          ok: true,
          json: () => Promise.resolve(testData)
        }
        global.fetch = jest.fn(() =>
          Promise.resolve(expectedResult)
        ) as jest.Mock

        const page = await ProjectPage({ params: { project: 'airbox' } })

        render(page)
        expect(screen.getByRole('heading', {
          name: 'airbox',
        })).toBeInTheDocument();
        expect(screen.getAllByRole('row')).toHaveLength(6);
      });
    });

    describe('when more than 10 entires are retrieved', () => {
      it('will show the top 10 entries', async () => {
        const testData = {
          feeds: [
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry,
            testEntry
          ],
          num_of_records: 15,
        }

        const expectedResult = {
          ok: true,
          json: () => Promise.resolve(testData)
        }
        global.fetch = jest.fn(() =>
          Promise.resolve(expectedResult)
        ) as jest.Mock

        const page = await ProjectPage({ params: { project: 'airbox' } })

        render(page)
        expect(screen.getAllByRole('row')).toHaveLength(11);
      });
    })
  });
});