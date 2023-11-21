import { render, screen } from '@testing-library/react'
import FeedEntry from "@/app/components/feedEntry"

describe('<FeedEntry />', () => {
  const timestamp = Date.now().toFixed()

  const testData = {
    device_id: '1',
    gps_lat: 0.2,
    gps_lon: 0.1,
    timestamp
  }
  describe('when all data is provided', () => {
    it('will render the provided data entries', () => {
      render(<FeedEntry data={testData} />)
      expect(screen.getAllByRole('cell')[0]).toHaveTextContent('1')
      expect(screen.getAllByRole('cell')[1]).toHaveTextContent('0.2')
      expect(screen.getAllByRole('cell')[2]).toHaveTextContent('0.1')
      expect(screen.getAllByRole('cell')[3]).toHaveTextContent(timestamp)
    });
  });

  describe('when Device ID is missing in response', () => {
    it('will display a message in the entry table', () => {
      const invalidData = {
        ...testData,
        device_id: undefined
      }
      render(<FeedEntry data={invalidData} />)
      expect(screen.getAllByRole('cell')[0]).toHaveTextContent('Device ID of entry not found')
    });
  });

  describe('when Latitude is missing in response', () => {
    it('will display a message in the entry table', () => {
      const invalidData = {
        ...testData,
        gps_lat: undefined
      }
      render(<FeedEntry data={invalidData} />)
      expect(screen.getAllByRole('cell')[1]).toHaveTextContent('Latitude data of entry not found')
    });
  });

  describe('when Longitude is missing in response', () => {
    it('will display a message in the entry table', () => {
      const invalidData = {
        ...testData,
        gps_lon: undefined
      }
      render(<FeedEntry data={invalidData} />)
      expect(screen.getAllByRole('cell')[2]).toHaveTextContent('Longitude data of entry not found')
    });
  });

  describe('when Timestamp is missing in response', () => {
    it('will display a message in the entry table', () => {
      const invalidData = {
        ...testData,
        timestamp: undefined
      }
      render(<FeedEntry data={invalidData} />)
      expect(screen.getAllByRole('cell')[3]).toHaveTextContent('Timestamp of entry not found')
    });
  });
});